"use client";

import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/lib/features";
import { easing, duration } from "@/lib/motion";

interface FeatureStageProps {
  featureIndex: number;
}

export function FeatureStage({ featureIndex }: FeatureStageProps) {
  const feature = features[featureIndex];

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
      <div className="relative flex flex-1 items-center justify-center py-6 md:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: duration.layout, ease: easing.enter }}
            className="relative flex items-center justify-center w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-xl overflow-hidden border border-border-subtle bg-[#131517] shadow-2xl shadow-accent/5"
          >
            <img
              src={`/features/${feature.id}.webp`}
              alt={feature.title}
              className="max-h-full max-w-full object-contain transition-opacity duration-300 transform-gpu will-change-[transform,opacity]"
              loading="eager"
              decoding="async"
            />
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
