/**
 * Konten default situs Dharma Labs.
 *
 * Dipakai sebagai fallback di sisi klien ketika backend Supabase/Prisma
 * belum dikonfigurasi atau data masih kosong. Setelah env var Supabase
 * diisi dan admin menambah data via Admin Panel, data database akan
 * menggantikan fallback ini secara otomatis.
 *
 * Prinsip: hanya konten faktual, tanpa klaim sertifikasi, jumlah klien,
 * testimoni, atau pencapaian yang tidak terverifikasi.
 */

import type { Portfolio, Service, SiteSettings } from "@/lib/types";

export const DEFAULT_WHATSAPP_NUMBER = "6288230525469";

export const DEFAULT_SERVICES: Service[] = [
  {
    id: "svc-website",
    title: "Pembuatan Website & Landing Page",
    slug: "pembuatan-website",
    description:
      "Website perusahaan dan landing page profesional yang cepat, responsif di semua perangkat, dan siap mendukung kegiatan pemasaran digital Anda.",
    icon: "Globe",
    color: "from-purple-600 to-indigo-600",
    order: 1,
  },
  {
    id: "svc-app",
    title: "Aplikasi & Sistem Bisnis Khusus",
    slug: "aplikasi-sistem-bisnis",
    description:
      "Aplikasi web dan sistem internal yang dibangun sesuai alur kerja bisnis Anda, mulai dari POS, manajemen inventaris, hingga dashboard operasional.",
    icon: "AppWindow",
    color: "from-indigo-600 to-blue-600",
    order: 2,
  },
  {
    id: "svc-security",
    title: "Konsultasi Keamanan Digital",
    slug: "konsultasi-keamanan",
    description:
      "Konsultasi praktik keamanan digital, peninjauan keamanan aplikasi, dan penerapan proteksi data yang tepat untuk kebutuhan bisnis Anda.",
    icon: "ShieldCheck",
    color: "from-violet-600 to-purple-600",
    order: 3,
  },
  {
    id: "svc-modifikasi",
    title: "Modifikasi & Pengembangan Aplikasi",
    slug: "modifikasi-aplikasi",
    description:
      "Perbaikan, peningkatan, dan pengembangan aplikasi yang sudah berjalan, termasuk migrasi teknologi dan optimalisasi performa.",
    icon: "Wrench",
    color: "from-fuchsia-600 to-pink-600",
    order: 4,
  },
  {
    id: "svc-otomasi",
    title: "Otomasi Proses Bisnis",
    slug: "otomasi-proses",
    description:
      "Otomasi alur kerja dan integrasi antar sistem agar proses bisnis berjalan efisien tanpa pekerjaan manual yang berulang.",
    icon: "Workflow",
    color: "from-blue-600 to-cyan-600",
    order: 5,
  },
  {
    id: "svc-umkm",
    title: "Solusi Digital untuk UMKM",
    slug: "solusi-umkm",
    description:
      "Digitalisasi sederhana untuk usaha kecil dan menengah: profil perusahaan, katalog online, dan alat operasional yang mudah digunakan.",
    icon: "Store",
    color: "from-emerald-600 to-teal-600",
    order: 6,
  },
];

/**
 * Portofolio fallback: hanya proyek yang benar-benar ada dan dapat diverifikasi.
 * Tidak ada statistik, testimoni, atau hasil yang diarang.
 */
export const DEFAULT_PORTFOLIO: Portfolio[] = [
  {
    id: "pf-dharma-pos",
    title: "Dharma POS",
    slug: "dharma-pos",
    category: "Aplikasi Bisnis",
    shortDesc:
      "Sistem POS untuk F&B & cloud kitchen dengan manajemen menu, resep, stok otomatis, dan laporan penjualan.",
    content:
      "Dharma POS adalah sistem point-of-sale untuk usaha F&B dan cloud kitchen. Fitur mencakup manajemen menu dan resep dengan versioning, pengurangan stok bahan baku otomatis berdasarkan pesanan, dashboard KPI penjualan, serta laporan food cost. Dibangun sebagai aplikasi web responsif agar dapat digunakan dari kasir maupun perangkat pemilik usaha.",
    imageUrl: "",
    client: null,
    year: "2026",
    technologies: ["Web App", "Supabase", "POS"],
    liveUrl: "https://dharma-pos.vercel.app",
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "pf-dharma-musik",
    title: "Dharma Musik Digital",
    slug: "dharma-musik-digital",
    category: "Aplikasi Web",
    shortDesc:
      "Platform streaming dan pustaka musik pribadi dengan playlist, unggah lagu, dan pemutar mini.",
    content:
      "Dharma Musik Digital adalah aplikasi web untuk mengelola dan memutar koleksi musik pribadi. Pengguna dapat mengunggah lagu, menyusun playlist, dan memutar musik dengan mini-player yang tetap berjalan saat bernavigasi, lengkap dengan proteksi data per akun.",
    imageUrl: "",
    client: null,
    year: "2026",
    technologies: ["Web App", "Supabase", "Audio Streaming"],
    liveUrl: "https://darmawan-ina99.github.io/dharma-musik/",
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  id: "default",
  whatsappNumber: DEFAULT_WHATSAPP_NUMBER,
  email: "",
  phoneDisplay: "+62 882-3052-5469",
  address: "",
};
