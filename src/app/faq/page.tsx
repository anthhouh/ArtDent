"use client";

import { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqs = [
    {
      q: "¿Duele ponerse brackets?",
      a: "La colocación no duele en absoluto. Es normal sentir presión o ligera incomodidad los primeros 2-3 días mientras tus dientes se acostumbran, pero es totalmente tolerable y temporal.",
    },
    {
      q: "¿Cuánto dura un tratamiento promedio?",
      a: "Depende de la complejidad de cada caso. Los tratamientos sencillos pueden tomar 12 meses, mientras que casos más complejos suelen durar entre 18 y 24 meses. Te daremos un estimado exacto en tu consulta de valoración.",
    },
    {
      q: "¿Puedo comer de todo con brackets?",
      a: "Deberás evitar alimentos muy duros (como hielo o nueces) y pegajosos (como chicles o caramelos) que puedan despegar los brackets. Si usas alineadores invisibles, te los quitas para comer, así que no hay restricciones.",
    },
    {
      q: "¿Aceptan seguros o tienen planes de pago?",
      a: "Sí, contamos con planes de financiamiento a meses sin intereses y mensualidades accesibles durante tu tratamiento.",
    },
    {
      q: "¿Cada cuánto debo ir a consulta?",
      a: "Generalmente, las citas de ajuste son cada 4 a 6 semanas para brackets tradicionales. Para alineadores invisibles, las revisiones pueden ser cada 6 a 8 semanas.",
    },
  ];

  return (
    <main className="w-full">
      <section className="w-full py-24 bg-light-gray">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-4 h-4" />
              Dudas Comunes
            </div>
            <h1 className="text-heading-lg text-anthracite mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-body-lg text-dark-gray">
              Resolvemos tus inquietudes para que tomes la mejor decisión con total tranquilidad.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-light-gray overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-heading-sm text-anthracite">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-light-gray flex items-center justify-center flex-shrink-0 transition-transform ${
                      openFaq === faq.q ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-dark-gray" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.q ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 pt-0 text-body-md text-dark-gray">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
