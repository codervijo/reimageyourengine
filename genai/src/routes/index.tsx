import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "@/components/site";
import { MediaSlot, ProjectCard } from "@/components/work";
import { DISCIPLINES, PROJECTS } from "@/lib/content";
import heroImage from "@/assets/biogas-compressor-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Engines Reimagined — Reimagine Your Engine" },
      {
        name: "description",
        content:
          "Derek Hoyt’s engineering background in rotating equipment and fluid systems, with equipment troubleshooting and support implementing PHA recommendations.",
      },
      { property: "og:title", content: "Engines Reimagined — Reimagine Your Engine" },
      {
        property: "og:description",
        content:
          "Derek Hoyt: design, manufacturing, and operability of rotating equipment and fluid systems, from manure weirs to reusable rocket engines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const PRINCIPLES = [
  { t: "Pump won't move water?", d: "Check the operating conditions, flow path, and measurements before deciding what needs replacing." },
  { t: "Compressor overheating?", d: "Look at the duty, cooling, lubrication, and gas conditions together — not just the temperature trip." },
  { t: "Blower experiencing excessive vibration?", d: "Use vibration and operating data to investigate the mechanism, then check the proposed correction." },
  { t: "Engine suffering from pre-ignition?", d: "Review combustion conditions and operating history. Document the findings and the reasoning behind any changes." },
];

function HomePage() {
  return (
    <PageShell>
      {/* Who we are */}
      <section className="relative flex min-h-[min(760px,calc(100svh-65px))] items-end overflow-hidden border-b border-border bg-background">
        <img
          src={heroImage}
          alt="Compressor package and gas piping"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="mb-5 font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Reimagine Your Engine · Derek Hoyt
          </p>
          <h1 className="max-w-4xl text-5xl text-foreground sm:text-7xl lg:text-8xl">Engines Reimagined.</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Derek Hoyt works on rotating equipment and fluid systems — their design, manufacturing,
             and operability. He helps troubleshoot equipment failures, implement Process Hazard
             Analysis (PHA) recommendations, and reduce plant downtime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-accent">
              See the work
            </Link>
            <Link to="/about" className="border border-foreground/40 px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent">
              Meet the principal
            </Link>
          </div>
        </div>
      </section>

      {/* What Derek works on */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker="What Derek works on" title="Rotating equipment, fluid systems, and process safety" />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d) => (
            <div key={d.code} className="bg-background p-6">
              <p className="font-mono text-xs text-accent">{d.code}</p>
              <h3 className="mt-2 text-lg">{d.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d.summary}</p>
            </div>
          ))}
        </div>
        <Link to="/capabilities" className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
          Full capability list →
        </Link>
      </section>

      {/* Engineering work */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <SectionHeading kicker="Engineering work" title="Selected engineering work" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </div>
          <Link to="/work" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
            All projects, drawings, and test work →
          </Link>
        </div>
      </section>

      {/* How Derek approaches a problem */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <SectionHeading kicker="How Derek approaches a problem" title="Do you have process equipment that has failed, is failing, or is about to fail?" />
          <ol className="grid gap-8 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li key={p.t} className="border-t border-border pt-5">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who is behind the work */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-24 md:grid-cols-[2fr_3fr]">
          <MediaSlot label="[PORTRAIT — principal in the shop or field]" ratio="aspect-[4/5]" />
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Who is behind the work</p>
            <h2 className="mt-2 text-3xl">Derek Hoyt</h2>
            <p className="mt-4 text-foreground/85">
              From manure weirs to reusable rocket engines, Derek has spent his time in the design,
               manufacturing, and operability of rotating equipment and fluid systems.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                ["Experience", "SpaceX · MaaS Energy · [additional employers]"],
                ["Education", "[DEGREE, INSTITUTION]"],
                ["Patents", "[COUNT / NUMBERS]"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-3">
                  <dt className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{k}</dt>
                  <dd className="mt-1 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/about" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
              Full engineering profile →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-6">
          <p className="text-lg">Have a machine or a PHA recommendation to discuss?</p>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-accent">
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="border border-border px-5 py-3 font-semibold hover:border-accent">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
