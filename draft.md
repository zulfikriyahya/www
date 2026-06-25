# SOURCE CODE

## archetypes/default.md
```md
+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

```
---

## assets/css/main.css
```css
@import "tailwindcss";

@source "../../layouts/**/*.html";
@source "../../content/**/*.md";

@theme {
  --color-bg-primary: #0d1117;
  --color-bg-surface: #161b22;
  --color-bg-overlay: #21262d;
  --color-border-default: #30363d;
  --color-border-muted: #21262d;
  --color-text-primary: #e6edf3;
  --color-text-secondary: #8b949e;
  --color-text-muted: #6e7681;
  --color-accent-green: #238636;
  --color-accent-blue: #1f6feb;
  --color-accent-orange: #f0883e;
  --color-link-blue: #388bfd;

  --font-sans: "Lexend", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;
}

@layer base {

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #0d1117;
    color: #e6edf3;
    font-family: var(--font-sans);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  html.light body {
    background-color: #ffffff;
    color: #1f2328;
  }

  ::selection {
    background-color: #238636;
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid #238636;
    outline-offset: 2px;
  }
}

@layer components {
  .container-content {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section {
    @apply py-20 sm:py-28;
  }

  .section-label {
    @apply inline-block text-xs font-mono font-medium uppercase tracking-widest;
    color: #238636;
  }

  html.light .section-label {
    color: #1a7f37;
  }

  .section-title {
    @apply mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight;
    color: #e6edf3;
  }

  html.light .section-title {
    color: #1f2328;
  }

  .section-subtitle {
    @apply mt-4 leading-relaxed;
    color: #8b949e;
  }

  html.light .section-subtitle {
    color: #656d76;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
    background-color: #238636;
    focus-visible: ring-color: #238636;
    focus-visible: ring-offset-color: #0d1117;
  }

  .btn-primary:hover {
    background-color: #2ea043;
  }

  .btn-primary:active {
    background-color: #1a6e2e;
  }

  html.light .btn-primary:focus-visible {
    --tw-ring-offset-color: #ffffff;
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
    border-color: #30363d;
    color: #e6edf3;
  }

  .btn-outline:hover {
    border-color: #8b949e;
    background-color: #161b22;
  }

  html.light .btn-outline {
    border-color: #d0d7de;
    color: #1f2328;
  }

  html.light .btn-outline:hover {
    border-color: #8c959f;
    background-color: #f6f8fa;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
    background-color: #21262d;
    color: #e6edf3;
  }

  .btn-secondary:hover {
    background-color: #30363d;
  }

  html.light .btn-secondary {
    background-color: #f6f8fa;
    color: #1f2328;
  }

  html.light .btn-secondary:hover {
    background-color: #eaeef2;
  }

  .btn-ghost {
    @apply inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
    color: #8b949e;
  }

  .btn-ghost:hover {
    background-color: #161b22;
    color: #e6edf3;
  }

  html.light .btn-ghost {
    color: #656d76;
  }

  html.light .btn-ghost:hover {
    background-color: #f6f8fa;
    color: #1f2328;
  }

  .card {
    @apply rounded-xl border;
    border-color: #30363d;
    background-color: #161b22;
  }

  html.light .card {
    border-color: #d0d7de;
    background-color: #f6f8fa;
  }

  .card-interactive {
    @apply rounded-xl border transition-all duration-200;
    border-color: #30363d;
    background-color: #161b22;
  }

  .card-interactive:hover {
    border-color: #388bfd;
    box-shadow: 0 0 0 1px #388bfd;
  }

  html.light .card-interactive {
    border-color: #d0d7de;
    background-color: #ffffff;
  }

  html.light .card-interactive:hover {
    border-color: #0969da;
    box-shadow: 0 0 0 1px #0969da;
  }

  .badge-purple {
    @apply inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium;
    border-color: #3d2475;
    background-color: #2d1c5c;
    color: #a371f7;
  }

  html.light .badge-purple {
    border-color: #8250df;
    background-color: #fbefff;
    color: #6639ba;
  }

  .badge-blue {
    @apply inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium;
    border-color: #1158c7;
    background-color: #0c2d6b;
    color: #388bfd;
  }

  html.light .badge-blue {
    border-color: #0969da;
    background-color: #ddf4ff;
    color: #0550ae;
  }

  .badge-green {
    @apply inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium;
    border-color: #238636;
    background-color: #0f2d1a;
    color: #3fb950;
  }

  html.light .badge-green {
    border-color: #1a7f37;
    background-color: #dafbe1;
    color: #116329;
  }

  .badge-orange {
    @apply inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium;
    border-color: #9b4f12;
    background-color: #2d1a0a;
    color: #f0883e;
  }

  html.light .badge-orange {
    border-color: #bc4c00;
    background-color: #fff1e5;
    color: #953800;
  }

  .tag {
    @apply rounded-full border px-3 py-1 font-mono text-xs;
    border-color: #30363d;
    background-color: #161b22;
    color: #6e7681;
  }

  html.light .tag {
    border-color: #d0d7de;
    background-color: #f6f8fa;
    color: #57606a;
  }

  .text-gradient-green {
    background: linear-gradient(135deg, #3fb950, #238636);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  html.light .text-gradient-green {
    background: linear-gradient(135deg, #1a7f37, #116329);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .divider {
    @apply border-t;
    border-color: #21262d;
  }

  html.light .divider {
    border-color: #d0d7de;
  }

  .prose-zed {
    @apply leading-relaxed;
    color: #8b949e;
  }

  html.light .prose-zed {
    color: #656d76;
  }

  .prose-zed h2 {
    @apply mt-10 text-2xl font-bold tracking-tight;
    color: #e6edf3;
  }

  html.light .prose-zed h2 {
    color: #1f2328;
  }

  .prose-zed h3 {
    @apply mt-8 text-xl font-semibold;
    color: #e6edf3;
  }

  html.light .prose-zed h3 {
    color: #1f2328;
  }

  .prose-zed p {
    @apply mt-4;
  }

  .prose-zed a {
    @apply underline underline-offset-2 transition-colors;
    color: #388bfd;
  }

  .prose-zed a:hover {
    color: #58a6ff;
  }

  html.light .prose-zed a {
    color: #0969da;
  }

  html.light .prose-zed a:hover {
    color: #0550ae;
  }

  .prose-zed ul {
    @apply mt-4 list-disc pl-6 space-y-2;
  }

  .prose-zed ol {
    @apply mt-4 list-decimal pl-6 space-y-2;
  }

  .prose-zed code {
    @apply rounded px-1.5 py-0.5 font-mono text-sm border;
    background-color: #161b22;
    color: #f0883e;
    border-color: #30363d;
  }

  html.light .prose-zed code {
    background-color: #f6f8fa;
    color: #953800;
    border-color: #d0d7de;
  }

  .prose-zed pre {
    @apply mt-4 overflow-x-auto rounded-xl border p-5;
    border-color: #30363d;
    background-color: #161b22;
  }

  html.light .prose-zed pre {
    border-color: #d0d7de;
    background-color: #f6f8fa;
  }

  .prose-zed pre code {
    @apply border-0 bg-transparent p-0;
    color: #e6edf3;
  }

  html.light .prose-zed pre code {
    color: #1f2328;
  }

  .prose-zed blockquote {
    @apply mt-4 border-l-4 pl-4 italic;
    border-color: #238636;
    color: #6e7681;
  }

  html.light .prose-zed blockquote {
    border-color: #1a7f37;
    color: #57606a;
  }

  .prose-zed img {
    @apply mt-6 rounded-xl border;
    border-color: #30363d;
  }

  html.light .prose-zed img {
    border-color: #d0d7de;
  }

  .prose-zed table {
    @apply mt-6 w-full text-sm border-collapse;
  }

  .prose-zed th {
    @apply text-left px-4 py-2 font-semibold border-b;
    color: #e6edf3;
    border-color: #30363d;
  }

  html.light .prose-zed th {
    color: #1f2328;
    border-color: #d0d7de;
  }

  .prose-zed td {
    @apply px-4 py-2 border-b;
    color: #8b949e;
    border-color: #21262d;
  }

  html.light .prose-zed td {
    color: #656d76;
    border-color: #eaeef2;
  }

  .input {
    @apply w-full rounded-md border px-4 py-2.5 text-sm transition-colors duration-150 focus:outline-none focus:ring-1;
    border-color: #30363d;
    background-color: #0d1117;
    color: #e6edf3;
  }

  .input::placeholder {
    color: #6e7681;
  }

  .input:focus {
    border-color: #388bfd;
    --tw-ring-color: #388bfd;
  }

  html.light .input {
    border-color: #d0d7de;
    background-color: #ffffff;
    color: #1f2328;
  }

  html.light .input::placeholder {
    color: #8c959f;
  }

  html.light .input:focus {
    border-color: #0969da;
    --tw-ring-color: #0969da;
  }

  .label {
    @apply block text-sm font-medium mb-1.5;
    color: #e6edf3;
  }

  html.light .label {
    color: #1f2328;
  }

  .theme-bg-primary {
    background-color: #0d1117;
  }

  html.light .theme-bg-primary {
    background-color: #ffffff;
  }

  .theme-bg-surface {
    background-color: #161b22;
  }

  html.light .theme-bg-surface {
    background-color: #f6f8fa;
  }

  .theme-bg-overlay {
    background-color: #21262d;
  }

  html.light .theme-bg-overlay {
    background-color: #eaeef2;
  }

  .theme-border {
    border-color: #30363d;
  }

  html.light .theme-border {
    border-color: #d0d7de;
  }

  .theme-border-muted {
    border-color: #21262d;
  }

  html.light .theme-border-muted {
    border-color: #eaeef2;
  }

  .theme-text-primary {
    color: #e6edf3;
  }

  html.light .theme-text-primary {
    color: #1f2328;
  }

  .theme-text-secondary {
    color: #8b949e;
  }

  html.light .theme-text-secondary {
    color: #656d76;
  }

  .theme-text-muted {
    color: #6e7681;
  }

  html.light .theme-text-muted {
    color: #8c959f;
  }
}

```
---

