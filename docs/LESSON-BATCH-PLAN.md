# Spanish Seekho — Batch Production Plan

_Last updated: 24 November 2026_

## Operating decision

Lesson creation is batch-first. The owner should not need to request lessons one at a time.

- Normal batch: **5 complete lessons**.
- Straightforward topics with adequate output budget: **6–8 complete lessons**.
- Dense grammar or topics requiring careful explanation: **3–5 complete lessons**.
- Do not split a lesson mid-way. If a response limit is reached, finish the current lesson cleanly and report the exact remaining range.

Batch size is a practical default, not a hard ceiling. Quality, output limits, and integration risk determine the final size.

## Current verified starting point

Check the latest repository before each batch. The 24 November 2026 documentation snapshot records:

| Pathway | Available lessons | Status |
|---|---:|---|
| A1 | 01–25 | Starter pathway |
| A2 | Core lessons 01–23 + separate modules 25–28 | Core outcomes mapped; end-of-level activities deployed and smoke-tested |
| B1 | 01–24 + separate 25–28 | Full source review completed; corrections applied; fresh deployment and live route/interaction QA pending |

A1 and A2 must not be advertised as complete CEFR syllabi. B1 must not be advertised as a complete course.

## Next planned work

B1 core Lessons 01–24 and closing modules 25–28 are implemented and have completed the consolidated source-level review. The immediate next task is release verification, not another lesson batch:

1. Pages build/deploy for latest B1 content commit `2705fab84ccabe9d71979f3437313cd775d4f789` succeeded in run 578; verify the deployed routes.
2. Verify the B1 index, all 24 core lesson routes and four closing-module routes.
3. Test representative/all core quiz submissions and the primary Module 25–28 interactions without clearing existing learner progress.
4. Record any remaining defects and fix them in the same pass.
5. B2 mapping/authoring may proceed in parallel by explicit owner decision; B1 release verification remains pending and is not waived.

Browser automation could not start during the source review because the browser service wallet balance was negative. Source-level checks are complete; runtime checks must not be inferred from them.

## Batch workflow

1. Read `AGENTS.md`, `docs/PROJECT-HANDOFF.md`, `docs/ROADMAP.md`, and `docs/LESSON-PRODUCTION-PLAYBOOK.md`.
2. Inspect the current code and all relevant neighbouring lessons.
3. Confirm the next contiguous lesson range and avoid topic duplication.
4. Define the batch outline before drafting.
5. Generate every lesson in the range in one production request.
6. Run content checks and technical checks.
7. Integrate all lessons and update course navigation.
8. Update handoff and roadmap with actual facts and the next uncompleted range.

## Parallel AI assignment

Parallel production is allowed when lesson ranges are independent and pre-planned.

Example only:
- ChatGPT: B1 02–06.
- Claude: B1 07–11.
- Grok: independent content review of B1 02–06, not duplicate authoring.

Do not use these example ranges as current status without checking the repository. Avoid splitting a tightly dependent grammar sequence across AIs unless the shared outline is agreed first.

## Batch completion report

Every completed batch should report:

- Level and exact lesson range.
- Lesson numbers and titles.
- Files added/changed.
- Quiz and progress behaviour.
- Content/technical checks actually performed.
- Any known limitations or content needing human review.
- Exact next uncompleted lesson range.

## No one-by-one prompting

When the owner says “continue,” “next,” “make more lessons,” or “continue B1,” interpret it as permission to prepare the next complete batch from the roadmap. Do not ask the owner to request each individual lesson. Ask only when a genuine decision or missing input prevents safe progress.



## Approved 168-module curriculum

The owner approved **168 modules across A1–C2 (28 per level)**. Follow [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md) for the authoritative titles, outcomes and assessment model. This is a Spanish Seekho design decision, not a CEFR-mandated count.

A1 and A2 inventories have been reviewed and mapped; A2 core modules 01–24 have strong internal coverage evidence and separate end-of-level modules 25–28 are implemented. B1 core lessons 01–24 and closing modules 25–28 are now implemented at source. Preserve current URLs and progress; do not renumber blindly. The immediate work is publication verification, outstanding live interaction QA and a full B1 01–28 curriculum review. B2 authoring has now started with Lessons 01–04; C1/C2 remain future phases.

## Current next batch

