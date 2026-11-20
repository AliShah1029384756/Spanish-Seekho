# Spanish Seekho — Online Word Explorer
**Feature specification and implementation plan**

- **Project:** Spanish Seekho
- **Feature name:** Online Word Explorer (Spanish Dictionary & Language Help)
- **Status:** Planning / documentation
- **Target platform:** GitHub Pages, static HTML/CSS/JavaScript
- **Audience:** Pakistani Spanish learners
- **Language support:** Roman Urdu, Urdu script, and English
- **Spanish variety:** Standard Spanish of Spain (Castilian), consistent with the existing curriculum

---

## 1. Purpose

Add a dedicated online word-reference tool to Spanish Seekho. A learner can search for a Spanish word and receive a structured explanation, not just a one-line translation.

The feature complements the existing A1/A2/B1 learning pathways. It does **not** replace lessons, practice activities, progress tracking, or the existing offline/PWA experience.

The tool requires an internet connection for fresh lookups. Previously viewed results may be cached for convenience, but the feature must clearly distinguish cached data from a live lookup.

## 2. Existing project context

The current repository is a static website built with vanilla HTML, CSS, and JavaScript. It is deployed through GitHub Pages and uses a service worker.

Relevant existing files inspected during planning:

- `index.html` — homepage and navigation
- `styles.css` — shared visual system and responsive styling
- `app.js` — homepage language selector, speech playback, and interactions
- `sw.js` — PWA cache list and fetch strategy
- `manifest.webmanifest` — installable web app metadata
- `a1/`, `a2/`, and `b1/` — learning pathways and lesson pages

The homepage language preference is stored as `ss-language` with values `roman`, `urdu`, or `english`. The new tool should read this preference when possible, while still allowing the learner to change the explanation language inside the tool.

The site currently uses browser speech synthesis with the Spanish (Spain) locale (`es-ES`) for pronunciation. Device voice availability and quality vary.

## 3. Goals

1. Let a learner search for a Spanish word or short phrase.
2. Explain the result in Roman Urdu, Urdu, or English.
3. Present useful linguistic information in clearly separated sections.
4. Provide pronunciation playback when a suitable voice or audio source is available.
5. Work well on mobile screens and remain usable with keyboard and assistive technology.
6. Preserve the current static-site deployment and avoid requiring a paid API or backend for the first release.
7. Fail gracefully when a source is unavailable, rate-limited, or does not contain a requested field.

## 4. Out of scope for the first release

- Replacing or rewriting A1/A2/B1 lessons.
- User accounts, cloud sync, or a server-side database.
- AI-generated explanations presented as verified dictionary facts.
- Guaranteed coverage of every Spanish word, regional expression, or technical term.
- Full speech assessment or accent scoring.
- A promise that every lookup will contain synonyms, antonyms, idioms, collocations, audio, and conjugations. These depend on source coverage.

## 5. Learner experience

### 5.1 Entry point

Add a clearly visible **Word Explorer / Online Dictionary** entry point on the homepage and, where appropriate, in the course navigation. It opens a dedicated page rather than embedding a large dictionary panel into every lesson.

Proposed first-release page:
- `tools/word-explorer.html`
- `tools/word-explorer.css`
- `tools/word-explorer.js`

The exact paths may be adjusted to match repository conventions during implementation.

### 5.2 Search

The search area should include:
- Spanish word or phrase input.
- Search button and Enter-key support.
- Clear button.
- Explanation-language selector: Roman Urdu, Urdu, English.
- Loading, empty, no-result, offline, and error states.
- Input normalization for leading/trailing spaces and case; preserve accents and ñ.

Examples: `casa`, `aprender`, `¿Cómo estás?`, `corazón`.

### 5.3 Result layout

Show only fields actually returned by a trustworthy source. A result may contain:

1. **Word overview**
   - Headword and syllable/phonetic information when available.
   - Part of speech (noun, verb, adjective, adverb, etc.).
   - Noun gender (`el/la`) and plural form when sourced.
   - English and selected Urdu/Roman Urdu meaning.

2. **Definitions and senses**
   - Multiple meanings, grouped by part of speech or sense.
   - Source attribution for each source-backed section.
   - Avoid merging unrelated senses into one translation.

3. **Pronunciation**
   - Play source-provided audio only when available and permitted.
   - Otherwise use browser speech synthesis with `es-ES`.
   - Display a note that browser pronunciation depends on installed device voices.
   - Do not treat Roman Urdu or Urdu-script pronunciation spellings as exact phonetics.

4. **Examples**
   - Spanish example sentence.
   - Translation/explanation where available.
   - Make clear whether the translation is source-provided or generated by a translation service.

5. **Word relationships**
   - Synonyms and antonyms when supported by a reliable source.
   - Related words, derivatives, and word family when available.

