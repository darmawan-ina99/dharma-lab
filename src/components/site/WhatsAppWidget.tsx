"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/site-content";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(DEFAULT_WHATSAPP_NUMBER);
  const [message, setMessage] = useState(
    "Halo Dharma Lab, saya ingin konsultasi tentang layanan digital Anda."
  );

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.settings?.whatsappNumber) {
          setNumber(data.settings.whatsappNumber);
        }
      })
      .catch(() => {});
  }, []);

  const handleSend = () => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl shadow-green-500/40 flex items-center justify-center group"
        aria-label="WhatsApp Chat"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] sm:w-96 glass rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Dharma Lab Support</div>
                <div className="text-xs text-white/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Online sekarang
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-background/95 backdrop-blur">
              <div className="bg-muted rounded-2xl rounded-tl-none p-3 mb-4 max-w-[85%]">
                <p className="text-sm text-foreground">
                  Halo! 👋 Selamat datang di Dharma Lab. Bagaimana kami bisa membantu Anda hari ini?
                </p>
                <div className="text-[10px] text-muted-foreground mt-1">Baru saja</div>
              </div>

              {/* Message input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full p-3 text-sm rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Tulis pesan Anda..."
                />
                <Button
                  onClick={handleSend}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90 text-white border-0 shadow-lg shadow-green-500/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
