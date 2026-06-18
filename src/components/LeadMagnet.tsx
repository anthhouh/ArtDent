"use client";

import { useState } from "react";
import { X, Download, CheckCircle, BookOpen, Loader2 } from "lucide-react";

type LeadMagnetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Ingresa un correo válido";
    if (!form.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("loading");
    // Simulate saving data (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1500));
    setStep("success");
  }

  function handleDownload() {
    // Creates a simple text-based PDF placeholder.
    // Replace the href with your actual hosted PDF URL.
    const link = document.createElement("a");
    link.href = "/guia-brackets.pdf";
    link.download = "Guia-Todo-Lo-Que-Debes-Saber-Antes-De-Ponerte-Brackets.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leadmagnet-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-anthracite/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-3xl shadow-premium w-full max-w-lg overflow-hidden animate-slideUp">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-anthracite via-gold to-anthracite" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-light-gray hover:bg-gold/10 hover:text-gold transition-colors text-dark-gray"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 md:p-10">
          {step === "form" && (
            <>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="text-body-sm text-dark-gray font-medium">Descarga Gratuita</p>
                  <h2 id="leadmagnet-title" className="text-heading-sm text-anthracite leading-tight">
                    Todo lo que debes saber antes de ponerte brackets
                  </h2>
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-8">
                {[
                  "Tipos de brackets y cuál es mejor para ti",
                  "Cuánto dura el tratamiento realmente",
                  "Cómo cuidar tus brackets día a día",
                  "Costos y planes de pago disponibles",
                  "Mitos sobre la ortodoncia, ¡desmentidos!",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-dark-gray">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-body-sm font-semibold text-anthracite mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-3 rounded-xl border text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition ${
                      errors.nombre ? "border-red-400 bg-red-50" : "border-border bg-light-gray"
                    }`}
                  />
                  {errors.nombre && <p className="text-red-500 text-body-sm mt-1">{errors.nombre}</p>}
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-anthracite mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className={`w-full px-4 py-3 rounded-xl border text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition ${
                      errors.email ? "border-red-400 bg-red-50" : "border-border bg-light-gray"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-body-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-anthracite mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    placeholder="Tu número de teléfono"
                    className={`w-full px-4 py-3 rounded-xl border text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition ${
                      errors.telefono ? "border-red-400 bg-red-50" : "border-border bg-light-gray"
                    }`}
                  />
                  {errors.telefono && <p className="text-red-500 text-body-sm mt-1">{errors.telefono}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-soft flex items-center gap-2 justify-center"
                >
                  <Download className="w-5 h-5" />
                  Quiero mi guía gratuita
                </button>

                <p className="text-body-sm text-dark-gray/50 text-center">
                  🔒 Tus datos están seguros. No spam, jamás.
                </p>
              </form>
            </>
          )}

          {step === "loading" && (
            <div className="text-center py-12">
              <Loader2 className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
              <p className="text-body-lg font-semibold text-anthracite">Preparando tu guía...</p>
              <p className="text-body-sm text-dark-gray mt-2">Un momento por favor</p>
            </div>
          )}

          {step === "success" && (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-heading-sm text-anthracite mb-2">¡Ya casi es tuya!</h3>
              <p className="text-body-lg text-dark-gray mb-8">
                Tu guía gratuita está lista. Haz clic en el botón para descargarla ahora mismo.
              </p>
              <button
                onClick={handleDownload}
                className="w-full py-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-soft flex items-center gap-2 justify-center mb-4"
              >
                <Download className="w-5 h-5" />
                Descargar guía gratuita (PDF)
              </button>
              <button
                onClick={onClose}
                className="text-body-sm text-dark-gray/50 hover:text-dark-gray transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Banner flotante para llamar la atención ─────────────────────────────────
export function LeadMagnetBanner({ onOpen }: { onOpen: () => void }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-xs bg-white rounded-2xl shadow-premium border border-gold/20 overflow-hidden animate-slideUp hidden md:block">
      <div className="h-1 w-full bg-gradient-to-r from-gold to-anthracite" />
      <div className="p-5">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-dark-gray/40 hover:text-dark-gray transition-colors"
          aria-label="Cerrar banner"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">📖</span>
          <div>
            <p className="text-body-sm font-bold text-anthracite">Guía Gratuita</p>
            <p className="text-body-sm text-dark-gray/70">Todo sobre brackets</p>
          </div>
        </div>
        <button
          onClick={onOpen}
          className="w-full py-2.5 bg-gold text-white text-body-sm font-semibold rounded-xl hover:bg-gold/90 transition-all"
        >
          Descargar gratis →
        </button>
      </div>
    </div>
  );
}
