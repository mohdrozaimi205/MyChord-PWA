/* MyChord PWA — versi web untuk iPhone/iPad/komputer. */
'use strict';

/* ---------------- Bahasa ---------------- */
const I18N = {
  ms: {
    home: 'Utama', search: 'Cari', library: 'Pustaka', settings: 'Tetapan', home_title: 'Dengar sekarang',
    morning: 'Selamat pagi', afternoon: 'Selamat petang', evening: 'Selamat malam',
    liked: 'Kegemaran', liked_sub: 'Lagu yang anda suka', device: 'Fail peranti', device_sub: 'FLAC • MP3 • M4A',
    radio: 'Radio', radio_sub: 'Stesen Malaysia', podcasts: 'Podcast', podcasts_sub: 'Malaysia & antarabangsa',
    together: 'Dengar bersama', together_sub: 'Lagu sama, serentak', together_on: 'Sesi aktif', import: 'Import senarai', import_sub: 'Dari Spotify / teks',
    recent: 'Baru dimainkan', s_malay: 'Lagu Melayu popular', s_top: 'Carta global', s_indie: 'Indie Malaysia', s_chill: 'Santai & tenang', s_nasyid: 'Nasyid & ketuhanan', s_pod: 'Podcast popular Malaysia',
    search_hint: 'Lagu, artis, album…', searching: 'Mencari…', no_results: 'Tiada hasil', net_error: 'Gagal: sumber muzik tidak menjawab. Cuba lagi atau tukar sumber di Tetapan.',
    playlists: 'Senarai main', history: 'Sejarah main', new_playlist: 'Nama senarai main baharu', theme: 'Tema', language: 'Bahasa',
    install_title: 'Pasang di skrin utama', source: 'Sumber muzik', save: 'Simpan', saved: 'Disimpan',
    source_note: 'Carian lagu guna pelayan Piped/Invidious awam. Jika carian gagal, tampal alamat pelayan lain di sini (kosongkan untuk automatik).',
    android_title: 'Versi Android', android_note: 'App Android MyChord ada ciri tambahan: kenal lagu guna mikrofon, Dolby & equalizer, log masuk YouTube Music & Spotify, import pautan Spotify, dan main di latar belakang.',
    play_all: 'Main semua', shuffle: 'Kocok', now_playing: 'Sedang dimainkan', empty: 'Senarai kosong', liked_empty: 'Belum ada lagu kegemaran. Tekan ♥ pada lagu.',
    play_next: 'Main seterusnya', add_queue: 'Tambah ke barisan', like: 'Suka', unlike: 'Buang suka', add_pl: 'Tambah ke senarai main', remove: 'Buang', cancel: 'Batal',
    added_queue: 'Ditambah ke barisan', added_to: 'Ditambah ke ', no_pl: 'Cipta senarai main dahulu di Pustaka', lyrics: 'Lirik', lyrics_none: 'Lirik tidak dijumpai', lyrics_loading: 'Memuat lirik…',
    sleep: 'Pemasa tidur', sleep_off: 'Matikan pemasa', minutes: ' minit', queue: 'Barisan', share_song: 'Kongsi lagu', quality: 'Kualiti',
    q_note: 'Versi web main audio melalui pemain YouTube rasmi (kualiti automatik). Untuk tukar kualiti & label Hi-Res FLAC, guna app Android.',
    tg_start: 'Mula sesi (saya pilih lagu)', tg_join: 'Sertai sesi kawan', tg_code: 'Kod 6 huruf', tg_join_btn: 'Sertai', tg_leave: 'Keluar sesi', tg_end: 'Tamatkan sesi',
    tg_invite: 'Jemput kawan', tg_host_note: 'Kongsi kod ini. Kawan buka MyChord (Android atau web) → Dengar bersama → Sertai sesi.',
    tg_in: 'Anda dalam sesi ', tg_joined: 'Masuk sesi — lagu ikut hos', tg_invite_text: '🎧 Jom dengar lagu bersama di MyChord! Buka https://mohdrozaimi205.github.io/MyChord-PWA/ → Dengar bersama → Sertai sesi, kod: ',
    import_text_hint: 'Tampal senarai lagu, satu baris: Artis - Lagu', import_btn: 'Import', imported: ' lagu diimport',
    radio_hint: 'Cari stesen…', pod_hint: 'Cari podcast…', tap_to_play: 'Tekan ▶ untuk mula',
    install_ios: 'Di iPhone/iPad (Safari): tekan butang Kongsi (petak dengan anak panah ke atas) → "Add to Home Screen" / "Tambah ke Skrin Utama" → Add.',
    install_android: 'Di Android (Chrome): tekan butang Pasang di atas, atau menu ⋮ → "Install app".', install_done: 'MyChord sudah dipasang di skrin utama ✓', install_btn: 'Pasang MyChord',
    share_text: 'Cuba MyChord — app muzik tanpa iklan: YouTube Music, radio, podcast, lirik, tema kaca & dengar bersama. Buka: ',
    skipped: 'Lagu ini tidak boleh dimainkan, langkau…', files_added: ' fail ditambah',
    apk_title: 'App Android (APK)', apk_btn: 'Muat turun app Android', apk_sub: 'Versi penuh: kenal lagu, Dolby, log masuk akaun',
    apk_note: 'Versi Android lebih lengkap. Selepas muat turun, buka fail MyChord.apk dan tekan Pasang (benarkan "Pasang dari sumber ini" jika ditanya).',
  },
  en: {
    home: 'Home', search: 'Search', library: 'Library', settings: 'Settings', home_title: 'Listen now',
    morning: 'Good morning', afternoon: 'Good afternoon', evening: 'Good evening',
    liked: 'Liked', liked_sub: 'Songs you love', device: 'Device files', device_sub: 'FLAC • MP3 • M4A',
    radio: 'Radio', radio_sub: 'Malaysian stations', podcasts: 'Podcasts', podcasts_sub: 'Malaysia & worldwide',
    together: 'Listen together', together_sub: 'Same song, in sync', together_on: 'Session active', import: 'Import list', import_sub: 'From Spotify / text',
    recent: 'Recently played', s_malay: 'Popular Malay songs', s_top: 'Global charts', s_indie: 'Malaysian indie', s_chill: 'Chill & calm', s_nasyid: 'Nasyid & spiritual', s_pod: 'Popular podcasts in Malaysia',
    search_hint: 'Songs, artists, albums…', searching: 'Searching…', no_results: 'No results', net_error: 'Failed: the music source did not answer. Try again or change the source in Settings.',
    playlists: 'Playlists', history: 'History', new_playlist: 'New playlist name', theme: 'Theme', language: 'Language',
    install_title: 'Install to home screen', source: 'Music source', save: 'Save', saved: 'Saved',
    source_note: 'Song search uses public Piped/Invidious servers. If search fails, paste another server address here (leave empty for automatic).',
    android_title: 'Android version', android_note: 'The MyChord Android app adds: song recognition with the microphone, Dolby & equalizer, YouTube Music & Spotify sign-in, Spotify link import, and background play.',
    play_all: 'Play all', shuffle: 'Shuffle', now_playing: 'Now playing', empty: 'List is empty', liked_empty: 'No liked songs yet. Tap ♥ on a song.',
    play_next: 'Play next', add_queue: 'Add to queue', like: 'Like', unlike: 'Unlike', add_pl: 'Add to playlist', remove: 'Remove', cancel: 'Cancel',
    added_queue: 'Added to queue', added_to: 'Added to ', no_pl: 'Create a playlist first in Library', lyrics: 'Lyrics', lyrics_none: 'Lyrics not found', lyrics_loading: 'Loading lyrics…',
    sleep: 'Sleep timer', sleep_off: 'Turn off timer', minutes: ' min', queue: 'Queue', share_song: 'Share song', quality: 'Quality',
    q_note: 'The web version plays audio through the official YouTube player (automatic quality). For quality switching & Hi-Res FLAC labels, use the Android app.',
    tg_start: 'Start a session (I pick the songs)', tg_join: 'Join a friend\'s session', tg_code: '6-letter code', tg_join_btn: 'Join', tg_leave: 'Leave session', tg_end: 'End session',
    tg_invite: 'Invite friends', tg_host_note: 'Share this code. Friends open MyChord (Android or web) → Listen together → Join.',
    tg_in: 'You are in session ', tg_joined: 'Joined — music follows the host', tg_invite_text: '🎧 Listen with me on MyChord! Open https://mohdrozaimi205.github.io/MyChord-PWA/ → Listen together → Join, code: ',
    import_text_hint: 'Paste a song list, one per line: Artist - Song', import_btn: 'Import', imported: ' songs imported',
    radio_hint: 'Search stations…', pod_hint: 'Search podcasts…', tap_to_play: 'Tap ▶ to start',
    install_ios: 'On iPhone/iPad (Safari): tap the Share button (square with an up arrow) → "Add to Home Screen" → Add.',
    install_android: 'On Android (Chrome): tap the Install button above, or menu ⋮ → "Install app".', install_done: 'MyChord is installed on your home screen ✓', install_btn: 'Install MyChord',
    share_text: 'Try MyChord — ad-free music: YouTube Music, radio, podcasts, lyrics, glass themes & listen together. Open: ',
    skipped: 'This song can\'t be played, skipping…', files_added: ' files added',
    apk_title: 'Android app (APK)', apk_btn: 'Download the Android app', apk_sub: 'Full version: song recognition, Dolby, account sign-in',
    apk_note: 'The Android version has more features. After downloading, open MyChord.apk and tap Install (allow "Install from this source" if asked).',
  },
};
const store = {
  get(k, d) { try { const v = localStorage.getItem('mc_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('mc_' + k, JSON.stringify(v)); } catch (e) { } },
};
let LANG = store.get('lang', (navigator.language || 'ms').startsWith('ms') ? 'ms' : 'en');
const t = (k) => (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || k;
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const APP_URL = 'https://mohdrozaimi205.github.io/MyChord-PWA/';
const APK_URL = APP_URL + 'MyChord.apk';

/* ---------------- Tema ---------------- */
const THEMES = [
  { id: 'ember', ms: 'Bara', en: 'Ember', c: ['#0E0B0A', '#1A1513', '#262019', '#FFF4EC', '#A8988C', '#FF6B35', '#1A0B03'] },
  { id: 'kaca', ms: 'Kaca', en: 'Glass', glass: 'dark', c: ['#1A1238', 'rgba(255,255,255,.14)', 'rgba(255,255,255,.22)', '#FFFFFF', '#D2D6EA', '#9EE7FF', '#06202B'] },
  { id: 'kacacerah', ms: 'Kaca Cerah', en: 'Glass Light', glass: 'light', c: ['#E9EEFB', 'rgba(255,255,255,.55)', 'rgba(255,255,255,.72)', '#121826', '#4A5568', '#3B6CFF', '#FFFFFF'] },
  { id: 'lagun', ms: 'Lagun', en: 'Lagoon', c: ['#071214', '#0F1F22', '#172D31', '#E8FBFB', '#8FB0B3', '#2EE6C5', '#032420'] },
  { id: 'malam', ms: 'Ungu Malam', en: 'Night Violet', c: ['#0D0A17', '#181327', '#231C38', '#F1ECFF', '#A59CC4', '#A98BFF', '#170A3D'] },
  { id: 'matcha', ms: 'Matcha', en: 'Matcha', c: ['#0B110C', '#142017', '#1E2E21', '#EEF7EC', '#9DB49F', '#9BE15D', '#102205'] },
  { id: 'amoled', ms: 'AMOLED', en: 'AMOLED', c: ['#000000', '#0E0E0E', '#1A1A1A', '#FFFFFF', '#9A9A9A', '#FF3B5C', '#FFFFFF'] },
  { id: 'kertas', ms: 'Kertas', en: 'Paper', light: true, c: ['#F6F1EA', '#FFFFFF', '#EDE5DA', '#1B1714', '#6E645B', '#D9480F', '#FFFFFF'] },
  { id: 'laut', ms: 'Laut Dalam', en: 'Deep Sea', c: ['#06101F', '#0D1A2E', '#15253D', '#EAF2FF', '#8EA3C2', '#4FA3FF', '#04142B'] },
  { id: 'kopi', ms: 'Kopi', en: 'Coffee', c: ['#130E0A', '#1F1712', '#2B211A', '#F7EEE6', '#B39F8E', '#D4A373', '#2A1A0A'] },
  { id: 'emas', ms: 'Emas', en: 'Gold', c: ['#0B0A07', '#17150F', '#221F16', '#FFF8E6', '#B5AA8C', '#E8B931', '#251C00'] },
  { id: 'salji', ms: 'Salji', en: 'Snow', light: true, c: ['#F2F6FA', '#FFFFFF', '#E3EAF2', '#0F172A', '#5B6B80', '#2563EB', '#FFFFFF'] },
  { id: 'neon', ms: 'Neon', en: 'Neon', c: ['#05040A', '#100E1C', '#1A1730', '#F5F3FF', '#9B97C0', '#00F0FF', '#001A1C'] },
  { id: 'sakura', ms: 'Sakura', en: 'Sakura', c: ['#160B10', '#22121A', '#301A25', '#FFEFF4', '#C59AAB', '#FF8FB8', '#3A0A1E'] },
];
const WALLS = {
  dark: 'radial-gradient(circle at 10% 12%, rgba(138,92,255,.75), transparent 45%), radial-gradient(circle at 95% 55%, rgba(0,194,168,.6), transparent 42%), radial-gradient(circle at 30% 95%, rgba(255,95,162,.5), transparent 40%), linear-gradient(160deg, #1A1238, #0B2A4A)',
  light: 'radial-gradient(circle at 10% 12%, rgba(157,184,255,.85), transparent 45%), radial-gradient(circle at 95% 55%, rgba(166,240,226,.8), transparent 42%), radial-gradient(circle at 30% 95%, rgba(255,194,218,.8), transparent 40%), linear-gradient(160deg, #E9EEFB, #FBE9F2)',
};
function applyTheme(id) {
  const th = THEMES.find((x) => x.id === id) || THEMES[0];
  const r = document.documentElement.style;
  const [bg, s, s2, tx, dim, ac, on] = th.c;
  r.setProperty('--bg', th.glass ? 'transparent' : bg);
  r.setProperty('--surface', s); r.setProperty('--surface2', s2); r.setProperty('--text', tx);
  r.setProperty('--dim', dim); r.setProperty('--accent', ac); r.setProperty('--on-accent', on);
  r.setProperty('--stroke', th.glass ? (th.glass === 'dark' ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.8)') : 'transparent');
  r.setProperty('--blur', th.glass ? '22px' : '0px');
  r.setProperty('--wall', th.glass ? WALLS[th.glass] : 'none');
  document.documentElement.style.colorScheme = th.light || th.glass === 'light' ? 'light' : 'dark';
  $('meta[name=theme-color]').setAttribute('content', bg);
  if (th.glass) document.body.style.background = bg; else document.body.style.background = '';
  store.set('theme', th.id);
}

/* ---------------- Ikon SVG ---------------- */
const IC = {
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/></svg>',
  radio: '<svg viewBox="0 0 24 24"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm13-8h-2v-2h-2v2H4V8h16v4z"/></svg>',
  podcast: '<svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>',
  people: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
  history: '<svg viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>',
  queue: '<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18A3 3 0 1 0 19 17V8h3V6h-5z"/></svg>',
  lyrics: '<svg viewBox="0 0 24 24"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></svg>',
  timer: '<svg viewBox="0 0 24 24"><path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A3 3 0 1 0 6 15c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65A2.92 2.92 0 1 0 18 16.08z"/></svg>',
  hq: '<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"/></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>',
  repeatOne: '<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></svg>',
  repeat: '<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',
};
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2a2420"/><path d="M50 28v31a11 11 0 1 0 6 10V40h12V28z" fill="#8a7d72"/></svg>');

/* ---------------- Toast & lembaran ---------------- */
let toastTimer;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => (el.hidden = true), 2600);
}
function sheet(html, onReady) {
  const s = $('#sheet'); $('#sheetCard').innerHTML = html; s.hidden = false;
  s.onclick = (e) => { if (e.target === s) closeSheet(); };
  if (onReady) onReady($('#sheetCard'));
}
function closeSheet() { $('#sheet').hidden = true; }
function options(title, opts) {
  sheet(`<h3>${esc(title)}</h3>` + opts.map((o, i) => `<button class="opt${o.on ? ' on' : ''}" data-i="${i}">${esc(o.label)}</button>`).join('') +
    `<button class="opt dim" data-i="-1">${esc(t('cancel'))}</button>`, (c) => {
    c.querySelectorAll('.opt').forEach((b) => b.onclick = () => { closeSheet(); const i = +b.dataset.i; if (i >= 0) opts[i].run(); });
  });
}

/* ---------------- Rangkaian ---------------- */
async function getJSON(url, ms = 9000) {
  const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), ms);
  try { const r = await fetch(url, { signal: ctl.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); }
  finally { clearTimeout(tm); }
}

/* ---------------- Sumber lagu (Piped / Invidious) ---------------- */
const PIPED = ['https://pipedapi.kavin.rocks', 'https://pipedapi.adminforge.de', 'https://api.piped.private.coffee', 'https://pipedapi.reallyaweso.me', 'https://pipedapi.leptons.xyz'];
const INVID = ['https://inv.nadeko.net', 'https://invidious.nerdvpn.de', 'https://invidious.f5.si', 'https://yewtu.be', 'https://invidious.privacyredirect.com'];
function ytThumb(id) { return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }
function fromPiped(items) {
  return (items || []).filter((x) => x.url && x.url.includes('v=')).map((x) => {
    const id = x.url.split('v=')[1].split('&')[0];
    return { id: 'yt:' + id, t: x.title, a: (x.uploaderName || '').replace(/ - Topic$/, ''), img: x.thumbnail || ytThumb(id), d: x.duration > 0 ? x.duration : 0 };
  });
}
function fromInvidious(items) {
  return (items || []).filter((x) => x.type === 'video' && x.videoId).map((x) => ({
    id: 'yt:' + x.videoId, t: x.title, a: (x.author || '').replace(/ - Topic$/, ''), img: ytThumb(x.videoId), d: x.lengthSeconds || 0,
  }));
}
async function searchSongs(q) {
  const custom = store.get('instance', '').trim().replace(/\/+$/, '');
  const tries = [];
  if (custom) tries.push({ base: custom, kind: custom.includes('piped') ? 'piped' : 'auto' });
  const last = store.get('lastSource', null);
  if (last) tries.push(last);
  PIPED.forEach((b) => tries.push({ base: b, kind: 'piped' }));
  INVID.forEach((b) => tries.push({ base: b, kind: 'inv' }));
  for (const s of tries) {
    try {
      let res;
      if (s.kind === 'piped' || s.kind === 'auto') {
        try {
          const j = await getJSON(`${s.base}/search?q=${encodeURIComponent(q)}&filter=music_songs`, 7000);
          res = fromPiped(j.items);
          if (!res.length) res = fromPiped((await getJSON(`${s.base}/search?q=${encodeURIComponent(q)}&filter=videos`, 7000)).items);
          s.kind = 'piped';
        } catch (e) { if (s.kind === 'piped') throw e; }
      }
      if (!res) { res = fromInvidious(await getJSON(`${s.base}/api/v1/search?q=${encodeURIComponent(q)}&type=video`, 7000)); s.kind = 'inv'; }
      if (res && res.length) { store.set('lastSource', { base: s.base, kind: s.kind }); return res; }
    } catch (e) { /* cuba pelayan seterusnya */ }
  }
  throw new Error('no-source');
}
const shelfCache = {};
async function cachedSearch(q) {
  const c = store.get('shelf_' + q, null);
  if (c && Date.now() - c.at < 6 * 3600e3) return c.items;
  if (shelfCache[q]) return shelfCache[q];
  const items = await (shelfCache[q] = searchSongs(q));
  store.set('shelf_' + q, { at: Date.now(), items });
  return items;
}

/* ---------------- Radio, podcast, lirik ---------------- */
async function radioList(q) {
  const base = 'https://de1.api.radio-browser.info/json/stations/';
  const url = q ? `${base}search?name=${encodeURIComponent(q)}&order=clickcount&reverse=true&hidebroken=true&limit=60`
    : `${base}bycountrycodeexact/MY?order=clickcount&reverse=true&hidebroken=true&limit=80`;
  const a = await getJSON(url);
  return a.filter((s) => s.url_resolved || s.url).map((s) => ({
    id: 'radio:' + (s.url_resolved || s.url), t: (s.name || '').trim(), a: (s.tags || s.country || '').slice(0, 40), img: s.favicon || '',
    b: ((s.codec || 'LIVE') + (s.bitrate ? ' ' + s.bitrate : '')).toUpperCase(),
  }));
}
const big = (u) => (u || '').replace(/\d+x\d+bb/, '600x600bb');
async function podcastTop(cc, badge) {
  const j = await getJSON(`https://rss.applemarketingtools.com/api/v2/${cc}/podcasts/top/50/podcasts.json`);
  return (j.feed.results || []).map((p) => ({ id: 'pod:' + p.id, t: p.name, a: p.artistName, img: big(p.artworkUrl100), b: badge }));
}
async function podcastSearch(q) {
  const j = await getJSON(`https://itunes.apple.com/search?media=podcast&country=MY&limit=50&term=${encodeURIComponent(q)}`);
  return (j.results || []).map((p) => ({ id: 'pod:' + p.collectionId, t: p.collectionName, a: p.artistName, img: big(p.artworkUrl600 || p.artworkUrl100), b: 'PODCAST' }));
}
async function podcastEpisodes(id) {
  const j = await getJSON(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=100`);
  const show = (j.results || []).find((r) => r.wrapperType === 'track') || {};
  return (j.results || []).filter((r) => r.wrapperType === 'podcastEpisode' && r.episodeUrl).map((e) => ({
    id: 'url:' + e.episodeUrl, t: e.trackName, a: show.collectionName || e.collectionName || '', img: big(e.artworkUrl600 || e.artworkUrl160 || show.artworkUrl600), d: Math.round((e.trackTimeMillis || 0) / 1000), b: 'PODCAST',
  }));
}
function cleanTitle(s) {
  return (s || '').replace(/\(.*?\)|\[.*?]/g, ' ').replace(/\b(official|music video|lyric video|lyrics|audio|mv|hd|4k)\b/gi, ' ').replace(/\s(ft\.?|feat\.?)\s.*$/i, ' ').replace(/\s+/g, ' ').trim();
}
async function fetchLyrics(title, artist) {
  const tt = cleanTitle(title), aa = (artist || '').replace(/ - Topic$/, '');
  let arr = await getJSON(`https://lrclib.net/api/search?track_name=${encodeURIComponent(tt)}&artist_name=${encodeURIComponent(aa)}`);
  if (!arr.length) arr = await getJSON(`https://lrclib.net/api/search?q=${encodeURIComponent(tt + ' ' + aa)}`);
  const pick = arr.find((o) => o.syncedLyrics) || arr.find((o) => o.plainLyrics);
  if (!pick) return null;
  if (pick.syncedLyrics) {
    const lines = [];
    pick.syncedLyrics.split('\n').forEach((l) => {
      const m = l.trim().match(/^\[(\d+):(\d+)(?:[.:](\d+))?]\s*(.*)$/);
      if (m) lines.push({ ms: +m[1] * 60000 + +m[2] * 1000 + (m[3] ? (m[3].length === 2 ? +m[3] * 10 : +m[3].slice(0, 3)) : 0), text: m[4] || '♪' });
    });
    return { synced: true, lines };
  }
  return { synced: false, lines: pick.plainLyrics.split('\n').map((x) => ({ ms: -1, text: x })) };
}

/* ---------------- Simpanan ---------------- */
const lib = {
  liked: () => store.get('liked', []),
  isLiked: (id) => lib.liked().some((x) => x.id === id),
  toggleLike(tr) {
    let l = lib.liked(); const had = l.some((x) => x.id === tr.id);
    l = had ? l.filter((x) => x.id !== tr.id) : [slim(tr), ...l];
    store.set('liked', l); return !had;
  },
  history: () => store.get('history', []),
  addHistory(tr) {
    if (!tr || tr.id.startsWith('file:')) return;
    const l = [slim(tr), ...lib.history().filter((x) => x.id !== tr.id)].slice(0, 60);
    store.set('history', l);
  },
  playlists: () => store.get('playlists', []),
  savePlaylists: (p) => store.set('playlists', p),
};
function slim(tr) { return { id: tr.id, t: tr.t, a: tr.a, img: tr.img || '', d: tr.d || 0, b: tr.b || '' }; }

/* ---------------- Enjin audio ---------------- */
const audio = $('#audio');
let yt = null, ytReady = false, ytPending = null;
window.onYouTubeIframeAPIReady = () => {
  yt = new YT.Player('yt', {
    width: 200, height: 200,
    playerVars: { playsinline: 1, controls: 0, disablekb: 1, rel: 0, fs: 0, iv_load_policy: 3 },
    events: {
      onReady: () => { ytReady = true; if (ytPending) { const p = ytPending; ytPending = null; p(); } },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) onEnded();
        if (e.data === YT.PlayerState.PLAYING) { state.playing = true; updateUI(); }
        if (e.data === YT.PlayerState.PAUSED) { state.playing = false; updateUI(); }
      },
      onError: () => ytFailed(),
    },
  });
};
(function loadYT() { const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s); })();

