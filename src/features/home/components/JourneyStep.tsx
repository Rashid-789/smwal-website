import Link from "next/link";

type Props = {
  number: string; // "01"
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

export default function JourneyStep({ number, title, description, action }: Props) {
  return (
    <div className="relative">
      {/* big background number */}
      <div className="pointer-events-none select-none text-[76px] font-extrabold leading-none tracking-tight text-white/10 md:text-[84px]">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-white">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{description}</p>

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
  );
}
