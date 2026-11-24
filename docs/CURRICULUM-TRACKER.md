# Spanish Seekho — Curriculum Audit Tracker

_Status: Initial repository inventory and curriculum mapping completed; detailed pedagogical/content QA pending._  
_Audit date: 24 November 2026_  
_Baseline: `docs/CURRICULUM-MASTER-PLAN.md` (approved 168-module target)_

> This tracker records what was found in the repository and how existing lessons appear to map to the approved curriculum. **“Existing” means a lesson file was found and its visible structure/topic was inspected; it does not mean the lesson has passed full Spanish, pedagogical, accessibility or device QA.** Do not mark a module complete until the relevant quality checks are evidenced.

## 1. Audit method and limits

### Inspected

- Fetched the individual A1 lesson files 01–25.
- Fetched the individual A2 lesson files 01–20.
- Fetched B1 Lesson 01.
- Checked page titles, visible section headings, presence of quiz/checkpoint patterns, language control references and local progress-storage references.
- Compared visible topics with the approved A1–C2 map in the Curriculum Master Plan.

### Not yet verified

- Every Spanish sentence, translation, accent, grammar explanation and Spain-specific usage.
- Every quiz question and answer key for correctness, ambiguity and scoring behaviour.
- CEFR level suitability and whether learning outcomes are fully achieved.
- Actual browser behaviour, mobile layouts, keyboard accessibility and Urdu RTL rendering.
- Progress persistence across versions/devices and exact localStorage key compatibility.
- Live GitHub Pages behaviour, offline/PWA behaviour and service-worker cache correctness.
- Listening/speaking skill coverage beyond visible prompts; no inference of actual audio or automated speaking assessment.

### Evidence-based structural observations

- All 25 A1 lesson files, all 20 A2 lesson files and B1 Lesson 01 were retrievable at the inspected paths.
- Each inspected lesson page contains a visible section structure and a quiz/checkpoint pattern.
- Language-control and localStorage references were present in the inspected lesson pages. This is code-presence evidence, not proof that the controls or progress saving work correctly.
- Some early A1 pages have shorter/minimal section structures; later A1/A2 pages more often show explicit practice sections. A consistent measurable-objective and assessment rubric audit is still needed.
- Existing review/checkpoint pages must not automatically be treated as the approved end-of-level integrated assessment or readiness module.

## 2. Status definitions

| Status | Meaning |
|---|---|
| Existing — mapping candidate | A page exists and its visible topic appears to address the target outcome; detailed QA remains |
| Partial / overlap | Some relevant content exists, but the full target outcome is not clearly covered or is spread across pages |
| Gap | No dedicated existing lesson was identified for the target outcome |
| Planned | Future curriculum content; no verified implementation identified |
| Needs review | A candidate page exists, but its depth, accuracy or assessment needs closer inspection |

## 3. A1 existing lesson inventory and mapping

The URLs below are existing public lesson paths. Preserve them and existing learner progress; mapping does not authorize renumbering.

