# Spanish Seekho Handoff

_Updated: 26 November 2026_

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

## 25 November 2026 — B2 Lessons 17–20 integrated

Added Unit 05, Media, society and contemporary issues: Lesson 17 understanding news/interviews/public debate; Lesson 18 social change, technology and ethical questions; Lesson 19 culture, identity and intercultural perspectives; Lesson 20 summarising and comparing multiple sources. Each page includes three learning outcomes, six teaching sections with two contemporary Spain-Spanish examples and English translations each, 12 `data-say` controls, an integrated speaking/writing task, and eight quiz questions with explanations. Existing 6/8 pass threshold, `ss-b2-done` progress key and open lesson access are preserved.

Integrated Unit 05 into `b2/index.html`; corrected its progress label to 20 available lessons and latest-lesson link to Lesson 20. Added direct homepage links to Lessons 17–20 and updated B2 availability copy. Service-worker cache advanced to `spanish-seekho-v85`, precaching B2 Lessons 01–20. Also connected the end-of-unit navigation on Lessons 04, 08, 12 and 16 to the next now-available lesson.

Source validation confirmed all four new files, three outcomes, six teaching sections, 12 audio controls, eight valid quiz items, parseable inline JavaScript, 20 unique direct B2 homepage routes, 20 B2 index routes, progress denominator 20, and 20 B2 precache entries. This is source-level validation; no browser/live visual or interaction QA was performed. Route loading, quiz interaction, persistence, TTS, mobile/RTL, accessibility and offline behaviour remain unverified. B1 owner QA remains pending and is not waived. Next B2 range: Lessons 21–24, Unit 06 — precision and flexible interaction.

## 25 November 2026 — B2 Lessons 21–24 implemented and integrated

Unit 06, Precision and flexible interaction, now contains Lesson 21 register/tone/politeness/pragmatics; Lesson 22 idiomatic language, collocations and lexical patterns; Lesson 23 managing misunderstandings and difficult conversations; and Lesson 24 integrated B2 communication through argument, source synthesis and negotiation. Each lesson includes three measurable outcomes, six teaching sections with 12 Spain-Spanish examples and English translations/audio controls, an integrated production task, and eight explained quiz questions. Existing `ss-b2-done` progress storage, stable lesson IDs, 6/8 pass threshold and open lesson access are preserved.

Integrated all four routes into the B2 index and homepage directory; updated progress denominator to 24, latest-lesson navigation to Lesson 24, and service-worker cache to `spanish-seekho-v91` with B2 Lessons 01–24 precached. Lesson 20 now links forward to Lesson 21; Unit 06 Lesson 24 returns to the B2 overview.

Source validation: check lesson structure, examples/audio counts, quiz counts and answer indices, inline JavaScript syntax, progress key/threshold, navigation, 24 unique homepage/index links and 24 B2 precache entries. Browser/live visual and interaction QA was not performed; route rendering, quiz submission, persistence, TTS, mobile/RTL, accessibility and offline behaviour remain unverified. B1 owner QA remains pending and is not waived. Next planned B2 modules: 25–28, the separate cumulative review, practical project, integrated skills assessment and C1 readiness checkpoint. No official CEFR qualification or accreditation is claimed.


## 25 November 2026 — B2 end-of-level modules 25–28 implemented

Created four separate closing activities: `b2/b2-review.html` (25, 16-question cumulative review with lesson-linked repair suggestions and a saved revision plan); `b2/b2-project.html` (26, six-task proposal project with local autosave and minimum completion checks); `b2/b2-assessment.html` (27, listening with device TTS and transcript fallback, five-question listening and reading checks, extended writing, speaking and mediation self-review); and `b2/b2-readiness.html` (28, 12 B2 can-do statements, gap plan and C1 next-step choice). Closing-module completion uses the new `ss-b2-end-done` key; existing core lesson progress `ss-b2-done` is unchanged. All pages remain open without prerequisite locks.

Integrated all four modules into the B2 index, updated the index progress display to include 24 core lessons plus four closing activities, updated the homepage pathway summary and advanced the service-worker cache to `spanish-seekho-v92` with all four new routes precached. Source-level checks only; no browser/live route, interaction, persistence, TTS, mobile, accessibility, RTL or offline testing was performed. B2 remains in development and is not an official CEFR qualification. B1 owner-run QA remains pending and is not waived. Next phase: consolidate B2 curriculum/source review and prepare C1 mapping only after the B2 review gate is defined.


