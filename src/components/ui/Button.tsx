/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (Common & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

function styles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white hover:brightness-110";
    case "secondary":
      return "bg-white/10 text-white hover:bg-white/15 border border-white/10";
    case "ghost":
    default:
      return "bg-transparent text-white/80 hover:text-white";
  }
}

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "secondary";
  const className = props.className;
  const children = props.children;

  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const cls = cn(base, styles(variant), className);

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      variant: _variant,
      className: _className,
      children: _children,
      ...a
    } = props;

    // ✅ hash-only links scroll best with plain <a>
    if (href.startsWith("#")) {
      return (
        <a href={href} className={cls} {...a}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} {...a}>
        {children}
      </Link>
    );
  }

  const { variant: _variant, className: _className, children: _children, ...b } =
    props;
  return (
    <button className={cls} {...b}>
      {children}
    </button>
  );
}