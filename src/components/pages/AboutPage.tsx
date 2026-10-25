import { MediaSlot } from "../work";


const CV: { label: string; rows: string[] }[] = [
  {
    label: "Experience",
    rows: [
      "[YEAR – YEAR] · [ROLE], SpaceX — [one line on scope and equipment]",
      "[YEAR – YEAR] · [ROLE], MaaS Energy — [one line on scope and equipment]",
      "[YEAR – YEAR] · [ROLE], [OTHER EMPLOYER] — [one line on scope and equipment]",
    ],
  },
  {
    label: "Education",
    rows: ["[DEGREE], [FIELD] — [INSTITUTION], [YEAR]", "[DEGREE], [FIELD] — [INSTITUTION], [YEAR]"],
  },
  {
    label: "Patents & publications",
    rows: ["[PATENT NO.] — [TITLE], [YEAR]", "[PUBLICATION TITLE] — [JOURNAL / CONFERENCE], [YEAR]"],
  },
  {
    label: "Notable systems & products",
    rows: [
      "[SYSTEM / PRODUCT] — [role played: designed, tested, rebuilt]",
      "[SYSTEM / PRODUCT] — [role played]",
      "[SYSTEM / PRODUCT] — [role played]",
    ],
  },
];

const EXPERTISE = [
  "Rotating equipment",
  "Fluid systems",
  "Design & manufacturing",
  "Equipment operability",
  "PHA recommendation implementation",
];

export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <MediaSlot label="[PORTRAIT — Derek at work, not posed]" ratio="aspect-[4/5]" />
            <p className="mt-5 font-mono text-xs tracking-[0.18em] text-accent uppercase">Behind the work</p>
            <h1 className="mt-1 text-3xl">Derek Hoyt</h1>
            <p className="mt-2 text-sm text-muted-foreground">Rotating equipment & fluid systems</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {EXPERTISE.map((e) => (
                <li key={e} className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">{e}</li>
              ))}
            </ul>
          </aside>

          <div>
            <h2 className="text-xl">Background</h2>
            <p className="mt-3 text-foreground/85">
              From manure weirs to reusable rocket engines, I've spent my time in the design,
              manufacturing, and operability of rotating equipment and fluid systems. My experience
              includes SpaceX and MaaS Energy. I also help implement Process Hazard Analysis (PHA)
              recommendations and reduce plant downtime.
            </p>

            <dl className="mt-12 divide-y divide-border border-y border-border">
              {CV.map((s) => (
                <div key={s.label} className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">{s.label}</dt>
                  <dd>
                    <ul className="space-y-2">
                      {s.rows.map((r, i) => (
                        <li key={i} className="text-foreground/85">{r}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 text-xl">How I work</h2>
            <p className="mt-3 text-foreground/85">
              When you call, you talk to me. When I write a report, I wrote it. Engagements are
              scoped in writing before work starts, and findings are written in plain language.
              If a problem isn't one I can solve, I'll say so in the first conversation.
            </p>
            <p className="mt-8">
              <a href="/work/" className="font-semibold text-primary underline underline-offset-4 hover:text-accent">
                See selected work →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
