"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Quote,
  Rocket,
  Layers,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TIMELINE } from "@/lib/data";

const HIGHLIGHTS = [
  "Responsive, mobile-first websites",
  "Modern, elegant UI implementation",
  "Performance & Core Web Vitals optimization",
  "Clean, maintainable, scalable code",
  "Technical & on-page SEO",
  "Client-focused, communicative development",
];

const currentRole = TIMELINE.find((entry) => entry.type === "experience");

const QUICK_FACTS = [
  { icon: Rocket, value: "2+", label: "Years of hands-on experience" },
  { icon: Layers, value: "Next.js", label: "Primary framework of choice" },
  { icon: MapPin, value: currentRole?.location ?? "Punjab, India", label: "Currently based" },
  { icon: Sparkles, value: "WordPress · Shopify", label: "CMS specialties" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="section-container relative">
        <SectionHeading
          eyebrow="About Me"
          title="Building premium web experiences, one detail at a time"
          description="A frontend developer who cares about craft as much as code."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <GlassCard className="relative h-full overflow-hidden p-8 sm:p-10">
              <Quote className="pointer-events-none absolute -right-4 -top-6 h-40 w-40 text-foreground/[0.04] sm:h-48 sm:w-48" />

              <span className="font-heading text-sm font-semibold tracking-widest text-primary/70">
                (01) PROFILE
              </span>

              <div className="relative mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  I&apos;m a frontend developer focused on turning thoughtful design into{" "}
                  <span className="text-gradient font-medium">fast, responsive, and accessible</span>{" "}
                  websites. My work spans modern Next.js applications, custom WordPress builds,
                  and conversion-ready Shopify storefronts.
                </p>
                <p>
                  I care deeply about clean code, modern UI, and performance — every project I
                  ship is built mobile-first, cross-browser tested, and optimized for search
                  engines from day one.
                </p>
                <p>
                  Beyond the code, I&apos;m client-focused: clear communication, dependable
                  delivery, and a collaborative process from the first Figma file to the final
                  deploy on Vercel.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <motion.div
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <GlassCard className="p-6 sm:p-7" tilt={false}>
                <div className="flex items-center justify-between gap-4">
                  <StatusBadge textClassName="font-medium text-foreground" />
                  <a
                    href="#contact"
                    aria-label="Get in touch"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass text-foreground transition-colors hover:border-primary/40 hover:text-accent"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex-1"
            >
              <GlassCard className="h-full p-6 sm:p-7" tilt={false}>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  What I bring to every project
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {HIGHLIGHTS.map((point, i) => (
                    <motion.span
                      key={point}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 py-2 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-foreground/[0.06] hover:text-foreground"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {point}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-12 lg:grid-cols-4">
            {QUICK_FACTS.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  custom={0.15 + i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <GlassCard className="h-full p-5 sm:p-6" tilt={false}>
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted">{fact.label}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
