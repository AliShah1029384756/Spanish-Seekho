# Spanish Seekho Handoff
_Updated: 18 November 2026_

## Current repository state
- Homepage with A1 starter-course CTA, Spain Life grid and practice CTA
- A1 starter pathway: lessons 01–17
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: transport, healthcare, airport, housing, public offices and shopping
- A2 pathway in progress: Lessons 01–10 available (Lesson 10 = present perfect)
- Service-worker cache: `spanish-seekho-v49`

## Language coverage (important)
- Homepage language selector provides Roman Urdu, Urdu and English copy.
- Lesson pages are primarily Roman Urdu/English supported, with some Urdu-script pronunciation approximations.
- On lesson pages, selecting Urdu currently changes text direction and saves the preference; it does not translate all lesson content.
- Urdu-script and Roman Urdu pronunciations are approximations, not precise phonetic transcription.

## QA status
### Static checks completed in this pass
- A2 Lesson 10 added: haber forms, regular and common irregular past participles, time expressions typical of Spain usage, dialogue and eight-question quiz. Progress uses `ss-a2-done` and records `lesson-10`.
- Service worker updated to v49 and precaches `./a2/lesson-10.html`.
- A2 index updated to list ten lessons.
- No real browser, Android, RTL or PWA testing has been performed in this pass.

### A2 progress
- Lesson 01: past-time expressions, regular -ar/-er/-ir pretérito indefinido forms, examples, dialogue and six-question quiz.
- Lesson 02: imperfecto endings for regular -ar/-er/-ir verbs, common irregular ser/ir/ver forms, past habits/descriptions, a beginner-level imperfecto vs pretérito contrast, dialogue and six-question quiz.
- Lesson 03: work and study vocabulary, describing jobs and education, tener que / hay que / deber for obligations and advice, workplace questions, sample job interview and six-question quiz.
- Lesson 04: accommodation vocabulary, making reservations, asking about prices and breakfast, check-in/check-out, polite requests, reporting simple hotel problems, reception dialogue and six-question quiz.
- Lesson 05: opinion phrases (creo que, me parece que), agreement/disagreement, gustar for singular/plural nouns and infinitives, ir a + infinitive, arranging a meeting, weekend-plans dialogue and six-question quiz.
- Lesson 06: invitations with ¿Quieres…?, ¿Te apetece…? and ¿Te gustaría…?; accepting and declining politely; suggesting activities; using quedar for meeting arrangements; social vocabulary; café-plans dialogue and six-question quiz.
- Lesson 07: appointment requests, basic symptom descriptions, doctor communication, pharmacy questions, a clinic dialogue and six-question quiz. Includes a clear medical-information disclaimer.
- Lesson 08: internal review checkpoint across earlier A2 units.
- Lesson 09: directions and places in town.
- Lesson 10: present perfect (haber + past participle), common irregular participles (visto, hecho, dicho, escrito, puesto, abierto), time expressions (hoy, esta semana, alguna vez, ya, todavía no), dialogue and eight-question quiz.

### Still required
- Detailed human review of Spanish grammar, vocabulary, Castilian usage and every pronunciation guide.
- Verify all internal links and service-worker precache URLs against the complete repository tree.
- Test quizzes and all four practice modes in a real browser.
- Test 360px, 390px and 412px Android layouts; inspect Urdu RTL alignment.
- Verify PWA installation and offline behaviour on a real Android browser.
- Confirm the latest GitHub Pages deployment and live rendering; repository commits alone do not prove deployment success.

## Architecture and preservation rules
- Free static HTML/CSS/vanilla JavaScript; no mandatory account or paid API.
- Mobile-first; preserve learner progress and existing localStorage keys: `ss-language`, `ss-completed`, `ss-a1-done`, `ss-a2-done`.
- Keep Spanish content LTR within Urdu RTL layouts where appropriate.
- Browser speech depends on installed device voices and must remain supplementary.
- Do not describe the starter lessons as a complete CEFR syllabus.

## Next recommended work
1. Continue building A2 gradually (comparisons, clothes, weather, advice structures, more present-perfect practice).
2. Continue the remaining A1 content review and repository link/precache audit.
3. Run Android/browser functional, responsive, RTL, PWA and offline tests when the project owner is ready.