## assets/js/main.js
```js
(function () {
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    syncIcons();
  }

  function syncIcons() {
    var isLight = document.documentElement.classList.contains("light");
    document.querySelectorAll("[data-icon-moon]").forEach(function (el) {
      el.classList.toggle("hidden", isLight);
    });
    document.querySelectorAll("[data-icon-sun]").forEach(function (el) {
      el.classList.toggle("hidden", !isLight);
    });
  }

  window.toggleTheme = function () {
    var isLight = document.documentElement.classList.contains("light");
    var next = isLight ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  document.addEventListener("DOMContentLoaded", function () {
    syncIcons();
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

var animateCounter = function (el) {
  var target = parseInt(el.dataset.target);
  var duration = 2000;
  var step = target / (duration / 16);
  var current = 0;

  var timer = setInterval(function () {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("id-ID");
  }, 16);
};

var counters = document.querySelectorAll("[data-counter]");
if (counters.length) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (counter) {
    observer.observe(counter);
  });
}

document.addEventListener("alpine:init", function () {
  Alpine.data("contactForm", function (pocketbaseUrl) {
    return {
      form: {
        name: "",
        email: "",
        need_type: "",
        message: "",
      },
      status: "idle",
      errors: {},

      validate: function () {
        this.errors = {};
        if (!this.form.name) {
          this.errors.name = "Nama wajib diisi";
        }
        if (!this.form.email || !this.form.email.includes("@")) {
          this.errors.email = "Email tidak valid";
        }
        if (!this.form.need_type) {
          this.errors.need_type = "Pilih salah satu kebutuhan";
        }
        if (!this.form.message || this.form.message.length < 10) {
          this.errors.message = "Pesan minimal 10 karakter";
        }
        return Object.keys(this.errors).length === 0;
      },

      submit: async function () {
        if (!this.validate()) return;
        this.status = "loading";
        try {
          var res = await fetch(pocketbaseUrl + "/api/collections/contact_submissions/records", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.form),
          });
          this.status = res.ok ? "success" : "error";
        } catch (e) {
          this.status = "error";
        }
      },

      reset: function () {
        this.form = { name: "", email: "", need_type: "", message: "" };
        this.status = "idle";
        this.errors = {};
      },
    };
  });
});

```
---

## content/about/_index.md
```md
---
title: "Tentang ZEDLABS"
description: "Studio teknologi yang fokus pada hasil nyata, bukan sekadar deliverable."
---

ZEDLABS berdiri dari frustrasi yang sederhana: terlalu banyak proyek teknologi yang selesai secara teknis, namun gagal secara bisnis. Kami membangun studio ini dengan satu prinsip utama — teknologi hanya relevan jika berdampak nyata.

Sejak 2020, kami telah membantu puluhan bisnis dari berbagai industri membangun produk digital yang tidak hanya berjalan dengan baik, tetapi juga tumbuh bersama bisnis mereka.

Kami tidak percaya pada solusi generik. Setiap klien mendapatkan pendekatan yang disesuaikan dengan konteks bisnis, skala tim, dan tujuan jangka panjang mereka.

```
---

## content/blog/_index.md
```md

```
---

## content/contact/_index.md
```md
---
title: "Kontak"
description: "Hubungi ZEDLABS untuk konsultasi, kolaborasi, atau pertanyaan seputar proyek Anda."
---

```
---

## content/_index.md
```md
---
title: "ZEDLABS — Innovate Beyond Limits"
description: "IT Consulting, Web & Mobile Development, dan SaaS solutions untuk bisnis yang ingin tumbuh."

hero:
  headline: "Solusi Digital untuk"
  headline_accent: "Bisnis yang Tumbuh"
  subheadline: "IT Consulting, Web & Mobile Development, dan SaaS solutions yang dirancang untuk skala enterprise."
  cta_primary:
    label: "Mulai Konsultasi Gratis"
    url: "/contact"
  cta_secondary:
    label: "Lihat Proyek Kami"
    url: "/projects"

about:
  label: "Tentang Kami"
  title: "Kami bukan vendor biasa"
  body: "ZEDLABS adalah studio teknologi yang fokus membantu bisnis bertransformasi digital. Kami tidak hanya membangun produk — kami memastikan produk tersebut berdampak nyata pada bisnis Anda."
  differentiators:
    - icon: "⚡"
      title: "Delivery Cepat"
      desc: "MVP dalam 4–6 minggu, bukan bulan."
    - icon: "🎯"
      title: "Fokus pada Hasil"
      desc: "Setiap keputusan teknis didasarkan pada tujuan bisnis."
    - icon: "🔒"
      title: "Transparan"
      desc: "Progress real-time, tidak ada kejutan di akhir proyek."

stats:
  - label: "Klien Puas"
    value: 47
    suffix: "+"
  - label: "Proyek Selesai"
    value: 120
    suffix: "+"
  - label: "Tahun Pengalaman"
    value: 5
    suffix: "+"
  - label: "Uptime SaaS"
    value: 99
    suffix: ".9%"

services:
  label: "Layanan"
  title: "Apa yang kami kerjakan"
  subtitle: "Tiga layanan utama yang kami kuasai secara mendalam."
  items:
    - icon: "🧠"
      title: "IT Consulting"
      desc: "Audit teknologi, roadmap digital, dan rekomendasi stack yang tepat untuk skala bisnis Anda."
      badge: "Consulting"
      badge_color: "purple"
      url: "/services/it-consulting"
    - icon: "🌐"
      title: "Web & Mobile Dev"
      desc: "Dari landing page hingga aplikasi kompleks. Kami bangun produk yang performant dan scalable."
      badge: "Development"
      badge_color: "blue"
      url: "/services/web-mobile"
    - icon: "📦"
      title: "SaaS Development"
      desc: "Kami rancang dan bangun produk SaaS dari nol — arsitektur, UI, billing, hingga go-to-market."
      badge: "SaaS"
      badge_color: "green"
      url: "/services/saas"

cta:
  title: "Siap berkolaborasi?"
  subtitle: "Ceritakan kebutuhan Anda. Kami akan respons dalam 1x24 jam."
  primary:
    label: "Hubungi Kami"
    url: "/contact"
  secondary:
    label: "Lihat Layanan"
    url: "/services"
---

```
---

## content/products/_index.md
```md

```
---

## content/projects/_index.md
```md

```
---

## content/services/_index.md
```md

```
---

## content/services/it-consulting.md
```md
---
title: "IT Consulting"
description: "Audit teknologi, roadmap digital, dan rekomendasi stack yang tepat untuk skala bisnis Anda."
badge: "Consulting"
badge_color: "purple"
icon: "brain"
weight: 1
---

## Apa yang kami lakukan

Banyak bisnis menghadapi masalah yang sama: sistem yang tidak scalable, stack yang salah pilih, atau roadmap yang tidak realistis. Kami masuk untuk memberikan perspektif teknis yang jujur dan actionable.

## Layanan konsultasi kami

**Technology Audit** — Evaluasi menyeluruh terhadap arsitektur, codebase, infrastruktur, dan proses engineering yang sedang berjalan.

**Digital Roadmap** — Peta jalan transformasi digital yang realistis, diprioritaskan berdasarkan dampak bisnis dan kapasitas tim.

**Stack Advisory** — Rekomendasi teknologi yang tepat berdasarkan kebutuhan saat ini dan proyeksi pertumbuhan, bukan tren semata.

**CTO-as-a-Service** — Kepemimpinan teknis paruh waktu untuk startup atau perusahaan yang belum memiliki CTO tetap.

## Untuk siapa

- Startup yang ingin memastikan fondasi teknis sebelum scaling
- Perusahaan yang sedang mengalami bottleneck teknis
- Tim non-teknis yang ingin memahami pilihan teknologi mereka
- Bisnis yang ingin melakukan migrasi sistem lama

## Proses kerja

1. Discovery call — memahami konteks bisnis dan masalah teknis
2. Audit & assessment — evaluasi kondisi saat ini
3. Laporan & rekomendasi — dokumen yang konkret dan actionable
4. Sesi presentasi — walkthrough hasil dan diskusi prioritas
5. Pendampingan opsional — support implementasi rekomendasi

```
---

## content/services/saas.md
```md
---
title: "SaaS Development"
description: "Kami rancang dan bangun produk SaaS dari nol — arsitektur, UI, billing, hingga go-to-market."
badge: "SaaS"
badge_color: "green"
icon: "package"
weight: 3
---

## Membangun SaaS yang benar

SaaS bukan sekadar web app yang dibayar bulanan. Ada puluhan keputusan arsitektur yang harus benar sejak awal — multi-tenancy, billing, onboarding, observability. Salah di awal, biayanya mahal di kemudian hari.

## Yang kami tangani

**Arsitektur & Infrastruktur** — Multi-tenant database design, autentikasi, authorization, dan infrastruktur yang bisa scale.

**Billing & Subscription** — Integrasi Stripe atau Midtrans, manajemen plan, trial, dan upgrade/downgrade flow.

**Onboarding Flow** — User onboarding yang memastikan activation rate tinggi sejak hari pertama.

**Admin Dashboard** — Internal tools untuk tim Anda mengelola user, subscription, dan data.

**Analytics & Observability** — Error tracking, performance monitoring, dan product analytics bawaan.

## Pendekatan kami

Kami tidak langsung membangun semua fitur. Kami mulai dari core loop — fitur paling kritis yang membuat user mendapatkan value pertama mereka. Setelah itu iterasi berdasarkan data.

## Deliverable

- Source code dengan dokumentasi teknis
- Deployment ke infrastruktur pilihan Anda
- Runbook untuk operasional
- Sesi handover ke tim internal

```
---

## content/services/web-mobile.md
```md
---
title: "Web & Mobile Development"
description: "Dari landing page hingga aplikasi kompleks. Produk yang performant, scalable, dan maintainable."
badge: "Development"
badge_color: "blue"
icon: "globe"
weight: 2
---

## Apa yang kami bangun

Kami membangun produk digital yang dimaksudkan untuk tumbuh. Bukan prototype yang perlu dibuang ulang saat traffic naik, bukan codebase yang tidak ada yang bisa maintain setelah 6 bulan.

## Spesialisasi

**Web Application** — SPA, SSR, atau static site tergantung kebutuhan. Stack utama: Go, Hugo, React, Next.js.

**Mobile Application** — Cross-platform dengan Flutter untuk efisiensi, atau native jika performa kritis.

**API & Backend** — REST atau GraphQL API yang well-documented, dibangun di atas arsitektur yang tepat untuk skala.

**Landing Page & Company Profile** — Dioptimasi untuk konversi dan SEO, bukan sekadar tampil bagus.

## Standar yang kami jaga

- Lighthouse score 90+ untuk semua produk web
- Test coverage minimal untuk logika bisnis kritis
- Dokumentasi teknis sebagai bagian dari deliverable
- Code review dan handover yang proper

## Timeline umum

| Jenis Proyek | Estimasi |
|---|---|
| Landing page | 1–2 minggu |
| Company profile | 2–3 minggu |
| Web app MVP | 4–6 minggu |
| Mobile app MVP | 6–10 minggu |
| Platform kompleks | Diskusi scope |

```
---

## data/nav.json
```json

```
---

