# Spanish Seekho — Curriculum Audit Tracker

_Status: A1 Lessons 01–25 source-reviewed; A1 end-of-level modules 25–28 implemented. A2 core lessons 01–23 and separate end-of-level modules 25–28 implemented, mapped and live-smoke-tested. B1 Lessons 01–06 implemented and deployed; B1-01 and B1-02 live quiz completion verified. Programme-wide device/accessibility/offline QA remains pending._  
_Audit date: 24 November 2026_  
_Baseline: `docs/CURRICULUM-MASTER-PLAN.md` (approved 168-module target)_

> This tracker records what was found in the repository and how existing lessons appear to map to the approved curriculum. **“Existing” means a lesson file was found and its visible structure/topic was inspected; it does not mean the lesson has passed full Spanish, pedagogical, accessibility or device QA.** Do not mark a module complete until the relevant quality checks are evidenced.

## 1. Audit method and limits

### Inspected

- Fetched the individual A1 lesson files 01–25.
- Fetched the individual A2 lesson files 01–23 and separate end-of-level pages 25–28.
- Fetched B1 Lessons 01–06.
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
| [A2-01](../a2/lesson-01.html) | Completed past events / yesterday; regular indefinido with brief irregular preview | 06 | Detailed source review: suitable module 06 candidate. Added clarification that *hablamos* is identical in present and preterite; context distinguishes it |
| [A2-02](../a2/lesson-02.html) | Past habits, descriptions and imperfecto/indefinido contrast | 05, 08 | Detailed source review: module 05 is a strong candidate; module 08 is partial because present-day routine comparison is not developed |
| [A2-03](../a2/lesson-03.html) | Work, studies, obligations, advice and job interview | 03 | Detailed source review: strong module 03 candidate; *tener que*, *hay que* and *deber* are distinguished accurately at starter level |
| [A2-04](../a2/lesson-04.html) | Hotel/accommodation, reservations, polite requests and simple problems | 11, 14 | Detailed source review: accommodation is covered; transport situations are absent (module 11 partial). Polite requests/permission examples support module 14, but obligation is not developed here |
| [A2-05](../a2/lesson-05.html) | Opinions, preferences, agreement/disagreement, near-future plans and arrangements | 04, 09, 23 | Detailed source review: modules 09 and 23 have clear coverage; module 04 is partial because giving reasons for choices is not developed explicitly |
| [A2-06](../a2/lesson-06.html) | Social life, invitations, accepting/declining and suggestions | 10, 21 | Detailed source review: module 21 strongly covered; module 10 partially supported through arranging and changing a plan. Informal tú and formal usted examples are distinguished |
| [A2-07](../a2/lesson-07.html) | Health, symptoms, appointments and pharmacy communication | 13 | Detailed source review: strong module 13 coverage; includes communication phrases and a clear non-diagnostic/medicine-advice boundary |
| [A2-08](../a2/lesson-08.html) | Interim review and starter checkpoint covering Lessons 01–07 | — | Detailed source review: 7-topic checklist and 12-question checkpoint accurately labelled as an internal starter milestone, not full A2 or approved end-of-level module 25. Directions and present perfect are not included because they appear in later lessons |
| [A2-09](../a2/lesson-09.html) | Directions, places in town, public transport question and polite commands | 12 | Detailed source review: strong module 12 candidate; informal tú and polite usted command forms are distinguished; quiz keys checked |
| [A2-10](../a2/lesson-10.html) | Present perfect, recent time periods and life experiences | 07 | Detailed source review: forms and irregular participles checked; added regional-variation nuance to avoid a rigid Spain/Latin America split; dialogue now answers *¿Has estado…?* with *He estado…* |
| [A2-11](../a2/lesson-11.html) | Comparatives: más/menos/tan and irregular comparatives | 19 | Detailed source review: strong module 19 coverage. Added nuance that mayor/menor are especially common for age/rank/amount; use más grande/más pequeño for ordinary physical size |
| [A2-12](../a2/lesson-12.html) | Advice, specific obligation and general necessity | 14 | Detailed source review: advice (deber), personal obligation (tener que) and general necessity (hay que) are accurately distinguished. Permission is not taught in this lesson and remains a module 14 gap |
| [A2-13](../a2/lesson-13.html) | Describing people, appearance, neighbourhoods and places | 01, 18 | Detailed source review: useful expansion of personal descriptions and places; added accurate distinction antiguo/a (old/ancient/former) vs histórico/a (historic). More connected detail still needed for full module 18 |
| [A2-14](../a2/lesson-14.html) | Preferences, reasons, agreement and disagreement | 04, 19, 23 | Detailed source review: module 04 and 23 well represented; module 19 partial through preferences/reasons but no comparative language. Avoid duplication with A2-05 |
| [A2-15](../a2/lesson-15.html) | Near-future plans, meeting arrangements and time coordination | 09, 10 | Detailed source review: strong module 09 and 10 coverage. Distinct from A2-05/06 when focused on concrete scheduling and changing arrangements |
| [A2-16](../a2/lesson-16.html) | Travel experiences and problems | 11, 22 | Partial / overlap; useful transport, accommodation and disruption language; follow-up questions and fuller problem-resolution sequences remain limited |
| [A2-17](../a2/lesson-17.html) | Technology and communication | 17 | Strong mapping candidate; digital actions, common problems and direct object pronouns are covered |
| [A2-18](../a2/lesson-18.html) | Everyday problems and solutions | 15, 14 partial | Strong module 15 candidate; advice and polite requests support module 14, but permission and fuller service/public-office contexts are missing |
| [A2-19](../a2/lesson-19.html) | Grammar and communication review | 05–07, 14, 19, 20, 23; 25 candidate | Review page spanning several grammar areas; not a dedicated module 20 linking/sequencing lesson or a complete module 25 gap-repair review |
| [A2-20](../a2/lesson-20.html) | Integrated final practice, invitation reading/reply, speaking/writing, can-do checklist | 24 partial; 26/27/28 candidates | Useful integrated practice, but no separate listening-comprehension task, scored productive-skill rubric, trip-planning project or readiness plan; not modules 26–28 |

