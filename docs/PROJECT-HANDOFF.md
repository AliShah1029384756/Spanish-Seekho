# Spanish Seekho Handoff

_Updated: 24 November 2026_

## Project specification

`docs/PROJECT-SPECIFICATION.md` is the concise source of truth for product scope, functional/non-functional requirements, technical constraints, acceptance gates and multi-AI collaboration. Read it before planning or changing product behaviour. This handoff records the current working state; the specification records what the product is required to be.

## Mission and product direction

**Making Spanish Learning Accessible to Every Pakistani.**

Free, practical, mobile-first Spanish learning for Pakistani learners. Roman Urdu is the default teaching language, with Urdu-script and English support according to the existing interface. Teach contemporary standard Spanish from Spain (Castilian). Pronunciation spellings in Roman Urdu/Urdu are approximations and must be labelled. The product is intended to be genuinely useful, including for learners preparing for life in Spain; it is not merely a vocabulary list or portfolio demo.

## Initial curriculum audit (24 November 2026)

An initial repository inventory and topic-to-curriculum mapping has been completed for A1 lessons 01–25, A2 lessons 01–20 and B1 Lesson 01. See [CURRICULUM-TRACKER.md](CURRICULUM-TRACKER.md) for page-by-page candidate mappings, initial gaps, overlaps, evidence limits and next actions.

Detailed review updates (24 November 2026): A1 Lessons 01–20 have now had visible content, examples, quiz answer keys and source-level completion logic reviewed. The combined workflow is in use: review, implement verified small fixes/optimizations in the same pass, re-fetch and verify, then record findings. Targeted changes have been applied to A1-01, A1-02, A1-05, A1-06, A1-08, A1-14, A1-15, A1-16 and A1-19; URLs, lesson IDs, completion thresholds and progress-storage keys were preserved. A1-08 remains a starter checkpoint, not a full CEFR A1 assessment. A1-15's weekday for 18 November 2026 was corrected to Wednesday. A1-19's available lesson count was corrected to 01–20. The detailed source review of A1 Lessons 21–25 is complete. A2 Lessons 01–20 have now received detailed source review of grammar, examples, translations, pronunciation aids, quiz keys and completion logic. A2-11 received a size/age nuance for mayor/menor; A2-13 now distinguishes antiguo/a from histórico/a. A2-12, A2-14 and A2-15 required no verified factual or answer-key correction. All five preserve their original URLs, eight-question quizzes, 6/8 thresholds, lesson IDs and ss-a2-done key. The tracker records module mapping and remaining gaps. A limited live browser smoke test confirmed A2-11, A2-12 and A2-13 each scored 8/8 and displayed completion; the two revised vocabulary notes were visible on the deployed site. A2-14 and A2-15 were confirmed in the index but not interaction-tested due to browser execution budget. See tracker section 17.1. A2-06 to A2-09 needed no verified content or answer-key corrections. A2-08 was confirmed as an interim starter checkpoint, not the approved end-of-level module 25. A2-10 received a regional-usage nuance for the present perfect and a more directly matched reply in the Madrid dialogue. All five retain their original URLs, quiz thresholds, lesson IDs and `ss-a2-done` progress key. A limited live smoke test confirmed A2-06's 6/6 quiz result. A2-07's result message was not visible in the browser run even though its source handler and result element are present; this remains an unresolved runtime observation, not a confirmed code defect. A2-08–10 were not interaction-tested in that run. Mapping refinements and limits are recorded in the curriculum tracker. A2-01 received one clarification: *hablamos* is identical in present and preterite, distinguished by context/time expressions. A2-02 to A2-05 had no verified content or answer-key error requiring a code edit. All five retain their six-question quizzes, 4/6 thresholds, lesson IDs and `ss-a2-done` progress key. Mapping refinements and limitations are recorded in the curriculum tracker. Targeted optimizations were applied to A1-21, A1-22 and A1-23; all five lesson quizzes and completion logic were checked, with existing 8-question sets, 6/8 thresholds, IDs and storage keys preserved. The four approved A1 closing activities are now implemented as separate pages: a1-review.html (module 25), a1-project.html (26), a1-assessment.html (27), and a1-readiness.html (28). The existing lesson-25.html (Education, school and studies) was preserved as a core lesson mapped to module 20; no public lesson URL or existing learner progress was overwritten. The A1 index now lists the four end-of-level activities separately and tracks them under ss-a1-end-done; the service-worker cache was updated to v67. All new files, index links and cache entries were fetched and source-verified. A limited live GitHub Pages smoke test confirmed the A1 index and all four new routes are deployed. Module 25 rendered and all 12 answer choices were selected, but final quiz submission/result was not verified. Module 26's five task checkboxes and completion-button interaction were exercised. Module 27 rendered but its full completion flow was not tested; module 28 was confirmed via index navigation only. No visible errors were reported. Browser TTS output, reload persistence, keyboard/accessibility, Android/RTL and offline behaviour remain unverified.

