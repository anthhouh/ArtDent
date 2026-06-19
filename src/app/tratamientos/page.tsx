"use client";

import { useState } from "react";
import { Shield, ChevronDown, MessageCircle } from "lucide-react";
import TreatmentCalculator from "@/components/TreatmentCalculator";

const treatments = [
  {
    title: "Brackets Metálicos Autoligado",
    desc: "La opción más resistente, efectiva y económica. Ahora más pequeños y cómodos que nunca.",
    icon: "",
    image: "/images/tratamientos/metalicos-autoligado.jpg",
    details: "Recomendados para casos complejos y para niños/adolescentes. Permiten personalizar el color de las ligas.",
    time: "12 - 24 meses",
  },
  {
    title: "Brackets Metálicos Convencionales",
    desc: "La opción más resistente, efectiva y económica. Ahora más pequeños y cómodos que nunca.",
    icon: "",
    image: "/images/tratamientos/metalicos-convencionales.jpg",
    details: "Recomendados para casos complejos y para niños/adolescentes. Permiten personalizar el color de las ligas.",
    time: "12 - 24 meses",
  },
  {
    title: "Brackets Estéticos",
    desc: "La eficacia de los brackets tradicionales con una apariencia discreta que se camufla con el color natural de tu diente.",
    icon: "",
    image: "/images/tratamientos/esteticos.jpg",
    details: "No se manchan. Excelente opción para quienes buscan estética sin el costo de los alineadores.",
    time: "12 - 24 meses",
  },
  {
    title: "Ortodoncia Invisible (Alineadores)",
    desc: "Alineadores transparentes removibles, diseñados digitalmente para mover tus dientes con precisión sin que nadie lo note.",
    icon: "",
    image: "/images/tratamientos/alineadores.jpg",
    details: "Ideal para adultos y adolescentes. Se cambian cada 1-2 semanas. Permiten comer y cepillarse sin restricciones.",
    time: "6 - 18 meses",
  },
  {
    title: "Ortodoncia Interceptiva (Infantil)",
    desc: "Tratamiento preventivo para niños entre 6 y 11 años para guiar el crecimiento de los maxilares.",
    icon: "",
    image: "/images/tratamientos/infantil.jpg",
    details: "Previene problemas graves en el futuro, creando espacio para los dientes permanentes.",
    time: "6 - 12 meses",
  },
  {
    title: "Retenedores y Post-Tratamiento",
    desc: "Fase crucial para mantener tu nueva sonrisa de por vida tras finalizar la ortodoncia.",
    icon: "",
    image: "/images/tratamientos/retenedores.jpg",
    details: "Opciones de retenedores fijos (invisibles por detrás) o removibles transparentes.",
    time: "Uso continuo",
  },
  {
    title: "Diseño de Sonrisa Completo",
    desc: "Tratamiento integral combinando ortodoncia con blanqueamiento o carillas si es necesario.",
    icon: "",
    image: "/images/tratamientos/diseno-sonrisa.jpg",
    details: "Para pacientes que buscan la perfección estética absoluta al finalizar la alineación.",
    time: "Variable",
  },
];

export default function TratamientosPage() {
  const [activeTreatment, setActiveTreatment] = useState<string | null>(null);

  return (
    <main className="w-full">
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4" />
              Especialidad Principal
            </div>
            <h1 className="text-heading-lg text-anthracite mb-4">
              Tratamientos de Ortodoncia
            </h1>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Ofrecemos los tratamientos de ortodoncia más modernos adaptados a tus necesidades y estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveTreatment(t.title)}
                onMouseLeave={() => setActiveTreatment(null)}
                className="bg-light-gray rounded-2xl overflow-hidden cursor-default hover:shadow-soft transition-all group border border-transparent hover:border-gold/20 flex flex-col"
              >
                {/* Image Placeholder / Display */}
                <div className="w-full h-48 bg-[#EAEAEA] flex items-center justify-center relative border-b border-white overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute top-4 left-4 text-4xl">{t.icon}</div>
                      <div className="text-center text-dark-gray/40">
                        <div className="text-3xl mb-2">📸</div>
                        <span className="text-body-sm font-medium">Sube imagen: {t.image?.split('/').pop()}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-heading-sm text-anthracite group-hover:text-gold transition-colors pr-4">
                      {t.title}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full bg-white flex flex-shrink-0 items-center justify-center shadow-subtle transition-transform duration-300 ${
                        activeTreatment === t.title ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  
                  <p className="text-body-sm text-dark-gray leading-relaxed">
                    {t.desc}
                  </p>

                  {/* Acordeón expandible */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      activeTreatment === t.title ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-6 border-t border-dark-gray/10">
                        <p className="text-body-md text-dark-gray mb-4">{t.details}</p>
                        <div className="flex items-center gap-2 text-gold font-semibold text-sm mb-4">
                          <span>⏱️</span>
                          Duración estimada: {t.time}
                        </div>
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-white bg-gold px-4 py-3 rounded-xl hover:bg-gold/90 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Consultar por WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALCULADORA ────────────────────────────────────────── */}
      <TreatmentCalculator />
    </main>
  );
}
