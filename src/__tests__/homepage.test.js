// src/__tests__/homepage.test.js
// Client-approved homepage content (v1.C). Reads the BUILT page, so run after
// `pnpm build` (`make test` does both).

import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) throw new Error('dist/index.html missing — run `pnpm build` first');
const html = readFileSync(indexPath, 'utf8');
const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

// Derek Hoyt's words, exactly as approved. Never edit to make a test pass.
const STATEMENT = [
  'I’m not writing your certification/PHA, stamping your drawings, or performing your inspection. I’m solving your problems. The HOW is what I care about.',
  'I don’t assume you have to disassemble the entire engine in order to fix an oil consumption problem. I find the root cause and work from there.',
  'I don’t believe you can replace one pump in the system without affecting the rest of the hydraulic circuit. I reimagine the system with the new component.',
];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith('.html') ? [p] : [];
  });
}

describe('homepage (dist/index.html)', () => {
  it.each(STATEMENT)('has Derek’s paragraph verbatim: %s', (para) => {
    expect(text).toContain(para);
  });

  it('shows the approved tagline', () => {
    expect(html).toContain('Rebuild. Reuse. Reimagine.');
  });

  it('puts the statement directly after the brand lockup (h1)', () => {
    const between = html.slice(html.indexOf('</h1>'), html.indexOf(STATEMENT[0].slice(0, 20)));
    expect(between.replace(/<[^>]+>/g, '').trim()).toBe('');
  });
});

describe('whole site (dist/**/*.html)', () => {
  const pages = htmlFiles(dist).map((p) => [p.slice(dist.length), readFileSync(p, 'utf8')]);

  it.each(pages)('%s has no old tagline', (_, page) => {
    expect(page.toUpperCase()).not.toContain('ENGINEERING SOLUTIONS FOR COMPLEX EQUIPMENT');
  });

  it.each(pages)('%s never canonicalizes to the staging host', (_, page) => {
    expect(page).not.toMatch(/pages\.dev/);
  });

  it.each(pages)('%s canonicalizes to reimagineyourengine.com', (_, page) => {
    const m = page.match(/<link rel="canonical" href="([^"]+)"/);
    if (m) expect(m[1]).toMatch(/^https:\/\/reimagineyourengine\.com\//);
  });

  it.each(pages)('%s has no RAGAGEP offering (removed 2026-10-24)', (_, page) => {
    expect(page).not.toMatch(/ragagep/i);
  });

  it.each(pages)('%s credits LaMill with a plain brand anchor (v2.B)', (_, page) => {
    expect(page).toMatch(/Website by(?:<!-- -->)?\s*<a href="https:\/\/lamill\.io\/"[^>]*>\s*LaMill\s*<\/a>/);
  });

  it.each(pages)('%s makes no PE / licensed-engineer claim', (_, page) => {
    expect(page).not.toMatch(/professional engineer|licensed engineer|\bP\.?E\.? licen/i);
  });
});