const state = { queue: [], index: -1, playing: false, engine: null, shuffle: false, repeat: 0, sleepAt: 0, tried: {} };
const cur = () => state.queue[state.index];

function engineTime() {
  if (state.engine === 'yt' && ytReady && yt.getCurrentTime) return { pos: yt.getCurrentTime() || 0, dur: yt.getDuration() || 0 };
  if (state.engine === 'audio') return { pos: audio.currentTime || 0, dur: isFinite(audio.duration) ? audio.duration : 0 };
  return { pos: 0, dur: 0 };
}
function stopAll() {
  try { audio.pause(); } catch (e) { }
  if (ytReady) try { yt.pauseVideo(); } catch (e) { }
}
async function playIndex(i, startAt = 0) {
  if (i < 0 || i >= state.queue.length) return;
  state.index = i; const tr = cur(); stopAll();
  state.playing = true; updateUI(); lib.addHistory(tr); setMediaSession(tr);
  if (tr.id.startsWith('radio:') || tr.id.startsWith('url:') || tr.id.startsWith('file:')) {
    state.engine = 'audio';
    audio.src = tr.id.startsWith('file:') ? tr.src : tr.id.slice(tr.id.indexOf(':') + 1);
    audio.currentTime = startAt || 0;
    audio.play().catch(() => { state.playing = false; updateUI(); toast(t('tap_to_play')); });
    return;
  }
  state.engine = 'yt';
  let vid = tr.id.startsWith('yt:') ? tr.id.slice(3) : null;
  if (!vid) {
    try {
      const r = await searchSongs(tr.id.slice(2));
      if (!r.length) throw new Error('none');
      vid = r[0].id.slice(3); tr.vid = vid; if (!tr.img) tr.img = r[0].img; updateUI();
    } catch (e) { toast(t('net_error')); return next(); }
  }
  const go = () => { yt.loadVideoById({ videoId: vid, startSeconds: startAt || 0 }); };
  if (ytReady) go(); else ytPending = go;
}
async function ytFailed() {
  // Lagu tidak boleh dimainkan dalam pemain web — cuba versi lain, jika gagal langkau
  const tr = cur(); if (!tr) return;
  state.tried[tr.id] = (state.tried[tr.id] || 0) + 1;
  if (state.tried[tr.id] <= 2) {
    try {
      const r = await searchSongs(`${cleanTitle(tr.t)} ${tr.a} audio`);
      const alt = r[state.tried[tr.id]] || r[0];
      if (alt && alt.id !== tr.id) { yt.loadVideoById(alt.id.slice(3)); return; }
    } catch (e) { }
  }
  toast(t('skipped')); next();
}
function onEnded() {
  if (state.repeat === 2) return playIndex(state.index);
  if (state.index + 1 < state.queue.length) return playIndex(state.index + 1);
  if (state.repeat === 1 && state.queue.length) return playIndex(0);
  state.playing = false; updateUI();
}
audio.addEventListener('ended', onEnded);
audio.addEventListener('playing', () => { state.playing = true; updateUI(); });
audio.addEventListener('pause', () => { if (state.engine === 'audio') { state.playing = false; updateUI(); } });
audio.addEventListener('error', () => { if (state.engine === 'audio' && audio.src) { toast(t('skipped')); next(); } });

