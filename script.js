"use strict";

/* ──────────────────────────────────────────────
   LOADER
   ────────────────────────────────────────────── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("fade-out"), 2000);
});

/* ──────────────────────────────────────────────
   WORD / SENTENCE POOLS
   ────────────────────────────────────────────── */
const POOLS = {
  words: {
    easy: [
      "the",
      "and",
      "for",
      "are",
      "but",
      "not",
      "you",
      "all",
      "can",
      "her",
      "was",
      "one",
      "our",
      "out",
      "day",
      "get",
      "has",
      "him",
      "his",
      "how",
      "its",
      "new",
      "now",
      "old",
      "see",
      "two",
      "way",
      "who",
      "boy",
      "did",
      "man",
      "put",
      "say",
      "she",
      "too",
      "use",
      "cat",
      "dog",
      "run",
      "sun",
      "fun",
      "big",
      "red",
      "hot",
      "hat",
      "bat",
      "sit",
      "fit",
      "map",
      "tap",
      "cup",
      "bus",
      "job",
      "mix",
      "box",
      "fix",
      "fox",
      "pop",
      "top",
      "tip",
      "let",
      "set",
      "net",
      "ten",
      "pen",
    ],
    medium: [
      "about",
      "above",
      "after",
      "again",
      "along",
      "among",
      "being",
      "below",
      "between",
      "could",
      "every",
      "first",
      "found",
      "great",
      "house",
      "large",
      "later",
      "light",
      "might",
      "never",
      "often",
      "other",
      "place",
      "quite",
      "right",
      "small",
      "their",
      "these",
      "think",
      "those",
      "three",
      "under",
      "until",
      "while",
      "world",
      "would",
      "write",
      "years",
      "young",
      "black",
      "bring",
      "child",
      "earth",
      "eight",
      "given",
      "heart",
      "learn",
      "point",
      "power",
      "stand",
      "start",
      "story",
      "study",
      "table",
      "thing",
      "water",
    ],
    hard: [
      "acknowledge",
      "approximately",
      "circumstances",
      "collaboration",
      "communication",
      "comprehensive",
      "contemporary",
      "controversial",
      "demonstration",
      "discrepancy",
      "establishment",
      "extraordinary",
      "functionality",
      "fundamentally",
      "implementation",
      "infrastructure",
      "interpretation",
      "investigation",
      "knowledgeable",
      "manifestation",
      "misappropriate",
      "miscommunicate",
      "nondisclosure",
      "overwhelming",
      "parliamentary",
      "perpendicular",
      "philosophical",
      "preoccupation",
      "prioritization",
      "significantly",
      "straightforward",
      "subconsciously",
      "technological",
      "transformation",
      "unprecedented",
      "vulnerability",
      "authorization",
      "characteristic",
      "cryptocurrency",
      "deterioration",
    ],
  },
  sentences: {
    easy: [
      "The quick brown fox jumps over the lazy dog.",
      "Pack my box with five dozen liquor jugs.",
      "How vexingly quick daft zebras jump!",
      "The five boxing wizards jump quickly.",
      "Sphinx of black quartz, judge my vow.",
      "Two driven jocks help fax my big quiz.",
      "The cat sat on the mat by the hat.",
      "She sells seashells by the seashore.",
      "A big black bear sat on a big black rug.",
    ],
    medium: [
      "Programming is the art of telling another human what one wants the computer to do.",
      "Any fool can write code that a computer can understand. Good code is its own best documentation.",
      "The best way to predict the future is to implement it yourself, one commit at a time.",
      "Simplicity is the soul of efficiency in all software design and engineering.",
      "First, solve the problem. Then, write the code. Never conflate the two steps.",
      "Code never lies, comments sometimes do, and documentation often misleads developers.",
      "In theory there is no difference between theory and practice. In practice there is.",
    ],
    hard: [
      "The implementation of asynchronous programming paradigms necessitates comprehensive understanding of event-driven architectures.",
      "Cryptographic algorithms rely fundamentally on mathematical properties that make certain computational problems intractable.",
      "Distributed systems introduce fascinating challenges around consistency, availability, and partition tolerance that require careful design.",
      "Refactoring legacy codebases requires extraordinary patience and meticulously crafted regression test suites.",
      "The philosophical implications of artificial general intelligence challenge our fundamental understanding of consciousness itself.",
      "Microservices architecture introduces operational complexity while simultaneously improving scalability and deployment flexibility.",
      "Comprehensive performance optimization requires careful profiling, rigorous benchmarking, and iterative refinement of all critical bottlenecks.",
    ],
  },
  numbers: {
    easy: [
      "1 2 3 4 5 6 7 8 9 0",
      "10 20 30 40 50",
      "100 200 300 400",
      "1234 5678 9012",
    ],
    medium: [
      "3.14159 2.71828 1.41421",
      "42 137 256 512 1024",
      "9999 1111 3333 7777",
    ],
    hard: [
      "3.14159265358979 2.71828182845905",
      "1024 2048 4096 8192 16384 32768",
      "0.333333 0.666666 1.000000 1.333333",
      "65536 131072 262144 524288",
    ],
  },
  code: {
    easy: [
      "let x = 42;",
      "const arr = [];",
      "if (x > 0) {}",
      "for (let i = 0; i < 10; i++)",
      "return null;",
      "console.log(x);",
      "function fn() {}",
      "const obj = {};",
      "x += 1;",
      "arr.push(x);",
    ],
    medium: [
      "const sum = (a, b) => a + b;",
      "arr.filter(x => x > 0).map(x => x * 2)",
      "async function fetchData(url) { return await fetch(url); }",
      "const { name, age } = person;",
      "Object.keys(obj).forEach(key => console.log(key, obj[key]));",
      "try { JSON.parse(data); } catch (e) { console.error(e); }",
      "const promise = new Promise((resolve, reject) => {});",
    ],
    hard: [
      "const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key); }; };",
      "function* fibonacci() { let [a, b] = [0, 1]; while (true) { yield a; [a, b] = [b, a + b]; } }",
      "const debounce = (fn, delay) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; };",
      "type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };",
    ],
  },
};

const CUSTOM_PRESETS = {
  lorem:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pangrams:
    "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow.",
  zen: "The present moment is the only moment available to us, and it is the door to all moments. In the middle of difficulty lies opportunity. Be yourself; everyone else is already taken. It does not matter how slowly you go as long as you do not stop.",
  code: "const fetchUser = async (id) => {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error('Not found');\n    return await res.json();\n  } catch (err) {\n    console.error('Failed:', err);\n    return null;\n  }\n};",
};

const TRAIN_MODULES = {
  homerow: {
    title: "HOME ROW DRILL",
    words: [
      "asdfjkl;",
      "asdf",
      "jkl;",
      "fjdk",
      "slaf",
      "dkal",
      "fjsl",
      "afjk",
      "lads",
      "flask",
      "glad",
      "lass",
      "fall",
      "hall",
      "lash",
    ],
  },
  common: {
    title: "COMMON WORDS",
    words: [
      "the",
      "of",
      "and",
      "to",
      "a",
      "in",
      "is",
      "it",
      "you",
      "that",
      "he",
      "was",
      "for",
      "on",
      "are",
      "with",
      "as",
      "his",
      "they",
      "at",
      "be",
      "this",
      "have",
      "from",
      "or",
      "had",
      "by",
      "but",
      "not",
      "what",
      "all",
      "were",
      "we",
      "when",
      "your",
      "can",
      "said",
      "there",
      "use",
      "each",
      "which",
      "she",
      "do",
      "how",
      "their",
      "if",
      "will",
      "up",
      "other",
      "about",
    ],
  },
  symbols: {
    title: "SYMBOL MASTER",
    words: [
      "!@#$",
      "%^&*",
      "()[]",
      "{}|",
      "<>?/",
      "+=_-",
      ".,;:",
      "\"'\\",
      "~`",
      "!?,.",
      "#$%",
      "@&*",
    ],
  },
  numbers: {
    title: "NUMBER NINJA",
    words: [
      "1234",
      "5678",
      "9012",
      "3456",
      "7890",
      "11223344",
      "99887766",
      "12345",
      "67890",
      "13579",
      "24680",
    ],
  },
  speed: {
    title: "SPEED BURST",
    words: [
      "go",
      "run",
      "fly",
      "zip",
      "hit",
      "zap",
      "pop",
      "hop",
      "tap",
      "spin",
      "dash",
      "rush",
      "bolt",
      "zoom",
      "race",
    ],
  },
  accuracy: {
    title: "SNIPER MODE",
    words: [
      "rhythm",
      "syzygy",
      "crypts",
      "glyph",
      "nymph",
      "pygmy",
      "lymph",
      "tryst",
      "crypt",
      "myths",
      "lynch",
      "flyby",
      "psych",
      "pygmy",
      "wryly",
    ],
  },
};

