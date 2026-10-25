import { Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";


export function ReusePage() {
  return (
    <>
      <Prose>
        <SectionHeading level={1}
          kicker="Reuse"
          title="Existing vehicles, assessed for continued use"
        />
        <p className="text-lg">
          My main work is with rotating equipment and fluid systems. Mechanical work on
           existing vehicles is a secondary, case-by-case consideration — focused on whether
           the vehicle can reasonably continue doing the job it already has.
        </p>

        <h2 className="mt-10 text-xl">What this work is</h2>
        <p className="mt-4 text-muted-foreground">
          Mechanical restoration for use, not for show. Engine, fuel system, cooling, brakes,
          steering, driveline — the systems that decide whether a vehicle starts every morning
          and stops when it should. The goal is a vehicle you can rely on for daily duty for
          its intended use, with a written record of what was done and what to watch.
        </p>

        <h2 className="mt-10 text-xl">What it isn't</h2>
        <p className="mt-4 text-muted-foreground">
          I'm not a body shop and I don't do concours paint. Cosmetics come second to function.
          If the vehicle's problems are mostly rust-through and structure, I'll tell you before
          money gets spent on the wrong work.
        </p>

        <h2 className="mt-10 text-xl">How it starts</h2>
        <p className="mt-4 text-muted-foreground">
          With a mechanical assessment: condition, intended use, required work, and whether
           that work is justified. This is not a used-car turnover service. Where the scope
           makes sense, safety and reliability come before cosmetic work.
        </p>

        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Tell me about the vehicle</h2>
          <p className="mt-2 text-muted-foreground">
            Year, make, model, how long it's been sitting, and what you want to use it for.
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
