# Spanish Seekho 🇪🇸🇵🇰

**Making Spanish Learning Accessible to Every Pakistani.**

A free, mobile-first Spanish learning platform designed for Pakistani learners, with support in Roman Urdu, Urdu and English. The initial learning pathway follows standard Spanish from Spain (Castilian).

## Project goals
- Beginner-friendly Spanish lessons, starting with CEFR A1.
- Spanish vocabulary with English meaning, Roman Urdu pronunciation and Urdu-script pronunciation approximation.
- Practical communication for everyday life in Spain.
- Interactive practice and progress saved locally in the learner's browser.
- Lightweight, installable Progressive Web App (PWA) with an offline app shell.
- No paid API or subscription required for core learning.

## Current prototype
The first prototype includes a responsive landing page, language selector, five introductory words, browser-based Spanish speech (device support and installed voices vary), and a short practice question.

**Important:** Urdu-script pronunciation is an approximation, not exact phonetic transcription. Browser speech synthesis is supplementary and may not be available on every device. The prototype is an early foundation, not a completed Spanish course.

## Run locally
This is a static website. Open `index.html` in a browser or serve the repository with any simple static web server. The service worker and install features require HTTPS or localhost.

## Deploy free with GitHub Pages
1. Open the repository's **Settings**.
2. Select **Pages** from the left menu.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for GitHub Pages to publish the site.

## Roadmap
- Complete and reviewed A1 curriculum.
- Listening, pronunciation, reading, writing and grammar practice.
- Spain-life modules: work, housing, healthcare, transport and public services.
- A2 and higher CEFR levels.
- Optional family learning and synced progress, if a reliable free solution is available.

## Principles
Accuracy over volume. Accessibility over complexity. Free core learning for everyone. Features will only be described as complete once implemented and tested.

## License
MIT — see [LICENSE](LICENSE).


## A1 course status
The A1 course roadmap is available at `a1/index.html`. Unit 01 (greetings and introductions) is the first interactive lesson at `a1/lesson-01.html`. Other units are roadmap placeholders and are not yet published as lessons.


## AI handoff and project planning
For future contributors and AI assistants, start with [AGENTS.md](AGENTS.md), then read the [Project Handoff](docs/PROJECT-HANDOFF.md) and [Product Roadmap](docs/ROADMAP.md). These documents record the product principles, architecture, current implementation status, priorities and the expected workflow for continuing the project.
