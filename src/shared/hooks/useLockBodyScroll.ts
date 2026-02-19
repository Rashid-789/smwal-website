"use client";

import { useEffect } from "react";

type OriginalStyles = {
  bodyOverflow: string;
  bodyPaddingRight: string;
  htmlOverflow: string;
};

let lockCount = 0;
let originalStyles: OriginalStyles | null = null;

export default function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const body = document.body;
    const html = document.documentElement;

    if (lockCount === 0) {
      originalStyles = {
        bodyOverflow: body.style.overflow,
        bodyPaddingRight: body.style.paddingRight,
        htmlOverflow: html.style.overflow,
      };

      const scrollbarWidth = window.innerWidth - html.clientWidth;
      const computedBodyPaddingRight = Number.parseFloat(getComputedStyle(body).paddingRight) || 0;

      html.style.overflow = "hidden";
      body.style.overflow = "hidden";

      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${computedBodyPaddingRight + scrollbarWidth}px`;
      }
    }

    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);

      if (lockCount === 0 && originalStyles) {
        body.style.overflow = originalStyles.bodyOverflow;
        body.style.paddingRight = originalStyles.bodyPaddingRight;
        html.style.overflow = originalStyles.htmlOverflow;
        originalStyles = null;
      }
    };
  }, [locked]);
}
