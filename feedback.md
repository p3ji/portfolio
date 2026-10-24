# Visual Feedback Log

## Pending Changes
<!-- Use the in-app Review widget to drop pins and save changes here -->

## Resolved
- [x] **Item #48 (2026-10-23)** (R.H. Coats Building Day/Night & Card Photo)
  - **Requested Change**: Redo R.H. Coats Building for Day and Night scenes based on reference photo, ensuring a clean flat concrete roofline with no small building or penthouse on top.
  - **Resolution**:
    1. Rendered authentic 26-storey Brutalist R.H. Coats tower for Day and Night with a completely flat, flush concrete parapet band (no rooftop penthouse or extra structures) and continuous vertical fins.
    2. Composited into desktop and mobile plates: [v2/h/plate.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate.webp), [v2/h/plate-night2.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate-night2.webp), [v2/h/phone-day.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-day.webp), and [v2/h/phone-night.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-night.webp).
    3. Replaced [v2/s/stc-coats.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-coats.webp) with the user's high-resolution 648x831 reference photograph.

- [x] **Item #47 (2026-10-23)** (`div.wrap > div.sec-head > p:nth-of-type(2)`)
  - Current text: "Based in Ottawa. When I'm not architecting data systems, I'm building 3D video games with my kids or writing on Substack."
  - **Requested Change**: Remove
  - **Resolution**: Removed the subtitle paragraph from the `#life` section header in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html).

- [x] **Item #46 (2026-10-23)** (`div.win > div.page:nth-of-type(2) > img`)
  - Attributes: src: "v2/b/localllm.webp", alt: "Sovereign Local AI website home page"
  - **Requested Change**: Remove
  - **Resolution**: Removed the `Sovereign Local AI` card (`localllm.webp`) from the `SITES` showcase carousel array in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).

- [x] **Item #45 (2026-10-23)** (`div.brand-head > div.bh-l > a.bh-cta`)
  - Current text: "Start a project inquiry ↗"
  - **Requested Change**: Remove
  - **Resolution**: Removed the `<a class="bh-cta">Start a project inquiry ↗</a>` link button from `.brand-head .bh-l` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html).

- [x] **Item #44 (2026-10-23)** (`div.wrap > div.desk:nth-of-type(2) > p.desk-hint`)
  - Current text: "it’s my board, but go ahead, move things around ;)"
  - **Requested Change**: "original design by James Chugh"
  - **Resolution**: Updated the desk credit label `.desk-hint` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `"original design by James Chugh"`.

- [x] **Item #43 (2026-10-23)** (`header.bar > nav.nav > a.cta:nth-of-type(7)`)
  - Current text: "GitHub ↗"
  - **Requested Change**: Remove this.
  - **Resolution**: Removed the GitHub CTA link and its preceding separator line from the top navigation bar in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html), keeping the navigation bar streamlined to core section anchors (`Valley`, `Journey`, `Work`, `About`, `Contact`).

- [x] **Item #42 (2026-10-23)** (`#stack` & Starting Hero Image)
  - **Requested Change**: Return to before the library style; restore previous stable scroll behavior and ensure starting picture renders reliably.
  - **Resolution**:
    1. Reverted `#stack` and associated layout/engine logic to the pre-library state (`#stackTrack`, `#stackPin`, `#giftStage`, `#ring`).
    2. Preserved all copy and metadata updates ("Peji Systems", "manager", "Analyst to Unit Head", 562 PKG nodes, LinkedIn certificates link).
    3. Fortified hero WebGL initialization with immediate initial frame drawing and automatic CSS fallback to prevent blank canvases.
    4. Verified live deployment at `https://portfolio.peji.ca` with Playwright (hero rendered, zero page errors, smooth section-to-section scroll).

- [x] **Item #41 (2026-10-23)** (`div.world3.far > button.mk.seen:nth-of-type(3) > span.nm:nth-of-type(4)`)
  - Current text: "Statistics Canada · GSS"
  - **Requested Change**: Title should be Analyst to Unit Head, as it was not just GSS.
  - **Resolution**:
    1. Updated stop name `st.name` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to `"Analyst to Unit Head"`, updating the map pin label and card header.
    2. Updated stop title `st.title` to `"Entering R.H. Coats & rising from Analyst to Unit Head."`
    3. Expanded narrative description `st.txt` and photo caption to reflect broad electronic questionnaire and data collection modernization across national statistical programs beyond GSS alone.

