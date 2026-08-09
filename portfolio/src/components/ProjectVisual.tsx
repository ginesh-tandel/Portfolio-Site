import type { Project } from "../data/content";

interface ProjectVisualProps {
  project: Project;
  large?: boolean;
}

export default function ProjectVisual({ project, large = false }: ProjectVisualProps) {
  const rows = project.capabilities.slice(0, 4);
  const stats = project.architecture.slice(0, 3);

  return (
    <div
      className={`cs-phase rounded-lg border border-border bg-bg-secondary overflow-hidden ${
        large ? "aspect-[16/10]" : "aspect-[16/9]"
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="ml-3 text-[10px] font-mono text-text-muted tracking-wide">
          {project.name.toLowerCase()}.app
        </span>
      </div>

      <div className="grid grid-cols-4 h-[calc(100%-2.5rem)]">
        <div className="col-span-1 border-r border-border p-3 space-y-2 hidden sm:block">
          {rows.map((cap, i) => (
            <div
              key={i}
              className={`h-6 rounded flex items-center px-2 text-[9px] truncate ${
                i === 0
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "text-text-muted"
              }`}
            >
              {cap}
            </div>
          ))}
        </div>

        <div className="col-span-3 sm:col-span-3 p-4 flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((label, i) => (
              <div
                key={i}
                className="rounded border border-border bg-bg-primary/60 p-2.5"
              >
                <div className="h-1.5 w-8 bg-border-light rounded mb-2" />
                <div className="text-[9px] text-text-muted truncate">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex-1 rounded border border-border bg-bg-primary/60 p-3 flex items-end gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/25"
                style={{ height: `${20 + ((i * 37) % 70)}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
