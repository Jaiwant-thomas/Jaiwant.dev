import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "peer w-full rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-4 pt-6 pb-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary/50 focus:bg-foreground/[0.05] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]";

const labelBase =
  "pointer-events-none absolute left-4 text-sm text-muted/70 transition-all duration-300 peer-focus:text-[11px] peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function FloatingInput({ label, id, className, ...props }: FloatingInputProps) {
  return (
    <div className="relative">
      <input id={id} placeholder=" " className={cn(fieldClasses, className)} {...props} />
      <label
        htmlFor={id}
        className={cn(
          labelBase,
          "top-1/2 -translate-y-1/2 peer-focus:top-3 peer-focus:translate-y-0 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0"
        )}
      >
        {label}
      </label>
    </div>
  );
}

interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export function FloatingTextarea({ label, id, className, ...props }: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        className={cn(fieldClasses, "resize-none", className)}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(labelBase, "top-4 peer-focus:top-2 peer-[:not(:placeholder-shown)]:top-2")}
      >
        {label}
      </label>
    </div>
  );
}