## data/partners.json
```json
[
  {
    "name": "Go"
  },
  {
    "name": "Hugo"
  },
  {
    "name": "PocketBase"
  },
  {
    "name": "React"
  },
  {
    "name": "Next.js"
  },
  {
    "name": "Flutter"
  },
  {
    "name": "Tailwind CSS"
  },
  {
    "name": "PostgreSQL"
  },
  {
    "name": "SQLite"
  },
  {
    "name": "Docker"
  },
  {
    "name": "Cloudflare"
  },
  {
    "name": "Caddy"
  }
]

```
---

## data/stats.json
```json
[
  {
    "label": "Klien Puas",
    "value": 47,
    "suffix": "+"
  },
  {
    "label": "Proyek Selesai",
    "value": 120,
    "suffix": "+"
  },
  {
    "label": "Tahun Pengalaman",
    "value": 5,
    "suffix": "+"
  },
  {
    "label": "Uptime SaaS",
    "value": 99,
    "suffix": ".9%"
  }
]

```
---

## data/team.json
```json
[
  {
    "name": "Zed Arifin",
    "role": "Founder & Lead Engineer",
    "avatar": "",
    "bio": "10 tahun membangun produk digital dari skala startup hingga enterprise. Fokus pada arsitektur sistem dan engineering culture."
  },
  {
    "name": "Aira Putri",
    "role": "UI/UX & Frontend",
    "avatar": "",
    "bio": "Spesialis desain antarmuka yang berpikir dalam sistem. Percaya bahwa UX yang baik dimulai dari pemahaman bisnis yang mendalam."
  },
  {
    "name": "Rizal Maulana",
    "role": "Backend & DevOps",
    "avatar": "",
    "bio": "Infrastructure engineer dengan obsesi terhadap reliability dan observability. Jika bisa di-automate, akan di-automate."
  }
]

```
---

## data/testimonials.json
```json
[
  {
    "name": "Andi Prasetyo",
    "role": "CTO",
    "company": "TechCorp Indonesia",
    "avatar": "",
    "content": "ZEDLABS berhasil membangun platform kami dalam waktu 6 minggu. Kualitas kode dan komunikasinya sangat profesional.",
    "rating": 5
  },
  {
    "name": "Sarah Wijaya",
    "role": "Product Manager",
    "company": "Startup Fintech X",
    "avatar": "",
    "content": "Tim yang sangat responsif dan paham kebutuhan bisnis. Mereka tidak hanya coding, tapi benar-benar memahami masalah yang ingin kami selesaikan.",
    "rating": 5
  },
  {
    "name": "Budi Santoso",
    "role": "CEO",
    "company": "RetailPlus",
    "avatar": "",
    "content": "Investasi terbaik yang pernah kami lakukan. ROI dari sistem yang ZEDLABS bangun terasa dalam 3 bulan pertama.",
    "rating": 5
  }
]

```
---

## .github/workflows/deploy.yml
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: latest
          extended: true

      - name: Build
        run: npm run build
        env:
          HUGO_ENVIRONMENT: production

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy public --project-name=zedlabs-web

```
---

## hugo.toml
```toml
baseURL = "https://zedlabs.id"
defaultContentLanguage = "id"
title = "ZEDLABS — Innovate Beyond Limits"
theme = ""

[languages]
  [languages.id]
    locale = "id"
    weight = 1

[params]
  description = "IT Consulting, Web & Mobile Development, dan SaaS solutions."
  tagline = "Innovate Beyond Limits"
  email = "hello@zedlabs.id"
  whatsapp = "+6281234567890"
  github = "https://github.com/zedlabs"
  linkedin = "https://linkedin.com/company/zedlabs"
  pocketbase_url = "https://api.zedlabs.id"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[markup.highlight]
  style = "github-dark"
  lineNos = true

[taxonomies]
  category = "categories"
  tag = "tags"

[pagination]
  pagerSize = 9

[menu]
  [[menu.main]]
    name = "Layanan"
    url = "/services"
    weight = 1
  [[menu.main]]
    name = "Produk"
    url = "/products"
    weight = 2
  [[menu.main]]
    name = "Proyek"
    url = "/projects"
    weight = 3
  [[menu.main]]
    name = "Blog"
    url = "/blog"
    weight = 4
  [[menu.main]]
    name = "Tentang"
    url = "/about"
    weight = 5
  [[menu.main]]
    name = "Kontak"
    url = "/contact"
    weight = 6

```
---

## layouts/about/single.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <!-- Hero -->
    <div class="max-w-3xl">
      <span class="section-label">Tentang Kami</span>
      <h1 class="section-title">Kami bukan vendor biasa</h1>
      <p class="section-subtitle text-lg">
        ZEDLABS adalah studio teknologi yang fokus membantu bisnis bertransformasi digital.
        Kami tidak hanya membangun produk — kami memastikan produk tersebut berdampak nyata.
      </p>
    </div>

    <!-- Stats -->
    <div class="mt-16 grid grid-cols-2 gap-6 border-t border-b border-[#21262d] py-12 sm:grid-cols-4">
      {{ range .Site.Data.stats }}
      <div class="text-center">
        <div class="text-4xl font-bold font-mono text-[#e6edf3]">
          <span data-counter data-target="{{ .value }}">0</span>{{ .suffix }}
        </div>
        <p class="mt-2 text-sm text-[#8b949e]">{{ .label }}</p>
      </div>
      {{ end }}
    </div>

    <!-- Story -->
    <div class="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
      <div>
        <h2 class="text-2xl font-bold text-[#e6edf3] tracking-tight">Bagaimana kami memulai</h2>
        <div class="prose-zed mt-6">
          {{ .Content }}
        </div>
      </div>

      <div class="space-y-4">
        <div class="card p-5 flex items-start gap-4">
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#0d1117]">
            <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#e6edf3]">Fokus pada Hasil</h3>
            <p class="mt-1 text-sm text-[#8b949e] leading-relaxed">
              Setiap keputusan teknis didasarkan pada tujuan bisnis, bukan preferensi teknologi semata.
            </p>
          </div>
        </div>

        <div class="card p-5 flex items-start gap-4">
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#0d1117]">
            <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#e6edf3]">Delivery Cepat</h3>
            <p class="mt-1 text-sm text-[#8b949e] leading-relaxed">
              MVP dalam 4–6 minggu. Kami percaya pada iterasi cepat dan feedback nyata dari pengguna.
            </p>
          </div>
        </div>

        <div class="card p-5 flex items-start gap-4">
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#0d1117]">
            <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#e6edf3]">Transparan</h3>
            <p class="mt-1 text-sm text-[#8b949e] leading-relaxed">
              Progress real-time, tidak ada kejutan di akhir proyek. Anda selalu tahu apa yang sedang dikerjakan.
            </p>
          </div>
        </div>

        <div class="card p-5 flex items-start gap-4">
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#0d1117]">
            <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#e6edf3]">Partner, Bukan Vendor</h3>
            <p class="mt-1 text-sm text-[#8b949e] leading-relaxed">
              Kami ikut berpikir tentang bisnis Anda, bukan hanya menjalankan spesifikasi yang diberikan.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->
    {{ with .Site.Data.team }}
    <div class="mt-24">
      <div class="text-center mb-12">
        <span class="section-label">Tim</span>
        <h2 class="section-title">Orang-orang di balik ZEDLABS</h2>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {{ range . }}
        <div class="card p-6 text-center">
          {{ if .avatar }}
          <img src="{{ .avatar }}" alt="{{ .name }}"
            class="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-[#30363d] object-cover" />
          {{ else }}
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#30363d] bg-[#21262d] font-mono text-xl font-bold text-[#8b949e]">
            {{ substr .name 0 1 }}
          </div>
          {{ end }}
          <h3 class="font-semibold text-[#e6edf3]">{{ .name }}</h3>
          <p class="mt-1 text-sm text-[#8b949e]">{{ .role }}</p>
          {{ with .bio }}
          <p class="mt-3 text-xs text-[#6e7681] leading-relaxed">{{ . }}</p>
          {{ end }}
        </div>
        {{ end }}
      </div>
    </div>
    {{ end }}

    <!-- Partners -->
    {{ with .Site.Data.partners }}
    <div class="mt-24 border-t border-[#21262d] pt-20 text-center">
      <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-10">Teknologi yang Kami Gunakan</p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        {{ range . }}
        <span class="tag text-sm px-4 py-2">{{ .name }}</span>
        {{ end }}
      </div>
    </div>
    {{ end }}

    <!-- CTA -->
    <div class="mt-24 rounded-2xl border border-[#30363d] bg-[#161b22] p-12 text-center">
      <h2 class="text-2xl font-bold text-[#e6edf3]">Tertarik bekerja sama?</h2>
      <p class="mt-3 text-[#8b949e]">Konsultasi pertama gratis. Tidak ada kewajiban apapun.</p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a href="/contact" class="btn-primary px-8 py-3">Mulai Konsultasi</a>
        <a href="/projects" class="btn-outline px-8 py-3">Lihat Proyek Kami</a>
      </div>
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/blog/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Blog</span>
      <h1 class="section-title">Tulisan & Pemikiran</h1>
      <p class="section-subtitle">
        Insight tentang teknologi, arsitektur sistem, dan pengembangan produk digital.
      </p>
    </div>

    {{ $featured := where .Pages "Params.featured" true }}
    {{ $rest := where .Pages "Params.featured" "ne" true }}

    {{ with $featured }}
    <div class="mt-16">
      {{ range first 1 . }}
      <a href="{{ .Permalink }}" class="card-interactive group block overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          {{ with .Params.thumbnail }}
          <div class="aspect-video overflow-hidden bg-[#21262d] lg:aspect-auto">
            <img src="{{ . }}" alt="{{ $.Title }}"
              class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
          </div>
          {{ else }}
          <div class="hidden aspect-video items-center justify-center bg-[#161b22] lg:flex">
            <span class="font-mono text-4xl font-bold text-[#30363d]">{{ substr .Title 0 1 }}</span>
          </div>
          {{ end }}
          <div class="p-8 lg:p-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge-green">Featured</span>
              {{ with .Params.category }}
              <span class="badge-blue">{{ . }}</span>
              {{ end }}
            </div>
            <h2
              class="text-2xl font-bold text-[#e6edf3] leading-tight tracking-tight group-hover:text-[#388bfd] transition-colors">
              {{ .Title }}
            </h2>
            {{ with .Description }}
            <p class="mt-3 text-[#8b949e] leading-relaxed">{{ . }}</p>
            {{ end }}
            <p class="mt-6 text-xs font-mono text-[#6e7681]">
              {{ .Date.Format "2 January 2006" }} &middot; {{ .ReadingTime }} min read
            </p>
          </div>
        </div>
      </a>
      {{ end }}
    </div>
    {{ end }}

    {{ with $rest }}
    <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range . }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col p-6">
        {{ with .Params.category }}
        <span class="badge-blue self-start mb-4">{{ . }}</span>
        {{ end }}
        <h2 class="font-semibold text-[#e6edf3] leading-snug group-hover:text-[#388bfd] transition-colors flex-1">
          {{ .Title }}
        </h2>
        {{ with .Description }}
        <p class="mt-2 text-sm text-[#8b949e] leading-relaxed line-clamp-2">{{ . }}</p>
        {{ end }}
        <p class="mt-5 pt-4 border-t border-[#21262d] text-xs font-mono text-[#6e7681]">
          {{ .Date.Format "2 January 2006" }} &middot; {{ .ReadingTime }} min read
        </p>
      </a>
      {{ end }}
    </div>
    {{ end }}

    {{ template "_internal/pagination.html" . }}

  </div>
</div>
{{ end }}

```
---

