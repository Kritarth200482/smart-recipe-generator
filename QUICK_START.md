# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## Testing the Application

### Basic Usage:
1. Enter ingredients manually in the text input
2. Or click common ingredients from the list
3. Or upload an ingredient photo (simulated recognition)

### Features to Test:
- ✅ Add/remove ingredients
- ✅ Filter by dietary preferences (vegetarian, vegan, etc.)
- ✅ Filter by difficulty, cooking time, calories
- ✅ View recipe details with instructions
- ✅ Adjust serving sizes
- ✅ Rate recipes (1-5 stars)
- ✅ Save favorites
- ✅ View personalized suggestions

### Sample Ingredients to Try:
- `chicken`, `tomatoes`, `onion`, `garlic`
- `pasta`, `cheese`, `basil`
- `rice`, `eggs`, `soy sauce`
- `salmon`, `asparagus`, `lemon`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

The app is ready to deploy to:
- Vercel (recommended - zero config)
- Netlify
- Any platform supporting Next.js

