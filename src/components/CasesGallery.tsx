"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Award, Clock, ZoomIn } from "lucide-react";

type Case = {
  id: string;
  patientName: string;
  treatment: string;
  duration: string;
  problem: string;
  result: string;
  beforeUrl?: string | null;
  afterUrl?: string | null;
  // For demo: span size in masonry grid
  span?: "normal" | "wide" | "tall";
};

type GalleryProps = {
  cases: Case[];
};

export default function CasesGallery({ cases }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = (idx: number) => {
    setSelected(idx);
    setActiveTab("after");
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    setSelected(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    if (selected === null) return;
    setSelected((selected - 1 + cases.length) % cases.length);
    setActiveTab("after");
  }, [selected, cases.length]);

  const next = useCallback(() => {
    if (selected === null) return;
    setSelected((selected + 1) % cases.length);
    setActiveTab("after");
  }, [selected, cases.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, prev, next]);

  const current = selected !== null ? cases[selected] : null;

  // Assign alternating spans for masonry feel
  const spans = ["normal", "wide", "normal", "tall", "normal", "wide"] as const;

  return (
    <>
      {/* ── Masonry Grid ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {cases.map((c, idx) => (
          <div
            key={c.id}
            className="break-inside-avoid relative group cursor-zoom-in overflow-hidden rounded-2xl bg-light-gray shadow-subtle hover:shadow-premium transition-all duration-300"
            onClick={() => open(idx)}
          >
            {/* Image area */}
            <div
              className={`relative w-full ${
                spans[idx % spans.length] === "tall"
                  ? "h-80"
                  : spans[idx % spans.length] === "wide"
                  ? "h-52"
                  : "h-64"
              } overflow-hidden`}
            >
              {/* Split before/after */}
              <div className="grid grid-cols-2 h-full">
                <div className="relative bg-light-gray flex items-center justify-center border-r border-white">
                  {c.beforeUrl ? (
                    <img
                      src={c.beforeUrl}
                      alt={`Antes – ${c.patientName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl">📸</div>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 bg-dark-gray/80 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    ANTES
                  </span>
                </div>
                <div className="relative bg-light-gray flex items-center justify-center">
                  {c.afterUrl ? (
                    <img
                      src={c.afterUrl}
                      alt={`Después – ${c.patientName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl">✨</div>
                    </div>
                  )}
                  <span className="absolute top-2 right-2 bg-gold text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    DESPUÉS
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gold font-semibold text-body-sm flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  {c.treatment}
                </span>
                <span className="text-dark-gray/50 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {c.duration}
                </span>
              </div>
              <p className="text-body-sm text-dark-gray line-clamp-1">{c.problem}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {current && selected !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-anthracite/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={close}
        >
          {/* Close */}
          <button
            style={{ color: "#FFFFFF" }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={close}
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            style={{ color: "#FFFFFF" }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            style={{ color: "#FFFFFF" }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-premium"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tab switcher */}
            <div className="flex border-b border-light-gray">
              <button
                style={{ color: activeTab === "after" ? "#C8A96B" : "#3A3A3A" }}
                className={`flex-1 py-4 text-body-md font-semibold transition-all ${
                  activeTab === "after"
                    ? "border-b-2 border-gold bg-gold/5"
                    : "hover:bg-light-gray"
                }`}
                onClick={() => setActiveTab("after")}
              >
                ✨ Después
              </button>
              <button
                style={{ color: activeTab === "before" ? "#C8A96B" : "#3A3A3A" }}
                className={`flex-1 py-4 text-body-md font-semibold transition-all ${
                  activeTab === "before"
                    ? "border-b-2 border-gold bg-gold/5"
                    : "hover:bg-light-gray"
                }`}
                onClick={() => setActiveTab("before")}
              >
                📸 Antes
              </button>
            </div>

            {/* Image */}
            <div className="h-80 md:h-[440px] bg-light-gray flex items-center justify-center relative">
              {activeTab === "after" ? (
                current.afterUrl ? (
                  <img
                    src={current.afterUrl}
                    alt={`Después – ${current.patientName}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center space-y-3">
                    <div className="text-8xl">✨</div>
                    <p className="text-body-md text-dark-gray">Foto Después</p>
                  </div>
                )
              ) : current.beforeUrl ? (
                <img
                  src={current.beforeUrl}
                  alt={`Antes – ${current.patientName}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center space-y-3">
                  <div className="text-8xl">📸</div>
                  <p className="text-body-md text-dark-gray">Foto Antes</p>
                </div>
              )}

              {/* Counter badge */}
              <div className="absolute bottom-4 right-4 bg-anthracite/70 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {selected + 1} / {cases.length}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="font-bold text-anthracite text-body-lg">{current.treatment}</span>
                </div>
                <p className="text-body-sm text-dark-gray">
                  <span className="font-semibold text-anthracite">Paciente:</span> {current.patientName}
                </p>
                <p className="text-body-sm text-dark-gray">
                  <span className="font-semibold text-anthracite">Duración:</span> {current.duration}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-body-sm text-dark-gray">
                  <span className="font-semibold text-anthracite">Problema corregido:</span>{" "}
                  {current.problem}
                </p>
                <p className="text-body-sm text-dark-gray">
                  <span className="font-semibold text-anthracite">Resultado:</span>{" "}
                  {current.result}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <a
                href={`https://wa.me/593992216377?text=${encodeURIComponent(`Hola, vi el caso de ${current.treatment} y me gustaría agendar una consulta.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFFFFF" }}
                className="w-full py-3.5 bg-gold font-semibold rounded-xl hover:bg-gold/90 transition-all flex items-center gap-2 justify-center text-body-md"
              >
                <Award className="w-5 h-5" />
                Quiero un resultado como este
              </a>
            </div>
          </div>

          {/* Keyboard hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs">
            ← → para navegar · ESC para cerrar
          </p>
        </div>,
        document.body
      )}
    </>
  );
}