function togglePlay() {
  if (!cur()) return;
  if (state.engine === 'audio') { audio.paused ? audio.play() : audio.pause(); }
  else if (ytReady) { state.playing ? yt.pauseVideo() : yt.playVideo(); }
  state.playing = !state.playing; updateUI(); tgSend();
}
function next() { if (state.index + 1 < state.queue.length) playIndex(state.index + 1); else if (state.repeat === 1) playIndex(0); }
function prev() { const { pos } = engineTime(); if (pos > 4) seekTo(0); else if (state.index > 0) playIndex(state.index - 1); }
function seekTo(sec) {
  if (state.engine === 'audio') audio.currentTime = sec; else if (ytReady) yt.seekTo(sec, true);
  setTimeout(tgSend, 300);
}
function playList(list, i = 0, shuffle = false) {
  let q = list.filter((x) => !isContainer(x)).map((x) => ({ ...x }));
  if (!q.length) return;
  let start = Math.max(0, q.findIndex((x) => x.id === (list[i] || {}).id));
  if (shuffle) { for (let k = q.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [q[k], q[j]] = [q[j], q[k]]; } start = 0; }
  state.queue = q; state.tried = {}; playIndex(start);
}
const isContainer = (x) => x.id.startsWith('pod:');
function playNext(tr) { if (!cur()) return playList([tr]); state.queue.splice(state.index + 1, 0, { ...tr }); toast(t('added_queue')); }
function addQueue(tr) { if (!cur()) return playList([tr]); state.queue.push({ ...tr }); toast(t('added_queue')); }

