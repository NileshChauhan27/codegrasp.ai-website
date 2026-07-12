"use client";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  // Fallback SVG letters for tech names without dedicated logos.
  const initial = name.slice(0, 2).toUpperCase();

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-surface font-mono text-xs font-semibold text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary ${
        className || ""
      }`}
      title={name}
    >
      {initial}
    </div>
  );
}
