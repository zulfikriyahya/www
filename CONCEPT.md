## Tech Stack ZEDLABS Website

### Frontend — Hugo

#### Requirements
- Hugo Extended (wajib, untuk SCSS processing)
- Node.js (untuk Tailwind CSS build pipeline)
- Tailwind CSS v4
- Alpine.js (interaktivitas ringan: toggle, dropdown, filter)
- HTMX (opsional, untuk form contact tanpa full JS)

#### Theme — GitHub-inspired Dark

Referensi `github.com`: dark background, subtle borders, monospace accent, clean typography.

```
Background utama  → #0d1117  (github dark)
Surface / card    → #161b22
Border            → #30363d
Text primer       → #e6edf3
Text sekunder     → #8b949e
Accent / CTA      → #238636  (github green) atau #1f6feb (github blue)
Code / monospace  → #f0883e  (orange accent)
```

Font:
- **Heading** → Inter atau Geist (modern, clean)
- **Body** → Inter
- **Code/tag** → JetBrains Mono atau Fira Code

#### Layouts

```
layouts/
├── _default/
│   ├── baseof.html        # Base template
│   ├── list.html          # Blog list, project list
│   └── single.html        # Blog post, project detail
├── index.html             # Landing page
├── partials/
│   ├── head.html
│   ├── nav.html
│   ├── footer.html
│   ├── hero.html
│   ├── stats.html
│   ├── testimonials.html
│   └── cta.html
├── products/
│   ├── list.html          # Products overview
│   └── single.html        # Product detail
├── services/
│   └── single.html
├── projects/
│   ├── list.html          # Dengan filter kategori
│   └── single.html        # Case study
└── blog/
    ├── list.html
    └── single.html
```

#### Components (via Partials + Alpine.js)

| Komponen | Teknologi |
|---|---|
| Navbar sticky + mobile menu | Alpine.js |
| Hero dengan CTA | Hugo partial |
| Stats counter animasi | Alpine.js + Intersection Observer |
| Services card grid | Hugo partial |
| Testimonials slider | Alpine.js |
| Project filter (by category) | Alpine.js |
| Pricing toggle bulanan/tahunan | Alpine.js |
| Features comparison table | Hugo shortcode |
| Blog featured post | Hugo front matter (`featured: true`) |
| Dark/light mode toggle | Alpine.js + localStorage |
| Contact form | HTMX → PocketBase API |

---

### Backend — PocketBase

#### Requirements
- PocketBase v0.23+ (single binary)
- VPS minimal 1 vCPU / 1GB RAM (cukup untuk tahap awal)
- Caddy / Nginx sebagai reverse proxy + SSL otomatis

#### Collections (Database Schema)

```
collections/
├── blog_posts
│   ├── title, slug, excerpt
│   ├── content (markdown/html)
│   ├── category, tags
│   ├── featured (bool)
│   ├── thumbnail
│   └── published_at
├── projects
│   ├── title, slug, client_name
│   ├── category (Web/Mobile/SaaS/Consulting)
│   ├── thumbnail, screenshots[]
│   ├── tech_stack[]
│   ├── problem, solution, result
│   ├── github_url (opsional)
│   └── is_public (bool)
├── testimonials
│   ├── name, company, role
│   ├── avatar, content
│   └── is_featured (bool)
├── contact_submissions
│   ├── name, email
│   ├── need_type, message
│   └── created
└── products
    ├── title, slug, description
    ├── category, screenshots[]
    ├── features[], use_cases[]
    └── pricing_tiers (JSON)
```

#### API Strategy

| Konten | Strategi | Alasan |
|---|---|---|
| Landing page sections | **Build-time** (Hugo data files) | Jarang berubah, SEO kritis |
| Blog posts | **Build-time** + webhook rebuild | SEO penting |
| Projects | **Build-time** | SEO penting |
| Testimonials | **Build-time** | Statis |
| Contact form | **Client-side** fetch ke PocketBase | Perlu realtime submit |
| Products & pricing | **Build-time** | SEO + performa |

---

### DevOps & Deploy

```
Frontend (Hugo)
└── GitHub repo
    └── Push → GitHub Actions → Build Hugo
        └── Deploy → Cloudflare Pages (gratis, CDN global)

Backend (PocketBase)
└── VPS (Rp 50-150rb/bln)
    ├── PocketBase binary
    ├── Caddy (reverse proxy + SSL otomatis)
    └── pb_data/ (SQLite + uploads)
        └── Backup otomatis → S3 / Backblaze B2
```

#### GitHub Actions (CI/CD Hugo)
```yaml
# .github/workflows/deploy.yml
- Hugo build
- Deploy ke Cloudflare Pages
- Trigger: push ke main branch
```

---

### Struktur Konten Hugo

```
content/
├── _index.md              # Landing page data
├── blog/
│   └── *.md               # Artikel
├── projects/
│   └── *.md               # Case study
├── services/
│   └── *.md               # Per layanan
└── products/
    └── *.md               # Per produk

data/
├── testimonials.json
├── stats.json
├── team.json
└── partners.json
```

---

### Ringkasan Arsitektur

```
GitHub (source)
    │
    ▼ push
GitHub Actions
    │
    ├── Hugo Build ──────────► Cloudflare Pages
    │                          (CDN global, HTTPS otomatis)
    │
    └── (tidak trigger)        VPS
                               ├── PocketBase API
                               ├── Admin Dashboard
                               └── File Storage
                                   (foto, upload)

Browser User
    ├── Muat halaman statis dari Cloudflare (cepat)
    └── fetch() ke PocketBase untuk:
        - Submit form kontak
        - (opsional) load konten dinamis
```
