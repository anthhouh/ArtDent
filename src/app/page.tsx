import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-light-gray rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8 animate-slideUp pt-20 lg:pt-0">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full border border-gold/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Clínica de Especialidades Odontológicas
            </div>
            
            <h1 className="text-display font-bold text-anthracite leading-tight">
              Transformamos sonrisas con <span className="text-gold">tecnología</span> avanzada.
            </h1>
            
            <p className="text-body-lg text-dark-gray max-w-lg">
              Ortodoncia invisible, brackets estéticos y diseño de sonrisa con los más altos estándares de calidad y confort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-anthracite text-white font-semibold rounded-xl hover:bg-gold hover:shadow-premium transition-all group"
              >
                <Calendar className="w-5 h-5" />
                Agendar Cita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tratamientos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-border text-anthracite font-semibold rounded-xl hover:bg-light-gray transition-all"
              >
                Ver Tratamientos
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border grid grid-cols-3 gap-4">
              <div>
                <p className="text-heading-sm font-bold text-anthracite">+15</p>
                <p className="text-xs text-dark-gray uppercase font-semibold">Años de Exp.</p>
              </div>
              <div>
                <p className="text-heading-sm font-bold text-anthracite">5k+</p>
                <p className="text-xs text-dark-gray uppercase font-semibold">Sonrisas Felices</p>
              </div>
              <div>
                <p className="text-heading-sm font-bold text-anthracite">Top</p>
                <p className="text-xs text-dark-gray uppercase font-semibold">Hola</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-premium animate-fadeIn animate-delay-200">
            <Image
              src="/FotoInicio.png"
              alt="Clínica Art Dent - Sonrisas transformadas"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── QUICK SUMMARY LINKS ────────────────────────────────────────────── */}
      <section className="w-full py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-anthracite mb-4">
              Descubre lo que ofrecemos
            </h2>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Todo lo que necesitas para tu salud y estética dental en un solo lugar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Nuestra Experiencia", desc: "Conoce a la Doctora", link: "/doctora", icon: "👩‍⚕️" },
              { title: "Soluciones", desc: "Ver Tratamientos", link: "/tratamientos", icon: "🦷" },
              { title: "Resultados Reales", desc: "Casos de Éxito", link: "/casos-de-exito", icon: "✨" },
              { title: "Reseñas", desc: "Leer Testimonios", link: "/testimonios", icon: "⭐" },
            ].map((item, idx) => (
              <Link href={item.link} key={idx} className="bg-white p-8 rounded-2xl shadow-subtle hover:shadow-soft transition-all group block text-center border border-transparent hover:border-gold/20">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-heading-sm text-anthracite mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-body-sm text-dark-gray flex items-center justify-center gap-1 group-hover:underline">
                  {item.desc}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
