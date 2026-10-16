"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let isHovering = false;

    const updateMousePosition = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      
      const ringSize = isHovering ? 24 : 16;
      ring.style.transform = `translate3d(${x - ringSize}px, ${y - ringSize}px, 0)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const hover = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      );

      if (hover !== isHovering) {
        isHovering = hover;
        if (isHovering) {
          ring.style.width = "48px";
          ring.style.height = "48px";
          ring.style.backgroundColor = "rgba(255, 107, 26, 0.1)";
        } else {
          ring.style.width = "32px";
          ring.style.height = "32px";
          ring.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-[0.03s] ease-out"
        style={{ transform: "translate3d(-10px, -10px, 0)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-[transform,width,height,background-color] duration-[0.1s] ease-out"
        style={{ transform: "translate3d(-20px, -20px, 0)" }}
      />
    </>
  );
}
