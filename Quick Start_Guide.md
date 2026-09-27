
  QUICK PLAY STARTER SECTION
=

This guide explains the absolute basics you need to know to start using the Chronicle Keeper Engine. <br>

**You do *not* have to read this guide**, as the Library script does briefly explain content and give example blocks for plug and play functionality, however this guide provides slightly more detail and fresh example blocks if you accidentally delete or completely annihilate your Quick Starter Section blocks!  

*Important: When using placeholders for player or NPC customisation, copy the exact "${...}" question from your scenario setup. Use that same placeholder wherever its answer should appear, including a Story Card if needed.<br>
Keep text fields in quotation marks. For example: description: "${Brief character description}. ${Personality traits?}". <br>
The wording inside each placeholder must exactly match the question the player is asked.*

**Starting Scene** <br>

This is the starter scene of the scenario, it is the very **first** lcoation that the player is dropped into, who they're with, and what time/ day it is in the scenario. <br>

  **location:** Broad location, region, city or settlement. <br>
  **area:** Specific building, room or immediate area.<br>
  **day:** Number of days into the story Example: 1.<br>
  **time:** Example: "Morning" or "Evening".<br>
  **present:** Full names of NPCs directly in the current scene. This can include the placeholder of any custom NPC's you let your player create on start up. ie: ${Ally's full name?} <br>
  **nearby:** Full names of NPCs nearby but not directly present.<br>

  **Example Starting Scene**

    scene: {
      location: "ASTERYC",
      area: "Player's House",
      day: "1",
      time: "MIDDAY",
      present: ["ALLYRA WINDWALKER", "KING THANDER", "${Ally's full name?}" ],
      nearby: ["BRUTUS", "QUEEN LARRISA"] 
    }

   **NPC Blocks**
   
   I've provided two example blocks in the library script that you can use, add, or delete. Copy these blocks where I have prompted in the script. These tell the engine which NPC's are main characters within the scenario.
   
   If you forget to add NPC's here, the engine will still track them if they are mentioned in the story or have a story card marked as 'Character' type, but they will be treated as minor NPCs and may be forgotten if not mentioned again.
    
  **name:** Full Character Name or identifying name/ character type if you're using a placeholder name. ie: Player, Villain, or Mentor for example. <br>
  **namePlaceholder:** Use this if there is a placeholder in the scenario for this character's name. ie: ${Ally's full name?}. you can leave it blank or delete the line if you're not using a placeholder for his character<br>
  **fallbackName:** Optional name the AI will default to. Helpful with placeholder tracking but not required and can be deleted.  <br>
  **description:** Player description here for personality, appearance, history, traits, etc. <br>
  **status:** Are they an active or inactive NPC? They could be important to the story, but not actively tracked. <br>
  **importance:** Are they a major or minor NPC? Major NPCs are tracked and remembered, minor NPCs are not. <br>
  **relationship:** What is their relationsdhip to the player? Presets are noted below <br>
  **relationshipTone:** This is optional. It can be left blank or deleted. Presets are below. <br>
  **relationshipOverride:** This is optional and can be deleted or altered to suit your NPC relationship to the player. It overrides the preset relationship values if you want to customise them. The indent does not matter, but the commas and brackets do. <br>
  **knows:** These are secrets that the NPC knows and the player does not, Use comma's and quotation marks to separate multiple secrets. <br>
  **goals:** These are goals that the NPC is pursuing, Use comma's and quotation marks to separate multiple goals. <br>

  **Example NPC Block Below**

    npc: [
      {
        name: "Allyra Windwalker",
        namePlaceholder: "${Ally's full name?}",
        fallbackName: "Ally",
        description: "Allyra is a skilled archer and member of the Windwalker clan. She is known for her keen eyesight and swift reflexes, making her a formidable opponent in battle. She has a strong sense of justice and is fiercely loyal to her friends. Her apprearance is marked by her long, flowing hair and the distinctive green cloak of her clan.",
        status: "active",
        importance: "major",
        relationship: "close_friend",
        relationshipTone: "strained",
        knows: ["Allyra knows a hidden passage through the forest that leads to a secret grove.", "She is secretly in love with the player character, but has not confessed her feelings, making the relationship strained sometimes."],
        goals: ["Save the Kingdom from the encroaching darkness.", "Find the lost artifact of the Windwalker clan."]
      }, << Remove comma if its the LAST npc block
    ]


 **RELATIONSHIP OPTIONS EXPLAINED**

   **Presets:** stranger, acquaintance, friend, close_friend, rival, enemy, hated_enemy, family, mentor, friends_with_benefits, lover, romantic_partner <br>

   **Optional tone:** warm, close, neutral, strained, hostile <br>
   **Optional overrides** This can be any stat and value. You can paste this line into the NPC block between relationshipTone and knows for higher customisation if my presets don't suit your scenario needs. The indent doesn't matter, but the commas and brackets do. <br>

  **Relationship presets and how to read them:** <br> 
  **familiarity:** is how familiar the player is with this character. Even enemies can know the other quite well. <br>
  **trust:** is how much the player trusts this character. Even family members can be untrustworthy. <br>
  **affection:** is how much the player likes this character. Even enemies can be liked, and friends can be disliked. <br>
  **respect:** is how much the player respects this character. Even enemies can be respected, and friends can be disrespected. <br>
  **attraction:** is how much the player is attracted to this character. Even enemies can be attractive. Enemies to lovers trope!  <br>
  **resentment:** is how much the player resents this character. Even mentors can be resented.<br>


