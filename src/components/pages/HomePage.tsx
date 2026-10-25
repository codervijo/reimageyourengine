import { SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";
import { MediaSlot, ProjectCard } from "../work";
import { DEREK_STATEMENT, DISCIPLINES, PROJECTS } from "../../lib/content";
import heroImage from "../../assets/biogas-compressor-hero.jpg";
import lockup from "../../assets/brand/logo-horizontal-on-dark.png";


const PRINCIPLES = [
  { t: "Pump won't move water?", d: "Check the operating conditions, flow path, and measurements before deciding what needs replacing." },
  { t: "Compressor overheating?", d: "Look at the duty, cooling, lubrication, and gas conditions together — not just the temperature trip." },
  { t: "Blower experiencing excessive vibration?", d: "Use vibration and operating data to investigate the mechanism, then check the proposed correction." },
  { t: "Engine suffering from pre-ignition?", d: "Review combustion conditions and operating history. Document the findings and the reasoning behind any changes." },
];

export function HomePage() {
  return (
    <>
      {/* Brand → name → tagline (the approved lockup carries all three), then
          Derek's statement. Nothing goes between the tagline and his words. */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-4xl px-5 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
          <h1>
            <img
              src={lockup.src}
              alt="Reimagine Your Engine — Rebuild. Reuse. Reimagine."
              width={732}
              height={185}
              fetchPriority="high"
              className="h-auto w-full max-w-[600px]"
            />
          </h1>

          {/* Client-authored text — keep verbatim (see homepage.test.js). */}
          <blockquote className="mt-12 border-l-4 border-accent pl-6 sm:mt-16 sm:pl-8">
            {DEREK_STATEMENT.map((para) => (
              <p key={para} className="mt-6 text-xl leading-relaxed text-foreground first:mt-0 sm:text-2xl sm:leading-relaxed">
                {para}
              </p>
            ))}
            <footer className="mt-8 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              — Derek Hoyt
            </footer>
          </blockquote>

          <div className="mt-12 flex flex-wrap gap-3">
            <a href="/about/" className="bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-accent">
              Derek’s background
            </a>
            <a href="/work/" className="border border-foreground/40 px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent">
              Selected work
            </a>
          </div>
        </div>
        <img
          src={heroImage.src}
          alt="Compressor package and gas piping at an industrial site"
          width={1920}
          height={1080}
          loading="lazy"
          className="block aspect-[21/9] w-full object-cover object-center grayscale"
        />
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
        <a href="/capabilities/" className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
          Full capability list →
        </a>
      </section>

      {/* Selected work */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <SectionHeading kicker="Selected work" title="Projects and case studies" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </div>
          <a href="/work/" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
            All projects, drawings, and test work →
          </a>
        </div>
      </section>

      {/* How Derek approaches a problem */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <SectionHeading kicker="Problems I solve" title="Do you have process equipment that has failed, is failing, or is about to fail?" />
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
            <a href="/about/" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent">
              Full background →
            </a>
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
            <a href="/contact/" className="border border-border px-5 py-3 font-semibold hover:border-accent">
              Send a message
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
