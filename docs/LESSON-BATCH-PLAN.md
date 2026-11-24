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
| B1 | 01–24 | Core lesson source implemented; B1-01–16 deployed in earlier checks; 17–24 latest route verification pending |

A1 and A2 must not be advertised as complete CEFR syllabi. B1 must not be advertised as a complete course.

## Next planned work

B1 core lessons 01–24 are now implemented at source. Lessons 17–21 have a successful Pages workflow record but still need a fresh post-build browser check; lessons 22–24 have just been added and also need publication and browser verification. The browser automation service could not start on the latest attempt because its wallet balance was insufficient.

The latest batch follows the approved master map:
1. B1-22: relative clauses and adding useful detail (que, quien/quienes, donde, lo que).
2. B1-23: reported statements and questions, including common tense/time shifts.
3. B1-24: integrated B1 communication — tell, explain, discuss and propose.

Next content phase: review B1 core 01–24 and build separate closing modules 25–28. Do not start B2 before B1 closing activities are complete and reviewed.

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

A1 and A2 inventories have been reviewed and mapped; A2 core modules 01–24 have strong internal coverage evidence and separate end-of-level modules 25–28 are implemented. Preserve current URLs and progress; do not renumber blindly. The immediate content batch after B1-12–16 publication is B1-17–21. B1-01–16 have been implemented at source; map each lesson to the next Unit 5–6 outcomes without duplicating earlier communication functions. B2/C1/C2 remain future phases.

## Current next batch

B1-22–24 are now implemented at source. Re-fetch and verify all three files, inspect Pages workflow status, and complete live route/quiz QA when browser automation is available. Then create B1 closing modules 25–28.
