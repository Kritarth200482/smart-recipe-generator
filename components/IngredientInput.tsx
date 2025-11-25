'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface IngredientInputProps {
  ingredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  onImageUpload: (file: File) => Promise<void>;
  isProcessingImage: boolean;
}

const commonIngredients = [
  'chicken', 'beef', 'pork', 'fish', 'shrimp',
  'eggs', 'milk', 'cheese', 'butter',
  'tomatoes', 'onion', 'garlic', 'bell peppers',
  'carrots', 'broccoli', 'spinach', 'lettuce',
  'rice', 'pasta', 'bread', 'flour',
  'olive oil', 'salt', 'pepper', 'herbs'
];

export default function IngredientInput({ 
  ingredients,
  onIngredientsChange, 
  onImageUpload, 
  isProcessingImage 
}: IngredientInputProps) {
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddIngredient = () => {
    const trimmed = inputValue.trim().toLowerCase();
    if (trimmed && !ingredients.includes(trimmed)) {
      const newIngredients = [...ingredients, trimmed];
      onIngredientsChange(newIngredients);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    const newIngredients = ingredients.filter(i => i !== ingredient);
    onIngredientsChange(newIngredients);
  };

  const handleSelectCommon = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      const newIngredients = [...ingredients, ingredient];
      onIngredientsChange(newIngredients);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onImageUpload(file);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
            placeholder="Type an ingredient and press Enter"
            className="w-full px-4 py-3 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
        <button
          onClick={handleAddIngredient}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="relative">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessingImage}
          className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessingImage ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing Image...
            </>
          ) : (
            <>
              <Upload size={20} />
              Upload Ingredient Photo
            </>
          )}
        </button>
      </div>

      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center gap-2"
            >
              {ingredient}
              <button
                onClick={() => handleRemoveIngredient(ingredient)}
                className="hover:text-blue-600"
              >
                <X size={16} />
              </button>
            </span>
          ))}
        </div>
      )}

      <div>
        <p className="text-xs font-semibold tracking-[0.3em] text-blue-200 uppercase mb-2">
          Common Ingredients
        </p>
        <div className="flex flex-wrap gap-2">
          {commonIngredients.map((ingredient) => (
            <button
              key={ingredient}
              onClick={() => handleSelectCommon(ingredient)}
              disabled={ingredients.includes(ingredient)}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

