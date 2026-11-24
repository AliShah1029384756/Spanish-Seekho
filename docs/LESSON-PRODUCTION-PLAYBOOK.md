# Spanish Seekho — Lesson Production Playbook

_Last updated: 24 November 2026_

## Purpose

This document lets ChatGPT, Claude, Grok, or a human continue lesson production without asking the owner to repeat the project's purpose, teaching approach, content rules, current status, or workflow.

The goal is to produce **multiple complete, coherent lessons per production request**, not make the owner ask for “next lesson” repeatedly.

## Product mission

**Making Spanish Learning Accessible to Every Pakistani.**

Spanish Seekho is a free, practical, mobile-first Spanish-learning platform for Pakistani learners. It should help learners use Spanish in real situations, including everyday life and preparation for living, studying, or working in Spain. It is more than a vocabulary list or a portfolio demo.

### Audience and language policy

- Primary audience: Pakistani learners, including beginners and people preparing for life in Spain.
- Default explanation language: simple, natural Roman Urdu.
- Also support Urdu script and English where the existing interface supports them.
- Spanish target: contemporary standard Spanish from Spain (Castilian).
- Explain Spain-specific pronunciation and usage accurately. Mention regional variation where useful; do not present every regional expression as universal.
- Roman Urdu and Urdu-script pronunciation spellings are approximations, not phonetic transcription. Label them as learning aids.
- Keep Spanish examples natural, useful, and grammatically correct.

## Verified curriculum status

As recorded in the repository handoff and README on 24 November 2026:

- A1 starter pathway: lessons 01–25.
- A2 starter pathway: core lessons 01–23 plus separate end-of-level activities 25–28.
- B1 pathway: core lessons 01–24 and separate closing modules 25–28 implemented at source and now source-reviewed. The source-correction commit deployed successfully in Pages run 573; live route/interaction QA remains pending. Do not begin B2 until B1 release verification is complete.
- A1 and A2 are starter pathways, not claims that every CEFR requirement is externally validated or officially certified. A2's 24 core outcomes have internal mapping evidence; its four separate end-of-level activities are implemented and smoke-tested.
- B1 core lessons 01–24 and separate closing modules 25–28 have been source-reviewed, but the pathway is not release-verified until fresh deployment and live route/interaction QA pass. Do not begin B2 before that gate. Do not describe B1 as an official qualification or accredited course.

Always inspect the latest repository and handoff before choosing lesson numbers. Never assume this snapshot is still current.

## Non-negotiable content quality

Every lesson must:
1. Have a clear title, CEFR level, lesson number, and measurable learning objectives.
2. Teach a coherent topic that belongs at that level.
3. Explain concepts simply before asking learners to use them.
4. Include accurate Spanish, natural translations, and practical examples.
5. Include useful everyday communication, not only isolated grammar rules.
6. Recycle relevant earlier vocabulary and grammar without repeating an entire earlier lesson.
7. Include learner practice and a quiz/checkpoint consistent with the current course pattern.
8. Provide correct answer keys and ensure every question has one defensible answer unless it explicitly accepts alternatives.
9. Avoid unsupported claims about official CEFR certification or course completeness.
10. Be reviewed for spelling, accents, agreement, verb forms, gender, register, and Spain usage.

Do not pad a lesson with repetitive vocabulary just to increase its length. Accuracy and learning value come before lesson count.

## Standard lesson content blueprint

Follow the established structure visible in neighbouring lessons. Unless the current course template dictates otherwise, a complete lesson batch should cover:

- Lesson metadata: ID, level, number, title, topic, prerequisites.
- Learning objectives / “By the end, you can…”.
- Short warm-up or real-life context.
- Vocabulary: Spanish, meaning in Roman Urdu, English meaning where useful, and pronunciation aid only where it helps.
- Grammar or communication focus, explained in small steps.
- Natural Spanish example sentences with translations.
- Short practical dialogue or reading/listening-style text.
- Spain-specific usage or pronunciation note when relevant.
- Guided practice and independent production (speaking/writing).
- Quiz/checkpoint with answer key and brief explanations.
- Review / what to practise next.

Do not force every section if it would be pedagogically artificial; document any intentional variation.

## Batch-first production policy

**Default: generate a complete batch of 5 lessons in one request.** If the topic scope is straightforward and the response budget permits, generate 6–8 lessons. Use 3–5 for dense grammar or complex topics. The owner should not have to prompt “next” after every lesson.

When asked to continue a level, the AI should:
1. Read this playbook, `AGENTS.md`, `docs/PROJECT-HANDOFF.md`, and `docs/ROADMAP.md`.
2. Inspect the current lesson files and identify the latest completed lesson number.
3. Check the course sequence to avoid gaps, duplicates, or topic overlap.
4. Propose a coherent outline for the next 5–8 lessons internally or briefly in the response.
5. Generate the entire requested batch in one pass, with every lesson complete.
6. If output limits prevent a full batch, finish as many complete lessons as possible and clearly state the exact remaining range. Never silently truncate a lesson.
7. Update the handoff and roadmap with actual completed work.

