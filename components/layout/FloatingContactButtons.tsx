"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useMobileMenuOpen } from "@/hooks/useMobileMenuOpen";

const WHATSAPP_NUMBER = "917973535159";
const EMAIL_ADDRESS = "jaiwantamrsofttech@gmail.com";

export function FloatingContactButtons() {
  const menuOpen = useMobileMenuOpen();

  return (
    <div
      className={`fixed bottom-20 right-3 z-50 flex flex-col items-end gap-3 transition-opacity duration-300 sm:bottom-28 sm:right-8 sm:gap-4 ${
        menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <motion.a
        href={`mailto:${EMAIL_ADDRESS}`}
        aria-label="Send an email"
        title="Send an email"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 outline-none transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:w-12"
      >
        <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg outline-none transition-shadow duration-300 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-14 sm:w-14"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
        }}
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>
    </div>
  );
}
