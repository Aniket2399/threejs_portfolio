# Data-Analyst Portfolio Rebuild — Design

**Date:** 2026-07-13
**Goal:** Repurpose the Three.js portfolio (currently software-developer themed) into a Data Analyst portfolio, using real profile data from `career-ops-main` (`cv.md`, `config/profile.yml`). Update project preview images.

## Source of truth
- Identity/roles/comp: `career-ops-main/config/profile.yml`
- Experience/projects/skills copy: `career-ops-main/cv.md`
- Style rule: NO AI-tell punctuation (no em/en-dash, curly quotes, arrows, ellipsis).

## Rendered sections (from `App.jsx`)
NavBar -> Hero -> About -> ShowcaseSection (Projects) -> LogoSection -> Experience -> TechStack (3D) -> Contact -> Footer.
(FeatureCards commented out; `abilities`, `expCards`, `testimonials` unused.)

## Changes

1. **Hero** (`sections/Hero.jsx`, `constants.words`)
   - Cycling words Ideas/Concepts/Designs/Code -> Data/Insights/Signals/Dashboards (reuse existing SVG icons).
   - Headline -> "Turning [word] into Decisions that Move the Business".
   - Subtitle -> Data Analyst, 5+ yrs, banking/healthcare/retail, JPMorgan fraud, ships analytics platforms.

2. **About** (`sections/About.jsx`)
   - Rewrite 4 cards to analyst framing (SQL/Python/Tableau/Power BI; banking+healthcare+retail; "story hidden in data").
   - Fix email: kshirsagaraniket.work@gmail.com -> aniket.kshirsagar.work08@gmail.com (display + clipboard).

3. **Projects** (`sections/ShowcaseSection.jsx`)
   - PepStats (featured) — image `pepstats.png` (live screenshot). Live + Code links.
   - COURTSIDE — image `courtside.png` (live screenshot). Live + Code links.
   - GradEase — image `grad_ease.png`. Code link.

4. **Logo marquee** (`constants.logoIconsList`)
   - Analyst tools from existing `/logos`: Power BI, Tableau, Python, Azure, Google Analytics, React, Docker, Git.

5. **Experience** (`constants.workExperiences`) — all 4 real roles, 3 bullets each from cv.md:
   - JP Morgan Chase (Data Analyst, Sep 2024–Present) — logo `jpmc.svg`
   - Astoria AI (AI Engineer, Part-Time, Sep 2025–Feb 2026) — logo `astoria.svg`
   - Capgemini (Data Analyst, Jan 2022–Jul 2023) — logo `capgemini.svg`
   - Accenture (Data Analyst, Aug 2019–Dec 2021) — logo `accenture.svg`
   - Animations cycle: rally/salute/fist/rally.

6. **Skills 3D** (`constants.techStackIcons`, `TechStack.jsx`)
   - Keep 3D canvas; relabel to available models: Python (Pandas, NumPy), AWS Data (Redshift, Glue), React Dashboards, Interactive Data Viz. Drop Node.

7. **Contact** (`sections/Contact.jsx`) — rewrite blurb to data/analytics hiring.

8. **Counters** (`constants.counterItems`) — real: 5+ yrs, 3 domains, 28% fraud accuracy gain, 740+ ... use honest analyst stats.

## Constraints
- Live screenshots captured via Playwright (career-ops-main) since the in-session browser is locked to localhost. Done.
- Company logos are clean lettermark SVGs (no trademark scraping): JPMC, Accenture, Astoria.
- 3D skills limited to available `.glb` models.
