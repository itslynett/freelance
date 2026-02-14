import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, id, container = true, children, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn("py-20 md:py-32 relative overflow-hidden", className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
