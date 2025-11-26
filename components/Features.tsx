import React from 'react';
import { VolumeX, ShieldCheck, Clock } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const Features: React.FC = () => {
  const features = [
    {
      icon: <VolumeX size={32} />,
      title: "Silêncio & Paz",
      description: "Esqueça o barulho de salões lotados. Nosso ambiente é projetado acusticamente para o seu relaxamento total."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Biossegurança Total",
      description: "Segurança hospitalar. Autoclave de última geração e kits 100% descartáveis abertos na sua frente."
    },
    {
      icon: <Clock size={32} />,
      title: "Sem Pressa",
      description: "Agendamento com intervalo estendido. Dedicamos o tempo necessário para que o acabamento seja impecável."
    }
  ];

  return (
    <div id="features" className="bg-white">
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumina-primary mb-4">
            Por que escolher a Lumina?
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Elevamos o padrão do cuidado pessoal. Não vendemos apenas unhas bonitas, entregamos uma pausa revigorante no seu dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-lumina-bg border border-stone-100 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 p-4 bg-white rounded-full text-lumina-secondary shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-lumina-primary">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Features;