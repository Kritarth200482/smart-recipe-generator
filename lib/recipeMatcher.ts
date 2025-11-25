import { recipes, Recipe, substitutions } from '@/data/recipes';

export interface MatchResult {
  recipe: Recipe;
  matchScore: number;
  matchedIngredients: string[];
  missingIngredients: string[];
  substitutionSuggestions: string[];
}

// Normalize ingredient names for matching
function normalizeIngredient(ingredient: string): string {
  return ingredient.toLowerCase().trim();
}

// Check if two ingredients match (handles plurals, variations)
function ingredientsMatch(userIngredient: string, recipeIngredient: string): boolean {
  const user = normalizeIngredient(userIngredient);
  const recipe = normalizeIngredient(recipeIngredient);
  
  // Exact match
  if (user === recipe) return true;
  
  // Check if one contains the other (for compound ingredients)
  if (user.includes(recipe) || recipe.includes(user)) return true;
  
  // Handle plurals
  if (user === recipe + 's' || recipe === user + 's') return true;
  if (user === recipe.slice(0, -1) || recipe === user.slice(0, -1)) return true;
  
  return false;
}

// Find matching recipes based on available ingredients
export function findMatchingRecipes(
  availableIngredients: string[],
  dietaryPreferences: string[] = [],
  filters: {
    difficulty?: string;
    maxTime?: number;
    maxCalories?: number;
  } = {}
): MatchResult[] {
  const normalizedAvailable = availableIngredients.map(normalizeIngredient);
  const results: MatchResult[] = [];

  for (const recipe of recipes) {
    // Check dietary preferences
    if (dietaryPreferences.length > 0) {
      const matchesDietary = dietaryPreferences.some(pref => 
        recipe.dietary.includes(pref.toLowerCase())
      );
      if (!matchesDietary && dietaryPreferences.length > 0) continue;
    }

    // Check filters
    if (filters.difficulty && recipe.difficulty !== filters.difficulty) continue;
    if (filters.maxTime && recipe.cookingTime > filters.maxTime) continue;
    if (filters.maxCalories && recipe.nutritionalInfo.calories > filters.maxCalories) continue;

    // Calculate match score
    const matchedIngredients: string[] = [];
    const missingIngredients: string[] = [];
    const substitutionSuggestions: string[] = [];

    for (const recipeIngredient of recipe.ingredients) {
      let found = false;
      
      // Check direct match
      for (const available of normalizedAvailable) {
        if (ingredientsMatch(available, recipeIngredient)) {
          matchedIngredients.push(recipeIngredient);
          found = true;
          break;
        }
      }

      // Check substitutions if not found
      if (!found) {
        const normalizedRecipeIng = normalizeIngredient(recipeIngredient);
        for (const [key, subs] of Object.entries(substitutions)) {
          if (ingredientsMatch(normalizedRecipeIng, key)) {
            for (const sub of subs) {
              if (normalizedAvailable.some(avail => ingredientsMatch(avail, sub))) {
                matchedIngredients.push(recipeIngredient);
                substitutionSuggestions.push(`${recipeIngredient} → ${sub}`);
                found = true;
                break;
              }
            }
          }
        }
      }

      if (!found) {
        missingIngredients.push(recipeIngredient);
      }
    }

    // Calculate match score (balanced between recipe coverage and available ingredient usage)
    const recipeCoverage = matchedIngredients.length / recipe.ingredients.length;
    const availableCoverage = normalizedAvailable.length > 0
      ? matchedIngredients.length / normalizedAvailable.length
      : 0;
    const matchScore = Math.round(((recipeCoverage + availableCoverage) / 2) * 100);

    // Only include recipes when at least one ingredient matches and score is reasonable
    if (matchedIngredients.length > 0 && matchScore >= 20) {
      results.push({
        recipe,
        matchScore,
        matchedIngredients,
        missingIngredients,
        substitutionSuggestions
      });
    }
  }

  // Sort by match score (highest first)
  return results.sort((a, b) => b.matchScore - a.matchScore);
}

// Simulate ingredient recognition from image
export async function recognizeIngredientsFromImage(imageFile: File): Promise<string[]> {
  // In a real implementation, this would call an AI service like:
  // - Google Cloud Vision API
  // - AWS Rekognition
  // - Clarifai
  // - Custom ML model
  
  // For this demo, we'll simulate with a delay and return common ingredients
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock recognition - in production, this would use actual image recognition
  const mockIngredients = [
    'tomatoes', 'onion', 'garlic', 'bell peppers', 'chicken',
    'eggs', 'milk', 'cheese', 'bread', 'pasta'
  ];
  
  // Return 3-5 random ingredients as a simulation
  const count = Math.floor(Math.random() * 3) + 3;
  const selected: string[] = [];
  for (let i = 0; i < count; i++) {
    const random = mockIngredients[Math.floor(Math.random() * mockIngredients.length)];
    if (!selected.includes(random)) {
      selected.push(random);
    }
  }
  
  return selected;
}

