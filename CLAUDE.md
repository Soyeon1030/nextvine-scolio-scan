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

### Core Stack
- **Next.js 14** with App Router and experimental appDir
- **TypeScript** for type safety
- **Tailwind CSS** for styling with extensive custom configuration
- **Framer Motion** for animations and transitions
- **Lucide React** for icons

### Critical System: Custom Full-Page Scroll
The app uses a custom full-page scroll system instead of traditional routing:
- `FullPageScroll` component (`components/ui/FullPageScroll.tsx`) manages vertical section navigation
- **Desktop**: Uses `transform: translateY()` with custom event system for smooth transitions
- **Mobile**: Automatically switches to standard scroll behavior for better UX
- **Navigation Methods**: 
  - Mouse wheel events
  - Keyboard (Arrow keys, PageUp/Down, Home/End)
  - Touch gestures (swipe up/down)
  - Programmatic via `scrollToSection` custom events
- **Section Management**: Tracks current section state, prevents rapid scrolling with cooldown

### Language System Architecture
- `LanguageContext` in main page provides centralized language state
- `useLanguage()` hook for accessing language context
- All section components receive `language: 'ko' | 'en'` prop
- Language toggle integrated in Navigation component
- No routing - pure context-based state management

### Component Architecture
```
components/
├── ui/           # Reusable UI components
│   ├── FullPageScroll.tsx  # Core scroll system
│   ├── Button.tsx          # Styled button variants
│   ├── Container.tsx       # Layout container
│   └── ScrollIndicator.tsx # Right-side dots navigation
├── sections/     # Page sections (8 total sections)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Interactive.tsx
│   ├── Solution.tsx
│   ├── Monitoring.tsx
│   ├── Services.tsx
│   └── Contact.tsx
└── Navigation.tsx  # Fixed header with language toggle
```

### Styling System Details
- **Custom Tailwind Config**: Extensive primary color palette (50-900 shades of teal/cyan)
- **Custom Font Stack**: Pretendard Variable with comprehensive Korean/English fallbacks
- **Custom Animations**: `fade-in`, `slide-up` with custom keyframes
- **Utility Functions**: 
  - `cn()` for class merging (clsx + tailwind-merge)
  - `scrollToElement()` for standard scroll behavior (unused in full-page mode)
- **Special Effects**: Custom vignette gradient background

### Section Index Mapping
Current sections in order (critical for scroll navigation):
0. Hero
1. About  
2. Features
3. Interactive
4. Solution
5. Monitoring
6. Services
7. Contact

## Development Guidelines

### Full-Page Scroll System Rules
- Never use traditional routing - maintain single-page architecture
- Use custom events (`scrollToSection`) for programmatic navigation
- Test both desktop scroll behavior and mobile fallback
- Section indices must remain consistent when adding/removing sections
- Mobile breakpoint is `lg` (1024px) - below this switches to normal scroll

### Component Patterns
- All sections must accept `language: 'ko' | 'en'` prop
- Use `cn()` utility for all conditional styling
- Follow established TypeScript interfaces
- Maintain responsive design patterns with Tailwind breakpoints

### Styling Conventions
- Use primary color palette for theme consistency
- Apply custom animations sparingly for performance
- Maintain Korean font stack for text rendering
- Use Container component for consistent layout margins