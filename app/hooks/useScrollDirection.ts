"use client";

import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 10);

      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, atTop };
}
