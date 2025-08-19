# Overview

This is a modern full-stack web application built for game analytics, specifically designed as an "AI-First Game Analytics Platform" called GameState Labs. The application focuses on providing comprehensive analytics tools for game developers, with features like player analytics, cohort analysis, event exploration, and LTV (Lifetime Value) prediction capabilities.

The project implements a chart-first, dual-path user experience for LTV prediction, allowing both quick insights for product managers and advanced analytics workflows for power users. The application emphasizes a clean, modern UI with dark theme support and extensive use of interactive charts and data visualizations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture:

- **UI Framework**: Uses Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom design system tokens for GameState Labs branding
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

The application uses a custom design system with dark theme as default, featuring:
- Custom color palette optimized for data visualization
- Consistent spacing and typography scales
- Interactive components with hover states and animations
- Responsive design patterns

## Backend Architecture

The backend follows a simple Express.js-based REST API pattern:

- **Runtime**: Node.js with TypeScript
- **Web Framework**: Express.js with middleware for JSON parsing and request logging
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Setup**: Hot-reload with tsx for TypeScript execution

The server architecture is designed to be lightweight and extensible, with a clear separation between route handlers and storage operations.

## Data Storage Solutions

The application uses **Drizzle ORM** with **PostgreSQL** as the primary database solution:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Connection**: Neon Database serverless for cloud deployment
- **Schema Management**: Type-safe schema definitions with automatic TypeScript inference
- **Development Storage**: In-memory storage adapter for rapid development

Database configuration is environment-aware, supporting both local development and cloud deployment scenarios.

## Authentication and Authorization

Currently implements a basic user model with:
- User authentication schema with username/password
- Zod validation for input sanitization
- Session management preparation (connect-pg-simple for PostgreSQL sessions)

The authentication system is foundational and ready for expansion with more sophisticated auth patterns.

# External Dependencies

## UI and Component Libraries

- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management and data fetching
- **lucide-react**: Modern icon library with consistent styling
- **recharts**: Charting library for data visualizations
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette implementation

## Database and Backend Services

- **@neondatabase/serverless**: Serverless PostgreSQL driver for cloud deployment
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express

## Development and Build Tools

- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Validation and Utilities

- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **date-fns**: Modern date utility library
- **nanoid**: URL-safe unique ID generator
- **clsx & tailwind-merge**: Conditional class name utilities

The application is designed to be easily deployable on Replit with all necessary configuration files and environment setup included.