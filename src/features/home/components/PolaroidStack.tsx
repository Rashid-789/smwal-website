"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  alt?: string;
};

export default function PolaroidStack({ alt = "Polaroid collage" }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto h-85 w-85 sm:h-105 sm:w-105 lg:h-105 lg:w-130">
      <motion.div
        className="absolute left-90 top-57 w-[170%] -translate-x-1/2 -translate-y-1/2"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={
          reduce
            ? undefined
            : {
                opacity: 1,
                y: [0, -8, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                opacity: { duration: 0.45, ease: "easeOut" },
                y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
              }
        }
        whileHover={reduce ? undefined : { y: -10, scale: 1.02 }}
      >
        {/* frame */}
        <div className="">
          <div className="">
            {/* ✅ single image */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/3in1.svg"
                alt={alt}
                fill
                sizes="(max-width: 1024px) 420px, 520px"
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}