| Existing page | Visible topic | Candidate approved A1 module(s) | Initial mapping status / note |
|---|---|---|---|
| [A1-01](../a1/lesson-01.html) | Greetings and introductions | 01 | Existing — mapping candidate |
| [A1-02](../a1/lesson-02.html) | Alphabet and pronunciation | 02 | Existing — mapping candidate |
| [A1-03](../a1/lesson-03.html) | Numbers, dates and time | 04 | Existing — mapping candidate; some date/time content also supports 22 |
| [A1-04](../a1/lesson-04.html) | People, family and countries | 03, 05, 06 | Partial / overlap; multiple outcomes are combined |
| [A1-05](../a1/lesson-05.html) | Everyday objects and places; hay / location | 15, 16 | Partial / overlap; inspect depth of home vs town coverage |
| [A1-06](../a1/lesson-06.html) | Food, cafés and shopping; ordering | 13 | Existing — mapping candidate for food/café; shopping also overlaps 14 |
| [A1-07](../a1/lesson-07.html) | Daily routine and basic verbs | 09 | Needs review; inspect ser/estar/tener/ir/querer coverage and hay gap |
| [A1-08](../a1/lesson-08.html) | Starter review and checkpoint | 25 candidate | Needs review; an internal review is not automatically the full approved cumulative gap-repair module |
| [A1-09](../a1/lesson-09.html) | Personal information and questions | 03, 08 | Existing — mapping candidate |
| [A1-10](../a1/lesson-10.html) | Articles, gender and plurals | 07 | Existing — mapping candidate |
| [A1-11](../a1/lesson-11.html) | Adjectives and descriptions | 06, 07 | Partial / overlap; inspect adjective agreement and describing people |
| [A1-12](../a1/lesson-12.html) | Regular present-tense verbs | 10 | Existing — mapping candidate |
| [A1-13](../a1/lesson-13.html) | Essential irregular verbs | 09 | Partial / overlap with A1-07; reconcile scope and avoid duplicate teaching |
| [A1-14](../a1/lesson-14.html) | Negation and simple sentences | 12 | Existing — mapping candidate; question words also appear elsewhere |
| [A1-15](../a1/lesson-15.html) | Days, dates and schedules | 04, 22 | Partial / overlap; candidate for simple arrangements |
| [A1-16](../a1/lesson-16.html) | Town and directions | 16 | Existing — mapping candidate |
| [A1-17](../a1/lesson-17.html) | Shopping, prices and quantities | 14 | Existing — mapping candidate |
| [A1-18](../a1/lesson-18.html) | Daily routines, frequency, free time and me gusta | 11, 21, 24 | Partial / overlap; useful existing preference content, but connected communication needs review |
| [A1-19](../a1/lesson-19.html) | A1 review and checkpoint | 25 candidate | Needs review; not automatically modules 27 or 28 |
| [A1-20](../a1/lesson-20.html) | Weather and seasons | 17 | Existing — mapping candidate |
| [A1-21](../a1/lesson-21.html) | Home and household | 15 | Existing — mapping candidate |
| [A1-22](../a1/lesson-22.html) | Clothes and what you wear | 18 | Existing — mapping candidate |
| [A1-23](../a1/lesson-23.html) | Body parts and basic health | 19 | Existing — mapping candidate; inspect asking for help and symptom language |
| [A1-24](../a1/lesson-24.html) | Jobs and professions | 20 | Partial / overlap with education/studies |
| [A1-25](../a1/lesson-25.html) | Education, school and studies | 20 | Partial / overlap with jobs; preserve as separate useful page |

### A1 initial gap picture

- Existing content candidates cover most of the everyday topic map, but some outcomes are spread across multiple pages.
- Dedicated A1 content was not identified for **simple arrangements** as a complete communication outcome, **asking for help and clarification** as a dedicated mini-dialogue outcome, and **connected A1 communication** as a coherent production task. Existing pages may contain partial examples; confirm during detailed review.
- The approved A1 modules 26–28 (practical project, integrated four-skill assessment, final readiness checkpoint) are not verified as implemented.
- A1-08 and A1-19 are review/checkpoint pages. Their presence is useful, but their coverage and assessment design must be reviewed before mapping either to module 25, 27 or 28.
- Do not create duplicate standalone lessons for topics already taught. First decide whether existing pages need enrichment, cross-linking or a new integrated activity.

## 4. A2 existing lesson inventory and mapping

