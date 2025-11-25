'use client';

import { useState } from 'react';
import { MatchResult } from '@/lib/recipeMatcher';
import { Heart, Clock, Users, Flame, Star, ChefHat } from 'lucide-react';
import { toggleFavorite, isFavorite, rateRecipe, getRating } from '@/lib/storage';

interface RecipeCardProps {
  match: MatchResult;
  servingSize: number;
  onServingSizeChange: (recipeId: string, size: number) => void;
}

export default function RecipeCard({ match, servingSize, onServingSizeChange }: RecipeCardProps) {
  const [isFav, setIsFav] = useState(isFavorite(match.recipe.id));
  const [rating, setRating] = useState(getRating(match.recipe.id) || 0);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleFavorite = () => {
    toggleFavorite(match.recipe.id);
    setIsFav(!isFav);
  };

  const handleRate = (newRating: number) => {
    rateRecipe(match.recipe.id, newRating);
    setRating(newRating);
  };

  const adjustedNutrition = {
    calories: Math.round((match.recipe.nutritionalInfo.calories * servingSize) / match.recipe.servings),
    protein: Math.round((match.recipe.nutritionalInfo.protein * servingSize) / match.recipe.servings),
    carbs: Math.round((match.recipe.nutritionalInfo.carbs * servingSize) / match.recipe.servings),
    fat: Math.round((match.recipe.nutritionalInfo.fat * servingSize) / match.recipe.servings),
  };

  const difficultyColors = {
    Easy: 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/30',
    Medium: 'bg-amber-500/15 text-amber-600 border border-amber-500/30',
    Hard: 'bg-rose-500/15 text-rose-600 border border-rose-500/30',
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/95 text-slate-900 shadow-xl shadow-slate-900/10 overflow-hidden">
      <button
        onClick={handleToggleFavorite}
        className={`absolute right-4 top-4 p-2 rounded-full transition-colors ${
          isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
      >
        <Heart size={24} fill={isFav ? 'currentColor' : 'none'} />
      </button>

      <div className="flex flex-col lg:flex-row gap-6 p-6">
        <div className="lg:w-2/3 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-400">Best match</p>
            <h3 className="text-2xl font-semibold pr-10">{match.recipe.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/15 text-blue-600 border border-blue-500/30">
                {match.recipe.cuisine}
              </span>
              <span className={`px-3 py-1 text-xs rounded-full ${difficultyColors[match.recipe.difficulty]}`}>
                {match.recipe.difficulty}
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/15 text-purple-600 border border-purple-500/30">
                {match.matchScore}% Match
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-slate-100 px-4 py-3 flex items-center gap-2">
              <Clock size={18} className="text-slate-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Time</p>
                <p className="text-sm font-semibold">{match.recipe.cookingTime} min</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3 flex items-center gap-2">
              <Users size={18} className="text-slate-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Servings</p>
                <p className="text-sm font-semibold">{match.recipe.servings}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3 flex items-center gap-2">
              <Flame size={18} className="text-slate-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Calories</p>
                <p className="text-sm font-semibold">{adjustedNutrition.calories}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3 flex items-center gap-2">
              <ChefHat size={18} className="text-slate-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Protein</p>
                <p className="text-sm font-semibold">{adjustedNutrition.protein}g</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 mb-2">Match summary</p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-green-600">{match.matchedIngredients.length}</span> ingredients
              aligned, <span className="text-slate-500">{match.recipe.ingredients.length}</span> total.
            </p>
            {match.missingIngredients.length > 0 && (
              <p className="text-xs text-slate-500 mt-2">
                Missing: {match.missingIngredients.slice(0, 3).join(', ')}
                {match.missingIngredients.length > 3 && '...'}
              </p>
            )}
          </div>
        </div>

        <div className="lg:w-1/3 space-y-4 lg:pt-6">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Serving size</p>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                max="20"
                value={servingSize}
                onChange={(e) => onServingSizeChange(match.recipe.id, parseInt(e.target.value) || 1)}
                className="w-24 px-4 py-2 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
              <div className="text-xs text-slate-500">
                Adjust to scale ingredients and nutrition instantly.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Rating</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  className={`transition-colors ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-400`}
                >
                  <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 space-y-4">
        {match.substitutionSuggestions.length > 0 && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm font-medium text-yellow-800 mb-1">Substitution Suggestions:</p>
            <ul className="text-xs text-yellow-700 list-disc list-inside">
              {match.substitutionSuggestions.map((sub, idx) => (
                <li key={idx}>{sub}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full py-3 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-colors font-medium"
        >
          {showDetails ? 'Hide Details' : 'Show Recipe Details'}
        </button>

        {showDetails && (
          <div className="mt-4 space-y-4 pt-4 border-t">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {match.recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                {match.recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Nutritional Information (per {servingSize} serving{servingSize > 1 ? 's' : ''}):
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-3 text-blue-900 shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-blue-500">Calories</p>
                  <p className="text-lg font-semibold">{adjustedNutrition.calories}</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 px-4 py-3 text-green-900 shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-green-600">Protein</p>
                  <p className="text-lg font-semibold">{adjustedNutrition.protein}g</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 px-4 py-3 text-amber-900 shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-amber-600">Carbs</p>
                  <p className="text-lg font-semibold">{adjustedNutrition.carbs}g</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 px-4 py-3 text-rose-900 shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-rose-600">Fat</p>
                  <p className="text-lg font-semibold">{adjustedNutrition.fat}g</p>
                </div>
              </div>
            </div>

            {match.recipe.dietary.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dietary:</h4>
                <div className="flex flex-wrap gap-2">
                  {match.recipe.dietary.map((diet) => (
                    <span key={diet} className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

