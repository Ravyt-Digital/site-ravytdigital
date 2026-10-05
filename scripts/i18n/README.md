# Regional versions

The base annual price remains BRL 597. Portuguese lives at `/`; English, French and Spanish have native routes under `/en`, `/fr`, `/es`.

`translations.tsv` contains reviewed translations indexed by `source.json`. Run `node scripts/i18n/generate.cjs` to regenerate translated routes and components after updating the dictionary. Never rerun the extractor without migrating TSV IDs: the dictionary uses the checked-in source snapshot. New Portuguese copy needs a matching translation entry.

The Worker chooses language using explicit route, the remembered user preference, supported browser languages and country fallback. Country determines currency independently: Brazil BRL, Europe EUR, elsewhere USD. Unavailable country information retains BRL rather than guessing. The language selector preserves page, query and anchor.

`/api/exchange-rates` reads the ECB daily XML, computes BRL-to-EUR/USD cross rates and caches validated rates in D1. Active visitors recheck hourly and when returning to the tab. Updates therefore require no manual rebuild or scheduled deployment. Weekends, holidays and source outages retain the last published quotation and its date. A dated ECB snapshot is the final outage fallback, never an invented exchange rate. Prices are indicative equivalents rounded to two decimal places; the commercial base remains BRL 597 per year.

Run `npm run build` and `node --test tests/regional.test.mjs`. The tests cover conversion, rate validation, language priority, location-based currency, redirects and production route rendering.
