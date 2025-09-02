# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Scoliscan is a Next.js-based landing page for an AI-powered spinal health monitoring application targeting children's spinal health screening. The site features a full-page scroll experience with multilingual support (Korean/English).

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Lint code
npm run lint
```

## Architecture & Key Components

### Core Structure
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom primary color theme
- **Framer Motion** for animations

### Navigation System
The app uses a custom full-page scroll system instead of traditional routing:
- `FullPageScroll` component manages vertical section navigation
- Custom event system (`scrollToSection`) enables programmatic navigation
- Sections are indexed: Hero (0), About (1), Features (2), Services (3), Contact (4)

### Language Management
- Context-based language switching between Korean ('ko') and English ('en')
- Language state managed in main page component and passed to sections
- Toggle button in Navigation component

### Custom Components Structure
- **UI Components** (`components/ui/`): Reusable components like Button, Container, FullPageScroll
- **Section Components** (`components/sections/`): Individual page sections
- **Navigation**: Fixed header with language toggle and scroll-to-contact functionality

### Styling System
- Custom Tailwind configuration with primary color palette (teal/cyan theme)
- Utility function `cn()` for class merging using clsx and tailwind-merge
- Custom animations: fade-in and slide-up

### Key Features
1. **Full-Page Scroll**: Custom implementation supporting wheel, keyboard, and touch navigation
2. **Multilingual Support**: Korean/English toggle with context-based state management
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Custom Scroll Indicators**: Right-side navigation dots for section jumping

## Development Guidelines

- Follow existing TypeScript patterns and interfaces
- Use the established `language` prop pattern for new sections
- Maintain the custom scroll system - avoid traditional routing
- Follow the existing component structure in `components/` directory
- Use the `cn()` utility for conditional styling
- Maintain the primary color theme consistency