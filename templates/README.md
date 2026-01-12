# {{PROJECT_NAME}}

Express TypeScript backend project bootstrapped with express-bootstrap.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration

### Development

Run the development server with hot-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`)

### Build

Build the project for production:
```bash
npm run build
```

### Start Production Server

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
{{PROJECT_NAME}}/
├── src/
│   ├── routes/          # Route handlers
│   ├── middleware/      # Custom middleware
│   ├── controllers/     # Controller functions
│   ├── config/          # Configuration files
│   └── server.ts        # Main server file
├── dist/                # Compiled JavaScript (generated)
├── .env                 # Environment variables (create from .env.example)
├── tsconfig.json        # TypeScript configuration
├── nodemon.json         # Nodemon configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Remove dist folder

## 📝 Features

- ✅ Express.js with TypeScript
- ✅ CORS configuration
- ✅ Body parser (JSON & URL-encoded)
- ✅ Request logging middleware
- ✅ Error handling middleware
- ✅ Health check endpoint
- ✅ Hot-reload with nodemon
- ✅ TypeScript strict mode

## 🔧 Configuration

Edit `.env` file to configure:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Allowed CORS origins (comma-separated)

## 📚 Adding Routes

1. Create a new router file in `src/routes/`
2. Import and register it in `src/routes/index.ts`

Example:
```typescript
// src/routes/users.router.ts
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Users route" });
});

export default router;
```

Then in `src/routes/index.ts`:
```typescript
import usersRouter from "./users.router";
app.use("/api/users", usersRouter);
```

## 📚 Adding Middleware

Create middleware files in `src/middleware/` and import them in `src/server.ts`.

## 📄 License

ISC