function setMediaSession(tr) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({ title: tr.t, artist: tr.a, artwork: tr.img ? [{ src: tr.img, sizes: '512x512' }] : [] });
  const h = { play: togglePlay, pause: togglePlay, previoustrack: prev, nexttrack: next };
  Object.keys(h).forEach((k) => { try { navigator.mediaSession.setActionHandler(k, h[k]); } catch (e) { } });
}

/* ---------------- Paparan senarai ---------------- */
function fmt(sec) { sec = Math.max(0, Math.floor(sec || 0)); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0'); }
function trackRow(tr, i, ctx) {
  const b = tr.b ? `<span class="badge">${esc(tr.b)}</span>` : '';
  const playing = cur() && cur().id === tr.id ? ' playing' : '';
  return `<div class="track${playing}" data-i="${i}"><img loading="lazy" src="${esc(tr.img || PLACEHOLDER)}" onerror="this.src='${PLACEHOLDER}'"><div class="tx"><b>${esc(tr.t)}</b><span>${b}${esc(tr.a)}${tr.d ? ' • ' + fmt(tr.d) : ''}</span></div>${isContainer(tr) ? '' : `<button class="more" data-more="${i}">${IC.more}</button>`}</div>`;
}
function bindList(el, list, ctx = {}) {
  el.innerHTML = list.map((x, i) => trackRow(x, i, ctx)).join('');
  el.onclick = (e) => {
    const m = e.target.closest('[data-more]');
    if (m) return trackMenu(list[+m.dataset.more], ctx.onRemove ? () => ctx.onRemove(+m.dataset.more) : null);
    const row = e.target.closest('.track'); if (!row) return;
    open(list, +row.dataset.i);
  };
}
function open(list, i) {
  const tr = list[i];
  if (tr.id.startsWith('pod:')) return showList({ title: tr.t, load: () => podcastEpisodes(tr.id.slice(4)), save: true });
  playList(list, i);
}
function trackMenu(tr, onRemove) {
  const opts = [
    { label: t('play_next'), run: () => playNext(tr) },
    { label: t('add_queue'), run: () => addQueue(tr) },
    { label: lib.isLiked(tr.id) ? t('unlike') : t('like'), run: () => { lib.toggleLike(tr); updateUI(); } },
  ];
  if (!tr.id.startsWith('radio:')) opts.push({ label: t('add_pl'), run: () => pickPlaylist(tr) });
  if (onRemove) opts.push({ label: t('remove'), run: onRemove });
  options(tr.t, opts);
}
function pickPlaylist(tr) {
  const pls = lib.playlists();
  if (!pls.length) return toast(t('no_pl'));
  options(t('add_pl'), pls.map((p, k) => ({ label: p.name, run: () => { pls[k].tracks.push(slim(tr)); lib.savePlaylists(pls); toast(t('added_to') + p.name); } })));
}

/* ---------------- Halaman ---------------- */
let curPage = 'home', listReturn = 'home';
function showPage(p) {
  document.querySelectorAll('.page').forEach((s) => (s.hidden = s.id !== 'page-' + p));
  document.querySelectorAll('#nav button').forEach((b) => b.classList.toggle('on', b.dataset.page === p));
  if (p !== 'list') curPage = p;
  if (p === 'library') renderLibrary();
  if (p === 'settings') renderSettings();
  if (p === 'home') renderRecent();
  window.scrollTo(0, 0);
}
function showList({ title, load, items, search, save, onRemove, playlistId }) {
  listReturn = curPage;
  showPage('list');
  $('#listTitle').textContent = title;
  $('#listSave').hidden = !save;
  $('#listSearchForm').hidden = !search;
  $('#listActions').hidden = !!search && search.hideActions;
  const status = $('#listStatus'), el = $('#listItems');
  let current = [];
  const render = (l) => {
    current = l; status.textContent = l.length ? '' : t('empty');
    bindList(el, l, { onRemove: onRemove ? (i) => { onRemove(i); render(current.filter((_, k) => k !== i)); } : null });
  };
  const run = async (fn) => {
    el.innerHTML = ''; status.textContent = t('searching');
    try { render(await fn()); } catch (e) { status.textContent = t('net_error'); }
  };
  if (items) render(items); else run(load);
  if (search) {
    $('#listSearch').value = ''; $('#listSearch').placeholder = search.hint;
    $('#listSearchForm').onsubmit = (e) => { e.preventDefault(); const q = $('#listSearch').value.trim(); $('#listSearch').blur(); run(() => (q ? search.fn(q) : load())); };
  }
  $('#listPlay').onclick = () => playList(current, 0);
  $('#listShuffle').onclick = () => playList(current, 0, true);
  $('#listSave').onclick = () => {
    const pls = lib.playlists(); pls.unshift({ id: 'pl' + Date.now(), name: title, tracks: current.filter((x) => !isContainer(x)).map(slim) });
    lib.savePlaylists(pls); toast(t('saved'));
  };
}
$('#listBack').onclick = () => showPage(listReturn);

/* ---------------- Utama ---------------- */
function greet() { const h = new Date().getHours(); return t(h < 12 ? 'morning' : h < 19 ? 'afternoon' : 'evening'); }
function renderTiles() {
  const tiles = [
    { ic: IC.heartFill, k: 'liked', sub: 'liked_sub', run: () => showList({ title: t('liked'), items: lib.liked(), onRemove: (i) => { const l = lib.liked(); l.splice(i, 1); store.set('liked', l); } }) },
    { ic: IC.phone, k: 'device', sub: 'device_sub', run: () => $('#filePick').click() },
    { ic: IC.radio, k: 'radio', sub: 'radio_sub', run: () => showList({ title: t('radio'), load: () => radioList(''), search: { hint: t('radio_hint'), fn: radioList, hideActions: true } }) },
    { ic: IC.podcast, k: 'podcasts', sub: 'podcasts_sub', run: () => showList({ title: t('podcasts'), load: podcastDefault, search: { hint: t('pod_hint'), fn: podcastSearch, hideActions: true } }) },
    { ic: IC.people, k: 'together', sub: tg.mode ? 'together_on' : 'together_sub', run: togetherMenu },
    { ic: IC.link, k: 'import', sub: 'import_sub', run: importText },
  ];
  const el = $('#tiles');
  el.innerHTML = tiles.map((x, i) => `<button class="tile" data-i="${i}"><span class="ic">${x.ic}</span><span><b>${esc(t(x.k))}</b><small>${esc(t(x.sub))}</small></span></button>`).join('');
  el.onclick = (e) => { const b = e.target.closest('.tile'); if (b) tiles[+b.dataset.i].run(); };
}
async function podcastDefault() {
  const out = [];
  try { out.push(...await podcastTop('my', 'MALAYSIA')); } catch (e) { }
  try { out.push(...await podcastTop('us', LANG === 'ms' ? 'ANTARABANGSA' : 'WORLDWIDE')); } catch (e) { }
  if (!out.length) throw new Error('none');
  return out;
}
const SHELVES = [['s_malay', 'lagu melayu terkini popular'], ['s_top', 'top hits global 2026'], ['s_indie', 'indie malaysia'], ['s_chill', 'lofi chill santai'], ['s_nasyid', 'nasyid terbaik']];
function shelfEl(title, id, onTitle) {
  const d = document.createElement('div'); d.className = 'shelf'; d.id = id;
  d.innerHTML = `<h2${onTitle ? ' class="link"' : ''}>${esc(title)}${onTitle ? ' ›' : ''}</h2><div class="scroller">${'<div class="skeleton"></div>'.repeat(4)}</div>`;
  if (onTitle) d.querySelector('h2').onclick = onTitle;
  return d;
}
function fillShelf(d, list) {
  if (!list || !list.length) { d.remove(); return; }
  const sc = d.querySelector('.scroller');
  sc.innerHTML = list.slice(0, 20).map((x, i) => `<button class="card-item" data-i="${i}"><img loading="lazy" src="${esc(x.img || PLACEHOLDER)}" onerror="this.src='${PLACEHOLDER}'"><b>${esc(x.t)}</b><span>${esc(x.a)}</span></button>`).join('');
  sc.onclick = (e) => { const b = e.target.closest('.card-item'); if (b) open(list, +b.dataset.i); };
  let pressTimer;
  sc.oncontextmenu = (e) => { const b = e.target.closest('.card-item'); if (b && !isContainer(list[+b.dataset.i])) { e.preventDefault(); trackMenu(list[+b.dataset.i]); } };
}
function renderHome() {
  $('#greet').textContent = greet();
  renderTiles();
  const sh = $('#shelves'); sh.innerHTML = '';
  sh.appendChild(shelfEl(t('recent'), 'shelf-recent'));
  renderRecent();
  const pod = shelfEl(t('s_pod'), 'shelf-pod', () => showList({ title: t('podcasts'), load: podcastDefault, search: { hint: t('pod_hint'), fn: podcastSearch, hideActions: true } }));
  SHELVES.forEach(([k, q], i) => {
    const d = shelfEl(t(k), 'shelf-' + i, () => showList({ title: t(k), load: () => searchSongs(q) }));
    sh.appendChild(d);
    if (i === 1) sh.appendChild(pod);
    cachedSearch(q).then((l) => fillShelf(d, l)).catch(() => {
      d.querySelector('.scroller').innerHTML = `<p class="dim small" style="padding:0 0 0 2px">${esc(t('net_error'))}</p>`;
    });
  });
  podcastTop('my', 'MALAYSIA').then((l) => fillShelf(pod, l)).catch(() => pod.remove());
}
function renderRecent() {
  const d = $('#shelf-recent'); if (!d) return;
  const h = lib.history();
  d.hidden = !h.length;
  if (h.length) fillShelf(d, h.slice(0, 15));
}
$('#filePick').onchange = (e) => {
  const files = [...e.target.files];
  if (!files.length) return;
  const list = files.map((f) => {
    const ext = (f.name.split('.').pop() || '').toUpperCase();
    return { id: 'file:' + f.name + ':' + f.size, src: URL.createObjectURL(f), t: f.name.replace(/\.[^.]+$/, ''), a: t('device'), img: '', b: ['FLAC', 'WAV', 'ALAC'].includes(ext) ? ext + ' • LOSSLESS' : ext };
  });
  toast(list.length + t('files_added'));
  playList(list, 0);
  e.target.value = '';
};
function importText() {
  sheet(`<h3>${esc(t('import'))}</h3><textarea class="field" id="impText" style="height:180px;padding:12px" placeholder="${esc(t('import_text_hint'))}"></textarea><button class="btn accent" id="impGo" style="width:100%">${esc(t('import_btn'))}</button>`, (c) => {
    $('#impGo', c).onclick = () => {
      const lines = $('#impText', c).value.split('\n').map((l) => l.trim().replace(/^\d+[.)]\s*/, '')).filter(Boolean);
      if (!lines.length) return;
      const tracks = lines.map((l) => { const i = l.indexOf(' - '); return { id: 'q:' + l, t: i > 0 ? l.slice(i + 3) : l, a: i > 0 ? l.slice(0, i) : '', img: '', b: 'IMPORT' }; });
      const pls = lib.playlists(); const name = t('import') + ' ' + new Date().toLocaleDateString();
      pls.unshift({ id: 'pl' + Date.now(), name, tracks }); lib.savePlaylists(pls);
      closeSheet(); toast(tracks.length + t('imported'));
      showList({ title: name, items: tracks });
    };
  });
}

