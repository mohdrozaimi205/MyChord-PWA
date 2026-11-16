/* MyChord Hi-Fi Engine — browser/PWA addon. No account scraping or stream ripping. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const fileInput = $('#hifiFile');
  const audio = $('#hifiAudio');
  const meta = $('#hifiMeta');
  const bands = [31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
  let objectUrl = null, audioCtx = null, sourceNode = null, filters = [];

  function showMeta(lines) { meta.innerHTML = lines.map(x => `<div>${x}</div>`).join(''); }
  function readFlacInfo(buffer) {
    const v = new DataView(buffer);
    if (v.byteLength < 42 || String.fromCharCode(...new Uint8Array(buffer, 0, 4)) !== 'fLaC') return null;
    let offset = 4, streamInfo = null;
    while (offset + 4 <= v.byteLength) {
      const h = v.getUint8(offset), type = h & 0x7f;
      const len = (v.getUint8(offset + 1) << 16) | (v.getUint8(offset + 2) << 8) | v.getUint8(offset + 3);
      offset += 4;
      if (offset + len > v.byteLength) break;
      if (type === 0 && len >= 34) { streamInfo = offset; break; }
      offset += len;
      if (h & 0x80) break;
    }
    if (streamInfo == null) return null;
    let packed = 0n;
    for (let i = 0; i < 8; i++) packed = (packed << 8n) | BigInt(v.getUint8(streamInfo + 10 + i));
    const sampleRate = Number((packed >> 44n) & 0xfffffn);
    const channels = Number((packed >> 41n) & 7n) + 1;
    const bitDepth = Number((packed >> 36n) & 31n) + 1;
    const totalSamples = Number(packed & 0xfffffffffn);
    return { sampleRate, channels, bitDepth, totalSamples, duration: sampleRate ? totalSamples / sampleRate : 0 };
  }
  function formatRate(n) { return n ? (n / 1000).toFixed(n % 1000 ? 2 : 0) + ' kHz' : 'Tidak diketahui'; }
  function makeEq() {
    const host = $('#hifiEq');
    host.innerHTML = bands.map((hz, i) => `<label class="hifi-band"><span>${hz >= 1000 ? (hz / 1000) + 'k' : hz}</span><input type="range" min="-9" max="9" step="1" value="0" data-band="${i}" aria-label="${hz} Hz"><output>0 dB</output></label>`).join('');
    host.addEventListener('input', e => {
      const input = e.target.closest('input[data-band]'); if (!input) return;
      const i = Number(input.dataset.band), value = Number(input.value);
      input.nextElementSibling.textContent = `${value > 0 ? '+' : ''}${value} dB`;
      if (filters[i]) filters[i].gain.value = value;
    });
    $('#hifiEqReset').addEventListener('click', () => {
      host.querySelectorAll('input').forEach(input => { input.value = 0; input.nextElementSibling.textContent = '0 dB'; });
      filters.forEach(f => { f.gain.value = 0; });
    });
  }
  async function enableEqForLocalFile() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (!sourceNode) {
      sourceNode = audioCtx.createMediaElementSource(audio);
      filters = bands.map(hz => {
        const f = audioCtx.createBiquadFilter(); f.type = 'peaking'; f.frequency.value = hz; f.Q.value = 1.1; f.gain.value = 0;
        return f;
      });
      sourceNode.connect(filters[0]);
      for (let i = 0; i < filters.length - 1; i++) filters[i].connect(filters[i + 1]);
      filters[filters.length - 1].connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') await audioCtx.resume();
  }
  function setStations() {
    const stations = [
      { name: 'Mother Earth Radio', genre: 'World • Jazz • Blues', url: 'https://motherearth.streamserver24.com/listen/motherearth/motherearth' },
      { name: 'Mother Earth Jazz', genre: 'Jazz', url: 'https://motherearth.streamserver24.com/listen/motherearth_jazz/motherearth.jazz' },
      { name: 'SomaFM Groove Salad', genre: 'Chill • Ambient • Downtempo (HLS; sokongan browser bergantung)', url: 'https://hls.somafm.com/hls/groovesalad/FLAC/program.m3u8' }
    ];
    $('#hifiStations').innerHTML = stations.map((s, i) => `<div class="hifi-station"><span><b>${s.name}</b><small>${s.genre}</small></span><button type="button" data-station="${i}">Main</button></div>`).join('');
    $('#hifiStations').addEventListener('click', e => {
      const b = e.target.closest('[data-station]'); if (!b) return;
      const s = stations[Number(b.dataset.station)];
      if (objectUrl) { URL.revokeObjectURL(objectUrl); objectUrl = null; }
      audio.removeAttribute('crossorigin'); audio.src = s.url; audio.load();
      showMeta([`Sumber: ${s.name}`, 'Format/bit depth: tidak didedahkan oleh pemain web', 'Status: stream radio internet — kualiti bergantung penyiar']);
      audio.play().catch(() => showMeta([`Tidak dapat memainkan ${s.name}.`, 'Stesen mungkin tidak menyokong browser, HTTPS/CORS atau format HLS peranti ini.']));
    });
  }
  $('#hifiPick').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files && fileInput.files[0]; if (!file) return;
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file); audio.crossOrigin = null; audio.src = objectUrl; audio.load();
    if (!/\.flac$/i.test(file.name)) {
      showMeta([`Fail: ${file.name}`, `Saiz: ${(file.size / 1048576).toFixed(2)} MB`, 'Metadata Hi-Res terperinci hanya dibaca untuk fail FLAC.']);
      return;
    }
    try {
      const info = readFlacInfo(await file.arrayBuffer());
      if (!info) throw new Error('Metadata FLAC STREAMINFO tidak ditemui');
      const quality = info.bitDepth > 16 || info.sampleRate > 44100 ? 'Hi-Res FLAC (metadata)' : 'FLAC kualiti CD / standard';
      showMeta([`Fail: ${file.name}`, `Format: FLAC`, `Bit depth asal: ${info.bitDepth}-bit`, `Sample rate asal: ${formatRate(info.sampleRate)}`, `Saluran: ${info.channels}`, `Durasi: ${info.duration ? Math.floor(info.duration / 60) + ':' + String(Math.floor(info.duration % 60)).padStart(2, '0') : 'Tidak diketahui'}`, `Kelas: ${quality}`, 'Nota: metadata fail, bukan pengesahan kualiti rakaman/master.']);
      await enableEqForLocalFile();
      $('#hifiEqNote').textContent = 'EQ aktif untuk fail tempatan. Tetapan EQ mengubah bunyi dan bukan bit-perfect.';
    } catch (err) {
      showMeta([`Fail: ${file.name}`, 'Tidak dapat membaca metadata FLAC. Pastikan fail FLAC sah dan tidak rosak.']);
    }
  });
  $('#hifiTidal').addEventListener('click', () => window.open('https://listen.tidal.com/', '_blank', 'noopener,noreferrer'));
  makeEq(); setStations();
  window.addEventListener('beforeunload', () => { if (objectUrl) URL.revokeObjectURL(objectUrl); });
})();
