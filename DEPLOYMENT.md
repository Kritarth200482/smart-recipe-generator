# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your app will be live in minutes!

## Alternative: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, or
   - Connect to GitHub for automatic deployments

## Environment Variables

No environment variables are required for basic functionality. If you want to add real image recognition:

1. Create a `.env.local` file:
   ```
   GOOGLE_CLOUD_API_KEY=your_key_here
   ```

2. Update `lib/recipeMatcher.ts` to use the API key

## Build Commands

- Development: `npm run dev`
- Production Build: `npm run build`
- Start Production: `npm start`

## Troubleshooting

- **Build fails**: Ensure Node.js 18+ is installed
- **Type errors**: Run `npm install` to ensure all dependencies are installed
- **Deployment issues**: Check that all files are committed to git

