import Image from "next/image";
import Link from "next/link";

type Props = {
  number: string; // "01"
  title: string;
  description: string;
  action: { label: string; href: string };
};

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* line */}
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* head */}
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function getNumberImage(number: string) {
  switch (number) {
    case "01":
      return "/images/111111.svg";
    case "02":
      return "/images/2222.svg";
    case "03":
      return "/images/333.svg";
    default:
      return null;
  }
}

export default function JourneyStep({ number, title, description, action }: Props) {
  const numberImage = getNumberImage(number);

  return (
    <div className="relative">
      {/* big background number (SVG image) */}
      <div className="pointer-events-none select-none">
        {numberImage ? (
          <div className="relative h-[76px] w-[110px] md:h-[96px] md:w-[138px] lg:h-[90px] lg:w-[146px]">
            <Image
              src={numberImage}
              alt=""
              fill
              sizes="(max-width: 768px) 110px, (max-width: 1024px) 138px, 156px"
              className="object-contain object-left"
              priority={false}
            />
          </div>
        ) : (
          <div className="text-[76px] font-extrabold leading-none tracking-tight text-white/10 md:text-[84px]">
            {number}
          </div>
        )}
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