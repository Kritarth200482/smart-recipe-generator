# Installing Node.js on Windows

Node.js is required to run this application. Here are several ways to install it:

## Option 1: Download Installer (Recommended - Easiest)

1. **Visit the official Node.js website:**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (Long Term Support) - recommended for most users

2. **Run the installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure to check "Add to PATH" during installation

3. **Verify installation:**
   - Close and reopen your terminal/PowerShell
   - Run: `node --version`
   - Run: `npm --version`
   - Both should show version numbers

4. **Install project dependencies:**
   ```bash
   cd smart-recipe-generator
   npm install
   ```

## Option 2: Using winget (Windows Package Manager)

If you have winget installed, you can run:

```powershell
winget install OpenJS.NodeJS.LTS
```

**Note:** You may need to accept the terms by typing `Y` when prompted.

After installation, **close and reopen your terminal**, then verify:
```powershell
node --version
npm --version
```

## Option 3: Using Chocolatey (If installed)

If you have Chocolatey package manager:

```powershell
choco install nodejs-lts
```

## After Installation

1. **Close and reopen your PowerShell/terminal** (important for PATH to update)

2. **Navigate to the project:**
   ```powershell
   cd C:\Users\admin\Documents\smart-recipe-generator
   ```

3. **Install dependencies:**
   ```powershell
   npm install
   ```

4. **Run the development server:**
   ```powershell
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to: http://localhost:3000

## Troubleshooting

### "npm is not recognized" after installation
- **Solution:** Close and reopen your terminal/PowerShell completely
- If still not working, restart your computer

### Installation fails
- Make sure you have administrator privileges
- Try downloading the installer directly from nodejs.org

### Version check
After installation, verify with:
```powershell
node --version   # Should show v20.x.x or similar
npm --version    # Should show 10.x.x or similar
```

## Need Help?

If you encounter any issues:
1. Make sure you downloaded the LTS version from nodejs.org
2. Restart your computer after installation
3. Verify Node.js is in your PATH environment variable


