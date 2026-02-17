import { StoryNode } from "../types";

export const rangerRobotCh2Story: StoryNode[] = [
  // Chapter 2 - Node 1
  {
    id: "rr2-01",
    character: "ranger-robot",
    title: "The Ranger Robot and the Junkyard Birds",
    narrative:
      "BEEP BOOP! Your morning patrol starts normal — birds chirping, squirrels arguing about acorns, the usual. But then your Sensor Dish picks up something wrong. The river is turning BROWN and YUCKY! Fish are jumping out of the water going \"BLEH!\" and swimming the other direction. You follow the river upstream and find the problem: someone has been dumping piles of old junk into the water! Rusty gears, bent pipes, cracked screens, broken springs — it's a mess! Even worse, YOUR spare parts shed has been raided! Your backup arm, your extra bolts, your emergency squeaky-leg oil — all GONE! A trail of scratched-up metal and shiny feathers leads deeper into the forest. Whatever took your parts also left the junk. Your Solar Panel flickers — you used some power during last month's adventure and it's at 84%. This could be a long day.",
    sillyMoment:
      "A fish jumps out of the brown water, lands on your head, looks you dead in the sensors, and says: \"Fix. This.\" Then it jumps back in. Another fish pops up. \"He's right, you know.\" Then a THIRD fish: \"We've started a petition.\" They hand you a tiny soggy paper with fish signatures on it. Fish don't have hands. You don't ask how they signed it.",
    choices: [
      {
        text: "Follow the trail of shiny feathers into the forest",
        nextNodeId: "rr2-02a",
        preview: "Those feathers look like they belong to something big and shiny...",
      },
      {
        text: "Clean up the river first — the fish need help NOW",
        nextNodeId: "rr2-02b",
        preview: "The pollution is spreading and the fish are NOT happy...",
      },
    ],
  },

  // Chapter 2a - Following the Trail
  {
    id: "rr2-02a",
    character: "ranger-robot",
    title: "The Feather Trail",
    narrative:
      "You follow the trail of shiny feathers through the Whispering Woods. They're beautiful — metallic blue and green, like someone dipped regular feathers in liquid rainbow. Along the way, you find more junk dumped in weird places: a rusty toaster in a bird's nest, a broken alarm clock hanging from a branch, a cracked teapot sitting in a flower bed. But next to each piece of junk, there's a tiny handwritten sign: \"ART.\" Someone thinks this junk is... art? You also find a Magnet Glove caught on a branch — it's one of YOUR spare parts from the shed! It can pick up anything metal from a distance. Very useful for cleaning up, or for grabbing things you can't reach. The feather trail leads toward the old Junkyard Clearing that nobody's used in years.",
    sillyMoment:
      "You pick up the \"ART\" sign next to the broken teapot. On the back it says: \"Please do not touch the art. If you have questions, ask the artist. The artist is a bird. The bird is very busy. Come back Tuesday.\" It's not Tuesday. You feel strangely guilty about touching the art.",
    itemEarned: {
      name: "Magnet Glove",
      description: "Picks up anything metal from far away! Like a robot fishing rod! BZZZZ!",
      emoji: "🧲",
    },
    choices: [
      {
        text: "Head straight to the Junkyard Clearing",
        nextNodeId: "rr2-03a",
        preview: "That's where the trail ends — someone's living there...",
      },
      {
        text: "Use the Magnet Glove to clean up junk along the way",
        nextNodeId: "rr2-03a",
        preview: "Every piece of junk you grab is one less in the river...",
      },
    ],
  },

  // Chapter 2b - Cleaning the River
  {
    id: "rr2-02b",
    character: "ranger-robot",
    title: "The Mucky River",
    narrative:
      "You wade into the river to start pulling out junk. CLANK! A rusty gear. SPLASH! A bent pipe. CLUNK! An old waffle iron (?!). The otters from last time show up to help, but they keep getting distracted by the floating junk. \"Ooh, a spring! I can use this as a SLIDE!\" says the littlest otter, bouncing on a rusty coil. Your power drops as you work: 79%... 76%... 73%... Then you find something interesting buried in the muck — a Waterproof Patch Kit! It's got sticky patches that can seal cracks and stop leaks. Could be useful for fixing broken things... or your Solar Panel. You also notice that the junk isn't random — it's all been swapped OUT of the forest. Someone took good things (your spare parts, clean river rocks) and replaced them with junk. It's like a trade — but a really bad one.",
    sillyMoment:
      "An otter pulls out an old boot from the river and wears it as a hat. Then another otter finds a matching boot and wears it as a hat too. Now the whole otter family is wearing boot-hats. \"It's fashion,\" mama otter says. \"You wouldn't understand.\" The baby otter wearing a waffle iron as a hat is, admittedly, kind of working the look.",
    itemEarned: {
      name: "Waterproof Patch Kit",
      description: "Sticky patches that seal cracks and fix leaks! Works on anything!",
      emoji: "🩹",
    },
    choices: [
      {
        text: "Use the Waterproof Patch Kit to fix your Solar Panel",
        nextNodeId: "rr2-03b",
        preview: "Full power means you can do MORE for the forest...",
      },
      {
        text: "Save the patches — follow the junk trail upstream",
        nextNodeId: "rr2-03b",
        preview: "Better to find who's doing this and stop it at the source...",
      },
    ],
  },

  // Chapter 3a - The Junkyard Clearing
  {
    id: "rr2-03a",
    character: "ranger-robot",
    title: "The Magpie Kingdom",
    narrative:
      "You reach the Junkyard Clearing and — WOW. It's been completely transformed! Five enormous magpie birds have built a whole KINGDOM out of junk! There are towers made of old pipes, bridges made of bent forks, and a throne made entirely of shiny bottle caps. The biggest magpie — a glossy blue-black bird the size of a turkey — is wearing your spare robot arm as a CROWN. \"Welcome to Magpie Kingdom!\" she announces, fluffing her feathers. \"I am Queen Maggie! We are the Junkyard Magpies! We collect, we build, we CREATE!\" \"You also dump junk in the river,\" you say. Maggie looks offended. \"That's not JUNK. Those are our OLD sculptures. We put them in the river as a GALLERY. An underwater gallery!\" She does NOT understand the problem.",
    sillyMoment:
      "One magpie has built a \"car\" out of junk. It doesn't move. It doesn't have wheels. It's just a pile of junk shaped vaguely like a car. The magpie sits in it and makes engine noises with her beak: \"VROOM VROOM!\" She turns an old doorknob. \"I'm going to the store,\" she announces. She does not go anywhere. \"Great trip,\" she says, getting out.",
    skillEarned: {
      name: "River Sonar",
      description: "Send a PING through the water to find anything hidden! PING PING!",
      emoji: "🔊",
    },
    choices: [
      {
        text: "Use the Magnet Glove to pull your spare parts off the Magpie throne",
        requiresItem: "Magnet Glove",
        nextNodeId: "rr2-04a",
        preview: "BZZZZ! Your arm piece flies right off Maggie's head!",
      },
      {
        text: "Ask Queen Maggie WHY she started collecting junk",
        nextNodeId: "rr2-04b",
        preview: "There might be a reason behind all this...",
      },
    ],
  },

  // Chapter 3b - Upstream Investigation
  {
    id: "rr2-03b",
    character: "ranger-robot",
    title: "The Trail of Trades",
    narrative:
      "Following the junk upstream, you discover a PATTERN. At every spot where junk was dumped, something GOOD was taken. River rocks swapped for rusty bolts. Wildflowers replaced with old springs. Your spare parts traded for broken kitchen gadgets. Each swap has a tiny note: \"Thank you for the trade! — The Magpies. P.S. You're welcome for the art.\" The Magpies think they're being FAIR. They think their junk is just as good as what they take. They don't understand that they're ruining the forest! Your Nature Scan skill picks up five large bird signatures in the old Junkyard Clearing — that must be their home base. You also detect that the river pollution will reach the otter homes by sunset if you don't stop it.",
    sillyMoment:
      "You find a note that says: \"Dear Forest, we took your nice round rocks and left you this beautiful vintage toaster (slightly burnt, adds character). We think this is a fair trade. If you disagree, please contact our complaints department.\" There's an arrow pointing to a rock with googly eyes glued on it. That's the complaints department. You stare at the googly-eyed rock. The googly eyes stare back. You feel judged.",
    skillEarned: {
      name: "River Sonar",
      description: "Send a PING through the water to find anything hidden! PING PING!",
      emoji: "🔊",
    },
    choices: [
      {
        text: "Head to the Junkyard Clearing to confront the Magpies",
        nextNodeId: "rr2-04a",
        preview: "Time to have a talk about 'fair trades'...",
      },
      {
        text: "Use River Sonar to find all the junk in the water first",
        nextNodeId: "rr2-04b",
        preview: "PING! Map out every piece of junk so you can clean it all...",
      },
    ],
  },

  // Chapter 4a - Confronting the Magpies
  {
    id: "rr2-04a",
    character: "ranger-robot",
    title: "The Magpie Problem",
    narrative:
      "You face Queen Maggie directly. \"Your junk is polluting the river. The fish can't breathe. The otters' homes are getting dirty. You took my spare parts!\" Maggie's feathers droop. The other magpies look at each other nervously. \"But... but we were RECYCLING,\" Maggie says quietly. \"We used to BE the forest's recyclers. We'd take broken things and turn them into useful stuff. We were GOOD at it. Then the old recycling center closed and nobody brought us things to fix anymore. So we... started finding our own things to fix.\" She looks at the junk kingdom. \"We thought we were helping. We thought the trades were fair.\" She takes your robot arm off her head and holds it out. \"I'm sorry about your arm. It just... it was so SHINY.\" A single magpie tear rolls down her beak.",
    sillyMoment:
      "The magpie with the \"car\" overhears the sad conversation and starts crying. She hugs her junk car. \"Are we... are we the BAD GUYS?\" she sniffles. The car falls apart. She cries harder. Another magpie pats her with a wing. \"There, there. We'll build you a new car.\" \"I DON'T WANT A CAR I WANT TO BE GOOD!\" she wails. It's very dramatic. Magpies are VERY dramatic.",
    itemEarned: {
      name: "Shiny Rivet Set",
      description: "Super strong rivets that can hold ANYTHING together! They're also very sparkly!",
      emoji: "🔩",
    },
    choices: [
      {
        text: "Use the Shiny Rivet Set to help rebuild the recycling center",
        nextNodeId: "rr2-05a",
        preview: "If they have a real recycling center, they won't need to scavenge!",
      },
      {
        text: "Ask the Magpies to help you clean up the river first",
        nextNodeId: "rr2-05b",
        preview: "They made the mess — they should help fix it...",
      },
    ],
  },

  // Chapter 4b - Understanding the Magpies
  {
    id: "rr2-04b",
    character: "ranger-robot",
    title: "The Old Recycling Center",
    narrative:
      "Your River Sonar maps every single piece of junk in the water — forty-seven items total. As you catalog them, you discover something: a lot of this junk isn't random. It's broken things that COULD be useful if someone fixed them properly. A toaster that just needs a new wire. A teapot with one tiny crack. An alarm clock that's only five minutes off. Whoever collected this stuff has a good eye for fixable things — they just don't know how to fix them right. Following the sonar upstream, you find the ruins of the old Forest Recycling Center. It's covered in vines but the sign is still readable: \"Magpie Recycling Co. — We Fix Everything! (Closed Due to No Customers).\" OH. The Magpies used to RUN a recycling center! They're not villains — they're unemployed recyclers! In the ruins, you find a Shiny Rivet Set — strong connectors that could rebuild almost anything.",
    sillyMoment:
      "Inside the old recycling center, there's a dusty \"Employee of the Month\" wall with twelve months of the same magpie photo. She's posing differently in each one — serious face, silly face, looking-into-the-distance face, wearing-sunglasses face. \"That's Maggie,\" a plaque reads. \"Employee of the month. Also the only employee. Also the photographer. Also the judge. She won unanimously.\"",
    itemEarned: {
      name: "Shiny Rivet Set",
      description: "Super strong rivets that can hold ANYTHING together! They're also very sparkly!",
      emoji: "🔩",
    },
    choices: [
      {
        text: "Use the Waterproof Patch Kit AND Rivet Set to rebuild the center",
        requiresItem: "Waterproof Patch Kit",
        nextNodeId: "rr2-05a",
        preview: "With patches for the leaks and rivets for the frame — it's perfect!",
      },
      {
        text: "Bring the Magpies here to show them their old workplace",
        nextNodeId: "rr2-05b",
        preview: "Maybe seeing this will remind them of who they really are...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "rr2-05a",
    character: "ranger-robot",
    title: "The Recycling Kingdom!",
    narrative:
      "You and the Magpies work together to rebuild the Forest Recycling Center! You use the Shiny Rivet Set to bolt the frame together — CLANK CLANK CLANK! Maggie directs her magpies like a general: \"You! Straighten that beam! You! Polish that sign! You in the junk car — STOP MAKING VROOM NOISES AND HELP!\" With your robot strength and the magpies' building skills, the new center is even BETTER than the old one. It's got sorting stations for different materials, a fixing workshop, and a \"Shiny Things\" display case (Maggie insisted). Then comes the big cleanup. The magpies fly across the forest pulling junk out of the river, out of the nests, out of the flower beds. Every broken piece gets brought back to the center to be fixed properly. Your spare parts? Returned AND polished. Your Solar Panel? Maggie patches the old crack with a piece of perfectly shaped recycled metal. BEEP! POWER AT 100%! The fish are thrilled. The otters throw a river party. Queen Maggie reopens the recycling center with a grand ceremony. The sign now reads: \"Magpie Recycling Co. & Robot Repair Shop — We Fix EVERYTHING!\" Every creature in the forest brings their broken stuff to the magpies. Maggie has never been happier. She still wears one small bolt as a crown, but you gave her permission for that one. It IS a very shiny bolt.",
    sillyMoment:
      "The magpie with the \"car\" uses recycled parts to build an ACTUAL working go-kart. It goes two miles per hour. She drives it around the recycling center going \"VROOM!\" at full volume. It's the slowest, loudest vehicle in the forest. She enters it in the Forest Derby and finishes last. She holds her trophy (for \"Best Sportsmanship\") like she won the championship. Everyone claps. The go-kart falls apart on the victory lap. \"THAT WAS THE BEST DAY OF MY LIFE!\" she screams from the pile of parts.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "rr2-05b",
    character: "ranger-robot",
    title: "The River Cleanup Crew",
    narrative:
      "You bring the Magpies to the river to show them what their junk-dumping has done. Maggie stares at the brown water. The dead plants. The sad fish with their tiny petition. \"We... we did THIS?\" she whispers. The other magpies gasp. The dramatic car-magpie faints. \"We thought we were making the river PRETTIER,\" Maggie says, her voice cracking. \"We thought the junk was ART.\" \"It's not art if it hurts people,\" you say gently. \"But you know what WOULD be art? Fixing this.\" Something clicks in Maggie's eyes. \"You're RIGHT! MAGPIES! OPERATION CLEANUP!\" They move like a tornado. Five magpies swooping across the river, grabbing junk in their talons, piling it on the shore. You sort the junk into fixable and recyclable. The otters join in, using their slides as conveyor belts. By sunset, the river runs crystal clear again. The fish swim back, looking suspicious but grateful. \"We're watching you,\" the lead fish says to Maggie. \"Noted,\" says Maggie. From that day on, the Magpies become the Whispering Woods Official Cleanup Crew. They patrol the forest every morning, picking up fallen branches, clearing blocked streams, and recycling anything broken into something beautiful. Maggie builds a tiny monument by the river: a sculpture of a fish and a magpie shaking hands. Fish don't have hands, but Maggie says it's \"artistic license.\" The fish committee approves it, four votes to one. The one holdout says the fish's tail looks weird. Maggie fixes it. Everybody's happy.",
    sillyMoment:
      "The car-magpie builds the fish a tiny waterproof mailbox so they can file formal complaints instead of making petitions. The first letter in the mailbox says: \"Dear Magpies, please stop staring at us while we swim. It's weird. Sincerely, The Fish.\" The second letter says: \"P.S. The monument is nice though.\" The third letter: \"P.P.S. Can we get a fish STATUE next time? Asking for a friend (the friend is me).\"",
    isEnding: true,
    choices: [],
  },
];