## 25 November 2026 — B2 source quality review

Completed a repository/source review of B2 Lessons 01–24 and closing modules 25–28. All 24 core lesson files contain eight-question quiz arrays, retain the existing `ss-b2-done` progress key and 6/8 threshold, and have sequential previous navigation (Lesson 01 returns to B1). Lessons 03–24 contain 12 audio controls each; Lessons 01–02 contain 11. The four closing activities use the separate `ss-b2-end-done` key and their navigation sequence 25 → 26 → 27 → 28 is corrected. The review sampled Spanish examples across grammar, register, collocations, interaction and source synthesis; this is not a full professional language edit.

Created `docs/B2-QUALITY-REVIEW.md` with source checks, CEFR Companion Volume reference points, identified gaps (especially explicit online interaction and a clearer human pronunciation/speaking rubric), corrected issues and owner-run QA checklist. The six B2 unit badges now read AVAILABLE and index bottom navigation points to Module 28. No browser/device QA was performed; live route rendering, interactions, autosave, TTS, mobile, RTL, accessibility and offline behaviour remain pending. GitHub Pages run #768 successfully deployed the prior content/docs batch; the newer index badge/navigation correction and quality-review documentation are awaiting the latest Pages workflow. No official CEFR accreditation or validation claim is made.


## 25 November 2026 — B2 quality-refinement follow-up

Added a twelfth Spanish example/audio control to Lessons 01 and 02 so all 24 core lessons now follow the same 12-example pattern. Expanded Module 27 with an asynchronous online discussion sequence (initial post, response, revised recommendation), interaction self-checks, and a four-dimension speaking/pronunciation rubric. Drafts, ratings and reflection notes save locally; the page does not record or automatically score speech. Updated the service-worker cache to `spanish-seekho-v93`. Source-level checks were performed; browser, mobile, TTS, offline and accessibility QA remain outstanding. Run #772 successfully deployed the preceding index correction; the current v93 batch requires its own successful Pages workflow before it is described as live.


## 26 November 2026 — C1 opening batch implemented; owner QA pending

C1 Lessons 01–04 (Unit 01: Precision, nuance and discourse) are authored: stance/certainty/distance/nuance; cohesion/information structure/connectors; emphasis/focus/word order/rhetorical effect; complex spoken discourse/extended explanations. Each page includes three outcomes, six teaching sections, 12 Spain-Spanish examples with English translations and speech buttons, an independent production task, and an eight-question checkpoint with explanations. A 6/8 pass threshold saves completion under the new ss-c1-done key; all lessons remain open. Existing level progress keys and routes are preserved.

Created c1/index.html, integrated the C1 homepage pathway, and advanced the service-worker cache to spanish-seekho-v94 with the C1 index and four lesson routes precached. C1 Lessons 05–28 remain planned, not implemented.

Source checks: four lesson files and index exist; each lesson has six sections, 12 Spanish examples/audio controls, eight quiz items and explanations; routes are linked from the C1 index; previous/next navigation is contiguous; progress key and 6/8 threshold are consistent; homepage route and service-worker entries are present. Browser/live rendering, quiz interaction, reload persistence, TTS, mobile layout, Urdu RTL/mixed direction, keyboard/accessibility and offline behaviour were not tested. **Owner QA is pending until the owner tests all four routes and reports evidence.**

- B1: owner-run live/browser/device QA pending; not release-verified.
- B2: owner-run live/browser/device QA pending; not release-verified.
- C1: opening batch source-integrated; owner-run live/browser/device QA pending.
- Programme-wide Android/mobile, TTS, Urdu RTL, keyboard/accessibility, persistence and offline/PWA QA remain pending.

No formal CEFR validation, accreditation or certification is claimed.

## 26 November 2026 — C1 Lessons 05–08 implemented; owner QA pending

Authored C1 Unit 02 Lessons 05–08: advanced presentations and audience adaptation; academic argument, critical response and discussion; research summaries, reports and formal proposals; professional negotiation, leadership and mediation. Each page includes three learning outcomes, six teaching sections, 12 Spain-Spanish model sentences with English translations and speech controls, an independent production task, and an eight-question checkpoint with explanations. A 6/8 pass records completion under `ss-c1-done`; lessons remain open.

