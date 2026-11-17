# Roadmap

## Implemented
- A1 beginner starter pathway: lessons 01–08
- Practice: flashcards, matching, listening choice and sentence building
- Spain Life: 6 practical modules
- Homepage Spain Life grid, course and practice CTAs
- A2 starter pathway in progress: Lessons 01–08 cover past events, past habits, work/studies, travel/accommodation, opinions/future plans, social invitations and healthcare; Lesson 08 provides a mixed review checkpoint and can-do checklist
- Shared speech helper and path-aware mobile navigation
- Service-worker cache version v34

## QA progress
- [x] First static review of homepage, A1 course, 8 lessons, practice page, 6 Spain Life modules, A2 outline, app shell, styles and service worker
- [x] Inline JavaScript syntax parsed in inspected HTML pages
- [x] No duplicate HTML IDs found in inspected pages
- [x] Confirmed declared service-worker cache version v29 and its expected A2 checkpoint entry
- [x] A2 Lesson 08 static structure: 12 mixed questions, 9/12 pass threshold, separate `ss-a2-done` progress key and `lesson-08` completion marker
- [x] Corrected A2 index to mark Lessons 01–08 available and distinguish the starter pathway from full CEFR A2 completion
- [x] Corrected Lesson 08 completion wording so passing the A1 starter checkpoint is not presented as completing all of CEFR A1
- [x] First targeted content corrections in A1 Lessons 02 and 07: clearer pure-vowel guidance, more accurate jota and regional pronunciation notes, less absolute ser/estar explanations, and audio coverage for both gender forms of cansado/cansada
- [ ] Verify every internal link and precache URL against the complete repository tree
- [x] A2 Lesson 01: clarified that hacer is irregular, added a concise preview of hacer/ir/ser/tener in the preterite, and documented Spain vosotros forms
- A2 Lesson 02: added complete regular and irregular imperfect conjugation patterns, explained vosotros forms, and refined the j sound approximation
- A2 Lesson 03: clarified article use with professions, completed tener/deber present-tense forms, explained vosotros/ustedes usage, and distinguished Spain/Latin American pronunciation of oficina
- [ ] Continue detailed Spanish grammar, vocabulary and Castilian usage review
- [ ] Review pronunciation approximations for consistency and clarity across all lessons
- [ ] Test all quizzes and practice modes in a real browser
- [ ] Android layout checks at 360px, 390px and 412px
- [ ] Urdu RTL review
- [ ] PWA install and offline smoke test on Android
- [ ] Confirm latest GitHub Pages deployment

- A2 Lesson 05: completed the gustar indirect-object pronoun pattern, clarified verb agreement with the liked item/activity, added natural agreement responses, and clarified Castilian pronunciation approximations.
- A2 Lesson 04: clarified the checkout question, refined the room-change request, and added polite conditional request patterns (quisiera/podría/podrían/podríais).

## Next
1. Continue the Spanish content and pronunciation review, then complete the repository link/precache audit.
2. Perform browser and Android functional/responsive testing when the project owner is ready.
3. Continue expanding A2 beyond the starter pathway while keeping unfinished A1 QA work visible; do not label A2 complete.

## Open access and caching
- A1 and A2 lesson pages are open directly: learners may start from any available lesson without completing earlier lessons or passing a prerequisite gate.
- Quiz completion records learning progress only; it does not lock later lessons.
- Service-worker caching is an offline convenience, not an access-control mechanism. Browser storage can be cleared or evicted, so learners should not rely on cached pages being permanently available offline.

## Product truth
The eight A1 lessons are a beginner starter pathway, not a claim that the complete CEFR A1 syllabus is covered. A2 Lessons 01–08 are available as a starter pathway and internal checkpoint, not a complete CEFR A2 syllabus, official exam or certification. A2 remains in progress.
