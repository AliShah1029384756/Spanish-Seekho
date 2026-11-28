# Spanish Seekho — Master Implementation & Repair Tracker

**Phase:** 5 — Master Implementation & Repair Tracker  
**Created:** 29 November 2026  
**Repository:** https://github.com/AliShah1029384756/Spanish-Seekho  
**Branch inspected:** `main`  
**Status:** Tracker drafted from current repository sources; implementation not started  
**Authority:** This document consolidates, but does not replace, the source evidence in `docs/CURRICULUM-AUDIT-LOG.md` and `docs/PHASE4-CROSS-LEVEL-ANALYSIS.md`.

> **Scope lock:** Phase 5 is planning and evidence consolidation only. No lesson, quiz, application, service-worker or live-site repair is authorized by this tracker. Do not start curriculum rewrites until this tracker has been reviewed and the baseline inventory/dependencies have been accepted.

---

## 1. Purpose and operating rules

This is the central work queue for converting Phase 1–4 audit observations into safe, testable repair batches across A1–C2.

1. Preserve every source finding ID and affected location from the audit log. Consolidated MIR IDs below point back to those IDs; consolidation must never erase a lesson, question, module or reviewer caveat.
2. Distinguish **source-confirmed** issues from **reported—verify**, **needs deeper review**, **optional improvement**, and **preservation-only** items.
3. “Source-confirmed” means the current repository source was inspected and demonstrates the described mismatch. It does not mean the browser, TTS output or deployed site was tested.
4. A reported finding is not automatically a defect. Review the complete question, lesson context, intended learning outcome and Spain usage before changing it.
5. No broad rewrite, lesson renumbering, route change, progress-key change, or migration is permitted as a shortcut.
6. Every repair must have a finding ID, exact source location, minimal change, test evidence and deployment/live-verification record.
7. A GitHub commit is not proof of a successful GitHub Pages deployment. Report source, deployment and live verification separately.
8. The 168-module A1–C2 architecture is the approved planning target (28 per level); it is not proof that 168 modules are implemented, an official CEFR lesson count, accreditation or externally validated proficiency.

### Status vocabulary

- **Confirmed — source:** current repository source visibly demonstrates the issue.
- **Reported — verify:** audit reviewer documented it; full-context maintainer verification remains outstanding.
- **Needs deeper review:** plausible curriculum/quality risk requiring a systematic inventory or pedagogical review.
- **Enhancement:** optional improvement, not a confirmed defect.
- **Preserve:** positive content or working behavior that must not regress.
- **Pending:** not repaired. No item in this tracker is marked fixed.

### Severity guide

- **Critical:** demonstrably wrong information likely to teach a materially false fact or create a serious learner-impact risk.
- **High:** significant accuracy, progression, assessment, availability or accessibility risk.
- **Medium:** meaningful ambiguity, support gap or consistency issue.
- **Low:** limited copy/clarity issue or optional polish.

Severity and confirmation are independent: a high-severity reported issue still requires verification before implementation.

---

## 2. Repository baseline captured for this tracker

### 2.1 Repository and documents

- Repository: `AliShah1029384756/Spanish-Seekho`
- Default branch: `main`
- Repository is public and the connected GitHub account has push permission.
- Latest commit observed before this tracker was created: `3f02b40ad3cebcb61416fd15ca15e3337052e259` — “Add Phase 4 cross-level curriculum analysis report” (28 November 2026).
- Master audit retrieved: `docs/CURRICULUM-AUDIT-LOG.md`, blob SHA `469e11caa408ff8774bd5971759ccb463ddd1e65`.
- Phase 4 report retrieved: `docs/PHASE4-CROSS-LEVEL-ANALYSIS.md`, blob SHA `7d7729edad6ac1a4afea73257c221a3ad039b1f9`.
- Project guidance in `AGENTS.md` requires reading the specification, handoff, roadmap, lesson playbook, batch plan and curriculum tracker before relevant implementation. These remain governing project documents.

### 2.2 Current structure observed

