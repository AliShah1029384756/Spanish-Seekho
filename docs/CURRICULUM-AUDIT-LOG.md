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


## 9. B1–B2 lesson-text and quiz audit (reviewer report received 2026-11-28)

### 9.1 Scope, method and limitations

Reviewer reports completing a B1–B2 lesson-text audit covering 24 B1 lessons, 24 B2 lessons and eight closing modules. No source files were changed and nothing was deployed.

Reported coverage:
- B1: all lessons reportedly read in full.
- B2: L01–06 and L09–12 explanations reportedly read in full. For L07–08 and L13–24, only Spanish rows were read; Roman Urdu paragraphs were not reviewed.
- Quizzes: automated type/statistical checks on 431 items; approximately 85 items manually inspected.
- B2 Spanish extraction initially returned empty rows because the extractor did not account for lang="es"; reviewer corrected the extraction and confirmed Spanish content exists.
- Live site/browser was not checked.
- Spain-specific usage still needs native-speaker review.
- B2 L07–08 and L13–24 Roman Urdu paragraphs and all quizzes were not read line by line.

All findings below are reviewer-reported and remain pending maintainer verification. Do not treat the report as an independent live-site verification.

### 9.2 Confirmed errors reported

| ID | Location | Reviewer-reported issue | Suggested correction |
|---|---|---|---|
| B12-001 | B1 L20, Part 2 note | "Quisiera and podría are polite conditional forms" incorrectly labels quisiera as conditional. Podría is conditional; quisiera is imperfect subjunctive used as a polite-request formula. | Explain the distinct forms and functions. |
| B12-002 | B1 L17 Q2 | "Como ___ mucha gente, esperamos fuera": había is keyed, but hay can also fit because esperamos may be present. | Anchor the sentence clearly in the past, e.g. "Ayer, como había mucha gente, esperé fuera." |
| B12-003 | B1 L24 Q2 | "Como ___ poco tiempo, cambiamos el plan": había is keyed, but hay can also fit because cambiamos may be present. | Add an unambiguous past-time anchor or revise the context. |
| B12-004 | B2 L20, Part 3 row 2 | Spanish "Tomadas en consideración, sugieren…" means "Taken into consideration"; English says "Considered together", which does not match. | If meaning is "considered together", use "Consideradas en conjunto, sugieren…"; otherwise align the English translation. |
| B12-005 | B2 L02, Part 3 | Rule says antes de que takes subjunctive "aam tor par" (usually), which is imprecise for the taught construction. | State that antes de que takes the subjunctive. |
| B12-006 | B1 L01, completion message | Stale message says all B1 lessons will be added in future, although all 24 B1 lessons are now present. | Remove or update the completion message. |

### 9.3 Quiz quality and distractor design

Reviewer-reported guessable-distractor rates:
- A1: 2% (from prior audit)
- A2: 7% (from prior audit)
- B1: 23% (48/213)
- B2: 11% (24/218)

B1 was reported as the weakest level for this issue. Examples:
- B1 L04 Q4: temporally contradictory distractor such as "vivía mañana".
- B1 L11 Q5: "buscaríamos mañana siempre".
- B2 L01 Q5: "revisábamos ayer siempre".

Reviewer also reports that the correct answer is the longest option in 51% of B1 and 64% of B2 questions (prior cross-level report had these same figures). These patterns may make answers guessable without understanding the Spanish.

Positive quiz examples to preserve as potential patterns:
- B1 L19 Q2 (pidas / pides / pedir).
- B1 L17 Q5 (debido que).
- B2 L10 Q2 (reciba / recibo / recibir).

B2 quiz-design concern: many questions test recognition of connectors/labels in English (e.g. "Sin embargo signals…" and "Porque introduces a reason"). Reviewer recommends more Spanish production-style gap-fills and short writing tasks with rubrics.

### 9.4 CEFR progression and grammar gaps