**Threads and Quests**    

Threads are like Quests, they're story threads that the AI needs to track throughout the scenario. There can be none (And the AI will adopt any threads that come up during natural play and remember them) or as many as you like. <br>

**name:** Thread name here - This is like a quest name or a plot point. <br>
**aliases:** Alternative Thread Name. Use this in case your thread name is too long or needs a shorter version. ie: Optional model-safe synonyms. <br>
**type:** Is it a main or side quest? This only matters so the AI knows how to track it in the engine. <br>
**status:** Is it active (tracked), dormant (Inactive), resolved (Completed), failed (We all know the feeling), or abandoned (Declined)? <br> 
**importance:** 0–100; This is always a number. It is optional but recommended. 0 is low importance, 100 is high importance. <br>
**situation:** More information about the thread. This is a protected starting premise or situation that the player may not know yet. It is optional but recommended. <br>
**playerKnows:** This is the infomation that the player knows at the start of the quest <br> 

**Example Thread Blocks**

     threads: [
    {
      name: "King's Secret Mission",
      aliases: ["Save the Kingdom"],
      type: "main", 
      status: "active",
      importance: 95,
      situation: "There are rumors of a dark force threatening the kingdom. The king has secretly tasked the player with uncovering and stopping this threat before it can cause harm.",
      playerKnows: ["The king has given the player a secret mission to investigate the dark force.", "The player has been provided with a map leading to the suspected location of the threat."]
    }, << Remove the comma if it's the LAST block
    ]

**Player Truths and Canon** 

Protected creator canon. These are facts or truths that are not automatically player known but help keep the tone and progression of the story for the AI to remember.

Try to keep these factual as non variables to the scenario

**Example Canon Block**

    truths: [
      "EXAMPLE TRUTHS. Add quoted facts separated by commas.", 
      "Allyra is enagaged to a member of the Windwalker clan, but she has feelings for the player character.",
      "The Queen of the neighboring kingdom is secretly plotting against the player character's kingdom.",
      "Upon investiation the player discovers that the dark force is being led by a rogue sorcerer who was once a trusted advisor to the king." << removed comma on last canon.

    ]

**CHRONICLE KEEPER: LORE TRACKING**
   - A Character Story Card that is not noted above is adopted automatically and tracked as an NPC; every other card type is ignored.
   - A CE_SETUP NPC (Above NPC Blocks) that does not have a Story Card automatically adopts the exact-title Character Story Card or generates a new one.
   - Character-card titles containing { or } are treated as player/setup placeholders (Optional noted placeholders are in the NPC set up blocks).
   - The resolved player name is never adopted or listed as a present/nearby NPC.
   - Creator card text and triggers are preserved. Lore only maintains its labelled profile block.
   - Knows and goals are preserved in the profile block, but not automatically added to the story unless the NPC is present in the scene.
   - Optional player command: [alias:Full Character Name=Nickname]
   - Optional relationship command: [relationship:Full Character Name=friend]
   - Memory commands: [memory:Full Character Name] and [summarise:Full Character Name]
   - Inspection command: [lore]

**PLAYER COMMANDS**

**Help**
- [help] <br>
Generates a story card with player command guide

- [commands] <br>
Generates a story card with player command guide

**Inspect** 
- [where] <br>
Show where you are, how many days it's been, what time it is, and who is with your player. 
- [threads] <br>
Show a log of current threads or quests
- [state] <br>
Show totals for all tracked lore
- [lore] <br>
Show the story cards and memory status
- [relationships:Full Character Name] <br>
Show the current stats for an NPC's relationship with the player

- [memory:Full Character Name] <br>
Show a summary of the NPC's current memories 

**Manage** 
- [alias:Full Character Name=Nickname] <br> 
Add a nickname to a character
- [relationship:Full Character Name=preset] <br> 
Reset or change a characters relationship preset with the player
- [keep:Character Name] [major:Character Name] <br> 
Keep or make the NPC a permanent and tracked major character 
- [forget:Character Name] <br> 
Untrack and revert NPC to temporary tracking
- [track:Thread Name] <br> 
Add a thread or quest to your tracked roation
- [drop:Thread Name] <br> 
Make a thread dormant (Inactive)

- [summarise:Full Character Name] OR [summarize:Full Character Name] <br> 
Manually push an update for the NPC's memory and have it summarised for the player 
