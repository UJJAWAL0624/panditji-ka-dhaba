# Panditji Ka Dhaba website: plain HTML/CSS/JS (no build step)

Open `index.html` in a browser to preview. Everything is static, so hosting is free.

## Where to edit
- Menu and prices: `menu.html` (search the item name). Chole Samosa ₹30 also appears in `index.html`.
- Phone number: search `919084572935` in all files (Ctrl+Shift+F in VS Code) and replace.
- Chole Samosa photo: `index.html`, find the HTML comment "Chole Samosa photo".
- New photos: put in `images/` (WebP or JPG, under 300 KB), then add them in `gallery.html`.

## Launch plan, in order
1. **Collect from owner:** prices, Chole Samosa photo, confirmed hours/address/phone.
2. **GitHub:** create a repo `panditji-dhaba`, upload all files from this folder (repo root = this folder's contents).
3. **GitHub Pages:** repo Settings > Pages > Deploy from branch `main` / root. You get `username.github.io/panditji-dhaba`.
4. **Domain (Student Pack):** education.github.com/pack > Namecheap (.me) or Name.com. Claim it with your GitHub login. Check the renewal price at checkout.
5. **Connect domain:** at the registrar's DNS, add 4 `A` records for `@` pointing to GitHub's Pages IPs (copy the current ones from docs.github.com, "Managing a custom domain for your GitHub Pages site") and a `CNAME` for `www` to `username.github.io`. In repo Settings > Pages, enter the domain, wait for the DNS check, tick **Enforce HTTPS**.
6. **Replace `https://YOUR-DOMAIN`** with your real domain in all files (Find & Replace in all files), also inside `sitemap.xml` and `robots.txt`. Commit.
7. **Google:** add the site in Google Search Console (domain verification via DNS), submit `https://yourdomain/sitemap.xml`, then "Request indexing" for the home page.
8. **Google Business Profile** (free): claim the dhaba listing, add the website, hours, photos. This drives most local traffic.

## Test before announcing
- On a real phone: tap every Call button, it should open the dialer with +91 9084572935. (On a laptop, `tel:` links may do nothing; that is normal.)
- Chrome DevTools: Console has no red errors, Network has no 404s.
- Lighthouse (DevTools): Performance, SEO, Accessibility all 90+.
- Right-click > View Page Source on `menu.html`: the menu text should be visible in the HTML.