- Imperfect subjunctive formation is reportedly not explicitly taught, despite use in B1 L10 (si tuviera / viviera), B1 L20 (enviara), and B2 L02, L07, L10, L11 and L14. B1 L10 reportedly calls it a "formula".
- Present-perfect subjunctive forms appear without formation teaching: hayamos encontrado (B1 L24), hayan influido (B2 L15), haya frustrado (B2 L23).
- Pluperfect subjunctive appears without formation teaching: hubiera aceptado (B2 L11).
- Present subjunctive in B1 L21 reportedly teaches regular forms but not stem-change/spelling-change forms, despite using pruebes, busque and llegue.
- B2 ordering: subjunctive/conditional examples appear in B2 L01–08 (including vaya a funcionar in L06 and sería recomendable que… ampliara in L07), while their grammar teaching is placed later in L09–12. Reviewer suggests moving L09–12 earlier or pre-teaching the forms.
- Level placement: B1 L10 si + imperfect subjunctive and B1 L23 reported speech with backshift may sit closer to B2 in common CEFR-aligned syllabi (reviewer cites Plan Curricular Cervantes). Recognition at B1 may be acceptable; production could be reserved for B2. This is a curriculum-placement recommendation, not a confirmed error.
- Vosotros forms appear in B1 L19 (reunáis, podéis), B2 L06 (si me permitís) and B2 L13 (si os parece, podéis ver), but reviewer did not find explicit teaching of vosotros imperative/subjunctive. B2 L13 reportedly mixes os/podéis with les agradecería (ustedes); add a register label or clarify audience.
- B1 L09 future lesson reportedly lacks a Spain usage note: ir a + infinitive and present tense are common in conversation for future reference; future simple is more common in formal/written contexts and assumptions (e.g. estará en casa).
- Repetition:
  - "Si te he entendido bien / si no te he entendido mal" appears in B1 L08, B2 L06, L13 and L23.
  - "¿A qué te refieres exactamente?" appears in B1 L06 and L08.
  - B1 L05–07 and B2 L05–08 cover related opinion/agreement/disagreement/argument themes. Spiral review can be retained, but each recurrence should add distinct language or communicative value.
  - "A cambio de ampliar el plazo…" is reportedly repeated almost identically in B2 L16 and L24.

### 9.5 Roman Urdu support and pronunciation

- B1 and B2 reportedly have no pronunciation guide (neither Roman Urdu nor Urdu script), despite a header claiming "Roman Urdu support".
- B1 L01–16: Roman Urdu appears mainly in short introductions/notes, not as translations of example sentences.
- B1 L17–24: guided-practice rows include Roman Urdu translations; L22–24 were reported as strongest.
- B2: Roman Urdu explanations exist, but example translations are reportedly absent.
- Reviewer suggests at least an optional reminder for Spain pronunciation: z/c, j, ll, v/b, plus stress in longer words such as aprovechamiento.
- Pronunciation may be optional at these levels, but the mismatch between the header and actual support should be reviewed.

### 9.6 Spain-specific language and naturalness

Positive examples reported:
- cogimos el metro (B1 L17).
- echar una mano and dar en el clavo (B2 L21–22).
- Space in "18 %" (Spain typography; B2 L14).
- Qualified note about hoja de reclamaciones (B1 L20).

Potential improvements:
- B2 L22 "idiomatic language" reportedly contains only two or three Spain idioms. Reviewer suggests adding examples such as vale, tío, guay, me da igual and ni idea.
- B2 L19 culture content is described as general rather than specifically Spain-focused. A short note on siesta, sobremesa, Spanish schedules, or a Pakistani-learner comparison may add context. Treat this as an enhancement suggestion, not an error.

### 9.7 Content reported as sound / preserve

Reviewer reports the following as accurate and worth preserving:
- B1 L01–16 and L18–19, L21–24 grammar explanations overall.
- Present-perfect versus indefinido contrast.
- soler and en caso de que.
- Reported speech in B1 L23 and si-clauses in B2 L11.
- Relative clauses in B2 L12.
- Passive/se in B2 L04.
- B2 assessment reportedly includes a speaking/pronunciation rubric (unlike the A1/A2 assessment rubric gap reported earlier).
- B1/B2 closing module numbering (25–28) is consistent.

