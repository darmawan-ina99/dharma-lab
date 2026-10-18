"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { PortfolioShowcase } from "@/components/site/PortfolioShowcase";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { PortfolioDetail } from "@/components/portfolio/PortfolioDetail";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function Home() {
  const { currentView, setView, isAdmin } = useAppStore();

  // Sync view with URL hash for shareable links
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === "admin") {
      setView(isAdmin ? "admin-dashboard" : "admin-login");
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === "admin") {
        setView(isAdmin ? "admin-dashboard" : "admin-login");
      } else if (newHash === "" && currentView !== "home") {
        setView("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [setView, isAdmin, currentView]);

  // Update hash when view changes
  useEffect(() => {
    if (currentView === "admin-login" || currentView === "admin-dashboard") {
      if (window.location.hash !== "#admin") {
        window.history.replaceState(null, "", "#admin");
      }
    } else if (currentView === "home" && window.location.hash === "#admin") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {currentView === "home" && (
          <>
            <Hero />
            <Services />
            <PortfolioShowcase />
            <About />
            <CTASection />
          </>
        )}

        {currentView === "portfolio-detail" && <PortfolioDetail />}

        {currentView === "admin-login" && <AdminLogin />}

        {currentView === "admin-dashboard" && <AdminDashboard />}
      </main>

      {currentView === "home" && <Footer />}

      {/* WhatsApp floating widget - only on public views */}
      {currentView !== "admin-dashboard" && currentView !== "admin-login" && (
        <WhatsAppWidget />
      )}
    </div>
  );
}
