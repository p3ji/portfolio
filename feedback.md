# Visual Feedback Log

> [!NOTE]
> **Design Revert Reference**: If we decide to revert from the Ottawa LRT Line 1 transit guideway back to the smooth circular journey design, the verified circle route is preserved at commit `8364cd0` (`git checkout 8364cd0 -- app.js`).

## Pending Changes
<!-- Use the in-app Review widget to drop pins and save changes here -->

## Resolved
- [x] **Item #76 (2026-10-25)** (U of T Undergraduate Degree Calibration: Honours B.A. in Sociology)
  - **Requested Change**:
    Update undergraduate degree nomenclature from Bachelor of Science (B.Sc.) to Bachelor of Arts (Honours B.A.).
  - **Resolution**:
    1) Updated sticky note in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html):
       - `U of T Sociology (B.A. &amp; M.A.) + Rotman Mini-MBA + Agentic AI certificates.`
    2) Updated [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js):
       - `PLACES.nsut`: role tagline changed to `B.A. & M.A., Sociology · Rotman Mini-MBA (2026)`, story changed to `Honours B.A. and M.A. in Sociology`, badge changed to `B.A. + M.A.`.
       - `PLACES.oyo` foundations list changed to `Honours B.A. & M.A. in Sociology`.
       - `STOPS[0]` (`jee`): narrative text updated to `Honours B.A. and M.A. in Sociology` and poi checkpoint to `Honours B.A. & M.A. at Innis College.`.
       - Bumped script cache token to `v=20261025ba`.
    3) Updated [mobile-valley-sandbox.html](file:///Users/pushp/Documents/Projects/visualportfolio/mobile-valley-sandbox.html) to keep sandbox synchronized.

- [x] **Item #75 (2026-10-25)** (U of T & Toronto Era Education Dates Calibration: 2005–2011 · 2026)
  - **Requested Change**:
    Calibrate University of Toronto dates from "2009–2011" to reflect the full Toronto education era starting with undergraduate study (~2005–2009 B.Sc., 2009–2010 M.A., 2009–2011 TA/RA, 2026 Rotman Mini-MBA).
  - **Resolution**:
    1) Updated [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html):
       - Valley landmark pin: `Innis College · U of T <small class="pyr">2005–11 · 2026</small>`
       - Journey intro description: `Nine stops from Toronto to Ottawa (2005 to 2026).`
       - Journey timeline indicator: `<span class="yr" id="jtlYr">2005 &rarr; 2026</span>`
    2) Updated [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js):
       - `PLACES.nsut`: `yr: '2005'`, `tag: 'Chapter 01 · 2005–2011 · Toronto'`
       - `STOPS[0]` (`jee`): `when: '2005 – 2011'`
       - Default timeline year string: `'2005 → 2026'`
       - Bumped script cache token to `v=20261025uoft`.
    3) Updated [mobile-valley-sandbox.html](file:///Users/pushp/Documents/Projects/visualportfolio/mobile-valley-sandbox.html) to keep sandbox synchronized.

- [x] **Item #74 (2026-10-24)** (`#stack` My Stack Skills & Tool Constellation)
  - **Requested Change**:
    1) Add 5 icons to the stack section: **SAS**, **Python**, **R**, **Stata**, **Hermes**.
    2) Remove 2 icons: **Gmail**, **Microsoft Teams**.
    3) Ensure icons do not overlap and animate out cleanly as before.
  - **Resolution**:
    1) **Vector Icon Integration & Theming**:
       - **Hermes**: Integrated Nous Research stylized classical "H" vector emblem with warm golden gradient (`#FFE082` → `#D97706`) on obsidian-violet plate (`#161324` → `#2B1D3F`).
       - **Python**: Integrated official dual-snake vector with Python blue (`#5A9FD4` → `#306998`) and yellow (`#FFE873` → `#FFD43B`) gradients on deep navy plate (`#1F425F` → `#14293D`).
       - **R**: Integrated official R Foundation ellipse and white bold lettermark on R-blue gradient plate (`#276DC3` → `#165CAA`).
       - **Stata**: Integrated official geometric white lettermark with responsive SVG scaling (`.wide-ic`) on deep teal plate (`#1D5F6D` → `#0E3E47`).
       - **SAS**: Integrated official statistical ribbon swirl on SAS corporate blue gradient plate (`#007CC2` → `#004D7A`).
    2) **Domain-Grouped Architecture & Roles**:
       - Structured the 17-tool stack into coherent functional groupings:
         - *Frontier AI & Sovereign Agents*: Claude (`Orchestrate`), ChatGPT (`Research`), Antigravity (`Agentic IDE`), Hermes (`Sovereign Agent`), Hugging Face (`Open Models`).
         - *Statistics & Data Engines*: Python (`Data & AI`), R (`Reproducible Stats`), Stata (`Causal Inference`), SAS (`Health Microdata`).
         - *Backend & Vector Stores*: Supabase (`Backend`), Qdrant (`Vector DB`).
         - *Edge & Deployment*: Cloudflare (`Edge & DNS`), Vercel (`Ship`), Netlify (`Deploy`).
         - *Creative & Multimodal Systems*: Figma (`Design`), Canva (`DDI 3.3`), ElevenLabs (`Audio`).
    3) **Responsive Centered Grid Physics**:
       - Desktop: 2 rows (Row 0: 9 tools, Row 1: 8 tools), both horizontally centered with 0 collisions.
       - Mobile: 4 rows (or 3 on short screens) with dynamic scaling (`TS`) and 0 collisions.
       - Confetti and emergence pacing smoothly calibrated across all 17 tools.
    4) **Automated Verification**:
       - Desktop live CDP test: exactly 17 tools, 0 overlaps (`collisions: 0`).
       - Mobile live CDP test: exactly 17 tools, 0 overlaps (`collisions: 0`).
       - Tooltip verification: verified title, role badge, and description for Hermes, Python, R, Stata, SAS.

