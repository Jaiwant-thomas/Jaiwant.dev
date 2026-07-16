"use client";

import { motion } from "framer-motion";
import { FaReact, FaGithub, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiShopify, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";
import type { IconType } from "react-icons";

type Color = "primary" | "secondary" | "accent";

interface OrbitIconSpec {
  Icon: IconType;
  label: string;
  angle: number;
  color: Color;
}

const INNER_RING: OrbitIconSpec[] = [
  { Icon: FaReact, label: "React", angle: 45, color: "primary" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", angle: 135, color: "accent" },
  { Icon: FaGithub, label: "GitHub", angle: 225, color: "secondary" },
  { Icon: SiFigma, label: "Figma", angle: 315, color: "primary" },
];

const OUTER_RING: OrbitIconSpec[] = [
  { Icon: SiNextdotjs, label: "Next.js", angle: 0, color: "secondary" },
  { Icon: SiTypescript, label: "TypeScript", angle: 90, color: "primary" },
  { Icon: SiShopify, label: "Shopify", angle: 180, color: "accent" },
  { Icon: FaJs, label: "JavaScript", angle: 270, color: "secondary" },
];

function OrbitIcon({
  Icon,
  angle,
  color,
  radius,
  duration,
  clockwise,
  index,
}: OrbitIconSpec & { radius: number; duration: number; clockwise: boolean; index: number }) {
  const dir = clockwise ? 1 : -1;

  return (
    <div className="absolute left-1/2 top-1/2">
      <motion.div
        initial={{ rotate: angle, opacity: 0 }}
        animate={{ rotate: angle + dir * 360, opacity: 1 }}
        transition={{
          rotate: { duration, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.6, delay: 0.9 + index * 0.1 },
        }}
        className="absolute left-0 top-0"
      >
        <div
          className="absolute left-0 top-0 origin-top opacity-60"
          style={{
            width: 1.5,
            height: radius,
            transform: "translateX(-50%)",
            background: `linear-gradient(to top, transparent, var(--${color}))`,
          }}
        />
        <div className="absolute left-0 top-0" style={{ transform: `translate(-50%, -${radius}px)` }}>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ rotate: -angle }}
              animate={{ rotate: -angle - dir * 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl glass-strong text-foreground/80 shadow-lg sm:h-11 sm:w-11"
            >
              <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function TechOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {INNER_RING.map((spec, i) => (
        <OrbitIcon key={spec.label} {...spec} radius={175} duration={20} clockwise index={i} />
      ))}
      {OUTER_RING.map((spec, i) => (
        <OrbitIcon key={spec.label} {...spec} radius={225} duration={32} clockwise={false} index={i} />
      ))}
    </div>
  );
}
