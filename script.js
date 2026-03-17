"use strict";

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
      " ~`",
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
};

/* ──────────────────────────────────────────────
   UTILITIES
   ────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const qs = (sel) => document.querySelector(sel);

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
    // Draw connecting lines between close nodes
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
   KEYSTROKE PARTICLE BURST
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
    el.style.cssText = `
      left: ${x}px; top: ${y}px;
      background: ${color};
      --dx: ${Math.cos(angle) * dist}px;
      --dy: ${Math.sin(angle) * dist}px;
      box-shadow: 0 0 4px ${color};
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 650);
  }
}

/* ──────────────────────────────────────────────
   TIMER RING UPDATE
   ────────────────────────────────────────────── */
function updateTimerRing() {
  const ring = $("timerRing");
  const numEl = $("timerDisplay");
  const pct = state.timeLeft / state.duration;
  const circumference = 113.1;
  ring.style.strokeDashoffset = circumference * (1 - pct);

  if (state.timeLeft <= 5) {
    ring.classList.add("ring-warn");
    numEl.classList.add("warn");
  } else {
    ring.classList.remove("ring-warn");
    numEl.classList.remove("warn");
  }
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
  });
});

/* ──────────────────────────────────────────────
   PILL / CHIP GROUPS
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
  const val = e.target.value;
  $("customCharCount").textContent = `${val.length} chars`;
});

$("applyCustomBtn").addEventListener("click", () => {
  const text = $("customTextInput").value.trim();
  if (text.length < 20) {
    toast("Need at least 20 characters!", "error");
    $("customTextInput").focus();
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

  // Spawn particle burst at character position
  const rect = span.getBoundingClientRect();
  spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, correct);
}

function scrollToCursor(el) {
  const display = $("wordsDisplay");
  const elTop = el.offsetTop;
  const elBottom = elTop + el.offsetHeight;
  const dispBottom = display.scrollTop + display.clientHeight;
  if (elBottom > dispBottom) {
    display.scrollTop = elTop - display.clientHeight / 2;
  }
}

/* Update the current-word echo below the display */
function updateWordEcho() {
  const echo = $("currentWordEcho");
  // Find current word start
  let start = state.currentIndex;
  while (start > 0 && state.chars[start - 1] !== " ") start--;
  const typed = state.chars.slice(start, state.currentIndex).join("");
  echo.textContent = typed || "";
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
  $("arenaHint").textContent = "start typing to begin";
  $("arenaHint").style.display = "";
  $("resultsOverlay").classList.add("hidden");
  $("startBtn").textContent = "▶ START";
  $("arena").classList.remove("active-typing");
  $("currentWordEcho").textContent = "";

  // Reset timer ring to full
  $("timerRing").style.strokeDashoffset = "0";
  $("timerDisplay").textContent = state.duration;
  $("timerRing").classList.remove("ring-warn");
  $("timerDisplay").classList.remove("warn");
}

/* ──────────────────────────────────────────────
   START / STOP / END TEST
   ────────────────────────────────────────────── */
function startTest() {
  if (state.testRunning) return;
  state.testRunning = true;
  state.testStarted = true;
  state.startTime = Date.now();

  $("arenaHint").style.display = "none";
  $("startBtn").textContent = "■ RUNNING";
  $("arena").classList.add("active-typing");

  state.timer = setInterval(tickTimer, 1000);
}

function tickTimer() {
  state.timeLeft--;
  const elapsed = (Date.now() - state.startTime) / 1000;
  const wpm = calcWPM(state.correctKeystrokes, elapsed);
  state.wpmHistory.push({ t: Math.round(elapsed), wpm });

  updateLiveStats();
  updateTimerRing();

  if (state.timeLeft <= 0) endTest();
}

function stopTest(running) {
  clearInterval(state.timer);
  state.testRunning = running;
}

function endTest() {
  stopTest(false);
  $("arena").classList.remove("active-typing");

  const elapsed = state.duration;
  const wpm = calcWPM(state.correctKeystrokes, elapsed);
  const rawWpm = calcWPM(state.totalKeystrokes, elapsed);
  const acc =
    state.totalKeystrokes > 0
      ? Math.round((state.correctKeystrokes / state.totalKeystrokes) * 100)
      : 100;
  const grade = gradeWPM(wpm, acc);
  const consistency = calcConsistency(state.wpmHistory);

  // Animate the grade/wpm in
  $("resWpmBig").textContent = "0";
  $("resultsGrade").textContent = grade;
  $("res-acc").textContent = acc + "%";
  $("res-raw").textContent = rawWpm;
  $("res-chars").textContent = state.correctKeystrokes;
  $("res-errors").textContent = state.errors;
  $("res-streak").textContent = state.bestStreak;
  $("res-consistency").textContent = consistency + "%";
  $("resultsOverlay").classList.remove("hidden");

  // Animate WPM count up
  let current = 0;
  const target = wpm;
  const step = Math.ceil(target / 25);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    $("resWpmBig").textContent = current;
    if (current >= target) clearInterval(interval);
  }, 30);

  setTimeout(() => drawResultChart(), 100);

  const entry = {
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
  };
  saveHistory(entry);
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
    $("wpmDisplay").textContent = wpm;
    $("accDisplay").textContent = acc + "%";
  } else {
    $("wpmDisplay").textContent = "—";
    $("accDisplay").textContent = "—";
    $("timerDisplay").textContent = state.duration;
  }

  const progress =
    state.chars.length > 0
      ? (state.currentIndex / state.chars.length) * 100
      : 0;
  const pct = Math.min(progress, 100);
  $("progressBar").style.width = pct + "%";
  $("progressPct").textContent = Math.round(pct) + "%";
}

