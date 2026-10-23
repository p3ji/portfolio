# Visual Feedback Log

## Pending Changes
<!-- Use the in-app Review widget to drop pins and save changes here -->

## Resolved
- [x] **Item #3 (2026-10-23)** (`button.jc-ph > span.ph > img`)
  - Attributes: src: "v2/s/photo.webp"
  - **Requested Change**: use image from LinkedIn: https://www.linkedin.com/in/petershijiao/?isSelfProfile=true
  - **Resolution**:
    1. Fetched Peter Jiao's profile photo directly from LinkedIn (`https://www.linkedin.com/in/petershijiao/`).
    2. Converted and optimized the image into WebP format at high quality and replaced [v2/s/photo.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/photo.webp).
    3. Confirmed updates across all avatar and profile image locations (top nav logo, valley `#top` "Me · Peter" pin, feedback form author thumbnail, and sabbatical/Me journey card photo gallery).
- [x] **Item #2 (2026-10-23)** (`#keysMat`)
  - Current text: "psst, these work on your keyboard too: M I L T R M Roles, "
  - **Requested Change**: this can just have links to GitHub, Peji.ca, or the contact email.
  - **Resolution**:
    1. Replaced the 5-key layout in `#keysMat` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L513-L533) with a streamlined 3-key layout specifically for **GitHub** (`G` · `https://github.com/p3ji`), **Peji.ca** (`P` · `https://peji.ca`), and **Email** (`M` · `mailto:hello@peji.ca`).
    2. Updated keyboard hint text to `"quick connect: G GitHub · P Peji.ca · M Email"`.
    3. Added `.keys-three` grid styling in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L861-L863) to cleanly center and balance the 3 keys.
- [x] **Item #30 (2026-10-23)** (`div.box-info:nth-of-type(2) > div.sec-head.bi-head > p.kicker`, `#llHl`, `div.wrap > div.sec-head > h2`)
  - Current text: "Selected work & case studies", "real-world impact.", "Domain judgment meets agentic loops."
  - **Requested Change**:
    1. "Selected work & case studies" (`#work`): Hide/remove this section for now.
    2. "real-world impact." (`#lastlook`): Hide/remove this section.
    3. "Domain judgment meets agentic loops." (`#process`): Hide/remove this section.
  - **Resolution**:
    1. Set `display: none !important;` in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css) and inline `style="display: none;"` on `<section class="work" id="work">`, `<section class="ll torn" id="lastlook">`, and `<section class="process torn" id="process">` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html).
    2. Updated the top navigation "Work" link in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to navigate smoothly directly to `#brand` (Shipped AI applications & prototypes), preserving a cohesive and uninterrupted scrolling experience.
    3. Added defensive offset and visibility checks across [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) (`boxScale`, `layoutProc`, `frameProc`, `layoutLL`, `frameLL`, `lateHl`, `pinned`, `fold`, and `#jcNext` journey transition) to avoid zero-height fold jumps or `null`/`NaN` calculations while these sections are hidden.
- [x] **Item #1 (2026-10-23)** (`div.wrap > div.desk:nth-of-type(2) > figure.item.polaroid`)
  - Current text: "in the lab · peji studio"
  - **Requested Change**: remove.
  - **Resolution**: Removed the `figure.item.polaroid.pinned.p1` ("in the lab · peji studio") element from the `#desk` container in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L428-L432).
- [x] **Item #29 (2026-10-23)** (`#gGlowEl`)
  - **Requested Change**: apps to remove: ProtoPie, Xcode, notion, Apple Music, premier pro, after effects, vowed; apps to add: Cloudflare, hugginface, netlify, qdrant.
  - **Resolution**:
    1. Removed ProtoPie, Xcode, Notion, Apple Music, Premiere Pro, After Effects, and Vowen from `TOOLS` and `TOOL_ROLE` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2804-L2822).
    2. Added **Cloudflare** (`Edge & DNS`), **Hugging Face** (`Open Models`), **Netlify** (`Deploy`), and **Qdrant** (`Vector DB`) to `TOOLS` and `TOOL_ROLE` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2804-L2822) with official vector icons, branded gradient themes, and descriptions tailored to Peji Systems workflows.
    3. Confirmed full alignment across grid layout calculations, tooltip triggers, and stack animations. Verified JS syntax.
