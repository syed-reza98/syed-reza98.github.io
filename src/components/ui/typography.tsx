import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
      h2: "scroll-m-20 text-3xl font-bold tracking-tight md:text-4xl",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight md:text-3xl",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl",
      h5: "scroll-m-20 text-lg font-semibold md:text-xl",
      h6: "scroll-m-20 text-base font-semibold md:text-lg",
      body: "text-base leading-normal",
      lead: "text-lg leading-relaxed text-muted-foreground md:text-xl",
      large: "text-lg font-medium",
      small: "text-sm leading-normal",
      muted: "text-sm text-muted-foreground",
      code: "font-mono text-sm bg-muted px-2 py-1 rounded-md",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
