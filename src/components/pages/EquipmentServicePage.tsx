import { Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "../site";


export function EquipmentServicePage() {
  return (
    <>
      <Prose>
        <SectionHeading kicker="Service" title="Equipment service, done to the standard" />
        <p className="text-lg">
          Most process equipment doesn't fail suddenly. It fails after months of small things
          nobody had time to do — a valve adjustment deferred, an oil sample never taken, a
          maintenance interval stretched because the machine "seemed fine."
        </p>
        <p className="mt-4">
          I'm Derek Hoyt. I service process equipment on site: engines and gensets, compressors and blowers,
          pumps, and gas-handling equipment. The work follows the OEM procedure and your
          facility's maintenance plan — the same documentation trail a RAGAGEP audit will ask
          for later.
        </p>

        <h2 className="mt-10 text-xl">What a service visit includes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Manufacturer-specified maintenance tasks, done on the interval — not when something breaks.</li>
          <li>Inspection findings written down in plain language, with photos where they matter.</li>
          <li>Wear items identified before they become downtime, with lead times so you can order parts ahead.</li>
          <li>Service records your insurer, auditor, or RAGAGEP assessment can actually use.</li>
        </ul>

        <h2 className="mt-10 text-xl">What it isn't</h2>
        <p className="mt-4 text-muted-foreground">
          I'm not a 24/7 fleet-maintenance contractor, and I don't replace your O&amp;M crew. If
          your equipment needs daily attention, you need more than a visiting consultant — I'll
          tell you so. This service is for facilities that need a senior set of hands on a
          planned basis, or to catch up on deferred maintenance before it becomes a failure.
        </p>

        <h2 className="mt-10 text-xl">Where this fits</h2>
        <p className="mt-4 text-muted-foreground">
          Service and{" "}
          <a href="/equipment-troubleshooting/" className="text-primary underline underline-offset-2 hover:text-accent">
            troubleshooting
          </a>{" "}
          often come together — a machine that keeps failing usually has a maintenance history
          that explains why. And if the service history is the gap an audit would find, a{" "}
          <a href="/ragagep-compliance/" className="text-primary underline underline-offset-2 hover:text-accent">
            RAGAGEP assessment
          </a>{" "}
          will identify the missing records or maintenance work. I can also help implement PHA
          recommendations involving equipment and maintenance, with the aim of reducing plant downtime.
        </p>

        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Schedule a service visit</h2>
          <p className="mt-2 text-muted-foreground">
            Call with the equipment make, model, and hours. That's usually enough to scope the
            visit.
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
