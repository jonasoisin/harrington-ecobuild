import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "white";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-[#C4122C]",
            secondary: "bg-secondary text-white hover:bg-[#112240]",
            outline:
                "border-2 border-deep-red text-primary hover:bg-primary hover:text-white",
            ghost: "text-secondary hover:bg-gray-100",
            link: "text-primary hover:underline p-0 h-auto",
            white: "bg-white text-secondary hover:bg-gray-100 font-bold",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wide rounded-sm",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