/* ---------------- Cari ---------------- */
const SUGGEST = ['Siti Nurhaliza', 'Hindia', 'Faizal Tahir', 'Taylor Swift', 'Ernie Zakri', 'Bruno Mars', 'Search', 'Exists', 'Lofi', 'Lagu raya', 'Nasyid'];
let searchSeq = 0;
async function doSearch(q) {
  q = q.trim(); if (!q) return;
  $('#searchInput').value = q; $('#searchInput').blur();
  const my = ++searchSeq, st = $('#searchStatus'), el = $('#searchList');
  st.textContent = t('searching'); el.innerHTML = '';
  try {
    const r = await searchSongs(q); if (my !== searchSeq) return;
    st.textContent = r.length ? '' : t('no_results'); bindList(el, r);
  } catch (e) { if (my === searchSeq) st.textContent = t('net_error'); }
}
$('#searchForm').onsubmit = (e) => { e.preventDefault(); doSearch($('#searchInput').value); };

/* ---------------- Pustaka ---------------- */
function renderLibrary() {
  const rows = [
    { ic: IC.heartFill, title: t('liked'), sub: lib.liked().length, run: () => showList({ title: t('liked'), items: lib.liked(), onRemove: (i) => { const l = lib.liked(); l.splice(i, 1); store.set('liked', l); } }) },
    { ic: IC.history, title: t('history'), sub: lib.history().length, run: () => showList({ title: t('history'), items: lib.history() }) },
    { ic: IC.phone, title: t('device'), sub: t('device_sub'), run: () => $('#filePick').click() },
    { ic: IC.link, title: t('import'), sub: t('import_sub'), run: importText },
  ];
  rowsInto($('#libRows'), rows);
  const pls = lib.playlists();
  rowsInto($('#libPlaylists'), pls.map((p, k) => ({
    ic: IC.queue, title: p.name, sub: p.tracks.length + (LANG === 'ms' ? ' lagu' : ' songs'),
    run: () => showList({ title: p.name, items: p.tracks, onRemove: (i) => { const all = lib.playlists(); all[k].tracks.splice(i, 1); lib.savePlaylists(all); } }),
    hold: () => options(p.name, [{ label: t('remove'), run: () => { const all = lib.playlists(); all.splice(k, 1); lib.savePlaylists(all); renderLibrary(); } }]),
  })));
}
function rowsInto(el, rows) {
  el.innerHTML = rows.map((r, i) => `<button class="row" data-i="${i}"><span class="ic">${r.ic}</span><span><b>${esc(r.title)}</b><small>${esc(r.sub)}</small></span></button>`).join('');
  el.onclick = (e) => { const b = e.target.closest('.row'); if (b) rows[+b.dataset.i].run(); };
  el.oncontextmenu = (e) => { const b = e.target.closest('.row'); if (b && rows[+b.dataset.i].hold) { e.preventDefault(); rows[+b.dataset.i].hold(); } };
}
$('#btnNewPl').onclick = () => {
  sheet(`<h3>${esc(t('playlists'))}</h3><input class="field" id="plName" placeholder="${esc(t('new_playlist'))}"><button class="btn accent" id="plGo" style="width:100%">+</button>`, (c) => {
    $('#plName', c).focus();
    $('#plGo', c).onclick = () => {
      const n = $('#plName', c).value.trim(); if (!n) return;
      const pls = lib.playlists(); pls.unshift({ id: 'pl' + Date.now(), name: n, tracks: [] }); lib.savePlaylists(pls);
      closeSheet(); renderLibrary();
    };
  });
};

