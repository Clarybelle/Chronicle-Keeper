# Changelog

All notable changes to Chronicle Keeper are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses semantic-style version numbering during development.

## [1.4.8] - 2026-09-04

### Added

- Conservative narration fallback for completed NPC departures.
- Automatic removal of a clearly departing named NPC from both `present` and `nearby`, even when the model returns a stale private roster.
- Detection and scrubbing for displaced CE operations missing their closing parenthesis.
- Regression coverage for completed, attempted and negated departures.

### Fixed

- NPCs remaining indefinitely in the nearby roster after visibly leaving the venue.
- Malformed or unclosed private continuity packets leaking into visible story output.
- Continue sequences occasionally exposing private CE metadata.

### Preserved

- Attempted, interrupted or negated departures do not remove an NPC.
- Existing command isolation, placeholder resolution, Story Card protection, memory consolidation and thread safeguards.

## [1.4.7] - 2026-09-04

### Added

- Configurable emergent-thread confirmation through `threadTracking.confirmationTurns`.
- Limits for new threads per turn, active emergent threads and total stored emergent threads.
- Candidate staging so a new automatic thread must recur across distinct turns before promotion.
- Thread aliases and conservative semantic matching for synonymous thread names.
- Duplicate-thread migration and merging.
- Protection preventing an alias or temporary phase from incorrectly resolving its creator-protected parent thread.
- Recognition and removal of transient social threads better handled by NPC relationship memory.

### Fixed

- Minor conversations, flirtation, rivalry tension and one-scene interactions generating excessive plot threads.
- Similar thread names creating multiple copies of the same ongoing plot.
- Standalone commands leaving visible dots or punctuation in the story.
- Continue after a command treating the administrative panel as a narrative event.
- Displaced operation fragments and known private instruction echoes appearing in story prose.

## [1.4.6] - 2026-09-04

### Changed

- The `[where]` panel now labels the resolved player separately.
- Scene lists are explicitly labelled `Present NPCs` and `Nearby NPCs`.
- Empty NPC rosters display `None` instead of `Unknown`.

## [1.4.5] - 2026-09-04

### Added

- Creator-configurable player placeholder resolution supporting arbitrary scenario question wording.
- Fallback player names when a placeholder answer is unavailable.
- Optional renameable creator NPCs through `namePlaceholder` and `fallbackName`.
- Recursive placeholder replacement across creator setup content.
- Migration-time player identity synchronisation.

### Fixed

- The resolved player being adopted as an NPC from a placeholder Story Card.
- The player appearing in `present` or `nearby` NPC rosters.
- Managed Chronicle Keeper content remaining attached to a Story Card that resolves to the player.
- Duplicate player/NPC records caused by placeholder wording differences.

## [1.4.4] - 2026-09-04

### Added

- `[help]` and `[commands]` player commands.
- Automatic creation or updating of the `Chronicle Keeper — Player Commands` Story Card.
- A compact in-adventure command reference containing inspection, relationship, NPC, thread and memory commands.
- Protection preventing the command reference card from being adopted as an NPC.

## [1.4.3] - 2026-09-04

### Added

- Initial neutral creator template used as the baseline for the current release series.
- Structured scene tracking for location, area, day, time, present NPCs and nearby NPCs.
- Creator and emergent NPC tracking.
- Relationship presets and six relationship axes.
- Creator-protected threads and canon truths.
- Character Story Card adoption, reuse and managed profile synchronisation.
- Recent NPC development notes and automatic long-term memory consolidation.
- Player inspection and management commands.
- Separate Library, Context, Input and Output script architecture.

## Release policy

- Creator-defined NPCs, threads and truths remain protected during migration.
- Existing adventure state is migrated when a compatible newer engine is loaded.
- Scenario-specific editions may contain their own setup content, but the shared engine should remain identical to the neutral release of the same version.

