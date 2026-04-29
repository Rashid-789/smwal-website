import type React from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { Reveal } from "@/shared/motion/Motion";

type CenteredCtaButtonProps = {
  label: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
};

export default function CenteredCtaButton({
  label,
  href,
  children,
  className,
  wrapperClassName,
}: CenteredCtaButtonProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center px-4 py-14 text-center md:py-20 lg:py-24",
        wrapperClassName
      )}
    >
      <Reveal className="flex flex-col items-center justify-center gap-y-8 text-center md:gap-y-9">
        {children}
        <Button
          href={href}
          variant="primary"
          className={cn(
            "rounded-full bg-linear-to-r from-pink-800 via-fuchsia-700 to-blue-700 font-extrabold text-white shadow-[0_20px_60px_rgba(39,83,255,0.35)] ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_26px_80px_rgba(214,20,90,0.36)] active:translate-y-0 active:scale-[0.98]",
            className
          )}
        >
          {label}
        </Button>
      </Reveal>
    </section>
  );
}