6. **Verb help**
   - Infinitive, regular/irregular classification, and conjugation tables when reliable data exists.
   - First-release support may be limited to curated/common verbs if a dependable open data source is not available.
   - Do not infer a full conjugation table from a single dictionary entry.

7. **Usage help (later enhancement)**
   - Common phrases, idioms, collocations, register, and regional notes.
   - Clearly identify the source and regional context.

### 5.4 Lesson integration (later enhancement)

In a later phase, selected Spanish vocabulary in lesson content may link to the Word Explorer with the word prefilled, for example:
`tools/word-explorer.html?word=aprender`

This must be progressive enhancement. Lessons must continue to work if the online tool or internet connection is unavailable.

## 6. Data and API strategy

### 6.1 Provider adapter pattern

Do not bind the user interface directly to one API's response shape. Create small provider adapters that normalize source responses into a common internal result model.

Suggested conceptual modules:
- `lookupSpanishDictionary(term)`
- `lookupTranslations(term, targetLanguage)`
- `getPronunciation(term, sourceEntry)`
- `getVerbConjugation(lemma)`

Each provider should have:
- A documented endpoint and response format.
- CORS/browser-access verification.
- Usage limits and acceptable-use review.
- Attribution and licence requirements.
- Timeout and error handling.
- A clear list of fields it can and cannot supply.

### 6.2 Candidate sources to evaluate

The first implementation task is a small API feasibility test. Do not assume that a source supports every required field or permits direct browser requests.

| Data need | Candidate approach | Implementation rule |
|---|---|---|
| Spanish definitions and parts of speech | Test an open multilingual dictionary API such as Free Dictionary API for its Spanish language coverage; evaluate Wiktionary/MediaWiki as a second source | Confirm Spanish endpoint coverage, CORS, data quality, and licence before selecting |
| Additional definitions, translations, etymology | Wiktionary through the MediaWiki API | Parse only structured/understood fields; respect attribution and reuse terms |
| English/Urdu translation | Evaluate the translation service already used elsewhere in the project, plus a suitable alternative | Confirm current endpoint availability, language-pair support, quotas, and terms; label machine translations |
| Pronunciation audio | Dictionary-provided audio where licensed; otherwise browser `SpeechSynthesis` using `es-ES` | Audio is optional; never block the lookup if audio is missing |
| Verb conjugations | Reviewed open conjugation dataset or a small curated dataset for common verbs | Verify licensing and conjugation accuracy; do not scrape commercial websites |
| Synonyms, antonyms, idioms, collocations | Add only after identifying a dependable source with reuse permission | Missing data should be omitted, not invented |

**Provider selection is intentionally not finalised in this document.** API coverage, CORS, rate limits, availability, and licensing must be tested before implementation. An API that works in a server-side example may still reject browser requests from GitHub Pages.

### 6.3 Normalized result model

The UI should consume a predictable object similar to:

```js
{
  query: "casa",
  headword: "casa",
  language: "es",
  phonetic: null,
  audioUrl: null,
  entries: [
    {
      partOfSpeech: "noun",
      gender: "feminine",
      meanings: [
        {
          definition: "A place where someone lives.",
          translations: {
            en: "house",
            ur: "گھر",
            roman: "ghar"
          },
          examples: []
        }
      ],
      synonyms: [],
      antonyms: [],
      forms: []
    }
  ],
  sources: [],
  fetchedAt: "ISO-8601 timestamp",
  cacheStatus: "live"
}
```

This is a conceptual schema, not a claim that every field will always be populated. Use empty arrays or `null` for unavailable information. Never fill missing dictionary facts with guesses.

## 7. Translation and language display

- The app's explanation language should default to the saved `ss-language` preference if present.
- Roman Urdu is a learner-friendly transliteration, not a standardised language encoding.
- Urdu content must use correct RTL direction and appropriate text alignment without reversing Spanish text.
- English may be used as a fallback when an Urdu translation is unavailable, but the UI must label the fallback.
- Machine translations must be marked as machine-generated or approximate where appropriate.
- Preserve Spanish accents and punctuation (á, é, í, ó, ú, ü, ñ, ¿, ¡).

## 8. Caching, offline behaviour, and PWA

- Online lookup requires connectivity.
- Cache successful normalized results locally with a timestamp and a bounded retention policy.
- If a cached result is shown while offline, display **Saved result — may be outdated**.
- If no cached result exists while offline, explain that an internet connection is required.
- Do not cache API error responses as successful results.
- Add the new page and its local CSS/JS assets to the service-worker precache list only after those files exist.
- Review the service-worker cache version whenever the cache manifest changes.
- Never make the service worker wait for a third-party API during installation.
- Existing lessons and their offline assets must remain available independently of this feature.

## 9. Privacy, security, and reliability