Next lesson batch: **C1 Lessons 09–12** (Critical reading and listening: implicit meaning, assumptions, bias, evidence evaluation and complex spoken input). C1 Lessons 01–08 are source-integrated; owner browser/device QA remains pending. B1 and B2 owner QA remain independently pending.

## B1 release gate — owner browser QA pending (25 November 2026)

The owner has asked that assistant-run browser testing stop; the owner will test later. No live browser checks were performed by the assistant because browser automation could not start with a negative service wallet balance. Pages workflow run 45461408731 (run 583) is completed successfully, but this is not route-level or functional verification. Follow the owner checklist in `docs/CURRICULUM-TRACKER.md` section 28. Keep B1 as source-reviewed/deployed but not release-verified; B2 authoring may proceed in parallel by explicit owner decision; B1 QA results and fixes must still be recorded before B1 is called release-verified.


## Documentation deployment confirmation — 25 November 2026

GitHub Pages workflow run **#587** (`45530273768`) for commit `b3f478aa4945ab7bbfc647e7f3c7847a32942114` is now **completed / success**. This confirms the documentation commit passed through the Pages deployment workflow. It does **not** replace owner-run live QA or verify individual routes, interactions, audio, persistence, mobile layout, accessibility, or offline behaviour. B1 remains **source-reviewed and deployed, but not release-verified**. The owner QA checklist remains pending in `docs/CURRICULUM-TRACKER.md` section 28; B2 authoring is owner-authorised in parallel; B1 QA and any resulting fixes must still be recorded before B1 is called release-verified.


## B2 development status — owner-authorised parallel start (25 November 2026)

The owner explicitly asked to proceed with B2 while leaving B1 live/browser QA for the owner to complete later. This is an authoring-schedule decision only: **B1 QA remains pending and B1 remains not release-verified**. Do not mark any B1 checklist item passed without owner evidence. B2 content development may proceed in parallel, but no claim of B1 release verification, B2 completion, official CEFR certification, or runtime testing is permitted.

B2 opening batch now exists at b2/index.html and b2/lesson-01.html through b2/lesson-04.html. The homepage links to the new pathway. B2 service-worker precache was advanced to spanish-seekho-v80 and includes the four lessons and index. The first batch covers Unit 1: narrative perspective; complex past-time relationships; reconstructing events and conflicting accounts; and personal, historical and professional narratives. The next authoring range is **B2 Lessons 05–08** (argument, debate, persuasion and counterarguments).

Assistant-run browser testing was not performed, as requested. Source-level inspection only; live route, quiz interaction, persistence, TTS, mobile, accessibility, RTL and offline behaviour remain unverified.


## B2 batch update — Lessons 05–08 (25 November 2026)

Added source pages `b2/lesson-05.html` through `b2/lesson-08.html` and integrated them into `b2/index.html`. The second unit covers building strong arguments; debate, agreement and disagreement; persuasion, claims and evidence; and counterarguments with balanced opinions. Each new lesson contains measurable outcomes, six teaching sections with Spain-Spanish examples and English translations, audio-trigger buttons using the existing `data-say` pattern, a speaking/writing production task, and an eight-question checkpoint. Passing remains 6/8 and completion uses the existing `ss-b2-done` local progress key; lessons remain unlocked.

The B2 index now lists eight available lessons across two units and calculates progress out of eight. The homepage description now reflects eight available lessons. Service-worker cache is `spanish-seekho-v81` and its precache list includes B2 Lessons 01–08. Lesson 04 already points to the B2 pathway rather than a nonexistent Lesson 05 in its previous navigation slot; Lesson 05 continues to Lesson 06.

Source-level checks only. No browser or live-site testing was performed. B2 route loading, quiz interaction, local persistence, TTS, mobile layout, accessibility, Urdu RTL and offline behaviour remain pending. **B1 owner QA remains pending and is not waived**; keep the checklist in tracker section 28 unchanged until the owner supplies test evidence.

Next B2 authoring range: Lessons 09–12, subject to the approved B2 curriculum map and overlap review.


## B2 batch update — Lessons 09–12 (25 November 2026)

