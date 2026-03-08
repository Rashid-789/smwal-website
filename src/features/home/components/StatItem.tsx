import Image from "next/image";

type Props = {
  value: string;
  label: string;
};

function getStatImage(value: string) {
  const v = value.replace(/\s/g, "").toUpperCase();

  switch (v) {
    case "50K+":
      return "/images/50K%2B.svg";
    case "70K+":
      return "/images/70K%2B.svg";
    case "3K+":
      return "/images/3K%2B.svg";
    case "500+":
      return "/images/500%2B.svg";
    default:
      return null;
  }
}

export default function StatItem({ value, label }: Props) {
  const statImage = getStatImage(value);

  return (
    <div className="text-center">
      {statImage ? (
        <div className="flex justify-center">
          <div className="relative h-[52px] w-[170px] md:h-[84px] md:w-[310px]">
            <Image
              src={statImage}
              alt={value}
              fill
              unoptimized
              sizes="(max-width: 768px) 170px, 210px"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <div
          className="select-none text-[52px] font-extrabold leading-none tracking-tight md:text-[56px]"
          style={{
            color: "rgba(255,255,255,0.035)",
            WebkitTextStroke: "1.2px rgba(255,255,255,0.18)",
            textShadow:
              "0 1px 0 rgba(0,0,0,0.35), 0 14px 40px rgba(0,0,0,0.25)",
          }}
        >
          {value}
        </div>
      )}

      <div
        className="mt-6 text-center text-[19px] font-semibold leading-[1] tracking-[0] text-[#D1D5DB]"
        style={{
          fontFamily: "'General Sans', var(--font-sans)",
        }}
      >
        {label}
      </div>
    </div>
  );
}