### 9.8 Audit coverage update

| Area | Reviewer-reported coverage | Status |
|---|---|---|
| B1 lesson text | All 24 lessons reportedly read in full | Report received; maintainer verification pending |
| B2 lesson text | L01–06 and L09–12 explanations read; L07–08 and L13–24 Spanish rows only | Partial text review; Roman Urdu paragraphs not fully reviewed |
| Closing modules | Eight modules reportedly included | Report received; maintainer verification pending |
| Quiz items | 431 automated type/statistical checks; approximately 85 manually inspected | Partial manual review; not line-by-line |
| Live site/browser | Not checked | Separate live QA required |
| Native Spain speaker review | Not completed | Recommended for nuanced usage/naturalness |
| B2 Roman Urdu | Explanations read where in reviewed sections; later sections incomplete; example translations reportedly absent | Partial review |
| Urdu-script pronunciation | Not reported as audited in this pass | Separate review required |

### 9.9 Reviewer’s proposed next step

Reviewer asks whether to begin C1–C2 audit or perform Phase 4 cross-level gap/progression analysis for recurring issues (imperfect subjunctive, vosotros, pronunciation consistency and quiz distractors). Under the agreed audit-first workflow, continue collecting the remaining C1–C2 audit first unless the user explicitly changes direction. Do not begin fixes or deployment during audit collection.



## 10. C1–C2 curriculum audit (reviewer report received 2026-11-28)

### 10.1 Scope, methodology and coverage

Reviewer reports auditing both advanced levels:
- C1: 24 core lessons plus four closing modules.
- C2: 24 core lessons plus four closing modules.
- Repository structure reportedly contains index.html, lesson-01.html through lesson-24.html, and review, project, assessment and readiness closing modules in each level.
- Automated Python extraction reportedly covered Spanish rows, quiz arrays, Roman Urdu explanatory text and structural markers across all 48 core lessons. Full Spanish phrase lists and quiz data were extracted.
- Deep manual linguistic/pedagogical review was performed on representative lessons spanning units and skills, not every paragraph of every lesson:
  - C1: L01, L03, L05, L09, L13, L14, L16, L17, L21 and L24.
  - C2: L01, L03, L05, L09, L13, L17, L21 and L24.
- All eight closing modules received structural/content review.
- 384 core quiz questions (eight per lesson × 48) were parsed for answer keys, option length, question language and distractor quality. Closing-module quizzes were inspected where present.
- Automated cross-checks reportedly examined vosotros forms, potential Latin-American vocabulary, subjunctive density, longest-option bias and English-meta versus Spanish-production questions.
- Not fully completed: line-by-line reading of every Roman Urdu sentence across all 48 lessons; live browser/TTS/PWA testing; native-speaker naturalness panel review.
- The reviewer describes semantic naturalness assessment as sampled/pattern-based, with a residual possibility of isolated issues in unsampled paragraphs.

Coverage statement: all 48 core lessons and eight closing modules were reportedly structurally inspected and content-extracted; deep manual review was representative and cross-unit, not exhaustive sentence-by-sentence review of every lesson. All findings remain reviewer-reported and await maintainer verification; live-site behaviour is not verified by this audit.

### 10.2 Positive findings to preserve

