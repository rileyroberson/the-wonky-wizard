import { StoryNode } from "../types";

export const allFriendsStory: StoryNode[] = [
  // Chapter 1 - Node 1
  {
    id: "af-01",
    character: "all-friends",
    title: "The Kingdom of Mount Boom",
    narrative:
      "BOOM! RUMBLE! SHAKE! Mount Boom — the enormous volcano right in the middle of the kingdom — is going CRAZY! It hasn't rumbled like this in a hundred years! Mount Boom is so big that it separates all the places in the kingdom: the Wonky Wizard's wobbly tower is on one side, the Noble Knight's squeaky castle is on another, the Pretty Princess's sparkly palace is on a third, and the Ranger Robot's acorn charging station is on the fourth. But today, ALL FOUR heroes have been called to the base of the mountain by an urgent royal message: \"HELP! THE BIGGEST DRAGON ANYONE HAS EVER SEEN is circling Mount Boom! It's breathing fire and making the volcano SHAKE! If someone doesn't stop it, Mount Boom will ERUPT! Signed, Everyone Who Lives Here (P.S. PLEASE HURRY).\" You all arrive at the same time. The Wonky Wizard trips over his beard. The Noble Knight's horse, Sir Clip-Clop, immediately starts complaining about the parking situation. The Pretty Princess's bunny Fluffington puts on tiny emergency goggles. The Ranger Robot's leg goes SQUEEEAK. You look up. The dragon is MASSIVE — as big as a HOUSE — circling the peak and roaring fire into the sky. It's time to work together!",
    sillyMoment:
      "Sir Clip-Clop looks at the Ranger Robot. The Ranger Robot looks at Sir Clip-Clop. \"So,\" Sir Clip-Clop says, \"you're a robot.\" \"Correct,\" says the Robot. \"Can you make spaghetti?\" asks Sir Clip-Clop. \"I cannot,\" says the Robot. \"Then what's the POINT?\" Sir Clip-Clop mutters. Fluffington tries to shake hands with the Robot but accidentally shakes a bolt loose. The Robot's left arm falls off. \"I can fix that!\" says Fluffington. He cannot fix that.",
    choices: [
      {
        text: "Everyone try your special items on the dragon!",
        nextNodeId: "af-02a",
        preview: "Four heroes, four items — one of them has to work... right?",
      },
      {
        text: "Start climbing Mount Boom together right away!",
        nextNodeId: "af-02b",
        preview: "No time to waste — that volcano is getting angrier!",
      },
    ],
  },

  // Chapter 2a - The Item Swap Discovery
  {
    id: "af-02a",
    character: "all-friends",
    title: "The Great Item Mix-Up",
    narrative:
      "Everyone holds up their special item and tries to use it. The Wizard waves his Mighty Wand — FZZZT! Nothing but sad sparks. The Knight swings his Wooden Sword — it wobbles like a rubber noodle. The Princess holds up her Glowing Tiara — it flickers and goes dark. The Robot activates his Sensor Dish — BZZP. Just static. \"Well THAT didn't work,\" says Sir Clip-Clop. But then something strange happens. The Wizard walks past the Princess and her tiara starts BLAZING with light! The Princess walks near the Wand and it shoots rainbow sparks! The Knight brushes past the Robot and the Sensor Dish PINGS like crazy! The Robot picks up the Sword and it HUMS with power! \"Wait a minute,\" the Wizard says, putting the tiara on his head. It glows like a star! \"The items only work for SOMEONE ELSE!\" The Wand works for the Princess. The Sword works for the Robot. The Tiara works for the Wizard. The Sensor Dish works for the Knight. They'll have to SHARE to make it up the mountain!",
    sillyMoment:
      "The Wizard puts on the tiara and immediately starts posing. \"How do I look?\" he asks. \"Like a wizard wearing a tiara,\" says Sir Clip-Clop. \"So... AMAZING?\" says the Wizard. \"I was going to say 'confused,' but sure.\" The Princess waves the wand and accidentally turns Sir Clip-Clop's tail rainbow. \"I LOVE IT,\" Sir Clip-Clop says instantly. \"DON'T CHANGE IT BACK.\"",
    itemEarned: {
      name: "Team Map",
      description: "A magical map that only works when ALL FOUR heroes hold a corner! Shows the way up Mount Boom!",
      emoji: "🗺️",
    },
    choices: [
      {
        text: "Take the Lava River path up the mountain",
        nextNodeId: "af-03a",
        preview: "The Knight's Sensor Dish is picking up safe stepping stones through the lava...",
      },
      {
        text: "Take the Crystal Caves path through the volcano",
        nextNodeId: "af-03b",
        preview: "The Wizard's Tiara can light the way through the dark...",
      },
    ],
  },

  // Chapter 2b - Climbing Without Swapping
  {
    id: "af-02b",
    character: "all-friends",
    title: "The Scramble Up Mount Boom",
    narrative:
      "No time to plan — you all start climbing! The mountain is rocky, steep, and WARM. Little puffs of steam hiss out of cracks. The ground trembles every time the dragon roars above. ROOOOAR! Everyone tries to use their items as they climb, but NOTHING works right. The Wizard's spells go sideways. The Knight's sword can't cut through volcanic vines. The Princess's tiara keeps flickering. The Robot's sensors just say ERROR ERROR ERROR. \"This is a DISASTER,\" groans Sir Clip-Clop, slipping on a rock. Then the Robot stumbles and bumps into the Princess — and her tiara EXPLODES with light! It's so bright the whole mountain glows! \"WAIT!\" shouts the Wizard. \"When you two are CLOSE, the tiara works!\" They test it: the Wand blazes when the PRINCESS holds it. The Sword hums for the ROBOT. The Tiara works for the WIZARD. The Sensor Dish pings for the KNIGHT. \"We have to TRADE!\" Everyone swaps items. Suddenly, the whole team is powered up!",
    sillyMoment:
      "During the swap, Fluffington tries to hold the Sword. It's bigger than he is. He lifts it one inch off the ground, turns bright red, and falls over. \"I ALMOST had it,\" he wheezes from the ground. The Robot gently takes it from him. \"You are very brave,\" the Robot says. \"And very small.\" Fluffington puffs up with pride AND mild offense.",
    itemEarned: {
      name: "Team Map",
      description: "A magical map that only works when ALL FOUR heroes hold a corner! Shows the way up Mount Boom!",
      emoji: "🗺️",
    },
    choices: [
      {
        text: "Take the Lava River path — the Knight's sensors found a safe route!",
        nextNodeId: "af-03a",
        preview: "PING PING PING — safe stones detected through the lava!",
      },
      {
        text: "Take the Crystal Caves — the Wizard's tiara lights the way!",
        nextNodeId: "af-03b",
        preview: "The tiara turns the dark caves into a light show!",
      },
    ],
  },

  // Chapter 3a - Lava River Path
  {
    id: "af-03a",
    character: "all-friends",
    title: "The Lava River Crossing",
    narrative:
      "The Lava River cuts across the mountain path — a river of glowing orange goo that's VERY hot and VERY bubbly. BLORP BLORP BLORP! But the Knight holds up the Sensor Dish and — PING PING PING! — it maps out stepping stones hidden just below the surface! \"I can see the safe ones! Follow me!\" the Knight shouts. The Robot goes first, using the Sword to cut away volcanic rock blocking the path. CLANG! CLANG! The Princess follows, using the Wand to cool the lava around each stepping stone — WHOOOOSH! Clouds of steam everywhere! The Wizard brings up the rear, the Tiara lighting the way through the steam so nobody gets lost. One by one, they cross. Sir Clip-Clop REFUSES to walk on stepping stones (\"I am a HORSE, not a MOUNTAIN GOAT\") so the Robot carries him. \"This is undignified,\" Sir Clip-Clop says from the Robot's arms. \"But also kind of nice.\" From the other side, they can see the peak — and the dragon. It's even BIGGER up close. But something is weird... is its tail... WAGGING?",
    sillyMoment:
      "Fluffington tries to hop across the stepping stones by himself. He makes it exactly ONE stone before his toilet-paper-roll goggles fog up from the steam. He can't see anything. He stands on the stone in the middle of a lava river, completely blind, and yells: \"I'M FINE! EVERYTHING IS FINE! NOBODY HELP ME!\" The Princess picks him up with one hand. \"I was about to do a FLIP,\" Fluffington insists. He was not about to do a flip.",
    skillEarned: {
      name: "Team Cheer",
      description: "All four heroes cheer together — BOOM! Everyone gets braver and stronger!",
      emoji: "📣",
    },
    choices: [
      {
        text: "Use the Team Map to find a shortcut to the peak",
        requiresItem: "Team Map",
        nextNodeId: "af-04a",
        preview: "Everyone grab a corner — the map is glowing!",
      },
      {
        text: "Follow the dragon's roar straight up the mountain",
        nextNodeId: "af-04b",
        preview: "ROOOOAR! It's loud but it's like a homing beacon...",
      },
    ],
  },

  // Chapter 3b - Crystal Caves Path
  {
    id: "af-03b",
    character: "all-friends",
    title: "The Crystal Caves of Mount Boom",
    narrative:
      "The team enters the Crystal Caves — tunnels inside the volcano lined with thousands of crystals. Without light, it's pitch black. But the Wizard holds up the Princess's Tiara and — FLASH! — it lights up like a disco ball! Rainbows bounce off every crystal and suddenly the whole cave is a dazzling light show! \"OOOOH!\" everyone says. Even the Robot, who shouldn't be impressed by lights but definitely is. The Princess leads the way, using the Wand to move boulders that block the path. The Knight's Sensor Dish detects weak spots in the floor so nobody falls through. The Robot's Sword chips away at crystal walls to open new passages. They're working like a REAL team! Deep in the cave, they find something strange: CLAW MARKS on the walls. BIG ones. But they don't look angry — they look... playful? Like a cat scratching a post. And next to the claw marks, someone has drawn a wobbly picture in the rock: four small stick figures and one VERY big figure with wings. Are those... them?",
    sillyMoment:
      "Sir Clip-Clop sees his own reflection in a crystal and screams. \"WHO IS THAT HANDSOME HORSE?!\" He stares at it. \"Oh wait. It's me. Of course.\" He spends the next two minutes doing poses in the crystal reflection while everyone else solves puzzles. The Robot takes a photo with his sensors. Sir Clip-Clop asks for copies. \"I want wallet-sized AND poster-sized,\" he says. Fluffington photobombs every single crystal reflection. He thinks he's hilarious. He is.",
    skillEarned: {
      name: "Team Cheer",
      description: "All four heroes cheer together — BOOM! Everyone gets braver and stronger!",
      emoji: "📣",
    },
    choices: [
      {
        text: "Follow the claw marks — they might lead to the dragon!",
        nextNodeId: "af-04b",
        preview: "The scratches get bigger and more playful as they go up...",
      },
      {
        text: "Use the Team Map to find the fastest exit to the peak",
        requiresItem: "Team Map",
        nextNodeId: "af-04a",
        preview: "Four corners, four heroes — the map lights up!",
      },
    ],
  },

  // Chapter 4a - The Peak (direct approach)
  {
    id: "af-04a",
    character: "all-friends",
    title: "The Peak of Mount Boom",
    narrative:
      "You reach the top of Mount Boom! The volcano crater is right there — bubbling and glowing orange. And sitting on the rim, roaring and stomping, is the BIGGEST dragon any of you have ever seen. It's the size of a HOUSE. Its wings are wide enough to block the sun. Its teeth are as big as the Knight's sword. Everyone freezes. \"That's... that's really big,\" whispers the Knight. \"REALLY big,\" agrees the Robot. ROOOOAR! The dragon breathes a column of fire into the sky! The ground shakes! But then — the Wizard, still wearing the Tiara, notices something glinting on the dragon's neck. \"Wait. Is that... a COLLAR?\" It IS a collar! A big leather collar with a shiny tag. The Wizard squints through the tiara's glow and reads the tag out loud: \"BISCUIT. If found, return to The Kingdom of Mount Boom.\" Everyone looks at each other. \"...BISCUIT?!\" they all say at the same time.",
    sillyMoment:
      "Sir Clip-Clop stares up at the house-sized dragon. The dragon stares down at Sir Clip-Clop. It's like a cat seeing a mouse, except the cat is a DRAGON and the mouse is a VERY opinionated horse. \"I'm not scared,\" Sir Clip-Clop says, his knees visibly shaking. \"My knees always do that. It's a medical condition. It's called Being-Extremely-Brave-itis.\" Fluffington hides behind the Robot's leg. \"I'm guarding the rear,\" Fluffington says. \"Very strategic.\" He is simply hiding.",
    itemEarned: {
      name: "Dragon Whistle",
      description: "A tiny whistle from Biscuit's collar! One toot and the dragon listens!",
      emoji: "🎵",
    },
    choices: [
      {
        text: "Blow the Dragon Whistle — all together!",
        nextNodeId: "af-05a",
        preview: "If Biscuit is someone's pet, a whistle might calm him down...",
      },
      {
        text: "Yell 'BISCUIT!' as loud as you can — all four of you!",
        nextNodeId: "af-05b",
        preview: "Every pet knows its own name...",
      },
    ],
  },

  // Chapter 4b - The Dragon's Nest (discovery approach)
  {
    id: "af-04b",
    character: "all-friends",
    title: "Biscuit's Nest",
    narrative:
      "Before reaching the peak, you stumble into a cave near the top — and it's a NEST! A DRAGON'S nest! But not a scary nest. It's... cozy? There's a GIANT chew toy the size of a car, covered in teeth marks and slobber. An ENORMOUS water bowl with \"BISCUIT\" painted on the side in messy letters. A pile of blankets big enough to cover a swimming pool. And on the cave wall: crayon drawings. BIG, wobbly, crayon drawings done by someone with very large claws. Four small figures — one in purple with a pointy hat, one in armor with a horse, one in a dress with a bunny, and one that's square and green with an antenna. \"That's... that's US!\" the Princess gasps. \"This dragon KNOWS us!\" \"This dragon IS us,\" the Wizard says quietly. \"This is our PET.\" Everyone remembers at the same time: BISCUIT! The kingdom's dragon! They raised him from an egg! He used to be small enough to sit on Sir Clip-Clop's back! But he grew and GREW and they all got so busy with their own adventures that... nobody visited Biscuit for WEEKS.",
    sillyMoment:
      "The Robot examines the crayon drawings closely. \"This one is supposed to be me,\" he says, pointing at a green square with a smiley face. \"It is... artistically ambitious.\" The Knight looks at his drawing — it's just a circle with stick legs and a very tiny sword. \"He made my sword WAY too small,\" the Knight says, offended. Sir Clip-Clop finds HIS drawing. The dragon drew him with an ENORMOUS mane. \"Now THIS is ACCURATE,\" Sir Clip-Clop says, tearing up. \"Biscuit GETS me.\"",
    itemEarned: {
      name: "Dragon Whistle",
      description: "A tiny whistle from Biscuit's collar! One toot and the dragon listens!",
      emoji: "🎵",
    },
    choices: [
      {
        text: "Use the Dragon Whistle to call Biscuit home to his nest",
        nextNodeId: "af-05a",
        preview: "He probably misses this cozy cave...",
      },
      {
        text: "Go find Biscuit and tell him you're sorry for being away",
        nextNodeId: "af-05b",
        preview: "He doesn't need a whistle — he needs his friends...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "af-05a",
    character: "all-friends",
    title: "The Biggest Belly Rub in the Kingdom!",
    narrative:
      "All four heroes hold up the Dragon Whistle together and blow: TWEEEEEEE! The sound echoes across Mount Boom. The dragon freezes mid-roar. His enormous eyes go wide. His wings stop flapping. His tail stops smashing. And then... his tail starts WAGGING. Not angry wagging. HAPPY wagging. Like a dog who just heard the treat bag open. \"BISCUIT!\" all four heroes yell together. \"We're HERE!\" The dragon — Biscuit — makes a sound that is NOT a roar. It's a WHIMPER. A house-sized, volcano-shaking, tear-jerking whimper. He swoops down and lands right in front of them. Up close, they can see it: he wasn't ANGRY. He was CRYING. Dragon tears are made of lava, which is why the volcano was bubbling! He was having a tantrum because his favorite chew toy rolled into the volcano crater AND nobody had visited him in weeks! The Robot uses the Sword to fish the chew toy out of the lava. The Knight uses the Sensor Dish to check Biscuit's health (diagnosis: sad but healthy). The Princess uses the Wand to cool down the volcano. The Wizard uses the Tiara to send a rainbow signal across the kingdom: EVERYTHING IS OK! Biscuit gets his chew toy back and does a happy wiggle that shakes the ENTIRE mountain. Then he licks all four heroes. Dragon slobber is warm, sparkly, and smells like campfire marshmallows. Everyone is disgusted AND delighted. They give the items back to each other — and something MAGICAL happens. Every item now glows brighter than ever. The Wand, the Sword, the Tiara, the Sensor Dish — they all learned something from being shared. They work for EVERYONE now. Because the best magic isn't in the item — it's in the teamwork. The Kingdom of Mount Boom throws the biggest party in history at the base of the volcano. Biscuit gets a NEW chew toy (a boulder wrapped in a giant bow), and all four heroes promise to visit him every single week. Sir Clip-Clop makes spaghetti for the whole kingdom. Biscuit eats forty-seven plates. Fluffington eats half a noodle and says he's full.",
    sillyMoment:
      "Biscuit tries to sit in the Wizard's lap. He is the size of a house. The Wizard is squished flat like a pancake. \"Hhhhelp,\" the Wizard squeaks from under the dragon. \"He thinks he's still small!\" laughs the Princess. Biscuit purrs. The purring registers as a 4.5 earthquake in the next kingdom over. The Robot takes a group photo. Biscuit smiles. Dragon smiles are TERRIFYING. It's the best photo any of them have ever taken. Sir Clip-Clop makes it his profile picture. \"Finally, a photo where I'M not the most photogenic one,\" he says. He's lying. He still thinks he is.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "af-05b",
    character: "all-friends",
    title: "Welcome Home, Biscuit",
    narrative:
      "All four heroes walk out onto the peak of Mount Boom together. The dragon sees them and rears back, ready to ROAR — but the Wizard steps forward. \"Biscuit?\" he says softly. \"It's us. We're sorry we were gone so long.\" The dragon stops. His mouth closes. His wings fold. His big, enormous, house-sized eyes fill with tears the size of beach balls. Lava tears stream down his scaly cheeks and sizzle on the rocks. He wasn't angry. He was LONELY. The Princess steps forward next. \"We got so busy with our own adventures that we forgot the most important one — you.\" The Knight steps up. \"You're part of this team, Biscuit. The BIGGEST part. Literally.\" The Robot steps forward last. \"My sensors indicate that you are... very sad. And that the optimal solution is...\" The Robot opens its arms. \"...a hug.\" Biscuit COLLAPSES onto all four of them in the biggest, warmest, scaliest group hug in the history of the Kingdom of Mount Boom. They hug for so long that Sir Clip-Clop starts crying. Fluffington starts crying. Even the Robot's eyes get a little misty (\"That's condensation,\" the Robot says. \"It is NOT condensation,\" whispers Sir Clip-Clop). Together, all four heroes use their swapped items to build Biscuit an incredible new home at the base of Mount Boom — right where all four neighborhoods meet! The Wizard's Tiara-glow makes cozy nightlights. The Princess's Wand-magic grows a garden of fireproof flowers. The Knight's Sensor Dish sets up an alarm so they NEVER miss a Biscuit visit again. The Robot's Sword carves a giant door just Biscuit's size. They swap the items back, and just like magic, every item works for EVERYONE now. Sharing made them stronger. Every full moon, all four heroes meet at Biscuit's house for \"Backwards Day\" — they swap items, eat dessert first, and tell stories backwards. Biscuit always falls asleep first. His snoring shakes the mountain. Nobody minds. They're all together, and that's what matters most in the entire Kingdom of Mount Boom.",
    sillyMoment:
      "At the first \"Backwards Day,\" Sir Clip-Clop tries to tell a story backwards. \"The end! And then the dragon was happy. But BEFORE that, the dragon was sad. And BEFORE THAT—\" \"That's not how backwards works,\" says the Robot. \"YOU'RE not how backwards works!\" says Sir Clip-Clop, which makes no sense, but everyone laughs anyway. Fluffington falls asleep on Biscuit's nose. Biscuit very, VERY carefully doesn't sneeze for three hours straight. It's the bravest thing any dragon has ever done. When Fluffington finally rolls off, Biscuit sneezes so hard a tree falls down. \"Worth it,\" Biscuit rumbles. It's the first word anyone's ever heard him say. Everyone freaks out. Biscuit goes back to sleep. He never speaks again. Nobody can prove it happened. Fluffington swears he heard it. The tree is evidence, but trees fall down all the time. It becomes the greatest unsolved mystery of the Kingdom of Mount Boom.",
    isEnding: true,
    choices: [],
  },
];
