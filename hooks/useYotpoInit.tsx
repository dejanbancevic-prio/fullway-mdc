'use client'

import { tryInitYotpoWidgets } from "@/app/components/yotpo/tryInitYotpoWidgets";
import { useEffect, useRef } from "react";

export function useYotpoInit(open: boolean, id: number) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;

    const raf = requestAnimationFrame(() => {
      timeoutRef.current = window.setTimeout(() => {
        const container = document.getElementById("reviews-section");

        if (container) {
          const style = window.getComputedStyle(container);
          console.log(
            "reviews-section visible:",
            style.display,
            style.visibility,
            style.opacity
          );
        }

        tryInitYotpoWidgets();
      }, 150);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open, id]);
}
