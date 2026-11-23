# Open MSME

**Open-source software for micro, small and medium businesses in India and the Philippines.**

Open MSME is a catalog — and a build roadmap — of practical software tools for MSMEs across 16 sectors in two markets. Every tool is free and open-source. Each one starts from a specific, verifiable problem (a GST job-work deadline a spreadsheet can't compute, a Philippine BIR receipt rule, the 45-day MSME payment law, a cold-chain log that has to stand up in a dispute) rather than a generic template.

This repository is the **hub** — the index that lists every tool and links out to it. As each tool is built, it gets **its own open-source repository and its own explainer site**.

## How it is organised

- **`index.html`** — the catalog landing page, with a browsable grid of the 16 sectors.
- **`sectors/<CODE>.html`** — one page per sector, listing its tools with search and filters.
- **`wave.html`** — the first build wave: the tools being built ahead of the rest.
- **`about.html`** — how the catalog works, how ideas earn their place, and the honesty rules.
- **`data/catalog.json`** — the full catalog as machine-readable JSON.

## Status honesty

Nothing here is claimed as finished until its repository is public. A tool marked **Idea** is on the roadmap; one marked **First wave** is being built now. The catalog was deliberately cut down from a much larger pool: anything vague, generic, not genuinely useful, or not realistically buildable was dropped, and near-duplicates were merged so that each entry is a distinct product.

## Sectors

Manufacturing · Textiles & apparel · Food & F&B · Retail & distribution · Agriculture · Logistics · Exports · Accounting & tax (GST/BIR) · Finance & payments · Professional services · Handicrafts & artisans · Healthcare SMEs · Education & skilling · Construction · Tourism & hospitality · Repair & field services.

## Build it / run it

This hub is a dependency-free static site (plain HTML/CSS/JS). Serve the folder with any static server:

```sh
python3 -m http.server 8137
# then open http://localhost:8137
```

Each individual tool, when built, ships in its own repository with its own build and run instructions.

## Contributing

Proposals for new tools, corrections, and localisations are welcome via issues and pull requests. The bar is simple: a tool must solve a real, specific MSME problem and be realistically buildable.

## License

[MIT](./LICENSE). Every tool in the catalog is released under a permissive open-source licence so a business can run it for free and a developer can fork, adapt or localise it.
