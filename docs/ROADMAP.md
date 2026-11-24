# Roadmap

_Last updated: 24 November 2026_

## Implemented learning content (documented snapshot)

- A1: core lessons 01–25 + expanded practice (60-item deck) + separate end-of-level modules 25–28 (cumulative review, practical project, integrated skills practice, readiness plan).
- A2: core lessons 01–23 plus separate end-of-level modules 25–28. All 24 core outcomes have strong internal mapping evidence; this is not official CEFR certification.
- B1: Lesson 01 (narrating past events naturally; pathway started).
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

1. **B1-01 verification, then B1-02–06:** compare B1-01 with the approved B1 opening outcome, inspect its implementation conventions and progression, then produce B1-02–06 as one coherent five-lesson batch. B1-02 should deepen narrative cohesion rather than repeat the opening tense contrast.
2. **Selected A2 runtime follow-up:** test A2-07 result display and A2-14/15 plus A2-17–20 quiz submissions. A2-16 and A2-21–23 have confirmed live completion flows; A2-25–28 closing activities have received primary interaction smoke tests.
3. **Cross-course device/accessibility QA:** test Android/mobile layout, Urdu RTL, keyboard/focus, screen-reader labels, TTS availability, reload persistence and actual offline/PWA behaviour. The service-worker cache is v69 and includes A2 core lessons 21–23 and closing modules 25–28; offline behaviour is still unverified.
4. **A1 end-of-level follow-up:** complete module 25 submission/result, module 27 full completion and module 28 interaction tests; preserve all existing A1 progress and URLs.
5. **Continue B1 in order:** after B1-02–06, review the batch, update the map and continue with the next contiguous sequence. Do not begin B2 until B1 progression has been developed and reviewed.

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
1. Audit existing A1 01–25, A2 01–20 and B1-01 against the master map. Mark Existing / Needs revision / Partial / Gap / Planned.
2. Preserve existing lesson URLs and local progress; do not renumber blindly.
3. Verify B1-01, then create B1-02–06 as a coherent five-lesson batch.
4. Update the master-plan status, handoff and roadmap after verified implementation.
5. Continue B1 before proceeding to B2, then C1 and C2 in order.

14. A2-21–23 deployment confirmed on GitHub Pages; Lessons 21–23 each passed live 8/8 completion flows. See tracker section 18.2.

15. A2 end-of-level modules 25–28 created, added to A2 index and precached under service-worker v69. Live checks: module 25 = 16/16; module 26 project completion saved; module 27 listening/reading = 5/5 each and save; module 28 readiness plan saved. See tracker section 19. Real offline/device/accessibility QA remains pending.
16. Next priority: verify B1-01 against the approved B1 map, then produce B1-02–06 as a complete batch. Preserve existing URLs and local progress.
