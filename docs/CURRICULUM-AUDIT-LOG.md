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


---

## 8. A1–A2 complete lesson-text audit — reviewer report received

**Audit scope reported by reviewer:** A1 25 lessons, A2 23 lessons, 6 Spain modules and 8 closing modules. Reviewer states all lesson text was read, including Spanish, English, Roman Urdu notes and pronunciation rows, with automated checks and selected spot-checks of Urdu-script pronunciation. No files were changed and nothing was deployed.

**Important limitation:** Urdu-script pronunciation was not checked line by line for every word. The reviewer checked pronunciation rules and selected rows. Live website/browser behavior was not verified. Treat all items below as reviewer-reported findings pending maintainer verification.

### 8.1 Serious language, factual and content errors

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| TXT-001 | A1 L15 Part 3, row 5 | Spanish says Wednesday, 18 November 2026; English says Tuesday and audio text says martes. The calendar date is Wednesday. | Change English to “Wednesday” and audio text/data-say to miércoles; verify generated speech. | Critical | Pending |
| TXT-002 | A1 L03 note; L08 review; L15 Part 3; quiz A1 L08 Q6 and L15 Q4 | Only el primero de… taught/accepted; el uno de mayo marked wrong despite being common and acceptable in Spain. | Explain both el uno de mayo and el primero de mayo are correct; note uno is common in speech. Align notes, lesson and quiz answer keys. | High | Pending |
| TXT-003 | A1 L20 Part 4 | veinte pronunciation guide is inconsistent with A1 L03 and reported incorrect (BWEN-te). | Standardize to the project's chosen accurate approximation, reported as BEYN-te; check related rows consistently. | High | Pending |
| TXT-004 | A1 L22 Colours | Rule “In the plural, add -es” overgeneralizes; azul → azules, but verde → verdes. | Replace the blanket rule with examples/rule explaining -s vs -es, or avoid overgeneralization. | High | Pending |
| TXT-005 | A1 Spain-offices Part 1 | el número de cola reported as non-standard for the intended queue-ticket meaning in Spain. | Prefer el número de turno; optionally explain sacar número. Verify exact context. | High | Pending |
| TXT-006 | A1 L17 Q6 explanation | quisiera labelled “conditional”, though it is imperfect subjunctive; querría is conditional. | Use “polite request form of querer (imperfect subjunctive used as a set phrase)” and explain its function. Coordinate with QA-002 rather than duplicate implementation. | High | Pending |
| TXT-007 | A1 L19 closing note; A2 L08 closing note | Outdated availability claims: A1 “Lessons 01–20 available”; A2 “Lessons 01–08 available / pathway in development”, despite reported current counts of 25 and 23 core lessons. | Update or remove stale progress/availability copy after checking actual deployed lesson inventory. | High | Pending |
| TXT-008 | A1 Spain-transport Part 2 | un abono de diez viajes reportedly uses the wrong term for a multi-trip ticket; reviewer recommends bono or billete de diez viajes, distinguishing abono as a pass/subscription. | Use un bono de diez viajes or un billete de diez viajes; add concise distinction if useful. Verify local transport context. | High | Pending |

