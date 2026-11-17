# Spanish Seekho Handoff
_Updated: 17 November 2026_

## Current repository state
- Homepage with A1 starter-course CTA, Spain Life grid and practice CTA
- A1 starter pathway: lessons 01–08
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: transport, healthcare, airport, housing, public offices and shopping
- A2 pathway in progress: Lessons 01 (regular pretérito indefinido) and 02 (imperfecto for past habits) are available; remaining units are planned only
- Service-worker cache: `spanish-seekho-v22`

## Language coverage (important)
- Homepage language selector provides Roman Urdu, Urdu and English copy.
- Lesson pages are primarily Roman Urdu/English supported, with some Urdu-script pronunciation approximations.
- On lesson pages, selecting Urdu currently changes text direction and saves the preference; it does not translate all lesson content.
- Urdu-script and Roman Urdu pronunciations are approximations, not precise phonetic transcription.

## QA status
### Static checks completed in this pass
- Retrieved and inspected the 8 A1 lesson pages, practice page, 6 Spain Life pages, homepage, A1 course page, A2 outline, shared app shell, styles and service worker.
- Inline JavaScript syntax parsed successfully in the inspected HTML pages.
- No duplicate HTML IDs were found in the inspected pages.
- Confirmed the service worker currently declares cache version `spanish-seekho-v20` and includes the A1 lessons, practice page, six Spain Life modules, shared CSS/JS and A2 outline.

### A2 progress
- Added `a2/lesson-01.html`: past-time expressions, regular -ar/-er/-ir pretérito indefinido forms, example sentences, dialogue and a six-question quiz.
- Added `a2/lesson-02.html`: imperfecto endings for regular -ar/-er/-ir verbs, common irregular ser/ir/ver forms, past habits/descriptions, a beginner-level imperfecto vs pretérito contrast, dialogue and a six-question quiz.
- Updated the A2 course page to mark Lessons 01 and 02 as available; all other units remain planned.
- Added both A2 lessons to the service-worker precache; current cache version is v22.
- A2 lesson progress uses a separate `ss-a2-done` localStorage key; existing A1 progress keys are untouched.

### Content review progress
- Lesson 02: refined the explanations for Spanish e/o vowels, qualified the ll pronunciation as a common pattern rather than universal, clarified regional variation in c/z, and refined the jota sound guide.
- Lesson 07: clarified that ser/estar cannot be reduced to a strict permanent-versus-temporary rule; location, identity and context are better beginner anchors. The tiredness example now provides speech for both masculine and feminine forms.

### Still required
- Detailed human review of Spanish grammar, vocabulary, Castilian usage and every pronunciation guide. A first content wording correction was made in Lesson 08: passing the 8-lesson starter checkpoint is no longer described as completing the full A1 path.
- Verify all internal links and service-worker precache URLs against the complete repository tree.
- Test quizzes and all four practice modes in a real browser.
- Test 360px, 390px and 412px Android layouts; inspect Urdu RTL alignment.
- Verify PWA installation and offline behaviour on a real Android browser.
- Confirm the latest GitHub Pages deployment and live rendering; repository commits alone do not prove deployment success.

## Architecture and preservation rules
- Free static HTML/CSS/vanilla JavaScript; no mandatory account or paid API.
- Mobile-first; preserve learner progress and existing localStorage keys: `ss-language`, `ss-completed`, `ss-a1-done`.
- Keep Spanish content LTR within Urdu RTL layouts where appropriate.
- Browser speech depends on installed device voices and must remain supplementary.
- Do not describe the eight starter lessons as a complete CEFR A1 syllabus.

## Next recommended work
1. Continue building A2 lessons gradually, reviewing Spanish content as each lesson is added; next planned topic is practical work/study communication.
2. Continue the remaining A1 content review and repository link/precache audit.
3. Run Android/browser functional, responsive, RTL, PWA and offline tests when the project owner is ready.
