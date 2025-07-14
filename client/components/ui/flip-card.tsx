import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard = React.forwardRef<HTMLDivElement, FlipCardProps>(
  ({ className, front, back, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flip-card w-full h-full perspective-1000", className)}
        {...props}
      >
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
          <div className="flip-card-front absolute w-full h-full backface-hidden">
            {front}
          </div>
          <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
            {back}
          </div>
        </div>
      </div>
    );
  }
);

FlipCard.displayName = "FlipCard";

export { FlipCard }; 