### 8.2 Pronunciation and Urdu/Roman Urdu consistency

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| PRON-001 | A1 L01/L02 and Urdu pronunciation conventions | Urdu letter ث is likely to be read as Urdu /s/, while it is being used to represent Spanish /θ/ (English “think”). This can teach the wrong sound to Urdu readers. | Add an explicit note that ث in this guide represents English “th” in “think”, not Urdu “s”; consider whether a different notation is clearer for the target learners. | High | Pending |
| PRON-002 | A1 L05 la oficina; A1 L06 manzana, arroz; other pronunciation rows | Inconsistent representations of /θ/: e.g. Roman THEE with Urdu اوفیسینا using س; منتھانا and ارّوتھ use تھ while other rows use ث. | Establish one learner-safe convention for /θ/ and apply consistently; do not mechanically replace characters without checking readability. | High | Pending |
| PRON-003 | A1 L02; A2 L01–L06 | Spanish v/b approximation is inconsistent: Roman guides indicate v ≈ b, A1 Urdu often uses ب, while A2 Urdu uses و in examples despite Roman guide using B. | Establish consistent v/b teaching convention, explain Spanish b/v sound similarity, and align Roman Urdu and Urdu-script rows. | High | Pending |
| PRON-004 | A1 L03/L04/L09 and A1 L12/L15/L22–L25; Spain modules; A2 L01/L02 | Spanish j is approximated variously as kh, h/he/ho, and khu/hoo; A1 L02 says kh but Urdu example reportedly uses ہ. | Choose a consistent, learner-friendly approximation (reviewer suggests kh/خ) and explain that it is approximate; align all rows. | High | Pending |
| PRON-005 | A1 L05; A1 L21/L22 | ll is taught as y/yeísmo in some rows (SEE-ya, YA-be) but later rows use SEE-lya, pa-SEE-lyo, a-ma-REE-lyo, TA-lya, suggesting /ʎ/ and contradicting the stated convention. | Standardize to the chosen Spain pronunciation model and use y-style approximations consistently where yeísmo is intended; check each word. | High | Pending |
| PRON-006 | A2 L09 | per-DONE may be read like English “done” and mislead pronunciation. | Change to per-DO-ne or another clear Spanish-vowel approximation. | Medium | Pending |
| PRON-007 | A2 L04 | a-lo-KHA-MYEN-to contains two uppercase stress markers. | Keep one stress marker, reported suggestion a-lo-kha-MYEN-to; verify syllabification and actual stress. | Low | Pending |
| PRON-008 | A1 L09 | Lahore pronunciation guide la-HOR conflicts with Spanish audio reportedly saying la-O-re (silent h). | Add a note explaining Spanish h is silent and clarify the intended pronunciation of the place name; verify actual audio output. | Medium | Pending |
| PRON-009 | A1 Spain-offices | Audio for el NIE / el DNI reportedly says only el NIE. | Align audio text with displayed phrase or split into separate audio controls. | Medium | Pending |
| PRON-010 | A1–A2 pronunciation support | A1 L08 onward reportedly has little Urdu-script support; A1 L13–L18 newer vocabulary rows also lack guides. | Audit coverage systematically and restore consistent support where the product promises it; distinguish intentional omissions from accidental gaps. | High | Pending |
| PRON-011 | A2 L13–L23 | No pronunciation guides reportedly present; Roman Urdu explanations also largely absent despite a “Roman Urdu support” header. | Review all these lessons and add appropriate Roman Urdu and pronunciation support consistently. | High | Pending |

### 8.3 Naturalness, register and meaning

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| NAT-001 | A1 L06 | Café question ¿Qué quiere? may sound too direct in the intended service context. | Consider ¿Qué va a tomar? or ¿Qué le pongo?, with suitable register/context. | Medium | Pending |
| NAT-002 | A1 L17 | ¿Qué precio tiene? considered less natural in context. | Consider ¿Cuánto vale? or ¿Qué precio tiene esto?; retain only if context supports it. | Low | Pending |
| NAT-003 | A1 L16 Part 4 | Sigue / Gira / Cruza are tú imperatives, but dialogue also uses usted forms (siga/gire) and the register distinction is not labelled. | Label tú vs usted commands and keep dialogue/register consistent; compare with A2 L09 explanation. | High | Pending |
| NAT-004 | A1 L15 dialogue | Quiero pedir una cita is correct, but pedir cita without article is also common in Spain. | Optionally teach both natural forms; do not mark current wording wrong. | Low | Pending |
| NAT-005 | A2 L11 | Glossing mayor / menor as “bigger / smaller (size)” is misleading; e.g. Madrid es mayor que Valencia is not a size comparison in the intended sense. | Explain mayor/menor as older/younger or greater/lesser depending on context; teach más grande/más pequeño for physical size. | High | Pending |
| NAT-006 | A2 L22 | oficina de atención ciudadana considered less standard than oficina de atención al ciudadano in the intended Spain context. | Verify institutional naming/context and use the standard phrase appropriate to the scenario. | Medium | Pending |
| NAT-007 | A2 L04 | ¿Podría llamar un taxi? may not express “Could you call a taxi for me?” as intended. | If asking staff to call one for the speaker, use ¿Podría llamarme un taxi?; verify intended meaning. | Medium | Pending |
| NAT-008 | Spain-housing module | “fianza often 1–2 months” may blur statutory deposit and additional guarantees; legal accuracy issue. | Qualify wording: distinguish legally required deposit from additional guarantees and obtain qualified Spain/legal review before publishing. | High | Verification required |
| NAT-009 | A1 L18 | por la tarde glossed as “afternoon / before evening” may be too narrow; in Spain tarde can extend from after lunch into evening. | Explain as afternoon through evening, with context-dependent timing. | Medium | Pending |
| NAT-010 | A2 L18 | Necesito que venga alguien introduces subjunctive without explanation. | Add a short note that expressions of need/request can trigger subjunctive; explain only at an appropriate level or label as a useful chunk. | Medium | Pending |

