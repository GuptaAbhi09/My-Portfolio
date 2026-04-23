"use client";

import { useEffect, useRef } from "react";

const InteractiveEffects = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current) {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const totalScroll = docHeight - winHeight;
        const pct = totalScroll > 0 ? window.scrollY / totalScroll : 0;
        progressBarRef.current.style.width = `${pct * 100}%`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={progressBarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          background: "linear-gradient(90deg, #38bdf8, #818cf8)",
          zIndex: 200,
          width: "0%",
          transition: "width 0.1s ease-out"
        }}
      />

      <div 
        ref={cursorGlowRef}
        className="cursor-glow"
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          transform: "translate(-50%, -50%)",
          left: "-1000px",
          top: "-1000px"
        }}
      />
    </>
  );
};

export default InteractiveEffects;