- Reviewer considers the curriculum genuinely advanced C1–C2 in topic and skill range: stance/calibration, cohesion and information structure, implicit meaning, register shifts, complex subordination, impersonal/passive distancing, intercultural mediation, synthesis of conflicting sources and rhetorical precision.
- Spain/Castilian orientation is deliberate. C1 L16 contrasts ordenador/computadora, móvil/celular, distinción/seseo and vosotros/ustedes.
- Peninsular idioms reported as natural and well chosen include echar balones fuera, estar en el ajo, callejón sin salida, andar por las ramas and dar en el clavo; C2 L03 also uses ironic ¡Menuda puntualidad!
- Sampled Spanish was reported as almost uniformly grammatical, natural and appropriately advanced. No confirmed grammatical errors, missing accents or incorrect conjugations were identified in the deeply reviewed Spanish sets.
- C1 L17 mood/tense contrasts were considered accurate and pedagogically clear.
- Roman Urdu scaffolding was reported as generally functional for mood choice, register, synthesis and rhetorical effect, with useful warnings against literal translation.
- Consistent lesson architecture (outcomes, skill boxes, 12 Spanish examples with Listen, practice prompt, eight-question quiz and completion tracking) supports learner orientation.
- Closing modules are present and conceptually appropriate: review/gap repair, practical project, integrated assessment and readiness plan.
- No widespread Latin-American substitution or basic-level recycling of B1/B2 content was found in the sampled advanced material.
- C1 L16 and C2 L03 are positive models to preserve and potentially reference elsewhere.
- Lesson IDs, navigation numbering, unit labels and closing-module sequencing were reported consistent with index pages (see C12-017 below).

### 10.3 Systemic assessment and curriculum findings

| ID | Location | Reviewer-reported finding | Why it matters / suggested action | Priority | Classification |
|---|---|---|---|---|---|
| C12-001 | C1 and C2 core quizzes, all 48 lessons | Correct answer reportedly longest in about 84% of 384 items; C1 samples ranged about 50–75%, C2 samples about 75–100%. | Strong answer-length cue permits guessing. Balance option length while retaining plausible Spanish distractors. | High | Systemic assessment-design error |
| C12-002 | C1 and C2 core quizzes | Large majority reportedly use English meta-questions (e.g. "Which phrase…", "What should guide…") rather than Spanish comprehension or production. | Redesign a substantial share as Spanish-primary stems/options, cloze items or short production tasks with clear criteria. | High | Assessment / teaching-support issue |
| C12-003 | C1–C2 overall | Vosotros forms reportedly occur almost exclusively in C1 L16 regional-variation lesson and are rare or absent elsewhere. | Practise Spain-specific address morphology naturally in later examples, including relevant imperative/subjunctive forms. | Medium | CEFR/curriculum gap; links to ES-005 |
| C12-004 | C1–C2 quizzes and explanations | Heavy reliance on English grammatical metalanguage and conceptual recognition. | Increase Spanish-medium reflection, Spanish-primary prompts and actual production. | High | Teaching-support issue; links to QA-015 |

### 10.4 Lesson-specific findings and positive models

