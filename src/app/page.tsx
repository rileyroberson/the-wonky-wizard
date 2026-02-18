"use client";

import { useRouter } from "next/navigation";
import { characters, crossoverCharacter, clopAndFluffCharacter, getCharacter } from "@/lib/storyData";
import { getAnyProgress } from "@/lib/progress";
import { addItem, addSkill } from "@/lib/inventory";
import { saveProgress } from "@/lib/progress";
import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from "react";
import { CharacterInfo } from "@/lib/types";

export default function HomePage() {
  const router = useRouter();
  const [savedProgress, setSavedProgress] = useState<{
    character: string;
    currentNodeId: string;
  } | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterInfo | null>(null);

  useEffect(() => {
    setSavedProgress(getAnyProgress());
  }, []);

  function startChapter(characterId: string, startNodeId: string) {
    const character = getCharacter(characterId);
    if (!character) return;
    addItem(characterId, character.startingItem);
    addSkill(characterId, character.startingSkill);
    saveProgress(characterId, startNodeId);
    router.push(`/story/${characterId}/${startNodeId}`);
  }

  function continueAdventure() {
    if (savedProgress) {
      router.push(
        `/story/${savedProgress.character}/${savedProgress.currentNodeId}`
      );
    }
  }

  // Chapter selection screen
  if (selectedCharacter) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <button
          onClick={() => setSelectedCharacter(null)}
          className="mb-8 rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-gray-200"
        >
          &larr; Back to Characters
        </button>

        <div className="mb-8 text-center">
          <div className="text-7xl mb-4 animate-float">{selectedCharacter.emoji}</div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {selectedCharacter.name}
          </h2>
          <p className="mt-2 text-xl text-gray-400">{selectedCharacter.tagline}</p>
        </div>

        <div className="flex flex-col gap-4">
          {selectedCharacter.chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => startChapter(selectedCharacter.id, chapter.startNodeId)}
              className={`group w-full rounded-2xl bg-gradient-to-r ${selectedCharacter.color} p-1 text-left shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]`}
            >
              <div className="rounded-[0.9rem] bg-gray-900/90 px-6 py-5">
                <p className="text-2xl font-bold text-gray-100">{chapter.name}</p>
                <div className="mt-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 py-2 text-center text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Start Adventure!
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
          The Wonky Wizard
        </h1>
        <p className="text-2xl text-gray-400">
          Pick your hero and start your bedtime story!
        </p>
        <div className="mt-2 text-4xl">
          <span className="animate-sparkle inline-block">✨</span>
          <span className="animate-sparkle inline-block" style={{ animationDelay: "0.3s" }}>🌟</span>
          <span className="animate-sparkle inline-block" style={{ animationDelay: "0.6s" }}>✨</span>
        </div>
      </div>

      {savedProgress && (
        <div className="mb-8 text-center">
          <button
            onClick={continueAdventure}
            className="rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Continue Your Story!
          </button>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => setSelectedCharacter(char)}
          />
        ))}
      </div>

      {/* Crossover Special */}
      <div className="mt-12">
        <div className="mb-6 text-center">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400">
            Crossover Special
          </p>
        </div>
        <div className="mx-auto max-w-sm">
          <CharacterCard
            character={crossoverCharacter}
            onClick={() => setSelectedCharacter(crossoverCharacter)}
          />
        </div>
      </div>

      {/* Clop & Fluff */}
      <div className="mt-10">
        <div className="mb-6 text-center">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
            Clop &amp; Fluff
          </p>
          <p className="mt-1 text-sm text-gray-500">A Boom PD Mystery</p>
        </div>
        <div className="mx-auto max-w-sm">
          <CharacterCard
            character={clopAndFluffCharacter}
            onClick={() => setSelectedCharacter(clopAndFluffCharacter)}
          />
        </div>
      </div>

      {/* Game Center */}
      <div className="mt-10">
        <div className="mb-6 text-center">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Game Center
          </p>
          <p className="mt-1 text-sm text-gray-500">🎮 An endless hopper game</p>
        </div>
        <div className="mx-auto max-w-sm">
          <button
            onClick={() => router.push("/lava-run")}
            className="group w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-1 text-left shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/40 active:scale-[0.98]"
          >
            <div className="rounded-[0.9rem] bg-gray-900/92 px-6 py-7">
              <div className="text-5xl mb-3">🐰🐴</div>
              <p className="text-xl font-bold text-gray-100">Clop Hopper</p>
              <p className="mt-1 text-sm text-gray-400">
                Fluffington has to jump over Clip-Clop. Don&apos;t ask why. Just hop.
              </p>
              <div className="mt-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 py-2 text-center text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                🎮 Play Now!
              </div>
            </div>
          </button>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-600">
        <p>A bedtime story adventure 🌙</p>
        <p className="mt-3">
          <a
            href="https://rileyroberson.github.io/the-sword-of-rancor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-400 transition-colors text-xs"
          >
            Play &ldquo;The Sword of Rancor&rdquo; ⚔️
          </a>
        </p>
      </footer>
    </main>
  );
}