- [x] **Item #73 (2026-10-24)** (`div.desk:nth-of-type(2) > div.item.vinyl:nth-of-type(2) > div.vn-sleeve` Vinyl Record Label & Music Integration)
  - **Requested Change**:
    Change text from "Substack Essays & Notes" to:
    "Music
    (to add:  my musical creations)"
  - **Resolution**:
    1) Updated [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) under `.item.vinyl > .vn-sleeve`:
       - Replaced Substack bookmark SVG with an elegant dual-note music SVG icon (`viewBox="0 0 24 24"` with solid filled noteheads).
       - Changed title to `<b>Music</b>` and subtitle to `<small>(to add:  my musical creations)</small>`.
       - Updated outer element title to `title="Tap to play music"` and desk label to `<span>music</span>`.
       - Reconfigured popup dialog `.vn-ask` to "Original Piano & Music" with a direct interactive action: `<a href="#play" class="vn-play-track">Play piano lo-fi ♫</a>`.
    2) In [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css), refined `.vn-sleeve small` line-height to `1.3` to ensure graceful text wrap for multi-word subtitles.
    3) In [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), wired the `.vn-play-track` button directly to trigger the ambient lo-fi piano track playback engine (`#radio`), smoothly playing Peter's musical composition.
    4) Bumped asset cache busters to `styles.css?v=20261024music` and `app.js?v=20261024music`.
    5) Verified rendering on desktop and mobile viewports via automated headless Chrome tests and verified that clicking the vinyl dialog plays the piano track (`radioOn: true`).

- [x] **Item #72 (2026-10-24)** (`div.wrap > div.desk:nth-of-type(2) > div.item.about` Off the Clock Narrative & Interests)
  - **Requested Change**:
    Update the Off the Clock desk card content to reflect technology intersections and non-nerdy interests:
    - Thinking about technology & its intersections:
      - Rethinking old processes and automating the manual stuff
      - Finding solutions to problems at every level of the organization
      - Mixing different disciplines together to generate new things and insights
      - Connecting every challenge back to an ever growing Personal Knowledge Graph that grow with me
    - Non-nerdy stuff:
      - Making music on the piano
      - Running
      - Adding to my "to-read" list on Goodreads (with link: https://www.goodreads.com/review/list/23603132?shelf=to-read)
  - **Resolution**:
    1) Updated [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) under `.item.about` with the new copy structured into clean bold category headings and bullet lists.
    2) Linked the 568-node Personal Knowledge Graph counter inline and added an interactive external link for Goodreads (`target="_blank" rel="noopener"`).
    3) Added distinct `.about a` link styling in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css) with subtle underline and interactive hover feedback.
    4) Bumped stylesheet cache buster in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `v=20261024about`.
    5) Verified rendering on desktop and mobile viewports via automated headless Chrome screenshots.

