"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const RING_COUNT = 5;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!dotRef.current || !isReady) return;

    const dot = dotRef.current;
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    ringRefs.current.forEach((r) => {
      if (r) gsap.set(r, { xPercent: -50, yPercent: -50 });
    });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });

    const ringPairs = ringRefs.current
      .map((el, i) =>
        el
          ? {
              x: gsap.quickTo(el, "x", { duration: 0.22 + i * 0.06, ease: "power2.out" }),
              y: gsap.quickTo(el, "y", { duration: 0.22 + i * 0.06, ease: "power2.out" }),
            }
          : null
      )
      .filter(Boolean) as { x: (v: number) => void; y: (v: number) => void }[];

    let raf = 0;
    let cx = 0;
    let cy = 0;

    const flush = () => {
      raf = 0;
      xTo(cx);
      yTo(cy);
      ringPairs.forEach((t) => {
        t.x(cx);
        t.y(cy);
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(flush);
    };

    const handleHoverEnter = () => {
      gsap.to(dot, {
        scale: 2,
        backgroundColor: "transparent",
        border: "1px solid var(--primary)",
        duration: 0.2,
      });
      ringRefs.current.forEach((r, i) => {
        if (!r) return;
        gsap.to(r, { scale: 1.08 + i * 0.04, opacity: 0.5, duration: 0.25 });
      });
    };

    const handleHoverLeave = () => {
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "var(--primary)",
        border: "none",
        duration: 0.2,
      });
      ringRefs.current.forEach((r, i) => {
        if (!r) return;
        gsap.to(r, { scale: 1, opacity: 0.35 - i * 0.055, duration: 0.25 });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor="hover"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;
    ringRefs.current.forEach((r, i) => {
      if (!r) return;
      gsap.set(r, { opacity: 0.38 - i * 0.06 });
    });
  }, [isReady]);

  if (!isReady) return null;

  const rings = Array.from({ length: RING_COUNT }, (_, i) => {
    const size = 24 + i * 14;
    const color = i % 2 === 0 ? "var(--primary)" : "var(--secondary)";
    return (
      <div
        key={i}
        ref={(el) => {
          ringRefs.current[i] = el;
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden rounded-full border-2 md:block"
        style={{
          width: size,
          height: size,
          borderColor: color,
          boxShadow: `0 0 ${10 + i * 5}px rgba(240, 147, 43, 0.14)`,
        }}
        aria-hidden
      />
    );
  });

  return (
    <>
      {rings}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-3 w-3 rounded-full bg-primary md:block"
      />
    </>
  );
}
