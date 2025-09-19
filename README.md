# Convivial Monorepo

This is a monorepo for the Convivial project, containing both the Next.js frontend and Strapi backend applications.

## Project Structure

```
├── web/          # Next.js frontend application
├── strapi/       # Strapi backend application
```

## Prerequisites

- Node.js (see engines in package.json)
- npm

## Getting Started

### Installation

Install all dependencies for both applications:

```bash
npm install
```

### Development

Run both applications in development mode:

```bash
npm run dev
```

Run only the frontend:

```bash
npm run dev:web
```

Run only the backend:

```bash
npm run dev:strapi
```

### Building for Production

Build both applications:

```bash
npm run build
```

Build only the frontend:

```bash
npm run build:web
```

Build only the backend:

```bash
npm run build:strapi
```

### Running in Production

Start both applications in production mode:

```bash
npm run start
```

Start only the frontend:

```bash
npm run start:web
```

Start only the backend:

```bash
npm run start:strapi
```

## Working with the Monorepo

### Adding Dependencies

To add a dependency to a specific workspace:

```bash
npm install package-name --workspace=web
# or
npm install package-name --workspace=strapi
```

To add a dependency to all workspaces:

```bash
npm install package-name -w
```

To add a development dependency to the root:

```bash
npm install package-name --save-dev
```