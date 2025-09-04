## Overview

This is a modern full-stack portfolio website built, showcasing his work as a Full Stack Developer and AI/ML Engineer. The application features a dark-themed, animated portfolio with sections for personal information, projects, skills, and contact details. It's built with React on the frontend and Express.js on the backend, following modern web development practices with TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: TailwindCSS with custom CSS variables for dark theme portfolio colors
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animations**: Framer Motion for smooth animations, transitions, and scroll-based effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Component Structure**: Modular design with separate components for different portfolio sections (Hero, Projects, Skills, Contact)

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode
- **Development Server**: Custom Vite integration with hot module replacement in development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Static Serving**: Vite handles static assets in development, built files served in production

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Design**: User table with UUID primary keys, username/password fields using Zod for validation

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **User Schema**: Drizzle-generated types with Zod validation schemas
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### Development and Build Pipeline
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Concurrent frontend/backend development with tsx for TypeScript execution
- **Environment**: Environment-based configuration with development/production modes
- **Asset Management**: Vite asset handling with alias resolution for cleaner imports

### UI/UX Design Patterns
- **Design System**: Dark theme with purple accent colors and professional portfolio aesthetic
- **Responsive Design**: Mobile-first approach with TailwindCSS responsive utilities
- **Animation Strategy**: Scroll-triggered animations, custom cursor effects, and smooth transitions
- **Component Library**: Comprehensive UI component set from shadcn/ui for consistency
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation


## Overview

This is a modern full-stack portfolio website built, showcasing his work as a Full Stack Developer and AI/ML Engineer. The application features a dark-themed, animated portfolio with sections for personal information, projects, skills, and contact details. It's built with React on the frontend and Express.js on the backend, following modern web development practices with TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: TailwindCSS with custom CSS variables for dark theme portfolio colors
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animations**: Framer Motion for smooth animations, transitions, and scroll-based effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Component Structure**: Modular design with separate components for different portfolio sections (Hero, Projects, Skills, Contact)

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode
- **Development Server**: Custom Vite integration with hot module replacement in development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Static Serving**: Vite handles static assets in development, built files served in production

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Design**: User table with UUID primary keys, username/password fields using Zod for validation

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **User Schema**: Drizzle-generated types with Zod validation schemas
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### Development and Build Pipeline
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Concurrent frontend/backend development with tsx for TypeScript execution
- **Environment**: Environment-based configuration with development/production modes
- **Asset Management**: Vite asset handling with alias resolution for cleaner imports

### UI/UX Design Patterns
- **Design System**: Dark theme with purple accent colors and professional portfolio aesthetic
- **Responsive Design**: Mobile-first approach with TailwindCSS responsive utilities
- **Animation Strategy**: Scroll-triggered animations, custom cursor effects, and smooth transitions
- **Component Library**: Comprehensive UI component set from shadcn/ui for consistency
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation


PIXELPORTFOLIO
│
├──client
│   ├── index.html 
│   ├── public\my_images
│   └── src
│       ├── components
│       │   ├── AnimatedBackground.tsx
│       │   ├── CertificatesSection.tsx
│       │   ├── ContactSection.tsx
│       │   ├── CustomCursor.tsx
│       │   ├── Header.tsx
│       │   ├── HeroSection.tsx
│       │   ├── LoadingScreen.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── ScrollProgress.tsx
│       │   ├── Sidebar.tsx
│       │   ├── SkillsSection.tsx
│       │   └── ui
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       ├── alert.tsx
│       │       ├── aspect-ratio.tsx
│       │       ├── avatar.tsx
│       │       ├── badge.tsx
│       │       ├── breadcrumb.tsx
│       │       ├── button.tsx
│       │       ├── ... (all other ui components)
│       ├── hooks
│       │   ├── use-mobile.tsx
│       │   ├── use-toast.ts
│       │   ├── useCountUp.tsx
│       │   └── useScrollAnimations.tsx
│       ├── lib
│       │   ├── queryClient.ts
│       │   └── utils.ts
│       ├── pages
│       │   ├── not-found.tsx
│       │   └── portfolio.tsx
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
│       
├── node_modules
├── server
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared
│   └── schema.ts
├── .gitignore
├── components.json
├── drizzle.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── abt_portfolio.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
