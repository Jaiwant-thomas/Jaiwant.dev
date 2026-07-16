"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FloatingInput, FloatingTextarea } from "@/components/ui/FloatingField";
import { MagneticButton } from "@/components/ui/MagneticButton";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingInput id="name" name="name" type="text" label="Your Name" required />
        <FloatingInput id="email" name="email" type="email" label="Your Email" required />
      </div>

      <FloatingInput id="subject" name="subject" type="text" label="Subject" required />

      <FloatingTextarea id="message" name="message" label="Your Message" rows={5} required />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <MagneticButton
          as="button"
          type="submit"
          disabled={status === "loading"}
          aria-label="Send message"
          wrapperClassName="block w-full sm:inline-block sm:w-auto"
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] px-8 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(59,130,246,0.65)] transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-[0_0_40px_-6px_rgba(139,92,246,0.85)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Message Sent
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </MagneticButton>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm font-medium text-accent"
            >
              <CheckCircle2 className="h-4 w-4" />
              Thanks — your message is on its way.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm font-medium text-red-400"
            >
              <AlertCircle className="h-4 w-4" />
              Something went wrong — email me directly instead.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
