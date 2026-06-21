"use client";

import { ThemeSwitch } from "@/components/ui/theme-switch";
import type { ThemeMode } from "@/types/theme";

type HeaderProps = {
  onToggleTheme: () => void;
  theme: ThemeMode;
};

export function Header({ onToggleTheme, theme }: HeaderProps) {
  return (
    <header className="flex w-full justify-end">
      <nav aria-label="Tema">
        <ThemeSwitch onClick={onToggleTheme} theme={theme} />
      </nav>
    </header>
  );
}
