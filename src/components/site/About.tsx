"use client";

import { motion } from "framer-motion";
import { Shield, Code, Target, Smartphone, Globe, Zap, Award, Users, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "150+", label: "Proyek Selesai" },
  { icon: Users, value: "80+", label: "Klien Puas" },
  { icon: Award, value: "8+", label: "Tahun Pengalaman" },
  { icon: Zap, value: "99.9%", label: "Uptime SLA" },
];

const values = [
  {
    icon: Shield,
    title: "Keamanan First",
    desc: "Setiap solusi yang kami bangun mengutamakan keamanan data dan sistem dari ancaman siber modern.",
  },
  {
    icon: Target,
    title: "Hasil Terukur",
    desc: "Kami tidak hanya menjanjikan, tapi membuktikan dengan KPI yang jelas dan metrik kesuksesan yang transparan.",
  },
  {
    icon: Code,
    title: "Teknologi Terkini",
    desc: "Stack teknologi modern yang scalable, maintainable, dan future-proof untuk bisnis jangka panjang Anda.",
  },
  {
    icon: Globe,
    title: "Support 24/7",
    desc: "Tim ahli kami siap membantu kapan pun Anda membutuhkan. Respons cepat, solusi tepat.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-background to-background dark:from-purple-950/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm"
            >
              <div className="inline-flex w-12 h-12 rounded-2xl gradient-primary items-center justify-center mb-3 shadow-lg shadow-purple-500/30">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            TENTANG KAMI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Mitra Teknologi untuk{" "}
            <span className="gradient-text">Bisnis Masa Depan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Dharma Lab lahir dari visi menyediakan solusi digital yang aman, efisien, dan berkelanjutan. Kami percaya teknologi harus menjadi katalisator pertumbuhan, bukan penghambat.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex w-14 h-14 rounded-2xl gradient-primary items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