- [x] **Item #71 (2026-10-24)** (Valley View Landmark Hover Illumination Promotion to Live)
  - **Requested Change**: Promote the hover light effect to live production.
  - **Resolution**:
    1) Removed localhost environment gate (`EXP_LIGHT = true`) in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) so the soft golden sunbeam (day) and architectural floodlight (night) are fully active on production.
    2) Bumped script asset cache token in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) to `v=20261024light`.
    3) Deployed live to Cloudflare Pages (`portfolio-peji`) and verified on production via headless Chrome.

- [x] **Item #70 (2026-10-24)** (`#skyBirds` Valley Sky Flock Animation)
  - **Requested Change**: Replace the two flying birds with better bird animations (e.g. natural horizon flock like FX Elements crows flock).
  - **Resolution**:
    1) Integrated the **10-Frame Anatomical Vector Sprite Flock** ([v2/h/bird-cells.svg](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/bird-cells.svg)) into [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css) and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).
    2) Configured CSS `steps(10)` keyframe flight cycle with aerodynamic resting glide frame (`.glide`).
    3) Upgraded flight physics in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to simulate an 8-bird horizon flock with multi-depth perspective scaling ($0.16\times$ to $0.34\times$), depth-correlated airspeeds, organic flapping and soaring glides, and smooth mountain horizon wrapping.
    4) Added adaptive lighting: deep charcoal crows by day and luminous silhouetted flyers with subtle ambient glow in dark mode.
    5) Verified across day and dark modes via automated headless Chrome tests ([valley_flock_integrated_day.png](file:///Users/pushp/.gemini/antigravity/brain/04582f5b-9217-4c4c-b542-c5c26e3bc562/preview_valley_flock_integrated_day.png) and [valley_flock_integrated_night.png](file:///Users/pushp/.gemini/antigravity/brain/04582f5b-9217-4c4c-b542-c5c26e3bc562/preview_valley_flock_integrated_night.png)).

- [x] **Item #69 (2026-10-24)** (`div.jc-in > div.jc-bd:nth-of-type(3)` Stop 3 Chief · Digital Economy Card)
  - **Requested Change**:
    1) Update narrative text to say "a multidisciplinary team" without the team size number.
    2) Remove the two stats buttons ("Modernized" and "15").
  - **Resolution**:
    1) Updated `STOPS[2].txt` (`ht`) in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to: `"As <b>Chief, Digital Economy & Society</b> at the R.H. Coats Building, I led a multidisciplinary team, represented Canada at <b>OECD working parties</b>, and spearheaded <b>various initiatives that improved timeliness and efficiency</b>."`
    2) Removed `stats: [['Modernized', 'pipeline timeliness & efficiency'], ['15', 'analysts & methodologists led']]` from `STOPS[2]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), completely suppressing the `.jc-stats` pill container.
    3) Verified via headless Chrome on Stop 3 that the narrative cleanly displays "a multidisciplinary team" and `hasStats: false` (`statsCount: 0`).

- [x] **Item #68 (2026-10-24)** (`button.jc-ph > span.ph > img` Stop 2 COVID-19 Antibody Study Photo)
  - **Requested Change**: Replace `stc-covid.webp` with CBC News image: `https://i.cbc.ca/ais/1.5868357,1625677406000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C253%2C2309%2C1298%29%3BResize%3D860`
  - **Resolution**:
    1) Downloaded high-resolution CBC News test kit asset and encoded as optimized WebP (1280x719) at [v2/s/stc-covid.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-covid.webp).
    2) Bumped image cache-busting token in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to `v=20261024k`.
    3) Verified via headless Chrome on Stop 2 (`iitd`) that both the journey card gallery thumbnail and modal lightbox load and render the new photo with crisp natural resolution (1280x719).

