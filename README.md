# HTX Luxe Studio — Website

A single-file static website for HTX Luxe Studio (Houston, TX photography). No build tools, no dependencies to install — just one `index.html`.

## Deploy it on GitHub Pages

1. Create a new GitHub repository (e.g. `htx-luxe-studio`).
2. Add `index.html` to the root of the repo (this file must be named exactly `index.html`).
3. Commit and push.
4. On GitHub: go to **Settings → Pages**.
5. Under "Build and deployment", set **Source** to `Deploy from a branch`, pick your default branch (`main`) and the `/ (root)` folder, then **Save**.
6. Wait a minute or two — GitHub will give you a live URL like `https://yourusername.github.io/htx-luxe-studio/`.

If you want a custom domain (e.g. `htxluxestudio.com`), add a `CNAME` file with just the domain name in it, and point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Your photos

Your session photos are already wired in under `images/portfolio/` and referenced by the hero, about section, and portfolio grid. One uploaded photo was left out of the site (a shot with more visible skin than fits a public business page) — everything else made it in.

To add more photos later:

1. Drop a new JPG into `images/portfolio/`.
2. Open `index.html`, find the `photos` array near the bottom of the `<script>` tag, and add a line with a category (`golden-hour` or `evening`), a short label, and the image path. Add a new category name if you shoot a new kind of session (e.g. `'studio'`), then add a matching filter button in the `#filters` div in the HTML above.
3. To change the hero or about-section photo, search for `portrait-evening-02.jpg` (hero) or `portrait-agave-04.jpg` (about) in `index.html` and swap in a different filename from your `images/portfolio/` folder.

**A note on file size:** a couple of your photos are 1–2MB, which is fine for now but will slow the page down as you add more. Before adding many more images, consider compressing them with a free tool like [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) — aim for under 400KB each without a visible quality loss.

## Managing the holiday discount

The site currently shows a 25% discount banner at the very top and applies it to all three pricing cards (original price struck through, discounted price shown). Both are hardcoded text/numbers rather than calculated automatically, so:

- **To turn the discount off** (e.g. after the holidays): open `index.html`, find `<div class="announce">` near the top of `<body>` and delete that whole line, then find the `.plans` section and remove the struck-through original prices, leaving just the regular price in each `<p class="price">` line.
- **To change the discount period or percentage**: just edit the banner text and the struck-through/discounted numbers directly — there's no calculation to update elsewhere.
- **To run a different discount later** (e.g. a spring special): same process — edit the banner text and the two numbers per pricing card.

## Editing pricing, copy, and contact info

Everything is plain text inside `index.html` — search for the section you want:
- `id="services"` — the three pricing cards
- `id="about"` — studio story and pull quote
- `id="testimonials"` — client quotes
- `.info-card` — studio hours, email, Instagram handle
- Footer — social links (currently placeholder `#` links)

## Connecting the consultation form

The form works out of the box using a `mailto:` fallback — submitting it opens the visitor's email client with the details pre-filled. For a form that submits silently without opening email:

1. Sign up for a free plan at [Formspree](https://formspree.io) and create a form to get an endpoint URL like `https://formspree.io/f/abc12345`.
2. In `index.html`, find this line near the bottom of the `<script>`:
   ```js
   var ACTION_URL = ''; // e.g. 'https://formspree.io/f/yourFormId'
   ```
3. Paste your endpoint between the quotes and save. The form will now POST directly and show a confirmation message instead of opening email.

## Browser support & accessibility notes

- Respects `prefers-reduced-motion` — all animations are disabled for visitors who request it.
- Keyboard-navigable nav, filters, and form with visible focus states.
- Mobile menu appears under 860px width.
