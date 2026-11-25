# Roadmap

_Last updated: 24 November 2026_

## Implemented learning content (documented snapshot)

- A1: core lessons 01–25 + expanded practice (60-item deck) + separate end-of-level modules 25–28 (cumulative review, practical project, integrated skills practice, readiness plan).
- A2: core lessons 01–23 plus separate end-of-level modules 25–28. All 24 core outcomes have strong internal mapping evidence; this is not official CEFR certification.
- B1: core lessons 01–24 and closing modules 25–28 implemented and source-reviewed; same-pass corrections are recorded below. The latest B1 content commit was deployed successfully in Pages run 45460248990 (run 578); live route/interaction QA remains pending. B1 is not release-verified.
- Spain Life: 6 modules.
- A1 Lesson 25 remains Education, school and studies; it was preserved and mapped to core module 20. The new cumulative review uses a separate URL.
- A2 lessons 13–23: descriptions, preferences/reasons, plans, travel problems, technology, everyday solutions, review, integrated practice, home/neighbourhood, public services and connectors/sequencing. Separate closing modules 25–28 are deployed and smoke-tested.

**Product truth:** A1/A2 are expanding starter pathways, not complete CEFR syllabi. B1 has only started.

## Documentation and workflow improvements

- Added `docs/LESSON-PRODUCTION-PLAYBOOK.md`: mission, language policy, lesson blueprint, content quality, shared AI instructions, batch workflow, multi-AI coordination and validation checklist.
- Added `docs/LESSON-BATCH-PLAN.md`: default batch sizes, current starting point, next B1 planning directions and batch completion report.
- Updated `AGENTS.md` to require the new documentation and enforce batch-first lesson production.
- Updated `docs/PROJECT-HANDOFF.md` with the project mission, multi-AI handoff, verified documented course snapshot, and architecture caveats.

These are documentation/process changes. They do **not** implement a JSON lesson engine, automated validation, or automated batch generation. The A1 end-of-level activity pages are implemented as static HTML/vanilla JavaScript.

## Next priorities

1. **B1 release verification:** the final B1 content commit `2705fab84ccabe9d71979f3437313cd775d4f789` was deployed successfully in Pages run 45460248990 (run 578). The follow-up documentation commit `b5c05fec63d0cf3a14da3a36ea57f505ac9b66e3` also built and deployed successfully in run 45460473286 (run 579). Verify the B1 index, all 24 lesson routes and four closing routes; exercise core quiz completion and closing-module interactions when browser automation is available.
2. **B1 release gate:** the full 01–28 source review is complete, but B1 is not ready for B2 until live route/interaction QA is completed. Do not begin B2 prematurely.
3. **Selected A1/A2 runtime follow-up:** test outstanding quiz submissions and closing-activity interactions without disturbing existing progress.
4. **Cross-course device/accessibility QA:** Android/mobile layout, Urdu RTL, keyboard/focus, screen-reader labels, TTS, reload persistence and actual offline/PWA behaviour remain unverified. Service-worker cache is v79 after the Word Explorer source update; precache configuration is not proof of offline functionality.

## Completed A2 work snapshot (24 November 2026)

- Mapped all 24 approved A2 core outcomes to existing lessons; applied five targeted revisions and created A2-21–23 for modules 02, 16 and 20.
- Deployed separate A2 end-of-level modules 25–28 and added them to the A2 index.
- Live smoke tests: A2-21/22/23 each 8/8; A2-25 16/16; A2-26 five-task project saved; A2-27 listening/reading 5/5 each and assessment save; A2-28 readiness plan saved.
- See tracker sections 4, 18.2 and 19 for exact coverage, test evidence and limitations.

## Product and engineering principles

- Accuracy over volume; practical communication over filler.
- Free core learning, mobile-first, static HTML/CSS/vanilla JS unless a documented decision approves otherwise.
- Do not gate access to later lessons behind quiz completion.
- Preserve learner progress and existing direct lesson links.
- Do not claim features or course completeness without implementation and testing.



