"use client";

interface TechIconProps {
  name: string;
  className?: string;
}

const nameMap: Record<string, string> = {
  "Python": "python.svg",
  "React": "react.svg",
  "TypeScript": "typescript.svg",
  "FastAPI": "fastapi.svg",
  "Tailwind CSS": "tailwindcss.svg",
  "Ollama": "ollama.svg",
  "DuckDB": "duckdb.svg",
  "Ragas": "ragas.svg",
  "Obsidian": "obsidian.svg",
  "Docker": "docker.svg",
  "MCP": "mcp.svg",
  "Graphify": "graphify.svg",
};

export function TechIcon({ name, className }: TechIconProps) {
  const logoFile = nameMap[name];

  return (
    <div
      role="img"
      aria-label={`${name} logo`}
      title={name}
      className={`flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-surface transition-all hover:border-border-hover hover:scale-105 group ring-2 ring-accent ring-offset-4 ring-offset-surface ${
        className || ""
      }`}
    >
      {logoFile ? (
        <img
          src={`/logos/${logoFile}`}
          alt={`${name} logo`}
          className="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      ) : (
        <span className="font-mono text-xs font-semibold text-text-secondary opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}