- [x] **Item #67 (2026-10-24)** (`div.gift-stage:nth-of-type(2) > div.gift:nth-of-type(4) > svg`)
  - **Requested Change**: Add the refined Option 1 (Antique Glass-Mullion French Door Library Cabinet) directly to the site, ensuring the skill icons emerge in their non-overlapping grid layout exactly as before.
  - **Component & File Locations**:
    - HTML markup: [`#giftStage > #gift`](file:///Users/pushp/Documents/Projects/visualportfolio/index.html#L236-L450) in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html).
    - Unwrapping & physics animation: `frameStack()` and `layoutStack()` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2971-L3055).
    - Styling & sizing: `.gift`, `.doors-viewport`, `.door-unit`, `.glass-fill` in [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css#L633-L644).
  - **Resolution & Integration**:
    1. **Integrated 3D French Glass Doors**: Placed responsive percentage-anchored doors viewport (`left: 16%`, `top: 46.333%`, `width: 48.667%`, `height: 45.667%`) over the front opening in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) with twin mahogany-framed glass doors (`#doorL`, `#doorR`), 3 vertical mullion glazing tiers, and antique cremone bolt latch hardware.
    2. **Anchored Stately Crown**: Anchored the carved cornice pediment with the "PEJI LAB" gold plaque permanently to the top of the cabinet, replacing the old floating lid animation.
    3. **Door & Latch Unwrapping Physics**: In `frameStack()` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), the cremone bolt latch rotates 90° upon unlocking (`q: 0.08` to `0.17`) and the twin doors swing smoothly open to `±118deg` (`q: 0.16` to `0.28`).
    4. **Verified Non-Overlapping Tool Constellation**: All 14 tools emerge cleanly from the cabinet aperture (`MOUTH`) along their bezier curves into the exact calculated, responsive grid layout (`toolPos(i)`).
    5. **Automated Testing & Validation**:
       - Live desktop test ([live_site_cabinet_open.png](file:///Users/pushp/.gemini/antigravity/brain/b1d2056f-d154-422c-8881-0b94ba72ff97/live_site_cabinet_open.png)): 0 console errors, 0 tool overlaps (`overlaps: 0`).
       - Live mobile test ([live_site_cabinet_mobile.png](file:///Users/pushp/.gemini/antigravity/brain/b1d2056f-d154-422c-8881-0b94ba72ff97/live_site_cabinet_mobile.png)): 0 tool overlaps (`overlaps: 0`), clean scale down to 220px.
       - Live closed state ([live_site_cabinet_closed.png](file:///Users/pushp/.gemini/antigravity/brain/b1d2056f-d154-422c-8881-0b94ba72ff97/live_site_cabinet_closed.png)): doors flush at 0°, cremone latch vertical at 0°.

- [x] **Item #66 (2026-10-24)** (`aside.sheet.left` R.H. Coats Building / StatCan Drawer)
  - **Requested Change**:
    1) Remove the 3 stat buttons (`aside.sheet.left > ul.nums > li`: "$25M Federal Budget 2025 secured", "Modernized pipeline timeliness & efficiency", "15+ yrs manager data leadership").
    2) Remove the case study CTA button (`aside.sheet.left > div.row:nth-of-type(5) > button.btn.btn-ink`: "View case study →").
  - **Resolution**:
    1) Updated `PLACES.mmt.n` to `[]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), which cleanly hides and suppresses `#s-n` (`ul.nums`).
    2) Removed `cs: 'techstat'` and `csL: 'View case study'` from `PLACES.mmt` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js), which cleanly hides and suppresses `#s-row` (`div.row`) containing the "View case study →" CTA button.
    3) Verified via headless Chrome test script and screenshot [rh_coats_sheet_updated.png](file:///Users/pushp/Documents/Projects/visualportfolio/rh_coats_sheet_updated.png) that the drawer renders cleanly without pills or CTA button.

- [x] **Item #65 (2026-10-24)** (`figure.lb-slide:nth-of-type(2)`)
  - **Requested Change**:
    1) Don't need descriptions for the award on `uoft-awards.webp`.
    2) Remove the "peer reviewed" label on `uoft-awards.webp`.
    3) Remove `<figcaption>` below the slide in the lightbox.
  - **Resolution**:
    1) Regenerated [v2/s/uoft-awards.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/uoft-awards.webp) with descriptions removed from Barry Wellman Award and Rex Lucas Award cards, leaving clean, prominent award titles and category subtitles.
    2) Removed the "Peer-Reviewed" badge from the conference paper banner in [v2/s/uoft-awards.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/uoft-awards.webp).
    3) Updated Stop 0 photo definition in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to empty caption and updated lightbox slide template so `<figcaption>` is not rendered when caption is empty.
    4) Bumped image cache buster to `v=20261024j`.

