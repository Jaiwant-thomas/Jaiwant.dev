"use client";

import { useEffect, useState } from "react";

export function useMobileMenuOpen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => setOpen((e as CustomEvent<boolean>).detail);
    window.addEventListener("mobile-menu-toggle", handler);
    return () => window.removeEventListener("mobile-menu-toggle", handler);
  }, []);

  return open;
}
