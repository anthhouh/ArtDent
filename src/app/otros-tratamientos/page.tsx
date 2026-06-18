"use client";

import { useState } from "react";
import { Stethoscope, ChevronDown, MessageCircle } from "lucide-react";
import TreatmentCalculator from "@/components/TreatmentCalculator";

const treatments = [
  {
    title: "Limpieza Dental",
    desc: "Eliminación profesional del sarro y placa bacteriana que no se puede eliminar con el cepillado diario.",
    icon: "",
    details: "Incluye pulido dental y aplicación de flúor. Recomendada cada 6 meses para mantener una salud bucal óptima.",
    time: "45 - 60 min",
  },
  {
    title: "Aclaramiento Dental",
    desc: "Tratamiento estético para blanquear y aclarar el tono natural de tus dientes de forma segura y efectiva.",
    icon: "",
    details: "Disponible en modalidad en clínica (resultado inmediato) o con cubetas personalizadas para usar en casa.",
    time: "1 - 3 sesiones",
  },
  {
    title: "Rehabilitación Oral",
    desc: "Restauración completa de la función y estética de tu boca mediante una combinación de tratamientos integrales.",
    icon: "",
    details: "Incluye prótesis, implantes, carillas, coronas y cualquier tratamiento necesario para recuperar tu sonrisa completa.",
    time: "Variable",
  },
  {
    title: "Cirugía de Terceros Molares",
    desc: "Extracción profesional de las muelas del juicio impactadas o que no tienen espacio suficiente para erupcionar.",
    icon: "",
    details: "Procedimiento realizado bajo anestesia local. Evita infecciones, dolor y daño a dientes adyacentes.",
    time: "30 - 60 min",
  },
  {
    title: "Endodoncia",
    desc: "Tratamiento para salvar dientes con infección o daño en la pulpa dental, eliminando el dolor de raíz.",
    icon: "",
    details: "Se elimina la pulpa dañada, se desinfecta el conducto y se sella herméticamente. Permite conservar el diente natural.",
    time: "1 - 2 sesiones",
  },
];

export default function OtrosTratamientosPage() {
  const [activeTreatment, setActiveTreatment] = useState<string | null>(null);

  return (
    <main className="w-full">
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <Stethoscope className="w-4 h-4" />
              Salud Bucal Integral
            </div>
            <h1 className="text-heading-lg text-anthracite mb-4">
              Otros Tratamientos
            </h1>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Más allá de la ortodoncia, ofrecemos una gama completa de servicios dentales para cuidar tu salud bucal
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
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-[#EAEAEA] flex items-center justify-center relative border-b border-white">
                  <div className="absolute top-4 left-4 text-4xl">{t.icon}</div>
                  <div className="text-center text-dark-gray/40">
                    <div className="text-3xl mb-2">📸</div>
                    <span className="text-body-sm font-medium">Imagen del Tratamiento</span>
                  </div>
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
