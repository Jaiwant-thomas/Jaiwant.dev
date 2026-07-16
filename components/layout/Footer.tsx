import { NAV_LINKS, SITE, SOCIAL_LINKS, TIMELINE } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const currentRole = TIMELINE.find((entry) => entry.type === "experience");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/[0.06] bg-background-soft/60">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <a href="#home" aria-label="Jaiwant Thomas — home" className="inline-flex items-center">
              <Logo variant="full" className="h-9 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
              <li>{currentRole?.location ?? "Punjab, India"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foreground/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed &amp; built with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
