# Spanish Seekho — Master Audit & Findings Register

**Project:** Spanish Seekho  
**Repository:** https://github.com/AliShah1029384756/Spanish-Seekho  
**Live website:** https://alishah1029384756.github.io/Spanish-Seekho/  
**Purpose:** Collect, verify, prioritize and track audit findings before the consolidated repair phase.

> **Working rule:** This is an audit register, not a claim that every item is independently verified. Reviewer findings are preserved as reported; suggested fixes must be checked against the lesson context before implementation.

## 1. Working protocol

- Record every new audit finding here, including its exact level, filename, lesson/question number and evidence when provided.
- Consolidate duplicates without losing affected locations or reviewer notes.
- Distinguish confirmed errors from potential gaps, stylistic suggestions and items requiring verification.
- Do not modify lessons or quizzes during the audit-collection phase.
- Once audits are complete, implement fixes in organized batches.
- For every implementation batch: test locally/structurally, deploy, and verify the live site.
- Preserve existing lesson IDs, routes, progress keys, learner progress, language switching, service-worker behavior and responsive layouts.

### Status legend

- **Pending:** recorded, not fixed.
- **Verification required:** evidence needs further checking.
- **Fixed:** correction implemented.
- **Tested:** correction tested.
- **Deployed:** deployment completed.
- **Verified live:** checked on the deployed website.

Priority: **Critical / High / Medium / Low**.

## 2. A1–A2 quiz audit

**Reviewer-reported scope:** 440 quiz items individually reviewed.

### 2.1 Reported confirmed Spanish errors

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| QA-001 | A1 L08 Q6; A1 L15 Q4; A1 L03 note; A1 L15 text | `el uno de mayo` reportedly marked incorrect, although it is common and acceptable in Spain; `el primero de mayo` is also correct | Accept both forms; use a genuinely incorrect distractor such as `el primer mayo` | High | Pending |
| QA-002 | A1 L17 Q6 explanation | `quisiera` described as conditional | Explain it as the imperfect subjunctive form used in a conventional polite-request construction; distinguish `querría` | High | Pending |
| QA-003 | A1 L18 Q4 | `Normalmente estudio` treated as the only natural word order; `Estudio normalmente` is also natural | Accept both or redesign the item to test a clearly defined point | Medium | Pending |
| QA-004 | A2 L08 Q3 | `trabajé todos los días` may also fit “Cuando era estudiante, ___ en una biblioteca” depending on context | Add context that unambiguously requires the intended tense, e.g. a habitual schedule | High | Pending |
| QA-005 | A2 L19 Q8 | Distractor `¿Puedes ayudarme?` is valid Spanish; adding “only” makes the option artificially wrong | Replace with a genuinely unsuitable request if politeness is the target | Medium | Pending |

### 2.2 Weak or misleading items

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| QA-006 | A1 L14 Q4 | `Yo nunca` can occur naturally in conversation, so it is a weak distractor | Replace with a clearly contrasting option such as `siempre`, after checking full sentence context | Medium | Pending |
| QA-007 | A2 Review Q4 | Prompt asks about “recent experience” but answer `alguna vez` tests lifetime experience | Reword as a lifetime-experience question or change the target expression | Medium | Pending |
| QA-008 | A2 L10 Q8 | `hemos de` is valid Spanish but is not simply a form of haber; `habemos` has dialectal/archaic uses | Clarify the grammatical target and remove ambiguity; verify the full item before changing | Medium | Pending |
| QA-009 | A2 L17 Q7 | `Te lo envío` translated as “I will send it to you” | Prefer “I'll send it to you”; optionally contrast with `Te lo enviaré` | Low | Pending |
| QA-010 | A1 L21 Q2 | Distractors for `piso` (`la cama`, `el sofá`) are weak | Use meaningful semantic alternatives, e.g. `el apartamento` / `la casa`, if suitable to the question | Low | Pending |

### 2.3 Systemic quiz-quality concerns

| ID | Scope | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| QA-011 | A1–C2 | Reviewer reports the correct answer is the longest option at increasing rates: A1 36%, A2 43%, B1 51%, B2 64%, C1 74%, C2 90% | Measure across the full quiz bank; balance option length and structure without making options unnatural | High | Pending |
| QA-012 | A1–C2 | Some distractors are invalid Spanish, allowing guessing without understanding | Prefer plausible, grammatically valid distractors that test the intended learning objective | High | Pending |
| QA-013 | A1–C2 | Temporal-word clues such as `ayer` and `mañana` may make tense questions guessable | Review and diversify contexts so learners must understand tense/aspect | High | Pending |
| QA-014 | A1 | Quizzes reportedly emphasize vocabulary recall over productive language use | Add appropriately scaffolded sentence construction, contextual completion and practical use | Medium | Pending |
| QA-015 | B2–C2 | Many questions reportedly assess concepts in English rather than Spanish production | Review assessment balance and add level-appropriate Spanish-language production tasks | High | Pending |
| QA-016 | C2 review | All eight questions reportedly lack `why` explanations | Add concise explanations for correct answers and relevant distractors | Medium | Pending |