Top-level source includes `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `assets/`, `tools/`, `a1/`, `a2/`, `b1/`, `b2/`, `c1/`, `c2/` and `docs/`.

The six CEFR level folders exist. The repository also contains the word-explorer tool and project documentation. The current app-shell is static HTML/CSS/vanilla JavaScript; do not introduce a framework or JSON lesson engine as part of this repair plan.

### 2.3 Direct source evidence sampled

| Baseline ID | Location | Evidence observed | Interpretation |
|---|---|---|---|
| BASE-01 | `a1/lesson-22.html`, Colours | Text says “In the plural, add -es” while examples include `azules` and `verdes`. | The examples are fine; the rule is overgeneralized. Vowel-final `verde` takes `-s`; consonant-final `azul` takes `-es`. |
| BASE-02 | `index.html`, A2 card | Homepage says “20 starter lessons are available” and lists only A2 L01–L20 in its visible A2 group. | Conflicts with current A2 directory/service-worker references and audit inventory that include L01–L23. Exact active lesson inventory and index links still need a complete enumeration. |
| BASE-03 | `a1/lesson-15.html`, Part 3, date row | Spanish: “Hoy es miércoles, 18 de noviembre de 2026.” English: “Today is Tuesday…”; audio data: `martes`. | Source-confirmed Spanish/English/audio mismatch. The date 18 November 2026 is Wednesday. Correct target is Wednesday/`miércoles`, subject to final phrase/audio review. |
| BASE-04 | `c2/index.html`, availability/status copy | Residual wording says Units 01–03 / Lessons 01–12 are available, while another statement says all 24 core lessons and four closing modules are available. | Source-confirmed contradictory status copy. |
| BASE-05 | `sw.js` | Cache list includes A1 L01–L25, A2 L01–L23, B1/B2/C1/C2 lesson and closing-module paths, and app-shell assets. | Cache manifest is a preservation-sensitive inventory. It must be reconciled with actual deployed paths during baseline work; presence in the list alone does not prove successful offline operation. |
| BASE-06 | `app.js` | Homepage language preference uses `ss-language`; homepage completion array uses `ss-completed`; speech uses `es-ES` at rate `.85`; service worker is registered from `./sw.js`. | Preserve these behaviors and verify any other level-specific keys before implementation. |
| BASE-07 | `AGENTS.md` | Explicitly requires preserving `ss-language`, `ss-completed`, `ss-a1-done`, Android-first design, RTL correctness, project-relative paths and service-worker cache versioning. | Treat as mandatory engineering constraints. |

**Important count caveat:** The homepage A2 card visibly says 20; `sw.js` references A2 L01–L23; the audit and Phase 4 report describe 23 core lessons. This is enough to confirm a mismatch, but Batch 0 must enumerate actual files, index links, closing modules and progress calculations before deciding the canonical displayed count.

---

## 3. Consolidated findings register

The MIR IDs are stable tracker identifiers. “Source references” retain original audit/Phase 4 IDs so that the full reviewer wording, evidence and caveats remain traceable. Where an item groups multiple related findings, every source ID/location is retained.

### 3.1 Critical factual and content corrections

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-001 | A1 — `a1/lesson-15.html`, Part 3 date row | Spanish says Wednesday 18 November 2026; English says Tuesday; `data-say` says `martes`. Current source excerpt reproduces all three. | **Critical — Confirmed (source)** | Align English and speech text with Spanish: Wednesday / `miércoles`. Check the date and all visible/audio representations together. | Baseline capture; inspect all date examples and quiz references. | Wrong translation, wrong TTS, quiz inconsistency, accidental change to other weekday examples. | Static assertion for phrase/translation/`data-say`; date calculation check; browser TTS playback on a supported device; deployed-page check. |
| MIR-002 | A1 — `a1/lesson-22.html`, Part 2 Colours | “In the plural, add -es” incorrectly generalizes from `azul → azules`; `verde → verdes` takes `-s`. Current source inspected. | **High — Confirmed (source)** | Explain vowel-final adjective plural `-s` and consonant-final `-es`, with accurate examples. Preserve the existing correct vocabulary and examples. | Review surrounding gender/number explanation and A1 L10–11 agreement teaching. | Overcorrection of examples; confusion with noun plural rules or adjective gender. | Rule/example matrix includes `verde → verdes`, `azul → azules`; quiz and examples agree; no unrelated content changed. |
| MIR-003 | A1/A2 — A1 Spain-offices Part 1; Spain-housing module | Queue vocabulary `el número de cola` reportedly non-standard for intended Spain queue-ticket context; housing note “fianza often 1–2 months” may conflate statutory deposit and additional guarantees. | **High — Reported; housing requires qualified review** | Verify office phrase in exact scenario; consider `número de turno` / `sacar número`. For housing, distinguish statutory deposit from additional guarantees and obtain qualified Spain legal review; do not present language content as legal advice. | Reliable official/local Spain sources; qualified legal review for housing. | Incorrect practical/legal guidance; replacing a valid local term with an overgeneralization. | Source links/date recorded; exact scenario reviewed; legal caveat and distinction approved before publishing. |
| MIR-004 | A1 Spain-transport Part 2 | `un abono de diez viajes` reportedly uses `abono` where a multi-trip ticket is intended; reviewer suggests `bono` or `billete de diez viajes`. | **High — Reported; verify locality/operator** | Verify current transport terminology for the named Spanish context; distinguish multi-trip ticket from pass/subscription. | Official transport operator terminology and locality. | Regional ticket names vary; learner may be taught an overly universal term. | Phrase matches cited operator/context; translation and dialogue remain coherent. |
| MIR-005 | A1/A2 — A1 L20 Part 4; A2 L04/L09 pronunciation rows | Reported inconsistent `veinte` approximation, double stress marking in `a-lo-KHA-MYEN-to`, and potentially misleading `per-DONE`. | **Medium–High — Reported; verify phonetics** | Establish pronunciation notation policy first; correct syllable/stress only after phonetic review. | Pronunciation convention to be established in Batch 5 (MIR-034–MIR-037). | Inconsistent stress markers or false precision in Roman Urdu approximations. | Spanish stress checked; one stressed syllable marked; Roman Urdu/Urdu notation aligned and labelled approximate. |

### 3.2 Inventory, indexing, learner-facing status and structure

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-006 | A2 — `index.html`, `a2/index.html`, A2 lesson inventory, README, progress and closing modules | Homepage says 20 starter lessons; source inventory/audit reports 23 and service worker references L01–L23. The A2 index/README count and actual file inventory need reconciliation. | **High — Confirmed mismatch; canonical inventory pending** | Enumerate all A2 lesson files, index links, review/project/assessment/readiness modules and progress calculations. Then align all counts and labels. Do not rename files. | Batch 0 complete inventory. | Broken links, false progress percentage, missing lessons, cache omissions, learner confusion. | Automated file/link/count comparison; direct-open L01–L23; progress denominator matches canonical core count; closing modules counted separately. |
| MIR-007 | C2 — `c2/index.html`, status paragraph | “Units 01–03 / Lessons 01–12 available” conflicts with “all 24 core lessons and four closing modules available”. | **Low — Confirmed (source)** | Replace residual partial-availability statement with one accurate status consistent with actual links. | Inventory check. | Incorrect status or accidentally implying unimplemented content. | All 24 links and four closing links enumerated; copy agrees with source and deployed page. |
| MIR-008 | A1/A2/B1 — A1 L19 closing note; A2 L08 closing note; B1 L01 completion message | Stale availability/completion text reportedly claims fewer lessons exist or that future lessons will be added. A1/A2 exact copy must be checked; B1 L01 stale message is reviewer-reported. | **High — Reported; targeted source check required** | Search all levels and closing modules for “available”, “coming soon”, “in development” and future-tense completion copy; update only stale statements. | MIR-006 inventory; full string search. | Incorrectly claiming incomplete or unavailable content; broken completion flow. | Each statement reconciled against enumerated routes; no stale message remains; no completion state changed. |
| MIR-009 | A1/A2 — closing modules labelled 25–28; A2 review reportedly says “24 core topics” | A1 has 25 core lessons; A2 reportedly has 23, yet closing activities use 25–28 and A2 has an inconsistent “24 core topics” reference. | **High — Reported; verify all labels** | Adopt clear separation between core lesson numbering and end-of-level activity labels (e.g. Closing activity 1–4). Preserve existing URLs and IDs. | MIR-006; approved 168-module master plan. | URL/ID breakage, progress-key mismatch, wrong previous/next links. | Core and closing counts are unambiguous in indexes, page headings and tracker; every old route still opens. |
| MIR-010 | A2 — L08, L19, L20, L21–L23 and closing modules | Checkpoint/review/final-practice sequence reportedly labels “final” before additional new lessons. | **High — Reported; verify learner journey** | Map actual sequence and rename/reposition only where it improves meaning; “final” must refer to the true endpoint. | MIR-006, MIR-009; curriculum map. | Confusing navigation, misleading completion claims, disrupted sequence. | A2 journey map matches page titles, navigation and learner-facing status; direct-open remains available. |
| MIR-011 | A2 — L02, L13, L14, L16, L20–L23 | Internal planning labels reportedly visible: `EXTRA · MODULE 08`, `MODULE 01 / 18`, `MODULE 14`, `MODULE 22`, `MODULE 24`, `CORE MODULE 02 / 16 / 20`. | **High — Reported; verify exact strings** | Search all learner-facing pages for planning codes; replace with clear learner-facing wording or remove only after confirming they are not meaningful navigation labels. | Inventory and module naming convention. | Removing useful unit context or altering script selectors if labels are tied to code. | Search confirms no unintended internal labels; selectors/IDs unchanged; visual hierarchy retained. |
| MIR-012 | A1–C2 — all indexes, lesson navigation, review/project/assessment/readiness pages | Full route, previous/next, duplicate ID, index and module reference integrity has not been comprehensively tested. C1/C2 numbering reportedly aligns and should be preserved. | **Medium — Needs deeper review** | Build route graph and verify all links; preserve C1/C2 consistency unless a specific mismatch is proven. | Baseline route inventory. | 404s, route drift, changed lesson identity. | Every index link resolves; every page direct-opens; previous/next and closing links match intended sequence. |

### 3.3 Grammar progression, prerequisites and CEFR alignment

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-013 | A2 — demonstratives `este/ese/aquel`, including reported `aquel` in L19; possessives across A1 L04/L11 and A2 | Reported demonstratives occur without a dedicated systematic explanation; possessive `tu/su/tus/nuestro` may be used after only `mi` is introduced. | **High — Reported; full occurrence map required** | Map first use, explicit teaching, controlled practice and quiz use. Add a bridge at the best existing location or clearly label early forms as preview chunks. | Full A1/A2 grammar occurrence map; curriculum tracker. | Duplicated lessons, unplanned level shift, quizzes testing unexplained forms. | Every form used productively has prior explanation or an explicitly labelled preview; examples and quizzes match. |
| MIR-014 | A2 — L03/L07 and other reported occurrences; negative imperative across A2 | `estar + gerundio` appears in examples such as `¿Qué estás estudiando?` / `Estoy tomando…` without systematic teaching; `no hables` reportedly absent. | **High for gerund bridge; Medium for negative imperative — Reported** | Verify full A2 coverage; teach form/meaning and contrast where needed; add negative imperative only if appropriate to the A2 outcomes and prerequisites. | A2 grammar map and CEFR outcome check. | Overloading A2; presenting a construction before the learner has the required verb forms. | Explicit explanation, examples, controlled practice and a context task exist before assessment. |
| MIR-015 | B1/B2 — B1 L10, L20, L21, L24; B2 L02, L07, L10, L11, L14, L15, L23 | Imperfect, present-perfect and pluperfect subjunctive forms reportedly occur before formation/trigger teaching. Present subjunctive stem/spelling changes may be used without explanation. | **High — Reported; verify every cited location** | Build a prerequisite sequence: triggers → present forms and irregular/stem/spelling changes → perfect → imperfect → pluperfect → si-clauses/complex uses. Mark intentional early exposure as recognition/chunk and teach later. | A1/A2 prerequisite map; B1/B2 lesson sequence. | Moving lessons may break routes, IDs, prior references, quiz order or learner expectations. | Occurrence map demonstrates teach-before-test; every first-use exception is labelled and revisited; no unexplained productive assessment. |
| MIR-016 | B2 — L01–L08 compared with reported formal teaching in L09–L12 | Examples such as `vaya a funcionar` (L06) and `sería recomendable que… ampliara` (L07) precede intended grammar lessons. | **High — Reported; verify** | Add concise prerequisite bridge, mark preview, or reorder content only after impact analysis. Prefer minimal bridges over renumbering. | MIR-015; B2 route map. | Lesson sequencing changes, duplicated content, broken links. | Learner sees a clear explanation before being expected to produce/test the form. |
| MIR-017 | B1/B2 — B1 L23 reported speech/backshift; B1 L10 si + imperfect subjunctive; B2 extensions | Some constructions may be placed too early for productive B1 outcomes, although recognition exposure can be appropriate. | **Medium — Curriculum judgement; verify against stated outcomes** | Separate recognition from independent production. Confirm CEFR-informed placement using task demands, not keyword occurrence alone. | Curriculum outcomes and expert review. | Artificially delaying useful language or mislabelling valid advanced exposure as an error. | Each level’s can-do outcome, task and assessment demand align; recognition/production expectations are explicit. |
| MIR-018 | B2 — passive/impersonal structures; C1–C2 subjunctive/conditional coverage | Audit reports possible undercoverage or low keyword counts. Keyword counts cannot prove a missing concept. | **Medium–High — Needs deeper review** | Inspect explanations, varied examples, productive tasks and quiz use. Build a functional coverage map rather than count words. | MIR-015 grammar map; lesson-level review. | Adding redundant lessons for concepts already adequately taught. | Functional uses and prerequisites are mapped; any gap is evidenced by missing teach/practice/assessment rather than search count. |
| MIR-019 | A1–C2 — `vosotros`, imperative and subjunctive morphology; B1 L19, B2 L06/L13, C1 L16 | Reported vosotros exposure drops after A2; examples exist in selected B1/B2 lessons but explicit imperative/subjunctive teaching is unclear. C1 L16 is a strong regional-variation model. | **High for sustained Spain orientation; verify exact coverage** | Map vosotros pronouns, verb endings, imperative/subjunctive forms and register contrasts; spiral practice naturally through B1–C2. Preserve C1 L16. | Grammar map; register policy; MIR-015. | Inconsistent tú/usted/vosotros audience; regional claims overstated. | A level-by-level map shows where each form is taught, practised and used productively; register is clear. |
| MIR-020 | A1–C2 — grammar and curriculum map | Phase 4 recommends first-use → explicit teach → controlled practice → contextual practice → productive use → spiral review. Current maps are incomplete for several topics. | **High — Systemic dependency** | Create a concept-to-lesson map before edits; include articles/agreement, ser/estar/hay, past tenses, gerund, pronouns, subjunctive, conditional, reported speech, imperatives, passive and subordination. | Baseline inventory and approved master plan. | Repetition, skipped prerequisites, accidental curriculum drift. | Every priority concept has a mapped first use, teach point, practice, assessment and later spiral; exceptions are documented. |

### 3.4 Spain-specific vocabulary, register and practical content

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-021 | A1 — L05/L07/L25; broader A1 education vocabulary | `colegio` reportedly appears late compared with `escuela`; both can be valid depending on context. | **Medium — Reported** | Introduce a concise Spain-oriented distinction naturally; do not label `escuela` universally wrong. | Spain vocabulary map. | False regional rule or unnecessary duplication. | Examples show valid contextual usage; no blanket claim that one term is always incorrect. |
| MIR-022 | A1/A2 — pronunciation/regional notes; A1 L02 | Distinción/seseo/ceceo coverage reportedly oversimplifies regional patterns; A1 consonant overview may omit v/b, ge/gi, gu, qu and ch. | **Medium — Reported** | Provide accurate, concise Spain-oriented sound guidance and regional variation without stereotyping or implying a single uniform Spain accent. | MIR-023 pronunciation policy; native-speaker review recommended. | Misrepresenting Spanish regional variation; overloading beginners. | Sound map is accurate, examples are correct, regional qualifications are clear and learner-friendly. |
| MIR-023 | A1–C2 — A1 L07 conversation and vocabulary across levels | Everyday Spain vocabulary `vale`, `tío`, `guay`, `patata`, `zumo`, `me da igual`, `ni idea` reportedly limited or absent in some levels. | **Low — Enhancement / reported gap** | Add selectively where register and CEFR level fit; label colloquial/informal use and avoid turning vocabulary into a checklist. | Vocabulary progression map and register policy. | Overuse of slang; unnatural or regionally narrow examples. | Each addition has context, register label, translation and natural dialogue; no unnecessary repetition. |
| MIR-024 | A1 — L06 café dialogue; L16 directions; L17 shopping; L18 time; A2 L04/L11/L18/L22 | Reported naturalness/register issues: `¿Qué quiere?` in café context; tú/usted command mixing; `mayor/menor` glossed as physical size; `¿Podría llamar un taxi?`; `por la tarde` too narrowly glossed; `oficina de atención ciudadana` institutional wording. | **Medium–High — Reported; context review required** | Review each full dialogue and intended meaning. Distinguish tú/usted; explain `mayor/menor` by context and use `más grande/pequeño` for physical size; choose context-appropriate service phrases. | Native Spain usage review; level outcomes. | Replacing valid expressions with overconfident alternatives; register mismatch. | Each phrase has an identified speaker/audience/context; translation matches intended meaning; alternatives are labelled, not misrepresented as errors. |
| MIR-025 | A2 — L18 `Necesito que venga alguien`; A1 L17 `quisiera`; B1 L20 `quisiera/podría` | Subjunctive/polite-request constructions appear in notes/examples with incorrect or absent grammatical explanation. | **High — Reported; overlapping grammar prerequisite** | Explain `quisiera` as imperfect subjunctive used in a conventional polite-request formula, distinct from conditional `querría`/`podría`; explain or label subjunctive trigger in `necesito que venga`. | MIR-015, MIR-020. | Inaccurate grammar metalanguage or teaching advanced formation prematurely. | All affected explanations distinguish form and function; examples and answer keys consistent. |
| MIR-026 | A1/A2 — Spain-housing, offices, transport and healthcare modules | Legal/administrative content may become outdated or overstate a rule; housing deposit note is a flagged example. | **High where legal/practical; Medium otherwise — Reported** | Establish freshness gate: reliable official Spain source, locality/date, qualified review for legal claims, clear separation of language practice from advice. | Official source research and specialist review. | Learner relies on outdated legal or administrative guidance. | Every practical/legal statement has a dated authoritative source and appropriate caveat; no unsupported universal claim. |

### 3.5 Quiz quality and assessment redesign

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-027 | A1–C2 — all core quiz banks; C1/C2 48 lessons | Longest correct option reported at A1 36%, A2 43%, B1 51%, B2 64%; C1/C2 sample estimate about 84% of 384 questions. Earlier reviewer figures vary by sample. | **High — Reported statistics; recompute** | Export current quiz bank and calculate correct-option length/position by level. Redesign only biased items with natural plausible alternatives; do not mechanically equalize word counts. | Stable quiz extraction; MIR-015/MIR-020 for prerequisite coverage. | Answer-key index shifts, scoring bugs, new unnatural distractors, completion tracking. | Reproducible report before/after by level; correct answer not systematically signalled by length or position; scoring tests pass. |
| MIR-028 | A1–C2 — all quiz banks; B1 L04 Q4/L11 Q5; B2 L01 Q5 examples | Invalid or obviously ungrammatical distractors reportedly allow guessing (e.g. temporal contradictions such as `vivía mañana`). | **High — Reported; sample verification** | Use grammatically plausible Spanish alternatives that are wrong for a clear contextual/semantic reason. | Native/qualified language review; quiz bank export. | Ambiguous alternatives, answer key errors, difficulty drift. | Each distractor is valid Spanish in some context but clearly wrong in the stated context; rationale explains why. |
| MIR-029 | A1/A2/B1 — A1 L08 Q6, L15 Q4; A1 L18 Q4; A2 L08 Q3, L19 Q8; A2 Review Q4; A2 L10 Q8; B1 L17 Q2/L24 Q2 | Reported valid alternate answers, vague tense context, lifetime-vs-recent experience mismatch, valid politeness distractors and `hemos de/habemos` ambiguity. | **High — Reported; verify each complete item** | Preserve all affected question IDs; add context, accept valid variants, or retarget the learning objective. Never mark a natural valid form wrong just to force one answer. | Full item extraction; grammar map; source IDs QA-001–010 and B12-002/003. | Quiz answer key, explanation, scoring and learner progress. | Two independent reviewers can justify one intended answer from the context; accepted variants are tested; question count/IDs remain stable. |
| MIR-030 | A1–C2 — all quizzes; C2 review eight questions | Tense clue words `ayer`/`mañana` reportedly reveal answers; C2 review explanations reportedly lack “why” explanations. | **High for systemic clueing; Medium for C2 explanation gap — Reported** | Rework clue-dependent items to test meaning in context; add concise answer explanations and relevant distractor reasoning, prioritizing C2 review. | MIR-027–029; content review. | Overly difficult questions or explanations that reveal answers before attempt. | Audit clue dependence; explanation field exists and is accurate; quiz interaction still hides feedback until answer. |
| MIR-031 | B2–C2 — core quiz banks, especially English meta-question stems | Many advanced questions reportedly test English labels/grammar concepts rather than Spanish comprehension or production. | **High — Reported; classify current item bank** | Increase Spanish-primary prompts, contextual cloze, reading/listening comprehension, reformulation and short production tasks with criteria. Keep English as support, not dominant assessment medium. | Grammar map and rubric design; quiz architecture constraints. | Learner language support removed abruptly; quiz scoring no longer objective. | Item-language distribution measured; Spanish task authenticity improves; answer validation and feedback remain accessible. |
| MIR-032 | A1–C2 — review/project/assessment/readiness modules | Speaking/writing self-checklists reportedly lack detailed rubrics in A1/A2 and some advanced modules; B2 reportedly has a useful speaking/pronunciation rubric. | **High — Reported; inspect existing B2 model** | Preserve and adapt the B2 rubric where appropriate. Add level-appropriate criteria, sample outputs and task requirements (completion, range/accuracy, organization, comprehensibility, interaction, register, pronunciation as relevant). | Task inventory; CEFR outcomes; preserve B2 rubric. | Rubric too complex for beginner learners; misleading self-assessment claims. | Every productive task has an understandable checklist/rubric and sample; criteria fit the level and task. |
| MIR-033 | A1 — quiz balance | A1 quizzes reportedly emphasize vocabulary recall more than productive language use. | **Medium — Reported** | Add scaffolded sentence building, contextual completion and practical response tasks alongside recognition items. | Beginner outcome map; quiz redesign architecture. | Overloading A1 or making assessment inaccessible. | A1 outcomes include both recognition and simple supported production; tasks remain mobile-friendly. |

### 3.6 Roman Urdu, Urdu-script pronunciation, translation and TTS

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-034 | A1/A2 — A1 L01/L02 and pronunciation rows throughout A1/A2 | Reported inconsistent notation for /θ/: Urdu `ث` may be read as /s/; `THEE`, `ث` and `تھ` are mixed. | **High — Reported; full notation review required** | Define one learner-safe convention, explain distinción/seseo where relevant, and label approximations as approximate. Test readability with Pakistani Urdu readers if possible. | Pronunciation policy; MIR-022. | Teaching wrong sound or making Urdu script harder to read. | Every affected row follows the documented policy; learner note explains limitations; representative speaker review completed. |
| MIR-035 | A1 L02 and A2 L01–L06 | Spanish `b/v` approximation reportedly alternates between Roman Urdu B and Urdu ب/و, implying a distinction that does not match standard Spanish phonology. | **High — Reported** | Teach the shared Spanish /b/ sound family in accessible terms and align Roman Urdu/Urdu examples. | Pronunciation policy. | False claim that Spanish b and v have separate fixed sounds. | All sample words and explanation agree; no contradictory letter-to-sound mapping. |
| MIR-036 | A1 L03/L04/L09/L12/L15/L22–25, Spain modules; A2 L01/L02 | Spanish `j` approximated variously as kh, h, he/ho, khu/hoo. | **High — Reported** | Choose a consistent Spain Spanish /x/ approximation for Pakistani learners (e.g. kh/خ as an approximation, not an exact equivalent); align examples. | Pronunciation policy and sample review. | Overstating equivalence; accidental changes to vowels/stress. | All listed rows audited; notation is consistent and explicitly approximate. |
| MIR-037 | A1 L05, L21/L22 and related pronunciation rows | `ll` represented as y/yeísmo in some rows and ly in others. | **High — Reported** | Define target pronunciation model and yeísmo convention; explain regional variation without implying /ʎ/ is impossible. | Spain pronunciation policy. | Incorrectly erasing legitimate regional variation. | All affected words match the declared model; regional note is accurate. |
| MIR-038 | A1 L09 Lahore; A1 Spain-offices NIE/DNI; all `data-say` rows | Silent Spanish `h` guidance/audio may conflict; combined NIE/DNI display reportedly plays only NIE; more general audio text mismatches may exist. | **Medium — Reported; source + device playback needed** | Compare every visible Spanish phrase with `data-say`; align multi-phrase controls; separately test actual es-ES speech output on device. | TTS test device; audio extraction. | Speech speaks stale/wrong text; accents, abbreviations and names mispronounced. | Static phrase/data parity plus real browser playback; limitations of system TTS documented. |
| MIR-039 | A1 L08 onward, A1 L13–18, A2 L13–23 | Urdu-script pronunciation and Roman Urdu support reportedly falls off while pages/header imply support. | **High — Reported; coverage audit required** | Build support matrix per lesson and section; restore promised help where needed or accurately label deliberate omissions. Avoid forcing unnecessary phonetic transcription into advanced content. | Pronunciation style guide; level support standard. | Overcrowded pages, broken RTL, inconsistent support promise. | Coverage matrix completed; every header matches actual page content; RTL and mobile checks pass. |
| MIR-040 | B1 L01–24; B2 examples and later lessons; C1/C2 dense explanations | B1 early lessons reportedly offer intros/notes but few example translations; B2 explanations exist but phrase translations are reportedly absent; some advanced Roman Urdu is dense/literal. B2 L07–08/L13–24 Roman Urdu was not fully reviewed. | **Medium–High — Reported/partial review** | Define support standard by level/section (full translation, key gloss or optional help); shorten dense explanations without diluting advanced concepts. Review uninspected B2 Roman Urdu. | Language-support policy; reviewer scope completion. | Removing useful scaffolding or making advanced pages excessively verbose. | Sample and coverage review across every B1/B2 lesson; language headers match actual support; learner-facing Roman Urdu is clear. |

### 3.7 Repetition, learning experience and optional enhancements

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-041 | A2 — L12 vs L03; L15 vs L05/L06; L14 vs A1 L18/A2 L05; B1 L05–07/B2 L05–08 | Obligation, plan and `gustar` teaching reportedly repeats; B1/B2 opinion/argument sequence may overlap. Repetition can be useful if each recurrence deepens skill. | **Medium — Reported** | Map each recurrence to a new function, register, complexity or task. Keep deliberate spiral review; remove only exact redundant teaching. | Curriculum concept map. | Removing useful spaced retrieval or introducing gaps. | Every repeated concept has a documented new outcome or is intentionally marked as review. |
| MIR-042 | B1/B2 — B1 L08/L23; B2 L06/L13/L23; B1 L06/L08; B2 L16/L24 | Similar phrases reportedly repeated nearly verbatim: `Si te he entendido bien...`, `¿A qué te refieres exactamente?`, `A cambio de ampliar el plazo...`. | **Medium — Reported** | Keep useful phrase recycling but vary context and communicative purpose. | Repetition map. | Unnecessary deletion of useful phrase practice. | Phrase reuse map identifies the learning purpose and changed demand each time. |
| MIR-043 | B1–C2 — core lesson structure | Uniform 12-phrase/eight-question structure reportedly risks monotony at advanced levels. | **Low — Enhancement** | Preserve familiar navigation/outcomes but vary task formats: source comparison, case analysis, role-play, debate, audio response and short writing. | Product UX review; assessment redesign. | Inconsistent page experience or increased complexity without learner benefit. | Task variety improves without breaking navigation or mobile layout. |
| MIR-044 | C2 — review module | Marked Spanish examples reportedly sparse compared with other closing modules. | **Low — Reported** | Verify example density; add selected models only if the review module lacks enough Spanish for transfer practice. | C2 closing-module audit. | Unnecessary padding or duplication. | Examples directly support review outcomes and are not copied without purpose. |
| MIR-045 | C1/C2 — sampled advanced lessons | Some abstract Roman Urdu explanations reportedly dense or literal; some examples slightly textbook-formal. | **Low–Medium — Reported / sampled** | Edit only the densest sections for conversational clarity and add natural alternatives where register allows. Preserve advanced content and positive explanations. | Language support policy; native-speaker review recommended. | Simplifying away nuance or changing intended register. | Meaning and register retained; examples are context-appropriate. |
| MIR-046 | A1–C2 — curriculum-wide vocabulary and Spain map | Phase 4 proposes a vocabulary progression inventory and Spain Spanish feature map (distinción/seseo, vosotros, tú/usted, idioms, transport/admin terms). | **Low — Enhancement** | Build as a mapping aid, not a new lesson requirement. Use it to guide selective recycling and avoid raw word-count targets. | MIR-020, MIR-023. | Turning optional features into unnecessary curriculum bloat. | Map shows first introduction, register, regional note, spiral practice and assessment where relevant. |
| MIR-047 | A1–C2 — listening/speaking/writing tasks | Listen buttons/TTS alone do not constitute listening assessment; Phase 4 recommends graded audio comprehension and speaking/writing exemplars. | **Medium — Enhancement / skill evidence gap** | Add feasible listening comprehension checks and task exemplars/rubrics where the platform can support them without paid APIs. | Assessment redesign; TTS limitations and mobile UX. | Overstating speech recognition or listening capability; device-dependent audio. | Listening tasks test comprehension, not just playback; production tasks include criteria and sample output. |

### 3.8 Technical, accessibility and preservation-sensitive verification

| Tracker ID | Level / exact location | Evidence and problem | Severity / confidence | Recommended correction | Dependencies | Regression risks | Verification criteria |
|---|---|---|---|---|---|---|---|
| MIR-048 | Whole repository — app shell, all lesson pages, `app.js`, level scripts | Language switching and persistence need complete source/live verification. Homepage `app.js` stores `ss-language`; README says homepage supports Roman Urdu/Urdu/English, but lesson-page translation scope may differ. | **Medium — Needs verification** | Document actual scope per page type; preserve existing stored preference and ensure Urdu RTL with Spanish/Latin text direction handled correctly. | Full app/page inventory. | Lost preference, incorrect RTL/LTR, falsely promising full translation. | Switch Roman Urdu/Urdu/English; reload; verify persistence, text direction, mixed-script readability and truthful labels. |
| MIR-049 | Whole repository — `sw.js`, `manifest.webmanifest`, app-shell assets and all lesson routes | Service worker lists many pages and uses a named cache. Cache coverage, update behavior and offline operation have not been verified on a real browser/device. | **High QA priority — Not a confirmed bug** | Check every listed path exists; verify install/activate/fetch behavior, cache version bump for app-shell changes, offline fallback and stale-cache removal. | Baseline route inventory; supported Android browser. | Broken offline pages, stale content, cache installation failure. | Cache paths all resolve; online first visit works; offline revisit works for intended pages; new version replaces old cache; no claim beyond tested scope. |
| MIR-050 | Whole repository — all lesson files, progress scripts and `localStorage` | Existing IDs/routes and local progress are preservation-critical. `AGENTS.md` names `ss-language`, `ss-completed`, `ss-a1-done`; additional level-specific keys must be discovered. This is a risk, not a confirmed defect. | **Critical preservation constraint — Not a current defect** | Inventory every storage key and DOM/quiz identifier before editing. Avoid key/schema changes; if unavoidable, design and test a backward-compatible migration with explicit approval. | Baseline storage inventory and test data. | Learner progress loss, completion reset, duplicate completion, wrong progress percentage. | Seeded pre-change storage survives update; completion remains correct; no key removed or reset; migration tests if approved. |
| MIR-051 | Whole repository — responsive layout, keyboard/accessibility, RTL and audio controls | Mobile, RTL, accessibility and TTS live checks are not complete. | **High QA priority — Not a confirmed bug** | Test Android-first layout, desktop, keyboard/focus, labels, contrast, zoom, touch targets, reduced motion and RTL. Fix only observed defects. | Device/browser QA; no extra app installation required. | Visual regressions, inaccessible controls, RTL overflow. | Test matrix completed with device/browser/version and pass/fail evidence; screenshots/notes retained. |
| MIR-052 | Whole repository — all routes, source and GitHub Pages deployment | No comprehensive route/source-vs-live comparison has been performed in Phase 4. | **High QA priority — Not a confirmed bug** | For each approved repair batch, compare source commit with GitHub Pages, check deployment status and inspect changed pages live. | Tests pass; commit SHA known. | Claiming deployment succeeded when only a commit exists; stale cached site. | Deployment status successful; live URL reflects commit; hard-refresh/cache check; affected pages and neighboring routes verified. |

---

## 4. Cross-level source finding crosswalk

This section guarantees traceability to the source registers. Do not delete original source findings when marking a MIR item complete.

### 4.1 Master audit IDs retained

- **Quiz findings:** QA-001–QA-016.
- **Spain-specific language:** ES-001–ES-007.
- **Potential CEFR gaps:** CEFR-001–CEFR-006.
- **Lesson text/content:** TXT-001–TXT-008.
- **Pronunciation:** PRON-001–PRON-011.
- **Naturalness/register:** NAT-001–NAT-010.
- **Pedagogy/structure:** PED-001–PED-006.
- **Additional coverage observations:** GAP-001–GAP-009.
- **B1/B2 audit:** B12-001–B12-006.
- **C1/C2 audit:** C12-001–C12-018.

### 4.2 Phase 4 consolidation IDs retained

- **Confirmed source issues:** CONF-01–CONF-03.
- **Progression:** PROG-01, PROG-02, PROG-03, PROG-04, PROG-05, PROG-06, PROG-07, PROG-08, covering subjunctive prerequisites, B2 teach-before-use ordering, reported speech/backshift, gerund/pronoun/demonstrative/possessive/imperative bridges and progression concerns.
- **Coverage:** GAP-01 onward, including Spain vocabulary and practical/legal material.
- **Assessment:** ASSESS-01–ASSESS-08.
- **Language/pronunciation:** LANG-01–LANG-10.
- **Structure:** STRUCT-01–STRUCT-06.
- **Technical consistency:** TECH-01–TECH-10.
- **Optional enhancements:** OPT-01–OPT-06.
- **Positive strengths:** Phase 4 Category 9 and C12-005/C12-006/C12-008/C12-013/C12-017.

**Crosswalk rule:** The consolidated MIR rows are the implementation queue; the original IDs remain the evidence trail. Overlapping source findings are intentionally grouped (for example QA-002/TXT-006/B12-001 under polite-request grammar; QA-011/C12-001/C12-011 under answer-length bias; PRON-010/011/PED-001/LANG-06 under support coverage). Do not create duplicate fixes for the same underlying issue.

---

## 5. Repair batches and dependency order

The following order is recommended. It is a dependency plan, not authorization to begin edits before the tracker review gate.

| Batch | Name | Findings | Work | Entry dependencies | Exit gate |
|---|---|---|---|---|---|
| 0 | Baseline inventory and evidence freeze | BASE-01–07; MIR-006, 008–012, 020, 048–052 | Enumerate all core lessons and closing modules; capture routes, hashes, progress keys, indexes, quiz schema/statistics, cache paths, current live baseline and source-vs-live state. | None | Canonical six-level inventory, route map, storage map, quiz extraction and test baseline documented. |
| 1 | Critical factual, translation and practical-content corrections | MIR-001–005, 003–004, 026 | Correct verified factual mismatch; verify Spain practical terminology and legal statements with authoritative sources. | Batch 0; source and qualified review where applicable | Each changed phrase has evidence, matching translation/audio and review record. |
| 2 | Indexing, counts, labels and documentation consistency | MIR-006–012 | Align homepage/index/README/lesson counts/status copy; clarify core vs closing labels; remove verified internal planning labels; verify navigation. | Batch 0 inventory | All indexes and copy match canonical inventory; routes and IDs unchanged. |
| 3 | Grammar prerequisites and CEFR progression | MIR-013–020, 025 | Map first-use/teach/practice/assessment; repair highest-risk demonstratives, possessives, gerund, subjunctive and register bridges. | Batch 0; Batch 2 labels/counts where relevant | No unexplained productive test of priority forms; progression reviewed across adjacent levels. |
| 4 | Quiz quality and productive assessment | MIR-027–033, 047 | Recompute current metrics; fix ambiguous/invalid items; reduce answer-length cueing; increase Spanish-primary tasks; add rubrics/exemplars. | Batches 0–3 (especially grammar map) | Before/after metrics, answer-key validation and productive-task rubrics pass. |
| 5 | Roman Urdu, Urdu and pronunciation consistency | MIR-022, 034–040, 045, 048 | Approve notation policy; audit translations/pronunciation coverage; align Roman Urdu, Urdu script, Spanish and TTS; review B1/B2/advanced support. | Batch 0; Spain/register and grammar policies | Coverage matrix complete; representative native/learner review; RTL and TTS checks pass. |
| 6 | Spain vocabulary, register and deliberate spiral | MIR-019, 021–026, 041–046 | Strengthen vosotros and regional/register progression; selectively add everyday Spain vocabulary; distinguish useful repetition from duplication. | Batches 3 and 5 | Each addition has context, CEFR purpose, register and no unnecessary duplication. |
| 7 | Technical, mobile, offline and final regression | MIR-012, 038, 048–052 | Test routes, localStorage, language switching, quizzes, service worker, offline, responsive UI, accessibility and source/live parity. | All approved repair batches | All release gates pass; unresolved issues documented; deployment and live verification evidence recorded. |

### 5.1 Recommended priority within batches

1. Fix the source-confirmed A1 date mismatch and A1 adjective plural rule after baseline snapshot.
2. Reconcile A2 20-vs-23 and C2 12-vs-24 status copy after exact inventory.
3. Check stale A1/A2/B1 completion messages and A2 closing-module labels.
4. Map subjunctive teach-before-use and B2 L01–08/L09–12 sequencing before quiz changes.
5. Recompute quiz metrics from current source before selecting questions for redesign.
6. Approve pronunciation notation before bulk edits to Roman Urdu/Urdu rows.
7. Perform mobile/live/offline regression only after source changes have passed structural checks.

---

## 6. Preservation checklist — mandatory before any implementation

### Curriculum and identity
- [ ] Preserve all existing A1–C2 lesson IDs and filenames.
- [ ] Preserve existing lesson URLs and direct-open access.
- [ ] Preserve the approved curriculum architecture and current useful lesson content.
- [ ] Preserve Spain/Castilian orientation; qualify regional variation accurately.
- [ ] Preserve Roman Urdu as the default teaching experience where currently implemented.
- [ ] Preserve Urdu-script and English support where present; do not falsely promise full page translation if a switch only changes selected interface text.
- [ ] Preserve valid Spanish alternatives and natural variants; do not mark them wrong to force a single answer.
- [ ] Preserve C1 L16 regional-variation strengths and C2 L03 Peninsular idiom strengths.
- [ ] Preserve B1 narrative progression, B2 argument/narrative complexity and advanced C1/C2 discourse strengths.
- [ ] Preserve the no-paid-API/free-access principle and static architecture.

### Learner data and behavior
- [ ] Preserve `localStorage` key `ss-language`.
- [ ] Preserve `localStorage` key `ss-completed`.
- [ ] Preserve `localStorage` key `ss-a1-done`.
- [ ] Discover and preserve every additional level-specific progress key.
- [ ] Preserve existing completion state and progress counters.
- [ ] Preserve quiz IDs, answer validation, scoring and feedback behavior unless a tested change is explicitly approved.
- [ ] Preserve language preference across reloads.
- [ ] Preserve Urdu RTL and Spanish/Latin-script LTR direction in mixed content.
- [ ] Preserve listen controls and ensure each `data-say` matches the visible Spanish phrase.
- [ ] Preserve open lesson navigation; do not add completion gates.

### Technical and experience
- [ ] Preserve `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `sw.js` behavior.
- [ ] Preserve the current static HTML/CSS/vanilla-JS architecture unless a separately justified decision is approved.
- [ ] Preserve project-relative GitHub Pages paths.
- [ ] Preserve service-worker cache coverage and increment cache version when relevant app-shell assets change.
- [ ] Preserve offline fallback behavior within its tested scope.
- [ ] Preserve mobile-first layout and touch usability.
- [ ] Preserve keyboard operation, focus visibility, semantic labels, contrast and reduced-motion support.
- [ ] Do not introduce paid APIs, mandatory accounts, unnecessary dependencies or another required Android application.
- [ ] Keep CEFR-informed/non-accredited claims honest; do not imply official CEFR certification.

