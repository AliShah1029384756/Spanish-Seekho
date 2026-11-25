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
- B1: Core lessons 01–24 and separate closing modules 25–28 are implemented and have received a consolidated source-level curriculum/language/quiz review. Corrections include unit labels, one translation, Spanish phrasing, Module 27 listening evidence and B1 mobile navigation. The latest B1 content commit was built and deployed successfully in Pages run 45460248990 (run 578); live route/interaction QA remains pending. Earlier live 8/8 evidence is limited to B1-01, B1-02 and B1-07. B2 authoring may proceed in parallel by explicit owner decision dated 25 November 2026; B1 release QA remains pending and is not waived.
- Spain Life: 6 modules.
- Current service-worker cache version: `spanish-seekho-v79` (bumped after the Word Explorer definition-translation source update; runtime behaviour still requires QA); four A1 end-of-level pages, A2 lessons 21–23, A2 end-of-level modules 25–28, and B1 index, lessons 01–24 and closing modules 25–28 are in its precache list. This configures update caching; real offline behaviour remains untested.

A1 and A2 are starter pathways, not claims of complete CEFR syllabi. B1 now has 24 core lessons and four closing activities at source level, but remains source-reviewed rather than release-verified. No official CEFR accreditation or certification is claimed. Inspect current files before assuming this snapshot is still current.

## Recent documented lesson coverage

### A1
- Lesson 25: Education, school and studies — school vocabulary, study verbs, subjects/classes, a short conversation and an 8-question quiz.
- Other A1 lessons 01–24 are recorded in README/course files; inspect them before planning new content.

### A2
- Core lessons 13–23: descriptions; preferences/reasons; plans/arrangements; travel experiences/problems; technology/communication; everyday problems/solutions; grammar review; integrated practice; home/neighbourhood/local services; public services/forms/appointments; connectors and sequencing.
- Separate end-of-level modules 25–28: cumulative review, short-trip project, integrated four-skills assessment and B1 readiness plan.
- Core lesson quizzes use the existing `ss-a2-done` key; end activities use `ss-a2-end-done`. Later lessons remain directly accessible; quiz completion does not gate access.

### B1
- Core Lessons 01–24 cover the six approved units: narratives/experiences; opinions/interaction; future/conditional/plans; work/study/society; causes/negotiation/advice/complaints; subjunctive/relative clauses/reported information/integrated communication.
- Each core lesson has an eight-question quiz, a 6/8 threshold and the preserved `ss-b1-done` key with stable lesson IDs. Lessons remain open in any order.
- Separate closing modules 25–28 provide cumulative review, a practical project, integrated skills practice and a self-directed readiness plan. They use `ss-b1-end-done` and are not official CEFR assessments.

## Current production priority

B1 core lessons 01–24 and closing modules 25–28 have now received a consolidated source-level review and same-pass corrections. The latest B1 content commit has a successful GitHub Pages build/deploy (run 578); the remaining immediate gate is live route/interaction QA for B1-01–28. Browser automation was unavailable because its service wallet balance was negative; do not convert source checks into runtime claims. B1 is not release-verified until live QA is cleared. The owner has separately authorised B2 content authoring to proceed in parallel.

After B1 release verification, continue the selected A1/A2 runtime follow-up and programme-wide Android/mobile, Urdu RTL, keyboard/screen-reader, TTS, reload-persistence and offline checks. The current language preference changes layout direction but does not translate every lesson; full multilingual parity is not claimed.

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

1. Verify the deployed B1 index, 24 lesson routes and four closing-module routes; source-correction Pages run 573 completed successfully.
2. Run live quiz/completion checks across B1 and exercise Modules 25–28 without clearing existing learner progress.
3. Only after B1 release verification, begin B2 mapping against the approved master plan.
4. Continue selected A1/A2 runtime follow-up and programme-wide Android/mobile, Urdu RTL, keyboard/screen-reader, TTS, reload-persistence and offline QA.

## Handoff rule

A new AI must read `AGENTS.md`, this file, `docs/ROADMAP.md`, `docs/LESSON-PRODUCTION-PLAYBOOK.md`, and `docs/LESSON-BATCH-PLAN.md`, then inspect the repository. It should continue from verified code and documentation without asking the owner to repeat known project context.



