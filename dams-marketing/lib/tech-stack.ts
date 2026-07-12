export interface TechItem {
  name: string;
  // path to a custom SVG or simple-icons id. Resolved by TechIcon component in task-012.
  svgPath?: string;
  viewBox?: string;
}

export const techStack: TechItem[] = [
  { name: "Python" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "FastAPI" },
  { name: "Tailwind CSS" },
  { name: "Ollama" },
  { name: "DuckDB" },
  { name: "Ragas" },
  { name: "Obsidian" },
  { name: "Docker" },
  { name: "MCP" },
  { name: "Graphify" },
];
