"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { photos } from "@/data/gallery";

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = () => {
    setDirection(1);
    setCurrent((value) => (value + 1) % photos.length);
  };

  const previous = () => {
    setDirection(-1);
    setCurrent((value) => (value - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#12352b] text-[#f4f0e7]">
      <header className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/65 transition hover:text-[#e2c77d]"
          >
            <ArrowLeft size={14} />
            Back to Gucci Mart
          </a>

          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e2c77d]">
              Gallery
            </p>
            <p className="mt-1 text-[9px] text-white/35">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </header>

      <section className="px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              A closer look
            </p>
            <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              Inside Gucci Mart.
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#0d2b23]">
            <div className="relative aspect-[4/3] sm:aspect-[16/9]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current}
                  src={photos[current]}
                  alt={`Gucci Mart photo ${current + 1}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -35 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
                  onClick={() => setLightboxOpen(true)}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

              <button
                onClick={previous}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition hover:border-[#e2c77d]/50 hover:text-[#e2c77d] sm:left-6"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition hover:border-[#e2c77d]/50 hover:text-[#e2c77d] sm:right-6"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
                  Gucci Mart &bull; Oraifite
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e2c77d]">
                  {String(current + 1).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              Use the arrows to explore
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={previous}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#e2c77d]/40 hover:text-[#e2c77d]"
                aria-label="Previous photo"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#e2c77d]/40 hover:text-[#e2c77d]"
                aria-label="Next photo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