| Existing page | Visible topic | Candidate approved A2 module(s) | Initial mapping status / note |
|---|---|---|---|
| [A2-01](../a2/lesson-01.html) | Completed past events / yesterday | 06 | Existing — mapping candidate; check contrast with imperfecto |
| [A2-02](../a2/lesson-02.html) | Past habits and background | 05, 08 | Existing — mapping candidate; compare with A2-01 |
| [A2-03](../a2/lesson-03.html) | Work, studies and duties | 03 | Existing — mapping candidate |
| [A2-04](../a2/lesson-04.html) | Travel, hotel, accommodation and requests | 11, 14 | Partial / overlap; inspect transport coverage |
| [A2-05](../a2/lesson-05.html) | Opinions, preferences and future plans | 04, 09, 23 | Partial / overlap; explicit agreement/disagreement may be missing |
| [A2-06](../a2/lesson-06.html) | Social life, invitations and arrangements | 10, 21 | Existing — mapping candidate; check accepting/declining and register |
| [A2-07](../a2/lesson-07.html) | Health, appointments and medical visits | 13 | Existing — mapping candidate |
| [A2-08](../a2/lesson-08.html) | A2 review and checkpoint | 25 candidate | Needs review; verify cumulative coverage and targeted gap repair |
| [A2-09](../a2/lesson-09.html) | Directions and places in town | 12 | Existing — mapping candidate |
| [A2-10](../a2/lesson-10.html) | Present perfect and experiences | 07 | Existing — mapping candidate; verify Spain usage and contrast with other past forms |
| [A2-11](../a2/lesson-11.html) | Comparisons | 19 | Existing — mapping candidate; compare with preferences/reasons in A2-14 |
| [A2-12](../a2/lesson-12.html) | Advice and obligation | 14 | Existing — mapping candidate; permission/request coverage needs review |
| [A2-13](../a2/lesson-13.html) | Describing people and places | 01, 18 | Partial / overlap; A2 depth beyond A1 needs review |
| [A2-14](../a2/lesson-14.html) | Preferences and giving reasons | 04, 19, 23 | Existing — mapping candidate; avoid duplication with A2-05 |
| [A2-15](../a2/lesson-15.html) | Making plans and arrangements | 09, 10 | Partial / overlap with A2-05 and A2-06 |
| [A2-16](../a2/lesson-16.html) | Travel experiences and problems | 11, 15, 22 | Partial / overlap; useful travel/problem language |
| [A2-17](../a2/lesson-17.html) | Technology and communication | 17 | Existing — mapping candidate |
| [A2-18](../a2/lesson-18.html) | Everyday problems and solutions | 15 | Existing — mapping candidate; distinguish complaints, polite requests and solutions |
| [A2-19](../a2/lesson-19.html) | Grammar and communication review | 08, 20, 25 candidate | Needs review; visible sections include past, present perfect, plans, obligations, comparisons and communication |
| [A2-20](../a2/lesson-20.html) | Integrated final practice, invitation reading/reply, speaking/writing, can-do checklist | 24, 27/28 candidates | Needs review; promising integrated task, but verify all four skills, scoring, rubric and readiness claims before mapping |

### A2 initial gap picture

- The clearest unrepresented approved outcomes are **home/neighbourhood/local services** (module 02) and **services/public offices/forms/appointments in Spain** (module 16).
- Modules 20–24 need an outcome-level audit: linking/sequencing, suggestions, explaining events and follow-up questions, opinions/agreement/disagreement, and integrated communication. Existing pages may cover portions.
- A2-05, A2-14 and A2-15 have overlapping preferences/reasons/plans content; A2-04 and A2-16 overlap travel; A2-11 and A2-14 overlap comparison/preferences. This is not automatically a defect, but progression and non-repetition need review.
- A2-08, A2-19 and A2-20 are review/final practice candidates. Do not count them as approved modules 25–28 until their outcomes, skills and assessment evidence are checked.
- Approved A2 modules 25–28 are not verified as fully implemented.

## 5. B1 inventory

| Existing page | Visible topic | Candidate approved module | Initial status / note |
|---|---|---|---|
| [B1-01](../b1/lesson-01.html) | Narrating past events naturally; indefinido/imperfecto focus, background, interruption, connectors, Málaga story, speaking/writing prompts and quiz | B1-01 | Existing — mapping candidate; verify language depth, accuracy, task quality and progression |

