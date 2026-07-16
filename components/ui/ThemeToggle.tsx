"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "dark" : "light")}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full glass"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
