# Installation Guide

## Issue: Missing Dependencies

If you encounter the error `Cannot find module 'fs-extra'` when running `express-bootstrap`, it means the dependencies weren't installed when you installed the package from git.

## Solutions

### Option 1: Install Dependencies Manually (Recommended for Git Install)

After installing from git, install the dependencies:

```bash
# Find where npm installed the package globally
npm root -g

# Navigate to the express-bootstrap directory
cd $(npm root -g)/express-bootstrap

# Install dependencies
npm install
```

On Windows PowerShell:
```powershell
cd (npm root -g)\express-bootstrap
npm install
```

### Option 2: Use npm link (For Local Development)

If you're developing locally:

```bash
cd express-bootstrap
npm install
npm link
```

Then you can use `express-bootstrap` from anywhere.

### Option 3: Publish to npm (Best for Distribution)

1. Make sure you're logged in:
```bash
npm login
```

2. Publish the package:
```bash
npm publish
```

3. Then install normally:
```bash
npm install -g express-bootstrap
```

This will automatically install all dependencies.

## Verify Installation

After installing dependencies, verify it works:

```bash
express-bootstrap test-project
```

If it still doesn't work, check that the dependencies are installed:

```bash
cd $(npm root -g)/express-bootstrap
npm list --depth=0
```

You should see:
- chalk
- fs-extra
- inquirer

## Troubleshooting

### Dependencies not installing from git

This is a known issue with npm when installing from git repositories. The `package.json` dependencies are not automatically installed. You need to manually install them as shown in Option 1 above.

### Alternative: Use npx with local path

If you have the repository locally:

```bash
npx ./express-bootstrap my-project
```

This will use the local version with its dependencies.

