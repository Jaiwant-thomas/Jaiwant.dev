"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/ui/Logo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE, SOCIAL_LINKS, TIMELINE } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const currentRole = TIMELINE.find((entry) => entry.type === "experience");

const CONTACT_ROWS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  {
    icon: MapPin,
    label: "Location",
    value: currentRole?.location ?? "Punjab, India",
    href: undefined,
  },
];

function ContactBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent blur-[120px] animate-float-slow" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-float" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-secondary/15 blur-[110px] animate-float-slow" />

      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:44px_44px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-16 top-16 hidden h-40 w-40 rounded-3xl border border-foreground/[0.06] sm:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -left-10 bottom-24 hidden h-28 w-28 rounded-full border border-foreground/[0.06] sm:block"
      />

      <div className="noise-overlay" />
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <ContactBackground />

      <div className="section-container relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s create something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            Have an idea worth building? Reach out and let&apos;s turn it into a fast, polished,
            production-ready website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <GlassCard className="h-full p-7 sm:p-8" tilt={false}>
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl glass-strong">
                  <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(59,130,246,0.35),rgba(139,92,246,0.35),rgba(34,211,238,0.35),rgba(59,130,246,0.35))] opacity-60 blur-md" />
                  <Logo variant="icon" className="relative h-10 w-10" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground">{SITE.name}</p>
                  <p className="text-sm text-muted">{SITE.role}</p>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2">
                <StatusBadge textClassName="text-xs font-medium text-foreground" />
              </div>

              <div className="mt-7 space-y-3 pr-10 sm:pr-0">
                {CONTACT_ROWS.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wide text-muted/70">
                          {row.label}
                        </p>
                        <p className="truncate text-sm font-medium text-foreground">{row.value}</p>
                      </div>
                    </>
                  );
                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      className="group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-foreground/[0.05] hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.5)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={row.label}
                      className="group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3.5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full glass text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[0_10px_30px_-12px_rgba(59,130,246,0.6)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>

              <MagneticButton
                as="a"
                href={SITE.resumeUrl}
                download
                wrapperClassName="block w-full"
                className="group mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full glass text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </MagneticButton>
            </GlassCard>
          </motion.div>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-7 sm:p-10" tilt={false}>
              <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Get In Touch
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Let&apos;s Work <span className="text-gradient">Together</span>
              </h3>
              <p className="mt-2 mb-8 text-sm text-muted">
                Tell me about your project — I typically respond within 24 hours.
              </p>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
