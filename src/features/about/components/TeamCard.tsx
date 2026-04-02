import Image from "next/image";

type Props = {
  name: string;
  role: string;
  email: string;
  image: string;
};

function YellowIcon() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-yellow-400 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* briefcase icon (same look screenshot) */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
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
        <div className="relative h-60 w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="mt-4">
          <div className="text-base font-extrabold text-white">{name}</div>
          <div className="mt-1 text-sm text-white/65">{role}</div>

          {/* same icon for all cards */}
          <div className="mt-4 flex items-center gap-4 text-base text-white/80">
            <YellowIcon />
            <span className="transition group-hover:text-white">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}