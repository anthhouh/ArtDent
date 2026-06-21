"use client";

import { MessageCircle, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5h18v14H3V5zm0 1l9 7 9-7" />
  </svg>
);

export default function ContactoPage() {
  return (
    <main className="w-full">
      <section className="w-full py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              Estamos Cerca de Ti
            </div>
            <h1 className="text-heading-lg text-anthracite mb-4">
              Agenda tu Valoración
            </h1>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Da el primer paso hacia la sonrisa de tus sueños. Contáctanos hoy mismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: null,
                title: "Redes Sociales",
                info: "",
                socials: [
                  { icon: <InstagramIcon />, href: "https://www.instagram.com/artdent_ortodoncia?igsh=MXY0OW9mczQ5a3lrYg%3D%3D&utm_source=qr" },
                  { icon: <FacebookIcon />, href: "https://www.facebook.com/share/1E26g7Bsaf/?mibextid=wwXIfr" },
                  { icon: <GmailIcon />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=artdentodontologia.08@gmail.com" },
                ],
              },
              { icon: <MessageCircle className="w-10 h-10 text-gold" />, title: "WhatsApp", info: "+593 992 216 377" },
              { 
                icon: <MapPin className="w-10 h-10 text-gold" />, 
                title: "Dirección", 
                info: "Av. Principal #123, Ciudad",
                action: {
                  label: "Ver en Google Maps",
                  href: "https://maps.app.goo.gl/L7iAL82CVaGGtXJZ9"
                }
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-light-gray rounded-2xl p-8 shadow-subtle flex flex-col items-center text-center hover:shadow-soft transition-shadow"
              >
                {item.socials ? (
                  <>
                    <h3 className="text-heading-sm text-anthracite mb-6">{item.title}</h3>
                    <div className="flex items-center justify-center gap-6 flex-1">
                      {item.socials.map((social, sIdx) => (
                        <a
                          key={sIdx}
                          href={social.href || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-subtle text-anthracite hover:text-gold hover:shadow-soft transition-all"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-heading-sm text-anthracite mb-2">{item.title}</h3>
                    <p className="text-body-md text-dark-gray mb-4 flex-1">{item.info}</p>
                    {item.action && (
                      <a
                        href={item.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-anthracite !text-white text-sm font-semibold rounded-xl hover:bg-gold transition-colors mt-auto"
                      >
                        <MapPin className="w-4 h-4" />
                        {item.action.label}
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Appointment Form */}
          <div className="bg-light-gray rounded-2xl p-12 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-heading-md text-anthracite mb-8 text-center">
              Formulario de Cita
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get("nombre");
                const treatment = data.get("tratamiento");
                const message = data.get("mensaje");
                const waMsg = encodeURIComponent(
                  `Hola, soy ${name}. Me interesa información sobre: ${treatment}. ${message}`
                );
                window.open(`https://wa.me/593992216377?text=${waMsg}`, "_blank");
              }}
              className="space-y-6"
            >
                <div>
                  <label className="block text-body-sm font-semibold text-anthracite mb-2">
                    Nombre completo *
                  </label>
                  <input
                    name="nombre"
                    required
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-semibold text-anthracite mb-2">
                    Tratamiento de interés
                  </label>
                  <select
                    name="tratamiento"
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition"
                  >
                    <option value="">Selecciona un tratamiento</option>
                    <option value="Ortodoncia Invisible (Alineadores)">Ortodoncia Invisible (Alineadores)</option>
                    <option value="Brackets Estéticos (Cerámica/Zafiro)">Brackets Estéticos (Cerámica/Zafiro)</option>
                    <option value="Brackets Metálicos Convencionales">Brackets Metálicos Convencionales</option>
                    <option value="Ortodoncia Interceptiva (Infantil)">Ortodoncia Interceptiva (Infantil)</option>
                    <option value="Retenedores y Post-Tratamiento">Retenedores y Post-Tratamiento</option>
                    <option value="Diseño de Sonrisa Completo">Diseño de Sonrisa Completo</option>
                    <option value="Limpieza Dental">Limpieza Dental</option>
                    <option value="Aclaramiento Dental">Aclaramiento Dental</option>
                    <option value="Rehabilitación Oral">Rehabilitación Oral</option>
                    <option value="Cirugía de Terceros Molares">Cirugía de Terceros Molares</option>
                    <option value="Endodoncia">Endodoncia</option>
                    <option value="No lo sé aún, necesito orientación">No lo sé aún, necesito orientación</option>
                  </select>
                </div>
              <div>
                <label className="block text-body-sm font-semibold text-anthracite mb-2">
                  Mensaje / Motivo de consulta
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-gold/40 transition resize-none"
                  placeholder="Cuéntanos brevemente tu caso..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold !text-white font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-subtle hover:shadow-soft flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
