import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site";
import { DISCIPLINES } from "@/lib/content";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Reimagine Your Engine" },
      {
        name: "description",
        content:
          "Derek Hoyt’s capabilities in rotating equipment, fluid systems, equipment troubleshooting, and PHA recommendation implementation.",
      },
      { property: "og:title", content: "Capabilities — Reimagine Your Engine" },
      {
        property: "og:description",
        content: "Derek Hoyt’s equipment and process-safety expertise, organized by discipline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CapabilitiesPage,
});

const ENGAGEMENTS = [
  { to: "/equipment-troubleshooting", label: "Equipment troubleshooting" },
  { to: "/ragagep-compliance", label: "RAGAGEP compliance roadmaps" },
  { to: "/equipment-service", label: "Equipment service" },
  { to: "/life-extension", label: "Life-extension planning" },
  { to: "/reimagine", label: "Redesign & rebuild" },
  { to: "/vehicle-reimagination", label: "Vehicle adaptation — case by case" },
  { to: "/reuse", label: "Mechanical vehicle work — case by case" },
] as const;

function CapabilitiesPage() {
  return (
    <PageShell>
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
              <Link to={e.to} className="block border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent">
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
