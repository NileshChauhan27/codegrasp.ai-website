import {
  FileText,
  Kanban,
  Search,
  Database,
  StickyNote,
  Network,
  Code2,
  Shield,
  Cpu,
  Container,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: "prd-atomization",
    title: "PRD Atomization",
    description:
      "`dams atomize PRD.md` decomposes a product spec into a dependency-aware task tree tracked in `.dams/context/tasks/`.",
    metric: "PRD → tasks → registry",
    icon: FileText,
  },
  {
    id: "kanban-dashboard",
    title: "Interactive Task Dashboard",
    description:
      "The DAMS Web UI renders each task as a card. Select a card to start a focused research session.",
    metric: "visual task board",
    icon: Kanban,
  },
  {
    id: "generate-queries",
    title: "Generate Queries",
    description:
      "From the selected task description, DAMS produces 10–15 codebase research queries and fills the Code Research tab.",
    metric: "10–15 queries / task",
    icon: Search,
  },
  {
    id: "warm-cache",
    title: "Warm SQLite Cache",
    description:
      "Sends queries to Chunkhound; results are persisted in the local DuckDB/SQLite cache so the agent never searches cold.",
    metric: "local DuckDB / SQLite",
    icon: Database,
  },
  {
    id: "scratchpad",
    title: "Ephemeral Scratchpad",
    description:
      "Chunkhound returns the exact code snippets for the current task; no repeated codebase re-reading.",
    metric: "task-scoped snippets",
    icon: StickyNote,
  },
  {
    id: "graphify-deps",
    title: "Graphify Dependencies",
    description:
      "Graphify surfaces related files, call-graph nodes, and communities around the selected task.",
    metric: "71.5× token reduction",
    icon: Network,
  },
  {
    id: "chunkhound",
    title: "cAST Chunking + Hybrid Search",
    description:
      "Structure-aware AST chunking preserves function/class boundaries; semantic + regex hybrid reranked locally by Ollama.",
    metric: "+4.3 pt retrieval gain",
    icon: Code2,
  },
  {
    id: "tool-interception",
    title: "Agent-Native Tool Interception",
    description:
      "MCP Interception Proxy installs fake/proxy tools for `grep`, `glob`, `ast-grep` inside open-source harnesses (oh-my-pi, pi.dev, Zed, Goose). Native tools route to DAMS by default and can be toggled back programmatically.",
    metric: "protocol-level proxy",
    icon: Shield,
  },
  {
    id: "context-safety",
    title: "Context Compiler + Safety Gate",
    description:
      "Compiles AGENTS.md with a three-layer token budget and freshness scoring; `dams check` enforces safety contracts, GritQL structural checks, and regression traps.",
    metric: "8K budget · auto-heal",
    icon: Cpu,
  },
  {
    id: "docker-steering",
    title: "Docker-Sovereign Deployment + Steering Files",
    description:
      "Ships as a full dev container because OS-level PATH shims interfered with the host OS. `dams configure-agents` writes playbooks across Claude Code, Cline, Cursor, Continue.dev, OpenCode, Kilo Code.",
    metric: "host-safe · 6+ agents",
    icon: Container,
  },
];