| [A2-21](../a2/lesson-21.html) | Home, neighbourhood and local services | 02 | New lesson — strong module 02 mapping; deployed and live 8/8 verified |
| [A2-22](../a2/lesson-22.html) | Public services, forms and appointments | 16 | New lesson — strong module 16 mapping; local procedures explicitly vary; deployed and live 8/8 verified |
| [A2-23](../a2/lesson-23.html) | Connectors and sequencing events | 20 | New lesson — strong module 20 mapping; deployed and live 8/8 verified |

### A2 reconciled outcome coverage — all 24 approved core modules

The 20 original lessons and the three new lessons (21–23), together with the targeted revisions below, now provide **strong internal mapping evidence for all 24 approved A2 core outcomes**. This is a repository curriculum-mapping judgement, not external CEFR validation, accreditation or proof of official proficiency.

| Approved module | Required outcome | Existing evidence | Status | Remaining work |
|---:|---|---|---|---|
| 01 | Personal descriptions and relationships | A2-13 descriptions/appearance and relationship vocabulary; A2-06 social interaction | Strong | Continue recycling relationship language in later tasks |
| 02 | Home, neighbourhood and local services | A2-21 | Strong | New lesson added |
| 03 | Work, education and everyday responsibilities | A2-03 | Strong | No new lesson needed |
| 04 | Preferences, reasons and making choices | A2-05 and A2-14 | Strong | Keep progression distinct |
| 05 | Past habits and life stages | A2-02 | Strong | No new lesson needed |
| 06 | Completed events in everyday narration | A2-01 | Strong | No new lesson needed |
| 07 | Present perfect for recent/relevant experiences | A2-10 and A2-19 review | Strong | Keep regional usage nuanced |
| 08 | Comparing past and present routines | A2-02, with explicit antes/ahora comparisons | Strong | Targeted comparison practice added |
| 09 | Near future and planned activities | A2-05 and A2-15 | Strong | Preserve distinction between plans and arrangements |
| 10 | Invitations, arrangements and changing plans | A2-06 and A2-15 | Strong | Existing coverage |
| 11 | Travel, accommodation and transport situations | A2-04 accommodation; A2-16 travel/transport problems | Strong | Maintain progression from booking to resolving disruptions |
| 12 | Asking for and giving more detailed directions | A2-09 | Strong | Existing coverage |
| 13 | Healthcare, symptoms, pharmacy and appointments | A2-07 | Strong | Preserve safe, non-diagnostic language |
| 14 | Requests, advice, obligation and permission | A2-12, A2-14 permission block and A2-18 requests | Strong | Permission explicitly added |
| 15 | Everyday problems, complaints and simple solutions | A2-18 | Strong | Existing coverage |
| 16 | Services, public offices, forms and appointments in Spain | A2-22 | Strong | New lesson added; always verify local official requirements |
| 17 | Technology, messaging and online communication | A2-17 | Strong | Existing coverage |
| 18 | Describing objects, places and experiences in more detail | A2-13 connected descriptions | Strong | Richer detail and links added |
| 19 | Comparisons, quantities and preferences with reasons | A2-11 and A2-14 | Strong | Keep comparison grammar distinct from preference practice |
| 20 | Linking ideas with common connectors and sequencing events | A2-23 | Strong | New lesson added |
| 21 | Making suggestions, accepting and politely declining | A2-06 | Strong | Existing coverage |
| 22 | Explaining what happened and asking follow-up questions | A2-16 and A2-18 | Strong | Follow-up questions and clarification added |
| 23 | Simple opinions, agreement and disagreement | A2-05 and A2-14 | Strong | Existing coverage |
| 24 | Integrated A2 communication across personal, public and work/study contexts | A2-20 integrated tasks | Strong | Three context tasks added; keep it distinct from formal end-of-level assessment |

### Overlap and progression decisions

- **A2-04 vs A2-16:** A2-04 remains centred on accommodation, booking and guest requests; A2-16 covers travel experiences, transport disruption and follow-up questions.
- **A2-05 vs A2-14 vs A2-15:** A2-05 focuses on choices/opinions and near-future intentions; A2-14 on preferences, reasons, agreement and permission; A2-15 on practical scheduling and changing arrangements.
- **A2-11 vs A2-14:** A2-11 teaches comparative structures; A2-14 uses preferences/reasons in communication. Comparative grammar is not retaught.
- **A2-08 and A2-19:** remain interim/revision pages, not approved module 25 cumulative review.
- **A2-20:** now has integrated personal, public and work/study tasks for core module 24, but is not module 27 or 28.

### Remaining A2 work

1. Complete selected A2 runtime/device QA: A2-07 result display and A2-14/15 plus A2-17–20 quiz submissions; also test reload persistence, TTS, mobile/RTL, accessibility and offline behaviour.
2. Verify B1-01–06 content and continue the next coherent B1 batch from lesson 07 after planning against the master map.
3. Preserve existing URLs, lesson IDs and the `ss-a2-done` progress key. Do not overwrite A2-08, A2-19 or A2-20.

## 5. B1 inventory

