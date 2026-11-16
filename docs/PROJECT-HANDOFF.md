# Spanish Seekho — Project Handoff
_Last updated: 16 November 2026_

## Product identity
Spanish Seekho is a free Spanish-learning platform for Pakistani learners.
Mission: **Making Spanish Learning Accessible to Every Pakistani.**
This is a real educational product, not just a portfolio demo. Prioritise teaching quality, clarity, accessibility, honest progress indicators and reliable low-cost technology.

## Audience and pedagogy
- Absolute beginners, especially Urdu/Roman Urdu speakers; also people preparing to live, study or work in Spain and families.
- Teach standard Spanish from Spain (Castilian) first. Regional/Andalusian variation may be a later clearly labelled extension.
- Interface languages: Roman Urdu (default), Urdu script and English.
- Roman Urdu/Urdu pronunciation spellings are learning aids, not exact phonetic transcriptions.
- Build CEFR A1 fully before presenting A2–C2 as available. Planned roadmap units are not completed lessons.

## Non-negotiable principles
1. Free core learning: no paid API, subscription, hosting or domain dependency.
2. Mobile first: Android phone screens are the primary design target.
3. Simple navigation, large touch targets, readable text and persistent language preference.
4. Low bandwidth: lightweight HTML/CSS/vanilla JS; avoid heavy frameworks and unnecessary external assets.
5. Offline-friendly, but explain that the first online visit is needed to cache pages.
6. No forced account; guest progress stored locally first.
7. Accessibility: semantic HTML, keyboard support, visible focus, contrast, labels and reduced motion.
8. Accuracy over volume: review Spanish grammar, translations and regional usage.
9. No false claims about completed lessons, translations, audio, PWA or offline support.
10. Preserve learner progress. Do not rename or remove localStorage keys without migration.

## Architecture and hosting
- Static HTML, CSS and vanilla JavaScript.
- GitHub Pages, main branch, repository root.
- Preferences/progress stored in browser localStorage.
- Browser SpeechSynthesis with es-ES is supplementary; voices vary by device/browser.
- PWA manifest and service worker provide a basic app shell; installation/offline behaviour requires device testing.
- No backend, account system, analytics, paid AI or cloud sync.

## Important localStorage keys
- ss-language: roman, urdu or english.
- ss-completed: homepage practice completion markers.
- ss-a1-done: completed A1 lesson IDs (e.g. "lesson-01", "lesson-02").
Never clear these keys during redesign.

## Repository map
- index.html: landing page and introductory practice.
- styles.css: global visual system and responsive styles.
- app.js: homepage language selection, vocabulary, quick quiz, speech and mobile navigation.
- a1/index.html: A1 roadmap and progress summary.
- a1/course.css: course/lesson styles.
- a1/lesson-01.html: Greetings & introductions (formal + informal).
- a1/lesson-02.html: Alphabet & pronunciation.
- a1/app-shell.js: shared language picker + mobile navigation for A1 pages.
- manifest.webmanifest: PWA metadata.
- sw.js: offline app-shell cache (currently v5).
- assets/icon.svg: app icon.
- README.md: public project overview.
- AGENTS.md: instructions for AI coding agents.
- docs/PROJECT-HANDOFF.md: durable project context.
- docs/ROADMAP.md: priorities and acceptance criteria.

## Current implementation — verified from repository code
### Implemented
- Public GitHub Pages static site, landing page, A1 roadmap and two lessons.
- Homepage language selector for Roman Urdu, Urdu and English.
- A1 Lesson 01: greetings, introductions, formal vs informal, dialogue, 6-question quiz.
- A1 Lesson 02: five vowels, key consonants (j, ñ, ll, h, c/z, r/rr), stress rules, listening practice, 5-question quiz.
- Local preference/progress storage.
- Basic PWA manifest and service worker (v5 includes lesson-02).
- Shared A1 mobile shell with language dialog and bottom navigation (works for any lesson-XX.html).
- RTL isolation rules so Spanish phrases remain left-to-right when Urdu is selected.

### Latest milestone (16 Nov 2026)
- Created and published Lesson 02 (Alphabet & Pronunciation).
- Updated A1 index to mark Unit 02 as available.
- Updated service worker cache to spanish-seekho-v5 and included lesson-02.html.
- Improved app-shell.js so mobile nav correctly detects any lesson page.

### Partial / needs validation
- Whole course and lesson pages are not fully translated.
- Real-device visual RTL QA still recommended.
- Mobile layouts should be tested on real Android devices (360/390/412px).
- Service-worker update/offline flow needs testing after successful online load.
- Speech synthesis quality varies by device.

### Not implemented
- Units 3–8 of A1.
- A2–C2 lessons.
- Full grammar track, listening library, speaking assessment.
- Accounts, family profiles, cloud sync.
- Gamification (streaks, XP, badges).

## Workflow for any AI taking over
Before editing:
1. Read AGENTS.md, this handoff and docs/ROADMAP.md.
2. Inspect current branch, exact files and live deployment.
3. Check project-relative paths for GitHub Pages.
4. Pick the smallest coherent milestone and preserve existing content/progress.

After editing:
1. Check links, asset paths, HTML, JS errors and CSS breakpoints.
2. Test language persistence and direction for the changed scope.
3. If app-shell files changed, review service-worker cache list/version.
4. Update this handoff and roadmap with only verified facts.
5. Commit clearly; check GitHub Pages before claiming deployment succeeded.
6. Report files, commit, limitations and one next task.

## Definition of done
A milestone is done only when its agreed scope is in the repository, learner progress is preserved, mobile layout is usable at 360px+, internal links/assets work, language/direction behaviour is checked, documentation is updated, and deployment is confirmed rather than assumed.
