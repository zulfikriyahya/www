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

  --font-sans: "Inter", system-ui, sans-serif;
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
    @apply inline-block text-xs font-mono font-medium uppercase tracking-widest text-[#238636];
  }

  .section-title {
    @apply mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#e6edf3];
  }

  .section-subtitle {
    @apply mt-4 text-[#8b949e] leading-relaxed;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-md bg-[#238636] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#2ea043] active:bg-[#1a6e2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117];
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 rounded-md border border-[#30363d] px-5 py-2.5 text-sm font-medium text-[#e6edf3] transition-all duration-150 hover:border-[#8b949e] hover:bg-[#161b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30363d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117];
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 rounded-md bg-[#21262d] px-5 py-2.5 text-sm font-medium text-[#e6edf3] transition-colors duration-150 hover:bg-[#30363d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30363d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117];
  }

  .btn-ghost {
    @apply inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-[#8b949e] transition-colors duration-150 hover:bg-[#161b22] hover:text-[#e6edf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#30363d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117];
  }

  .card {
    @apply rounded-xl border border-[#30363d] bg-[#161b22];
  }

  .card-interactive {
    @apply rounded-xl border border-[#30363d] bg-[#161b22] transition-all duration-200 hover:border-[#388bfd] hover:shadow-[0_0_0_1px_#388bfd];
  }

  .badge-purple {
    @apply inline-flex items-center rounded-full border border-[#3d2475] bg-[#2d1c5c] px-2 py-0.5 text-xs font-medium text-[#a371f7];
  }

  .badge-blue {
    @apply inline-flex items-center rounded-full border border-[#1158c7] bg-[#0c2d6b] px-2 py-0.5 text-xs font-medium text-[#388bfd];
  }

  .badge-green {
    @apply inline-flex items-center rounded-full border border-[#238636] bg-[#0f2d1a] px-2 py-0.5 text-xs font-medium text-[#3fb950];
  }

  .badge-orange {
    @apply inline-flex items-center rounded-full border border-[#9b4f12] bg-[#2d1a0a] px-2 py-0.5 text-xs font-medium text-[#f0883e];
  }

  .tag {
    @apply rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 font-mono text-xs text-[#6e7681];
  }

  .text-gradient-green {
    background: linear-gradient(135deg, #3fb950, #238636);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .divider {
    @apply border-t border-[#21262d];
  }

  .prose-zed {
    @apply text-[#8b949e] leading-relaxed;
  }

  .prose-zed h2 {
    @apply mt-10 text-2xl font-bold text-[#e6edf3] tracking-tight;
  }

  .prose-zed h3 {
    @apply mt-8 text-xl font-semibold text-[#e6edf3];
  }

  .prose-zed p {
    @apply mt-4;
  }

  .prose-zed a {
    @apply text-[#388bfd] underline underline-offset-2 hover:text-[#58a6ff] transition-colors;
  }

  .prose-zed ul {
    @apply mt-4 list-disc pl-6 space-y-2;
  }

  .prose-zed ol {
    @apply mt-4 list-decimal pl-6 space-y-2;
  }

  .prose-zed code {
    @apply rounded bg-[#161b22] px-1.5 py-0.5 font-mono text-sm text-[#f0883e] border border-[#30363d];
  }

  .prose-zed pre {
    @apply mt-4 overflow-x-auto rounded-xl border border-[#30363d] bg-[#161b22] p-5;
  }

  .prose-zed pre code {
    @apply border-0 bg-transparent p-0 text-[#e6edf3];
  }

  .prose-zed blockquote {
    @apply mt-4 border-l-4 border-[#238636] pl-4 italic text-[#6e7681];
  }

  .prose-zed img {
    @apply mt-6 rounded-xl border border-[#30363d];
  }

  .input {
    @apply w-full rounded-md border border-[#30363d] bg-[#0d1117] px-4 py-2.5 text-sm text-[#e6edf3] placeholder-[#6e7681] transition-colors duration-150 focus:border-[#388bfd] focus:outline-none focus:ring-1 focus:ring-[#388bfd];
  }

  .label {
    @apply block text-sm font-medium text-[#e6edf3] mb-1.5;
  }
}

```
---

## assets/js/main.js
```js
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Stats counter
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("id-ID");
  }, 16);
};

const counters = document.querySelectorAll("[data-counter]");
if (counters.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
}

// Contact form Alpine component
document.addEventListener("alpine:init", () => {
  Alpine.data("contactForm", (pocketbaseUrl) => ({
    form: {
      name: "",
      email: "",
      need_type: "",
      message: "",
    },
    status: "idle",
    errors: {},

    validate() {
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

    async submit() {
      if (!this.validate()) return;
      this.status = "loading";
      try {
        const res = await fetch(pocketbaseUrl + "/api/collections/contact_submissions/records", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });
        this.status = res.ok ? "success" : "error";
      } catch {
        this.status = "error";
      }
    },

    reset() {
      this.form = { name: "", email: "", need_type: "", message: "" };
      this.status = "idle";
      this.errors = {};
    },
  }));
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

<body class="bg-[#0d1117] font-sans text-[#e6edf3] antialiased">

  {{ partial "nav.html" . }}

  <main id="main-content">
    {{ block "main" . }}{{ end }}
  </main>

  {{ partial "footer.html" . }}

  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

  {{ $js := resources.Get "js/main.js" | minify }}
  <script src="{{ $js.RelPermalink }}"></script>

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
<footer class="border-t border-[#21262d] bg-[#0d1117]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

      <!-- Brand -->
      <div class="md:col-span-1">
        <a href="/" class="flex items-center gap-2 mb-4">
          <div
            class="w-8 h-8 rounded-md bg-[#238636] flex items-center justify-center font-mono font-bold text-sm text-white">
            Z</div>
          <span class="font-bold text-[#e6edf3]">ZED<span class="text-[#238636]">LABS</span></span>
        </a>
        <p class="text-sm text-[#8b949e] leading-relaxed">
          {{ .Site.Params.description }}
        </p>
        <!-- Socials -->
        <div class="flex gap-3 mt-5">
          <a href="{{ .Site.Params.github }}" target="_blank"
            class="p-2 rounded-md border border-[#30363d] text-[#8b949e] hover:text-[#e6edf3] hover:border-[#8b949e] transition-all">
            <!-- GitHub icon -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="{{ .Site.Params.linkedin }}" target="_blank"
            class="p-2 rounded-md border border-[#30363d] text-[#8b949e] hover:text-[#e6edf3] hover:border-[#8b949e] transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank"
            class="p-2 rounded-md border border-[#30363d] text-[#8b949e] hover:text-[#e6edf3] hover:border-[#8b949e] transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Links -->
      <div>
        <h4 class="text-sm font-semibold text-[#e6edf3] mb-4">Layanan</h4>
        <ul class="space-y-2">
          {{ range .Site.Menus.main }}
          <li>
            <a href="{{ .URL }}" class="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">
              {{ .Name }}
            </a>
          </li>
          {{ end }}
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-[#e6edf3] mb-4">Perusahaan</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">Tentang Kami</a>
          </li>
          <li><a href="/blog" class="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">Blog</a></li>
          <li><a href="/projects" class="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">Proyek</a></li>
          <li><a href="/contact" class="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">Kontak</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-[#e6edf3] mb-4">Kontak</h4>
        <ul class="space-y-2 text-sm text-[#8b949e]">
          <li>
            <a href="mailto:{{ .Site.Params.email }}" class="hover:text-[#e6edf3] transition-colors">
              {{ .Site.Params.email }}
            </a>
          </li>
          <li>
            <a href="https://wa.me/{{ .Site.Params.whatsapp }}" class="hover:text-[#e6edf3] transition-colors">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="mt-12 pt-8 border-t border-[#21262d] flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs text-[#6e7681]">
        © {{ now.Year }} ZEDLABS. All rights reserved.
      </p>
      <p class="text-xs text-[#6e7681] font-mono">
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
<meta property="article:tag" content="{{ . }}" />{{ end }}
{{ end }}
{{ end }}

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet" />

{{ $css := resources.Get "css/main.css" | css.TailwindCSS }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}" />

```
---

## layouts/partials/nav.html
```html
<header x-data="{ open: false, scrolled: false }"
  x-init="window.addEventListener('scroll', () => { scrolled = window.scrollY > 20 })"
  :class="scrolled ? 'border-b border-[#21262d] bg-[#0d1117]/90 backdrop-blur-md' : 'bg-transparent'"
  class="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">

      <a href="/" class="flex items-center gap-2">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-md bg-[#238636] font-mono text-sm font-bold text-white">
          Z
        </div>
        <span class="font-bold tracking-tight text-[#e6edf3]">
          ZED<span class="text-[#238636]">LABS</span>
        </span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        {{ range .Site.Menus.main }}

        href="{{ .URL }}"
        class="rounded-md px-3 py-1.5 text-sm text-[#8b949e] transition-all duration-150 hover:bg-[#161b22]
        hover:text-[#e6edf3]"
        >
        {{ .Name }}
        </a>
        {{ end }}
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a href="/contact" class="btn-primary text-sm">
          Mulai Konsultasi
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <button @click="open = !open"
        class="rounded-md p-2 text-[#8b949e] transition-colors hover:bg-[#161b22] hover:text-[#e6edf3] md:hidden"
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
    class="border-t border-[#21262d] bg-[#0d1117]/95 backdrop-blur-md md:hidden">
    <div class="space-y-1 px-4 py-4">
      {{ range .Site.Menus.main }}

      href="{{ .URL }}"
      @click="open = false"
      class="block rounded-md px-3 py-2 text-sm text-[#8b949e] transition-colors hover:bg-[#161b22]
      hover:text-[#e6edf3]"
      >
      {{ .Name }}
      </a>
      {{ end }}
      <div class="border-t border-[#21262d] pt-3">
        <a href="/contact" class="btn-primary w-full justify-center">
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
    "dev": "hugo server --disableFastRender",
    "build": "hugo --minify",
    "clean": "rm -rf public resources"
  },
  "devDependencies": {
    "@tailwindcss/cli": "latest",
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

## static/robots.txt
```text
User-agent: *
Allow: /

Sitemap: https://zedlabs.id/sitemap.xml

```
---
