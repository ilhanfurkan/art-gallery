"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/llhanfurkan/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/furkan-ilhan/",
  },
  { label: "X / Twitter", href: "https://x.com/1Furkanilhan" },
];

export default function GalleryOutro() {
  const shouldReduceMotion = useReducedMotion();

  const returnToEntrance = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="gallery-outro" aria-labelledby="gallery-outro-title">
      <div className="gallery-outro-rule" aria-hidden="true">
        <span>The final room</span>
        <i />
        <span>End of collection · Vol. 01</span>
      </div>

      <div className="gallery-outro-main">
        <div className="gallery-outro-ghost" aria-hidden="true">
          FIN.
        </div>

        <motion.div
          className="gallery-outro-art"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.15,
            ease: [0.76, 0, 0.24, 1],
          }}
          aria-hidden="true"
        >
          <Image
            src="https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/death.jpg"
            alt=""
            fill
            sizes="(min-width: 900px) 56vw, 100vw"
            className="object-cover"
          />
          <div className="gallery-outro-art-shade" />
          <div className="gallery-outro-art-caption">
            <span>Jacques-Louis David</span>
            <span>The Death of Socrates, 1787</span>
          </div>
        </motion.div>

        <div className="gallery-outro-copy">
          <motion.p
            className="gallery-outro-kicker"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          >
            One last look
          </motion.p>

          <h2 id="gallery-outro-title" className="gallery-outro-title">
            <span>
              <motion.i
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Until the next
              </motion.i>
            </span>
            <span className="gallery-outro-title-accent">
              <motion.i
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.12,
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                masterpiece.
              </motion.i>
            </span>
          </h2>

          <motion.div
            className="gallery-outro-message"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.35,
              duration: shouldReduceMotion ? 0 : 0.8,
            }}
          >
            <p>
              The collection ends here.
              <br />
              The looking doesn&apos;t.
            </p>

            <div className="gallery-outro-actions">
              <button type="button" onClick={returnToEntrance}>
                <span>Return to entrance</span>
                <i aria-hidden="true">↑</i>
              </button>
              <a
                href="https://www.furkanilhan.org/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit portfolio</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="gallery-outro-seal"
          initial={{ opacity: 0, rotate: -18, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.65,
            duration: shouldReduceMotion ? 0 : 0.8,
          }}
          aria-hidden="true"
        >
          <span>Thank you</span>
          <strong>FI</strong>
          <span>For looking</span>
        </motion.div>
      </div>

      <footer className="gallery-outro-footer">
        <div className="gallery-outro-credit">
          <small>Curated by</small>
          <span>Furkan İlhan</span>
        </div>

        <div className="gallery-outro-credit">
          <small>Edition</small>
          <span>Digital exhibition · 2026</span>
        </div>

        <div className="gallery-outro-socials" aria-label="Social links">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
