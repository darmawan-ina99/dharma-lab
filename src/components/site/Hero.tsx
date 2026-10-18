"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";

export function Hero() {
  const { setView } = useAppStore();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden gradient-hero"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Aurora blobs */}
      <div className="aurora-blob w-96 h-96 bg-purple-500 top-20 -left-20" />
      <div className="aurora-blob w-96 h-96 bg-indigo-500 bottom-20 right-0" style={{ animationDelay: "3s" }} />
      <div className="aurora-blob w-72 h-72 bg-pink-500 top-1/2 left-1/2" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-semibold tracking-widest text-purple-700"
            >
              <Sparkles className="w-3.5 h-3.5" />
              SOLUSI DIGITAL & KEAMANAN
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]"
            >
              DHARMA{" "}
              <span className="gradient-text">LAB</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-purple-100/80 max-w-xl leading-relaxed"
            >
              Teknologi untuk{" "}
              <span className="text-white font-semibold">melindungi</span>,{" "}
              <span className="text-white font-semibold">mengembangkan</span>, dan{" "}
              <span className="text-white font-semibold">mempercepat</span> bisnis Anda di era digital.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { icon: Shield, label: "Aman", desc: "Dari ancaman siber" },
                { icon: Zap, label: "Efisien", desc: "Untuk bisnis Anda" },
                { icon: TrendingUp, label: "Berkelanjutan", desc: "Di era digital" },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                    <feat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{feat.label}</div>
                    <div className="text-xs text-purple-200/70">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                onClick={() => scrollToSection("cta")}
                size="lg"
                className="gradient-primary hover:opacity-90 text-white border-0 shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all px-8"
              >
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                variant="outline"
                className="glass text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm px-8"
              >
                Lihat Portofolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              {/* Main visual card */}
              <div className="relative gradient-border p-1 rounded-3xl shadow-2xl shadow-purple-500/20">
                <div className="rounded-[22px] overflow-hidden bg-slate-900 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Cybersecurity & Digital Solution"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl shadow-purple-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">System Secure</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl shadow-purple-500/20"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-300" />
                  <div>
                    <div className="text-xs font-bold text-white">99.9%</div>
                    <div className="text-[10px] text-purple-200/70">Uptime SLA</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