- The first release should not require sign-in or collect personal information.
- Search terms may be sent to third-party dictionary/translation providers; disclose this briefly near the search tool or in a privacy note.
- Do not include secret API keys in client-side JavaScript. Public static-site code is visible to every visitor.
- Prefer sources that do not require a secret key. If a future provider requires a private key, it needs a server-side proxy and a separate hosting/security decision.
- Use request timeouts, prevent duplicate rapid requests, and handle HTTP errors, malformed JSON, CORS failures, and rate limits.
- Render API text as text, not executable HTML. Sanitize any rich content before display.
- Provide source attribution and links where required by the provider's licence.

## 10. Accessibility and responsive design

- Mobile-first layout consistent with the existing cream/green visual identity.
- Search field has a visible label and keyboard-accessible controls.
- Announce loading and result status using an appropriate live region.
- Use semantic headings and buttons.
- Ensure Urdu RTL and mixed Spanish/English text remain readable.
- Provide visible focus styles, adequate contrast, and reduced-motion support.
- Do not rely on colour alone to communicate errors or result states.

## 11. Proposed implementation phases

### Phase 0 — API feasibility and technical spike
- Test candidate dictionary endpoints with Spanish words (including accented words).
- Verify browser CORS from a GitHub Pages-like origin.
- Check response quality, attribution, usage limits, and terms.
- Test Urdu/English translation availability.
- Record the selected providers and known limitations before building the UI.

### Phase 1 — Minimum useful release
- Create the dedicated Word Explorer page.
- Add search, loading/error/no-result states, and explanation-language selector.
- Integrate one verified Spanish dictionary source.
- Add Spanish audio playback with browser speech fallback.
- Show definitions, parts of speech, and examples when supplied.
- Add source attribution.
- Keep all unavailable fields hidden rather than displaying empty sections.

### Phase 2 — Learning-focused detail
- Add reliable noun gender/plurals, synonyms/antonyms, and word forms where source coverage permits.
- Add Urdu/Roman Urdu translations with explicit fallback labels.
- Add reviewed conjugation tables for common verbs.
- Add local caching and offline messaging.

### Phase 3 — Website integration
- Add a homepage/course navigation entry.
- Add optional prefilled word links from selected lessons.
- Update the service-worker asset list and cache version.
- Test the complete site on mobile and desktop.

### Phase 4 — Advanced language help
- Evaluate idioms, collocations, regional usage, and context-aware explanations.
- Consider AI-assisted explanations only as a separately labelled learning aid, not as a replacement for cited dictionary data.
- Add more providers only when they improve coverage without making reliability or maintenance worse.

## 12. Acceptance criteria

The first release is ready when:

- [ ] A learner can open the tool from Spanish Seekho without affecting existing course navigation.
- [ ] A valid Spanish word returns a result from the selected, verified dictionary source.
- [ ] Accented input and `ñ` are handled correctly.
- [ ] Enter and the search button both trigger a lookup.
- [ ] Loading, no-result, offline, timeout, rate-limit, and general error states are understandable.
- [ ] Roman Urdu, Urdu, and English explanation modes are available.
- [ ] Urdu text displays RTL while Spanish examples remain correctly ordered.
- [ ] Pronunciation playback works where a Spanish device voice exists, with a clear fallback message where it does not.
- [ ] Source attribution is visible wherever required.
- [ ] Missing information is not fabricated.
- [ ] The page is responsive and keyboard accessible.
- [ ] Existing A1/A2/B1 lessons, progress storage, practice tools, and PWA behaviour pass regression checks.
- [ ] The feature does not require a paid key or expose a secret in the public repository.

## 13. Regression test checklist

Before release, re-check:
- Homepage language selection and saved `ss-language` preference.
- A1/A2/B1 navigation and direct lesson URLs.
- Lesson completion and existing localStorage progress keys.
- Practice modes and existing speech playback.
- Service-worker installation, update, and offline lesson loading.
- GitHub Pages relative paths from both the homepage and nested folders.
- Android Chrome and at least one desktop browser.

## 14. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Dictionary API does not support Spanish adequately | Test multiple providers before committing to one |
| CORS blocks a provider from GitHub Pages | Reject it for direct-browser use or plan a secure proxy as a later project |
| API limits or downtime | Timeouts, clear error messages, optional secondary source, cached results |
| Urdu translations are incomplete | Show English fallback clearly; do not invent Urdu meanings |
| Conjugation or synonym data is unreliable | Restrict to reviewed data and cite the source |
| Existing offline experience regresses | Keep the tool separate and run the regression checklist |
| API content contains unsafe markup | Render plain text and sanitize any allowed formatting |

## 15. Definition of done for documentation

This document defines the intended behaviour, architecture, constraints, and staged delivery. It does not claim that the feature has been implemented or that a particular external API has passed testing.

The next engineering step is **Phase 0: API feasibility testing**. Once the provider decision is evidence-based, implementation can begin without guessing about API coverage or licensing.