/* ──────────────────────────────────────────────
   STATE
   ────────────────────────────────────────────── */
const state = {
  mode: "words",
  difficulty: "easy",
  duration: 30,
  testRunning: false,
  testStarted: false,
  timer: null,
  timeLeft: 30,
  chars: [],
  charResults: [],
  currentIndex: 0,
  errors: 0,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  streak: 0,
  bestStreak: 0,
  wpmHistory: [],
  startTime: null,
  customText: "",
  usingCustom: false,

  trainModule: null,
  trainWords: [],
  trainIndex: 0,
  trainScore: 0,
  trainStreak: 0,

  history: JSON.parse(localStorage.getItem("typex_history") || "[]"),
  keyHeatmap: JSON.parse(localStorage.getItem("typex_heatmap") || "{}"),
};

/* ──────────────────────────────────────────────
   UTILITIES
   ────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const qs = (sel) => document.querySelector(sel);
const isMobile = () =>
  window.matchMedia("(max-width: 700px)").matches || "ontouchstart" in window;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateText(mode, difficulty, count = 70) {
  if (mode === "custom" && state.customText.trim().length >= 20) {
    return state.customText.trim().split("");
  }
  const pool = POOLS[mode] ? POOLS[mode][difficulty] : POOLS.words[difficulty];
  if (!pool) return [];
  if (mode === "sentences") {
    const sentences = shuffle(pool);
    let chars = [];
    for (const s of sentences) {
      if (chars.length > 0) chars.push(" ");
      chars.push(...s.split(""));
      if (chars.length >= count + 20) break;
    }
    return chars;
  }
  const words = [];
  while (words.length < count) words.push(...shuffle(pool));
  return words.slice(0, count).join(" ").split("");
}

function calcWPM(correct, seconds) {
  if (seconds < 1) return 0;
  return Math.round(correct / 5 / (seconds / 60));
}

function gradeWPM(wpm, acc) {
  if (wpm >= 120 && acc >= 98) return "S";
  if (wpm >= 90 && acc >= 95) return "A";
  if (wpm >= 70 && acc >= 90) return "B";
  if (wpm >= 50 && acc >= 85) return "C";
  if (wpm >= 30 && acc >= 75) return "D";
  return "F";
}

function calcConsistency(history) {
  if (history.length < 3) return 100;
  const wpms = history.map((h) => h.wpm);
  const mean = wpms.reduce((a, b) => a + b, 0) / wpms.length;
  const variance =
    wpms.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / wpms.length;
  const stddev = Math.sqrt(variance);
  return Math.max(0, Math.round(100 - (stddev / mean) * 100));
}

function toast(msg, type = "") {
  const el = $("toast");
  el.textContent = msg;
  el.className = "toast show " + type;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2600);
}

function saveHistory(entry) {
  state.history.unshift(entry);
  if (state.history.length > 50) state.history.length = 50;
  localStorage.setItem("typex_history", JSON.stringify(state.history));
}

/* ──────────────────────────────────────────────
   ANIMATED BACKGROUND CANVAS
   ────────────────────────────────────────────── */
(function initBgCanvas() {
  const canvas = $("bgCanvas");
  const ctx = canvas.getContext("2d");
  let W, H, nodes;
  const COUNT = 40;
  const COLORS = [
    "rgba(168,255,62,",
    "rgba(56,189,248,",
    "rgba(255,93,93,",
    "rgba(167,139,250,",
  ];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function init() {
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.4 + 0.1,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(168,255,62,${0.04 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    nodes.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();
  init();
  draw();
  window.addEventListener("resize", () => {
    resize();
    init();
  });
})();

/* ──────────────────────────────────────────────
   PARTICLE BURST
   ────────────────────────────────────────────── */
function spawnBurst(x, y, correct) {
  const container = $("particleBurst");
  const color = correct ? "#a8ff3e" : "#ff5d5d";
  const count = correct ? 4 : 6;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "burst-particle";
    const angle = ((Math.PI * 2) / count) * i + Math.random() * 0.5;
    const dist = 20 + Math.random() * 25;
    el.style.cssText = `left:${x}px;top:${y}px;background:${color};--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;box-shadow:0 0 4px ${color};`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 650);
  }
}

/* ──────────────────────────────────────────────
   TIMER RING
   ────────────────────────────────────────────── */
function updateTimerRing() {
  const ring = $("timerRing");
  const numEl = $("timerDisplay");
  const pct = state.timeLeft / state.duration;
  ring.style.strokeDashoffset = 113.1 * (1 - pct);
  if (state.timeLeft <= 5) {
    ring.classList.add("ring-warn");
    numEl.classList.add("warn");
  } else {
    ring.classList.remove("ring-warn");
    numEl.classList.remove("warn");
  }
}

/* ──────────────────────────────────────────────
   LIVE WPM GRAPH
   ────────────────────────────────────────────── */
function drawLiveGraph() {
  const canvas = $("liveWpmCanvas");
  if (!canvas) return;
  const wrap = $("liveGraphWrap");
  if (state.wpmHistory.length >= 2) wrap.classList.remove("hidden");

  const W = canvas.parentElement.clientWidth || 300;
  const H = parseInt(canvas.getAttribute("height")) || 48;
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, W, H);

  const data = state.wpmHistory.map((d) => d.wpm);
  if (data.length < 2) return;

  const max = Math.max(...data, 10);
  const step = W / Math.max(data.length - 1, 1);
  const PAD = 4;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(168,255,62,0.25)");
  grad.addColorStop(1, "rgba(168,255,62,0)");

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - PAD - (v / max) * (H - PAD * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((data.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - PAD - (v / max) * (H - PAD * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a8ff3e";
  ctx.lineWidth = 1.5;
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 6;
  ctx.stroke();
  ctx.shadowBlur = 0;

  const lastV = data[data.length - 1];
  const lastX = (data.length - 1) * step;
  const lastY = H - PAD - (lastV / max) * (H - PAD * 2);
  ctx.beginPath();
  ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
  ctx.fillStyle = "#a8ff3e";
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.shadowBlur = 0;

  const labelX = Math.min(lastX + 7, W - 30);
  ctx.fillStyle = "rgba(168,255,62,0.85)";
  ctx.font = "10px JetBrains Mono";
  ctx.textAlign = "left";
  ctx.fillText(lastV, labelX, lastY + 4);

  if (typeof focusActive !== "undefined" && focusActive) drawFocusGraph();
}

/* ──────────────────────────────────────────────
   TAB NAVIGATION
   ────────────────────────────────────────────── */
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    $("tab-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "stats") renderStats();
    if (btn.dataset.tab === "daily") renderDailyChallenge();
  });
});

/* ──────────────────────────────────────────────
   CHIP GROUPS
   ────────────────────────────────────────────── */
function setupChipGroup(groupId, stateKey, callback) {
  $(groupId)
    .querySelectorAll(".chip")
    .forEach((chip) => {
      chip.addEventListener("click", () => {
        $(groupId)
          .querySelectorAll(".chip")
          .forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        state[stateKey] = chip.dataset.val;
        if (callback) callback(chip.dataset.val);
        if (state.testStarted) stopTest(false);
        resetTest();
      });
    });
}

setupChipGroup("durationGroup", "duration", (val) => {
  state.duration = parseInt(val, 10);
});
setupChipGroup("modeGroup", "mode", (val) => {
  if (val === "custom") {
    $("customPanel").classList.remove("hidden");
  } else {
    $("customPanel").classList.add("hidden");
    state.usingCustom = false;
  }
  updateArenaModeTag();
});
setupChipGroup("diffGroup", "difficulty");

/* ──────────────────────────────────────────────
   CUSTOM TEXT
   ────────────────────────────────────────────── */
$("customTextInput").addEventListener("input", (e) => {
  $("customCharCount").textContent = `${e.target.value.length} chars`;
});
$("applyCustomBtn").addEventListener("click", () => {
  const text = $("customTextInput").value.trim();
  if (text.length < 20) {
    toast("Need at least 20 characters!", "error");
    return;
  }
  state.customText = text;
  state.usingCustom = true;
  toast(`✓ Custom text loaded — ${text.length} chars`, "success");
  resetTest();
});
$("clearCustomBtn").addEventListener("click", () => {
  $("customTextInput").value = "";
  $("customCharCount").textContent = "0 chars";
  state.customText = "";
  state.usingCustom = false;
});
document.querySelectorAll(".preset-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const preset = CUSTOM_PRESETS[btn.dataset.preset];
    if (preset) {
      $("customTextInput").value = preset;
      $("customCharCount").textContent = `${preset.length} chars`;
    }
  });
});
function updateArenaModeTag() {
  const modeLabel =
    state.mode === "custom" ? "CUSTOM" : state.mode.toUpperCase();
  $("arenaModeTag").textContent =
    `${modeLabel} · ${state.difficulty.toUpperCase()}`;
}

