# Spanish Seekho — Master Execution Roadmap

**Roadmap version:** 1.0  
**Prepared:** 29 November 2026  
**Current stage:** Phase 5 complete; Phase 6 is the next authorized stage  
**Repository:** https://github.com/AliShah1029384756/Spanish-Seekho  
**Primary planning register:** `docs/MASTER-IMPLEMENTATION-REPAIR-TRACKER.md`  
**Curriculum authority:** `docs/CURRICULUM-MASTER-PLAN.md`  
**Product/engineering authority:** `docs/PROJECT-SPECIFICATION.md`, `AGENTS.md`

> **Purpose:** This document is the end-to-end execution plan for taking Spanish Seekho from the completed audit/planning work into controlled repairs, verification and release. It defines ten programme phases. Phases 1–5 are the completed analysis/planning foundation; Phases 6–10 are execution phases and remain pending until their gates are evidenced. A phase is not complete merely because its tasks have been attempted.

---

## 1. Programme objective

Improve the existing A1–C2 Spanish Seekho platform so that it is more accurate, coherent, pedagogically effective and technically reliable while preserving its existing strengths and learner data.

The project is **not** a full rewrite. Work must be evidence-led, minimal, incremental and reversible.

### Non-negotiable product principles

- Free core learning; no paid APIs, mandatory accounts or unnecessary dependencies.
- Mobile-first, especially Android browser use.
- Roman Urdu remains the default teaching language where currently supported; Urdu-script and English support must be described truthfully according to actual page coverage.
- Teach contemporary standard Spanish from Spain (Castilian), while explaining regional variation accurately.
- Keep the existing static HTML/CSS/vanilla-JS architecture unless a separately justified and approved change is necessary.
- Preserve lesson routes, IDs, local progress, open access, language preference, quizzes and service-worker/offline behavior.
- Never claim CEFR certification, full level completion, translation coverage, audio quality, offline capability or successful deployment without evidence.
- Every meaningful source batch must be validated, documented, committed, deployed when approved, and checked on the live site. Deployment is not deferred to the very end.

---

## 2. Ten-phase programme map

| Phase | Name | Main purpose | Status |
|---|---|---|---|
| 1 | Individual level curriculum audits | Review A1–C2 lesson content, grammar, vocabulary, quizzes and level structure. | Complete — audit records retained |
| 2 | Cross-topic and level review | Consolidate individual level observations and inspect curriculum coverage. | Complete — audit records retained |
| 3 | Content, language and assessment audit consolidation | Retain detailed findings on accuracy, Spain usage, pronunciation, quizzes and pedagogy. | Complete — see master audit |
| 4 | Cross-level curriculum analysis | Analyse A1–C2 as one connected progression and document cross-level risks. | Complete — Phase 4 report |
| 5 | Master implementation & repair tracker | Consolidate findings, IDs, severity, dependencies, batches, preservation and verification criteria. | Complete — tracker created and fetched back |
| 6 | Baseline, critical corrections and structural consistency | Freeze current reality; verify outstanding release gates; correct evidenced factual, index, count and status inconsistencies. | Pending — next |
| 7 | Grammar prerequisites and CEFR progression | Repair teach-before-use gaps and make progression coherent across adjacent levels. | Pending |
| 8 | Quiz, assessment and productive-skill quality | Improve question validity, distractors, answer-key integrity, feedback, rubrics and skill assessment. | Pending |
| 9 | Multilingual support, pronunciation, Spain content and learning experience | Improve Roman Urdu/Urdu/English consistency, Spain-specific naturalness, deliberate repetition and task variety. | Pending |
| 10 | Programme-wide regression, release and final verification | Verify all routes, progress, language, mobile/accessibility, TTS, offline/PWA and live deployment; close remaining issues. | Pending |

**Phase numbering note:** This is the agreed programme roadmap, not a claim that Phases 1–5 were five identical technical sprints. The first five are audit and planning stages; the remaining five are controlled execution and release stages.

---

## 3. Phase 6 — Baseline, critical corrections and structural consistency