## layouts/blog/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          {{ with .Params.category }}
          <a href="/blog" class="badge-blue">{{ . }}</a>
          {{ end }}
          {{ range .Params.tags }}
          <span class="tag">{{ . }}</span>
          {{ end }}
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#e6edf3]">
          {{ .Title }}
        </h1>

        {{ with .Description }}
        <p class="mt-5 text-lg text-[#8b949e] leading-relaxed">{{ . }}</p>
        {{ end }}

        <div class="mt-8 flex items-center justify-between border-t border-b border-[#21262d] py-4">
          <div class="flex items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#21262d] font-mono text-sm font-bold text-[#8b949e] border border-[#30363d]">
              Z
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">ZEDLABS</p>
              <p class="text-xs text-[#6e7681]">
                <time datetime="{{ .Date.Format " 2006-01-02" }}">{{ .Date.Format "2 January 2006" }}</time>
              </p>
            </div>
          </div>
          <span class="text-xs font-mono text-[#6e7681]">{{ .ReadingTime }} min read</span>
        </div>
      </header>

      {{ with .Params.thumbnail }}
      <div class="mb-12 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      <div class="prose-zed">
        {{ .Content }}
      </div>

      <footer class="mt-16 pt-10 border-t border-[#21262d]">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p class="text-xs font-mono text-[#6e7681] mb-2">Tags</p>
            <div class="flex flex-wrap gap-2">
              {{ range .Params.tags }}
              <span class="tag">{{ . }}</span>
              {{ end }}
            </div>
          </div>
          <a href="/blog" class="btn-outline text-sm">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Semua Tulisan
          </a>
        </div>
      </footer>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/contact/single.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">

      <!-- Left: Info -->
      <div>
        <span class="section-label">Kontak</span>
        <h1 class="section-title">Mari Bicara</h1>
        <p class="section-subtitle">
          Ceritakan kebutuhan Anda. Kami akan merespons dalam 1x24 jam di hari kerja.
        </p>

        <div class="mt-12 space-y-6">
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">Email</p>
              <a href="mailto:{{ .Site.Params.email }}"
                class="text-sm text-[#8b949e] hover:text-[#388bfd] transition-colors">
                {{ .Site.Params.email }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">WhatsApp</p>
              <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank" rel="noopener noreferrer"
                class="text-sm text-[#8b949e] hover:text-[#388bfd] transition-colors">
                {{ .Site.Params.whatsapp }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">Jam Respons</p>
              <p class="text-sm text-[#8b949e]">Senin – Jumat, 09.00 – 18.00 WIB</p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="mt-12" x-data="{ open: null }">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-6">FAQ</p>
          <div class="space-y-3">

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 0 ? open = null : open = 0"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Berapa lama proses konsultasi awal?
                <svg :class="open === 0 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 0" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  Sesi konsultasi pertama biasanya 30–60 menit via video call. Kami akan memahami kebutuhan Anda sebelum
                  membuat proposal.
                </p>
              </div>
            </div>

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 1 ? open = null : open = 1"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Apakah konsultasi pertama gratis?
                <svg :class="open === 1 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 1" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  Ya. Konsultasi awal sepenuhnya gratis tanpa kewajiban apapun.
                </p>
              </div>
            </div>

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 2 ? open = null : open = 2"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Berapa lama estimasi pengerjaan proyek?
                <svg :class="open === 2 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 2" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  MVP sederhana bisa selesai 4–6 minggu. Proyek kompleks kami diskusikan scope dan timeline bersama
                  sebelum kontrak.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div>
        <div class="card p-8" x-data="contactForm('{{ .Site.Params.pocketbase_url }}')">
          <h2 class="text-lg font-semibold text-[#e6edf3] mb-6">Kirim Pesan</h2>

          <!-- Success -->
          <div x-show="status === 'success'" x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
            class="rounded-lg border border-[#238636]/30 bg-[#0f2d1a] p-6 text-center">
            <div
              class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#238636]/10 border border-[#238636]/30">
              <svg class="h-6 w-6 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-semibold text-[#e6edf3]">Pesan Terkirim</h3>
            <p class="mt-2 text-sm text-[#8b949e]">Kami akan menghubungi Anda dalam 1x24 jam.</p>
            <button @click="reset()" class="btn-outline mt-6 text-sm">
              Kirim Pesan Lain
            </button>
          </div>

          <!-- Error banner -->
          <div x-show="status === 'error'" x-transition
            class="mb-6 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3">
            <p class="text-sm text-red-400">
              Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
            </p>
          </div>

          <!-- Form -->
          <form x-show="status !== 'success'" @submit.prevent="submit()" class="space-y-5">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label class="label" for="name">Nama</label>
                <input id="name" type="text" x-model="form.name" placeholder="Budi Santoso" autocomplete="name"
                  :class="errors.name ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''" class="input" />
                <p x-show="errors.name" x-text="errors.name" class="mt-1.5 text-xs text-red-400"></p>
              </div>
              <div>
                <label class="label" for="email">Email</label>
                <input id="email" type="email" x-model="form.email" placeholder="budi@perusahaan.com"
                  autocomplete="email"
                  :class="errors.email ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''" class="input" />
                <p x-show="errors.email" x-text="errors.email" class="mt-1.5 text-xs text-red-400"></p>
              </div>
            </div>

            <div>
              <label class="label" for="need_type">Kebutuhan</label>
              <div class="relative">
                <select id="need_type" x-model="form.need_type"
                  :class="errors.need_type ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''"
                  class="input appearance-none pr-10">
                  <option value="" disabled selected>Pilih kebutuhan Anda</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                <svg class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e7681]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p x-show="errors.need_type" x-text="errors.need_type" class="mt-1.5 text-xs text-red-400"></p>
            </div>

            <div>
              <label class="label" for="message">Pesan</label>
              <textarea id="message" x-model="form.message" rows="5"
                placeholder="Ceritakan kebutuhan, konteks bisnis, atau pertanyaan Anda..."
                :class="errors.message ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''"
                class="input resize-none"></textarea>
              <div class="mt-1.5 flex items-center justify-between">
                <p x-show="errors.message" x-text="errors.message" class="text-xs text-red-400"></p>
                <p class="ml-auto text-xs font-mono text-[#6e7681]" x-text="form.message.length + ' karakter'"></p>
              </div>
            </div>

            <button type="submit" :disabled="status === 'loading'"
              :class="status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''"
              class="btn-primary w-full justify-center py-3">
              <span x-show="status !== 'loading'">Kirim Pesan</span>
              <span x-show="status === 'loading'" class="flex items-center gap-2">
                <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Mengirim...
              </span>
            </button>

            <p class="text-center text-xs text-[#6e7681]">
              Atau langsung via

              href="https://wa.me/{{ .Site.Params.whatsapp }}"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#388bfd] hover:underline"
              >WhatsApp</a>
            </p>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>
{{ end }}

```
---

## layouts/_default/baseof.html
```html
<!DOCTYPE html>
<html lang="{{ .Site.Language.Locale }}" class="scroll-smooth">

<head>
  {{ partial "head.html" . }}
</head>

<body class="font-sans antialiased theme-bg-primary theme-text-primary">

  {{ partial "nav.html" . }}

  <main id="main-content">
    {{ block "main" . }}{{ end }}
  </main>

  {{ partial "footer.html" . }}

  {{ $js := resources.Get "js/main.js" | minify }}
  <script src="{{ $js.RelPermalink }}"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

</body>

</html>

```
---

## layouts/_default/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">
    <h1 class="section-title">{{ .Title }}</h1>
    {{ with .Content }}
    <div class="prose-zed mt-6 max-w-2xl">{{ . }}</div>
    {{ end }}

    {{ if .Pages }}
    <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range .Pages }}
      <li>
        <a href="{{ .Permalink }}" class="card-interactive block p-6 h-full">
          <h2 class="font-semibold text-[#e6edf3]">{{ .Title }}</h2>
          {{ with .Description }}
          <p class="mt-2 text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
          {{ end }}
          <p class="mt-4 text-xs font-mono text-[#6e7681]">
            {{ .Date.Format "2 Jan 2006" }}
          </p>
        </a>
      </li>
      {{ end }}
    </ul>
    {{ end }}
  </div>
</div>
{{ end }}

```
---

## layouts/_default/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-10">
        {{ with .Params.category }}
        <span class="badge-blue mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title mt-3">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle max-w-2xl">{{ . }}</p>
        {{ end }}
        <div class="mt-6 flex items-center gap-4 text-xs font-mono text-[#6e7681]">
          <time datetime="{{ .Date.Format " 2006-01-02" }}">{{ .Date.Format "2 January 2006" }}</time>
          {{ if .ReadingTime }}
          <span>{{ .ReadingTime }} min read</span>
          {{ end }}
        </div>
      </header>

      <div class="prose-zed">
        {{ .Content }}
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/index.html
```html
{{ define "main" }}
{{ partial "sections/hero.html" . }}
{{ partial "sections/about.html" . }}
{{ partial "sections/stats.html" . }}
{{ partial "sections/services.html" . }}
{{ partial "sections/testimonials.html" . }}
{{ partial "sections/cta.html" . }}
{{ end }}

```
---

## layouts/partials/footer.html
```html
<footer class="border-t theme-border theme-bg-primary">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

      <div class="md:col-span-1">
        <a href="/" class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm text-white"
            style="background-color: #238636;">
            Z
          </div>
          <span class="font-bold theme-text-primary">ZED<span style="color: #238636;">LABS</span></span>
        </a>
        <p class="text-sm theme-text-secondary leading-relaxed">
          {{ .Site.Params.description }}
        </p>
        <div class="flex gap-3 mt-5">
          <a href="{{ .Site.Params.github }}" target="_blank"
            class="p-2 rounded-md border theme-border theme-text-secondary hover:theme-text-primary transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="{{ .Site.Params.linkedin }}" target="_blank"
            class="p-2 rounded-md border theme-border theme-text-secondary hover:theme-text-primary transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank"
            class="p-2 rounded-md border theme-border theme-text-secondary hover:theme-text-primary transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-semibold theme-text-primary mb-4">Layanan</h4>
        <ul class="space-y-2">
          {{ range .Site.Menus.main }}
          <li>
            <a href="{{ .URL }}" class="text-sm theme-text-secondary hover:theme-text-primary transition-colors">
              {{ .Name }}
            </a>
          </li>
          {{ end }}
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold theme-text-primary mb-4">Perusahaan</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="text-sm theme-text-secondary hover:theme-text-primary transition-colors">Tentang
              Kami</a></li>
          <li><a href="/blog" class="text-sm theme-text-secondary hover:theme-text-primary transition-colors">Blog</a>
          </li>
          <li><a href="/projects"
              class="text-sm theme-text-secondary hover:theme-text-primary transition-colors">Proyek</a></li>
          <li><a href="/contact"
              class="text-sm theme-text-secondary hover:theme-text-primary transition-colors">Kontak</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold theme-text-primary mb-4">Kontak</h4>
        <ul class="space-y-2 text-sm theme-text-secondary">
          <li>
            <a href="mailto:{{ .Site.Params.email }}" class="hover:theme-text-primary transition-colors">
              {{ .Site.Params.email }}
            </a>
          </li>
          <li>
            <a href="https://wa.me/{{ .Site.Params.whatsapp }}" class="hover:theme-text-primary transition-colors">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-12 pt-8 border-t theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs theme-text-muted">
        {{ now.Year }} ZEDLABS. All rights reserved.
      </p>
      <p class="text-xs theme-text-muted font-mono">
        Built with Hugo + PocketBase
      </p>
    </div>

  </div>
</footer>

```
---

## layouts/partials/head.html
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />

<title>
  {{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }} &middot; {{ .Site.Title }}{{ end }}
</title>

<link rel="canonical" href="{{ .Permalink }}" />

<meta property="og:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}" />
<meta property="og:description"
  content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}" />
