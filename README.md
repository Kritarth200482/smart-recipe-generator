# Smart Recipe Generator

A modern web application that suggests recipes based on available ingredients, with support for ingredient recognition from images, dietary preferences, and personalized recommendations.

## Live Demo

- **Production URL**: [https://smart-recipe-generator-3uvt.vercel.app](https://smart-recipe-generator-3uvt.vercel.app)
- **GitHub Repo**: [https://github.com/Kritarth200482/smart-recipe-generator](https://github.com/Kritarth200482/smart-recipe-generator)

## Features

### Core Features
- ✅ **Ingredient Input**: Text input and selection from common ingredients list
- ✅ **Image Recognition**: Upload photos to automatically detect ingredients (simulated with mock recognition)
- ✅ **Recipe Matching**: Intelligent algorithm that matches recipes based on available ingredients
- ✅ **Recipe Database**: 25+ recipes with detailed instructions and nutritional information
- ✅ **Dietary Preferences**: Filter by vegetarian, vegan, gluten-free, dairy-free
- ✅ **Advanced Filters**: Filter by difficulty, cooking time, and calorie count
- ✅ **Serving Size Adjustment**: Adjust recipes to your desired serving size
- ✅ **Substitution Suggestions**: Smart ingredient substitution recommendations
- ✅ **User Feedback**: Rate recipes and save favorites
- ✅ **Personalized Suggestions**: Get recipe recommendations based on your ratings
- ✅ **Mobile Responsive**: Fully responsive design for all devices

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: LocalStorage for user preferences

## Getting Started

### Prerequisites

- **Node.js 18+ and npm** (included with Node.js)
  - If not installed, download from: https://nodejs.org/ (LTS version recommended)
  - See `INSTALL_NODEJS.md` for detailed installation instructions
  - After installation, **close and reopen your terminal** for PATH to update

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-recipe-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
smart-recipe-generator/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── IngredientInput.tsx  # Ingredient input component
│   ├── RecipeCard.tsx       # Recipe display card
│   └── FilterPanel.tsx      # Filter panel component
├── data/
│   └── recipes.ts           # Recipe database
├── lib/
│   ├── recipeMatcher.ts     # Recipe matching algorithm
│   └── storage.ts           # LocalStorage utilities
└── public/                  # Static assets
```

## Key Features Explained

### Recipe Matching Algorithm

The matching algorithm:
1. Normalizes ingredient names (handles plurals, variations)
2. Calculates match score based on percentage of matched ingredients
3. Checks for ingredient substitutions
4. Filters by dietary preferences and user filters
5. Computes a blended score that considers how many recipe ingredients you can cover and how many of your inputs are used
6. Surfaces any recipe with at least one matching ingredient and a score ≥20%, prioritizing the best matches first

### Ingredient Recognition

Currently uses a simulated image recognition service. In production, this would integrate with:
- Google Cloud Vision API
- AWS Rekognition
- Clarifai
- Custom ML model

### Substitution System

The app includes a comprehensive substitution database for common ingredients, allowing users to find recipes even when they don't have exact ingredients.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder or connect to Git for automatic deployments

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Heroku
- AWS Amplify
- Railway
- Render

## Future Enhancements

- [ ] Real image recognition API integration
- [ ] User accounts and cloud sync
- [ ] Recipe sharing functionality
- [ ] Shopping list generation
- [ ] Meal planning features
- [ ] Nutrition tracking
- [ ] Recipe scaling for batch cooking

## License

This project is created for a technical assessment.

## Contact

For questions or feedback, please open an issue in the repository.

