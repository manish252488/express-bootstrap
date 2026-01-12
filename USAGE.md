# Usage Guide

## Testing the Package Locally

### Option 1: Link the package locally

1. In the `express-bootstrap` directory:
```bash
npm link
```

2. Then you can use it from anywhere:
```bash
express-bootstrap my-test-project
```

### Option 2: Use npx with local path

```bash
npx ../express-bootstrap my-test-project
```

### Option 3: Publish to npm (for public use)

1. Make sure you're logged in to npm:
```bash
npm login
```

2. Publish the package:
```bash
npm publish
```

3. Then anyone can use it:
```bash
npx express-bootstrap my-project
```

## What Gets Created

When you run `express-bootstrap my-project`, it will:

1. ✅ Create a new directory `my-project/`
2. ✅ Set up the folder structure (src/routes, src/middleware, etc.)
3. ✅ Copy all template files
4. ✅ Install all dependencies automatically
5. ✅ Set up TypeScript configuration
6. ✅ Configure nodemon for hot-reload
7. ✅ Create .env.example file

## Generated Project Commands

After the project is created:

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Remove dist folder

## Project Structure

```
my-project/
├── src/
│   ├── routes/
│   │   ├── index.ts              # Route registration
│   │   └── example.router.ts     # Example router
│   ├── middleware/
│   │   ├── logger.ts             # Request logger
│   │   └── errorHandler.ts       # Error handler
│   ├── controllers/              # (Empty, ready for your controllers)
│   ├── config/                   # (Empty, ready for your config)
│   └── server.ts                 # Main server file
├── dist/                         # Compiled output
├── .env.example                  # Environment variables template
├── .gitignore
├── tsconfig.json
├── nodemon.json
├── package.json
└── README.md
```

