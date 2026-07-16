"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export function CursorGlow() {
  const isTouch = useIsTouchDevice();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (isTouch) return;
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isTouch, visible, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
      }}
    />
  );
}
