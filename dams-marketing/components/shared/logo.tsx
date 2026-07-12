"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <a href="#hero" className={`flex items-center gap-2 ${className || ""}`}>
      <Image
        src="/logo-mark.svg"
        alt="DAMS"
        width={32}
        height={32}
        className="h-8 w-auto"
        priority
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight text-text-primary">
          DAMS
        </span>
      )}
    </a>
  );
}
