import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevLinks",
  description: "Design system DevLinks implementado com Next.js e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
