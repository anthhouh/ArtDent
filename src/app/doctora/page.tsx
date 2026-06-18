import Image from "next/image";
import { Check } from "lucide-react";

export default function DoctoraPage() {
  return (
    <main className="w-full">
      <section className="w-full py-24 bg-light-gray relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-[2rem] transform rotate-3 scale-105 transition-transform hover:rotate-6" />
                <div className="relative bg-white rounded-[2rem] shadow-premium overflow-hidden aspect-[4/5]">
                  <Image
                    src="/img-ana.png"
                    alt="Dra. Ana Ludeña – Especialista en Ortodoncia"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
                  Especialista en Ortodoncia
                </div>
                <h2 className="text-heading-lg text-anthracite mb-4">
                  Dra. Ana Ludeña
                </h2>
                <p className="text-body-lg text-dark-gray text-justify">
                  "descripcion de la doctora."
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "desc 1",
                  "desc 2",
                  "desc 3",
                  "desc 4",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-body-md text-anthracite font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