**Purpose:** Establish a reliable current-state baseline before changing content. Resolve verified high-impact factual and structural mismatches with minimal edits.

### Work sequence

**6.0 — Baseline inventory and evidence freeze (Tracker Batch 0)**

- Enumerate actual files for A1, A2, B1, B2, C1 and C2, including core lessons and separate closing modules.
- Compare lesson files against level indexes, homepage directory, README, curriculum master plan, progress denominators and service-worker precache.
- Capture current lesson routes, previous/next links, quiz identifiers/schema, localStorage keys, progress behavior and relevant DOM IDs.
- Record actual source and current live deployment state separately.
- Capture the initial browser/device test matrix and any unavailable test capability.
- Reconcile conflicting or stale documentation before treating counts as canonical.

**Known baseline discrepancies to re-check against the current source:**
- A2 index and homepage say 20 lessons while the index links and README describe 23 core lessons plus four closing activities.
- C2 index shows 24 core lessons and four closing modules, but a residual status sentence still says Units 01–03 / Lessons 01–12 are available.
- A1 has 25 existing core lesson files in the documented snapshot plus separate closing modules; preserve the existing routes and reconcile how Lesson 25 maps to the approved 24-outcome plan.
- B1, B2, C1 and C2 have documented source-complete 24-core-plus-four-closing pathways, but their release/runtime QA is not thereby complete.
- Homepage, level indexes, README, service-worker and handoff must agree with verified repository inventory, not with stale text.

**6.1 — Critical factual and practical-content fixes (Tracker Batch 1)**

- Correct confirmed A1 L15 weekday/translation/TTS mismatch.
- Correct confirmed A1 L22 adjective plural-rule overgeneralization.
- Verify Spain-specific transport and office terminology before editing.
- Treat housing/legal guidance as a special review item requiring current authoritative sources and qualified review; do not invent legal advice.
- Check pronunciation approximations only after a shared notation policy has been agreed.

**6.2 — Indexing, labels and documentation consistency (Tracker Batch 2)**

- Align homepage/index/README counts and availability statements with actual routes.
- Separate core lessons from closing modules in labels and progress indicators.
- Remove stale “coming soon”, partial-availability or internal planning labels only when confirmed.
- Clarify A2 review/checkpoint sequence and avoid misleading “final” labels before later content.
- Keep existing filenames, routes, lesson IDs and progress keys intact.

### Phase 6 deliverables

- Current-state inventory and route map.
- Source-vs-live baseline and outstanding QA list.
- LocalStorage/progress-key preservation map.
- Quiz-bank inventory baseline.
- Reconciled level counts/status matrix.
- Minimal source fixes with tests and evidence.
- Updated handoff and roadmap.

### Phase 6 exit gate

- [ ] Six-level inventory and closing-module inventory verified.
- [ ] Count discrepancies reconciled across source documents and UI.
- [ ] Every changed factual claim has evidence and review notes.
- [ ] Existing routes, IDs and progress keys preserved.
- [ ] Relevant static and browser checks pass.
- [ ] Approved source changes committed and deployment status checked.
- [ ] Affected live routes checked; untested limitations explicitly recorded.

---

## 4. Phase 7 — Grammar prerequisites and CEFR progression

**Purpose:** Ensure learners are not expected to produce or pass tests on grammar that has not been introduced or adequately scaffolded.

### Work sequence (Tracker Batch 3)

1. Build a concept-to-lesson map for each priority grammar topic: first exposure, explicit teaching, controlled practice, contextual practice, first productive use, quiz assessment and later spiral review.
2. Map A1–A2 demonstratives, possessives, gerund, comparisons, polite-request formulas and imperative coverage.
3. Map B1–B2 subjunctive triggers and forms, stem/spelling changes, perfect/imperfect/pluperfect subjunctive, conditional hypotheses, reported speech and subordinate clauses.
4. Review vosotros, tú and usted forms/register across B1–C2, especially Spain-oriented imperative and subjunctive usage.
5. Inspect C1–C2 grammar functionally; do not infer missing coverage from keyword counts alone.
6. Distinguish deliberate early recognition/exposure from a genuine missing prerequisite.
7. Prefer a concise bridge or clearer signposting over lesson renumbering or broad rewrites.