| Existing page | Visible topic | Candidate approved module | Initial status / note |
|---|---|---|---|
| [B1-01](../b1/lesson-01.html) | Narrating past events naturally; indefinido/imperfecto focus, background, interruption, connectors, Málaga story, speaking/writing prompts and quiz | B1-01 | Strong — source-reviewed and live 8/8 quiz/completion verified |
| [B1-02](../b1/lesson-02.html) | Building coherent stories with sequence, contrast and background detail | B1-02 | New — source-reviewed; live page/quiz controls verified; 8/8 interaction passed |
| [B1-03](../b1/lesson-03.html) | Experiences and achievements; present perfect vs indefinido in context | B1-03 | New — source-reviewed; live page/quiz controls verified |
| [B1-04](../b1/lesson-04.html) | Life changes and milestones; soler + infinitive and past/present comparison | B1-04 | New — source-reviewed; live page/quiz controls verified |
| [B1-05](../b1/lesson-05.html) | Expressing opinions with reasons and examples | B1-05 | New — source-reviewed; live page/quiz controls verified |
| [B1-06](../b1/lesson-06.html) | Agreeing/disagreeing diplomatically and keeping discussion moving | B1-06 | New — source-reviewed; live page/quiz controls verified |
| [B1-07](../b1/lesson-07.html) | Supporting an argument and considering another viewpoint | B1-07 | New — source-reviewed; deployed and live 8/8 completion verified |
| [B1-08](../b1/lesson-08.html) | Clarifying and reformulating | B1-08 | New — source-reviewed; deployed, eight questions and submit control verified |
| [B1-09](../b1/lesson-09.html) | Future predictions and promises | B1-09 | New — source-reviewed; deployed, eight questions and submit control verified |
| [B1-10](../b1/lesson-10.html) | Hypothetical situations and polite requests | B1-10 | New — source-reviewed; deployed, eight questions and submit control verified |
| [B1-11](../b1/lesson-11.html) | Plans, intentions and possible outcomes | B1-11 | New — source-reviewed; deployed, eight questions and submit control verified |
| [B1-12](../b1/lesson-12.html) | Making decisions and weighing options | B1-12 | New — source-reviewed; GitHub Pages deployment pending |
| [B1-13](../b1/lesson-13.html) | Work experience and responsibilities | B1-13 | New — source-reviewed; GitHub Pages deployment pending |
| [B1-14](../b1/lesson-14.html) | Education, skills and learning goals | B1-14 | New — source-reviewed; GitHub Pages deployment pending |
| [B1-15](../b1/lesson-15.html) | Applications and professional self-presentation | B1-15 | New — source-reviewed; GitHub Pages deployment pending |
| [B1-16](../b1/lesson-16.html) | Social issues and everyday change | B1-16 | New — source-reviewed; GitHub Pages deployment pending |

B1-01's opening narrative module is verified. B1-02 extends narrative cohesion and discourse structure rather than repeating the introductory tense contrast. B1-03–04 complete the first narrative/experience unit; B1-05–08 cover opinions and interaction; B1-09–11 begin plans/predictions. B1-12–16 have been created at source level; GitHub Pages publication is pending. B1-17–28 remain planned.

## 6. Cross-course implementation checks

| Area | Initial evidence | Status |
|---|---|---|
| Individual lesson files | A1 01–25; A2 core 01–23 plus end modules 25–28; B1 01–06 | Source files and deployed routes verified |
| Visible lesson structure | Section headings present across inspected pages | Structural presence only |
| Quiz/checkpoint pattern | Quiz/checkpoint sections found across inspected pages | Content/answer correctness not verified |
| Language controls | Language button/control references found in inspected pages | Runtime behaviour not tested |
| Local progress | localStorage references found in inspected pages | Persistence/regression not tested |
| Urdu RTL / mixed direction | Not verified in browser/device | Needs QA |
| Accessibility and keyboard | Not verified in browser | Needs QA |
| GitHub Pages links and deployment | A2 core/end modules and B1 01–06 index/routes checked live | Selected live interactions verified; broader cross-device QA pending |
| PWA/offline and service worker | Cache v70 includes current A1/A2/B1 pages | Cache configured; actual offline behaviour not verified |

## 7. Current next actions

1. **B1 continuation:** B1-01–06 are implemented and mapped to the opening sequence. Produce B1-07–11 as the next coherent batch, following the approved B1 master map.
2. **Selected A2 runtime QA:** test A2-07 result display and A2-14/15 plus A2-17–20 quiz submissions; preserve all existing progress keys.
3. **Cross-course device QA:** mobile/Android, Urdu RTL, keyboard/focus, screen-reader labels, TTS, reload persistence and actual offline/PWA behaviour.
4. **A1 end-of-level follow-up:** complete remaining interaction checks for modules 25, 27 and 28.
5. Update this tracker, handoff and roadmap after each verified batch. Do not claim official CEFR certification or complete CEFR syllabi.


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


## 13. Detailed content review — A1 Lessons 21–25 (24 November 2026)

**Review scope:** Visible content, Spanish examples, quiz answer keys, and source-level completion/progress logic reviewed. This is not browser/device runtime QA.

| Page | Review result | Findings |
|---|---|---|
| A1-21 — At home and household | Reviewed; no blocker or incorrect quiz key found | Household vocabulary and examples are broadly accurate. Clarified the dialogue's *dos habitaciones* to *dos dormitorios* because its English translation specifically said “two bedrooms”; this removes ambiguity between rooms and bedrooms. |
| A1-22 — Clothes and what you wear | Reviewed; no blocker or incorrect quiz key found | Clothing vocabulary, *llevar* vs *ponerse*, and colour agreement are broadly accurate. Expanded the colour note to explain plural agreement too: *azul/verde* remain unchanged for masculine/feminine singular, while plural forms are *azules/verdes*. |
| A1-23 — Body parts and basic health | Reviewed; no incorrect quiz key found | Body-part vocabulary and *me duele/me duelen* examples are suitable for beginner language learning. Replaced a sample pharmacy line prescribing “two tablets a day” with a safer language example advising consultation with a pharmacist; a beginner language lesson should not imply a medicine or dosage recommendation. The page already carries an educational-not-medical-advice disclaimer. |
| A1-24 — Jobs and professions | Reviewed; no blocker or incorrect quiz key found | Profession gender forms, *ser + profession*, workplaces with *en*, and informal/formal questions are broadly accurate. |
| A1-25 — Education and studies | Reviewed; no blocker or incorrect quiz key found | Spain-oriented school vocabulary (*colegio*, *instituto*, *universidad*), study verbs, and examples are broadly accurate; regional variation is acknowledged. |

### 13.1 Quiz and progress logic