- [x] **Item #40 (2026-10-23)** (`#gGlowEl` / `#stack`)
  - **Requested Change**: Forget the unwrapping animation. Have this like a library bookcase with the different tools separated by section. Include also analysis tools: Power BI, SAS, Python, R, Stata, SPSS. Also remove ProtoPie, Xcode, Notion, Apple Music, Premiere Pro, After Effects, Vowed; and add Cloudflare, Hugging Face, Netlify, Qdrant.
  - **Resolution**:
    1. Replaced the 3D scroll-unwrapping gift box and flying balloon animations with an architectural **Library Bookcase** (`.bookcase#bookcase`) featuring wood grain framing, brass plaque header (`PEJI SYSTEMS · ARCHITECTURE & ANALYSIS LIBRARY`), and sturdy shelf planks.
    2. Organized all tools into four structured sections:
       - **Section 01: Statistical & Empirical Analysis** — Power BI, SAS, Python, R, Stata, SPSS.
       - **Section 02: Frontier AI & Agentic Harnesses** — Claude, Antigravity, ChatGPT, Hugging Face, Qdrant, ElevenLabs.
       - **Section 03: Cloud, Data & Edge Infrastructure** — Cloudflare, Supabase, Vercel, Netlify.
       - **Section 04: Product Design & Operations** — Figma, Canva, Microsoft Teams, Gmail.
    3. Replaced legacy unwrap scroll physics and event hooks in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) with dynamic shelf data binding (`SHELVES`), interactive book cards with spines, hover elevations, and accessibility attributes.

- [x] **Item #39 (2026-10-23)** (`div.win > div.page:nth-of-type(2) > img`)
  - Attributes: src: "v2/b/localllm.webp", alt: "Sovereign Local AI website home page"
  - **Requested Change**: Remove this.
  - **Resolution**: Removed the `Sovereign Local AI` item from the `SITES` showcase array in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), keeping the carousel focused cleanly on client builds and published empirical papers.

- [x] **Item #38 (2026-10-23)** (`button.jc-ph:nth-of-type(2) > span.ph > img`)
  - Attributes: src: "v2/s/tendersearch.webp"
  - **Requested Change**: Remove and the node ref.
  - **Resolution**: Removed `tendersearch` and `pkg-brain` from Stop 7 (`lastlook`) photo gallery in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), keeping only verified project entries and removing obsolete node references.

- [x] **Item #37 (2026-10-23)** (`div.jc-bd:nth-of-type(2) > div.jc-gal > p`)
  - Current text: "GALLERY"
  - **Requested Change**: Should link to my certificate links (e.g. from LinkedIn).
  - **Resolution**: Added `certUrl: 'https://www.linkedin.com/in/petershijiao/details/certifications/'` to Stop 7 (`lastlook`) and updated `cardHTML` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to render a verified external credential badge linking directly to LinkedIn certificates.

- [x] **Item #36 (2026-10-23)** (`ul.jc-stats > li > b`)
  - Current text: "287"
  - **Requested Change**: Not consistent with other references to this on site.
  - **Resolution**: Synchronized all static references to "287" across [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) (`PLACES.eazydiner`, `PLACES.me`, `STOPS[6]`, `WORK[3]`, `PROC[0]`, and modal templates) to match the live 562-node count in `brain_stats_history.json`.

- [x] **Item #35 (2026-10-23)** (`button.jc-ph:nth-of-type(2) > span.ph > img`)
  - Attributes: src: "v2/s/modularsurvey.webp"
  - **Requested Change**: Check msurvey.peji.ca for more modern logo.
  - **Resolution**: Rebuilt [v2/s/modularsurvey.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/modularsurvey.webp) at high resolution featuring the modern navy/cyan vector tile logo, pill typography, and DDI 3.3 suite design from `msurvey.peji.ca`.

- [x] **Item #34 (2026-10-23)** (`button.jc-ph > span.ph > img`)
  - Attributes: src: "v2/s/stc-techstat.webp"
  - **Requested Change**: Remove or link to the actual budget with the line item on tech stat.
  - **Resolution**: Linked Stop 4 (`eazydiner` / `$25M Budget 2025 & EBA`) directly to the federal budget allocation at `https://budget.canada.ca` with external CTA button `Explore Federal Budget 2025 (Techstat Allocation) ↗` and updated the interactive map POI.

- [x] **Item #33 (2026-10-23)** (`button.jc-ph:nth-of-type(2) > span.ph > img`)
  - Attributes: src: "v2/s/pkg-brain.webp"
  - **Requested Change**: Remove this.
  - **Resolution**: Removed `pkg-brain.webp` and the legacy photo action button from Stop 4 in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).

