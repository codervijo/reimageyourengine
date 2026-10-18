import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/site";
import { MediaSlot, ProjectCard } from "@/components/work";
import { PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Engineering Work — Reimagine Your Engine" },
      {
        name: "description",
        content:
          "Systems, prototypes, test rigs, CAD, electrical design, and failure analysis from Reimagine Your Engine — each told as challenge, approach, and result.",
      },
      { property: "og:title", content: "Engineering Work — Reimagine Your Engine" },
      {
        property: "og:description",
        content: "Engineering evidence: systems built, problems solved, and how each was approached.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const GALLERY = [
  "[TECHNICAL DRAWING — dimensioned part or assembly]",
  "[SCHEMATIC — control or power circuit]",
  "[SHOP PHOTO — hardware during build]",
  "[TEST DATA PLOT — performance vs. spec]",
  "[FIELD PHOTO — equipment in service]",
  "[TEARDOWN PHOTO — failed component]",
];

function WorkPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <SectionHeading kicker="Engineering work" title="Design, hardware, and failure analysis" />
        <p className="max-w-2xl text-muted-foreground">
          Each project is described the same way: the problem, how it was engineered, and what
          came out the other end. Details are shared where clients permit.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <SectionHeading kicker="From the bench" title="Drawings, schematics, and shop photos" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <MediaSlot key={g} label={g} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
