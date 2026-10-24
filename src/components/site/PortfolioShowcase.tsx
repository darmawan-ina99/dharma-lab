"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { ArrowRight, ArrowLeft, ExternalLink, Calendar, User, Tag, Star } from "lucide-react";
import { useAppStore } from "@/lib/store";
import type { Portfolio } from "@/lib/types";
import { DEFAULT_PORTFOLIO } from "@/lib/site-content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PortfolioShowcase() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  // fallback: proyek nyata ketika database belum dikonfigurasi
  const [loading, setLoading] = useState(true);
  const { setView, setSelectedPortfolio, selectedCategory, setCategory } = useAppStore();

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((data) => {
        setPortfolios(data.portfolios?.length ? data.portfolios : DEFAULT_PORTFOLIO);
        setLoading(false);
      })
      .catch(() => {
        setPortfolios(DEFAULT_PORTFOLIO);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const set = new Set(portfolios.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [portfolios]);

  const filteredPortfolios = useMemo(() => {
    if (selectedCategory === "all") return portfolios;
    return portfolios.filter((p) => p.category === selectedCategory);
  }, [portfolios, selectedCategory]);

  const openDetail = (slug: string) => {
    setSelectedPortfolio(slug);
    setView("portfolio-detail");
  };

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-50/30 dark:to-purple-950/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-widest mb-4">
            <Star className="w-3.5 h-3.5" />
            HASIL KERJA KAMI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Lihat Beberapa{" "}
            <span className="gradient-text">Proyek Terbaik</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Karya nyata yang telah membantu klien mencapai tujuan bisnis mereka melalui teknologi & strategi yang tepat.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "gradient-primary text-white shadow-lg shadow-purple-500/30"
                  : "bg-muted text-muted-foreground hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300"
              }`}
            >
              {cat === "all" ? "Semua Kategori" : cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : filteredPortfolios.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Belum ada proyek pada kategori ini.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolios.map((portfolio, idx) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => openDetail(portfolio.slug)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur-sm p-0">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={portfolio.imageUrl}
                      alt={portfolio.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Featured badge */}
                    {portfolio.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-white" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="glass-light border-0 text-xs">
                        {portfolio.category}
                      </Badge>
                    </div>

                    {/* View detail overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-4 py-2 rounded-full glass-light text-xs font-semibold text-purple-700 flex items-center gap-2">
                        Lihat Detail <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                      {portfolio.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                      {portfolio.shortDesc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      {portfolio.client && (
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {portfolio.client}
                        </span>
                      )}
                      {portfolio.year && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {portfolio.year}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