A request such as “Continue B1” means continue with the next planned batch, not ask which single lesson to make. Ask a question only when a genuine product decision or missing information blocks safe progress.

## Multi-AI collaboration (ChatGPT, Claude, Grok)

All AI tools must follow the same repository documentation. Use non-overlapping lesson ranges:

- Assign one AI a specific level and range, for example B1 lessons 02–06.
- Assign another AI a different range, for example B1 lessons 07–11, only after agreeing the sequence.
- Do not ask multiple AIs to create the same lesson unless one is explicitly doing independent review.
- Prefer content-only outputs for parallel production. One integrator is responsible for merging, checking numbering, links, navigation, and code.
- Ask each AI to return the exact lesson range completed, titles, key grammar/vocabulary, assumptions, and any unresolved accuracy questions.
- Do not allow each AI to invent a different UI, CSS system, HTML structure, or progress mechanism.

### Shared instruction block for any AI

> You are contributing to Spanish Seekho. Read AGENTS.md, docs/PROJECT-HANDOFF.md, docs/ROADMAP.md, and docs/LESSON-PRODUCTION-PLAYBOOK.md before work. Follow the mission “Making Spanish Learning Accessible to Every Pakistani.” Use simple Roman Urdu as the default explanation language, support Urdu/English according to the existing project, and teach contemporary Spanish from Spain (Castilian). Inspect existing lessons before generating anything. Produce the entire assigned lesson range as a coherent batch; do not stop after one lesson or ask the owner to say “next.” Do not duplicate topics, invent project features, or change architecture without approval. Keep pronunciation approximations labelled. Validate Spanish and answer keys. Report exact files/range completed, tests performed, limitations, and the next uncompleted range. Update documentation with verified facts only.

## Output format and architecture rules

- The current project is a free static HTML/CSS/vanilla-JavaScript site. Preserve this unless a compelling reason is documented and approved.
- **JSON-driven lesson rendering is a proposed optimization, not an assumed existing feature.** First inspect the actual lesson files, navigation, language behaviour, progress storage, and service worker.
- Do not mass-convert existing lessons merely to adopt JSON. First create a small proof of concept using one representative lesson, compare it against the current page, and test it on mobile and with saved progress.
- If JSON/data-driven lessons are approved, AI lesson generation should output validated lesson data against one shared schema. A single renderer should own layout and interactions. Content authors must not recreate HTML/CSS/JS for every lesson.
- Until that migration is implemented and tested, follow the current neighbouring lesson file pattern. Do not invent a schema or claim the site already supports JSON lessons.
- Keep content generation separate from application code changes whenever practical.

## Validation checklist for every batch

### Content
- [ ] Correct level, numbering, sequence, and prerequisites.
- [ ] No duplicate or near-duplicate lesson topics.
- [ ] Spanish grammar, accents, punctuation, gender, agreement, and verb conjugations checked.
- [ ] Natural Castilian usage and register.
- [ ] Roman Urdu explanations are understandable and consistent.
- [ ] English/Urdu meanings are accurate where supplied.
- [ ] Pronunciation approximations are labelled.
- [ ] Examples are translated correctly.
- [ ] Quiz answers match the questions; no ambiguous or missing answer keys.
- [ ] Lesson difficulty progresses logically.

### Integration
- [ ] All lesson links and navigation paths work.
- [ ] Existing lesson access remains open; do not introduce completion gates.
- [ ] Existing localStorage progress keys are preserved.
- [ ] Mobile layout and Urdu RTL are not broken.
- [ ] Service-worker cache list/version reviewed if app-shell assets change.
- [ ] GitHub Pages project-relative paths are correct.
- [ ] Tests actually run are recorded; do not claim unrun tests.

## Efficiency rules

- Do not regenerate full website code to create lesson content.
- Do not repeatedly paste large unrelated conversation histories. Use the repository documents as the shared context.
- Keep batches self-contained and use stable lesson IDs.
- Generate the next contiguous batch rather than asking the owner to select every lesson.
- Use one final integration/review pass after parallel content generation.
- Preserve existing work; optimize the production workflow without creating unnecessary migrations or rewrites.

## Handoff requirements

After each meaningful batch, update:
- `docs/PROJECT-HANDOFF.md`: actual current state, exact new lessons, changed files, tests, known limitations, and next range.
- `docs/ROADMAP.md`: mark only genuinely completed items as implemented and set the next batch.
- This playbook only when the production standard changes.

A new AI must be able to continue from these documents and repository state without asking the owner to repeat the project background.



## Approved 168-module programme standard

The owner approved a **168-module A1–C2 curriculum, 28 modules per level**. The complete sequence and outcomes are documented in [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md). This is the project's own module count, not a CEFR-prescribed number. Each level has 24 core teaching modules plus cumulative revision, a practical project, integrated skills assessment and readiness checkpoint (modules 25–28).

All lesson authors and reviewers must use the master map, map existing content before creating duplicates, and distinguish planned modules from implemented pages. A1/A2 existing lessons must not be renumbered or overwritten merely to fit the map. Use CEFR descriptors and Instituto Cervantes PCIC as references; never claim official accreditation or certification. An MCQ score alone does not establish CEFR proficiency.
