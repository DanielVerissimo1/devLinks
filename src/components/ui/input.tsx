import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-14 w-full rounded-link border border-stroke bg-surface px-4 text-md font-medium leading-6 text-text backdrop-blur-[4px]",
        "placeholder:text-text/50 hover:bg-surface-hover",
        "focus:border-text focus:outline-none focus:ring-2 focus:ring-highlight",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
