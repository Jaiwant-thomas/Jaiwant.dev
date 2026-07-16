"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { SITE, ROLE_TITLES } from "@/lib/data";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RotatingRoles } from "@/components/ui/RotatingRoles";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-soft" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[30rem] w-[30rem] -translate-x-1/3 rounded-full bg-primary/10 blur-[140px]" />
      <FloatingShapes variant="dense" />
      <HeroBackdrop />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 justify-between items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            <motion.div variants={item}>
              <StatusBadge />
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <AnimatedHeadline
                as="h1"
                text="Hi, I'm Jaiwant Thomas"
                highlightWords={["Jaiwant", "Thomas"]}
                delay={0.2}
                className="font-heading text-2xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-[4.5rem]"
              />
              <p className="mt-3 font-heading text-xl font-medium sm:text-2xl md:text-[4.5rem]">
                <RotatingRoles roles={ROLE_TITLES} />
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {SITE.tagline} I turn Figma designs into pixel-perfect, high-performance
              websites — clean code, elegant UI, and results that clients love.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                as="a"
                href="#contact"
                shine
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_-5px_rgba(59,130,246,0.9)]"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={SITE.resumeUrl}
                download
                shine
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full glass px-8 text-sm font-semibold text-foreground transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.5)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex items-center justify-center lg:col-span-5 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-foreground/20 p-1.5">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Scroll</span>
      </motion.a>
    </section>
  );
}