B1-01's visible sections are consistent with the planned opening narrative module. B1-02 should deepen narrative cohesion and discourse structure rather than repeat the introductory tense contrast. B1-02–28 remain planned pending further implementation verification.

## 6. Cross-course implementation checks

| Area | Initial evidence | Status |
|---|---|---|
| Individual lesson files | 25 A1, 20 A2 and 1 B1 file fetched at expected paths | Existing files verified |
| Visible lesson structure | Section headings present across inspected pages | Structural presence only |
| Quiz/checkpoint pattern | Quiz/checkpoint sections found across inspected pages | Content/answer correctness not verified |
| Language controls | Language button/control references found in inspected pages | Runtime behaviour not tested |
| Local progress | localStorage references found in inspected pages | Persistence/regression not tested |
| Urdu RTL / mixed direction | Not verified in browser/device | Needs QA |
| Accessibility and keyboard | Not verified in browser | Needs QA |
| GitHub Pages links and deployment | Not tested in this audit | Needs QA |
| PWA/offline and service worker | Not tested in this audit | Needs QA |

## 7. Agreed next actions

1. **A1 detailed content review:** review the existing pages against mapped outcomes; flag Spanish corrections, missing explanations, repeated content and weak assessments. Do not rewrite all pages by default.
2. **A2 detailed content review:** resolve overlapping topics and confirm the missing outcomes (especially modules 02 and 16).
3. **B1-01 quality review:** verify its content and exact implementation conventions before writing B1-02–06.
4. **Decide minimal repairs:** prefer improving or integrating existing pages over creating unnecessary new pages.
5. **Create new lessons only for confirmed gaps:** preserve all current URLs and local progress.
6. **Run a separate technical QA pass:** mobile, RTL, navigation, progress, accessibility and offline behaviour.
7. Update this tracker only when evidence changes; update handoff and roadmap after meaningful verified work.

## 8. Completion rule

A row may move to **Complete** only after the mapped learning outcome is explicitly covered, the lesson's Spanish and teaching are reviewed, its practice and answer key are checked, integration is verified, and relevant QA evidence is recorded. A file existing, a quiz appearing, or a page being linked is not enough.


## 9. Detailed content review — A1 Lessons 01–05 (24 November 2026)

**Review scope:** Read the visible lesson content and examples, inspect the quiz questions and answer keys, and check the completion/progress-writing logic in the lesson scripts. This was a source review only; no browser/device runtime test was performed. Existing lesson files and public URLs were not changed.

| Page | Review result | Findings and minimal improvement recommendations |
|---|---|---|
| A1-01 — Greetings and introductions | Content and quiz reviewed; no blocker found | Core greetings, informal/formal name questions and dialogue examples are appropriate beginner material. The formal-use note currently groups “older people” with formal situations; clarify that formality depends on context, relationship and preference, not age alone. The Spain pronunciation note is appropriately qualified. |
| A1-02 — Alphabet and pronunciation | Content and quiz reviewed; no blocker found | Five-vowel foundation, silent h, ñ, ll, j, c/z and stress rules are broadly sound. The English “bed” comparison for Spanish **e** is only approximate and may suggest a more open vowel than intended; make the approximation caveat explicit. The r/rr section names the contrast but would benefit from a simple rule/example for tapped **r** (e.g. *pero*) versus trilled **rr** (e.g. *perro*, and word-initial r). The page is a selected-sounds introduction, not yet a complete alphabet/letter-name reference. |
| A1-03 — Numbers, dates and time | Content and quiz reviewed; no blocker found | Number forms, basic clock expressions, weekdays and sample dates are appropriate. Add one concise date rule: **el primero de…** for the first day of a month; use cardinal numbers for other dates (e.g. **el dos de junio**). The page says months are a starter and does not yet teach the full month list; retain that scope transparently. |
| A1-04 — People, family and countries | Content and quiz reviewed; no blocker found | Family vocabulary, **ser**, **tener**, country/nationality examples and gender/number forms are broadly accurate. The examples correctly show *pakistaní* as gender-invariant and *español/española* as changing with gender. No correction required from this pass. |
| A1-05 — Everyday objects and places | Content and quiz reviewed; no blocker found | Articles, object/room vocabulary, **¿Dónde está…?**, location phrases, **hay** versus **está**, and the short dialogue are broadly accurate. Consider distinguishing **habitación** (“room”) from **dormitorio** (“bedroom”) rather than presenting “room / bedroom” as fully interchangeable. The lesson introduces several location prepositions but does not yet teach a complete spatial-language set. |

