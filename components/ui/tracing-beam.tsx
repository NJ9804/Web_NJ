"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(
        "path",
        {
          pathLength: 1,
        },
        { duration: 2 }
      );
    }
  }, [inView, animate]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="absolute -left-4 top-0 h-full w-1">
        <svg
          ref={scope}
          className="h-full w-full"
          width="12"
          height="100%"
          viewBox="0 0 12 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 6 0 V 100%"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="0"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18CCFC" />
              <stop offset="1" stopColor="#6C56EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {children}
    </div>
  );
};