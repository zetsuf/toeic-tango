// ===== TOEIC単語帳 =====
const STORE_KEY = 'toeic-tango.v1';
const STARTER_VERSION = 3; // スターター単語を更新したら上げる（既存ユーザーへ差分追加）

/** @typedef {{id:string,en:string,ja:string,pos:string,status:'new'|'weak'|'learned',seen:number,known:number,updatedAt:number}} Word */

let words = load();
let deck = 'smart';        // 学習デッキ
let listFilter = 'all';    // 一覧フィルタ
let query = '';
let queue = [];            // 現在の学習キュー（id配列）
let current = null;        // 表示中のWord
let flipped = false;

// ---------- 永続化 / 初期化 ----------
function load() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY)); } catch {}
  if (saved && Array.isArray(saved.words)) {
    let w = saved.words;
    // スターター単語が更新されていたら、未所持の語だけ差分追加（進捗は保持）
    if (saved.starterVersion !== STARTER_VERSION) w = mergeStarters(w);
    localStorage.setItem(STORE_KEY, JSON.stringify({ words: w, starterVersion: STARTER_VERSION }));
    return w;
  }
  // 初回: スターター単語を投入
  const seed = (window.STARTER_WORDS || []).map((x) => newWord(x.en, x.ja, x.pos));
  localStorage.setItem(STORE_KEY, JSON.stringify({ words: seed, starterVersion: STARTER_VERSION }));
  return seed;
}
function mergeStarters(w) {
  const have = new Set(w.map((x) => x.en.toLowerCase()));
  for (const s of (window.STARTER_WORDS || [])) {
    if (!have.has(s.en.toLowerCase())) w.push(newWord(s.en, s.ja, s.pos));
  }
  return w;
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify({ words, starterVersion: STARTER_VERSION })); }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function newWord(en, ja, pos) {
  return { id: uid(), en: en.trim(), ja: ja.trim(), pos: (pos || '').trim(), status: 'new', seen: 0, known: 0, updatedAt: Date.now() };
}

