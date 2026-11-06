// Fôlego Financeiro — service worker: guarda o app para abrir sem internet.
const CACHE = "folego-v5";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./firebase-config.js", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
const CACHEABLE = [self.location.origin, "https://www.gstatic.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Firebase (login e banco de dados) e qualquer outro serviço passam direto, sem cache.
  if (!CACHEABLE.includes(url.origin)) return;
  if (url.origin === "https://www.gstatic.com" && !url.pathname.startsWith("/firebasejs/")) return;
  // Página: rede primeiro (pega atualizações), cache se estiver sem internet.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  // Demais arquivos: responde do cache na hora e atualiza em segundo plano.
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req);
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
