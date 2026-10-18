import { db } from "@/lib/db";

const services = [
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Lindungi data dan sistem Anda dari ancaman siber dengan solusi keamanan berlapis.",
    icon: "ShieldCheck",
    color: "from-blue-500 to-cyan-500",
    order: 1,
  },
  {
    title: "Hoshin Strategy",
    slug: "hoshin-strategy",
    description: "Arah yang jelas untuk hasil yang maksimal dengan metodologi perencanaan strategis.",
    icon: "Target",
    color: "from-emerald-500 to-green-500",
    order: 2,
  },
  {
    title: "Modifikasi Aplikasi",
    slug: "modifikasi-aplikasi",
    description: "Sesuaikan aplikasi dengan kebutuhan spesifik bisnis Anda, baik mobile maupun desktop.",
    icon: "Smartphone",
    color: "from-purple-500 to-pink-500",
    order: 3,
  },
  {
    title: "Pembuatan Website",
    slug: "pembuatan-website",
    description: "Website profesional, cepat, dan responsif dengan teknologi terkini.",
    icon: "Code",
    color: "from-amber-500 to-orange-500",
    order: 4,
  },
  {
    title: "Landing Page",
    slug: "landing-page",
    description: "Tingkatkan konversi dengan tampilan yang menarik dan copy yang persuasif.",
    icon: "LayoutTemplate",
    color: "from-rose-500 to-pink-500",
    order: 5,
  },
  {
    title: "Layanan Digital Lainnya",
    slug: "layanan-digital-lainnya",
    description: "Konsultasi, integrasi, dan pengembangan sesuai kebutuhan digital Anda.",
    icon: "Settings",
    color: "from-teal-500 to-cyan-500",
    order: 6,
  },
];

