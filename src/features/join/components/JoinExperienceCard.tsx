// // export default function JoinExperienceCard({
// //   n,
// //   title,
// //   desc,
// // }: {
// //   n: string;
// //   title: string;
// //   desc: string;
// // }) {
// //   return (
// //     <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
// //       {/* subtle hover spotlight */}
// //       <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
// //         <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
// //       </div>

// //       <div className="relative flex gap-4">
// //         <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-400 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
// //           {n}
// //         </div>

// //         <div>
// //           <div className="text-base font-extrabold text-white">{title}</div>
// //           <p className="mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// type Props = {
//   n: string;
//   title: string;
//   desc: string;
//   className?: string;
// };

// export default function JoinExperienceCard({ n, title, desc, className = "" }: Props) {
//   return (
//     <div
//       className={[
//         "relative overflow-hidden rounded-2xl",
//         "border border-white/10 bg-black/35 backdrop-blur",
//         "shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
//         "transition hover:border-white/15 hover:bg-black/40",
//         className,
//       ].join(" ")}
//     >
//       <div className="flex items-start gap-3 p-4">
//         {/* ✅ yellow badge like screenshot */}
//         <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-400">
//           <span className="text-base font-extrabold text-white">{n}</span>
//         </div>

//         <div className="min-w-0">
//           <div className="text-[18px] font-extrabold text-white">{title}</div>
//           <p className="mt-2 text-[15px] leading-relaxed text-white/70">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }



type Props = {
  n: string;
  title: string;
  desc: string;
  className?: string;
};

export default function JoinExperienceCard({
  n,
  title,
  desc,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-black/35 backdrop-blur",
        "shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        "transition hover:border-white/15 hover:bg-black/40",
        className,
      ].join(" ")}
    >
      {/* ✅ changed items-start -> items-center */}
      <div className="flex items-center gap-5 p-6">
        {/* yellow badge */}
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow-400">
          <span className="text-base font-extrabold text-white">{n}</span>
        </div>

        <div className="min-w-0">
          <div className="text-[18px] font-extrabold text-white">{title}</div>
          <p className="mt-2 text-[15px] leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}