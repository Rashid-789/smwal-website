import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.svg"
        alt="SMWAL"
        width={44}
        height={44}
        priority
        className="h-10 w-10"
      />
      <span className="text-[15px] font-bold tracking-[0.02em] text-white">
        Single & Mareied<br></br> WITH A LIFE
      </span>
      
    </div>
  );
}