# Repository Instructions for GitHub Copilot

## Project Overview
Personal portfolio website for Syed Salman Reza, a full-stack developer. Built with modern web technologies to showcase projects, skills, and professional experience with exceptional performance, accessibility, and user experience.

## Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with CSS custom properties
- **UI Components**: Radix UI primitives and Radix Colors
- **Icons**: Radix UI Icons
- **Fonts**: Geist Sans and Geist Mono (Vercel)
- **Deployment**: GitHub Pages (static export)
- **CI/CD**: GitHub Actions

## Development Environment

### Prerequisites
- Node.js 20+ (LTS recommended)
- npm 10+
- Git

### Setup
```bash
npm install
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server with Turbopack (port 3000)
- `npm run build` - Build for production with static export
- `npm run start` - Start production server (requires build)
- `npm run lint` - Run ESLint for code quality

## Code Standards

### File Organization
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts, theme
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles and design tokens
│   └── [page]/            # Additional pages
├── components/
│   ├── ui/                # Base UI components (Button, Typography, Card, etc.)
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   └── layout/            # Layout components (Header, Footer)
└── lib/
    ├── utils.ts           # Utility functions (cn, etc.)
    └── design-tokens.ts   # Design token helpers
```

### Naming Conventions
- **Files**: kebab-case for all files (`my-component.tsx`, `utils.ts`)
- **Components**: PascalCase for React components (`MyComponent`)
- **Variables/Functions**: camelCase (`myFunction`, `myVariable`)
- **Constants**: UPPER_SNAKE_CASE (`MY_CONSTANT`, `API_URL`)
- **Types/Interfaces**: PascalCase with descriptive names (`UserProfile`, `ButtonProps`)
- **CSS Custom Properties**: kebab-case (`--color-primary`, `--space-4`)

### Component Structure

**Base Patterns:**
```typescript
// 1. Imports (React, Next.js, third-party, local)
import { forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 2. Type definitions
interface MyComponentProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

// 3. Component implementation
export function MyComponent({ title, description, className, children }: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
```

**Component Best Practices:**
- Use TypeScript for all components with proper interface definitions
- Prefer functional components with hooks (no class components)
- Use Radix UI primitives as foundation for complex components
- Implement compound component patterns for related UI elements
- Follow polymorphic component design with `asChild` prop
- Export components as named exports (not default)
- Use `React.forwardRef` when refs needed
- Implement proper error boundaries and loading states
- Ensure components are responsive and mobile-first
- Add proper ARIA labels and accessibility attributes

**Variant Management (CVA):**
```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes", // Base styles applied to all variants
  {
    variants: {
      variant: {
        default: "variant-specific-classes",
        secondary: "secondary-variant-classes",
      },
      size: {
        sm: "small-size-classes",
        lg: "large-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

### Styling Guidelines

**Design System Approach:**
- Use Tailwind utility classes as primary styling method
- Leverage CSS custom properties for design tokens
- Follow Radix Colors system for semantic color usage
- Implement Geist font family for typography
- Maintain 8px spacing grid system
- Use mobile-first responsive design
- Ensure proper dark/light mode support

**Tailwind Best Practices:**
```typescript
// ✅ Good: Semantic, maintainable
<button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">

// ❌ Avoid: Arbitrary values when design tokens exist
<button className="bg-[#0070f3] text-white">

// ✅ Good: Responsive with mobile-first
<div className="text-sm md:text-base lg:text-lg">

