# Spanish Seekho — Project Handoff
_Last updated: 16 November 2026_

## Product identity
Spanish Seekho is a free Spanish-learning platform for Pakistani learners.
Mission: **Making Spanish Learning Accessible to Every Pakistani.**

## Current status (verified)
- Live on GitHub Pages
- A1 lessons 01–08 complete
- Practice page: flashcards + matching (`a1/practice.html`)
- Service worker cache: spanish-seekho-v12
- Progress: ss-a1-done, ss-language, ss-practice

## Important localStorage keys
- ss-language: roman | urdu | english
- ss-a1-done: completed lesson ids
- ss-completed: homepage practice markers
- ss-practice: practice stats object

## Repository map
- a1/lesson-01.html … lesson-08.html
- a1/practice.html → Flashcards + matching (A1 vocab)
- a1/app-shell.js → language + mobile nav
- sw.js → offline cache (v12)

## Next recommended task
Phase 4 real-life Spain module (e.g. transport or healthcare) OR more practice modes (listening-choice / sentence-building). Content QA pass on lessons 01–08 also valuable.

## Principles (do not break)
- Free core learning, no paid APIs
- Mobile-first, Android priority
- Static HTML/CSS/vanilla JS
- Honest progress indicators
- Preserve existing localStorage keys
- Accuracy over volume
