# Spanish Seekho — Project Specification

_Status: Baseline specification v1.0 (documentation baseline; implementation audit pending)_  
_Last updated: 24 November 2026_  
_Owner-approved product direction: Spanish Seekho curriculum and learning platform_

> This is the concise source of truth for product intent, requirements, constraints and acceptance principles. It is deliberately kept lightweight. Detailed lesson sequencing remains in `CURRICULUM-MASTER-PLAN.md`; lesson authoring rules remain in `LESSON-PRODUCTION-PLAYBOOK.md`.

## 1. Project overview

**Product:** Spanish Seekho  
**Mission:** Making Spanish Learning Accessible to Every Pakistani.

Spanish Seekho is a free, mobile-first Spanish-learning platform for Pakistani learners. It aims to help complete beginners build practical Spanish communication skills, including learners preparing to live, study or work in Spain.

### 1.1 Product principles

1. Accuracy and learning value before content volume.
2. Free access to core learning; avoid unnecessary accounts, paid services and barriers.
3. Teach contemporary standard Spanish from Spain (Castilian), noting regional variation where useful.
4. Use simple Roman Urdu as the default teaching language, with Urdu-script and English support according to actual feature coverage.
5. Design mobile-first, especially for Android users.
6. Preserve learner progress and existing lesson links.
7. Be transparent about implemented, partially supported, planned and unverified features.
8. Build a useful learning product, not merely a portfolio demonstration.

## 2. Users and use cases

### 2.1 Primary users

- Pakistani learners starting Spanish from zero.
- Learners who prefer explanations in Roman Urdu or Urdu.
- Learners preparing for everyday life, study or work in Spain.

### 2.2 Core user goals

- Start learning without payment or mandatory account creation.
- Understand Spanish through accessible explanations and practical examples.
- Practise vocabulary, grammar and communication.
- Revisit lessons and retain progress on their device.
- Prepare for realistic everyday situations in Spain.
- Understand their learning progress without being misled about official proficiency or certification.

## 3. Scope

### 3.1 Product scope

The planned learning pathway covers CEFR levels A1–C2, with 28 Spanish Seekho modules per level (168 total). This is the project's own curriculum structure, not a module count prescribed by CEFR.

The six Spain Life topics (transport, healthcare, airport, housing, public offices and shopping) are a companion practical pathway, not a seventh CEFR level.

The approved curriculum sequence and level outcomes are defined in [CURRICULUM-MASTER-PLAN.md](CURRICULUM-MASTER-PLAN.md).

### 3.2 Out of scope unless separately approved

- Official Council of Europe or Instituto Cervantes accreditation, endorsement or certification.
- Claims that a website quiz establishes a learner's official CEFR proficiency.
- Mandatory paid subscriptions or paid APIs for core learning.
- Mandatory user accounts or cloud-based progress synchronisation.
- A framework migration or JSON lesson engine without a tested proof of concept and explicit technical justification.

## 4. Functional requirements

Requirement status describes the current documentation snapshot, not a completed code audit.

| ID | Requirement | Baseline status |
|---|---|---|
| FR-01 | Provide a public homepage that explains the product and guides learners into courses. | Implemented in current homepage snapshot; re-verify during QA |
| FR-02 | Provide direct access to available A1, A2 and B1 lesson pathways. | Documented as available; exact links and lesson inventory require audit |
| FR-03 | Teach Spanish with Roman Urdu-first explanations and accurate English meanings where provided. | Partially implemented; coverage varies by page |
| FR-04 | Offer Urdu and English interface support where currently implemented. | Partial; do not imply every lesson is translated |
| FR-05 | Provide practice activities such as flashcards, matching, listening choice and sentence building. | Documented as implemented; requires functional QA |
| FR-06 | Provide lesson exercises and quizzes with defensible answer keys and feedback. | Present in lesson patterns; lesson-by-lesson audit required |
| FR-07 | Save learner progress locally without requiring an account. | localStorage documented; key-by-key preservation and QA required |
| FR-08 | Provide Spain Life practical modules for common real-world situations. | Six modules documented; content and links require audit |
| FR-09 | Provide an online Word Explorer with clear disclosure of external service dependency. | Documented as implemented; availability and limits may vary |
| FR-10 | Allow learners to access lessons without quiz-based locks on later content. | Project rule; verify current implementation |
| FR-11 | Provide a progressive A1–C2 curriculum with transparent completion status. | Curriculum planned; not fully implemented |
| FR-12 | Provide useful progress/checkpoint information without presenting it as an official qualification. | Required product behaviour; audit current wording |

## 5. Non-functional requirements

- **Usability:** Clear navigation, plain explanations, predictable lesson structure and low-friction learning.
- **Responsive design:** Mobile-first layouts that remain usable on larger screens.
- **Accessibility:** Semantic HTML, labelled controls, visible keyboard focus, touch-friendly targets and reduced-motion support.
- **Language direction:** Urdu-script content must use correct RTL; Spanish and Latin-script content must remain LTR where appropriate.
- **Performance:** Keep the core learning experience lightweight; avoid unnecessary frameworks and essential external CDN dependencies.
- **Reliability:** Existing lesson URLs and saved learner progress must survive content updates.
- **Privacy:** Do not introduce accounts, analytics or collection of personal data without a clear need and an explicit product decision.
- **Offline/PWA:** Treat offline capability as unverified until tested on supported browsers and real devices.
- **Maintainability:** Prefer the current simple architecture; make structural changes only when the benefit is demonstrated.

## 6. Technical baseline and constraints

The repository documentation describes the current product as a static HTML, CSS and vanilla JavaScript project deployed through GitHub Pages. The current homepage and README support this baseline. Re-check the actual repository before substantial code changes.

