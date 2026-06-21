"use client";

import { useState } from "react";
import { LinksSection } from "@/components/sections/links-section";

import { ProfileSection } from "@/components/sections/profile-section";
import { SocialLinksSection } from "@/components/sections/social-links-section";
import { Container } from "@/components/ui/container";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { cn } from "@/lib/cn";
import type { ThemeMode } from "@/types/theme";

const profileLinks = [
  {
    id: "portfolio",
    href: "https://daniel-verissimodev.vercel.app/",
    label: "Veja Meu Portfólio",
  },
  {
    id: "curriculo",
    href: "/Daniel%20Verissimo%20-%20Font-End.pdf",
    label: "Baixe Meu Currículo",
    download: "Daniel Verissimo - Font-End.pdf",
  },
  {
    id: "conectar",
    href: "https://linkedin.com/in/daniel-verissimo",
    label: "Conecte-se Comigo",
  },
  {
    id: "contato",
    href: "mailto:danielsantoss1300@gmail.com",
    label: "Contate-me",
  },
];

export function DevLinksPage() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const isDark = theme === "dark";

  return (
    <main className={cn("min-h-screen text-text", isDark && "dark")}>
      <div className="devlinks-background min-h-screen pt-14">
        <Container className="items-center px-0">
          <ProfileSection theme={theme} username="@daniel.verissimo1" />
          <ThemeSwitch
            onClick={() => setTheme(isDark ? "light" : "dark")}
            theme={theme}
          />
          <LinksSection links={profileLinks} />
          <SocialLinksSection />
        
        </Container>
      </div>
    </main>
  );
}