## Approved 168-module curriculum decision

The owner approved **168 modules across A1–C2, with 28 modules per level**. See [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md) for the complete six-level map, exit outcomes, module blueprint, assessment standard, Spain Life companion pathway and phased implementation plan.

This is Spanish Seekho's own curriculum structure, not a lesson count prescribed by CEFR. Each level contains 24 core teaching modules and four closing modules: cumulative revision, practical project, integrated skills assessment, and readiness checkpoint. The 168 modules are a planned target, not an implemented course. Existing A1 lessons 01–25 and A2 lessons 01–20 must be audited and mapped before changes; preserve direct URLs and progress. B1-01 must be verified before producing B1-02–06. Never claim official CEFR accreditation or certification.

**Next sequence:** B1 owner live/browser QA remains pending and must be recorded separately. B2 authoring is owner-authorised in parallel; the next batch is B2 Lessons 05–08.


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
- B1-12–16 are deployed and were confirmed live: the index showed 16 cards and all five routes loaded with eight quiz questions and submit controls. Their quiz submissions remain untested.


## B1 Lessons 12–16 source implementation (24 November 2026)

- Created B1-12–16 for the approved Unit 3–4 outcomes: decisions/advantages, work experience, education/skills, applications/interviews and social issues.
- Each new page has eight quiz questions, 6/8 threshold, unique lesson ID and ss-b1-done storage. All 40 answer keys passed source-level index validation.
- B1 index source contains cards 01–16 and progress out of 16; service-worker cache v72 precaches all five new pages. The latest GitHub Pages workflow was still pending when the live browser check ran; the public index showed the previous 11 cards and lesson-12 route returned 404. Do not report the new pages as live until a later cache-busting check succeeds.
- Next content batch after deployment: B1-17–21, following the master map.


## B1 Lessons 12–16 deployment confirmation (24 November 2026)

- Cache-busting live browser check confirmed the B1 index displays all 16 lesson cards and direct routes 12–16 load with expected headings, eight quiz questions and submit controls.
- Quiz submissions for B1-12–16 remain untested. See tracker section 22.

## B1 Lessons 17–21 implementation (24 November 2026)

- Created B1-17–21 for the approved Unit 5 and first Unit 6 outcomes: causes/consequences; negotiation; advice/necessity; complaints/service problems; common present subjunctive.
- Added explicit learning objectives, teaching sections, model dialogues, speaking/writing tasks and eight-question quizzes. All 40 answer keys and progress handlers were source-checked; JavaScript syntax compilation passed.
- B1 index source now lists 21 cards and progress out of 21. B1-16 links forward to B1-17. Service-worker cache v73 precaches lessons 17–21.
- A browser check still saw the previous 16-card deployment and 404 routes while the Pages build was completing. GitHub Actions subsequently reported Pages build/deployment run 45426795301 for head commit 36c9bcd52bb7bcdbf95b3f3b237d558599a0ed54 completed successfully. Fresh post-build browser route and quiz checks are still required.
- Next content batch: B1-22–24 (relative clauses, reported information and integrated B1 communication), then distinct closing modules 25–28. Keep broader device/accessibility/offline QA in the roadmap.


## B1 Lessons 22–24 source implementation (24 November 2026)

- Created B1-22 (relative clauses: que, quien, donde and lo que), B1-23 (reported statements and questions, with common tense/time shifts), and B1-24 (integrated B1 storytelling, reasons, negotiation and recommendations).
- Each page includes explicit learning objectives, five teaching sections, Spanish examples with Roman Urdu meanings, model dialogue, a production task and eight three-option quiz questions with explanations.
- All three use the established 6/8 threshold, unique completion IDs lesson-22 through lesson-24 and the existing ss-b1-done storage key. Later lessons remain open regardless of completion.
- Added all three cards to the B1 index; B1-21 now links to B1-22 and new lessons navigate 22→23→24. Corrected the progress display to 24 total lessons (the previous source incorrectly displayed “of 16” despite 21 cards).
- Bumped service-worker cache to v74 and added B1-22–24 to precache. Real offline behaviour is not tested.
- Source files were re-fetched and verified: each new page has eight questions, valid answer indices, the 6/8 threshold, unique completion ID and ss-b1-done handler; the index has 24 sequential cards, the 24/24 progress display and accurate pathway status; navigation and v74 precache entries are correct. The latest Pages workflow run 45429610127 was in progress at the last check. Live browser QA was unavailable because the browser automation service reported an insufficient wallet balance before starting; no live route or quiz success is claimed. The next source check must re-fetch the changed files and inspect the current Pages workflow.
- Next: complete B1 closing modules 25–28 after core review, while keeping B1-17–24 post-build browser checks on the QA backlog.


