"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveBeams = (e: MouseEvent) => {
      if (!beamsRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX - beamsRef.current.offsetLeft;
      const y = clientY - beamsRef.current.offsetTop;
      beamsRef.current.style.setProperty("--x", `${x}px`);
      beamsRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden [--x:50%] [--y:50%]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-transparent to-transparent blur-2xl transform translate-x-[var(--x)] translate-y-[var(--y)]" />
    </div>
  );
};