/* ---------------- Tetapan ---------------- */
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
let installEvt = null;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; $('#btnInstall').hidden = false; renderSettings(); });
$('#btnInstall').onclick = installNow;
async function installNow() {
  if (installEvt) { installEvt.prompt(); await installEvt.userChoice; installEvt = null; $('#btnInstall').hidden = true; return; }
  const ios = `<li>${esc(t('install_ios'))}</li>`;
  const android = LANG === 'ms'
    ? '<li>Chrome: tekan ⋮ → "Tambah ke skrin utama" / "Install app". Jika tiada, guna lagu sekejap (30 saat) dan muat semula laman.</li><li>Samsung Internet: ≡ → "Add page to" → "Home screen".</li>'
    : '<li>Chrome: tap ⋮ → "Add to Home screen" / "Install app". If missing, use the app for ~30 seconds and reload.</li><li>Samsung Internet: ≡ → "Add page to" → "Home screen".</li>';
  sheet(`<h3>${esc(t('install_title'))}</h3><ol class="steps small">${isIOS ? ios : android + ios}</ol>`);
}
if (!isStandalone()) $('#btnInstall').hidden = false;
$('#apkBanner').hidden = !/android/i.test(navigator.userAgent);
function renderSettings() {
  const cur = store.get('theme', 'ember');
  const sw = $('#swatches');
  sw.innerHTML = THEMES.map((th) => {
    const bg = th.glass ? WALLS[th.glass] : th.c[1];
    return `<button class="swatch${th.id === cur ? ' on' : ''}" data-id="${th.id}"><i style="background:${bg};--dot:${th.c[5]}"></i><span>${esc(th[LANG] || th.en)}</span></button>`;
  }).join('');
  sw.onclick = (e) => { const b = e.target.closest('.swatch'); if (b) { applyTheme(b.dataset.id); renderSettings(); } };
  const lc = $('#langChips');
  lc.innerHTML = `<button class="chip${LANG === 'ms' ? ' on' : ''}" data-l="ms">Bahasa Melayu</button><button class="chip${LANG === 'en' ? ' on' : ''}" data-l="en">English</button>`;
  lc.onclick = (e) => { const b = e.target.closest('.chip'); if (b) { LANG = b.dataset.l; store.set('lang', LANG); translate(); renderSettings(); renderHome(); } };
  const ic = $('#installCard');
  if (isStandalone()) ic.innerHTML = `<p class="small">${esc(t('install_done'))}</p>`;
  else ic.innerHTML = `<ol class="steps small"><li>${esc(t('install_ios'))}</li><li>${esc(t('install_android'))}</li></ol>` +
    (installEvt ? `<button class="btn accent" id="btnInstall2" style="width:100%;margin-top:10px">${esc(t('install_btn'))}</button>` : '');
  const b2 = $('#btnInstall2'); if (b2) b2.onclick = installNow;
  $('#instanceInput').value = store.get('instance', '');
  $('#about').textContent = 'MyChord Web v1.0 • ' + (LANG === 'ms' ? 'Tiada kaitan dengan YouTube, Google atau Spotify.' : 'Not affiliated with YouTube, Google or Spotify.');
}
$('#btnSaveInstance').onclick = () => { store.set('instance', $('#instanceInput').value.trim()); store.set('lastSource', null); toast(t('saved')); };
function translate() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-t]').forEach((el) => (el.textContent = t(el.dataset.t)));
  $('#searchInput').placeholder = t('search_hint');
  const sg = $('#suggest');
  sg.innerHTML = SUGGEST.map((s) => `<button class="chip">${esc(s)}</button>`).join('');
  sg.onclick = (e) => { const b = e.target.closest('.chip'); if (b) doSearch(b.textContent); };
}