Integrated the four routes into the C1 index, expanded its progress denominator to eight available lessons, updated the homepage pathway, and advanced the service-worker cache to `spanish-seekho-v95` with all four new lesson routes precached. C1 Lessons 09–28 remain planned, not authored.

Source-level verification and live/browser QA are distinct. Browser rendering, quiz interaction, reload persistence, TTS, mobile layout, Urdu RTL/mixed direction, keyboard/accessibility and offline behaviour remain pending owner testing. No formal CEFR validation or accreditation is claimed.


## 26 November 2026 — C1 owner browser QA fixes

Reviewed the owner-provided desktop/mobile browser QA report for C1 Lessons 01–08. The report confirmed core lesson rendering, six teaching sections, 12 Spanish examples, eight-question quizzes, 6/8 completion logic, local progress persistence, es-ES speech, mobile portrait layout and basic navigation. Landscape, full offline simulation, pure Urdu RTL and screen-reader testing remain incomplete or partial.

The current repository source already lists C1 Lessons 01–08 on the C1 index and describes eight available lessons on the homepage; the reported “first four” display is therefore treated as a possible stale deployed page/service-worker cache and should be rechecked after the new cache activates. Fixed the C1 index progress label from a stale four-lesson denominator to eight. Removed Lesson 08’s link to the not-yet-authored Lesson 09 and replaced it with a “coming soon” notice. Added descriptive screen-reader labels to all 96 Listen buttons across C1 Lessons 01–08. Advanced the service-worker cache to `spanish-seekho-v96` so updated routes/assets are fetched.

Source verification confirms the eight lesson routes are indexed, the progress label uses eight, Lesson 08 no longer links to Lesson 09, all 96 C1 audio controls have labels, and the service worker declares v96. These source checks do not replace a fresh browser test after deployment. Homepage source already states eight C1 lessons; no unnecessary homepage content edit was made. The owner should recheck the C1 index and homepage in a fresh session after deployment. Remaining QA: landscape, full offline simulation, pure Urdu RTL, screen-reader testing, and final owner recheck of the deployed index/cache.


## 26 November 2026 — C1 Unit 03 Lessons 09–12 authored in parallel

At the owner's explicit request, continued authoring while the prior deployment workflow was still pending. Created `c1/lesson-09.html` through `c1/lesson-12.html` for Unit 03 — Critical reading and listening: implicit meaning/assumptions/bias; evaluating complex arguments/evidence; interpreting interviews, lectures and specialised talks; synthesising long and contrasting sources. Each page contains three outcomes, six teaching sections, 12 Spain-Spanish examples with English translations and accessible Listen controls, an independent production task, and an eight-question explained quiz. A score of 6/8 records completion under the existing `ss-c1-done` key; all lessons remain open.

Integrated Lessons 09–12 into `c1/index.html`, changed C1 progress to 12 available lessons, updated the homepage C1 pathway summary, and advanced the service-worker cache to `spanish-seekho-v97` with all four routes precached. Updated ROADMAP, CURRICULUM-TRACKER, LESSON-BATCH-PLAN and C1-SCOPE-MAP-DRAFT. Source checks confirm each new page has six teaching sections, 12 accessible audio controls, eight quiz items with valid answer indices, the shared progress key and 6/8 threshold; the index lists 09–12 and denominator 12; homepage says twelve; service worker precaches the new pages.

This is source-level verification only. Browser/device testing, offline testing, and live Pages deployment verification remain pending. The previous owner report's incomplete landscape, full offline, Urdu RTL and screen-reader checks remain open. B1/B2 QA and qualified Spanish-language review are not waived. Next planned batch: C1 Lessons 13–16, Unit 04 — Style, register and language choice.


## 26 November 2026 — C1 Unit 04 Lessons 13–16 authored in parallel

At the owner's request, continued authoring while the previous Pages deployment proceeded independently. Added Unit 04 — Style, register and language choice: Lesson 13 formal/neutral/informal/specialised registers; Lesson 14 idioms, collocations, connotation and lexical precision; Lesson 15 politeness, irony, humour and indirect communication; Lesson 16 regional variation in Spain and the wider Spanish-speaking world. Each lesson contains three learning outcomes, six teaching sections, 12 Spanish examples with English translations and labelled Listen controls, an independent production task, and eight explained quiz questions. Completion retains the existing `ss-c1-done` key and 6/8 threshold; no lesson locks were introduced.

