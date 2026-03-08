import Image from "next/image";

type IconProps = { className?: string };

function SvgIcon({
  src,
  alt,
  className = "h-10 w-10",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className={className}
      priority={false}
    />
  );
}

export function YouTubeIcon({ className = "h-7 w-7" }: IconProps) {
  return <SvgIcon src="/images/youtuob.svg" alt="YouTube" className={className} />;
}

export function FacebookIcon({ className = "h-7 w-7" }: IconProps) {
  return <SvgIcon src="/images/facebook.svg" alt="Facebook" className={className} />;
}

export function InstagramIcon({ className = "h-7 w-7" }: IconProps) {
  return <SvgIcon src="/images/instagram.svg" alt="Instagram" className={className} />;
}

export function TikTokIcon({ className = "h-7 w-7" }: IconProps) {
  return <SvgIcon src="/images/tiktok.svg" alt="TikTok" className={className} />;
}