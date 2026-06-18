"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Check, MessageCircle, RotateCcw } from "lucide-react";

type Step = {
  id: string;
  question: string;
  options: { label: string; value: string; icon: string }[];
};

const steps: Step[] = [
  {
    id: "age",
    question: "¿Cuál es tu rango de edad?",
    options: [
      { label: "Niño (6-12 años)", value: "child", icon: "🧒" },
      { label: "Adolescente (13-17)", value: "teen", icon: "🧑" },
      { label: "Adulto (18-40)", value: "adult", icon: "👨" },
      { label: "Mayor de 40", value: "senior", icon: "👴" },
    ],
  },
  {
    id: "problem",
    question: "¿Cuál es tu principal problema?",
    options: [
      { label: "Dientes torcidos", value: "crooked", icon: "〰️" },
      { label: "Espacios entre dientes", value: "gaps", icon: "↔️" },
      { label: "Mordida incorrecta", value: "bite", icon: "🦷" },
      { label: "No lo sé bien", value: "unsure", icon: "🤷" },
    ],
  },
  {
    id: "aesthetic",
    question: "¿Qué tan importante es la discreción?",
    options: [
      { label: "Muy importante, quiero algo invisible", value: "invisible", icon: "👻" },
      { label: "Importante, pero no imprescindible", value: "moderate", icon: "😊" },
      { label: "No me importa, quiero el más efectivo", value: "notImportant", icon: "💪" },
    ],
  },
  {
    id: "budget",
    question: "¿Cuál es tu prioridad al elegir?",
    options: [
      { label: "Precio más accesible", value: "budget", icon: "💰" },
      { label: "Mejor relación calidad-precio", value: "balance", icon: "⚖️" },
      { label: "La mejor opción, sin importar el costo", value: "premium", icon: "⭐" },
    ],
  },
];

type Answers = Record<string, string>;

function getRecommendation(answers: Answers) {
  const { age, aesthetic, budget } = answers;

  if (age === "child") {
    return {
      title: "Ortodoncia Infantil",
      description:
        "Para tu edad, la ortodoncia interceptiva es la opción ideal. Aprovecharemos el crecimiento para guiar tus dientes y mandíbula a su posición correcta, evitando tratamientos más complejos en el futuro.",
      duration: "6 – 18 meses",
      badge: "Recomendado para niños",
      color: "text-blue-500",
    };
  }

  if (aesthetic === "invisible" || (aesthetic === "moderate" && budget === "premium")) {
    return {
      title: "Ortodoncia Invisible (Alineadores)",
      description:
        "Los alineadores transparentes son perfectos para ti. Son prácticamente invisibles, cómodos, removibles y diseñados digitalmente a medida. Transforma tu sonrisa sin que nadie lo note.",
      duration: "6 – 18 meses",
      badge: "Más discreto",
      color: "text-purple-500",
    };
  }

  if (aesthetic === "moderate" && budget === "balance") {
    return {
      title: "Brackets Estéticos",
      description:
        "Los brackets de cerámica ofrecen la efectividad de los brackets metálicos con una apariencia mucho más discreta. Se camuflan con el color de tus dientes, siendo casi invisibles a simple vista.",
      duration: "12 – 24 meses",
      badge: "Mejor equilibrio",
      color: "text-gold",
    };
  }

  if (aesthetic === "notImportant" || budget === "budget") {
    return {
      title: "Brackets Metálicos",
      description:
        "Los brackets metálicos son la opción más efectiva y accesible. Con la tecnología actual son más pequeños y cómodos que nunca. La solución más rápida y eficiente para lograr tu sonrisa perfecta.",
      duration: "12 – 24 meses",
      badge: "Más efectivo",
      color: "text-anthracite",
    };
  }

  return {
    title: "Consulta Personalizada",
    description:
      "Tu caso es único. Te recomendamos agendar una consulta gratuita para que podamos evaluar tu situación y diseñar el plan de tratamiento perfecto para ti.",
    duration: "A determinar en consulta",
    badge: "Evaluación gratuita",
    color: "text-gold",
  };
}

export default function TreatmentCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  function handleSelect(value: string) {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setFinished(true);
      }
    }, 200);
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  function handleReset() {
    setCurrentStep(0);
    setAnswers({});
    setFinished(false);
  }

  const recommendation = finished ? getRecommendation(answers) : null;

  return (
    <section id="calculadora" className="w-full py-24 bg-anthracite text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🦷 Calculadora de Tratamiento
          </div>
          <h2 className="text-heading-lg text-white mb-3">
            ¿Qué tratamiento es para ti?
          </h2>
          <p className="text-body-lg text-white/70">
            Responde 4 preguntas rápidas y te recomendaremos la mejor opción.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          {!finished ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-body-sm text-white/50 mb-2">
                  <span>Pregunta {currentStep + 1} de {steps.length}</span>
                  <span>{Math.round(progress)}% completado</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div
                    className="bg-gold h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-heading-sm text-white mb-8 text-center">
                {step.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {step.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all hover:border-gold hover:bg-gold/10 group ${
                      answers[step.id] === option.value
                        ? "border-gold bg-gold/10"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    <span className="text-3xl flex-shrink-0">{option.icon}</span>
                    <span className="text-body-md text-white font-medium group-hover:text-gold transition-colors">
                      {option.label}
                    </span>
                    {answers[step.id] === option.value && (
                      <Check className="w-4 h-4 text-gold ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-body-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Pregunta anterior
                </button>
              )}
            </>
          ) : (
            /* Result */
            recommendation && (
              <div className="animate-fadeIn text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-gold" />
                </div>

                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold font-semibold text-xs px-3 py-1.5 rounded-full mb-4">
                  {recommendation.badge}
                </div>

                <h3 className="text-heading-md text-white mb-4">
                  {recommendation.title}
                </h3>
                <p className="text-body-lg text-white/70 mb-6">
                  {recommendation.description}
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 inline-block">
                  <p className="text-body-sm text-white/50 mb-1">Duración estimada</p>
                  <p className="text-heading-sm text-gold">{recommendation.duration}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hola, la calculadora me recomendó ${recommendation.title}. Me gustaría saber más y agendar una consulta.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-soft inline-flex items-center gap-2 justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-8 py-4 border border-white/20 text-white/70 font-semibold rounded-xl hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reintentar
                  </button>
                </div>

                <p className="text-body-sm text-white/30 mt-6">
                  * Esta recomendación es orientativa. La evaluación definitiva la realizará la ortodoncista en consulta.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
