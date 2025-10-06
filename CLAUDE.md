# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Turborepo monorepo using npm workspaces with the following structure:

- **Apps**: `apps/docs` and `apps/web` - Both are Next.js 15 applications using React 19 and Turbopack
  - `web`: Runs on port 3000
  - `docs`: Runs on port 3001
- **Packages**:
  - `@repo/ui`: Shared React component library (exports components from `src/*.tsx`)
  - `@repo/eslint-config`: Shared ESLint configurations (base, Next.js, react-internal)
  - `@repo/typescript-config`: Shared TypeScript configurations (base, Next.js, react-library)

## Essential Commands

All commands should be run from the repository root unless otherwise specified.

### Development
```bash
npm run dev                    # Run all apps in dev mode
npm run dev --filter=web       # Run only web app (port 3000)
npm run dev --filter=docs      # Run only docs app (port 3001)
```

### Building
```bash
npm run build                  # Build all apps and packages
npm run build --filter=web     # Build only web app
npm run build --filter=docs    # Build only docs app
```

### Code Quality
```bash
npm run lint                   # Lint all workspaces (fails on any warnings)
npm run check-types            # Type-check all workspaces
npm run format                 # Format code with Prettier
```

### Package-Specific Commands
```bash
# From packages/ui directory:
npm run generate:component     # Generate a new React component using turbo gen
```

## Architecture Notes

### Turborepo Configuration
- Defined in `turbo.json` with task pipeline dependencies
- Build outputs cached in `.next/**` (excluding cache directory)
- Dev mode runs as persistent task with no caching
- Tasks use dependency ordering: `^build`, `^lint`, `^check-types` run dependencies first

### Workspace Dependencies
- Apps depend on `@repo/ui` for shared components
- All workspaces use `@repo/eslint-config` and `@repo/typescript-config`
- Components in `@repo/ui` are exported via wildcard pattern: `./*` → `./src/*.tsx`

### TypeScript Setup
- All workspaces use TypeScript 5.9.2
- Apps use `nextjs.json` config from `@repo/typescript-config`
- UI package uses `react-library.json` config
- Type checking runs via `tsc --noEmit` (no build artifacts)

### Next.js Apps
- Both apps use Next.js 15 with App Router (`app/` directory)
- Dev mode uses Turbopack for fast refresh
- Builds output to `.next/` directory
- ESLint configured with `--max-warnings 0` (strict mode)

### Bugster Integration
Both apps have `.bugster/` directories containing test analysis and project configuration. These are likely used for automated testing or analysis tooling.

## Development Workflow

1. Install dependencies: `npm install` (from root)
2. Start development: `npm run dev` or use filters for specific apps
3. Type checking and linting run independently - ensure both pass before committing
4. Use Turborepo filters (`--filter=<workspace>`) to target specific packages/apps

## Requirements

- Node.js >= 18
- npm 10.9.3 (specified as package manager)
