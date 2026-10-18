"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, Shield, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function AdminLogin() {
  const { setView, setIsAdmin } = useAppStore();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      toast.error("Password wajib diisi");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsAdmin(true);
        toast.success("Login berhasil! Selamat datang, Admin.");
        setView("admin-dashboard");
      } else {
        toast.error(data.error || "Login gagal");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-4 relative overflow-hidden gradient-hero">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="aurora-blob w-96 h-96 bg-purple-500 top-0 -left-20" />
      <div className="aurora-blob w-96 h-96 bg-indigo-500 bottom-0 right-0" style={{ animationDelay: "3s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Back button */}
        <button
          onClick={() => setView("home")}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </button>

        {/* Login card */}
        <div className="glass rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-4 shadow-lg shadow-purple-500/40 animate-glow"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-2xl font-extrabold text-white">Admin Panel</h1>
            <p className="text-sm text-purple-200/70 mt-1">
              Masuk untuk mengelola portofolio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm font-semibold">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password admin"
                  className="pl-10 pr-10 bg-white/5 border-white/10 text-white placeholder:text-purple-200/50 focus:border-purple-500/50"
                  autoComplete="current-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-primary hover:opacity-90 text-white border-0 shadow-lg shadow-purple-500/40 h-11"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Memverifikasi...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Masuk ke Dashboard
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-purple-200/70 text-center">
              🔒 Area terbatas. Hanya untuk administrator yang berwenang.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
