import React from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SiteShell({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-hidden text-white",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
