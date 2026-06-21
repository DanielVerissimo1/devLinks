import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextVariant = "body" | "button" | "caption";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  children: ReactNode;
  variant?: TextVariant;
};

const variantClasses: Record<TextVariant, string> = {
  body: "text-md font-medium leading-6",
  button: "text-md font-medium leading-6",
  caption: "text-sm font-normal leading-6",
};

export function Typography({
  as: Component = "p",
  className,
  children,
  variant = "body",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn("text-text", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
