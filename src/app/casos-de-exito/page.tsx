import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { Award, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito | ArtDent – Resultados Reales",
  description:
    "Galería de transformaciones reales de nuestros pacientes. Casos de ortodoncia antes y después, autorizados por cada paciente.",
};

const CASES_QUERY = `*[_type == "successCase" && authorized == true] | order(_createdAt desc) {
  _id, patientName, treatment, duration, problem, result,
  "beforeUrl": beforeImage.asset->url,
  "afterUrl": afterImage.asset->url
}`;

type SuccessCase = {
  _id: string;
  patientName: string;
  treatment: string;
  duration: string;
  problem: string;
  result: string;
  beforeUrl: string | null;
  afterUrl: string | null;
};

const fallbackCases: SuccessCase[] = [
  {
    _id: "1",
    patientName: "María G.",
    treatment: "Brackets Estéticos",
    duration: "18 meses",
    problem: "Apiñamiento severo en dientes frontales",
    result: "Sonrisa perfectamente alineada y simétrica",
    beforeUrl: "/images/casos-de-exito/caso1-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso1-despues.jpg",
  },
  {
    _id: "2",
    patientName: "Carlos M.",
    treatment: "Alineadores Invisibles",
    duration: "14 meses",
    problem: "Mordida cruzada posterior",
    result: "Mordida corregida, oclusión equilibrada",
    beforeUrl: "/images/casos-de-exito/caso2-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso2-despues.jpg",
  },
  {
    _id: "3",
    patientName: "Sofía R.",
    treatment: "Ortodoncia Infantil",
    duration: "12 meses",
    problem: "Dientes de leche mal posicionados",
    result: "Guía de crecimiento exitosa, dientes permanentes en posición ideal",
    beforeUrl: "/images/casos-de-exito/caso3-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso3-despues.jpg",
  },
  {
    _id: "4",
    patientName: "Luis P.",
    treatment: "Brackets Metálicos",
    duration: "22 meses",
    problem: "Espaciado pronunciado y overjet",
    result: "Cierre de espacios completo y perfil corregido",
    beforeUrl: "/images/casos-de-exito/caso4-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso4-despues.jpg",
  },
  {
    _id: "5",
    patientName: "Ana L.",
    treatment: "Ortodoncia para Adultos",
    duration: "20 meses",
    problem: "Recidiva ortodóntica (tratamiento previo sin retenedor)",
    result: "Corrección completa y plan de retención permanente",
    beforeUrl: "/images/casos-de-exito/caso5-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso5-despues.jpg",
  },
  {
    _id: "6",
    patientName: "Diego F.",
    treatment: "Brackets Estéticos",
    duration: "16 meses",
    problem: "Caninos incluidos y apiñamiento",
    result: "Erupción guiada exitosa, arco dental completo",
    beforeUrl: "/images/casos-de-exito/caso6-antes.jpg",
    afterUrl: "/images/casos-de-exito/caso6-despues.jpg",
  },
];

import CasesGallery from "@/components/CasesGallery";

export default async function CasosPage() {
  let cases: SuccessCase[] = [];

  try {
    const data = await sanityFetch<SuccessCase[]>(CASES_QUERY);
    cases = data?.length ? data : fallbackCases;
  } catch {
    cases = fallbackCases;
  }

  return (
    <main className="w-full">
      {/* Header */}
      <section className="w-full py-20 bg-anthracite text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            Resultados Reales
          </div>
          <h1 className="text-display-md text-white mb-4">
            Transformaciones de Sonrisa
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            Cada caso es único. Aquí compartimos algunas de las transformaciones
            de nuestros pacientes, publicadas con su autorización expresa.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="w-full bg-gold/5 border-b border-gold/10 py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
          <p className="text-body-sm text-dark-gray">
            <span className="font-semibold">Aviso:</span> Todos los casos han
            sido publicados con el consentimiento escrito del paciente. Los
            resultados pueden variar según cada caso.
          </p>
        </div>
      </div>

      {/* Cases Gallery */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CasesGallery cases={cases.map(c => ({
            id: c._id,
            patientName: c.patientName,
            treatment: c.treatment,
            duration: c.duration,
            problem: c.problem,
            result: c.result,
            beforeUrl: c.beforeUrl || undefined,
            afterUrl: c.afterUrl || undefined
          }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-light-gray">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-heading-md text-anthracite mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-body-lg text-dark-gray mb-8">
            Agenda tu consulta inicial gratuita y demos el primer paso juntos.
          </p>
          <a
            href="/#contacto"
            className="px-10 py-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-soft inline-flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            Agendar Consulta Gratis
          </a>
        </div>
      </section>
    </main>
  );
}