## 3. Spain-specific Spanish findings

| ID | Scope | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| ES-001 | A1 | Reviewer reports `escuela` appears six times and `colegio` once | Explain common Spain usage of `colegio` while retaining valid contexts for `escuela`; avoid presenting either as universally wrong | Medium | Pending |
| ES-002 | A1 L05 and L07 | Limited introduction of `colegio` | Consider introducing it naturally with a brief usage distinction | Medium | Pending |
| ES-003 | A2 L09 | `¿Qué autobús tengo que coger?` is natural in Spain; `coger` has vulgar meanings in some Latin American varieties | Add a concise regional-usage note without discouraging the Spain usage | Low | Pending |
| ES-004 | A1/A2 | Seseo, ceceo and distinción reportedly receive little early-level coverage | Add a short, accurate note; explain that seseo is common in much of southern Spain and the Canary Islands, while avoiding an oversimplified regional rule | Medium | Pending |
| ES-005 | B1–C2 | `vosotros` reportedly becomes almost absent after A2 (B1: zero reported hits) | Verify progression and continued practice of Spain-specific pronouns and conjugations | High | Pending |
| ES-006 | A1–C2 | `hablad` and `habléis` reportedly not found | Verify coverage of vosotros imperative and subjunctive forms at suitable levels | Medium | Pending |
| ES-007 | A1–C2 | Colloquial Spain vocabulary such as `vale`, `tío`, `guay`, `patata` and `zumo` reportedly limited or absent | Review useful everyday vocabulary and introduce selectively at suitable CEFR levels | Low | Pending |

## 4. Potential CEFR coverage gaps

These are preliminary keyword-search observations, not confirmed curriculum defects. Keyword counts alone cannot establish whether a concept is taught adequately.

| ID | Level | Potential gap | Required verification | Priority | Status |
|---|---|---|---|---|---|
| CEFR-001 | A2 | Negative imperative (`no hables`) reportedly has zero hits | Inspect lesson text, examples and practice for equivalent forms and explanations | Medium | Verification required |
| CEFR-002 | A2 | Estar + gerundio reportedly appears only twice | Check whether explanations, contexts and practice are sufficient | Medium | Verification required |
| CEFR-003 | B2 | Subjunctive coverage may be insufficient | Inspect present/perfect/imperfect subjunctive, si-clauses and relevant uses in context | High | Verification required |
| CEFR-004 | B2 | Passive constructions may lack systematic coverage | Inspect lesson explanations, examples and assessment | Medium | Verification required |
| CEFR-005 | C1–C2 | Subjunctive and conditional keyword hits reportedly very low | Review actual content and advanced functions, not keyword counts alone | High | Verification required |
| CEFR-006 | B2–C2 | Skills-based content may not adequately assess advanced Spanish production | Evaluate CEFR progression, task authenticity and productive assessment | High | Verification required |

## 5. Audit coverage and outstanding work

| Area | Reviewer-reported coverage | Status |
|---|---|---|
| A1–A2 quiz items | 440 items reviewed individually | Initial audit received |
| A1 lesson body | A1 L05 reviewed line by line | Incomplete |
| Remaining A1 lesson bodies | Not reviewed line by line | Pending |
| A2 lesson bodies | Not reviewed line by line | Pending |
| B1–B2 quizzes and grammar | Initial structural observations only | Pending expert audit |
| C1–C2 quizzes and grammar | Initial structural observations only | Pending expert audit |
| Roman Urdu translations | No systematic review reported | Pending |
| Urdu-script pronunciation | No systematic review reported | Pending |
| Live website | Not verified by this reviewer | Separate live QA required |
| Native Spain speaker review | Not completed | Recommended for nuanced naturalness/pronunciation |

## 6. Planned consolidated repair batches

Do not treat this list as authorization to start implementation during the audit-collection phase.

1. Confirmed Spanish grammar, vocabulary and explanation errors.
2. Ambiguous quiz questions, answer keys and explanations.
3. Distractor quality and assessment design.
4. Spain-specific vocabulary, pronunciation and grammar coverage.
5. A1–A2 lesson text, Roman Urdu and Urdu-script pronunciation.
6. B1–B2 curriculum and assessment improvements.
7. C1–C2 advanced grammar and assessment improvements.
8. Cross-level consistency, accessibility, mobile and live-site QA.

For each repair batch, record:
- Finding IDs addressed.
- Files changed and concise change summary.
- Tests performed and results.
- Deployment/commit reference.
- Live verification result.
- Any remaining limitations.

## 7. Reviewer scope and evidence note

The initial A1–A2 findings in this register were supplied by an external reviewer. The reviewer reported reading all 440 A1–A2 quiz items, but only A1 L05 lesson body was read line by line at that stage. B1–C2 lesson-level Spanish, systematic Roman Urdu/Urdu pronunciation review and live-site verification were not completed in that report.

**Do not interpret a recorded finding as independently verified by the project maintainer.** Preserve the original evidence and verify context before changing educational content.