## B1 closing modules 25–28 source implementation (24 November 2026)

- Added four distinct end-of-level pages following the approved B1 map: `b1/b1-review.html` (25), `b1/b1-project.html` (26), `b1/b1-assessment.html` (27), and `b1/b1-readiness.html` (28).
- Module 25 includes a 16-question cumulative review, answer explanations, targeted lesson links and a saved revision plan. A 12/16 target records completion of this activity only; it is not a proficiency threshold.
- Module 26 is a six-task study/work/relocation scenario project: first contact, clarification questions, problem narration, negotiation, integrated action plan and mediation summary. Drafts autosave locally; completion requires minimum word targets and all six self-checks.
- Module 27 samples listening and reading with five questions each, extended writing, spoken production self-review and mediation. Listening uses device-generated Spanish text-to-speech where available with a transcript fallback. Speech/writing are not machine-scored; saved work is a learning record, not a CEFR grade.
- Module 28 contains 12 can-do self-ratings, strengths/gaps/next steps and a B2 learning-route choice. It does not make an automated B2 placement decision.
- Added all four activities to the B1 index with a separate 0/4 closing-activity progress display. Core progress remains separately measured out of 24. Closing modules use the separate `ss-b1-end-done` key; existing `ss-b1-done` lesson progress is untouched.
- Bumped service-worker cache to v75 and added the four closing routes to precache. This is configuration only; actual offline behaviour is untested.
- Source re-fetch checks passed: review has 16 valid-key questions and 11 distinct repair links; project has six draft fields/checks and autosave; assessment has five listening and five reading questions with valid keys and compiled inline JS; readiness has 12 can-do items and local save; index and service-worker references are present. Inline JS in all four new pages compiled successfully with the source checker.
- GitHub Pages workflow run 45431309579 was pending at the last status check. Browser automation remains unavailable due to insufficient service wallet balance; no live route, audio, quiz interaction or mobile test is claimed.
- Next: inspect the latest Pages workflow, perform post-build browser checks for B1-17–28 when browser automation is available, then complete the B1 curriculum/language review before starting B2.


## B1 full curriculum review and same-pass fixes (24 November 2026)

- Completed a source-level review of B1 Lessons 01–24 against all six approved units, including grammar, Castilian usage, translations, register, dialogues, progression, overlap and production tasks. Reviewed all 192 core quiz items and their answer keys; every core lesson retains eight questions, the 6/8 threshold, unique existing lesson ID and `ss-b1-done` progress key.
- Reviewed closing modules 25–28 and their separate `ss-b1-end-done` tracking. Module 25 has 16 cumulative questions and repair links; Module 26 has six project tasks; Module 27 has five listening and five reading questions plus writing/speaking self-review and mediation; Module 28 has 12 self-ratings and a personal plan. None is an official CEFR grade.
- Fixed incorrect unit labels in Lessons 02–16, the Lesson 09 translation, an English typo in Lesson 18, an unnatural Lesson 21 phrase, three mixed-language Lesson 22 prompts and missing evidence in the Module 27 listening transcript.
- Replaced repeated production prompts in Lessons 17–24 with distinct guided practice and kept Part 7 as independent production; aligned the Lesson 23 reported-speech example with its Roman Urdu meaning.
- Fixed the shared B1 mobile-nav practice link and added `lang="es"` to Spanish `.es` elements. Preserved lesson URLs, IDs and progress keys. Service-worker cache is `spanish-seekho-v78` and precaches all B1 routes.
- Source scripts and quiz-index structures compile/check successfully. The latest B1 content commit `2705fab84ccabe9d71979f3437313cd775d4f789` was built and deployed successfully by Pages run 45460248990 (run 578), with build, deploy and status-report jobs successful. Browser automation could not start because the service wallet was negative, so live route, interaction, mobile, TTS and offline checks remain pending.
- B1 is source-reviewed but not release-verified. B2 authoring is now owner-authorised in parallel; B1 route/interaction QA remains pending.


