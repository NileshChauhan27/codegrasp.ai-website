"use client";

import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/lib/features";
import { easing, duration } from "@/lib/motion";
import { useMemo } from "react";

interface FeatureStageProps {
  featureIndex: number;
}

export function FeatureStage({ featureIndex }: FeatureStageProps) {
  const feature = features[featureIndex];
  const Icon = feature.icon;

  // Build a deterministic abstract visualization based on the feature title length.
  const nodes = useMemo(() => {
    const seed = feature.title.length;
    return Array.from({ length: 12 }).map((_, i) => ({
      x: 30 + ((i * 137.5 + seed * 17) % 60),
      y: 20 + ((i * 89 + seed * 31) % 60),
      r: 2 + ((i + seed) % 4),
    }));
  }, [feature.title]);

  return (
    <div
      id="feature-panel"
      role="tabpanel"
      aria-labelledby={`feature-tab-${featureIndex}`}
      className="relative flex h-full min-h-[420px] flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 md:p-10 ring-2 ring-accent ring-offset-4 ring-offset-surface"
    >
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[100px]"
        style={{ background: "rgba(45, 139, 139, 0.12)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-[100px]"
        style={{ background: "rgba(124, 58, 237, 0.1)" }}
        aria-hidden="true"
      />

      {/* Center visualization */}
      <div className="relative flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: duration.layout, ease: easing.enter }}
            className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72"
          >
            {/* Abstract node field */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {nodes.map((node, i) =>
                nodes.slice(i + 1).map((other, j) => {
                  const dist = Math.hypot(node.x - other.x, node.y - other.y);
                  if (dist > 35) return null;
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={node.x}
                      y1={node.y}
                      x2={other.x}
                      y2={other.y}
                      stroke="rgba(45,139,139,0.25)"
                      strokeWidth={0.6}
                    />
                  );
                })
              )}
              {nodes.map((node, i) => (
                <circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={i % 3 === 0 ? "#7c3aed" : "#2d8b8b"}
                  fillOpacity={0.8}
                />
              ))}
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="none"
                stroke="#2d8b8b"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity={0.5}
              />
            </svg>

            <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-lg shadow-accent/10 sm:h-24 sm:w-24">
              <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.layout, ease: easing.enter }}
          className="relative z-10"
        >
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {feature.metric}
          </span>
          <h3 className="mt-3 text-xl font-semibold text-text-primary sm:text-2xl">
            {feature.title}
          </h3>
          <p className="mt-2 max-w-lg text-sm text-text-secondary sm:text-base">
            {feature.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