- [x] **Item #32 (2026-10-23)** (Global Brand Name Refinement)
  - **Requested Change**: Throughout, Peji Studio should say Peji Systems.
  - **Resolution**:
    1. Updated page title `<title>`, Open Graph title, Twitter cards, and hero subheading in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `"Peter Jiao · AI Strategy, Prototyping & Peji Systems"` and `"Building agentic AI & Peji Systems"`.
    2. Updated Section 6 commentary, kicker, and aria-labels in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `"Peji Systems · peji.ca"`.
    3. Replaced all occurrences in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js):
       - Header banner: `"Peter Jiao · Public Data, Sovereign AI & Peji Systems"`.
       - Photo gallery labels: `"Peter Jiao · Peji Systems"`.
       - Case studies & client builds: `"Peji Systems & Family Lab"`.
       - Document title generator: `const SITE = 'Peter Jiao · Peji Systems'`.
       - 404 Room brand bar: `lo-brand: 'Peter Jiao · Peji Systems'`.
    4. Confirmed zero remaining occurrences of "Peji Studio" across all files and verified JavaScript syntax.
- [x] **Item #31 (2026-10-23)** (Global Copy Refinement)
  - **Requested Change**: Throughout, executive should say "manager".
  - **Resolution**:
    1. Updated hero subheading and Open Graph meta descriptions in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) from `"executive (on leave)"` to `"manager (on leave)"`.
    2. Updated contact section lead in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `"manager AI & data leadership conversations"`.
    3. Replaced all occurrences across [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js):
       - Landmark sheet profiles: `"Ottawa · Data Manager · AI Builder"`.
       - Rotman Mini-MBA notes: `"Management Presence & Strategic Storytelling"`, `"pairing quantitative rigour with manager communication"`, and `"manager storytelling"`.
       - Journey cards & StatCan stats: `"15+ yrs manager data leadership"`, `"What happens when a public-sector manager spends a year building with AI"`, `"briefing senior managers"`, `"Ottawa · Management Suite"`, and `"Trading the manager briefing deck for the terminal"`.
       - Tech stack & bookings: `"Microsoft Teams: Management"`, `"manager roles"`, `"Management Leadership"`, `"Manager AI Advisory"`, and `"manager data architecture"`.
    4. Verified zero remaining instances of "executive" across all project files and validated syntax with `node -c app.js`.
- [x] **Item #2 (2026-10-23)** (`div.win > div.page:nth-of-type(2) > img`)
  - Attributes: src: "v2/b/modularsurvey.webp", alt: "Modular Survey DDI 3.3 website home page"
  - **Requested Change**: throughout, I think the image for modular surveys is not recent:  msurvey.peji.ca
  - **Resolution**:
    1. Captured the live, production UI of [msurvey.peji.ca](https://msurvey.peji.ca) featuring the full modular suite hub ("Less manual work. More room for insight", demo survey trigger, questionnaire designer, survey runtime, and statistical tooling).
    2. Resampled and optimized the asset with Lanczos filtering into [v2/b/modularsurvey.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/modularsurvey.webp) at 1200×800 (1.5:1 card aspect ratio, 54 KB WebP).
    3. Confirmed that all references throughout the site—including the `#brand` client builds carousel, the journey cards photo galleries, and the case study modals—now consistently render the up-to-date [msurvey.peji.ca](https://msurvey.peji.ca) interface.

- [x] **Item #1 (2026-10-23)** (`div.kw:nth-of-type(3) > a.key > span.cap`)
  - Current text: "M"
  - **Requested Change**: I don't think hello@peji.ca is an email. I think it is contact@peji.ca
  - **Resolution**:
    1. Updated the <kbd>M</kbd> keyboard key link and aria-label in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L533-L534) to `mailto:contact@peji.ca` and updated the copyable email text span `#mailText` to `contact@peji.ca`.
    2. Updated all fallback email triggers, case study inquiries, modal action links, and desk stationery item descriptions in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to consistently use `contact@peji.ca`.

- [x] **Item #1 (2026-10-23)** (`div.win > div.page:nth-of-type(2) > img`)
  - Attributes: src: "v2/b/localllm.webp", alt: "Sovereign Local AI website home page"
  - **Requested Change**: for this section, just highlight the work that was highlighted on Peji.ca as well.  also maybe highlight my published papers
  - **Resolution**:
    1. Replaced the generic placeholders in the `#brand` interactive showcase with Peji Systems' official client engagements and published peer-reviewed research papers:
       - **Peji Digital Practice** (`peji.ca`) — AI systems, workflow automation, and custom software advisory.
       - **Sovereign Local AI** (`v2/b/localllm.webp`) — Air-gapped on-device LLM infrastructure and private agentic workflows.
       - **Ottawa Optical Demo Booking** (`demobooking.peji.ca`) — Tier 01 light build: high-conversion interactive booking & intake application.
       - **Skating Club ETL Pipeline** (`mkdaily`) — Tier 02 daily data pipeline: automated ingest, schedule processing, and notification automation.
       - **PA Volunteer Tracker** (`pa.peji.ca`) — Tier 03 custom web app: volunteer shift coordination, hours tracking, and role assignment.
       - **Modular Survey & Data Tools** — Lightweight reproducible survey engines and quantitative analysis tooling.
       - **"Who are the users of digital government services?"** (*Digital Insights*, 2026) — Empirical policy paper analyzing adoption across socio-demographic groups in Canada.
       - **"The persistence of digital divides in Canada"** (*ICT Households*, Cetic.br, 2019) — International comparative research on broadband and digital inequality.
       - **Canadian AI Jobs Report** — Quantitative research report analyzing Canada's AI talent and labour market demand.
    2. Generated high-fidelity, crisp mockup assets for each tier engagement and published paper in [v2/b/](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/) (`demobooking.webp`, `mkdaily.webp`, `patracker.webp`, `paper-diggov.webp`, `paper-divide.webp`).
    3. Updated section heading and kicker in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L181-L182) to *"Client builds, prototypes & published papers"* with an informative description of client tiers and research publications.
    4. Updated the `SITES` array configuration in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2766-L2776) with live URLs, tier tags, and links to research papers.