## Approved 168-module curriculum target

The owner approved a complete **168-module A1–C2 curriculum: 28 modules per level**. The authoritative level outcomes, full module sequence, assessment standard and phased implementation are in [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md).

The 168 count is Spanish Seekho's design choice, not a CEFR requirement. Each level has 24 core teaching modules and four closing modules (revision, practical project, integrated assessment, readiness checkpoint). This is a plan, not implemented content. Do not claim full CEFR alignment, accreditation or certification without the documented review and evidence.

### Immediate sequence
1. Complete post-build live verification for B1-17–21; their source checks and Pages workflow success are recorded above.
2. Produce B1-22–24 (relative clauses, reported information and integrated communication).
3. Build B1 end-of-level modules 25–28 after core 24.
4. Preserve existing lesson URLs and local progress; do not renumber blindly.
5. Continue B1 before proceeding to B2, then C1 and C2 in order.

14. A2-21–23 deployment confirmed on GitHub Pages; Lessons 21–23 each passed live 8/8 completion flows. See tracker section 18.2.

15. A2 end-of-level modules 25–28 created, added to A2 index and precached under service-worker v69. Live checks: module 25 = 16/16; module 26 project completion saved; module 27 listening/reading = 5/5 each and save; module 28 readiness plan saved. See tracker section 19. Real offline/device/accessibility QA remains pending.
16. B1-17–21 implemented at source; current next batch is B1-22–24, followed by B1 closing modules 25–28.


## Completed B1 opening batch (24 November 2026)

- B1-01 and B1-02 passed live 8/8 quiz/completion tests. B1-03–06 live pages, headings, eight-question quizzes and submit controls verified; submissions not yet interaction-tested.
- B1 index shows six lesson cards. Service-worker cache v70 precaches B1-01–06.
- All 40 new B1-02–06 answer keys were source-checked; each page preserves ss-b1-done and its own lesson ID.


## Completed B1 follow-on batch 07–11 (24 November 2026)

- B1-07–11 are deployed and linked from the B1 index. Cache-busting live check confirmed all 11 cards and service-worker v71.
- B1-07 passed 8/8 and displayed its completion panel. B1-08–11 page/quiz/submit controls verified; submission interactions remain pending.
- Next batch B1-12–16 follows the approved master map.


## B1 Lessons 12–16 source batch (24 November 2026)

- Created five lessons for decisions/options, work experience, education/skills, applications/interviews and social issues. Source quiz/progress checks passed; 40 answer keys checked.
- B1 index source now has 16 cards and cache v72 precaches lessons 01–16. The first live browser test preceded the latest Pages build and saw the older 11-card index plus 404 for lesson 12. Publication remains pending verification.
- Next batch after publication: B1-17–21.


## B1 Lessons 17–21 source batch (24 November 2026)

- Created five lessons for causes/consequences, negotiation, advice/necessity, complaints and common present subjunctive.
- All 40 quiz keys and answer indices checked; inline JavaScript syntax compiled; existing ss-b1-done progress key and 6/8 threshold preserved.
- B1 index source lists 21 lessons; service-worker cache v73 precaches 17–21.
- The first live browser pass preceded completion of the latest Pages build and saw stale 16-card content/404s. GitHub Pages workflow run 45426795301 later completed successfully for latest source commit; fresh browser verification remains pending.
- Next batch: B1-22–24, then end-of-level modules 25–28. Broader device/offline/accessibility QA remains outstanding.


## B1 Lessons 22–24 source batch (24 November 2026)

