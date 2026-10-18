"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import type { Portfolio } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

export function PortfolioDetail() {
  const { selectedPortfolioSlug, setView } = useAppStore();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedPortfolioSlug) {
      setView("home");
      return;
    }
    let active = true;
    fetch(`/api/portfolio/${selectedPortfolioSlug}`)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data.portfolio) {
          setPortfolio(data.portfolio);
          setLoading(false);
        } else {
          setView("home");
        }
      })
      .catch(() => {
        if (!active) return;
        setView("home");
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [selectedPortfolioSlug, setView]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin" />
      </div>
    );
  }

  if (!portfolio) return null;

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-12 sm:py-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="aurora-blob w-96 h-96 bg-purple-500 -top-20 -right-20" />
        <div className="aurora-blob w-96 h-96 bg-indigo-500 -bottom-20 -left-20" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setView("home")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Portofolio
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="gradient-primary text-white border-0">
                  {portfolio.category}
                </Badge>
                {portfolio.featured && (
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {portfolio.title}
              </h1>

              <p className="text-base sm:text-lg text-purple-100/80 leading-relaxed">
                {portfolio.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {portfolio.client && (
                  <div className="flex items-center gap-2 text-purple-100">
                    <div className="w-9 h-9 rounded-xl glass flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-200/70 uppercase tracking-wider">Klien</div>
                      <div className="text-sm font-semibold">{portfolio.client}</div>
                    </div>
                  </div>
                )}
                {portfolio.year && (
                  <div className="flex items-center gap-2 text-purple-100">
                    <div className="w-9 h-9 rounded-xl glass flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-200/70 uppercase tracking-wider">Tahun</div>
                      <div className="text-sm font-semibold">{portfolio.year}</div>
                    </div>
                  </div>
                )}
              </div>

              {portfolio.liveUrl && (
                <Button
                  asChild
                  className="mt-4 gradient-primary hover:opacity-90 text-white border-0 shadow-lg shadow-purple-500/40"
                >
                  <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Lihat Live Demo
                  </a>
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="gradient-border p-1 rounded-3xl shadow-2xl shadow-purple-500/20">
                <div className="rounded-[22px] overflow-hidden aspect-[4/3]">
                  <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-8 text-foreground">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6 text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-500" />
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold mb-2 mt-4 text-foreground">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="space-y-2 mb-4 ml-4">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-muted-foreground leading-relaxed flex items-start gap-2 list-none">
                        <span className="text-purple-500 mt-1">▸</span>
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-foreground">{children}</strong>
                    ),
                  }}
                >
                  {portfolio.content}
                </ReactMarkdown>
              </article>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-4">
                {/* Tech Stack */}
                {portfolio.technologies.length > 0 && (
                  <div className="p-6 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm">
                    <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-purple-500" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm space-y-3">
                  <h3 className="font-bold text-sm mb-2">Info Proyek</h3>
                  {portfolio.client && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Klien</span>
                      <span className="font-semibold">{portfolio.client}</span>
                    </div>
                  )}
                  {portfolio.year && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tahun</span>
                      <span className="font-semibold">{portfolio.year}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kategori</span>
                    <span className="font-semibold">{portfolio.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-semibold text-emerald-600">Completed</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 rounded-2xl gradient-primary text-white text-center">
                  <h3 className="font-bold mb-2">Tertarik Proyek Serupa?</h3>
                  <p className="text-xs text-white/80 mb-4">
                    Konsultasi gratis dengan tim ahli kami
                  </p>
                  <Button
                    onClick={() => setView("home")}
                    variant="secondary"
                    className="w-full bg-white text-purple-700 hover:bg-white/90"
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
