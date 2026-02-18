"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── Canvas ───────────────────────────────────────────────────────────────────
const CW = 600;
const CH = 175;
const GROUND_Y = 142;   // y of ground line (bottom of all sprites)
const CHAR_X = 72;      // fixed x position of bunny

// ── Sprite sizes (font-size px; emoji visual ≈ 85% of this) ─────────────────
const SZ = 36;          // normal horse / bunny font size
const SZ_BIG = 46;      // big horse variant

// ── Physics ──────────────────────────────────────────────────────────────────
const GRAVITY = 1.0;
const JUMP_V = -13.5;   // initial upward velocity (negative = up)
                        // peak height ≈ 13.5²/2 = 91px above ground

// ── Speed ────────────────────────────────────────────────────────────────────
const SPD_INIT = 4.5;
const SPD_MAX = 16;
const SPD_INC = 0.001;  // per frame

const LS_KEY = "wonky-wizard-clop-hopper-hi";

// ── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "playing" | "dead";

interface Obs {
  x: number;
  count: 1 | 2;   // horses side-by-side
  big: boolean;   // use larger font size
}

interface GS {
  phase: Phase;
  cy: number;         // bottom y of bunny emoji
  vy: number;
  onGround: boolean;
  obs: Obs[];
  speed: number;
  score: number;
  frame: number;
  spawnIn: number;    // frames until next obstacle
  groundX: number;    // scrolling ground texture offset
  deathFrame: number;
}

// ── State factory ─────────────────────────────────────────────────────────────
function newGS(phase: Phase = "idle"): GS {
  return {
    phase,
    cy: GROUND_Y,
    vy: 0,
    onGround: true,
    obs: [],
    speed: SPD_INIT,
    score: 0,
    frame: 0,
    spawnIn: 95,
    groundX: 0,
    deathFrame: 0,
  };
}

// ── Obstacle helpers ──────────────────────────────────────────────────────────
function obsSlotW(big: boolean) { return (big ? SZ_BIG : SZ) * 0.9; }
function obsTotalW(o: Obs)      { return o.count * obsSlotW(o.big); }
function obsH(o: Obs)           { return (o.big ? SZ_BIG : SZ) * 0.83; }

function spawnObs(score: number): Obs {
  const big:   boolean = score > 130 && Math.random() < 0.28;
  const count: 1 | 2  = score > 70  && Math.random() < 0.22 ? 2 : 1;
  return { x: CW + 10, count, big };
}

// ── Collision (generous hitboxes so near-misses feel fair) ────────────────────
function collides(gs: GS, o: Obs): boolean {
  const P = 7; // padding (shrinks hitbox)

  // Bunny box
  const cL = CHAR_X + P;
  const cR = CHAR_X + SZ - P;
  const cT = gs.cy - SZ + P * 2;   // extra top padding (emoji blank space)
  const cB = gs.cy - P;

  // Obstacle box
  const oL = o.x + P;
  const oR = o.x + obsTotalW(o) - P;
  const oT = GROUND_Y - obsH(o) + P;
  const oB = GROUND_Y - P;

  return cR > oL && cL < oR && cB > oT && cT < oB;
}