### Phase 7 deliverables

- Grammar prerequisite map.
- First-use / teach / practice / assessment matrix.
- Prioritised list of confirmed teach-before-test defects.
- Minimal lesson/quiz changes with cross-level regression notes.
- Updated curriculum tracker and handoff.

### Phase 7 exit gate

- [ ] Priority concepts have a documented progression from introduction to productive use.
- [ ] Every affected assessment tests taught or explicitly previewed material at the intended demand.
- [ ] Recognition and independent production expectations are clear.
- [ ] Adjacent-level transitions are reviewed.
- [ ] No lesson IDs/routes/progress keys changed unnecessarily.
- [ ] Source, quiz and live checks for changed pages pass.

---

## 5. Phase 8 — Quiz, assessment and productive-skill quality

**Purpose:** Make assessment fair, meaningful and aligned with actual Spanish communication rather than guessable answer patterns or English grammar labels.

### Work sequence (Tracker Batch 4)

1. Export/inspect the current question bank and reproduce baseline statistics by level.
2. Review correct-option length and position bias; redesign only items where the pattern gives away the answer.
3. Replace invalid or implausible distractors with natural, contextually plausible Spanish.
4. Resolve ambiguous items and valid alternate answers; preserve all existing question IDs where possible.
5. Ensure stems provide enough context for tense, register, meaning and intended answer.
6. Add concise explanations for why the correct answer fits and why important distractors do not.
7. Increase Spanish-primary contextual comprehension, cloze, reformulation, listening and production tasks at appropriate levels.
8. Add level-appropriate speaking/writing/listening rubrics and sample outputs; preserve useful existing rubric models.
9. Keep quiz pass thresholds and completion logic unchanged unless an evidence-backed change is explicitly approved.

### Phase 8 deliverables

- Reproducible before/after quiz-quality report.
- Question-level repair log with original IDs.
- Verified answer-key and scoring checks.
- Productive-skill rubrics and sample tasks.
- Updated tracker and handoff.

### Phase 8 exit gate

- [ ] Every changed question has one defensible intended answer or explicitly supported variants.
- [ ] Distractors are grammatically plausible and contextually wrong for a clear reason.
- [ ] Answer-key indices, explanations, scoring and completion behavior pass tests.
- [ ] Length/position bias is measured before and after; no artificial word-count equalisation.
- [ ] Assessment tasks align with level outcomes and do not claim formal CEFR certification.
- [ ] Mobile interaction and learner progress remain intact.

---

## 6. Phase 9 — Multilingual support, pronunciation, Spain content and learning experience

**Purpose:** Make the learning support consistent and natural for Pakistani learners while strengthening accurate Spain Spanish and preserving meaningful curriculum repetition.

### Work sequence (Tracker Batches 5 and 6)

**9.1 — Roman Urdu, Urdu-script and pronunciation consistency**

- Approve a concise pronunciation notation policy before bulk changes.
- Review /θ/, /s/, b/v, j, ll/y, stress, syllable division and regional variation.
- Align visible Spanish, English meaning, Roman Urdu, Urdu-script pronunciation and `data-say`.
- Audit the actual language-switching scope and clearly label where full translation is or is not available.
- Review Urdu RTL, mixed Spanish/Latin-script direction and readability.
- Review B1/B2 and advanced support coverage without forcing literal phonetic spelling into every advanced explanation.

**9.2 — Spain-specific vocabulary, register and practical communication**

- Verify queue/turn terminology, transport tickets, public services, education, housing and healthcare phrases in their real context.
- Label informal, formal, regional and colloquial expressions.
- Strengthen vosotros and tú/usted progression where appropriate.
- Add everyday Spain expressions selectively, with natural examples and context.
- Use dated authoritative sources for practical/legal information; obtain qualified review for legal claims.

**9.3 — Repetition and learning experience**

- Map repeated grammar/functions and distinguish deliberate spiral review from redundant explanation.
- Vary repeated dialogues and phrases by context and communicative purpose.
- Preserve useful recycling and spaced retrieval.
- Improve task variety at advanced levels without breaking the familiar navigation structure.
- Strengthen listening comprehension and speaking/writing exemplars only where the platform can support them honestly and accessibly.

