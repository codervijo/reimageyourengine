import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose, SectionHeading, PHONE_DISPLAY, PHONE_HREF } from "@/components/site";

export const Route = createFileRoute("/reimagine")({
  head: () => ({
    meta: [
      { title: "Reimagine — Redesign & Rebuild of Engines and Process Equipment" },
      {
        name: "description",
        content:
          "Redesigning and rebuilding engines and process equipment that never worked well — fixing the design problem instead of replacing parts on a flawed machine.",
      },
      { property: "og:title", content: "Reimagine — Redesign & Rebuild of Engines and Process Equipment" },
      {
        property: "og:description",
        content:
          "When the same machine keeps failing no matter what you replace, the problem is usually the design. That's fixable.",
      },
      { name: "twitter:card", content: "summary" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/reimagine" },
    ],
    links: [{ rel: "canonical", href: "/reimagine" }],
  }),
  component: ReimaginePage,
});

function ReimaginePage() {
  return (
    <PageShell>
      <Prose>
        <SectionHeading
          kicker="Reimagine"
          title="When the machine itself is the problem"
        />
        <p className="text-lg">
          Some equipment was never right. It was undersized for the duty, installed against its
          design limits, or built around a compromise that made sense on a drawing and not in a
          plant. No amount of parts replacement fixes that — you can rebuild it to spec forever
          and it will keep failing to spec.
        </p>
        <p className="mt-4">
          Reimagining means changing the spec: redesigning the weak point, adapting the machine
          to the duty it actually sees, and rebuilding it into equipment that works. It's the
          design and operability work I focus on — changes grounded in the existing equipment,
          failure evidence, and the plant's actual requirements.
        </p>

        <h2 className="mt-10 text-xl">How this usually goes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            <strong className="text-foreground">Prove the design is the problem.</strong>{" "}
            Failure history, operating data, and inspection — ruling out maintenance and
            operation first, because those are cheaper to fix.
          </li>
          <li>
            <strong className="text-foreground">Define what the machine needs to be.</strong>{" "}
            The actual duty cycle, the real gas quality, the true loads — not the nameplate
            assumptions.
          </li>
          <li>
            <strong className="text-foreground">Redesign and rebuild.</strong> Component changes,
            material upgrades, derating or rerating, auxiliary system changes — engineered, not
            improvised.
          </li>
          <li>
            <strong className="text-foreground">Document the new configuration.</strong> So the
            next person to work on it knows what it is, and your{" "}
            <Link to="/ragagep-compliance" className="text-primary underline underline-offset-2 hover:text-accent">
              RAGAGEP file
            </Link>{" "}
            stays honest.
          </li>
        </ul>

        <h2 className="mt-10 text-xl">You might need this if…</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>The same failure keeps coming back no matter what you replace.</li>
          <li>The OEM's answer is a new machine, and the numbers don't work.</li>
          <li>Your process changed and the equipment never caught up.</li>
          <li>The machine is obsolete and off-the-shelf replacement doesn't exist.</li>
        </ul>

        <p className="mt-4 text-muted-foreground">
          If the design is fine and the machine is just worn or misunderstood, that's{" "}
          <Link to="/equipment-troubleshooting" className="text-primary underline underline-offset-2 hover:text-accent">
            troubleshooting
          </Link>{" "}
          or{" "}
          <Link to="/life-extension" className="text-primary underline underline-offset-2 hover:text-accent">
            life extension
          </Link>
          . Reimagination is for when neither is enough.
        </p>

        <div className="mt-12 rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Start with the failure history</h2>
          <p className="mt-2 text-muted-foreground">
            What's failed, how many times, and what's been tried. Those details help establish whether redesign is worth investigating.
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
