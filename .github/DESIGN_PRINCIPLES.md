# Design Principles for Personal Portfolio

## Executive Summary

This document outlines the comprehensive design principles for Syed Salman Reza's personal portfolio website. Based on modern design engineering practices from Vercel, Radix UI, and industry leaders, these principles ensure a consistent, accessible, and performant user experience.

---

## 1. Core Design Philosophy

### Design Engineering Convergence
- **Unified Design-Code Workflow**: Design and implementation happen together
- **Component-Driven Development**: Build modular, reusable components
- **Performance as Design Constraint**: Visual design never compromises performance
- **Accessibility First**: WCAG 2.1 AA compliance from the start
- **User-Centric**: Every decision serves user needs and goals

### Guiding Values
1. **Clarity**: Simple, clear communication of skills and work
2. **Consistency**: Unified visual language throughout
3. **Quality**: Attention to detail in every interaction
4. **Performance**: Fast, responsive experience on all devices
5. **Accessibility**: Inclusive design for all users

---

## 2. Typography System

### Font Selection
**Geist Font Family by Vercel:**
- **Geist Sans**: Primary font for interfaces and body text
  - Modern, clean, optimized for screen readability
  - Variable font with weights 300-700
  - Excellent rendering across devices
  
- **Geist Mono**: Monospace font for code and technical content
  - Clear character distinction
  - Optimized for code readability
  - Consistent with Geist Sans design language

### Type Scale
Based on 1.125 ratio for harmonious progression:

```css
--text-xs: 0.75rem;    /* 12px - Labels, captions */
--text-sm: 0.875rem;   /* 14px - Small text */
--text-base: 1rem;     /* 16px - Body text (minimum) */
--text-lg: 1.125rem;   /* 18px - Emphasized text */
--text-xl: 1.25rem;    /* 20px - Subheadings */
--text-2xl: 1.5rem;    /* 24px - Section headings */
--text-3xl: 1.875rem;  /* 30px - Page headings */
--text-4xl: 2.25rem;   /* 36px - Large headings */
--text-5xl: 3rem;      /* 48px - Hero headings */
--text-6xl: 3.75rem;   /* 60px - Display headings */
```

### Typography Guidelines

**Hierarchy:**
```typescript
H1: text-4xl md:text-5xl lg:text-6xl font-bold    // Page titles, hero
H2: text-3xl md:text-4xl font-bold                // Section headings
H3: text-2xl md:text-3xl font-semibold            // Subsection headings
H4: text-xl md:text-2xl font-semibold             // Card titles
H5: text-lg md:text-xl font-semibold              // Small headings
H6: text-base md:text-lg font-semibold            // Inline headings
Body: text-base leading-normal                     // Body text
Lead: text-lg md:text-xl text-muted-foreground    // Intro paragraphs
Small: text-sm                                     // Captions, labels
Muted: text-sm text-muted-foreground              // Secondary text
```

**Line Height:**
- Headings: 1.2-1.25 (tight for visual hierarchy)
- Body text: 1.5-1.6 (optimal readability)
- Captions: 1.4 (balance between space and readability)

**Font Weight:**
- Light (300): Reserved for large display text
- Regular (400): Body text, descriptions
- Medium (500): Emphasized text
- Semibold (600): Subheadings, labels
- Bold (700): Headings, strong emphasis

**Character Spacing:**
- Headings: Tight tracking (`-0.02em to -0.01em`)
- Body text: Normal tracking
- All caps: Increased tracking (`0.05em to 0.1em`)

---

## 3. Color System

### Radix Colors Foundation

**Scientific Color Approach:**
- 12-step color scales based on human perception
- Semantic naming for consistent usage
- Automatic light/dark mode pairs
- WCAG AA contrast compliance guaranteed

### Color Palette

