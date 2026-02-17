import { StoryNode } from "../types";

export const rangerRobotStory: StoryNode[] = [
  // Chapter 1
  {
    id: "rr-01",
    character: "ranger-robot",
    title: "The Ranger Robot and the Falling Forest",
    narrative:
      "You are the Ranger Robot! You live in a cozy charging station shaped like a giant acorn right in the middle of the Whispering Woods. Your job is to protect the forest and all its creatures — every bug, bird, bunny, and mushroom. Your Sensor Dish picks up signals from every tree and animal in the whole forest. This morning you wake up to a terrible CRACKLE-BOOM! A wild storm blew through last night. Trees are knocked over, the river is blocked, and animals are scattered everywhere! Even worse — your Solar Panel got cracked by a falling branch and you're running on backup power! BEEP BOOP! A message buzzes through your Sensor Dish: \"ALERT! ALERT! Messy Gremlins spotted in Sunflower Clearing! They're pulling up ALL the flowers!\"",
    sillyMoment:
      "You try to stand up but your left leg makes a sound like a rusty shopping cart: SQUEEEAK-CLUNK-SQUEEEAK! A squirrel peeks in your window, stares at your wobbly leg, and slowly backs away. \"Nope,\" says the squirrel. \"Not my problem.\"",
    choices: [
      {
        text: "Head to Sunflower Clearing to stop the Gremlins",
        nextNodeId: "rr-02a",
        preview: "You can hear tiny voices shouting 'WE'RE HELPING!' in the distance...",
      },
      {
        text: "Go to the Broken Dam first — the river is flooding!",
        nextNodeId: "rr-02b",
        preview: "The otters sound very panicky over there...",
      },
    ],
  },

  // Chapter 2a - Sunflower Clearing
  {
    id: "rr-02a",
    character: "ranger-robot",
    title: "The Messy Helpers",
    narrative:
      "You clank and squeak your way to Sunflower Clearing. The Messy Gremlins are there! They're small, round, and green with big ears and even bigger smiles. There are five of them, and they're yanking flowers out of the ground and throwing them around like confetti. But wait — they're actually trying to REPLANT the flowers! They're just doing it totally wrong. One gremlin is planting a daisy upside down with the roots sticking straight up. Another is watering a rock. \"WE'RE HELPING!\" shouts the biggest one, stuffing a tulip into a boot. In the middle of the mess, you spot something useful — a Leaf Compass, half-buried in dirt. It points toward whatever the forest needs most!",
    sillyMoment:
      "One gremlin tries to plant a sunflower in another gremlin's ear. \"Hold still! You'll be BEAUTIFUL!\" The ear-gremlin does NOT look like he agrees. He sneezes and the sunflower shoots across the clearing like a yellow rocket. THWAP! Right into a tree.",
    itemEarned: {
      name: "Leaf Compass",
      description: "Points toward whatever the forest needs most! Very leafy!",
      emoji: "🍃",
    },
    choices: [
      {
        text: "Show the Gremlins how to plant flowers the right way",
        nextNodeId: "rr-03a",
        preview: "Roots go DOWN. Petals go UP. Seems simple, right...?",
      },
      {
        text: "Use your Sensor Dish to scan why the Gremlins are so confused",
        nextNodeId: "rr-03a",
        preview: "Something doesn't add up — they seem like they SHOULD know this...",
      },
    ],
  },

  // Chapter 2b - Broken Dam
  {
    id: "rr-02b",
    character: "ranger-robot",
    title: "The Broken Dam",
    narrative:
      "You hurry to the river where fallen trees have blocked the water like a messy dam. The river is flooding the otter family's home! Five baby otters are sitting on their mom's back, floating in the rising water. They're not crying — they're doing tiny synchronized swimming routines, because otters gonna otter. But the water is getting too high! Your cracked Solar Panel flashes a warning: POWER AT 73%... 72%... 71%... You need to move those heavy logs, but every big move uses more power. Then you spot something stuck between the logs — an Acorn Toolkit! It's got tiny wrenches, a mini hammer, and some bolts that look like they could fix your Solar Panel!",
    sillyMoment:
      "The littlest baby otter does a backflip off mama otter's tail and sticks the landing on a floating log. All the other otters hold up tiny signs that say \"10\" and \"10\" and \"7.\" The baby otter who gave a 7 gets splashed by everyone else. \"WHAT?! The form was off!\" she squeaks.",
    itemEarned: {
      name: "Acorn Toolkit",
      description: "Tiny tools for fixing big problems! Smells like acorns!",
      emoji: "🔧",
    },
    choices: [
      {
        text: "Use the Acorn Toolkit to fix your Solar Panel first",
        nextNodeId: "rr-03b",
        preview: "If you fix yourself, you'll have full power for everything else...",
      },
      {
        text: "Forget the panel — help the otters move the logs NOW",
        nextNodeId: "rr-03b",
        preview: "The otters need help RIGHT NOW, even if it drains your power...",
      },
    ],
  },

  // Chapter 3a - Understanding the Gremlins
  {
    id: "rr-03a",
    character: "ranger-robot",
    title: "The Gremlins' Secret",
    narrative:
      "Your Sensor Dish scans the Gremlins and — BEEP BOOP BING! — you discover something surprising! The Gremlins USED to be the forest's best gardeners! For a hundred years, they grew every flower, every bush, every vine in the Whispering Woods. They had a magical Watering Can that taught them exactly how to garden — which end of the flower goes up, how deep to dig, when to water. But the storm broke the Watering Can into three pieces and scattered them across the forest! Without it, the Gremlins forgot EVERYTHING. They're not messy on purpose — they just lost their most important tool! The biggest gremlin, Grubble, looks up at you with big watery eyes. \"We just want to garden again! We miss making things grow!\"",
    sillyMoment:
      "Grubble demonstrates his current gardening technique: he picks up a rose bush, spins around three times, and throws it like a football. It lands in a puddle. \"See?\" he says proudly. \"Planted!\" All the other gremlins clap. You do NOT clap.",
    skillEarned: {
      name: "Nature Scan",
      description: "Scan any problem to understand what's REALLY going on! BEEP BOOP!",
      emoji: "📡",
    },
    choices: [
      {
        text: "Use the Leaf Compass to find the broken Watering Can pieces",
        requiresItem: "Leaf Compass",
        nextNodeId: "rr-04a",
        preview: "The compass is spinning — it knows where the pieces are!",
      },
      {
        text: "Ask the Gremlins to help you search the forest together",
        nextNodeId: "rr-04a",
        preview: "They're messy, but they know this forest better than anyone...",
      },
    ],
  },

  // Chapter 3b - Dam Rescue
  {
    id: "rr-03b",
    character: "ranger-robot",
    title: "The Great Log Lift",
    narrative:
      "You wade into the rising water and grab the biggest log with your strong robot arms. HEAVE! CREAK! SPLASH! One by one, you pull the logs away from the dam. The otters cheer with every log — doing little victory spins in the water. But halfway through, you notice something: these logs didn't just fall here randomly. They were PUSHED here! There are tiny green footprints all over the muddy bank. Gremlins! They must have been trying to \"fix\" the river by stacking the logs, but they made it worse instead. After clearing the dam, the water flows again and the otter family slides back into their cozy home. Mama otter gives you a tiny fish as a thank-you. Your sensors say: FISH NOT COMPATIBLE WITH CHARGING PORT. But it's the thought that counts!",
    sillyMoment:
      "You try to politely decline the fish but the baby otters keep putting more fish on your head. You now have seven fish balanced on your Sensor Dish. You look like a robot fish hat. The otters think this is the funniest thing they've ever seen.",
    skillEarned: {
      name: "Nature Scan",
      description: "Scan any problem to understand what's REALLY going on! BEEP BOOP!",
      emoji: "📡",
    },
    choices: [
      {
        text: "Follow the green footprints to find the Gremlins",
        nextNodeId: "rr-04a",
        preview: "Those little footprints go deep into the woods...",
      },
      {
        text: "Head to the Forest Council for help",
        nextNodeId: "rr-04b",
        preview: "The three wise old trees might know what's going on...",
      },
    ],
  },

  // Chapter 4a - Finding the Watering Can
  {
    id: "rr-04a",
    character: "ranger-robot",
    title: "The Three Pieces",
    narrative:
      "You track down the three pieces of the magical Watering Can! One piece was stuck up in a tall oak tree — a bird was using it as a very fancy birdbath. One piece was at the bottom of the river — the otters were using it as a tiny slide. And the last piece? Grubble the gremlin was wearing it as a HAT. \"I thought it was a really good hat!\" he says sadly, taking it off his head. Now you have all three pieces, but they won't stick together on their own. The magical glue that held them is all washed away. You could fix it with your Acorn Toolkit if you have it, or you could hold the pieces together and ask the Gremlins to try to remember how to garden WITHOUT the can.",
    sillyMoment:
      "The bird who was using the watering can piece as a birdbath is NOT happy about giving it up. She follows you for ten minutes going \"Hmph! HMPH!\" and occasionally bonking your head with her wing. Grubble offers her a leaf as a replacement bath. She looks insulted.",
    itemEarned: {
      name: "Forest Badge",
      description: "Shows everyone you're an official Forest Helper! Very shiny!",
      emoji: "🌲",
    },
    choices: [
      {
        text: "Use the Acorn Toolkit to fix the Watering Can",
        requiresItem: "Acorn Toolkit",
        nextNodeId: "rr-05a",
        preview: "You've got the perfect tiny tools for this job!",
      },
      {
        text: "Hold the pieces together and help the Gremlins remember",
        nextNodeId: "rr-05b",
        preview: "Maybe they don't need a magic tool — they just need patience...",
      },
    ],
  },

  // Chapter 4b - Forest Council
  {
    id: "rr-04b",
    character: "ranger-robot",
    title: "The Wise Old Trees",
    narrative:
      "You visit the Forest Council — three ENORMOUS old trees who have been here for five hundred years. They talk VERY slowly. \"Weeeee... knooooow... about... theeeee... Gremlins...\" says the first tree. You wait. And wait. And wait some more. \"Theeeey... were... theeeee... BEST... gardenerssss...\" says the second tree. The third tree just nods very, very slowly. After what feels like forever, they explain that the Gremlins' magical Watering Can broke in the storm. Without it, the Gremlins forgot all their gardening knowledge. The trees give you a Forest Map showing where all three pieces of the Watering Can ended up. \"Pleeeease... help... themmmmm...\" the first tree says. \"We... miss... our... flowers.\"",
    sillyMoment:
      "The third tree FINALLY says something: \"Also...\" Everyone leans in. \"...your leg... is squeaky.\" That's all he says. He looks very pleased with himself. The other two trees roll their eyes, which takes about thirty seconds for a tree to do.",
    itemEarned: {
      name: "Forest Badge",
      description: "Shows everyone you're an official Forest Helper! Very shiny!",
      emoji: "🌲",
    },
    choices: [
      {
        text: "Use the Leaf Compass and Forest Map together to find the pieces fast",
        requiresItem: "Leaf Compass",
        nextNodeId: "rr-05a",
        preview: "Compass plus map — you'll find them in no time!",
      },
      {
        text: "Ask the wise trees to send a message to the Gremlins that help is coming",
        nextNodeId: "rr-05b",
        preview: "The tree telegraph system is slow but reliable...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "rr-05a",
    character: "ranger-robot",
    title: "The Garden Grows Again!",
    narrative:
      "You fix the magical Watering Can — and the moment it's whole again, it sprays a fountain of sparkly rainbow water into the air! WHOOOOSH! The water rains down all over the clearing and every single gremlin freezes. Their eyes go wide. Their ears perk up. \"I... I REMEMBER!\" Grubble shouts. \"ROOTS GO DOWN!\" \"PETALS GO UP!\" another gremlin yells. \"WATER THE PLANT, NOT THE ROCK!\" They go WILD! Flowers get replanted right-side-up at incredible speed. Bushes get un-tangled. Vines get re-wound around the trees. In one afternoon, the entire Whispering Woods looks better than it EVER has! And your Solar Panel? Grubble marches right up to you, pulls out a blob of flower nectar, smears it on the crack, and gives it a good BONK with his fist. BEEP! POWER AT 100%! \"Gremlin Engineering!\" he says proudly, flexing muscles he definitely does not have. From that day on, the Gremlins are your official garden crew. Your charging station now has the most beautiful flower garden in the whole forest, and every morning Grubble salutes you with a tiny watering can hat on his head.",
    sillyMoment:
      "The Gremlins throw you a \"Thank You\" party but they don't know what robots eat so they just pile a bunch of stuff on your head — three pinecones, a fish, a nice rock, and a dandelion. \"It's a buffet!\" Grubble says. You don't eat any of it, but you keep the rock. It IS a nice rock.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "rr-05b",
    character: "ranger-robot",
    title: "The Patient Teacher",
    narrative:
      "You hold the broken Watering Can pieces together and kneel down next to the Gremlins. \"You don't need magic to remember,\" you say in your warm robot voice. \"You just need practice.\" You pick up a single flower. \"Watch. Roots go DOWN.\" You plant it gently. \"Petals go UP.\" Grubble watches with his mouth wide open. \"Ohhhh!\" he says. You do it again. \"Roots go DOWN. Petals go UP.\" \"OHHHHH!\" say ALL the gremlins. You do it forty-seven more times. They say \"OHHHHH!\" forty-seven more times. But slowly, one by one, each gremlin starts getting it right! Grubble plants a daisy perfectly and does a happy little dance that shakes the ground. \"I DID IT!\" By evening, the Gremlins are planting flowers like pros — no magic needed. They build five tiny houses right next to your charging station and every morning, Grubble brings you a freshly grown sunflower and places it very carefully on your Solar Panel. \"For extra charging!\" he whispers. It does NOT work that way. But you never, ever tell him. The forest has never been more beautiful, and you've never been less alone.",
    sillyMoment:
      "Grubble makes you a \"World's Best Robot\" trophy out of sticks and mud. It looks like a lumpy potato with arms. \"It's you!\" he says, beaming. You display it proudly in your charging station. The squirrel from earlier peeks in, sees the trophy, and slowly backs away again. \"Still not my problem,\" says the squirrel.",
    isEnding: true,
    choices: [],
  },
];
