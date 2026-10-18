"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Search,
  Eye,
  Star,
  X,
  Loader2,
  Save,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import type { Portfolio } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const CATEGORIES = [
  "Cybersecurity",
  "Website & Dashboard",
  "Landing Page",
  "Modifikasi Aplikasi",
  "Pembuatan Website",
  "Hoshin Strategy",
  "Layanan Digital Lainnya",
];

interface FormData {
  title: string;
  slug: string;
  category: string;
  shortDesc: string;
  content: string;
  imageUrl: string;
  client: string;
  year: string;
  technologies: string; // comma separated
  liveUrl: string;
  featured: boolean;
}

const emptyForm: FormData = {
  title: "",
  slug: "",
  category: CATEGORIES[0],
  shortDesc: "",
  content: "",
  imageUrl: "",
  client: "",
  year: "",
  technologies: "",
  liveUrl: "",
  featured: false,
};

export function AdminDashboard() {
  const { setView, setIsAdmin } = useAppStore();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setPortfolios(data.portfolios || []);
    } catch (error) {
      toast.error("Gagal memuat portofolio");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAdmin(false);
    setView("home");
    toast.success("Berhasil logout");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const openCreateModal = () => {
    setForm(emptyForm);
    setEditingId(null);
    setModalOpen(true);
  };

  const openEditModal = (p: Portfolio) => {
    setForm({
      title: p.title,
      slug: p.slug,
      category: p.category,
      shortDesc: p.shortDesc,
      content: p.content,
      imageUrl: p.imageUrl,
      client: p.client || "",
      year: p.year || "",
      technologies: p.technologies.join(", "),
      liveUrl: p.liveUrl || "",
      featured: p.featured,
    });
    setEditingId(p.id);
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.slug || !form.category || !form.shortDesc || !form.content || !form.imageUrl) {
      toast.error("Lengkapi semua field wajib");
      return;
    }

    setSaving(true);

    const payload = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      const url = editingId
        ? `/api/portfolio/${editingId}`
        : "/api/portfolio";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(editingId ? "Portofolio berhasil diupdate" : "Portofolio berhasil dibuat");
        setModalOpen(false);
        fetchPortfolios();
      } else {
        toast.error(data.error || "Gagal menyimpan");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/portfolio/${deleteId}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Portofolio berhasil dihapus");
        setDeleteId(null);
        fetchPortfolios();
      } else {
        toast.error("Gagal menghapus");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setDeleting(false);
    }
  };

  const filtered = portfolios.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.client?.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "all" || p.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-purple-500/30">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Kelola portofolio Dharma Lab</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setView("home")}
              variant="outline"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              Lihat Website
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Total Proyek", value: portfolios.length, color: "from-blue-500 to-cyan-500" },
            { label: "Featured", value: portfolios.filter((p) => p.featured).length, color: "from-amber-500 to-orange-500" },
            { label: "Kategori", value: new Set(portfolios.map((p) => p.category)).size, color: "from-purple-500 to-pink-500" },
            { label: "Klien", value: new Set(portfolios.map((p) => p.client).filter(Boolean)).size, color: "from-emerald-500 to-teal-500" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm">
              <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cari proyek atau klien..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <option value="all">Semua Kategori</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Button
            onClick={openCreateModal}
            className="gradient-primary hover:opacity-90 text-white border-0 shadow-lg shadow-purple-500/30"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Portofolio
          </Button>
        </motion.div>

        {/* Portfolio Table/Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Tidak ada portofolio ditemukan.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl overflow-hidden border border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur-sm"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {p.featured && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-white" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">{p.category}</Badge>
                    <h3 className="font-bold text-base mb-1 line-clamp-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{p.shortDesc}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{p.client || "—"}</span>
                      <span>{p.year || "—"}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditModal(p)}
                        className="flex-1 h-8"
                      >
                        <Edit2 className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDeleteId(p.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Portofolio" : "Tambah Portofolio Baru"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Judul <span className="text-red-500">*</span></Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setForm({
                      ...form,
                      title,
                      slug: editingId ? form.slug : generateSlug(title),
                    });
                  }}
                  placeholder="Mis. Nexura Banking Dashboard"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="nexura-banking-dashboard"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori <span className="text-red-500">*</span></Label>
              <select
                id="category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                required
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDesc">Deskripsi Singkat <span className="text-red-500">*</span></Label>
              <Textarea
                id="shortDesc"
                value={form.shortDesc}
                onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
                placeholder="Ringkasan singkat proyek (1-2 kalimat)"
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Konten Lengkap (Markdown) <span className="text-red-500">*</span></Label>
              <Textarea
                id="content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder={"# Judul Proyek\n\n## Tentang\nDeskripsi...\n\n## Tantangan\n- Point 1\n- Point 2"}
                rows={8}
                className="font-mono text-sm"
                required
              />
              <p className="text-xs text-muted-foreground">Mendukung format Markdown (# untuk heading, **bold**, - untuk list)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl" className="flex items-center gap-1">
                <ImageIcon className="w-3 h-3" /> URL Gambar <span className="text-red-500">*</span>
              </Label>
              <Input
                id="imageUrl"
                type="url"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                required
              />
              {form.imageUrl && (
                <div className="mt-2 rounded-lg overflow-hidden aspect-video bg-muted">
                  <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Klien</Label>
                <Input
                  id="client"
                  value={form.client}
                  onChange={(e) => setForm({ ...form, client: e.target.value })}
                  placeholder="Nama klien"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Tahun</Label>
                <Input
                  id="year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  placeholder="2024"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">Teknologi (pisahkan dengan koma)</Label>
              <Input
                id="technologies"
                value={form.technologies}
                onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                placeholder="Next.js, TypeScript, PostgreSQL"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveUrl" className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" /> URL Live Demo
              </Label>
              <Input
                id="liveUrl"
                type="url"
                value={form.liveUrl}
                onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Switch
                id="featured"
                checked={form.featured}
                onCheckedChange={(checked) => setForm({ ...form, featured: checked })}
              />
              <Label htmlFor="featured" className="cursor-pointer flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                Tampilkan sebagai Featured
              </Label>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
                disabled={saving}
              >
                <X className="w-4 h-4 mr-2" />
                Batal
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="gradient-primary hover:opacity-90 text-white border-0"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {editingId ? "Update" : "Simpan"}
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus portofolio ini? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Menghapus...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Hapus
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
