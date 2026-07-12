export const easing = {
  enter: [0.16, 1, 0.3, 1] as const,
  exit: [0.7, 0, 0.84, 0] as const,
  bouncy: [0.34, 1.56, 0.64, 1] as const,
};

export const duration = {
  micro: 0.15,
  fast: 0.2,
  layout: 0.35,
  reveal: 0.5,
  ambient: 8,
};

export const stagger = {
  fast: 0.05,
  default: 0.08,
  slow: 0.1,
};