- All five lessons contain 8 questions with answer explanations.
- Each lesson retains its existing 6/8 completion threshold.
- Each lesson retains the `ss-a1-done` localStorage key and its existing lesson identifier (lesson-21 through lesson-25).
- No incorrect keyed answers were identified in this source review.

### 13.2 Optimizations and verification

- A1-21: clarified “two bedrooms” as *dos dormitorios*.
- A1-22: added plural adjective examples *camisas azules* and *pantalones verdes*.
- A1-23: removed the example dosage instruction and replaced it with a consultation phrase.
- All three changed lesson files were fetched again from GitHub and the intended updates were verified.
- Lesson paths, IDs, quiz sizes, thresholds and progress-storage keys were preserved.
- No changes were needed in A1-24 or A1-25.
- Runtime interaction, speech playback, device persistence, responsive layout, RTL and accessibility remain untested.

### 13.3 A1 detailed review status

Detailed source review now covers **A1 Lessons 01–25**. Next, verify the approved A1 closing modules and their actual implementation: module 25 cumulative review/gap repair, module 26 practical action-oriented project, module 27 integrated skills assessment, and module 28 end-level checkpoint/self-assessment/readiness plan. Do not equate the existing Lesson 25 page with all four closing modules. Record which components exist, are partial, or are missing before designing additions.


## 14. A1 end-of-level modules 25–28 — implementation verification (24 November 2026)

The repository inventory showed that the existing file `a1/lesson-25.html` is **Education, school and studies** (a core-topic lesson mapped to approved module 20), not the approved cumulative review. It was preserved without renumbering or overwriting. The existing A1 lesson progress key and lesson IDs remain unchanged.

Four separate end-of-level activity pages have now been created:

| Approved module | New page | Implemented content | Completion / evidence |
|---|---|---|---|
| 25 — Cumulative review and targeted gap repair | [a1-review.html](../a1/a1-review.html) | 12 mixed A1 questions, explanations, missed-topic links and targeted lesson revision | 9/12 review target; records module-25 in the separate `ss-a1-end-done` key |
| 26 — Practical project: introduce yourself and handle a day of basic tasks in Spain | [a1-project.html](../a1/a1-project.html) | Five linked tasks: introduction, café order, directions, shopping/payment and asking for basic help; model phrases, speaking prompts and saved written drafts | Learner marks each of five task checklists; records module-26 separately |
| 27 — Integrated listening, reading, speaking and writing assessment | [a1-assessment.html](../a1/a1-assessment.html) | Browser TTS listening message with questions, reading message with questions, self-reviewed speaking prompts, short writing task and mediation task | Six self-review checks; no automated speaking/writing grade. TTS is browser-generated, not a professional recording |
| 28 — Final checkpoint, self-assessment and A2 readiness plan | [a1-readiness.html](../a1/a1-readiness.html) | A1 can-do checklist, gap plan and learner choice of next step before A2 | Saves the personal readiness choice and module-28 completion locally; not a CEFR placement test |

### Integration and preservation

- Added all four activities to the A1 course index in a separate **A1 · End-of-level** section.
- Kept the existing 25 lesson links and lesson numbering intact; the existing A1 lesson progress counter remains a 25-lesson counter, with a separate 0–4 end-of-level activity count.
- Added all four new pages to the service-worker precache and incremented the cache from `spanish-seekho-v66` to `spanish-seekho-v67`.
- New end-of-level completion uses `ss-a1-end-done`; project, assessment and readiness drafts use separate keys. Existing `ss-a1-done` learner progress is not migrated, cleared or overwritten.
- Direct access remains open. No completion gate was added.

### Verification limits

- Confirmed all four new files exist on GitHub, have page metadata and load the shared A1 app shell.
- Confirmed the A1 index contains all four links and the service worker lists all four pages under the new cache version.
- Source-level review only. No browser execution, JavaScript runtime test, Android/RTL test, screen-reader/keyboard audit or real offline/PWA test was performed.
- Module 27's listening activity depends on browser text-to-speech availability. Speaking and writing are self-reviewed and are not automatically assessed.
- These activities are internal learning resources, not official CEFR exams, certificates or proof of A1 proficiency.

### Next audit priority

A1 now has its four approved closing activities implemented at source level. A2 core 01–24 and closing modules 25–28 are implemented and mapped. B1-01–06 are implemented; continue with B1-07–11 after the current source/live checks. Schedule dedicated browser/device QA for A1/A2 and B1-03–06 before making offline or accessibility claims.


### 14.1 Public deployment smoke test (24 November 2026)

A live browser smoke test was performed against the public GitHub Pages A1 course after the GitHub commits.

- A1 course index loaded and displayed all four end-of-level activity cards.
- **Module 25 review:** page rendered; all 12 correct answer choices were selected and the quiz control was located. The automated run did not confirm the final submit/result interaction, so quiz scoring is not marked runtime-verified.
- **Module 26 project:** page rendered; all five task checkboxes were ticked and the completion button was clicked. The browser run reported the action was processed.
- **Module 27 assessment:** page deployment and initial rendering were confirmed; the full six-checkbox completion flow was not completed.
- **Module 28 readiness:** deployment was confirmed from the index navigation; the full readiness-choice/save flow was not completed.
- No visible page errors were reported during the run.

This was a limited public-site smoke test, not exhaustive QA. In particular, browser TTS audio output, saved state after reload, keyboard/screen-reader behaviour, Urdu RTL, Android layouts and offline service-worker behaviour remain unverified.


## 15. A2 Lessons 01–05 — detailed source review and same-pass optimization (24 November 2026)

Reviewed all five source files in detail: visible explanations, Spanish forms/examples, English meanings, Roman Urdu/Urdu pronunciation aids, quiz questions and answer keys, scoring handlers, completion IDs and local progress references.

