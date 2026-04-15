"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const BUBBLE_SIZE = 620;
// The glow effect is inspired by the one on https://www.apple.com/airpods-pro/
export default function HeroSectionGlow() {
  const reducedMotion = useReducedMotion();

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const targetOpacity = useMotionValue(0.72);

  const x = useSpring(targetX, {
    stiffness: 55,
    damping: 18,
    mass: 0.9,
  });

  const y = useSpring(targetY, {
    stiffness: 55,
    damping: 18,
    mass: 0.9,
  });

  const opacity = useSpring(targetOpacity, {
    stiffness: 80,
    damping: 20,
    mass: 0.7,
  });

  useEffect(() => {
    const setHomePosition = () => {
      targetX.set(window.innerWidth * 0.5 - BUBBLE_SIZE / 2);
      targetY.set(window.innerHeight - BUBBLE_SIZE * 0.72);
    };

    setHomePosition();

    if (reducedMotion) return;

    let raf = 0;

    const moveToPointer = (clientX: number, clientY: number) => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        targetX.set(clientX - BUBBLE_SIZE / 2);
        targetY.set(clientY - BUBBLE_SIZE / 2);
        targetOpacity.set(0.92);
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      moveToPointer(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      setHomePosition();
      targetOpacity.set(0.72);
    };

    const handleResize = () => {
      setHomePosition();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [reducedMotion, targetOpacity, targetX, targetY]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[78%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.42) 0%, rgba(139,92,246,0.26) 30%, rgba(139,92,246,0.22) 60%, rgba(139,92,246,1) 78%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,18,0.24)_0%,rgba(6,4,14,0.14)_45%,rgba(3,2,10,0.32)_100%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          x,
          y,
          opacity,
          width: BUBBLE_SIZE,
          height: BUBBLE_SIZE,
          filter: "blur(120px)",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.48) 0%, rgba(124,58,237,0.3) 28%, rgba(168,85,247,0.16) 52%, rgba(139,92,246,0.05) 68%, rgba(139,92,246,0) 78%)",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,18,0.18)_0%,rgba(6,4,14,0.08)_45%,rgba(3,2,10,0.28)_100%)]" />
    </div>
  );
}