**Neutral Grays (Primary):**
```css
/* Light Theme */
--gray-1: #fcfcfc;   /* App background */
--gray-2: #f9f9f9;   /* Subtle background */
--gray-3: #f0f0f0;   /* UI element background */
--gray-4: #e8e8e8;   /* Hovered UI element */
--gray-5: #e0e0e0;   /* Active / Selected */
--gray-6: #d9d9d9;   /* Subtle borders */
--gray-7: #cecece;   /* UI element borders */
--gray-8: #bbbbbb;   /* Hovered borders */
--gray-9: #8d8d8d;   /* Solid backgrounds */
--gray-10: #838383;  /* Hovered solid */
--gray-11: #646464;  /* Low contrast text */
--gray-12: #1d1d1d;  /* High contrast text */

/* Dark Theme */
--gray-1: #111111;   /* App background */
--gray-2: #191919;   /* Subtle background */
--gray-3: #222222;   /* UI element background */
--gray-4: #2a2a2a;   /* Hovered UI element */
--gray-5: #313131;   /* Active / Selected */
--gray-6: #3a3a3a;   /* Subtle borders */
--gray-7: #484848;   /* UI element borders */
--gray-8: #606060;   /* Hovered borders */
--gray-9: #6e6e6e;   /* Solid backgrounds */
--gray-10: #7b7b7b;  /* Hovered solid */
--gray-11: #b4b4b4;  /* Low contrast text */
--gray-12: #eeeeee;  /* High contrast text */
```

**Brand Blue (Accent):**
```css
/* Light Theme */
--blue-9: #0070f3;   /* Primary brand color */
--blue-10: #0761d1;  /* Hovered brand color */
--blue-11: #0091ff;  /* Link text */

/* Dark Theme */
--blue-9: #0091ff;   /* Primary brand color */
--blue-10: #52a9ff;  /* Hovered brand color */
--blue-11: #52a9ff;  /* Link text */
```

**Semantic Colors:**
```css
/* Success (Green) */
--green-9: #30a46c (light) / #3dd68c (dark)

/* Error/Destructive (Red) */
--red-9: #e5484d (light) / #ff6369 (dark)

/* Warning (Amber) */
--amber-9: #f59e0b (light) / #ffb224 (dark)

/* Info (Blue) */
--blue-9: #0070f3 (light) / #0091ff (dark)
```

### Color Usage Guidelines

**60-30-10 Rule:**
- 60% Neutral (grays) - backgrounds, text, borders
- 30% Primary (blue) - brand elements, CTAs, links
- 10% Accent (semantic) - success, error, warning states

**Semantic Usage:**
```typescript
Background: gray-1       // App background
Foreground: gray-12      // Primary text
Border: gray-6           // Default borders
Ring: blue-9             // Focus rings

Primary: gray-12         // Primary buttons/text
Primary-foreground: gray-1

Secondary: gray-3        // Secondary buttons
Secondary-foreground: gray-12

Muted: gray-3            // Muted backgrounds
Muted-foreground: gray-11 // Muted text

Accent: blue-9           // Brand/accent color
Accent-foreground: white

Destructive: red-9       // Destructive actions
Destructive-foreground: white
```

**Contrast Requirements:**
- Normal text (< 18px): 4.5:1 minimum
- Large text (≥ 18px): 3:1 minimum
- UI components: 3:1 minimum
- Aim for AAA (7:1) for critical content

---

## 4. Spacing & Layout

### 8px Grid System

**Spacing Scale:**
```css
--space-1: 0.25rem;   /* 4px  - Tight spacing, icon gaps */
--space-2: 0.5rem;    /* 8px  - Compact elements */
--space-3: 0.75rem;   /* 12px - Small gaps */
--space-4: 1rem;      /* 16px - Base spacing unit */
--space-5: 1.25rem;   /* 20px - Medium gaps */
--space-6: 1.5rem;    /* 24px - Section spacing */
--space-8: 2rem;      /* 32px - Large gaps */
--space-10: 2.5rem;   /* 40px - Component spacing */
--space-12: 3rem;     /* 48px - Section padding */
--space-16: 4rem;     /* 64px - Major sections */
--space-20: 5rem;     /* 80px - Large sections */
--space-24: 6rem;     /* 96px - Hero sections */
```

**Usage Guidelines:**
- Use space-4 (16px) as base spacing
- Vertical rhythm: space-4, space-6, space-8, space-12
- Component padding: space-4 to space-6
- Section padding: space-12 to space-24
- Always use scale values (no arbitrary spacing)

### Layout Principles

**Container Constraints:**
```typescript
// Maximum content width for readability
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',  // 16px mobile
    sm: '2rem',       // 32px small tablets
    lg: '4rem',       // 64px laptops
    xl: '5rem',       // 80px desktops
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',     // Max content width
    '2xl': '1200px',  // Don't exceed 1200px
  },
}
```

