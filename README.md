# Shahzeb Ali · The Analyst Casebook

A lightweight, responsive SOC portfolio built with HTML, CSS, and vanilla JavaScript. No build step, package install, external font service, analytics, or backend required.

## Preview

Open `index.html` directly in a browser, or run a local static server from this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C.

## Files

- `index.html`: profile, case summaries, experience, credentials, and contact.
- `styles.css`: light visual theme, responsive layouts, reduced motion, and print styles.
- `script.js`: accessible mobile navigation and opening linked case summaries.
- `assets/Shahzeb-Ali-SOC-Resume.pdf`: the supplied resume, unchanged.
- `PRODUCT.md` and `DESIGN.md`: approved content and design guidance.

## Updating content

Edit the copy in `index.html`. Change colors through the OKLCH custom properties at the top of `styles.css`. Case summaries use native `<details>` elements and remain usable without JavaScript.

The internship is deliberately marked **Incoming** with the scheduled 25 October–22 November 2026 dates. Update its status manually once confirmed. Do not infer successful completion from the calendar. Add actual tasks and outcomes only when they occur.

The offer letter is not included. Investigation diagrams are illustrations, not original logs. Public case details are restricted to the supplied resume; add sanitized supporting artifacts only after checking disclosure permissions and lab publication rules.

### Before public launch

- Replace the resume PDF with an up-to-date, employer-neutral version: the supplied original targets ProofOps and predates the internship offer. Review its phone number and other personal details before publishing.
- Confirm preferred credential wording and add verification links if available.
- Add links to public investigation repositories or write-ups once available. No GitHub identity has been assumed.
- Review internship status and availability, and configure your deployment domain and social preview image if desired.

## Validation

JavaScript syntax:

```sh
node --check script.js
```

Browser smoke tests (requires Python Playwright plus Chrome or Playwright Chromium):

```sh
python3 tests/browser_check.py
```

Optional: set `CHROME_PATH` to your Chrome executable. The test starts a temporary local server, tests 320px, 390px, 768px, and 1440px viewports, captures screenshots to `.preview/`, and stops the server when finished. It checks menu keyboard behavior, disclosures, deep links, internal links, PDF download, reduced motion, no-JavaScript fallback, and horizontal overflow.

## Deploy

Upload `index.html`, `styles.css`, `script.js`, and `assets/` to a static host such as GitHub Pages, Cloudflare Pages, or Netlify. No build command is necessary. Only publish those public files, not the source offer letter or local test screenshots.