- Hosting/deployment target: GitHub Pages.
- Core application: static HTML/CSS/vanilla JavaScript.
- Progress: browser localStorage; no account required for the documented core pathway.
- Service worker: present/configured according to project documentation; cache behaviour and offline reliability require testing.
- Avoid paid APIs, paid hosting, mandatory accounts and unnecessary frameworks.
- Preserve existing storage keys, including `ss-language`, `ss-completed`, `ss-a1-done`, and inspect current code for any additional keys before editing.
- When app-shell assets change, inspect and update the service-worker cache list/version as appropriate.
- Verify project-relative asset and navigation paths for GitHub Pages.

## 7. Language and educational quality requirements

- Spanish target: contemporary standard Spanish from Spain (Castilian).
- Explanations: natural, accessible Roman Urdu by default.
- Urdu and English support must be described according to actual coverage; never claim full translation if only selected interface text is translated.
- Pronunciation spellings in Roman Urdu/Urdu are approximations and must be labelled as learning aids, not IPA or exact phonetic transcription.
- Examples, translations, grammar, accents, agreement, register and answer keys must be reviewed.
- Lessons must have clear outcomes, useful context, guided practice and independent learner output.
- Include listening, reading, spoken/written production, interaction and mediation progressively across the curriculum.
- Use the CEFR Companion Volume and Instituto Cervantes PCIC as references. Do not claim external accreditation or official certification.

## 8. Acceptance and quality gates

A change is not complete merely because files were generated or committed. Apply relevant checks before marking work complete.

1. **Requirement fit:** Does the change solve an agreed learner need and remain within scope?
2. **Content accuracy:** Are Spanish, translations, explanations, examples and answer keys correct?
3. **Integration:** Do navigation, relative paths, links and page conventions work?
4. **Progress safety:** Are existing localStorage keys and learner records preserved?
5. **Responsive/accessibility:** Are mobile layout, keyboard access, labels, focus and RTL/LTR behaviour considered?
6. **Regression:** Have affected neighbouring pages and shared assets been checked?
7. **Evidence:** Record exactly which tests were run, their result and any untested limitations.
8. **Documentation:** Update the handoff and roadmap only with verified changes.

### Definition of done

A task is complete only when its agreed output is present in the repository, integrated with existing conventions, relevant checks have passed, learner progress and links are preserved, and documentation accurately records the result. If testing is not possible, label the work implemented-but-unverified rather than tested.

## 9. Delivery workflow

Use the smallest workflow that provides control:

1. Read this specification and the relevant operational guide.
2. Inspect the current implementation before editing.
3. Identify the exact scope and affected files.
4. Implement one coherent milestone or lesson batch.
5. Run the relevant checks; do not invent test results.
6. Review regressions, learner progress and links.
7. Update the handoff and roadmap with evidence.
8. Report changed files, tests, limitations and the next action.

For lesson production, use the batch-first workflow and content blueprint in [LESSON-PRODUCTION-PLAYBOOK.md](LESSON-PRODUCTION-PLAYBOOK.md) and the sequence in [LESSON-BATCH-PLAN.md](LESSON-BATCH-PLAN.md).

## 10. AI and contributor collaboration protocol

Any AI or contributor (ChatGPT, Claude, Gemini, Grok or human) must:

- Read `AGENTS.md`, this specification and the relevant handoff/operational documents before making changes.
- Treat repository code as the evidence of implementation; a roadmap entry is not proof that a feature exists.
- Preserve approved product decisions and avoid re-opening settled decisions without a concrete reason.
- Avoid duplicate documentation, unnecessary rewrites and speculative architecture changes.
- Work on non-overlapping lesson ranges when parallel contributors are used.
- Have one integrator/reviewer reconcile content, code, navigation, numbering and progress behaviour.
- Never fabricate completion, test results, CEFR alignment, certification or deployment status.
- Update the shared handoff after meaningful work so the next contributor can continue without asking the owner to repeat context.

## 11. Document ownership and change control

This file is the concise product/requirements baseline. It should change only when product scope, requirements, constraints or approved decisions change.

| Document | Responsibility |
|---|---|
| `PROJECT-SPECIFICATION.md` | Product scope, requirements, constraints and acceptance principles |
| `CURRICULUM-MASTER-PLAN.md` | Approved A1–C2 curriculum sequence and learning outcomes |
| `LESSON-PRODUCTION-PLAYBOOK.md` | Lesson blueprint, language quality, QA and multi-AI production rules |
| `LESSON-BATCH-PLAN.md` | Next coherent lesson batch |
| `PROJECT-HANDOFF.md` | Verified current state, recent changes, blockers and next task |
| `ROADMAP.md` | Prioritised future work and milestones |
| `AGENTS.md` | Mandatory entry point and instructions for AI contributors |

When a decision changes, update the relevant authoritative document and the handoff. Do not copy the full same information into multiple files.

## 12. Initial baseline gaps (not yet audited)

- Map every existing A1 lesson 01–25 to the approved curriculum outcomes.
- Map every existing A2 lesson 01–20 to the approved curriculum outcomes.
- Inspect and verify B1 Lesson 01.
- Verify Spain Life modules, practice modes and Word Explorer behaviour.
- Inspect actual localStorage keys, service-worker cache behaviour, language switching and project-relative links.
- Record gaps and revisions in a lightweight tracker only if the audit shows it is useful.

**Current implementation status:** The repository README documents A1 25 lessons, A2 20 lessons, B1 Lesson 01, four practice modes, six Spain Life modules and Word Explorer. These are repository-documented claims pending a systematic implementation and quality audit. The full 168-module curriculum remains a planned target.
