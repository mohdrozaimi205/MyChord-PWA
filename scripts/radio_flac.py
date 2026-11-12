"""Jana addon MyChord: stesen radio yang menyiarkan secara FLAC (lossless), dari Radio Browser."""
import json, urllib.request, urllib.parse

MIRRORS = ["https://de1.api.radio-browser.info", "https://de2.api.radio-browser.info", "https://fi1.api.radio-browser.info"]

def get(path):
    for m in MIRRORS:
        try:
            req = urllib.request.Request(m + path, headers={"User-Agent": "MyChord/1.0 (github.com/mohdrozaimi205)"})
            with urllib.request.urlopen(req, timeout=20) as r:
                return json.load(r)
        except Exception as e:
            print("gagal", m, e)
    return []

q = urllib.parse.urlencode({"codec": "FLAC", "order": "clickcount", "reverse": "true", "hidebroken": "true", "limit": "120"})
stations = get("/json/stations/search?" + q)
items, seen = [], set()
for s in stations:
    url = (s.get("url_resolved") or s.get("url") or "").strip()
    name = (s.get("name") or "").strip()
    if not url or not name or url in seen or s.get("lastcheckok") == 0:
        continue
    seen.add(url)
    tags = ", ".join([t for t in (s.get("tags") or "").split(",") if t][:3])
    country = s.get("country") or ""
    items.append({
        "title": name,
        "artist": " • ".join([x for x in [tags, country] if x])[:60] or "FLAC radio",
        "art": s.get("favicon") or "",
        "stream": url,
    })
    if len(items) >= 60:
        break

addon = {
    "name": "Radio Lossless (FLAC)",
    "desc": f"Radio • FLAC • {len(items)} stesen",
    "type": "radio",
    "items": items,
}
with open("addons/radio-flac.json", "w", encoding="utf-8") as f:
    json.dump(addon, f, ensure_ascii=False, indent=1)
print("stesen:", len(items))
if not items:
    raise SystemExit("Tiada stesen dijumpai")