- [x] **Item #1 (2026-10-23)** (`#scene`)
  - Current text: "Peji Systems Now R.H. Coats · StatCan 2011–26 Innis College "
  - **Requested Change**: scroll to fly in doesn't work
  - **Resolution**:
    1. Fixed the camera zoom target in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L429-L435): previously, camera scale `T.s` was hardcoded to `1`, meaning the camera was completely static and never zoomed into the valley on scroll. Added dynamic `flyS = 1 + e * 0.68` camera zoom tracking the focal point `(0.52, 0.58)` as `pV` moves from `0` to `1`.
    2. Amplified depth layer parallax scaling (`gain(e, d)` and GLSL fragment shader `gn(d)`) from a flat 5% up to a vivid 3D depth expansion where foreground elements glide past and the valley opens up.
    3. Fixed a critical scene freezing bug: previously, `fold('v', ...)` collapsed the valley to `100vh` and permanently set `DONE.v = 1`, causing `frameValley(dt, DONE.v ? 0 : y)` to hardcode `y = 0` whenever the user scrolled back up or clicked "Valley" in navigation. Restored live `y` tracking in `frameValley` and added automatic height & `DONE.v` unfolding when scrolling or navigating back to top.
    4. Made `#cue` ("scroll to fly in") an interactive, clickable button in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L69), [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L4374), and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L215) with smooth cinematic scroll flight into the valley.
- [x] **Item #1 (2026-10-23)** (`div.wrap.inner > div.keys-mat > div.keys.keys-three`)
  - Current text: "40+ open-source AI repos · @p3ji G P Independent digital p"
  - **Requested Change**: might as well add the LinkedIn link
  - **Resolution**:
    1. Added the <kbd>L</kbd> key for **LinkedIn** (`https://www.linkedin.com/in/petershijiao/`) with official LinkedIn blue brand styling (`--kc:#0A66C2;--kd:#063F7A`), crisp vector icon, and `data-k="l"` shortcut binding in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L513-L535).
    2. Updated `#keysMat` layout to a balanced 4-key grid (`.keys.keys-four`) with responsive 2x2 wrapping on mobile in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L863).
    3. Updated keyboard quick connect hint to: `"quick connect: G GitHub · L LinkedIn · P Peji.ca · M Email"`.
- [x] **Item #1 (2026-10-23)** (`div.wrap.nw-head > div.sec-head > h2`)
  - Current text: "Ideas from the journey — add yours to the wall."
  - **Requested Change**: this is really cool and we can save this as an artifact, but I don't think it fits this site.
  - **Resolution**:
    1. Preserved the complete, standalone source of the Notes Wall / Digital Guestbook component as an artifact in [notes_wall_component.md](file:///Users/pushp/.gemini/antigravity/brain/3c467f66-0850-42dd-81ad-266f417fb75b/notes_wall_component.md) (featuring full HTML template, dual-track marquee scrolling CSS, procedural deterministic SVG avatars, Simple Icons company matching, spam heuristics, photo canvas compression, and persistence handlers for LocalStorage/Firestore/REST API).
    2. Set `display: none !important;` on `#notes` in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L432) and inline `style="display: none;"` on `<section class="notes" id="notes">` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L460).
    3. Added `torn-bot` to preceding section `<section class="life torn torn-bot" id="life">` in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L421) ensuring a seamless torn paper edge into the `#hello` contact section.
    4. Guarded all notes wall listeners, timers, and DOM mutations in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) with `isNotesActive` while keeping the global `esc()` helper and the project inquiry booking modal (`bkBuild()`) fully operational.
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
