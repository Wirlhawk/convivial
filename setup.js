#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function executeCommand(command, cwd = process.cwd()) {
  try {
    log(`Executing: ${command}`, colors.blue);
    execSync(command, { stdio: 'inherit', cwd });
    return true;
  } catch (error) {
    log(`Error executing command: ${command}`, colors.red);
    log(error.message, colors.red);
    return false;
  }
}

function setupMonorepo() {
  log('\n🚀 Setting up Convivial Monorepo...', colors.green);
  
  // Install root dependencies
  log('\n📦 Installing root dependencies...', colors.yellow);
  if (!executeCommand('npm install')) {
    log('Failed to install root dependencies. Aborting setup.', colors.red);
    process.exit(1);
  }
  
  log('\n✅ Monorepo setup completed successfully!', colors.green);
  log('\nYou can now run the following commands:', colors.yellow);
  log('  npm run dev         - Run both frontend and backend in development mode');
  log('  npm run dev:web     - Run only the frontend in development mode');
  log('  npm run dev:strapi  - Run only the backend in development mode');
  log('\nSee README.md for more information.', colors.yellow);
}

setupMonorepo();