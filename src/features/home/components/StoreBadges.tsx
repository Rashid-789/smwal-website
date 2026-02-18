import Link from "next/link";

type Props = {
  googlePlayHref: string;
  appStoreHref: string;
};

function BadgeShell({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="inline-flex h-11 items-center gap-3 rounded-xl border border-white/15 bg-black/35 px-4 text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur hover:bg-black/45"
    >
      {children}
    </Link>
  );
}

export default function StoreBadges({ googlePlayHref, appStoreHref }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <BadgeShell href={googlePlayHref} ariaLabel="Google Play">
        {/* Google Play icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3.5 2.7l11 9.3-11 9.3c-.3-.4-.5-1-.5-1.6V4.3c0-.6.2-1.2.5-1.6Z" fill="#34A853" />
          <path d="M14.5 12L18 9.3c.9.5 1.6.9 2 1.1.7.4.7 1.7 0 2.1-.4.2-1.1.6-2 1.1L14.5 12Z" fill="#FBBC05" />
          <path d="M3.5 2.7c.2-.3.6-.5 1-.3l12.9 7.4-3 2.2-10.9-9.3Z" fill="#EA4335" />
          <path d="M4.5 21.6c-.4.2-.8 0-1-.3l11-9.3 3 2.2-13 7.4Z" fill="#4285F4" />
        </svg>

        <div className="leading-tight">
          <div className="text-[10px] font-semibold text-white/60">GET IT ON</div>
          <div className="text-sm font-extrabold">Google Play</div>
        </div>
      </BadgeShell>

      <BadgeShell href={appStoreHref} ariaLabel="App Store">
        {/* Apple icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.7 12.8c0 2 1.7 2.7 1.7 2.7s-1.3 3.7-3 3.7c-.8 0-1.4-.5-2.2-.5-.8 0-1.5.5-2.4.5-1.6 0-3-3.2-3-5.6 0-2.6 1.6-4 3.1-4 .8 0 1.5.5 2.2.5.7 0 1.3-.5 2.3-.5.4 0 1.8.1 2.7 1.4-2.3 1.3-1.4 4-1.4 4ZM14.7 7.6c.6-.7 1-1.7.9-2.6-1 .1-2 .7-2.6 1.4-.6.6-1 1.6-.9 2.5 1 0 2-.6 2.6-1.3Z"
          />
        </svg>

        <div className="leading-tight">
          <div className="text-[10px] font-semibold text-white/60">Download on the</div>
          <div className="text-sm font-extrabold">App Store</div>
        </div>
      </BadgeShell>
    </div>
  );
}
