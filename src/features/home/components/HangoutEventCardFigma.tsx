import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  image: string;
  alt: string;
  title: string;
  price: string;
  time: string;
  place: string;
  className?: string;
  href?: string; // optional: make whole card clickable
};

export default function HangoutEventCardFigma({
  image,
  alt,
  title,
  price,
  time,
  place,
  className = "",
  href,
}: Props) {
  const CardTag: any = href ? Link : "div";
  const cardProps = href ? { href } : {};

  return (
    <CardTag
      {...cardProps}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-white/10",
        "bg-white/4 shadow-[0_18px_55px_rgba(0,0,0,0.65)] backdrop-blur-md",
        "transition duration-200 hover:-translate-y-0.5 hover:border-white/15",
        className,
      )}
    >
      {/* Image (inset like Figma) */}
      <div className="p-3">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 260px, 320px"
            className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
          {/* subtle top vignette like screenshot */}
          <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/35" />
        </div>

        {/* Content */}
        <div className="mt-3">
          {/* Title + Price row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="max-w-42.5 text-[13px] font-extrabold leading-[1.15] text-white">
              {title}
            </h3>

            <div className="shrink-0 pt-0.5 text-[13px] font-extrabold text-violet-400">
              {price}
            </div>
          </div>

          {/* Time + place */}
          <div className="mt-2 space-y-1">
            <p className="text-[11px] font-medium text-white/65">{time}</p>
            <p className="text-[11px] font-medium text-white/55">{place}</p>
          </div>
        </div>
      </div>
    </CardTag>
  );
}
