'use client';

import { X } from 'lucide-react';

interface FilterPanelProps {
  dietaryPreferences: string[];
  onDietaryChange: (prefs: string[]) => void;
  difficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  maxTime: number | null;
  onMaxTimeChange: (time: number | null) => void;
  maxCalories: number | null;
  onMaxCaloriesChange: (calories: number | null) => void;
}

const dietaryOptions = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'];
const difficultyOptions = ['Easy', 'Medium', 'Hard'];

export default function FilterPanel({
  dietaryPreferences,
  onDietaryChange,
  difficulty,
  onDifficultyChange,
  maxTime,
  onMaxTimeChange,
  maxCalories,
  onMaxCaloriesChange,
}: FilterPanelProps) {
  const handleDietaryToggle = (pref: string) => {
    if (dietaryPreferences.includes(pref)) {
      onDietaryChange(dietaryPreferences.filter(p => p !== pref));
    } else {
      onDietaryChange([...dietaryPreferences, pref]);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur text-slate-100 space-y-6">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100 shadow-lg shadow-black/10">
        <p className="text-xs uppercase tracking-[0.4em] text-blue-200 mb-2">Quick documentation</p>
        <ul className="list-disc list-inside text-slate-200 space-y-1">
          <li>Ingredient photos + typed items train the matcher.</li>
          <li>Filters stack with dietary modes for precision.</li>
          <li>Ratings & favorites unlock personalized picks.</li>
        </ul>
        <p className="text-[11px] text-slate-400 mt-3">
          Full README, quick start, and deployment guides ship in the repo.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">Filters</h2>

        <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-slate-200 mb-3">Dietary Preferences</h3>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleDietaryToggle(option)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  dietaryPreferences.includes(option)
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-3">Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {difficultyOptions.map((option) => (
              <button
                key={option}
                onClick={() => onDifficultyChange(difficulty === option ? '' : option)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  difficulty === option
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-3">Maximum Cooking Time (minutes)</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="5"
              max="180"
              step="5"
              value={maxTime || ''}
              onChange={(e) => onMaxTimeChange(e.target.value ? parseInt(e.target.value) : null)}
              placeholder="No limit"
              className="w-32 px-4 py-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
            />
            {maxTime && (
              <button
                onClick={() => onMaxTimeChange(null)}
                className="p-1 text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200 mb-3">Maximum Calories</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="100"
              max="2000"
              step="50"
              value={maxCalories || ''}
              onChange={(e) => onMaxCaloriesChange(e.target.value ? parseInt(e.target.value) : null)}
              placeholder="No limit"
              className="w-32 px-4 py-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
            />
            {maxCalories && (
              <button
                onClick={() => onMaxCaloriesChange(null)}
                className="p-1 text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

