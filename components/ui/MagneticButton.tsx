"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  wrapperClassName?: string;
  shine?: boolean;
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  as = "button",
  href,
  onClick,
  target,
  rel,
  download,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
  wrapperClassName = "inline-block",
  shine = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(wrapperClassName)}
    >
      {as === "a" ? (
        <motion.a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          download={download}
          aria-label={ariaLabel}
          whileHover={shine ? "hover" : undefined}
          whileTap={{ scale: 0.96 }}
          initial="rest"
          className={cn("group relative", shine && "overflow-hidden", className)}
        >
          {shine && <ShineSweep />}
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.a>
      ) : (
        <motion.button
          type={type}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
          whileHover={shine ? "hover" : undefined}
          whileTap={disabled ? undefined : { scale: 0.96 }}
          initial="rest"
          className={cn("group relative", shine && "overflow-hidden", className)}
        >
          {shine && <ShineSweep />}
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.button>
      )}
    </motion.div>
  );
}

function ShineSweep() {
  return (
    <motion.span
      aria-hidden
      variants={{
        rest: { x: "-130%", opacity: 0 },
        hover: { x: "130%", opacity: 1 },
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
    />
  );
}
