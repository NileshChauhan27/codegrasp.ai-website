"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { easing, duration } from "@/lib/motion";

interface Node3D {
  id: string;
  label: string;
  type: "input" | "process" | "cache" | "agent" | "file" | "function";
  x: number;
  y: number;
  z: number;
}

interface Connection3D {
  from: string;
  to: string;
}

interface ProjectedNode extends Node3D {
  projX: number;
  projY: number;
  projZ: number;
}

interface ProjectedConnection {
  conn: Connection3D;
  fromNode: ProjectedNode;
  toNode: ProjectedNode;
  avgZ: number;
}

const nodes: Node3D[] = [
  // Inputs & Specification (z: -50 region)
  { id: "prd", label: "PRD Spec", type: "input", x: -80, y: -60, z: -40 },
  { id: "git", label: "Git History", type: "input", x: -100, y: -10, z: -55 },
  { id: "wiki", label: "Context Wiki", type: "input", x: -80, y: 35, z: -35 },

  // PRD Compilation & Tasks (z: -20 region)
  { id: "atomizer", label: "PRD Atomizer", type: "process", x: -40, y: -75, z: -10 },
  { id: "kanban", label: "Kanban Board", type: "process", x: -35, y: -10, z: -25 },
  { id: "compiler", label: "Context Compiler", type: "process", x: -20, y: 40, z: -10 },

  // Graphify Caches & Analysis (z: 20 region)
  { id: "graphify", label: "Graphify KG", type: "process", x: 20, y: -70, z: 35 },
  { id: "leiden", label: "Leiden Clusters", type: "process", x: 45, y: -90, z: 20 },
  { id: "god_nodes", label: "God Nodes", type: "process", x: 60, y: -55, z: 30 },

  // Snippet Retrievals & SQLite Cache (z: 0 region)
  { id: "sqlite", label: "SQLite DB", type: "cache", x: 0, y: 65, z: -20 },
  { id: "chunkhound", label: "Chunkhound", type: "process", x: 35, y: 45, z: -5 },
  { id: "duckdb", label: "DuckDB Cache", type: "cache", x: 15, y: 80, z: 15 },

  // Execution Gating & Agent Interception (z: 60 region)
  { id: "proxy", label: "Interception Proxy", type: "agent", x: 65, y: -10, z: 50 },
  { id: "agent", label: "AI Agent", type: "agent", x: 95, y: -25, z: 10 },
  { id: "gate", label: "Safety Gate", type: "agent", x: 75, y: 40, z: -35 },
  { id: "codebase", label: "Target Codebase", type: "file", x: 110, y: 20, z: -15 },
];

const connections: Connection3D[] = [
  { from: "prd", to: "atomizer" },
  { from: "git", to: "compiler" },
  { from: "wiki", to: "compiler" },
  { from: "atomizer", to: "kanban" },
  { from: "kanban", to: "compiler" },
  { from: "compiler", to: "graphify" },
  { from: "compiler", to: "sqlite" },
  { from: "graphify", to: "leiden" },
  { from: "leiden", to: "god_nodes" },
  { from: "sqlite", to: "chunkhound" },
  { from: "chunkhound", to: "duckdb" },
  { from: "graphify", to: "proxy" },
  { from: "chunkhound", to: "proxy" },
  { from: "proxy", to: "agent" },
  { from: "agent", to: "gate" },
  { from: "gate", to: "codebase" },
];

// Project 3D space to 2D screen coordinates
const project = (x: number, y: number, z: number, angleX: number, angleY: number) => {
  // Rotate Y-axis (Yaw)
  const cosY = Math.cos(angleY);
  const sinY = Math.sin(angleY);
  const x1 = x * cosY - z * sinY;
  const z1 = x * sinY + z * cosY;

  // Rotate X-axis (Pitch)
  const cosX = Math.cos(angleX);
  const sinX = Math.sin(angleX);
  const y2 = y * cosX - z1 * sinX;
  const z2 = y * sinX + z1 * cosX;

  // Perspective formula (viewBox center: 300, 200)
  const distance = 300;
  const scale = distance / (distance + z2);
  const projX = 300 + x1 * scale * 1.7;
  const projY = 200 + y2 * scale * 1.7;

  return { x: projX, y: projY, z: z2 };
};

