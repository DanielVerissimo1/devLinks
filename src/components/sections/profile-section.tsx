import { Avatar } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";
import type { ThemeMode } from "@/types/theme";

type ProfileSectionProps = {
  theme: ThemeMode;
  username: string;
};

export function ProfileSection({ theme, username }: ProfileSectionProps) {
  return (
    <section className="flex w-full flex-col items-center gap-2 p-6">
      <Avatar alt={username} theme={theme} />
      <Typography className="whitespace-nowrap" variant="body">
        {username}
      </Typography>
    </section>
  );
}
