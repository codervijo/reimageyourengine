import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, Prose, PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Derek Hoyt — Reimagine Your Engine" },
      {
        name: "description",
        content:
          "Contact Derek Hoyt about equipment troubleshooting, RAGAGEP gaps, or implementing PHA recommendations.",
      },
      { property: "og:title", content: "Contact Derek Hoyt — Reimagine Your Engine" },
      {
        property: "og:description",
        content:
          "Discuss equipment symptoms or process-safety recommendations with Derek Hoyt.",
      },
      { name: "twitter:card", content: "summary" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FACILITY_OPTIONS = [
  "Dairy digester",
  "RNG upgrading facility",
  "Wastewater treatment digester",
  "Landfill gas",
  "Food waste co-digestion",
  "Other / not sure",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  // TODO: post to the real form endpoint (e.g. a form service or API route).
  // Replace the handler below with a fetch() to that endpoint.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <Prose>
        <p className="mb-2 font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl">Get in touch with Derek Hoyt.</h1>

        <p className="mt-6 text-lg">
          <a
            href={PHONE_HREF}
            className="font-display text-3xl font-bold text-primary underline decoration-accent decoration-4 underline-offset-8 sm:text-4xl"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="mt-4 text-muted-foreground">
          If it goes to voicemail, leave the facility name and what's not running. Email:{" "}
          <span className="todo">{EMAIL}</span>
        </p>

        <div className="mt-12 border-t border-border pt-10">
          <h2 className="text-2xl">Or write it down</h2>
          <p className="mt-2 text-muted-foreground">
            Describe the problem the way you'd describe it to another operator. Symptoms, what
            changed, what you've already tried — or the PHA recommendation you need help
            implementing. That's enough to start.
          </p>

          {sent ? (
            <div className="mt-6 rounded-sm border border-border bg-secondary p-6">
              <p className="font-semibold text-foreground">Message noted.</p>
              <p className="mt-1 text-muted-foreground">
                <span className="todo">[TODO: connect form endpoint — submissions are not yet delivered]</span>{" "}
                For anything urgent, call {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-sm border border-input bg-card px-3 py-2.5"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-1 w-full rounded-sm border border-input bg-card px-3 py-2.5"
                />
              </div>
              <div>
                <label htmlFor="facility" className="block text-sm font-semibold">
                  Facility type
                </label>
                <select
                  id="facility"
                  name="facility"
                  className="mt-1 w-full rounded-sm border border-input bg-card px-3 py-2.5"
                >
                  {FACILITY_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="problem" className="block text-sm font-semibold">
                  What's wrong?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={6}
                  placeholder='e.g. "Genset #2 derates above 60% load when ambient temp climbs. Replaced the intercooler last year, no change."'
                  className="mt-1 w-full rounded-sm border border-input bg-card px-3 py-2.5"
                />
              </div>
              <button
                type="submit"
                className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-accent"
              >
                Send
              </button>
              <p className="text-sm text-muted-foreground">
                <span className="todo">[TODO: form posts to placeholder endpoint]</span>
              </p>
            </form>
          )}
        </div>
      </Prose>
    </PageShell>
  );
}
