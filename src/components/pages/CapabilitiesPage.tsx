import { SectionHeading } from "../site";
import { DISCIPLINES } from "../../lib/content";


const ENGAGEMENTS = [
  { to: "/equipment-troubleshooting", label: "Equipment troubleshooting" },
  { to: "/ragagep-compliance", label: "RAGAGEP compliance roadmaps" },
  { to: "/equipment-service", label: "Equipment service" },
  { to: "/life-extension", label: "Life-extension planning" },
  { to: "/reimagine", label: "Redesign & rebuild" },
  { to: "/vehicle-reimagination", label: "Vehicle adaptation — case by case" },
  { to: "/reuse", label: "Mechanical vehicle work — case by case" },
] as const;

export function CapabilitiesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <SectionHeading kicker="Capabilities" title="Organized by engineering discipline" />
        <div className="divide-y divide-border border-y border-border">
          {DISCIPLINES.map((d) => (
            <div key={d.code} className="grid gap-6 py-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs text-accent">{d.code}</p>
                <h2 className="mt-1 text-2xl">{d.name}</h2>
                <p className="mt-3 text-muted-foreground">{d.summary}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {d.items.map((it) => (
                  <li key={it} className="border-l border-accent/50 pl-3 text-sm text-foreground/85">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-xl">Discussing the work with Derek</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {ENGAGEMENTS.map((e) => (
            <li key={e.to}>
              <a href={`${e.to}/`} className="block border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent">
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
