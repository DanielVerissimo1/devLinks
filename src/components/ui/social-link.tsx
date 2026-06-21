import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SocialLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  label: string;
};

export function SocialLink({
  children,
  className,
  label,
  ...props
}: SocialLinkProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        "flex size-social items-center justify-center rounded-pill text-text transition-colors duration-150 hover:bg-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight",
        className,
      )}
      {...props}
    >
      <span className="flex size-icon items-center justify-center">{children}</span>
    </a>
  );
}