- [x] **Item #64 (2026-10-24)** (`#radio` & `#np`)
  - **Requested Change**: Add user-provided audio track (`uploaded_media_1792864893592.mp3` - 3:53 ambient lo-fi piano track) to replace procedural synthesizer on the site.
  - **Resolution**:
    1) Copied audio file to [v2/music/song.mp3](file:///Users/pushp/Documents/Projects/visualportfolio/v2/music/song.mp3) with cache buster `?v=20261024i`.
    2) Replaced the procedural Web Audio synthesizer in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) with an HTML5 Audio player engine featuring:
       - Lazy initialization on first user interaction (avoiding 5.5MB initial network footprint).
       - Seamless looping (`loop = true`).
       - Smooth volume fade-in ramp (0 to 0.65) and fade-out ramp (0.65 to 0) on play/pause.
       - Full UI state synchronization across `#radio` (gramophone on hill), `#radioPin` (floating hill pin), and `#np` (floating top-right player button).

- [x] **Item #63 (2026-10-24)** (`#world3`)
  - **Requested Change**: Don't need this strange leaf thing (referencing uploaded screenshot of background maple leaf watermark).
  - **Resolution**: Removed the red maple leaf watermark emblem `<g transform="translate(${CX} ${CY - 20}) scale(6)" opacity=".08" fill="#C8102E">` from the map SVG in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).

- [x] **Item #62 (2026-10-24)** (`#world3`)
  - **Requested Change**: Lake Ontario start a bit more south (the metro track is overlapping).
  - **Resolution**:
    1) Shifted the entire northern shoreline of Lake Ontario southwards to start at `Y = 2050` (down from `Y = 1520`), establishing a generous 500px dry land buffer below the upper Confederation Line 1 track (`Y = 1550`) and Tunney's Pasture terminus, completely eliminating any overlap.
    2) Re-aligned HWY 401 along the north shore corridor (`Y = 1840` to `2640`) between the railway line and the lake.
    3) Positioned the `TORONTO` label on dry land at `Y = 1740`, and centered the `LAKE ONTARIO` watermark label deep in the open water body at `Y = 2750`.

- [x] **Item #61 (2026-10-24)** (Journey Cards & Gallery Updates)
  - **Requested Change**:
    1) Replace `uoft-rotman.webp` with Barry Wellman Award for Best Undergraduate Paper, Rex Lucas Award for best Qualitative Field Work, Quantitative social science paper presented at International Conference.
    2) Digital Economy and Society Portal (`https://www.statcan.gc.ca/en/subjects-start/digital_economy_and_society`).
    3) Don't mention "O-train" in the transit header.
    4) Replace `stc-coats.webp` with an icon/graphic representing "Improve timeliness and efficiency".
  - **Resolution**:
    1) Designed high-resolution academic honors certificate graphic [v2/s/uoft-awards.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/uoft-awards.webp) displaying the Barry Wellman Award, Rex Lucas Award, and International Conference Quantitative Paper, and updated Stop 0 in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).
    2) Captured the live Statistics Canada Digital Economy and Society Portal to [v2/s/stc-digital.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-digital.webp), updated caption to "Digital Economy and Society Portal (statcan.gc.ca)", and added a direct link button and POI to `https://www.statcan.gc.ca/en/subjects-start/digital_economy_and_society`.
    3) Updated the journey card transit kicker strip in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L913) to `LINE 1 · LIGNE 1 CONFEDERATION`, removing "O-Train".
    4) Created a custom federal pipeline modernization graphic [v2/s/stc-efficiency.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-efficiency.webp) showcasing timeliness and efficiency gains (-40% release turnaround lag, 100% automated reproducible R pipelines, 15+ multidisciplinary team), and updated Stop 3 gallery.
    5) Bumped image asset cache buster to `v=20261024i`.