---

## 7. Verification plan

### 7.1 Source and structural checks

- Enumerate actual files in each level: core lessons 01–24 where present, any level-specific count variation, and four closing modules.
- Compare file inventory against level index links, homepage cards, README, curriculum tracker, progress denominator and service-worker list.
- Check missing files, broken relative links, duplicate HTML IDs, duplicate question IDs, broken previous/next links and incorrect unit references.
- Search stale status strings, internal planning labels, “coming soon”, “in development”, outdated lesson counts and contradictory completion messages.
- Extract quiz arrays into a reproducible dataset; calculate per level:
  - total questions and answer-key validity;
  - correct-option position distribution;
  - correct-answer length and longest-option rate;
  - stem language (Spanish/English);
  - distractor grammar/context plausibility;
  - explanation/why-field coverage;
  - duplicate and near-duplicate questions.
- Extract grammar occurrences and classify each as first exposure, explicit teaching, controlled practice, contextual practice, assessment or later spiral.
- Compare visible Spanish phrase, English translation, Roman Urdu, Urdu-script pronunciation and `data-say` values.
- Inventory all localStorage keys and progress writes before modifying lesson scripts.
- Check `sw.js` cache paths against repository files; verify cache version behavior.

### 7.2 Content and pedagogical checks

- A1: survival phrases, basic sentence/question construction, agreement, pronunciation and simple practical tasks.
- A2: simple past events/habits, plans, comparisons, requests, routine services and connected descriptions.
- B1: connected narratives, explanations, opinions, conversation management and supported complex forms.
- B2: nuanced argument, negotiation, narrative perspective and complex input with explicit prerequisite teaching.
- C1: flexible stance, inference, register, cohesion, synthesis and mediation.
- C2: fine semantic distinctions, rhetorical precision, synthesis across sources and audience-appropriate output.
- Verify every claimed learning outcome has an example/model, practice opportunity and observable assessment evidence.
- Check recognition versus independent production expectations separately.
- Ask a qualified Spain Spanish reviewer to assess disputed naturalness, register, regional vocabulary and pronunciation notation where feasible.

