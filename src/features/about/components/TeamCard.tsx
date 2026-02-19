// import Image from "next/image";

// type Props = {
//   name: string;
//   role: string;
//   email: string;
//   image: string;
// };

// function MailDot() {
//   return (
//     <span className="grid h-7 w-7 place-items-center rounded-full bg-yellow-400 text-black">
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//         <path
//           d="M4 6h16v12H4V6Z"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M4 7l8 6 8-6"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   );
// }

// export default function TeamCard({ name, role, email, image }: Props) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
//       <div className="p-4">
//         <div className="relative h-45 w-full overflow-hidden rounded-xl bg-black">
//           <Image
//             src={image}
//             alt={name}
//             fill
//             sizes="(max-width: 1024px) 100vw, 33vw"
//             className="object-cover"
//           />
//         </div>

//         <div className="mt-4">
//           <div className="text-base font-extrabold text-white">{name}</div>
//           <div className="mt-1 text-sm text-white/65">{role}</div>

//           <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
//             <MailDot />
//             <span>{email}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

type Props = {
  name: string;
  role: string;
  email: string;
  image: string;
};

function MailDot() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-yellow-400 text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function TeamCard({ name, role, email, image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
      {/* subtle hover spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(59,130,246,0.16),transparent_55%)]" />
      </div>

      <div className="relative p-4">
        <div className="relative h-45 w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="mt-4">
          <div className="text-base font-extrabold text-white">{name}</div>
          <div className="mt-1 text-sm text-white/65">{role}</div>

          <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
            <MailDot />
            <span className="transition group-hover:text-white">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
