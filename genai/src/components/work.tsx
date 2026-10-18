import type { Project } from "@/lib/content";

export function MediaSlot({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div
      className={`${ratio} relative flex items-center justify-center overflow-hidden border border-dashed border-border bg-secondary bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] p-6 text-center`}
    >
      <span className="bg-background/90 px-2 py-1 font-mono text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article className="flex flex-col border border-border bg-card">
      <MediaSlot label={p.media} />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
          {String(index + 1).padStart(2, "0")} · {p.category}
        </p>
        <h3 className="mt-2 text-lg">{p.title}</h3>
        <dl className="mt-5 space-y-4 text-sm">
          {(
            [
              ["Challenge", p.challenge],
              ["Approach", p.approach],
              ["Built / solved", p.result],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 border-t border-border pt-3">
              <dt className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{k}</dt>
              <dd className="text-foreground/85">{v}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