Important: the audit confirms files and visible topic/section structures, not full pedagogical or Spanish-language quality. Quiz presence, language-control references and localStorage references were observed in the pages; runtime behaviour, answer-key correctness, CEFR coverage, Urdu RTL, accessibility, mobile and offline behaviour remain unverified. Existing lesson URLs and learner progress must be preserved. Do not treat review/checkpoint pages as completed CEFR end-of-level assessments without review.

## Current documented course state

- A1: core lessons 01–25; separate end-of-level activities 25–28 now implemented; 60-item practice deck. These are source-verified additions, not yet browser/device QA approved.
- A2: core pathway lessons 01–23 plus separate end-of-level modules 25–28. All 24 core outcomes have strong internal mapping evidence. Closing pages have been deployed and their primary interactions smoke-tested; see tracker sections 4, 18.2 and 19.
- B1: Lessons 01–11 deployed; B1-01, B1-02 and B1-07 passed live 8/8 completion tests; B1-03–06 and B1-08–11 page/quiz controls verified, submission flows pending. Pathway remains incomplete.
- Spain Life: 6 modules.
- Current service-worker cache version: `spanish-seekho-v71`; four A1 end-of-level pages, A2 lessons 21–23, A2 end-of-level modules 25–28, and B1 lessons 01–11 are in its precache list. Real offline behaviour remains untested.

A1 and A2 are starter pathways, not claims of complete CEFR syllabi. B1 is only beginning. Inspect current files before assuming this snapshot is still current.

## Recent documented lesson coverage

### A1
- Lesson 25: Education, school and studies — school vocabulary, study verbs, subjects/classes, a short conversation and an 8-question quiz.
- Other A1 lessons 01–24 are recorded in README/course files; inspect them before planning new content.

### A2
- Core lessons 13–23: descriptions; preferences/reasons; plans/arrangements; travel experiences/problems; technology/communication; everyday problems/solutions; grammar review; integrated practice; home/neighbourhood/local services; public services/forms/appointments; connectors and sequencing.
- Separate end-of-level modules 25–28: cumulative review, short-trip project, integrated four-skills assessment and B1 readiness plan.
- Core lesson quizzes use the existing `ss-a2-done` key; end activities use `ss-a2-end-done`. Later lessons remain directly accessible; quiz completion does not gate access.

### B1
- Lesson 01: narrating past events naturally; contrast indefinido and imperfecto, scene-setting, interruptions, sequence connectors, a practical Málaga story, speaking and 100–120-word writing prompts.
- Includes an 8-question quiz; 6/8 saves progress under `ss-b1-done`. Lesson access is open; completion does not gate later lessons.

## Current production priority

A2 core curriculum reconciliation and source-level implementation are complete: all 24 outcomes have strong internal mapping evidence. Five existing pages were strengthened (A2-02/13/14/16/20), and A2-21–23 were created for modules 02/16/20. The live-site test immediately after the commits still showed the previous 01–20 deployment; verify GitHub Pages publication before claiming the new pages are live. Next: complete runtime QA, then create separate closing modules 25–28. Include A2-07 result display, A2-14/15, A2-17–20 and A2-22/23 quiz interactions in the dedicated browser QA list; A2-16 and A2-21–23 have confirmed 8/8 completion flows. After A2 closing work, verify B1-01 and produce B1-02–06 as a coherent batch. A1's four closing activities are implemented at source level; schedule browser/device, keyboard, RTL and offline QA before making runtime claims.

## Batch-first working agreement

- The owner prefers to work in ChatGPT when possible but may switch to Claude or Grok when usage limits are reached.
- All AI tools must use the repository documentation as shared context; do not ask the owner to repeat the project mission or standards.
- Default to 5 complete lessons in one batch. Generate 6–8 when scope and response budget allow; use 3–5 for dense grammar.
- Do not make the owner request each lesson individually. “Continue” means prepare the next contiguous batch.
- For parallel AIs, assign non-overlapping lesson ranges and have one integrator reconcile content, numbering, navigation, and implementation.
- Follow `docs/LESSON-PRODUCTION-PLAYBOOK.md` for the shared AI prompt, content blueprint, QA, and architecture rules.

## Architecture and migration status

