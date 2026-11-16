# Spanish Seekho — Project Handoff
_Last updated: 16 November 2026_

## Product identity
Spanish Seekho is a free Spanish-learning platform for Pakistani learners.
Mission: **Making Spanish Learning Accessible to Every Pakistani.**

## Current status (verified)
- Live on GitHub Pages
- A1 lessons available: 01 (Greetings), 02 (Alphabet & Pronunciation), 03 (Numbers, dates & time)
- Shared mobile shell + language picker working
- Service worker cache: spanish-seekho-v7
- Progress stored in localStorage (ss-a1-done, ss-language)

## Important localStorage keys
- ss-language: roman | urdu | english
- ss-a1-done: array of completed lesson ids (lesson-01, lesson-02, lesson-03…)
- ss-completed: homepage practice markers

## Repository map
- a1/lesson-01.html → Greetings & introductions (formal/informal)
- a1/lesson-02.html → Alphabet & pronunciation
- a1/lesson-03.html → Numbers, dates & time
- a1/lesson-04.html → People, family & countries
- a1/app-shell.js → shared language + mobile nav
- a1/course.css → lesson styles + RTL isolation
- sw.js → offline cache (v6)

## Next recommended task
Lesson 05 — Everyday objects & places

Lesson 04 covers family vocabulary, countries and nationalities, asking where someone is from, and introductory use of ser and tener. It includes a six-question quiz and saves completion as lesson-04 after a score of at least 4/6.

## Principles (do not break)
- Free core learning, no paid APIs
- Mobile-first, Android priority
- Static HTML/CSS/vanilla JS
- Honest progress indicators
- Preserve existing localStorage keys
- Accuracy over volume