### 7.3 Browser/device and live checks

- Use the existing Android phone/browser workflow; do not require the owner to install another app.
- Open every level index and representative lessons on mobile; check desktop layout where available.
- Confirm direct lesson URLs, previous/next/index navigation, closing modules and progress indicators.
- Switch Roman Urdu ↔ Urdu ↔ English where supported; reload and confirm preference persistence.
- Check Urdu RTL, Spanish LTR and mixed-script punctuation/layout.
- Play representative TTS examples, including accents, numbers, names, abbreviations and corrected date row.
- Verify service-worker install/activate/cache refresh and offline revisit on a supported browser.
- Test keyboard focus, button names, touch target sizes, zoom, contrast and responsive wrapping.
- Compare deployed GitHub Pages content with the exact source commit after deployment.

### 7.4 Release gates

A repair batch is not complete until all applicable gates pass:

- [ ] Finding ID and exact changed location recorded.
- [ ] Evidence and status are accurate; no reported issue silently promoted to confirmed.
- [ ] Only intended files/sections changed.
- [ ] Relevant static/source checks pass.
- [ ] Quiz answer keys, scoring, explanations and progress behavior pass.
- [ ] Adjacent lesson progression reviewed.
- [ ] Language switching and RTL pass where affected.
- [ ] Existing localStorage data survives.
- [ ] Mobile/browser checks pass where applicable.
- [ ] Service-worker cache updated and offline test passes where applicable.
- [ ] GitHub commit SHA recorded.
- [ ] Deployment status confirmed separately.
- [ ] Live URL checked after deployment.
- [ ] Remaining limitations and rollback path documented.