// ✅ Good: Using cn() for conditional classes
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
```

**CSS Custom Properties:**
```css
/* Design Tokens in globals.css */
:root {
  /* Colors */
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #3b82f6;
  
  /* Spacing (8px grid) */
  --space-4: 1rem;     /* 16px */
  --space-8: 2rem;     /* 32px */
  
  /* Typography */
  --text-base: 1rem;   /* 16px */
  --text-lg: 1.125rem; /* 18px */
  
  /* Radius */
  --radius: 0.5rem;    /* 8px */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

**Color System (Radix Colors):**
- Use semantic color names (`--gray-1` to `--gray-12`)
- Steps 1-2: Backgrounds
- Steps 3-5: Component backgrounds
- Steps 6-8: Borders and separators
- Steps 9-10: Solid colors (buttons)
- Steps 11-12: Text (high contrast)

**Typography System:**
```typescript
// Use Geist Sans for body text
<p className="font-sans text-base">Body text</p>

// Use Geist Mono for code
<code className="font-mono text-sm">const x = 5;</code>

// Heading hierarchy
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
<h2 className="text-3xl md:text-4xl font-bold">
<h3 className="text-2xl md:text-3xl font-semibold">
```

## Testing and Quality

### Before Committing
1. Run `npm run lint` - Check for linting errors
2. Run `npm run build` - Ensure build succeeds
3. Test in development mode - Verify functionality
4. Check responsive design - Test mobile, tablet, desktop
5. Validate accessibility - Keyboard navigation, screen reader

### Code Quality Standards
- TypeScript strict mode - No `any` types
- ESLint - All rules passing
- Proper error handling
- Self-documenting code with clear variable names
- Comments only for complex logic
- No console.log in production code

## Common Patterns

### Creating New Pages
```typescript
// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Syed Salman Reza",
  description: "Learn more about my background and experience",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1>About Me</h1>
      {/* Page content */}
    </div>
  );
}
```

### Adding UI Components
```typescript
// src/components/ui/card.tsx
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        variant === "bordered" && "border border-border",
        className
      )}
      {...props}
    />
  );
}
```

### Creating Section Components
```typescript
// src/components/sections/hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, I'm Syed Salman Reza
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Full-Stack Developer
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### Utility Functions
```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}
```

## Design System & Principles

### Design Engineering Principles
- **Performance-First**: Visual design never compromises Core Web Vitals
- **Accessibility by Default**: WCAG 2.1 AA compliance from the start
- **Systems Thinking**: Components as part of cohesive design system
- **Progressive Enhancement**: Functional without JavaScript
- **Mobile-First**: Design from 320px viewport upward
- **Consistency**: Unified patterns across all UI elements

### Typography System (Geist Font)
- **Primary Font**: Geist Sans for interfaces and body text
- **Monospace Font**: Geist Mono for code and technical content
- **Type Scale**: 1.125 ratio for harmonious sizing
- **Line Height**: 1.5-1.6 for body, 1.2-1.25 for headings
- **Font Loading**: `display: swap` for performance

### Color System (Radix Colors)
- **Semantic Usage**: Colors convey meaning and state
- **Accessibility**: WCAG AA compliant combinations
- **Dark/Light Modes**: Automatic theme switching
- **60-30-10 Rule**: 60% neutral, 30% primary, 10% accent

### Component Architecture
- **Radix UI Primitives**: Unstyled, accessible foundation
- **Composition Pattern**: Build complex from simple components
- **Polymorphic Components**: Use `asChild` for flexibility
- **Compound Components**: Related components work together
- **Consistent APIs**: Similar props across components

### Layout & Spacing
- **8px Grid System**: All spacing multiples of 4px/8px
- **Container Constraints**: Max-width 1200px for readability
- **Responsive Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **CSS Grid & Flexbox**: Modern layout techniques

### Accessibility Standards
- **WCAG 2.1 AA**: Minimum compliance level
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Independence**: Info not conveyed by color alone

### Performance Optimization
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: Next.js Image with proper sizing
- **Code Splitting**: Route and component level
- **Font Strategy**: Preload critical fonts
- **Bundle Size**: Keep < 200KB gzipped

## Performance Considerations
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Use dynamic imports for heavy components
- Optimize fonts with proper loading strategy
- Minimize bundle size with tree shaking
- Leverage static generation where possible

## Accessibility
- Use semantic HTML elements (`nav`, `main`, `section`, `article`)
- Add ARIA labels for icon-only buttons
- Ensure keyboard navigation works throughout
- Provide alt text for all images
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Test with screen readers (NVDA, VoiceOver)
- Include skip links for navigation
- Respect `prefers-reduced-motion` for animations

## Common Issues and Solutions

### Build Errors
- **TypeScript errors**: Check types, avoid `any`
- **Import errors**: Verify paths, use `@/` alias
- **Tailwind classes**: Ensure valid utility classes
- **Static export**: Avoid dynamic rendering features

### Development Server Issues
- **Port conflicts**: Change port in dev script
- **Cache issues**: Delete `.next` folder
- **Module resolution**: Clear `node_modules`, reinstall

### Styling Issues
- **Dark mode**: Check color token usage
- **Responsive**: Test all breakpoints
- **Z-index**: Use consistent stacking context
- **Overflow**: Check container widths

## Git Workflow

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch (optional)
- Feature branches: `feature/component-name`
- Bug fixes: `fix/issue-description`

### Commit Messages
```
type(scope): subject

[optional body]
[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

Examples:
```
feat(ui): add Typography component with variants
fix(header): resolve mobile menu toggle issue
docs(readme): update setup instructions
style(button): adjust padding and border radius
refactor(utils): improve cn function performance
```

## Deployment

### Static Export Configuration
```typescript
// next.config.ts
const nextConfig = {
  output: "export",           // Enable static export
  trailingSlash: false,       // GitHub Pages compatibility
  images: { unoptimized: true }, // Required for static export
};
```

### GitHub Actions Deployment
- Workflow: `.github/workflows/nextjs.yml`
- Trigger: Push to `main` branch
- Build: `npm run build` with Turbopack
- Deploy: Automatic to GitHub Pages

### Deployment Checklist
- [ ] All tests passing
- [ ] Build succeeds locally
- [ ] No TypeScript errors
- [ ] Accessibility validated
- [ ] Performance optimized
- [ ] Meta tags complete
- [ ] Images optimized

## Contributing Guidelines

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Review Checklist
- [ ] Follows TypeScript best practices
- [ ] Component properly typed
- [ ] Responsive design implemented
- [ ] Accessibility features added
- [ ] Performance considered
- [ ] Documentation updated
- [ ] No console errors

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Design System References
- [Vercel Design](https://vercel.com/design)
- [Radix Colors](https://www.radix-ui.com/colors)
- [Geist Font](https://vercel.com/font)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)

---

**Note:** This portfolio prioritizes performance, accessibility, and user experience. Every design decision should consider these core principles.