/* ──────────────────────────────────────────────
   WORDS DISPLAY RENDERING
   ────────────────────────────────────────────── */
function renderWords() {
  const display = $("wordsDisplay");
  display.innerHTML = "";
  state.chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.dataset.index = i;
    if (i < state.currentIndex) {
      span.classList.add(state.charResults[i] ? "correct" : "wrong");
    } else if (i === state.currentIndex) {
      span.classList.add("current");
    }
    display.appendChild(span);
  });
}

function updateCharAt(index, correct) {
  const span = qs(`#wordsDisplay [data-index="${index}"]`);
  if (!span) return;
  span.classList.remove("current", "correct", "wrong");
  span.classList.add(correct ? "correct" : "wrong");
  const next = qs(`#wordsDisplay [data-index="${index + 1}"]`);
  if (next) {
    next.classList.add("current");
    scrollToCursor(next);
  }

  if (!isMobile()) {
    const rect = span.getBoundingClientRect();
    spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, correct);
  }
  if (typeof focusActive !== "undefined" && focusActive)
    updateFocusCharAt(index, correct);
}

function scrollToCursor(el) {
  const display = $("wordsDisplay");
  const elBottom = el.offsetTop + el.offsetHeight;
  if (elBottom > display.scrollTop + display.clientHeight) {
    display.scrollTop = el.offsetTop - display.clientHeight / 2;
  }
}

function updateWordEcho() {
  let start = state.currentIndex;
  while (start > 0 && state.chars[start - 1] !== " ") start--;
  const typed = state.chars.slice(start, state.currentIndex).join("");
  $("currentWordEcho").textContent = typed || "";
}

/* ──────────────────────────────────────────────
   TEST INIT / RESET
   ────────────────────────────────────────────── */
function resetTest() {
  stopTest(false);
  updateArenaModeTag();

  state.chars = generateText(state.mode, state.difficulty, 80);
  state.charResults = new Array(state.chars.length).fill(null);
  state.currentIndex = 0;
  state.errors = 0;
  state.totalKeystrokes = 0;
  state.correctKeystrokes = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.timeLeft = state.duration;
  state.wpmHistory = [];
  state.testStarted = false;
  state.testRunning = false;

  renderWords();
  updateLiveStats();
  updateTimerRing();

  $("progressBar").style.width = "0%";
  $("progressPct").textContent = "0%";
  $("arenaHint").textContent = isMobile()
    ? "tap to begin"
    : "start typing to begin";
  $("arenaHint").style.display = "";
  $("resultsOverlay").classList.add("hidden");
  $("startBtn").textContent = "▶ START";
  $("arena").classList.remove("active-typing");
  $("currentWordEcho").textContent = "";

  $("liveGraphWrap").classList.add("hidden");
  const lc = $("liveWpmCanvas");
  if (lc) {
    const ctx = lc.getContext("2d");
    ctx.clearRect(0, 0, lc.width, lc.height);
  }

  $("timerRing").style.strokeDashoffset = "0";
  $("timerDisplay").textContent = state.duration;
  $("timerRing").classList.remove("ring-warn");
  $("timerDisplay").classList.remove("warn");

  if (typeof focusActive !== "undefined" && focusActive) {
    renderFocusWords();
    syncFocusHUD();
    $("focusProgressBar").style.width = "0%";
    $("focusGraphWrap").classList.add("hidden");
    $("focusArena").classList.remove("active-typing");
  }
}

/* ──────────────────────────────────────────────
   START / STOP / END
   ────────────────────────────────────────────── */
function startTest() {
  if (state.testRunning) return;
  state.testRunning = true;
  state.testStarted = true;
  state.startTime = Date.now();

  $("arenaHint").style.display = "none";
  $("startBtn").textContent = "■ RUNNING";
  $("arena").classList.add("active-typing");
  if (typeof focusActive !== "undefined" && focusActive) {
    $("focusArena").classList.add("active-typing");
  }

  if (isMobile()) {
    const mi = $("mobileInput");
    mi.style.pointerEvents = "auto";
    mi.focus({ preventScroll: true });
  }

  state.timer = setInterval(tickTimer, 1000);
}

function tickTimer() {
  state.timeLeft--;
  const elapsed = (Date.now() - state.startTime) / 1000;
  const wpm = calcWPM(state.correctKeystrokes, elapsed);
  state.wpmHistory.push({ t: Math.round(elapsed), wpm });

  updateLiveStats();
  updateTimerRing();
  drawLiveGraph();

  if (state.timeLeft <= 0) endTest();
}

function stopTest(running) {
  clearInterval(state.timer);
  state.testRunning = running;
  if (!running) {
    const mi = $("mobileInput");
    mi.style.pointerEvents = "none";
    mi.blur();
  }
}

function endTest() {
  stopTest(false);
  $("arena").classList.remove("active-typing");
  if (typeof focusActive !== "undefined")
    $("focusArena").classList.remove("active-typing");
  if (focusActive) exitFocusMode();

  const elapsed = state.duration;
  const wpm = calcWPM(state.correctKeystrokes, elapsed);
  const rawWpm = calcWPM(state.totalKeystrokes, elapsed);
  const acc =
    state.totalKeystrokes > 0
      ? Math.round((state.correctKeystrokes / state.totalKeystrokes) * 100)
      : 100;
  const grade = gradeWPM(wpm, acc);
  const consistency = calcConsistency(state.wpmHistory);

  $("resWpmBig").textContent = "0";
  $("resultsGrade").textContent = grade;
  $("res-acc").textContent = acc + "%";
  $("res-raw").textContent = rawWpm;
  $("res-chars").textContent = state.correctKeystrokes;
  $("res-errors").textContent = state.errors;
  $("res-streak").textContent = state.bestStreak;
  $("res-consistency").textContent = consistency + "%";
  $("resultsOverlay").classList.remove("hidden");

  let current = 0;
  const target = wpm;
  const step = Math.ceil(target / 25);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    $("resWpmBig").textContent = current;
    if (current >= target) clearInterval(interval);
  }, 30);

  setTimeout(() => drawResultChart(), 100);

  saveHistory({
    wpm,
    rawWpm,
    acc,
    errors: state.errors,
    chars: state.correctKeystrokes,
    streak: state.bestStreak,
    mode: state.mode === "custom" ? "custom" : state.mode,
    difficulty: state.difficulty,
    duration: state.duration,
    date: new Date().toISOString(),
  });

  localStorage.setItem("typex_heatmap", JSON.stringify(state.keyHeatmap));
}

/* ──────────────────────────────────────────────
   LIVE STATS
   ────────────────────────────────────────────── */
function updateLiveStats() {
  $("timerDisplay").textContent =
    state.timeLeft !== undefined ? state.timeLeft : state.duration;
  $("errDisplay").textContent = state.errors;
  $("streakDisplay").textContent = state.streak;

  if (state.testStarted && state.startTime) {
    const elapsed = Math.max((Date.now() - state.startTime) / 1000, 0.1);
    const wpm = calcWPM(state.correctKeystrokes, elapsed);
    const acc =
      state.totalKeystrokes > 0
        ? Math.round((state.correctKeystrokes / state.totalKeystrokes) * 100)
        : 100;
    const wpmEl = $("wpmDisplay");
    if (wpmEl.textContent !== String(wpm)) {
      wpmEl.closest(".hud-item").classList.remove("wpm-pulse");
      void wpmEl.closest(".hud-item").offsetWidth;
      wpmEl.closest(".hud-item").classList.add("wpm-pulse");
    }
    wpmEl.textContent = wpm;
    $("accDisplay").textContent = acc + "%";
  } else {
    $("wpmDisplay").textContent = "—";
    $("accDisplay").textContent = "—";
    $("timerDisplay").textContent = state.duration;
  }

  const pct =
    state.chars.length > 0
      ? Math.min((state.currentIndex / state.chars.length) * 100, 100)
      : 0;
  $("progressBar").style.width = pct + "%";
  $("progressPct").textContent = Math.round(pct) + "%";

  if (typeof focusActive !== "undefined" && focusActive) syncFocusHUD();
}

/* ──────────────────────────────────────────────
   KEYBOARD INPUT
   ────────────────────────────────────────────── */
