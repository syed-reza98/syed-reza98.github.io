# GitHub Copilot Instructions

## Context
Personal portfolio website for Syed Salman Reza, a full-stack developer. Built with Next.js 15, TypeScript, Tailwind CSS 4, and Radix UI. Prioritizes performance, accessibility, and modern design engineering principles.

## Code Generation Guidelines

### Component Creation
When creating React components:
- Use TypeScript with proper interface definitions
- Implement Radix UI primitives for complex interactions
- Follow polymorphic component pattern with `asChild` prop
- Use CVA (class-variance-authority) for variant management
- Apply Tailwind utilities following design system tokens
- Ensure mobile-first responsive design
- Include proper ARIA labels and accessibility attributes
- Use `React.forwardRef` when component needs ref support

Example pattern:
```typescript
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "classes", secondary: "classes" },
      size: { sm: "classes", lg: "classes" },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
);

interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean;
}

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Component.displayName = "Component";
```

### Styling Approach
Always use:
- Tailwind CSS utilities (primary method)
- Design tokens via CSS custom properties
- Mobile-first responsive modifiers (`sm:`, `md:`, `lg:`, `xl:`)
- Semantic color usage from Radix Colors
- 8px spacing grid (`space-4`, `space-6`, `space-8`, etc.)
- Consistent border radius (`rounded-md`, `rounded-lg`)

Avoid:
- Arbitrary values (use design tokens instead)
- Inline styles
- Custom CSS classes (use Tailwind utilities)
- Hard-coded colors (use CSS variables)

### TypeScript Standards
- Strict mode enabled - no `any` types
- Export interfaces alongside components
- Use proper React types (`React.FC`, `React.HTMLAttributes`, etc.)
- Define props interfaces explicitly
- Use discriminated unions for complex state

### Accessibility Requirements
Every component must include:
- Semantic HTML elements (`button`, `nav`, `main`, `section`)
- ARIA labels for icon-only buttons (`aria-label`)
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators (`focus-visible:ring-2`)
- Screen reader announcements where needed
- Proper heading hierarchy (H1 → H2 → H3)

### Performance Optimization
- Use Next.js `Image` component for all images
- Implement lazy loading for below-fold content
- Use `dynamic()` for heavy client components
- Keep bundle size minimal (prefer composition over large libs)
- Avoid unnecessary re-renders (useMemo, useCallback judiciously)

### File Organization
Place files in correct locations:
- Base UI components → `src/components/ui/`
- Section components → `src/components/sections/`
- Layout components → `src/components/layout/`
- Utilities → `src/lib/`
- Pages → `src/app/[page]/page.tsx`

### Naming Conventions
- Files: kebab-case (`my-component.tsx`)
- Components: PascalCase (`MyComponent`)
- Functions/variables: camelCase (`myFunction`)
- Constants: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- CSS variables: kebab-case (`--color-primary`)

## Design System Reference

### Typography
```typescript
H1: "text-4xl md:text-5xl lg:text-6xl font-bold"
H2: "text-3xl md:text-4xl font-bold"
H3: "text-2xl md:text-3xl font-semibold"
H4: "text-xl md:text-2xl font-semibold"
Body: "text-base leading-normal"
Lead: "text-lg md:text-xl text-muted-foreground"
Small: "text-sm"
Muted: "text-sm text-muted-foreground"
```

### Spacing
Common patterns:
```typescript
Component padding: "p-6"
Section padding: "py-12 md:py-20"
Stack gap: "space-y-4" or "flex flex-col gap-6"
Grid gap: "gap-4 md:gap-6 lg:gap-8"
Button padding: "px-4 py-2"
```

### Colors
Use semantic color tokens:
```typescript
Background: "bg-background"
Foreground: "text-foreground"
Muted: "bg-muted text-muted-foreground"
Accent: "bg-accent text-accent-foreground"
Border: "border-border"
Primary: "bg-primary text-primary-foreground"
```

### Layout
Common patterns:
```typescript
Container: "container mx-auto px-4"
Section: "py-12 md:py-20"
Grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
Centered: "flex items-center justify-center"
Stack: "flex flex-col gap-4"
```

## Common Patterns

### Page Structure
```typescript
export default function Page() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold">Page Title</h1>
        {/* Content */}
      </section>
    </div>
  );
}
```

### Card Component
```typescript
<div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">Card description</p>
</div>
```

### Button Usage
```typescript
<Button variant="default" size="lg">Primary Action</Button>
<Button variant="outline" size="default">Secondary</Button>
<Button variant="ghost">Tertiary</Button>
<Button asChild>
  <Link href="/page">Link as Button</Link>
</Button>
```

## Code Quality

### Before Suggesting Code
- Ensure TypeScript types are correct
- Verify Tailwind classes are valid
- Check accessibility requirements
- Confirm responsive design
- Validate against design system

### Error Handling
- Provide user-friendly error messages
- Implement error boundaries for components
- Handle loading states with skeletons
- Show empty states with helpful guidance

### Testing Considerations
- Components should be testable
- Props should have sensible defaults
- Side effects should be isolated
- Pure functions preferred

## Deployment Notes

- Static export enabled (`output: "export"`)
- Images must be unoptimized for static export
- No server-side rendering features
- All routes must be statically generated
- Environment variables handled at build time

## AI Assistant Behavior

When I ask you to:
- **Create a component**: Use patterns above, include variants, ensure accessibility
- **Style something**: Use Tailwind utilities and design tokens
- **Make it responsive**: Mobile-first approach with appropriate breakpoints
- **Improve accessibility**: Add ARIA labels, keyboard nav, semantic HTML
- **Optimize performance**: Use Next.js Image, lazy loading, code splitting
- **Fix errors**: Check TypeScript types, Tailwind classes, import paths

## Priority Order

1. **Accessibility**: WCAG 2.1 AA compliance
2. **TypeScript**: Proper typing, no `any`
3. **Design System**: Use tokens consistently
4. **Performance**: Optimize images, bundle size
5. **Responsiveness**: Mobile-first design
6. **Code Quality**: Clean, maintainable code

## Examples to Follow

### Good Example ✅
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ title, subtitle, className }: HeroProps) {
  return (
    <section className={cn("container mx-auto px-4 py-20 text-center", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}
```

### Bad Example ❌
```typescript
// Avoid: No types, inline styles, arbitrary values, not responsive
function Hero(props: any) {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", color: "#0070f3" }}>
        {props.title}
      </h1>
      <p style={{ fontSize: "20px", color: "#666" }}>
        {props.subtitle}
      </p>
    </div>
  );
}
```

---

**Remember**: This portfolio represents professional work. Every component should be production-ready, accessible, performant, and well-documented.
