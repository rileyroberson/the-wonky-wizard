import { StoryNode } from "../types";

export const clopAndFluffStory: StoryNode[] = [
  // Case #1, Node 1 — The Crime Scene
  {
    id: "cf-01",
    character: "clop-and-fluff",
    title: "The Case of the Stolen Ice Cream Cone",
    narrative:
      "It's the hottest afternoon the Kingdom of Mount Boom has seen all year. The sun is blazing, the volcano is steaming, and somewhere in this kingdom — RIGHT NOW — a crime is melting. Sir Clip-Clop (the Noble Knight's extremely opinionated horse) and Fluffington (the Pretty Princess's extremely tiny bunny) are officially the Kingdom of Mount Boom's only detective duo: BOOM PD. Their office is a converted broom closet near the town square. Their motto: \"No clue too small, no criminal too large (unless it's a dragon, in which case please call someone else).\" They have one BOOM PD badge. They share it. Mostly Clip-Clop wears it because Fluffington once said it made him \"look like a sheriff\" and Clip-Clop has been unable to stop looking at his own reflection since. TODAY'S CASE: Prince Popsworth, age six, had his mint chip ice cream cone — rainbow sprinkles, his favorite — SNATCHED right out of his hand near the Scoop Shop at 2:44 PM by \"someone tall with a very big hat.\" Prince Popsworth is crying into a tiny handkerchief. It is now 2:51 PM. The cone has been missing for SEVEN MINUTES. On the hottest day of the year. Clip-Clop straightens his Detective Bowler Hat. Fluffington unfurls his notepad (it is the size of a Post-It note). They survey the scene. Two clues are immediately visible: a trail of green ice cream drips heading east toward the market... and a very nervous squirrel sitting on a nearby bench, sweating visibly through his fur.",
    sillyMoment:
      "Clip-Clop tries to kneel dramatically to examine a drip up close. He cannot kneel. He is a horse. He tries anyway. He tips slightly sideways and has to pretend it was intentional. \"I'm checking the underside of the drip,\" he says with great authority. Nobody asks what that means. Fluffington examines the same drip from one inch away using his patented three-wiggle Nose Wiggle technique. \"Mint chip,\" Fluffington announces, standing back up with tremendous professional dignity. \"Rainbow sprinkles. FRESH. It's been on the ground less than eight minutes.\" He looks very pleased with himself. He has green on his nose. He will not notice this for the rest of the adventure.",
    choices: [
      {
        text: "Follow the drip trail — the cone is melting RIGHT NOW!",
        nextNodeId: "cf-02a",
        preview: "A trail of green drips leads east through the market. Fresh ones. Very fresh.",
      },
      {
        text: "Interrogate that squirrel! He definitely knows something.",
        nextNodeId: "cf-02b",
        preview: "The squirrel on the bench has been staring at them for the past thirty seconds without blinking.",
      },
    ],
  },

  // Node 2a — The Drip Trail
  {
    id: "cf-02a",
    character: "clop-and-fluff",
    title: "Following the Evidence",
    narrative:
      "CLOP CLOP CLOP CLOP! Clip-Clop gallops after the drip trail, Detective Bowler Hat tilting dangerously with every stride. Fluffington clings to Clip-Clop's mane with one paw, notepad open in the other, marking each drip on a tiny hand-drawn map. The trail is easy to follow — each green drop glints on the hot cobblestones like a little emerald breadcrumb. DRIP. Three feet later, DRIP. Past the cheese market (twelve varieties, very aromatic), past the hat shop (\"HATS FOR ALL HEADS INCLUDING HORSE HEADS,\" says the sign, though Clip-Clop has never gone in because the hats don't fit over his Detective Bowler Hat), and into the wide avenue leading to... Town Hall. The official home of Mayor Bumbleton. The trail of drips ends RIGHT on the Town Hall welcome mat. There's one final fat green drip. Still wet. CLOP CLOP — Clip-Clop skids to a halt. They peer through the tall Town Hall window. Inside, at a very large desk, a VERY large figure is hunched over with both hands hidden under his cape. The figure is Mayor Bumbleton. He has been the mayor for fifteen years. He has a magnificent mustache. He appears to be eating something small and cone-shaped. Before they can confront him, they need solid evidence! They spot two things: a crumpled napkin near the door with something written on it... and the Town Crow, Cornelius, watching from a signpost with a deeply suspicious amount of interest.",
    sillyMoment:
      "Clip-Clop presses his face against the Town Hall window to see better. His nose leaves a massive smudge on the glass. Mayor Bumbleton looks up from whatever he's doing. They make eye contact. Clip-Clop immediately ducks. He is a full-sized horse. He is not hidden in any meaningful way. The mayor slowly looks back down. \"He definitely didn't see me,\" Clip-Clop whispers from behind his own legs. \"He absolutely did,\" says Fluffington from Clip-Clop's shoulder, three feet in the air and completely visible through the window. \"I'm going to need you to trust my read on this situation,\" says Clip-Clop. Fluffington does not trust his read on this situation.",
    choices: [
      {
        text: "Grab that napkin — could be a confession!",
        nextNodeId: "cf-03a",
        preview: "The napkin is crumpled up right by the door. Something is written on it in very hasty handwriting.",
      },
      {
        text: "Question Cornelius — that crow sees everything!",
        nextNodeId: "cf-03b",
        preview: "Cornelius the Town Crow has been watching this whole situation with an almost professional level of attention.",
      },
    ],
  },

  // Node 2b — The Star Witness
  {
    id: "cf-02b",
    character: "clop-and-fluff",
    title: "The Star Witness",
    narrative:
      "Fluffington approaches the squirrel on the bench with his badge visible (it's Clip-Clop's badge — Clip-Clop is wearing it — so Fluffington is technically just gesturing at Clip-Clop, who nods very officially). The squirrel's name is Bertram. Bertram is the kind of witness who does not require much encouragement to talk. In approximately 1.8 seconds, Bertram delivers the following information in one single breath at the speed of a very caffeinated auctioneer: \"YES I SAW IT I was sitting RIGHT HERE eating a walnut — my THIRD walnut, the first two were excellent but the third was a little dry — when this VERY large figure with an ENORMOUS hat ran past heading EAST and they were holding something cone-shaped and GREEN and they were running like a penguin chasing a bicycle — very fast but sort of sideways — and they smelled like fancy cheese and they went toward TOWN HALL and I thought about saying something but then I dropped my walnut and that became my WHOLE priority, goodbye!\" Bertram scurries up a tree. \"...Did you get all that?\" Clip-Clop asks. Fluffington has been writing furiously. He holds up his notepad. He has written: BIG HAT. EAST. TOWN HALL. CHEESE. PENGUIN. They head to Town Hall. Through the window: Mayor Bumbleton — the only person in Mount Boom with a truly enormous hat — is hunched at his desk, clearly eating something hidden under his cape. The case is almost cracked. They need solid evidence first!",
    sillyMoment:
      "Clip-Clop tries to write something in Fluffington's notepad. The notepad is the size of a Post-It note. Clip-Clop's hoof is the size of a dinner plate. He gets the tip of his hoof on the page and presses down with great focus. He has written one letter: \"E.\" It fills the entire page. \"There,\" Clip-Clop says. \"Evidence.\" \"That's the letter E,\" Fluffington says. \"EXACTLY,\" says Clip-Clop. He does not elaborate. Fluffington opens his mouth, decides against it, and gets a fresh page from his pocket.",
    choices: [
      {
        text: "Check that napkin by the Town Hall door!",
        nextNodeId: "cf-03a",
        preview: "There's a crumpled napkin right on the doorstep. Something is scrawled on it in urgent handwriting.",
      },
      {
        text: "Ask Cornelius the Town Crow what he saw!",
        nextNodeId: "cf-03b",
        preview: "Cornelius is RIGHT THERE on the signpost, making very intense eye contact like he WANTS to be questioned.",
      },
    ],
  },

  // Node 3a — The Napkin
  {
    id: "cf-03a",
    character: "clop-and-fluff",
    title: "The Napkin Doesn't Lie",
    narrative:
      "Fluffington darts to the Town Hall door and scoops up the crumpled napkin in one swift bunny move. He spreads it flat on the step. Clip-Clop leans WAY down to look. The napkin is fine linen. Embossed along the top edge in golden thread: \"M.B.\" Mayor Bumbleton. And written below, in the kind of frantic handwriting that means someone wrote this WHILE WALKING VERY FAST: \"Just ONE. Just to TRY it. Nobody will know. IT IS SO HOT TODAY. Diet starts again TOMORROW. This does NOT count. —M.B.\" Below that, drawn in pen, is a tiny and extremely detailed picture of an ice cream cone. The cone has a little face. The face is smiling. Below the drawing, the mayor has written: \"You deserve this. You've worked so hard. You're a great mayor. EAT THE CONE. —Also M.B.\" He wrote himself an encouraging note. On a napkin. About stolen ice cream. Fluffington opens his mouth. Closes it. Opens it again. \"That is a CONFESSION,\" he says. \"That is ART,\" says Clip-Clop. \"That is a CONFESSION.\" \"He drew the sprinkles so carefully.\" \"CLIP-CLOP.\" \"You're right. Very incriminating. Well done, napkin.\" They have what they need. Time to confront the mayor. Two approaches.",
    sillyMoment:
      "Clip-Clop takes the napkin and studies the little drawing more closely. \"I feel like the cone face looks slightly like me,\" he says. It does not look like him. It is a circle with two dots and a curved line. \"Do you think I have expressive eyes?\" Clip-Clop asks. \"I think we have a case to solve,\" Fluffington says. \"But do I? Expressive eyes?\" \"CLIP-CLOP.\" \"I'm asking for professional reasons. If criminals can read my eyes during interrogations, I need to know.\" Fluffington pauses. \"...That is actually a fair concern.\" \"THANK you.\" They sit for three seconds. \"The mayor is still eating the ice cream,\" Fluffington says. \"RIGHT,\" says Clip-Clop. \"Let's go.\"",
    skillEarned: {
      name: "Clue Nose",
      description: "Three professional nose-wiggles from Fluffington reveals hidden evidence nearby! No clue can hide from the Nose!",
      emoji: "👃",
    },
    choices: [
      {
        text: "BOOM PD! Dramatic entrance — announce yourselves!",
        nextNodeId: "cf-04a",
        preview: "Kick the door open. Badges out. Maximum drama. This is what BOOM PD is FOR.",
      },
      {
        text: "Quiet approach — creep in and catch him mid-cone.",
        nextNodeId: "cf-04b",
        preview: "Stealth. Patience. The art of the silent approach. (One of them is a horse, but still.)",
      },
    ],
  },

  // Node 3b — Cornelius the Town Crow
  {
    id: "cf-03b",
    character: "clop-and-fluff",
    title: "An Eyewitness Account (Eventually)",
    narrative:
      "Cornelius the Town Crow is Mount Boom's most observant resident. He is also its most talkative resident. He also has very strong opinions about cheese. \"Cornelius!\" Clip-Clop calls up to the signpost. \"BOOM PD! We need information!\" \"INFORMATION!\" Cornelius crows. \"I have PLENTY! But first — have you heard about the BRIE shortage? Very alarming. Let me explain the history of brie, which begins in the eighth century when—\" \"Cornelius, someone stole an ice cream cone,\" Fluffington interrupts. \"...Oh THAT. Yes. Mayor Bumbleton. 2:44 PM. Running east from the Scoop Shop holding a mint chip cone. He was running like a penguin chasing a bicycle — very fast, somewhat sideways. He went straight into Town Hall. I said 'Mayor! Is that an ice cream cone?' He said 'NO.' I said 'It really looks like one.' He said 'I AM ON A DIET.' I said 'Then why are you holding one?' He said 'IT IS A VERY COMPLICATED SITUATION' and slammed the door. Also his hat fell off and he had to go back for it, which cost him three seconds.\" There is a pause. \"Thank you, Cornelius,\" Fluffington says, writing furiously. \"Do you want to hear about GOUDA now? Very underrated, particularly—\" They are already walking away. They have their suspect. Now to confront him — but how?",
    sillyMoment:
      "Cornelius follows them to Town Hall anyway and continues his cheese presentation from the rooftop. \"GRUYÈRE!\" he calls down helpfully. \"Nutty! Great for cooking! Pairs surprisingly well with ice cream!\" Clip-Clop looks up from the base of the building. \"CORNELIUS. We are on a STAKEOUT.\" \"I'm just providing CONTEXT,\" Cornelius says. \"Cheese context is ALWAYS relevant.\" Clip-Clop looks at Fluffington. Fluffington looks at Clip-Clop. \"He's not wrong about the pairing,\" Clip-Clop admits quietly. Fluffington closes his eyes for a count of five. \"WE,\" says Fluffington, very carefully, \"are detectives.\" \"Delicious detectives,\" says Cornelius from the roof.",
    skillEarned: {
      name: "Clue Nose",
      description: "Three professional nose-wiggles from Fluffington reveals hidden evidence nearby! No clue can hide from the Nose!",
      emoji: "👃",
    },
    choices: [
      {
        text: "BOOM PD! Dramatic entrance — kick the door open!",
        nextNodeId: "cf-04a",
        preview: "Maximum drama. Maximum volume. MAXIMUM BOOM PD ENERGY.",
      },
      {
        text: "Stealth mode — creep in quietly and catch him in the act.",
        nextNodeId: "cf-04b",
        preview: "The classic quiet approach. Observe first, pounce second. Very professional.",
      },
    ],
  },

  // Node 4a — The Dramatic Entrance
  {
    id: "cf-04a",
    character: "clop-and-fluff",
    title: "BOOM PD! Nobody Move!",
    narrative:
      "Sir Clip-Clop takes three steps back. He paws the ground. He lowers the brim of his Detective Bowler Hat. He looks at Fluffington with the eyes of someone who has been waiting for this moment his entire life. \"Ready?\" he says. \"The door might be unlo—\" Fluffington starts. WHAM! Clip-Clop kicks the Town Hall door open with both back legs. It flies open so hard it bounces off the wall. \"BOOM PD!\" Clip-Clop bellows, spinning around to face the room in a dramatic full rotation. \"NOBODY MOVES! SIR CLIP-CLOP AND FLUFFINGTON ARE ON THE CASE! FREEZE! PUT DOWN THE ICE CREAM CONE!\" Mayor Bumbleton ROCKETS out of his chair. He is holding a mint chip ice cream cone. A mostly-eaten, significantly-melted, still-clearly-identifiable mint chip cone. His magnificent mustache has rainbow sprinkles on it. His eyes are enormous. His cape goes flying. A shower of napkins covered in tiny ice cream doodles scatters off his desk. The cone launches from his hand in a high arc. It sails through the air in slow motion. It lands — perfectly — in Sir Clip-Clop's open mouth. Clip-Clop eats it. There is a very long silence in Town Hall. \"...Evidence,\" says Clip-Clop. Fluffington puts his head in his paws. The mayor stares. \"He ate it,\" the mayor says. \"Evidence,\" Clip-Clop says again, more firmly.",
    sillyMoment:
      "Mayor Bumbleton stares at Clip-Clop. Clip-Clop chews very thoughtfully, like a sommelier considering a fine wine. \"Mint chip,\" Clip-Clop confirms. \"Rainbow sprinkles. Good cone. Fresh this morning, I'd say. Not homemade — definitely Scoop Shop.\" He nods with great professional authority. Fluffington is making a sound that is either a groan or the noise of a career ending. \"THE EVIDENCE,\" he says. \"Was DELICIOUS,\" Clip-Clop agrees. \"I'm actually grateful I tasted it. Now I understand the motive more fully. As a detective, I mean.\" \"You ate the evidence.\" \"I PRESERVED it.\" \"IN YOUR STOMACH.\" \"Safe storage. Very secure. Nobody can take it now.\"",
    itemEarned: {
      name: "BOOM PD Badge",
      description: "An official shiny brass star badge — the symbol of the Kingdom of Mount Boom's greatest detective duo!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Justice must be served! You're coming with us, Mayor!",
        nextNodeId: "cf-05a",
        preview: "The evidence is gone (into Clip-Clop) but BOOM PD has the napkin AND the testimony AND the drips. Case closed!",
      },
      {
        text: "Wait... WHY did you take it, Mayor? Let him explain first.",
        nextNodeId: "cf-05b",
        preview: "Clip-Clop and Fluffington exchange a look. There's something in the mayor's eyes that's less 'criminal' and more 'very embarrassed.'",
      },
    ],
  },

  // Node 4b — The Quiet Approach
  {
    id: "cf-04b",
    character: "clop-and-fluff",
    title: "The Art of Sneaking In (Mostly)",
    narrative:
      "\"Stealth,\" Clip-Clop says, nodding gravely. \"We creep in. We observe. We catch him in the act. Classic detective technique.\" \"Perfect,\" says Fluffington. \"I'll go first — I'm very quiet.\" Fluffington opens the door approximately one inch at a time and tiptoes inside without making a single sound. He is, in fact, an excellent sneak. Bunny paws are ideally designed for this. Then Clip-Clop follows. CLOP. CLOP. CLOP. CLOP. Clip-Clop is a horse on marble floors. There is no universe in which this is quiet. He tries walking on his tiptoes. He doesn't have tiptoes. He tries walking SLOWER — the CLOPs just become more dramatic and more spread out. He tries stuffing his Detective Bowler Hat under his front hooves. He immediately trips. He gets the hat back. CLOP CLOP CLOP. They freeze. They look toward the desk. Mayor Bumbleton has not looked up — he has his headphones on, listening to relaxing ocean sounds. They creep close enough to see everything clearly. On the desk: a mint chip cone, half-eaten, rainbow sprinkles still intact on the surviving portion. The mayor is staring at it. He takes a lick. Sighs. Takes another lick. Sighs harder. There's a sticky note on his desk: \"DIET DAY 347. YOU CAN DO THIS.\" He looks at the cone. Looks at the note. Takes a lick. Puts his face in his enormous hands. \"He's having a whole internal debate,\" Fluffington whispers. \"With a cone,\" Clip-Clop whispers back. \"Should we... wait?\" says Fluffington. \"...A little,\" agrees Clip-Clop.",
    sillyMoment:
      "During the observation, Clip-Clop accidentally CLOPs one more time — a big one. The mayor STILL doesn't look up. The ocean sounds are very immersive apparently. Fluffington exhales with relief. Clip-Clop, pure tension radiating off him, immediately CLOPs again. Louder. Fluffington turns and stares at him with the expression of someone running out of patience very quickly. \"I panic-Clopped,\" Clip-Clop mouths. Fluffington holds up one paw, closes his eyes, and counts to three silently. The mayor takes another lick of the cone and sighs at the sound of waves. Everyone is fine. Everything is under control. Mostly.",
    itemEarned: {
      name: "BOOM PD Badge",
      description: "An official shiny brass star badge — the symbol of the Kingdom of Mount Boom's greatest detective duo!",
      emoji: "⭐",
    },
    choices: [
      {
        text: "Jump out! BOOM PD! Make the dramatic arrest!",
        nextNodeId: "cf-05a",
        preview: "They've seen enough. Time to announce themselves and close this case!",
      },
      {
        text: "Step in gently. The mayor looks like he needs a moment.",
        nextNodeId: "cf-05b",
        preview: "Something about the mayor talking to himself about a sticky note is making Fluffington feel a little sorry for him.",
      },
    ],
  },

  // Node 5a — Action Ending: Justice (and a New Cone)
  {
    id: "cf-05a",
    character: "clop-and-fluff",
    title: "Case Closed! (And Also, Would You Like Sprinkles?)",
    narrative:
      "\"Mayor Bumbleton!\" Clip-Clop thunders, stepping into the center of Town Hall with maximum drama (CLOP CLOP CLOP — he went back outside briefly for a better running entrance; nobody mention this). \"Sir Clip-Clop and Fluffington of BOOM PD! You are hereby CAUGHT! We have the napkin! We have eyewitness testimony! We have the drip trail! I personally ate the primary evidence, which I maintain was necessary and professionally justified!\" Mayor Bumbleton looks at Clip-Clop. He looks at Fluffington. He looks at his DIET DAY sticky note. He looks at the half-eaten cone. He looks at Clip-Clop again. And then his magnificent mustache begins to tremble. And Mayor Bumbleton, fifteen-year mayor of the Kingdom of Mount Boom, starts laughing. A PROPER laugh. Bent-over, knee-slapping, tears-streaming, full-body laughing that shakes his whole round shape like a bowl of jelly on a trampoline. \"You're RIGHT!\" he gasps. \"Oh, I'm COMPLETELY caught! I've been on a diet for THREE HUNDRED AND FORTY-SEVEN DAYS and it was ONE HUNDRED AND FOUR DEGREES OUTSIDE and the Scoop Shop smelled like pure HAPPINESS and I just—\" He wipes his eyes. \"I panicked. Grabbed it. Ran. And I've been sitting here arguing with MYSELF for twelve minutes.\" He stands to his full round height, smooths his cape, and straightens his enormous hat. \"Let me make this right.\" What follows is the most memorable mayoral act in Mount Boom history. Mayor Bumbleton personally escorts BOOM PD back to the Scoop Shop and announces loudly to the entire town square that he \"briefly borrowed\" Prince Popsworth's cone \"without asking\" due to \"extreme heat and a brief lapse in mayoral judgment, which I deeply regret.\" He buys Prince Popsworth THREE new cones. He buys BOOM PD two cones each. He even buys Cornelius the crow a cone (nobody asked, but here we are). Then he buys himself one, stares at it, stares at his DIET DAY note (which he brought along in his pocket), and eats the entire thing in four enormous bites while making direct eye contact with nobody. Then he signs a royal proclamation: every year on the hottest day, the Kingdom of Mount Boom will hold FREE ICE CREAM DAY, so that no citizen will ever be driven to cone-related crimes again. Prince Popsworth gets four cones total (one extra for emotional distress). He starts crying again — the good kind. Fluffington files the case. It reads: \"Case solved. No jail time. Mayor now has three more cones than permitted by his diet. Clip-Clop ate the evidence. Would not change a thing. — Boom PD.\" Case Closed.",
    sillyMoment:
      "Cornelius the crow, who nobody invited anywhere, shows up at the Scoop Shop IMMEDIATELY. \"I heard there was a cone for me?\" \"There was not,\" says Fluffington. \"The mayor said—\" \"He did not.\" \"But I was a KEY WITNESS—\" \"You told us about cheese for eleven minutes.\" Cornelius thinks about this for a moment. \"Worth it though,\" he says. \"I stand firmly by the cheese information.\" The mayor buys him a cone anyway because the math of an argument with a crow simply doesn't work out in anyone's favor. Cornelius immediately begins explaining which CHEESE pairs best with mint chip. Clip-Clop leans down to Fluffington. \"He's not wrong about the gouda,\" Clip-Clop says quietly. Fluffington eats his cone in silence. He has reached a place of professional peace. His cone is excellent.",
    isEnding: true,
    choices: [],
  },

  // Node 5b — Friendship Ending: The Sweetest Confession in Mount Boom
  {
    id: "cf-05b",
    character: "clop-and-fluff",
    title: "The Sweetest Confession in Mount Boom",
    narrative:
      "Fluffington takes a breath. And instead of announcing BOOM PD or doing anything dramatic, he hops very quietly onto the mayor's desk and sits next to the half-melted cone. The mayor looks up. He sees a small bunny with a green-stained nose and a tiny notepad, sitting there looking at him with large, patient eyes. \"Mayor Bumbleton,\" Fluffington says softly. \"We know it was you. But we'd like to understand first. Why did you take it?\" The mayor stares at Fluffington. He stares at Clip-Clop, whose enormous horse face is gently peeking through the office door with surprisingly soft eyes. The mayor's magnificent mustache trembles. \"I've been on a diet,\" the mayor says quietly, \"for three hundred and forty-seven days. I walked past the Scoop Shop and it smelled like — like summer. Like the kind of summer you had when you were very young and nothing was complicated. And I just... grabbed it. Before I thought. And then I ran because I was — because I was embarrassed. A mayor shouldn't do that.\" He looks at the cone. \"Prince Popsworth is probably very sad.\" \"He is,\" Fluffington says gently. \"But I think he'd feel a lot better if you came to say sorry yourself.\" Clip-Clop, who has been quiet for an unusual amount of time, says: \"You don't have to be on a diet every single day, Mayor. My knight takes rest days. You're allowed to just have a cone sometimes. You just have to ask for it.\" The mayor looks at Clip-Clop for a long moment. \"I thought you'd be more... arresty,\" the mayor says. \"We are EXTREMELY arresty,\" Clip-Clop confirms. \"But only when necessary. This is a first offense. And you've clearly been punishing yourself all afternoon already.\" What happens next is one of the nicest things the town square has ever seen: a very large mayor in an enormous hat walking up to a very small prince with a very big sad face, saying \"I'm sorry, Prince Popsworth. I made a mistake and I want to make it right.\" The replacement cone is spectacular: triple scoop, extra sprinkles, chocolate drizzle, a candy flower on top, and a tiny flag the Scoop Shop owner made on the spot that says \"BOOM PD APPROVED.\" Popsworth's frown becomes the biggest smile in the kingdom. The mayor takes one official lick of his own cone. It tastes exactly like summer. He shares the rest with Cornelius the crow, who absolutely does not deserve it but is very grateful. The mayor adds \"one scoop, once a week, on the schedule\" to his official mayoral calendar. Fluffington files the case. It reads: \"Case solved. No jail time. Everyone cried a little — the good kind. Mayor says thank you. He left us a cheese plate. Cornelius narrated the cheese plate for fourteen minutes. Clip-Clop had seconds. I had thirds. BOOM PD: best job in the kingdom. — Fluffington, Detective First Class.\" Sir Clip-Clop walks out of Town Hall in the golden afternoon light, Detective Bowler Hat tilted just right, BOOM PD badge gleaming, Fluffington riding on his shoulder with his tiny notepad tucked away. The Kingdom of Mount Boom has never felt safer. Well. Mostly. There are still crimes to solve. But that's for next time.",
    sillyMoment:
      "On the walk to the Scoop Shop, the mayor, Clip-Clop, and Fluffington pass Bertram the squirrel on his bench. Bertram sees the mayor. His eyes go very wide. He stands up on his hind legs. Clip-Clop holds up one hoof. \"Not now, Bertram.\" Bertram sits back down. He watches them walk past. Then he immediately turns to the nearest passerby. \"I WAS THE KEY WITNESS,\" Bertram announces. \"I cracked the case. Well — I contributed ONE essential clue. And then I dropped my walnut. But the CLUE was pivotal.\" He has told this story eleven times by dinner. By morning it's a full legend with sound effects. By the end of the week, Bertram believes he personally solved everything while Clip-Clop and Fluffington \"helped a little at the end.\" Clip-Clop hears about this version of events through the grapevine and is only mildly offended, which, for Clip-Clop, is impressive. He considers it personal growth.",
    isEnding: true,
    choices: [],
  },
];
