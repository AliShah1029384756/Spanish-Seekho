# Spanish Seekho — Project Handoff
_Last updated: 16 November 2026_

## Product identity
Spanish Seekho is a free Spanish-learning platform for Pakistani learners.
Mission: **Making Spanish Learning Accessible to Every Pakistani.**

## Current status (verified)
- Live on GitHub Pages
- A1 lessons available: 01–07 (Greetings through Daily routine & basic grammar)
- Shared mobile shell + language picker working
- Service worker cache: spanish-seekho-v10
- Progress stored in localStorage (ss-a1-done, ss-language)

## Important localStorage keys
- ss-language: roman | urdu | english
- ss-a1-done: array of completed lesson ids (lesson-01 … lesson-07)
- ss-completed: homepage practice markers

## Repository map
- a1/lesson-01.html → Greetings & introductions
- a1/lesson-02.html → Alphabet & pronunciation
- a1/lesson-03.html → Numbers, dates & time
- a1/lesson-04.html → People, family & countries
- a1/lesson-05.html → Everyday objects & places
- a1/lesson-06.html → Food, cafés & shopping
- a1/lesson-07.html → Daily routine & basic grammar (ser, estar, tener, ir, querer)
- a1/app-shell.js → shared language + mobile nav
- a1/course.css → lesson styles + RTL isolation
- sw.js → offline cache (v10)

## Next recommended task
Lesson 08 — Review & A1 checkpoint

Lesson 07 introduces the core present-tense forms of ser, estar, tener, ir and querer, contrasts ser (identity/origin) vs estar (location/feelings), covers age and fixed expressions with tener, basic daily-routine sentences, a short dialogue, and a six-question quiz. Completion is saved as lesson-07 after a score of at least 4/6.

## Principles (do not break)
- Free core learning, no paid APIs
- Mobile-first, Android priority
- Static HTML/CSS/vanilla JS
- Honest progress indicators
- Preserve existing localStorage keys
- Accuracy over volume
