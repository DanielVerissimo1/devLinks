import { Button } from "@/components/ui/button";

type LinkItem = {
  id: string;
  href: string;
  label: string;
  download?: string;
};

type LinksSectionProps = {
  links: LinkItem[];
};

export function LinksSection({ links }: LinksSectionProps) {
  return (
    <section className="flex w-full flex-col gap-4 p-6">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <Button
            fullWidth
            download={link.download}
            href={link.href}
            key={link.id}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            {link.label}
          </Button>
        );
      })}
    </section>
  );
}
