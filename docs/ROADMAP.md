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



## Approved 168-module curriculum target

The owner approved a complete **168-module A1–C2 curriculum: 28 modules per level**. The authoritative level outcomes, full module sequence, assessment standard and phased implementation are in [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md).

The 168 count is Spanish Seekho's design choice, not a CEFR requirement. Each level has 24 core teaching modules and four closing modules (revision, practical project, integrated assessment, readiness checkpoint). This is a plan, not implemented content. Do not claim full CEFR alignment, accreditation or certification without the documented review and evidence.

### Immediate sequence
1. Audit existing A1 01–25, A2 01–20 and B1-01 against the master map. Mark Existing / Needs revision / Partial / Gap / Planned.
2. Preserve existing lesson URLs and local progress; do not renumber blindly.
3. Verify B1-01, then create B1-02–06 as a coherent five-lesson batch.
4. Update the master-plan status, handoff and roadmap after verified implementation.
5. Continue B1 before proceeding to B2, then C1 and C2 in order.
