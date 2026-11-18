# Spanish Seekho Handoff
_Updated: 18 November 2026_

## Current repository state
- A1: lessons 01–19
- Practice: 4 modes; deck expanded to 36 items; flashcard known-list saved under `ss-practice-flash`
- A2: lessons 01–10
- Spain Life: 6 modules
- Service-worker cache: `spanish-seekho-v52`

## Practice changes (this pass)
- Vocabulary deck grown from 12 → 36 items drawn from A1 content
- Sentence-building set grown to 16 items
- Flashcards: “I know this” marks a card known; known cards are deprioritised on next session; progress is device-local only
- Home panel shows known-count progress

## Preservation rules
- localStorage keys in use: `ss-language`, `ss-completed`, `ss-a1-done`, `ss-a2-done`, `ss-practice-flash`
- Do not rename keys without migration

## Next recommended work
1. A1 weather/seasons or home vocabulary lesson
2. A2 expansion if prioritised
3. Real-device testing (Android, RTL, PWA, offline)