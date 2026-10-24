"use client";

import { useAppStore } from "@/lib/store";

export function Footer() {
  const { setView } = useAppStore();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-gradient-to-b from-background to-purple-50/50 dark:to-purple-950/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-xl bg-white p-1 shadow-md ring-1 ring-black/5">
                <img
                  src="/logo/dharmalabs-logo.png"
                  alt="Logo resmi Dharma Labs"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-base">
                  <span>DHARMA</span> <span className="gradient-text">LAB</span>
                </div>
                <div className="text-[9px] text-muted-foreground tracking-[0.2em]">
                  SECURE • BUILD • INNOVATE
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solusi digital & keamanan untuk bisnis Anda. Lindungi, kembangkan, dan percepat bisnis di era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    setView("home");
                    setTimeout(() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("home");
                    setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("home");
                    setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Portofolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("admin-login")}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Admin Panel
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-3">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cybersecurity</li>
              <li>Pembuatan Website</li>
              <li>Landing Page</li>
              <li>Modifikasi Aplikasi</li>
              <li>Hoshin Strategy</li>
              <li>Layanan Digital Lainnya</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {year} Dharma Lab. All rights reserved. Built with passion in Indonesia.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
