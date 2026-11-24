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
| B1 | 01–11 | First two batches implemented; incomplete |

A1 and A2 must not be advertised as complete CEFR syllabi. B1 must not be advertised as a complete course.

## Next planned work

The next content priority is B1-12–16. Lessons 01–11 are deployed; B1-01, B1-02 and B1-07 passed live 8/8 tests. B1-03–06 and B1-08–11 pages/quiz controls are verified, but their submission interactions remain pending. Before the next batch, inspect the live files and map the sequence against the approved B1 plan.

Next planned batch B1-12–16 follows the approved map:

1. Making decisions and discussing advantages and disadvantages.
2. Work experience, responsibilities and workplace communication.
3. Education, skills, goals and learning experiences.
4. Applications, interviews and professional self-presentation.
5. Social issues and changes in everyday society.

These topics continue the sequence after B1-06 without repeating the opening narrative or opinion lessons.

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

A1 and A2 inventories have been reviewed and mapped; A2 core modules 01–24 have strong internal coverage evidence and separate end-of-level modules 25–28 are implemented. Preserve current URLs and progress; do not renumber blindly. The immediate content batch is B1-12–16. B1-01–11 have been implemented; keep the next five lessons mapped to Unit 3–4 outcomes without repeating earlier arguments/future forms. B2/C1/C2 remain future phases.