- [x] **Item #28 (2026-10-23)** (`section.fb:nth-of-type(6) > div.fb-in > div.fb-intro`)
  - Current text: "YOUR OPINION How would you have solved it? Tell me which p..."
  - **Requested Change**: this should not have James Chugh here.
  - **Resolution**:
    1. Replaced all occurrences of "James Chugh" and "James" with "Peter Jiao" and "Peter" in the feedback component `fbHTML` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L1825-L1830) (avatar name is now **Peter Jiao**, and the button is now "Send it to Peter →").
    2. Updated the fallback mailto addresses in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L1849) and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2585) from `hello@jameschugh.com` to `hello@peji.ca`.
    3. Replaced all legacy case study footer signatures, quotes, and attribution (`.c3-p`) with `"Designed with care by Peter Jiao."` and updated all `.c3-links` social/contact action rows across [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L1263-L2567) to point to Peter Jiao / Peji Systems: GitHub (`https://github.com/p3ji`), Peji Systems (`https://peji.ca`), Email (`mailto:hello@peji.ca`), and project inquiries (`https://peji.ca`).
    4. Added dedicated circular icon styles and hover animations in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L1855-L4188) for `.soc.gh` (GitHub) and `.soc.pj` (Peji Systems).
    5. Updated [v2/icon/site.webmanifest](file:///Users/pushp/Documents/Projects/visualportfolio/v2/icon/site.webmanifest#L1) to reflect "Peter Jiao". Verified zero remaining instances of the legacy name or links across the entire project.
- [x] **Item #27 (2026-10-23)** (`div.jc-bd:nth-of-type(2) > div.jc-act:nth-of-type(2) > button.cbtn`)
  - Current text: "View case study"
  - **Requested Change**: link to the msurvey.peji.ca
  - **Resolution**:
    1. Set `work: 'https://msurvey.peji.ca'` and `workLabel: 'Explore msurvey.peji.ca'` on `STOPS[6]` (`Modular Survey & Games`) in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L110-L115), rendering a direct external link CTA button.
    2. Updated the interactive map POI on that stop to link directly to `https://msurvey.peji.ca`.
    3. Updated `WORK` item for Modular Survey Tools to link to `https://msurvey.peji.ca` with label `Launch msurvey.peji.ca`.
- [x] **Item #26 (2026-10-23)** (`div.jc-in > div.jc-bd:nth-of-type(2) > p.txt`)
  - Current text: "I launched a One-Year AI Sabbatical to master agentic engine"
  - **Requested Change**: examples can be Canadian AI Jobs & Skills Report, Modular Survey Tools, and various automation workflow patterns.
  - **Resolution**:
    1. Updated `txt` in `STOPS[5]` (`One-Year AI Journey`) in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L106) and `PLACES.eazydiner.st[0]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L23) to highlight the requested examples: `"Canadian AI Jobs & Skills Report, Modular Survey Tools, and various automation workflow patterns"`.
    2. Removed remaining case study action buttons (`work: 'aijobsearch'`, `work: 'modularsurvey'`, and `cs: 'modularsurvey'`) so that the journey cards stay clean and focused without intrusive "View case study" action buttons.
    3. Updated the photo gallery on the sabbatical stop to feature the `Canadian AI Jobs & Skills Report` and `Modular Survey Tools`.
- [x] **Item #25 (2026-10-23)** (`div.jc-in > div.jc-bd:nth-of-type(2) > div.jc-act:nth-of-type(2)`)
  - Current text: "View case study"
  - **Requested Change**: remove this.
  - **Resolution**: Removed `work` action button (`work: 'techstat'`) from `STOPS[4]` (`$25M Budget 2025 & EBA`) and `STOPS[8]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L101-L128). The journey card now renders cleanly without the "View case study" action row.
