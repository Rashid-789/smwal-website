import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  image: string;
  alt: string;
  title: string;
  time: string;
  summary: string;
  type: string;
  className?: string;
  href?: string; // optional: make whole card clickable
};

export default function HomeGrowWithPurpose({
  image,
  alt,
  title,
  time,
  summary,
  type,
  className = "",
  href,
}: Props) {
  const content = (
    <>
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
          <div className="flex flex-col gap-y-2 items-start justify-between">
            <h3 className=" text-[13px] leading-[1.15] text-white">
              {title}
            </h3>
             <h3 className=" text-[13px]  leading-[1.15] text-white">
              {summary}
            </h3>
          </div>

          {/* Time + place */}
          <div className="mt-2 space-y-1 flex justify-between">
            <p className="text-[11px] font-medium text-white/65">{type}</p>
            <p className="text-[11px] font-medium text-white/55">{time}</p>
          </div>
        </div>
      </div>
    </>
  );

  const cardClassName = cn(
    "group block overflow-hidden rounded-2xl border border-white/10",
    "bg-white/4 shadow-[0_18px_55px_rgba(0,0,0,0.65)] backdrop-blur-md",
    "transition duration-200 hover:-translate-y-0.5 hover:border-white/15",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