### 8.4 Teaching quality, structure and sequencing

| ID | Location | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| PED-001 | A2 L13–L23; A1 L08 onward; A1 L13–L18 | Pronunciation and Roman Urdu support reportedly drops off substantially, despite product header promising Roman Urdu support. | Conduct a full coverage pass; restore consistent support and document any deliberate exceptions. Coordinate with PRON-010/011. | High | Pending |
| PED-002 | A2 L02, L13, L14, L16, L20–L23 | Internal planning labels visible to learners, e.g. EXTRA · MODULE 08, MODULE 01 / 18, MODULE 14, MODULE 22, MODULE 24, CORE MODULE 02 / 16 / 20. | Replace with learner-facing labels such as “Extra practice” or remove internal module codes. | High | Pending |
| PED-003 | A1 closing modules; A2 closing modules | Numbering collision: A1 has 25 core lessons and closing modules labelled 25–28; A2 has 23 core lessons but closing modules labelled 25–28. A2 review text reportedly says “24 core topics”. | Define one consistent numbering convention separating core lessons from closing/review modules; update labels and counts consistently. | High | Pending |
| PED-004 | A2 L08, L19, L20, L21–L23 and closing modules | Checkpoint/review/final-practice sequence is confusing: checkpoint, review and “final” practice occur before additional new lessons. | Reorder or rename checkpoints/reviews so the learning path reflects actual progression and finality. | High | Pending |
| PED-005 | A2 L12 vs L03; A2 L15 vs L05/L06; A2 L14 vs A1 L18/A2 L05 | Reported repetition: obligation structures repeated; Voy a estudiar esta tarde repeated word-for-word; gustar taught for a third time. | Compare lesson objectives and examples; consolidate duplicate teaching or make later lessons explicitly deepen/extend prior knowledge. | Medium | Pending |
| PED-006 | A1/A2 closing assessment and project modules | Speaking/writing tasks use self-checkboxes but lack a clear rubric. | Add a compact learner-friendly rubric/checklist describing what successful output should include. | Medium | Pending |

### 8.5 Additional Spain-specific and grammar coverage observations