function handleTestKey(key) {
  if (!$("resultsOverlay").classList.contains("hidden")) return;
  if (!$("tab-test").classList.contains("active") && !focusActive) return;

  if (key === "Backspace") {
    if (state.currentIndex === 0) return;
    state.currentIndex--;
    const wasCorrect = state.charResults[state.currentIndex];
    state.charResults[state.currentIndex] = null;
    if (wasCorrect === true) {
      state.correctKeystrokes = Math.max(0, state.correctKeystrokes - 1);
      state.streak = Math.max(0, state.streak - 1);
    } else if (wasCorrect === false) {
      state.errors = Math.max(0, state.errors - 1);
    }
    state.totalKeystrokes = Math.max(0, state.totalKeystrokes - 1);
    const prev = qs(`#wordsDisplay [data-index="${state.currentIndex}"]`);
    if (prev) {
      prev.classList.remove("correct", "wrong", "current");
      prev.classList.add("current");
      scrollToCursor(prev);
    }
    const next = qs(`#wordsDisplay [data-index="${state.currentIndex + 1}"]`);
    if (next) next.classList.remove("current");
    if (focusActive) syncFocusChars();
    updateLiveStats();
    updateWordEcho();
    return;
  }

  if (key.length !== 1) return;
  if (!state.testStarted) startTest();
  if (!state.testRunning) return;

  const expected = state.chars[state.currentIndex];
  if (expected === undefined) return;

  const correct = key === expected;
  state.charResults[state.currentIndex] = correct;
  state.totalKeystrokes++;

  // Heatmap tracking
  const hk = expected.toLowerCase();
  if (!state.keyHeatmap[hk]) state.keyHeatmap[hk] = { attempts: 0, errors: 0 };
  state.keyHeatmap[hk].attempts++;
  if (!correct) state.keyHeatmap[hk].errors++;

  if (correct) {
    state.correctKeystrokes++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  } else {
    state.errors++;
    state.streak = 0;
    if (state.errors % 5 === 0) {
      $("arena").classList.add("shake");
      setTimeout(() => $("arena").classList.remove("shake"), 350);
    }
  }

  updateCharAt(state.currentIndex, correct);
  state.currentIndex++;
  updateLiveStats();
  updateWordEcho();

  if (
    state.mode !== "custom" &&
    state.currentIndex >= state.chars.length - 20
  ) {
    const extra = generateText(state.mode, state.difficulty, 40);
    state.chars.push(" ", ...extra);
    state.charResults.push(...new Array(extra.length + 1).fill(null));
    renderWords();
    const cur = qs(`#wordsDisplay [data-index="${state.currentIndex}"]`);
    if (cur) cur.classList.add("current");
    if (focusActive) renderFocusWords();
  }
}

/* ──────────────────────────────────────────────
   MOBILE INPUT BRIDGE
   ────────────────────────────────────────────── */
(function setupMobileInput() {
  const mi = $("mobileInput");
  let lastValue = "";

  mi.addEventListener("input", (e) => {
    const current = mi.value;
    if (current.length > lastValue.length) {
      const added = current.slice(lastValue.length);
      for (const ch of added) handleTestKey(ch);
    } else if (current.length < lastValue.length) {
      handleTestKey("Backspace");
    }
    lastValue = current;
    if (mi.value.length > 200) {
      mi.value = mi.value.slice(-100);
      lastValue = mi.value;
    }
  });

  mi.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && mi.value === "") handleTestKey("Backspace");
  });

  ["arena", "focusArena"].forEach((id) => {
    const el = $(id);
    if (!el) return;
    el.addEventListener("click", () => {
      if (isMobile()) {
        mi.style.pointerEvents = "auto";
        mi.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener(
    "touchstart",
    (e) => {
      if (!isMobile()) return;
      if (!state.testRunning) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
      if ($("tab-test").classList.contains("active") || focusActive) {
        mi.focus({ preventScroll: true });
      }
    },
    { passive: true },
  );
})();

/* ──────────────────────────────────────────────
   BUTTON HANDLERS
   ────────────────────────────────────────────── */
$("startBtn").addEventListener("click", () => {
  if (!state.testStarted) startTest();
  else resetTest();
});
$("resetBtn").addEventListener("click", resetTest);
$("retryBtn").addEventListener("click", () => {
  $("resultsOverlay").classList.add("hidden");
  resetTest();
});
$("shareBtn").addEventListener("click", () => {
  const wpm = $("resWpmBig").textContent;
  const acc = $("res-acc").textContent;
  const text = `⌨ Just hit ${wpm} WPM with ${acc} accuracy on TYPEX!`;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => toast("Result copied!", "success"));
  } else toast("Copy: " + text);
});

/* ──────────────────────────────────────────────
   RESULT CHART
   ────────────────────────────────────────────── */
function drawResultChart() {
  const canvas = $("wpmChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.offsetWidth || 520;
  const H = 72;
  canvas.width = W;
  canvas.height = H;

  const data = state.wpmHistory.map((d) => d.wpm);
  if (data.length < 2) {
    ctx.clearRect(0, 0, W, H);
    return;
  }
  const max = Math.max(...data, 1);
  const step = W / (data.length - 1);
  ctx.clearRect(0, 0, W, H);

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(168,255,62,0.2)");
  grad.addColorStop(1, "rgba(168,255,62,0)");

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - (v / max) * (H - 10) - 5;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((data.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - (v / max) * (H - 10) - 5;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a8ff3e";
  ctx.lineWidth = 2;
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

/* ──────────────────────────────────────────────
   TRAINING MODULES
   ── FIX: clicking anywhere on the card launches the module
   ────────────────────────────────────────────── */
document.querySelectorAll(".module-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Ignore clicks directly on the exit/other buttons inside the arena
    if (e.target.closest("#trainArena")) return;
    startTraining(card.dataset.module);
  });
});

function startTraining(moduleKey) {
  const mod = TRAIN_MODULES[moduleKey];
  if (!mod) return;
  state.trainModule = moduleKey;
  state.trainWords = shuffle(mod.words).slice(0, 10);
  state.trainIndex = 0;
  state.trainScore = 0;
  state.trainStreak = 0;
  $("trainTitle").textContent = mod.title;
  updateTrainUI();
  $("trainArena").classList.remove("hidden");
  $("trainArena").scrollIntoView({ behavior: "smooth", block: "nearest" });
  $("trainInput").value = "";
  $("trainInput").focus();
}

function updateTrainUI() {
  $("trainRound").textContent = state.trainIndex + 1;
  $("trainTotal").textContent = state.trainWords.length;
  $("trainScore").textContent = state.trainScore;
  $("trainStreak").textContent = state.trainStreak;
  $("trainWordDisplay").textContent = state.trainWords[state.trainIndex] || "—";
  $("trainWordDisplay").className = "train-target";
  $("trainFeedback").textContent = "";
  $("trainFeedback").className = "train-feedback";
}

$("trainInput").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const typed = $("trainInput").value.trim();
  if (!typed) return;
  const target = state.trainWords[state.trainIndex];
  const correct = typed === target;

  if (correct) {
    state.trainScore += 10 + state.trainStreak * 2;
    state.trainStreak++;
    $("trainWordDisplay").classList.add("flash-ok");
    const msgs = [
      "✓ Perfect!",
      "✓ Nice!",
      "✓ Excellent!",
      "✓ Spot on!",
      "✓ Nailed it!",
    ];
    $("trainFeedback").textContent =
      msgs[Math.floor(Math.random() * msgs.length)];
    $("trainFeedback").className = "train-feedback ok";
  } else {
    state.trainStreak = 0;
    $("trainWordDisplay").classList.add("flash-fail");
    $("trainFeedback").textContent = `✗ Expected: "${target}"`;
    $("trainFeedback").className = "train-feedback fail";
  }
  $("trainInput").value = "";
  state.trainIndex++;
  if (state.trainIndex >= state.trainWords.length)
    setTimeout(finishTraining, 500);
  else setTimeout(updateTrainUI, 380);
});

function finishTraining() {
  $("trainWordDisplay").textContent = "🏁";
  $("trainFeedback").textContent =
    `Session complete! Final score: ${state.trainScore}`;
  $("trainFeedback").className = "train-feedback ok";
  $("trainInput").value = "";
  toast(`Training done! Score: ${state.trainScore}`, "success");
  setTimeout(() => $("trainArena").classList.add("hidden"), 3200);
}
$("trainExitBtn").addEventListener("click", () =>
  $("trainArena").classList.add("hidden"),
);

/* ──────────────────────────────────────────────
   STATS
   ────────────────────────────────────────────── */
