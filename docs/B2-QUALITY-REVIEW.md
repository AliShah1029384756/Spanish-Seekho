# B2 Quality and Curriculum Review

**Review date:** 25 November 2026  
**Repository:** `AliShah1029384756/Spanish-Seekho`  
**Scope:** B2 core lessons 01–24, closing modules 25–28, B2 index, homepage pathway summary and service-worker precache.  
**Review type:** Repository/source inspection and sampled pedagogical review. This is not browser QA, a formal language-editor review, or external CEFR validation.

## 1. Delivery and deployment

- B2 core lessons 01–24 and closing activities 25–28 are present in the default branch.
- Closing activities are linked from the B2 index and the homepage pathway summary.
- B2 progress is displayed as 0–28 activities, combining the existing `ss-b2-done` core lesson key with the separate `ss-b2-end-done` closing-activity key. Existing lesson progress IDs and open access are preserved.
- Service-worker cache is `spanish-seekho-v93`; all four closing activity routes are included in precache. Lessons 01–02 and the integrated assessment were refined in the current quality-review batch; confirm the workflow associated with this revision before treating those latest changes as live.
- GitHub Pages workflow run **#772** for head `97237314738d03610b9b4000d7bbba89073af683` completed successfully, including build, artifact upload and deployment. It confirms the B2 index badge/navigation correction from that revision. The current v93 lesson/assessment refinements are newer source commits and need their own successful Pages run before they can be described as live.

## 2. Source-level structural checks

### Core lessons 01–24

- All 24 lesson files were fetched from the default branch.
- Lessons 01–24 each contain an eight-question quiz array.
- All lessons retain `ss-b2-done` and the six-of-eight completion threshold.
- Sequential previous-lesson navigation is present from Lesson 02 through Lesson 24; Lesson 01 returns to the B1 overview.
- All 24 lessons now have 12 Spanish example/audio controls each. Lessons 01–02 received one additional contextual example and matching audio control in this refinement batch.
- The 24 lessons are organised into six coherent units: narratives/time; argumentation; grammar for meaning; professional/academic communication; media/society; precision/flexible interaction.

### Closing activities 25–28

- Module 25: 16-question cumulative review, explanations, suggested lesson repair links and locally saved revision plan.
- Module 26: six-part proposal project, local draft autosave and self-check completion rules.
- Module 27: listening and reading checks, Spanish device text-to-speech with transcript fallback, extended writing, speaking and mediation self-review.
- Module 28: 12 can-do self-assessment statements, personal gap plan and C1 next-step choice.
- Closing activities use `ss-b2-end-done`; core lesson progress storage is unchanged.
- Sequential closing-module navigation was corrected: 25 → 26 → 27 → 28.
- Completion indicators are learning records, not proficiency grades or official CEFR results.
- Module 27 now includes an asynchronous online discussion task with an initial post, response, revised recommendation and interaction self-checks.
- Module 27 also includes a four-dimension speaking/pronunciation reflection rubric: intelligibility, word stress/sound clarity, rhythm/phrasing and intonation/interaction. It is a self/peer/teacher reflection aid; the website does not record or automatically grade speech.

## 3. Sampled language and pedagogy review

The sampled examples across grammar, register, collocations, difficult conversations and integrated communication use plausible contemporary Spanish from Spain and generally provide clear English translations. Examples include:
- Mood contrasts in factual, hypothetical, future and non-specific contexts.
- Mixed and past counterfactual conditionals.
- Relative clauses, concession, cause/result and purpose.
- Formal/informal requests, tactful disagreement and realistic refusal.
- Common collocations and verb/preposition patterns.
- Clarification, reformulation, evidence qualification, source synthesis and negotiation.

This sample does not establish that every sentence, distractor, explanation or translation across all 24 lessons is error-free. A qualified Spanish-language editor/teacher review remains valuable before any claim of formal CEFR validation.

## 4. CEFR alignment: strengths and gaps

The sequence broadly supports B2-oriented work with complex argument, professional/academic communication, source comparison, nuance, interaction and mediation. The closing assessment combines reception, production, interaction and mediation in a contextualised proposal task.

The Council of Europe's CEFR Companion Volume includes expanded descriptors and scales for mediation, online interaction and plurilingual/pluricultural competence, in addition to reception, production and interaction. B2 mediation descriptors include conveying detailed information and arguments from complex but well-structured texts in relevant fields. Spanish Seekho's source synthesis, stakeholder summary and proposal mediation tasks support parts of this direction.

**Remaining curriculum-level gap:** Module 27 now provides one explicit asynchronous online-interaction task and a speaking/pronunciation review rubric. These additions address the gap at the end-of-level assessment level, but a fuller online-interaction and phonological progression across the 24 core lessons would require a future curriculum revision. Browser TTS remains a model for listening, not pronunciation assessment.

Official references:
- Council of Europe, [CEFR Descriptors](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors).
- Council of Europe, [CEFR Companion Volume](https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2020/16809ea0d4).
- Council of Europe, [Mediation](https://www.coe.int/en/web/common-european-framework-reference-languages/mediation).

## 5. Source issues corrected during review

- The six core-unit index badges still said “IN DEVELOPMENT” despite all 24 lessons being available; corrected to “AVAILABLE”.
- The B2 index bottom navigation pointed to Lesson 24 as the latest available destination; changed to the B2 closing checkpoint (Module 28).
- Lessons 01–02 had 11 examples/audio controls; each now has 12, matching the lesson pattern.
- Module 27 lacked an explicit online interaction task and a structured speaking/pronunciation rubric; both are now included with local draft/rating persistence and no automated speech-scoring claim.
- Closing-module previous links now follow the intended 25 → 26 → 27 → 28 sequence.

## 6. Not tested / owner QA required

No real browser session or device interaction was performed. The following remain unverified:
1. Live URL rendering for all 28 routes after the latest v93 quality-refinement batch deploys.
2. Quiz answer selection, score feedback, retry/reload behaviour and completion persistence.
3. Draft autosave and restoration for Modules 25–27, including all three online-interaction turns and pronunciation reflection notes/ratings.
4. Speech synthesis availability, Spanish voice selection and transcript fallback on Android.
5. Responsive layout, navigation and touch targets on mobile.
6. Roman Urdu/Urdu RTL and mixed Spanish/English direction.
7. Keyboard navigation, focus visibility, semantic labels and screen-reader behaviour.
8. Service-worker update and offline route loading.
9. Human review of speaking, writing, pronunciation and mediation output.

B1 owner-run QA remains pending and is not waived.

## 7. Recommended next sequence

1. Confirm the latest index correction deploys successfully.
2. Complete owner-run browser/device QA using the existing B1 checklist plus the B2-specific items above; log reproducible defects rather than treating source checks as runtime proof.
3. Consider extending online interaction and phonological practice into selected B2 core lessons if time and scope allow; Module 27 now provides an end-of-level task and review rubric.
4. Obtain a qualified Spanish-language review of the full B2 corpus before describing the curriculum as formally CEFR-validated.
5. Only then finalise the C1 scope map, using the Companion Volume descriptors as the reference rather than simply increasing grammar difficulty.

**Status:** B2 content, source integration and the identified Module 27 refinements are implemented in the repository; latest v93 deployment confirmation, live/browser QA and formal pedagogical validation remain outstanding. Spanish Seekho is a learning resource, not an accredited CEFR examination or certificate.