Integrated all four routes into the C1 index, updated the progress denominator to 16, updated the homepage pathway summary, and advanced the service-worker cache to `spanish-seekho-v98` with Lessons 13–16 precached. Source checks confirm the new routes, six teaching sections, 12 audio controls, eight quiz items, progress key, answer indices and contiguous lesson navigation. Browser/device QA and successful Pages deployment are separate and remain unclaimed. Qualified Spanish-language review remains outstanding. Next range: C1 Lessons 17–20, Unit 05 — Complex grammar and expression.


## 26 November 2026 — C1 Unit 05 Lessons 17–20 authored and integrated

At the owner's request, continued authoring in parallel with the independent Pages workflow. Added Unit 05 — Complex grammar and expression: Lesson 17 advanced mood and tense choices in discourse; Lesson 18 complex clause structures and stylistic compression; Lesson 19 impersonal, passive and distancing strategies; Lesson 20 reformulation, qualification and rhetorical subtlety. Each page contains three learning outcomes, six teaching sections, 12 Spanish examples with English translations and labelled Listen controls, an independent production task, and eight explained quiz questions. Completion retains `ss-c1-done` and the 6/8 checkpoint; lessons remain open.

Integrated Lessons 17–20 into the C1 index, corrected the progress denominator from the stale eight-lesson value to 20, added Unit 05, updated the homepage pathway summary, and advanced service-worker cache to `spanish-seekho-v99` with the four new lesson routes precached. Source checks and browser/runtime QA are distinct; do not claim live deployment or device testing from source checks. Qualified Spanish-language review and existing C1/B1/B2 owner QA remain pending. Next batch: C1 Lessons 21–24, Unit 06 — High-level interaction and mediation.


## 26 November 2026 — C1 Unit 05 Lessons 17–20 authored and integrated

At the owner's request, continued authoring in parallel with the independent Pages workflow. Added Unit 05 — Complex grammar and expression: Lesson 17 advanced mood and tense choices in discourse; Lesson 18 complex clause structures and stylistic compression; Lesson 19 impersonal, passive and distancing strategies; Lesson 20 reformulation, qualification and rhetorical subtlety. Each page contains three learning outcomes, six teaching sections, 12 Spanish examples with English translations and labelled Listen controls, an independent production task, and eight explained quiz questions. Completion retains `ss-c1-done` and the 6/8 checkpoint; lessons remain open.

Integrated Lessons 17–20 into the C1 index, corrected the progress denominator from the stale eight-lesson value to 20, added Unit 05, updated the homepage pathway summary, and advanced service-worker cache to `spanish-seekho-v99` with the four new lesson routes precached. Source checks and browser/runtime QA are distinct; do not claim live deployment or device testing from source checks. Qualified Spanish-language review and existing C1/B1/B2 owner QA remain pending. Next batch: C1 Lessons 21–24, Unit 06 — High-level interaction and mediation.


## 26 November 2026 — C1 Lessons 21–24 implemented; owner QA pending

Completed Unit 06 — High-level interaction and mediation: Lesson 21 chairing and facilitating complex discussion; Lesson 22 explaining specialised concepts to different audiences; Lesson 23 resolving intercultural misunderstandings; Lesson 24 integrated C1 communication through analysis, synthesis and persuasion. Each lesson contains three learning outcomes, six teaching sections, 12 Spanish examples with English translations and labelled Listen controls, an independent production task, and eight explained quiz questions. Completion retains `ss-c1-done` and the 6/8 checkpoint; lessons remain open.

Integrated Lessons 21–24 into the C1 index, corrected the progress denominator to 24, removed a duplicated Unit 05 block found during source review, updated homepage C1 availability, and advanced the service-worker cache to `spanish-seekho-v100` with Lessons 21–24 precached. Source validation is not browser/device QA; owner testing, qualified Spanish-language review, Urdu RTL, accessibility and offline/PWA checks remain pending. C1 core Lessons 01–24 are now authored; closing modules 25–28 remain planned.


## 26 November 2026 — C1 closing modules 25–28 implemented; owner QA pending