| ID | Location/scope | Finding | Proposed direction | Priority | Status |
|---|---|---|---|---|---|
| GAP-001 | A1 L05/L07; A1 L25; A2 | colegio introduced late after escuela; reviewer accepts both as valid but sees sequencing/consistency issue for Spain-focused course. | Introduce colegio earlier and explain that it is common in Spain while escuela remains valid in appropriate contexts. Coordinate with ES-001/002. | Medium | Pending |
| GAP-002 | A1 L01/L02 | Existing regional note reportedly says central/northern Spain uses /θ/ and south/Canarias/Latin America use /s/; reviewer considers broadly accurate but too simplified as a teaching explanation. | Explain distinción/seseo more carefully and add minimal-pair practice such as casa vs caza where appropriate; avoid implying all speakers in a region are identical. | Medium | Pending |
| GAP-003 | A1 L02 | Consonant/pronunciation overview reportedly omits v/b, g (ge/gi), gu, qu and ch. | Review whether these belong in the initial sound map; add concise coverage or signpost later lessons. | Medium | Pending |
| GAP-004 | A1 L11 and A2 | Possessives tu/su/tus/nuestro reportedly appear without systematic teaching; only mi introduced in A1 L04. | Check learner prerequisites and add a sequenced possessives explanation/practice before or alongside first substantial use. | High | Pending |
| GAP-005 | A2 (reported 29 uses; e.g. aquel in A2 L19) | Demonstratives este/ese/aquel appear without an explicit lesson. | Add a clear progression and examples, or reduce unsupported use until taught. | High | Pending |
| GAP-006 | A2 L03/L07 and across A2 | Estar + gerundio appears in phrases (¿Qué estás estudiando?, Estoy tomando…) but is reportedly not systematically taught. | Add an explicit explanation and practice at suitable A2 point. Coordinate with CEFR-002. | High | Pending |
| GAP-007 | A2 | Negative imperative (no hables) reportedly absent. | Verify CEFR/course scope and add appropriate forms and practice if required. Coordinate with CEFR-001. | Medium | Verification required |
| GAP-008 | A1 L07 conversation; A1–A2 | Common colloquial Spain vocabulary (vale, tío, guay, patata) reportedly absent; zumo very limited. | Introduce useful everyday expressions selectively, with register labels and learner-appropriate contexts. Coordinate with ES-007. | Low | Pending |
| GAP-009 | A1/A2 closing modules | Speaking/writing tasks have no detailed rubric. | Add criteria for task completion, comprehensibility, target vocabulary/grammar and pronunciation where appropriate. Coordinate with PED-006. | Medium | Pending |

### 8.6 Content explicitly reported as correct or worth preserving

Reviewer specifically reported the following as sound and recommended retaining them, subject to normal regression checks:

- A1 L01–L07 and L09–L14 grammar and examples were considered correct.
- Double negatives such as Nunca como carne / No como carne nunca were considered correctly taught.
- A2 L01 note that hablamos can be present or preterite was considered useful.
- A2 L12 distinction between No tienes que venir and No debes was considered clear.
- A2 L18 tú/usted register note was considered good.
- Ser/estar/hay explanations in A1 L05, L07 and L13 were considered correct.
- Spanish in A1/A2 closing assessment and project modules was considered correct overall; rubric completeness is a separate issue.

### 8.7 Audit coverage update

| Area | Updated reviewer-reported coverage | Status |
|---|---|---|
| A1 lesson text | All 25 lessons reportedly read in full; A1 Spain modules and 4 closing modules included | Audit report received; maintainer verification pending |
| A2 lesson text | All 23 lessons reportedly read in full; A2 Spain modules and 4 closing modules included | Audit report received; maintainer verification pending |
| Spain modules | Six modules reportedly included in the lesson-text pass | Audit report received; maintainer verification pending |
| Closing modules | Eight total (four A1, four A2) reportedly included | Audit report received; maintainer verification pending |
| Urdu-script pronunciation | Automated checks plus selected key-row spot-checks; not every row read line by line | Partial review only |
| Roman Urdu guidance | Reviewed as part of lesson text; support gaps reported | Findings recorded |
| Live site/browser | Not checked by reviewer | Separate live QA required |
| Native Spain speaker review | Not completed | Recommended for nuanced naturalness/pronunciation |
| B1–C2 lesson-text audit | Not yet supplied | Pending |

### 8.8 Reviewer’s proposed next step

Reviewer asked whether to begin B1–B2 (grammar coverage, quizzes and lesson text) or wait for A1–A2 fixes and review the diff. Per the project's agreed audit-first workflow, continue collecting findings before beginning the consolidated repair phase unless the user explicitly changes that plan.
