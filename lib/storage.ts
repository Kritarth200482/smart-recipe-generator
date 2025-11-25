// Local storage utilities for user preferences and favorites

export interface UserPreferences {
  favoriteRecipes: string[];
  ratedRecipes: Record<string, number>; // recipeId -> rating (1-5)
  dietaryPreferences: string[];
}

const STORAGE_KEY = 'recipeGenerator_preferences';

export function getUserPreferences(): UserPreferences {
  if (typeof window === 'undefined') {
    return { favoriteRecipes: [], ratedRecipes: {}, dietaryPreferences: [] };
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { favoriteRecipes: [], ratedRecipes: {}, dietaryPreferences: [] };
    }
  }
  
  return { favoriteRecipes: [], ratedRecipes: {}, dietaryPreferences: [] };
}

export function saveUserPreferences(prefs: UserPreferences): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function toggleFavorite(recipeId: string): void {
  const prefs = getUserPreferences();
  const index = prefs.favoriteRecipes.indexOf(recipeId);
  
  if (index > -1) {
    prefs.favoriteRecipes.splice(index, 1);
  } else {
    prefs.favoriteRecipes.push(recipeId);
  }
  
  saveUserPreferences(prefs);
}

export function rateRecipe(recipeId: string, rating: number): void {
  const prefs = getUserPreferences();
  prefs.ratedRecipes[recipeId] = rating;
  saveUserPreferences(prefs);
}

export function isFavorite(recipeId: string): boolean {
  const prefs = getUserPreferences();
  return prefs.favoriteRecipes.includes(recipeId);
}

export function getRating(recipeId: string): number | null {
  const prefs = getUserPreferences();
  return prefs.ratedRecipes[recipeId] || null;
}

// Get personalized recipe suggestions based on ratings
export function getPersonalizedSuggestions(recipeIds: string[]): string[] {
  const prefs = getUserPreferences();
  const ratings = prefs.ratedRecipes;
  
  // Sort recipes by rating (highest first)
  const sorted = recipeIds
    .map(id => ({ id, rating: ratings[id] || 0 }))
    .sort((a, b) => b.rating - a.rating);
  
  // Return top 3-5 rated recipes
  return sorted.slice(0, 5).map(r => r.id);
}