// ---------- 学習デッキ ----------
function deckWords(d) {
  if (d === 'weak') return words.filter((w) => w.status === 'weak');
  if (d === 'new') return words.filter((w) => w.status === 'new');
  if (d === 'learned') return words.filter((w) => w.status === 'learned');
  if (d === 'all') return words.slice();
  // smart: 苦手→未学習を優先、覚えたは除く
  return words.filter((w) => w.status !== 'learned');
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildQueue() {
  let pool = deckWords(deck);
  if (deck === 'smart') {
    // 苦手を先に、その後未学習
    const weak = shuffle(pool.filter((w) => w.status === 'weak'));
    const fresh = shuffle(pool.filter((w) => w.status === 'new'));
    pool = [...weak, ...fresh];
  } else {
    pool = shuffle(pool);
  }
  queue = pool.map((w) => w.id);
}

function nextCard() {
  // queueから、まだ存在する単語を取り出す
  while (queue.length) {
    const id = queue.shift();
    const w = words.find((x) => x.id === id);
    if (w) { current = w; break; }
    current = null;
  }
  if (!queue.length && !current) { renderStudy(); return; }
  flipped = false;
  renderCard();
}

// ---------- 描画: 学習 ----------
const elStudyArea = document.getElementById('studyArea');
const elStudyEmpty = document.getElementById('studyEmpty');
const cardInner = document.getElementById('cardInner');
const cardEn = document.getElementById('cardEn');
const cardEnSmall = document.getElementById('cardEnSmall');
const cardJa = document.getElementById('cardJa');
const cardPos = document.getElementById('cardPos');
const studyCount = document.getElementById('studyCount');

function renderStudy() {
  buildQueue();
  const has = queue.length > 0;
  elStudyArea.hidden = !has;
  elStudyEmpty.hidden = has;
  if (!has) {
    current = null;
    const t = document.getElementById('studyEmptyTitle');
    const s = document.getElementById('studyEmptySub');
    if (deck === 'weak') { t.textContent = '苦手な単語はありません'; s.textContent = '「まだ」を押した単語がここに集まります'; }
    else if (deck === 'new') { t.textContent = '未学習の単語はありません'; s.textContent = '全部チェック済みです！'; }
    else if (deck === 'learned') { t.textContent = '学習済の単語はありません'; s.textContent = '「覚えた」を押すと、ここで復習できます'; }
    else { t.textContent = 'お疲れさまでした！'; s.textContent = '覚えていない単語はありません 🎉'; }
    return;
  }
  nextCard();
}

function renderCard() {
  if (!current) return;
  cardInner.classList.remove('flipped');
  cardEn.textContent = current.en;
  cardEnSmall.textContent = current.en;
  cardJa.textContent = current.ja;
  cardPos.textContent = current.pos || '';
  studyCount.textContent = `残り ${queue.length + 1} 枚 ・ ${deckLabel(deck)}`;
}
function deckLabel(d) {
  return { smart: 'おすすめ', weak: '苦手', new: '未学習', learned: '学習済', all: '全部' }[d];
}

function flipCard() {
  flipped = !flipped;
  cardInner.classList.toggle('flipped', flipped);
}

function answer(known) {
  if (!current) return;
  current.seen += 1;
  if (known) { current.known += 1; current.status = 'learned'; }
  else { current.status = 'weak'; }
  current.updatedAt = Date.now();
  save();
  updateProgress();
  nextCard();
  if (listView && !listView.hidden) renderList();
}

document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('btnKnown').addEventListener('click', (e) => { e.stopPropagation(); answer(true); });
document.getElementById('btnWeak').addEventListener('click', (e) => { e.stopPropagation(); answer(false); });

// デッキ切替
document.getElementById('deckTabs').addEventListener('click', (e) => {
  const b = e.target.closest('.deck-tab');
  if (!b) return;
  deck = b.dataset.deck;
  document.querySelectorAll('.deck-tab').forEach((t) => t.classList.toggle('active', t === b));
  renderStudy();
});

// ---------- 描画: 一覧 ----------
const wordListEl = document.getElementById('wordList');
const listEmpty = document.getElementById('listEmpty');
const searchInput = document.getElementById('searchInput');

function statusBadge(st) {
  return { learned: ['覚えた', 'badge-learned', 'st-learned'], weak: ['苦手', 'badge-weak', 'st-weak'], new: ['未学習', 'badge-new', 'st-new'] }[st];
}

function renderList() {
  const q = query.trim().toLowerCase();
  let list = words.filter((w) => listFilter === 'all' || w.status === listFilter);
  if (q) list = list.filter((w) => w.en.toLowerCase().includes(q) || w.ja.toLowerCase().includes(q));
  list.sort((a, b) => a.en.localeCompare(b.en));

  wordListEl.innerHTML = '';
  listEmpty.hidden = list.length > 0;

  for (const w of list) {
    const [label, badgeCls, barCls] = statusBadge(w.status);
    const li = document.createElement('li');
    li.className = 'word-row';
    li.innerHTML = `
      <span class="word-status ${barCls}"></span>
      <div class="word-main">
        <div class="word-en">${escapeHtml(w.en)}${w.pos ? ` <span style="font-size:.75rem;color:var(--text-soft)">[${escapeHtml(w.pos)}]</span>` : ''}</div>
        <div class="word-ja">${escapeHtml(w.ja)}</div>
      </div>
      <span class="word-badge ${badgeCls}">${label}</span>
    `;
    li.addEventListener('click', () => openSheet(w));
    wordListEl.appendChild(li);
  }
}

document.getElementById('listTabs').addEventListener('click', (e) => {
  const b = e.target.closest('.list-tab');
  if (!b) return;
  listFilter = b.dataset.filter;
  document.querySelectorAll('.list-tab').forEach((t) => t.classList.toggle('active', t === b));
  renderList();
});
searchInput.addEventListener('input', () => { query = searchInput.value; renderList(); });

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------- 進捗 ----------
function updateProgress() {
  const total = words.length;
  const learned = words.filter((w) => w.status === 'learned').length;
  document.getElementById('progressMini').textContent = `覚えた ${learned} / ${total}`;
}

// ---------- ビュー切替 ----------
const studyView = document.getElementById('studyView');
const listView = document.getElementById('listView');
function switchView(v) {
  studyView.hidden = v !== 'study';
  listView.hidden = v !== 'list';
  document.querySelectorAll('.nav-btn[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === v));
  if (v === 'study') renderStudy();
  if (v === 'list') renderList();
}
document.querySelectorAll('.nav-btn[data-view]').forEach((b) =>
  b.addEventListener('click', () => switchView(b.dataset.view))
);

// ---------- 追加/編集シート ----------
const sheet = document.getElementById('sheet');
const form = document.getElementById('wordForm');
const fEn = document.getElementById('fEn');
const fJa = document.getElementById('fJa');
const fPos = document.getElementById('fPos');
const fId = document.getElementById('fId');
const deleteBtn = document.getElementById('deleteBtn');

function openSheet(w) {
  if (w) {
    document.getElementById('sheetTitle').textContent = '単語を編集';
    fId.value = w.id; fEn.value = w.en; fJa.value = w.ja; fPos.value = w.pos;
    deleteBtn.hidden = false;
  } else {
    document.getElementById('sheetTitle').textContent = '単語を追加';
    fId.value = ''; form.reset();
    deleteBtn.hidden = true;
  }
  sheet.hidden = false;
}
function closeSheet() { sheet.hidden = true; }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const en = fEn.value.trim(), ja = fJa.value.trim();
  if (!en || !ja) return;
  const id = fId.value;
  if (id) {
    const w = words.find((x) => x.id === id);
    w.en = en; w.ja = ja; w.pos = fPos.value.trim(); w.updatedAt = Date.now();
  } else {
    words.push(newWord(en, ja, fPos.value));
  }
  save(); updateProgress(); closeSheet();
  if (!listView.hidden) renderList();
  if (!studyView.hidden) renderStudy();
});

