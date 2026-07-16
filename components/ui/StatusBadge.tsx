import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  className?: string;
  textClassName?: string;
}

export function StatusBadge({ className, textClassName }: StatusBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <span className={cn("text-sm text-muted", textClassName)}>{SITE.statusTagline}</span>
    </div>
  );
}
