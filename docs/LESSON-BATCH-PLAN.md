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
| A2 | 01–20 | Starter pathway |
| B1 | 01 | Started; incomplete |

A1 and A2 must not be advertised as complete CEFR syllabi. B1 must not be advertised as a complete course.

## Next planned work

The next content priority is B1, continuing after Lesson 01. Before generating the batch, inspect the live files and existing lesson 01 to verify the exact title, content, file naming, navigation, and quiz/progress conventions.

Suggested planning themes for the next B1 sequence (adapt after inspecting existing files; these are topic directions, not already-created lessons):

1. Connecting past events and telling a fuller story.
2. Sharing opinions and giving reasons.
3. Describing experiences and changes over time.
4. Plans, intentions, predictions, and possibilities.
5. Work, study, and everyday responsibilities.
6. Social situations, advice, and polite disagreement.
7. Problems, solutions, and explaining consequences.
8. Integrated communication and a progress checkpoint.

Select the next 5–8 topics that create the strongest learning progression. Do not force all eight into one batch if the lesson scope becomes too broad.

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

Before new lesson production, audit existing A1 01–25, A2 01–20 and B1-01 against the map. Preserve current URLs and progress; do not renumber blindly. The immediate content batch remains B1-02–06 after verifying B1-01 and the actual page conventions. B1-02 must deepen narrative cohesion rather than repeat B1-01. B2/C1/C2 remain future phases.
