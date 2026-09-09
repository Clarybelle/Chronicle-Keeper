![Chronicle Keeper](assets/chronicle-keeper-banner.png)

=========================================================================================
CHRONICLE KEEPER V1.4.8
AI DUNGEON CONTINUITY, LORE, MEMORY AND RELATIONSHIP ENGINE
=======================================================================================
Chronicle Keeper is a reusable scripting system for AI Dungeon scenarios.
It maintains structured continuity behind the story while leaving the visible
output as normal narrative.

It can track:

- Current location, area, day and time.
- Named NPCs who are present or nearby.
- NPC identities, aliases, importance and status.
- Relationship types and six relationship scores.
- Durable plot threads, quests, mysteries, threats and contracts.
- Protected creator canon and facts revealed during play.
- Recent NPC developments and consolidated long-term memory.
- Character Story Cards, including creator-made and emergent NPC cards.

Chronicle Keeper does not write a predetermined story. It records and returns
relevant continuity so the AI can continue the player's story more reliably.




====================================================================================

> **1. PACKAGE CONTENTS AND INSTALLATION**


Chronicle Keeper uses four AI Dungeon script sections:

1. LIBRARY
   Paste the complete Chronicle Keeper Library into the Library
   section. This contains CE_SETUP and the engine.

2. CONTEXT
   Paste the Chronicle Keeper Context Modifier into the Context section.
   It injects the current structured continuity into the AI's context.

3. INPUT
   Paste the Chronicle Keeper Input Modifier into the Input section.
   It detects player commands and prevents standalone commands from becoming
   story prose.

4. OUTPUT
   Paste the Chronicle Keeper Output Modifier into the Output section.
   It reads the private continuity operation, updates the saved state, removes
   private metadata and returns the visible story.

The V1.4.4 Context, Input and Output modifiers remain compatible with V1.4.8.
Their small wrapper code has not required functional changes. The Library
script contains the versioned engine and should be replaced when upgrading.

IMPORTANT:

- Keep only one Chronicle Keeper engine in the Library section.
- Do not paste the full engine into Context, Input or Output.
- Do not combine two scenario-specific Chronicle Keeper Library scripts.
- Replace the old Library script when upgrading; do not paste the new version
  beneath it.
- Do not edit below the ENGINE START marker unless you are deliberately
  modifying the engine.


====================================================================================

> **2. WHAT EACH SECTION DOES**


LIBRARY SCRIPT

Contains the editable CE_SETUP block and the complete engine. It creates and
migrates the saved Chronicle Keeper state, manages characters, relationships,
threads, canon, memory and Story Cards, and supplies the functions used by the
three modifiers.

CONTEXT MODIFIER

Adds private Chronicle Keeper instructions and the most relevant current state
to the model's context before generation. This includes the scene, recent or
important NPCs, active threads, protected truths and any queued memory task.

INPUT MODIFIER

Intercepts bracketed player commands. A command used by itself is replaced by
an invisible marker so it does not become dialogue or an action. Commands may
inspect or manually adjust tracked information.

OUTPUT MODIFIER

Consumes the private CE operation produced by the model, applies legitimate
updates, removes the operation from the visible output and returns the story.
It also removes leaked instruction fragments and performs conservative scene
departure reconciliation when a named NPC explicitly leaves the venue.


==================================================================================== 
> **3. CREATOR SETUP GUIDE**


Only edit the CE_SETUP block above ENGINE START.


> **3.1 GENERAL SETTINGS**


continuityMode: "silent"
world: "living"

These fields are retained for compatibility and future expansion. In V1.4.8,
changing them does not materially change engine behaviour.

relationshipPacing: "natural"

Controls the maximum relationship movement permitted in one update:

- "slow"     permits fewer relationship axes to change.
- "natural"  is the recommended default.
- "dramatic" permits more axes and slightly larger changes.

Relationship changes still require story evidence. Routine presence alone
does not increase affection, trust or attraction.

contextBudget: 5500

Maximum approximate number of characters Chronicle Keeper aims to use in its
injected context. This is a character budget, not a token count. Lowering it
saves context space but may include fewer NPC and thread details. Increase it
only when the selected AI model has sufficient context capacity.


> **3.2 MEMORY SETTINGS**


memory.enabled
Turns automatic NPC memory consolidation on or off.

