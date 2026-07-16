import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/Website-logo.png";
const LOGO_WIDTH = 400;
const LOGO_HEIGHT = 208;

type LogoTone = "gradient" | "white" | "black" | "mono";

interface LogoProps {
  variant?: "icon" | "full";
  layout?: "horizontal" | "vertical";
  tone?: LogoTone;
  className?: string;
}

export function Logo({ variant = "full", layout = "horizontal", tone = "gradient", className }: LogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src={LOGO_SRC}
        alt="Jaiwant Thomas logo"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={cn("h-10 w-10 object-cover", className)}
        priority
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        layout === "vertical" && "flex-col gap-1.5 text-center",
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        aria-hidden
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-full w-auto object-cover"
      /> 
    </span>
  );
}
