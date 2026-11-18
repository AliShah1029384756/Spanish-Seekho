# Spanish Seekho Handoff
_Updated: 17 November 2026_

## Current repository state
- Homepage with A1 starter-course CTA, Spain Life grid and practice CTA
- A1 expanding starter pathway: Lessons 01–17 are available; not yet the complete CEFR A1 syllabus
- A1 Lesson 09: personal information, question words, regular present forms of vivir and hablar, formal/informal questions, dialogue and quiz
- A1 Lesson 10: noun gender, definite/indefinite articles, plural formation, common patterns and exceptions, sentence examples and quiz
- A1 Lesson 11: adjective agreement, descriptive vocabulary, gender/number matching, ser + adjective, dialogue and quiz
- A1 Lesson 12: regular present-tense conjugation of -ar, -er and -ir verbs; six subject groups including vosotros for Spain; subject-pronoun omission; everyday examples, dialogue, independent practice and an eight-question quiz
- A1 Lesson 13: present-tense forms and everyday uses of ser, estar, tener, ir and hacer; beginner-level ser/estar contrast; age and common tener expressions; ir a + destination; Spain vosotros forms; dialogue, practice and eight-question quiz
- A1 Lesson 14: basic sentence order, negation with no, nunca and tampoco, yes/no questions, time phrases, sentence building, practical dialogue and eight-question quiz
- A1 Lesson 15: weekdays, months, calendar dates, Spain date format, recurring weekday expressions, appointment scheduling and eight-question quiz
- A1 Lesson 16: common town places and services, asking where places are, hay vs está reminder, location prepositions, simple directions, polite requests, dialogue and eight-question quiz
- A1 Lesson 17: shopping vocabulary, asking and stating prices, cuesta/cuestan, euro prices, quantities and packaging, polite requests, card/cash payment, supermarket dialogue and eight-question quiz
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: transport, healthcare, airport, housing, public offices and shopping
- A2 starter pathway in progress: Lessons 01–09; not a claim of complete CEFR A2 syllabus coverage or official certification
- Service-worker cache: `spanish-seekho-v48`

## Language coverage (important)
- Homepage language selector provides Roman Urdu, Urdu and English copy.
- Lesson pages are primarily Roman Urdu/English supported, with some Urdu-script pronunciation approximations.
- On lesson pages, selecting Urdu currently changes text direction and saves the preference; it does not translate all lesson content.
- Urdu-script and Roman Urdu pronunciations are approximations, not precise phonetic transcription.

## A1 course direction
The A1 pathway is being expanded deliberately, not treated as complete. Upcoming areas include daily routines, frequency, free-time activities, and integrated reading/listening/writing/speaking practice. This is a working plan; do not describe planned topics as already available.

## QA status
- 17 Nov 2026 (branch a1-improvements): Lesson 03 pronunciation guides changed to Castilian "th" (cero, cinco, diez, once-quince, 16-19, cincuenta, cien) to match Lesson 02; all A1 quiz options now shuffle each load; "Try again" button added via app-shell.js (reloads page; also applies to A2 quizzes); manifest link added to a1/index, practice, spain-shopping; homepage/README lesson counts corrected (A1 11, A2 9).
- Known leftover: a2/lesson-09 "izquierda" guide uses "ees-" (Castilian would be "eeth-"). Practice deck is still 12 hardcoded items.
- Earlier static source review and syntax/duplicate-ID checks were completed on the pages inspected at that time.
- Lessons 09–17 have been added to the A1 index and service-worker precache list.
- No browser, Android, RTL, PWA or offline testing was performed for the new lesson.
- Detailed grammar, Castilian usage and pronunciation review remains ongoing.
- Full internal-link/precache audit and final functional/device testing remain deferred to the dedicated quality phase.

## Open access and caching
- All currently published A1 and A2 lessons are directly accessible; there is no prerequisite sequence or lesson-lock gate.
- Quiz scores and completion markers are for progress tracking only and do not control access to later lessons.
- Service-worker cache is only an offline convenience. Browsers may clear or evict cached files; online access should work from GitHub Pages without a pre-existing cache.

## Architecture and preservation rules
- Free static HTML/CSS/vanilla JavaScript; no mandatory account or paid API.
- Mobile-first; preserve learner progress and existing localStorage keys: `ss-language`, `ss-completed`, `ss-a1-done`, `ss-a2-done`.
- Keep Spanish content LTR within Urdu RTL layouts where appropriate.
- Browser speech depends on installed device voices and must remain supplementary.
- Do not describe the sixteen A1 lessons as a complete CEFR A1 syllabus.
- Do not describe A2 Lessons 01–09 as a complete CEFR A2 syllabus, official exam or certification.

## Next recommended work
1. Continue expanding A1 with deeper everyday communication, time/schedule practice and integrated skills.
2. Keep all lessons directly accessible and quizzes as progress-only.
3. Continue A2 expansion when appropriate.
4. Run full browser, Android, RTL, PWA and offline testing only in the final quality phase, when the project owner is ready.
