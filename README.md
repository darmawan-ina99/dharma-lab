# 🛡️ Dharma Lab - Solusi Digital & Keamanan

Website company profile lengkap dengan admin panel, showcase portofolio, dan integrasi WhatsApp. Dibangun dengan Next.js 16, TypeScript, Tailwind CSS, Prisma, dan Supabase Postgres.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)
![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?logo=supabase)

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
- Sitemap-friendly

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
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- A Supabase account (free tier works)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/darmawan-ina99/dharma-lab.git
cd dharma-lab
```

### 2. Install Dependencies

```bash
# Using bun (recommended)
bun install

# Or using npm
npm install
```

### 3. Setup Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** to get your project URL and API keys
3. Set your database password (or reset it if needed)
4. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
DATABASE_URL="postgresql://postgres.your-ref:your-password@aws-0-region.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.your-ref:your-password@aws-0-region.pooler.supabase.com:5432/postgres"
```

> ⚠️ **Important**: URL-encode special characters in your password. For example, `!` becomes `%21`.

### 4. Setup Database

```bash
# Push schema to Supabase
bun run db:push

# Seed with initial data (6 services + 8 portfolios)
bun run scripts/seed.ts
```

### 5. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Access Admin Panel

- Navigate to `http://localhost:3000#admin`
- Or click **"Admin"** in the navbar
- Default password: `900021`

> 🔒 **Change the admin password** in `src/lib/auth.ts` before deploying to production.

## 📊 Database Schema

The app uses 3 tables in the `dharma_lab` schema (separate from `public`):

### Portfolio
| Field | Type | Description |
|-------|------|-------------|
| id | String (cuid) | Primary key |
| title | String | Project title |
| slug | String | URL-friendly identifier (unique) |
| category | String | Project category |
| shortDesc | String | Short description for cards |
| content | String | Full case study (Markdown) |
| imageUrl | String | Cover image URL |
| client | String? | Client name |
| year | String? | Project year |
| technologies | String | JSON array of tech stack |
| liveUrl | String? | Live demo URL |
| featured | Boolean | Show as featured project |
| createdAt | DateTime | Auto-generated |
| updatedAt | DateTime | Auto-updated |

### Service
| Field | Type | Description |
|-------|------|-------------|
| id | String (cuid) | Primary key |
| title | String | Service name |
| slug | String | URL-friendly identifier (unique) |
| description | String | Service description |
| icon | String | Lucide icon name |
| color | String | Tailwind gradient class |
| order | Int | Display order |

### SiteSettings
| Field | Type | Description |
|-------|------|-------------|
| id | String | Always "default" |
| whatsappNumber | String | WhatsApp number (international format) |
| email | String | Contact email |
| phoneDisplay | String | Display phone number |
| address | String | Business address |

## 🔌 API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/api/portfolio` | GET | - | List portfolios (supports `?category=` and `?featured=`) |
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

## 🎨 Customization

### Change Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.28 280);  /* Change this for different primary color */
}
```

### Change Admin Password

Edit `src/lib/auth.ts`:

```typescript
const ADMIN_PASSWORD = "your-new-password";
```

### Add New Service

Via admin dashboard or directly in Supabase dashboard by inserting into `dharma_lab.Service` table.

### Change WhatsApp Number

1. Via admin dashboard (when settings UI is added)
2. Or directly update `dharma_lab.SiteSettings` table in Supabase

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and import your repo
3. Add environment variables
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run scripts/seed.ts` | Seed database with initial data |
| `bun run scripts/verify-supabase.ts` | Verify Supabase connection & data |

## 🔒 Security Notes

- **Never commit `.env` file** — it's already in `.gitignore`
- **Change admin password** before production deployment
- **Use environment variables** for all secrets
- **Enable Row Level Security (RLS)** on Supabase tables if exposing via REST API
- **Use HTTPS** in production (automatic with Vercel/Netlify)

## 📄 License

MIT License — feel free to use this project for your own business.

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

Built with ❤️ in Bandung, Indonesia
