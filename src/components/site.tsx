import type { ReactNode } from "react";

export const SITE_NAME = "Reimagine Your Engine";
export const PHONE_DISPLAY = "[PHONE NUMBER]";
export const PHONE_HREF = "tel:+1XXXXXXXXXX"; // TODO: real phone number
export const EMAIL = "[EMAIL ADDRESS]";

const NAV = [
  { to: "/work/", label: "Work" },
  { to: "/capabilities/", label: "Capabilities" },
  { to: "/about/", label: "Principal" },
  { to: "/contact/", label: "Contact" },
] as const;

function isActive(currentPath: string | undefined, to: string) {
  if (!currentPath) return false;
  const p = currentPath.endsWith("/") ? currentPath : `${currentPath}/`;
  return p === to || p.startsWith(to);
}

export function Header({ currentPath }: { currentPath?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-3 font-display text-base font-bold text-primary uppercase">
          <span aria-hidden="true" className="h-4 w-4 bg-accent" />
          Reimagine Your Engine
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium">
          {NAV.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className={`text-muted-foreground transition-colors hover:text-accent${isActive(currentPath, item.to) ? " text-accent" : ""}`}
              aria-current={isActive(currentPath, item.to) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="border border-border px-3 py-1.5 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 text-sm text-muted-foreground sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display font-bold text-primary uppercase">Reimagine Your Engine</p>
            <p className="mt-2">
              Derek Hoyt — rotating equipment, fluid systems, equipment reliability, and
              process-safety support.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <p className="mt-2">
              <a href={PHONE_HREF} className="text-primary underline underline-offset-2">
                {PHONE_DISPLAY}
              </a>
              <br />
              {EMAIL}
              <br />
              [STREET ADDRESS], [CITY], [STATE] [ZIP]
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Pages</p>
            <ul className="mt-2 space-y-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-4">
          © {new Date().getFullYear()} {SITE_NAME}. [LEGAL ENTITY NAME]
        </p>
      </div>
    </footer>
  );
}

/** Page chrome. In Astro this lives in src/layouts/Layout.astro; kept for React-only use. */
export function PageShell({ children, currentPath }: { children: ReactNode; currentPath?: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPath={currentPath} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/** Narrow reading column used on all content pages. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl px-5 py-14 sm:py-24">{children}</div>;
}

export function SectionHeading({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-8">
      {kicker && (
        <p className="mb-2 font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
    </div>
  );
}