| Lesson | Review result | Curriculum mapping / remaining gap |
|---|---|---|
| A2-01 — Completed past events | Regular -ar and -er/-ir pretérito endings and sample forms are accurate. The short *hacer*, *ir/ser* and *tener* irregular preview is correctly labelled as additional preview. Quiz keys checked; no incorrect key found. | Module 06 candidate. A short note was added to explain that *hablamos* is identical in present and preterite, with time expressions/context distinguishing the meaning. |
| A2-02 — Past habits and descriptions | Imperfect regular endings and the three irregular verbs (*ser, ir, ver*) are presented accurately. The imperfecto/indefinido contrast is appropriately labelled a beginner guide rather than an absolute rule. Quiz keys checked; no incorrect key found. | Strong module 05 candidate. Module 08 remains partial: past habit vs completed event is contrasted, but present-day routines are not explicitly compared. |
| A2-03 — Work, studies and duties | Work/study vocabulary, *ser* for roles, *tener que*, general *hay que*, advice with *deber*, and the short job-interview dialogue are accurate for the intended scope. Quiz keys checked; no incorrect key found. | Strong module 03 candidate. |
| A2-04 — Travel and accommodation | Hotel vocabulary, reservations, check-in/out, polite requests, simple complaints and adjective agreement examples are sound. Quiz keys checked; no incorrect key found. | Module 11 is partial because transport situations are not included. Polite requests and a permission question support module 14, but obligation is not developed in this page. |
| A2-05 — Opinions, preferences and plans | *Creo que*, *me parece que*, *gustar/gustan*, positive/negative agreement responses and *ir a + infinitive* examples are accurate. Quiz keys checked; no incorrect key found. | Clear candidates for modules 09 and 23. Module 04 is partial because reasons for choices are not explicitly practised. |

### Same-pass change

- A2-01: added a concise note showing *Hoy hablamos* vs *Ayer hablamos*, explaining the present/preterite form overlap.
- No other lesson content was changed because the review did not identify a verified factual or answer-key error that justified editing.
- All five lessons retain their original URLs, six-question quizzes, 4/6 completion threshold, lesson completion IDs and `ss-a2-done` progress key.
- Re-fetched all five files after the change. Confirmed the new A2-01 note is present and the existing quiz/progress structures remain intact.

### Verification limits

This was a detailed source-level review. It does not establish browser runtime correctness, mobile/Android layout, Urdu RTL quality, keyboard/screen-reader accessibility, speech output quality or persistence after reload. No live interaction test was performed for this A2 batch.


## 16. A2 Lessons 06–10 — detailed source review and same-pass optimization (24 November 2026)

Reviewed visible lesson content, Spanish examples and translations, Castilian pronunciation aids, register, quiz questions/answer keys, score thresholds, completion handlers and local progress references.

| Lesson | Findings | Action |
|---|---|---|
| A2-06 — Social life, invitations and arrangements | Invitation forms (*¿Quieres…?*, *¿Te apetece…?*, *¿Te gustaría…?*), accepting/declining, suggestions, *quedar* and *¿Te viene bien?* are natural. Formal *¿Le gustaría venir?* is distinguished from informal *tú*. Six quiz keys checked; no incorrect key found. | No lesson edit needed. Mapping: module 21 strongly covered; module 10 partly supported through arrangements and proposing another day. |
| A2-07 — Health, appointments and medical visits | Appointment, symptom, clinic and pharmacy phrases are accurate. *Me duele* vs *me duelen*, *desde ayer* and *desde hace dos días* examples are sound. The lesson clearly frames phrases as communication support, not diagnosis or medicine recommendations. Six quiz keys checked; no incorrect key found. | No lesson edit needed. Strong module 13 candidate. |
| A2-08 — Review and A2 checkpoint | Reviews seven topics from the first seven A2 lessons, has a matching seven-item can-do checklist and 12-question checkpoint with 9/12 threshold. The footer correctly identifies it as an internal starter milestone, not a full A2 qualification. | No lesson edit needed. Corrected curriculum mapping: this is an interim checkpoint, not approved end-of-level module 25. It does not cover directions or present perfect because those are introduced in later lessons. |
| A2-09 — Directions and places in town | Place vocabulary, polite openings, informal *tú* commands and polite *usted* commands are correctly distinguished. The public-transport question and distance expressions are appropriate. Eight quiz keys checked; no incorrect key found. | No lesson edit needed. Strong module 12 candidate. |
| A2-10 — Present perfect and experiences | *Haber* forms, regular participles and common irregulars (*visto, hecho, dicho, escrito, puesto, abierto*) are correct. Time-expression examples are useful for Spain-focused learning. Eight quiz keys checked; no incorrect key found. | Added a nuance note: use varies by region and speaker; avoid treating Spain and all of Latin America as two uniform blocks. In the Madrid dialogue, changed the response to *Sí, he estado dos veces* to directly answer *¿Has estado alguna vez en Madrid?* |

### Progress and verification

- A2-06 and A2-07: six questions each; 4/6 completion threshold.
- A2-08: twelve questions; 9/12 checkpoint threshold.
- A2-09 and A2-10: eight questions each; 6/8 completion threshold.
- All five retain their original page URLs, lesson completion IDs and `ss-a2-done` progress key. No quiz threshold or answer key was changed.
- Re-fetched all five pages after the change. Confirmed the A2-10 regional-usage note and dialogue correction; confirmed quiz structures and progress references remain present.
- Source-level review only. No browser interaction, mobile/Android, RTL, keyboard/screen-reader or reload-persistence testing was performed for this batch.


### 16.1 Limited public-site smoke test (24 November 2026)

A live browser test opened the public A2 index and confirmed all 20 lesson links, including Lessons 06–10.

- **A2-06:** page heading and six-question quiz rendered; all six correct choices were selected; submit action displayed 6/6 and the completion message.
- **A2-07:** page heading and six-question quiz rendered; all six correct choices were selected and submit was attempted. The browser agent did not observe the score/completion message. Source inspection confirms the expected `quizResult` element and submit handler are present and structurally parallel to A2-06. Treat this as an unresolved runtime observation, not a confirmed code defect.
- **A2-08, A2-09, A2-10:** not interaction-tested in this browser run due to execution budget. Their source files, quiz handlers and progress references were inspected and re-fetched after the A2-10 edit.
- Audio output and state persistence after reload were not tested.

