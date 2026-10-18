import { Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";


export function LifeExtensionPage() {
  return (
    <>
      <Prose>
        <SectionHeading
          kicker="Life extension"
          title="Get more years out of the machine you already have"
        />
        <p className="text-lg">
          A replacement engine or compressor is a six-figure decision with a long lead time.
          Before you make it, it's worth knowing what the existing machine actually has left —
          and what it would cost to keep it useful.
        </p>

        <h2 className="mt-10 text-xl">What the assessment covers</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            <strong className="text-foreground">Condition, not age.</strong> Hours, maintenance
            history, wear measurements, oil-analysis trends, and what the machine is telling us
            when it runs.
          </li>
          <li>
            <strong className="text-foreground">The failure modes that matter.</strong> Which
            components are life-limited, which are consumable, and which are being killed early
            by how the machine is operated or maintained.
          </li>
          <li>
            <strong className="text-foreground">Upgrade vs. rebuild vs. replace.</strong> The
            real numbers — parts, labor, downtime, and remaining risk — for each path.
          </li>
          <li>
            <strong className="text-foreground">Maintenance strategy changes.</strong> Often the
            cheapest life extension is changing what happens between overhauls, not the overhaul
            itself.
          </li>
        </ul>

        <h2 className="mt-10 text-xl">The deliverable</h2>
        <p className="mt-4 text-muted-foreground">
          A written plan: what to do, in what order, at what cost, and what it buys you in years
          and reliability. Where the honest answer is "stop spending money on this machine," the
          plan says that too — with the reasoning, so you can defend the decision to whoever
          holds the budget.
        </p>

        <h2 className="mt-10 text-xl">You might need this if…</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>A major overhaul is due and you're not sure the machine deserves it.</li>
          <li>A vendor is quoting a replacement and you want a second opinion that doesn't sell equipment.</li>
          <li>The machine is obsolete — parts are scarce, and nobody has mapped the options.</li>
          <li>You're inheriting equipment with unknown history and need a baseline.</li>
        </ul>

        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Talk through the machine's history</h2>
          <p className="mt-2 text-muted-foreground">
            Make, model, hours, and what's been done to it. That's the starting point.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-sm bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-accent"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="/contact/"
              className="rounded-sm border border-border px-5 py-3 font-semibold text-foreground hover:border-accent"
            >
              Send the details
            </a>
          </div>
        </div>
      </Prose>
    </>
  );
}