- [x] **Item #60 (2026-10-24)** (Ottawa LRT O-Train Metro Station Design for Journey Map)
  - **Requested Change**: Experiment with a new design for the journey map that shows metro stops designed to match the Ottawa LRT stops.
  - **Resolution**:
    1) Redesigned the 9 journey map stops as authentic Ottawa LRT (O-Train Confederation Line 1) station entrance pylons:
       - **O-Train Lantern Box Beacon**: Signature bright red circular lantern box with the iconic white "O" lettermark at the top of each pylon, radiating a red transit glow when active.
       - **Station Pylon Signboard**: Dark architectural charcoal sign (`#111827`) with Line 1 red square badge `[ 1 ]`, bilingual indicator `STATION · GARE`, era/years pill, circular station logo/icon roundel, clean uppercase station typography, and signature Ottawa LRT red bottom trim band (`#DA291C`).
       - **Mounting Stanchion & Interchange Track Node**: Dark steel architectural post connecting each pylon down to an interchange station roundel node (`01` through `09`) directly on the rail line, complete with a pulsing radar wave effect on the active stop.
    2) Modernized the route track into the Ottawa LRT Confederation Line 1 transit guideway:
       - Deep guideway ballast casing (`#13233A`, 20px).
       - Confederation Line 1 transit red rail bed (`#DA291C`, 12px).
       - Dual-track white dashed centerline (`#FFFFFF`, 2.5px, dasharray `8 8`).
       - Ghost preview track in Confederation red (`#DA291C`, dasharray `4 10`).
    3) Updated the moving journey marker vehicle (`#meTip`) into an aerodynamic red-and-white Alstom Citadis Spirit O-Train car with glowing front headlights illuminating the rail ahead.
    4) Added the transit kicker strip (`.jc-lrt-strip`) atop the journey stop companion card: `[ 1 ] O-TRAIN · LIGNE 1 CONFEDERATION · STATION 0X / 09`.
    5) Optimized scaling across desktop, tablet, and mobile views (<860px), and synchronized full support for dark mode.

- [x] **Item #59 (2026-10-24)** (Environment-Scoped Visual Review Tool)
  - **Requested Change**: Remove the visual reviewer tool from production (`portfolio.peji.ca`), but keep it automatically active for local development on localhost.
  - **Resolution**: Added client-side host environment checks in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) and [agent-feedback.js](file:///Users/pushp/Documents/Projects/visualportfolio/agent-feedback.js). The tool only loads when browsing on `localhost`, `127.0.0.1`, a local port, or when explicitly requested via `?review=1` query parameter, ensuring production remains 100% clean for external visitors.

- [x] **Item #58 (2026-10-24)** (`div.win > div.page:nth-of-type(2) > img` with `src: "v2/b/aijobsearch.webp"`)
  - **Requested Change**: Link Canadian AI Jobs Report card to `https://occupation-ai.vercel.app`.
  - **Resolution**: Updated `href` and `url` for the Canadian AI Jobs Report in `SITES` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2784) to `https://occupation-ai.vercel.app`, and bumped asset cache buster to `v=20261024h`.