Created four separate C1 end-of-level activities: `c1/c1-review.html` (Module 25, comprehensive six-unit review and gap-repair plan); `c1/c1-project.html` (Module 26, evidence-based practical communication project with audience adaptation, presentation, negotiation and decision notes); `c1/c1-assessment.html` (Module 27, structured self-assessment across reading, listening, writing, speaking and mediation); and `c1/c1-readiness.html` (Module 28, C2 readiness reflection and an eight-week next-stage learning plan). Each module includes three outcomes, six instructional sections, 12 Spain-Spanish model sentences with English translations and labelled speech controls, a capstone task, and an eight-question explained checkpoint. Closing-module completion uses the separate `ss-c1-end-done` key; core lesson progress `ss-c1-done` is unchanged. All activities remain open.

Integrated the four modules into the C1 index and homepage pathway, corrected the stale core-progress label to 24 core lessons, and advanced service-worker cache to `spanish-seekho-v101` with all four closing routes precached. C1 now has 24 core lessons plus four closing modules. Source validation is separate from browser/device QA; owner testing, qualified Spanish-language review, accessibility, Urdu RTL and offline/PWA checks remain pending. No formal CEFR assessment, certification or C2 readiness determination is claimed.


## 26 November 2026 — C1 release handoff

C1 now has 24 core lessons across six units plus four separate closing modules (review, practical project, integrated self-assessment and C2 readiness plan). All 28 source files were fetched and structurally checked. Core lessons use `ss-c1-done`; closing modules use `ss-c1-end-done`; progress counters remain separate. Every C1 lesson and closing module has 12 labelled Spanish speech controls, a quiz/result flow and a 6/8 completion threshold. The C1 index links all 28 activities and labels the pathway as available with QA pending. Service-worker v101 includes the C1 index and all 28 activity routes in its precache list.

Latest Pages workflow for the closing-module integration was still pending during this handoff update. Confirm the workflow for the latest commit before describing the four closing modules as live. Owner browser/device QA remains pending for C1 Lessons 09–28; the earlier owner report covers Lessons 01–08 only. Programme-wide QA still needs mobile/landscape, Urdu RTL and mixed-direction text, TTS availability/fallback, keyboard and screen-reader checks, persistence and offline/PWA testing. Qualified Spanish-language review remains outstanding. Do not claim official CEFR accreditation, certification or automatic C2 readiness.


## 26 November 2026 — C1 deployment confirmed; C2 opening batch

Correction to the earlier C1 handoff note: GitHub Actions run #897 completed successfully for commit `0a92e001c018a16e268398a408554153aa3c96d8`. The C1 closing modules and subsequent index/documentation status correction are deployed. Owner browser/device QA and qualified Spanish-language review remain pending.

C2 Unit 01 Lessons 01–04 are now implemented: precision, ambiguity and subtle distinctions; implication, inference, presupposition and allusion; idiom, metaphor, humour and wordplay; adapting voice, style and rhetorical impact. The new `c2/index.html` lists the first four lessons. Each lesson has three learning outcomes, six teaching sections, 12 Spanish model sentences with English translations and labelled speech controls, an independent production task, and eight explained checkpoint questions with a 6/8 course-completion threshold. Progress uses the new `ss-c2-done` key. The C2 index tracks the four currently available core lessons; all remain open.

Homepage navigation now includes C2. Service-worker cache is `spanish-seekho-v102` and precaches the C2 index and Lessons 01–04. Source checks confirmed all five routes, 12 labelled speech controls per lesson, eight questions per quiz, valid answer indices and explanations, JavaScript syntax, progress key and threshold. These are source checks, not browser/device QA. C2 Lessons 05–28 remain planned; C2 is not a completed pathway or an official proficiency certification.


## 26 November 2026 — C2 Unit 02 batch integrated

C2 Lessons 05–08 are now implemented: synthesising multiple long spoken and written sources; reconstructing arguments and identifying hidden assumptions; evaluating specialised and unfamiliar material; producing concise, faithful and nuanced summaries. The C2 index now lists Lessons 01–08 across Units 01–02 and tracks progress against eight available core lessons. Homepage availability text is updated. Service-worker cache v103 precaches the C2 index and Lessons 01–08.

Source checks on Lessons 05–08 confirmed nine page sections, 12 labelled pronunciation controls, eight explained quiz questions with valid answer indices, inline JavaScript syntax, the `ss-c2-done` progress key and the 6/8 completion threshold. These checks do not establish runtime/browser behaviour, Spanish expert review, mobile/RTL/accessibility or offline QA. Next batch: C2 Lessons 09–12 (Rhetoric and advanced production).
