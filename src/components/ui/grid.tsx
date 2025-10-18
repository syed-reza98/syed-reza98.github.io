import * as React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 2 | 3 | 4 | 5 | 6 | 8;
  responsive?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 4, responsive = true, ...props }, ref) => {
    const colsClasses = responsive
      ? {
          1: "grid-cols-1",
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
          6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
          12: "grid-cols-12",
        }
      : {
          1: "grid-cols-1",
          2: "grid-cols-2",
          3: "grid-cols-3",
          4: "grid-cols-4",
          5: "grid-cols-5",
          6: "grid-cols-6",
          12: "grid-cols-12",
        };

    const gapClasses = {
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
    };

    return (
      <div
        ref={ref}
        className={cn("grid", colsClasses[cols], gapClasses[gap], className)}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

export { Grid };
