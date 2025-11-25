export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  ingredients: string[];
  steps: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number; // in minutes
  servings: number;
  dietary: string[]; // vegetarian, vegan, gluten-free, dairy-free, etc.
  nutritionalInfo: {
    calories: number;
    protein: number; // grams
    carbs: number; // grams
    fat: number; // grams
  };
  image?: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    cuisine: 'Italian',
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'fresh basil', 'olive oil', 'salt'],
    steps: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough on a floured surface',
      'Spread tomato sauce evenly over dough',
      'Add mozzarella cheese',
      'Bake for 10-12 minutes until crust is golden',
      'Top with fresh basil and drizzle with olive oil'
    ],
    difficulty: 'Medium',
    cookingTime: 25,
    servings: 4,
    dietary: ['vegetarian'],
    nutritionalInfo: { calories: 285, protein: 12, carbs: 36, fat: 10 }
  },
  {
    id: '2',
    name: 'Chicken Stir Fry',
    cuisine: 'Asian',
    ingredients: ['chicken breast', 'bell peppers', 'broccoli', 'soy sauce', 'ginger', 'garlic', 'vegetable oil', 'rice'],
    steps: [
      'Cut chicken into bite-sized pieces',
      'Heat oil in a large wok or pan',
      'Cook chicken until golden, about 5 minutes',
      'Add vegetables and stir-fry for 3-4 minutes',
      'Add ginger, garlic, and soy sauce',
      'Cook for 2 more minutes and serve over rice'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: ['gluten-free'],
    nutritionalInfo: { calories: 320, protein: 28, carbs: 35, fat: 8 }
  },
  {
    id: '3',
    name: 'Vegetarian Pasta Primavera',
    cuisine: 'Italian',
    ingredients: ['pasta', 'zucchini', 'cherry tomatoes', 'bell peppers', 'olive oil', 'garlic', 'parmesan cheese', 'basil'],
    steps: [
      'Cook pasta according to package directions',
      'Heat olive oil in a large pan',
      'Sauté vegetables until tender, about 8 minutes',
      'Add garlic and cook for 1 minute',
      'Toss with cooked pasta',
      'Top with parmesan and fresh basil'
    ],
    difficulty: 'Easy',
    cookingTime: 25,
    servings: 4,
    dietary: ['vegetarian'],
    nutritionalInfo: { calories: 380, protein: 14, carbs: 58, fat: 12 }
  },
  {
    id: '4',
    name: 'Grilled Salmon with Vegetables',
    cuisine: 'Mediterranean',
    ingredients: ['salmon fillets', 'asparagus', 'lemon', 'olive oil', 'salt', 'pepper', 'dill'],
    steps: [
      'Preheat grill to medium-high',
      'Season salmon with salt, pepper, and dill',
      'Brush vegetables with olive oil',
      'Grill salmon for 4-5 minutes per side',
      'Grill vegetables for 5-7 minutes',
      'Serve with lemon wedges'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 2,
    dietary: ['gluten-free', 'dairy-free'],
    nutritionalInfo: { calories: 420, protein: 35, carbs: 8, fat: 28 }
  },
  {
    id: '5',
    name: 'Vegan Buddha Bowl',
    cuisine: 'Healthy',
    ingredients: ['quinoa', 'chickpeas', 'sweet potato', 'kale', 'avocado', 'tahini', 'lemon', 'olive oil'],
    steps: [
      'Cook quinoa according to package directions',
      'Roast sweet potato cubes at 400°F for 20 minutes',
      'Sauté kale until wilted',
      'Mix tahini, lemon juice, and olive oil for dressing',
      'Arrange all ingredients in a bowl',
      'Drizzle with dressing'
    ],
    difficulty: 'Easy',
    cookingTime: 30,
    servings: 2,
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    nutritionalInfo: { calories: 485, protein: 18, carbs: 65, fat: 20 }
  },
  {
    id: '6',
    name: 'Beef Tacos',
    cuisine: 'Mexican',
    ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomatoes', 'cheddar cheese', 'sour cream', 'onion', 'taco seasoning'],
    steps: [
      'Brown ground beef in a pan',
      'Add taco seasoning and water, simmer for 5 minutes',
      'Warm taco shells in oven',
      'Chop vegetables',
      'Fill shells with beef and toppings',
      'Serve immediately'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: [],
    nutritionalInfo: { calories: 380, protein: 22, carbs: 28, fat: 20 }
  },
  {
    id: '7',
    name: 'Thai Green Curry',
    cuisine: 'Thai',
    ingredients: ['chicken', 'coconut milk', 'green curry paste', 'eggplant', 'basil leaves', 'fish sauce', 'rice'],
    steps: [
      'Heat curry paste in a pan for 2 minutes',
      'Add coconut milk and bring to a simmer',
      'Add chicken and cook for 10 minutes',
      'Add eggplant and cook for 5 minutes',
      'Season with fish sauce',
      'Garnish with basil and serve over rice'
    ],
    difficulty: 'Medium',
    cookingTime: 30,
    servings: 4,
    dietary: ['gluten-free', 'dairy-free'],
    nutritionalInfo: { calories: 420, protein: 25, carbs: 35, fat: 22 }
  },
  {
    id: '8',
    name: 'Caprese Salad',
    cuisine: 'Italian',
    ingredients: ['tomatoes', 'mozzarella cheese', 'fresh basil', 'olive oil', 'balsamic vinegar', 'salt', 'pepper'],
    steps: [
      'Slice tomatoes and mozzarella',
      'Arrange alternating slices on a plate',
      'Tear basil leaves and scatter over top',
      'Drizzle with olive oil and balsamic',
      'Season with salt and pepper',
      'Serve immediately'
    ],
    difficulty: 'Easy',
    cookingTime: 10,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    nutritionalInfo: { calories: 220, protein: 12, carbs: 8, fat: 16 }
  },
  {
    id: '9',
    name: 'Chicken Caesar Salad',
    cuisine: 'American',
    ingredients: ['romaine lettuce', 'chicken breast', 'caesar dressing', 'parmesan cheese', 'croutons', 'lemon'],
    steps: [
      'Grill or pan-cook chicken until done',
      'Chop romaine lettuce',
      'Toss lettuce with caesar dressing',
      'Top with sliced chicken',
      'Add croutons and parmesan',
      'Serve with lemon wedges'
    ],
    difficulty: 'Easy',
    cookingTime: 15,
    servings: 2,
    dietary: [],
    nutritionalInfo: { calories: 380, protein: 32, carbs: 18, fat: 20 }
  },
  {
    id: '10',
    name: 'Vegetable Fried Rice',
    cuisine: 'Asian',
    ingredients: ['rice', 'eggs', 'carrots', 'peas', 'soy sauce', 'sesame oil', 'green onions', 'garlic'],
    steps: [
      'Cook rice and let cool',
      'Scramble eggs and set aside',
      'Heat sesame oil in a wok',
      'Stir-fry vegetables for 3 minutes',
      'Add rice and eggs, stir-fry for 3 minutes',
      'Season with soy sauce and top with green onions'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: ['vegetarian'],
    nutritionalInfo: { calories: 285, protein: 10, carbs: 45, fat: 8 }
  },
  {
    id: '11',
    name: 'Greek Moussaka',
    cuisine: 'Greek',
    ingredients: ['eggplant', 'ground beef', 'tomatoes', 'onion', 'garlic', 'cinnamon', 'bechamel sauce', 'parmesan'],
    steps: [
      'Slice and salt eggplant, let sit for 30 minutes',
      'Brown ground beef with onions and garlic',
      'Add tomatoes and cinnamon, simmer for 20 minutes',
      'Layer eggplant and meat in a baking dish',
      'Top with bechamel and parmesan',
      'Bake at 375°F for 45 minutes'
    ],
    difficulty: 'Hard',
    cookingTime: 90,
    servings: 6,
    dietary: [],
    nutritionalInfo: { calories: 420, protein: 22, carbs: 28, fat: 25 }
  },
  {
    id: '12',
    name: 'Quinoa Salad Bowl',
    cuisine: 'Healthy',
    ingredients: ['quinoa', 'cucumber', 'cherry tomatoes', 'feta cheese', 'olives', 'red onion', 'olive oil', 'lemon'],
    steps: [
      'Cook quinoa and let cool',
      'Dice cucumber and tomatoes',
      'Thinly slice red onion',
      'Mix quinoa with vegetables',
      'Add feta and olives',
      'Dress with olive oil and lemon juice'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    nutritionalInfo: { calories: 320, protein: 12, carbs: 42, fat: 12 }
  },
  {
    id: '13',
    name: 'Chicken Tikka Masala',
    cuisine: 'Indian',
    ingredients: ['chicken', 'yogurt', 'tomato sauce', 'cream', 'garam masala', 'ginger', 'garlic', 'rice'],
    steps: [
      'Marinate chicken in yogurt and spices for 30 minutes',
      'Grill or bake chicken until cooked',
      'Sauté ginger and garlic',
      'Add tomato sauce and spices',
      'Add cream and simmer',
      'Add chicken and serve over rice'
    ],
    difficulty: 'Medium',
    cookingTime: 45,
    servings: 4,
    dietary: ['gluten-free'],
    nutritionalInfo: { calories: 450, protein: 30, carbs: 35, fat: 22 }
  },
  {
    id: '14',
    name: 'Ratatouille',
    cuisine: 'French',
    ingredients: ['eggplant', 'zucchini', 'bell peppers', 'tomatoes', 'onion', 'garlic', 'herbs', 'olive oil'],
    steps: [
      'Dice all vegetables',
      'Heat olive oil in a large pot',
      'Sauté onions and garlic',
      'Add vegetables in stages, cooking each for 5 minutes',
      'Add tomatoes and herbs',
      'Simmer for 30 minutes until vegetables are tender'
    ],
    difficulty: 'Medium',
    cookingTime: 50,
    servings: 6,
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    nutritionalInfo: { calories: 180, protein: 4, carbs: 22, fat: 9 }
  },
  {
    id: '15',
    name: 'Beef Burgers',
    cuisine: 'American',
    ingredients: ['ground beef', 'burger buns', 'lettuce', 'tomatoes', 'onion', 'pickles', 'cheese', 'ketchup'],
    steps: [
      'Form ground beef into patties',
      'Season with salt and pepper',
      'Grill or pan-fry for 4-5 minutes per side',
      'Add cheese in last minute of cooking',
      'Toast burger buns',
      'Assemble burgers with toppings'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: [],
    nutritionalInfo: { calories: 520, protein: 28, carbs: 35, fat: 30 }
  },
  {
    id: '16',
    name: 'Pad Thai',
    cuisine: 'Thai',
    ingredients: ['rice noodles', 'shrimp', 'eggs', 'bean sprouts', 'peanuts', 'lime', 'fish sauce', 'tamarind'],
    steps: [
      'Soak rice noodles in warm water for 30 minutes',
      'Heat oil in a wok',
      'Cook shrimp and set aside',
      'Scramble eggs in the wok',
      'Add noodles and sauce, stir-fry for 3 minutes',
      'Add shrimp, bean sprouts, and peanuts, serve with lime'
    ],
    difficulty: 'Medium',
    cookingTime: 30,
    servings: 4,
    dietary: ['dairy-free'],
    nutritionalInfo: { calories: 480, protein: 22, carbs: 65, fat: 15 }
  },
  {
    id: '17',
    name: 'Mushroom Risotto',
    cuisine: 'Italian',
    ingredients: ['arborio rice', 'mushrooms', 'onion', 'white wine', 'vegetable broth', 'parmesan cheese', 'butter'],
    steps: [
      'Sauté mushrooms and set aside',
      'Sauté onion until translucent',
      'Add rice and toast for 2 minutes',
      'Add wine and stir until absorbed',
      'Add broth one ladle at a time, stirring constantly',
      'Stir in mushrooms, butter, and parmesan'
    ],
    difficulty: 'Medium',
    cookingTime: 35,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    nutritionalInfo: { calories: 380, protein: 12, carbs: 55, fat: 14 }
  },
  {
    id: '18',
    name: 'Chicken Fajitas',
    cuisine: 'Mexican',
    ingredients: ['chicken breast', 'bell peppers', 'onion', 'tortillas', 'sour cream', 'salsa', 'lime', 'fajita seasoning'],
    steps: [
      'Slice chicken and vegetables into strips',
      'Season chicken with fajita seasoning',
      'Cook chicken until done, set aside',
      'Sauté vegetables until tender',
      'Warm tortillas',
      'Serve with sour cream, salsa, and lime'
    ],
    difficulty: 'Easy',
    cookingTime: 25,
    servings: 4,
    dietary: ['gluten-free'],
    nutritionalInfo: { calories: 420, protein: 30, carbs: 40, fat: 15 }
  },
  {
    id: '19',
    name: 'Lentil Soup',
    cuisine: 'Mediterranean',
    ingredients: ['lentils', 'carrots', 'celery', 'onion', 'garlic', 'vegetable broth', 'cumin', 'lemon'],
    steps: [
      'Sauté onion, carrots, and celery',
      'Add garlic and cumin, cook for 1 minute',
      'Add lentils and broth',
      'Bring to a boil, then simmer for 30 minutes',
      'Season with salt and pepper',
      'Serve with lemon wedges'
    ],
    difficulty: 'Easy',
    cookingTime: 40,
    servings: 6,
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    nutritionalInfo: { calories: 220, protein: 15, carbs: 38, fat: 2 }
  },
  {
    id: '20',
    name: 'Sushi Rolls',
    cuisine: 'Japanese',
    ingredients: ['sushi rice', 'nori sheets', 'cucumber', 'avocado', 'crab meat', 'soy sauce', 'wasabi', 'ginger'],
    steps: [
      'Cook and season sushi rice',
      'Place nori on bamboo mat',
      'Spread rice evenly on nori',
      'Add fillings in a line',
      'Roll tightly using the mat',
      'Slice into pieces and serve with soy sauce'
    ],
    difficulty: 'Hard',
    cookingTime: 60,
    servings: 4,
    dietary: ['dairy-free'],
    nutritionalInfo: { calories: 320, protein: 12, carbs: 55, fat: 8 }
  },
  {
    id: '21',
    name: 'Chocolate Chip Cookies',
    cuisine: 'Dessert',
    ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'eggs', 'vanilla', 'chocolate chips', 'baking soda'],
    steps: [
      'Cream butter and sugars',
      'Beat in eggs and vanilla',
      'Mix in flour and baking soda',
      'Fold in chocolate chips',
      'Drop onto baking sheets',
      'Bake at 375°F for 9-11 minutes'
    ],
    difficulty: 'Easy',
    cookingTime: 25,
    servings: 24,
    dietary: ['vegetarian'],
    nutritionalInfo: { calories: 150, protein: 2, carbs: 20, fat: 7 }
  },
  {
    id: '22',
    name: 'Cauliflower Fried Rice',
    cuisine: 'Healthy',
    ingredients: ['cauliflower', 'eggs', 'carrots', 'peas', 'soy sauce', 'sesame oil', 'green onions', 'garlic'],
    steps: [
      'Pulse cauliflower in food processor until rice-like',
      'Scramble eggs and set aside',
      'Heat sesame oil in a pan',
      'Stir-fry vegetables for 3 minutes',
      'Add cauliflower rice and cook for 5 minutes',
      'Add eggs and soy sauce, top with green onions'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    nutritionalInfo: { calories: 180, protein: 10, carbs: 15, fat: 10 }
  },
  {
    id: '23',
    name: 'Beef Stroganoff',
    cuisine: 'Russian',
    ingredients: ['beef strips', 'mushrooms', 'onion', 'sour cream', 'beef broth', 'flour', 'butter', 'egg noodles'],
    steps: [
      'Brown beef strips and set aside',
      'Sauté mushrooms and onions',
      'Add flour and cook for 1 minute',
      'Add broth and bring to a simmer',
      'Return beef and cook until tender',
      'Stir in sour cream and serve over noodles'
    ],
    difficulty: 'Medium',
    cookingTime: 40,
    servings: 4,
    dietary: [],
    nutritionalInfo: { calories: 480, protein: 32, carbs: 35, fat: 24 }
  },
  {
    id: '24',
    name: 'Mediterranean Wrap',
    cuisine: 'Mediterranean',
    ingredients: ['tortilla', 'hummus', 'cucumber', 'tomatoes', 'feta cheese', 'olives', 'lettuce', 'olive oil'],
    steps: [
      'Spread hummus on tortilla',
      'Add lettuce as base',
      'Layer cucumber, tomatoes, and olives',
      'Crumble feta on top',
      'Drizzle with olive oil',
      'Roll tightly and slice in half'
    ],
    difficulty: 'Easy',
    cookingTime: 10,
    servings: 2,
    dietary: ['vegetarian'],
    nutritionalInfo: { calories: 320, protein: 12, carbs: 35, fat: 16 }
  },
  {
    id: '25',
    name: 'Shrimp Scampi',
    cuisine: 'Italian',
    ingredients: ['shrimp', 'linguine', 'garlic', 'white wine', 'butter', 'lemon', 'parsley', 'red pepper flakes'],
    steps: [
      'Cook linguine according to package',
      'Sauté garlic in butter',
      'Add shrimp and cook for 2 minutes per side',
      'Add wine and lemon juice',
      'Toss with pasta',
      'Garnish with parsley and red pepper flakes'
    ],
    difficulty: 'Easy',
    cookingTime: 20,
    servings: 4,
    dietary: [],
    nutritionalInfo: { calories: 420, protein: 28, carbs: 45, fat: 14 }
  }
];

// Common ingredient substitutions
export const substitutions: Record<string, string[]> = {
  'chicken': ['tofu', 'tempeh', 'mushrooms'],
  'beef': ['lentils', 'mushrooms', 'tofu'],
  'milk': ['almond milk', 'soy milk', 'oat milk', 'coconut milk'],
  'butter': ['olive oil', 'coconut oil', 'avocado'],
  'eggs': ['flax eggs', 'chia eggs', 'applesauce'],
  'flour': ['almond flour', 'coconut flour', 'gluten-free flour'],
  'cheese': ['nutritional yeast', 'vegan cheese', 'cashew cream'],
  'sugar': ['honey', 'maple syrup', 'stevia'],
  'soy sauce': ['tamari', 'coconut aminos'],
  'pasta': ['zucchini noodles', 'spaghetti squash', 'rice noodles'],
  'rice': ['cauliflower rice', 'quinoa', 'barley']
};

