# Spanish Seekho Handoff

_Updated: 24 November 2026_

## Project specification

`docs/PROJECT-SPECIFICATION.md` is the concise source of truth for product scope, functional/non-functional requirements, technical constraints, acceptance gates and multi-AI collaboration. Read it before planning or changing product behaviour. This handoff records the current working state; the specification records what the product is required to be.

## Mission and product direction

**Making Spanish Learning Accessible to Every Pakistani.**

Free, practical, mobile-first Spanish learning for Pakistani learners. Roman Urdu is the default teaching language, with Urdu-script and English support according to the existing interface. Teach contemporary standard Spanish from Spain (Castilian). Pronunciation spellings in Roman Urdu/Urdu are approximations and must be labelled. The product is intended to be genuinely useful, including for learners preparing for life in Spain; it is not merely a vocabulary list or portfolio demo.

## Initial curriculum audit (24 November 2026)

An initial repository inventory and topic-to-curriculum mapping has been completed for A1 lessons 01–25, A2 lessons 01–20 and B1 Lesson 01. See [CURRICULUM-TRACKER.md](CURRICULUM-TRACKER.md) for page-by-page candidate mappings, initial gaps, overlaps, evidence limits and next actions.

Important: the audit confirms files and visible topic/section structures, not full pedagogical or Spanish-language quality. Quiz presence, language-control references and localStorage references were observed in the pages; runtime behaviour, answer-key correctness, CEFR coverage, Urdu RTL, accessibility, mobile and offline behaviour remain unverified. Existing lesson URLs and learner progress must be preserved. Do not treat review/checkpoint pages as completed CEFR end-of-level assessments without review.

## Current documented course state

- A1: lessons 01–25; 60-item practice deck.
- A2: lessons 01–20; Lesson 20 is integrated final practice and self-assessment.
- B1: Lesson 01 available; pathway started, not complete.
- Spain Life: 6 modules.
- Cache noted in the previous handoff: `spanish-seekho-v63`; inspect the current service worker before changing it.

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

Continue B1 after Lesson 01, after verifying the latest repository state and exact file conventions. Build a coherent sequence, not isolated disconnected topics. Candidate directions include connected storytelling, opinions and reasons, experiences and change, plans and possibilities, work/study, social communication, problems/solutions, and integrated practice. Use `docs/LESSON-BATCH-PLAN.md` to select the next batch.

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

1. Inspect B1 Lesson 01 and the current course structure.
2. Plan and generate the next complete B1 batch (normally 5 lessons; up to 6–8 if suitable).
3. Validate Spanish content, Roman Urdu explanations, quizzes, navigation, progress, mobile layout and RTL.
4. Update this handoff and `docs/ROADMAP.md` with actual work and the next range.
5. Schedule deeper Android, RTL, PWA and offline QA as a dedicated QA phase.

## Handoff rule

A new AI must read `AGENTS.md`, this file, `docs/ROADMAP.md`, `docs/LESSON-PRODUCTION-PLAYBOOK.md`, and `docs/LESSON-BATCH-PLAN.md`, then inspect the repository. It should continue from verified code and documentation without asking the owner to repeat known project context.



## Approved 168-module curriculum decision

The owner approved **168 modules across A1–C2, with 28 modules per level**. See [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md) for the complete six-level map, exit outcomes, module blueprint, assessment standard, Spain Life companion pathway and phased implementation plan.

This is Spanish Seekho's own curriculum structure, not a lesson count prescribed by CEFR. Each level contains 24 core teaching modules and four closing modules: cumulative revision, practical project, integrated skills assessment, and readiness checkpoint. The 168 modules are a planned target, not an implemented course. Existing A1 lessons 01–25 and A2 lessons 01–20 must be audited and mapped before changes; preserve direct URLs and progress. B1-01 must be verified before producing B1-02–06. Never claim official CEFR accreditation or certification.

**Next sequence:** baseline audit of existing A1/A2/B1 content, then B1-02–06 as a complete batch, following the master map.
