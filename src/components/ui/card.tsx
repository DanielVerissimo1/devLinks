import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-link border border-stroke bg-surface p-6 text-text backdrop-blur-[4px]",
        className,
      )}
      {...props}
    />
  );
}
