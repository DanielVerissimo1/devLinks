"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { ThemeMode } from "@/types/theme";

type ThemeSwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  theme: ThemeMode;
};

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M13.25 9.28A5.6 5.6 0 0 1 6.72 2.75a5.6 5.6 0 1 0 6.53 6.53Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M11.25 2.25v2.5M10 3.5h2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M8 10.5A2.5 2.5 0 1 0 8 5a2.5 2.5 0 0 0 0 5.5ZM8 1.75v1.4M8 12.85v1.4M3.08 3.08l1 1M11.92 11.92l1 1M1.75 8h1.4M12.85 8h1.4M3.08 12.92l1-1M11.92 4.08l1-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ThemeSwitch({ className, theme, ...props }: ThemeSwitchProps) {
  const isLight = theme === "light";

  return (
    <button
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      className={cn(
        "relative h-10 w-switch rounded-pill backdrop-blur-[2px]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight",
        className,
      )}
      type="button"
      {...props}
    >
      <span className="absolute left-0 top-1/2 h-6 w-switch -translate-y-1/2 rounded-pill border border-stroke bg-surface backdrop-blur-[4px]" />
      <span
        className={cn(
          "absolute top-1 flex size-8 items-center justify-center rounded-pill bg-toggle-handle p-2 text-black transition-[left,box-shadow,border] duration-150",
          "shadow-switch-dark dark:shadow-switch-dark",
          isLight ? "left-8 shadow-switch-light" : "left-0",
          "hover:border-8 hover:border-highlight",
        )}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