const portfolios = [
  {
    title: "Nexura Banking Dashboard",
    slug: "nexura-banking-dashboard",
    category: "Website & Dashboard",
    shortDesc: "Dashboard analitik perbankan real-time dengan visualisasi data interaktif dan fitur keamanan berlapis.",
    content: `# Nexura Banking Dashboard

## Tentang Proyek
Nexura Banking Dashboard adalah platform analitik komprehensif yang dibangun untuk salah satu bank digital terkemuka di Indonesia. Sistem ini memungkinkan tim manajemen untuk memantau transaksi real-time, menganalisis perilaku pengguna, dan mengidentifikasi potensi penipuan secara proaktif.

## Tantangan
Klien menghadapi kesulitan dalam memvisualisasikan jutaan transaksi harian menjadi insight yang dapat ditindaklanjuti. Sistem lama mereka lambat, tidak responsif, dan tidak memiliki fitur keamanan yang memadai untuk mendeteksi anomali.

## Solusi
Kami membangun dashboard dengan stack teknologi modern yang mencakup:

- **Frontend**: Next.js 14 dengan TypeScript untuk performa optimal
- **Visualisasi**: D3.js dan Recharts untuk grafik interaktif
- **Backend**: Node.js dengan PostgreSQL untuk skalabilitas
- **Keamanan**: Enkripsi end-to-end, MFA, dan deteksi anomali berbasis AI

## Hasil
Setelah implementasi, klien melaporkan peningkatan efisiensi tim analisis sebesar 320% dan penurunan kasus penipuan sebesar 45% dalam 6 bulan pertama.`,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Nexura Bank",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "Tailwind", "AWS"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "AeroTrade Landing Page",
    slug: "aerotrade-landing-page",
    category: "Landing Page",
    shortDesc: "Landing page konversi tinggi untuk platform trading crypto dengan animasi premium.",
    content: `# AeroTrade Landing Page

## Tentang Proyek
AeroTrade adalah platform trading cryptocurrency baru yang ingin mendominasi pasar Asia Tenggara. Mereka membutuhkan landing page yang dapat mengonversi pengunjung menjadi pengguna terdaftar dalam jumlah besar.

## Tantangan
Industri crypto sangat kompetitif. Landing page harus terlihat premium, dapat dipercaya, dan mampu menjelaskan value proposition yang kompleks dengan cara yang sederhana.

## Solusi
Kami mendesain landing page dengan pendekatan konversi-first:

- **Hero Section**: Animasi 3D dengan Three.js menampilkan koin yang berputar
- **Social Proof**: Testimoni dan statistik real-time
- **Trust Indicators**: Badge keamanan dan lisensi regulasi
- **CTA Optimized**: Tombol dengan animasi hover yang menarik perhatian
- **Performance**: 98+ Lighthouse score di semua kategori

## Hasil
Landing page berhasil mencapai conversion rate 12.4% (vs industry average 2-3%) dan menghasilkan 50,000+ pendaftaran dalam bulan pertama.`,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "AeroTrade",
    year: "2024",
    technologies: ["React", "Three.js", "Framer Motion", "Vite", "Tailwind"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "MediCare Mobile App",
    slug: "medicare-mobile-app",
    category: "Modifikasi Aplikasi",
    shortDesc: "Aplikasi kesehatan mobile dengan fitur telemedicine, manajemen resep, dan reminder obat.",
    content: `# MediCare Mobile App

## Tentang Proyek
MediCare adalah aplikasi kesehatan yang sudah ada namun membutuhkan modifikasi besar untuk meningkatkan UX dan menambah fitur telemedicine. Klien ingin transformasi total tanpa kehilangan basis pengguna yang sudah ada.

## Tantangan
Aplikasi lama memiliki rating 2.3 di Play Store dengan keluhan utama: UI confusing, sering crash, dan tidak ada fitur konsultasi dokter. Klien ingin semua ini diperbaiki dalam 3 bulan.

## Solusi
Kami melakukan refactor total dengan pendekatan incremental:

- **UI/UX Redesign**: Desain modern dengan fokus pada accessibility
- **Telemedicine**: Video call integrasi dengan WebRTC
- **Smart Reminder**: Notifikasi obat berbasis AI yang belajar pola pengguna
- **Offline Support**: Akses data obat dan catatan tanpa internet
- **Performance**: Optimasi untuk perangkat low-end

## Hasil
Rating naik dari 2.3 ke 4.7 dalam 2 bulan setelah rilis. Pengguna aktif harian meningkat 280% dan fitur telemedicine digunakan oleh 65% pengguna aktif.`,
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "MediCare Health",
    year: "2023",
    technologies: ["React Native", "WebRTC", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "SecureBank Cybersecurity Audit",
    slug: "securebank-cybersecurity-audit",
    category: "Cybersecurity",
    shortDesc: "Audit keamanan komprehensif dan implementasi SOC 2 untuk lembaga keuangan.",
    content: `# SecureBank Cybersecurity Audit

## Tentang Proyek
SecureBank, bank nasional dengan 5 juta nasabah, membutuhkan audit keamanan menyeluruh untuk memenuhi compliance SOC 2 Type II dan mengamankan infrastruktur dari serangan siber yang semakin canggih.

## Tantangan
Infrastruktur klien tersebar di multiple cloud dan on-premise, dengan 200+ aplikasi legacy yang harus diaudit. Tim keamanan internal hanya 5 orang, sementara serangan brute force meningkat 400% year-over-year.

## Solusi
Pendekatan multi-layer security:

- **Penetration Testing**: Ethical hacking pada semua layer (network, app, social)
- **Zero Trust Architecture**: Implementasi model keamanan zero trust
- **SIEM Implementation**: Security Information and Event Management dengan Splunk
- **24/7 SOC**: Security Operations Center dengan tim dedicated
- **Employee Training**: Program awareness untuk 2,000+ karyawan

## Hasil
- 0 insiden keamanan major dalam 12 bulan setelah implementasi
- SOC 2 Type II certification achieved dalam 6 bulan
- 95% pengurangan successful phishing attacks
- 60% pengurangan false positive alerts`,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "SecureBank",
    year: "2024",
    technologies: ["Splunk SIEM", "Palo Alto", "Okta", "CrowdStrike", "AWS GuardDuty"],
    liveUrl: null,
    featured: false,
  },
  {
    title: "EduPro LMS Platform",
    slug: "edupro-lms-platform",
    category: "Website & Dashboard",
    shortDesc: "Learning Management System dengan AI tutor dan progress tracking untuk 100k+ siswa.",
    content: `# EduPro LMS Platform

## Tentang Proyek
EduPro adalah LMS yang dirancang untuk universitas dan institusi pendidikan besar. Platform ini melayani 100,000+ siswa aktif dengan ribuan kursus dan sertifikasi.

## Tantangan
Klien ingin platform yang dapat:
- Menangani 10,000+ concurrent users
- Personalisasi learning path dengan AI
- Tracking progress real-time
- Integrasi dengan Sistem Akademik existing

## Solusi
- **Microservices Architecture**: Scalable backend dengan Kubernetes
- **AI Tutor**: OpenAI GPT integration untuk Q&A 24/7
- **Real-time Analytics**: WebSocket untuk live progress
- **Mobile First**: PWA dengan offline mode
- **Accessibility**: WCAG 2.1 AA compliant

## Hasil
- 99.98% uptime in first year
- 4.8/5 user satisfaction
- 40% improvement in completion rates
- 60% reduction in support tickets`,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "EduPro University",
    year: "2024",
    technologies: ["Next.js", "Kubernetes", "PostgreSQL", "Redis", "OpenAI", "WebSocket"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "FreshMart E-Commerce",
    slug: "freshmart-ecommerce",
    category: "Pembuatan Website",
    shortDesc: "Platform e-commerce groceries dengan same-day delivery dan real-time inventory.",
    content: `# FreshMart E-Commerce

## Tentang Proyek
FreshMart adalah supermarket chain yang ingin mengembangkan bisnis online dengan platform e-commerce groceries yang dapat menyaingi kompetitor besar seperti Sayurbox dan Tanihub.

## Tantangan
- Inventory perishable yang harus real-time
- Delivery routing yang efisien
- Payment gateway multiple options
- Integration dengan POS toko fisik

## Solusi
- **Next.js Commerce**: Frontend dengan SSR untuk SEO
- **Real-time Inventory**: WebSocket sync antara warehouse dan web
- **Smart Routing**: Google Maps API + custom algorithm untuk delivery
- **Multi Payment**: Midtrans, Xendit, QRIS, COD
- **Admin Dashboard**: Manajemen produk, order, dan customer

## Hasil
- 25,000 orders in first 3 months
- 4.6/5 customer rating
- 30% repeat customer rate
- 2x revenue growth vs target`,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "FreshMart",
    year: "2023",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Google Maps API", "Tailwind"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "FinFlow Hoshin Strategy",
    slug: "finflow-hoshin-strategy",
    category: "Hoshin Strategy",
    shortDesc: "Implementasi strategi Hoshin Kanri untuk fintech startup dengan 200+ karyawan.",
    content: `# FinFlow Hoshin Strategy

## Tentang Proyek
FinFlow, fintech startup yang berkembang pesat, menghadapi tantangan alignment antar departemen. Mereka membutuhkan implementasi metodologi Hoshin Kanri untuk memastikan semua tim bergerak ke arah yang sama.

## Tantangan
- 5 departemen dengan KPI yang tidak aligned
- Komunikasi silang yang lemah
- Tidak ada sistem tracking progress strategis
- 200+ karyawan yang perlu di-onboard ke sistem baru

## Solusi
- **Strategy Workshop**: 3-day intensive workshop dengan leadership team
- **Hoshin X-Matrix**: Visual strategy deployment tool
- **Monthly Review Cadence**: Sistem review dan adjustment
- **Digital Dashboard**: Real-time tracking dengan KPI dashboard
- **Training Program**: Untuk semua level karyawan

## Hasil
- 95% goal achievement rate (vs 60% sebelumnya)
- Employee engagement score naik dari 6.2 ke 8.4
- Cross-department collaboration improved 70%
- Strategic initiatives delivered 40% faster`,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "FinFlow",
    year: "2024",
    technologies: ["Strategy Framework", "Notion", "Power BI", "OKR Tools"],
    liveUrl: null,
    featured: false,
  },
  {
    title: "CloudSync Digital Transformation",
    slug: "cloudsync-digital-transformation",
    category: "Layanan Digital Lainnya",
    shortDesc: "Transformasi digital end-to-end untuk perusahaan logistik tradisional.",
    content: `# CloudSync Digital Transformation

## Tentang Proyek
CloudSync adalah perusahaan logistik tradisional yang ingin melakukan transformasi digital total untuk bersaing di era e-commerce. Proyek ini mencakup migrasi sistem, pelatihan karyawan, dan implementasi teknologi baru.

## Tantangan
- Sistem legacy 20+ tahun yang masih menggunakan Excel & paper
- 500+ karyawan dengan literasi digital rendah
- Multiple warehouse dengan proses berbeda
- Budget terbatas untuk transformasi total

## Solusi
Pendekatan phased transformation dalam 18 bulan:

**Phase 1 - Foundation (Months 1-6)**
- Cloud migration (AWS)
- ERP implementation (Odoo)
- Staff training program

**Phase 2 - Digitalization (Months 7-12)**
- Mobile app untuk driver
- Real-time tracking system
- Customer portal

**Phase 3 - Optimization (Months 13-18)**
- AI route optimization
- Predictive inventory
- Advanced analytics

## Hasil
- 200% efficiency improvement
- 50% cost reduction dalam operasional
- 4.5/5 customer satisfaction
- ROI achieved dalam 14 months`,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "CloudSync Logistics",
    year: "2024",
    technologies: ["AWS", "Odoo", "React Native", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: null,
    featured: false,
  },
];

async function main() {
  console.log("🌱 Starting seed...");

  // Seed services
  for (const service of services) {
    await db.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`✅ Seeded ${services.length} services`);

  // Seed portfolios
  for (const portfolio of portfolios) {
    await db.portfolio.upsert({
      where: { slug: portfolio.slug },
      update: { ...portfolio, technologies: JSON.stringify(portfolio.technologies) },
      create: { ...portfolio, technologies: JSON.stringify(portfolio.technologies) },
    });
  }
  console.log(`✅ Seeded ${portfolios.length} portfolios`);

  // Seed settings
  await db.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: { id: "default" },
  });
  console.log("✅ Seeded site settings");

  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
