"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";

// ─── Canvas dimensions (logical px — CSS scales to fit) ──────────────────────
const CW = 800;
const CH = 300;
const GROUND_Y = 225;       // y of lava surface top
const CHAR_X = 95;
const CHAR_W = 58;
const CHAR_H = 70;
const CHAR_GROUND_Y = GROUND_Y - CHAR_H;

// ─── Physics & speed ─────────────────────────────────────────────────────────
const GRAVITY = 0.82;
const JUMP_FORCE = -17.5;
const INIT_SPEED = 5;
const MAX_SPEED = 20;
const SPEED_INC = 0.0014;   // added to speed each frame

const LS_KEY = "wonky-wizard-lava-run-hi";

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "playing" | "dead";

interface Obs {
  x: number;
  w: number;
  h: number;
  kind: 0 | 1 | 2; // 0 = short rock  1 = tall rock  2 = thin geyser
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  hue: number;
}

interface GS {
  phase: Phase;
  charY: number;
  vy: number;
  onGround: boolean;
  canDblJump: boolean;
  obstacles: Obs[];
  sparks: Spark[];
  speed: number;
  score: number;
  frame: number;
  spawnIn: number;
  wave: number;
  bgX: number;
  deathFrame: number;
}

// ─── Helpers (pure — defined outside component for stable refs) ───────────────

function initGS(): GS {
  return {
    phase: "idle",
    charY: CHAR_GROUND_Y,
    vy: 0,
    onGround: true,
    canDblJump: false,
    obstacles: [],
    sparks: [],
    speed: INIT_SPEED,
    score: 0,
    frame: 0,
    spawnIn: 110,
    wave: 0,
    bgX: 0,
    deathFrame: 0,
  };
}

function makeObs(score: number): Obs {
  const r = Math.random();
  let kind: 0 | 1 | 2;
  if (score < 80 || r < 0.42) kind = 0;
  else if (r < 0.78) kind = 1;
  else kind = 2;
  const specs: [number, number][] = [
    [50, 46],   // short rock
    [38, 78],   // tall rock
    [22, 100],  // thin geyser
  ];
  return { x: CW + 60, w: specs[kind][0], h: specs[kind][1], kind };
}

function hitTest(gs: GS, o: Obs): boolean {
  const pad = 10;
  const cL = CHAR_X + pad;
  const cR = CHAR_X + CHAR_W - pad;
  const cT = gs.charY + pad * 1.5;
  const cB = GROUND_Y - 2;
  const oL = o.x + 3;
  const oR = o.x + o.w - 3;
  const oT = GROUND_Y - o.h + 4;
  return cR > oL && cL < oR && cB > oT && cT < GROUND_Y;
}

// ─── Draw helpers ─────────────────────────────────────────────────────────────

const STARS: [number, number, number][] = [
  [42, 18, 1.1], [138, 40, 0.9], [245, 13, 1], [368, 55, 1.2],
  [490, 25, 0.8], [612, 48, 1], [714, 21, 1.1], [98, 78, 0.9],
  [320, 88, 1], [590, 96, 1.2], [720, 70, 0.8], [450, 8, 1],
  [780, 52, 0.9], [28, 90, 1.1], [200, 60, 0.8], [540, 35, 1],
];

