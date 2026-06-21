import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ThemeMode } from "@/types/theme";

export type AvatarProps = {
  alt?: string;
  className?: string;
  theme?: ThemeMode;
};

export function Avatar({ alt = "", className, theme = "dark" }: AvatarProps) {
  return (
    <Image
      alt={alt}
      className={cn(
        "size-avatar overflow-hidden rounded-pill object-cover",
        className,
      )}
      height={112}
      priority
      src={theme === "light" ? "/profile-oculos-escuros.png" : "/profile.jpg" }
      width={112}
    />
  );
}
