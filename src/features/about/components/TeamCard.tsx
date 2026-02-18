import Image from "next/image";

type Props = {
  name: string;
  role: string;
  email: string;
  image: string;
};

function MailDot() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-yellow-400 text-black">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4 7l8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TeamCard({ name, role, email, image }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="p-4">
        <div className="relative h-45 w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4">
          <div className="text-base font-extrabold text-white">{name}</div>
          <div className="mt-1 text-sm text-white/65">{role}</div>

          <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
            <MailDot />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