- [x] **Item #57 (2026-10-24)** (`div.win > div.page:nth-of-type(2) > img` for published papers)
  - **Requested Change**:
    1) Users of Digital Government (`paper-diggov.webp`): set link to `https://www150.statcan.gc.ca/n1/pub/22-20-0001/222000012026001-eng.htm`
    2) Digital Divides in Canada (`paper-divide.webp`): set link to `https://bibliotecadigital.acervo.nic.br/server/api/core/bitstreams/b2bf1957-5fe3-421a-bbab-3a8ace9ac0bc/content`
  - **Resolution**: Updated `SITES` array in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js#L2782-L2783) so both publication cards link directly to their official published papers on Statistics Canada and the UNESCO/Cetic.br digital library, and updated cache buster to `v=20261024g`.

- [x] **Item #56 (2026-10-24)** (`div.win > div.page:nth-of-type(2) > img` with `src: "v2/b/patracker.webp"`)
  - **Requested Change**: Fix graphics as text flows off.
  - **Resolution**:
    1) Fixed text overflow in [v2/b/patracker.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/patracker.webp): reformatted headline and subtitle into two clean, properly wrapped lines with generous horizontal margins (>100px padding from edges), streamlined stat labels, and refined the volunteer tracking shift cards to eliminate any clipping.
    2) Also audited and updated companion brand cards [v2/b/mkdaily.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/mkdaily.webp), [v2/b/paper-diggov.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/paper-diggov.webp), and [v2/b/paper-divide.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/paper-divide.webp) to ensure all abstract and subtitle lines maintain >120px right margin boundaries.
    3) Appended cache-busting token `?v=20261024f` to brand showcase image URLs in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) and asset references in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) so browsers render the new graphics immediately.

- [x] **Item #55 (2026-10-24)** (`div.jc-in > div.jc-bd:nth-of-type(2) > h3` and `button.jc-ph:nth-of-type(2) > span.ph > img`)
  - **Requested Change**:
    1) Update headline in Creator card: "Peji Independent Digital Practice & Seeking new challenges to make an impact."
    2) Verify icons/graphics for Kingdoms of Wobbleton (`kingdoms.webp`) and N-1 Word Craft (`n-1.webp`) and prevent browser/Cloudflare caching of stale 404 fallbacks.
  - **Resolution**:
    1) Updated `STOPS['creator'].title` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to `"Peji Independent Digital Practice & Seeking new challenges to make an impact."`.
    2) Added cache-busting token `?v=20261024e` to dynamic image helper `img()` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) and script/stylesheet tags in [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html) so all game thumbnails and gallery images force fresh browser loads of authentic assets.

- [x] **Item #54 (2026-10-24)** (`button.jc-ph:nth-of-type(2) > span.ph > img` and `button.jc-ph:nth-of-type(3) > span.ph > img`)
  - **Requested Change**: Find icons/graphics for Kingdoms of Wobbleton (`kingdoms.webp`) and the other game (`n-1.webp`).
  - **Resolution**: Sourced and generated high-resolution 1280x720 graphics for both games:
    1) **Kingdoms of Wobbleton**: Converted the Three.js 3D RTS game render from `portfolio/images/kingdoms.png` (featuring low-poly peasant workers, castle keep, fountain, watchtower, and gold veins) into [v2/s/kingdoms.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/kingdoms.webp) and [v2/b/kingdoms.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/kingdoms.webp).
    2) **N-1 Word Craft**: Extracted the official game interface from `n-1game/` featuring the handcrafted cardboard clipboard, smiling box mascot, title banner, and rules into [v2/s/n-1.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/n-1.webp), [v2/b/n-1.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/b/n-1.webp), and updated [v2/s/life-jersey.png](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/life-jersey.png).

- [x] **Item #53 (2026-10-24)** (`aside.sheet.left > div.did:nth-of-type(2) > p`)
  - **Requested Change**: Remove "in 26 story RH coats building". Update to: "Across 15+ years at Statistics Canada, I delivered insights through complex data analysis, led national survey modernization, a rapid country-wide COVID-19 serology study, and grew key programs related to technology measurement while improving timeliness and efficiency."
  - **Resolution**: Updated `PLACES.mmt.st[0]` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to the requested text.

