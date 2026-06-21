import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-[588px] flex-col px-6", className)}
      {...props}
    />
  );
}
