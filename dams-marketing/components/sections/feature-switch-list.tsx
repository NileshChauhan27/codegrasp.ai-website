"use client";

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
  return (
    <div
      className="flex flex-col gap-2"
      role="tablist"
      aria-label="DAMS features"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const active = index === activeIndex;
        return (
          <button
            key={feature.id}
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
              "relative flex items-center gap-3 rounded-lg border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "border-border-hover bg-surface-active"
                : "border-border-subtle bg-surface hover:border-border-hover hover:translate-x-1"
            )}
          >
            {active && (
              <span
                className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r bg-accent"
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
