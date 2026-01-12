# express-bootstrap

A CLI tool to bootstrap Express.js projects with TypeScript, CORS, body parser, routes, and middleware - similar to `create-react-app` but for Express.

## 🚀 Installation & Usage

### Using npx (Recommended)

```bash
npx express-bootstrap my-project
```

### Global Installation

```bash
npm install -g express-bootstrap
express-bootstrap my-project
```

## ✨ Features

- ✅ **Express.js** with TypeScript
- ✅ **CORS** configuration
- ✅ **Body Parser** (JSON & URL-encoded)
- ✅ **Routes folder** with example router
- ✅ **Middleware folder** with logger and error handler templates
- ✅ **TypeScript** configuration
- ✅ **Nodemon** for hot-reload
- ✅ **Dev, Build, and Start** scripts ready to use
- ✅ **Environment variables** setup with `.env.example`
- ✅ **Git ignore** file included

## 📁 Generated Project Structure

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

## 🛠️ Available Scripts (in generated project)

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Remove dist folder

## 📝 What Gets Installed

### Dependencies
- `express` - Web framework
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Dev Dependencies
- `typescript` - TypeScript compiler
- `@types/express` - TypeScript types for Express
- `@types/cors` - TypeScript types for CORS
- `@types/node` - TypeScript types for Node.js
- `nodemon` - Hot-reload for development
- `ts-node` - Run TypeScript directly

## 🎯 Quick Start

After creating a project:

```bash
cd my-project
cp .env.example .env
npm run dev
```

The server will start on `http://localhost:3000` (or the port in your `.env` file).

## 📚 Next Steps

1. **Add routes**: Create new router files in `src/routes/` and register them in `src/routes/index.ts`
2. **Add middleware**: Create middleware files in `src/middleware/` and use them in `src/server.ts`
3. **Add controllers**: Create controller files in `src/controllers/`
4. **Configure**: Update `.env` file with your settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

