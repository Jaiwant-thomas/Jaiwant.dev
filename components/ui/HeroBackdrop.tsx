const PARTICLES = [
  { left: "12%", top: "18%", size: "h-1.5 w-1.5", anim: "animate-float-slow", delay: "0s", opacity: "bg-foreground/30" },
  { left: "22%", top: "62%", size: "h-1 w-1", anim: "animate-float", delay: "0.8s", opacity: "bg-accent/50" },
  { left: "38%", top: "30%", size: "h-1 w-1", anim: "animate-float-slow", delay: "1.6s", opacity: "bg-foreground/25" },
  { left: "58%", top: "72%", size: "h-1.5 w-1.5", anim: "animate-float", delay: "0.4s", opacity: "bg-primary/40" },
  { left: "72%", top: "22%", size: "h-1 w-1", anim: "animate-float-slow", delay: "2.2s", opacity: "bg-foreground/30" },
  { left: "84%", top: "58%", size: "h-1.5 w-1.5", anim: "animate-float", delay: "1.1s", opacity: "bg-secondary/40" },
  { left: "45%", top: "85%", size: "h-1 w-1", anim: "animate-float-slow", delay: "0.6s", opacity: "bg-foreground/25" },
  { left: "5%", top: "45%", size: "h-1 w-1", anim: "animate-float", delay: "1.8s", opacity: "bg-accent/40" },
];

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/4 top-0 h-full w-px rotate-[16deg] bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-glow-pulse" />
      <div
        className="absolute right-1/3 top-0 h-full w-px -rotate-[14deg] bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-glow-pulse"
        style={{ animationDelay: "1.2s" }}
      />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.size} ${p.opacity} ${p.anim}`}
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