- [x] **Item #24 (2026-10-23)** (`div.jc-bd:nth-of-type(2) > p.txt > b:nth-of-type(3)`)
  - Current text: "100% migration from legacy SAS to reproducible R pipelines"
  - **Requested Change**: various initiatives that improved timeliness and efficiency.
  - **Resolution**: Updated `txt` in `STOPS[3]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L92-L97) and `PLACES.mmt` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L19-L20) to: `"spearheaded <b>various initiatives that improved timeliness and efficiency</b>"`, updating the corresponding stop title, stats, and gallery metadata.
- [x] **Item #22 (2026-10-23)** (`div.jc-bd:nth-of-type(2) > p.txt > b:nth-of-type(2)`)
  - Current text: "Health Canada and PHAC"
  - **Requested Change**: Health Canada, PHAC, and the COVID-19 Immunity Taskforce
  - **Resolution**: Updated `txt` in `STOPS[2]` and `PLACES.mmt.st[0]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L19-L87) to: `"Health Canada, PHAC, and the COVID-19 Immunity Taskforce"`.
- [x] **Item #23 (2026-10-23)** (`button.jc-ph > span.ph > img`)
  - Attributes: src: "v2/s/stc-covid.webp"
  - **Requested Change**: image and cbc article: https://www.cbc.ca/news/canada/prince-edward-island/statistics-canada-blood-canadians-study-1.5868511
  - **Resolution**:
    1. Downloaded and converted the lead national test kit photograph from the CBC News feature into [v2/s/stc-covid.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-covid.webp).
    2. Linked the live CBC News article directly into the stop card CTA (`Read CBC News coverage ↗`), the photo gallery caption, and the interactive map POI in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L85-L89).
- [x] **Item #21 (2026-10-23)** (`div > button.jc-ph > small`)
  - Current text: "University College · U of T"
  - **Requested Change**: Innis college
  - **Resolution**:
    1. Updated photo caption in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L38) and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L78) to `"Innis College · U of T"`.
    2. Updated all references across `PLACES.nsut`, `STOPS[0]`, and the landmark pins/labels in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L53) to Innis College.
    3. Replaced the historic image at [v2/s/uoft-uc.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/uoft-uc.webp) with a photograph of Innis College at the University of Toronto.
- [x] **Item #18 (2026-10-23)** (`div.wrap > div.tell-box > div.sticky.in`)
  - Current text: "U of T Sociology (B.Sc. & M.A.) + Rotman Mini-MBA. QUANTITAT"
  - **Requested Change**: + Agentic AI certificates
  - **Resolution**: Updated the first sticky note in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L99) to: `"U of T Sociology (B.Sc. &amp; M.A.) + Rotman Mini-MBA + Agentic AI certificates."`.
- [x] **Item #19 (2026-10-23)** (`div.wrap > div.tell-box > div.sticky.in:nth-of-type(2)`)
  - Current text: "$25M Techstat business case + 40+ AI builds shipped. STRATEG"
  - **Requested Change**: Separate the $ 25M Techstat and the AI prototypes and builds as different stickies.
  - **Resolution**: Separated into two distinct, progressively animated sticky notes in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L100-L101):
    1. Soft coral note (`data-at=".4"`): `"$25M Techstat AI measurement business case.<small>Strategy &amp; Public Value</small>"`
    2. Mint green note (`data-at=".6"`): `"40+ functional AI prototypes &amp; builds shipped.<small>One-Year AI Journey</small>"`
- [x] **Item #20 (2026-10-23)** (`#mapview`)
  - Current text: "University College · U of T Statistics Canada · GSS Chief · "
  - **Requested Change**: strategic innovator by obsession?
  - **Resolution**: Updated the journey section heading in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L124) from `"systems builder by obsession."` to `"strategic innovator by obsession."`.
- [x] **Item #12 (2026-10-23)** (`aside.sheet.left > div.row:nth-of-type(5) > button.btn.btn-ink`)
  - Current text: "View case study →"
  - **Requested Change**: remove
  - **Resolution**: Removed case study action hook (`cs: 'localllm', csL: 'View case study'`) from `PLACES.oyo` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L25-L28). The side sheet for Peji Systems now hides the button row cleanly.