// ── Rendering (all canvas, no DOM) ────────────────────────────────────────────
function render(ctx: CanvasRenderingContext2D, gs: GS, hi: number) {
  // Background
  ctx.fillStyle = "#1a1a2e";
  ctx.fillRect(0, 0, CW, CH);

  // Ground line
  ctx.strokeStyle = "rgba(200,185,215,0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, GROUND_Y);
  ctx.lineTo(CW, GROUND_Y);
  ctx.stroke();

  // Ground texture — scrolling dashes, two rows
  ctx.fillStyle = "rgba(200,185,215,0.22)";
  for (let i = 0; i < 20; i++) {
    const x = ((i * 38 - gs.groundX) % CW + CW) % CW;
    ctx.fillRect(x,      GROUND_Y + 5, 10, 2);
    ctx.fillRect((x + 20) % CW, GROUND_Y + 9, 5,  2);
  }

  // Score — right-aligned, zero-padded, dino-game style
  ctx.save();
  ctx.textBaseline = "top";
  ctx.textAlign = "right";
  ctx.font = "bold 15px 'Fredoka', monospace";
  ctx.fillStyle = "rgba(220,205,235,0.88)";
  ctx.fillText(String(Math.floor(gs.score)).padStart(5, "0"), CW - 12, 12);
  if (hi > 0) {
    ctx.font = "11px 'Fredoka', monospace";
    ctx.fillStyle = "rgba(255,210,80,0.6)";
    ctx.fillText(`HI ${String(hi).padStart(5, "0")}`, CW - 12, 32);
  }
  ctx.restore();

  // Obstacles
  ctx.textBaseline = "bottom";
  ctx.textAlign = "center";
  for (const o of gs.obs) {
    const sz = o.big ? SZ_BIG : SZ;
    const slot = obsSlotW(o.big);
    ctx.font = `${sz}px serif`;
    for (let i = 0; i < o.count; i++) {
      ctx.fillText("🐴", o.x + sz * 0.45 + i * slot, GROUND_Y);
    }
  }

  // Bunny (player)
  ctx.font = `${SZ}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";

  if (gs.phase === "dead") {
    // Tip over sideways
    const angle = Math.min(gs.deathFrame / 16, 1) * 1.1;
    ctx.save();
    ctx.translate(CHAR_X + SZ / 2, gs.cy - SZ / 2);
    ctx.rotate(angle);
    ctx.fillText("🐰", 0, SZ / 2);
    ctx.restore();
  } else {
    ctx.fillText("🐰", CHAR_X + SZ / 2, gs.cy);
  }

  // ── Overlay screens ──────────────────────────────────────────────────────
  const showOverlay = gs.phase === "idle" || (gs.phase === "dead" && gs.deathFrame > 20);
  if (!showOverlay) return;

  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fillRect(0, 0, CW, CH);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (gs.phase === "idle") {
    ctx.font = "bold 23px 'Fredoka', sans-serif";
    ctx.fillStyle = "#e8e0f0";
    ctx.fillText("🐰  CLOP HOPPER  🐴", CW / 2, CH / 2 - 30);

    ctx.font = "14px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("Jump over the horses!", CW / 2, CH / 2 + 2);

    ctx.font = "bold 13px 'Fredoka', sans-serif";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText("SPACE  ·  ↑  ·  TAP", CW / 2, CH / 2 + 30);
  } else {
    // Dead
    ctx.font = "bold 21px 'Fredoka', sans-serif";
    ctx.fillStyle = "#e8e0f0";
    ctx.fillText("Clipped by a Clop! 🐴", CW / 2, CH / 2 - 36);

    ctx.font = "bold 19px 'Fredoka', sans-serif";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText(`Score: ${Math.floor(gs.score)}`, CW / 2, CH / 2 - 4);

    if (hi > 0 && Math.floor(gs.score) >= hi) {
      ctx.font = "bold 13px 'Fredoka', sans-serif";
      ctx.fillStyle = "#86efac";
      ctx.fillText("⭐  New best!  ⭐", CW / 2, CH / 2 + 22);
    }

    ctx.font = "13px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fillText("SPACE  ·  ↑  ·  TAP  to hop again", CW / 2, CH / 2 + 48);
  }

  ctx.restore();
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function LavaRunGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef    = useRef<GS>(newGS());
  const rafRef   = useRef<number>(0);
  const hiRef    = useRef(0);

  // Load saved high score
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) hiRef.current = parseInt(saved, 10);
    } catch {}
  }, []);

  // Jump / start / restart
  const jump = useCallback(() => {
    const gs = gsRef.current;
    if (gs.phase !== "playing") {
      gsRef.current = newGS("playing");
      return;
    }
    if (gs.onGround) {
      gs.vy = JUMP_V;
      gs.onGround = false;
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jump]);

  // Game loop — runs once, reads/writes only via refs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = () => {
      const gs = gsRef.current;

      if (gs.phase === "playing") {
        // Physics
        gs.vy += GRAVITY;
        gs.cy += gs.vy;
        if (gs.cy >= GROUND_Y) {
          gs.cy = GROUND_Y;
          gs.vy = 0;
          gs.onGround = true;
        } else {
          gs.onGround = false;
        }

        // Speed ramp & score
        gs.speed = Math.min(SPD_MAX, SPD_INIT + gs.frame * SPD_INC);
        gs.score += gs.speed * 0.05;

        // Obstacle spawning
        gs.spawnIn--;
        if (gs.spawnIn <= 0) {
          gs.obs.push(spawnObs(gs.score));
          // Gap shrinks as score grows; floor keeps it playable
          const gap = Math.max(185, 410 - gs.score * 0.27);
          gs.spawnIn = Math.floor(gap / gs.speed + Math.random() * 24);
        }

        // Move & cull
        for (const o of gs.obs) o.x -= gs.speed;
        gs.obs = gs.obs.filter(o => o.x + obsTotalW(o) > -5);

        // Ground scroll
        gs.groundX = (gs.groundX + gs.speed) % CW;

        // Collision
        let hit = false;
        for (const o of gs.obs) {
          if (collides(gs, o)) { hit = true; break; }
        }
        if (hit) {
          gs.phase = "dead";
          gs.deathFrame = 0;
          const final = Math.floor(gs.score);
          if (final > hiRef.current) {
            hiRef.current = final;
            try { localStorage.setItem(LS_KEY, String(final)); } catch {}
          }
        }

        gs.frame++;
      } else if (gs.phase === "dead") {
        gs.deathFrame++;
      }
      // idle: nothing to update

      render(ctx, gs, hiRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); // empty — all mutable state is in refs

  return (
    <main className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-start px-4 py-8">
      <div className="w-full max-w-xl mb-5 flex items-center gap-4">
        <Link
          href="/"
          className="shrink-0 rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-gray-200"
        >
          ← Back
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            🐰 Clop Hopper
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Jump over the horses — SPACE, ↑, or tap!
          </p>
        </div>
      </div>

      <div
        className="w-full max-w-xl rounded-xl overflow-hidden border border-purple-900/30 shadow-lg cursor-pointer select-none"
        style={{ aspectRatio: `${CW} / ${CH}` }}
        onClick={jump}
        onTouchStart={e => { e.preventDefault(); jump(); }}
      >
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          className="w-full h-full block"
        />
      </div>

      <p className="mt-5 text-xs text-gray-700">
        Fluffington says: &ldquo;I am NOT afraid of Clip-Clop. I live with him.&rdquo;
      </p>
    </main>
  );
}
