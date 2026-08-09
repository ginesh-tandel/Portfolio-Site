import type { Project } from "../data/content";

const tagColors = [
  "text-accent",
  "text-secondary",
  "text-tertiary",
  "text-text-secondary",
];

export function TechChips({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2 md:justify-end md:max-w-xs">
      {project.technologies.map((tech, i) => (
        <span
          key={tech}
          className={`px-3 py-1 font-mono text-[11px] bg-surface-container-highest ${tagColors[i % tagColors.length]}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function ArchitectureFrame({ project }: { project: Project }) {
  return (
    <div className="w-full bg-surface-container flex flex-col shadow-xl">
      <div className="h-10 bg-bg-elevated border-b border-border flex items-center px-4 gap-4">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
        </div>
        <span className="font-mono text-[10px] text-text-muted">
          {project.id}_pipeline.sys
        </span>
      </div>
      <div className="p-6 bg-code-bg font-mono text-[12px] leading-relaxed text-text-secondary">
        {project.architecture.map((item, i) => (
          <p key={i} className={i === 0 ? "text-tertiary" : ""}>
            &gt; {item}
          </p>
        ))}
        <p className="animate-pulse text-accent">&gt; System ready.</p>
      </div>
    </div>
  );
}

export function ProductMockup({ project, large = false }: { project: Project; large?: boolean }) {
  const rows = project.capabilities.slice(0, 4);
  const stats = project.architecture.slice(0, 3);

  return (
    <div className="w-full bg-surface-container p-4 shadow-xl">
      <div
        className={`w-full ${large ? "aspect-[16/10]" : "aspect-[16/9]"} bg-surface-dim relative overflow-hidden`}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
          <span className="ml-3 font-mono text-[10px] text-text-muted">
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
    </div>
  );
}