- Repository guidance preserves a free static HTML/CSS/vanilla-JavaScript architecture.
- JSON-driven lesson rendering has been discussed as an optimization but is **not confirmed as implemented**. Inspect actual lesson files, navigation, language behaviour, progress storage, and service-worker behaviour before deciding.
- Do not mass-migrate lessons. If justified, first create and test one representative proof of concept while preserving visual behaviour, direct links, and learner progress.
- Preserve existing localStorage keys: `ss-language`, `ss-completed`, `ss-a1-done`, and inspect current code for any additional level-specific keys.
- No claim of automated lesson validation or a batch-generation tool unless one is implemented.

## Existing engineering constraints

- Android/mobile-first.
- Correct Urdu RTL; Spanish and Latin-script text LTR where appropriate.
- Semantic HTML, accessibility, visible focus, touch-friendly controls, reduced-motion support.
- Avoid paid APIs/hosting, mandatory accounts, unnecessary frameworks and essential external CDN dependencies.
- Review service-worker cache version/list when app-shell assets change.
- Verify GitHub Pages project-relative paths.
- Do not claim offline/PWA behaviour without real device/browser testing.

## Next steps

1. Continue detailed A2 Lessons 16–20 review, mapping and same-pass corrections; preserve URLs and `ss-a2-done` progress.
2. Finish A2 audit by reconciling all 20 lessons against approved modules 01–24 and identify remaining gaps before adding content.
3. Verify B1-01, then produce B1-02–06 as a coherent batch.
4. Run a dedicated browser/device QA pass for A1 end modules: quiz interactions, drafts/checklists, TTS fallback, keyboard/focus, mobile/RTL and service-worker/offline behaviour.
5. Update this handoff, tracker and roadmap after each verified batch.

## Handoff rule

A new AI must read `AGENTS.md`, this file, `docs/ROADMAP.md`, `docs/LESSON-PRODUCTION-PLAYBOOK.md`, and `docs/LESSON-BATCH-PLAN.md`, then inspect the repository. It should continue from verified code and documentation without asking the owner to repeat known project context.



## Approved 168-module curriculum decision

The owner approved **168 modules across A1–C2, with 28 modules per level**. See [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md) for the complete six-level map, exit outcomes, module blueprint, assessment standard, Spain Life companion pathway and phased implementation plan.

This is Spanish Seekho's own curriculum structure, not a lesson count prescribed by CEFR. Each level contains 24 core teaching modules and four closing modules: cumulative revision, practical project, integrated skills assessment, and readiness checkpoint. The 168 modules are a planned target, not an implemented course. Existing A1 lessons 01–25 and A2 lessons 01–20 must be audited and mapped before changes; preserve direct URLs and progress. B1-01 must be verified before producing B1-02–06. Never claim official CEFR accreditation or certification.

**Next sequence:** baseline audit of existing A1/A2/B1 content, then B1-02–06 as a complete batch, following the master map.


## A2 Lessons 16–20 source review (24 November 2026)

- A2-16 travel experiences/problems: eight answer keys checked; no correction required. Candidate for modules 11 and 22, with follow-up questioning still limited.
- A2-17 technology/communication: eight keys checked; object-pronoun examples and dialogue are sound. Strong module 17 candidate.
- A2-18 everyday problems: eight keys checked; added a concise distinction between informal *tú* commands and formal *usted* forms. Strong module 15 candidate; module 14 permission remains missing.
- A2-19 review: eight keys checked; qualified *hoy + present perfect* to avoid presenting Spain usage as universal. Review material, not module 25 or a systematic module 20 sequencing lesson.
- A2-20 final practice: eight keys checked; replaced English checklist phrases incorrectly tagged as Spanish with Spanish can-do statements and English meanings. Useful integrated practice, but not a full module 26 trip project, module 27 four-skill assessment or module 28 readiness plan.
- All five pages retain URLs, eight-question quizzes, 6/8 thresholds, lesson IDs and `ss-a2-done`. Three edited pages were re-fetched and verified.
- Limited live browser smoke test: A2-16–20 all loaded with eight quiz questions and submit controls; A2-16 passed a targeted 8/8 interaction and displayed its score/completion panel. A2-17–20 submission flows remain untested. See tracker section 18.1. TTS, reload persistence, mobile/RTL, accessibility and offline behaviour remain unverified.


## A2 core curriculum reconciliation (24 November 2026)

All 24 approved A2 core outcomes have now been compared with the 20 existing lesson pages. The tracker records 15 strong mappings, 5 partial mappings and 4 gaps (modules 02, 16, 20 plus the unfilled portion of module 14 is counted as partial; see the row-level statuses). Existing pages and progress were preserved. Minimum plan: targeted revisions to A2-02, A2-13, A2-14/A2-18, A2-16 and A2-20; add A2-21–23 for modules 02, 16 and 20; then build distinct end-of-level modules 25–28. A2-08 and A2-19 remain interim/revision pages; A2-20 remains integrated practice, not an official end-of-level assessment.