<meta property="og:url" content="{{ .Permalink }}" />
<meta property="og:site_name" content="{{ .Site.Title }}" />
{{ with .Params.thumbnail }}
<meta property="og:image" content="{{ . | absURL }}" />
{{ else }}
<meta property="og:image" content="{{ " og-default.png" | absURL }}" />
{{ end }}

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}" />
<meta name="twitter:description"
  content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />
{{ with .Params.thumbnail }}
<meta name="twitter:image" content="{{ . | absURL }}" />
{{ else }}
<meta name="twitter:image" content="{{ " og-default.png" | absURL }}" />
{{ end }}

{{ if .IsPage }}
<meta property="article:published_time" content="{{ .Date.Format " 2006-01-02T15:04:05Z07:00" }}" />
{{ with .Params.tags }}
{{ range . }}
<meta property="article:tag" content="{{ . }}" />
{{ end }}
{{ end }}
{{ end }}

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet" />

<link rel="stylesheet" href="/css/main.css" />

<script>
  (function () {
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "light" || (!saved && !prefersDark)) {
      document.documentElement.classList.add("light");
    }
  })();
</script>

```
---

## layouts/partials/nav.html
```html
<header x-data="{ open: false, scrolled: false }"
  x-init="window.addEventListener('scroll', () => { scrolled = window.scrollY > 20 })"
  :class="scrolled ? 'border-b theme-border theme-bg-primary bg-opacity-90 backdrop-blur-md' : 'bg-transparent'"
  class="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">

      <a href="/" class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-md font-mono text-sm font-bold text-white"
          style="background-color: #238636;">
          Z
        </div>
        <span class="font-bold tracking-tight theme-text-primary">
          ZED<span style="color: #238636;">LABS</span>
        </span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        {{ range .Site.Menus.main }}
        <a href="{{ .URL }}" class="rounded-md px-3 py-1.5 text-sm theme-text-secondary transition-all duration-150 hover:theme-bg-surface
        hover:theme-text-primary">
          {{ .Name }}
      </a>
          {{ end }}
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <button onclick="toggleTheme()"
          class="rounded-md border p-2 transition-colors duration-150 theme-border theme-text-secondary hover:theme-text-primary hover:theme-bg-surface"
          aria-label="Toggle theme">
          <svg data-icon-moon class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg data-icon-sun class="h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <a href="/contact" class="btn-primary text-sm">
          Mulai Konsultasi
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <button @click="open = !open"
        class="rounded-md p-2 theme-text-secondary transition-colors hover:theme-bg-surface hover:theme-text-primary md:hidden"
        aria-label="Toggle menu">
        <svg x-show="!open" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg x-show="open" x-cloak class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>
  </div>

  <div x-show="open" x-cloak x-transition:enter="transition ease-out duration-150"
    x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0"
    x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100 translate-y-0"
    x-transition:leave-end="opacity-0 -translate-y-1"
    class="border-t theme-border theme-bg-primary bg-opacity-95 backdrop-blur-md md:hidden">
    <div class="space-y-1 px-4 py-4">
      {{ range .Site.Menus.main }}
      <a href="{{ .URL }}" @click="open = false" class="block rounded-md px-3 py-2 text-sm theme-text-secondary transition-colors hover:theme-bg-surface
      hover:theme-text-primary">
        {{ .Name }}
      </a>
      {{ end }}
      <div class="border-t theme-border pt-3 flex items-center gap-3">
        <button onclick="toggleTheme()"
          class="rounded-md border p-2 transition-colors theme-border theme-text-secondary hover:theme-text-primary hover:theme-bg-surface"
          aria-label="Toggle theme">
          <svg data-icon-moon class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg data-icon-sun class="h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <a href="/contact" class="btn-primary flex-1 justify-center">
          Mulai Konsultasi
        </a>
      </div>
    </div>
  </div>
</header>

```
---

## layouts/partials/sections/about.html
```html
{{ $about := .Params.about }}

<section class="section border-t border-[#21262d]">
  <div class="container-content">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Text -->
      <div>
        <span class="section-label">{{ $about.label }}</span>
        <h2 class="section-title">{{ $about.title }}</h2>
        <p class="section-subtitle">{{ $about.body }}</p>

        <a href="/about" class="btn-outline mt-8 inline-flex">
          Selengkapnya tentang kami
        </a>
      </div>

      <!-- Differentiators -->
      <div class="grid grid-cols-1 gap-4">
        {{ range $about.differentiators }}
        <div class="card p-5 flex gap-4 items-start">
          <span class="text-2xl">{{ .icon }}</span>
          <div>
            <h3 class="font-semibold text-[#e6edf3] text-sm">{{ .title }}</h3>
            <p class="text-[#8b949e] text-sm mt-1">{{ .desc }}</p>
          </div>
        </div>
        {{ end }}
      </div>

    </div>
  </div>
</section>

```
---

## layouts/partials/sections/cta.html
```html
{{ $cta := .Params.cta }}

<section class="section border-t border-[#21262d]">
  <div class="container-content">
    <div class="relative rounded-2xl border border-[#30363d] bg-[#161b22] overflow-hidden p-12 text-center">

      <!-- Background glow -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#238636] blur-3xl opacity-10 pointer-events-none">
      </div>

      <span class="section-label">Mulai Sekarang</span>
      <h2 class="section-title mt-2">{{ $cta.title }}</h2>
      <p class="section-subtitle max-w-xl mx-auto">{{ $cta.subtitle }}</p>

      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <a href="{{ $cta.primary.url }}" class="btn-primary px-8 py-3 text-base">
          {{ $cta.primary.label }}
        </a>
        <a href="{{ $cta.secondary.url }}" class="btn-outline px-8 py-3 text-base">
          {{ $cta.secondary.label }}
        </a>
      </div>

    </div>
  </div>
</section>

```
---

## layouts/partials/sections/hero.html
```html
{{ $hero := .Params.hero }}

