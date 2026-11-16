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
- ss-a1-done: completed A1 lesson IDs.
Never clear these keys during redesign.

## Repository map
- index.html: landing page and introductory practice.
- styles.css: global visual system and responsive styles.
- app.js: homepage language selection, vocabulary, quick quiz, speech and mobile navigation.
- a1/index.html: A1 roadmap and progress summary.
- a1/course.css: course/lesson styles.
- a1/lesson-01.html: first interactive lesson and quiz.
- manifest.webmanifest: PWA metadata.
- sw.js: offline app-shell cache.
- assets/icon.svg: app icon.
- README.md: public project overview.
- AGENTS.md: instructions for AI coding agents.
- docs/PROJECT-HANDOFF.md: durable project context.
- docs/ROADMAP.md: priorities and acceptance criteria.

## Current implementation — verified from repository code
### Implemented
- Public GitHub Pages static site, landing page, A1 roadmap and one lesson.
- Homepage language selector for Roman Urdu, Urdu and English.
- Five introductory vocabulary cards, approximate pronunciation and optional browser speech.
- One homepage practice question.
- A1 roadmap with eight units; first unit is available.
- Lesson 01: greetings/introduction phrases, dialogue, five-question quiz and local completion.
- Local preference/progress storage.
- Basic PWA manifest and service worker.
- Latest homepage UI update: phone-first layout refinements, fixed five-item mobile navigation, a clear three-choice language dialog, saved language selection and removal of the external Google Fonts import.

### Partial / needs validation
- Whole course and lesson pages are not fully translated. Homepage translations cover only selected strings.
- Urdu RTL requires page-by-page QA; mixed Spanish/English text must retain correct direction.
- Latest mobile layout must be tested on real Android devices and 360/390/412px viewports.
- Service-worker update/offline flow needs testing after successful online load.
- Speech synthesis can be missing or use an unexpected Spanish voice.
- Accessibility needs keyboard and screen-reader testing.

### Not implemented
- Complete A1 curriculum; units 2–8 are roadmap placeholders.
- A2–C2 lessons.
- Full grammar, listening library, speaking assessment or writing correction.
- Accounts, family profiles, cloud sync or server-side progress.
- AI tutor, leaderboard, streaks, XP, badges or full game suite.
- Dedicated Andalusian accent course.

## Workflow for any AI taking over
Before editing:
1. Read AGENTS.md, this handoff and docs/ROADMAP.md.
2. Inspect current branch, exact files and live deployment; do not assume this document is perfectly current.
3. Check project-relative paths for GitHub Pages.
4. Pick the smallest coherent milestone and preserve existing content/progress.

After editing:
1. Check links, asset paths, HTML, JS errors and CSS breakpoints.
2. Test language persistence and direction for the changed scope.
3. Check keyboard focus, labels and touch targets.
4. If app-shell files changed, review service-worker cache list/version.
5. Update this handoff and roadmap with only verified facts.
6. Commit clearly; check GitHub Pages Actions and live pages before saying deployment succeeded.
7. Report files, commit, actual tests, limitations and one next task.

## Definition of done
A milestone is done only when its agreed scope is in the repository, learner progress is preserved, mobile layout is usable at 360px+, internal links/assets work, language/direction behaviour is checked, documentation is updated, and deployment is confirmed rather than assumed.
