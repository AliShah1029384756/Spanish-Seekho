# Roadmap

_Last updated: 24 November 2026_

## Implemented learning content (documented snapshot)

- A1: lessons 01–25 + expanded practice (60-item deck).
- A2: lessons 01–20 (Lesson 20 = integrated final practice and self-assessment).
- B1: Lesson 01 (narrating past events naturally; pathway started).
- Spain Life: 6 modules.
- Lesson 25: Education, school and studies (A1).
- A2 lessons 13–20: descriptions, preferences/reasons, plans, travel problems, technology, everyday solutions, grammar review and final checkpoint.

**Product truth:** A1/A2 are expanding starter pathways, not complete CEFR syllabi. B1 has only started.

## Documentation and workflow improvements

- Added `docs/LESSON-PRODUCTION-PLAYBOOK.md`: mission, language policy, lesson blueprint, content quality, shared AI instructions, batch workflow, multi-AI coordination and validation checklist.
- Added `docs/LESSON-BATCH-PLAN.md`: default batch sizes, current starting point, next B1 planning directions and batch completion report.
- Updated `AGENTS.md` to require the new documentation and enforce batch-first lesson production.
- Updated `docs/PROJECT-HANDOFF.md` with the project mission, multi-AI handoff, verified documented course snapshot, and architecture caveats.

These are documentation/process changes. They do **not** implement a JSON lesson engine, automated validation, or automated batch generation.

## Next priorities

0. Inspect current B1 lesson files and generate the next coherent batch after Lesson 01 (normally 5 lessons; 6–8 if scope and output budget permit).
1. Validate lesson content and integration: Spanish accuracy, answer keys, lesson sequence, navigation, progress persistence, mobile layout and Urdu RTL.
2. Evaluate JSON/data-driven rendering only after inspecting the current architecture. If useful, prototype one lesson and test it before considering any migration.
3. Real-device testing (Android, RTL, PWA, offline) in the dedicated final QA phase.

## Product and engineering principles

- Accuracy over volume; practical communication over filler.
- Free core learning, mobile-first, static HTML/CSS/vanilla JS unless a documented decision approves otherwise.
- Do not gate access to later lessons behind quiz completion.
- Preserve learner progress and existing direct lesson links.
- Do not claim features or course completeness without implementation and testing.