/* ---------------- Pemain ---------------- */
const P = { el: $('#player'), sheet: $('#pSheet') };
let lastArt = null, lyrics = null, lyricsOn = false, lyricIdx = -1, seeking = false;
function updateUI() {
  const tr = cur();
  $('#mini').hidden = !tr;
  if (!tr) return;
  $('#miniTitle').textContent = tr.t; $('#miniArtist').textContent = tr.a;
  const img = tr.img || (tr.vid ? ytThumb(tr.vid) : '') || PLACEHOLDER;
  if (img !== lastArt) {
    lastArt = img; $('#miniArt').src = img; $('#pArt').src = img;
    $('#pBg').style.backgroundImage = `url("${img}")`;
    if (lyricsOn) loadLyrics();
  }
  $('#miniArt').onerror = $('#pArt').onerror = function () { this.src = PLACEHOLDER; };
  $('#miniPlay').innerHTML = state.playing ? IC.pause : IC.play;
  $('#pPlay').innerHTML = state.playing ? IC.pause : IC.play;
  $('#pTitle').textContent = tr.t; $('#pArtist').textContent = tr.a;
  $('#pBadge').textContent = tr.b || (tr.id.startsWith('radio:') ? 'LIVE' : state.engine === 'yt' ? 'YOUTUBE' : '');
  const liked = lib.isLiked(tr.id);
  $('#pLike').innerHTML = liked ? IC.heartFill : IC.heart; $('#pLike').style.color = liked ? 'var(--accent)' : '#fff';
  $('#pShuffle').classList.toggle('off', !state.shuffle);
  $('#pRepeat').innerHTML = state.repeat === 2 ? IC.repeatOne : IC.repeat;
  $('#pRepeat').classList.toggle('off', state.repeat === 0);
  document.querySelectorAll('.track').forEach((r) => r.classList.remove('playing'));
  renderChips();
}
function tick() {
  const { pos, dur } = engineTime();
  if (dur > 0) {
    $('#miniProgress').style.width = `calc(${(pos / dur) * 100}% - 40px)`;
    if (!seeking) $('#pSeek').value = Math.round((pos / dur) * 1000);
    $('#pDur').textContent = fmt(dur);
  } else $('#pDur').textContent = cur() && cur().id.startsWith('radio:') ? 'LIVE' : '--:--';
  if (!seeking) $('#pPos').textContent = fmt(pos);
  if (lyricsOn) syncLyrics(pos * 1000);
  if (state.sleepAt && Date.now() > state.sleepAt) { state.sleepAt = 0; if (state.playing) togglePlay(); }
}
setInterval(tick, 400);
$('#pSeek').oninput = () => { seeking = true; const { dur } = engineTime(); $('#pPos').textContent = fmt($('#pSeek').value / 1000 * dur); };
$('#pSeek').onchange = () => { const { dur } = engineTime(); seekTo($('#pSeek').value / 1000 * dur); seeking = false; };
$('#mini').onclick = (e) => {
  if (e.target.closest('#miniPlay')) return togglePlay();
  if (e.target.closest('#miniNext')) return next();
  openPlayer();
};
function openPlayer() { P.el.hidden = false; P.sheet.style.transform = ''; document.body.style.overflow = 'hidden'; }
function closePlayer() { P.el.hidden = true; document.body.style.overflow = ''; }
$('#pClose').onclick = closePlayer;
$('#pPlay').onclick = togglePlay; $('#pNext').onclick = next; $('#pPrev').onclick = prev;
$('#pShuffle').onclick = () => {
  state.shuffle = !state.shuffle;
  if (state.shuffle && state.queue.length > 1) {
    const now = cur(); const rest = state.queue.filter((_, i) => i !== state.index);
    for (let k = rest.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [rest[k], rest[j]] = [rest[j], rest[k]]; }
    state.queue = [now, ...rest]; state.index = 0;
  }
  updateUI();
};
$('#pRepeat').onclick = () => { state.repeat = (state.repeat + 1) % 3; updateUI(); };
$('#pLike').onclick = () => { if (cur()) { lib.toggleLike(cur()); updateUI(); } };
$('#pQueueBtn').onclick = showQueue;
function showQueue() {
  options(t('queue'), state.queue.map((x, i) => ({ label: (i === state.index ? '▶  ' : '') + x.t + (x.a ? ' — ' + x.a : ''), on: i === state.index, run: () => playIndex(i) })));
}
// Leret ke bawah untuk tutup
(function swipe() {
  let y0 = null, x0 = 0, dy = 0, active = false;
  P.sheet.addEventListener('touchstart', (e) => {
    if (e.target.closest('#pSeek') || (lyricsOn && e.target.closest('#pLyrics') && $('#pLyrics').scrollTop > 0) || e.target.closest('.p-chips')) { y0 = null; return; }
    y0 = e.touches[0].clientY; x0 = e.touches[0].clientX; dy = 0; active = false;
  }, { passive: true });
  P.sheet.addEventListener('touchmove', (e) => {
    if (y0 == null) return;
    dy = e.touches[0].clientY - y0; const dx = e.touches[0].clientX - x0;
    if (!active && dy > 14 && dy > Math.abs(dx) * 1.4) active = true;
    if (active) { P.sheet.style.transition = 'none'; P.sheet.style.transform = `translateY(${Math.max(0, dy)}px)`; }
  }, { passive: true });
  P.sheet.addEventListener('touchend', () => {
    if (!active) { y0 = null; return; }
    P.sheet.style.transition = '';
    if (dy > window.innerHeight * 0.22) { P.sheet.style.transform = 'translateY(100%)'; setTimeout(closePlayer, 200); }
    else P.sheet.style.transform = '';
    y0 = null; active = false;
  });
})();
function renderChips() {
  const chips = [
    { ic: IC.lyrics, label: t('lyrics'), run: toggleLyrics },
    { ic: IC.hq, label: t('quality'), run: () => sheet(`<h3>${esc(t('quality'))}</h3><p class="small">${esc(t('q_note'))}</p>`) },
    { ic: IC.people, label: tg.mode ? (LANG === 'ms' ? 'Bersama • ' : 'Together • ') + tg.code : t('together'), run: togetherMenu },
    { ic: IC.timer, label: state.sleepAt ? Math.ceil((state.sleepAt - Date.now()) / 60000) + t('minutes') : t('sleep'), run: sleepMenu },
    { ic: IC.share, label: t('share_song'), run: shareSong },
    { ic: IC.queue, label: t('queue'), run: showQueue },
  ];
  const el = $('#pChips');
  el.innerHTML = chips.map((c, i) => `<button class="pchip" data-i="${i}">${c.ic}<span>${esc(c.label)}</span></button>`).join('');
  el.onclick = (e) => { const b = e.target.closest('.pchip'); if (b) chips[+b.dataset.i].run(); };
}
function sleepMenu() {
  options(t('sleep'), [15, 30, 45, 60, 90].map((m) => ({ label: m + t('minutes'), run: () => { state.sleepAt = Date.now() + m * 60000; renderChips(); } }))
    .concat([{ label: t('sleep_off'), run: () => { state.sleepAt = 0; renderChips(); } }]));
}
function shareSong() {
  const tr = cur(); if (!tr) return;
  const vid = tr.id.startsWith('yt:') ? tr.id.slice(3) : tr.vid;
  const link = vid ? 'https://music.youtube.com/watch?v=' + vid : 'https://music.youtube.com/search?q=' + encodeURIComponent(tr.t + ' ' + tr.a);
  shareText(`🎵 ${tr.t}${tr.a ? ' — ' + tr.a : ''}\n${link}`);
}
function shareText(text, url) {
  if (navigator.share) navigator.share({ text, url }).catch(() => { });
  else { navigator.clipboard && navigator.clipboard.writeText(text + (url ? ' ' + url : '')); toast('✓ Copied'); }
}
function toggleLyrics() {
  lyricsOn = !lyricsOn; $('#pLyrics').hidden = !lyricsOn; $('#pArt').style.visibility = lyricsOn ? 'hidden' : '';
  if (lyricsOn) loadLyrics();
}
async function loadLyrics() {
  const tr = cur(); if (!tr) return; const box = $('#pLyrics');
  box.className = ''; box.innerHTML = `<p>${esc(t('lyrics_loading'))}</p>`; lyrics = null; lyricIdx = -1;
  try { lyrics = await fetchLyrics(tr.t, tr.a); } catch (e) { lyrics = null; }
  if (tr !== cur()) return;
  if (!lyrics || !lyrics.lines.length) { box.innerHTML = `<p>${esc(t('lyrics_none'))}</p>`; return; }
  box.className = lyrics.synced ? '' : 'plain';
  box.innerHTML = lyrics.lines.map((l, i) => `<p data-i="${i}">${esc(l.text)}</p>`).join('');
  box.onclick = (e) => { const p = e.target.closest('p'); if (p && lyrics.synced) seekTo(lyrics.lines[+p.dataset.i].ms / 1000); };
}
function syncLyrics(ms) {
  if (!lyrics || !lyrics.synced) return;
  let idx = -1; for (let i = 0; i < lyrics.lines.length; i++) { if (lyrics.lines[i].ms <= ms + 250) idx = i; else break; }
  if (idx === lyricIdx) return;
  const ps = $('#pLyrics').children;
  if (ps[lyricIdx]) ps[lyricIdx].classList.remove('on');
  lyricIdx = idx;
  if (ps[idx]) { ps[idx].classList.add('on'); $('#pLyrics').scrollTo({ top: ps[idx].offsetTop - $('#pLyrics').clientHeight / 3, behavior: 'smooth' }); }
}