Added `b2/lesson-09.html` through `b2/lesson-12.html` and integrated Unit 03. The approved sequence covers subjunctive in complex opinions, evaluation and influence; indicative/subjunctive contrasts and shifts in meaning; conditional structures, hypotheses and counterfactuals; and complex relative, subordinate and concessive clauses. Each lesson includes explicit outcomes, six teaching sections, two Spanish examples with English translations and existing `data-say` controls per section, a speaking/writing production task, and an eight-question checkpoint. Passing remains 6/8; completion uses the existing `ss-b2-done` key; all lessons remain unlocked.

The B2 index now lists 12 available lessons across three units and calculates progress out of 12. Homepage availability text is updated. Service-worker cache is `spanish-seekho-v82` and precaches B2 Lessons 01–12. Lesson 12 links back to the B2 index rather than a nonexistent Lesson 13; Lessons 09–11 link to the next available lesson.

Source-level review only. No browser/live-site testing was performed. B2 routes, quizzes, persistence, TTS, mobile, accessibility, Urdu RTL and offline behaviour remain pending. **B1 owner QA remains pending and is not waived**; preserve tracker section 28 until owner evidence is supplied.

Next B2 authoring range: Lessons 13–16, Unit 04 — professional and academic communication, following the approved master plan.


Production handoff after this batch: the next planned B2 authoring range is **Lessons 13–16, Unit 04 — Professional and academic communication** (meetings/presentations/collaboration; reports/proposals/formal correspondence; academic discussion/source-based writing; workplace conflict/feedback/negotiation), as specified in the approved curriculum master plan. B1 owner-run browser QA remains pending.


## 25 November 2026 — Completed batch: B2 Lessons 13–16

Unit 04, Professional and academic communication, is implemented and integrated. Topics: meetings/presentations/collaboration; reports/proposals/formal correspondence; academic discussion/source-based writing; workplace conflict/feedback/negotiation. Four pages have six teaching sections, 12 translated Spanish examples/audio controls, a production task and eight-question quiz each. Existing `ss-b2-done` key and 6/8 threshold retained. Index/homepage count 16; service worker v84 precaches B2 01–16. Source validation only; browser/live QA remains pending. B1 owner QA remains pending. **Next batch: B2 Lessons 17–20**, following the approved curriculum map.

## 25 November 2026 — Completed batch: B2 Lessons 17–20

Unit 05, Media, society and contemporary issues, is implemented and integrated. Topics: understanding news/interviews/public debate; social change, technology and ethical questions; culture, identity and intercultural perspectives; summarising and comparing multiple sources. Each lesson has six teaching sections, 12 Spanish examples with English translations/audio controls, three outcomes, a productive task and eight-question quiz. Existing `ss-b2-done` key and 6/8 threshold retained. Index/homepage now list 20 lessons; service worker v85 precaches B2 01–20. Unit-boundary navigation updated for 04→05, 08→09, 12→13 and 16→17. Source validation only; browser/live QA remains pending. B1 owner QA remains pending. **Next batch: B2 Lessons 21–24, Unit 06 — precision and flexible interaction.**

## 25 November 2026 — Completed batch: B2 Lessons 21–24

Unit 06, Precision and flexible interaction, is implemented and integrated. Lesson 21 register/tone/politeness/pragmatics; Lesson 22 idiomatic language/collocations/lexical patterns; Lesson 23 misunderstandings and difficult conversations; Lesson 24 integrated communication to defend, synthesise and negotiate. Each lesson has three outcomes, six teaching sections, 12 translated Spain-Spanish examples/audio controls, a productive task and eight explained quiz questions. Existing `ss-b2-done` key, 6/8 threshold and open access remain unchanged. Index/homepage list 24 core lessons; service worker v91 precaches B2 Lessons 01–24. Source validation only; browser/live QA remains pending. B1 owner QA remains pending. Next: B2 closing modules 25–28.


## 25 November 2026 — B2 end-of-level modules 25–28 implemented

Created four separate closing activities: `b2/b2-review.html` (25, 16-question cumulative review with lesson-linked repair suggestions and a saved revision plan); `b2/b2-project.html` (26, six-task proposal project with local autosave and minimum completion checks); `b2/b2-assessment.html` (27, listening with device TTS and transcript fallback, five-question listening and reading checks, extended writing, speaking and mediation self-review); and `b2/b2-readiness.html` (28, 12 B2 can-do statements, gap plan and C1 next-step choice). Closing-module completion uses the new `ss-b2-end-done` key; existing core lesson progress `ss-b2-done` is unchanged. All pages remain open without prerequisite locks.

