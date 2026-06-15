import React, { useState, useEffect, useRef } from 'react';
import { slidesData } from './data.ts';
import { ChevronLeft, ChevronRight, Play, Pause, Expand, Minimize2, Share2, MessageSquare, Menu, Check, Sparkles, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [autoplaySpeed, setAutoplaySpeed] = useState(7000);
  const [shareToast, setShareToast] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = slidesData.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setActiveIndex(index);
      window.location.hash = `#slide=${index + 1}`;
      if (autoplay) resetAutoplayTimer();
    }
  };

  const nextSlide = () => {
    if (activeIndex < totalSlides - 1) {
      goToSlide(activeIndex + 1);
    } else {
      goToSlide(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
  };

  useEffect(() => {
    if (autoplay) {
      resetAutoplayTimer();
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, activeIndex, autoplaySpeed]);

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.log('Fullscreen error', err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.log('Exit fullscreen error', err));
    }
  };

  const handleShareSlide = () => {
    const linkToShare = `${window.location.origin}${window.location.pathname}#slide=${activeIndex + 1}`;
    navigator.clipboard.writeText(linkToShare)
      .then(() => {
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2500);
      })
      .catch((err) => {
        console.error('Share link failure', err);
      });
  };

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 font-sans overflow-x-hidden flex flex-col justify-between">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1405] to-[#02040a] opacity-90" />
      </div>

      <header className="relative w-full z-30 px-4 py-3 bg-black/30 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h1 className="font-serif text-sm sm:text-base font-semibold text-white tracking-tight">METAVERSE DA'WAH</h1>
              <p className="text-[9px] text-[#d4af37] font-mono uppercase tracking-widest hidden sm:block">Sidang Skripsi S1 • Zaki Mubarok</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Menghadirkan Dakwah Ke Metaverse</h2>
            <p className="text-lg text-gray-300 mb-8">Slide {activeIndex + 1} of {totalSlides}</p>
          </div>
        </div>
      </main>

      <footer className="relative w-full z-30 bg-black/40 backdrop-blur-md border-t border-white/[0.04] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handleShareSlide} className="p-1.5 rounded-lg border border-white/5 text-gray-400 hover:text-[#d4af37]">
              <Share2 className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {shareToast && (
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 rounded px-2.5 py-1 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Tautan Slide disalin!</span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3.5">
            <button onClick={prevSlide} disabled={activeIndex === 0} className="p-2.5 rounded-full border bg-neutral-900 text-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#d4af37] font-semibold">{activeIndex + 1} / {totalSlides}</span>
            <button onClick={nextSlide} disabled={activeIndex === totalSlides - 1} className="p-2.5 rounded-full border bg-neutral-900 text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setAutoplay(!autoplay)} className="p-1.5 rounded-md flex items-center gap-1">
              {autoplay ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button onClick={handleFullscreenToggle} className="p-1.5 rounded-lg border border-white/5">
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Expand className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}