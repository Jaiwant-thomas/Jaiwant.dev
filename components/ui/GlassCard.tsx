"use client";

import { type ReactNode, useRef, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: boolean;
}

export function GlassCard({ children, className, glow = true, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const posX = useMotionValue(50);
  const posY = useMotionValue(50);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  const glowBackground = useMotionTemplate`radial-gradient(300px circle at ${posX}% ${posY}%, rgba(59,130,246,0.12), transparent 70%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    posX.set(px);
    posY.set(py);
    if (tilt) {
      rotateX.set((py - 50) / -10);
      rotateY.set((px - 50) / 10);
    }
  };

  const handleMouseLeave = () => {
    posX.set(50);
    posY.set(50);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass shadow-[0_8px_40px_-12px_var(--shadow-card)] transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      {glow && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
