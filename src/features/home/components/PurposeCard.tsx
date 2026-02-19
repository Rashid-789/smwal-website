import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  alt: string;
  title: string;
  description: string;
  action: { label: string; href: string };
};

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PurposeCard({ image, alt, title, description, action }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="p-4">
        <div className="relative h-80.5 w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <h3 className="mt-5 text-lg font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

        <div className="mt-5">
          <Link
            href={action.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/15"
          >
            {action.label}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