// Calculate depth weight (0.15 to 1.0)
const getDepthProgress = (z: number) => {
  const minZ = -120;
  const maxZ = 120;
  const norm = (z - minZ) / (maxZ - minZ);
  return Math.min(Math.max(1 - norm, 0.15), 1.0);
};

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "200px" });
  const [progress, setProgress] = useState(0);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  // Unified rotation and time updates
  const [animState, setAnimState] = useState({
    rotX: -0.15,
    rotY: 0.35,
    time: 0,
  });

  const targetRotation = useRef({ x: -0.15, y: 0.35 });
  const mouseOver = useRef(false);

  useEffect(() => {
    if (reducedMotion || !isInView) return;
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      const ratio = Math.min(Math.max(current / total, 0), 1);
      setProgress(ratio);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion, isInView]);

  useEffect(() => {
    let frameId: number;

    const tick = () => {
      setAnimState((prev) => {
        let rx = prev.rotX;
        let ry = prev.rotY;

        if (mouseOver.current) {
          const dx = targetRotation.current.x - prev.rotX;
          const dy = targetRotation.current.y - prev.rotY;
          rx += dx * 0.08;
          ry += dy * 0.08;
        } else {
          // Continuous orbit rotation when not hovered
          ry += 0.002;
          rx = rx + (-0.15 - rx) * 0.04;
        }

        return {
          rotX: rx,
          rotY: ry,
          time: Date.now() * 0.001,
        };
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    targetRotation.current = {
      x: y * 0.5,
      y: x * 0.7,
    };
  };

  // Scroll reveal mappings
  const activeNodes = new Set<string>();
  const p = progress;

  if (p > 0.05) activeNodes.add("prd");
  if (p > 0.1) activeNodes.add("git");
  if (p > 0.1) activeNodes.add("wiki");
  if (p > 0.2) activeNodes.add("compiler");
  if (p > 0.2) activeNodes.add("atomizer");
  if (p > 0.3) activeNodes.add("kanban");
  if (p > 0.4) activeNodes.add("sqlite");
  if (p > 0.45) activeNodes.add("duckdb");
  if (p > 0.5) activeNodes.add("chunkhound");
  if (p > 0.6) activeNodes.add("graphify");
  if (p > 0.65) activeNodes.add("leiden");
  if (p > 0.65) activeNodes.add("god_nodes");
  if (p > 0.75) activeNodes.add("proxy");
  if (p > 0.8) activeNodes.add("agent");
  if (p > 0.85) activeNodes.add("gate");
  if (p > 0.9) activeNodes.add("codebase");

  // Project 3D nodes
  const projectedNodes: ProjectedNode[] = nodes.map((node) => {
    const proj = project(node.x, node.y, node.z, animState.rotX, animState.rotY);
    return { ...node, projX: proj.x, projY: proj.y, projZ: proj.z };
  });

  // Project and sort connection lines
  const projectedConnections: ProjectedConnection[] = connections.map((conn) => {
    const fromNode = projectedNodes.find((n) => n.id === conn.from)!;
    const toNode = projectedNodes.find((n) => n.id === conn.to)!;
    const avgZ = (fromNode.projZ + toNode.projZ) / 2;
    return { conn, fromNode, toNode, avgZ };
  });

  const sortedConnections = [...projectedConnections].sort((a, b) => b.avgZ - a.avgZ);
  const sortedNodes = [...projectedNodes].sort((a, b) => b.projZ - a.projZ);

  return (
    <Section id="architecture" className="relative min-h-[150vh] overflow-hidden">
      <div className="sticky top-0 flex min-h-screen items-center py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
              System architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              From PRD to code, guarded at every step.
            </h2>
          </div>

          <div
            ref={containerRef}
            className="relative mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-border-subtle bg-surface p-4 md:p-8 overflow-x-auto h-[320px] md:h-auto md:aspect-[16/9] cursor-grab active:cursor-grabbing select-none"
            role="img"
            aria-label="3D dynamic DAMS codebase architecture visualization showing Leiden clusters, context compilers, and active safety gates."
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              mouseOver.current = true;
            }}
            onMouseLeave={() => {
              mouseOver.current = false;
              setHoveredNodeId(null);
            }}
          >
            <svg
              viewBox="0 0 600 400"
              className="h-full w-full min-w-[640px] md:min-w-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2d8b8b" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>

                <filter id="glow3D" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Connection lines (Rendered with depth cues) */}
              {sortedConnections.map((pc, index) => {
                const active = activeNodes.has(pc.fromNode.id) && activeNodes.has(pc.toNode.id);
                const depth = getDepthProgress(pc.avgZ);
                const strokeOpacity = active ? 0.05 + 0.35 * depth : 0.02;
                const strokeWidth = active ? 0.6 + 1.2 * depth : 0.4;

                return (
                  <line
                    key={`line-${index}`}
                    x1={pc.fromNode.projX}
                    y1={pc.fromNode.projY}
                    x2={pc.toNode.projX}
                    y2={pc.toNode.projY}
                    stroke={active ? "url(#lineGrad3D)" : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={strokeWidth}
                    opacity={strokeOpacity}
                    strokeLinecap="round"
                  />
                );
              })}

              {/* 2. Flowing data packets (Rendered along connection paths) */}
              {sortedConnections.map((pc, index) => {
                const active = activeNodes.has(pc.fromNode.id) && activeNodes.has(pc.toNode.id);
                if (!active) return null;

                const speed = 0.5 + (index % 3) * 0.25;
                const progressVal = (animState.time * speed) % 1;

                // Linearly interpolate positions in projected space
                const px = pc.fromNode.projX + (pc.toNode.projX - pc.fromNode.projX) * progressVal;
                const py = pc.fromNode.projY + (pc.toNode.projY - pc.fromNode.projY) * progressVal;
                const pz = pc.fromNode.projZ + (pc.toNode.projZ - pc.fromNode.projZ) * progressVal;
                const depth = getDepthProgress(pz);

                return (
                  <circle
                    key={`packet-${index}`}
                    cx={px}
                    cy={py}
                    r={1.8 * depth}
                    fill={index % 2 === 0 ? "#2d8b8b" : "#7c3aed"}
                    opacity={0.3 + 0.7 * depth}
                    filter="url(#glow3D)"
                  />
                );
              })}

              {/* 3. Codebase Nodes (Rendered sorted back-to-front) */}
              {sortedNodes.map((node) => {
                const active = activeNodes.has(node.id);
                const depth = getDepthProgress(node.projZ);
                const isHovered = hoveredNodeId === node.id;

                const baseSize = node.type === "agent" ? 9 : node.type === "process" ? 6.5 : 5;
                const size = baseSize * (0.65 + 0.65 * depth);
                const nodeOpacity = active ? 0.2 + 0.8 * depth : 0.15;

                const color =
                  node.type === "agent"
                    ? "#7c3aed"
                    : node.type === "process"
                    ? "#2d8b8b"
                    : node.type === "cache"
                    ? "#f59e0b"
                    : node.type === "input"
                    ? "#38bdf8"
                    : "#a1a1aa";

                return (
                  <g
                    key={`node-${node.id}`}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className="cursor-pointer"
                  >
                    {/* Ring highlight when hovered or active */}
                    {active && (
                      <circle
                        cx={node.projX}
                        cy={node.projY}
                        r={size + 3.5}
                        stroke={color}
                        strokeWidth={0.4}
                        fill="none"
                        opacity={isHovered ? 0.6 : 0.25}
                      />
                    )}

                    {/* Core node circle */}
                    <circle
                      cx={node.projX}
                      cy={node.projY}
                      r={size}
                      fill={active ? color : "#18181b"}
                      stroke={active ? color : "rgba(255, 255, 255, 0.2)"}
                      strokeWidth={0.6}
                      opacity={nodeOpacity}
                      filter={isHovered ? "url(#glow3D)" : undefined}
                    />

                    {/* Node text label */}
                    <text
                      x={node.projX}
                      y={node.projY + size + 9 + 3 * depth}
                      textAnchor="middle"
                      fill={active ? "#f4f4f5" : "#71717a"}
                      fontSize={Math.max(6.5, 5 + 4.5 * depth)}
                      fontWeight={isHovered ? "bold" : 500}
                      opacity={isHovered ? 1.0 : active ? 0.35 + 0.65 * depth : 0.25}
                      fontFamily="var(--font-geist-sans), sans-serif"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Node Tooltip Card */}
            {hoveredNodeId && (
              <div className="absolute top-4 left-4 rounded-lg border border-border-subtle bg-surface/90 px-3 py-2 text-xs backdrop-blur pointer-events-none transition-all select-none">
                <div className="font-semibold text-text-primary">
                  {nodes.find((n) => n.id === hoveredNodeId)?.label}
                </div>
                <div className="text-text-tertiary capitalize mt-0.5 font-mono text-[9px] tracking-wider">
                  Type: {nodes.find((n) => n.id === hoveredNodeId)?.type}
                </div>
                <div className="text-accent text-[9px] mt-1 font-mono">
                  {activeNodes.has(hoveredNodeId) ? "● Shield Active" : "○ Pre-activation"}
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: duration.reveal, ease: easing.enter }}
              className="absolute bottom-4 left-4 right-4 rounded-lg border border-border-subtle bg-surface/90 p-3 text-center text-xs text-text-secondary backdrop-blur md:bottom-8 md:left-8 md:right-auto md:max-w-xs md:text-left pointer-events-none select-none"
            >
              Native tools route to DAMS by default. A programmatic toggle lets the
              agent fall back when DAMS search is not enough.
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
