// import Image from "next/image";

// export default function HangoutEventCard({
//   image,
//   alt,
//   title,
//   price,
//   time,
//   place,
//   className = "",
// }: {
//   image: string;
//   alt: string;
//   title: string; // can contain \n
//   price: string;
//   time: string;
//   place: string;
//   className?: string;
// }) {
//   const isSvg = image.toLowerCase().endsWith(".svg");

//   return (
//     <div
//       className={[
//         "overflow-hidden rounded-2xl border border-white/10 bg-black/35",
//         "shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur",
//         "transition hover:border-white/15 hover:bg-black/40",
//         className,
//       ].join(" ")}
//     >
   
//       <div className="p-3 pb-0">
//         <div className="relative h-36 w-full overflow-hidden rounded-xl bg-black sm:h-40">
//           <Image
//             src={image}
//             alt={alt}
//             fill
//             sizes="(max-width: 768px) 260px, 320px"
//             className="object-cover"
//             unoptimized={isSvg}
//           />
//           <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.35))]" />
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="whitespace-pre-line text-[14px] font-extrabold leading-snug text-white">
//             {title}
//           </h3>
//           <span className="shrink-0 text-[13px] font-extrabold text-violet-400">
//             {price}
//           </span>
//         </div>

//         <p className="mt-2 text-[12px] leading-relaxed text-white/70">
//           {time}
//           <br />- {place}
//         </p>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
import Link from "next/link";

export default function HangoutEventCard({
  image,
  alt,
  title,
  price,
  time,
  place,
  className = "",
  registerHref,
}: {
  image: string;
  alt: string;
  title: string;
  price: string;
  time: string;
  place: string;
  className?: string;
  registerHref?: string; // ✅ optional, doesn't break old calls
}) {
  const isSvg = image.toLowerCase().endsWith(".svg");

  return (
    <div
      className={[
        "overflow-hidden rounded-2xl border border-white/10 bg-black/35",
        "shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur",
        "transition hover:border-white/15 hover:bg-black/40",
        className,
      ].join(" ")}
    >
      <div className="p-3 pb-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 260px, 320px"
            className="object-cover object-center"
            unoptimized={isSvg}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06),rgba(0,0,0,0.32))]" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[14px] font-extrabold leading-snug text-white">
            {title}
          </h3>
          <span className="shrink-0 text-[13px] font-extrabold text-amber-400">
            {price}
          </span>
        </div>

        <p className="mt-2 text-[12px] leading-relaxed text-white/70">
          {time} - {place}
        </p>

        <div className="mt-4">
          <div className="rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-sky-500 p-[1px]">
            {registerHref ? (
              <Link
                href={registerHref}
                className="flex h-9 w-full items-center justify-center rounded-full bg-black text-[12px] font-semibold text-white/90 transition hover:bg-black/90"
              >
                Register Now
              </Link>
            ) : (
              <button
                type="button"
                className="h-9 w-full rounded-full bg-black text-[12px] font-semibold text-white/90 transition hover:bg-black/90"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}