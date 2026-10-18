# Engine Reliability Insights

Lovable Prompt — reimagineyourengine.com

Build a marketing site for an independent industrial process-safety and equipment-reliability consultancy.

Business

Reimagine Your Engine — a one-person engineering consultancy serving biogas, renewable natural gas, and process facilities. Sole proprietor, senior engineer, decades of hands-on equipment experience.

Two services today:

Process equipment troubleshooting — diagnosing engines, compressors, pumps, and gas handling equipment that are failing, underperforming, or unreliable.

RAGAGEP compliance roadmaps — assessing a facility against Recognized And Generally Accepted Good Engineering Practice and delivering a prioritized path to close gaps.

Who visits this site

A digester operator, plant manager, or O&M lead at a biogas or RNG facility. Often rural, often no in-house engineer. They arrive because a compressor keeps tripping, a genset won't hold load, or a regulator flagged mechanical integrity gaps. They are stressed, technical, and skeptical of marketing language.

They are NOT consumers, and they are NOT looking for automotive work. Despite the company name, nothing on this site should suggest cars, garages, or restoration.

Tone and design direction

Serious, plain-spoken, and technically credible. This should read like a working engineer wrote it, not a marketing agency.

No stock photos of smiling people in hard hats pointing at clipboards

No gradient hero blobs, no glassmorphism, no floating 3D shapes

No "empower," "unlock," "transform," "solutions," "cutting-edge," "seamless"

Restrained palette: a deep industrial base color, one accent, generous white space

Typography does the work — a strong grotesque or slab for headings, highly readable body text at comfortable size

Fast, static, no heavy animation. Someone may be loading this on bad rural signal.

Reference feel: a well-made engineering firm site or a technical standards document. Confident and dry.

Pages

Home

Hero: state the specific problem, not the service. Something in the register of "Your compressor is down and there's no engineer on site." Subhead names the disciplines: biogas and RNG process equipment, RAGAGEP compliance.

Immediately below the fold: a short credibility band — years of experience, facility types served, credentials. Leave these as clearly-marked placeholders.

Two service cards linking to the service pages.

A short "who I work with" section naming facility types: dairy digesters, RNG upgrading facilities, wastewater treatment digesters, landfill gas, food waste co-digestion.

Single contact CTA repeated once at the bottom.

RAGAGEP Compliance

The primary money page. Explain what RAGAGEP is in plain terms, what a gap assessment covers, what the deliverable looks like, and what happens after. Include a short "you might need this if..." list of triggering situations.

Equipment Troubleshooting

Same structure. Focus on engines, compressors, pumps, and gas handling equipment in H2S-bearing biogas service. Emphasize root-cause diagnosis over parts replacement.

About

This page carries the sale. Long-form, first person, no corporate voice. Career history, the kinds of equipment he has actually put hands on, credentials and licenses. Include a professional photo placeholder.

Contact

Name, company, facility type, and a free-text field for what's wrong. Phone number displayed prominently — this buyer will call. No live chat widget.

Technical

Astro, static output, deployable to Cloudflare Pages

Semantic HTML, real heading hierarchy

Every page gets a distinct title and meta description

Organization and LocalBusiness schema, placeholders for NAP

Sitemap with only these five URLs

Contact form posts to a placeholder endpoint — leave a clearly marked TODO

Mobile-first; assume a phone in a truck

Placeholders

Do not invent credentials, license numbers, years of experience, client names, testimonials, or project counts. Where a real fact is needed, insert a visible bracketed placeholder like [PE LICENSE NUMBER] so it is obvious what still has to be filled in.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/258616ea-dc2e-4acf-b1a7-edc8920eda00).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