### Cross-page quiz and progress checks

- Quiz answer keys inspected for all five pages; no incorrect keyed answer was identified in this pass.
- The scripts shuffle answer options while recalculating the correct option index, and completion is recorded after the configured passing threshold (the threshold differs by lesson).
- Completion uses the existing 'ss-a1-done' localStorage key and lesson-specific IDs. No storage-key or URL migration was made.
- These are source-level findings only. Actual quiz interaction, speech playback, localStorage persistence, language switching, mobile layout and assistive-technology behaviour remain untested.

### Batch decision

- **No lesson rewrite is justified from this review.**
- Keep the five pages and their existing URLs. Apply the small clarity improvements when the A1 repair pass is scheduled, rather than introducing a separate duplicate lesson.
- Continue with **A1 Lessons 06–10** for the next detailed review batch.


## 10. Detailed content review — A1 Lessons 06–10 (24 November 2026)

**Review scope:** Read visible lesson content and examples, inspect quiz questions/answer keys, and check source-level completion logic. This was not a browser/device runtime test. No lesson source files, public URLs or progress keys were changed.

| Page | Review result | Findings and minimal improvement recommendations |
|---|---|---|
| A1-06 — Food, cafés and shopping | Content and quiz reviewed; no blocker found | Core food vocabulary, polite ordering, prices, payment and café dialogue are suitable beginner material. The note correctly identifies *agua* as feminine despite singular *el agua*. Add the useful agreement example **el agua fría** (feminine adjective) and remind learners that the plural is **las aguas**. The formal label for **¿Qué quiere?** is valid when addressing *usted*; keep the subject/register explicit so it is not confused with *¿Qué quieres?*. |
| A1-07 — Daily routine and basic grammar | Content and quiz reviewed; no blocker found | The beginner explanations of **ser**, **estar**, **tener**, **ir** and **querer** include sensible caveats against treating “permanent vs temporary” as an absolute rule. Examples and quiz keys reviewed are sound. Keep the current caveats; they prevent a common oversimplification. Some Urdu-script pronunciation snippets contain bracketed fragments and should be polished in a later pronunciation/RTL pass, not treated as Spanish grammar errors. |
| A1-08 — Review and A1 checkpoint | Content and quiz reviewed; all keyed answers checked | The 10 quiz answers are correctly keyed and the stated 7/10 completion threshold matches the source logic. However, the “first 7 lessons” review is selective: alphabet/pronunciation and much of numbers, dates and time are not meaningfully represented in the review or checkpoint questions. Keep this as an **early starter checkpoint**, not a full cumulative A1 review or an approved end-of-level assessment. Expand its coverage when the dedicated review module is designed. |
| A1-09 — Personal information and questions | Content and quiz reviewed; no blocker found | Question words, personal details, **vivir/hablar** conjugations, *tú/usted* contrast and the Spain-specific *vosotros* forms are appropriate. The examples **Hablo urdu e inglés** and **¿Cuántos años tienes?** are correct. No content correction required from this pass. |
| A1-10 — Articles, gender and plurals | Content and quiz reviewed; no blocker found | Definite/indefinite articles, grammatical gender, common endings, exceptions and plural patterns are broadly accurate. The page appropriately labels ending patterns as clues rather than absolute rules. Consider cross-linking the earlier **el agua** exception and, at a later stage, briefly noting unchanged plurals for some nouns ending in -s/-x. No quiz-key error found. |