### Phase 9 deliverables

- Language and pronunciation style guide.
- Per-level language-support coverage matrix.
- Spain vocabulary/register source notes.
- Repetition and task-variety map.
- Updated lesson pages and regression evidence.

### Phase 9 exit gate

- [ ] Roman Urdu/Urdu approximations are consistent and labelled as approximate.
- [ ] TTS text matches the visible Spanish content; playback limitations are documented.
- [ ] Language switching claims match actual coverage.
- [ ] Urdu RTL and mixed-script rendering pass mobile checks.
- [ ] Spain-specific phrases are natural in the stated context and register.
- [ ] Repetition is purposeful and progression remains coherent.
- [ ] No unsupported legal/practical claim remains.

---

## 7. Phase 10 — Programme-wide regression, release and final verification

**Purpose:** Verify that the repaired platform works as an integrated product, not merely as a set of edited source files.

### Work sequence (Tracker Batch 7)

- Run full route/link/index/navigation checks across A1–C2 and all closing modules.
- Run quiz answer-key, validation, scoring and completion checks.
- Verify existing localStorage keys and level-specific progress keys using seeded pre-existing test data.
- Verify Roman Urdu/Urdu/English switching, persistence and RTL/LTR behavior.
- Test Android/mobile responsive layout, touch targets, keyboard focus, semantic labels, contrast and zoom.
- Test representative Spanish TTS controls on a supported browser/device.
- Verify service-worker cache paths, cache version update, stale-cache cleanup and offline revisit.
- Compare the deployed GitHub Pages site against the exact approved source commit.
- Recheck all findings; close only with evidence and leave unresolved items explicitly open.
- Run a final review of project documentation so product status is truthful and consistent.

### Phase 10 deliverables

- Programme-wide regression report.
- Final route, language, progress, quiz and offline QA matrices.
- Remaining limitations and known-issues register.
- Deployment/live verification record for each release batch.
- Updated handoff, roadmap, tracker and project status.

### Phase 10 exit gate

- [ ] All required route and navigation checks pass.
- [ ] No learner progress loss or regression.
- [ ] Quiz and completion flows pass.
- [ ] Mobile, RTL, accessibility and TTS checks are documented.
- [ ] Offline/PWA behavior is verified on a real supported browser/device or explicitly left unverified.
- [ ] GitHub Pages deployment is successful for the intended commit.
- [ ] Live pages reflect the intended source version.
- [ ] Remaining issues and limitations are transparent.
- [ ] No claim of official CEFR certification or external proficiency validation is made.

---

## 8. Execution control: how every batch will run

Every repair batch follows this lifecycle:

1. **Select:** choose the highest-priority open MIR finding(s) whose dependencies are satisfied.
2. **Inspect:** fetch current source and inspect the complete lesson/question/context before editing.
3. **Baseline:** record current file/route/ID/progress behavior and relevant test cases.
4. **Plan:** list exact files, smallest intended changes, risks and rollback approach.
5. **Implement:** make one coherent, bounded batch. Do not mix unrelated cleanup.
6. **Validate source:** check HTML structure, links, JavaScript syntax, quiz answer indices, counts and content-specific assertions.
7. **Review learning quality:** verify Spanish, translation, register, level fit and adjacent-level progression.
8. **Regression:** check routes, localStorage, quiz behavior, language switching, RTL and service-worker impact as relevant.
9. **Commit:** record exact changed files and commit SHA.
10. **Deploy:** confirm GitHub Pages deployment status; do not infer deployment from a successful commit.
11. **Live verify:** open changed pages and neighboring routes on the live site; check cache refresh where relevant.
12. **Document:** update MIR status, batch log, roadmap and handoff with tests actually run and limitations.
13. **Continue:** proceed to the next dependency-ready batch; do not repeat completed work without new evidence.

### Batch sizing

