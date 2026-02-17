import { StoryNode } from "../types";

export const nobleKnightCh2Story: StoryNode[] = [
  // Chapter 2 - Node 1
  {
    id: "kn2-01",
    character: "noble-knight",
    title: "The Noble Knight and the Busted Wagon",
    narrative:
      "You are on an important mission! The King asked you to deliver a wagon full of supplies — warm blankets, food, toys, and medicine — to Tumbledown Village. A big storm hit them last week and they need help! You're riding along with Sir Clip-Clop pulling the wagon when — CRACK! SNAP! WOBBLE-WOBBLE-CRASH! The wagon wheel hits a huge rock and splits in two! Everything spills sideways. Blankets in the mud. Toys in a puddle. Sir Clip-Clop turns around very slowly. \"I told you to take the smooth road.\" \"You did NOT tell me—\" \"I told you TWICE.\" He's right. He told you twice. A pigeon arrives with ANOTHER message: \"ALSO! The Grumbly Troll has blocked the only bridge to Tumbledown Village! Nobody can get through!\" Great. Broken wagon AND a blocked bridge.",
    sillyMoment:
      "A teddy bear from the supply wagon lands on Sir Clip-Clop's head. He doesn't notice for a full minute. When you point at it, he says, \"That's my co-pilot. His name is Lieutenant Fluffbottom. Don't question my methods.\" He keeps the teddy bear on his head for the rest of the adventure.",
    choices: [
      {
        text: "Try to fix the wagon wheel first",
        nextNodeId: "kn2-02a",
        preview: "Can't deliver supplies with a busted wagon...",
      },
      {
        text: "Leave the wagon and ride ahead to deal with the Troll",
        nextNodeId: "kn2-02b",
        preview: "Sir Clip-Clop is fast — you can come back for the wagon later...",
      },
    ],
  },

  // Chapter 2a - Fixing the Wagon
  {
    id: "kn2-02a",
    character: "noble-knight",
    title: "The Wheel Problem",
    narrative:
      "You try to fix the wagon wheel, but the crack goes right through the middle. You need something strong to hold it together. A beaver wearing a hard hat and a tiny orange vest waddles over. \"I'm Barry the Builder Beaver! I can help! I'm GREAT at building!\" Barry starts chewing a log to make a replacement piece. Then he gets distracted and builds a dam. Then he chews the dam into a tiny table. Then he builds a chair. \"Sorry, sorry!\" Barry says. \"I just love building! Where was I?\" While Barry gets focused again, you notice a thick, strong vine growing on a tree nearby. A sign on the vine says: \"STRONG VINE — pull one free! Very stretchy! Very tough!\" That could hold the wheel together!",
    sillyMoment:
      "Barry the beaver accidentally builds a full bookshelf out of sticks before remembering he was supposed to fix a wheel. \"Does the wagon need a bookshelf?\" he asks hopefully. Sir Clip-Clop considers it. \"Actually... put some cookbooks on there.\" \"SIR CLIP-CLOP THIS IS NOT THE TIME,\" you say.",
    itemEarned: {
      name: "Strong Vine",
      description: "Super stretchy and super tough! Perfect for tying things together!",
      emoji: "🌿",
    },
    choices: [
      {
        text: "Use the Strong Vine to tie the wheel together",
        nextNodeId: "kn2-03a",
        preview: "It'll be wobbly, but it might hold long enough...",
      },
      {
        text: "Let Barry chew a whole new wheel piece from a log",
        nextNodeId: "kn2-03a",
        preview: "If he can stay focused for five minutes...",
      },
    ],
  },

  // Chapter 2b - Racing to the Bridge
  {
    id: "kn2-02b",
    character: "noble-knight",
    title: "The Blocked Bridge",
    narrative:
      "You gallop ahead on Sir Clip-Clop and find the bridge. It's a mess! The Grumbly Troll has stacked rocks, logs, old signs, and even a bathtub across the entire thing. Nothing is getting through. The Troll is sitting on top of the pile with his arms crossed. He's about as tall as a refrigerator, made of gray stone, with a face that looks like someone smooshed a grumpy potato. On the ground near the pile, you spot a shiny Squeaky Horn — the kind that goes HONK when you squeeze it. It must have fallen from the Troll's pile. The Troll notices you and scowls. \"GO AWAY! This is MY bridge! I BUILT it! And since nobody ever said THANK YOU, I'm taking it BACK!\"",
    sillyMoment:
      "Sir Clip-Clop walks up to the Troll's barricade, examines it carefully, and says, \"Interesting interior design choice. Very... aggressive. I give it a six out of ten. Would be higher but the bathtub feels random.\" The Troll looks at the bathtub. \"The bathtub is STRUCTURAL,\" he grumbles. It is clearly not structural.",
    itemEarned: {
      name: "Squeaky Horn",
      description: "HONK! A silly horn that's impossible to ignore! HOOOONK!",
      emoji: "📯",
    },
    choices: [
      {
        text: "Try talking to the Troll calmly",
        nextNodeId: "kn2-03b",
        preview: "Maybe he just needs someone to listen...",
      },
      {
        text: "Honk the Squeaky Horn to get his full attention",
        nextNodeId: "kn2-03b",
        preview: "HOOOONK! That should do it...",
      },
    ],
  },

  // Chapter 3a - Wobbly Wagon Ride
  {
    id: "kn2-03a",
    character: "noble-knight",
    title: "The Wobbly Wagon Ride",
    narrative:
      "The wagon is fixed — sort of. The wheel wobbles like a loose tooth, and everything shakes like you're riding a giant washing machine. RATTLE RATTLE WOBBLE! The blankets keep falling off. The toys keep bouncing out. Sir Clip-Clop is pulling the wagon VERY carefully while muttering, \"This is embarrassing. I am a NOBLE horse. Not a bumper car.\" Then you see dark storm clouds rolling in. Another storm! Rain starts pounding down. SPLAT SPLAT SPLAT! There's an old barn up ahead where you could wait out the storm. Inside the barn, you find a Stretchy Rope hanging on a hook — it could be really useful. But every minute you wait, the village waits too.",
    sillyMoment:
      "A rubber duck falls out of the supply wagon and bounces down the road going SQUEAK SQUEAK SQUEAK. Sir Clip-Clop chases it. \"COME BACK, LIEUTENANT DUCK!\" he yells. You didn't give the duck a rank. He promoted it himself. You now have TWO toy officers on this mission.",
    skillEarned: {
      name: "Storm Shield",
      description: "Hold up your shield in the rain — stays perfectly dry underneath! Mostly!",
      emoji: "🛡️",
    },
    choices: [
      {
        text: "Wait out the storm in the barn",
        nextNodeId: "kn2-04a",
        preview: "Smart and dry — but the village is waiting...",
      },
      {
        text: "Use Storm Shield and push through the rain!",
        nextNodeId: "kn2-04a",
        preview: "The supplies might get wet, but you'll get there faster!",
      },
    ],
  },

  // Chapter 3b - Talking to the Troll
  {
    id: "kn2-03b",
    character: "noble-knight",
    title: "The Troll's Story",
    narrative:
      "The Grumbly Troll uncrosses his arms just a little bit. Up close, his stone face doesn't look mean — it looks tired. And sad. \"I built this bridge,\" he says, his voice quieter now. \"I built EVERY bridge in the kingdom. Fifty-seven bridges! Worked day and night. Rain or shine. Do you know how many thank-you notes I got?\" He holds up a very big, very empty hand. \"ZERO! Not ONE! So if nobody cares about my bridges, then nobody gets to USE my bridges!\" He slumps down. \"I even carved little decorations on all of them. Flowers and birds and stuff. Did anyone notice? Noooo.\" He's not a villain. He's a builder whose work got ignored.",
    sillyMoment:
      "Sir Clip-Clop examines the bridge railing. \"Wait... these carvings are AMAZING! Is that a horse?\" The Troll perks up. \"Yes! A running horse!\" \"The mane could be floofier,\" Sir Clip-Clop says critically. The Troll pulls out a chisel immediately. \"You think so? I can fix that right now—\" They are now having a serious art discussion while you're trying to save a village.",
    skillEarned: {
      name: "Storm Shield",
      description: "Hold up your shield in the rain — stays perfectly dry underneath! Mostly!",
      emoji: "🛡️",
    },
    choices: [
      {
        text: "Tell the Troll about the village that needs help",
        nextNodeId: "kn2-04b",
        preview: "Maybe if he knows people are counting on the bridge...",
      },
      {
        text: "Offer to help the Troll stack his stones into something beautiful",
        nextNodeId: "kn2-04b",
        preview: "He seems like he just wants someone to appreciate his work...",
      },
    ],
  },

  // Chapter 4a - Arriving at the Bridge
  {
    id: "kn2-04a",
    character: "noble-knight",
    title: "The Bridge Standoff",
    narrative:
      "You arrive at the blocked bridge with the wobbly wagon. The storm is pounding. Rain is everywhere. And the Grumbly Troll is sitting on his pile of rocks looking absolutely miserable. Water is dripping off his stone nose. He sees your wagon full of supplies — blankets, food, toys — and his eyes go wide. \"Who... who are those for?\" \"Tumbledown Village,\" you say. \"The storm hit them hard. They need help.\" The Troll's face does something complicated. He looks at the blocked bridge. He looks at the wagon. He looks at the rain. You can see him thinking about all those bridges he built to help people cross safely. You find a Golden Thank-You Medal in the supply wagon — someone in the village must have packed it as a thank-you gift for whoever delivered the supplies.",
    sillyMoment:
      "The rain is so heavy that Lieutenant Fluffbottom (the teddy bear on Sir Clip-Clop's head) is completely soaked. Sir Clip-Clop doesn't acknowledge this. \"Lieutenant Fluffbottom reporting: conditions are wet, morale is damp, spirits are soggy.\" The Troll looks at the teddy bear and then at you with DEEP confusion.",
    itemEarned: {
      name: "Golden Thank-You Medal",
      description: "A beautiful medal that says 'THANK YOU' in sparkly letters! For someone who deserves it!",
      emoji: "🏅",
    },
    choices: [
      {
        text: "Give the Golden Thank-You Medal to the Troll",
        nextNodeId: "kn2-05b",
        preview: "He looks like he's never been thanked in his entire life...",
      },
      {
        text: "Ask the Troll to help you fix the wagon wheel properly",
        nextNodeId: "kn2-05a",
        preview: "He's the best builder in the kingdom — he could fix anything!",
      },
    ],
  },

  // Chapter 4b - The Troll's Workshop
  {
    id: "kn2-04b",
    character: "noble-knight",
    title: "The Troll's Workshop",
    narrative:
      "The Troll leads you under the bridge to show you his workshop. It's INCREDIBLE. Beautiful hand-carved bridge pieces are stacked everywhere — each one a work of art. Stone flowers that look real enough to smell. Tiny carved birds that look like they might fly away. A stone horse that Sir Clip-Clop stares at for a very long time. \"Is that... me?\" he whispers. \"It's a horse,\" the Troll says. \"It's ME,\" Sir Clip-Clop insists. The Troll has been working down here alone for YEARS, making beautiful things that nobody sees. Then you hear thunder — another storm is coming! And the village still needs supplies. You find a Golden Thank-You Medal in your supply pouch. Someone packed it as a gift.",
    sillyMoment:
      "Sir Clip-Clop is trying to buy the stone horse carving. \"Name your price. I have three carrots and a button.\" The Troll blinks. \"It's not for sale.\" \"Four carrots.\" \"No.\" \"Four carrots and I pose for the next one.\" The Troll actually considers this.",
    itemEarned: {
      name: "Golden Thank-You Medal",
      description: "A beautiful medal that says 'THANK YOU' in sparkly letters! For someone who deserves it!",
      emoji: "🏅",
    },
    choices: [
      {
        text: "Tell the Troll you noticed his beautiful carvings",
        nextNodeId: "kn2-05b",
        preview: "Nobody's ever told him his art is good...",
      },
      {
        text: "Use the Squeaky Horn to call the village — they should see this!",
        requiresItem: "Squeaky Horn",
        nextNodeId: "kn2-05a",
        preview: "HOOOONK! Everyone within a mile will come running!",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "kn2-05a",
    character: "noble-knight",
    title: "The Storm Bridge!",
    narrative:
      "The storm gets WORSE! Thunder BOOMS! Lightning CRACKS! And then — CRRRUNCH — the old bridge starts to BREAK under all the rocks the Troll piled on it! The Troll's eyes go HUGE. \"MY BRIDGE!\" Without even thinking, the Troll LEAPS off the pile and starts working. He moves rocks with his bare hands — faster than you've ever seen anyone work! \"Hand me that log! No, the BIG one! PUSH HERE!\" he shouts. You and Sir Clip-Clop help. You use the Strong Vine to tie the support beams. The Troll uses his building skills to reinforce everything. In the middle of the lightning and the wind, the Troll does what he was BORN to do — he builds. When the storm clears, the bridge isn't just fixed. It's the STRONGEST, most BEAUTIFUL bridge in the entire kingdom. New carvings already cover the rails — a horse with a teddy bear on its head, a knight with a wonky wagon, and a beaver building a bookshelf. Together, you deliver all the supplies to Tumbledown Village. The whole village comes out in the rain to cheer. The Troll stands at the back, trying to hide. But the village kids run straight to him. \"DID YOU BUILD THAT BRIDGE?! IT'S AMAZING!\" The Troll turns bright pink. The village names it \"Troll Bridge\" and puts up a big sign. Sir Clip-Clop says the spaghetti got wet in the rain but he'll make more. He always makes more.",
    sillyMoment:
      "At the celebration, the Troll tries to eat cake but he's made of stone and crumbles keep falling out of his mouth. Sir Clip-Clop pats him on the back. \"Don't worry. I can't hold a fork and I'm the best cook in the kingdom.\" The Troll gives a rocky smile. Lieutenant Fluffbottom is propped up at the table with his own tiny plate. Nobody questions it.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Kindness ending
  {
    id: "kn2-05b",
    character: "noble-knight",
    title: "The Thank-You Bridge",
    narrative:
      "You hold up the Golden Thank-You Medal and place it gently around the Troll's big, rocky neck. \"Thank you,\" you say, \"for building fifty-seven bridges that kept everyone safe.\" The Troll's stone face cracks. Not from breaking — from trying REALLY hard not to cry. His bottom lip wobbles. His chin trembles. And then a single tear rolls down his gray cheek and makes a little puddle on the ground. \"Nobody... nobody ever...\" He can't finish the sentence. He just hugs the medal with both hands. Sir Clip-Clop nudges his shoulder. \"Your carvings are beautiful. Especially the horse. Which is definitely me.\" The Troll wipes his eyes and starts un-stacking the bridge, one rock at a time. He doesn't just clear it — he IMPROVES it while he clears it. New carvings appear on the railings as he works. Together, you load the wagon, cross the bridge, and deliver everything to Tumbledown Village. When the village sees the bridge's new carvings, they gasp. \"Who made THESE?!\" The Troll steps forward shyly. The village commissions him to build the most beautiful bridge in the kingdom — and this time, they throw him a party for every single one he makes. He carves a special stone horse for Sir Clip-Clop's birthday. Sir Clip-Clop puts it next to his bed. He says he doesn't cry about it. He definitely cries about it.",
    sillyMoment:
      "The Troll's first commissioned bridge has a big stone carving of Sir Clip-Clop on it. The real Sir Clip-Clop stands next to it and poses the same way. \"Honestly? The statue is more handsome,\" says Sir Clip-Clop. Everyone stares. \"I'M BEING HUMBLE!\" he yells. He is not being humble. Lieutenant Fluffbottom has no comment, on account of being a teddy bear.",
    isEnding: true,
    choices: [],
  },
];
