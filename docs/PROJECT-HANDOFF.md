# Spanish Seekho Handoff

_Updated: 24 November 2026_

## Project specification

`docs/PROJECT-SPECIFICATION.md` is the concise source of truth for product scope, functional/non-functional requirements, technical constraints, acceptance gates and multi-AI collaboration. Read it before planning or changing product behaviour. This handoff records the current working state; the specification records what the product is required to be.

## Mission and product direction

**Making Spanish Learning Accessible to Every Pakistani.**

Free, practical, mobile-first Spanish learning for Pakistani learners. Roman Urdu is the default teaching language, with Urdu-script and English support according to the existing interface. Teach contemporary standard Spanish from Spain (Castilian). Pronunciation spellings in Roman Urdu/Urdu are approximations and must be labelled. The product is intended to be genuinely useful, including for learners preparing for life in Spain; it is not merely a vocabulary list or portfolio demo.

## Initial curriculum audit (24 November 2026)

An initial repository inventory and topic-to-curriculum mapping has been completed for A1 lessons 01–25, A2 lessons 01–20 and B1 Lesson 01. See [CURRICULUM-TRACKER.md](CURRICULUM-TRACKER.md) for page-by-page candidate mappings, initial gaps, overlaps, evidence limits and next actions.

Detailed review updates (24 November 2026): A1 Lessons 01–20 have now had visible content, examples, quiz answer keys and source-level completion logic reviewed. The combined workflow is in use: review, implement verified small fixes/optimizations in the same pass, re-fetch and verify, then record findings. Targeted changes have been applied to A1-01, A1-02, A1-05, A1-06, A1-08, A1-14, A1-15, A1-16 and A1-19; URLs, lesson IDs, completion thresholds and progress-storage keys were preserved. A1-08 remains a starter checkpoint, not a full CEFR A1 assessment. A1-15's weekday for 18 November 2026 was corrected to Wednesday. A1-19's available lesson count was corrected to 01–20. The detailed source review of A1 Lessons 21–25 is complete. A2 Lessons 01–15 have now received detailed source review of grammar, examples, translations, pronunciation aids, quiz keys and completion logic. A2-11 received a size/age nuance for mayor/menor; A2-13 now distinguishes antiguo/a from histórico/a. A2-12, A2-14 and A2-15 required no verified factual or answer-key correction. All five preserve their original URLs, eight-question quizzes, 6/8 thresholds, lesson IDs and ss-a2-done key. The tracker records module mapping and remaining gaps. A limited live browser smoke test confirmed A2-11, A2-12 and A2-13 each scored 8/8 and displayed completion; the two revised vocabulary notes were visible on the deployed site. A2-14 and A2-15 were confirmed in the index but not interaction-tested due to browser execution budget. See tracker section 17.1. A2-06 to A2-09 needed no verified content or answer-key corrections. A2-08 was confirmed as an interim starter checkpoint, not the approved end-of-level module 25. A2-10 received a regional-usage nuance for the present perfect and a more directly matched reply in the Madrid dialogue. All five retain their original URLs, quiz thresholds, lesson IDs and `ss-a2-done` progress key. A limited live smoke test confirmed A2-06's 6/6 quiz result. A2-07's result message was not visible in the browser run even though its source handler and result element are present; this remains an unresolved runtime observation, not a confirmed code defect. A2-08–10 were not interaction-tested in that run. Mapping refinements and limits are recorded in the curriculum tracker. A2-01 received one clarification: *hablamos* is identical in present and preterite, distinguished by context/time expressions. A2-02 to A2-05 had no verified content or answer-key error requiring a code edit. All five retain their six-question quizzes, 4/6 thresholds, lesson IDs and `ss-a2-done` progress key. Mapping refinements and limitations are recorded in the curriculum tracker. Targeted optimizations were applied to A1-21, A1-22 and A1-23; all five lesson quizzes and completion logic were checked, with existing 8-question sets, 6/8 thresholds, IDs and storage keys preserved. The four approved A1 closing activities are now implemented as separate pages: a1-review.html (module 25), a1-project.html (26), a1-assessment.html (27), and a1-readiness.html (28). The existing lesson-25.html (Education, school and studies) was preserved as a core lesson mapped to module 20; no public lesson URL or existing learner progress was overwritten. The A1 index now lists the four end-of-level activities separately and tracks them under ss-a1-end-done; the service-worker cache was updated to v67. All new files, index links and cache entries were fetched and source-verified. A limited live GitHub Pages smoke test confirmed the A1 index and all four new routes are deployed. Module 25 rendered and all 12 answer choices were selected, but final quiz submission/result was not verified. Module 26's five task checkboxes and completion-button interaction were exercised. Module 27 rendered but its full completion flow was not tested; module 28 was confirmed via index navigation only. No visible errors were reported. Browser TTS output, reload persistence, keyboard/accessibility, Android/RTL and offline behaviour remain unverified.

Important: the audit confirms files and visible topic/section structures, not full pedagogical or Spanish-language quality. Quiz presence, language-control references and localStorage references were observed in the pages; runtime behaviour, answer-key correctness, CEFR coverage, Urdu RTL, accessibility, mobile and offline behaviour remain unverified. Existing lesson URLs and learner progress must be preserved. Do not treat review/checkpoint pages as completed CEFR end-of-level assessments without review.

## Current documented course state

- A1: core lessons 01–25; separate end-of-level activities 25–28 now implemented; 60-item practice deck. These are source-verified additions, not yet browser/device QA approved.
- A2: lessons 01–20; Lesson 20 is integrated final practice and self-assessment.
- B1: Lesson 01 available; pathway started, not complete.
- Spain Life: 6 modules.
- Current service-worker cache version: `spanish-seekho-v67`; four A1 end-of-level pages are in its precache list. Real offline behaviour remains untested.

A1 and A2 are starter pathways, not claims of complete CEFR syllabi. B1 is only beginning. Inspect current files before assuming this snapshot is still current.

## Recent documented lesson coverage

### A1
- Lesson 25: Education, school and studies — school vocabulary, study verbs, subjects/classes, a short conversation and an 8-question quiz.
- Other A1 lessons 01–24 are recorded in README/course files; inspect them before planning new content.

### A2
- Lessons 13–20: descriptions; preferences/reasons; plans/arrangements; travel experiences/problems; technology/communication; everyday problems/solutions; grammar and communication review; integrated final practice/checkpoint.
- Each new A2 lesson in the previous handoff includes an 8-question quiz. 6/8 saves progress under `ss-a2-done`. Later lessons remain directly accessible; quiz completion does not gate access.

### B1
- Lesson 01: narrating past events naturally; contrast indefinido and imperfecto, scene-setting, interruptions, sequence connectors, a practical Málaga story, speaking and 100–120-word writing prompts.
- Includes an 8-question quiz; 6/8 saves progress under `ss-b1-done`. Lesson access is open; completion does not gate later lessons.

## Current production priority

Continue the detailed content and curriculum mapping audit for **A2 Lessons 16–20**, applying the combined review-and-fix workflow. Include A2-07 result display in the dedicated browser QA list and verify A2-11–15 interactions in the broader browser pass. Then verify B1-01 and produce B1-02–06 as a coherent batch. A1's four closing activities are implemented at source level; schedule browser/device, keyboard, RTL and offline QA before making runtime claims.

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
