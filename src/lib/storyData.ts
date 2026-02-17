import { CharacterInfo, StoryNode } from "./types";
import { wonkyWizardStory } from "./stories/wonky-wizard";
import { wonkyWizardCh2Story } from "./stories/wonky-wizard-ch2";
import { nobleKnightStory } from "./stories/noble-knight";
import { nobleKnightCh2Story } from "./stories/noble-knight-ch2";
import { prettyPrincessStory } from "./stories/pretty-princess";
import { prettyPrincessCh2Story } from "./stories/pretty-princess-ch2";
import { rangerRobotStory } from "./stories/ranger-robot";
import { rangerRobotCh2Story } from "./stories/ranger-robot-ch2";
import { allFriendsStory } from "./stories/all-friends";

export const characters: CharacterInfo[] = [
  {
    id: "wonky-wizard",
    name: "The Wonky Wizard",
    tagline: "A silly wizard whose spells never go quite right!",
    emoji: "🧙",
    color: "from-purple-500 to-indigo-600",
    startingItem: {
      name: "Mighty Wand",
      description: "A powerful wand that crackles with magical energy!",
      emoji: "🪄",
    },
    startingSkill: {
      name: "Silly Spell",
      description: "Makes things turn rainbow colored! Mostly...",
      emoji: "🔮",
    },
    startNodeId: "wz-01",
    chapters: [
      { id: "ch1", name: "Chapter 1: The Giggle Goblin", startNodeId: "wz-01" },
      { id: "ch2", name: "Chapter 2: The Wand Storm", startNodeId: "wz2-01" },
    ],
  },
  {
    id: "noble-knight",
    name: "The Noble Knight",
    tagline: "A brave knight with a horse that won't stop talking!",
    emoji: "🗡️",
    color: "from-amber-500 to-red-600",
    startingItem: {
      name: "Wooden Sword",
      description: "A trusty sword for a trusty knight!",
      emoji: "⚔️",
    },
    startingSkill: {
      name: "Brave Charge",
      description: "Run really fast with a funny battle cry! CHAAARGE!",
      emoji: "🏃",
    },
    startNodeId: "kn-01",
    chapters: [
      { id: "ch1", name: "Chapter 1: The Grumpy Dragon", startNodeId: "kn-01" },
      { id: "ch2", name: "Chapter 2: The Busted Wagon", startNodeId: "kn2-01" },
    ],
  },
  {
    id: "pretty-princess",
    name: "The Pretty Princess",
    tagline: "A princess whose animal friends will do anything to help!",
    emoji: "👸",
    color: "from-pink-500 to-rose-600",
    startingItem: {
      name: "Glowing Tiara",
      description: "A beautiful tiara that glows when adventure is near!",
      emoji: "👑",
    },
    startingSkill: {
      name: "Royal Command",
      description: "Animals listen to you and come to help!",
      emoji: "🐾",
    },
    startNodeId: "pr-01",
    chapters: [
      { id: "ch1", name: "Chapter 1: The Missing Music", startNodeId: "pr-01" },
      { id: "ch2", name: "Chapter 2: The Starless Night", startNodeId: "pr2-01" },
    ],
  },
  {
    id: "ranger-robot",
    name: "The Ranger Robot",
    tagline: "A forest-protecting robot with a heart of gold circuits!",
    emoji: "🤖",
    color: "from-green-500 to-emerald-600",
    startingItem: {
      name: "Sensor Dish",
      description: "Picks up signals from every tree and animal in the forest!",
      emoji: "📡",
    },
    startingSkill: {
      name: "Solar Boost",
      description: "Charge up with sunlight for extra robot power! BZZZT!",
      emoji: "☀️",
    },
    startNodeId: "rr-01",
    chapters: [
      { id: "ch1", name: "Chapter 1: The Falling Forest", startNodeId: "rr-01" },
      { id: "ch2", name: "Chapter 2: The Junkyard Birds", startNodeId: "rr2-01" },
    ],
  },
];

export const crossoverCharacter: CharacterInfo = {
  id: "all-friends",
  name: "The Wonky Wizard and Friends",
  tagline: "All four heroes team up in the Kingdom of Mount Boom!",
  emoji: "🌋",
  color: "from-yellow-400 via-red-500 to-purple-600",
  startingItem: {
    name: "Team Banner",
    description: "A banner with all four heroes on it! Teamwork makes the dream work!",
    emoji: "🚩",
  },
  startingSkill: {
    name: "Team Spirit",
    description: "When all four heroes work together, anything is possible!",
    emoji: "🤝",
  },
  startNodeId: "af-01",
  chapters: [
    { id: "ch1", name: "Chapter 1: The Kingdom of Mount Boom", startNodeId: "af-01" },
  ],
};

const allStories: Record<string, StoryNode[]> = {
  "wonky-wizard": [...wonkyWizardStory, ...wonkyWizardCh2Story],
  "noble-knight": [...nobleKnightStory, ...nobleKnightCh2Story],
  "pretty-princess": [...prettyPrincessStory, ...prettyPrincessCh2Story],
  "ranger-robot": [...rangerRobotStory, ...rangerRobotCh2Story],
  "all-friends": [...allFriendsStory],
};

export function getStoryNode(
  character: string,
  nodeId: string
): StoryNode | undefined {
  const story = allStories[character];
  if (!story) return undefined;
  return story.find((node) => node.id === nodeId);
}

export function getCharacter(id: string): CharacterInfo | undefined {
  if (id === crossoverCharacter.id) return crossoverCharacter;
  return characters.find((c) => c.id === id);
}

export function getAllNodeIds(): { character: string; nodeId: string }[] {
  const ids: { character: string; nodeId: string }[] = [];
  for (const [character, nodes] of Object.entries(allStories)) {
    for (const node of nodes) {
      ids.push({ character, nodeId: node.id });
    }
  }
  return ids;
}