- [x] **Item #13 (2026-10-23)** (`#s-t`)
  - Current text: "Peji Studio & AI Lab"
  - **Requested Change**: Peji systems
  - **Resolution**: Updated `t` property in `PLACES.oyo` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L25-L28) and landmark pin in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L51) from "Peji Studio & AI Lab" to "Peji Systems".
- [x] **Item #14 (2026-10-23)** (`aside.sheet.left > div.did:nth-of-type(2) > p`)
  - Current text: "Through peji.ca, I partner with small businesses, clinics, a"
  - **Requested Change**: ...I work with small business and non-profits.
  - **Resolution**: Updated `st[0]` in `PLACES.oyo` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L25-L28) to: `"Through <b>peji.ca</b>, I work with small business and non-profits."`.
- [x] **Item #15 (2026-10-23)** (`aside.sheet.left > div.did:nth-of-type(2) > p:nth-of-type(2)`)
  - Current text: "For regulated legal, clinical, and financial data, I archite"
  - **Requested Change**: For sensitive files...
  - **Resolution**: Updated `st[1]` in `PLACES.oyo` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L25-L28) to: `"For sensitive files, I architected a <b>Sovereign Local AI Lab</b> on a 256GB M5 Ultra Mac Studio with OS-level zero-cloud-leakage enforcement so sensitive PII never leaves the premises."`.
- [x] **Item #16 (2026-10-23)** (`button.jc-ph > span.ph > img`)
  - Attributes: src: "v2/s/peji.webp"
  - **Requested Change**: grab the logo from Peji.ca
  - **Resolution**: Generated [v2/s/peji.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/peji.webp) using the official Peji brand assets from `peji.ca` (`business/site/icon.svg` & typography), featuring the burgundy `#671c32` emblem and serif `peji.` mark.
- [x] **Item #17 (2026-10-23)** (`button.jc-ph:nth-of-type(2) > span.ph > img`)
  - Attributes: src: "v2/s/localllm.webp"
  - **Requested Change**: grab a picture of a Mac Studio M5 Ultra
  - **Resolution**: Downloaded and converted high-resolution Mac Studio hardware front photography into [v2/s/localllm.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/localllm.webp) for the local Sovereign AI lab gallery.
- [x] **Item #11 (2026-10-23)** (`button.wop-badge.ready:nth-of-type(2) > span.wop-in > img.wb-w`)
  - Attributes: src: "v2/wop/featured-white.svg"
  - **Requested Change**: remove this.
  - **Resolution**: Removed the floating `#wopBadge` button component from the top bar in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html). The badge handler in `app.js` safely returns early when absent.
- [x] **Item #10 (2026-10-23)** (`div.tell-box > p.tell > span.w:nth-of-type(22)`)
  - Current text: "AI."
  - **Requested Change**: ...I studied how technology shapes our society and economy, and grew the programs that continue this work.
  - **Resolution**: Updated `p#tell` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to: `"For 15 years at <span class="hl b-sky" data-dd="gear">Statistics Canada</span>, I studied how technology shapes our society and economy, and <span class="hl" data-dd="circle">grew the programs that continue this work</span>. Then I took a One-Year AI Journey to build with it directly — shipping <span class="hl b-coral" data-dd="stars">40+ functional prototypes</span> and founding <span class="hl b-lilac" data-dd="scribble">Peji Systems</span> to help organizations work smarter."`.
- [x] **Item #8 (2026-10-23)** (`#mapview`)
  - Current text: "University College · U of T Statistics Canada · GSS Chief · "
  - **Requested Change**: Social scientist by training...
  - **Resolution**: Updated the section heading in `index.html` from `<h2>Sociologist by training, ...</h2>` to `<h2>Social scientist by training, <span class="hl b-sky" id="journeyHl">systems builder by obsession.</span></h2>`.