memory.noteThreshold
Number of recent durable developments required before automatic consolidation
is queued. Allowed range: 3 to 10. Default: 5.

memory.summaryMaxChars
Maximum length of each consolidated long-term NPC summary. Allowed range:
180 to 500 characters. Default: 360.

memory.maxPendingNotes
Maximum recent notes retained while waiting for consolidation. It cannot be
lower than noteThreshold and is capped at 16. Default: 10.

memory.cooldownTurns
Minimum delay between automatic summaries for the same NPC. Allowed range:
1 to 20 turns. Default: 3.

Only verified, durable developments should become notes. Ordinary positioning,
small talk and routine presence are deliberately excluded.


> **3.3 THREAD TRACKING SETTINGS**


threadTracking.confirmationTurns
Number of distinct turns on which a genuinely new emergent thread must be
reported before it is retained. Allowed range: 1 to 5. Default: 2.

The model may take additional story turns to recognise and repeat the thread,
so a new thread can appear after approximately 3 to 4 turns in ordinary play.
Creator threads and threads added with [track:Thread Name] do not wait for
automatic confirmation.

threadTracking.maxNewPerTurn
Maximum new emergent threads promoted in one turn. Allowed range: 1 to 3.
Default: 1.

threadTracking.maxActiveEmergent
Maximum active automatically discovered threads. Allowed range: 1 to 12.
Default: 5.

threadTracking.maxStoredEmergent
Maximum automatically discovered threads retained across all statuses.
Allowed range: maxActiveEmergent to 24. Default: 10.

Threads are reserved for durable matters requiring future action: quests,
mysteries, threats, investigations, contracts and unresolved plot goals.
Conversation, flirtation, rivalry tension, moods and one-scene interactions
belong in NPC developments rather than becoming separate plot threads.


> **3.4 LORE AND STORY CARD SETTINGS**


lore.enabled
Enables Chronicle Keeper Story Card integration.

lore.reuseMatchingCards
Allows an existing exact-title Character card to be linked instead of creating
a duplicate.

lore.creatorNPCs
Creates or links Character cards for NPCs defined in CE_SETUP.

lore.emergentNPCs
Allows qualifying NPCs discovered during play to receive Character cards.

lore.emergentMentions
Number of distinct turns on which an emergent NPC must be meaningfully detected
before receiving a card. Allowed range: 1 to 10. Default: 2.

lore.includeRelationshipStats
Includes the six numeric relationship scores in managed Character profiles.

lore.includeSurnameTriggers
Adds a surname as a trigger only when it safely identifies one character.

lore.ignoreCardTitles
Add the exact titles of Character-type cards Chronicle Keeper must ignore.
Use this for custom player holders, templates or unusual setup cards.

Example:

ignoreCardTitles: ["Player Setup", "Choose Your Character"]

Chronicle Keeper reads only cards whose type is Character. Other card types are
ignored. Placeholder titles containing { or }, common player-card titles and
the resolved player's name are also excluded from NPC adoption.

Chronicle Keeper modifies only its labelled managed profile and memory blocks.
Creator-written card content and safe player notes are preserved. The AI
Dungeon Story Card entry limit is 1000 characters, so very full cards may use
a compact managed profile.


> **3.5 PLAYER NAME AND PLACEHOLDERS**


Copy the exact player-name placeholder used by the scenario:

player: {
  name: "${What is your name?}",
  fallbackName: "Player"
}

Any prompt wording is supported. The text inside ${...} must match the
scenario's placeholder question. These are all valid when they match the
actual scenario prompt:

