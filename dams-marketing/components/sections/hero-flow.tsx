"use client";

import React from "react";

export function HeroFlow() {
  return (
    <div className="relative h-full w-full">
      {/* Floating and glowing ambient blob behind the SVG */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-35 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(45,139,139,0.3) 0%, rgba(124,58,237,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full float-group"
      >
        <style>{`
          .float-group {
            animation: float-all 6s ease-in-out infinite;
          }
          @keyframes float-all {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .flow-dash {
            stroke-dasharray: 6 8;
            animation: flow-dash-anim 25s linear infinite;
          }
          @keyframes flow-dash-anim {
            to { stroke-dashoffset: -1000; }
          }
          .pulse-glow {
            filter: url(#packet-glow);
          }
          .node-card {
            transition: all 0.3s ease;
          }
          .node-card:hover {
            stroke: rgba(45, 139, 139, 0.6);
            fill: rgba(28, 31, 34, 0.85);
            filter: drop-shadow(0 10px 20px rgba(45, 139, 139, 0.15));
          }
        `}</style>

        <defs>
          {/* Card shadow */}
          <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.5" />
          </filter>

          {/* Packet glow */}
          <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Flow line gradients */}
          <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d8b8b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="flow-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2d8b8b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ================= BACKGROUND FLOW PATHS ================= */}
        {/* Path 1: PRD -> Compiler */}
        <path d="M 150 65 Q 240 65 240 140" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="2" />
        <path d="M 150 65 Q 240 65 240 140" stroke="url(#flow-gradient-1)" strokeWidth="2" className="flow-dash" />

        {/* Path 2: Cache -> Compiler */}
        <path d="M 150 285 Q 240 285 240 210" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="2" />
        <path d="M 150 285 Q 240 285 240 210" stroke="url(#flow-gradient-1)" strokeWidth="2" className="flow-dash" />

        {/* Path 3: Compiler -> Agent */}
        <path d="M 305 175 C 315 175 315 175 330 175" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="2" />
        <path d="M 305 175 C 315 175 315 175 330 175" stroke="url(#flow-gradient-1)" strokeWidth="2" className="flow-dash" />

        {/* Path 4: Agent -> Cache (Loop) */}
        <path d="M 395 225 C 395 305 85 305 85 225" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="2" />
        <path d="M 395 225 C 395 305 85 305 85 225" stroke="url(#flow-gradient-2)" strokeWidth="2" className="flow-dash" />

        {/* Path 5: Agent -> PRD (Traps) */}
        <path d="M 395 125 C 395 5 85 5 85 100" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="2" />
        <path d="M 395 125 C 395 5 85 5 85 100" stroke="url(#flow-gradient-2)" strokeWidth="2" className="flow-dash" />


        {/* ================= FLOWING DATA PACKETS ================= */}
        {/* Packet 1: PRD -> Compiler */}
        <circle r="4" fill="#2d8b8b" className="pulse-glow">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 150 65 Q 240 65 240 140" />
        </circle>

        {/* Packet 2: Cache -> Compiler */}
        <circle r="4" fill="#2d8b8b" className="pulse-glow">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 150 285 Q 240 285 240 210" />
        </circle>

        {/* Packet 3: Compiler -> Agent */}
        <circle r="4" fill="#7c3aed" className="pulse-glow">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 305 175 C 315 175 315 175 330 175" />
        </circle>

        {/* Packet 4: Agent -> Cache */}
        <circle r="4.5" fill="#2d8b8b" className="pulse-glow">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 395 225 C 395 305 85 305 85 225" />
        </circle>

        {/* Packet 5: Agent -> PRD */}
        <circle r="4.5" fill="#7c3aed" className="pulse-glow">
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M 395 125 C 395 5 85 5 85 100" />
        </circle>


        {/* ================= FLOATING CARDS ================= */}

        {/* 1. PRD Card */}
        <g className="node-card">
          <rect x="20" y="30" width="130" height="70" rx="12" fill="#1c1f22" fillOpacity="0.8" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" filter="url(#card-shadow)" />
          {/* File Icon */}
          <g transform="translate(32, 43) scale(0.8)">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="#2d8b8b" strokeWidth="2" strokeLinejoin="round"/>
            <polyline points="14 2 14 8 20 8" fill="none" stroke="#2d8b8b" strokeWidth="2" strokeLinejoin="round"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="#2d8b8b" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="#2d8b8b" strokeWidth="2" strokeLinecap="round"/>
          </g>
          <text x="60" y="52" fill="#f4f4f5" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">PRD Spec</text>
          <text x="60" y="66" fill="#a1a1aa" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace">dams atomize</text>
        </g>

        {/* 2. Cache Card */}
        <g className="node-card">
          <rect x="20" y="220" width="130" height="70" rx="12" fill="#1c1f22" fillOpacity="0.8" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" filter="url(#card-shadow)" />
          {/* Database Icon */}
          <g transform="translate(32, 233) scale(0.8)">
            <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="#2d8b8b" strokeWidth="2"/>
            <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="#2d8b8b" strokeWidth="2"/>
            <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" fill="none" stroke="#2d8b8b" strokeWidth="2"/>
          </g>
          <text x="60" y="242" fill="#f4f4f5" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Local Cache</text>
          <text x="60" y="256" fill="#a1a1aa" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace">DuckDB / SQLite</text>
        </g>

        {/* 3. Compiler Card */}
        <g className="node-card">
          <rect x="175" y="140" width="130" height="70" rx="12" fill="#1c1f22" fillOpacity="0.8" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" filter="url(#card-shadow)" />
          {/* Grid/Context Icon */}
          <g transform="translate(187, 153) scale(0.8)">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="#7c3aed" strokeWidth="2"/>
            <path d="m2 8 20 0" stroke="#7c3aed" strokeWidth="2"/>
            <path d="m2 14 20 0" stroke="#7c3aed" strokeWidth="2"/>
            <path d="m8 2 0 20" stroke="#7c3aed" strokeWidth="2"/>
            <path d="m14 2 0 20" stroke="#7c3aed" strokeWidth="2"/>
          </g>
          <text x="215" y="162" fill="#f4f4f5" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Compiler</text>
          <text x="215" y="176" fill="#a1a1aa" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace">AGENTS.md</text>
        </g>

        {/* 4. AI Agent Card */}
        <g className="node-card">
          <rect x="330" y="125" width="130" height="100" rx="12" fill="#1c1f22" fillOpacity="0.8" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" filter="url(#card-shadow)" />
          {/* Shield Icon */}
          <g transform="translate(342, 140) scale(0.8)">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#2d8b8b" strokeWidth="2" strokeLinejoin="round"/>
          </g>
          <text x="370" y="150" fill="#f4f4f5" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">AI Agent</text>
          <text x="370" y="164" fill="#a1a1aa" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace">Safety Check</text>

          {/* Shields Up Pill */}
          <rect x="342" y="183" width="106" height="22" rx="6" fill="rgba(45, 139, 139, 0.1)" stroke="rgba(45, 139, 139, 0.3)" strokeWidth="1" />
          <circle cx="354" cy="194" r="3" fill="#2d8b8b">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="364" y="197" fill="#2d8b8b" fontSize="8" fontWeight="bold" fontFamily="var(--font-jetbrains-mono), monospace" letterSpacing="0.5">SHIELDS UP</text>
        </g>
      </svg>
    </div>
  );
}