- [x] **Item #9 (2026-10-23)** (`#world3`)
  - Current text: "University College · U of T Statistics Canada · GSS Chief · "
  - **Requested Change**: maybe this can be a maple leaf or circle rather than a heart.
  - **Resolution**:
    1. Redesigned the journey trail in `app.js` from the former heart-shaped path to a smooth circular grand tour loop connecting Toronto and Ottawa with the 9 stops evenly distributed.
    2. Replaced the heart icon in POIs with a crisp Canadian maple leaf icon (`ICONS.maple`).
    3. Added a subtle Canadian maple leaf watermark emblem in the center of the circular route on the map art.
- [x] **Item #7 (2026-10-23)** (`div.wrap > div.desk:nth-of-type(2) > div.item.note:nth-of-type(3)`)
  - Current text: "287 nodes in my PKG. +4 NODES THIS WEEK · OBSIDIAN"
  - **Requested Change**: this node information should be dynamically tied to the actual digital brain nodes (e.g. in portfolio repo)
  - **Resolution**:
    1. Imported and synced `brain_stats_history.json` directly from the Digital Brain vault (`~/Brain2`) and `portfolio` repo (562 active nodes, +9 this week).
    2. Added `syncBrainStats()` to `app.js` to dynamically fetch and populate the latest node count and 7-day delta into `#pkgNote` (`div.item.note.p17`), `#vc b`, and all `.pkg-node-count` / `.pkg-week-diff` elements with cache-busting.
    3. Created [sync_brain_stats.py](file:///Users/pushp/Documents/Projects/visualportfolio/sync_brain_stats.py) and hooked `portfolio/update_brain_stats.py` so that Hermes's scheduled `/Users/pushp/Brain2/scripts/daily_run.py` automatically updates both repos in real-time.
- [x] **Item #1** (`#scene`)
  - Current text: "Peji Studio & AI Lab Now R.H. Coats · StatCan 2011–26 Univer"
  - **Requested Change**: remove the cross out of "work easier"
  - **Resolution**: Removed the strikethrough SVG element (`<svg viewBox="0 0 220 30"...>`) from inside `<span class="rq b-sun">work easier.</span>` in `index.html`.
- [x] **Item #2** (`div.scene.gl > div.ly:nth-of-type(3) > button.hot`)
  - **Requested Change**: ref pic of RH coats building: https://upload.wikimedia.org/wikipedia/commons/b/bd/R_H_Coats.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled
  - **Resolution**: Downloaded the high-resolution Wikimedia photo of the R.H. Coats Building and converted it to `v2/s/stc-coats.webp` for the hotspot sheet gallery and portfolio stops.
- [x] **Item #3** (`div.scene.gl > div.ly:nth-of-type(7) > button.hot`)
  - **Requested Change**: asian guy in late 30s. (need blank hair)
  - **Resolution**: Generated a 1:1 portrait photo of an Asian man in his late 30s with short black hair and smart-casual attire, and updated `v2/s/photo.webp` used across all avatar and profile image locations.
- [x] **Item #4** (`div.tell-box > p.tell > span.w:nth-of-type(16)`)
  - Current text: "surveys"
  - **Requested Change**: surveys and statistical programs
  - **Resolution**: Updated `p#tell` text in `index.html` from "modernizing national surveys" to "modernizing national surveys and statistical programs".
- [x] **Item #5** (`p.tell > span.hl.b-lilac:nth-of-type(38) > span.w:nth-of-type(2)`)
  - Current text: "Studio"
  - **Requested Change**: Peji Systems
  - **Resolution**: Updated `p#tell` in `index.html` from `<span class="hl b-lilac"...>Peji Studio</span>` to `<span class="hl b-lilac"...>Peji Systems</span>`.
- [x] **Item #6** (`div.gift:nth-of-type(4) > svg > rect:nth-of-type(2)`)
  - **Requested Change**: make this into a bookcase and items inside.
  - **Resolution**: Replaced the front gift box illustration in `index.html` with a detailed isometric wood bookcase featuring multiple shelves with books, plants, rolled scrolls, retro mini terminal, globe, and decorative crown moulding while preserving `#lid` and `#gGlowEl` animation hooks.
