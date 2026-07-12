"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#architecture", label: "Architecture" },
  { href: "#research", label: "Research" },
  { href: "#demo", label: "Demo" },
  { href: "#cta", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-border-subtle bg-surface px-3 py-2 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile nav sheet */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <Logo />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-6 sm:px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-3 text-lg text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded border border-border-subtle bg-surface px-3 py-3 text-lg text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
