"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import type { SiteSettings } from "@/lib/types";

export function CTASection() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => setSettings(data.settings))
      .catch(() => {});
  }, []);

  const whatsappUrl = settings
    ? `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(
        "Halo Dharma Lab, saya ingin konsultasi tentang layanan digital Anda."
      )}`
    : "#";

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-8 sm:p-12 lg:p-16"
        >
          {/* Animated grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          
          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-light text-xs font-bold tracking-widest text-purple-700">
                <MessageCircle className="w-3.5 h-3.5" />
                SIAP MEMULAI?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Konsultasikan <span className="gradient-text">Kebutuhan</span> Anda
              </h2>
              <p className="text-purple-100/80 text-base sm:text-lg max-w-md">
                Tim ahli kami siap membantu dengan solusi terbaik untuk bisnis dan proyek digital Anda. Konsultasi gratis, response cepat.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="gradient-primary hover:opacity-90 text-white border-0 shadow-xl shadow-purple-500/40 hover:scale-105 transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact info card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-lg mb-2">Informasi Kontak</h3>
              {settings && (
                <>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-200/70">WhatsApp / Telepon</div>
                      <div className="font-semibold text-sm">{settings.phoneDisplay}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${settings.email}`}
                    className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-200/70">Email</div>
                      <div className="font-semibold text-sm">{settings.email}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-purple-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-200/70">Lokasi</div>
                      <div className="font-semibold text-sm">{settings.address}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
