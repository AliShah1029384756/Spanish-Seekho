# Spanish Seekho Handoff
_Updated: 17 November 2026_

## Current repository state
- Homepage with A1 starter-course CTA, Spain Life grid and practice CTA
- A1 starter pathway: lessons 01–08
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: transport, healthcare, airport, housing, public offices and shopping
- A2 starter pathway in progress: Lessons 01–08 cover past events, past habits, work/studies, travel/accommodation, opinions/future plans, social invitations and healthcare; Lesson 08 is a mixed review checkpoint with a can-do checklist
- A2 Lessons 01–08 are available; this is not a claim of complete CEFR A2 syllabus coverage or official certification
- Service-worker cache: `spanish-seekho-v36`

## Language coverage (important)
- Homepage language selector provides Roman Urdu, Urdu and English copy.
- Lesson pages are primarily Roman Urdu/English supported, with some Urdu-script pronunciation approximations.
- On lesson pages, selecting Urdu currently changes text direction and saves the preference; it does not translate all lesson content.
- Urdu-script and Roman Urdu pronunciations are approximations, not precise phonetic transcription.

## QA status
### Static checks completed for Lesson 08
- Checkpoint contains 12 mixed multiple-choice questions spanning the seven preceding A2 lessons.
- Pass threshold is 9/12 (75%); feedback explanations are shown after submission.
- Successful completion records `lesson-08` in the separate `ss-a2-done` localStorage key; the A1 progress keys remain untouched.
- A2 index links to Lessons 01–08 and labels the pathway as in progress.
- Service worker now declares v35 and includes the published A2 lesson pages in its precache list.
- Static syntax and duplicate-ID checks are limited to source inspection; no browser, Android, RTL or PWA testing was performed.

### A2 progress
- Lesson 01: past-time expressions, regular -ar/-er/-ir pretérito indefinido forms, examples, dialogue and six-question quiz. A targeted content refinement also previews common irregular hacer, ir/ser and tener forms, explicitly flags hiciste as irregular, and explains Spain vosotros forms.
- Lesson 02: imperfecto endings for regular -ar/-er/-ir verbs, common irregular ser/ir/ver forms, past habits/descriptions, a beginner-level imperfecto vs pretérito contrast, dialogue and six-question quiz.
- Lesson 03: work and study vocabulary, describing jobs and education, tener que / hay que / deber for obligations and advice, workplace questions, sample job interview and six-question quiz.
- Lesson 04: accommodation vocabulary, making reservations, asking about prices and breakfast, check-in/check-out, polite requests, reporting simple hotel problems, reception dialogue and six-question quiz.
- Lesson 05: opinion phrases (creo que, me parece que), agreement/disagreement, gustar for singular/plural nouns and infinitives, ir a + infinitive, arranging a meeting, weekend-plans dialogue and six-question quiz.
- Lesson 06: invitations with ¿Quieres…?, ¿Te apetece…? and ¿Te gustaría…?; accepting and declining politely; suggesting activities; using quedar for meeting arrangements; social vocabulary; café-plans dialogue and six-question quiz.
- Lesson 07: appointment requests, basic symptom descriptions, doctor communication, pharmacy questions, a clinic dialogue and six-question quiz. Includes a clear medical-information disclaimer.
- Lesson 08: revision examples from Lessons 01–07, seven-item can-do checklist and 12-question mixed checkpoint. A score of 9/12 (75%) records completion locally.
- A2 progress is stored in the separate `ss-a2-done` localStorage key; existing A1 progress keys are untouched.

### Content review progress
- A2 Lesson 05: added the full gustar pronoun pattern (me/te/le/nos/os/les), clarified singular/plural agreement, added natural preference responses (a mí también/tampoco), and clarified Castilian pronunciation approximations.
- A2 Lesson 06: reviewed invitations, polite acceptance/declining, making suggestions and social arrangements; clarified infinitive patterns and added a formal usted alternative alongside informal tú examples.
- A2 Lesson 07: refined appointment language so asking whether a patient has an appointment is distinct from asking about available slots; clarified the medicine side-effects question.
- A2 Lesson 04: refined the check-out question, added a Wi-Fi question, included an adjective-agreement reminder and clarified Castilian pronunciation approximations.
- A2 Lesson 04: made the checkout question more precise, refined the room-change request, and added a concise guide to polite conditional forms including Spain vosotros usage.
- A2 Lesson 01: clarified the irregular hacer form in the dialogue, added common hacer / ir-ser / tener preterite forms as a preview, and explained the Spain vosotros forms.
- A2 Lesson 03: clarified profession article use, added full tener/deber present conjugations and vosotros/ustedes forms, and refined regional pronunciation guidance.
- A2 Lesson 02: added complete regular and irregular imperfect conjugation patterns, explained vosotros forms, and refined the j sound approximation.
- A1 Lesson 02: refined explanations for Spanish e/o vowels, qualified ll pronunciation as a common pattern rather than universal, clarified regional variation in c/z, and refined the jota sound guide.
- A1 Lesson 07: clarified that ser/estar cannot be reduced to a strict permanent-versus-temporary rule; location, identity and context are better beginner anchors. The tiredness example provides speech for both masculine and feminine forms.
- A2 Lessons 03–06 introduce common Spain-relevant work, accommodation, opinion, preference, future-plan and social invitation patterns.
- A2 Lesson 07 introduces basic health appointment and pharmacy communication; it is not medical advice.
- Roman Urdu/Urdu-script pronunciation guides are approximations and need human review.

### Still required
- Detailed human review of Spanish grammar, vocabulary, Castilian usage and every pronunciation guide.
- Verify all internal links and service-worker precache URLs against the complete repository tree.
- Test quizzes and all four practice modes in a real browser.
- Test 360px, 390px and 412px Android layouts; inspect Urdu RTL alignment.
- Verify PWA installation and offline behaviour on a real Android browser.
- Confirm the latest GitHub Pages deployment and live rendering; repository commits alone do not prove deployment success.

## Open access and caching
- All currently published A1 and A2 lessons are directly accessible; there is no prerequisite sequence or lesson-lock gate.
- Quiz scores and completion markers are for progress tracking only and do not control access to later lessons.
- Service-worker cache is only an offline convenience. Browsers may clear or evict cached files; online access should work from GitHub Pages without a pre-existing cache.

## Architecture and preservation rules
- Free static HTML/CSS/vanilla JavaScript; no mandatory account or paid API.
- Mobile-first; preserve learner progress and existing localStorage keys: `ss-language`, `ss-completed`, `ss-a1-done`, `ss-a2-done`.
- Keep Spanish content LTR within Urdu RTL layouts where appropriate.
- Browser speech depends on installed device voices and must remain supplementary.
- Do not describe the eight A1 starter lessons as a complete CEFR A1 syllabus.
- Do not describe the eight A2 starter lessons or their checkpoint as a complete CEFR A2 syllabus, official exam or certification.

## Next recommended work
1. Continue Spanish content and pronunciation review, then audit internal links and service-worker precache paths.
2. Expand A2 beyond the starter pathway while keeping course completion claims accurate.
3. Run Android/browser functional, responsive, RTL, PWA and offline tests when the project owner is ready.
