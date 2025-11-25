'use client';

import { useState, useEffect } from 'react';
import IngredientInput from '@/components/IngredientInput';
import RecipeCard from '@/components/RecipeCard';
import FilterPanel from '@/components/FilterPanel';
import { findMatchingRecipes, recognizeIngredientsFromImage } from '@/lib/recipeMatcher';
import { MatchResult } from '@/lib/recipeMatcher';
import { getPersonalizedSuggestions } from '@/lib/storage';
import {
  Loader2,
  Sparkles,
  Camera,
  ChefHat,
  Wand2,
  UtensilsCrossed,
  Star,
  SlidersHorizontal
} from 'lucide-react';

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>('');
  const [maxTime, setMaxTime] = useState<number | null>(null);
  const [maxCalories, setMaxCalories] = useState<number | null>(null);
  const [servingSizes, setServingSizes] = useState<Record<string, number>>({});
  const [showPersonalized, setShowPersonalized] = useState(false);

  useEffect(() => {
    if (ingredients.length > 0) {
      setIsLoading(true);
      // Simulate API delay for better UX
      setTimeout(() => {
        const results = findMatchingRecipes(ingredients, dietaryPreferences, {
          difficulty: difficulty || undefined,
          maxTime: maxTime || undefined,
          maxCalories: maxCalories || undefined,
        });
        setMatches(results);
        setIsLoading(false);
      }, 300);
    } else {
      setMatches([]);
    }
  }, [ingredients, dietaryPreferences, difficulty, maxTime, maxCalories]);

  const handleImageUpload = async (file: File) => {
    setIsProcessingImage(true);
    try {
      const recognized = await recognizeIngredientsFromImage(file);
      setIngredients(prev => {
        const combined = [...prev];
        recognized.forEach(ing => {
          if (!combined.includes(ing)) {
            combined.push(ing);
          }
        });
        return combined;
      });
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      setIsProcessingImage(false);
    }
  };

  const handleServingSizeChange = (recipeId: string, size: number) => {
    setServingSizes(prev => ({ ...prev, [recipeId]: size }));
  };

  const getServingSize = (recipeId: string, defaultServings: number) => {
    return servingSizes[recipeId] || defaultServings;
  };

  const personalizedRecipeIds =
    showPersonalized && matches.length > 0
      ? getPersonalizedSuggestions(matches.map(m => m.recipe.id))
      : [];

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroStats = [
    { label: 'Smart Recipes', value: '25+', subtext: 'Global cuisines' },
    { label: 'Match Accuracy', value: '92%', subtext: 'Ingredient coverage' },
    { label: 'Dietary Modes', value: '4', subtext: 'Vegan to gluten-free' }
  ];

  const highlights = [
    {
      title: 'Ingredient Intelligence',
      description: 'Understands photos, handles substitutions, and prioritizes matches.',
      icon: Wand2
    },
    {
      title: 'Chef-Ready Guidance',
      description: 'Step-by-step instructions, nutrition, and serving scaling built-in.',
      icon: ChefHat
    },
    {
      title: 'Personalized Taste',
      description: 'Ratings, favorites, and tailored picks learn what you enjoy.',
      icon: Star
    }
  ];

  const howItWorks = [
    {
      title: 'Capture or Type Ingredients',
      description: 'Upload a photo or type ingredients manually, then add dietary needs.',
      icon: Camera
    },
    {
      title: 'Dial In Filters',
      description: 'Limit by cooking time, difficulty, and calories for perfect matches.',
      icon: SlidersHorizontal
    },
    {
      title: 'Cook With Confidence',
      description: 'Follow the detailed cards, adjust servings, and save your favorites.',
      icon: UtensilsCrossed
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
        <header className="relative z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-blue-300 text-sm uppercase tracking-[0.3em]">AI Kitchen Copilot</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-2 mt-2">
                  <Sparkles className="text-blue-400" />
                  Smart Recipe Generator
                </h1>
                <p className="text-slate-300 mt-3 max-w-2xl">
                  Upload fridge photos, set your preferences, and instantly get chef-crafted
                  recipes that match your pantry and lifestyle.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                <button
                  onClick={() => scrollToSection('ingredients-section')}
                  className="px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition shadow-lg shadow-blue-500/30"
                >
                  Start Cooking
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-sm text-slate-300">{stat.label}</dt>
                  <dd className="text-2xl font-semibold text-white">{stat.value}</dd>
                  <p className="text-xs text-slate-400">{stat.subtext}</p>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
          <section id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/80 to-purple-600/70 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">How it works</p>
              <div className="space-y-6">
                {howItWorks.map(({ title, description, icon: Icon }, index) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white font-semibold">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Step {index + 1}: {title}</p>
                      <p className="text-slate-100 text-sm mt-1">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Pro tips</p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li>• Combine manual ingredients with a photo for richer matches.</li>
                <li>• Toggle personalized mode after rating recipes to train suggestions.</li>
                <li>• Use serving controls to automatically scale ingredients and nutrition.</li>
                <li>• Adjust filters to pivot between quick bites and slow weekend cooking.</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <FilterPanel
                dietaryPreferences={dietaryPreferences}
                onDietaryChange={setDietaryPreferences}
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
                maxTime={maxTime}
                onMaxTimeChange={setMaxTime}
                maxCalories={maxCalories}
                onMaxCaloriesChange={setMaxCalories}
              />
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div id="ingredients-section" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-[0.3em]">Input Station</p>
                    <h2 className="text-3xl font-semibold text-white">Your Ingredients</h2>
                  </div>
                  <div className="text-sm text-slate-300">
                    Tip: start with 3-5 items for instant, high-confidence suggestions.
                  </div>
                </div>
                <IngredientInput
                  ingredients={ingredients}
                  onIngredientsChange={setIngredients}
                  onImageUpload={handleImageUpload}
                  isProcessingImage={isProcessingImage}
                />
              </div>

              {matches.length > 0 && (
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-[0.3em]">Curated Results</p>
                    <h2 className="text-3xl font-semibold text-white">
                      {showPersonalized ? 'Personalized picks' : 'Best matches'} ({matches.length})
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowPersonalized(!showPersonalized)}
                    className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-400 transition text-sm"
                  >
                    {showPersonalized ? 'Show all recipes' : 'Show my favorites'}
                  </button>
                </div>
              )}

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                  <Loader2 className="animate-spin text-blue-300" size={48} />
                  <p className="text-slate-200 mt-4">Scanning your pantry for the perfect match...</p>
                </div>
              )}

              {!isLoading && ingredients.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center backdrop-blur">
                  <p className="text-slate-200 text-lg font-semibold">Start with what you have.</p>
                  <p className="text-slate-400 mt-2">
                    Add a few ingredients or snap a photo to unlock instant suggestions, substitutions, and nutrition.
                  </p>
                </div>
              )}

              {!isLoading && ingredients.length > 0 && matches.length === 0 && (
                <div className="rounded-3xl border border-rose-200/40 bg-rose-500/10 p-8 backdrop-blur text-center">
                  <p className="text-rose-100 text-lg font-semibold">No perfect matches yet.</p>
                  <p className="text-rose-100/80 mt-2">
                    Try relaxing the filters, add one more ingredient, or enable substitutions to broaden results.
                  </p>
                </div>
              )}

              {!isLoading && matches.length > 0 && (
                <div className="space-y-6">
                  {matches
                    .filter(
                      (match) => !showPersonalized || personalizedRecipeIds.includes(match.recipe.id)
                    )
                    .map((match) => (
                      <RecipeCard
                        key={match.recipe.id}
                        match={match}
                        servingSize={getServingSize(match.recipe.id, match.recipe.servings)}
                        onServingSizeChange={handleServingSizeChange}
                      />
                    ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-400 text-sm">
          Smart Recipe Generator • Ingredient intelligence for home chefs
        </div>
      </footer>
    </div>
  );
}