This is partial smoke testing, not complete runtime QA. Investigate A2-07's result display during the dedicated browser QA pass.


## 17. A2 Lessons 11–15 — detailed source review and same-pass optimization (24 November 2026)

Reviewed lesson explanations, Spanish examples and translations, Castilian pronunciation aids, register, all quiz questions and keyed answers, completion thresholds, progress IDs and local-storage logic.

| Lesson | Findings | Same-pass action / mapping |
|---|---|---|
| A2-11 — Comparisons | más/menos + adjective/adverb/noun + que, tan + adjective/adverb + como, tanto/a/os/as + noun + como, and irregular comparatives mejor/peor/mayor/menor are introduced accurately. Eight quiz keys checked; no incorrect key found. | Clarified that mayor/menor are especially common for age and relative rank/amount; for ordinary physical size use más grande/más pequeño. Strong module 19 candidate. |
| A2-12 — Advice and obligation | deber + infinitive, tener que + infinitive and impersonal hay que + infinitive are correctly differentiated. The important contrast between no tienes que (not necessary) and no debes (should not) is sound. Eight quiz keys checked; no incorrect key found. | No content edit required. Strong module 14 coverage for advice/obligation; permission is not included and remains a gap. |
| A2-13 — Describing people and places | Personality/appearance adjectives, ser for characteristics, estar for states/location, tener for features, llevar for clothing/accessories, hay for existence and cerca de are accurate. Eight quiz keys checked; no incorrect key found. | Corrected a vocabulary translation: antiguo/a means old/ancient/former depending on context, not simply historic; added histórico/a for historic. Candidate for modules 01 and 18; more connected detail is still needed for full module 18. |
| A2-14 — Preferences and giving reasons | gustar/gustan, preferir, porque, por eso, también, sin embargo, estar de acuerdo and me apetece examples are natural and accurate. Eight quiz keys checked; no incorrect key found. | No content edit required. Strong module 04/23 coverage; module 19 is only partial because comparisons are not practised here. |
| A2-15 — Making plans and arrangements | ir a + infinitive, quedar, time phrases, changing meeting times and polite responses are accurate and practical. Eight quiz keys checked; no incorrect key found. | No content edit required. Strong module 09/10 coverage; its concrete scheduling focus keeps it distinct from the general preference/invitation content in A2-05/06. |

### Progress and verification

- A2-11 to A2-15 each contain an eight-question quiz with a 6/8 completion threshold.
- All retain their original URLs, lesson IDs, ss-a2-done progress key and existing completion behaviour.
- Re-fetched the two changed lesson files and verified the new wording. No quiz keys, thresholds, lesson IDs or progress storage were changed.
- Source-level review only. No live browser interaction, mobile/Android, Urdu RTL, keyboard/screen-reader or reload-persistence testing was performed for this batch.


### 17.1 Limited public-site smoke test (24 November 2026)

A live browser smoke test opened the public A2 index and confirmed Lessons 11–15 are available. Lessons 11, 12 and 13 each rendered their heading and eight-question quiz; all correct choices were selected and submitted, and each displayed an 8/8 score with its lesson-completed message. The deployed A2-11 mayor/menor usage note and A2-13 antiguo/a vs histórico/a distinction were also visible. Lessons 14 and 15 were not interaction-tested because the browser run exhausted its execution budget; their presence in the A2 index was confirmed. TTS output, saved progress after reload, mobile/Android, RTL, accessibility and offline behaviour were not tested. This is a limited smoke test, not exhaustive runtime QA.


## 18. A2 Lessons 16–20 — detailed source review and same-pass optimization (24 November 2026)

Reviewed the five lesson pages in detail: explanations, Spanish examples and English meanings, practical dialogues, Spain-focused usage, quiz questions and answer keys, thresholds, completion handlers, lesson IDs and the `ss-a2-done` progress key.

| Lesson | Findings | Same-pass action / mapping |
|---|---|---|
| A2-16 — Travel experiences and problems | Travel/accommodation vocabulary, present-perfect experience statements, lost-ticket/delayed-train problems, polite requests and booking dialogue are accurate and practical. Eight quiz keys checked; no incorrect key found. | No lesson edit needed. Partial candidates for module 11 and module 22; transport disruption and booking issues are useful, but detailed directions and follow-up questioning remain limited. |
| A2-17 — Technology and communication | Device/digital-action vocabulary is appropriate. Direct object pronouns agree with *archivo/fotos*; *te lo envío* has correct indirect + direct pronoun order; the dialogue is natural. Eight quiz keys checked; no incorrect key found. | No lesson edit needed. Strong module 17 candidate. |
| A2-18 — Everyday problems and solutions | Problem descriptions, polite requests, advice, suggestions and practical commands are sound. The rented-flat dialogue intentionally uses formal *usted* forms (*espere, su ayuda*) alongside informal command examples elsewhere in the lesson. Eight quiz keys checked; no incorrect key found. | Added a concise register note distinguishing informal *tú* commands from formal *usted* forms. Strong module 15 candidate; partial support for module 14, but permission and public-office/service scenarios remain missing. |
| A2-19 — Grammar and communication review | Past event vs past habit, present perfect, plans, obligations, comparisons, reasons and polite communication examples are accurate. Eight quiz keys checked; no incorrect key found. | Qualified the quiz explanation for *Hoy he trabajado mucho*: this is common in much of Spain for an unfinished time period, but usage varies by speaker and region. Review candidate for modules 05–07, 14, 19 and 23; it does not teach module 20 sequencing systematically or constitute module 25 gap repair. |
| A2-20 — Final practice and checkpoint | Invitation reading, gist questions, replies, speaking/writing prompts and can-do statements provide useful integrated practice. Eight quiz keys checked; no incorrect key found. | Replaced English checklist statements incorrectly marked as Spanish/TTS input with accurate Spanish can-do statements and English meanings. This is a useful module 24 practice candidate, but not a complete module 26 trip project, module 27 four-skill assessment or module 28 readiness plan. |