- Content: prefer 4-lesson batches for lesson creation; for repairs, group by one coherent issue and a small number of affected files.
- Quiz: group by a specific level/topic or clearly bounded set of question IDs.
- Shared app-shell/service-worker changes: separate from unrelated content edits and run wider regression.
- Never start multiple overlapping edits to the same index, shared script, stylesheet or service worker in parallel.
- Parallel reviewers may inspect different levels, but one integrator must reconcile findings and approve changes.

### Deployment rule

Deployment and live verification happen after each meaningful approved source batch, not only at the end of Phase 10. If a batch is documentation-only, record the commit and whether Pages deployment is relevant; do not claim live app behavior changed. If deployment or device QA is unavailable, mark it **implemented/source-checked but not live-verified** and keep the gate open.

---

## 9. Preservation and regression controls

Before the first implementation batch, record and protect:

- Lesson filenames, URLs, IDs, direct access and previous/next links.
- Existing progress keys, including `ss-language`, `ss-completed`, `ss-a1-done`, and every additional level-specific key discovered.
- Completion arrays, progress denominators, pass thresholds and separate closing-module progress.
- Roman Urdu default behavior and existing Urdu/English controls.
- Spanish text and `data-say` parity.
- Service-worker cache coverage/version and offline fallback.
- Static architecture, project-relative paths and no-paid-API constraint.
- Existing curriculum strengths and examples, especially useful C1/C2 regional/register content.
- Android-first responsive layout, accessible controls and RTL/LTR rendering.

No storage migration, route rename, lesson renumbering, broad content rewrite or framework migration is allowed without a written rationale, explicit approval and backward-compatibility tests.

---

## 10. Current known status and starting point

This roadmap is based on the repository documents and source samples inspected on 29 November 2026. The source of truth for implementation is the current code, not a historical progress paragraph.

| Area | Current documented/source snapshot | Important qualification |
|---|---|---|
| A1 | 25 core lesson files plus separate closing activities in the documented project snapshot. | Preserve all existing routes; reconcile Lesson 25 mapping against the 24-outcome architecture. |
| A2 | 23 core lessons plus four separate closing activities in README and index links. | Homepage and A2 index still contain stale “20 lessons” wording; Phase 6 must reconcile. |
| B1 | 24 core lessons plus four closing modules. | Live route/interaction QA and owner release verification remain pending. |
| B2 | 24 core lessons plus four closing modules. | Browser/device QA and qualified Spanish review remain pending. |
| C1 | 24 core lessons plus four closing modules. | Owner browser/device QA and qualified Spanish review remain pending. |
| C2 | 24 core lessons plus four closing modules in current index/homepage and later handoff/roadmap entries. | C2 index still contains a residual sentence implying only Units 01–03 / Lessons 01–12 are available. |
| Language support | Roman Urdu default is the product direction; language controls exist. | Do not claim every lesson is fully translated into Urdu and English without checking. |
| Offline/PWA | Manifest and service worker exist. | Cache configuration is not proof of successful offline use. |
| CEFR | 168-module programme architecture is the approved internal target. | Not an official CEFR-prescribed lesson count, accreditation or proficiency certificate. |

### Immediate next task

Start **Phase 6.0 — Baseline Inventory & Evidence Freeze**. Do not begin a curriculum rewrite. First produce an evidence-backed baseline matrix and resolve current source/document conflicts. Then proceed to Phase 6.1 and 6.2 in dependency order.

---

## 11. Programme completion definition

Spanish Seekho's improvement programme is complete only when:

- All ten phases have evidence-backed completion records.
- All confirmed Critical/High findings are repaired or explicitly accepted as unresolved with a reason.
- Medium/Low items are either addressed, intentionally deferred or classified as optional with rationale.
- Every A1–C2 level has a coherent documented progression and truthful availability status.
- Learner data, routes, mobile-first experience and free access are preserved.
- Required source and live checks are recorded separately.
- Documentation reflects the actual deployed product.
- No unsupported claim of official CEFR accreditation, certification or guaranteed proficiency is made.

**Guiding principle:** Improve what exists; do not rebuild what already works. Protect learner trust, learning progress and the project's original mission while making each change measurable, testable and reversible.