**Grid Systems:**
```typescript
// 12-column grid for complex layouts
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

// Content grid
grid grid-cols-1 md:grid-cols-[1fr_2fr] // Sidebar + content
grid grid-cols-1 lg:grid-cols-[200px_1fr] // Fixed sidebar
```

**Flexbox Patterns:**
```typescript
// Horizontal stack with gap
flex items-center gap-4

// Vertical stack with gap
flex flex-col gap-6

// Space between items
flex items-center justify-between

// Center content
flex items-center justify-center
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
--screen-sm: 640px;   /* Large phones, small tablets */
--screen-md: 768px;   /* Tablets, small laptops */
--screen-lg: 1024px;  /* Laptops, small desktops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large displays */
```

**Responsive Design Strategy:**
1. Design for mobile (320px - 640px) first
2. Enhance for tablets (640px - 1024px)
3. Optimize for desktops (1024px+)
4. Constrain max-width at 1200px for readability

---

## 5. Border Radius & Shadows

### Border Radius Scale

```css
--radius-sm: 0.25rem;  /* 4px  - Small elements */
--radius-md: 0.375rem; /* 6px  - Default radius */
--radius-lg: 0.5rem;   /* 8px  - Cards, buttons */
--radius-xl: 0.75rem;  /* 12px - Larger cards */
--radius-2xl: 1rem;    /* 16px - Hero sections */
--radius-full: 9999px; /* Fully rounded (pills, avatars) */
```

**Usage:**
- Buttons: radius-md (6px)
- Cards: radius-lg (8px)
- Inputs: radius-md (6px)
- Modals: radius-xl (12px)
- Avatars: radius-full
- Badges: radius-full

### Shadow System

```css
/* Elevation shadows for depth perception */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 
             0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
             0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 
             0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Elevation Levels:**
- Level 0 (flat): No shadow
- Level 1 (raised): shadow-sm
- Level 2 (floating): shadow-md
- Level 3 (elevated): shadow-lg
- Level 4 (modal): shadow-xl

---

## 6. Animation & Motion

### Animation Principles

**Purpose-Driven Motion:**
- Provide feedback for user actions
- Guide attention to important elements
- Enhance perceived performance
- Create delightful micro-interactions

**Easing Functions:**
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth transitions */
--ease-out: cubic-bezier(0, 0, 0.2, 1);        /* Natural deceleration */
--ease-in: cubic-bezier(0.4, 0, 1, 1);         /* Natural acceleration */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
```

**Duration Scale:**
```css
--duration-75: 75ms;    /* Instant feedback */
--duration-150: 150ms;  /* Standard transitions */
--duration-200: 200ms;  /* Hover states */
--duration-300: 300ms;  /* Slower transitions */
--duration-500: 500ms;  /* Page transitions */
```

### Common Animations

**Hover States:**
```css
/* Button hover */
transition: all 150ms var(--ease-out);
hover:scale-105 hover:shadow-md

/* Link hover */
transition: color 150ms var(--ease-out);

/* Card hover */
transition: box-shadow 200ms var(--ease-out);
hover:shadow-lg
```

**Focus States:**
```css
/* Focus ring */
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-ring 
focus-visible:ring-offset-2
```

**Loading States:**
```css
/* Skeleton pulse */
animate-pulse

/* Spinner rotate */
animate-spin
```

### Reduced Motion

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Component Patterns

### Button Variants

```typescript
variant: 
  - default:     High contrast, primary actions
  - secondary:   Lower contrast, secondary actions
  - outline:     Bordered, subtle actions
  - ghost:       No background, tertiary actions
  - link:        Text-only, inline actions
  - destructive: Warning color, dangerous actions

size:
  - sm:      Small (h-9, px-3)
  - default: Medium (h-10, px-4)
  - lg:      Large (h-11, px-8)
  - xl:      Extra large (h-12, px-10)
  - icon:    Square (h-10, w-10)
```

### Card Variants

```typescript
variant:
  - default:  No border, subtle background
  - bordered: With border
  - elevated: With shadow
  
padding:
  - sm:       p-4 (16px)
  - default:  p-6 (24px)
  - lg:       p-8 (32px)
```

### Typography Components