### Progress and verification

- Each lesson contains eight quiz questions and a 6/8 completion threshold. All 40 keyed answers were reviewed; no incorrect keyed answer was identified.
- All five retain their existing page URLs, lesson completion IDs, quiz thresholds and `ss-a2-done` progress key. No quiz answer key or progress schema was changed.
- Re-fetched all three changed pages and verified the A2-18 register note, A2-19 qualified present-perfect explanation and all five Spanish A2-20 can-do statements/data-say phrases.
- Source-level review only; public browser interaction for this batch is pending. TTS output, reload persistence, mobile/Android, Urdu RTL, keyboard/screen-reader accessibility and offline behaviour are not verified.

### Mapping conclusion after A2-01–20 source review

Historical baseline before the new A2-21–23 lessons and targeted revisions; it is superseded by the complete 24-outcome matrix above and the implementation record in sections 18.2–19. A2-08 and A2-19 remain interim/revision pages, not approved module 25; A2-20 remains core module 24 practice, distinct from module 27.


### 18.1 Limited live public-site smoke test (24 November 2026)

- A2 index loaded and exposed all lesson links.
- A2-16–20 each loaded with the expected heading, exactly eight rendered questions and an enabled quiz submit control.
- A2-18 register note, A2-19 regional-usage wording, and all five Spanish A2-20 *Puedo…* checklist statements were visible on the deployed site.
- The first broad browser pass did not capture a result message after its Lesson 16 submission; this was treated as inconclusive rather than a confirmed defect.
- A dedicated follow-up test then selected all eight exact correct options on A2-16, observed the counter reach 8/8, and submitted. The deployed page displayed **“Your score: 8 / 8. Lesson completed!”**, **“Progress saved on this device. All lessons remain open.”**, and revealed the completion panel. This confirms the Lesson 16 quiz result/completion flow works.
- A2-17, A2-18, A2-19 and A2-20 quiz submission/score/completion interactions were not tested in this run. Their page load, eight-question rendering and submit controls were confirmed.
- TTS audio, saved progress after reload, mobile/Android, Urdu RTL, keyboard/screen-reader accessibility and offline behaviour remain untested. This is limited smoke testing, not exhaustive runtime QA.


### 18.2 New A2 Lessons 21–23 — deployment and live smoke test (24 November 2026)

- The first immediate browser check ran before GitHub Pages had propagated the new commits and saw the old 01–20 index/404 routes. A later independent live check confirmed deployment had completed: the A2 index displayed 23 lesson cards and all three new lesson URLs loaded.
- Lesson 21: heading and eight quiz questions rendered; all eight exact correct options were selected and submitted. Public page displayed 8/8 and “Lesson completed!” with its completion panel. This confirms the new lesson's quiz/result/completion path.
- Lesson 22: heading, eight quiz questions and submit control confirmed. A targeted live submission selected all eight correct answers and displayed 8/8, the "Lesson completed!" message, the completion panel and the progress-saving message.
- Lesson 23: heading, eight quiz questions and submit control confirmed. A targeted live submission selected all eight correct answers and displayed 8/8, the "Lesson completed!" message, the completion panel and the progress-saving message.
- Source verification after deployment confirmed each new page has eight three-option questions, valid answer indices, a unique lesson completion ID (lesson-21/22/23) and the existing `ss-a2-done` storage key. Index links for all three pages are present.
- The earlier A2-16 result display observation was resolved by a targeted 8/8 test: result text, progress-saving message and completion panel all appeared. See section 18.1.
- This is a limited live smoke test. Reload persistence, TTS audio, Android/mobile layout, Urdu RTL, keyboard/screen-reader accessibility and offline/PWA behaviour remain untested.

- Final result for A2-21/22/23: all three live quiz/completion paths passed 8/8; all three new routes and index cards are deployed. This does not replace broader device, TTS, persistence or accessibility QA.


## 19. A2 end-of-level modules 25–28 — implementation and live QA (24 November 2026)

Four separate A2 closing pages were created, added to the A2 index and added to the service-worker precache list. They use the independent `ss-a2-end-done` key; core lesson completion remains under `ss-a2-done`. Existing A2-08, A2-19 and A2-20 were not overwritten.

| Module | Page | Purpose and implementation | Live verification |
|---:|---|---|---|
| 25 | `a2/a2-review.html` | 16-question cumulative review with 12/16 internal revision target, explanations and targeted links to core lessons | Live quiz passed 16/16; “Review target reached — well done!” displayed |
| 26 | `a2/a2-project.html` | Five-task short-trip project: transport, accommodation, itinerary, food/local services and problem-solving; drafts and checks saved locally | All five textareas filled, all five checkboxes ticked; completion button displayed “Project marked complete on this device. Shabash!” |
| 27 | `a2/a2-assessment.html` | Integrated listening, reading, speaking and writing tasks. Listening uses browser TTS; productive tasks are self-reviewed, not automatically scored | Listening 5/5, reading 5/5; writing sample entered; all five self-checks ticked; save displayed “Assessment activity saved on this device. Review your notes before moving to the readiness plan.” |
| 28 | `a2/a2-readiness.html` | Ten can-do statements, personal gap plan and three B1 next-step choices | All ten boxes checked, gap plan entered, B1 option selected; save displayed “Your readiness plan is saved on this device. You can update it any time.” |

### Deployment and QA limits

- A later live-site check confirmed all four end-of-level cards appear in a separate A2 index section and all four exact routes load with expected headings and controls.
- Module 25 quiz, module 26 project completion, module 27 listening/reading and save flow, and module 28 readiness save flow were exercised in the browser.
- These checks were performed in the browser test session. Local progress is device/browser-specific; they do not alter another learner's device.
- Service worker cache was bumped to `spanish-seekho-v69`; all four new A2 closing pages were added to precache. Actual offline behaviour, cache refresh on a real Android device, TTS audio quality, mobile/RTL layout, keyboard/screen-reader accessibility and reload persistence still require dedicated device QA.
- No official CEFR test, certificate, automated speaking score or automated writing grade is claimed.


