import { Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";


const EQUIPMENT = [
  {
    name: "Engines & gensets",
    detail:
      "Engine suffering from pre-ignition? Other symptoms include load loss, derating, detonation, oil-analysis concerns, and uneven exhaust temperatures.",
  },
  {
    name: "Compressors & blowers",
    detail:
      "Compressor overheating? Blower experiencing excessive vibration? Investigate temperature and pressure trips, surge, seals, capacity loss, and oil carryover.",
  },
  {
    name: "Pumps",
    detail:
      "Pump won't move water? Check flow and pressure, cavitation, plugging, seals, bearings, and the operating conditions behind repeat failures.",
  },
  {
    name: "Gas handling & conditioning",
    detail:
      "Blower skids, H₂S and siloxane media beds, moisture knockout, flare performance, pressure regulation that won't stay regulated.",
  },
];

const TRIGGERS = [
  "The same machine has been 'fixed' three times and fails again",
  "You're consuming parts — bearings, seals, rings — faster than the OEM says you should",
  "The equipment runs, but not at rated capacity, and nobody can say why",
  "A failure keeps getting attributed to 'bad gas' without anyone measuring the gas",
  "The OEM's field tech resets the trip and leaves",
];

export function TroubleshootingPage() {
  return (
    <>
      <Prose>
        <p className="mb-2 font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Service — Reliability
        </p>
        <h1 className="text-3xl sm:text-4xl">Process equipment troubleshooting</h1>

        <p className="mt-6 text-lg">
          Do you have process equipment that has failed, is failing, or is about to fail?
          I'm Derek Hoyt. I work through the equipment and process conditions to understand
          the failure mechanism and identify practical changes that can reduce plant downtime.
        </p>

        <h2 className="mt-10 text-xl">Root cause first, parts second</h2>
        <p className="mt-3">
          My job is to find out why the equipment is failing before anyone orders another part.
          That means operating data, maintenance history, oil and gas analysis where it helps, and
          time looking at the machine and the process around it — because the root cause is
          frequently upstream of the thing that broke. The deliverable is a written diagnosis: what
          failed, the evidence for the cause, recommended changes, and remaining uncertainties.
        </p>

        <h2 className="mt-10 text-xl">Equipment I work on</h2>
        <div className="mt-4 space-y-4">
          {EQUIPMENT.map((e) => (
            <div key={e.name} className="rounded-sm border border-border bg-card p-5">
              <h3 className="text-lg">{e.name}</h3>
              <p className="mt-2 text-muted-foreground">{e.detail}</p>
            </div>
          ))}
        </div>

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
            Describe the symptoms: call{" "}
            <a href={PHONE_HREF} className="text-primary underline underline-offset-4 hover:text-accent">
              {PHONE_DISPLAY}
            </a>{" "}
            or <a href="/contact/" className="text-primary underline underline-offset-4 hover:text-accent">write it down here</a>.
          </p>
        </div>
      </Prose>
    </>
  );
}
