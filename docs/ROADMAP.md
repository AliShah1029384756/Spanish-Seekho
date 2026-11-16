# Spanish Seekho — Product Roadmap
_Last updated: 16 November 2026 — shared A1 mobile shell milestone_

Status labels: Done, In progress, Next, Planned, Blocked. A roadmap item is not shipped until implemented and tested.

## Product quality gates
Every release preserves free core access, mobile-first usability, honest feature status, learner progress, accessibility, low bandwidth and reviewed Spanish content.

## Phase 0 — Foundation
- [x] Public GitHub Pages deployment.
- [x] Landing page, A1 roadmap and first lesson.
- [x] Local progress storage and basic PWA shell.
- [ ] Verify deployment after every release.
- [ ] Test install/update/offline behaviour on Android Chrome and another browser.

## Phase 1 — Mobile app experience
- [x] Phone-first homepage layout refinement.
- [x] Fixed bottom navigation on homepage.
- [x] Three-choice language dialog instead of cycling through languages.
- [x] Persist homepage language choice.
- [x] Remove external Google Fonts dependency from global stylesheet.
- [x] Apply consistent language preference picker/navigation to A1 course and lesson pages.
- [ ] Complete Urdu RTL QA, including mixed Spanish and English text (initial direction/isolation styles added; visual QA pending).
- [ ] Test 360px, 390px and 412px screens on real Android.
- [ ] Add browser-specific install guidance only after testing.
Acceptance: language choice is obvious, one tap away, persists after reload, and Urdu does not reverse Spanish examples.

## Phase 2 — A1 curriculum (high priority after mobile QA)
Recommended sequence:
1. Expand greetings/introductions: formal usted vs informal tú and polite introductions.
2. Alphabet, vowel sounds, stress and spelling.
3. Numbers, dates, time and prices.
4. Personal information, family, countries and nationalities.
5. Everyday objects, locations and directions.
6. Food, cafés, shopping and money.
7. Daily routine and beginner grammar: ser, estar, tener, ir, querer.
8. Integrated revision and A1 checkpoint.

Each lesson should include outcomes, estimated time, explanation, examples, common mistakes, Spanish text, English meaning, Roman Urdu and Urdu approximation where useful, usage notes, practice, varied exercises, feedback, reviewed answers and local progress.

## Phase 3 — Practice and retention
- Vocabulary review/spaced repetition.
- Matching, listening-choice and sentence-building.
- Daily target, streaks and XP only after reliable tracking.
- No shame-based streak loss or manipulative notifications.

## Phase 4 — Real-life Spain
Renting, job interviews, healthcare, public offices, transport, shopping, education, airport and everyday social communication.

## Phase 5 — PWA and family learning
Improve offline lesson packs and update handling. Consider same-device family profiles. Investigate sync only if genuinely free and privacy-respecting. Basic learning remains account-free.

## Phase 6 — Advanced pathway
A2, B1, B2, C1 and C2 only after A1 is complete and reviewed. Andalusian/Málaga pronunciation may be an optional regional module.

## Out of scope until justified
Paid APIs/services, complex backend/framework, public leaderboards before privacy review, claims of certified CEFR assessment, and claims that speech works on every device.