function renderStats() {
  const h = state.history;
  if (h.length === 0) {
    ["stat-avgWpm", "stat-bestWpm", "stat-avgAcc", "stat-streak"].forEach(
      (id) => ($(id).textContent = "—"),
    );
    $("stat-tests").textContent = "0";
    $("stat-totalTime").textContent = "0m";
    $("historyBody").innerHTML =
      '<tr class="empty-row"><td colspan="8">No sessions yet — take a test!</td></tr>';
    drawHeatmap();
    return;
  }

  const avgWpm = Math.round(h.reduce((s, e) => s + e.wpm, 0) / h.length);
  const bestWpm = Math.max(...h.map((e) => e.wpm));
  const avgAcc = Math.round(h.reduce((s, e) => s + e.acc, 0) / h.length);
  const totalSec = h.reduce((s, e) => s + e.duration, 0);
  const bestStrk = Math.max(...h.map((e) => e.streak || 0));

  $("stat-avgWpm").textContent = avgWpm;
  $("stat-bestWpm").textContent = bestWpm;
  $("stat-avgAcc").textContent = avgAcc + "%";
  $("stat-tests").textContent = h.length;
  $("stat-totalTime").textContent = Math.round(totalSec / 60) + "m";
  $("stat-streak").textContent = bestStrk;

  const body = $("historyBody");
  body.innerHTML = "";
  h.slice(0, 20).forEach((e, i) => {
    const tr = document.createElement("tr");
    const date = new Date(e.date);
    const ds = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
    tr.innerHTML = `<td>${i + 1}</td><td class="wpm-cell">${e.wpm}</td><td>${e.rawWpm}</td><td>${e.acc}%</td><td>${e.errors}</td><td>${e.mode}/${e.difficulty}</td><td>${e.duration}s</td><td>${ds}</td>`;
    body.appendChild(tr);
  });
  drawHistoryChart(h.slice(0, 20).reverse());
  drawHeatmap();
}

