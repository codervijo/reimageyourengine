import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "@/components/site";

export const Route = createFileRoute("/vehicle-reimagination")({
  head: () => ({
    meta: [
      { title: "Vehicle Reimagination — Reimagine Your Engine" },
      {
        name: "description",
        content:
          "Repurpose vehicles you already own for new duty — repowering, drivetrain and equipment adaptation, and honest feasibility assessment.",
      },
      { property: "og:title", content: "Vehicle Reimagination — Reimagine Your Engine" },
      {
        property: "og:description",
        content:
          "Case-by-case feasibility assessment of vehicle adaptations, secondary to rotating equipment and fluid-systems work.",
      },
      { name: "twitter:card", content: "summary" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/vehicle-reimagination" },
    ],
    links: [{ rel: "canonical", href: "/vehicle-reimagination" }],
  }),
  component: VehicleReimaginationPage,
});

function VehicleReimaginationPage() {
  return (
    <PageShell>
      <Prose>
        <SectionHeading
          kicker="Vehicle reimagination"
          title="A new job for a vehicle you already own"
        />
        <p className="text-lg">
          My main focus is rotating equipment and fluid systems. Vehicle adaptation is
           considered case by case where there is a defined operating need and a sound
           technical basis. The starting point is the existing vehicle and its intended duty,
           not a speculative conversion.
        </p>

        <h2 className="mt-10 text-xl">What this can mean</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            <strong className="text-foreground">Repowering</strong> — a different engine or fuel
            system where the chassis and body are still sound. Farm and industrial operations
            sitting on biogas or RNG sometimes want their vehicles to run on what they make.
          </li>
          <li>
            <strong className="text-foreground">Repurposing</strong> — converting a vehicle from
            one duty to another: service body to water hauler, road truck to yard truck, and the
            like.
          </li>
          <li>
            <strong className="text-foreground">Adaptation</strong> — drivetrain, gearing,
            cooling, or mounting changes so the vehicle survives the duty it's actually seeing,
            not the duty it was bought for.
          </li>
        </ul>

        <h2 className="mt-10 text-xl">Feasibility first</h2>
        <p className="mt-4 text-muted-foreground">
          Not every vehicle deserves the work. Before anything is ordered or cut, you get an
          honest assessment: what the conversion costs, what it buys you, what it does to
          reliability and resale, and where the regulatory lines are. Sometimes the right answer
          is "sell it and buy the right truck." I'll say so — I don't sell vehicles or parts, so
          the advice is clean either way.
        </p>

        <p className="mt-4 text-muted-foreground">
          If the vehicle is old rather than wrong — worth keeping on the road as what it is —
          that's the <Link to="/reuse" className="text-primary underline underline-offset-2 hover:text-accent">reuse</Link>{" "}
          side of the work.
        </p>

        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Describe the vehicle and the job</h2>
          <p className="mt-2 text-muted-foreground">
            Year, make, model, what it does now, and what you need it to do.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-sm bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-accent"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="rounded-sm border border-border px-5 py-3 font-semibold text-foreground hover:border-accent"
            >
              Send the details
            </Link>
          </div>
        </div>
      </Prose>
    </PageShell>
  );
}