### Cross-page quiz and progress checks

- Quiz answer keys inspected for all five pages; no incorrect keyed answer was identified in this pass.
- The option-shuffle logic preserves the correct answer index after shuffling in the inspected scripts.
- Lesson completion is written to the existing 'ss-a1-done' key with lesson-specific IDs. Lesson 08 uses its stated 7/10 threshold; the other inspected pages use their configured thresholds.
- These are source-level observations only. Actual browser interaction, localStorage persistence, speech synthesis, language switching, mobile layout, Urdu RTL and accessibility remain untested.

### Batch decision

- **No full lesson rewrite is justified from this review.**
- Record small clarity improvements for A1-06 and A1-10; the more meaningful curriculum issue is A1-08's selective checkpoint coverage.
- Preserve existing URLs and progress keys.
- Continue with **A1 Lessons 11–15** for the next detailed review batch.


## 11. Detailed content review — A1 Lessons 11–15 (24 November 2026)

**Review scope:** Visible lesson content, examples, quiz answer keys and source-level completion logic were inspected. No browser/device runtime testing was performed.

| Page | Review result | Findings |
|---|---|---|
| A1-11 — Adjectives and descriptions | Reviewed; no blocker found | Adjective placement, -o agreement, invariant -e/consonant forms, colour agreement and ser + adjective examples are broadly accurate. Quiz keys reviewed; no correction required. |
| A1-12 — Regular present-tense verbs | Reviewed; no blocker found | -AR/-ER/-IR paradigms, vosotros forms, pronoun omission and examples are accurate for the stated beginner scope. Quiz keys reviewed; no correction required. |
| A1-13 — Essential irregular verbs | Reviewed; no blocker found | Ser, estar, tener, ir and hacer paradigms/examples are sound. The beginner caveat on ser/estar is appropriate. Quiz keys reviewed; no correction required. |
| A1-14 — Negation and simple sentences | Reviewed; minor quiz distractor polished | Core no + conjugated verb, nunca/tampoco and question punctuation explanations are broadly accurate. One distractor in the final quiz was awkwardly mixed with English (“only”); it was replaced with a cleaner incorrect Spanish distractor. Correct answer and scoring were preserved. |
| A1-15 — Days, dates and schedules | Reviewed; factual example corrected | The page stated “martes, 18 de noviembre de 2026”; 18 November 2026 is Wednesday, so the Spanish example was corrected to **miércoles**. The remaining date, month, weekday, appointment and time examples are broadly sound. |

### 11.1 Optimizations and corrections applied together

The following targeted changes were implemented directly in the existing lesson files. No lesson URL, file path, lesson ID, completion threshold or progress-storage key was changed.

- **A1-01:** Clarified that formal address depends on context and preference, not age alone.
- **A1-02:** Clarified that the English “bed” comparison for Spanish *e* is approximate; added a more useful single-r/trilled rr distinction with *pero/perro* examples.
- **A1-05:** Clarified *habitación* versus *dormitorio* rather than treating “room” and “bedroom” as exact synonyms.
- **A1-06:** Expanded the *agua* note to explain stressed initial *a* and feminine adjective agreement: **el agua fría**.
- **A1-08:** Renamed the review label to “Starter review”; added a compact pronunciation/date/time recap; replaced two quiz items so the 10-question checkpoint now samples vowel pronunciation and first-of-month date usage. The 7/10 threshold and completion behaviour remain unchanged. It is still a starter checkpoint, not a complete CEFR A1 assessment.
- **A1-14:** Improved one awkward distractor without changing the correct answer.
- **A1-15:** Corrected the weekday for 18 November 2026 from Tuesday to Wednesday.