/* ---------------- Dengar bersama (serasi dengan app Android) ---------------- */
const tg = { mode: 0, code: null, es: null, beat: null, last: 0 };
function newCode() { const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; const r = crypto.getRandomValues(new Uint32Array(6)); for (let i = 0; i < 6; i++) s += c[r[i] % c.length]; return s; }
const topic = () => 'https://ntfy.sh/mychord-' + tg.code;
function tgSend() {
  if (tg.mode !== 1 || !cur()) return;
  const tr = cur(); const { pos } = engineTime();
  const body = JSON.stringify({ id: tr.vid ? 'yt:' + tr.vid : tr.id, t: tr.t, a: tr.a, img: tr.img || '', b: tr.b || '', pos: Math.round(pos * 1000), playing: state.playing, ts: Date.now() });
  tg.last = Date.now();
  fetch(topic(), { method: 'POST', body }).catch(() => { });
}
function tgHost() {
  tgStop(); tg.mode = 1; tg.code = newCode();
  tg.beat = setInterval(() => { if (Date.now() - tg.last > 9000) tgSend(); }, 3000);
  tgSend(); renderTiles(); renderChips(); showHost();
}
function tgJoin(code) {
  tgStop(); tg.mode = 2; tg.code = code.toUpperCase();
  tg.es = new EventSource(topic() + '/sse?since=2m');
  tg.es.onmessage = (e) => { try { const ev = JSON.parse(e.data); if (ev.event === 'message') tgApply(JSON.parse(ev.message)); } catch (err) { } };
  toast(t('tg_joined')); renderTiles(); renderChips();
}
function tgApply(st) {
  if (tg.mode !== 2 || !st.id || st.id.startsWith('local:') || st.id.startsWith('file:')) return;
  const elapsed = Math.max(0, Date.now() - st.ts);
  const target = (st.pos + (st.playing ? elapsed : 0)) / 1000;
  const now = cur();
  if (!now || (now.id !== st.id && 'yt:' + (now.vid || '') !== st.id)) {
    state.queue = [{ id: st.id, t: st.t, a: st.a, img: st.img, b: st.b }]; playIndex(0, target);
    if (!st.playing) setTimeout(() => { if (state.playing) togglePlay(); }, 1500);
    return;
  }
  const { pos } = engineTime();
  if (Math.abs(pos - target) > 2.5) seekTo(target);
  if (st.playing !== state.playing) togglePlay();
}
function tgStop() { if (tg.es) tg.es.close(); if (tg.beat) clearInterval(tg.beat); Object.assign(tg, { mode: 0, code: null, es: null, beat: null }); }
function showHost() {
  sheet(`<h3>${esc(t('together'))}</h3><div class="bigcode">${tg.code}</div><p class="dim small" style="text-align:center">${esc(t('tg_host_note'))}</p>
    <div class="actions"><button class="btn accent" id="tgInv">${esc(t('tg_invite'))}</button><button class="btn tonal" id="tgEnd">${esc(t('tg_end'))}</button></div>`, (c) => {
    $('#tgInv', c).onclick = () => shareText(t('tg_invite_text') + tg.code);
    $('#tgEnd', c).onclick = () => { tgStop(); closeSheet(); renderTiles(); renderChips(); };
  });
}
function togetherMenu() {
  if (tg.mode === 1) return showHost();
  if (tg.mode === 2) return options(t('tg_in') + tg.code, [{ label: t('tg_leave'), run: () => { tgStop(); renderTiles(); renderChips(); } }]);
  options(t('together'), [
    { label: t('tg_start'), run: tgHost },
    { label: t('tg_join'), run: () => sheet(`<h3>${esc(t('tg_join'))}</h3><input class="field" id="tgCode" maxlength="6" placeholder="${esc(t('tg_code'))}" style="text-align:center;font-size:26px;letter-spacing:.2em;text-transform:uppercase"><button class="btn accent" id="tgGo" style="width:100%">${esc(t('tg_join_btn'))}</button>`, (c) => {
        $('#tgCode', c).focus();
        $('#tgGo', c).onclick = () => { const v = $('#tgCode', c).value.trim(); if (v.length === 6) { closeSheet(); tgJoin(v); } };
      }) },
  ]);
}
// Pautan jemputan: ?join=KOD
(function deepLink() { const m = location.search.match(/join=([A-Za-z0-9]{6})/); if (m) setTimeout(() => tgJoin(m[1]), 800); })();

/* ---------------- Mula ---------------- */
document.querySelectorAll('#nav button').forEach((b) => (b.onclick = () => showPage(b.dataset.page)));
$('#btnProfile').onclick = () => showPage('settings');
$('#btnShare').onclick = () => shareText(t('share_text') + APP_URL + (LANG === 'ms' ? '\nAndroid APK: ' : '\nAndroid APK: ') + APK_URL, APP_URL);
$('#profileLetter').textContent = 'M';
applyTheme(store.get('theme', 'ember'));
translate();
renderHome();
updateUI();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => { });
