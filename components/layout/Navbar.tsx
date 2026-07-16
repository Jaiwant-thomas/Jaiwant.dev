"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: mobileOpen }));
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="section-container">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6",
              scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
            )}
          >
            <a
              href="#home"
              aria-label="Jaiwant Thomas — home"
              className="group flex items-center transition-transform duration-300 hover:scale-[1.03]"
            >
              <Logo
                variant="icon"
                className="h-9 w-9 drop-shadow-[0_0_0px_rgba(59,130,246,0)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.55)] sm:hidden"
              />
              <Logo
                variant="full"
                className="hidden h-16 w-auto drop-shadow-[0_0_0px_rgba(59,130,246,0)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.55)] sm:block"
              />
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground",
                    activeSection === link.href && "text-foreground"
                  )}
                >
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full glass"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <div className="hidden md:block">
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)] transition-shadow hover:shadow-[0_0_35px_-5px_rgba(59,130,246,0.8)]"
                >
                  Let&apos;s Talk
                </MagneticButton>
              </div>

              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="font-heading text-3xl font-semibold text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.06 }}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