/* ──────────────────────────────────────────────
   KEYBOARD INPUT HANDLER
   ────────────────────────────────────────────── */
function handleTestKey(key) {
  if (!$("resultsOverlay").classList.contains("hidden")) return;
  if (!$("tab-test").classList.contains("active")) return;

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

  if (correct) {
    state.correctKeystrokes++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  } else {
    state.errors++;
    state.streak = 0;
    // Brief arena shake on error
    if (state.errors % 5 === 0) {
      $("arena").classList.add("shake");
      setTimeout(() => $("arena").classList.remove("shake"), 350);
    }
  }

  updateCharAt(state.currentIndex, correct);
  state.currentIndex++;
  updateLiveStats();
  updateWordEcho();

  // Extend text if near end (for non-custom)
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
  }
}

/* Button handlers */
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
    const x = i * step;
    const y = H - (v / max) * (H - 10) - 5;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((data.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step;
    const y = H - (v / max) * (H - 10) - 5;
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
   TRAINING MODULE
   ────────────────────────────────────────────── */
document.querySelectorAll(".module-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".module-card");
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
  if (state.trainIndex >= state.trainWords.length) {
    setTimeout(finishTraining, 500);
  } else {
    setTimeout(updateTrainUI, 380);
  }
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
    const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td class="wpm-cell">${e.wpm}</td>
      <td>${e.rawWpm}</td>
      <td>${e.acc}%</td>
      <td>${e.errors}</td>
      <td>${e.mode}/${e.difficulty}</td>
      <td>${e.duration}s</td>
      <td>${dateStr}</td>
    `;
    body.appendChild(tr);
  });

  drawHistoryChart(h.slice(0, 20).reverse());
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

  // Grid
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75].forEach((t) => {
    const y = H - t * (H - 20) - 10;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  });

  // Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(168,255,62,0.18)");
  grad.addColorStop(1, "rgba(168,255,62,0)");
  ctx.beginPath();
  wpms.forEach((v, i) => {
    const x = i * step;
    const y = H - (v / max) * (H - 20) - 10;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo((wpms.length - 1) * step, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  wpms.forEach((v, i) => {
    const x = i * step;
    const y = H - (v / max) * (H - 20) - 10;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a8ff3e";
  ctx.lineWidth = 2;
  ctx.shadowColor = "#a8ff3e";
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Dots + labels
  wpms.forEach((v, i) => {
    const x = i * step;
    const y = H - (v / max) * (H - 20) - 10;
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

$("clearStatsBtn").addEventListener("click", () => {
  if (confirm("Clear all session history?")) {
    state.history = [];
    localStorage.removeItem("typex_history");
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
   GLOBAL KEYBOARD SHORTCUTS
   ────────────────────────────────────────────── */
document.addEventListener("keydown", (e) => {
  const inTrainInput = document.activeElement === $("trainInput");
  const inCustom = document.activeElement === $("customTextInput");
  if (inTrainInput || inCustom) return;

  if (e.key === "Tab") {
    e.preventDefault();
    resetTest();
    return;
  }
  if (e.key === "Escape") {
    $("resultsOverlay").classList.add("hidden");
    return;
  }
  if (e.key === "Enter" && !$("resultsOverlay").classList.contains("hidden")) {
    $("resultsOverlay").classList.add("hidden");
    resetTest();
    return;
  }

  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;

  handleTestKey(e.key);
  if (e.key === "Backspace" || e.key === " ") e.preventDefault();
});

/* ──────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────── */
(function init() {
  resetTest();
  renderStats();
  if (!localStorage.getItem("typex_visited")) {
    setTimeout(
      () =>
        toast(
          "💡 Tab to reset · Backspace to undo · CUSTOM mode = your own text",
          "",
        ),
      1400,
    );
    localStorage.setItem("typex_visited", "1");
  }
})();
