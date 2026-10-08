/* ==============================================================
   CHRONICLE KEEPER V1.5.1 — NEUTRAL CREATOR TEMPLATE

   QUICK START is below this initial section. 
   Edit this SETUP block. Copy/paste NPC and thread blocks freely.
   Everything except an NPC/thread name is optional.
   Do not edit below ENGINE START unless you enjoy preventable pain.
   ============================================================== */

    // Feel free to IGNORE this section for QUICK PLAY.
var CE_SETUP = {
  settings: {
    continuityMode: "silent",       // silent | guided | manual
    world: "living",                // living | static
    relationshipPacing: "natural",  // slow | natural | dramatic
    relationshipEvolution: true,    // labels follow earned scores; false keeps labels manual
    contextBudget: 5500,

    // Long-term NPC memory. New developments remain as recent notes until
    // the model successfully consolidates them into a durable summary.
    memory: {
      enabled: true,
      noteThreshold: 5,
      summaryMaxChars: 360,
      maxPendingNotes: 10,
      cooldownTurns: 3
    },

    // Emergent plot threads must recur before they are retained. Creator
    // threads and threads added with [track:Name] are always protected.
    threadTracking: {
      confirmationTurns: 2,
      maxNewPerTurn: 1,
      maxActiveEmergent: 5,
      maxStoredEmergent: 10
    },

    // Lore only reads cards whose type is Character. Other card types
    // are ignored. Existing Character cards are preserved and safely reused.
    lore: {
      enabled: true,
      reuseMatchingCards: true,
      creatorNPCs: true,
      emergentNPCs: true,
      emergentMentions: 2,
      includeRelationshipStats: true,
      includeSurnameTriggers: true,
      ignoreCardTitles: [] // Add any custom player/template card titles here.
    }
  },

/* ==================================
  QUICK PLAY STARTER SECTION
===================================== */

  // THIS SETS YOUR PLAYERS NAME SO THE ENGINE CAN RECOGNISE IT. It is optional but recommended.
  // Copy the exact player-name placeholder used by the Scenario.
  // Any wording is supported as long as it matches the text inside the placeholder. ie: ${EXAMPLE TEXT}.
  player: {
    name: "${What is your name?}",
    fallbackName: "Player"
  },

  // THIS IS THE STARTING SCENE OF YOUR SCENARIO. I HAVE FILLED OUT AN EXAMPLE. 
  // Please delete the words in my example and set your own. 
  scene: {
    location: "EXAMPLE TOWN OR KINGDOM NAME - ASTERYC", // Broad location, region, city or settlement.
    area: "EXAMPLE AREA - Player's House",     // Specific building, room or immediate area.
    day: "NUMBER OF DAYS INTO THE STORY - USUALLY JUST 1",      // Example: "1".
    time: "EXAMPLE TIME OF DAY - MIDDAY",     // Example: "Morning" or "Evening".
    present: ["EXAMPLE NAMES", "ALLYRA WINDWALKER", "KING THANDER" ],  // Full names of NPCs directly in the current scene.
    nearby: ["EXAMPLE NERABY NPC", "BRUTUS", "QUEEN LARRISA"]    // Full names of NPCs nearby but not directly present.
  },

    // EXAMPLE NPC BLOCKS — I've provided two blocks that you can use, add, or delete. Copy these blocks inside the array, remove the comment markers, and separate multiple NPC blocks with commas.
    // If you forget to add NPC's here, the engine will still track them if they are mentioned in the story, but they will be treated as minor NPCs and may be forgotten if not mentioned again.
    npcs: [

    {
      name: "EXAMPLE Full Character Name",
      namePlaceholder: "Use this is there is a placeholder in the scenario for this character's name.",
      fallbackName: "Optional name to default to",
      description: "Player description here for personality, appearance, history, traits, etc.",
      status: "Are they an active or inactive NPC? They could be important to the story, but not actively tracked.",
      importance: "Are they a major or minor NPC? Major NPCs are tracked and remembered, minor NPCs are not.",
      relationship: "What is their relationship to the player? Presets are below",
      relationshipTone: "This is optional. It can be left blank or deleted. Presets are below.",
      relationshipOverride: { trust: 80, attraction: 72 }, // This is optional and can be deleted or altered to suit your NPC relationship to the player. It overrides the preset relationship values if you want to customise them. The indent does not matter, but the commas and brackets do.
      knows: ["These are secrets that the NPC knows and the player does not.", "Use comma's and quotation marks to separate multiple secrets."],
      goals: ["These are goals that the NPC is pursuing", "Use comma's and quotation marks to separate multiple goals."]
    },

    // DELETE THIS LINE AND PASTE THE BLOCK ABOVE AS ADDITIONAL NPC BLOCKS AS NEEDED (Include from first { to last }, as it has the Comma). You can add as many NPCs as you like. Feel free to edit my example below too.

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
    }

  ],

  /* RELATIONSHIP OPTIONS EXPLAINED

   Presets: stranger, acquaintance, friend, close_friend, rival, enemy, hated_enemy, family, mentor, friends_with_benefits, lover, romantic_partner
   Presets set the six starting scores. With relationshipEvolution true, earned score changes can move a label in either direction as gates are met. Family stays fixed.

   Optional tone: warm, close, neutral, strained, hostile
   Optional overrides: This can be any stat and value. You can paste this line into the NPC block between relationshipTone and knows for higher customisation if my presets don't suit your scenario needs. The indent doesn't matter, but the commas and brackets do.
     relationshipOverride: { affection: 35, resentment: 10 }, 

     Relationship presets and how to read them:
      familiarity: is how familiar the player is with this character. Even enemies can know the other quite well.
      trust: is how much the player trusts this character. Even family members can be untrustworthy. 
      affection: is how much the player likes this character. Even enemies can be liked, and friends can be disliked. 
      respect: is how much the player respects this character. Even enemies can be respected, and friends can be disrespected. 
      attraction: is how much the player is attracted to this character. Even enemies can be attractive. Enemies to lovers trope!  
      resentment: is how much the player resents this character. Even mentors can be resented.

     */

  // EXAMPLE THREAD — copy this block inside the array, remove the comment markers, and separate multiple thread blocks with commas.
  threads: [

    {
      name: "Thread name here - This is like a quest name or a plot point.",
      aliases: ["Alternative Thread Name. Use this in case your thread name is too long or needs a shorter version."], // Optional model-safe synonyms.
      type: "Is it a main or side quest?",            // main | side
      status: "Is it active, dormant, resolved, failed, or abandoned?",        // active | dormant | resolved | failed | abandoned
      importance: 30,          // 0–100; This is always a number. It is optional but recommended. 0 is low importance, 100 is high importance.
      situation: "More information about the thread. This is a protected starting premise or situation that the player may not know yet. It is optional but recommended.",
      playerKnows: ["This is the infomation that the player character already knows about this quest.", "There can be multiple entries." ]
    },

    // DELETE THIS LINE AND PASTE THE BLOCK ABOVE AS ADDITIONAL THREAD BLOCKS AS NEEDED (Include from first { to last }, as it has the Comma). You can add as many THREADS as you like. Feel free to edit my example below too.

    {
      name: "King's Secret Mission",
      aliases: ["Save the Kingdom"], // Optional model-safe synonyms.
      type: "main",            // main | side
      status: "active",        // active | dormant | resolved | failed | abandoned
      importance: 95,          // 0–100; optional
      situation: "There are rumors of a dark force threatening the kingdom. The king has secretly tasked the player with uncovering and stopping this threat before it can cause harm.",
      playerKnows: ["The king has given the player a secret mission to investigate the dark force.", "The player has been provided with a map leading to the suspected location of the threat."]
    }

  ],

  // Protected creator canon. These facts or truths that are not automatically player-known but help keep the tone and progression of the story for th AI to remember.
  truths: [
    "EXAMPLE TRUTHS. Add quoted facts separated by commas.", 
    "Allyra is enagaged to a member of the Windwalker clan, but she has feelings for the player character.",
    "The Queen of the neighboring kingdom is secretly plotting against the player character's kingdom.",
    "Upon investiation the player discovers that the dark force is being led by a rogue sorcerer who was once a trusted advisor to the king."

  ]
};

/* CHRONICLE KEEPER: LORE
   - A Character Story Card that is not noted above is adopted automatically and tracked as an NPC; every other card type is ignored.
   - A CE_SETUP NPC (Above NPC Blocks) that does not have a Story Card automatically adopts the exact-title Character Story Card or generates a new one.
   - Character-card titles containing { or } are treated as player/setup placeholders (Optional noted placeholders are in the NPC set up blocks).
   - The resolved player name is never adopted or listed as a present/nearby NPC.
   - Creator card text and triggers are preserved. Lore only maintains its labelled profile block.
   - Knows and goals are preserved in the profile block, but not automatically added to the story unless the NPC is present in the scene.
   - Optional player command: [alias:Full Character Name=Nickname]
   - Optional relationship command: [relationship:Full Character Name=friend]
   - Memory commands: [memory:Full Character Name], [summarise:Full Character Name],
     [pin:Full Character Name=lasting event], [unpin:Full Character Name=event excerpt]
   - Inspection command: [lore]
*/

/* PLAYER COMMANDS
   Help:    [help] [commands]
   Inspect: [where] [threads] [state] [lore]
            [relationships:Full Character Name] [gate:Full Character Name]
            [memory:Full Character Name]
   Manage:  [alias:Full Character Name=Nickname]
            [relationship:Full Character Name=preset]
            [keep:Character Name] [major:Character Name] [forget:Character Name]
            [track:Thread Name] [drop:Thread Name]
            [summarise:Full Character Name] ("summarize" also works)
            [pin:Full Character Name=lasting event]
            [unpin:Full Character Name=event excerpt]
*/

/* ========================== ENGINE START ========================== */

