import Image from "next/image";
import Link from "next/link";

type Props = {
  googlePlayHref: string;
  appStoreHref: string;
  className?: string;
};

export default function StoreBadges({
  googlePlayHref,
  appStoreHref,
  className,
}: Props) {
  return (
    <div
      className={[
        "flex h-[54px] w-[352.4210510253906px] max-w-full items-center gap-[17.05px] opacity-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Google Play */}
      <Link
        href={googlePlayHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-[54px] w-[167.6855px] items-center rounded-xl"
        aria-label="Get it on Google Play"
      >
        <Image
          src="/images/playstore.svg"
          alt="Google Play"
          width={168}
          height={54}
          className="h-[54px] w-[167.6855px]"
          priority={false}
        />
      </Link>

      {/* App Store */}
      <Link
        href={appStoreHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-[54px] w-[167.6855px] items-center rounded-xl"
        aria-label="Download on the App Store"
      >
        <Image
          src="/images/apple.svg"
          alt="App Store"
          width={168}
          height={54}
          className="h-[54px] w-[167.6855px]"
          priority={false}
        />
      </Link>
    </div>
  );
}
