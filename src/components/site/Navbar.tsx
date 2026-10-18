"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Shield } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "BERANDA", view: "home" as const, anchor: "hero" },
  { label: "LAYANAN", view: "home" as const, anchor: "services" },
  { label: "PORTOFOLIO", view: "home" as const, anchor: "portfolio" },
  { label: "TENTANG", view: "home" as const, anchor: "about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setView, currentView } = useAppStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (anchor: string) => {
    if (currentView !== "home") {
      setView("home");
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-purple-500/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => {
                setView("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl gradient-primary blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-base sm:text-lg leading-none">
                  <span className="text-foreground">DHARMA</span>{" "}
                  <span className="gradient-text">LAB</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.2em] mt-0.5">
                  SECURE • BUILD • INNOVATE
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.anchor)}
                  className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => setView("admin-login")}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                Admin
              </Button>
              <Button
                onClick={() => scrollToSection("cta")}
                size="sm"
                className="gradient-primary hover:opacity-90 text-white border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden glass border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.anchor)}
                    className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-border flex flex-col gap-2">
                  <Button
                    onClick={() => {
                      setView("admin-login");
                      setIsOpen(false);
                    }}
                    variant="ghost"
                    size="sm"
                    className="justify-start"
                  >
                    Admin Panel
                  </Button>
                  <Button
                    onClick={() => {
                      scrollToSection("cta");
                    }}
                    size="sm"
                    className="gradient-primary text-white border-0"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