deleteBtn.addEventListener('click', () => {
  const id = fId.value;
  if (!id || !confirm('この単語を削除しますか？')) return;
  words = words.filter((x) => x.id !== id);
  save(); updateProgress(); closeSheet();
  if (!listView.hidden) renderList();
  if (!studyView.hidden) renderStudy();
});

// ---------- インポート ----------
const importSheet = document.getElementById('importSheet');
document.getElementById('importNav').addEventListener('click', () => {
  document.getElementById('importText').value = '';
  document.getElementById('importResult').textContent = '';
  importSheet.hidden = false;
});
document.getElementById('importRun').addEventListener('click', () => {
  const text = document.getElementById('importText').value;
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  let added = 0;
  for (const line of lines) {
    const parts = line.split(/\t|,|、/).map((s) => s.trim()).filter(Boolean);
    if (parts.length < 2) continue;
    const en = parts[0], ja = parts.slice(1).join('、');
    if (words.some((w) => w.en.toLowerCase() === en.toLowerCase())) continue; // 重複スキップ
    words.push(newWord(en, ja, ''));
    added += 1;
  }
  save(); updateProgress();
  document.getElementById('importResult').textContent = `${added}語を追加しました（重複・空行はスキップ）`;
  if (!listView.hidden) renderList();
  if (!studyView.hidden) renderStudy();
});

// ---------- FAB ----------
const fab = document.getElementById('fab');
fab.addEventListener('click', () => openSheet(null));

// シート背景で閉じる
[sheet, importSheet].forEach((s) =>
  s.addEventListener('click', (e) => { if (e.target.matches('[data-close]')) s.hidden = true; })
);

// ---------- モード切替（ハンバーガー/サイドバー）----------
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const hamburger = document.getElementById('hamburger');
const appTitle = document.getElementById('appTitle');
const vocabMode = document.getElementById('vocabMode');
const listeningView = document.getElementById('listeningView');
const MODE_TITLES = { vocab: '単語帳', part2: 'Part 2', part3: 'Part 3', part4: 'Part 4' };

function openDrawer() { drawer.classList.add('open'); drawerOverlay.hidden = false; }
function closeDrawer() { drawer.classList.remove('open'); drawerOverlay.hidden = true; }

function switchMode(mode) {
  closeDrawer();
  document.querySelectorAll('.drawer-item').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
  appTitle.textContent = MODE_TITLES[mode] || '単語帳';
  if (mode === 'vocab') {
    vocabMode.style.display = '';
    listeningView.hidden = true;
    if (window.Listening) window.Listening.close();
    updateProgress();
  } else {
    vocabMode.style.display = 'none';
    listeningView.hidden = false;
    document.getElementById('progressMini').textContent = '';
    if (window.Listening) window.Listening.open(mode);
  }
}

hamburger.addEventListener('click', openDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-item').forEach((b) => b.addEventListener('click', () => switchMode(b.dataset.mode)));

// ---------- 初期化 ----------
updateProgress();
switchView('study');
switchMode('vocab');