## 20. B1 Lessons 01–06 — opening batch and verification (24 November 2026)

### B1-01 verification

- Existing lesson focuses on indefinido vs imperfecto in narrative context, background, interruption, sequence connectors and a Málaga story.
- Eight answer keys and 6/8 threshold were checked at source level. Live browser test selected all eight correct answers and displayed **“Your score: 8 / 8. Lesson completed — well done!”**, the B1 Lesson 01 completion panel and **“Progress saved on this device; all lessons remain open.”**
- Mapping: strong evidence for approved B1 module 01.

### B1-02–06 batch

| Lesson | Title | Main progression |
|---:|---|---|
| 02 | Building coherent stories | Sequence, contrast, cause/result connectors and background detail; extends B1-01 rather than repeating its tense introduction |
| 03 | Experiences and achievements | Present perfect vs indefinido, open vs finished time periods, irregular participles and experience interviews |
| 04 | Life changes and milestones | Past/present comparisons, *soler + infinitive*, milestones and continuing effects |
| 05 | Expressing opinions with reasons | Viewpoint phrases, reasons, examples and balanced arguments |
| 06 | Agreeing and disagreeing diplomatically | Full/partial agreement, respectful disagreement, clarification and compromise |

### Source and live verification

- All five new pages are linked from the B1 index; progress now tracks 0–6 under the existing `ss-b1-done` key. B1-01 now links forward to B1-02.
- Each new lesson has eight quiz questions, three answer options per question, valid answer indices, a 6/8 pass threshold, unique lesson completion ID and the existing `ss-b1-done` key. All 40 new answer keys were source-checked.
- Service-worker cache bumped to `spanish-seekho-v70`; B1-02–06 added to precache.
- Live browser verification confirmed the B1 index displays six lessons and B1-02–06 each load with their expected heading, eight questions and submit button. B1-02 passed a targeted 8/8 quiz and displayed its completion panel and progress-saving message.
- The initial combined browser run only selected three B1-02 answers before its execution budget ended; a dedicated follow-up completed all eight and passed. B1-03–06 quiz submissions have not yet been interaction-tested.
- Broader TTS, reload persistence, mobile/Android, Urdu RTL, keyboard/screen-reader accessibility and offline behaviour remain untested. B1 is an expanding pathway, not a complete CEFR B1 course.


## 21. B1 Lessons 07–11 — implementation and live QA (24 November 2026)

| Lesson | Topic | Source review |
|---:|---|---|
| 07 | Supporting an argument and considering another viewpoint | Clear position → reason → example → conclusion structure; acknowledges counterpoints |
| 08 | Clarifying and reformulating | Clarification questions, checking understanding, paraphrasing and conversation fillers |
| 09 | Future predictions and promises | Regular future endings, irregular stems, predictions, present assumptions and promises |
| 10 | Hypothetical situations and polite requests | Conditional forms, polite requests, hypothetical si + imperfect subjunctive + conditional pattern |
| 11 | Plans, intentions and possible outcomes | Ir a + infinitive, tener pensado, estar pensando en, future predictions and alternative outcomes |

### Source verification

- All five pages have eight three-option quiz questions, valid answer indices, a 6/8 threshold, unique completion IDs and the existing `ss-b1-done` storage key. All 40 answer keys were checked.
- B1-09 example was adjusted to keep the focus on future simple rather than introduce an unexplained future-time subjunctive clause.
- B1 index source now links lessons 01–11 and tracks progress out of 11. B1-06 links forward to B1-07.
- Service-worker cache bumped to `spanish-seekho-v71`; B1-07–11 added to precache.

### Live verification

- The initial browser pass used the previously cached B1 index and displayed only lessons 01–06, although direct routes 07–11 loaded.
- A cache-busting public-site check using `?refresh=71` confirmed the deployed index shows all 11 lesson cards and the live `sw.js` reports `spanish-seekho-v71`. The earlier six-card result was stale cached content.
- Lessons 07–11 each loaded with the expected heading, eight quiz questions and submit control.
- B1-07 passed all eight correct answers: 8/8, “Lesson completed — well done!”, completion panel visible and progress saved.
- B1-08–11 quiz submission/result interactions remain untested. B1-03–06 quiz submission interactions also remain pending.
- TTS, reload persistence, Android/mobile, Urdu RTL, accessibility and actual offline behaviour remain untested.


## 22. B1 Lessons 12–16 — source implementation (24 November 2026)

| Lesson | Topic | Main outcome |
|---:|---|---|
| 12 | Making decisions and weighing options | Compare alternatives, advantages/drawbacks and justify a decision |
| 13 | Work experience and responsibilities | Describe duties, teamwork, deadlines and workplace communication |
| 14 | Education, skills and learning goals | Explain training, strengths, progress and learning goals |
| 15 | Applications and professional self-presentation | Prepare a truthful application and answer common interview questions |
| 16 | Social issues and everyday change | Discuss trends, possible causes/effects and balanced viewpoints |

### Source verification

- All five lesson pages were created and re-fetched. Each contains eight three-option quiz questions, valid answer indices, a 6/8 threshold, unique completion ID and the existing `ss-b1-done` progress key. All 40 answer keys were source-checked.
- B1 index source contains lesson cards 01–16 and a progress counter out of 16. B1-11 links forward to B1-12.
- Service-worker cache is v72 and includes B1-12–16 in its precache list.
- A live browser check was run before the GitHub Pages build for the latest commit had completed: the public index still showed 11 cards and the new lesson-12 URL returned 404. GitHub Actions showed the Pages deployment for the v72 commit pending. Do not claim B1-12–16 are live until the deployment completes and a fresh cache-busting check confirms the routes.
- No live quiz interaction has yet been run for B1-12–16. B1-07 passed 8/8; B1-08–11 page/quiz controls are live but their quiz submissions remain untested.