${What is your name?}
${Tell me your name}
${Choose your character's name}

The resolved player is excluded from NPC tracking and from the present/nearby
NPC rosters. fallbackName is used only if the placeholder cannot be resolved.

Do not add "Players", "Player", "NPCs" or another faction/group label to the
scene roster. The roster is for individually named non-player characters.


> **3.6 STARTING SCENE**


scene: {
  location: "",
  area: "",
  day: "",
  time: "",
  present: [],
  nearby: []
}

location
Broad location, region, city or settlement.

area
The specific building, room or immediate area.

day and time
Starting story time. Write day as "1", not "Day 1".

present
Full names of NPCs directly participating in the current scene.

nearby
Full names of NPCs close enough to matter but not directly present.

An NPC cannot remain in both lists. Chronicle Keeper makes the rosters
disjoint and removes the resolved player automatically.

V1.4.8 also reconciles explicit departures from visible narration. When a
named rostered NPC clearly leaves the current venue or disappears into another
district, the engine removes them from both lists even if the model mistakenly
keeps them in its private roster. Attempted, interrupted or negated departures
do not remove the NPC.


> **3.7 CREATOR NPCS**


Copy one NPC object for each important starting character:

{
  name: "Full Character Name",
  description: "Concise factual character description.",
  status: "active",
  importance: "major",
  relationship: "acquaintance",
  knows: [],
  goals: []
}

name
Required. Use the character's complete, consistent name.

description
Stable identity, role, appearance, temperament and relevant public facts.
Avoid scene-specific prose and future predictions.

status
Usually "active". May be changed later as the story develops.

importance
Common values are "temporary", "recurring" and "major". Creator NPCs are
protected and persistent.

relationship
Starting relationship preset between this NPC and the player.

knows
Facts known by the NPC. These are not automatically known by the player.

goals
Durable motivations or objectives that should guide the NPC.

RENAMEABLE NPC EXAMPLE

{
  name: "Default Villain Name",
  namePlaceholder: "What is the Villain's name?",
  fallbackName: "Default Villain Name",
  description: "The scenario's central antagonist.",
  relationship: "enemy",
  knows: ["A protected secret"],
  goals: ["Prevent the player from discovering the truth"]
}

namePlaceholder may be written as either the question itself or the complete
${...} placeholder. The resolved name is applied throughout the NPC's setup,
including description, knows and goals where the same placeholder appears.


> **3.8 RELATIONSHIP OPTIONS**


Available presets:

- stranger
- acquaintance
- friend
- close_friend
- rival
- enemy
- hated_enemy
- family
- mentor
- friends_with_benefits
- lover
- romantic_partner

Optional relationshipTone values:

- warm
- close
- neutral
- strained
- hostile

Optional relationshipOverride can set specific starting scores:

relationshipOverride: {
  trust: 35,
  attraction: 70
}

Tracked axes are familiarity, trust, affection, respect, attraction and
resentment. Values are clamped between 0 and 100.


> **3.9 CREATOR THREADS**


{
  name: "Thread Name",
  aliases: ["Alternative Thread Name"],
  type: "main",
  status: "active",
  importance: 90,
  situation: "Protected starting premise or situation.",
  playerKnows: []
}

name
Required authoritative thread name.

aliases
Optional safe synonyms the model may use. Aliases help updates reach the
existing thread instead of creating a duplicate.

type
"main" or "side".

status
"active", "dormant", "resolved", "failed" or "abandoned".

importance
0 to 100. Main threads default to 90 and side threads to 55.

situation
Protected starting premise. Later situation updates record progress without
rewriting this creator-defined foundation.

playerKnows
Facts about the thread already known by the player at the beginning.


> **3.10 PROTECTED TRUTHS**


truths: [
  "A protected fact about the world",
  "A secret not yet known by the player"
]

Creator truths are protected canon. They are not automatically treated as
player knowledge. The engine may later mark a truth as revealed when the story
actually provides evidence.


====================================================================================
> **4. PLAYER COMMANDS**


Use one command by itself. After Chronicle Keeper displays the result, press
Continue to resume the story. V1.4.8 prevents the command turn and its panel
from being treated as narrative.

[where]
Shows current location, area, day, time, resolved player name, present NPCs and
nearby NPCs.

[threads]
Lists tracked plot threads, their statuses and current developments.

[state]
Shows the current turn and totals for characters, threads and canon truths.

[lore]
Shows Story Card integration, linked/eligible character totals, emergent NPC
threshold and queued memory information.

[relationships:Full Character Name]
Shows the NPC's relationship preset, aliases and six numeric relationship
scores. A unique established alias may also be used.

[memory:Full Character Name]
Shows the NPC's consolidated long-term summary, recent durable developments,
automatic threshold and summary count. This command inspects memory; it does
not force a new summary.

[alias:Full Character Name=Nickname]
Adds a safe alias to an already tracked NPC. Unsafe, ambiguous or duplicate
aliases are rejected.

[relationship:Full Character Name=preset]
Resets the NPC's relationship to one of the supported presets. This is a direct
manual change, not a gradual story update.

[keep:Character Name]
Creates or retains an NPC as a persistent major character.

[major:Character Name]
Same practical result as [keep:Name]: the NPC is retained as major.

[forget:Character Name]
Returns a non-creator NPC to temporary tracking. It does not instantly erase
the NPC. Creator-protected NPCs cannot be forgotten with this command.

[track:Thread Name]
Immediately creates or reactivates a plot thread. This bypasses automatic
emergent-thread confirmation.

[drop:Thread Name]
Marks a tracked thread as dormant. It does not delete its history.

[summarise:Full Character Name]
Queues long-term memory consolidation using the NPC's existing recent notes.
The US spelling [summarize:Name] also works. Nothing is queued when the NPC has
no recent durable developments.

[help]
[commands]
Creates or updates a Story Card titled "Chronicle Keeper — Player Commands"
and displays the command list. The command card uses the Other card type and
is excluded from NPC adoption.


====================================================================================
> **5. AUTOMATIC BEHAVIOUR AND EXPECTED DELAYS**


Chronicle Keeper depends on the selected AI model to emit private structured
updates. It then validates, limits and stores those updates. Not every change
will appear in a panel on the immediately following turn.

Typical behaviour:

- Explicit scene movement should update immediately.
- V1.4.8 explicit-departure reconciliation removes a clearly departing named
  NPC immediately, even if the private roster is stale.
- An emergent NPC normally requires meaningful detection on two distinct turns
  before a Story Card is created.
- A genuinely new automatic plot thread must recur before promotion and may
  take approximately 3 to 4 story turns to appear.
- [track:Thread Name] adds a thread immediately when the player does not want
  to wait for automatic confirmation.
- Relationship movement is deliberately gradual and evidence-based.
- Automatic long-term memory begins after the configured note threshold and
  may complete on a later generation when the model returns the requested
  consolidated summary.


====================================================================================
> **6. STORY CARD SAFETY**


- Only Character-type cards are eligible for NPC adoption.
- Existing matching Character cards are reused when enabled.
- The resolved player's name is excluded from NPC adoption.
- Placeholder and common player/template card titles are excluded.
- Add unusual player-card titles to lore.ignoreCardTitles.
- Chronicle Keeper's Player Commands card uses the Other type.
- Managed profile and memory sections are labelled.
- Keep personal additions beneath the safe-to-edit notes heading.
- Do not remove or manually duplicate Chronicle Keeper's management markers.
- Character-card entries are capped at AI Dungeon's 1000-character limit.


====================================================================================
> **7. TROUBLESHOOTING**


PLAYER SHOWS AS "UNKNOWN" OR "PLAYER"

- Confirm CE_SETUP.player.name contains the exact scenario placeholder.
- Match the text inside ${...}, including the actual wording.
- Confirm the player answered the placeholder when starting the adventure.
- Set a sensible fallbackName.

THE PLAYER APPEARS AS A NEARBY NPC

- Do not put the player placeholder or resolved player name in scene.present or
  scene.nearby.
- Do not use generic "Players" or "NPCs" faction labels in either roster.
- Add any unusual player Character-card title to lore.ignoreCardTitles.

AN NPC TAKES TIME TO RECEIVE A STORY CARD

This is expected for emergent NPCs. The default requires meaningful detection
on two distinct turns. Use [keep:Full Name] when immediate persistent tracking
is required.

AN NPC REMAINS PRESENT OR NEARBY AFTER LEAVING

Use V1.4.8 or later. Clearly state the named NPC leaves the current venue. The
departure fallback recognises explicit completed movement, but deliberately
ignores attempts, uncertainty and interrupted departures.

A THREAD TAKES SEVERAL TURNS TO APPEAR

Automatic confirmation is deliberately conservative to prevent twenty minor
moments becoming twenty plot threads. Approximately 3 to 4 turns can be
normal. Use [track:Thread Name] for immediate manual tracking.

TOO MANY THREADS APPEAR

- Keep confirmationTurns at 2 or higher.
- Keep maxNewPerTurn at 1.
- Reduce maxActiveEmergent if required.
- Use [drop:Thread Name] for threads no longer active.
- Ensure ordinary relationship or conversation events are not defined as
  creator threads.

A COMMAND PRODUCES A DOT OR AFFECTS THE NEXT CONTINUE

Use V1.4.8 and enter the command by itself. Wait for its Chronicle Keeper panel,
then press Continue. The invisible command marker and resume protection prevent
the administrative turn from becoming story prose.

PRIVATE CE SCRIPTING APPEARS IN THE STORY

V1.4.8 scrubs complete, displaced, fragmented, malformed and unclosed CE
operations plus known instruction echoes. If a selected model produces a new
leak format, erase or retry that output and record the exact leaked text so the
scrubber can be extended safely.

A STORY CARD DOES NOT UPDATE

- Confirm the card type is Character.
- Confirm lore.enabled is true.
- Check [lore] for linked and eligible totals.
- Confirm the title matches the tracked NPC's full name.
- Very full cards may receive a compact profile because entries are limited to
  1000 characters.
- [memory:Name] shows ledger memory even when a card has no room to display the
  full managed section.


====================================================================================
> **8. UPGRADING**


To upgrade an existing scenario or adventure:

1. Make a backup of the current Library script.
2. Replace the complete old Library script with the new version.
3. Preserve or reapply the scenario's customised CE_SETUP block.
4. Do not paste two engines together.
5. Leave the compatible Context, Input and Output modifiers in their correct
   sections unless the release specifically supplies replacements.
6. Run [where], [threads], [lore] and [state] to check migrated state.
7. Continue the story and confirm the visible output contains no CE metadata.

Chronicle Keeper migrates an existing state.ce structure during initialisation.
Creator setup changes do not necessarily erase story developments already
recorded in the adventure state.


====================================================================================
> **9. PRIVACY AND PUBLIC DISTRIBUTION**


Chronicle Keeper V1.4.8 makes no external network requests. Its continuity
state is stored in the AI Dungeon adventure state and, when enabled, reflected
in Story Cards available to the scenario or adventure.

Public filenames:

- Chronicle_Keeper_Library.js
- Chronicle_Keeper_Context.js
- Chronicle_Keeper_Input.js
- Chronicle_Keeper_Output.js
- README.md
- CHANGELOG.md
- LICENSE

Chronicle Keeper is released under the included MIT License. Players and other
creators may use, copy, modify, merge, publish and redistribute the scripting,
including modified versions, provided the copyright and licence notice remain
with copies or substantial portions of the software. See the LICENSE file for
the complete legal terms and warranty disclaimer.

ORIGINAL CREATOR AND ATTRIBUTION

Chronicle Keeper was originally created by Clarybelle and is released under
the MIT License.

When copying, publishing or distributing Chronicle Keeper or a substantial
portion of its scripting, retain the included copyright and MIT License notice.

Suggested public credit:

"Based on Chronicle Keeper by Clarybelle. Modified by [your name or username]."

====================================================================================
> **10. V1.4.8 RELEASE NOTES**


- Added conservative explicit NPC departure reconciliation.
- A named NPC clearly leaving the venue is removed from both present and
  nearby even when the model returns a stale private roster.
- Negated, attempted and interrupted departures do not eject the NPC.
- Expanded metadata protection to scrub displaced or unclosed CE operations.
- Preserved command-to-Continue isolation and dot prevention.
- Preserved placeholder resolution for arbitrary scenario prompt wording.
- Preserved automatic Story Card memory updates and managed card protections.
- Preserved conservative emergent thread confirmation and storage limits.
- Regression-tested commands, placeholders, thread merging, relationships,
  long-term memory, Story Cards, scene movement and leak scrubbing.


====================================================================================
> **11. QUICK START CHECKLIST**


[ ] Paste the neutral V1.4.8 engine into Library.
[ ] Paste the Context modifier into Context.
[ ] Paste the Input modifier into Input.
[ ] Paste the Output modifier into Output.
[ ] Edit only CE_SETUP above ENGINE START.
[ ] Match the player placeholder question exactly.
[ ] Add only named NPCs to present and nearby.
[ ] Add important creator NPCs, threads and protected truths.
[ ] Add unusual player-card titles to ignoreCardTitles.
[ ] Start a test adventure.
[ ] Run [where], [threads], [lore], [state] and [help].
[ ] Test one NPC arrival and completed departure.
[ ] Test one relationship development.
[ ] Test one automatic or manually tracked thread.
[ ] Press Continue after a command and confirm normal story resumes.
[ ] Confirm no private CE operation appears in visible output.

=========================================
END OF README — CHRONICLE KEEPER V1.4.8
=========================================


[def]: assets/chronicle-keeper-banner.png
