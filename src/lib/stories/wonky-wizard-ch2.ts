import { StoryNode } from "../types";

export const wonkyWizardCh2Story: StoryNode[] = [
  // Chapter 2 - Node 1
  {
    id: "wz2-01",
    character: "wonky-wizard",
    title: "The Wonky Wizard and the Wand Storm",
    narrative:
      "Oh no! A magical thunderstorm is rolling across the kingdom and it's making ALL the magic go haywire! Lightning bolts are turning purple, rain is falling sideways, and — CRACK! — a bolt of zigzag lightning hits your Mighty Wand and snaps it clean in half! Now every spell you try comes out backwards and wonky. You try to cast a light spell and it makes everything DARKER. You try a drying spell and it rains inside your tower. SPLOOOSH! To make things worse, a frantic pigeon delivers a soggy message: \"HELP! The Trickster Fox is stealing all the magic ingredients from Sparkle Town! Without them, nobody can make potions or spells!\" You need to fix your wand AND stop the Fox — but which first?",
    sillyMoment:
      "You sneeze and accidentally cast a backwards tickle spell on YOURSELF. You fall on the floor laughing and can't stop for two whole minutes. Your hat rolls away and hides under the bed. \"I'm not coming out until you get a new wand,\" says the hat. Your HAT is talking now. The storm is making EVERYTHING weird.",
    choices: [
      {
        text: "Head through Backwards Meadow toward the Wand-Fixing Tree",
        nextNodeId: "wz2-02a",
        preview: "Everything there is already backwards, so maybe your wand will work right...?",
      },
      {
        text: "Take the shortcut through Hiccup Hollow to track the Fox",
        nextNodeId: "wz2-02b",
        preview: "You can hear something going 'HIC! HIC! HIC!' down in the valley...",
      },
    ],
  },

  // Chapter 2a - Backwards Meadow
  {
    id: "wz2-02a",
    character: "wonky-wizard",
    title: "The Backwards Meadow",
    narrative:
      "You stumble into Backwards Meadow where EVERYTHING is reversed! The rain falls up. The flowers grow upside down with their roots waving in the air. The butterflies fly backwards and keep bumping into each other. And because your wand is broken, YOUR spells are backwards too — which means in this backwards place, your spells actually work RIGHT! You try a light spell and it works! You try a floating spell and — wait, no, that one turns you into a duck for three seconds. QUACK! OK, mostly right. In the middle of the meadow, you find a jar of Sticky Starlight. It's gooey, glowy, and smells like birthday cake. A sign next to it says: \"Sticky Starlight — good for fixing ANYTHING! Spread generously!\"",
    sillyMoment:
      "A backwards butterfly lands on your nose and flies forward for the first time in its life. It looks SO surprised. \"WHAT IS THIS?!\" it yells, zooming ahead. It crashes into a flower. \"I LOVE IT AND I HATE IT!\" it shouts from inside the petals.",
    itemEarned: {
      name: "Sticky Starlight",
      description: "Gooey, glowy stuff that can fix anything! Smells like birthday cake!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Follow the upside-down river toward the Wand-Fixing Tree",
        nextNodeId: "wz2-03a",
        preview: "The river is flowing UP a hill — that can't be right...",
      },
      {
        text: "Ask the backwards birds for directions to the Fox",
        nextNodeId: "wz2-03b",
        preview: "They're flying in circles, but they seem to know things...",
      },
    ],
  },

  // Chapter 2b - Hiccup Hollow
  {
    id: "wz2-02b",
    character: "wonky-wizard",
    title: "The Hiccup Hollow",
    narrative:
      "You climb down into Hiccup Hollow — a valley where EVERYTHING hiccups! The ground goes HIC! and bounces you up. The trees go HIC! and their leaves shake off. Even the rocks go HIC! and hop around like popcorn. Your broken wand makes it worse — every hiccup shoots a sparkle out the cracked end. HIC-SPARKLE! HIC-SPARKLE! A hiccupping badger in a tiny vest waddles up to you. \"HIC! — Excuse me — HIC! — I saw the Trickster Fox — HIC! — go that way — HIC!\" He points with his paw toward a trail of glittery pawprints. \"She was carrying a big bag of — HIC! — stolen stuff — HIC!\" He offers you a jar of Sticky Starlight he found. \"She — HIC! — dropped this!\"",
    sillyMoment:
      "The badger hiccups so hard that his tiny vest pops ALL its buttons at once — PING PING PING! They bounce off your face. \"HIC! — Sorry about — HIC! — your face — HIC!\" He looks very embarrassed. You find three buttons in your beard later.",
    itemEarned: {
      name: "Sticky Starlight",
      description: "Gooey, glowy stuff that can fix anything! Smells like birthday cake!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Follow the Fox's glittery pawprints",
        nextNodeId: "wz2-03b",
        preview: "The trail sparkles in the moonlight — she went in a hurry...",
      },
      {
        text: "Try to fix the wand with hiccup magic first",
        nextNodeId: "wz2-03a",
        preview: "Maybe if you hiccup WHILE casting a fix-it spell...?",
      },
    ],
  },

  // Chapter 3a - The Topsy-Turvy Bridge
  {
    id: "wz2-03a",
    character: "wonky-wizard",
    title: "The Topsy-Turvy Bridge",
    narrative:
      "You come to the Topsy-Turvy Bridge. It's a perfectly good bridge except for one tiny problem — it's built UPSIDE DOWN! The walkway is on the BOTTOM and the railings poke into the dirt. Nobody can figure out how to cross the river! A family of hedgehogs is standing at the edge looking very confused. \"We've been here for two hours,\" says the biggest hedgehog. \"Gerald suggested swimming but Gerald can't swim.\" Gerald, a very small hedgehog, is wearing water wings already. Wait — if you have the Sticky Starlight, maybe you could spread it on your boots and walk on the BOTTOM of the bridge, upside down! Or you could try swinging across on a rainbow vine. Either way, you can see the Fox's pawprints on the other side!",
    sillyMoment:
      "Gerald the hedgehog jumps into the river with his water wings on. He immediately sinks because hedgehogs are not great swimmers. He pops back up two seconds later sitting on a confused turtle. \"I MEANT to do that,\" Gerald says. The turtle sighs. \"Everyone always says that,\" mutters the turtle.",
    skillEarned: {
      name: "Backwards Spell",
      description: "Makes things go in reverse! Walk backwards, talk backwards, rain backwards!",
      emoji: "🔄",
    },
    choices: [
      {
        text: "Use Sticky Starlight to walk upside-down across the bridge",
        requiresItem: "Sticky Starlight",
        nextNodeId: "wz2-04a",
        preview: "Your boots will stick right to the bottom of the bridge!",
      },
      {
        text: "Swing across on the rainbow vine",
        nextNodeId: "wz2-04b",
        preview: "It's stretchy and colorful — like a giant gummy worm bridge!",
      },
    ],
  },

  // Chapter 3b - The Sneezy Cave
  {
    id: "wz2-03b",
    character: "wonky-wizard",
    title: "The Sneezy Cave",
    narrative:
      "The Fox's trail leads into a cave filled with sparkly pepper dust. The moment you walk in: \"AH... AH... ACHOOOO!\" Your broken wand sneezes too — shooting random spells everywhere! ACHOO-ZAP! A rock turns into a chicken. ACHOO-ZAP! The chicken turns into a bigger rock. ACHOO-ZAP! The bigger rock turns into a sandwich. Through the sneeze-clouds, you find a pile of stolen magic ingredients stacked in neat little rows. The Fox has been very organized about her thievery. Each jar has a little label: \"Sparkle Dust — borrowed,\" \"Moon Sugar — temporarily relocated,\" \"Dragon Sprinkles — I'll give it back probably.\" And then you find a note in careful handwriting: \"I'm sorry. I just wanted to make ONE good invention. Nobody would sell ingredients to a fox.\"",
    sillyMoment:
      "You sneeze so hard that your beard wraps completely around your head like a turban. You can't see anything. You walk into a wall. Then another wall. Then the chicken, which is VERY offended. \"BAWK!\" \"Sorry!\" you say, unwinding your beard. The chicken glares at you. Chickens are excellent glarers.",
    skillEarned: {
      name: "Backwards Spell",
      description: "Makes things go in reverse! Walk backwards, talk backwards, rain backwards!",
      emoji: "🔄",
    },
    choices: [
      {
        text: "Follow the Fox's trail out the back of the cave",
        nextNodeId: "wz2-04a",
        preview: "There's daylight coming through a crack in the rocks...",
      },
      {
        text: "Use the Backwards Spell to un-sneeze the whole cave",
        nextNodeId: "wz2-04b",
        preview: "If you reverse the pepper dust, maybe everything clears up!",
      },
    ],
  },

  // Chapter 4a - Meet the Trickster Fox (direct)
  {
    id: "wz2-04a",
    character: "wonky-wizard",
    title: "The Trickster Fox's Workshop",
    narrative:
      "You find the Trickster Fox! She's a small, rust-orange fox with big clever eyes and paws stained with colorful potion splatters. She's sitting in a workshop made of branches and leaves, surrounded by bubbling beakers and half-built inventions. In the middle of her table is a tiny, beautiful music box — her grandmother's — cracked into pieces. She's been trying to fix it for months. \"The magic shop won't sell to foxes,\" she says quietly, her ears drooping. \"They say foxes are 'tricky.' I just wanted enough ingredients to make a Fixing Potion for Grandma's music box.\" She looks at all the stolen jars. \"I know stealing is wrong. I just... I didn't know what else to do.\" She sniffles. A single sparkly fox tear rolls down her nose.",
    sillyMoment:
      "One of the Fox's inventions — a machine that's supposed to make toast — suddenly activates and starts shooting toast at the ceiling. FWIP FWIP FWIP! \"That's the Toast-a-Tron,\" the Fox says casually, ducking a piece of rye. \"It works perfectly. I just can't make it STOP.\" A piece of sourdough bonks you right on the nose.",
    itemEarned: {
      name: "Fix-It Glue",
      description: "This magical glue can fix ANYTHING that's broken! One drop does the trick!",
      emoji: "🩹",
    },
    choices: [
      {
        text: "Use the Fix-It Glue on the Fox's music box first",
        nextNodeId: "wz2-05b",
        preview: "She looks like she really needs this more than you right now...",
      },
      {
        text: "Use the Sticky Starlight to fix your wand, then help the Fox",
        requiresItem: "Sticky Starlight",
        nextNodeId: "wz2-05a",
        preview: "If your wand works, you can fix EVERYTHING with magic!",
      },
    ],
  },

  // Chapter 4b - Meet the Fox (alternate approach)
  {
    id: "wz2-04b",
    character: "wonky-wizard",
    title: "The Fox's Broken Dream",
    narrative:
      "You find the Fox's workshop from the back entrance and see everything before she notices you. The workshop is AMAZING — full of clever inventions made from forest junk. A clock made of pinecones. A lantern powered by fireflies (they volunteered — there's a tiny sign-up sheet). And in the center, a tiny music box in pieces. Each piece has been carefully cleaned and polished. This is something she really loves. The Fox is sitting with her back to you, trying to glue a piece of the music box with regular honey. It doesn't work. She puts her head on the table. \"Why can't I fix ANYTHING right?\" she mumbles into her paws. The stolen ingredients are all neatly labeled with notes about how much she needs and how much she'll return. She wasn't trying to be mean. She was trying to fix something precious.",
    sillyMoment:
      "A firefly in the lantern taps on the glass and says, \"Hey, so, my shift ended twenty minutes ago? I've got a thing at eight?\" Another firefly elbows him. \"Shh! She's having a MOMENT.\" The first firefly looks guilty. \"Oh. Right. I'll stay. But I want overtime.\"",
    itemEarned: {
      name: "Fix-It Glue",
      description: "This magical glue can fix ANYTHING that's broken! One drop does the trick!",
      emoji: "🩹",
    },
    choices: [
      {
        text: "Fix the music box with Fix-It Glue before she sees you",
        nextNodeId: "wz2-05b",
        preview: "Imagine her face when she turns around and it's fixed...",
      },
      {
        text: "Call out and tell the Fox you want to help",
        nextNodeId: "wz2-05a",
        preview: "Maybe working together is the best way to fix everything...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "wz2-05a",
    character: "wonky-wizard",
    title: "The Wand That Learned",
    narrative:
      "Together, you and the Fox fix your broken wand using Fix-It Glue AND Sticky Starlight AND a little bit of Fox cleverness. The Fox tightens two bolts you didn't even know your wand HAD. When the wand comes back together — WHOOOOOM! — it sends a beam of rainbow light straight into the sky! But here's the funny thing: the wand works even BETTER than before. Because it was broken, it learned what it felt like to NOT work. Now it tries extra hard with every spell. You point it at the Fox's music box and — TING! — the music box snaps together perfectly and plays the most beautiful little tune. The Fox's eyes fill with sparkly tears. \"That's Grandma's song,\" she whispers. You bring all the stolen ingredients back to Sparkle Town, and the Fox comes with you. When the shopkeeper sees her inventions, his jaw drops. \"You made a TOAST MACHINE?! Out of STICKS?!\" The Fox gets her own shop right next to the magic store: \"Foxy Inventions — We Fix Anything (Except the Toast-a-Tron).\" Your spells still go a LITTLE wonky sometimes. But now that's everyone's favorite part.",
    sillyMoment:
      "At the grand opening of the Fox's shop, your wand accidentally turns the ribbon into a giant snake. The snake is very polite about it. \"Could someone cut me? I'm the ribbon,\" the snake says. Everyone screams, then laughs, then gives the snake a job as the shop's doorbell. He says \"WELCOME!\" every time someone walks in. He loves his job.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "wz2-05b",
    character: "wonky-wizard",
    title: "The Friendship Wand",
    narrative:
      "You fix the Fox's music box FIRST, before even thinking about your own wand. The moment the last piece clicks into place, it plays a tiny, tinkling melody that sounds like stars singing. The Fox stares at it. Her lip wobbles. Her tail droops. And then she BURSTS into the happiest tears you've ever seen — big, sparkly, fox-shaped tears that float up like bubbles. \"You fixed it! You fixed Grandma's song! But... but your wand is still broken! Why did you help ME first?\" You shrug. \"Because you needed it more.\" The Fox is so touched that she grabs your broken wand and gets to work. She pulls out her inventing tools — tiny wrenches, clever clips, a magnifying glass — and puts it back together in a way you never could have done alone. When you both hold the wand and say the magic word — \"WONKY!\" — the wand glows brighter than ever! It's not just YOUR wand anymore. It's a Friendship Wand — it works best when two people believe in it together. The Fox returns every single ingredient to Sparkle Town and becomes the official Village Inventor. You visit every Tuesday for \"Wonky Invention Hour\" where you make silly things together — like an umbrella that only works when it's NOT raining, and socks that sing when you walk.",
    sillyMoment:
      "Your first joint invention is a hat that never falls off. It works TOO well. You can't take it off for three days. You sleep in it. You bathe in it. The Fox tries pulling it off with a rope, three squirrels, and a very motivated chicken. It finally comes off with a POP like a cork, and your hair looks like an exploded mop. \"Back to the drawing board,\" says the Fox, writing notes. You just stand there with your mop hair, accepting your life choices.",
    isEnding: true,
    choices: [],
  },
];
