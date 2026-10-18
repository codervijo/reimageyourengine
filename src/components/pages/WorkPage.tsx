import { SectionHeading } from "../site";
import { MediaSlot, ProjectCard } from "../work";
import { PROJECTS } from "../../lib/content";


const GALLERY = [
  "[TECHNICAL DRAWING — dimensioned part or assembly]",
  "[SCHEMATIC — control or power circuit]",
  "[SHOP PHOTO — hardware during build]",
  "[TEST DATA PLOT — performance vs. spec]",
  "[FIELD PHOTO — equipment in service]",
  "[TEARDOWN PHOTO — failed component]",
];

export function WorkPage() {
  return (
    <>
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
    </>
  );
}