function drawBg(ctx: CanvasRenderingContext2D, gs: GS) {
  // Sky gradient
  const sky = ctx.createLinearGradient(0, 0, 0, CH);
  sky.addColorStop(0, "#0b0418");
  sky.addColorStop(0.65, "#18082e");
  sky.addColorStop(1, "#320808");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, CW, CH);

  // Parallax stars
  for (const [sx, sy, r] of STARS) {
    const x = ((sx - gs.bgX * 0.05) % CW + CW) % CW;
    const flicker = 0.55 + 0.45 * Math.sin(gs.frame * 0.04 + sx * 0.1);
    ctx.fillStyle = `rgba(255,240,220,${flicker * 0.8})`;
    ctx.beginPath();
    ctx.arc(x, sy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Two scrolling volcanoes at different depths
  const v1x = ((320 - gs.bgX * 0.1) % (CW + 280) + (CW + 280)) % (CW + 280) - 140;
  const v2x = ((640 - gs.bgX * 0.07) % (CW + 200) + (CW + 200)) % (CW + 200) - 100;
  drawVolcano(ctx, v2x, GROUND_Y, gs.frame, 0.62);
  drawVolcano(ctx, v1x, GROUND_Y, gs.frame, 1);
}

function drawVolcano(
  ctx: CanvasRenderingContext2D,
  x: number,
  groundY: number,
  frame: number,
  scale: number
) {
  const h = 138 * scale;
  const w = 190 * scale;
  const alpha = 0.75 + scale * 0.25;

  // Mountain silhouette
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#1a0505";
  ctx.beginPath();
  ctx.moveTo(x - w / 2, groundY);
  ctx.lineTo(x, groundY - h);
  ctx.lineTo(x + w / 2, groundY);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Crater glow
  const glowR = (22 + Math.sin(frame * 0.05) * 7) * scale;
  const cg = ctx.createRadialGradient(x, groundY - h + 4, 0, x, groundY - h + 4, glowR * 2.2);
  cg.addColorStop(0, `rgba(255,130,0,${0.75 * scale})`);
  cg.addColorStop(0.5, `rgba(255,50,0,${0.35 * scale})`);
  cg.addColorStop(1, "rgba(255,30,0,0)");
  ctx.fillStyle = cg;
  ctx.beginPath();
  ctx.arc(x, groundY - h + 4, glowR * 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Rising ember particles
  for (let i = 0; i < 5; i++) {
    const t = (frame * 0.022 + i * 0.2) % 1;
    const px = x + Math.sin(i * 2.3 + frame * 0.035) * 14 * scale;
    const py = groundY - h - t * 65 * scale;
    const a = (1 - t) * 0.65 * scale;
    const r = Math.max(0, (4.5 - t * 4) * scale);
    if (r > 0) {
      ctx.fillStyle = `rgba(255,${110 + i * 28},0,${a})`;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawLava(ctx: CanvasRenderingContext2D, gs: GS) {
  // Glow above surface
  const glow = ctx.createLinearGradient(0, GROUND_Y - 55, 0, GROUND_Y);
  glow.addColorStop(0, "rgba(255,80,0,0)");
  glow.addColorStop(1, "rgba(255,140,0,0.2)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, GROUND_Y - 55, CW, 55);

  // Wavy lava surface
  ctx.beginPath();
  ctx.moveTo(0, GROUND_Y);
  for (let x = 0; x <= CW + 15; x += 10) {
    const y =
      GROUND_Y +
      Math.sin((x + gs.wave) / 30) * 4.5 +
      Math.sin((x + gs.wave * 0.65) / 18) * 2;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(CW, CH);
  ctx.lineTo(0, CH);
  ctx.closePath();
  const lg = ctx.createLinearGradient(0, GROUND_Y, 0, CH);
  lg.addColorStop(0, "#ff6200");
  lg.addColorStop(0.12, "#ee2d00");
  lg.addColorStop(0.5, "#9e1000");
  lg.addColorStop(1, "#5a0000");
  ctx.fillStyle = lg;
  ctx.fill();

  // Surface shimmer streaks
  ctx.save();
  ctx.globalAlpha = 0.28;
  for (let i = 0; i < 6; i++) {
    const bx = ((i * 145 + gs.wave * 0.45) % CW + CW) % CW;
    const bw = 50 + Math.sin(gs.frame * 0.06 + i) * 22;
    const sg = ctx.createLinearGradient(bx, 0, bx + bw, 0);
    sg.addColorStop(0, "rgba(255,210,80,0)");
    sg.addColorStop(0.5, "rgba(255,210,80,1)");
    sg.addColorStop(1, "rgba(255,210,80,0)");
    ctx.fillStyle = sg;
    ctx.fillRect(bx, GROUND_Y - 3, bw, 5);
  }
  ctx.restore();

  // Bubbles
  const bubbleSrc = [75, 215, 385, 555, 705];
  for (const bx of bubbleSrc) {
    const abx = ((bx - gs.wave * 0.22) % CW + CW) % CW;
    const phase = (gs.frame * 0.018 + bx / 95) % 1;
    if (phase < 0.55) {
      const r = phase * 9;
      ctx.fillStyle = `rgba(255,${145 + phase * 60},0,${0.48 - phase * 0.5})`;
      ctx.beginPath();
      ctx.arc(abx, GROUND_Y - r * 0.35, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawObs(ctx: CanvasRenderingContext2D, o: Obs) {
  const top = GROUND_Y - o.h;

  if (o.kind === 2) {
    // Geyser pillar
    const gg = ctx.createLinearGradient(o.x, 0, o.x + o.w, 0);
    gg.addColorStop(0, "#cc2200");
    gg.addColorStop(0.5, "#ff5500");
    gg.addColorStop(1, "#cc2200");
    ctx.fillStyle = gg;
    ctx.fillRect(o.x, top, o.w, o.h);

    // Top glow
    const tg = ctx.createRadialGradient(o.x + o.w / 2, top, 0, o.x + o.w / 2, top, 28);
    tg.addColorStop(0, "rgba(255,160,0,0.7)");
    tg.addColorStop(1, "rgba(255,40,0,0)");
    ctx.fillStyle = tg;
    ctx.beginPath();
    ctx.arc(o.x + o.w / 2, top, 28, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Lava rock
    const rg = ctx.createLinearGradient(o.x, top, o.x, GROUND_Y);
    rg.addColorStop(0, "#c83c00");
    rg.addColorStop(0.35, "#9e1c00");
    rg.addColorStop(1, "#5a0000");
    ctx.fillStyle = rg;

    const rad = Math.min(10, o.w / 4);
    ctx.beginPath();
    ctx.moveTo(o.x + rad, top);
    ctx.lineTo(o.x + o.w - rad, top);
    ctx.arcTo(o.x + o.w, top, o.x + o.w, top + rad, rad);
    ctx.lineTo(o.x + o.w, GROUND_Y);
    ctx.lineTo(o.x, GROUND_Y);
    ctx.arcTo(o.x, top + rad, o.x + rad, top, rad);
    ctx.closePath();
    ctx.fill();

    // Lava crack veins
    ctx.save();
    ctx.strokeStyle = "rgba(255,180,0,0.38)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(o.x + o.w * 0.28, top + 7);
    ctx.lineTo(o.x + o.w * 0.52, top + o.h * 0.44);
    ctx.lineTo(o.x + o.w * 0.72, top + 9);
    ctx.stroke();
    if (o.h > 52) {
      ctx.beginPath();
      ctx.moveTo(o.x + o.w * 0.18, top + o.h * 0.32);
      ctx.lineTo(o.x + o.w * 0.44, top + o.h * 0.68);
      ctx.stroke();
    }
    // Edge glow
    ctx.strokeStyle = "rgba(255,100,0,0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(o.x + rad, top);
    ctx.lineTo(o.x + o.w - rad, top);
    ctx.arcTo(o.x + o.w, top, o.x + o.w, top + rad, rad);
    ctx.lineTo(o.x + o.w, GROUND_Y);
    ctx.stroke();
    ctx.restore();
  }
}

function drawChar(ctx: CanvasRenderingContext2D, gs: GS) {
  const cx = CHAR_X + CHAR_W / 2;
  const bottom = gs.charY + CHAR_H;
  const f = gs.frame;

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";

  if (gs.phase === "dead") {
    const t = Math.min(gs.deathFrame / 30, 1);
    const angle = t * (Math.PI * 0.55);
    ctx.globalAlpha = Math.max(0, 1 - Math.max(0, gs.deathFrame - 35) / 20);
    ctx.translate(cx, gs.charY + CHAR_H * 0.55);
    ctx.rotate(angle);
    ctx.font = `${CHAR_H * 0.8}px serif`;
    ctx.fillText("🐎", 0, CHAR_H * 0.15);
    ctx.font = `${CHAR_H * 0.42}px serif`;
    ctx.fillText("🐰", CHAR_H * 0.08, -CHAR_H * 0.28);
  } else {
    // Horse — subtle bounce when running
    const bounce = gs.onGround ? Math.sin(f * 0.38) * 1.8 : 0;
    ctx.font = `${CHAR_H * 0.84}px serif`;
    ctx.fillText("🐎", cx, bottom + bounce);

    // Fluffington on Clip-Clop's back — wiggles independently
    const fluffBounce = gs.onGround ? Math.sin(f * 0.38 + 0.5) * 2.8 : bounce * 0.6;
    const fluffSway = gs.onGround ? Math.sin(f * 0.38) * 2 : 0;
    ctx.font = `${CHAR_H * 0.45}px serif`;
    ctx.fillText(
      "🐰",
      cx + fluffSway,
      gs.charY + CHAR_H * 0.37 + fluffBounce
    );

    // Speed-blur lines at high speed
    if (gs.speed > 12) {
      const opacity = Math.min(0.4, (gs.speed - 12) / 16);
      ctx.strokeStyle = `rgba(255,120,0,${opacity})`;
      ctx.lineWidth = 1.5;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(cx - CHAR_W * 0.6 - i * 12, gs.charY + CHAR_H * (0.3 + i * 0.15));
        ctx.lineTo(cx - CHAR_W * 0.9 - i * 12, gs.charY + CHAR_H * (0.3 + i * 0.15));
        ctx.stroke();
      }
    }
  }

  ctx.restore();
}

function drawSparks(ctx: CanvasRenderingContext2D, gs: GS) {
  for (const p of gs.sparks) {
    const a = p.life / p.maxLife;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle = `hsl(${p.hue},100%,60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * a, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawHUD(ctx: CanvasRenderingContext2D, gs: GS, hi: number) {
  ctx.save();
  ctx.textBaseline = "top";

  // BOOM PD badge (top-left)
  ctx.font = "bold 13px 'Fredoka', sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255,200,80,0.75)";
  ctx.fillText("⭐ BOOM PD", 14, 13);

  // Score (top-right)
  ctx.font = "bold 19px 'Fredoka', monospace";
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillText(`SCORE: ${Math.floor(gs.score)}`, CW - 14, 13);
  if (hi > 0) {
    ctx.font = "13px 'Fredoka', monospace";
    ctx.fillStyle = "rgba(255,200,80,0.82)";
    ctx.fillText(`BEST: ${hi}`, CW - 14, 38);
  }

  ctx.restore();
}

function drawOverlay(ctx: CanvasRenderingContext2D, gs: GS, hi: number) {
  ctx.fillStyle = "rgba(0,0,0,0.64)";
  ctx.fillRect(0, 0, CW, CH);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (gs.phase === "idle") {
    ctx.font = "bold 28px 'Fredoka', sans-serif";
    ctx.fillStyle = "#ffd700";
    ctx.fillText("🐎  CLOP & FLUFF  🐰", CW / 2, CH / 2 - 68);

    ctx.font = "bold 20px 'Fredoka', sans-serif";
    ctx.fillStyle = "#ff6600";
    ctx.fillText("THE WORLD IS LAVA!", CW / 2, CH / 2 - 30);

    ctx.font = "15px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText("Mount Boom erupted! Jump over the lava!", CW / 2, CH / 2 + 8);

    ctx.font = "bold 15px 'Fredoka', sans-serif";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText("SPACE  ·  ↑  ·  TAP  to start!", CW / 2, CH / 2 + 46);

    ctx.font = "12px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,180,80,0.6)";
    ctx.fillText("(double-jump for tall ones!)", CW / 2, CH / 2 + 70);
  } else {
    // Dead
    ctx.font = "bold 30px 'Fredoka', sans-serif";
    ctx.fillStyle = "#ff4400";
    ctx.fillText("LAVA WINS... FOR NOW 🌋", CW / 2, CH / 2 - 72);

    ctx.font = "15px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText("The lava got Clip-Clop's hooves!", CW / 2, CH / 2 - 36);
    ctx.fillText("Fluffington is EXTREMELY unimpressed.", CW / 2, CH / 2 - 14);

    ctx.font = "bold 24px 'Fredoka', sans-serif";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText(`Score: ${Math.floor(gs.score)}`, CW / 2, CH / 2 + 22);

    const final = Math.floor(gs.score);
    if (hi > 0 && final >= hi) {
      ctx.font = "bold 16px 'Fredoka', sans-serif";
      ctx.fillStyle = "#86efac";
      ctx.fillText("⭐ NEW BEST SCORE! ⭐", CW / 2, CH / 2 + 54);
    } else if (hi > 0) {
      ctx.font = "13px 'Fredoka', sans-serif";
      ctx.fillStyle = "rgba(255,200,80,0.8)";
      ctx.fillText(`Best: ${hi}`, CW / 2, CH / 2 + 54);
    }

    ctx.font = "bold 15px 'Fredoka', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("SPACE · ↑ · TAP to try again!", CW / 2, CH / 2 + 84);
  }

  ctx.restore();
}

function renderFrame(ctx: CanvasRenderingContext2D, gs: GS, hi: number) {
  ctx.clearRect(0, 0, CW, CH);
  drawBg(ctx, gs);
  drawLava(ctx, gs);
  drawSparks(ctx, gs);
  for (const o of gs.obstacles) drawObs(ctx, o);
  drawChar(ctx, gs);
  drawHUD(ctx, gs, hi);

  // Death flash
  if (gs.phase === "dead" && gs.deathFrame < 12) {
    const a = ((12 - gs.deathFrame) / 12) * 0.6;
    ctx.fillStyle = `rgba(255,70,0,${a})`;
    ctx.fillRect(0, 0, CW, CH);
  }

  // Overlay (idle start screen or death screen — delayed slightly after death)
  if (gs.phase === "idle" || (gs.phase === "dead" && gs.deathFrame > 28)) {
    drawOverlay(ctx, gs, hi);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function LavaRunGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(initGS());
  const rafRef = useRef<number>(0);
  const hiRef = useRef(0);

  const [dispPhase, setDispPhase] = useState<Phase>("idle");
  const [dispScore, setDispScore] = useState(0);
  const [dispHi, setDispHi] = useState(0);

  // Load high score once
  useEffect(() => {
    try {
      const s = localStorage.getItem(LS_KEY);
      if (s) {
        const n = parseInt(s, 10);
        hiRef.current = n;
        setDispHi(n);
      }
    } catch {}
  }, []);

  const doJump = useCallback(() => {
    const gs = gsRef.current;
    if (gs.phase === "idle" || gs.phase === "dead") {
      // Start / restart
      const fresh = initGS();
      fresh.phase = "playing";
      gsRef.current = fresh;
      setDispPhase("playing");
      setDispScore(0);
      return;
    }
    if (gs.onGround) {
      gs.vy = JUMP_FORCE;
      gs.onGround = false;
      gs.canDblJump = true;
    } else if (gs.canDblJump) {
      gs.vy = JUMP_FORCE * 0.82;
      gs.canDblJump = false;
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        doJump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doJump]);

  // Game loop (runs once; reads all state via refs)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = () => {
      const gs = gsRef.current;

      if (gs.phase === "playing") {
        // ── Physics ──────────────────────────────────────────────────────────
        gs.vy += GRAVITY;
        gs.charY += gs.vy;
        if (gs.charY >= CHAR_GROUND_Y) {
          gs.charY = CHAR_GROUND_Y;
          gs.vy = 0;
          gs.onGround = true;
          gs.canDblJump = false;
        } else {
          gs.onGround = false;
        }

        // ── Speed & score ────────────────────────────────────────────────────
        gs.speed = Math.min(MAX_SPEED, INIT_SPEED + gs.frame * SPEED_INC);
        gs.score += gs.speed * 0.06;

        // ── Obstacle spawning ────────────────────────────────────────────────
        gs.spawnIn--;
        if (gs.spawnIn <= 0) {
          gs.obstacles.push(makeObs(gs.score));
          const gap = Math.max(200, 430 - gs.score * 0.32);
          gs.spawnIn = Math.floor(gap / gs.speed + Math.random() * 28);
        }

        // Move & cull
        for (const o of gs.obstacles) o.x -= gs.speed;
        gs.obstacles = gs.obstacles.filter((o) => o.x + o.w > -10);

        // Ambient sparks near nearby obstacles
        if (gs.frame % 9 === 0) {
          for (const o of gs.obstacles) {
            if (o.x > -20 && o.x < CW) {
              gs.sparks.push({
                x: o.x + o.w * (0.2 + Math.random() * 0.6),
                y: GROUND_Y - o.h * (0.6 + Math.random() * 0.3),
                vx: (Math.random() - 0.5) * 1.8,
                vy: -Math.random() * 1.8 - 0.4,
                life: 22,
                maxLife: 22,
                r: 2.5 + Math.random() * 2,
                hue: 15 + Math.random() * 25,
              });
            }
          }
        }

        // Update sparks (mutate in place)
        for (const p of gs.sparks) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.12;
          p.life--;
        }
        gs.sparks = gs.sparks.filter((p) => p.life > 0);

        // ── Collision ────────────────────────────────────────────────────────
        let hit = false;
        for (const o of gs.obstacles) {
          if (hitTest(gs, o)) { hit = true; break; }
        }

        if (hit) {
          gs.phase = "dead";
          gs.deathFrame = 0;
          const final = Math.floor(gs.score);
          setDispScore(final);
          setDispPhase("dead");

          if (final > hiRef.current) {
            hiRef.current = final;
            setDispHi(final);
            try { localStorage.setItem(LS_KEY, String(final)); } catch {}
          }

          // Burst of death sparks
          for (let i = 0; i < 24; i++) {
            gs.sparks.push({
              x: CHAR_X + CHAR_W / 2,
              y: gs.charY + CHAR_H / 2,
              vx: (Math.random() - 0.5) * 9,
              vy: -Math.random() * 9 - 2,
              life: 35,
              maxLife: 35,
              r: 5 + Math.random() * 5,
              hue: 10 + Math.random() * 40,
            });
          }
        }

        gs.wave += 2.2;
        gs.bgX += gs.speed * 0.24;
        gs.frame++;
      } else if (gs.phase === "dead") {
        gs.deathFrame++;
        gs.wave += 1;
        for (const p of gs.sparks) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.18;
          p.life--;
        }
        gs.sparks = gs.sparks.filter((p) => p.life > 0);
      } else {
        // Idle — gentle ambient animation
        gs.wave += 0.9;
        gs.bgX += 0.35;
        gs.frame++;
      }

      renderFrame(ctx, gs, hiRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []); // empty — all state via refs

  return (
    <main className="min-h-screen bg-[#0b0418] flex flex-col items-center justify-start px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-3xl mb-5 flex items-center gap-4">
        <Link
          href="/"
          className="shrink-0 rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-gray-200"
        >
          ← Back
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-300">
            Clop &amp; Fluff: The World is Lava
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Mount Boom erupted! Jump with SPACE, ↑, or tap · Double-jump for tall ones!
          </p>
        </div>
      </div>

      {/* Canvas */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-orange-950/60 border border-orange-900/30 cursor-pointer select-none"
        style={{ aspectRatio: `${CW} / ${CH}` }}
        onClick={doJump}
        onTouchStart={(e) => { e.preventDefault(); doJump(); }}
      >
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          className="w-full h-full block"
        />
      </div>

      {/* Score display below canvas */}
      <div className="mt-5 flex gap-10 text-center">
        <div>
          <p className="text-xs text-gray-600 uppercase tracking-widest">Score</p>
          <p className="text-3xl font-bold text-orange-400">
            {dispPhase === "playing" ? "—" : dispScore}
          </p>
        </div>
        {dispHi > 0 && (
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest">Best</p>
            <p className="text-3xl font-bold text-yellow-400">{dispHi}</p>
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-gray-700">
        Clip-Clop says: &ldquo;I am not scared of lava. This is a MEDICAL CONDITION.&rdquo;
      </p>
    </main>
  );
}
