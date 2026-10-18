<div align="center">

# 🛡️ Dharma Lab

### Solusi Digital & Keamanan

Website company profile lengkap dengan admin panel, showcase portofolio, dan integrasi WhatsApp. Dibangun dengan Next.js 16, TypeScript, Tailwind CSS, Prisma, dan Supabase Postgres.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Made with ❤️ in Bandung](https://img.shields.io/badge/Made_with_❤️-Bandung-red.svg?style=flat-square)](https://en.wikipedia.org/wiki/Bandung)

**[✨ Fitur](#-fitur-utama)** •
**[🚀 Quick Start](#-quick-start)** •
**[📸 Preview](#-preview)** •
**[📚 Docs](#-documentation)** •
**[🚢 Deploy](#-deploy-ke-vercel)**

</div>

---

## 📸 Preview

> **Note**: Screenshot placeholder — tambahkan screenshot website Anda di sini

| 🏠 Homepage | 🔐 Admin Panel | 📁 Portfolio Detail |
|:-----------:|:--------------:|:-------------------:|
| Hero, Services, Portfolio, About, CTA | Login + Dashboard CRUD | Case study dengan Markdown |
| Dark futuristic theme | Search & filter | Tech stack sidebar |

## ✨ Fitur Utama

### 🏠 Halaman Beranda
- **Hero Section** dengan animasi aurora blob & grid background futuristik
- **Services Section** — 6 layanan utama dengan icon Lucide & gradient cards
- **Portfolio Showcase** — 8 proyek dengan filter kategori & featured badge
- **About Section** — statistik & value proposition perusahaan
- **CTA Section** — info kontak lengkap dengan WhatsApp, email, dan lokasi
- **Footer** sticky dengan navigasi cepat

### 📁 Portfolio Detail (Case Study)
- Halaman detail proyek dengan Markdown rendering
- Sidebar info: tech stack, klien, tahun, kategori, status
- Tombol live demo (jika ada URL)
- Auto-generated slug dari judul

### 🔐 Admin Panel
- **Login** dengan password (default: `900021`)
- **Dashboard** dengan statistik (total proyek, featured, kategori, klien)
- **CRUD Portofolio** lengkap:
  - Tambah/Edit/Hapus portofolio
  - Modal form dengan preview gambar real-time
  - Auto-generate slug dari judul
  - Toggle featured project
  - Markdown editor untuk konten case study
- **Search & Filter** kategori di dashboard
- **Konfirmasi hapus** dengan dialog
- **Logout** dengan session cleanup

### 💬 WhatsApp Integration
- Floating chat widget dengan animasi pulse
- Panel chat dengan pesan terisi otomatis
- Direct link ke WhatsApp dengan template pesan
- Online status indicator

### 🔍 SEO & Analytics
- Meta tags lengkap (OpenGraph, Twitter Card)
- JSON-LD structured data (Organization schema)
- Google Analytics 4 integration
- Robots configuration
- Locale: id_ID

### 🎨 Design System Futuristik
- Gradasi biru-ungu-pink (indigo → purple → pink)
- Aurora blob animations
- Animated grid background
- Glassmorphism cards
- Gradient borders
- Framer Motion transitions (hover, scroll reveal, page transitions)
- Fully responsive mobile-first

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + shadcn/ui (New York) |
| **Database** | PostgreSQL via Supabase |
| **ORM** | Prisma 6 |
| **State Management** | Zustand (persist) |
| **Animations** | Framer Motion |
| **Markdown** | React Markdown |
| **Toasts** | Sonner |
| **Icons** | Lucide React |

## 📁 Struktur Project

```
dharma-lab/
├── prisma/
│   └── schema.prisma              # Database schema (Portfolio, Service, SiteSettings)
├── public/
│   ├── logo.svg
│   └── robots.txt
├── scripts/
│   ├── seed.ts                    # Database seeder
│   └── verify-supabase.ts         # Connection verification
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO & Analytics
│   │   ├── page.tsx               # Main page with view switching
│   │   ├── globals.css            # Design system & utilities
│   │   └── api/
│   │       ├── portfolio/         # Portfolio CRUD endpoints
│   │       ├── services/          # Services endpoints
│   │       ├── settings/          # Site settings endpoints
│   │       ├── admin/             # Auth endpoints (login/logout/session)
│   │       └── supabase-status/   # Connection status endpoint
│   ├── components/
│   │   ├── site/                  # Public components (Navbar, Hero, etc.)
│   │   ├── portfolio/             # Portfolio detail view
│   │   ├── admin/                 # Admin login & dashboard
│   │   └── ui/                    # shadcn/ui components
│   ├── lib/
│   │   ├── auth.ts                # Admin auth utilities
│   │   ├── db.ts                  # Prisma client
│   │   ├── supabase.ts            # Supabase client utilities
│   │   ├── store.ts               # Zustand store
│   │   ├── types.ts               # Shared TypeScript types
│   │   └── middleware.ts          # Auth middleware
│   └── hooks/                     # React hooks
├── .env.example                   # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── vercel.json                    # Vercel deployment config
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ atau Bun
- Akun Supabase (free tier OK)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/darmawan-ina99/dharma-lab.git
cd dharma-lab
```

### 2. Install Dependencies

```bash
# Menggunakan bun (recommended)
bun install

# Atau npm
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` dengan kredensial Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
DATABASE_URL="postgresql://postgres.your-ref:your-password@aws-0-region.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.your-ref:your-password@aws-0-region.pooler.supabase.com:5432/postgres"
```

> ⚠️ **Important**: URL-encode special characters di password. Contoh: `!` → `%21`

### 4. Setup Database

```bash
# Push schema ke Supabase
bun run db:push

# Seed dengan data awal (6 services + 8 portfolios)
bun run scripts/seed.ts
```

### 5. Jalankan Development Server

```bash
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 6. Akses Admin Panel

- Navigasi ke `http://localhost:3000#admin`
- Atau klik **"Admin"** di navbar
- Password default: `900021`

> 🔒 **Ganti password admin** di `src/lib/auth.ts` sebelum production.

## 📊 Database Schema

App menggunakan 3 tabel di schema `dharma_lab` (terpisah dari `public`):

### Portfolio
Field utama: `id`, `title`, `slug` (unique), `category`, `shortDesc`, `content` (Markdown), `imageUrl`, `client`, `year`, `technologies` (JSON), `liveUrl`, `featured`, `createdAt`, `updatedAt`

### Service
Field utama: `id`, `title`, `slug` (unique), `description`, `icon` (Lucide name), `color` (Tailwind class), `order`

### SiteSettings
Field utama: `id` (default: "default"), `whatsappNumber`, `email`, `phoneDisplay`, `address`

## 🔌 API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/api/portfolio` | GET | - | List portfolios (supports `?category=` & `?featured=`) |
| `/api/portfolio` | POST | Admin | Create new portfolio |
| `/api/portfolio/[id]` | GET | - | Get single portfolio (by ID or slug) |
| `/api/portfolio/[id]` | PUT | Admin | Update portfolio |
| `/api/portfolio/[id]` | DELETE | Admin | Delete portfolio |
| `/api/services` | GET | - | List all services |
| `/api/services` | POST | Admin | Create service |
| `/api/settings` | GET | - | Get site settings |
| `/api/settings` | PUT | Admin | Update settings |
| `/api/admin/login` | POST | - | Admin login |
| `/api/admin/logout` | POST | - | Admin logout |
| `/api/admin/session` | GET | - | Check session status |
| `/api/supabase-status` | GET | - | Supabase connection health check |

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production (`prisma generate && next build`) |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run scripts/seed.ts` | Seed database with initial data |
| `bun run scripts/verify-supabase.ts` | Verify Supabase connection & data |

## 🚢 Deploy ke Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/darmawan-ina99/dharma-lab)

### Langkah Cepat:

1. **Buka [vercel.com/new](https://vercel.com/new)**
2. **Import repository** `dharma-lab` dari GitHub Anda
3. **Vercel auto-detect**: Next.js framework, install & build commands
4. **Tambah Environment Variables** (wajib!):
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. **Klik Deploy** — tunggu 2-3 menit
6. **Done!** URL: `https://dharma-lab.vercel.app`

📖 **Panduan lengkap**: Lihat [`download/DEPLOY-VERCEL.md`](./download/DEPLOY-VERCEL.md) untuk troubleshooting error umum, custom domain, dan monitoring.

## 📚 Documentation

- 📦 [Setup Supabase](./download/SUPABASE-SETUP.md) — Konfigurasi backend Supabase
- 🚀 [Deploy ke Vercel](./download/DEPLOY-VERCEL.md) — Panduan deployment lengkap
- 🗃️ [Prisma Schema](./prisma/schema.prisma) — Database schema definition

## 🎨 Customization

### Ganti Warna Brand

Edit `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.28 280);  /* Ganti untuk warna primary berbeda */
}
```

### Ganti Password Admin

Edit `src/lib/auth.ts`:

```typescript
const ADMIN_PASSWORD = "your-new-password";
```

### Ganti Nomor WhatsApp

Update via Supabase dashboard di tabel `dharma_lab.SiteSettings`, field `whatsappNumber`.

## 🔒 Security Notes

- ✅ **Never commit `.env`** — sudah di `.gitignore`
- ⚠️ **Ganti admin password** sebelum production
- 🔐 **Enable RLS** di Supabase tables jika perlu
- 🌐 **Use HTTPS** di production (auto di Vercel)

## 📄 License

MIT License — bebas digunakan untuk bisnis Anda.

## 👨‍💻 Author

**Dharma Lab**
- GitHub: [@darmawan-ina99](https://github.com/darmawan-ina99)
- Location: Bandung, Indonesia

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Prisma](https://prisma.io) — Database ORM
- [Supabase](https://supabase.com) — Backend & database
- [Framer Motion](https://framer.com/motion) — Animations
- [Lucide](https://lucide.dev) — Icons

---

<div align="center">

**⭐ Jangan lupa star repo ini jika bermanfaat!**

Built with ❤️ in Bandung, Indonesia

</div>
