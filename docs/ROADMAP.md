# Roadmap

## Implemented
- A1 beginner starter pathway expanded to lessons 01–14; this is still not the complete CEFR A1 syllabus.
- A1 Lesson 09: personal information, question words, regular present-tense forms of vivir and hablar, tú/usted contrast, dialogue and six-question quiz.
- A1 Lesson 10: noun gender, definite and indefinite articles, singular/plural formation, common gender clues and exceptions, sentence examples and eight-question quiz.
- A1 Lesson 11: adjective agreement, common descriptive vocabulary, gender/number forms, ser + adjective, conversation and eight-question quiz.
- A1 Lesson 12: regular -ar, -er and -ir present-tense endings, all six subject groups including vosotros, subject pronoun omission, everyday examples, conversation, independent practice and eight-question quiz.
- A1 Lesson 13: essential irregular present-tense verbs ser, estar, tener, ir and hacer; basic ser/estar contrast; age and common tener expressions; ir a + destination; vosotros forms, conversation and eight-question quiz.
- A1 Lesson 14: basic sentence order, negation with no/nunca/tampoco, yes/no questions, time phrases, sentence building, dialogue and eight-question quiz.
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: 6 practical modules
- Homepage Spain Life grid, course and practice CTAs
- A2 starter pathway in progress: Lessons 01–09; not full CEFR A2 coverage
- Shared speech helper and path-aware mobile navigation
- Service-worker cache version v45; A1 Lessons 09–14 included in precache

## A1 expansion plan
Keep the existing lessons available and expand the course as a coherent beginner syllabus rather than replacing material randomly. Planned areas to cover in upcoming lessons:
1. Articles, noun gender and plural forms
2. Adjective agreement and describing people/things
3. Regular present-tense -ar, -er and -ir verbs in useful contexts
4. Common irregular verbs and everyday question-answer patterns
5. Negation, word order and building simple sentences
6. Days, months, dates, clock time and schedules (deeper practice)
7. Home, town, directions and everyday services
8. Shopping, prices, quantities and polite requests
9. Daily routines, frequency and simple free-time activities
10. Reading, listening, writing and speaking practice integrated across units
11. A broader A1 review and a carefully labelled non-official checkpoint

This is a working curriculum plan, not a claim that every item is already implemented or an official exhaustive CEFR syllabus. Lessons remain directly accessible in any order.

## QA status
- First static review of homepage, A1 starter lessons, practice page, six Spain Life modules, A2 outline, app shell, styles and service worker
- Earlier inline JavaScript syntax and duplicate-ID checks were completed on the inspected pages
- A1 Lesson 02 and 07 received targeted pronunciation/grammar refinements
- [ ] Continue detailed Spanish grammar, vocabulary and Castilian usage review
- [ ] Review pronunciation approximations for consistency and clarity across all lessons (Lesson 03 c/z fixed 17 Nov 2026; others pass a scripted c/z check for A1; A2 lesson-09 izquierda outstanding)
- [ ] Verify every internal link and precache URL against the complete repository tree
- [ ] Test quizzes and practice modes in a real browser
- [ ] Android layout checks at 360px, 390px and 412px
- [ ] Urdu RTL review
- [ ] PWA install and offline smoke test on Android
- [ ] Confirm latest GitHub Pages deployment

## Open access and caching
- A1 and A2 lesson pages are open directly: learners may start from any available lesson without completing earlier lessons or passing a prerequisite gate.
- Quiz completion records learning progress only; it does not lock later lessons.
- Service-worker caching is an offline convenience, not an access-control mechanism. Browser storage can be cleared or evicted, so learners should not rely on cached pages being permanently available offline.

## Product truth
The thirteen A1 lessons are an expanding beginner starter pathway, not a claim that the complete CEFR A1 syllabus is covered. A2 Lessons 01–09 are available as a starter pathway, not a complete CEFR A2 syllabus, official exam or certification. A2 remains in progress.

## Next
0. Continue A1 with deeper everyday communication, dates/schedules and integrated reading, listening, writing and speaking practice.
1. Later, expand practice beyond the 12-item deck using vocabulary from the growing A1 lessons and add progress saving for flashcards.
2. Continue A2 expansion when A1 coverage is stronger or when the project owner reprioritises.
3. Keep browser, Android, RTL, PWA and full repository testing for the dedicated final quality phase.
