# Spanish Seekho Handoff
_Updated: 17 November 2026_

## Current repository state
- Homepage with A1 starter-course CTA, Spain Life grid and practice CTA
- A1 starter pathway: lessons 01–08
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: transport, healthcare, airport, housing, public offices and shopping
- A2 pathway in progress: Lessons 01 (regular pretérito indefinido), 02 (imperfecto for past habits) and 03 (work, studies and obligations) are available; remaining units are planned only
- Service-worker cache: `spanish-seekho-v23`

## Language coverage (important)
- Homepage language selector provides Roman Urdu, Urdu and English copy.
- Lesson pages are primarily Roman Urdu/English supported, with some Urdu-script pronunciation approximations.
- On lesson pages, selecting Urdu currently changes text direction and saves the preference; it does not translate all lesson content.
- Urdu-script and Roman Urdu pronunciations are approximations, not precise phonetic transcription.

## QA status
### Static checks completed in this pass
- Earlier static review covered the 8 A1 lesson pages, practice page, 6 Spain Life pages, homepage, A1 course page, A2 outline, shared app shell, styles and service worker.
- Earlier inspected inline JavaScript syntax parsed successfully and no duplicate HTML IDs were found in those inspected pages.
- Latest static review for A2 Lesson 03: quiz has six questions, uses the separate `ss-a2-done` key and records completion as `lesson-03`; A2 index links to the new lesson; service worker declares v23 and precaches the lesson.
- No real browser, Android, RTL or PWA testing has been performed in this pass.

### A2 progress
- Lesson 01: past-time expressions, regular -ar/-er/-ir pretérito indefinido forms, examples, dialogue and six-question quiz.
- Lesson 02: imperfecto endings for regular -ar/-er/-ir verbs, common irregular ser/ir/ver forms, past habits/descriptions, a beginner-level imperfecto vs pretérito contrast, dialogue and six-question quiz.
- Lesson 03: work and study vocabulary, describing jobs and education, tener que / hay que / deber for obligations and advice, workplace questions, sample job interview and six-question quiz.
- A2 index marks Lessons 01–03 available; all other units remain planned.
- Service worker precaches all three A2 lessons; current cache version is v23.
- A2 lesson progress uses the separate `ss-a2-done` localStorage key; existing A1 progress keys are untouched.

### Content review progress
- Lesson 02: refined explanations for Spanish e/o vowels, qualified ll pronunciation as a common pattern rather than universal, clarified regional variation in c/z, and refined the jota sound guide.
- Lesson 07: clarified that ser/estar cannot be reduced to a strict permanent-versus-temporary rule; location, identity and context are better beginner anchors. The tiredness example provides speech for both masculine and feminine forms.
- Lesson 03: introduces common Spain-relevant work/study expressions and obligation structures. Pronunciation guides remain approximate and should receive human review.

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
- Do not describe the eight starter lessons as a complete CEFR A1 syllabus.

## Next recommended work
1. Continue building A2 lessons gradually, reviewing Spanish content as each lesson is added; next planned topic is travel beyond the city, including accommodation, reservations and handling simple problems.
2. Continue the remaining A1 content review and repository link/precache audit.
3. Run Android/browser functional, responsive, RTL, PWA and offline tests when the project owner is ready.