<section class="relative min-h-screen flex items-center overflow-hidden">

  <!-- Background grid -->
  <div class="absolute inset-0 bg-[#0d1117]">
    <div class="absolute inset-0"
      style="background-image: linear-gradient(#21262d 1px, transparent 1px), linear-gradient(90deg, #21262d 1px, transparent 1px); background-size: 60px 60px; opacity: 0.3;">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117]"></div>
  </div>

  <!-- Glow blobs -->
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#238636] rounded-full blur-3xl opacity-5 pointer-events-none">
  </div>
  <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1f6feb] rounded-full blur-3xl opacity-5 pointer-events-none">
  </div>

  <div class="relative container-content section pt-32">
    <div class="max-w-4xl">

      <!-- Label -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#238636]/30 bg-[#0f2d1a] mb-8">
        <span class="w-2 h-2 rounded-full bg-[#238636] animate-pulse"></span>
        <span class="text-xs font-mono text-[#238636]">Innovate Beyond Limits</span>
      </div>

      <!-- Headline -->
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
        {{ $hero.headline }}
        <br />
        <span class="text-gradient-green">{{ $hero.headline_accent }}</span>
      </h1>

      <!-- Subheadline -->
      <p class="mt-6 text-lg sm:text-xl text-[#8b949e] max-w-2xl leading-relaxed">
        {{ $hero.subheadline }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-4 mt-10">
        <a href="{{ $hero.cta_primary.url }}" class="btn-primary px-6 py-3 text-base">
          {{ $hero.cta_primary.label }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="{{ $hero.cta_secondary.url }}" class="btn-outline px-6 py-3 text-base">
          {{ $hero.cta_secondary.label }}
        </a>
      </div>

      <!-- Tech stack pills -->
      <div class="flex flex-wrap gap-2 mt-12">
        {{ range slice "Go" "Hugo" "PocketBase" "PostgreSQL" "React" "Flutter" "Tailwind" "Docker" }}
        <span class="px-3 py-1 rounded-full text-xs font-mono border border-[#30363d] text-[#6e7681] bg-[#161b22]">
          {{ . }}
        </span>
        {{ end }}
      </div>

    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e7681]">
    <span class="text-xs font-mono">scroll</span>
    <div class="w-px h-8 bg-gradient-to-b from-[#6e7681] to-transparent"></div>
  </div>

</section>

```
---

## layouts/partials/sections/services.html
```html
{{ $s := .Params.services }}

<section class="section border-t border-[#21262d]">
  <div class="container-content">

    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="section-label">{{ $s.label }}</span>
      <h2 class="section-title">{{ $s.title }}</h2>
      <p class="section-subtitle">{{ $s.subtitle }}</p>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {{ range $s.items }}
      <a href="{{ .url }}" class="card-interactive p-6 flex flex-col gap-4 group">
        <div class="text-3xl">{{ .icon }}</div>
        <div>
          <span class="badge-{{ .badge_color }}">{{ .badge }}</span>
          <h3 class="text-lg font-semibold text-[#e6edf3] mt-3">{{ .title }}</h3>
          <p class="text-[#8b949e] text-sm mt-2 leading-relaxed">{{ .desc }}</p>
        </div>
        <div
          class="mt-auto pt-4 border-t border-[#21262d] flex items-center text-sm text-[#8b949e] group-hover:text-[#388bfd] transition-colors">
          Pelajari lebih lanjut
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
      {{ end }}
    </div>

    <!-- Link ke semua layanan -->
    <div class="text-center mt-12">
      <a href="/services" class="btn-secondary">
        Lihat Semua Layanan
      </a>
    </div>

  </div>
</section>

```
---

## layouts/partials/sections/stats.html
```html
<section class="border-t border-[#21262d] bg-[#161b22]">
  <div class="container-content px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {{ range .Params.stats }}
      <div class="text-center">
        <div class="text-4xl font-bold font-mono text-[#e6edf3]">
          <span data-counter data-target="{{ .value }}">0</span>{{ .suffix }}
        </div>
        <p class="text-sm text-[#8b949e] mt-2">{{ .label }}</p>
      </div>
      {{ end }}
    </div>
  </div>
</section>

```
---

## layouts/partials/sections/testimonials.html
```html
<section class="section border-t border-[#21262d]">
  <div class="container-content">

    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="section-label">Testimoni</span>
      <h2 class="section-title">Yang klien katakan</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {{ range $.Site.Data.testimonials }}
      <div class="card p-6 flex flex-col gap-4">

        <!-- Stars -->
        <div class="flex gap-1">
          {{ range seq .rating }}
          <svg class="w-4 h-4 text-[#f0883e]" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {{ end }}
        </div>

        <!-- Quote -->
        <p class="text-[#8b949e] text-sm leading-relaxed flex-1">
          "{{ .content }}"
        </p>

        <!-- Author -->
        <div class="flex items-center gap-3 pt-4 border-t border-[#21262d]">
          <div
            class="w-9 h-9 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-sm font-mono font-bold text-[#8b949e]">
            {{ substr .name 0 1 }}
          </div>
          <div>
            <p class="text-sm font-medium text-[#e6edf3]">{{ .name }}</p>
            <p class="text-xs text-[#6e7681]">{{ .role }} · {{ .company }}</p>
          </div>
        </div>

      </div>
      {{ end }}
    </div>

  </div>
</section>

```
---

## layouts/products/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Produk</span>
      <h1 class="section-title">Produk yang Kami Bangun</h1>
      <p class="section-subtitle">
        SaaS tools dan solusi siap pakai yang lahir dari pengalaman membangun ratusan proyek.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range .Pages }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col overflow-hidden">
        {{ with index .Params.screenshots 0 }}
        <div class="aspect-video overflow-hidden bg-[#21262d]">
          <img src="{{ . }}" alt="{{ $.Title }}"
            class="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
        </div>
        {{ else }}
        <div class="flex aspect-video items-center justify-center bg-[#21262d]">
          <span class="font-mono text-3xl font-bold text-[#30363d]">{{ substr .Title 0 1 }}</span>
        </div>
        {{ end }}
        <div class="flex flex-1 flex-col p-6">
          {{ with .Params.category }}
          <span class="badge-purple self-start mb-3">{{ . }}</span>
          {{ end }}
          <h2 class="font-semibold text-[#e6edf3] leading-snug group-hover:text-[#388bfd] transition-colors">
            {{ .Title }}
          </h2>
          {{ with .Description }}
          <p class="mt-2 text-sm text-[#8b949e] leading-relaxed flex-1">{{ . }}</p>
          {{ end }}
        </div>
      </a>
      {{ end }}
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/products/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">

    <div class="max-w-4xl mx-auto">

      <header class="mb-12">
        {{ with .Params.category }}
        <span class="badge-purple mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle text-lg">{{ . }}</p>
        {{ end }}
      </header>

      {{ with index .Params.screenshots 0 }}
      <div class="mb-16 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      {{ with .Params.features }}
      <div class="mb-16">
        <h2 class="text-xl font-bold text-[#e6edf3] mb-6">Fitur Utama</h2>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {{ range . }}
          <li class="flex items-start gap-3 rounded-lg border border-[#30363d] bg-[#161b22] p-4">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm text-[#8b949e]">{{ . }}</span>
          </li>
          {{ end }}
        </ul>
      </div>
      {{ end }}

      {{ with .Content }}
      <div class="prose-zed mb-16">{{ . }}</div>
      {{ end }}

      <div class="rounded-xl border border-[#238636]/30 bg-[#0f2d1a] p-8 text-center">
        <h2 class="text-xl font-bold text-[#e6edf3]">Tertarik menggunakan produk ini?</h2>
        <p class="mt-2 text-[#8b949e]">Hubungi kami untuk demo atau informasi lebih lanjut.</p>
        <a href="/contact" class="btn-primary mt-6">
          Minta Demo
        </a>
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/projects/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Portofolio</span>
      <h1 class="section-title">Proyek yang Kami Bangun</h1>
      <p class="section-subtitle">
        Dari startup hingga enterprise. Setiap proyek adalah bukti nyata dari pendekatan kami.
      </p>
    </div>

    <div x-data="{
        active: 'Semua',
        categories: ['Semua', 'Web', 'Mobile', 'SaaS', 'Consulting']
      }" class="mt-16">
      <div class="flex flex-wrap gap-2 mb-10">
        <template x-for="cat in categories" :key="cat">
          <button @click="active = cat" :class="active === cat
              ? 'border-[#238636] bg-[#0f2d1a] text-[#3fb950]'
              : 'border-[#30363d] text-[#8b949e] hover:border-[#8b949e] hover:text-[#e6edf3]'"
            class="rounded-md border px-4 py-1.5 text-sm font-medium transition-all duration-150" x-text="cat"></button>
        </template>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {{ range .Pages }}
        {{ if .Params.is_public | default true }}

        href="{{ .Permalink }}"
        x-show="active === 'Semua' || active === '{{ .Params.category }}'"
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100"
        class="card-interactive group flex flex-col overflow-hidden"
        >
        {{ with .Params.thumbnail }}
        <div class="aspect-video overflow-hidden bg-[#21262d]">
          <img src="{{ . }}" alt="{{ $.Title }}"
            class="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
        </div>
        {{ else }}
        <div class="flex aspect-video items-center justify-center bg-[#21262d]">
          <span class="font-mono text-3xl font-bold text-[#30363d]">{{ substr .Title 0 1 }}</span>
        </div>
        {{ end }}
        <div class="flex flex-1 flex-col p-6">
          {{ with .Params.category }}
          <span class="badge-blue self-start mb-3">{{ . }}</span>
          {{ end }}
          <h2 class="font-semibold text-[#e6edf3] leading-snug group-hover:text-[#388bfd] transition-colors">
            {{ .Title }}
          </h2>
          {{ with .Description }}
          <p class="mt-2 text-sm text-[#8b949e] leading-relaxed flex-1">{{ . }}</p>
          {{ end }}
          {{ with .Params.tech_stack }}
          <div class="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-[#21262d]">
            {{ range first 4 . }}
            <span class="tag">{{ . }}</span>
            {{ end }}
          </div>
          {{ end }}
        </div>
        </a>
        {{ end }}
        {{ end }}
      </div>
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/projects/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">

    <div class="max-w-4xl mx-auto">

      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          {{ with .Params.category }}
          <span class="badge-blue">{{ . }}</span>
          {{ end }}
          {{ with .Params.client_name }}
          <span class="text-xs font-mono text-[#6e7681]">{{ . }}</span>
          {{ end }}
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#e6edf3]">
          {{ .Title }}
        </h1>
        {{ with .Description }}
        <p class="mt-5 text-lg text-[#8b949e] leading-relaxed">{{ . }}</p>
        {{ end }}
      </header>

      {{ with .Params.thumbnail }}
      <div class="mb-16 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      {{ if or .Params.problem .Params.solution .Params.result }}
      <div class="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {{ with .Params.problem }}
        <div class="card p-6">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-3">Problem</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
        {{ with .Params.solution }}
        <div class="card p-6">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-3">Solution</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
        {{ with .Params.result }}
        <div class="card p-6 border-[#238636]">
          <p class="text-xs font-mono uppercase tracking-widest text-[#238636] mb-3">Result</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
      </div>
      {{ end }}

      {{ with .Content }}
      <div class="prose-zed mb-16">{{ . }}</div>
      {{ end }}

      {{ with .Params.tech_stack }}
      <div class="mb-16">
        <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-4">Tech Stack</p>
        <div class="flex flex-wrap gap-2">
          {{ range . }}
          <span class="tag">{{ . }}</span>
          {{ end }}
        </div>
      </div>
      {{ end }}

      <footer class="flex items-center justify-between border-t border-[#21262d] pt-10">
        <a href="/projects" class="btn-outline text-sm">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Semua Proyek
        </a>
        {{ with .Params.github_url }}
        <a href="{{ . }}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-sm">
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Lihat di GitHub
        </a>
        {{ end }}
      </footer>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/services/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Layanan</span>
      <h1 class="section-title">Yang Kami Kerjakan</h1>
      <p class="section-subtitle">
        Tiga area keahlian utama kami, dijalankan dengan standar engineering yang ketat.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {{ range .Pages }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col p-6">
        {{ with .Params.icon }}
        <span class="text-3xl mb-4">{{ . }}</span>
        {{ end }}
        {{ with .Params.badge }}
        <span class="badge-{{ $.Params.badge_color | default " blue" }} self-start mb-3">{{ . }}</span>
        {{ end }}
        <h2 class="text-lg font-semibold text-[#e6edf3] group-hover:text-[#388bfd] transition-colors">
          {{ .Title }}
        </h2>
        {{ with .Description }}
        <p class="mt-2 text-sm text-[#8b949e] leading-relaxed flex-1">{{ . }}</p>
        {{ end }}
        <div
          class="mt-6 flex items-center gap-1 pt-4 border-t border-[#21262d] text-sm text-[#8b949e] group-hover:text-[#388bfd] transition-colors">
          Pelajari lebih lanjut
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
      {{ end }}
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/services/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-12">
        {{ with .Params.badge }}
        <span class="badge-{{ $.Params.badge_color | default " blue" }} mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle text-lg">{{ . }}</p>
        {{ end }}
      </header>

      {{ with .Content }}
      <div class="prose-zed">{{ . }}</div>
      {{ end }}

      <div class="mt-16 rounded-xl border border-[#238636]/30 bg-[#0f2d1a] p-8">
        <h2 class="text-xl font-bold text-[#e6edf3]">Tertarik dengan layanan ini?</h2>
        <p class="mt-2 text-[#8b949e]">Konsultasikan kebutuhan Anda. Kami siap membantu dalam 1x24 jam.</p>
        <div class="mt-6 flex flex-wrap gap-4">
          <a href="/contact" class="btn-primary">Mulai Konsultasi</a>
          <a href="/projects" class="btn-outline">Lihat Case Study</a>
        </div>
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/shortcodes/badge.html
```html

```
---

## layouts/shortcodes/cta-inline.html
```html

```
---

## .nvmrc
```text
20

```
---

## package.json
```json
{
  "name": "zedlabs-web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "concurrently \"tailwindcss -i ./assets/css/main.css -o ./static/css/main.css --watch\" \"hugo server --disableFastRender\"",
    "build": "tailwindcss -i ./assets/css/main.css -o ./static/css/main.css --minify && hugo --minify",
    "clean": "rm -rf public resources"
  },
  "devDependencies": {
    "@tailwindcss/cli": "latest",
    "concurrently": "^10.0.3",
    "tailwindcss": "latest"
  }
}

