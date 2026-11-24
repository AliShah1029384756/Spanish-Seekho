# AI Agent Instructions

Read these before doing work:
1. `docs/PROJECT-SPECIFICATION.md` (product and requirements baseline)
2. `docs/PROJECT-HANDOFF.md` (verified current state and next task)
3. `docs/ROADMAP.md` (prioritised future work)
4. `docs/LESSON-PRODUCTION-PLAYBOOK.md` (lesson standards and QA)
5. `docs/LESSON-BATCH-PLAN.md` (next lesson batch)

Inspect the current repository and live deployment; documentation can lag behind code.

## Project and engineering rules

- Work in small, testable milestones. Preserve the free static HTML/CSS/vanilla-JS architecture unless a compelling, documented reason exists.
- Preserve localStorage keys `ss-language`, `ss-completed` and `ss-a1-done`; never discard learner progress. Inspect and preserve any additional level-specific keys found in the current code.
- Design for Android phones first. Use semantic HTML, accessible labels, visible keyboard focus, large touch targets and reduced-motion support.
- Urdu must use correct RTL while Spanish and Latin-script text remain LTR where appropriate.
- Do not claim lessons, translations, audio, offline behaviour, PWA installation or CEFR levels are complete unless implemented and tested.
- Pronunciation in Roman Urdu/Urdu is approximate and must be labelled as a learning aid. Review Spanish grammar and usage carefully.
- Avoid paid APIs, paid hosting, mandatory accounts, unnecessary frameworks and essential external CDN dependencies.
- When app-shell assets change, review the service-worker cache list and increment its cache version.
- Check GitHub Pages project-relative paths.
- After each meaningful milestone update the handoff and roadmap with actual changes, partial work, tests, limitations and next task.

## Lesson production rules

- The mission is **Making Spanish Learning Accessible to Every Pakistani**.
- The default teaching language is simple Roman Urdu, with Urdu and English support according to the existing product.
- Teach contemporary standard Spanish from Spain (Castilian), explaining regional variation where useful.
- Lesson production is batch-first: default to 5 complete lessons per request; use 6–8 when scope and response budget permit, or 3–5 for dense topics.
- When asked to continue a course, inspect the latest lesson and produce the next contiguous batch. Do not ask the owner to request “next lesson” repeatedly.
- Follow the full content, QA, and multi-AI rules in `docs/LESSON-PRODUCTION-PLAYBOOK.md` and the sequence in `docs/LESSON-BATCH-PLAN.md`.
- If multiple AIs contribute, assign non-overlapping lesson ranges and use one integrator/reviewer. Do not let each AI invent a different UI or lesson format.
- JSON-driven lesson rendering is a proposed optimization, not an assumed existing feature. Inspect the actual architecture and prove the approach with one representative lesson before any broad migration. Until approved and tested, follow the current lesson-file pattern.
- Never claim a JSON lesson engine, automated validation, or batch tooling exists unless it is actually implemented.

## Continuation instruction

If the user says "next", "continue", or asks for more lessons, choose the highest-priority unfinished roadmap batch, inspect current code, implement or generate the full batch, test, update documentation and report. Ask only if a genuine product decision or missing input blocks safe progress.

## Final report

State changed files, commit/deployment evidence, tests actually run, known limitations and the next recommended batch. Do not imply a live deployment has updated merely because a GitHub commit was created.



## Approved 168-module curriculum (24 November 2026)

The owner approved a full A1–C2 target of **168 modules: 28 per level**. Read `docs/CURRICULUM-MASTER-PLAN.md` as the authoritative sequence and outcomes. This is our own course architecture, not a CEFR-prescribed lesson count. Each level has 24 core modules plus revision, practical project, integrated skills assessment and readiness checkpoint (modules 25–28). Existing A1/A2/B1 lessons must be mapped before adding or renumbering; preserve links and progress. The 168 modules are planned, not implemented. Never claim official CEFR accreditation or certification.