## A2 core coverage and new lessons 21–23 (24 November 2026)

- All 24 approved A2 core outcomes now have strong internal mapping evidence. This is the project's outcome-level mapping judgement, not external CEFR validation or accreditation. The detailed matrix and overlap decisions are in tracker section 4.
- Strengthened existing pages: A2-02 (past/present routine comparison), A2-13 (relationships and connected descriptions), A2-14 (permission), A2-16 (follow-up questions), and A2-20 (integrated personal/public/work-study tasks).
- Created A2-21 (module 02: home/neighbourhood/local services), A2-22 (module 16: public services/forms/appointments), and A2-23 (module 20: connectors/sequencing). Each has eight authored quiz questions, a 6/8 threshold, a unique completion ID and the existing ss-a2-done storage key. Bumped the service-worker cache to v68 and added all three new pages to precache so previously cached A2 index/pages are refreshed on update.
- Source verification passed for all three new files and their index links. The first browser pass saw deployment delay/old 01–20 index, but a later live check confirmed all three new cards and routes are deployed. Lessons 21–23 each passed 8/8 with visible completion panels and progress-saving messages. See tracker section 18.2.
- A2 closing modules 25–28 remain unbuilt. Preserve A2-08, A2-19 and A2-20; create the four closing activities as distinct pages.


## A2 end-of-level modules 25–28 (24 November 2026)

- Created separate pages: `a2/a2-review.html`, `a2/a2-project.html`, `a2/a2-assessment.html`, `a2/a2-readiness.html`; added four cards to the A2 index and all routes to service-worker precache v69.
- Module 25 cumulative review: 16/16 live, targeted revision links and 12/16 review target.
- Module 26 practical trip project: five written task drafts and five checklist items completed in live browser test; completion status confirmed.
- Module 27 integrated skills: listening 5/5, reading 5/5, writing sample entered, five self-checks marked and local save confirmed. Speaking is self-reviewed, not machine-scored.
- Module 28 readiness: ten can-do checks, personal gap plan and B1 next-step choice saved.
- All four cards and routes were verified live. Offline behaviour, real-device cache refresh, TTS quality, Android/RTL, accessibility and reload persistence remain untested. See tracker section 19.


## Current A2 closing status (24 November 2026)

- Modules 25–28 are now implemented as separate deployed pages and listed in the A2 index. Module 25 passed a live 16/16 review quiz; module 26's five-task project completion was saved; module 27's listening and reading both scored 5/5 and its assessment save completed; module 28's ten can-do items, gap plan and B1 next-step choice were saved.
- Service-worker cache is v69 and includes all four A2 closing pages. Real offline operation remains untested.
- Next priority: verify B1-01 against the approved map, then create B1-02–06 as one coherent batch. Keep broader A2 device/accessibility QA in the roadmap without blocking B1 content planning.


## B1 opening batch 01–06 (24 November 2026)

- B1-01 (narrating past events naturally) source-reviewed and live-tested 8/8 with completion panel.
- Created B1-02–06 as a coherent progression: story cohesion; present perfect vs indefinido experiences; life changes and milestones; developing opinions with reasons; diplomatic agreement/disagreement.
- B1 index displays six lesson cards; B1-02–06 each have eight quiz questions, 6/8 threshold, unique lesson IDs and ss-b1-done progress storage. All 40 answer keys were source-checked.
- Live tests: B1-02 passed 8/8 with completion panel; B1-03–06 headings, eight questions and submit controls verified, but quiz submissions remain untested. Service-worker cache v70 includes B1-02–06.
- Next content batch: B1-07–11. See tracker section 20 and the master map.


## B1 Lessons 07–11 (24 November 2026)

- Created B1-07–11: supporting arguments; clarification/reformulation; future predictions/promises; hypothetical situations/polite requests; plans/intentions/outcomes.
- Each page has eight three-option questions, a 6/8 pass threshold, unique lesson ID and ss-b1-done progress key; all 40 answer keys were source-checked.
- B1 index source includes 11 lesson cards; cache-busting live check confirmed all 11 cards and service-worker v71. The first browser run showed the older six-card cached index, which was resolved by query-string cache-busting verification.
- B1-07 passed live 8/8 with completion panel. B1-08–11 pages, headings, quiz counts and submit controls verified; their quiz submissions remain untested.
- Next batch: B1-12–16 (decisions/advantages/disadvantages, work experience, education/skills, applications/interviews, social issues). See master map and batch plan.