```
---

## pnpm-workspace.yaml
```yaml
allowBuilds:
  '@parcel/watcher': true

```
---

## static/css/main.css
```css
/*! tailwindcss v4.3.1 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: "Lexend", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", "Fira Code", monospace;
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-6xl: 72rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-tight: -0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-md: 12px;
    --blur-3xl: 64px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
    --color-bg-primary: #0d1117;
    --color-bg-surface: #161b22;
    --color-bg-overlay: #21262d;
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-text-primary: #e6edf3;
    --color-text-secondary: #8b949e;
    --color-text-muted: #6e7681;
    --color-accent-green: #238636;
    --color-accent-blue: #1f6feb;
    --color-accent-orange: #f0883e;
    --color-link-blue: #388bfd;
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: 0;
  }
  .top-0 {
    top: 0;
  }
  .top-1\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-1\/4 {
    top: calc(1 / 4 * 100%);
  }
  .right-0 {
    right: 0;
  }
  .right-1\/4 {
    right: calc(1 / 4 * 100%);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .bottom-1\/4 {
    bottom: calc(1 / 4 * 100%);
  }
  .bottom-8 {
    bottom: calc(var(--spacing) * 8);
  }
  .left-0 {
    left: 0;
  }
  .left-1\/2 {
    left: calc(1 / 2 * 100%);
  }
  .left-1\/4 {
    left: calc(1 / 4 * 100%);
  }
  .z-50 {
    z-index: 50;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-0\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-1\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mt-10 {
    margin-top: calc(var(--spacing) * 10);
  }
  .mt-12 {
    margin-top: calc(var(--spacing) * 12);
  }
  .mt-16 {
    margin-top: calc(var(--spacing) * 16);
  }
  .mt-20 {
    margin-top: calc(var(--spacing) * 20);
  }
  .mt-24 {
    margin-top: calc(var(--spacing) * 24);
  }
  .mt-auto {
    margin-top: auto;
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-10 {
    margin-bottom: calc(var(--spacing) * 10);
  }
  .mb-12 {
    margin-bottom: calc(var(--spacing) * 12);
  }
  .mb-16 {
    margin-bottom: calc(var(--spacing) * 16);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-auto {
    margin-left: auto;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .aspect-video {
    aspect-ratio: var(--aspect-video);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-96 {
    height: calc(var(--spacing) * 96);
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-96 {
    width: calc(var(--spacing) * 96);
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-4xl {
    max-width: var(--container-4xl);
  }
  .max-w-6xl {
    max-width: var(--container-6xl);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .-translate-x-1\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: 0;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * 2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-95 {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-100 {
    --tw-scale-x: 100%;
    --tw-scale-y: 100%;
    --tw-scale-z: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .resize-none {
    resize: none;
  }
  .list-decimal {
    list-style-type: decimal;
  }
  .list-disc {
    list-style-type: disc;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .self-start {
    align-self: flex-start;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .border-\[\#3d2475\] {
    border-color: #3d2475;
  }
  .border-\[\#9b4f12\] {
    border-color: #9b4f12;
  }
  .border-\[\#1158c7\] {
    border-color: #1158c7;
  }
  .border-\[\#21262d\] {
    border-color: #21262d;
  }
  .border-\[\#30363d\] {
    border-color: #30363d;
  }
  .border-\[\#238636\] {
    border-color: #238636;
  }
  .border-\[\#238636\]\/30 {
    border-color: color-mix(in oklab, #238636 30%, transparent);
  }
  .border-red-700 {
    border-color: var(--color-red-700);
  }
  .border-red-900\/50 {
    border-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-red-900) 50%, transparent);
    }
  }
  .bg-\[\#0c2d6b\] {
    background-color: #0c2d6b;
  }
  .bg-\[\#0d1117\] {
    background-color: #0d1117;
  }
  .bg-\[\#0d1117\]\/90 {
    background-color: color-mix(in oklab, #0d1117 90%, transparent);
  }
  .bg-\[\#0d1117\]\/95 {
    background-color: color-mix(in oklab, #0d1117 95%, transparent);
  }
  .bg-\[\#0f2d1a\] {
    background-color: #0f2d1a;
  }
  .bg-\[\#1f6feb\] {
    background-color: #1f6feb;
  }
  .bg-\[\#2d1a0a\] {
    background-color: #2d1a0a;
  }
  .bg-\[\#2d1c5c\] {
    background-color: #2d1c5c;
  }
  .bg-\[\#161b22\] {
    background-color: #161b22;
  }
  .bg-\[\#21262d\] {
    background-color: #21262d;
  }
  .bg-\[\#238636\] {
    background-color: #238636;
  }
  .bg-\[\#238636\]\/10 {
    background-color: color-mix(in oklab, #238636 10%, transparent);
  }
  .bg-red-950\/30 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 30%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-\[\#6e7681\] {
    --tw-gradient-from: #6e7681;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .via-transparent {
    --tw-gradient-via: transparent;
    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-via-stops);
  }
  .to-\[\#0d1117\] {
    --tw-gradient-to: #0d1117;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-transparent {
    --tw-gradient-to: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .object-cover {
    object-fit: cover;
  }
  .p-0 {
    padding: 0;
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .px-1\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .py-0\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-1\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-20 {
    padding-top: calc(var(--spacing) * 20);
  }
  .pt-32 {
    padding-top: calc(var(--spacing) * 32);
  }
  .pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-\[\#3fb950\] {
    color: #3fb950;
  }
  .text-\[\#6e7681\] {
    color: #6e7681;
  }
  .text-\[\#8b949e\] {
    color: #8b949e;
  }
  .text-\[\#388bfd\] {
    color: #388bfd;
  }
  .text-\[\#30363d\] {
    color: #30363d;
  }
  .text-\[\#238636\] {
    color: #238636;
  }
  .text-\[\#e6edf3\] {
    color: #e6edf3;
  }
  .text-\[\#f0883e\] {
    color: #f0883e;
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .placeholder-\[\#6e7681\] {
    &::placeholder {
      color: #6e7681;
    }
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-5 {
    opacity: 5%;
  }
  .opacity-10 {
    opacity: 10%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur-3xl {
    --tw-blur: blur(var(--blur-3xl));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .group-hover\:translate-x-1 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-translate-x: var(--spacing);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .group-hover\:scale-105 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-scale-x: 105%;
        --tw-scale-y: 105%;
        --tw-scale-z: 105%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }
    }
  }
  .group-hover\:text-\[\#388bfd\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #388bfd;
      }
    }
  }
  .group-hover\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .hover\:border-\[\#8b949e\] {
    &:hover {
      @media (hover: hover) {
        border-color: #8b949e;
      }
    }
  }
  .hover\:border-\[\#388bfd\] {
    &:hover {
      @media (hover: hover) {
        border-color: #388bfd;
      }
    }
  }
  .hover\:bg-\[\#2ea043\] {
    &:hover {
      @media (hover: hover) {
        background-color: #2ea043;
      }
    }
  }
  .hover\:bg-\[\#161b22\] {
    &:hover {
      @media (hover: hover) {
        background-color: #161b22;
      }
    }
  }
  .hover\:bg-\[\#30363d\] {
    &:hover {
      @media (hover: hover) {
        background-color: #30363d;
      }
    }
  }
  .hover\:text-\[\#58a6ff\] {
    &:hover {
      @media (hover: hover) {
        color: #58a6ff;
      }
    }
  }
  .hover\:text-\[\#388bfd\] {
    &:hover {
      @media (hover: hover) {
        color: #388bfd;
      }
    }
  }
  .hover\:text-\[\#e6edf3\] {
    &:hover {
      @media (hover: hover) {
        color: #e6edf3;
      }
    }
  }
  .hover\:underline {
    &:hover {
      @media (hover: hover) {
        text-decoration-line: underline;
      }
    }
  }
  .focus\:border-\[\#388bfd\] {
    &:focus {
      border-color: #388bfd;
    }
  }
  .focus\:border-red-500 {
    &:focus {
      border-color: var(--color-red-500);
    }
  }
  .focus\:ring-1 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\:ring-red-500 {
    &:focus {
      --tw-ring-color: var(--color-red-500);
    }
  }
  .focus\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .focus-visible\:ring-2 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\:ring-\[\#30363d\] {
    &:focus-visible {
      --tw-ring-color: #30363d;
    }
  }
  .focus-visible\:ring-\[\#238636\] {
    &:focus-visible {
      --tw-ring-color: #238636;
    }
  }
  .focus-visible\:ring-offset-2 {
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus-visible\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .active\:bg-\[\#1a6e2e\] {
    &:active {
      background-color: #1a6e2e;
    }
  }
  .sm\:grid-cols-2 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .sm\:grid-cols-3 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .sm\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\:flex-row {
    @media (width >= 40rem) {
      flex-direction: row;
    }
  }
  .sm\:items-center {
    @media (width >= 40rem) {
      align-items: center;
    }
  }
  .sm\:px-6 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
  }
  .sm\:text-4xl {
    @media (width >= 40rem) {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
  }
  .sm\:text-5xl {
    @media (width >= 40rem) {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
  }
  .sm\:text-6xl {
    @media (width >= 40rem) {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
  }
  .sm\:text-xl {
    @media (width >= 40rem) {
      font-size: var(--text-xl);
      line-height: var(--tw-leading, var(--text-xl--line-height));
    }
  }
  .md\:col-span-1 {
    @media (width >= 48rem) {
      grid-column: span 1 / span 1;
    }
  }
  .md\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\:hidden {
    @media (width >= 48rem) {
      display: none;
    }
  }
  .md\:grid-cols-3 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .md\:grid-cols-4 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .lg\:flex {
    @media (width >= 64rem) {
      display: flex;
    }
  }
  .lg\:aspect-auto {
    @media (width >= 64rem) {
      aspect-ratio: auto;
    }
  }
  .lg\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .lg\:grid-cols-3 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .lg\:grid-cols-4 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .lg\:p-10 {
    @media (width >= 64rem) {
      padding: calc(var(--spacing) * 10);
    }
  }
  .lg\:px-8 {
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  .lg\:text-7xl {
    @media (width >= 64rem) {
      font-size: var(--text-7xl);
      line-height: var(--tw-leading, var(--text-7xl--line-height));
    }
  }
}
@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: #0d1117;
    color: #e6edf3;
    font-family: var(--font-sans);
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  html.light body {
    background-color: #ffffff;
    color: #1f2328;
  }
  ::selection {
    background-color: #238636;
    color: #ffffff;
  }
  :focus-visible {
    outline: 2px solid #238636;
    outline-offset: 2px;
  }
}
@layer components {
  .container-content {
    margin-inline: auto;
    max-width: var(--container-6xl);
    padding-inline: calc(var(--spacing) * 4);
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  .section {
    padding-block: calc(var(--spacing) * 20);
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 28);
    }
  }
  .section-label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    color: #238636;
  }
  html.light .section-label {
    color: #1a7f37;
  }
  .section-title {
    margin-top: calc(var(--spacing) * 3);
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
    @media (width >= 40rem) {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
    color: #e6edf3;
  }
  html.light .section-title {
    color: #1f2328;
  }
  .section-subtitle {
    margin-top: calc(var(--spacing) * 4);
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
    color: #8b949e;
  }
  html.light .section-subtitle {
    color: #656d76;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-md);
    padding-inline: calc(var(--spacing) * 5);
    padding-block: calc(var(--spacing) * 2.5);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-white);
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 150ms;
    transition-duration: 150ms;
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    background-color: #238636;
    focus-visible: ring-color: #238636;
    focus-visible: ring-offset-color: #0d1117;
  }
  .btn-primary:hover {
    background-color: #2ea043;
  }
  .btn-primary:active {
    background-color: #1a6e2e;
  }
  html.light .btn-primary:focus-visible {
    --tw-ring-offset-color: #ffffff;
  }
  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-md);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 5);
    padding-block: calc(var(--spacing) * 2.5);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 150ms;
    transition-duration: 150ms;
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    border-color: #30363d;
    color: #e6edf3;
  }
  .btn-outline:hover {
    border-color: #8b949e;
    background-color: #161b22;
  }
  html.light .btn-outline {
    border-color: #d0d7de;
    color: #1f2328;
  }
  html.light .btn-outline:hover {
    border-color: #8c959f;
    background-color: #f6f8fa;
  }
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-md);
    padding-inline: calc(var(--spacing) * 5);
    padding-block: calc(var(--spacing) * 2.5);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 150ms;
    transition-duration: 150ms;
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    background-color: #21262d;
    color: #e6edf3;
  }
  .btn-secondary:hover {
    background-color: #30363d;
  }
  html.light .btn-secondary {
    background-color: #f6f8fa;
    color: #1f2328;
  }
  html.light .btn-secondary:hover {
    background-color: #eaeef2;
  }
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-md);
    padding-inline: calc(var(--spacing) * 5);
    padding-block: calc(var(--spacing) * 2.5);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 150ms;
    transition-duration: 150ms;
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    color: #8b949e;
  }
  .btn-ghost:hover {
    background-color: #161b22;
    color: #e6edf3;
  }
  html.light .btn-ghost {
    color: #656d76;
  }
  html.light .btn-ghost:hover {
    background-color: #f6f8fa;
    color: #1f2328;
  }
  .card {
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-color: #30363d;
    background-color: #161b22;
  }
  html.light .card {
    border-color: #d0d7de;
    background-color: #f6f8fa;
  }
  .card-interactive {
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    border-color: #30363d;
    background-color: #161b22;
  }
  .card-interactive:hover {
    border-color: #388bfd;
    box-shadow: 0 0 0 1px #388bfd;
  }
  html.light .card-interactive {
    border-color: #d0d7de;
    background-color: #ffffff;
  }
  html.light .card-interactive:hover {
    border-color: #0969da;
    box-shadow: 0 0 0 1px #0969da;
  }
  .badge-purple {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: #3d2475;
    background-color: #2d1c5c;
    color: #a371f7;
  }
  html.light .badge-purple {
    border-color: #8250df;
    background-color: #fbefff;
    color: #6639ba;
  }
  .badge-blue {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: #1158c7;
    background-color: #0c2d6b;
    color: #388bfd;
  }
  html.light .badge-blue {
    border-color: #0969da;
    background-color: #ddf4ff;
    color: #0550ae;
  }
  .badge-green {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: #238636;
    background-color: #0f2d1a;
    color: #3fb950;
  }
  html.light .badge-green {
    border-color: #1a7f37;
    background-color: #dafbe1;
    color: #116329;
  }
  .badge-orange {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: #9b4f12;
    background-color: #2d1a0a;
    color: #f0883e;
  }
  html.light .badge-orange {
    border-color: #bc4c00;
    background-color: #fff1e5;
    color: #953800;
  }
  .tag {
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 3);
    padding-block: var(--spacing);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    border-color: #30363d;
    background-color: #161b22;
    color: #6e7681;
  }
  html.light .tag {
    border-color: #d0d7de;
    background-color: #f6f8fa;
    color: #57606a;
  }
  .text-gradient-green {
    background: linear-gradient(135deg, #3fb950, #238636);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  html.light .text-gradient-green {
    background: linear-gradient(135deg, #1a7f37, #116329);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .divider {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
    border-color: #21262d;
  }
  html.light .divider {
    border-color: #d0d7de;
  }
  .prose-zed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
    color: #8b949e;
  }
  html.light .prose-zed {
    color: #656d76;
  }
  .prose-zed h2 {
    margin-top: calc(var(--spacing) * 10);
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
    color: #e6edf3;
  }
  html.light .prose-zed h2 {
    color: #1f2328;
  }
  .prose-zed h3 {
    margin-top: calc(var(--spacing) * 8);
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: #e6edf3;
  }
  html.light .prose-zed h3 {
    color: #1f2328;
  }
  .prose-zed p {
    margin-top: calc(var(--spacing) * 4);
  }
  .prose-zed a {
    text-decoration-line: underline;
    text-underline-offset: 2px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    color: #388bfd;
  }
  .prose-zed a:hover {
    color: #58a6ff;
  }
  html.light .prose-zed a {
    color: #0969da;
  }
  html.light .prose-zed a:hover {
    color: #0550ae;
  }
  .prose-zed ul {
    margin-top: calc(var(--spacing) * 4);
    list-style-type: disc;
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
    padding-left: calc(var(--spacing) * 6);
  }
  .prose-zed ol {
    margin-top: calc(var(--spacing) * 4);
    list-style-type: decimal;
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
    padding-left: calc(var(--spacing) * 6);
  }
  .prose-zed code {
    border-radius: 0.25rem;
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    background-color: #161b22;
    color: #f0883e;
    border-color: #30363d;
  }
  html.light .prose-zed code {
    background-color: #f6f8fa;
    color: #953800;
    border-color: #d0d7de;
  }
  .prose-zed pre {
    margin-top: calc(var(--spacing) * 4);
    overflow-x: auto;
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding: calc(var(--spacing) * 5);
    border-color: #30363d;
    background-color: #161b22;
  }
  html.light .prose-zed pre {
    border-color: #d0d7de;
    background-color: #f6f8fa;
  }
  .prose-zed pre code {
    border-style: var(--tw-border-style);
    border-width: 0px;
    background-color: transparent;
    padding: 0;
    color: #e6edf3;
  }
  html.light .prose-zed pre code {
    color: #1f2328;
  }
  .prose-zed blockquote {
    margin-top: calc(var(--spacing) * 4);
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
    padding-left: calc(var(--spacing) * 4);
    font-style: italic;
    border-color: #238636;
    color: #6e7681;
  }
  html.light .prose-zed blockquote {
    border-color: #1a7f37;
    color: #57606a;
  }
  .prose-zed img {
    margin-top: calc(var(--spacing) * 6);
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-color: #30363d;
  }
  html.light .prose-zed img {
    border-color: #d0d7de;
  }
  .prose-zed table {
    margin-top: calc(var(--spacing) * 6);
    width: 100%;
    border-collapse: collapse;
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .prose-zed th {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
    text-align: left;
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: #e6edf3;
    border-color: #30363d;
  }
  html.light .prose-zed th {
    color: #1f2328;
    border-color: #d0d7de;
  }
  .prose-zed td {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
    color: #8b949e;
    border-color: #21262d;
  }
  html.light .prose-zed td {
    color: #656d76;
    border-color: #eaeef2;
  }
  .input {
    width: 100%;
    border-radius: var(--radius-md);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2.5);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 150ms;
    transition-duration: 150ms;
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
    border-color: #30363d;
    background-color: #0d1117;
    color: #e6edf3;
  }
  .input::placeholder {
    color: #6e7681;
  }
  .input:focus {
    border-color: #388bfd;
    --tw-ring-color: #388bfd;
  }
  html.light .input {
    border-color: #d0d7de;
    background-color: #ffffff;
    color: #1f2328;
  }
  html.light .input::placeholder {
    color: #8c959f;
  }
  html.light .input:focus {
    border-color: #0969da;
    --tw-ring-color: #0969da;
  }
  .label {
    margin-bottom: calc(var(--spacing) * 1.5);
    display: block;
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: #e6edf3;
  }
  html.light .label {
    color: #1f2328;
  }
  .theme-bg-primary {
    background-color: #0d1117;
  }
  html.light .theme-bg-primary {
    background-color: #ffffff;
  }
  .theme-bg-surface {
    background-color: #161b22;
  }
  html.light .theme-bg-surface {
    background-color: #f6f8fa;
  }
  .theme-bg-overlay {
    background-color: #21262d;
  }
  html.light .theme-bg-overlay {
    background-color: #eaeef2;
  }
  .theme-border {
    border-color: #30363d;
  }
  html.light .theme-border {
    border-color: #d0d7de;
  }
  .theme-border-muted {
    border-color: #21262d;
  }
  html.light .theme-border-muted {
    border-color: #eaeef2;
  }
  .theme-text-primary {
    color: #e6edf3;
  }
  html.light .theme-text-primary {
    color: #1f2328;
  }
  .theme-text-secondary {
    color: #8b949e;
  }
  html.light .theme-text-secondary {
    color: #656d76;
  }
  .theme-text-muted {
    color: #6e7681;
  }
  html.light .theme-text-muted {
    color: #8c959f;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
    }
  }
}

```
---

## static/robots.txt
```text
User-agent: *
Allow: /

Sitemap: https://zedlabs.id/sitemap.xml

```
---