function drawHistoryChart(data) {
  const canvas = $("historyChart");
  if (!canvas || data.length < 2) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.offsetWidth || 860;
  const H = 110;
  canvas.width = W;
  canvas.height = H;

  const wpms = data.map((d) => d.wpm);
  const max = Math.max(...wpms, 1);
  const step = W / (wpms.length - 1);
  ctx.clearRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75].forEach((t) => {
    const y = H - t * (H - 20) - 10;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  });

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(168,255,62,0.18)");
  grad.addColorStop(1, "rgba(168,255,62,0)");
  ctx.beginPath();
  wpms.forEach((v, i) => {
    const x = i * step,
      y = H - (v / max) * (H - 20) - 10;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((wpms.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  wpms.forEach((v, i) => {
    const x = i * step,
      y = H - (v / max) * (H - 20) - 10;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a8ff3e";
  ctx.lineWidth = 2;
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;

  wpms.forEach((v, i) => {
    const x = i * step,
      y = H - (v / max) * (H - 20) - 10;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#a8ff3e";
    ctx.shadowColor = "#a8ff3e";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(168,255,62,0.7)";
    ctx.font = "10px JetBrains Mono";
    ctx.textAlign = "center";
    ctx.fillText(v, x, y - 8);
  });
}

/* ──────────────────────────────────────────────
   KEY HEATMAP
   ────────────────────────────────────────────── */
function drawHeatmap() {
  const canvas = $("heatmapCanvas");
  if (!canvas) return;

  const isLight = document.body.classList.contains("light");
  const DPR = window.devicePixelRatio || 1;
  const W = canvas.parentElement.clientWidth || 860;

  const PAD_X = 32;
  const KEY_GAP = 6;
  const ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ];

  const NUM_KEYS = 10;
  const KEY_W = Math.round(
    (W - 2 * PAD_X - KEY_GAP * (NUM_KEYS - 1)) / NUM_KEYS,
  );
  const KEY_H = Math.round(KEY_W * 0.82);
  const TOTAL_KBD_W = NUM_KEYS * KEY_W + (NUM_KEYS - 1) * KEY_GAP;
  const KBD_X = PAD_X;
  const KEY_RADIUS = 5;
  const LEG_H = 8;
  const LEG_MARGIN = 14;
  const LABEL_H = 16;
  const PAD_Y = 16;
  const H =
    PAD_Y +
    ROWS.length * KEY_H +
    (ROWS.length - 1) * KEY_GAP +
    LEG_MARGIN +
    LEG_H +
    LABEL_H +
    PAD_Y;

  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  const ctx = canvas.getContext("2d");
  ctx.scale(DPR, DPR);
  ctx.clearRect(0, 0, W, H);

  const hm = state.keyHeatmap;
  let maxErr = 0;
  Object.values(hm).forEach(({ attempts, errors }) => {
    if (attempts >= 3) maxErr = Math.max(maxErr, errors / attempts);
  });
  if (maxErr === 0) maxErr = 1;

  ROWS.forEach((row, ri) => {
    row.forEach((key, ki) => {
      const x = KBD_X + ki * (KEY_W + KEY_GAP);
      const y = PAD_Y + ri * (KEY_H + KEY_GAP);

      const data = hm[key];
      let errRate = 0,
        attempts = 0;
      if (data && data.attempts >= 1) {
        errRate = data.errors / data.attempts;
        attempts = data.attempts;
      }

      let fillColor, borderColor, textColor;
      if (attempts === 0) {
        fillColor = isLight ? "#dedad0" : "rgba(255,255,255,0.03)";
        borderColor = isLight ? "#c4bfb2" : "rgba(255,255,255,0.08)";
        textColor = isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.18)";
      } else {
        const t = Math.min(errRate / maxErr, 1);
        if (t < 0.15) {
          fillColor = isLight
            ? "#c8e6b0"
            : `rgba(168,255,62,${0.06 + t * 0.35})`;
          borderColor = isLight
            ? "#8ab870"
            : `rgba(168,255,62,${0.25 + t * 0.4})`;
          textColor = isLight ? "#2d5a0e" : "#a8ff3e";
        } else if (t < 0.5) {
          fillColor = isLight
            ? "#f0dfa0"
            : `rgba(251,191,36,${0.07 + t * 0.18})`;
          borderColor = isLight
            ? "#c8a830"
            : `rgba(251,191,36,${0.25 + t * 0.3})`;
          textColor = isLight ? "#6b4800" : "#fbbf24";
        } else {
          fillColor = isLight ? "#f5bebe" : `rgba(255,93,93,${0.1 + t * 0.25})`;
          borderColor = isLight
            ? "#d07070"
            : `rgba(255,93,93,${0.35 + t * 0.3})`;
          textColor = isLight ? "#7a1a1a" : "#ff5d5d";
        }
      }

      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.roundRect(x, y, KEY_W, KEY_H, KEY_RADIUS);
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x, y, KEY_W, KEY_H, KEY_RADIUS);
      ctx.stroke();

      const cx = x + KEY_W / 2;
      const hasData = attempts >= 3;
      const labelY = hasData ? y + KEY_H * 0.36 : y + KEY_H * 0.5;
      const subY = y + KEY_H * 0.7;

      ctx.fillStyle = textColor;
      ctx.font = `600 ${Math.max(10, Math.round(KEY_W * 0.33))}px 'JetBrains Mono', monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(key.toUpperCase(), cx, labelY);

      if (hasData) {
        const pct = Math.round(errRate * 100);
        ctx.globalAlpha = 0.7;
        ctx.font = `400 ${Math.max(8, Math.round(KEY_W * 0.23))}px 'JetBrains Mono', monospace`;
        ctx.fillText(pct + "%", cx, subY);
        ctx.globalAlpha = 1;
      }
    });
  });

  const LEG_Y =
    PAD_Y + ROWS.length * KEY_H + (ROWS.length - 1) * KEY_GAP + LEG_MARGIN;
  const LEG_X = KBD_X;
  const LEG_W = TOTAL_KBD_W;

  const grad = ctx.createLinearGradient(LEG_X, 0, LEG_X + LEG_W, 0);
  grad.addColorStop(0, isLight ? "#8ab870" : "rgba(168,255,62,0.55)");
  grad.addColorStop(0.4, isLight ? "#c8a830" : "rgba(251,191,36,0.55)");
  grad.addColorStop(1, isLight ? "#d07070" : "rgba(255,93,93,0.65)");
  ctx.beginPath();
  ctx.roundRect(LEG_X, LEG_Y, LEG_W, LEG_H, 3);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.fillStyle = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)";
  ctx.font = "10px 'JetBrains Mono', monospace";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText("accurate", LEG_X, LEG_Y + LEG_H + 4);
  ctx.textAlign = "center";
  ctx.fillText("grey = not yet typed", LEG_X + LEG_W / 2, LEG_Y + LEG_H + 4);
  ctx.textAlign = "right";
  ctx.fillText("error-prone", LEG_X + LEG_W, LEG_Y + LEG_H + 4);

  const worstKey = findWorstKey();
  const wrapEl = $("heatmapWorstKey");
  if (worstKey && wrapEl) {
    const { key, errors, attempts } = worstKey;
    const pct = Math.round((errors / attempts) * 100);
    wrapEl.innerHTML = `
      <span class="heatmap-worst-badge">${key.toUpperCase()}</span>
      <span class="heatmap-worst-text">
        Miss rate <strong>${pct}%</strong> &nbsp;·&nbsp; ${errors} errors / ${attempts} hits
        &nbsp;·&nbsp; <em>focus: ${getKeyTip(key)}</em>
      </span>`;
    wrapEl.classList.remove("hidden");
  } else if (wrapEl) {
    wrapEl.classList.add("hidden");
  }
}

function findWorstKey() {
  const hm = state.keyHeatmap;
  let worst = null,
    worstRate = 0;
  const MIN_ATTEMPTS = 5;
  for (const [key, { attempts, errors }] of Object.entries(hm)) {
    if (attempts < MIN_ATTEMPTS) continue;
    const rate = errors / attempts;
    if (rate > worstRate) {
      worstRate = rate;
      worst = { key, attempts, errors };
    }
  }
  return worst;
}

const KEY_TIPS = {
  q: "stretch left pinky",
  w: "left ring shift up",
  e: "left middle up",
  r: "left index up",
  t: "left index stretch",
  y: "right index stretch",
  u: "right index up",
  i: "right middle up",
  o: "right ring up",
  p: "right pinky up",
  a: "anchor left pinky",
  s: "left ring home",
  d: "left middle home",
  f: "left index home",
  g: "left index reach",
  h: "right index reach",
  j: "right index home",
  k: "right middle home",
  l: "right ring home",
  ";": "right pinky home",
  z: "left pinky down",
  x: "left ring down",
  c: "left middle down",
  v: "left index down",
  b: "left index stretch down",
  n: "right index down",
  m: "right index stretch",
  ",": "right middle down",
  ".": "right ring down",
  "/": "right pinky down",
};
function getKeyTip(key) {
  return KEY_TIPS[key.toLowerCase()] || "practice this key";
}

$("clearStatsBtn").addEventListener("click", () => {
  if (confirm("Clear all session history?")) {
    state.history = [];
    state.keyHeatmap = {};
    localStorage.removeItem("typex_history");
    localStorage.removeItem("typex_heatmap");
    renderStats();
    toast("History cleared.", "success");
  }
});

/* ──────────────────────────────────────────────
   THEME TOGGLE
   ────────────────────────────────────────────── */
$("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("typex_theme", isLight ? "light" : "dark");
  toast(isLight ? "☀ Light mode" : "🌑 Dark mode");
});
if (localStorage.getItem("typex_theme") === "light")
  document.body.classList.add("light");

/* ──────────────────────────────────────────────
   GLOBAL KEYBOARD (DESKTOP)
   ────────────────────────────────────────────── */
document.addEventListener("keydown", (e) => {
  const inTrain = document.activeElement === $("trainInput");
  const inCustom = document.activeElement === $("customTextInput");
  const inMobile = document.activeElement === $("mobileInput");
  if (inTrain || inCustom) return;
  if (inMobile) return;

  if (e.key === "Tab") {
    e.preventDefault();
    resetTest();
    return;
  }
  if (e.key === "Escape") {
    $("resultsOverlay").classList.add("hidden");
    exitFocusMode();
    return;
  }
  if (e.key === "Enter" && !$("resultsOverlay").classList.contains("hidden")) {
    $("resultsOverlay").classList.add("hidden");
    resetTest();
    return;
  }

  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;

  if (e.key === "f" || e.key === "F") {
    if (!state.testStarted) {
      toggleFocusMode();
      return;
    }
  }
  handleTestKey(e.key);
  if (e.key === "Backspace" || e.key === " ") e.preventDefault();
});

/* ──────────────────────────────────────────────
   FOCUS MODE
   ────────────────────────────────────────────── */
let focusActive = false;

function toggleFocusMode() {
  if (focusActive) exitFocusMode();
  else enterFocusMode();
}

function enterFocusMode() {
  focusActive = true;
  $("focusOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  renderFocusWords();
  syncFocusHUD();
  $("focusProgressBar").style.width = "0%";
  $("focusGraphWrap").classList.add("hidden");
  toast("⊞ Focus mode · ESC to exit", "");
}

function exitFocusMode() {
  if (!focusActive) return;
  focusActive = false;
  $("focusOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

function renderFocusWords() {
  const display = $("focusWords");
  display.innerHTML = "";
  state.chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.dataset.findex = i;
    if (i < state.currentIndex) {
      span.classList.add(state.charResults[i] ? "correct" : "wrong");
    } else if (i === state.currentIndex) {
      span.classList.add("current");
    }
    display.appendChild(span);
  });
}

function updateFocusCharAt(index, correct) {
  const span = $("focusWords").querySelector(`[data-findex="${index}"]`);
  if (!span) return;
  span.classList.remove("current", "correct", "wrong");
  span.classList.add(correct ? "correct" : "wrong");
  const next = $("focusWords").querySelector(`[data-findex="${index + 1}"]`);
  if (next) {
    next.classList.add("current");
    scrollFocusCursor(next);
  }
  const prevCurrent = $("focusWords").querySelector(
    `[data-findex="${index - 1}"]`,
  );
  if (prevCurrent) prevCurrent.classList.remove("current");
}

function syncFocusChars() {
  const display = $("focusWords");
  const spans = display.querySelectorAll(".char");
  spans.forEach((span) => {
    const i = parseInt(span.dataset.findex, 10);
    span.classList.remove("correct", "wrong", "current");
    if (i < state.currentIndex) {
      span.classList.add(state.charResults[i] ? "correct" : "wrong");
    } else if (i === state.currentIndex) {
      span.classList.add("current");
      scrollFocusCursor(span);
    }
  });
  let start = state.currentIndex;
  while (start > 0 && state.chars[start - 1] !== " ") start--;
  $("focusEcho").textContent =
    state.chars.slice(start, state.currentIndex).join("") || "";
}

function scrollFocusCursor(el) {
  const display = $("focusWords");
  const elBottom = el.offsetTop + el.offsetHeight;
  if (elBottom > display.scrollTop + display.clientHeight) {
    display.scrollTop = el.offsetTop - display.clientHeight / 2;
  }
}

function syncFocusHUD() {
  $("focusSec").textContent =
    state.timeLeft !== undefined ? state.timeLeft : state.duration;
  $("focusErr").textContent = state.errors;
  $("focusStreak").textContent = state.streak;

  const ring = $("focusTimerRing");
  const num = $("focusSec");
  const pct = state.timeLeft / state.duration;
  ring.style.strokeDashoffset = 113.1 * (1 - pct);
  if (state.timeLeft <= 5) {
    ring.classList.add("ring-warn");
    num.classList.add("warn");
  } else {
    ring.classList.remove("ring-warn");
    num.classList.remove("warn");
  }

  if (state.testStarted && state.startTime) {
    const elapsed = Math.max((Date.now() - state.startTime) / 1000, 0.1);
    const wpm = calcWPM(state.correctKeystrokes, elapsed);
    const acc =
      state.totalKeystrokes > 0
        ? Math.round((state.correctKeystrokes / state.totalKeystrokes) * 100)
        : 100;
    $("focusWpm").textContent = wpm;
    $("focusAcc").textContent = acc + "%";
  } else {
    $("focusWpm").textContent = "—";
    $("focusAcc").textContent = "—";
    $("focusSec").textContent = state.duration;
  }

  const pctProg =
    state.chars.length > 0
      ? Math.min((state.currentIndex / state.chars.length) * 100, 100)
      : 0;
  $("focusProgressBar").style.width = pctProg + "%";

  let start = state.currentIndex;
  while (start > 0 && state.chars[start - 1] !== " ") start--;
  $("focusEcho").textContent =
    state.chars.slice(start, state.currentIndex).join("") || "";

  const fa = $("focusArena");
  if (state.testRunning) fa.classList.add("active-typing");
  else fa.classList.remove("active-typing");
}

function drawFocusGraph() {
  const canvas = $("focusGraphCanvas");
  if (!canvas) return;
  const wrap = $("focusGraphWrap");
  if (state.wpmHistory.length >= 2) wrap.classList.remove("hidden");

  const W = canvas.parentElement.clientWidth || 600;
  const H = 40;
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, W, H);
  const data = state.wpmHistory.map((d) => d.wpm);
  if (data.length < 2) return;

  const max = Math.max(...data, 10);
  const step = W / Math.max(data.length - 1, 1);
  const PAD = 3;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(168,255,62,0.22)");
  grad.addColorStop(1, "rgba(168,255,62,0)");
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - PAD - (v / max) * (H - PAD * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((data.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step,
      y = H - PAD - (v / max) * (H - PAD * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a8ff3e";
  ctx.lineWidth = 1.5;
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 6;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

$("focusBtn").addEventListener("click", toggleFocusMode);
$("focusExitBtn").addEventListener("click", exitFocusMode);

/* ──────────────────────────────────────────────
   DAILY CHALLENGE
   ────────────────────────────────────────────── */
function getDailyDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++)
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  h = h >>> 0;
  return (h % 1000) / 1000;
}

function getDailyText(dateStr) {
  const DAILY_POOL = [
    "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!",
    "Programming is the art of telling another human what one wants the computer to do. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "First, solve the problem. Then, write the code. Never conflate the two steps. Simplicity is the soul of efficiency in all great software design.",
    "The best way to predict the future is to implement it yourself, one commit at a time. Code never lies, but comments sometimes do and documentation often misleads.",
    "In theory there is no difference between theory and practice. In practice there is. Refactoring legacy codebases requires extraordinary patience and meticulously crafted tests.",
    "Cryptographic algorithms rely fundamentally on mathematical properties that make certain computational problems intractable for any adversary.",
    "Distributed systems introduce fascinating challenges around consistency, availability, and partition tolerance that require careful architectural design choices.",
    "The philosophical implications of artificial general intelligence challenge our fundamental understanding of consciousness, creativity, and what it means to be human.",
    "Microservices architecture introduces operational complexity while simultaneously improving scalability, fault isolation, and independent deployment flexibility.",
    "Comprehensive performance optimization requires careful profiling, rigorous benchmarking, and iterative refinement of all critical bottlenecks in the system.",
    "She sells seashells by the seashore and the shells she sells are surely seashells. If she sells shells on the seashore, I am sure she sells seashore shells.",
    "To be or not to be, that is the question. Whether it is nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles.",
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief.",
    "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it is a long way down the road to the chemist, but that is just peanuts to space.",
    "The universe is under no obligation to make sense to you. We are all connected to each other biologically, to the earth chemically, and to the rest of the universe atomically.",
    "Not all those who wander are lost. All that is gold does not glitter. The old that is strong does not wither. Deep roots are not reached by the frost.",
    "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the entire world and all there ever will be to know and understand.",
    "Two things are infinite: the universe and human stupidity, and I am not sure about the universe. The important thing is not to stop questioning.",
    "In the middle of difficulty lies opportunity. Success is not final, failure is not fatal: it is the courage to continue that counts above all else.",
    "The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle. As with all matters of the heart, you will know when you find it.",
    "Premature optimization is the root of all evil. Make it work, make it right, make it fast — in that order. Simple things should be simple and complex things should be possible.",
    "Any sufficiently advanced technology is indistinguishable from magic. The universe is not only queerer than we suppose, it is queerer than we can suppose.",
    "You miss one hundred percent of the shots you do not take. The secret to getting ahead is getting started. Done is better than perfect in almost every situation.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. It always seems impossible until it is done and then it seems obvious.",
    "Be yourself; everyone else is already taken. To live is the rarest thing in the world. Most people just exist and never truly examine the lives they lead.",
    "The only true wisdom is in knowing you know nothing. An unexamined life is not worth living. Wonder is the beginning of wisdom in every field of inquiry.",
    "async function fetchData(url) { const response = await fetch(url); if (!response.ok) throw new Error(response.statusText); return await response.json(); }",
    "const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key); }; };",
    "type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }; function unwrap<T>(r: Result<T, Error>): T { if (r.ok) return r.value; throw r.error; }",
    "The implementation of asynchronous programming paradigms necessitates a comprehensive understanding of event-driven architectures and non-blocking I/O operations.",
  ];
  const idx = Math.floor(seededRandom(dateStr) * DAILY_POOL.length);
  return DAILY_POOL[idx];
}

const DAILY_KEY = "typex_daily";
function loadDailyStore() {
  try {
    return JSON.parse(localStorage.getItem(DAILY_KEY) || "{}");
  } catch (e) {
    return {};
  }
}
function saveDailyStore(data) {
  localStorage.setItem(DAILY_KEY, JSON.stringify(data));
}

function calcDailyStreak(history) {
  if (!history || history.length === 0) return 0;
  const sorted = [...history].sort((a, b) => b.date.localeCompare(a.date));
  const today = getDailyDateStr();
  let streak = 0,
    expected = today;
  for (const entry of sorted) {
    if (entry.date === expected) {
      streak++;
      const d = new Date(expected + "T12:00:00");
      d.setDate(d.getDate() - 1);
      expected = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    } else break;
  }
  return streak;
}

const dState = {
  chars: [],
  charResults: [],
  currentIndex: 0,
  errors: 0,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  streak: 0,
  bestStreak: 0,
  wpmHistory: [],
  startTime: null,
  timer: null,
  timeLeft: 90,
  duration: 90,
  running: false,
  started: false,
};

function dailyTimerRingUpdate() {
  const ring = $("dailyTimerRing"),
    num = $("dailyTimerDisplay");
  if (!ring || !num) return;
  const pct = dState.timeLeft / dState.duration;
  ring.style.strokeDashoffset = 113.1 * (1 - pct);
  if (dState.timeLeft <= 5) {
    ring.classList.add("ring-warn");
    num.classList.add("warn");
  } else {
    ring.classList.remove("ring-warn");
    num.classList.remove("warn");
  }
}

function renderDailyWords() {
  const display = $("dailyWordsDisplay");
  if (!display) return;
  display.innerHTML = "";
  dState.chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.dataset.di = i;
    if (i < dState.currentIndex) {
      span.classList.add(dState.charResults[i] ? "correct" : "wrong");
    } else if (i === dState.currentIndex) {
      span.classList.add("current");
    }
    display.appendChild(span);
  });
}

function updateDailyHUD() {
  $("dailyTimerDisplay").textContent = dState.timeLeft;
  $("dailyErrDisplay").textContent = dState.errors;
  $("dailyStreakDisplay").textContent = dState.streak;
  dailyTimerRingUpdate();
  if (dState.started && dState.startTime) {
    const elapsed = Math.max((Date.now() - dState.startTime) / 1000, 0.1);
    const wpm = calcWPM(dState.correctKeystrokes, elapsed);
    const acc =
      dState.totalKeystrokes > 0
        ? Math.round((dState.correctKeystrokes / dState.totalKeystrokes) * 100)
        : 100;
    $("dailyWpmDisplay").textContent = wpm;
    $("dailyAccDisplay").textContent = acc + "%";
  } else {
    $("dailyWpmDisplay").textContent = "—";
    $("dailyAccDisplay").textContent = "—";
  }
  const pct =
    dState.chars.length > 0
      ? Math.min((dState.currentIndex / dState.chars.length) * 100, 100)
      : 0;
  $("dailyProgressBar").style.width = pct + "%";
  $("dailyProgressPct").textContent = Math.round(pct) + "%";
}

function startDailyTest() {
  if (dState.running) return;
  dState.running = true;
  dState.started = true;
  dState.startTime = Date.now();
  $("dailyArenaHint").style.display = "none";
  $("dailyStartBtn").textContent = "■ RUNNING";
  $("dailyArena").classList.add("active-typing");
  if (isMobile()) {
    const mi = $("mobileInput");
    mi.style.pointerEvents = "auto";
    mi.focus({ preventScroll: true });
  }
  dState.timer = setInterval(() => {
    dState.timeLeft--;
    const elapsed = (Date.now() - dState.startTime) / 1000;
    dState.wpmHistory.push({
      t: Math.round(elapsed),
      wpm: calcWPM(dState.correctKeystrokes, elapsed),
    });
    updateDailyHUD();
    if (dState.timeLeft <= 0) endDailyTest();
  }, 1000);
}

function endDailyTest() {
  clearInterval(dState.timer);
  dState.running = false;
  $("dailyArena").classList.remove("active-typing");
  if (isMobile()) {
    const mi = $("mobileInput");
    mi.style.pointerEvents = "none";
    mi.blur();
  }

  const wpm = calcWPM(dState.correctKeystrokes, dState.duration);
  const rawWpm = calcWPM(dState.totalKeystrokes, dState.duration);
  const acc =
    dState.totalKeystrokes > 0
      ? Math.round((dState.correctKeystrokes / dState.totalKeystrokes) * 100)
      : 100;
  const grade = gradeWPM(wpm, acc);
  const today = getDailyDateStr();

  const store = loadDailyStore();
  if (!store.history) store.history = [];
  store.history = store.history.filter((e) => e.date !== today);
  store.history.unshift({
    date: today,
    wpm,
    rawWpm,
    acc,
    errors: dState.errors,
    grade,
  });
  if (store.history.length > 60) store.history.length = 60;
  saveDailyStore(store);

  $("dailyChallengeArena").style.display = "none";
  $("dailyDoneGrade").textContent = grade;
  $("dailyDoneWpm").textContent = wpm + " WPM";
  $("dailyDoneMeta").textContent =
    `${acc}% accuracy · ${dState.errors} errors · Come back tomorrow!`;
  $("dailyDoneBanner").classList.remove("hidden");

  $("dailyStreakNum").textContent = calcDailyStreak(store.history);
  renderDailyHistory(store.history);
  toast(`Daily done! ${wpm} WPM — Grade ${grade}`, "success");
}

function handleDailyKey(key) {
  if (!$("tab-daily").classList.contains("active")) return;
  if (!$("resultsOverlay").classList.contains("hidden")) return;

  if (key === "Backspace") {
    if (dState.currentIndex === 0) return;
    dState.currentIndex--;
    const wasCorrect = dState.charResults[dState.currentIndex];
    dState.charResults[dState.currentIndex] = null;
    if (wasCorrect === true) {
      dState.correctKeystrokes = Math.max(0, dState.correctKeystrokes - 1);
      dState.streak = Math.max(0, dState.streak - 1);
    } else if (wasCorrect === false) {
      dState.errors = Math.max(0, dState.errors - 1);
    }
    dState.totalKeystrokes = Math.max(0, dState.totalKeystrokes - 1);
    const prev = $("dailyWordsDisplay").querySelector(
      `[data-di="${dState.currentIndex}"]`,
    );
    if (prev) {
      prev.classList.remove("correct", "wrong", "current");
      prev.classList.add("current");
    }
    const next = $("dailyWordsDisplay").querySelector(
      `[data-di="${dState.currentIndex + 1}"]`,
    );
    if (next) next.classList.remove("current");
    updateDailyHUD();
    let start = dState.currentIndex;
    while (start > 0 && dState.chars[start - 1] !== " ") start--;
    $("dailyWordEcho").textContent =
      dState.chars.slice(start, dState.currentIndex).join("") || "";
    return;
  }

  if (key.length !== 1) return;
  if (!dState.started) startDailyTest();
  if (!dState.running) return;

  const expected = dState.chars[dState.currentIndex];
  if (expected === undefined) return;

  const correct = key === expected;
  dState.charResults[dState.currentIndex] = correct;
  dState.totalKeystrokes++;
  if (correct) {
    dState.correctKeystrokes++;
    dState.streak++;
    if (dState.streak > dState.bestStreak) dState.bestStreak = dState.streak;
  } else {
    dState.errors++;
    dState.streak = 0;
    if (dState.errors % 5 === 0) {
      $("dailyArena").classList.add("shake");
      setTimeout(() => $("dailyArena").classList.remove("shake"), 350);
    }
  }

  const span = $("dailyWordsDisplay").querySelector(
    `[data-di="${dState.currentIndex}"]`,
  );
  if (span) {
    span.classList.remove("current", "correct", "wrong");
    span.classList.add(correct ? "correct" : "wrong");
    if (!isMobile()) {
      const rect = span.getBoundingClientRect();
      spawnBurst(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        correct,
      );
    }
  }
  const nextSpan = $("dailyWordsDisplay").querySelector(
    `[data-di="${dState.currentIndex + 1}"]`,
  );
  if (nextSpan) {
    nextSpan.classList.add("current");
    const display = $("dailyWordsDisplay");
    const elBottom = nextSpan.offsetTop + nextSpan.offsetHeight;
    if (elBottom > display.scrollTop + display.clientHeight)
      display.scrollTop = nextSpan.offsetTop - display.clientHeight / 2;
  }

  dState.currentIndex++;
  updateDailyHUD();
  let start = dState.currentIndex;
  while (start > 0 && dState.chars[start - 1] !== " ") start--;
  $("dailyWordEcho").textContent =
    dState.chars.slice(start, dState.currentIndex).join("") || "";
  if (dState.currentIndex >= dState.chars.length) endDailyTest();
}

function renderDailyHistory(history) {
  const list = $("dailyHistoryList");
  if (!list) return;
  if (!history || history.length === 0) {
    list.innerHTML =
      '<div class="daily-history-empty">No daily challenges completed yet.</div>';
    return;
  }
  list.innerHTML = history
    .slice(0, 14)
    .map((e) => {
      const gradeClass = "grade-" + (e.grade || "f").toLowerCase();
      return `<div class="daily-history-row">
      <span class="dhr-date">${e.date}</span>
      <span class="dhr-wpm">${e.wpm}</span>
      <span class="dhr-acc">${e.acc}% acc</span>
      <span class="dhr-grade ${gradeClass}">${e.grade || "—"}</span>
      <span class="dhr-streak">${e.errors} err</span>
    </div>`;
    })
    .join("");
}

function renderDailyChallenge() {
  const today = getDailyDateStr();
  const store = loadDailyStore();
  const text = getDailyText(today);
  const streak = calcDailyStreak(store.history || []);

  $("dailyDateBadge").textContent = today;
  $("dailyStreakNum").textContent = streak;
  $("dailyPromptPreview").textContent = text;

  const todayEntry = (store.history || []).find((e) => e.date === today);
  if (todayEntry) {
    $("dailyChallengeArena").style.display = "none";
    $("dailyDoneGrade").textContent = todayEntry.grade || "—";
    $("dailyDoneWpm").textContent = todayEntry.wpm + " WPM";
    $("dailyDoneMeta").textContent =
      `${todayEntry.acc}% accuracy · ${todayEntry.errors} errors · Come back tomorrow!`;
    $("dailyDoneBanner").classList.remove("hidden");
  } else {
    $("dailyChallengeArena").style.display = "";
    $("dailyDoneBanner").classList.add("hidden");
    Object.assign(dState, {
      chars: text.split(""),
      charResults: new Array(text.length).fill(null),
      currentIndex: 0,
      errors: 0,
      totalKeystrokes: 0,
      correctKeystrokes: 0,
      streak: 0,
      bestStreak: 0,
      wpmHistory: [],
      startTime: null,
      timeLeft: 90,
      duration: 90,
      running: false,
      started: false,
    });
    clearInterval(dState.timer);
    renderDailyWords();
    updateDailyHUD();
    $("dailyArenaHint").style.display = "";
    $("dailyArenaHint").textContent = isMobile()
      ? "tap to begin"
      : "start typing to begin";
    $("dailyStartBtn").textContent = "▶ START";
    $("dailyArena").classList.remove("active-typing");
    $("dailyTimerRing").style.strokeDashoffset = "0";
    $("dailyTimerRing").classList.remove("ring-warn");
    $("dailyTimerDisplay").classList.remove("warn");
  }
  renderDailyHistory(store.history || []);
}

$("dailyStartBtn").addEventListener("click", () => {
  if (!dState.started) startDailyTest();
});
$("dailyArena").addEventListener("click", () => {
  if (isMobile() && dState.running) {
    const mi = $("mobileInput");
    mi.style.pointerEvents = "auto";
    mi.focus({ preventScroll: true });
  }
});

document.addEventListener(
  "keydown",
  (e) => {
    if (!$("tab-daily") || !$("tab-daily").classList.contains("active")) return;
    const inTrain = document.activeElement === $("trainInput");
    const inCustom = document.activeElement === $("customTextInput");
    const inMobile = document.activeElement === $("mobileInput");
    if (inTrain || inCustom || inMobile) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
    handleDailyKey(e.key);
    if (e.key === "Backspace" || e.key === " ") e.preventDefault();
  },
  true,
);

(function patchMobileForDaily() {
  const mi = $("mobileInput");
  if (!mi) return;
  let lastLen = 0;
  mi.addEventListener(
    "input",
    () => {
      if (!$("tab-daily").classList.contains("active")) return;
      const cur = mi.value;
      if (cur.length > lastLen) {
        const added = cur.slice(lastLen);
        for (const ch of added) handleDailyKey(ch);
      } else if (cur.length < lastLen) {
        handleDailyKey("Backspace");
      }
      lastLen = cur.length;
      if (mi.value.length > 200) {
        mi.value = mi.value.slice(-100);
        lastLen = mi.value.length;
      }
    },
    true,
  );
})();

/* ──────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────── */
(function init() {
  resetTest();
  renderStats();
  if (!localStorage.getItem("typex_visited")) {
    const tip = isMobile()
      ? "💡 Tap the arena to start · TAP START or just type"
      : "💡 Tab to reset · Backspace to undo · CUSTOM mode = your own text";
    setTimeout(() => toast(tip, ""), 1400);
    localStorage.setItem("typex_visited", "1");
  }
})();