var CE = (function () {
  var VERSION = "1.5.1";
  var CARD_ENTRY_LIMIT = 1000;
  var COMMAND_SENTINEL = "\u2063"; // Invisible separator: keeps command turns out of the visible story.
  var LORE_PROFILE_OPEN = "[CK LORE PROFILE]";
  var LORE_PROFILE_CLOSE = "[/CK LORE PROFILE]";
  var LORE_MARKER_PREFIX = "[CK-LORE:";
  var LEGACY_PROFILE_OPEN = "[CONTINUITY ENGINE PROFILE]";
  var LEGACY_PROFILE_CLOSE = "[/CONTINUITY ENGINE PROFILE]";
  var LEGACY_MARKER_PREFIX = "[CE-MANAGED:";
  var PLAYER_NOTES_HEADING = "[PLAYER NOTES — SAFE TO EDIT FROM HERE ONWARDS]";
  var PLAYER_NOTES_NOTICE = PLAYER_NOTES_HEADING + "\nChronicle Keeper preserves everything below this line.";
  var CARD_MEMORY_OPEN = "[CK LONG-TERM MEMORY — MANAGED]";
  var CARD_MEMORY_CLOSE = "[/CK LONG-TERM MEMORY]";
  var CARD_NOTES_HEADING = "[PLAYER CARD NOTES — SAFE TO EDIT BELOW]";
  var COMMAND_CARD_TITLE = "Chronicle Keeper — Player Commands";
  var COMMAND_CARD_KEY = "__CK_PLAYER_COMMANDS__";
  var COMMAND_CARD_MARKER = "[CK-COMMAND-REFERENCE]";
  var MEMORY_DEFAULTS = {
    enabled: true,
    noteThreshold: 5,
    summaryMaxChars: 360,
    maxPendingNotes: 10,
    cooldownTurns: 3
  };
  var MAX_ANCHORS = 6;
  var MAX_AUTO_ANCHORS = 2;
  var ANCHOR_MAX_CHARS = 180;
  var LORE_DEFAULTS = {
    enabled: true,
    reuseMatchingCards: true,
    creatorNPCs: true,
    emergentNPCs: true,
    emergentMentions: 2,
    includeRelationshipStats: true,
    includeSurnameTriggers: true,
    ignoreCardTitles: []
  };
  var THREAD_DEFAULTS = {
    confirmationTurns: 2,
    maxNewPerTurn: 1,
    maxActiveEmergent: 5,
    maxStoredEmergent: 10
  };
  var PRESETS = {
    stranger:              { familiarity: 5,  trust: 20, affection: 0, respect: 50, attraction: 0,  resentment: 0 },
    acquaintance:          { familiarity: 30, trust: 30, affection: 30, respect: 50, attraction: 5,  resentment: 0 },
    friend:                { familiarity: 65, trust: 65, affection: 65, respect: 60, attraction: 5,  resentment: 5 },
    close_friend:          { familiarity: 85, trust: 80, affection: 80, respect: 70, attraction: 10,  resentment: 5 },
    rival:                 { familiarity: 60, trust: 20, affection: 0, respect: 40, attraction: 10, resentment: 25 },
    enemy:                 { familiarity: 65, trust: 0, affection: 0, respect: 20, attraction: 0,  resentment: 65 },
    hated_enemy:           { familiarity: 85, trust: 0,  affection: 0,  respect: 10, attraction: 0,  resentment: 90 },
    family:                { familiarity: 90, trust: 80, affection: 75, respect: 65, attraction: 0,  resentment: 5 },
    mentor:                { familiarity: 70, trust: 70, affection: 55, respect: 85, attraction: 0,  resentment: 5 },
    friends_with_benefits: { familiarity: 75, trust: 60, affection: 60, respect: 60, attraction: 80, resentment: 5 },
    lover:                 { familiarity: 75, trust: 70, affection: 80, respect: 65, attraction: 85, resentment: 5 },
    romantic_partner:      { familiarity: 90, trust: 85, affection: 85, respect: 75, attraction: 85, resentment: 5 }
  };
  // Entry gates. Positive scores are minimums; resentment and hostile-score
  // limits are maximums. Exit gates have a five-point buffer, avoiding a label
  // flip when a single +/-1 update crosses an exact boundary.
  var RELATIONSHIP_GATES = {
    acquaintance:          { min:{ familiarity:30, trust:30, affection:30, respect:50, attraction:5 }, max:{ resentment:0 } },
    friend:                { min:{ familiarity:65, trust:65, affection:65, respect:60, attraction:5 }, max:{ resentment:15 } },
    close_friend:          { min:{ familiarity:85, trust:80, affection:80, respect:70, attraction:10 }, max:{ resentment:10 } },
    mentor:                { min:{ familiarity:70, trust:70, affection:55, respect:85 }, max:{ resentment:15 } },
    rival:                 { min:{ resentment:40 }, max:{ trust:20, respect:20 } },
    enemy:                 { min:{ resentment:65 }, max:{ trust:10, respect:20, affection:20 } },
    hated_enemy:           { min:{ resentment:90 }, max:{ trust:5, respect:10, affection:10 } },
    friends_with_benefits: { min:{ familiarity:75, trust:60, affection:60, respect:60, attraction:80 }, max:{ resentment:15 } },
    lover:                 { min:{ familiarity:75, trust:70, affection:80, respect:65, attraction:85 }, max:{ resentment:10 } },
    romantic_partner:      { min:{ familiarity:90, trust:85, affection:85, respect:75, attraction:85 }, max:{ resentment:10 } }
  };
  var TONES = {
    warm:    { trust: 8, affection: 12, respect: 4, resentment: -5 },
    close:   { familiarity: 8, trust: 10, affection: 12, respect: 5, resentment: -5 },
    neutral: {},
    strained:{ trust: -18, affection: -8, respect: -5, resentment: 25 },
    hostile: { trust: -30, affection: -25, respect: -10, resentment: 50 }
  };

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function clamp(n) { n = Number(n); return isNaN(n) ? 0 : Math.max(0, Math.min(100, Math.round(n))); }
  function normaliseDay(value) { return String(value || "").replace(/^\s*day\s+/i, "").trim(); }
  function normaliseName(value) { return String(value || "").replace(/\s+/g, " ").trim().toLowerCase(); }
  function escapeRegExp(value) { return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function boundedWarning(ce, message) {
    ce.warnings = ce.warnings || [];
    if (ce.warnings.indexOf(message) < 0) ce.warnings.push(message);
    ce.warnings = ce.warnings.slice(-12);
  }
  function uniqueRoster(values) {
    var result = [], seen = {};
    (Array.isArray(values) ? values : []).forEach(function (value) {
      // A malformed model packet can append C metadata to P/N. Never keep
      // private fields as a person's name, including when loading old state.
      var name = String(value || "").split(/[~|\r\n]/)[0].replace(/\s+/g, " ").trim(), key = normaliseName(name);
      if (name.length > 75 || /[:=<>{}\[\]]/.test(name) || /^(?:none|empty|-)$/i.test(name)) return;
      if (name && !seen[key]) { seen[key] = true; result.push(name); }
    });
    return result.slice(0, 12);
  }
  function normaliseSceneRoster(ce, preferNearby) {
    var present = uniqueRoster(ce.scene && ce.scene.present), nearby = uniqueRoster(ce.scene && ce.scene.nearby), chosen = {},
        player = normaliseName(ce.player && ce.player.name);
    // A configured or explicitly established alias is the same actor in P/N.
    // Keep ambiguous aliases untouched instead of guessing who they describe.
    function canonical(name) {
      var key = normaliseName(name), matches = Object.keys(ce.characters || {}).map(function (id) {
        return ce.characters[id];
      }).filter(function (c) {
        return c && (normaliseName(c.name) === key || (c.aliases || []).some(function (alias) {
          return normaliseName(alias) === key;
        }));
      });
      return matches.length === 1 ? matches[0].name : name;
    }
    present = uniqueRoster(present.map(canonical));
    nearby = uniqueRoster(nearby.map(canonical));
    // Model packets sometimes list an unnamed crowd as a single character.
    present = present.filter(function (name) { return !/^(?:players?|npcs?|people|crowd|townsfolk)$/i.test(name); });
    nearby = nearby.filter(function (name) { return !/^(?:players?|npcs?|people|crowd|townsfolk)$/i.test(name); });
    if (player) {
      present = present.filter(function (name) { return normaliseName(name) !== player; });
      nearby = nearby.filter(function (name) { return normaliseName(name) !== player; });
    }
    (preferNearby ? nearby : present).forEach(function (name) { chosen[normaliseName(name)] = true; });
    if (preferNearby) present = present.filter(function (name) { return !chosen[normaliseName(name)]; });
    else nearby = nearby.filter(function (name) { return !chosen[normaliseName(name)]; });
    ce.scene.present = present;
    ce.scene.nearby = nearby;
  }
  function slug(s) {
    return String(s || "item").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "item";
  }
  function uniqueId(prefix, name, used) {
    var base = prefix + "_" + slug(name), id = base, n = 2;
    while (used[id]) id = base + "_" + n++;
    used[id] = true;
    return id;
  }
  function relation(npc) {
    var key = String(npc.relationship || "acquaintance")
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "_");

if (!PRESETS[key]) key = "acquaintance";
    var out = clone(PRESETS[key]);
    var tone = TONES[npc.relationshipTone] || {};
    Object.keys(tone).forEach(function (k) { out[k] = clamp(out[k] + tone[k]); });
    Object.keys(npc.relationshipOverride || {}).forEach(function (k) {
      if (Object.prototype.hasOwnProperty.call(out, k)) out[k] = clamp(npc.relationshipOverride[k]);
    });
    out.preset = key;
    out.summary = key.replace(/_/g, " ");
    out.evidence = [];
    return out;
  }
  function relationshipPresetKey(value) {
    var key = String(value || "").toLowerCase().trim().replace(/[\s-]+/g, "_");
    var aliases = { partner: "romantic_partner", romantic: "romantic_partner", closefriend: "close_friend", fwb: "friends_with_benefits" };
    return aliases[key] || key;
  }
  function meetsRelationshipGate(scores, key, holding) {
    var gate = RELATIONSHIP_GATES[key], margin = holding ? 5 : 0;
    if (!gate) return false;
    return Object.keys(gate.min || {}).every(function (axis) {
      return Number(scores[axis]) >= gate.min[axis] - margin;
    }) && Object.keys(gate.max || {}).every(function (axis) {
      return Number(scores[axis]) <= gate.max[axis] + margin;
    });
  }
  function relationshipGateOptions(current) {
    // Keep this order aligned with evolvedRelationshipPreset: a ready gate
    // with higher transition priority wins a distance tie.
    return {
      stranger: [{ key:"rival" }, { key:"acquaintance" }],
      acquaintance: [{ key:"rival" }, { key:"friend" }, { key:"stranger", exit:"acquaintance" }],
      friend: [{ key:"rival" }, { key:"friends_with_benefits" }, { key:"close_friend" }, { key:"mentor" }, { key:"acquaintance", exit:"friend" }],
      close_friend: [{ key:"rival" }, { key:"friends_with_benefits" }, { key:"friend", exit:"close_friend" }],
      mentor: [{ key:"rival" }, { key:"friend", exit:"mentor" }],
      friends_with_benefits: [{ key:"rival" }, { key:"lover" }, { key:"friend", exit:"friends_with_benefits" }],
      lover: [{ key:"rival" }, { key:"romantic_partner" }, { key:"friends_with_benefits", exit:"lover" }],
      romantic_partner: [{ key:"rival" }, { key:"lover", exit:"romantic_partner" }],
      rival: [{ key:"enemy" }, { key:"acquaintance" }],
      enemy: [{ key:"hated_enemy" }, { key:"rival", exit:"enemy" }],
      hated_enemy: [{ key:"enemy", exit:"hated_enemy" }]
    }[current] || [];
  }
  function relationshipGateGap(scores, option) {
    var gate = RELATIONSHIP_GATES[option.exit || option.key], needs = [];
    if (!gate) return { distance:Infinity, needs:[] };
    Object.keys(gate.min || {}).forEach(function (axis) {
      var target = gate.min[axis], value = clamp(scores[axis]);
      if (option.exit) {
        target -= 6; // fail the five-point hold buffer
        needs.push({ distance:Math.max(0, value - target), text:axis + " down to " + target + " or less" });
      } else if (value < target) needs.push({ distance:target - value, text:axis + " +" + (target - value) + " to " + target });
    });
    Object.keys(gate.max || {}).forEach(function (axis) {
      var target = gate.max[axis], value = clamp(scores[axis]);
      if (option.exit) {
        target += 6;
        needs.push({ distance:Math.max(0, target - value), text:axis + " up to " + target + " or more" });
      } else if (value > target) needs.push({ distance:value - target, text:axis + " -" + (value - target) + " to " + target });
    });
    if (option.exit) {
      needs.sort(function (a,b) { return a.distance - b.distance; });
      return { distance:needs[0] ? needs[0].distance : Infinity, needs:needs.slice(0,1) };
    }
    return { distance:needs.reduce(function (total, item) { return total + item.distance; }, 0), needs:needs };
  }
  function relationshipGateReport(ce, character) {
    var scores = character.relationship || {}, current = relationshipPresetKey(scores.preset || scores.summary),
        options = relationshipGateOptions(current), recent = (scores.recentChanges || []).slice(-5),
        earlier = {}, total = {}, axes = ["familiarity","trust","affection","respect","attraction","resentment"], best, beforeGap;
    if (current === "family") return ["Family is fixed; there is no automatic next gate."];
    if (!options.length) return ["No next gate for this status."];
    options.forEach(function (option) {
      var gap = relationshipGateGap(scores, option);
      if (!best || gap.distance < best.gap.distance) best = { option:option, gap:gap };
    });
    axes.forEach(function (axis) {
      total[axis] = recent.reduce(function (sum, item) { return sum + Number((item.delta || {})[axis] || 0); }, 0);
      earlier[axis] = clamp(Number(scores[axis] || 0) - total[axis]);
    });
    beforeGap = relationshipGateGap(earlier, best.option);
    var label = best.option.key.replace(/_/g, " "), movement = beforeGap.distance - best.gap.distance,
        changed = axes.filter(function (axis) { return total[axis] !== 0; }).map(function (axis) {
          return axis + " " + (total[axis] > 0 ? "+" : "") + total[axis];
        });
    return [
      "Closest next gate: " + label + (best.option.exit ? " (losing " + best.option.exit.replace(/_/g, " ") + ")" : ""),
      best.gap.distance === 0 ? "Gate condition met; status is checked after the next accepted score change (a higher-priority gate may win)." :
        "Still needed: " + best.gap.needs.map(function (need) { return need.text; }).join("; ") + ".",
      !recent.length ? "Direction: no recorded score changes yet." :
        "Direction over last " + recent.length + " score-changing turn(s): " + (movement > 0 ? "toward" : movement < 0 ? "away" : "flat") +
        " (gap " + beforeGap.distance + " → " + best.gap.distance + "; " + (changed.join(", ") || "no net score change") + ")."
    ].concat(ce.settings && ce.settings.relationshipEvolution === false ? ["Automatic status changes are disabled in setup."] : []);
  }
  function evolvedRelationshipPreset(scores) {
    var current = relationshipPresetKey(scores.preset || scores.summary || "acquaintance"),
        qualifies = function (name) { return meetsRelationshipGate(scores, name, false); },
        holds = function (name) { return meetsRelationshipGate(scores, name, true); };
    if (current === "family") return current;
    // A severe collapse can move a positive relationship into rivalry. The
    // hostile branch then progresses one neighbouring label per story turn.
    if (["rival","enemy","hated_enemy"].indexOf(current) < 0 && qualifies("rival")) return "rival";
    if (current === "hated_enemy") return holds(current) ? current : "enemy";
    if (current === "enemy") return qualifies("hated_enemy") ? "hated_enemy" : (holds(current) ? current : "rival");
    if (current === "rival") return qualifies("enemy") ? "enemy" : (qualifies("acquaintance") ? "acquaintance" : current);
    if (current === "stranger") return qualifies("acquaintance") ? "acquaintance" : current;
    if (current === "acquaintance") return qualifies("friend") ? "friend" : (holds(current) ? current : "stranger");
    if (current === "friend") {
      if (qualifies("friends_with_benefits")) return "friends_with_benefits";
      if (qualifies("close_friend")) return "close_friend";
      if (qualifies("mentor")) return "mentor";
      return holds(current) ? current : "acquaintance";
    }
    if (current === "close_friend") return qualifies("friends_with_benefits") ? "friends_with_benefits" : (holds(current) ? current : "friend");
    if (current === "mentor") return holds(current) ? current : "friend";
    if (current === "friends_with_benefits") return qualifies("lover") ? "lover" : (holds(current) ? current : "friend");
    if (current === "lover") return qualifies("romantic_partner") ? "romantic_partner" : (holds(current) ? current : "friends_with_benefits");
    if (current === "romantic_partner") return holds(current) ? current : "lover";
    return current;
  }
  function evolveRelationshipsAfterStory(ce, before) {
    var events = [], axes = ["familiarity","trust","affection","respect","attraction","resentment"];
    if (!before) return events;
    Object.keys(ce.characters || {}).forEach(function (id) {
      var c = ce.characters[id], prior = (before.characters || {})[id], oldKey, newKey, delta = {};
      if (!c || !prior || !c.relationship || !prior.relationship) return;
      axes.forEach(function (axis) {
        var change = Number(c.relationship[axis]) - Number(prior.relationship[axis]);
        if (change) delta[axis] = change;
      });
      if (!Object.keys(delta).length) return;
      c.relationship.recentChanges = (c.relationship.recentChanges || []).concat([{ turn:ce.turn, delta:delta }]).slice(-5);
      if (ce.settings && ce.settings.relationshipEvolution === false) return;
      oldKey = relationshipPresetKey(c.relationship.preset || c.relationship.summary);
      newKey = evolvedRelationshipPreset(c.relationship);
      if (newKey === oldKey || !PRESETS[newKey]) return;
      c.relationship.preset = newKey;
      c.relationship.summary = newKey.replace(/_/g, " ");
      events.push(c.name + ": " + oldKey.replace(/_/g, " ") + " → " + c.relationship.summary);
    });
    return events;
  }
  function placeholder(state, question, fallback) {
    var list = state.placeholders || [], needle = String(question || "").trim(), i;
    for (i = 0; i < list.length; i++) if (String(list[i].question || "").trim() === needle) return list[i].answer;
    for (i = 0; i < list.length; i++) if (normaliseName(list[i].question) === normaliseName(needle)) return list[i].answer;
    return fallback || "";
  }
  function placeholderQuestion(value) {
    var match = String(value || "").trim().match(/^\$\{([\s\S]+)\}$/);
    return match ? match[1].trim() : "";
  }
  function hasUnresolvedPlaceholder(value) {
    return /\$\{[^{}]+\}/.test(String(value || ""));
  }
  function resolvePlaceholderText(state, value) {
    return String(value === undefined || value === null ? "" : value).replace(/\$\{([^{}]+)\}/g, function (match, question) {
      var answer = String(placeholder(state, String(question).trim(), "") || "").trim();
      return answer || match;
    });
  }
    function resolveSetupPlaceholders(state, value) {
    var out;
    if (Array.isArray(value)) return value.map(function (item) { return resolveSetupPlaceholders(state, item); });
    if (value && typeof value === "object") {
      out = {};
      Object.keys(value).forEach(function (key) {
        out[key] = key === "namePlaceholder" ? value[key] : resolveSetupPlaceholders(state, value[key]);
      });
      return out;
    }
    return typeof value === "string" ? resolvePlaceholderText(state, value) : value;
  }
  function configuredName(state, config, fallback) {
    var question, answer, direct, safeFallback;
    config = config || {};
    question = placeholderQuestion(config.namePlaceholder) || String(config.namePlaceholder || "").trim();
    if (question) {
      answer = String(placeholder(state, question, "") || "").replace(/\s+/g, " ").trim();
      if (answer) return answer;
    }
    direct = resolvePlaceholderText(state, config.name || "").replace(/\s+/g, " ").trim();
    if (direct && !hasUnresolvedPlaceholder(direct)) return direct;
    safeFallback = resolvePlaceholderText(state, fallback || config.fallbackName || "").replace(/\s+/g, " ").trim();
    return hasUnresolvedPlaceholder(safeFallback) ? "" : safeFallback;
  }
  function configuredPlayerName(state, currentName) {
    var config = CE_SETUP && CE_SETUP.player || {}, builtIn = String(placeholder(state, "character.name", "") || "").trim();
    return configuredName(state, config, builtIn || config.fallbackName || currentName || "Player") || builtIn || currentName || "Player";
  }
  function loreSettings(ce) {
    var configured = (ce.settings && (ce.settings.lore || ce.settings.autoCards)) || {}, out = {};
    Object.keys(LORE_DEFAULTS).forEach(function (key) {
      out[key] = configured[key] === undefined ? LORE_DEFAULTS[key] : configured[key];
    });
    out.emergentMentions = Math.max(1, Math.min(10, Number(out.emergentMentions) || 2));
    ce.settings = ce.settings || {};
    ce.settings.lore = out;
    if (ce.settings.autoCards) delete ce.settings.autoCards;
    return out;
  }
  function memorySettings(ce) {
    var configured = ce.settings && ce.settings.memory || {}, setupConfigured = CE_SETUP && CE_SETUP.settings && CE_SETUP.settings.memory || {}, out = {};
    Object.keys(MEMORY_DEFAULTS).forEach(function (key) {
      out[key] = configured[key] !== undefined ? configured[key] : (setupConfigured[key] !== undefined ? setupConfigured[key] : MEMORY_DEFAULTS[key]);
    });
    out.enabled = out.enabled !== false;
    out.noteThreshold = Math.max(3, Math.min(10, Number(out.noteThreshold) || MEMORY_DEFAULTS.noteThreshold));
    out.summaryMaxChars = Math.max(180, Math.min(500, Number(out.summaryMaxChars) || MEMORY_DEFAULTS.summaryMaxChars));
    out.maxPendingNotes = Math.max(out.noteThreshold, Math.min(16, Number(out.maxPendingNotes) || MEMORY_DEFAULTS.maxPendingNotes));
    out.cooldownTurns = Math.max(1, Math.min(20, Number(out.cooldownTurns) || MEMORY_DEFAULTS.cooldownTurns));
    ce.settings = ce.settings || {};
    ce.settings.memory = out;
    return out;
  }
  function threadSettings(ce) {
    var configured = ce.settings && ce.settings.threadTracking || {}, setupConfigured = CE_SETUP && CE_SETUP.settings && CE_SETUP.settings.threadTracking || {}, out = {};
    Object.keys(THREAD_DEFAULTS).forEach(function (key) {
      out[key] = configured[key] !== undefined ? configured[key] : (setupConfigured[key] !== undefined ? setupConfigured[key] : THREAD_DEFAULTS[key]);
    });
    out.confirmationTurns = Math.max(1, Math.min(5, Number(out.confirmationTurns) || THREAD_DEFAULTS.confirmationTurns));
    out.maxNewPerTurn = Math.max(1, Math.min(3, Number(out.maxNewPerTurn) || THREAD_DEFAULTS.maxNewPerTurn));
    out.maxActiveEmergent = Math.max(1, Math.min(12, Number(out.maxActiveEmergent) || THREAD_DEFAULTS.maxActiveEmergent));
    out.maxStoredEmergent = Math.max(out.maxActiveEmergent, Math.min(24, Number(out.maxStoredEmergent) || THREAD_DEFAULTS.maxStoredEmergent));
    ce.settings = ce.settings || {};
    ce.settings.threadTracking = out;
    return out;
  }
  function emptyMemory() {
    return { summary: "", previous: "", anchors: [], pending: false, forced: false, queuedTurn: -1, lastSummaryTurn: -999, summaryCount: 0 };
  }
  function cleanAnchor(value) {
    var text = String(value || "").replace(/[|~)\[\]]/g, " ").replace(/\s+/g, " ").trim();
    if (text.length > ANCHOR_MAX_CHARS) text = text.slice(0, ANCHOR_MAX_CHARS).replace(/\s+\S*$/, "").trim();
    return text;
  }
  function ensureMemory(ce, c) {
    var memory = c.memory && typeof c.memory === "object" ? c.memory : emptyMemory(), cfg = memorySettings(ce);
    memory.summary = String(memory.summary || "").replace(/\s+/g, " ").trim().slice(0, cfg.summaryMaxChars);
    memory.previous = String(memory.previous || "").replace(/\s+/g, " ").trim().slice(0, cfg.summaryMaxChars);
    memory.anchors = (Array.isArray(memory.anchors) ? memory.anchors : []).map(function (item) {
      return { text:cleanAnchor(item && typeof item === "object" ? item.text : item), source:item && item.source === "auto" ? "auto" : "player" };
    }).filter(function (item) { return item.text.length >= 12; }).slice(0, MAX_ANCHORS);
    memory.pending = !!memory.pending;
    memory.forced = !!memory.forced;
    memory.queuedTurn = Number(memory.queuedTurn === undefined ? -1 : memory.queuedTurn);
    memory.lastSummaryTurn = Number(memory.lastSummaryTurn === undefined ? -999 : memory.lastSummaryTurn);
    memory.summaryCount = Math.max(0, Number(memory.summaryCount || 0));
    c.memory = memory;
    if (cfg.enabled && (c.notes || []).length >= cfg.noteThreshold) {
      memory.pending = true;
      if (memory.queuedTurn < 0) memory.queuedTurn = Number(ce.turn || 0);
    }
    return memory;
  }
  function addMemoryAnchor(ce, c, value, source) {
    var text = cleanAnchor(value), anchors = ensureMemory(ce, c).anchors, key = normaliseName(text), auto = source === "auto";
    if (text.length < 12) return "too short (use a specific event of at least 12 characters)";
    if (anchors.some(function (a) { return normaliseName(a.text) === key; })) return "already pinned";
    if (auto && anchors.filter(function (a) { return a.source === "auto"; }).length >= MAX_AUTO_ANCHORS) return "automatic slots full";
    if (anchors.length >= MAX_ANCHORS && !auto) {
      var autoIndex = anchors.findIndex(function (a) { return a.source === "auto"; });
      if (autoIndex >= 0) anchors.splice(autoIndex, 1);
    }
    if (anchors.length >= MAX_ANCHORS) return "all slots full; use [unpin:Name=event excerpt] first";
    anchors.push({ text:text, source:auto ? "auto" : "player" });
    return "added";
  }
  function removeMemoryAnchor(ce, c, excerpt) {
    var anchors = ensureMemory(ce, c).anchors, key = normaliseName(excerpt), matches;
    if (key.length < 8) return "use a distinctive excerpt of at least 8 characters";
    matches = anchors.map(function (a, i) { return normaliseName(a.text).indexOf(key) >= 0 ? i : -1; }).filter(function (i) { return i >= 0; });
    if (!matches.length) return "no matching pinned moment";
    if (matches.length > 1) return "excerpt matches multiple moments; be more specific";
    anchors.splice(matches[0], 1);
    return "removed";
  }
  function cleanMemorySummary(value, maxChars) {
    var summary = String(value || "")
      .replace(/[|~)]/g, " ")
      .replace(/\s+/g, " ").trim();
    if (!summary || /^(?:none|unknown|n\/a)$/i.test(summary)) return "";
    if (summary.length > maxChars) {
      summary = summary.slice(0, maxChars).replace(/\s+\S*$/, "").replace(/[,:;\s]+$/, "");
      if (summary && !/[.!?]$/.test(summary)) summary = summary.slice(0, maxChars - 1).replace(/[,:;\s]+$/, "") + ".";
    }
    return summary;
  }
  function addCharacterNote(ce, c, value) {
    var cfg = memorySettings(ce), note = String(value || "").replace(/\s+/g, " ").trim().slice(0, 220), memory, seen;
    if (!note) return false;
    memory = ensureMemory(ce, c);
    if (normaliseName(memory.summary) === normaliseName(note)) return false;
    c.notes = Array.isArray(c.notes) ? c.notes : [];
    seen = c.notes.some(function (existing) { return normaliseName(existing) === normaliseName(note); });
    if (!seen) c.notes.push(note);
    c.notes = c.notes.slice(-cfg.maxPendingNotes);
    if (cfg.enabled && c.notes.length >= cfg.noteThreshold) {
      memory.pending = true;
      if (memory.queuedTurn < 0) memory.queuedTurn = Number(ce.turn || 0);
    }
    return !seen;
  }
  function applyMemorySummary(ce, c, value) {
    var cfg = memorySettings(ce), memory = ensureMemory(ce, c), summary = cleanMemorySummary(value, cfg.summaryMaxChars);
    if (!cfg.enabled || !memory.pending || String(ce.activeMemoryTaskId || "") !== String(c.id || "")) {
      boundedWarning(ce, "Unexpected memory summary for " + c.name + " was ignored because no matching consolidation task was active.");
      return false;
    }
    if (summary.length < 20) {
      boundedWarning(ce, "Memory summary for " + c.name + " was missing or too short; recent notes were retained for another attempt.");
      memory.pending = true;
      return false;
    }
    memory.previous = memory.summary;
    memory.summary = summary;
    memory.pending = false;
    memory.forced = false;
    memory.queuedTurn = -1;
    memory.lastSummaryTurn = Number(ce.turn || 0);
    memory.summaryCount += 1;
    ce.activeMemoryTaskId = "";
    c.notes = [];
    return true;
  }
  function nextMemoryTask(ce) {
    var cfg = memorySettings(ce);
    if (!cfg.enabled) return null;
    return Object.keys(ce.characters || {}).map(function (id) {
      var c = ce.characters[id]; ensureMemory(ce, c); return c;
    }).filter(function (c) {
      return c.memory.pending && (c.notes || []).length && (c.memory.forced || Number(ce.turn || 0) - c.memory.lastSummaryTurn >= cfg.cooldownTurns);
    }).sort(function (a, b) {
      var aq = a.memory.queuedTurn < 0 ? 999999 : a.memory.queuedTurn,
          bq = b.memory.queuedTurn < 0 ? 999999 : b.memory.queuedTurn;
      return aq - bq || b.notes.length - a.notes.length || a.name.localeCompare(b.name);
    })[0] || null;
  }
  function memoryTaskInstruction(ce, c) {
    var cfg = memorySettings(ce), previous = ensureMemory(ce, c).summary || "No earlier summary.",
        pending = (c.notes || []).slice(-cfg.maxPendingNotes), perNote = Math.max(60, Math.floor(820 / Math.max(1, pending.length)) - 2),
        notes = pending.map(function (note) {
          return String(note || "").replace(/[|~)]/g, " ").replace(/\s+/g, " ").trim().slice(0, perNote);
        }).filter(Boolean).join("; "),
        recent = String(ce.lastNarrative || "").replace(/[|~)]/g, " ").replace(/\s+/g, " ").trim(),
        evidence = pending.length < cfg.noteThreshold && recent &&
          (normaliseName(recent).indexOf(normaliseName(c.name)) >= 0 ||
           (ce.scene && (ce.scene.present || []).map(normaliseName).indexOf(normaliseName(c.name)) >= 0)) ?
          " Recent story excerpt, for verified context only [" + recent.slice(-400) + "]." : "";
    return "MEMORY TASK for " + c.name + ": merge the prior long-term summary [" + previous.slice(0, 300) + "] with these verified recent developments [" + notes.slice(0, 850) + "]" + evidence + " into one factual third-person summary of at most " + cfg.summaryMaxChars + " characters. Pinned moments are separately preserved: do not try to fit all of them into the rolling summary. Preserve other durable events; remove repetition and transient positioning or small talk. Summarize actual events, not just a list of character traits. Do not invent, infer new facts or include numeric relationship scores. This is metadata-only: do not make the NPC appear, speak or affect the story unless the current scene already does so. Emit it inside the private operation as C=" + c.name + "~memory:summary text, even if no other C update is needed.";
  }
  function emptyCardLink() {
    return { id: "", source: "", lastSyncTurn: -1, lastHash: "" };
  }
  function cardType(card) { return normaliseName(card && card.type); }
  function cardTitle(card) { return String(card && card.title || "").replace(/\s+/g, " ").trim(); }
  function splitCardKeys(card) {
    return String(card && card.keys || "").split(",").map(function (key) { return key.trim(); }).filter(Boolean);
  }
  function stripManagedProfile(entry) {
    var escapedOpen = escapeRegExp(LORE_PROFILE_OPEN), escapedClose = escapeRegExp(LORE_PROFILE_CLOSE),
        legacyOpen = escapeRegExp(LEGACY_PROFILE_OPEN), legacyClose = escapeRegExp(LEGACY_PROFILE_CLOSE);
    return String(entry || "")
      .replace(new RegExp("\\s*" + escapedOpen + "[\\s\\S]*?" + escapedClose + "\\s*", "gi"), "\n")
      .replace(new RegExp("\\s*" + legacyOpen + "[\\s\\S]*?" + legacyClose + "\\s*", "gi"), "\n")
      .replace(/\s+$/, "");
  }
  function stripPlayerNotesNotice(entry) {
    return String(entry || "")
      .replace(/\s*\[PLAYER NOTES [—-] SAFE TO EDIT FROM HERE ONWARDS\]\s*/gi, "\n")
      .replace(/\s*Chronicle Keeper preserves everything below this line\.\s*/gi, "\n")
      .replace(/\s*Add or edit this character's description, appearance, personality, history, goals and other notes below this line\. Chronicle Keeper preserves this section\.\s*/gi, "\n")
      .replace(/^\s+|\s+$/g, "");
  }
  function stripManagedCardMemory(notes) {
    return String(notes || "")
      .replace(new RegExp("\\s*" + escapeRegExp(CARD_MEMORY_OPEN) + "[\\s\\S]*?" + escapeRegExp(CARD_MEMORY_CLOSE) + "\\s*", "gi"), "\n")
      .replace(new RegExp("\\s*" + escapeRegExp(CARD_NOTES_HEADING) + "\\s*", "gi"), "\n")
      .replace(/^\s+|\s+$/g, "");
  }
  function stripLegacyAutoCardsPrompt(notes) {
    return String(notes || "")
      .replace(/^\s*\{?\s*\/?Auto-Cards\s+will\s+contextualize\s+these\s+memories\s*:\s*\{\s*updates\s*:\s*true\s*,\s*limit\s*:\s*\d+\s*\}\s*\}?\s*$/gim, "")
      .replace(/^\s+|\s+$/g, "");
  }
  function composeCardDescription(ce, c, existing, marker) {
    var cfg = memorySettings(ce), manual = stripLegacyAutoCardsPrompt(stripManagedCardMemory(existing)),
        record = ensureMemory(ce, c), memory = cleanMemorySummary(record.summary, cfg.summaryMaxChars),
        recent = (c.notes || []).slice(-cfg.maxPendingNotes).map(function (note) {
          return String(note || "").replace(/\s+/g, " ").trim().slice(0, 180);
        }).filter(Boolean), lines = [marker];
    if (memory || recent.length || record.anchors.length) {
      lines.push("");
      lines.push(CARD_MEMORY_OPEN);
      if (memory) lines.push("Rolling summary: " + memory);
      if (record.anchors.length) {
        lines.push("Pinned moments (preserved across summaries):");
        record.anchors.forEach(function (anchor) { lines.push("• " + anchor.text); });
      }
      if (recent.length) {
        lines.push("Recent developments:");
        recent.forEach(function (note) { lines.push("• " + note); });
      }
      lines.push(CARD_MEMORY_CLOSE);
    }
    if (manual) {
      if (lines.length) lines.push("");
      lines.push(CARD_NOTES_HEADING);
      lines.push(manual);
    }
    return lines.join("\n");
  }
  function hasLoreMarker(card, characterId) {
    var description = String(card && card.description || ""), marker = LORE_MARKER_PREFIX + characterId + "]",
        legacy = LEGACY_MARKER_PREFIX + characterId + "]";
    return description.indexOf(marker) >= 0 || description.indexOf(legacy) >= 0;
  }
  function cardIdentity(card, index) {
    return card && card.id !== undefined && card.id !== null ? String(card.id) : "index:" + index;
  }
  function looksLikePlayerHoldingCard(card, ce) {
    var title = normaliseName(cardTitle(card)), player = normaliseName(ce.player && ce.player.name), keys,
        ignored = loreSettings(ce).ignoreCardTitles || [];
    if (!title) return true;
    if (title === normaliseName(COMMAND_CARD_TITLE)) return true;
    if (String(card && card.description || "").indexOf(COMMAND_CARD_MARKER) >= 0) return true;
    if (player && title === player) return true;
    if (ignored.map(normaliseName).indexOf(title) >= 0) return true;
    if (/^(?:the\s+)?player$|^you$|^your character$|^(?:player|character)\s*(?:setup|creation|details|information|info|holder|holding|template|card)$/i.test(title)) return true;
    if (/[{}%]/.test(title)) return true;
    keys = splitCardKeys(card).join(" ").toLowerCase();
    if (keys.indexOf(COMMAND_CARD_KEY.toLowerCase()) >= 0) return true;
    if (/character\.name|player\.name|character_name|player_name/.test(keys)) return true;
    return false;
  }
  function isAdoptableCharacterCard(card, ce) {
    var title = cardTitle(card);
    return cardType(card) === "character" && title.length >= 2 && title.length <= 80 && !looksLikePlayerHoldingCard(card, ce);
  }
  function availableStoryCards() {
    return typeof storyCards !== "undefined" && Array.isArray(storyCards) ? storyCards : null;
  }
  function commandReferenceText() {
    return [
      COMMAND_CARD_TITLE,
      "Use one command by itself. Press Continue after the result.",
      "",
      "[where] — scene, time, present and nearby NPCs.",
      "[threads] — tracked plot threads and status.",
      "[state] — tracking totals.",
      "[lore] — Story Card and memory status.",
      "[relationships:Name] — relationship type and scores.",
      "[gate:Name] — closest reachable status gate and recent direction.",
      "[memory:Name] — summary, pinned moments and recent notes.",
      "[pin:Full Name=lasting event] — preserve a moment across summaries.",
      "[unpin:Full Name=event excerpt] — remove a pinned moment.",
      "[alias:Full Name=Nickname] — add a safe alias.",
      "[relationship:Full Name=preset] — reset the relationship.",
      "[keep:Name] or [major:Name] — retain an NPC as major.",
      "[forget:Name] — return a non-creator NPC to temporary tracking.",
      "[track:Thread] — create or reactivate a plot thread.",
      "[drop:Thread] — make a plot thread dormant.",
      "[summarise:Name] — queue memory consolidation; summarize also works.",
      "[help] or [commands] — create or update this card.",
      "",
      "Presets: stranger, acquaintance, friend, close_friend, rival, enemy, hated_enemy, family, mentor, friends_with_benefits, lover, romantic_partner."
    ].join("\n");
  }
  function findCommandReferenceCard(cards) {
    var title = normaliseName(COMMAND_CARD_TITLE), key = normaliseName(COMMAND_CARD_KEY), i, card, keys;
    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      keys = splitCardKeys(card).map(normaliseName);
      if (normaliseName(cardTitle(card)) === title || keys.indexOf(key) >= 0 || String(card && card.description || "").indexOf(COMMAND_CARD_MARKER) >= 0) return card;
    }
    return null;
  }
  function ensureCommandReferenceCard(ce) {
    var cards = availableStoryCards(), card, created = false, before, result, i, description;
    if (!cards) return { available:false, message:"Story Card access is unavailable. The command list is shown below." };
    card = findCommandReferenceCard(cards);
    if (!card && typeof addStoryCard === "function") {
      before = cards.length;
      result = addStoryCard(COMMAND_CARD_KEY, "", "other");
      if (typeof result === "number" && cards[result]) card = cards[result];
      else if (result && typeof result === "object") card = result;
      if (!card) {
        for (i = cards.length - 1; i >= before; i--) {
          if (splitCardKeys(cards[i]).map(normaliseName).indexOf(normaliseName(COMMAND_CARD_KEY)) >= 0) { card = cards[i]; break; }
        }
      }
      created = !!card;
    }
    if (!card) {
      boundedWarning(ce, "Player command Story Card could not be created.");
      return { available:false, message:"The player command Story Card could not be created. The command list is shown below." };
    }
    card.title = COMMAND_CARD_TITLE;
    card.type = "other";
    card.keys = mergeCardKeys(splitCardKeys(card), [COMMAND_CARD_KEY]);
    card.entry = commandReferenceText().slice(0, CARD_ENTRY_LIMIT);
    description = String(card.description || "").trim();
    if (description.indexOf(COMMAND_CARD_MARKER) < 0) description = COMMAND_CARD_MARKER + (description ? "\n" + description : "");
    card.description = description;
    return { available:true, message:"Player command Story Card " + (created ? "created" : "updated") + ": " + COMMAND_CARD_TITLE + "." };
  }
  function exactCharacter(ce, name) {
    var needle = normaliseName(name), ids = Object.keys(ce.characters || {}), i, c;
    for (i = 0; i < ids.length; i++) {
      c = ce.characters[ids[i]];
      if (normaliseName(c.name) === needle) return c;
      if ((c.aliases || []).some(function (alias) { return normaliseName(alias) === needle; })) return c;
    }
    return null;
  }
  function adoptLoreCharacters(ce) {
    var cards = availableStoryCards(), cfg = loreSettings(ce);
    if (!cfg.enabled || !cards) return;
    cards.forEach(function (card, index) {
      var title, c, original;
      if (!isAdoptableCharacterCard(card, ce)) return;
      title = cardTitle(card);
      c = exactCharacter(ce, title);
      if (!c) {
        c = addCharacter(ce, title, "story_card", true);
        original = stripManagedProfile(card.entry).replace(/\s+/g, " ").trim();
        c.description = original.slice(0, 650);
        c.creatorProtected = true;
        c.persistent = true;
        c.importance = "recurring";
      }
      c.card = c.card || emptyCardLink();
      if (!c.card.id) {
        c.card.id = cardIdentity(card, index);
        c.card.source = c.origin === "story_card" ? "adopted" : "reused";
      } else if (hasLoreMarker(card, c.id)) {
        c.card.id = cardIdentity(card, index);
        if (!c.card.source) c.card.source = c.origin === "story_card" ? "adopted" : "reused";
      }
    });
  }
  function meaningfulNameWords(name) {
    var ignored = { guildmaster:1, captain:1, commander:1, lord:1, lady:1, master:1, doctor:1, dr:1, sir:1, dame:1, king:1, queen:1, prince:1, princess:1 };
    return String(name || "").split(/\s+/).map(function (word) { return word.replace(/^[^A-Za-z0-9'-]+|[^A-Za-z0-9'-]+$/g, ""); })
      .filter(function (word) { return word && !ignored[normaliseName(word)]; });
  }
  function uniqueShortTrigger(ce, character, word) {
    var needle = normaliseName(word), ids = Object.keys(ce.characters), matches = 0;
    ids.forEach(function (id) {
      var c = ce.characters[id], words = meaningfulNameWords(c.name).map(normaliseName), aliases = (c.aliases || []).map(normaliseName);
      if (words.indexOf(needle) >= 0 || aliases.indexOf(needle) >= 0) matches += 1;
    });
    return matches === 1 && normaliseName(character.name) !== needle;
  }
  function generatedCardKeys(ce, c) {
    var cfg = loreSettings(ce), words = meaningfulNameWords(c.name), keys = [c.name];
    if (words.length && uniqueShortTrigger(ce, c, words[0])) keys.push(words[0]);
    if (cfg.includeSurnameTriggers && words.length > 1 && uniqueShortTrigger(ce, c, words[words.length - 1])) keys.push(words[words.length - 1]);
    (c.aliases || []).forEach(function (alias) { keys.push(alias); });
    return keys;
  }
  function mergeCardKeys(existing, generated) {
    var result = [], seen = {};
    existing.concat(generated).forEach(function (key) {
      var clean = String(key || "").trim(), normal = normaliseName(clean);
      if (clean && !seen[normal]) { seen[normal] = true; result.push(clean); }
    });
    return result.join(", ");
  }
  function loreProfile(ce, c, mode) {
    var cfg = loreSettings(ce), r = c.relationship || {}, lines = [LORE_PROFILE_OPEN], relationship,
        compact = mode === "compact", minimal = mode === "minimal",
        description = c.origin === "story_card" || minimal ? "" : String(c.description || "").replace(/\s+/g, " ").trim().slice(0, compact ? 220 : 380),
        goals = compact || minimal ? "" : (c.goals || []).filter(Boolean).slice(0, 2).join("; ").slice(0, 180);
    lines.push(c.name + (description ? " — " + description : ""));
    if (!minimal) lines.push("Status: " + (c.status || "active") + "; importance: " + (c.importance || "temporary") + ".");
    relationship = (minimal ? "Relationship: " : "Relationship with " + (ce.player && ce.player.name || "the player") + ": ") + (r.summary || "acquaintance");
    if (!minimal && cfg.includeRelationshipStats) {
      relationship += "; familiarity " + clamp(r.familiarity) + "; trust " + clamp(r.trust) + "; affection " + clamp(r.affection) +
        "; respect " + clamp(r.respect) + "; attraction " + clamp(r.attraction) + "; resentment " + clamp(r.resentment);
    }
    lines.push(relationship + ".");
    if (goals) lines.push("Goals: " + goals + ".");
    lines.push(LORE_PROFILE_CLOSE);
    return lines.join("\n");
  }
  function composeLoreEntry(ce, c, base) {
    var playerText = String(base || "").replace(/^\s+|\s+$/g, ""), notices = [PLAYER_NOTES_NOTICE, PLAYER_NOTES_HEADING],
        modes = ["full", "compact", "minimal"], i, j, profile, candidate;

    if (playerText.length > CARD_ENTRY_LIMIT) {
      boundedWarning(ce, "Player notes for " + c.name + " exceeded the Story Card limit and were safely capped at " + CARD_ENTRY_LIMIT + " characters.");
      playerText = playerText.slice(0, CARD_ENTRY_LIMIT);
    }

    for (i = 0; i < modes.length; i++) {
      profile = loreProfile(ce, c, modes[i]);
      for (j = 0; j < notices.length; j++) {
        candidate = profile + "\n\n" + notices[j] + (playerText ? "\n" + playerText : "");
        if (candidate.length <= CARD_ENTRY_LIMIT) return candidate;
      }
    }

    for (j = 0; j < notices.length; j++) {
      candidate = notices[j] + (playerText ? "\n" + playerText : "");
      if (candidate.length <= CARD_ENTRY_LIMIT) {
        boundedWarning(ce, "The Story Card for " + c.name + " is full; its managed profile remains in the ledger while player notes stay intact.");
        return candidate;
      }
    }

    boundedWarning(ce, "The Story Card for " + c.name + " is full; player notes were preserved and its managed profile remains in the ledger.");
    return playerText.slice(0, CARD_ENTRY_LIMIT);
  }
  function simpleHash(value) {
    var text = String(value || ""), hash = 0, i;
    for (i = 0; i < text.length; i++) hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
    return String(hash);
  }
  function cardClaimedByOther(ce, card, index, characterId) {
    var identity = cardIdentity(card, index), claimed = false;
    Object.keys(ce.characters).forEach(function (id) {
      var c = ce.characters[id];
      if (id !== characterId && c.card && String(c.card.id || "") === identity) claimed = true;
    });
    return claimed;
  }
  function findLinkedCard(cards, ce, c) {
    var cfg = loreSettings(ce), i, card, full = normaliseName(c.name), keys;
    if (c.card && c.card.id) {
      for (i = 0; i < cards.length; i++) if (cardIdentity(cards[i], i) === String(c.card.id)) return { card: cards[i], index: i, source: c.card.source || "reused" };
    }
    for (i = 0; i < cards.length; i++) if (cardType(cards[i]) === "character" && hasLoreMarker(cards[i], c.id)) return { card: cards[i], index: i, source: c.card && c.card.source || "reused" };
    if (!cfg.reuseMatchingCards) return null;
    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      if (cardType(card) !== "character" || looksLikePlayerHoldingCard(card, ce)) continue;
      if (cardClaimedByOther(ce, card, i, c.id)) continue;
      if (normaliseName(cardTitle(card)) === full) return { card: card, index: i, source: "reused" };
    }
    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      if (cardType(card) !== "character" || looksLikePlayerHoldingCard(card, ce)) continue;
      if (cardClaimedByOther(ce, card, i, c.id)) continue;
      keys = splitCardKeys(card).map(normaliseName);
      if (keys.indexOf(full) >= 0) return { card: card, index: i, source: "reused" };
    }
    return null;
  }
  function loreEligible(ce, c) {
    var cfg = loreSettings(ce);
    if (!cfg.enabled || !c || (ce.player && normaliseName(c.name) === normaliseName(ce.player.name))) return false;
    if (c.origin === "creator") return cfg.creatorNPCs !== false;
    if (c.origin === "story_card") return true;
    if (c.origin === "player" && c.persistent) return true;
    return cfg.emergentNPCs !== false && (c.persistent || c.importance === "recurring" || c.importance === "major" || Number(c.mentions || 0) >= cfg.emergentMentions);
  }
  function createLoreCard(ce, c, cards) {
    var temporaryKey = "__CK_LORE_" + c.id + "_" + ce.turn, before = cards.length, result, card, index = -1, i;
    if (typeof addStoryCard !== "function") return null;
    result = addStoryCard(temporaryKey, "", "character");
    if (typeof result === "number" && cards[result]) index = result;
    else if (result && typeof result === "object") { card = result; index = cards.indexOf(result); }
    if (!card && index >= 0) card = cards[index];
    if (!card) {
      for (i = cards.length - 1; i >= before; i--) {
        if (splitCardKeys(cards[i]).indexOf(temporaryKey) >= 0 || String(cards[i].keys || "") === temporaryKey) { card = cards[i]; index = i; break; }
      }
    }
    if (!card) return null;
    card.type = "character";
    card.title = c.name;
    return { card: card, index: index >= 0 ? index : cards.indexOf(card), source: "created" };
  }
  function syncLoreCharacter(ce, c, cards) {
    var link = findLinkedCard(cards, ce, c), card, base, marker, nextEntry, nextKeys, nextDescription, hash;
    if (!link) link = createLoreCard(ce, c, cards);
    if (!link || !link.card) { boundedWarning(ce, "Lore could not create a Character card for " + c.name + "."); return; }
    card = link.card;
    base = stripPlayerNotesNotice(stripManagedProfile(card.entry));
    marker = LORE_MARKER_PREFIX + c.id + "]";
    nextEntry = composeLoreEntry(ce, c, base);
    nextKeys = mergeCardKeys(splitCardKeys(card), generatedCardKeys(ce, c));
    nextDescription = String(card.description || "")
      .replace(new RegExp("\\s*" + escapeRegExp(marker), "g"), "")
      .replace(new RegExp("\\s*" + escapeRegExp(LEGACY_MARKER_PREFIX + c.id + "]"), "g"), "")
      .replace(/\s+$/, "");
    nextDescription = composeCardDescription(ce, c, nextDescription, marker);
    hash = simpleHash([nextEntry, nextKeys, nextDescription, card.title, card.type].join("\n"));
    if (!c.card || c.card.lastHash !== hash) {
      card.entry = nextEntry;
      card.keys = nextKeys;
      card.description = nextDescription;
      if (!card.title) card.title = c.name;
      if (!card.type) card.type = "character";
    }
    c.card = c.card || emptyCardLink();
    c.card.id = cardIdentity(card, link.index);
    c.card.source = link.source;
    c.card.lastSyncTurn = ce.turn;
    c.card.lastHash = hash;
  }
  function syncLore(ce) {
    var cards = availableStoryCards(), cfg = loreSettings(ce);
    if (!cfg.enabled || !cards) return;
    adoptLoreCharacters(ce);
    Object.keys(ce.characters).forEach(function (id) {
      var c = ce.characters[id];
      if (!loreEligible(ce, c)) return;
      try { syncLoreCharacter(ce, c, cards); }
      catch (error) { boundedWarning(ce, "Lore failed for " + c.name + ": " + String(error && error.message || error).slice(0, 120)); }
    });
  }
  function releasePlayerLoreCard(ce) {
    var cards = availableStoryCards(), player = normaliseName(ce.player && ce.player.name);
    if (!cards || !player) return;
    cards.forEach(function (card) {
      if (normaliseName(cardTitle(card)) !== player) return;
      card.entry = stripPlayerNotesNotice(stripManagedProfile(card.entry));
      card.description = stripLegacyAutoCardsPrompt(stripManagedCardMemory(card.description))
        .replace(/\s*\[(?:CK-LORE|CK-AUTOCARD):[^\]]+\]\s*/gi, "\n")
        .replace(/^\s+|\s+$/g, "");
    });
  }
  function syncPlayerIdentity(state, ce) {
    var playerName, ids;
    ce.player = ce.player || { name: "Player", knows: [] };
    ce.scene = ce.scene || { present: [], nearby: [] };
    ce.player.knows = Array.isArray(ce.player.knows) ? ce.player.knows : [];
    playerName = configuredPlayerName(state, ce.player.name);
    if (playerName) ce.player.name = playerName;
    ids = Object.keys(ce.characters || {});
    ids.forEach(function (id) {
      var c = ce.characters[id];
      if (!c || normaliseName(c.name) !== normaliseName(ce.player.name)) return;
      if (c.origin === "story_card" || c.origin === "emergent" || c.origin === "player") delete ce.characters[id];
      else boundedWarning(ce, "Creator NPC shares the player's resolved name: " + ce.player.name + ".");
    });
    normaliseSceneRoster(ce, false);
    releasePlayerLoreCard(ce);
  }
  function migrate(ce) {
    var ids;
    ce.settings = ce.settings || {};
    loreSettings(ce);
    memorySettings(ce);
    threadSettings(ce);
    ce.scene = ce.scene || {};
    if (ce.scene.day !== undefined) ce.scene.day = normaliseDay(ce.scene.day);
    if (!Array.isArray(ce.scene.present)) ce.scene.present = [];
    if (!Array.isArray(ce.scene.nearby)) ce.scene.nearby = [];
    normaliseSceneRoster(ce, false);
    if (typeof ce.resumeAfterCommand !== "boolean") ce.resumeAfterCommand = false;
    if (typeof ce.needsStorySeparator !== "boolean") ce.needsStorySeparator = false;
    if (typeof ce.lastNarrative !== "string") ce.lastNarrative = "";
    if (typeof ce.pendingSceneInput !== "string") ce.pendingSceneInput = "";
    ce.sceneInference = ce.sceneInference || {};
    if (typeof ce.activeMemoryTaskId !== "string") ce.activeMemoryTaskId = "";
    ce.characters = ce.characters || {};
    Object.keys(ce.characters).forEach(function (id) {
      var c = ce.characters[id];
      c.aliases = Array.isArray(c.aliases) ? c.aliases : [];
      c.knows = Array.isArray(c.knows) ? c.knows : [];
      c.goals = Array.isArray(c.goals) ? c.goals : [];
      c.notes = Array.isArray(c.notes) ? c.notes : [];
      c.mentions = Number(c.mentions || 0);
      if (c.lastMentionTurn === undefined) c.lastMentionTurn = -1;
      c.card = c.card || emptyCardLink();
      ensureMemory(ce, c);
    });
    ce.threads = ce.threads || {};
    ce.threadCandidates = ce.threadCandidates && typeof ce.threadCandidates === "object" ? ce.threadCandidates : {};
    ids = Object.keys(ce.threads);
    ids.forEach(function (id) {
      var t = ce.threads[id], oldSituation = String(t.situation || ""), setupThread;
      t.aliases = Array.isArray(t.aliases) ? t.aliases : [];
      if (t.creatorProtected) {
        setupThread = (CE_SETUP.threads || []).filter(function (configured) {
          return configured && normaliseName(configured.name) === normaliseName(t.name);
        })[0];
        if (setupThread && Array.isArray(setupThread.aliases)) t.aliases = uniqueThreadAliases(t.aliases.concat(setupThread.aliases), t.name);
      }
      if (t.premise === undefined) t.premise = t.creatorProtected ? oldSituation : "";
      if (t.currentSituation === undefined) t.currentSituation = t.creatorProtected ? "" : oldSituation;
      if (t.baseImportance === undefined) t.baseImportance = t.creatorProtected ? (t.type === "side" ? 55 : 90) : 0;
      if (t.creatorProtected && Number(t.importance) < t.baseImportance) t.importance = t.baseImportance;
    });
    mergeDuplicateThreads(ce);
    enforceThreadLimits(ce);
    pruneThreadCandidates(ce);
    ce.version = VERSION;
    syncLore(ce);
    return ce;
  }
  function init(state) {
    if (state.ce && state.ce.initialised) {
      syncPlayerIdentity(state, state.ce);
      return migrate(state.ce);
    }
    var used = {}, setup = resolveSetupPlaceholders(state, clone(CE_SETUP)),
        playerName = configuredPlayerName(state, "Player"), ce = {
      version: VERSION, initialised: true, turn: 0,
      settings: setup.settings || {},
      player: { name: playerName, knows: [] },
      scene: setup.scene || {}, characters: {}, threads: {}, threadCandidates: {}, truths: [], events: [],
      pendingPanel: null, resumeAfterCommand: false, needsStorySeparator: false,
      lastNarrative: "", activeMemoryTaskId: "",
      pendingSceneInput: "", sceneInference: {}, warnings: []
    };
    (setup.npcs || []).forEach(function (npc) {
      if (!npc) { ce.warnings.push("Skipped an NPC with no name."); return; }
      var npcName = configuredName(state, npc, npc.fallbackName || ""), id;
      if (!npcName) { ce.warnings.push("Skipped an NPC whose name placeholder had no answer or fallback."); return; }
      if (normaliseName(npcName) === normaliseName(ce.player.name)) {
        ce.warnings.push("Skipped an NPC matching the player's resolved name: " + npcName + ".");
        return;
      }
      id = uniqueId("npc", npcName, used);
      ce.characters[id] = {
        id: id, name: npcName, aliases: npc.aliases || [], description: npc.description || "",
        origin: "creator", persistent: true, creatorProtected: true,
        status: npc.status || "active", importance: npc.importance || "major",
        knows: npc.knows || [], goals: npc.goals || [], relationship: relation(npc),
        firstSeen: 0, lastSeen: 0, mentions: 0, lastMentionTurn: -1, notes: [], memory: emptyMemory(), card: emptyCardLink()
      };
    });
    (setup.threads || []).forEach(function (thread) {
      if (!thread || !thread.name) { ce.warnings.push("Skipped a thread with no name."); return; }
      var id = uniqueId("thread", thread.name, used),
          baseImportance = thread.importance !== undefined ? clamp(thread.importance) : (thread.type === "side" ? 55 : 90);
      ce.threads[id] = {
        id: id, name: thread.name, aliases: uniqueThreadAliases(thread.aliases || [], thread.name), origin: "creator", creatorProtected: true,
        type: thread.type === "side" ? "side" : "main", importance: baseImportance, baseImportance: baseImportance,
        status: thread.status || "active", premise: thread.premise || thread.situation || "",
        currentSituation: thread.currentSituation || "",
        playerKnows: thread.playerKnows || [], characters: thread.characters || [],
        createdTurn: 0, updatedTurn: 0, notes: []
      };
      ce.player.knows = ce.player.knows.concat(thread.playerKnows || []);
    });
    (setup.truths || []).forEach(function (truth, i) {
      ce.truths.push({ id: "truth_" + (i + 1), text: String(truth), origin: "creator", mutable: false, revealedToPlayer: false, knownBy: [] });
    });
    state.ce = ce;
    syncPlayerIdentity(state, ce);
    return migrate(ce);
  }
  function findCharacter(ce, name) {
    var needle = String(name || "").trim().toLowerCase(), ids = Object.keys(ce.characters), partial = [];
    for (var i = 0; i < ids.length; i++) {
      var c = ce.characters[ids[i]];
      if (c.name.toLowerCase() === needle) return c;
      if ((c.aliases || []).some(function (a) { return String(a).toLowerCase() === needle; })) return c;
      var full = c.name.toLowerCase(), words = full.split(/\s+/);
      if (words.indexOf(needle) >= 0 || full.indexOf(needle + " ") === 0 || needle.indexOf(full + " ") === 0) partial.push(c);
    }
    return partial.length === 1 ? partial[0] : null;
  }
  // Learn a title only after the story explicitly equates it with a known
  // character. Mere mentions of a role must not reveal a hidden identity.
  function learnExplicitCharacterTitles(ce, source) {
    var prose = String(source || "").replace(/"[^"\n]*"|“[^”\n]*”/g, " ");
    Object.keys(ce.characters || {}).forEach(function (id) {
      var c = ce.characters[id], name, pattern, match, title;
      if (!c || !c.name || normaliseName(c.name) === normaliseName(ce.player && ce.player.name)) return;
      name = escapeRegExp(c.name);
      pattern = new RegExp("\\b" + name + "(?:\\s*[,—–:.]\\s*|\\s*\\n\\s*|\\s+(?:is|was|known as|called|also known as)\\s+)(?:the|a|an)\\s+([A-Z][A-Za-z'’]*(?:\\s+[A-Z][A-Za-z'’]*){0,2})\\s+of\\b", "gi");
      while ((match = pattern.exec(prose))) {
        // The matcher is case-insensitive so it can read "The Villain" as
        // well as "the Villain". Require the captured title itself to be a
        // proper name: "Xander, the smell of rain" is ordinary prose.
        if (!/^[A-Z]/.test(match[1])) continue;
        title = "The " + match[1];
        if (!exactCharacter(ce, title) || exactCharacter(ce, title).id === c.id) addAlias(ce, c, title);
      }
    });
  }
  function uniqueThreadAliases(values, primaryName) {
    var result = [], seen = {}, primary = normaliseName(primaryName);
    (Array.isArray(values) ? values : []).forEach(function (value) {
      var alias = String(value || "").replace(/\s+/g, " ").trim(), key = normaliseName(alias);
      if (alias && key !== primary && !seen[key]) { seen[key] = true; result.push(alias); }
    });
    return result.slice(0, 12);
  }
  function threadBaseName(value) {
    var name = normaliseName(value).replace(/^thread\s*:\s*/, "").replace(/^(?:a|an|the)\s+/, "");
    return normaliseName(name.split(/\s+(?:—|–|-)\s+/)[0]);
  }
  function threadCanonicalName(value) {
    var suffixes = {
      arc:1, competition:1, development:1, developments:1, phase:1, planning:1,
      prep:1, preparation:1, preparations:1, progress:1, season:1, storyline:1,
      tension:1, tensions:1, thread:1, update:1, updates:1
    }, words = threadBaseName(value).replace(/[^a-z0-9'’]+/g, " ").split(/\s+/).filter(Boolean);
    while (words.length > 1 && suffixes[words[words.length - 1]]) words.pop();
    return words.join(" ");
  }
  function threadWordSet(value) {
    var ignored = { a:1, an:1, and:1, arc:1, current:1, of:1, plot:1, storyline:1, the:1, thread:1 }, synonyms = {
      anomaly:"glitch", bug:"glitch", error:"glitch", fault:"glitch",
      autonomy:"agency", freedom:"agency",
      inquiry:"investigation", probe:"investigation",
      mission:"quest", objective:"quest", task:"quest",
      danger:"threat", crisis:"threat",
      romance:"relationship", romantic:"relationship",
      scheme:"plan", conspiracy:"plan",
      contest:"competition", tournament:"competition"
    }, seen = {}, out = [];
    threadCanonicalName(value).split(/\s+/).forEach(function (word) {
      word = synonyms[word] || word;
      if (word && !ignored[word] && !seen[word]) { seen[word] = true; out.push(word); }
    });
    return out;
  }
  function threadNameScore(left, right) {
    var a = threadWordSet(left), b = threadWordSet(right), map = {}, intersection = 0;
    if (!a.length || !b.length) return 0;
    b.forEach(function (word) { map[word] = true; });
    a.forEach(function (word) { if (map[word]) intersection += 1; });
    if (!intersection) return 0;
    if (a.length === 1 && b.length === 1) return 1;
    if (intersection < 2) return 0;
    return intersection / Math.min(a.length, b.length);
  }
  function directThreadNameMatch(thread, name) {
    var needle = normaliseName(name), canonical = threadCanonicalName(name);
    if (!thread || !needle) return false;
    if (normaliseName(thread.name) === needle) return true;
    if ((thread.aliases || []).some(function (alias) { return normaliseName(alias) === needle; })) return true;
    if (canonical && threadCanonicalName(thread.name) === canonical) return true;
    return (thread.aliases || []).some(function (alias) { return canonical && threadCanonicalName(alias) === canonical; });
  }
  function findThread(ce, name, excludeId, creatorOnly) {
    var ids = Object.keys(ce.threads || {}), direct = [], scored = [], i, thread, names, score;
    for (i = 0; i < ids.length; i++) {
      thread = ce.threads[ids[i]];
      if (!thread || thread.id === excludeId || (creatorOnly && !thread.creatorProtected)) continue;
      if (directThreadNameMatch(thread, name)) direct.push(thread);
    }
    if (direct.length) return direct.filter(function (t) { return t.creatorProtected; })[0] ||
      direct.sort(function (a,b) { return Number(a.createdTurn || 0) - Number(b.createdTurn || 0); })[0];
    for (i = 0; i < ids.length; i++) {
      thread = ce.threads[ids[i]];
      if (!thread || thread.id === excludeId || (creatorOnly && !thread.creatorProtected)) continue;
      names = [thread.name].concat(thread.aliases || []);
      score = Math.max.apply(null, names.map(function (candidate) { return threadNameScore(name, candidate); }));
      if (score >= 0.67) scored.push({ thread:thread, score:score });
    }
    if (!scored.length) return null;
    scored.sort(function (a,b) {
      return b.score - a.score || Number(b.thread.creatorProtected) - Number(a.thread.creatorProtected) || Number(a.thread.createdTurn || 0) - Number(b.thread.createdTurn || 0);
    });
    return scored[0].thread;
  }
  function transientSocialThreadName(value) {
    var social = {
      attraction:1, banter:1, chemistry:1, conversation:1, encounter:1,
      flirtation:1, flirting:1, intimacy:1, interaction:1, relationship:1,
      rivalry:1, romance:1, romantic:1, tension:1, tensions:1
    }, words = threadBaseName(value).split(/\s+/).filter(function (word) {
      return word && !/^(?:a|an|and|the)$/.test(word);
    });
    return !!words.length && words.every(function (word) { return !!social[word]; });
  }
  function threadStatusRank(status) {
    var ranks = { active:1, dormant:2, resolved:3, completed:3, abandoned:3, failed:3 };
    return ranks[normaliseName(status)] || 0;
  }
  function mergeThreadInto(ce, keeper, thread) {
    var latest, keeperRank;
    if (!keeper || !thread || keeper.id === thread.id) return;
    latest = Number(thread.updatedTurn || 0) >= Number(keeper.updatedTurn || 0) ? thread : keeper;
    if (latest.currentSituation) keeper.currentSituation = latest.currentSituation;
    keeper.aliases = uniqueThreadAliases((keeper.aliases || []).concat([thread.name]).concat(thread.aliases || []), keeper.name);
    keeperRank = threadStatusRank(keeper.status);
    if ((!keeper.creatorProtected || threadStatusRank(thread.status) >= 3) && threadStatusRank(thread.status) > keeperRank) keeper.status = thread.status;
    keeper.importance = Math.max(Number(keeper.importance || 0), Number(thread.importance || 0));
    keeper.updatedTurn = Math.max(Number(keeper.updatedTurn || 0), Number(thread.updatedTurn || 0));
    delete ce.threads[thread.id];
  }
  function mergeDuplicateThreads(ce) {
    var groups = {};
    Object.keys(ce.threads || {}).forEach(function (id) {
      var thread = ce.threads[id], base;
      if (!thread.creatorProtected && thread.origin === "emergent" && transientSocialThreadName(thread.name)) {
        delete ce.threads[id];
        return;
      }
      base = threadCanonicalName(thread.name);
      if (base) (groups[base] = groups[base] || []).push(thread);
    });
    Object.keys(ce.threads || {}).forEach(function (id) {
      var thread = ce.threads[id], keeper;
      if (!thread || thread.creatorProtected) return;
      keeper = findThread(ce, thread.name, thread.id, true);
      if (keeper) mergeThreadInto(ce, keeper, thread);
    });
    groups = {};
    Object.keys(ce.threads || {}).forEach(function (id) {
      var thread = ce.threads[id], base = threadCanonicalName(thread.name);
      if (base) (groups[base] = groups[base] || []).push(thread);
    });
    Object.keys(groups).forEach(function (base) {
      var matches = groups[base], keeper;
      if (matches.length < 2) return;
      keeper = matches.filter(function (t) { return t.creatorProtected; })[0] ||
        matches.sort(function (a,b) { return Number(a.createdTurn || 0) - Number(b.createdTurn || 0); })[0];
      matches.forEach(function (thread) {
        mergeThreadInto(ce, keeper, thread);
      });
    });
  }
  function addCharacter(ce, name, origin, exactOnly) {
    var existing = exactOnly ? exactCharacter(ce, name) : findCharacter(ce, name);
    if (existing) return existing;
    var used = {}; Object.keys(ce.characters).forEach(function (id) { used[id] = true; });
    var id = uniqueId("npc", name, used);
    ce.characters[id] = { id:id, name:name, aliases:[], description:"", origin:origin || "emergent", persistent:false,
      creatorProtected:false, status:"active", importance:"temporary", knows:[], goals:[], relationship:relation({relationship:"acquaintance"}),
      firstSeen:ce.turn, lastSeen:ce.turn, mentions:0, lastMentionTurn:-1, notes:[], memory:emptyMemory(), card:emptyCardLink() };
    return ce.characters[id];
  }
  function recordMention(ce, c) {
    if (!c || Number(c.lastMentionTurn) === Number(ce.turn)) return;
    c.mentions = Number(c.mentions || 0) + 1;
    c.lastMentionTurn = Number(ce.turn);
    c.lastSeen = Number(ce.turn);
    if (c.origin !== "creator" && c.origin !== "story_card" && c.mentions >= loreSettings(ce).emergentMentions) {
      c.persistent = true;
      if (c.importance === "temporary") c.importance = "recurring";
    }
  }
  function addAlias(ce, c, value) {
    var alias = String(value || "").replace(/\s+/g, " ").trim(), needle = normaliseName(alias), collision,
        blocked = { he:1, she:1, they:1, him:1, her:1, them:1, friend:1, rival:1, boss:1, master:1, captain:1, player:1, you:1 };
    if (!c || alias.length < 2 || alias.length > 40 || /[|~)=\[\]]/.test(alias) || blocked[needle]) return false;
    collision = exactCharacter(ce, alias);
    if (collision && collision.id !== c.id) return false;
    c.aliases = c.aliases || [];
    if (normaliseName(c.name) !== needle && c.aliases.map(normaliseName).indexOf(needle) < 0) c.aliases.push(alias);
    return true;
  }
  function setRelationshipPreset(c, value) {
    var key = relationshipPresetKey(value), previous;
    if (!c || !PRESETS[key]) return null;
    previous = c.relationship && c.relationship.summary || "acquaintance";
    c.relationship = relation({ relationship: key });
    return { previous: previous, current: c.relationship.summary };
  }
  function observeCharacters(ce, text) {
    var visible = String(text || "");
    Object.keys(ce.characters).forEach(function (id) {
      var c = ce.characters[id], names = [c.name].concat(c.aliases || []), found = names.some(function (name) {
        var clean = String(name || "").trim();
        if (clean.length < 2) return false;
        return new RegExp("(^|[^A-Za-z0-9'])" + escapeRegExp(clean) + "(?=$|[^A-Za-z0-9'])", "i").test(visible);
      });
      if (found) recordMention(ce, c);
    });
  }
  function activeEmergentThreads(ce) {
    return Object.keys(ce.threads || {}).map(function (id) { return ce.threads[id]; }).filter(function (thread) {
      return thread.origin === "emergent" && !thread.creatorProtected && normaliseName(thread.status) === "active";
    });
  }
  function enforceThreadLimits(ce) {
    var cfg = threadSettings(ce), active = activeEmergentThreads(ce), stored, excess;
    active.sort(function (a,b) {
      return Number(b.importance || 0) - Number(a.importance || 0) || Number(b.updatedTurn || 0) - Number(a.updatedTurn || 0);
    }).slice(cfg.maxActiveEmergent).forEach(function (thread) { thread.status = "dormant"; });
    stored = Object.keys(ce.threads || {}).map(function (id) { return ce.threads[id]; }).filter(function (thread) {
      return thread.origin === "emergent" && !thread.creatorProtected;
    });
    excess = stored.length - cfg.maxStoredEmergent;
    if (excess > 0) {
      stored.sort(function (a,b) {
        var aActive = normaliseName(a.status) === "active" ? 1 : 0, bActive = normaliseName(b.status) === "active" ? 1 : 0;
        return aActive - bActive || Number(a.updatedTurn || 0) - Number(b.updatedTurn || 0) || Number(a.importance || 0) - Number(b.importance || 0);
      }).slice(0, excess).forEach(function (thread) { delete ce.threads[thread.id]; });
    }
  }
  function candidateMatch(candidate, name) {
    return directThreadNameMatch({ name:candidate.name, aliases:candidate.aliases || [] }, name) || threadNameScore(candidate.name, name) >= 0.67;
  }
  function pruneThreadCandidates(ce) {
    var ids, maxCandidates = Math.max(8, threadSettings(ce).maxStoredEmergent * 2);
    ce.threadCandidates = ce.threadCandidates && typeof ce.threadCandidates === "object" ? ce.threadCandidates : {};
    ids = Object.keys(ce.threadCandidates);
    ids.forEach(function (id) {
      var candidate = ce.threadCandidates[id];
      if (!candidate || Number(candidate.lastSeenTurn || 0) < Number(ce.turn || 0) - 12) delete ce.threadCandidates[id];
    });
    ids = Object.keys(ce.threadCandidates);
    if (ids.length > maxCandidates) {
      ids.map(function (id) { return ce.threadCandidates[id]; }).sort(function (a,b) {
        return Number(b.lastSeenTurn || 0) - Number(a.lastSeenTurn || 0);
      }).slice(maxCandidates).forEach(function (candidate) { delete ce.threadCandidates[candidate.id]; });
    }
  }
  function registerThreadCandidate(ce, update) {
    var ids, candidate, name = String(update.name || "").replace(/\s+/g, " ").trim(), used = {}, id;
    ce.threadCandidates = ce.threadCandidates && typeof ce.threadCandidates === "object" ? ce.threadCandidates : {};
    ids = Object.keys(ce.threadCandidates);
    candidate = ids.map(function (key) { return ce.threadCandidates[key]; }).filter(function (item) {
      return item && candidateMatch(item, name);
    }).sort(function (a,b) { return Number(b.lastSeenTurn || 0) - Number(a.lastSeenTurn || 0); })[0];
    if (!candidate) {
      ids.forEach(function (key) { used[key] = true; });
      id = uniqueId("candidate", name, used);
      candidate = ce.threadCandidates[id] = {
        id:id, name:name, aliases:[], firstSeenTurn:Number(ce.turn || 0), lastSeenTurn:-1,
        seenTurns:0, status:"active", importance:50, situation:""
      };
    } else if (normaliseName(candidate.name) !== normaliseName(name)) {
      candidate.aliases = uniqueThreadAliases((candidate.aliases || []).concat([name]), candidate.name);
    }
    if (Number(candidate.lastSeenTurn) !== Number(ce.turn || 0)) candidate.seenTurns = Number(candidate.seenTurns || 0) + 1;
    candidate.lastSeenTurn = Number(ce.turn || 0);
    if (update.status) candidate.status = String(update.status);
    if (update.situation) candidate.situation = String(update.situation).slice(0, 300);
    if (update.importance !== undefined) candidate.importance = clamp(update.importance);
    pruneThreadCandidates(ce);
    return candidate;
  }
  function applyThreadUpdate(ce, thread, update, requestedName) {
    if (!thread) return;
    // A synonym may update a thread's situation, but only its authoritative
    // primary name may close it. This prevents a resolved phase or subplot
    // from accidentally resolving the protected parent thread.
    if (update.status && (normaliseName(thread.name) === normaliseName(requestedName) || normaliseName(update.status) === "active")) thread.status = String(update.status);
    if (update.situation) {
      var situation = String(update.situation).slice(0, 300);
      if (!thread.creatorProtected && !thread.premise) thread.premise = situation;
      thread.currentSituation = situation;
    }
    if (update.importance !== undefined) {
      var proposedImportance = clamp(update.importance);
      thread.importance = thread.creatorProtected ? Math.max(Number(thread.baseImportance || 0), proposedImportance) : proposedImportance;
    }
    thread.updatedTurn = Number(ce.turn || 0);
  }
  function addThread(ce, name, origin) {
    var existing = findThread(ce, name);
    if (existing) return existing;
    var used = {}; Object.keys(ce.threads).forEach(function (id) { used[id] = true; });
    var id = uniqueId("thread", name, used);
    ce.threads[id] = { id:id, name:name, aliases:[], origin:origin || "emergent", creatorProtected:false, type:"side", importance:50,
      baseImportance:0, status:"active", premise:"", currentSituation:"", playerKnows:[], characters:[], createdTurn:ce.turn, updatedTurn:ce.turn, notes:[] };
    return ce.threads[id];
  }
  function panel(ce, kind, arg) {
    var arm = kind === "commands" ? "COMMANDS" : (kind === "lore" || kind === "memory" ? "LORE" : (kind === "state" || kind === "gate" ? "LEDGER" : "NARRATION")),
        lines = ["CHRONICLE KEEPER — " + arm];
    if (kind === "commands") {
      lines.push(arg || "Player command reference ready.");
      lines.push("");
      lines.push(commandReferenceText());
    } else if (kind === "where") {
      var s = ce.scene || {};
      if (ce.missingSceneTurns >= 2) lines.push("Model scene packets missing: " + ce.missingSceneTurns + " story turn(s); fields without direct prose evidence may be stale.");
      lines.push([s.location, s.area].filter(Boolean).join(" — ") || "Location unknown");
      lines.push([s.day ? "Day " + s.day : "", s.time || ""].filter(Boolean).join(", "));
      lines.push("Player: " + (ce.player && ce.player.name || "Player"));
      lines.push("Present NPCs: " + ((s.present || []).join(", ") || "None"));
      lines.push("Nearby NPCs: " + ((s.nearby || []).join(", ") || "None"));
      if (ce.missingSceneTurns) {
        var verified = Object.keys(ce.sceneInference || {}).filter(function (key) { return ce.sceneInference[key]; });
        lines.push("Prose-derived fields: " + (verified.join(", ") || "None; last recorded scene shown"));
      }
    } else if (kind === "threads") {
      Object.keys(ce.threads).map(function (id) { return ce.threads[id]; }).sort(function(a,b){ return b.importance-a.importance; })
        .forEach(function (t) {
          var current = t.currentSituation || "No current development recorded.";
          lines.push("• " + t.name + " — " + t.status + "\n  " + current);
        });
      if (lines.length === 1) lines.push("No tracked threads.");
    } else if (kind === "relationships") {
      var c = findCharacter(ce, arg);
      if (!c) lines.push("No tracked character named " + arg + ".");
      else {
        var r = c.relationship;
        lines.push(c.name + " — " + r.summary);
        if ((c.aliases || []).length) lines.push("Aliases: " + c.aliases.join(", "));
        ["familiarity","trust","affection","respect","attraction","resentment"].forEach(function(k){ lines.push("• " + k + ": " + r[k]); });
      }
    } else if (kind === "gate") {
      var gateCharacter = findCharacter(ce, arg);
      if (!gateCharacter) lines.push("No tracked character named " + arg + ".");
      else {
        lines.push(gateCharacter.name + " — " + gateCharacter.relationship.summary);
        relationshipGateReport(ce, gateCharacter).forEach(function (line) { lines.push(line); });
      }
    } else if (kind === "memory") {
      var memoryCharacter = findCharacter(ce, arg), memoryCfg = memorySettings(ce), memory;
      if (!memoryCharacter) lines.push("No tracked character named " + arg + ".");
      else {
        memory = ensureMemory(ce, memoryCharacter);
        lines.push(memoryCharacter.name);
        lines.push("Long-term summary: " + (memory.summary || "Not yet created."));
        lines.push("Pinned moments: " + memory.anchors.length + " / " + MAX_ANCHORS + " (preserved across summaries)");
        memory.anchors.forEach(function (anchor) { lines.push("• " + anchor.text); });
        lines.push("Recent developments: " + (memoryCharacter.notes || []).length + " / " + memoryCfg.noteThreshold + " before automatic consolidation");
        (memoryCharacter.notes || []).forEach(function (note) { lines.push("• " + note); });
        lines.push("Queued: " + (memory.pending ? "yes" : "no") + "; completed summaries: " + memory.summaryCount);
      }
    } else if (kind === "lore") {
      var cfg = loreSettings(ce), memorySettingsValue = memorySettings(ce), eligible = 0, linked = 0, adopted = 0, created = 0, pendingMemories = 0;
      Object.keys(ce.characters).forEach(function (id) {
        var c = ce.characters[id];
        if (loreEligible(ce, c)) eligible += 1;
        if (ensureMemory(ce, c).pending) pendingMemories += 1;
        if (c.card && c.card.id) {
          linked += 1;
          if (c.card.source === "created") created += 1;
          else adopted += 1;
        }
      });
      lines.push("Lore: " + (cfg.enabled ? "active" : "inactive"));
      lines.push("Linked: " + linked + " / " + eligible + " eligible characters");
      lines.push("Reused/adopted: " + adopted + "; created: " + created);
      lines.push("Emergent NPC threshold: " + cfg.emergentMentions + " distinct turns");
      lines.push("Auto-memory: " + (memorySettingsValue.enabled ? "active" : "inactive") + "; threshold: " + memorySettingsValue.noteThreshold + " notes; queued: " + pendingMemories);
    } else {
      lines.push("Turn: " + ce.turn);
      lines.push("Scene: " + [ce.scene.location, ce.scene.area].filter(Boolean).join(" — "));
      lines.push("Scene packets missing: " + Number(ce.missingSceneTurns || 0));
      lines.push("Prose-derived fields: " + (Object.keys(ce.sceneInference || {}).filter(function (key) { return ce.sceneInference[key]; }).join(", ") || "none"));
      if (ce.lastEmptyOutput) lines.push("Last empty output: turn " + ce.lastEmptyOutput.turn + "; " + ce.lastEmptyOutput.reason + "; raw " + ce.lastEmptyOutput.rawChars + " chars; scene state retained for retry.");
      if (ce.contextDiagnostics) lines.push("Context: max " + ce.contextDiagnostics.maxChars + " chars; used " + ce.contextDiagnostics.usedChars + "; CK " + ce.contextDiagnostics.ckChars + "; free " + ce.contextDiagnostics.freeChars + "; compact " + (ce.contextDiagnostics.compact ? "yes" : "no") + "; thread push " + (ce.contextDiagnostics.hardPush ? "hard" : "gentle"));
      lines.push("Characters: " + Object.keys(ce.characters).length);
      lines.push("Threads: " + Object.keys(ce.threads).length);
      lines.push("Canon truths: " + ce.truths.length);
    }
    return lines.filter(Boolean).join("\n");
  }
  function commandRemainderIsEmpty(value) {
    var clean = String(value || "")
      .replace(/^\s*>\s*/i, "")
      .replace(/^\s*you(?:\s+(?:say|do|try\s+to|story))?\b\s*/i, "")
      .replace(/[\s\"'“”‘’.,!?…:;\-]+/g, "");
    return !clean;
  }
  function commands(state, input) {
    var ce = init(state), original = String(input), confirmations = [], handled = 0, pureInspection;
    input = original.replace(/\[\s*(?:help|commands)\s*\]/gi, function () {
      var reference = ensureCommandReferenceCard(ce); handled += 1;
      ce.pendingPanel = { kind:"commands", arg:reference.message };
      return "";
    });
    input = input.replace(/\[\s*alias\s*:\s*([^=\]]+)\s*=\s*([^\]]+)\]/gi, function (_, characterName, alias) {
      var c = findCharacter(ce, characterName.trim()); handled += 1;
      if (!c) confirmations.push("Alias not added: no tracked character named " + characterName.trim() + ".");
      else if (!addAlias(ce, c, alias)) confirmations.push("Alias not added: " + alias.trim() + " is unsafe, ambiguous or already in use.");
      else confirmations.push("Alias added: " + c.name + " = " + alias.trim() + ".");
      return "";
    });
    input = input.replace(/\[\s*relationship\s*:\s*([^=\]]+)\s*=\s*([^\]]+)\]/gi, function (_, characterName, preset) {
      var c = findCharacter(ce, characterName.trim()), changed; handled += 1;
      if (!c) confirmations.push("Relationship not changed: no tracked character named " + characterName.trim() + ".");
      else {
        changed = setRelationshipPreset(c, preset);
        if (!changed) confirmations.push("Relationship not changed: unknown preset " + preset.trim() + ".");
        else confirmations.push("Relationship updated: " + c.name + ".\nPrevious: " + changed.previous + ".\nCurrent: " + changed.current + ".");
      }
      return "";
    });
    input = input.replace(/\[\s*summari[sz]e\s*:\s*([^\]]+)\]/gi, function (_, characterName) {
      var c = findCharacter(ce, characterName.trim()), memory; handled += 1;
      if (!c) confirmations.push("Memory not queued: no tracked character named " + characterName.trim() + ".");
      else if (!memorySettings(ce).enabled) confirmations.push("Memory not queued: automatic memory is disabled in setup.");
      else if (!(c.notes || []).length) confirmations.push("Memory not queued: " + c.name + " has no recent developments to consolidate.");
      else {
        memory = ensureMemory(ce, c);
        memory.pending = true;
        memory.forced = true;
        if (memory.queuedTurn < 0) memory.queuedTurn = Number(ce.turn || 0);
        confirmations.push("Memory consolidation queued: " + c.name + ".");
      }
      return "";
    });
    input = input.replace(/\[\s*(pin|unpin)\s*:\s*([^=\]]+)\s*=\s*([^\]]+)\]/gi, function (_, action, characterName, event) {
      var c = findCharacter(ce, characterName.trim()), result; handled += 1;
      if (!c) confirmations.push("Pinned moment not changed: no tracked character named " + characterName.trim() + ".");
      else {
        result = action.toLowerCase() === "pin" ? addMemoryAnchor(ce, c, event, "player") : removeMemoryAnchor(ce, c, event);
        confirmations.push("Pinned moment " + (result === "added" || result === "removed" ? result : "not changed: " + result) + " for " + c.name + ".");
      }
      return "";
    });
    input = input.replace(/\[\s*(keep|forget|major|track|drop)\s*:\s*([^\]]+)\]/gi, function (_, command, value) {
      var c, t, existed; command = command.toLowerCase(); value = value.trim(); handled += 1;
      if (command === "keep" || command === "major") {
        existed = !!findCharacter(ce, value); c = addCharacter(ce, value, "player"); c.persistent = true; c.importance = "major";
        confirmations.push((existed ? "Character retained as major: " : "Character created and retained as major: ") + c.name + ".");
      }
      if (command === "forget") {
        c = findCharacter(ce, value);
        if (!c) confirmations.push("Character not changed: no tracked character named " + value + ".");
        else if (c.creatorProtected) confirmations.push("Character not changed: " + c.name + " is creator-protected.");
        else { c.persistent = false; c.importance = "temporary"; confirmations.push("Character returned to temporary tracking: " + c.name + "."); }
      }
      if (command === "track") {
        existed = !!findThread(ce, value); t = addThread(ce, value, "player"); t.status = "active";
        confirmations.push((existed ? "Thread already tracked and activated: " : "Thread created: ") + t.name + ".");
      }
      if (command === "drop") {
        t = findThread(ce, value);
        if (!t) confirmations.push("Thread not changed: no tracked thread named " + value + ".");
        else { t.status = "dormant"; confirmations.push("Thread made dormant: " + t.name + "."); }
      }
      return "";
    });
    input = input.replace(/\[\s*(where|threads|state|lore)\s*\]/gi, function (_, command) {
      handled += 1; ce.pendingPanel = { kind: command.toLowerCase(), arg: "" };
      return "";
    });
    input = input.replace(/\[\s*relationships\s*:\s*([^\]]+)\]/gi, function (_, value) {
      handled += 1; ce.pendingPanel = { kind: "relationships", arg: value.trim() };
      return "";
    });
    input = input.replace(/\[\s*gate\s*:\s*([^\]]+)\]/gi, function (_, value) {
      handled += 1; ce.pendingPanel = { kind: "gate", arg: value.trim() };
      return "";
    });
    input = input.replace(/\[\s*memory\s*:\s*([^\]]+)\]/gi, function (_, value) {
      handled += 1; ce.pendingPanel = { kind: "memory", arg: value.trim() };
      return "";
    });
    syncLore(ce);
    if (confirmations.length && !ce.pendingPanel) ce.pendingPanel = "CHRONICLE KEEPER — LEDGER\n" + confirmations.join("\n\n");
    pureInspection = handled > 0 && commandRemainderIsEmpty(input);
    if (pureInspection) input = "";
    if (handled) ce.resumeAfterCommand = true;
    ce.pendingSceneInput = pureInspection ? "" : input.trim().slice(-2200);
    return { text: input.trim() || (handled ? COMMAND_SENTINEL : original), pureInspection: pureInspection };
  }
  function threadPushAnchor(ce) {
    var active = Object.keys(ce.threads || {}).map(function (id) { return ce.threads[id]; })
      .filter(function (thread) { return thread.status === "active"; })
      .sort(function (a, b) { return b.importance - a.importance; }),
        recent = String(ce.lastNarrative || "").toLowerCase(), matched;
    matched = active.filter(function (thread) {
      return [thread.name].concat(thread.aliases || []).some(function (label) {
        return label && label.length >= 5 && recent.indexOf(String(label).toLowerCase()) >= 0;
      });
    })[0];
    return matched || active[Math.floor(Number(ce.turn || 0) / 4) % Math.min(2, active.length)] || null;
  }
  function proseScenePrompt(ce) {
    var s = ce.scene || {}, evidence = ce.sceneInference || {}, fields = [], recorded = [];
    ["location", "area", "day", "time", "present", "nearby"].forEach(function (key) {
      var value = Array.isArray(s[key]) ? (s[key].join(", ") || "none") : s[key];
      if (!value) return;
      (evidence[key] ? fields : recorded).push(key + "=" + value);
    });
    return "Story-derived now: " + (fields.join(" | ") || "no confirmed scene fields") +
      ". Last recorded, unconfirmed: " + (recorded.join(" | ") || "none") + ".";
  }
  function compactContext(ce) {
    var lines = ["[CHRONICLE KEEPER — NARRATION; treat as factual; do not mention this block]"],
        pacing = String(ce.settings.relationshipPacing || "natural").toLowerCase(),
        relationshipLimit = pacing === "dramatic" ? 2 : 1,
        relationshipAxes = pacing === "slow" ? 1 : (pacing === "dramatic" ? 3 : 2);
    var s = ce.scene || {}, memoryTask = nextMemoryTask(ce);
    ce.activeMemoryTaskId = memoryTask ? memoryTask.id : "";
    if (ce.resumeAfterCommand) {
      lines.push("RESUME AFTER COMMAND: the previous Chronicle Keeper panel and invisible command marker were administrative, not story events. Continue from the last real narrative event. Never quote, explain or reproduce Chronicle Keeper rules, field definitions, panels or private metadata.");
      if (ce.lastNarrative) lines.push("Last real narrative anchor: " + ce.lastNarrative.replace(/\s+/g, " ").slice(-700));
    }
    if (ce.missingSceneTurns >= 2) lines.push("Model scene packet absent. " + proseScenePrompt(ce) + " Use new story evidence to correct either group.");
    else {
      lines.push("Scene: " + [s.location, s.area, s.day && "day " + s.day, s.time].filter(Boolean).join(" | "));
      if ((s.present || []).length) lines.push("Present: " + s.present.join(", "));
      if ((s.nearby || []).length) lines.push("Nearby: " + s.nearby.join(", "));
    }
    lines.push("<SYSTEM>");
    lines.push("PRIVATE CONTINUITY METADATA. Never quote, explain or reproduce these rules, labels or field definitions in the story.");
    lines.push("Begin the entire output with exactly one short parenthetical operation, then a newline, then normal story prose. Shape: (CE|L=venue or region|A=building or room|D=day|T=time|P=full names|N=full names|C=full NPC name~trust:+1~note:short evidence~anchor:major turning point~memory:consolidated facts|Q=thread name~status:active~situation:current change|K=revealed truth). Omit unused fields; repeat C, Q or K when needed.");
    lines.push("L is the broad location; A is the most specific current building, area or room. C is only a named NPC, never the player. Use tracked full names. Alias is allowed only when the story establishes it. Q is only a durable unresolved plot goal, quest, mystery, threat or contract that requires future action. Never create Q for ordinary conversation, banter, flirting, attraction, rivalry tension, relationship progression, mood or a one-scene interaction; use C note for those. The tracked thread names below are authoritative: reuse an existing thread's exact name whenever the development belongs to it, including synonymous developments. Emit at most one genuinely new Q per turn; a new name is retained only after recurring across distinct turns. Q status is active, dormant, resolved, failed or abandoned. Q situation updates the current development only and never rewrites a protected premise. K is a truth actually revealed or evidenced this turn.");
    lines.push("Scene duty: the player's current input is authoritative now. P and N contain named non-player characters only; never include the player's resolved name. Apply explicit movement in this same operation, never on a later turn. Joining the player, table or conversation means P and removal from N. Moving across the room, to a distant desk, outside or into an adjacent space means N and removal from P. Leaving the venue means removal from both. P and N must be disjoint. When either changes, emit both complete rosters; use P=none or N=none when empty.");
    if (ce.missingSceneTurns >= 2) lines.push("The last scene packet is missing. Rebuild L, A, D, T, P and N from the latest actual story in this output, including unchanged fields, then continue the story.");
    if (ce.hardThreadPush) {
      var pushThread = threadPushAnchor(ce);
      if (pushThread) lines.push("LONG STORY: advance the active thread " + pushThread.name + " from its current situation (" + String(pushThread.currentSituation || pushThread.premise || "").slice(0,180) + ") with one NEW consequence, clue or NPC action this turn. Leave the player's decision to them; do not repeat the same beat.");
    }
    lines.push("Relationship pacing is " + pacing + ". Use only evidenced changes to familiarity, trust, affection, respect, attraction or resentment. Each delta is between -" + relationshipLimit + " and +" + relationshipLimit + ", normally -1 or +1; change at most " + relationshipAxes + " relevant axes for one NPC per turn. Routine presence alone changes nothing.");
    lines.push("C note records one concise verified, durable NPC development from this turn, even when no relationship delta occurs. Use it for promises, discoveries, secrets, betrayals, injuries, alliances, role or goal changes and major shared events; omit routine presence, positioning and small talk. C anchor is optional, only for a newly witnessed major irreversible or defining turning point, not a routine note or an old event. At most one anchor per NPC per turn, and never re-anchor a known moment. Pinned moments survive summary replacements. C memory is a complete replacement rolling summary and is allowed only when a MEMORY TASK below requests it. It consolidates only the supplied prior summary and verified notes; it must not invent or predict.");
    if (memoryTask) lines.push(memoryTaskInstruction(ce, memoryTask));
    lines.push("Values cannot contain |, ~ or ). Never contradict protected canon. The operation is private and the story must occupy most of the output.");
    lines.push("</SYSTEM>");
    Object.keys(ce.characters).map(function(id){return ce.characters[id];})
      .filter(function(c){return c.persistent || c.lastSeen >= ce.turn - 8;}).sort(function(a,b){return b.lastSeen-a.lastSeen;}).slice(0,8)
      .forEach(function(c){
        var memory = ensureMemory(ce, c);
        lines.push("NPC " + c.name + ": " + [c.aliases.length && "aliases=" + c.aliases.join(", "), c.description, "relationship=" + c.relationship.summary, "status=" + c.status, memory.summary && "memory=" + memory.summary, memory.anchors.length && "pinned=" + memory.anchors.map(function (a) { return a.text; }).join("; "), c.notes.length && "recent=" + c.notes.slice(-2).join("; ")].filter(Boolean).join(" | "));
      });
    Object.keys(ce.threads).map(function(id){return ce.threads[id];}).filter(function(t){return t.status === "active";}).sort(function(a,b){return b.importance-a.importance;}).slice(0,6)
      .forEach(function(t){
        lines.push("Thread " + t.name + ": " + [(t.aliases || []).length && "aliases=" + t.aliases.join(", "), t.premise && "protected premise=" + t.premise, t.currentSituation && "current=" + t.currentSituation].filter(Boolean).join(" | "));
      });
    ce.truths.filter(function(t){return !t.mutable;}).slice(0,16).forEach(function(t){
      lines.push((t.revealedToPlayer ? "Player-known canon: " : "SECRET protected canon (do not reveal without story evidence): ") + t.text);
    });
    ce.truths.filter(function(t){return t.mutable && t.revealedToPlayer;}).slice(-8).forEach(function(t){lines.push("Player-known fact: " + t.text);});
    lines.push("[/CHRONICLE KEEPER]");
    
    return lines.join("\n");
  }
  function compactMinimumContext(ce, expanded) {
    var s = ce.scene || {}, active = Object.keys(ce.threads || {}).map(function (id) { return ce.threads[id]; })
      .filter(function (t) { return t.status === "active"; }).sort(function (a,b) { return b.importance - a.importance; })[0],
        memoryTask = expanded ? nextMemoryTask(ce) : null,
        lines = ["[CHRONICLE KEEPER — NARRATION; private; never quote]"];
    lines.push(ce.missingSceneTurns >= 2 ? "Model scene packet absent. " + proseScenePrompt(ce) :
      "Scene: " + [s.location, s.area, s.day && "day " + s.day, s.time].filter(Boolean).join(" | "));
    if (ce.missingSceneTurns < 2) lines.push("Present: " + ((s.present || []).join(", ") || "none") + "; Nearby: " + ((s.nearby || []).join(", ") || "none"));
    lines.push("<SYSTEM>");
    lines.push("Begin the entire output with exactly one short parenthetical operation, then a newline, then story prose. Shape: (CE|L=region|A=room or area|D=day|T=time|P=full NPC names|N=full nearby NPC names|C=NPC~note:durable fact~anchor:major new turning point|Q=thread name~status:active~situation:new beat|K=revealed truth). Omit unused fields. Never show the operation in prose.");
    lines.push(expanded ? "Scene duty: the player's current input is authoritative now. Apply movement and NPC position in this same operation. With the player is P; in an adjacent area is N; departed is neither. On either roster change emit BOTH full P and N; none means empty. Exclude player; never repeat stale scene values." :
      "Scene duty: input wins. P=with player; N=adjacent; departed=neither. On change send both full P,N; none=empty. Exclude player; no stale scene.");
    lines.push(expanded ? "Relationship duty: for meaningful interaction, emit C=Name~trust:+1 (or familiarity, affection, respect, attraction, resentment). At most " + (ce.settings.relationshipPacing === "dramatic" ? 2 : 1) + " point(s) per axis and " + (ce.settings.relationshipPacing === "slow" ? 1 : (ce.settings.relationshipPacing === "dramatic" ? 3 : 2)) + " axes per NPC. Routine presence changes nothing; CK updates labels." :
      "C=Name~trust:+1 for earned score change; C=Name~note:verified lasting NPC event, even without score change. No trait lists.");
    if (expanded) lines.push("Memory duty: for a lasting named NPC choice, promise, discovery or change, emit C=Name~note:one verified event. This is separate from score changes. Do not repeat traits, routine presence or old notes.");
    lines.push("Anchor duty: only for a newly witnessed major defining event, emit C=Name~anchor:verified moment; never for routine notes or repeats. Existing pinned moments persist across rolling summaries.");
    if (ce.missingSceneTurns >= 2) lines.push("Scene packet missing: include all current L, A, D, T, P and N from the latest story now.");
    if (ce.hardThreadPush && active) lines.push("Advance thread " + active.name + " now with a NEW consequence or NPC initiative. Preserve player choice.");
    if (memoryTask) {
      var recentEvidence = String(ce.lastNarrative || "").replace(/[|~)]/g, " ").replace(/\s+/g, " ").trim();
      lines.push("Private memory task: merge " + memoryTask.name + "'s earlier summary [" +
        String(ensureMemory(ce, memoryTask).summary || "none").slice(0,150) + "] with verified notes [" +
        (memoryTask.notes || []).slice(-5).join("; ").replace(/[|~)]/g, " ").slice(0,350) + "]" +
        ((memoryTask.notes || []).length < memorySettings(ce).noteThreshold && recentEvidence &&
          (normaliseName(recentEvidence).indexOf(normaliseName(memoryTask.name)) >= 0 ||
           (s.present || []).map(normaliseName).indexOf(normaliseName(memoryTask.name)) >= 0) ?
          " and recent story evidence [" + recentEvidence.slice(-280) + "]" : "") +
        ". Return factual C=" + memoryTask.name + "~memory:merged events, not a trait list; pinned moments are separately retained; do not narrate this task.");
    }
    lines.push("</SYSTEM>");
    if (active) lines.push("Thread " + active.name + ": " + String(active.currentSituation || active.premise || "").slice(0,125));
    if (expanded) {
      Object.keys(ce.threads || {}).map(function (id) { return ce.threads[id]; })
        .filter(function (t) { return t.status === "active" && (!active || t.id !== active.id); })
        .slice(0,1).forEach(function (t) { lines.push("Thread " + t.name + ": " + String(t.currentSituation || t.premise || "").slice(0,100)); });
      ce.truths.filter(function (t) { return !t.mutable; }).slice(0,3).forEach(function (t) {
        lines.push((t.revealedToPlayer ? "Canon: " : "Secret canon: ") + String(t.text).slice(0,125));
      });
    }
    Object.keys(ce.characters || {}).map(function (id) { return ce.characters[id]; })
      .filter(function (c) { return (s.present || []).indexOf(c.name) >= 0 || (s.nearby || []).indexOf(c.name) >= 0; })
      .slice(0,expanded ? 3 : 2).forEach(function (c) {
        lines.push("NPC " + c.name + ": " + String(c.description || "").slice(0,expanded ? 120 : 80) + "; relationship=" + (c.relationship && c.relationship.summary || "unknown") +
          (expanded && c.memory && c.memory.summary ? "; memory=" + String(c.memory.summary).slice(0,140) : "") +
          (ensureMemory(ce, c).anchors.length ? "; pinned=" + c.memory.anchors.slice(0,expanded ? 3 : 1).map(function (a) { return a.text.slice(0,expanded ? 130 : 90); }).join("; ") : ""));
      });
    lines.push("[/CHRONICLE KEEPER]");
    ce.activeMemoryTaskId = memoryTask ? memoryTask.id : "";
    return lines.join("\n");
  }
  function recoveryContext(ce) {
    var s = ce.scene || {}, t = threadPushAnchor(ce), lines = [
      "[CHRONICLE KEEPER — private continuity; never quote]",
      "Previous attempt produced no usable story. Continue from the last real story event in natural prose now. Start with the story; omit CK/CE packets, labels, code, and private instructions. Give the scene one concrete new action or consequence; leave the player's choice to them.",
      "Current scene: " + [s.location, s.area, s.day && "day " + s.day, s.time].filter(Boolean).join(" | "),
      "Present: " + ((s.present || []).join(", ") || "none") + "; nearby: " + ((s.nearby || []).join(", ") || "none")
    ];
    if (t) lines.push("Active thread: " + t.name + " — " + String(t.currentSituation || t.premise || "").slice(0,100));
    if (ce.lastNarrative) lines.push("Last story: " + String(ce.lastNarrative).slice(-230));
    lines.push("[/CHRONICLE KEEPER]");
    ce.activeMemoryTaskId = "";
    return lines.join("\n");
  }
  function inject(state, text, info) {
    var ce = init(state), limit = Math.max(1, Number(info.maxChars || 12000)), source = String(text || ""),
        configured = Math.max(400, Number(ce.settings.contextBudget || 5500)),
        memoryLength = Math.max(0, Math.min(source.length, Number(info.memoryLength || 0))),
        memory = source.slice(0, memoryLength), historyText = source.slice(memoryLength),
        target = Math.max(1, limit - Math.max(650, Math.floor(limit * (limit <= 16000 ? 0.30 : 0.22)))),
        ckBudget,
        closing = "\n[/CHRONICLE KEEPER]", systemClosing = "\n</SYSTEM>",
        block, systemEnd, core, optional, room, recentReserve, keptMemory, result;
    ce.turn = Number(info.actionCount || ce.turn || 0);
    ce.longStoryPressure = source.length >= limit * 0.55 || ce.turn >= 24;
    ce.hardThreadPush = ce.longStoryPressure &&
      (Number(ce.quietThreadTurns || 0) >= 2 || (ce.turn >= 50 && ce.turn % 2 === 1));
    block = Number(ce.emptyOutputCount || 0) > 0 ? recoveryContext(ce) :
      (limit <= 16000 ? compactMinimumContext(ce, limit > 4000) : compactContext(ce));
    ckBudget = Math.min(configured, limit <= 16000 ? Math.min(3000, Math.floor(target * 0.32)) : target);
    if (block.length > ckBudget) {
      systemEnd = block.indexOf(systemClosing);
      core = systemEnd >= 0 ? block.slice(0, systemEnd + systemClosing.length) : block;
      if (core.length + closing.length > ckBudget) { block = compactMinimumContext(ce, false); core = block; }
      else {
        optional = block.slice(core.length, block.length - closing.length).split("\n");
        block = core;
        optional.forEach(function (line) { if (line && block.length + line.length + closing.length + 1 <= ckBudget) block += "\n" + line; });
        block += closing;
      }
    }
    room = Math.max(0, target - block.length - 1);
    recentReserve = Math.min(historyText.length, Math.max(300, Math.floor(room * 0.45)));
    keptMemory = memory.slice(0, Math.max(0, room - recentReserve));
    result = keptMemory + historyText.slice(-Math.max(0, room - keptMemory.length)) + "\n" + block;
    ce.contextDiagnostics = { maxChars:limit, usedChars:result.length, ckChars:block.length,
      freeChars:limit-result.length, compact:block.indexOf("[CHRONICLE KEEPER — NARRATION; private;") >= 0, hardPush:ce.hardThreadPush };
    return result;
  }
  function applyUpdate(ce, update) {
    if (!update || typeof update !== "object") return;
    var pacing = String(ce.settings.relationshipPacing || "natural").toLowerCase(),
        relationshipLimit = pacing === "dramatic" ? 2 : 1,
        relationshipAxes = pacing === "slow" ? 1 : (pacing === "dramatic" ? 3 : 2),
        relationshipKeys = ["familiarity","trust","affection","respect","attraction","resentment"],
        presentWasSet = false, nearbyWasSet = false,
        characterUpdates = (update.characters || []).slice(0,10), consolidatedNotes = {};
    if (update.scene) {
      ["location","area","time"].forEach(function(k){ if (update.scene[k]) { ce.scene[k] = String(update.scene[k]); ce.sceneInference[k] = false; } });
      if (update.scene.day) { ce.scene.day = normaliseDay(update.scene.day); ce.sceneInference.day = false; }
      if (Array.isArray(update.scene.present)) { ce.scene.present = uniqueRoster(update.scene.present); presentWasSet = true; ce.sceneInference.present = false; }
      if (Array.isArray(update.scene.nearby)) { ce.scene.nearby = uniqueRoster(update.scene.nearby); nearbyWasSet = true; ce.sceneInference.nearby = false; }
      if (presentWasSet || nearbyWasSet) normaliseSceneRoster(ce, nearbyWasSet && !presentWasSet);
    }
    // Consolidate old notes before applying any new notes from this turn, even if
    // the model emits memory and note in separate C fields or reverses their order.
    characterUpdates.forEach(function (u) {
      var c;
      if (!u || !u.name || !u.memory) return;
      if (ce.player && normaliseName(u.name) === normaliseName(ce.player.name)) return;
      c = findCharacter(ce, String(u.name));
      if (!c) { boundedWarning(ce, "Memory summary ignored for unknown character " + String(u.name) + "."); return; }
      var beforeNotes = (c.notes || []).map(normaliseName);
      if (applyMemorySummary(ce, c, u.memory)) consolidatedNotes[c.id] = beforeNotes;
    });
    characterUpdates.forEach(function(u){
      if (!u || !u.name) return;
      if (ce.player && String(u.name).trim().toLowerCase() === String(ce.player.name || "").trim().toLowerCase()) return;
      var hasRelationshipDelta = relationshipKeys.some(function (key) { return (Number((u.relationship || {})[key]) || 0) !== 0; }),
          memoryOnly = !!u.memory && !u.note && !u.anchor && !u.status && !u.importance && !u.alias && !hasRelationshipDelta,
          c = memoryOnly ? findCharacter(ce, String(u.name)) : addCharacter(ce, String(u.name), "emergent");
      if (!c) { boundedWarning(ce, "Memory summary ignored for unknown character " + String(u.name) + "."); return; }
      if (!memoryOnly) recordMention(ce, c);
      if (u.status) c.status = String(u.status);
      if (u.importance && ["temporary","recurring","major"].indexOf(u.importance) >= 0) c.importance = u.importance;
      if (c.importance === "recurring" || c.importance === "major") c.persistent = true;
      if (u.alias) addAlias(ce, c, u.alias);
      if (u.note && (consolidatedNotes[c.id] || []).indexOf(normaliseName(u.note)) < 0) addCharacterNote(ce, c, u.note);
      if (u.anchor) addMemoryAnchor(ce, c, u.anchor, "auto");
      relationshipKeys.map(function(k){
        return { key:k, delta:Number((u.relationship || {})[k]) || 0 };
      }).filter(function(change){
        return change.delta !== 0;
      }).sort(function(a,b){
        return Math.abs(b.delta) - Math.abs(a.delta);
      }).slice(0, relationshipAxes).forEach(function(change){
        var delta = Math.max(-relationshipLimit, Math.min(relationshipLimit, change.delta));
        c.relationship[change.key] = clamp(c.relationship[change.key] + delta);
      });
    });
    var promotedThreads = 0, threadCfg = threadSettings(ce);
    (update.threads || []).slice(0,4).forEach(function(u){
      if (!u || !u.name) return;
      var requestedName = String(u.name), existing = findThread(ce, requestedName), candidate, t;
      if (!existing && transientSocialThreadName(requestedName)) {
        boundedWarning(ce, "Ignored transient social thread " + requestedName + "; relationship memory already tracks it.");
        return;
      }
      if (existing) {
        applyThreadUpdate(ce, existing, u, requestedName);
        return;
      }
      candidate = registerThreadCandidate(ce, u);
      if (candidate.seenTurns < threadCfg.confirmationTurns || promotedThreads >= threadCfg.maxNewPerTurn) return;
      if (normaliseName(candidate.status) === "active" && activeEmergentThreads(ce).length >= threadCfg.maxActiveEmergent) {
        boundedWarning(ce, "Held a confirmed thread candidate because the active emergent-thread limit was reached: " + candidate.name + ".");
        return;
      }
      t = addThread(ce, candidate.name, "emergent");
      t.aliases = uniqueThreadAliases(candidate.aliases || [], t.name);
      applyThreadUpdate(ce, t, candidate, candidate.name);
      delete ce.threadCandidates[candidate.id];
      promotedThreads += 1;
    });
    mergeDuplicateThreads(ce);
    enforceThreadLimits(ce);
    pruneThreadCandidates(ce);
    (update.revealedTruths || []).slice(0,8).forEach(function(text){
      var needle = String(text).toLowerCase(), found = ce.truths.filter(function(t){return t.text.toLowerCase() === needle;})[0];
      if (found) found.revealedToPlayer = true;
      else ce.truths.push({id:"truth_"+(ce.truths.length+1),text:String(text).slice(0,300),origin:"emergent",mutable:true,revealedToPlayer:true,knownBy:["player"]});
    });
  }
  function parseOperation(ce, operation) {
    var update = { scene: {}, characters: [], threads: [], revealedTruths: [] };

    function roster(value) {
      if (/^(?:none|empty|-)?$/i.test(value)) return [];
      return uniqueRoster(value.split(","));
    }

    function properties(parts) {
      var out = {};
      parts.forEach(function (part) {
        var i = part.indexOf(":");
        if (i > 0) out[part.slice(0, i).trim().toLowerCase()] = part.slice(i + 1).trim();
      });
      return out;
    }

    operation.split("|").slice(1).forEach(function (field) {
      var i = field.indexOf("="), key, value;
      if (i < 1) return;
      key = field.slice(0, i).trim().toUpperCase();
      value = field.slice(i + 1).trim();
      if (!value && key !== "P" && key !== "N") return;

      if (key === "L") update.scene.location = value;
      else if (key === "A") update.scene.area = value;
      else if (key === "D") update.scene.day = value;
      else if (key === "T") update.scene.time = value;
      else if (key === "P") update.scene.present = roster(value);
      else if (key === "N") update.scene.nearby = roster(value);
      else if (key === "K") update.revealedTruths.push(value);
      else if (key === "C") {
        var cp = value.split("~"), cprops = properties(cp.slice(1)), rel = {};
        ["familiarity","trust","affection","respect","attraction","resentment"].forEach(function (k) {
          if (cprops[k] !== undefined) rel[k] = Number(cprops[k]) || 0;
        });
        update.characters.push({
          name: cp[0].trim(),
          status: cprops.status,
          importance: cprops.importance,
          alias: cprops.alias,
          note: cprops.note,
          anchor: cprops.anchor,
          memory: cprops.memory,
          relationship: rel
        });
      } else if (key === "Q") {
        var qp = value.split("~"), qprops = properties(qp.slice(1));
        update.threads.push({
          name: qp[0].trim(),
          status: qprops.status,
          importance: qprops.importance,
          situation: qprops.situation
        });
      }
    });

    if (Object.keys(update.scene).length) ce.scenePacketThisTurn = true;
    if (update.threads.some(function (t) { return t.situation || t.status; })) ce.threadUpdatedThisTurn = true;
    applyUpdate(ce, update);
  }

  function normaliseOperation(operation) {
    var value = String(operation || "").trim();
    if (/^C[\s_.-]*E\b/i.test(value)) {
      value = value.replace(/^C[\s_.-]*E\b\s*(?:[|~;:=]\s*)?/i, "CE|");
    } else if (/^[LADTNPCQK]\s*[=:]/i.test(value)) {
      value = "CE|" + value;
    }
    value = value.replace(/[~;]\s*(?=[LADTNPCQK]\s*[=:])/gi, "|");
    value = value.replace(/(^|\|)\s*([LADTNPCQK])\s*:/gi, "$1$2=");
    return value;
  }

  function looksLikeOperation(operation) {
    var value = String(operation || "").trim(), fields;
    if (/^C[\s_.-]*E\b/i.test(value)) return true;
    if (/^[LADTNPCQK]\s*[=:]/i.test(value)) return true;
    fields = value.match(/(?:^|[|~;])\s*[LADTNPCQK]\s*[=:]/gi);
    return !!(fields && fields.length >= 2);
  }

  function extractOperation(source) {
    var input = String(source || ""), fence = input.match(/^\s*```(?:json|text|javascript|js)?\s*/i),
        offset = fence ? fence[0].length : 0, candidate = input.slice(offset), match, raw, consumed, after, closingFence;

    match = candidate.match(/^\s*\(\s*([\s\S]*?)\)\s*/);
    if (match && looksLikeOperation(match[1])) {
      raw = match[1];
      consumed = offset + match[0].length;
    } else {
      match = candidate.match(/^\s*\(\s*([^\r\n]*)\r?\n/);
      if (match && looksLikeOperation(match[1])) {
        raw = match[1];
        consumed = offset + match[0].length;
      } else {
        match = candidate.match(/^\s*([^\r\n]+)\r?\n/);
        if (match && /^C[\s_.-]*E\b/i.test(match[1]) && looksLikeOperation(match[1])) {
          raw = match[1];
          consumed = offset + match[0].length;
        }
      }
    }

    if (raw === undefined) return null;
    after = input.slice(consumed);
    closingFence = fence && after.match(/^\s*```\s*/);
    if (closingFence) consumed += closingFence[0].length;
    return { operation: normaliseOperation(raw), consumed: consumed, openedFence: !!fence };
  }

  function scrubEmbeddedOperations(ce, source) {
    var scrubbed = 0, clean = String(source || "");

    // Full CK/CE operation displaced into the narration.
    clean = clean.replace(/\(\s*(C[\s_.-]*E\b[^()\r\n]{0,1200})\s*\)/gi, function (_, operation) {
      if (!looksLikeOperation(operation)) return _;
      parseOperation(ce, normaliseOperation(operation));
      scrubbed += 1;
      return "";
    });

    // A displaced operation sometimes loses its closing parenthesis. Catch a
    // CE packet occupying the remainder of a line so private metadata cannot
    // survive merely because the model omitted one character.
    clean = clean.replace(/(^|\r?\n)[ \t]*\(\s*(C[\s_.-]*E\b[^\r\n]{1,4000})[ \t]*(?=\r?\n|$)/gi, function (_, prefix, operation) {
      if (!looksLikeOperation(operation)) return _;
      parseOperation(ce, normaliseOperation(operation));
      scrubbed += 1;
      return prefix;
    });

    // Split field fragments such as (A=Guildhall)(P=Mira, Rowan).
    clean = clean.replace(/\(\s*([LADTNPCQK])\s*[=:]\s*([^()\r\n]{1,700})\s*\)/gi, function (_, key, value) {
      var operation = key.toUpperCase() + "=" + String(value || "").trim();
      if (!operation.slice(2)) return _;
      parseOperation(ce, normaliseOperation(operation));
      scrubbed += 1;
      return "";
    });

    // Some models occasionally drop every field label but retain the packed
    // L|A|D|T|P order, e.g. (Region|Building|Day 1|Evening|Player, Character Name).
    // Treat that five-part tuple as private metadata, recover the scene, and
    // remove it rather than showing it to the player.
    clean = clean.replace(/\(\s*([^|()\r\n]{1,120})\s*\|\s*([^|()\r\n]{1,120})\s*\|\s*((?:day\s+)?\d{1,6})\s*\|\s*([^|()\r\n]{1,60})\s*\|\s*([^|()\r\n]{1,400})\s*\)/gi,
      function (_, location, area, day, time, present) {
        var clock = String(time || "").trim(), roster = String(present || "").trim();
        if (!/(?:dawn|morning|midday|noon|afternoon|evening|dusk|night|midnight|\d{1,2}\s*:\s*\d{2})/i.test(clock)) return _;
        if (roster.indexOf(",") < 0 && !/\b[A-Z][a-z'’-]+\s+[A-Z][a-z'’-]+\b/.test(roster)) return _;
        parseOperation(ce, normaliseOperation("L=" + location.trim() + "|A=" + area.trim() + "|D=" + day.trim() + "|T=" + clock + "|P=" + roster));
        scrubbed += 1;
        return "";
      });

    if (scrubbed) boundedWarning(ce, "Turn " + ce.turn + " placed " + scrubbed + " Chronicle Keeper field fragment(s) inside the narration; scrubbed safely.");
    return clean.replace(/[ \t]+\r?\n/g, "\n").replace(/\r?\n[ \t]+/g, "\n").trim();
  }

  function reconcileExplicitDepartures(ce, source) {
    var text = String(source || ""), roster = uniqueRoster(
      ((ce.scene && ce.scene.present) || []).concat((ce.scene && ce.scene.nearby) || [])
    ), removed = [];

    function escaped(value) {
      return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    roster.forEach(function (name) {
      var subject = escaped(name), movement = "(?:has\\s+left|had\\s+left|leaves|left|exits|exited|departs|departed|disappears|disappeared|heads|headed|walks|walked|moves|moved|slips|slipped)",
          destination = "(?:the\\s+)?(?:venue|scene|area|room|building|market|square|tavern|inn|guildhall|house|home|district|town|city|village|crowd)|outside|away|elsewhere|entirely|out\\s+of\\s+sight|north|south|east|west",
          pattern = new RegExp("\\b" + subject + "\\b[^.!?\\n]{0,90}\\b" + movement + "\\b[^.!?\\n]{0,100}\\b(?:" + destination + ")\\b", "i"),
          clearDeparture = new RegExp("\\b" + subject + "\\s+(?:has\\s+|had\\s+)?(?:departed|left|exited)\\b", "i"),
          match = text.match(pattern) || text.match(clearDeparture), lead;
      if (!match) return;
      lead = text.slice(Math.max(0, match.index - 24), match.index + match[0].length).toLowerCase();
      if (/\b(?:not|never|cannot|can't|doesn't|does not|refuses? to|tries? to|attempts? to)\b[^.!?\n]{0,35}(?:leave|left|exit|depart|disappear|head|walk|move|slip)/i.test(lead)) return;
      ce.scene.present = (ce.scene.present || []).filter(function (entry) { return normaliseName(entry) !== normaliseName(name); });
      ce.scene.nearby = (ce.scene.nearby || []).filter(function (entry) { return normaliseName(entry) !== normaliseName(name); });
      removed.push(name);
    });

    if (removed.length) boundedWarning(ce, "Turn " + ce.turn + " reconciled explicit scene departure: " + removed.join(", ") + ".");
  }

  function sameSceneSite(left, right) {
    function site(value) {
      var text = String(value || "").toLowerCase(),
          match = text.match(/\b(?:(?:[a-z'’]+\s+){0,2})?(cottage|keep|castle|manor|estate|tavern|inn|library|house|market)\b/i);
      if (!match) return null;
      return { kind:match[1], name:match[0].trim() };
    }
    var a = site(left), b = site(right);
    return !!(a && b && a.kind === b.kind &&
      (a.name === b.name || a.name === a.kind || b.name === b.kind));
  }

  // Fallback for actual events in the accepted story. This deliberately does
  // not turn a mentioned destination, a plan, or another person's trip into
  // the player's current scene. A model packet can still supply richer detail.
  function reconcileProseScene(ce, source, dayContext, priorRoster) {
    var text = String(source || "").slice(-5000), clauses, recent = [], doorClosed = false,
        labels = {}, changes = [];
    if (!text || /CHRONICLE KEEPER\s+[—-]\s*(?:NARRATION|LEDGER|LORE|COMMANDS)/i.test(text)) return;
    text = text.replace(/"[^"\n]*"|“[^”\n]*”/g, " ");
    clauses = text.match(/[^.!?;\n]+[.!?;]?/g) || [];

    function mark(key, value) {
      if (value === undefined || value === null || value === "") return;
      if (key === "day") value = normaliseDay(value);
      if (normaliseName(ce.scene[key]) !== normaliseName(value)) changes.push(key + "=" + value);
      ce.scene[key] = value;
      ce.sceneInference[key] = true;
    }
    function venueName(value) {
      var item = String(value || "").replace(/^(?:the|your|my|our|a|an)\s+/i, "")
        .replace(/\s+[—–-]\s+(?:inside|outside)\b.*$/i, "")
        .replace(/\s+(?:door(?:way|frame)?|threshold|gate|entrance|front|steps?)\b.*$/i, "")
        .replace(/\s+(?:looms|waits|sits|stands|comes|looks|rests|is|was|will|can|has)\b.*$/i, "")
        .replace(/\s+(?:after|before|under|beneath|beyond|beside|near|along|ahead|behind|around|past|through)\b.*$/i, "")
        .replace(/\s+(?:where|while|as|with|and|but|that)\b.*$/i, "")
        .replace(/[^A-Za-z0-9'’& -]/g, "").trim();
      if (!item || item.length > 55) return "";
      if (/^(?:it|him|her|them|there|you|me|us|one|place|way)$/i.test(item)) return "";
      // Arrival patterns can overrun a verb and capture ordinary narration
      // such as "and close your". Keep familiar venues or an actual proper name.
      var known = item.match(/\b(?:market\s+square|cottage|guildhall|tavern|library|gardens?|market|house|home|inn|kitchen|bedroom|hallway|road|path|street|lane|trail|room|well)\b/i);
      if (known) item = known[0];
      else if (!/^[A-Z][A-Za-z0-9'’-]*(?:\s+[A-Z][A-Za-z0-9'’-]*){0,3}$/.test(item)) return "";
      return item.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); });
    }
    function placeArea(venue, side, clause) {
      var current = String(ce.scene.area || ""), prior = (ce.scene.present || []).slice(),
          normalized = venueName(venue), next, sameBuilding;
      if (!normalized) return;
      if (/\bcottage\b/i.test(normalized) && /\bcottage\b/i.test(current) &&
          !/\b(?:lane|road|street|path|trail)\b/i.test(current))
        normalized = current.replace(/\s+[—–-]\s+(?:inside|outside)\b.*$/i, "");
      if (/^(?:road|path|street|lane|trail|track|market|market square|garden|gardens|well)$/i.test(normalized)) next = normalized;
      else next = normalized + (side ? " — " + side : "");
      if (normaliseName(current) === normaliseName(next)) { ce.sceneInference.area = true; return; }
      sameBuilding = sameSceneSite(current, next) ||
        (/^(?:Room|Kitchen|Bedroom|Hallway)$/i.test(normalized) &&
         /\b(?:keep|cottage|house|castle|manor|estate|tavern|inn)\b/i.test(current));
      mark("area", next);
      if (/\b(?:tavern|inn|house|home|cottage|guildhall|hall|room|library|garden|market|square|road|path|street|lane|trail)\b/i.test(ce.scene.location || "") &&
          normaliseName(ce.scene.location) !== normaliseName(normalized)) {
        mark("location", normalized);
      }
      if (sameBuilding) ce.scene.nearby = uniqueRoster((ce.scene.nearby || []).concat(prior));
      else {
        ce.sceneDisplaced = uniqueRoster((ce.sceneDisplaced || []).concat(prior, ce.scene.nearby || [])).slice(-12);
        ce.scene.nearby = [];
      }
      ce.scene.present = [];
      ce.sceneInference.present = ce.sceneInference.nearby = true;
      // A named person who explicitly accompanies the player crosses with them.
      Object.keys(labels).forEach(function (variant) {
        var name = labels[variant];
        if (!name || !new RegExp("\\b(?:with\\s+" + escapeRegExp(variant) + "|" + escapeRegExp(variant) + "\\s+(?:follows?|followed)\\s+you)\\b", "i").test(clause)) return;
        putActor(name, "present");
      });
    }
    function putActor(name, position) {
      var person = findCharacter(ce, name), key = normaliseName(person ? person.name : name);
      if (!key || key === normaliseName(ce.player && ce.player.name) || /^(?:you|your|we|they|he|she|the|then)$/i.test(name)) return;
      name = person ? person.name : name;
      ce.scene.present = (ce.scene.present || []).filter(function (item) { return normaliseName(item) !== key; });
      ce.scene.nearby = (ce.scene.nearby || []).filter(function (item) { return normaliseName(item) !== key; });
      if (position !== "gone") ce.scene[position] = uniqueRoster((ce.scene[position] || []).concat([name]));
      if (position !== "gone") ce.sceneDisplaced = (ce.sceneDisplaced || []).filter(function (item) { return normaliseName(item) !== key; });
      ce.sceneInference.present = ce.sceneInference.nearby = true;
      changes.push(name + "→" + position);
    }
    Object.keys(ce.characters || {}).forEach(function (id) {
      var character = ce.characters[id], parts, variants;
      if (!character || normaliseName(character.name) === normaliseName(ce.player && ce.player.name)) return;
      parts = character.name.split(/\s+/);
      variants = [character.name].concat(parts.length > 1 && parts[0].length >= 3 ? [parts[0]] : [], character.aliases || []);
      variants.forEach(function (variant) {
        var key = normaliseName(variant);
        if (!key) return;
        if (labels[key] && labels[key] !== character.name) labels[key] = null;
        else if (labels[key] === undefined) labels[key] = character.name;
      });
    });
    clauses.forEach(function (raw) {
      var clause = raw.trim(), history, day, clock, arrival, target = "", side = "", match,
          contextVenue, player = "(?:you|we|I|" + escapeRegExp(ce.player && ce.player.name || "Player") + ")";
      if (!clause || /\b(?:if|would|could|should|might|imagine|imagined|dreamed|remember|remembered|yesterday|earlier|tomorrow|next week|plan to|planned to|try to|tried to|attempt to|attempted to)\b/i.test(clause)) return;
      recent.push(clause); if (recent.length > 3) recent.shift();
      history = recent.join(" ");
      if (/\b(?:you|we|I)\b[^.!?;]{0,55}\b(?:close|closed|shut|pull|pulled)\b[^.!?;]{0,18}\b(?:the|your|my)\s+door\b/i.test(clause) ||
          /\b(?:the|your|my)\s+door\s+(?:closes?|shuts?)\b/i.test(clause)) doorClosed = true;
      match = clause.match(/\b(?:cottage|house|home|tavern|inn|guildhall|library|market|gardens?|road|path|street|lane|trail|room|kitchen|bedroom|hallway|well)\b/i);
      day = clause.match(/\bday\s+(\d{1,5})\b/i);
      if (day && /\b(?:it is|it's|now|today|currently|on|at|day)\b/i.test(clause.slice(0, day.index) + " day")) mark("day", day[1]);
      if (/\b(?:night air|night sky|moonlight|under the moon|after dark|at night|the night falls|night has fallen|at midnight|past midnight)\b/i.test(clause)) clock = "Night";
      else if (/\b(?:late evening|twilight|dusk|sunset|sun goes down|sun sets|evening air|evening falls)\b/i.test(clause)) clock = "Evening";
      else if (/\b(?:late afternoon|afternoon sun|this afternoon)\b/i.test(clause)) clock = "Afternoon";
      else if (/\b(?:morning light|morning sun|morning routine|morning arrives|(?:the|this|next|following) morning|at dawn|dawn breaks|this morning|make(?:s|made)? (?:your|our|my|the) breakfast)\b/i.test(clause)) clock = "Morning";
      if (clock) {
        // A retrospective night reference in this turn must not make the
        // following mention of morning roll the calendar forward again.
        if (clock === "Morning" && dayContext && !dayContext.advanced &&
            (dayContext.startedAtNight || dayContext.explicitNextDay) &&
            /^\d+$/.test(String(dayContext.startedDay || ""))) {
          mark("day", String(Number(dayContext.startedDay) + 1));
          dayContext.advanced = true;
        }
        mark("time", clock);
      }

      // Only arrival/entry or an explicit statement of the player's current
      // physical position can establish a new place. "Toward" is not arrival.
      arrival = clause.match(new RegExp("\\b" + player + "\\b[^.!?;]{0,30}\\b(?:arriv(?:e|es|ed)\\s+at|reach(?:es|ed)?|enter(?:s|ed)?|step(?:s|ped)?\\s+(?:in(?:to)?|inside)|walk(?:s|ed)?\\s+in(?:to)?|go(?:es|ne)?\\s+inside|return(?:s|ed)?\\s+to)\\s+(?:(?:the|your|my|our|a)\\s+)?([A-Za-z][A-Za-z'’& -]{1,55})", "i"));
      if (arrival) {
        target = venueName(arrival[1]);
        if (/\b(?:toward|towards|near|past|by|from|before|almost)\b/i.test(arrival[1]) || !target) target = "";
        if (target) side = /\b(?:enter|step|walk|go)/i.test(arrival[0]) ? "Inside" : "Outside";
      }
      if (!target && new RegExp("\\b" + player + "\\b[^.!?;]{0,25}\\b(?:step(?:s|ped)?|walk(?:s|ed)?|go(?:es|ne)?|move(?:s|d)?)\\s+inside\\b", "i").test(clause)) {
        contextVenue = history.match(/\b(?:cottage|house|home|tavern|inn|guildhall|library)\b/gi);
        target = contextVenue ? contextVenue[contextVenue.length - 1] :
          (/\b(?:cottage|house|home|tavern|inn|guildhall|library)\b/i.test(ce.scene.area || "") ? venueName(ce.scene.area) : "");
        side = "Inside";
      }
      if (!target && new RegExp("\\b" + player + "\\b[^.!?;]{0,25}\\b(?:step(?:s|ped)?|walk(?:s|ed)?|go(?:es|ne)?|move(?:s|d)?)\\s+outside\\b", "i").test(clause)) {
        target = venueName(ce.scene.area); side = "Outside";
      }
      if (!target) {
        match = clause.match(new RegExp("\\b" + player + "\\b[^.!?;]{0,25}\\b(?:leave|leaves|left|exit|exits|exited|step(?:s|ped)?\\s+out\\s+of|walk(?:s|ed)?\\s+out\\s+of)\\s+(?:(?:the|your|my)\\s+)?(cottage|house|home|tavern|inn|guildhall|library|market)\\b", "i"));
        if (match) { target = match[1]; side = "Outside"; }
      }
      if (!target && new RegExp("\\b" + player + "\\b[^.!?;]{0,28}\\b(?:walk(?:s|ed)?|travel(?:s|ed)?|move(?:s|d)?|make(?:s|made)?\\s+(?:your|our|my)\\s+way)\\s+(?:along|down|on|onto|through)\\s+(?:the\\s+)?(road|path|street|lane|trail)\\b", "i").test(clause)) {
        target = clause.match(/\b(road|path|street|lane|trail)\b/i)[1];
      }
      if (!target && new RegExp("\\b" + player + "\\b[^.!?;]{0,30}\\b(?:are|am|stand|standing|wait|waiting)\\s+(?:right\\s+)?(outside|inside)\\s+(?:(?:the|your|my)\\s+)?(cottage|house|home|tavern|inn|guildhall|library)\\b", "i").test(clause)) {
        match = clause.match(/\b(outside|inside)\s+(?:(?:the|your|my)\s+)?(cottage|house|home|tavern|inn|guildhall|library)\b/i);
        target = match[2]; side = /inside/i.test(match[1]) ? "Inside" : "Outside";
      }
      if (!target && /\b(?:your|my)\s+(?:back|body|hand)\s+(?:is|was)\s+pressed\s+against\s+(?:the|your|my)\s+(?:cottage|house|home)\s+door(?:frame)?\b/i.test(clause)) {
        target = clause.match(/\b(cottage|house|home)\s+door/i)[1]; side = "Outside";
      }
      if (!target && /\b(?:cottage|house|home)\s+door\s+(?:swings?|swung|clicks?)\s+(?:shut|closed)\s+behind\s+you\b/i.test(clause)) {
        target = clause.match(/\b(cottage|house|home)\s+door/i)[1]; side = "Inside";
      }
      if (!target && new RegExp("\\b" + player + "\\b[^.!?;]{0,35}\\b(?:unlock|unlocks|unlocked|knock|knocks|knocked|reach|reaches|reached)\\b[^.!?;]{0,35}\\b(?:the|your|my)\\s+(?:(?:cottage|house|home)\\s+)?(?:door|latch)\\b", "i").test(clause)) {
        contextVenue = clause.match(/\b(cottage|house|home)\b/i) || String(ce.scene.area || "").match(/\b(cottage|house|home)\b/i);
        if (contextVenue) { target = contextVenue[1]; side = "Outside"; }
      }
      if (!target && /\b(?:cottage|house|home)\b[^.!?;]{0,65}\binside\b/i.test(clause) && doorClosed) {
        target = clause.match(/\b(cottage|house|home)\b/i)[1]; side = "Inside";
      }
      if (target && /^(?:road|path|street|lane|trail|track|market|market square|garden|gardens|well)$/i.test(target)) side = "";
      if (target) placeArea(target, side, clause);

      // A named NPC's explicit action wins over a stale packet or roster.
      clause.replace(/\b([A-Z][A-Za-z0-9_'’-]{2,30}(?:\s+[A-Z][A-Za-z0-9_'’-]{2,30}){0,2})\s+(?:is\s+standing|stands?|steps?|walks?|follows?|followed|enters?|waits?|remains?|sits?|sat|slides?|slid|joins?|joined|moves?|moved|leaves?|left|keeps?|pauses?|says?|speaks?|asks?|answers?|turns?|watches?|nods?|frowns?|smiles?|adjusts?|glances?|looks?|folds?|crosses?|gestures?|reaches?|leans?)\b/g, function (_, name) {
        if (!/^(?:The|Then|This|That|You|Your|We|They|His|Her|Behind|There|Player|Cottage|House|Road)$/i.test(name) && normaliseName(name) !== normaliseName(ce.player && ce.player.name)) {
          if (!labels[normaliseName(name)]) labels[normaliseName(name)] = name;
        }
        return _;
      });
      Object.keys(labels).sort(function (a, b) { return b.length - a.length; }).forEach(function (variant) {
        var name = labels[variant], pattern, subject, tail, action = "", latest = -1, next, lead,
            closeContact;
        if (!name) return;
        pattern = new RegExp("(^|[^A-Za-z0-9'])" + escapeRegExp(variant) + "(?=$|[^A-Za-z0-9'])", "i");
        subject = pattern.exec(clause);
        if (!subject) return;
        next = subject.index + subject[0].length;
        tail = clause.slice(next);
        lead = clause.slice(Math.max(0, subject.index - 30), subject.index);
        if (/\b(?:not|never|could|would|might|if|imagined|remembered|said|says|claimed|claims|reported)\b/i.test(lead)) return;
        closeContact = new RegExp("\\b(?:you|we|I|" + escapeRegExp(ce.player && ce.player.name || "Player") + ")\\b[^.!?;]{0,55}\\b(?:step(?:s|ped)? back from|stand(?:s|ing)? (?:a few paces |a step )?from|stand(?:s|ing)? beside|stand(?:s|ing)? next to|turn(?:s|ed)? to face)\\s+" + escapeRegExp(variant) + "\\b", "i").test(clause) ||
          new RegExp("\\b" + escapeRegExp(variant) + "\\b[^.!?;]{0,65}\\b(?:grips?|holds?|catches?|releases?|guides?|pulls?|touches?)\\b[^.!?;]{0,50}\\b(?:you|your|my)\\b", "i").test(clause);
        function actionAt(regex, kind) {
          var found;
          regex.lastIndex = 0;
          while ((found = regex.exec(tail))) {
            if (found.index >= latest) { latest = found.index; action = kind; }
            if (!regex.global) break;
          }
        }
        actionAt(/\b(?:leave|leaves|left|exit|exits|exited|depart|departs|departed)\b[^.!?;]{0,80}\b(?:tavern|inn|house|home|cottage|room|scene|venue|town|building|entirely|for the night)\b|\b(?:vanish|vanishes|disappear|disappears)\b/gi, "gone");
        actionAt(/\b(?:moves?|moved|moving|walks?|walked|walking|steps?|stepped|stepping|crosses?|crossed|crossing|goes?|went|going|retreats?|retreated|retreating)\b[^.!?;]{0,65}\b(?:across the room|far side|the bar|another table|hallway|next room|outside|away from you|out of sight)\b/gi, "nearby");
        actionAt(/\b(?:joins?|joined|approaches?|approached)\b[^.!?;]{0,50}\b(?:you|your|the party|the group|your table|the table|conversation)\b|\b(?:steps?|stepped)\s+closer\b|\b(?:sits?|sat|slides?|slid|stands?)\b[^.!?;]{0,50}\b(?:beside you|next to you|at your table|by your side)\b|\b(?:follows?|followed)\s+you\b|\b(?:stands?|waits?|remains?)\b[^.!?;]{0,55}\b(?:just beyond arm's reach|at the door|beside you|behind you)\b/gi, "present");
        actionAt(/\bkeeps?\s+(?:his|her|their)\s+pace\b/gi, "present");
        actionAt(new RegExp("\\b(?:your|my|" + escapeRegExp(ce.player && ce.player.name || "Player") + "['’]s)\\s+(?:hand|touch)\\b[^.!?;]{0,50}\\b(?:his|her|their)\\s+(?:shoulder|arm|back|hand)\\b", "gi"), "present");
        actionAt(/\b(?:enters?|entered|arrives?|arrived|steps?\s+in(?:to)?|stepped\s+in(?:to)?|walks?\s+in(?:to)?|walked\s+in(?:to)?)\b[^.!?;]{0,45}\b(?:market|square|tavern|inn|room|house|cottage|hall|garden|road|street|venue)\b|\bis\s+(?:here|beside you|next to you)\b/gi, "present");
        if (closeContact && latest < 0) action = "present";
        if (latest < 0 && /\b(?:stands?|waits?|remains?)\b[^.!?;]{0,55}\boutside\s+(?:the|your|my)\s+(?:door|cottage|house|home)\b/i.test(tail)) action = /\binside\b/i.test(ce.scene.area) ? "nearby" : "present";
        if (latest < 0 && /\boutside\b[^.!?;]{0,70}$/i.test(clause.slice(0, subject.index)) &&
            /\b(?:remains?|stands?|waits?)\b/i.test(tail) &&
            /\binside\b/i.test(ce.scene.area) && /\b(?:door|threshold|cottage|house|home)\b/i.test(history)) action = "nearby";
        if (latest < 0 && /\b(?:is standing there|stands there|is there)\b/i.test(tail) && /\bdoor\b[^.!?;]{0,75}\b(?:open|opened|yanked|from inside)\b/i.test(history)) action = /\binside\b/i.test(ce.scene.area) ? "present" : "nearby";
        if (!action && /\b(?:door|shutters?|window)\b/i.test(history) &&
            /\b(?:outside|shouts? back|calls? (?:out|back)|through the door|hasn't moved|has not moved)\b/i.test(history) &&
            /\b(?:cottage|house|room|inside)\b/i.test(ce.scene.area || "") &&
            /\b(?:says?|speaks?|asks?|answers?|shouts?|calls?|does(?:n't| not)\s+(?:shout|leave|move))\b/i.test(tail)) action = "nearby";
        // A model may emit P=none while the story plainly shows the same
        // actor speaking or moving beside the player. Recover that actor
        // without promoting somebody already tracked in an adjacent area.
        if (!action && !(ce.scene.nearby || []).some(function (item) { return normaliseName(item) === normaliseName(name); }) &&
            (/\b(?:watches?|studies?|looks?\s+at|glances?\s+at|leans?\s+closer|shifts?\s+(?:his|her|their)\s+weight|tilts?\s+(?:his|her|their)\s+head|folds?\s+(?:his|her|their)\s+arms?|crosses?\s+(?:his|her|their)\s+arms?|gestures?\s+(?:to|at|toward)|reaches?\s+(?:for|toward)|does(?:n't| not)\s+(?:flinch|budge|move)|is\s+there|keeps?\s+(?:his|her|their)\s+pace|pauses?|says?|speaks?|asks?|answers?)\b/i.test(tail.slice(0,100)) ||
             /^['’]s\s+(?:hand|arm|fingers|face|eyes|voice)\b[^.!?;]{0,75}\b(?:against|beside|above|near|on\s+you|at\s+you)\b/i.test(tail))) action = "present";
        if (action === "present" && priorRoster && (priorRoster.nearby || []).some(function (item) { return normaliseName(item) === normaliseName(name); }) &&
            !closeContact && !/\b(?:enters?|entered|arrives?|arrived|joins?|joined|approaches?|approached|steps?\s+in|walks?\s+in|beside you|next to you)\b/i.test(tail)) action = "nearby";
        if (action && /\b(?:not|never|refuses? to|tries? to|attempts? to)\b[^.!?;]{0,30}\b(?:leave|enter|join|follow|walk|step|sit)\b/i.test(tail)) action = "";
        if (action) putActor(name, action);
      });
    });
    normaliseSceneRoster(ce, false);
    if (changes.length) ce.lastProseScene = changes.slice(-7).join(", ");
  }

  function looksLikeInstructionEcho(segment) {
    var value = String(segment || "").replace(/\s+/g, " ").trim(), lower = value.toLowerCase(), definitions;
    if (!value) return false;
    definitions = lower.match(/\b(?:l|a|d|t|p|n|c|q|k)\s+is\b/g) || [];
    if (/<\/?system>|\[\/?chronicle keeper\]|strict output format|continuity operation|private continuity metadata|memory task|exact shape/.test(lower)) return true;
    if (/separate fields|inline notes|relationship delta|for each entit|include at most (?:one|two|three|\d+) deltas?|full name of any npc|active thread name|merge the prior long-term summary|verified recent developments/.test(lower)) return true;
    if (/\bc note records|\bc memory is|complete replacement long-term summary|preserve durable promises|remove repetition and transient|numeric relationship scores|this is metadata-only|do not make the npc appear|emit it inside the private operation/.test(lower)) return true;
    if (/only use .{0,80}(?:output|fields?)|do not use .{0,80}(?:start|end) (?:a |the )?lines?|first character must be|begin the entire output|story continuation must|omit unused|repeat c, q or k|p and n must be disjoint|values? cannot contain|the operation is private/.test(lower)) return true;
    if (/room is also in p|specific named character \(not a group\)|one-turn trust change/.test(lower)) return true;
    if (definitions.length && /(?:field|npc|thread|truth|location|room|day|time|present|nearby|relationship|status|situation|output)/.test(lower)) return true;
    return definitions.length >= 2;
  }

  function scrubInstructionEchoes(ce, source) {
    var marked = String(source || "").replace(/([.!?])(?=\s+|[A-Z])/g, "$1\u0001"),
        segments = marked.split("\u0001"), kept = [], removed = 0;
    segments.forEach(function (segment) {
      if (looksLikeInstructionEcho(segment)) {
        if (kept.length && /(?:^|\s)[a-z]{1,12},?\s*etc\.\s*$/i.test(kept[kept.length - 1].trim())) kept.pop();
        removed += 1;
      } else kept.push(segment);
    });
    var clean = kept.join("")
      .replace(/^\s*(?:<\/?SYSTEM>|#?\s*STRICT OUTPUT FORMAT[^\r\n]*|\[\/?CHRONICLE KEEPER[^\r\n]*\])\s*$/gmi, "")
      .replace(/[ \t]+\r?\n/g, "\n").replace(/\r?\n[ \t]+/g, "\n")
      .replace(/\n{3,}/g, "\n\n").trim();
    if (removed) boundedWarning(ce, "Turn " + ce.turn + " echoed " + removed + " private instruction fragment(s); scrubbed safely.");
    return clean;
  }

  function timelineSpan(source) {
    // Quoted recollections such as "I spent the last four days..." are not
    // another passage of time for the player's current scene.
    var text = String(source || "").replace(/"[^"\n]*"|“[^”\n]*”/g, " ")
          .replace(/[^.!?;\n]+[.!?;]?/g, function (clause) {
            return /\b(?:imagines?|imagined|would|could|might|plans?\s+to|planned\s+to|hopes?|hoped|wishes?|wished|dreams?|dreamed|supposes?|supposed|remembers?|remembered|recalls?|recalled|if)\b/i.test(clause) ? " " : clause;
          }),
        quantity = "(\\d{1,3}|one|two|three|four|five|six|seven|eight|nine|ten|few)",
        patterns = [
          { kind:"forward", regex:new RegExp("\\b(?:for|over|during|throughout)\\s+(?:the\\s+)?(?:next|following)\\s+" + quantity + "\\s+(days?|weeks?)\\b", "gi") },
          { kind:"forward", regex:new RegExp("\\b(?:spend|spends|spent|pass|passes|passed|wait|waits|waited|remain|remains|stay|stays)\\s+(?:through\\s+)?(?:the\\s+)?(?:next|following)\\s+" + quantity + "\\s+(days?|weeks?)\\b", "gi") },
          { kind:"forward", regex:new RegExp("\\bafter\\s+" + quantity + "\\s+(days?|weeks?)\\b", "gi") },
          { kind:"forward", regex:new RegExp("\\b" + quantity + "\\s+(days?|weeks?)\\s+(?:later|pass(?:ed)?|have\\s+passed|went\\s+by|go\\s+by)\\b", "gi") },
          { kind:"past", regex:new RegExp("\\b(?:the\\s+)?past\\s+" + quantity + "\\s+(days?|weeks?)\\s+(?:have|has|had|were|was|passed|went)\\b", "gi") }
        ], best = null;
    patterns.forEach(function (pattern) {
      var match;
      while ((match = pattern.regex.exec(text))) {
        var token = match[1].toLowerCase(), number = /^\d+$/.test(token) ? Number(token) :
          {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,few:3}[token],
            days = number * (/week/i.test(match[2]) ? 7 : 1),
            candidate = { days:days, kind:pattern.kind, precise:token !== "few" };
        if (days < 1 || days > 365) continue;
        // "A few days" and "three days" in one passage describe one span.
        if (!best || (candidate.precise && !best.precise) ||
            (candidate.precise === best.precise && candidate.kind === "forward" && best.kind === "past")) best = candidate;
      }
    });
    return best;
  }

  function consume(state, text) {
    var ce = init(state),
        source = String(text == null ? "" : text).replace(/\u2063/g, ""),
        extracted = extractOperation(source),
        operation = extracted ? extracted.operation : null,
        pendingPanel = ce.pendingPanel,
        beforeOutput = pendingPanel ? null : clone(ce),
        consumed = extracted ? extracted.consumed : 0,
        priorScene = { area:ce.scene.area, location:ce.scene.location,
          day:ce.scene.day, time:ce.scene.time,
          present:(ce.scene.present || []).slice(), nearby:(ce.scene.nearby || []).slice(),
          roster:uniqueRoster((ce.scene.present || []).concat(ce.scene.nearby || [])) },
        dayContext;

    if (!pendingPanel) {
      learnExplicitCharacterTitles(ce, ce.pendingSceneInput);
      learnExplicitCharacterTitles(ce, source.slice(consumed));
    }
    if (operation !== null && !pendingPanel) {
      parseOperation(ce, operation);
    } else if (operation === null && !pendingPanel && /^\s*(?:\(\s*)?(?:C[\s_.-]*E\b|[LADTNPCQK]\s*[=:])/i.test(source)) {
      ce.warnings.push("Turn " + ce.turn + " began a malformed continuity operation.");
    }

    var clean = consumed ? source.slice(consumed).trim() : source.trim();
    if (extracted && extracted.openedFence) clean = clean.replace(/\s*```\s*$/, "").trim();

    if (!pendingPanel) {
      clean = scrubEmbeddedOperations(ce, clean);
      clean = scrubInstructionEchoes(ce, clean);
      // Preserve an established inside/outside detail when a packet only
      // restates the same building without saying that the player crossed it.
      if (priorScene.area.indexOf(String(ce.scene.area || "") + " — ") === 0 &&
          normaliseName(priorScene.location) === normaliseName(ce.scene.location)) ce.scene.area = priorScene.area;
      var passage = String(ce.pendingSceneInput || "") + " " + clean,
          explicitNextDay = /\b(?:next|following)\s+(?:morning|day|dawn|evening|night)\b|\b(?:wake|woke|awoke|waking)\b[^.!?]{0,80}\b(?:dawn|morning)\b|\b(?:slept|sleep|spent the night)\b[^.!?]{0,80}\b(?:overnight|until morning|through the night)\b/i.test(passage),
          inputSpan = timelineSpan(ce.pendingSceneInput), outputSpan = timelineSpan(clean),
          span = inputSpan || outputSpan,
          recentSpan = ce.timelineLastJump,
          duplicateSpan = !!(span && recentSpan && Number(recentSpan.afterDay) === Number(priorScene.day) &&
            Number(recentSpan.days) === span.days &&
            (span.kind === "past" || (!inputSpan && Number(ce.turn || 0) - Number(recentSpan.turn || 0) <= 2))),
          skipCount = span && !duplicateSpan ? span.days : 0,
          startedAtNight = /\b(?:night|evening|midnight)\b/i.test(priorScene.time || ""),
          crossingMorning = startedAtNight && /\b(?:dawn|morning)\b/i.test(ce.scene.time || "");
      dayContext = { startedDay:priorScene.day, startedAtNight:startedAtNight,
        explicitNextDay:explicitNextDay, advanced:false };
      if (/^\d+$/.test(String(priorScene.day || "")) && /^\d+$/.test(String(ce.scene.day || ""))) {
        var priorNumber = Number(priorScene.day), reportedNumber = Number(ce.scene.day),
            allowedDay = priorNumber + (skipCount || ((crossingMorning || explicitNextDay) ? 1 : 0));
        // A packet may propose a new date, but the current story must
        // actually cross a day boundary before it becomes canonical.
        if (reportedNumber !== allowedDay &&
            (skipCount || reportedNumber < priorNumber || reportedNumber > allowedDay ||
             (reportedNumber === priorNumber && allowedDay > priorNumber))) {
          ce.scene.day = String(allowedDay);
          ce.sceneInference.day = true;
        }
        dayContext.advanced = Number(ce.scene.day) > priorNumber;
        if (skipCount && dayContext.advanced) ce.timelineLastJump = {
          afterDay:Number(ce.scene.day), days:skipCount, turn:Number(ce.turn || 0)
        };
      }
      // A new venue leaves the old venue's cast behind. A later model packet
      // must not silently bring one of them along without a fresh story event.
      var changedArea = normaliseName(priorScene.area) !== normaliseName(ce.scene.area),
          adjacentArea = changedArea && sameSceneSite(priorScene.area, ce.scene.area),
          keptNames = uniqueRoster((ce.scene.present || []).concat(ce.scene.nearby || []));
      if (adjacentArea) {
        ce.scene.nearby = uniqueRoster((ce.scene.nearby || []).concat(priorScene.roster.filter(function (name) {
          return keptNames.map(normaliseName).indexOf(normaliseName(name)) < 0;
        })));
        ce.sceneInference.nearby = true;
      } else if (changedArea) {
        ce.sceneDisplaced = uniqueRoster((ce.sceneDisplaced || []).concat(priorScene.roster)).slice(-12);
      } else {
        ce.scene.present = uniqueRoster((ce.scene.present || []).concat(priorScene.present.filter(function (name) {
          return keptNames.map(normaliseName).indexOf(normaliseName(name)) < 0;
        })));
        ce.scene.nearby = uniqueRoster((ce.scene.nearby || []).concat(priorScene.nearby.filter(function (name) {
          return keptNames.map(normaliseName).indexOf(normaliseName(name)) < 0;
        })));
      }
      normaliseSceneRoster(ce, false);
      reconcileExplicitDepartures(ce, clean);
      reconcileProseScene(ce, ce.pendingSceneInput, dayContext, priorScene);
      reconcileProseScene(ce, clean, dayContext, priorScene);
      if ((ce.sceneDisplaced || []).length) {
        var displaced = ce.sceneDisplaced.map(normaliseName);
        ce.scene.present = (ce.scene.present || []).filter(function (name) { return displaced.indexOf(normaliseName(name)) < 0; });
        ce.scene.nearby = (ce.scene.nearby || []).filter(function (name) { return displaced.indexOf(normaliseName(name)) < 0; });
      }
      ce.pendingSceneInput = "";
    }

    if (pendingPanel) {
      ce.pendingSceneInput = "";
      clean = "\n\n" + (typeof pendingPanel === "string" ? pendingPanel : panel(ce, pendingPanel.kind, pendingPanel.arg));
      ce.pendingPanel = null;
      ce.resumeAfterCommand = true;
      return clean + "\n\n";
    }

    if (!clean) {
      // A CE-only or scrubbed response is a failed story turn. Keep neither
      // its scene/relationship updates nor its consumed player input.
      state.ce = beforeOutput;
      state.ce.lastEmptyOutput = {
        turn:ce.turn, rawChars:source.length,
        reason:!source.trim() ? "model returned no text" :
          (consumed && !source.slice(consumed).trim() ? "model returned only a scene packet" : "narration removed by CK filters")
      };
      state.ce.emptyOutputCount = Number(state.ce.emptyOutputCount || 0) + 1;
      return "The moment passes quietly.";
    }
    var separateFromNotice = ce.needsStorySeparator;
    ce.needsStorySeparator = false;
    var relationshipChanges = evolveRelationshipsAfterStory(ce, beforeOutput);
    observeCharacters(ce, clean);
    syncLore(ce);
    ce.lastNarrative = clean.replace(/\s+/g, " ").slice(-900);
    ce.emptyOutputCount = 0;
    ce.resumeAfterCommand = false;
    ce.missingSceneTurns = ce.scenePacketThisTurn ? 0 : Math.min(99, Number(ce.missingSceneTurns || 0) + 1);
    ce.quietThreadTurns = ce.threadUpdatedThisTurn ? 0 : Math.min(99, Number(ce.quietThreadTurns || 0) + 1);
    ce.scenePacketThisTurn = false;
    ce.threadUpdatedThisTurn = false;
    if (separateFromNotice) clean = "\n\n" + clean;
    if (relationshipChanges.length) clean += "\n\nCHRONICLE KEEPER — LEDGER\nRelationship status changed:\n" + relationshipChanges.map(function (event) {
      return "• " + event;
    }).join("\n") + "\n\n";
    if (relationshipChanges.length) ce.needsStorySeparator = true;
    return clean;
  }

  return {
    init: init,
    commands: commands,
    inject: inject,
    consume: consume,
    panel: panel
  };
}()); 
