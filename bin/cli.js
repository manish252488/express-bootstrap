#!/usr/bin/env node

// Try to require dependencies, with helpful error messages
let fs, chalk;
try {
  fs = require('fs-extra');
  chalk = require('chalk');
} catch (error) {
  console.error('❌ Missing dependencies! Please install them:');
  console.error('');
  console.error('If you installed from git, run:');
  if (process.platform === 'win32') {
    console.error('   cd (npm root -g)\\express-bootstrap');
    console.error('   npm install');
  } else {
    console.error('   cd $(npm root -g)/express-bootstrap');
    console.error('   npm install');
  }
  console.error('');
  console.error('Or reinstall from npm (recommended):');
  console.error('   npm install -g express-bootstrap');
  process.exit(1);
}

const path = require('path');
const { execSync } = require('child_process');

const PROJECT_NAME = process.argv[2];

if (!PROJECT_NAME) {
  console.error(chalk.red('❌ Please provide a project name:'));
  console.log(chalk.yellow('   npx express-bootstrap <project-name>'));
  process.exit(1);
}

const CURRENT_DIR = process.cwd();
const PROJECT_PATH = path.join(CURRENT_DIR, PROJECT_NAME);
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');

async function createProject() {
  try {
    // Check if directory already exists
    if (fs.existsSync(PROJECT_PATH)) {
      console.error(chalk.red(`❌ Directory "${PROJECT_NAME}" already exists!`));
      process.exit(1);
    }

    console.log(chalk.blue(`🚀 Creating Express project: ${PROJECT_NAME}...`));

    // Create project directory
    fs.mkdirSync(PROJECT_PATH, { recursive: true });

    // Create directory structure
    const dirs = [
      'src',
      'src/routes',
      'src/middleware',
      'src/controllers',
      'src/config',
      'dist'
    ];

    dirs.forEach(dir => {
      fs.mkdirSync(path.join(PROJECT_PATH, dir), { recursive: true });
    });

    // Copy template files
    console.log(chalk.blue('📁 Creating project files...'));

    // Copy all template files
    const templateFiles = [
      'package.json',
      'tsconfig.json',
      'nodemon.json',
      '.gitignore',
      '.env.example',
      'src/server.ts',
      'src/routes/index.ts',
      'src/routes/example.router.ts',
      'src/middleware/logger.ts',
      'src/middleware/errorHandler.ts',
      'README.md'
    ];

    templateFiles.forEach(file => {
      const templatePath = path.join(TEMPLATE_DIR, file);
      const targetPath = path.join(PROJECT_PATH, file);
      
      if (fs.existsSync(templatePath)) {
        let content = fs.readFileSync(templatePath, 'utf8');
        // Replace project name in package.json and README
        if (file === 'package.json' || file === 'README.md') {
          content = content.replace(/{{PROJECT_NAME}}/g, PROJECT_NAME);
        }
        fs.writeFileSync(targetPath, content);
      }
    });

    console.log(chalk.green('✅ Project structure created!'));

    // Install dependencies
    console.log(chalk.blue('📦 Installing dependencies...'));
    process.chdir(PROJECT_PATH);
    
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log(chalk.green('✅ Dependencies installed!'));
    } catch (error) {
      console.error(chalk.yellow('⚠️  Error installing dependencies. You can run "npm install" manually.'));
    }

    console.log(chalk.green('\n✨ Project created successfully!'));
    console.log(chalk.cyan('\n📝 Next steps:'));
    console.log(chalk.white(`   cd ${PROJECT_NAME}`));
    if (process.platform === 'win32') {
      console.log(chalk.white('   copy .env.example .env'));
    } else {
      console.log(chalk.white('   cp .env.example .env'));
    }
    console.log(chalk.white('   npm run dev'));
    console.log(chalk.green('\n🎉 Happy coding!'));

  } catch (error) {
    console.error(chalk.red('❌ Error creating project:'), error.message);
    process.exit(1);
  }
}

createProject();

