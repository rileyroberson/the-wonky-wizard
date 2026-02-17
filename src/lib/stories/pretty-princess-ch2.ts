import { StoryNode } from "../types";

export const prettyPrincessCh2Story: StoryNode[] = [
  // Chapter 2 - Node 1
  {
    id: "pr2-01",
    character: "pretty-princess",
    title: "The Pretty Princess and the Starless Night",
    narrative:
      "Oh no, oh no, oh NO! A wild storm just blew through the Enchanted Forest and a bolt of lightning hit your Glowing Tiara — CRACK! A jagged line splits right across the biggest gem! The tiara still glows, but it flickers like a candle about to go out. And your tiara powers the magical nightlights that keep the whole forest safe and cozy at night! Without it, the Enchanted Forest will be totally DARK when the sun goes down! Animals are already getting scared. But that's not all — a Sneaky Raccoon has been stealing every shiny thing in the kingdom! Lanterns, mirrors, glowy crystals, even the fairy lights from the garden party — all GONE! Fluffington puts on his \"investigation goggles\" (two empty toilet paper rolls taped together). \"Don't worry,\" he says. \"I'm on the case.\" He walks into a wall.",
    sillyMoment:
      "Fluffington adjusts his toilet paper roll goggles, squints at a sparkly breadcrumb on the floor, and announces: \"I've found a CLUE.\" It's a breadcrumb from his own breakfast. He eats the clue. \"The trail has gone cold,\" he says dramatically.",
    choices: [
      {
        text: "Follow the trail of missing shiny things",
        nextNodeId: "pr2-02a",
        preview: "There are glittery footprints leading into the woods...",
      },
      {
        text: "Go to the Crystal Cave to find gems that can fix the tiara",
        nextNodeId: "pr2-02b",
        preview: "The cave has rare crystals, but it's dark in there...",
      },
    ],
  },

  // Chapter 2a - Following the Trail
  {
    id: "pr2-02a",
    character: "pretty-princess",
    title: "The Glitter Trail",
    narrative:
      "You follow the glittery footprints through the forest. The Raccoon wasn't very sneaky — he dropped shiny things the whole way! A button here, a sequin there, a whole sparkly sock (who has sparkly socks?!). The trail leads to a clearing where you find a HUGE pile of stolen shiny things arranged in a perfect pyramid. Mirrors at the bottom, crystals in the middle, fairy lights draped on top. It's actually... kind of beautiful? Whoever stacked this is VERY organized. Next to the pile, you find a spool of Moonbeam Thread — the shiniest, strongest thread in the kingdom. It looks like liquid starlight. A tag on it reads: \"Property of Rascal, Chief Organizer (Retired).\" Hmmm. The Raccoon left his NAME on things he stole?",
    sillyMoment:
      "Fluffington sees the sparkly pyramid and gasps. \"It's the most beautiful thing I've ever—\" He sneezes. The sneeze knocks over ONE tiny crystal at the top. The ENTIRE pyramid starts wobbling. You both freeze. It wobbles... wobbles... and stays up. You and Fluffington let out the biggest sigh of your lives. Then a bird lands on it. CRASH. \"...RUN,\" says Fluffington.",
    itemEarned: {
      name: "Moonbeam Thread",
      description: "Thread made of actual moonbeams! Shiny, strong, and a little bit ticklish!",
      emoji: "🧵",
    },
    choices: [
      {
        text: "Follow the footprints deeper into the woods",
        nextNodeId: "pr2-03a",
        preview: "The raccoon's hideout must be close...",
      },
      {
        text: "Use the Moonbeam Thread to fix the tiara right now",
        nextNodeId: "pr2-03b",
        preview: "If the tiara's fixed, the nightlights come back immediately...",
      },
    ],
  },

  // Chapter 2b - Crystal Cave
  {
    id: "pr2-02b",
    character: "pretty-princess",
    title: "The Dark Crystal Cave",
    narrative:
      "You and Fluffington head to the Crystal Cave. Usually the crystals glow in beautiful colors, but without the tiara's full power, they're dim and gray. The cave is dark and echoey. Fluffington is NOT happy. \"I'm brave, I'm brave, I'm brave,\" he whispers, holding your hand with both paws. His toilet paper goggles are fogging up from nervous breathing. Drip... drip... drip... goes the cave. Then — SQUEAK SQUEAK SQUEAK! — a family of bats swoops down! \"Hi! Hello! We heard you need help!\" The biggest bat (wearing a tiny bowtie — very professional) introduces herself: \"I'm Beatrice. We can see in the dark! We'll guide you!\" She hands you a Glow Mushroom she found deeper in the cave. It gives off a soft, warm light. That could be useful!",
    sillyMoment:
      "Fluffington screams when the bats show up. Not a big scream — a tiny, squeaky bunny scream: \"eeeee!\" Then he tries to pretend it was on purpose. \"I was testing the echo,\" he says, crossing his arms. The echo comes back: \"eeeee! eeeee! eeeee!\" \"Great echo,\" says Beatrice. Fluffington sweats.",
    itemEarned: {
      name: "Glow Mushroom",
      description: "A cute little mushroom that glows warm and soft! Like a nightlight you can carry!",
      emoji: "🍄",
    },
    choices: [
      {
        text: "Follow the bats deeper to find a rare Fixing Crystal",
        nextNodeId: "pr2-03b",
        preview: "Beatrice says there's a special crystal that can repair anything...",
      },
      {
        text: "Use the Glow Mushroom to explore on your own",
        nextNodeId: "pr2-03a",
        preview: "You notice a small tunnel with glittery footprints going in...",
      },
    ],
  },

  // Chapter 3a - The Raccoon's Collection
  {
    id: "pr2-03a",
    character: "pretty-princess",
    title: "The Collection Room",
    narrative:
      "You find the Raccoon's hideout — a hollow tree that's been turned into the most PERFECTLY ORGANIZED room you've ever seen. Every shiny thing is sorted by color, then by size, then by shininess level. There are labels on everything: \"Very Shiny,\" \"Extremely Shiny,\" \"So Shiny It Hurts My Eyes (Wear Sunglasses).\" A chart on the wall tracks his daily shiny-thing collection with gold stars. A tiny desk has a nameplate: \"Rascal — Chief Royal Organizer (Retired).\" RETIRED? He used to WORK at the castle? On the desk is a framed photo of a raccoon in a tiny business suit standing proudly next to a perfectly organized royal closet. He looks so HAPPY. But someone wrote \"REPLACED BY NEW FILING SYSTEM\" in red across the bottom. Oh no. He wasn't stealing to be mean — he lost his job!",
    sillyMoment:
      "There's a section labeled \"Confusing Items\" that contains: one sock, a rubber duck with a mustache, and a note that says \"Is this shiny? I honestly can't tell. Further research needed.\" The rubber duck has its own tiny file folder. Fluffington opens the file. It contains a single page that says: \"Status: Unclear. Vibe: Suspicious.\"",
    skillEarned: {
      name: "Starlight Song",
      description: "Sing and make things glow! Even rocks get sparkly! Even SOCKS get sparkly!",
      emoji: "🌟",
    },
    choices: [
      {
        text: "Wait for the Raccoon to come back",
        nextNodeId: "pr2-04a",
        preview: "He'll be back soon — his schedule is on the wall and he's very punctual...",
      },
      {
        text: "Sing Starlight Song to light up the forest and draw him out",
        nextNodeId: "pr2-04b",
        preview: "If everything glows, he'll HAVE to come investigate...",
      },
    ],
  },

  // Chapter 3b - Deep Crystal Cave
  {
    id: "pr2-03b",
    character: "pretty-princess",
    title: "The Stuck Crystal",
    narrative:
      "Deep in the cave, Beatrice the bat leads you to a rare Fixing Crystal — a beautiful gem that glows soft purple and can repair anything magical! But there's a problem. The storm knocked it loose and it's wedged between two big rocks like a stuck pickle in a jar. You pull. You push. You wiggle. It won't budge! \"Maybe if we had something strong to wrap around it and pull?\" Beatrice suggests, tilting her tiny bowtied head. Your Glow Mushroom lights up the area so you can see the problem clearly. The crystal is almost free — it just needs one good tug from the right angle. Fluffington tries to pull it out himself. He tugs with all his bunny might. His toilet paper goggles fall off. He doesn't move the crystal even a tiny bit.",
    sillyMoment:
      "Fluffington pulls SO HARD that when his paws slip, he rockets backwards and slides across the cave floor like a fuzzy hockey puck. He hits the far wall with a soft BONF. \"I loosened it,\" he says from the ground, his ears flat against his head. He absolutely did not loosen it. Beatrice lands on the crystal and tries to pull it with her tiny bat wings. It's like watching a hamster try to lift a bowling ball.",
    skillEarned: {
      name: "Starlight Song",
      description: "Sing and make things glow! Even rocks get sparkly! Even SOCKS get sparkly!",
      emoji: "🌟",
    },
    choices: [
      {
        text: "Use the Moonbeam Thread to lasso and pull the crystal free",
        requiresItem: "Moonbeam Thread",
        nextNodeId: "pr2-04a",
        preview: "Moonbeam Thread is the strongest thread in the kingdom!",
      },
      {
        text: "Sing Starlight Song to vibrate the rocks and loosen the crystal",
        nextNodeId: "pr2-04b",
        preview: "Music moves mountains... or at least wiggles rocks...",
      },
    ],
  },

  // Chapter 4a - Meet the Raccoon (polite encounter)
  {
    id: "pr2-04a",
    character: "pretty-princess",
    title: "The Sneaky Raccoon",
    narrative:
      "Rascal the Raccoon shows up. He's medium-sized, gray and fluffy, with a mask of darker fur around his eyes (which makes him look extra sneaky even when he's not trying). He's wearing a tiny monocle and carrying a clipboard. When he sees you in his collection room, he drops the clipboard. \"A PRINCESS?! In MY organizational headquarters?!\" He scrambles to straighten everything. \"Please don't touch the displays — they're organized by the Rascal Decimal System!\" Then he sighs and puts down his monocle. \"You're here about the shiny things, aren't you?\" He sits down on a tiny stool. \"I was the Royal Organizer. The BEST sorter in the kingdom. I organized the royal closet, the royal pantry, the royal EVERYTHING. Then that new filing system came in and...\" He sniffles. \"Nobody needed me anymore.\"",
    sillyMoment:
      "Rascal offers you tea. He pours it into three cups sorted by size: small, medium, and Fluffington-sized (extra tiny). The tea is organized by color — lightest on the left, darkest on the right. The sugar cubes are stacked in a perfect pyramid. Fluffington accidentally knocks over the sugar pyramid. Rascal twitches. He rebuilds it in 0.3 seconds. \"Please,\" he says, eye twitching, \"don't touch the sugar.\"",
    itemEarned: {
      name: "Star Stickers",
      description: "Sparkly star stickers that make everything look official and important!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Ask Rascal to help you organize the tiara repair",
        nextNodeId: "pr2-05a",
        preview: "He's the best organizer in the kingdom — put those skills to use!",
      },
      {
        text: "Offer Rascal a new job: Royal Night-Light Organizer",
        nextNodeId: "pr2-05b",
        preview: "The forest needs someone to organize ALL the nightlights properly...",
      },
    ],
  },

  // Chapter 4b - Meet the Raccoon (surprise encounter)
  {
    id: "pr2-04b",
    character: "pretty-princess",
    title: "The Raccoon's Return",
    narrative:
      "Your Starlight Song lights up the forest with a soft, beautiful glow. Every leaf shimmers. Every pebble sparkles. And within thirty seconds, Rascal the Raccoon comes SPRINTING through the trees, eyes as wide as dinner plates. \"WHAT IS THIS?! NEW SHINY THINGS?! I NEED TO CATALOG THEM!\" He skids to a stop when he sees you. He looks at his bag of stolen shinies. He looks at you. He very carefully puts the bag down, sorts the contents, THEN panics. \"Oh no. Oh NO. You're the princess. You're here about the things. The shiny things. That I... borrowed. Without asking. Repeatedly.\" He sits down and puts his face in his paws. \"I just miss organizing things. I was the BEST at it. The Royal Closet was FLAWLESS. The pantry? ALPHABETIZED. Then the new system came and nobody needed Rascal anymore.\"",
    sillyMoment:
      "Even while confessing, Rascal absentmindedly sorts the leaves around him by size. Small, medium, large, extra-leafy. He can't HELP it. Fluffington hands him a random stick. Rascal looks at it for two seconds then files it under \"Sticks, Brown, Medium, Slightly Curved.\" Fluffington looks at you. \"He's REALLY good at this,\" he whispers.",
    itemEarned: {
      name: "Star Stickers",
      description: "Sparkly star stickers that make everything look official and important!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Use the Star Stickers to decorate Rascal's collection as a gift",
        nextNodeId: "pr2-05b",
        preview: "If his collection is official, maybe he'll feel valued again...",
      },
      {
        text: "Tell Rascal you need the greatest organizer in the kingdom for a big project",
        nextNodeId: "pr2-05a",
        preview: "He perks up immediately when you say 'greatest organizer'...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "pr2-05a",
    character: "pretty-princess",
    title: "The Great Repair!",
    narrative:
      "\"I need your help,\" you tell Rascal. \"The tiara is cracked, the nightlights are failing, and the whole forest needs someone who can organize the biggest repair job in kingdom history. I need the BEST.\" Rascal's ears shoot straight up. His monocle gleams. \"The... the BEST?\" He pulls out his clipboard so fast it makes a whooshing sound. \"STEP ONE!\" he announces, immediately in full organizer mode. \"Sort all magical supplies by power level! STEP TWO! Identify optimal crystal placement for maximum glow! STEP THREE! Schedule nightlight installation by quadrant!\" He organizes the tiara repair like a GENERAL organizing an army. Moonbeam Thread goes here. Fixing Crystal goes there. Star Stickers mark each section. When the last piece clicks into place, the tiara BLAZES with light — brighter than it's EVER been! Every nightlight in the Enchanted Forest pops back on at once! Animals cheer! Fireflies celebrate with a light show! Rascal returns every single stolen shiny thing, organized by owner and wrapped in tiny bows. He becomes the Royal Night-Light Organizer AND the Official Forest Filing Expert. His new office has a nameplate that says \"RASCAL — CHIEF OF EVERYTHING SHINY.\" Fluffington finally gets real investigation goggles. They're still toilet paper rolls, but Rascal bedazzled them. They're MAGNIFICENT.",
    sillyMoment:
      "Rascal organizes the celebration party so perfectly that everyone arrives at exactly the right time, sits in alphabetical order, and the cake is cut into mathematically equal pieces. \"Is this fun?\" Rascal asks nervously. \"It seems organized but is it FUN?\" Fluffington dumps a bowl of sprinkles on the table. \"NOW it's fun.\" Rascal stares at the disorganized sprinkles. His eye twitches. He sorts them by color in under a minute. It IS fun.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "pr2-05b",
    character: "pretty-princess",
    title: "The Shiny Things Museum",
    narrative:
      "You have the BEST idea. \"Rascal,\" you say, \"what if we don't just give back the shiny things? What if we build a place where EVERYONE can enjoy them?\" Rascal's eyes go so wide they almost pop out of his head. \"A... a MUSEUM? A MUSEUM OF SHINY THINGS?!\" He faints from excitement. Fluffington fans him with his ears. When he wakes up, he gets to work IMMEDIATELY. Together, you build the Enchanted Forest's first-ever Shiny Things Museum. Rascal organizes every exhibit perfectly. The mirror section reflects rainbows across the ceiling. The crystal room glows in sixteen different colors. The fairy light hallway looks like walking through the stars. You fix the tiara using the Moonbeam Thread and Rascal's precise organizational skills — he holds each piece at the EXACT right angle while you thread them together. The tiara glows and all the nightlights come back! The museum opens on a Saturday and the entire kingdom comes. Rascal stands at the door with a new nameplate: \"RASCAL — CHIEF MUSEUM CURATOR AND ROYAL ORGANIZER OF BEAUTIFUL THINGS.\" He's the happiest raccoon in the world. His motto: \"A place for everything, and everything in its place!\" He says it forty-seven times on opening day. Nobody minds because he's beaming every single time. Fluffington becomes the museum's Head of Security. His badge is a bedazzled toilet paper roll.",
    sillyMoment:
      "On opening day, Rascal discovers that the rubber duck with the mustache (from his \"Confusing Items\" collection) is actually the most popular exhibit. Everyone LOVES it. \"I KNEW that duck was special!\" Rascal says, even though his file said \"Status: Unclear. Vibe: Suspicious.\" The rubber duck gets its own velvet pedestal. Fluffington gives it a tiny security escort. The duck says nothing, on account of being a duck, but it looks very proud.",
    isEnding: true,
    choices: [],
  },
];
