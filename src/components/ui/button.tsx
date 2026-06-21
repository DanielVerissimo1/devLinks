import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonBaseProps = {
  fullWidth?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "flex h-14 items-center justify-center rounded-link border border-stroke bg-surface px-6 py-4 text-md font-medium leading-6 text-text backdrop-blur-[4px]",
    "transition-[background-color,border-color] duration-150 hover:border-[1.5px] hover:border-text hover:bg-surface-hover active:border-[1.5px] active:border-text active:bg-surface-hover",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight",
    fullWidth ? "w-full" : "w-button",
    className,
  );

  if ("href" in props && props.href) {
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return <a className={buttonClassName} {...linkProps} />;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={buttonClassName}
      type="button"
      {...buttonProps}
    />
  );
}
