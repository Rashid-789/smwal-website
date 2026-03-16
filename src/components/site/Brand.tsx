import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.svg"
        alt="SMWAL"
        width={52}
        height={52}
        priority
        className="h-13 w-13"
      />
      <span className="text-[15px] font-bold tracking-[0.02em] text-white">
        Single & Married<br></br> WITH A LIFE
      </span>
      
    </div>
  );
}
