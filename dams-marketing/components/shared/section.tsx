import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: "default" | "large" | "hero";
}

export function Section({
  id,
  children,
  className,
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        {
          "py-16 md:py-24 lg:py-32": padding === "default",
          "py-24 md:py-32 lg:py-40": padding === "large",
          "py-0": padding === "hero",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
