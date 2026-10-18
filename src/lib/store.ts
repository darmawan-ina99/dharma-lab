import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AppState } from "./types";

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentView: "home",
      selectedPortfolioSlug: null,
      isAdmin: false,
      selectedCategory: "all",
      setView: (view) => {
        set({ currentView: view });
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      setSelectedPortfolio: (slug) => set({ selectedPortfolioSlug: slug }),
      setIsAdmin: (isAdmin) => set({ isAdmin }),
      setCategory: (category) => set({ selectedCategory: category }),
    }),
    {
      name: "dharma-storage",
      partialize: (state) => ({ isAdmin: state.isAdmin }),
    }
  )
);
