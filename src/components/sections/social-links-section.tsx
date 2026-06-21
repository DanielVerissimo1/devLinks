import Image from "next/image";
import { SocialLink } from "@/components/ui/social-link";

type SocialItem = {
  href: string;
  iconSrc: string;
  label: string;
};

const socialLinks: SocialItem[] = [
  {
    href: "https://github.com/DanielVerissimo1",
    iconSrc: "/assets/icons/GitHub.svg",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/daniel.verissimo1/",
    iconSrc: "/assets/icons/Instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/daniel-verissimo",
    iconSrc: "/assets/icons/LinkedIn.svg",
    label: "LinkedIn",
  },
];

export function SocialLinksSection() {
  return (
    <section className="flex w-full items-center justify-center gap-4 p-6">
      {socialLinks.map((link) => (
        <SocialLink
          href={link.href}
          key={link.label}
          label={link.label}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="invert dark:invert-0"
            height={24}
            src={link.iconSrc}
            width={24}
          />
        </SocialLink>
      ))}
    </section>
  );
}
