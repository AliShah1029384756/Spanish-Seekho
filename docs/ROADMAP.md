# Roadmap

_Last updated: 24 November 2026_

## Implemented learning content (documented snapshot)

- A1: core lessons 01–25 + expanded practice (60-item deck) + separate end-of-level modules 25–28 (cumulative review, practical project, integrated skills practice, readiness plan).
- A2: lessons 01–20 (Lesson 20 = integrated practice and self-assessment; not a complete end-of-level assessment).
- B1: Lesson 01 (narrating past events naturally; pathway started).
- Spain Life: 6 modules.
- A1 Lesson 25 remains Education, school and studies; it was preserved and mapped to core module 20. The new cumulative review uses a separate URL.
- A2 lessons 13–20: descriptions, preferences/reasons, plans, travel problems, technology, everyday solutions, grammar review and integrated practice. The 20-page pathway still has core-module gaps and no verified A2 closing modules 25–28.

**Product truth:** A1/A2 are expanding starter pathways, not complete CEFR syllabi. B1 has only started.

## Documentation and workflow improvements

- Added `docs/LESSON-PRODUCTION-PLAYBOOK.md`: mission, language policy, lesson blueprint, content quality, shared AI instructions, batch workflow, multi-AI coordination and validation checklist.
- Added `docs/LESSON-BATCH-PLAN.md`: default batch sizes, current starting point, next B1 planning directions and batch completion report.
- Updated `AGENTS.md` to require the new documentation and enforce batch-first lesson production.
- Updated `docs/PROJECT-HANDOFF.md` with the project mission, multi-AI handoff, verified documented course snapshot, and architecture caveats.

These are documentation/process changes. They do **not** implement a JSON lesson engine, automated validation, or automated batch generation. The A1 end-of-level activity pages are implemented as static HTML/vanilla JavaScript.

## Next priorities

1. A2 Lessons 01–20 are source-reviewed and reconciled against all 24 approved core outcomes: 15 strong, 5 partial, 4 gaps. Apply targeted revisions, add A2-21–23 for modules 02/16/20, strengthen A2-20 for module 24, then build separate closing modules 25–28.
2. Apply verified content corrections in the same review pass; preserve all existing URLs and learner progress.
3. Verify B1-01, then produce B1-02–06 as a coherent five-lesson batch.
4. Run dedicated A1 end-of-level runtime QA: assessment interactions, local drafts, TTS fallback, keyboard/focus, mobile/RTL and real offline/PWA behaviour.
5. Continue to defer JSON/data-driven rendering unless a demonstrated maintenance problem justifies a tested proof of concept.
6. A2 Lessons 01–05 source review: one clarity note added to A2-01; quiz/progress structures preserved.
7. A2 Lessons 06–10 source review: clarified present-perfect regional variation and improved the Madrid dialogue in A2-10. A2-08 confirmed as an interim starter checkpoint, not the end-of-level module 25.
8. Limited live A2 smoke test: A2-06 quiz passed 6/6; A2-07 result message not observed despite source handler being present; A2-08–10 not interaction-tested. See tracker.
9. A2 Lessons 11–15 source review: clarified mayor/menor size/age usage in A2-11 and corrected antiguo/a vs histórico/a in A2-13. Quiz/progress structures preserved.
10. A2 Lessons 16–20 source review: added tú/usted register note in A2-18, qualified the present-perfect rationale in A2-19 and corrected the Spanish can-do checklist in A2-20. All 40 answer keys and progress structures checked; details in tracker section 18.
11. Limited live smoke test: A2-11, A2-12 and A2-13 each passed 8/8 and showed completion; A2-14/15 were visible but not interaction-tested. See tracker section 17.1.
12. A2-16–20 source review complete. Live smoke test confirmed all five pages and quizzes render; A2-16 passed a targeted 8/8 completion interaction. A2-17–20 submission flows remain untested. See tracker section 18.1.
13. Full A2 01–20 to 24-outcome reconciliation completed: 15 strong, 5 partial, 4 gaps. See tracker section 4 for the outcome matrix, overlap decisions and minimum completion plan.
10. Limited live smoke test: A1 index and all four new end-of-level pages deployed; module 25 answer selection and module 26 completion-button interaction exercised; modules 27–28 only partially checked. See curriculum tracker for limits.

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