```typescript
variant:
  - h1, h2, h3, h4, h5, h6: Semantic headings
  - body:                   Default body text
  - lead:                   Introduction text
  - large:                  Larger body text
  - small:                  Smaller text
  - muted:                  De-emphasized text
```

---

## 8. Accessibility Requirements

### WCAG 2.1 AA Standards

**Perceivable:**
- [ ] Text alternatives for non-text content
- [ ] Captions for audio/video
- [ ] Color contrast ratios met (4.5:1 for text)
- [ ] Text resizable up to 200%

**Operable:**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Timing adjustable for time-based content
- [ ] Skip links provided
- [ ] Clear focus indicators

**Understandable:**
- [ ] Language of page specified (`lang` attribute)
- [ ] Consistent navigation
- [ ] Consistent identification
- [ ] Error suggestions provided
- [ ] Labels and instructions present

**Robust:**
- [ ] Valid HTML
- [ ] ARIA attributes used correctly
- [ ] Status messages programmatically determinable

### Implementation Checklist

**Semantic HTML:**
```html
<header> - Site header
<nav> - Navigation menus
<main> - Main content
<section> - Content sections
<article> - Independent content
<aside> - Sidebar content
<footer> - Site footer
```

**ARIA Labels:**
```html
<!-- Icon buttons -->
<button aria-label="Close menu">
  <CloseIcon />
</button>

<!-- Complex labels -->
<div aria-labelledby="section-title">
  <h2 id="section-title">Section Title</h2>
</div>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

**Keyboard Navigation:**
- Tab: Navigate forward
- Shift+Tab: Navigate backward
- Enter/Space: Activate buttons/links
- Escape: Close modals/menus
- Arrow keys: Navigate menus/tabs

---

## 9. Performance Standards

### Core Web Vitals Targets

**Largest Contentful Paint (LCP):** < 2.5 seconds
- Critical content loads quickly
- Optimized images
- Font preloading

**First Input Delay (FID):** < 100 milliseconds
- Minimal JavaScript blocking
- Efficient event handlers
- Code splitting

**Cumulative Layout Shift (CLS):** < 0.1
- Defined image dimensions
- No layout shifts during load
- Stable font loading

### Optimization Checklist

**Images:**
- [ ] Next.js Image component used
- [ ] Proper width/height specified
- [ ] Alt text provided
- [ ] Lazy loading enabled
- [ ] WebP format with fallback

**Fonts:**
- [ ] Font files preloaded
- [ ] `font-display: swap` used
- [ ] System font fallbacks defined
- [ ] Subset fonts when possible

**Code:**
- [ ] Bundle size < 200KB (gzipped)
- [ ] Code splitting implemented
- [ ] Unused code removed
- [ ] Dependencies optimized

**Rendering:**
- [ ] Static generation where possible
- [ ] Minimal client-side JavaScript
- [ ] No layout shifts
- [ ] Efficient CSS selectors

---

## 10. Implementation Guidelines

### Component Development

1. **Start with Base Component**
   - Unstyled, functional
   - Proper TypeScript types
   - Accessibility built-in

2. **Add Variants**
   - Use CVA for variant management
   - Keep variants semantic
   - Provide sensible defaults

3. **Enhance with Styling**
   - Apply Tailwind utilities
   - Use design tokens
   - Ensure responsiveness

4. **Test Thoroughly**
   - All variants work
   - Keyboard navigation
   - Screen reader compatibility
   - Mobile responsiveness

### Design System Maintenance

**Consistency Checks:**
- [ ] All colors from Radix palette
- [ ] All spacing from 8px grid
- [ ] All typography from scale
- [ ] All shadows from system

**Documentation:**
- [ ] Component props documented
- [ ] Usage examples provided
- [ ] Accessibility notes included
- [ ] Responsive behavior described

---

## Conclusion

These design principles provide a solid foundation for building a world-class personal portfolio. By adhering to these standards, we ensure:

- **Consistency**: Unified visual language
- **Accessibility**: Inclusive for all users
- **Performance**: Fast, responsive experience
- **Maintainability**: Scalable, sustainable codebase
- **Quality**: Professional, polished result

Every design decision should be evaluated against these principles to maintain the high standards expected of a modern web portfolio.

---

**Design System Version:** 1.0  
**Last Updated:** October 15, 2025  
**Maintained by:** Syed Salman Reza