A1-03 already contained the first-of-month date rule (*el primero de…*) and cardinal-date example, so no duplicate change was made there.

### 11.2 Verification and limits

- All seven modified lesson files were fetched again from GitHub; each intended replacement was present.
- No incorrect keyed answers were identified in the reviewed Lessons 11–15.
- Existing localStorage progress handling and lesson URLs were preserved in the changes.
- Verification was source-level only. Runtime quiz behaviour, mobile/RTL layout, speech synthesis, persistence across browsers and accessibility still need browser/device testing.

### 11.3 Next batch

Continue with **A1 Lessons 16–20** using the combined workflow: review content and quiz, fix verified issues in the same pass, verify the changed files, then update this tracker. Avoid opening a second repair cycle for already-reviewed lessons unless a cross-lesson inconsistency or new evidence requires it.


## 12. Detailed content review — A1 Lessons 16–20 (24 November 2026)

**Review scope:** Visible lesson content, examples, quiz answer keys and source-level completion logic reviewed. No browser/device runtime test was performed.

| Page | Review result | Findings |
|---|---|---|
| A1-16 — Town and directions | Reviewed; no blocker or incorrect quiz key found | Place vocabulary, *hay* vs *está*, location prepositions, *de + el = del*, direction commands and polite request examples are broadly accurate. Clarified *estación de tren* / *estación de autobuses* and *parada de autobús* so learners can distinguish a station from a bus stop more precisely. |
| A1-17 — Shopping, prices and quantities | Reviewed; no blocker or incorrect quiz key found | *Cuesta/cuestan*, quantity phrases with *de*, prices, *quisiera*, payment and receipt examples are appropriate. Decimal comma example (2,50 €) is suitable for Spain. No code/content change required. |
| A1-18 — Daily routine and hobbies | Reviewed; no blocker or incorrect quiz key found | Reflexive routine phrases, time-of-day expressions, frequency adverbs, *me gusta/me gustan* and activity examples are broadly accurate. The explanation correctly warns against adding a second *no* after *nunca* in the simple examples. No change required. |
| A1-19 — Starter review and checkpoint | Reviewed; all 12 quiz keys checked | The 12-item quiz keys and 9/12 (75%) pass threshold are consistent. The page appropriately states that it is an internal starter milestone, not an official CEFR exam or completed A1 qualification. Its footer incorrectly said only Lessons 01–19 were available although Lesson 20 exists; corrected to **Lessons 01–20 available**. The checklist is a self-reflection aid, not a full CEFR assessment. |
| A1-20 — Weather and seasons | Reviewed; no blocker or incorrect quiz key found | Weather patterns (*hace*, *llueve*, *nieva*, *está nublado*, *hay tormenta*), seasons, temperature and clothing examples are broadly accurate. The page appropriately labels pronunciation guides as approximations and acknowledges regional variation. No change required. |

### 12.1 Optimizations and verification

- A1-16: clarified station/bus-station/bus-stop vocabulary in the existing usage note.
- A1-19: corrected the available-lesson count from 01–19 to 01–20; retained its non-certification disclaimer and 9/12 pass threshold.
- Both changed lesson files were fetched again from GitHub and the intended text was verified.
- No lesson URL, ID, completion threshold or progress-storage key was changed.
- No incorrect keyed answers were identified in Lessons 16–20 during source review.
- Runtime quiz interaction, browser/device persistence, speech synthesis, mobile layout, Urdu RTL and accessibility are still untested.

### 12.2 A1 review status and next step

Detailed source review now covers **A1 Lessons 01–20**. Continue with **A1 Lessons 21–25**, using the same combined review-and-fix workflow. After A1-25, audit the four approved closing modules (26–28 plus the module-25 review) against the actual implementation before claiming the full A1 pathway is complete.