## B1 live QA handoff — owner testing pending (25 November 2026)

- The owner has explicitly asked that assistant-run browser testing stop. Do not attempt further browser automation or spend on the browser service for this QA pass.
- Browser automation did not start: the service reported a negative wallet balance (-$0.24). Therefore no assistant-run live browser checks were performed in this pass.
- GitHub Pages workflow run 45461408731 (run 583), for documentation commit `bf805171fc83212c78edf25e270ea2a6bcd24cc6`, is now confirmed `completed / success`. This confirms the Pages workflow completed; it does not confirm every public route or interaction.
- **Human/browser QA remains pending and is assigned to the project owner.** Please test the B1 index, all 24 lesson routes, closing modules 25–28, quiz submissions/completion, progress persistence after reload, project/assessment/readiness interactions, speech playback and transcript fallback, mobile layout/navigation, Urdu RTL, keyboard/accessibility basics, and offline/service-worker behaviour.
- Record actual results and reproducible defects in the QA section of `docs/CURRICULUM-TRACKER.md`. Do not mark any untested item as passed. B1 remains source-reviewed and deployed, but not release-verified. B2 authoring is owner-authorised in parallel; the B1 QA checklist remains pending.


## Documentation deployment confirmation — 25 November 2026

GitHub Pages workflow run **#587** (`45530273768`) for commit `b3f478aa4945ab7bbfc647e7f3c7847a32942114` is now **completed / success**. This confirms the documentation commit passed through the Pages deployment workflow. It does **not** replace owner-run live QA or verify individual routes, interactions, audio, persistence, mobile layout, accessibility, or offline behaviour. B1 remains **source-reviewed and deployed, but not release-verified**. The owner QA checklist remains pending in `docs/CURRICULUM-TRACKER.md` section 28; B2 authoring may continue in parallel by owner decision; B1 QA and any resulting fixes must still be recorded before B1 is called release-verified.


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

## 25 November 2026 — B2 homepage discovery and directory integration

A source audit found that the homepage lesson directory still exposed only B2 Lessons 01–04 even though `b2/index.html` and the service worker already contained Lessons 01–12. Updated the homepage directory to list all 12 available B2 lessons with direct routes, and advanced the service-worker cache to `spanish-seekho-v83` so clients can refresh the updated homepage shell. Source checks confirmed 12 unique homepage lesson links, 12 B2 index lesson links, all 12 lesson files exist, and the service worker precaches Lessons 01–12. This is a repository/source integration fix only; GitHub Pages publication and live/browser behaviour have not been independently verified. B1 owner QA remains pending.


## 25 November 2026 — B2 Lessons 13–16 deployed

Added B2 Unit 04, Professional and academic communication, with Lessons 13–16: meetings/presentations/collaboration; reports/proposals/formal correspondence; academic discussion/source-based writing; and workplace conflict/feedback/negotiation. Each page has three learning outcomes, six teaching sections with two Spain-Spanish examples and English translations per section, 12 existing `data-say` audio controls, a speaking/writing production task, and an eight-question checkpoint. The pass threshold remains 6/8 and completion uses the existing `ss-b2-done` key; lessons remain unlocked.

Integrated the four routes into the B2 index and homepage directory; updated B2 progress from 12 to 16 available lessons; advanced the service-worker cache to `spanish-seekho-v84` and added Lessons 13–16 to precache. Source checks confirmed all four files, 12 audio controls and eight quiz items per lesson, 16 unique B2 lesson routes in the homepage directory, 16 lesson routes in the B2 index, and 16 B2 lesson precache entries. A formal-register wording refinement was applied to Lesson 14 after source review.

This is source-level validation plus GitHub Pages workflow verification only. No browser or live visual/interaction testing was performed; route loading, quiz interaction, local progress persistence, speech playback, mobile/RTL, accessibility and offline behaviour remain unverified. B1 owner QA remains pending and is not waived. Next B2 authoring range: Lessons 17–20, subject to the approved curriculum map and overlap review.