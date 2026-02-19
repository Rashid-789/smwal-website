/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, staggerWrap } from "./variants";

const cn = (...v: Array<string | undefined | null | false>) => v.filter(Boolean).join(" ");

type RevealProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  variant?: any;
  once?: boolean;
  amount?: number;
  delay?: number;
} & Omit<MotionProps, "children">;

export function Reveal<T extends React.ElementType = "div">({
  as,
  className,
  children,
  variant,
  once = true,
  amount = 0.22,
  delay = 0,
  transition,
  ...rest
}: RevealProps<T>) {
  const reduce = useReducedMotion();
  const Comp: any = motion(as ?? "div");

  if (reduce) {
    return <Comp className={className} {...rest}>{children}</Comp>;
  }

  return (
    <Comp
      className={cn(className)}
      variants={variant ?? fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ ...(transition as any), delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  className,
  children,
  once = true,
  amount = 0.18,
}: {
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      variants={staggerWrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
