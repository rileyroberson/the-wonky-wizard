export interface Item {
  name: string;
  description: string;
  emoji: string;
}

export interface Skill {
  name: string;
  description: string;
  emoji: string;
}

export interface Choice {
  text: string;
  requiresItem?: string;
  requiresSkill?: string;
  nextNodeId: string;
  preview: string;
}

export interface StoryNode {
  id: string;
  character: "wonky-wizard" | "noble-knight" | "pretty-princess" | "ranger-robot";
  title: string;
  narrative: string;
  sillyMoment: string;
  itemEarned?: Item;
  skillEarned?: Skill;
  choices: [Choice, Choice] | [];
  isEnding?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  startNodeId: string;
}

export interface CharacterInfo {
  id: "wonky-wizard" | "noble-knight" | "pretty-princess" | "ranger-robot";
  name: string;
  tagline: string;
  emoji: string;
  color: string;
  startingItem: Item;
  startingSkill: Skill;
  startNodeId: string;
  chapters: Chapter[];
}

export interface GameState {
  character: string;
  currentNodeId: string;
  items: Item[];
  skills: Skill[];
}
