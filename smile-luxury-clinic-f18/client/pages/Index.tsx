import { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Star, Check } from "lucide-react";

export default function Index() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const treatments = [
    { title: "Clear Aligners", description: "Virtually invisible orthodontic treatment for a straighter smile" },
    { title: "Traditional Braces", description: "Effective and reliable solution for complex alignment issues" },
    { title: "Lingual Braces", description: "Hidden braces placed on the back of your teeth for discretion" },
    { title: "Retainers", description: "Maintain your beautiful smile after treatment completion" },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      text: "Dr. Smith's expertise and attention to detail transformed my smile. The entire experience was professional and comfortable.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Business Executive",
      text: "I was skeptical about getting braces, but the clear aligners were perfect for my lifestyle. Highly recommend this clinic.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      text: "The team made me feel welcome from day one. The treatment exceeded my expectations, and the results are incredible.",
      rating: 5,
    },
  ];

  const beforeAfter = [
    { before: "Patient 1 - Case Study", after: "Complete transformation" },
    { before: "Patient 2 - Case Study", after: "Aligned bite correction" },
    { before: "Patient 3 - Case Study", after: "Crowding resolution" },
  ];

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-display font-bold text-anthracite">Smile Perfected</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-body-md text-dark-gray hover:text-gold transition-colors">About</a>
            <a href="#treatments" className="text-body-md text-dark-gray hover:text-gold transition-colors">Treatments</a>
            <a href="#results" className="text-body-md text-dark-gray hover:text-gold transition-colors">Results</a>
            <a href="#testimonials" className="text-body-md text-dark-gray hover:text-gold transition-colors">Testimonials</a>
            <a href="#contact" className="text-body-md text-dark-gray hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeIn">
              <h1 className="text-display-lg text-anthracite leading-tight">
                Your Perfect Smile Awaits
              </h1>
              <p className="text-body-lg text-dark-gray max-w-lg">
                Experience world-class orthodontic care in a modern, sophisticated environment. Dr. Sarah Smith specializes in creating beautiful, healthy smiles with precision and artistry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gold text-anthracite font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-subtle">
                  Book Consultation
                </button>
                <button className="px-8 py-4 border-2 border-anthracite text-anthracite font-semibold rounded-xl hover:bg-light-gray transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-light-gray to-light-gray rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-dark-gray">
                  <div className="text-6xl mb-4">👨‍⚕️</div>
                  <p className="text-body-md">Orthodontist Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Doctor */}
      <section id="about" className="w-full py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-96 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-soft">
              <div className="text-center text-dark-gray">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-body-md">Professional Credentials</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-heading-lg text-anthracite">About Dr. Sarah Smith</h2>
              <p className="text-body-lg text-dark-gray">
                With over 15 years of experience in orthodontics, Dr. Smith has transformed thousands of smiles. She graduated from the University of California Dental School and completed her orthodontic residency at Boston University.
              </p>
              <p className="text-body-lg text-dark-gray">
                Specializing in clear aligner therapy and advanced bracket techniques, Dr. Smith combines cutting-edge technology with personalized care to deliver exceptional results for each patient.
              </p>
              <div className="space-y-3 pt-6">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="text-body-md text-dark-gray">Board-certified orthodontist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="text-body-md text-dark-gray">Advanced training in cosmetic orthodontics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="text-body-md text-dark-gray">Published research in orthodontic innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-anthracite mb-4">Advanced Treatment Options</h2>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              We offer the latest orthodontic treatments tailored to your unique needs and lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, idx) => (
              <div
                key={idx}
                onClick={() => setActiveAccordion(activeAccordion === treatment.title ? null : treatment.title)}
                className="bg-light-gray rounded-2xl p-8 cursor-pointer hover:shadow-soft transition-shadow group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-heading-sm text-anthracite mb-2">{treatment.title}</h3>
                    <p className="text-body-md text-dark-gray">{treatment.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold ml-4 mt-1 transition-transform ${
                      activeAccordion === treatment.title ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeAccordion === treatment.title && (
                  <div className="mt-4 pt-4 border-t border-light-gray">
                    <p className="text-body-md text-dark-gray">
                      This treatment option provides comprehensive orthodontic correction with the latest technology and techniques for optimal results.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section id="results" className="w-full py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-anthracite mb-4">Smile Transformations</h2>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Real results from our valued patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="bg-light-gray aspect-square flex items-center justify-center border-r border-light-gray">
                    <div className="text-center text-dark-gray">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-body-sm">{item.before}</p>
                    </div>
                  </div>
                  <div className="bg-light-gray aspect-square flex items-center justify-center">
                    <div className="text-center text-dark-gray">
                      <div className="text-4xl mb-2">✨</div>
                      <p className="text-body-sm">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-anthracite mb-4">What Our Patients Say</h2>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Trusted by hundreds of satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-light-gray rounded-2xl p-8 shadow-subtle hover:shadow-soft transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-body-md text-dark-gray mb-6">"{testimonial.text}"</p>
                <div className="border-t border-light-gray pt-4">
                  <p className="font-semibold text-anthracite">{testimonial.name}</p>
                  <p className="text-body-sm text-dark-gray">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="w-full py-24 bg-anthracite text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-heading-lg">Ready to Transform Your Smile?</h2>
          <p className="text-body-lg max-w-2xl mx-auto opacity-90">
            Schedule your complimentary consultation with Dr. Smith today. We'll discuss your goals and create a personalized treatment plan.
          </p>
          <button className="px-10 py-4 bg-gold text-anthracite font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-subtle inline-block">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="w-full py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading-lg text-anthracite text-center mb-16">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-subtle text-center">
              <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-heading-sm text-anthracite mb-2">Phone</h3>
              <p className="text-body-md text-dark-gray">(555) 123-4567</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-subtle text-center">
              <Mail className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-heading-sm text-anthracite mb-2">Email</h3>
              <p className="text-body-md text-dark-gray">hello@smileperfected.com</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-subtle text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-heading-sm text-anthracite mb-2">Location</h3>
              <p className="text-body-md text-dark-gray">123 Dental Plaza, San Francisco, CA 94105</p>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-2xl p-12 shadow-soft">
            <h3 className="text-heading-md text-anthracite mb-6">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-body-md text-dark-gray mb-2"><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p className="text-body-md text-dark-gray mb-2"><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p className="text-body-md text-dark-gray"><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
              <div className="md:text-right">
                <p className="text-body-md text-dark-gray mb-2"><span className="font-semibold">Emergency:</span> (555) 123-4568</p>
                <p className="text-body-md text-dark-gray"><span className="font-semibold">Fax:</span> (555) 123-4569</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-anthracite text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-body-md opacity-75">
            © 2024 Smile Perfected. All rights reserved. Dr. Sarah Smith, D.D.S., M.S.D.
          </p>
        </div>
      </footer>
    </div>
  );
}