---

## 8. Batch completion log

Do not pre-fill a batch as complete. Add an entry only after evidence exists.

| Batch | Status | Finding IDs closed | Changed files | Tests / results | Commit | Deployment / live check |
|---|---|---|---|---|---|---|
| 0 — Baseline | Pending | — | — | — | — | — |
| 1 — Factual/content | Pending | — | — | — | — | — |
| 2 — Index/docs | Pending | — | — | — | — | — |
| 3 — Grammar progression | Pending | — | — | — | — | — |
| 4 — Assessment | Pending | — | — | — | — | — |
| 5 — Multilingual/pronunciation | Pending | — | — | — | — | — |
| 6 — Spain/register/spiral | Pending | — | — | — | — | — |
| 7 — Regression/release | Pending | — | — | — | — | — |

### Finding closure template

For each closed MIR item, record:

- Finding ID and original source IDs:
- Final confirmation status:
- Exact files/sections changed:
- Change summary:
- Tests and evidence:
- Adjacent-level/regression check:
- Commit SHA:
- Deployment status:
- Live verification URL/date/device:
- Remaining limitation or rollback note:

---

## 9. Known limitations and outstanding verification

1. Phase 1–4 source documents include reviewer-reported findings with different levels of coverage. The audit log states A1–A2 quiz review covered 440 items, but full Urdu pronunciation line-by-line review was not completed.
2. B1–B2 review reports all B1 lessons read, but B2 Roman Urdu explanations in L07–08 and L13–24 were not fully reviewed; quiz manual review was partial (automated checks plus approximately 85 manually inspected items).
3. C1–C2 review structurally extracted all 48 core lessons and eight closing modules and parsed 384 core quiz questions; deep manual linguistic review was representative rather than sentence-by-sentence for every lesson.
4. Phase 4 did not perform a complete line-by-line audit of all 144 core lessons, all quizzes, all modules or all learner-facing flows.
5. No Phase 4 browser walkthrough, deployed-site QA, Android device test, TTS playback, offline test or native-speaker panel review was completed.
6. Quiz statistics are reviewer-reported and must be recomputed from the current source before decisions.
7. Keyword counts do not prove that a grammar concept is absent or adequately taught.
8. Housing/legal and administrative information requires authoritative current sources and, where relevant, qualified Spain legal review.
9. The exact canonical A2 core lesson count must be confirmed by enumerating repository files and route links; do not infer it from a single page or cache list.
10. The current tracker is a planning artifact, not a declaration that any curriculum issue has been fixed.

