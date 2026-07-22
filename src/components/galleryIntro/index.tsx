"use client";

import { Cursor } from "@/components/shared/cursor";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    index: "01",
    label: "Instagram",
    href: "https://www.instagram.com/llhanfurkan/",
  },
  {
    index: "02",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/furkan-ilhan/",
  },
  { index: "03", label: "X / Twitter", href: "https://x.com/1Furkanilhan" },
  {
    index: "04",
    label: "Portfolio",
    href: "https://www.furkanilhan.org/",
  },
];

export default function GalleryIntro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const enterGallery = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <Cursor hideCursor={magnetActive} />

      <header className="gallery-header">
        <a className="gallery-brand" href="#top" aria-label="My Little Gallery home">
          <span className="gallery-brand-mark">FI</span>
          <span className="gallery-brand-copy">
            My Little Gallery
            <small>Personal art archive</small>
          </span>
        </a>

        <div className="gallery-header-edition" aria-hidden="true">
          Digital exhibition <span /> Vol. 01
        </div>

        <button
          type="button"
          className="gallery-menu-button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          onPointerEnter={() => setMagnetActive(true)}
          onPointerLeave={() => setMagnetActive(false)}
        >
          <span className="gallery-menu-label">{isMenuOpen ? "Close" : "Menu"}</span>
          <span className={`gallery-menu-icon ${isMenuOpen ? "is-open" : ""}`}>
            <i />
            <i />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="gallery-menu"
            aria-label="Social and portfolio links"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="gallery-menu-visual" aria-hidden="true">
              <Image
                src="https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/wedding.png"
                alt=""
                fill
                sizes="(min-width: 900px) 42vw, 100vw"
                className="object-cover"
              />
              <span>Curated by Furkan İlhan</span>
            </div>

            <div className="gallery-menu-content">
              <p className="gallery-menu-kicker">Find me elsewhere</p>
              <div className="gallery-menu-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.25 + index * 0.07 }}
                  >
                    <small>{link.index}</small>
                    <span>{link.label}</span>
                    <b aria-hidden="true">↗</b>
                  </motion.a>
                ))}
              </div>
              <p className="gallery-menu-note">
                Building thoughtful digital experiences from İstanbul.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="top" className="gallery-hero" aria-labelledby="gallery-title">
        <div className="gallery-hero-grid" aria-hidden="true" />
        <div className="gallery-hero-glow" aria-hidden="true" />

        <motion.div
          className="gallery-hero-seal"
          initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.05, duration: 0.8 }}
          aria-hidden="true"
        >
          <span>Private</span>
          <strong>01</strong>
          <span>Collection</span>
        </motion.div>

        <div className="gallery-hero-copy">
          <motion.p
            className="gallery-hero-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: 0.8 }}
          >
            A digital salon of timeless works
          </motion.p>

          <h1 id="gallery-title" className="gallery-hero-title">
            <span className="gallery-title-row">
              <motion.i
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                My little
              </motion.i>
            </span>
            <span className="gallery-title-row gallery-title-row-last">
              <motion.i
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.28, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >
                Gallery
              </motion.i>
            </span>
          </h1>

          <motion.div
            className="gallery-hero-intro"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 0.8 }}
          >
            <p>
              Step out of the noise. Enter a private collection where every
              masterpiece gets the space to be felt.
            </p>
            <button
              type="button"
              className="gallery-enter-button"
              onClick={enterGallery}
              onPointerEnter={() => setMagnetActive(true)}
              onPointerLeave={() => setMagnetActive(false)}
            >
              <span>Enter exhibition</span>
              <i aria-hidden="true">↓</i>
            </button>
          </motion.div>
        </div>

        <div className="gallery-hero-art" aria-hidden="true">
          <motion.figure
            className="gallery-frame gallery-frame-main"
            initial={{ opacity: 0, y: 90, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.35, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/wedding.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 55vw"
              className="object-cover"
            />
            <figcaption>
              <span>Masterwork No. 01</span>
              <span>Selected archive</span>
            </figcaption>
          </motion.figure>

          <motion.figure
            className="gallery-frame gallery-frame-left"
            initial={{ opacity: 0, x: 80, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.65, duration: 1 }}
          >
            <Image
              src="https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/girl.png"
              alt=""
              fill
              sizes="18vw"
              className="object-cover"
            />
          </motion.figure>

          <motion.figure
            className="gallery-frame gallery-frame-right"
            initial={{ opacity: 0, x: -70, y: 20, rotate: 8 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.78, duration: 1 }}
          >
            <Image
              src="https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/tiger.png"
              alt=""
              fill
              sizes="16vw"
              className="object-cover"
            />
          </motion.figure>
        </div>

        <motion.div
          className="gallery-hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 0.8 }}
        >
          <span>Furkan İlhan, curator</span>
          <span className="gallery-scroll-cue">
            <i /> Scroll to explore
          </span>
          <span>İstanbul · 2026</span>
        </motion.div>
      </section>
    </>
  );
}
