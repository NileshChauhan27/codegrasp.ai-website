"use client";

import { useEffect, useRef } from "react";
import { features } from "@/lib/features";
import { cn } from "@/lib/utils";

interface FeatureSwitchListProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export function FeatureSwitchList({
  activeIndex,
  onSelect,
  onHover,
}: FeatureSwitchListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 lg:flex-col lg:overflow-x-visible lg:pb-0 lg:pt-0 scrollbar-none"
      role="tablist"
      aria-label="DAMS features"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const active = index === activeIndex;
        return (
          <button
            key={feature.id}
            ref={active ? activeRef : null}
            role="tab"
            aria-selected={active}
            aria-controls="feature-panel"
            id={`feature-tab-${index}`}
            onClick={() => onSelect(index)}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(index)}
            onBlur={() => onHover(null)}
            className={cn(
              "relative flex shrink-0 w-[280px] snap-start lg:w-auto items-center gap-3 rounded-lg border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-surface active:ring-2 active:ring-accent active:ring-offset-4 active:ring-offset-surface",
              active
                ? "border-border-hover bg-surface-active ring-2 ring-accent ring-offset-4 ring-offset-surface"
                : "border-border-subtle bg-surface hover:border-border-hover lg:hover:translate-x-1"
            )}
          >
            {active && (
              <span
                className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r bg-accent hidden lg:block"
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-transform duration-200",
                active
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border-subtle bg-surface-hover text-text-secondary"
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3
                className={cn(
                  "text-sm font-medium transition-colors",
                  active ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {feature.title}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-xs text-text-tertiary">
                {feature.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