---

## 10. Phase 5 acceptance checklist

- [ ] Latest master audit retrieved from GitHub and read.
- [ ] Latest Phase 4 report retrieved from GitHub and read.
- [ ] Repository structure and representative source files inspected.
- [ ] Source-confirmed Phase 4 findings represented.
- [ ] Reported findings retained with original IDs and verification caveats.
- [ ] Duplicate issues consolidated without losing affected locations.
- [ ] Each MIR item has severity, confidence, recommendation, dependencies, regression risks and verification criteria.
- [ ] Repair batches ordered by dependencies.
- [ ] Preservation checklist included.
- [ ] Verification plan includes source, pedagogical, browser, mobile, language, offline, regression and live checks.
- [ ] Tracker fetched again from GitHub after creation and checked for content integrity.
- [ ] Latest commit and file status recorded.
- [ ] No curriculum implementation or deployment performed as part of Phase 5.

**Phase 5 exit condition:** the tracker is complete, fetched back and verified; the owner has reviewed the consolidated plan; the baseline inventory and dependency order are clear. Only then should the project move to the first authorized repair batch.

---

**Project principle:** Spanish Seekho ko dobara se likhna maqsad nahi. Existing strong curriculum, Spain-oriented identity, Pakistani learner support, useful examples, learner progress and mobile-first experience ko preserve karte hue accuracy, coherence, assessment quality and reliability improve karni hai.
