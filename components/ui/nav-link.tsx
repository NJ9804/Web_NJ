"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NavLink = ({ 
  children, 
  href, 
  isActive = false 
}: { 
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className={cn(
        "relative px-4 py-2 text-sm transition-colors",
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="navbar-active"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
};