"use client";

import ProductRail from "@/components/shop/ProductRail";
import { photos } from "@/data/gallery";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);

      if (event.key === "ArrowRight") {
        setSelectedPhoto((current) =>
          current === null ? 0 : (current + 1) % photos.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedPhoto((current) =>
          current === null
            ? photos.length - 1
            : (current - 1 + photos.length) % photos.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/2349036892702?text=Hello%20Gucci%20Mart%2C%20I%27d%20like%20to%20make%20an%20enquiry.",
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#12352b]">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
  <nav className="mx-auto max-w-7xl rounded-[24px] border border-white/20 bg-[#12352b]/95 px-3 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
    <div className="md:hidden">
      <div className="flex h-10 items-center">
        <a href="#home" className="flex shrink-0 items-center">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#e2c77d]/60 bg-[#f4f0e7]">
            <img
              src="/media/gucci-logo.jpg"
              alt="Gucci Mart"
              className="h-full w-full object-cover"
            />
          </span>
        </a>

        <div className="flex flex-1 justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 1, 1, 0], x: [70, 0, 0, -70] }}
            transition={{
              duration: 20,
              times: [0, 0.08, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#f4f0e7]">
              GUCCI MART
            </p>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-[#e2c77d]">
              Oraifite
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-3 flex w-full items-center justify-between border-t border-white/10 pt-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.06em] text-white/75 transition hover:text-[#e2c77d]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
    <div className="hidden items-center gap-6 md:flex">
      <a href="#home" className="flex shrink-0 items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#e2c77d]/60 bg-[#f4f0e7]">
          <img
            src="/media/gucci-logo.jpg"
            alt="Gucci Mart"
            className="h-full w-full object-cover"
          />
        </span>

        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#f4f0e7]">
            GUCCI MART
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#e2c77d]">
            Oraifite
          </p>
        </div>
      </a>

      <div className="flex flex-1 items-center justify-center gap-7">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 transition hover:text-[#e2c77d]"
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        onClick={openWhatsApp}
        className="flex shrink-0 items-center gap-2 rounded-full bg-[#e2c77d] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12352b] transition hover:bg-[#f0d994]"
      >
        <MessageCircle size={15} />Order Now</button>
    </div>
  </nav>
</header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#12352b]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/media/gucci-header.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#071b15]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071b15] via-[#071b15]/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-40 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e2c77d]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e2c77d]">
                Oraifite Ã¢â‚¬Â¢ Anambra
              </span>
            </div>

            <h1 className="max-w-4xl text-[clamp(3.2rem,10vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em] text-[#f7f2e8]">
              Everything
              <br />
              <span className="text-[#e2c77d]">you need.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
                Your neighbourhood destination for everyday essentials,
                quality products and convenient shopping in the heart of
                Oraifite.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#store"
                  className="group flex items-center gap-3 rounded-full bg-[#e2c77d] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12352b] transition hover:bg-[#f0d994]"
                >
                  Explore Store
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-3 rounded-full border border-[#e2c77d]/40 bg-[#12352b]/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f4f0e7] shadow-lg backdrop-blur-md transition hover:border-[#e2c77d]/70 hover:bg-[#12352b]"
                >
                  <MessageCircle size={15} className="text-[#e2c77d]" />
                  Chat With Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 right-5 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/50 sm:flex">
          <span>Scroll to explore</span>
          <span className="h-px w-8 bg-white/30" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-[#12352b]/10 bg-[#e6dfcf]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
          {[
            ["01", "Everyday essentials", "Practical products for everyday life."],
            ["02", "Convenient shopping", "A local store built around your needs."],
            ["03", "Right here in Oraifite", "Easy to find. Easy to shop."],
          ].map(([number, title, text]) => (
            <div key={number} className="flex gap-4">
              <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#a18b55]">
                {number}
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-xs leading-6 text-[#12352b]/60">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a18b55]">
              About Gucci Mart
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Your local stop for the things that matter.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-sm leading-7 text-[#12352b]/65 sm:text-base">
              Gucci Mart is a neighbourhood supermarket serving customers in
              Oraifite and its surrounding community. From everyday household
              needs to personal essentials, the focus is simple: make shopping
              convenient and accessible.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
              <MapPin size={16} className="text-[#a18b55]" />
              Opposite Havydon&apos;s Villa, Oraifite
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORE */}
      <section
        id="store"
        className="overflow-hidden bg-[#f4f0e7] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a18b55]">
                Shop Gucci Mart
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#12352b] sm:text-6xl">
                Everyday things.
                <br />
                <span className="text-[#12352b]/45">One easy stop.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#12352b]/55">
                From breakfast essentials to snacks, drinks and everyday
                household needs, find the things you reach for most.
              </p>
            </div>

            <div className="hidden pb-1 text-right sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#12352b]/35">
                30 essentials
              </p>
              <p className="mt-1 text-xs text-[#12352b]/40">
                Scroll to explore
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ProductRail />
          </div>
        </div>
      </section>
      {/* FEATURE */}
      <section className="overflow-hidden bg-[#e6dfcf] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/media/gucci-interior.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#12352b]/45 to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-[#12352b]/80 px-5 py-4 backdrop-blur-md">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#e2c77d]">
                Gucci Mart
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Oraifite, Anambra
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a18b55]">
              Local. Accessible. Convenient.
            </p>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Shopping should feel simple.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#12352b]/65 sm:text-base">
              Whether you are picking up a few essentials or stocking up for
              the week, Gucci Mart gives you a convenient local option without
              needing to go far.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 rounded-full bg-[#12352b] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f4f0e7] transition hover:bg-[#1b4438]"
              >
                <MessageCircle size={15} />Order Now</button>

              <a
                href="https://maps.app.goo.gl/zAzuaBtu3bKHXpwm7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-[#12352b]/15 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition hover:bg-white/50"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="overflow-hidden bg-[#f4f0e7] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#12352b] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2c77d]">
                Gallery
              </p>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#f4f0e7] sm:text-6xl">
                A closer look.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#f4f0e7]/55">
                Take a look inside Gucci Mart, from the shelves and aisles
                to the details that make the store feel like home.
              </p>

              <a
                href="/gallery"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e2c77d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#12352b] transition hover:bg-[#f0d995]"
              >
                View more photos
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#e2c77d]/20 sm:h-96 sm:w-96" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-64 w-64 rounded-full border border-white/5" />

            <div className="absolute bottom-6 right-6 hidden text-right sm:block">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-[#f4f0e7]/15">
                {photos.length}
              </p>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#f4f0e7]/25">
                photographs
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="bg-[#12352b] px-5 py-20 text-[#f4f0e7] sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2c77d]">
                Visit Gucci Mart
              </p>

              <h2 className="max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                Your next shop
                <br />
                starts here.
              </h2>
            </div>

            <div className="lg:pt-10">
              <div className="border-t border-white/10 py-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Address
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Oraifite Ezumeri,
                  <br />
                  Opposite Havydon&apos;s Villa,
                  <br />
                  Anambra State, Nigeria
                </p>
              </div>

              <div className="border-t border-white/10 py-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Phone
                </p>
                <a
                  href="tel:+2349036892702"
                  className="mt-2 block text-sm text-white/80 transition hover:text-[#e2c77d]"
                >
                  0903 689 2702
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 rounded-full bg-[#e2c77d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#12352b]"
                >
                  <MessageCircle size={14} />Order Now</button>

                <a
                  href="https://maps.app.goo.gl/zAzuaBtu3bKHXpwm7"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  <MapPin size={14} />
                  Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#071b15] text-white">
        {/* VIDEO HEADER */}
        <div className="relative min-h-[520px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/media/gucci-header.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">
              Get in touch
            </p>

            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#f4f0e7] md:h-20 md:w-20">
              <img src="/media/gucci-logo.jpg" alt="Gucci Mart" className="h-full w-full object-cover" />
            </div>

            <p className="mt-6 max-w-[560px] text-[28px] font-medium leading-tight tracking-[-0.03em] md:text-[42px]">
              Everyday essentials.
              <br />
              See you at Gucci Mart.
            </p>
          </div>
        </div>

        {/* CONTACT + MAP */}
        <div className="grid md:grid-cols-[1fr_1fr]">

          {/* CONTACT DETAILS */}
          <div className="px-6 py-12 md:px-10 md:py-14">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
              Contact
            </p>

            <h2 className="mt-3 text-[40px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
              Us
            </h2>

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Address
                </p>

                <p className="mt-2 max-w-[340px] text-sm leading-6 text-white/75">
                  Oraifite Ezumeri,
                  <br />
                  Opposite Havydon&apos;s Villa,
                  <br />
                  Anambra State, Nigeria
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Phone
                </p>

                <a
                  href="tel:+2349036892702"
                  className="mt-2 block text-sm text-white/75 transition hover:text-white"
                >
                  0903 689 2702
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Social
                </p>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[9px] font-semibold">
                    IG
                  </span>
                  Follow Gucci Mart on Instagram
                </a>
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="border-t border-white/10 md:border-l md:border-t-0">
            <div className="h-full min-h-[400px]">
              <iframe
                title="Gucci Mart Oraifite Location"
                src="https://www.google.com/maps?q=Gucci+Mart,+Oraifite,+Anambra,+Nigeria&output=embed"
                className="h-full min-h-[400px] w-full grayscale-[0.25] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* FOOTER NAV */}
        <div className="grid border-t border-white/10 md:grid-cols-4">

          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xl font-semibold tracking-[-0.03em]">
              Gucci Mart
            </p>

            <p className="mt-3 max-w-[240px] text-xs leading-6 text-white/40">
              Your neighbourhood supermarket for everyday essentials in
              Oraifite.
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Navigate
            </p>

            <div className="space-y-3 text-xs text-white/55">
              <a href="#home" className="block transition hover:text-white">
                Home
              </a>

              <a href="#about" className="block transition hover:text-white">
                About
              </a>

              <a href="#store" className="block transition hover:text-white">
                Store
              </a>

              <a href="#gallery" className="block transition hover:text-white">
                Gallery
              </a>

              <a href="#contact" className="block transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Shop
            </p>

            <div className="space-y-3 text-xs text-white/55">
              <p>Everyday Essentials</p>
              <p>Household Needs</p>
              <p>Groceries</p>
              <p>Local Convenience</p>
            </div>
          </div>

          <div className="px-6 py-8 md:px-8">
            <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Visit
            </p>

            <a
              href="https://maps.app.goo.gl/zAzuaBtu3bKHXpwm7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/55 transition hover:text-white"
            >
              Open location
              <ArrowRight size={12} />
            </a>

            <a
              href="https://wa.me/2349036892702?text=Hello%20Gucci%20Mart%2C%20I%27d%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[9px] uppercase tracking-[0.15em] text-white/60 transition hover:border-[#e2c77d]/50 hover:text-[#e2c77d]"
            >
              <MessageCircle size={13} />Order Now</a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 px-6 py-5 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 text-[9px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>Ã‚Â© {new Date().getFullYear()} Gucci Mart</span>
            <span>Oraifite, Anambra State</span>
          </div>
        </div>
      </footer>
      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071b15]/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedPhoto(
                  (selectedPhoto - 1 + photos.length) % photos.length
                );
              }}
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={photos[selectedPhoto]}
              src={photos[selectedPhoto]}
              alt="Gucci Mart"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
            />

            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedPhoto((selectedPhoto + 1) % photos.length);
              }}
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-white/50">
              {String(selectedPhoto + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