Integrated all four modules into the B2 index, updated the index progress display to include 24 core lessons plus four closing activities, updated the homepage pathway summary and advanced the service-worker cache to `spanish-seekho-v92` with all four new routes precached. Source-level checks only; no browser/live route, interaction, persistence, TTS, mobile, accessibility, RTL or offline testing was performed. B2 remains in development and is not an official CEFR qualification. B1 owner-run QA remains pending and is not waived. Next phase: consolidate B2 curriculum/source review and prepare C1 mapping only after the B2 review gate is defined.


## 25 November 2026 — C1 planning gate

Created `docs/C1-SCOPE-MAP-DRAFT.md` from the approved 28-module C1 sequence in `CURRICULUM-MASTER-PLAN.md`, with a provisional descriptor-coverage map and authoring quality gates. This is planning only: no C1 lesson pages have been authored. C1 production should begin after owner-run B2 browser/device QA and a qualified Spanish-language review of the B2 corpus or an agreed representative review plan. B2 remains a learning pathway, not an accredited CEFR examination. The C1 map is provisional and should be refined against the Council of Europe CEFR Companion Volume and Instituto Cervantes Plan Curricular.


## 26 November 2026 — C1 Lessons 05–08 implemented; owner QA pending

Authored C1 Unit 02 Lessons 05–08: advanced presentations and audience adaptation; academic argument, critical response and discussion; research summaries, reports and formal proposals; professional negotiation, leadership and mediation. Each page includes three learning outcomes, six teaching sections, 12 Spain-Spanish model sentences with English translations and speech controls, an independent production task, and an eight-question checkpoint with explanations. A 6/8 pass records completion under `ss-c1-done`; lessons remain open.

Integrated the four routes into the C1 index, expanded its progress denominator to eight available lessons, updated the homepage pathway, and advanced the service-worker cache to `spanish-seekho-v95` with all four new lesson routes precached. C1 Lessons 09–28 remain planned, not authored.

Source-level verification and live/browser QA are distinct. Browser rendering, quiz interaction, reload persistence, TTS, mobile layout, Urdu RTL/mixed direction, keyboard/accessibility and offline behaviour remain pending owner testing. No formal CEFR validation or accreditation is claimed.


## 26 November 2026 — C1 Lessons 09–12 implemented (parallel authoring)

At the owner's explicit request, continued C1 authoring while the previous GitHub Pages workflow remained pending. Added Unit 03 Lessons 09–12: implicit meaning/assumptions/bias; argument and evidence evaluation; interpreting extended spoken material; and multi-source synthesis. Each lesson has three learning outcomes, six teaching sections, 12 Spain-Spanish examples with English translations/audio controls, a production task and eight explained quiz questions. Existing `ss-c1-done` progress key and 6/8 completion indicator remain unchanged; lessons are not locked.

C1 index now lists 12 lessons, progress denominator is 12, homepage summary says twelve lessons, and service-worker cache v97 precaches the new routes. Source verification and successful Pages deployment are separate gates; neither browser/device QA nor deployment success is claimed here. Next planned range: C1 Lessons 13–16, Unit 04 — Style, register and language choice.


## 26 November 2026 — C1 Lessons 13–16 completed

Created and integrated Unit 04: Lesson 13 formal/neutral/informal/specialised registers; Lesson 14 idioms, collocations, connotation and lexical precision; Lesson 15 politeness, irony, humour and indirect communication; Lesson 16 regional variation in Spain and the wider Spanish-speaking world. Each has three learning outcomes, six teaching sections, 12 Spanish examples with English translations and Listen controls, an independent production task, and eight explained quiz questions. Existing `ss-c1-done` progress key and 6/8 threshold retained; all lessons remain open.

C1 index/homepage now list 16 lessons across four units; progress denominator is 16. Service worker cache v98 precaches C1 Lessons 13–16. Source-level checks only; live/browser/device QA, Pages deployment confirmation, qualified Spanish-language review and programme-wide accessibility/offline checks remain pending. B1/B2 owner QA remains independently pending. Next batch: **C1 Lessons 17–20 — Complex grammar and expression**.