| ID | Location | Finding | Recommended action | Priority | Classification |
|---|---|---|---|---|---|
| C12-005 | C1 L16 | Contrasts ordenador/computadora, móvil/celular, vosotros/ustedes and distinción/seseo. Reviewer found this a strong regional-variation lesson. | Preserve; use as a reference model elsewhere. | — | Positive content |
| C12-006 | C2 L03 | Idioms echar balones fuera, estar en el ajo, callejón sin salida and ironic ¡Menuda puntualidad! were considered natural Peninsular usage. | Preserve. | — | Positive content |
| C12-007 | Multiple sampled lessons | Occasional examples have a slightly textbook-formal tone. | Where register permits, consider more conversational or journalistic variants. | Low | Stylistic improvement |
| C12-008 | C1 Unit 05 / C2 Units 01–03 | Advanced mood, complex subordination, impersonal constructions and synthesis are present and reportedly sequenced sensibly. | Preserve progression; continue deepening production tasks. | — | Positive / minor gap |
| C12-009 | C1–C2 overall | Productive assessment (extended writing/speaking with rubrics) reportedly relies heavily on self-report and has limited concrete performance criteria. | Strengthen rubrics and exemplars in closing modules and selected lessons. | Medium | CEFR/curriculum gap |
| C12-010 | C2 review module | Reviewer reports relatively sparse marked Spanish examples compared with other modules. | Align the density of Spanish models with other closing modules. | Low | Teaching/support issue |
| C12-011 | C1 L01 Q1–Q8; representative C2 L01, L12 and L24 | Answer keys reportedly appear correct and distractors are usually valid Spanish, but options are often markedly shorter than the correct answer. | Balance option length and increase Spanish-production items. | High | Assessment issue; overlaps C12-001 |
| C12-012 | Closing assessment modules | Self-administered assessments reportedly have limited detailed writing/speaking rubrics. | Expand criteria and provide model answers. | Medium | Teaching-support issue |
| C12-013 | Sampled C1/C2 lessons including C1 L01, L03, L14, L17 and C2 L03 | Roman Urdu explanations of stance, mood, register, idioms and synthesis were generally accurate and useful. | Preserve core explanations. | — | Positive content |
| C12-014 | Broader sampled set | Some abstract discourse explanations are dense or slightly literal in Roman Urdu. | Review the densest explanatory paragraphs for clarity and conversational phrasing. | Low–Medium | Teaching/support issue |
| C12-015 | Pronunciation support | Listen buttons exist, but systematic Spain-specific stress/difficult-sound guidance beyond earlier levels is limited. | Add selective advanced notes on reduced forms, linking and regional variants where useful. | Low | Teaching/support issue |
| C12-016 | All core lessons | Highly uniform 12-phrase plus eight-question structure may become monotonous at advanced levels. | Vary task types in later units while preserving useful navigation consistency. | Low | Stylistic/pedagogical improvement |
| C12-017 | Lesson IDs/navigation | Numbering, unit labels and closing-module sequencing reportedly match index pages. | Preserve. | — | Positive content |
| C12-018 | C2 index note | Index reportedly retains residual "Units 01–03 / Lessons 01–12" language while also stating all 24 lessons are available. | Align status text with actual availability. | Low | Technical/content consistency |

No additional confirmed Spanish grammar error was identified in the deeply reviewed sample. C12-007 and C12-014–016 are improvement suggestions rather than confirmed language errors.

### 10.5 Cross-level links to earlier audits

The reviewer explicitly links these findings to existing lower-level items:
- Longest-correct-answer bias (QA-011) reportedly intensifies at advanced levels: C1 approximately 60–75% and C2 approximately 75–100% in sampled lesson sets; overall C1/C2 estimate is about 84% of 384 items.
- English-label/meta-question dominance continues (QA-015).
- Vosotros attenuation after A2 continues (ES-005).
- Need for stronger productive assessment and Spanish-medium tasks links to CEFR-006.
Treat these as systemic cross-level repair themes in the later synthesis, not as a reason to duplicate earlier findings.

### 10.6 Overall reviewer assessment

Reviewer considers C1/C2 a clear qualitative step up from B1/B2, with predominantly accurate, Spain-oriented advanced Spanish and useful Roman Urdu support. The dominant reported weaknesses are assessment design (longest-answer bias and English-meta dominance) and limited sustained Spanish production with explicit rubrics. The report recommends targeted assessment redesign and selective strengthening of production/rubrics rather than wholesale rewriting of lesson bodies.

This is a reviewer conclusion based on repository extraction and representative deep reading; it is not an independent maintainer or live-site verification.

### 10.7 Recommended later repair themes (not implementation)

1. Redesign quiz banks for answer-length balance and Spanish-primary stems.
2. Expand production tasks and explicit rubrics in closing modules and selected core lessons.
3. Reintroduce vosotros and selected advanced Spain-specific forms naturally.
4. Clarify the densest Roman Urdu explanations.
5. Correct residual C2 index status wording.
6. Conduct separate live browser, TTS and PWA checks and consider native-speaker review.

### 10.8 Audit collection status

C1–C2 reviewer report received. Together with Sections 2–9, the audit log now contains reviewer reports for A1–C2. The remaining planned stage is a consolidated cross-level gap/progression analysis, followed by a prioritized repair plan. No fixes, code edits or deployment are authorized by this audit report; implementation remains deferred until the user starts the repair phase.
