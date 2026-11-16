# AI Agent Instructions
Read docs/PROJECT-HANDOFF.md and docs/ROADMAP.md before doing work. Inspect the current repository and live deployment; documentation can lag behind code.
Work in small, testable milestones. Preserve the free static HTML/CSS/vanilla-JS architecture unless a compelling, documented reason exists. Preserve localStorage keys ss-language, ss-completed and ss-a1-done; never discard learner progress.
Design for Android phones first. Use semantic HTML, accessible labels, visible keyboard focus, large touch targets and reduced-motion support. Urdu must use correct RTL while Spanish and Latin-script text remain LTR where appropriate.
Do not claim lessons, translations, audio, offline behaviour, PWA installation or CEFR levels are complete unless implemented and tested. Pronunciation in Roman Urdu/Urdu is approximate. Review Spanish grammar and usage carefully.
Avoid paid APIs, paid hosting, mandatory accounts, unnecessary frameworks and essential external CDN dependencies.
When app-shell assets change, review the service-worker cache list and increment its cache version. Check GitHub Pages project-relative paths.
After each meaningful milestone update the handoff and roadmap with actual changes, partial work, tests, limitations and next task.
If the user says "next", choose the highest-priority unfinished roadmap item, inspect current code, implement, test, update docs and report. Ask only if a genuine product decision or missing input blocks safe progress.
Final report must state changed files, commit/deployment evidence, tests actually run, known limitations and next recommended task.