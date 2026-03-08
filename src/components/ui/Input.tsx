import React from "react";
import { cn } from "@/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none",
        "focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20",
        className
      )}
      {...props}
    />
  );
}