- Added relative clauses (22), reported information (23) and integrated B1 communication (24), following the approved master map.
- Each page has learning objectives, five teaching sections, Spanish examples with Roman Urdu meanings, dialogue, production task and eight quiz questions. Existing 6/8 threshold and ss-b1-done progress key are preserved with unique lesson IDs.
- B1 index now lists 24 lessons and progress out of 24; lesson navigation continues 21→22→23→24. Service-worker cache v74 precaches lessons 22–24.
- Source re-fetch checks passed: 24 sequential index cards, 24/24 progress, eight questions and valid answer indices per new lesson, unique IDs, 6/8 threshold, sequential navigation and v74 precache entries. GitHub Pages run 45429610127 was in progress at the last check. Browser automation could not start because its service wallet balance was insufficient; do not claim public routes or quiz submissions have been tested.
- Next: B1 closing modules 25–28 after core review.


## B1 end-of-level modules 25–28 (24 November 2026)

- Added the four approved closing activities as separate pages and linked them from the B1 index: cumulative review/gap repair, practical study/work/relocation project, integrated skills assessment and B2 readiness plan.
- Module 25 contains 16 questions, explanations, lesson-specific repair links and a personal revision plan. Module 26 contains six connected production/mediation tasks with local autosave and task completion checks. Module 27 samples listening, reading, writing, speaking self-review and mediation; device TTS is clearly identified and transcript fallback is available. Module 28 contains 12 self-ratings and a learner-owned B2 plan.
- Core progress (24 lessons) remains separate from closing-activity progress (4 activities). New localStorage key: ss-b1-end-done; core key ss-b1-done is unchanged.
- Service-worker cache v75 includes all four closing pages. Source checks and inline-script compilation passed; browser automation could not start because its wallet balance was insufficient. Latest Pages workflow run 45431309579 was pending at last check.
- Next: verify publication and live interactions, then review B1 01–28 before B2.


## B1 full curriculum review and source corrections (24 November 2026)

- Reviewed Lessons 01–24 against the six-unit master plan, including grammar, Castilian usage, translations, register, dialogue, progression, overlap and learner production. Reviewed all 192 core quiz questions and keys; all lesson IDs, 6/8 thresholds and `ss-b1-done` progress behaviour are preserved.
- Reviewed closing modules 25–28 and separate `ss-b1-end-done` tracking. Module 25 has 16 cumulative questions; Module 26 has six connected project tasks; Module 27 has five listening and five reading questions plus writing, speaking self-review and mediation; Module 28 has 12 self-ratings and a learner-owned plan.
- Corrected Lessons 02–16 unit labels, Lesson 09's English translation, a Lesson 18 typo, Lesson 21 phrasing, Lesson 22's mixed-language prompts and the missing reason in Module 27's listening transcript.
- Replaced overlapping Part 5 production prompts in Lessons 17–24 with distinct guided practice; Part 7 remains the independent production challenge. Aligned the Lesson 23 reported-speech example and its translation.
- Fixed B1 mobile navigation's Practice route and applied `lang="es"` to Spanish `.es` content. Service-worker cache v78 precaches all B1 pages. Source JavaScript and quiz structures pass checks.
- The latest B1 content commit `2705fab84ccabe9d71979f3437313cd775d4f789` was built and deployed successfully in Pages run 45460248990 (run 578), with build, deploy and status-report jobs successful. Browser automation could not start due to a negative service wallet balance. Live route, quiz, module interaction, mobile/RTL, TTS and offline tests remain pending.
- B1 is source-reviewed, not release-verified. B2 remains blocked until deployment and live QA are complete.


## B1 live QA — owner will test later (25 November 2026)

- The owner asked the assistant not to run browser testing. No assistant-run live browser tests were performed; browser automation could not start because its service wallet balance was negative (-$0.24).
- Pages workflow run 45461408731 (run 583), for commit `bf805171fc83212c78edf25e270ea2a6bcd24cc6`, is now completed successfully. This is deployment workflow confirmation only, not live route or interaction verification.
- The owner will perform live QA later. Use the detailed checklist in `docs/CURRICULUM-TRACKER.md` section 28 and record actual results there.
- Keep B1 marked **source-reviewed, not release-verified**. B2 remains on hold until owner testing is completed and reviewed.
