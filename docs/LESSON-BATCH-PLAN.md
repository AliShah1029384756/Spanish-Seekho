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
| B1 | 01–24 + separate 25–28 | Full source review completed; corrections applied; fresh deployment and live route/interaction QA pending |

A1 and A2 must not be advertised as complete CEFR syllabi. B1 must not be advertised as a complete course.

## Next planned work

B1 core Lessons 01–24 and closing modules 25–28 are implemented and have completed the consolidated source-level review. The immediate next task is release verification, not another lesson batch:

1. Pages build/deploy for latest B1 content commit `2705fab84ccabe9d71979f3437313cd775d4f789` succeeded in run 578; verify the deployed routes.
2. Verify the B1 index, all 24 core lesson routes and four closing-module routes.
3. Test representative/all core quiz submissions and the primary Module 25–28 interactions without clearing existing learner progress.
4. Record any remaining defects and fix them in the same pass.
5. B2 mapping/authoring may proceed in parallel by explicit owner decision; B1 release verification remains pending and is not waived.

Browser automation could not start during the source review because the browser service wallet balance was negative. Source-level checks are complete; runtime checks must not be inferred from them.

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

A1 and A2 inventories have been reviewed and mapped; A2 core modules 01–24 have strong internal coverage evidence and separate end-of-level modules 25–28 are implemented. B1 core lessons 01–24 and closing modules 25–28 are now implemented at source. Preserve current URLs and progress; do not renumber blindly. The immediate work is publication verification, outstanding live interaction QA and a full B1 01–28 curriculum review. B2 authoring has now started with Lessons 01–04; C1/C2 remain future phases.

## Current next batch

No new lesson batch is scheduled. B1 core 01–24 and closing modules 25–28 have completed source-level curriculum review. B1 live route/interaction QA remains owner-pending. B2 authoring is now authorised in parallel; the B1 release gate is not waived. Current service-worker cache: spanish-seekho-v80.


## B1 release gate — owner browser QA pending (25 November 2026)

The owner has asked that assistant-run browser testing stop; the owner will test later. No live browser checks were performed by the assistant because browser automation could not start with a negative service wallet balance. Pages workflow run 45461408731 (run 583) is completed successfully, but this is not route-level or functional verification. Follow the owner checklist in `docs/CURRICULUM-TRACKER.md` section 28. Keep B1 as source-reviewed/deployed but not release-verified; B2 authoring may proceed in parallel by explicit owner decision; B1 QA results and fixes must still be recorded before B1 is called release-verified.


## Documentation deployment confirmation — 25 November 2026

GitHub Pages workflow run **#587** (`45530273768`) for commit `b3f478aa4945ab7bbfc647e7f3c7847a32942114` is now **completed / success**. This confirms the documentation commit passed through the Pages deployment workflow. It does **not** replace owner-run live QA or verify individual routes, interactions, audio, persistence, mobile layout, accessibility, or offline behaviour. B1 remains **source-reviewed and deployed, but not release-verified**. The owner QA checklist remains pending in `docs/CURRICULUM-TRACKER.md` section 28; B2 authoring is owner-authorised in parallel; B1 QA and any resulting fixes must still be recorded before B1 is called release-verified.


## B2 development status — owner-authorised parallel start (25 November 2026)

The owner explicitly asked to proceed with B2 while leaving B1 live/browser QA for the owner to complete later. This is an authoring-schedule decision only: **B1 QA remains pending and B1 remains not release-verified**. Do not mark any B1 checklist item passed without owner evidence. B2 content development may proceed in parallel, but no claim of B1 release verification, B2 completion, official CEFR certification, or runtime testing is permitted.

B2 opening batch now exists at b2/index.html and b2/lesson-01.html through b2/lesson-04.html. The homepage links to the new pathway. B2 service-worker precache was advanced to spanish-seekho-v80 and includes the four lessons and index. The first batch covers Unit 1: narrative perspective; complex past-time relationships; reconstructing events and conflicting accounts; and personal, historical and professional narratives. The next authoring range is **B2 Lessons 05–08** (argument, debate, persuasion and counterarguments).

Assistant-run browser testing was not performed, as requested. Source-level inspection only; live route, quiz interaction, persistence, TTS, mobile, accessibility, RTL and offline behaviour remain unverified.
