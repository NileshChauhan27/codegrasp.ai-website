"use client";

import { Logo } from "@/components/shared/logo";
import { GITHUB_URL, DOCS_URL, LINKEDIN_URL } from "@/lib/site";
import { Github, Linkedin } from "@/components/shared/icons";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "Research", href: "#research" },
  ],
  Resources: [
    { label: "Documentation", href: DOCS_URL, external: true },
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "Demo", href: "#demo" },
  ],
  Connect: [
    { label: "Contact", href: LINKEDIN_URL, external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-text-tertiary">
              Defensive Agentic Memory System for AI coding agents.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {category}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-tertiary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} DAMS — Defensive Agentic Memory System
          </p>
          <p className="max-w-md text-xs text-text-tertiary">
            Built by studying open-source codebase-intelligence projects and
            extending them into practical AI tooling.
          </p>
        </div>
      </div>
    </footer>
  );
}
