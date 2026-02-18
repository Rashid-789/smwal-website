import Image from "next/image";

type PolaroidItem = {
  src: string;
  alt: string;
};

export default function PolaroidStack({ items }: { items: readonly PolaroidItem[] }) {
  const [left, center, right] = items;

  return (
    <div className="relative mx-auto h-85 w-85 sm:h-105 sm:w-105 lg:h-105 lg:w-130">
      {/* Left / back */}
      {left && (
        <Polaroid
          src={left.src}
          alt={left.alt}
          className="left-[2%] top-[44%] w-[44%] -rotate-12 opacity-95"
          z="z-10"
        />
      )}

      {/* Center / front */}
      {center && (
        <Polaroid
          src={center.src}
          alt={center.alt}
          className="left-[26%] top-[10%] w-[56%] rotate-[8deg]"
          z="z-30"
        />
      )}

      {/* Right */}
      {right && (
        <Polaroid
          src={right.src}
          alt={right.alt}
          className="right-[0%] top-[22%] w-[46%] rotate-10"
          z="z-20"
        />
      )}
    </div>
  );
}

function Polaroid({
  src,
  alt,
  className,
  z,
}: {
  src: string;
  alt: string;
  className: string;
  z: string;
}) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  return (
    <div
      className={[
        "absolute",
        z,
        className,
        "rounded-[22px] bg-neutral-900 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.65)]",
      ].join(" ")}
    >
      <div className="relative overflow-hidden rounded-2xl bg-black">
        <div className="relative aspect-4/5 w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 420px, 520px"
            unoptimized={isSvg}
            className="object-cover"
          />
        </div>

        {/* subtle sheen like screenshot */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(255,255,255,0.16),transparent_55%)]" />
      </div>
    </div>
  );
}
