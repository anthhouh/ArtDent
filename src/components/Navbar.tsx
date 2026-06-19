"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/doctora", label: "La Doctora" },
    { href: "/tratamientos", label: "Ortodoncia" },
    { href: "/otros-tratamientos", label: "Otros Tratamientos" },
    { href: "/casos-de-exito", label: "Casos de Éxito" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-light-gray"
            : "bg-white border-b border-light-gray"
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/Logo.png" alt="ArtDent Logo" width={180} height={60} className="h-14 w-auto object-contain" priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-sm font-medium text-dark-gray hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-body-sm font-semibold text-[#25D366] border border-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-anthracite !text-white text-body-sm font-semibold rounded-xl hover:bg-gold transition-all"
              >
                <Calendar className="w-4 h-4" />
                Agendar Cita
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden text-anthracite"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-anthracite/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-white shadow-premium flex flex-col pt-20 px-6 pb-8 transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Drawer */}
        <button
          className="absolute top-6 right-6 text-dark-gray p-2 hover:bg-light-gray rounded-full transition-colors"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-6 mt-8 overflow-y-auto">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-lg font-semibold text-anthracite hover:text-gold transition-colors border-b border-light-gray pb-4"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="mt-auto pt-8 flex flex-col gap-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-[#25D366]/10 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="/contacto"
            className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gold !text-white font-semibold rounded-xl text-center hover:bg-gold/90 shadow-soft transition-all"
            onClick={() => setMobileOpen(false)}
          >
            <Calendar className="w-5 h-5" />
            Agendar Cita
          </a>
        </div>
      </div>
    </>
  );
}