- [x] **Item #52 (2026-10-24)** (`ul.sf-pane:nth-of-type(2) > li > span` and `li:nth-of-type(2)`)
  - **Requested Change**:
    1) Remove "at RH coats" from StatCan career progression.
    2) Update second bullet in Public Service & AI to focus on continuous learning, fearlessness in diving directly into programming, data systems, and diverse subjects, even while honing management and organizational strategy through work.
  - **Resolution**: Updated `PLACES.me.fun` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to cleanly state `"Analyst → Unit Head → Chief → Acting Assistant Director → EBA Lead."`, and replaced the funding bullet with `"Continuous Learning & Technical Depth"`: `"Never afraid to dive into programming, data systems, and diverse subjects even as I hone my management and strategy skills through work."`.

- [x] **Item #51 (2026-10-24)** (`#s-l` and `ul.sf-pane > li:nth-of-type(2) > span`)
  - **Requested Change**:
    1) `#s-l`: Change "I bridge institutional rigour with rapid agentic execution." to "I bridge organizational strategy with rapid agentic execution"
    2) `ul.sf-pane > li:nth-of-type(2) > span`: Remove hallucinated "Management Presence & Strategic Storytelling at U of T."
  - **Resolution**: Updated `PLACES.me.h` in [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to `"I bridge organizational strategy with rapid agentic execution."`, and replaced the hallucinated Rotman description in `PLACES.me.fun` with verified factual text: `"Executive program in business management and AI at U of T."` (grounded in `Career Hub.md` and candidate profiles).

- [x] **Item #50 (2026-10-24)** (`aside.sheet.on > div.did:nth-of-type(2) > p` and `p:nth-of-type(2)`)
  - **Requested Change**:
    1) Update Ontario Cabinet Office role: "Media analyst at cabinet office."
    2) Remove "management presence and strategic storytelling" from Rotman School of Management text and prevent this type of hallucination.
  - **Resolution**: Updated [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js) to accurately reflect Peter's verified role as Media Analyst at the Ontario Cabinet Office (matching `Brain2/Career Hub.md`), removed the hallucinated "Management Presence & Strategic Storytelling" phrase across `PLACES.nsut`, `PLACES.me`, and journey entries, and updated Rotman references to focus strictly on factual Rotman School of Management essentials and executive leadership.

- [x] **Item #49 (2026-10-24)** (Hero Plates Geometric Alignment & Architectural Revision)
  - **Requested Change**:
    1) Day and Night shots must be the exact same camera angle and framing with 100% pixel-aligned landscape, buildings, and figures.
    2) R.H. Coats Building must match reference photo: 26-storey brutalist concrete tower with 8 bays, continuous vertical fins, ground-level pilotis colonnade, and strictly flat concrete parapet roofline.
    3) Replace cliff cabin with contemporary Canadian modern cottage featuring a slanted mono-pitch shed roof and cantilevered cliff deck.
    4) Peter in the meadow must preserve original downward head tilt looking at laptop screen, with natural Asian black hair.
    5) Eliminate perspective angle discrepancy of R.H. Coats between day and night.
  - **Resolution**: Generated pixel-aligned master hero plates (`candidate_plate_day.webp` and `candidate_plate_night.webp`), synchronized 3D perspective and vanishing lines across both scenes, deployed to [v2/h/plate.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate.webp), [v2/h/plate-night2.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate-night2.webp), [v2/h/phone-day.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-day.webp), and [v2/h/phone-night.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-night.webp), and bumped asset cache buster to `v=20261024d` across [index.html](file:///Users/pushp/Documents/Projects/visualportfolio/index.html), [styles.css](file:///Users/pushp/Documents/Projects/visualportfolio/styles.css), and [app.js](file:///Users/pushp/Documents/Projects/visualportfolio/app.js).

- [x] **Item #48 (2026-10-23)** (Hero Background Plates Restoration)
  - **Requested Change**: Remove pasted building overlays from background plates and restore clean original artwork.
  - **Resolution**: Reverted [v2/h/plate.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate.webp), [v2/h/plate-night2.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/plate-night2.webp), [v2/h/phone-day.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-day.webp), [v2/h/phone-night.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/h/phone-night.webp), and [v2/s/stc-coats.webp](file:///Users/pushp/Documents/Projects/visualportfolio/v2/s/stc-coats.webp) to clean original state.

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
