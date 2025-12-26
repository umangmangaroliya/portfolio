import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive =
          target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".tilt-card") ||
          target.closest('[role="button"]') ||
          window.getComputedStyle(target).cursor === "pointer";

        setIsHovering(!!isInteractive);
      }
    };

    const animate = () => {
      // Snappy lerp for the follow ring (0.8 = very fast)
      const lerp = 0.8;
      ringPosRef.current.x +=
        (mouseRef.current.x - ringPosRef.current.x) * lerp;
      ringPosRef.current.y +=
        (mouseRef.current.y - ringPosRef.current.y) * lerp;

      // RING LOGIC
      if (ringRef.current) {
        const ringScale = isClicking ? 0.5 : 1; //isHovering ? 1.5 :
        const ringRotate = isHovering ? 45 : 0;
        // Ring is w-10 (40px), so offset is -20px to center it on coordinates
        ringRef.current.style.transform = `translate3d(${
          ringPosRef.current.x - 20
        }px, ${
          ringPosRef.current.y - 20
        }px, 0) scale(${ringScale}) rotate(${ringRotate}deg)`;
      }

      // DOT LOGIC
      if (dotRef.current) {
        const dotScale = isClicking ? 1.2 : isHovering ? 1.4 : 1;
        // Dot is w-2 (8px), so offset is -4px to center it on coordinates
        // Using mouseRef directly for zero latency
        dotRef.current.style.transform = `translate3d(${
          mouseRef.current.x - 4
        }px, ${mouseRef.current.y - 4}px, 0) scale(${dotScale})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering, isClicking, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none">
      {/*
          OUTER RING
          CSS transitions on 'transform' are removed to prevent lag.
          We only transition colors.
      */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 w-10 h-10 border-2 rounded-full ring-1 transition-colors duration-300 ${
          isHovering
            ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.5)] ring-cyan-400/20"
            : "border-red-600 bg-transparent shadow-[0_0_15px_rgba(255,0,60,0.3)] ring-white/10"
        } ${isClicking ? "!border-white !shadow-white" : ""}`}
        style={{ willChange: "transform", transformOrigin: "center center" }}
      >
        {/* Decorative Crosshairs */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 transition-colors duration-300 ${
            isHovering ? "bg-cyan-400" : "bg-red-500"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 transition-colors duration-300 ${
            isHovering ? "bg-cyan-400" : "bg-red-500"
          }`}
        ></div>
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px transition-colors duration-300 ${
            isHovering ? "bg-cyan-400" : "bg-red-500"
          }`}
        ></div>
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-px transition-colors duration-300 ${
            isHovering ? "bg-cyan-400" : "bg-red-500"
          }`}
        ></div>
      </div>

      {/*
          INNER DOT
          Centering is handled by JS translate3d -4px offset.
      */}
      <div
        ref={dotRef}
        className={`absolute top-0.5 left-0.5 w-1 h-1 rounded-full ring-1 transition-colors duration-300 ${
          isHovering || isClicking
            ? "bg-white shadow-[0_0_6px_#fff] ring-cyan-400"
            : "bg-red-600 shadow-[0_0_8px_#ff003c] ring-white/20"
        } ${isClicking ? "!w-0.5 !h-0.5 left-[3px] top-[3px]" : ""}`}
        style={{ willChange: "transform", transformOrigin: "center center" }}
      />

      {/* Interaction Pulse */}
      {isHovering && (
        <div
          className="absolute top-0 left-0 w-10 h-10 border border-cyan-400 rounded-full animate-ping opacity-30"
          style={{
            transform: `translate3d(${mouseRef.current.x - 20}px, ${
              mouseRef.current.y - 20
            }px, 0)`,
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
