import { Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";


const TRIGGERS = [
  "A regulator, EPA inspector, or state agency flagged mechanical integrity gaps",
  "Your facility is covered by PSM or RMP and the last audit raised findings",
  "You're expanding throughput or changing feedstock and the original design basis no longer fits",
  "An insurer or lender asked for evidence of a mechanical integrity program",
  "Equipment has been modified over the years without documentation to match",
  "You inherited the plant and the paperwork doesn't describe what's actually installed",
];

export function RagagepPage() {
  return (
    <>
      <Prose>
        <p className="mb-2 font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Service — Compliance
        </p>
        <h1 className="text-3xl sm:text-4xl">RAGAGEP compliance roadmaps</h1>

        <h2 className="mt-10 text-xl">What RAGAGEP is, in plain terms</h2>
        <p className="mt-3">
          RAGAGEP stands for Recognized And Generally Accepted Good Engineering Practice. It's the
          body of codes, standards, and published engineering practice — ASME, API, NFPA, IIAR,
          manufacturer specifications, and similar sources — that defines how process equipment is
          supposed to be designed, installed, inspected, and maintained.
        </p>
        <p className="mt-3">
          If your facility is covered by OSHA's Process Safety Management standard or the EPA's Risk
          Management Program, "mechanical integrity" isn't a suggestion. You are expected to
          maintain equipment consistent with RAGAGEP, and to be able to show that you do. For many
          biogas and RNG facilities — built fast, modified often, run lean — the gap between the
          paperwork and the physical plant is where the risk lives.
        </p>

        <h2 className="mt-10 text-xl">What a gap assessment covers</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Walk-down of process equipment: vessels, piping, compressors, engines, relief devices, instrumentation, and safety systems</li>
          <li>Review of design documentation against what's actually installed</li>
          <li>Inspection, testing, and preventive maintenance records against RAGAGEP-required frequencies</li>
          <li>Equipment-specific standards applicable to your process, including H₂S-bearing service considerations</li>
          <li>Identification of deficiencies, rated by consequence and urgency — not a flat list of everything that's imperfect</li>
        </ul>

        <h2 className="mt-10 text-xl">What you receive</h2>
        <p className="mt-3">
          A written gap assessment and a prioritized roadmap. Each finding states the gap, the
          standard it falls short of, why it matters, and what closing it looks like — sequenced so
          the items that reduce the most risk come first, and the achievable items don't wait behind
          the expensive ones. It's written to be used: by you, by your maintenance contractor, and
          in front of an auditor.
        </p>

        <h2 className="mt-10 text-xl">Implementing PHA recommendations</h2>
        <p className="mt-3">
          I'm Derek Hoyt. Alongside RAGAGEP gap assessments, I can help implement Process Hazard
          Analysis (PHA) recommendations. That means turning recommendations into practical
          equipment, maintenance, and documentation work, sequenced around plant operations,
          planned outages, and budget constraints. The aim is to address the identified hazards
          and reduce plant downtime — not simply produce another report.
        </p>

        <div className="mt-12 rounded-sm border border-border bg-secondary p-6">
          <SectionHeading title="You might need this if…" />
          <ul className="list-disc space-y-2 pl-6">
            {TRIGGERS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-lg font-medium">
            If any of those sound familiar, call{" "}
            <a href={PHONE_HREF} className="text-primary underline underline-offset-4 hover:text-accent">
              {PHONE_DISPLAY}
            </a>{" "}
            or <a href="/contact/" className="text-primary underline underline-offset-4 hover:text-accent">send the details</a>.
          </p>
        </div>
      </Prose>
    </>
  );
}
