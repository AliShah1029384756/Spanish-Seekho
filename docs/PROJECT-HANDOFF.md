# Spanish Seekho — Project Handoff
_Last updated: 16 November 2026_

## Product identity
Spanish Seekho is a free Spanish-learning platform for Pakistani learners.
Mission: **Making Spanish Learning Accessible to Every Pakistani.**

## Current status (verified)
- Live on GitHub Pages
- A1 lessons available: 01–08 (full A1 path including Review & checkpoint)
- Shared mobile shell + language picker working
- Service worker cache: spanish-seekho-v11
- Progress stored in localStorage (ss-a1-done, ss-language)

## Important localStorage keys
- ss-language: roman | urdu | english
- ss-a1-done: array of completed lesson ids (lesson-01 … lesson-08)
- ss-completed: homepage practice markers

## Repository map
- a1/lesson-01.html → Greetings & introductions
- a1/lesson-02.html → Alphabet & pronunciation
- a1/lesson-03.html → Numbers, dates & time
- a1/lesson-04.html → People, family & countries
- a1/lesson-05.html → Everyday objects & places
- a1/lesson-06.html → Food, cafés & shopping
- a1/lesson-07.html → Daily routine & basic grammar
- a1/lesson-08.html → Review & A1 checkpoint
- a1/app-shell.js → shared language + mobile nav
- a1/course.css → lesson styles + RTL isolation
- sw.js → offline cache (v11)

## Next recommended task
Phase 3 practice tools (vocabulary review / matching) OR Phase 4 real-life Spain modules (transport, healthcare, housing). Content review of lessons 01–08 is also valuable before expanding.

Lesson 08 is a compact review of greetings, numbers, family, places, food/ordering and the five core verbs, followed by a 10-question checkpoint (pass ≥ 7/10).

## Principles (do not break)
- Free core learning, no paid APIs
- Mobile-first, Android priority
- Static HTML/CSS/vanilla JS
- Honest progress indicators
- Preserve existing localStorage keys
- Accuracy over volume
