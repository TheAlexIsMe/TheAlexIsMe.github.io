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

## Adding your real photos

The portfolio, hero, and about-section images are currently warm gradient placeholders — the site looks intentional and finished even with zero photos uploaded, so there's nothing broken to fix before you launch.

To swap in real photos:

1. Create a folder structure in your repo: `images/portfolio/`
2. Drop in JPGs using the filenames already referenced in the code, for example:
   - `images/portfolio/hero.jpg`
   - `images/portfolio/founder.jpg`
   - `images/portfolio/portrait-01.jpg`, `wedding-01.jpg`, `editorial-01.jpg`, `event-01.jpg`, etc.
3. That's it — once a file exists at that path, it appears automatically (layered under the tinted gradient for a consistent look). If you'd rather see the raw photo with no color tint, open `index.html`, search for the `tint` values in the `photos` array (and the two spots for the hero/about images), and change the gradient opacity numbers toward `0`.
4. To add or remove portfolio photos, edit the `photos` array near the bottom of `index.html` — each entry needs a category (`portraits`, `weddings`, `editorial`, or `events`), a label, and an image path.

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
