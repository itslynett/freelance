import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "glass rounded-xl border border-white/5 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-white/10 hover:shadow-2xl",
            className
        )}
        {...props}
    />
));
Card.displayName = "Card";

export { Card };
