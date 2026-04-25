"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reservations", href: "#visit" },
];

export default function MobileNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonTone = tone === "dark" ? "text-cream" : "text-burgundy";

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${buttonTone}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-down panel */}
      <div
        className={`fixed top-[65px] left-0 right-0 bg-cream/98 backdrop-blur-md border-b border-gold/20 shadow-xl z-50 transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="py-3 text-sm font-medium tracking-wide uppercase text-espresso-light hover:text-burgundy transition-colors border-b border-gold/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9204327286"
            onClick={handleLinkClick}
            className="mt-3 bg-burgundy text-white px-5 py-3 rounded text-sm font-medium tracking-wide text-center hover:opacity-90 transition-opacity"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </div>
  );
}
