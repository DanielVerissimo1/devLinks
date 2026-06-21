import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-10 items-center rounded-pill border border-stroke bg-surface px-4 text-sm font-normal leading-6 text-text backdrop-blur-[4px]",
        className,
      )}
      {...props}
    />
  );
}
