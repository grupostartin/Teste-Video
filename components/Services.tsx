import React from 'react';
import { Hand, Sparkles, Paintbrush, Heart } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Manicure Clássica & Gel",
      description: "Cuticulagem perfeita, hidratação profunda e esmaltação de alta durabilidade ou alongamento natural.",
      icon: <Hand size={24} />
    },
    {
      title: "Spa dos Pés",
      description: "Imersão relaxante, esfoliação com sais minerais e massagem reflexológica.",
      icon: <Sparkles size={24} />
    },
    {
      title: "Nail Art Minimalista",
      description: "Designs exclusivos, traços finos e elegantes que complementam seu estilo sem exageros.",
      icon: <Paintbrush size={24} />
    },
    {
      title: "Tratamento Restaurador",
      description: "Protocolos para fortalecimento e recuperação da saúde natural das unhas.",
      icon: <Heart size={24} />
    }
  ];

  return (
    <SectionWrapper id="services" className="bg-lumina-bg">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-lumina-secondary uppercase tracking-widest text-sm font-semibold">Nossos Serviços</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumina-primary mt-3">
            Menu de Experiências
          </h2>
        </div>
        <p className="text-stone-500 max-w-sm text-right md:text-left">
          Utilizamos apenas produtos importados e hipoalergênicos das melhores marcas mundiais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white p-8 rounded-xl border border-stone-200 hover:border-lumina-secondary transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-lumina-secondary transform scale-150 group-hover:rotate-12 duration-500">
              {service.icon}
            </div>
            
            <div className="text-lumina-secondary mb-4">
              {service.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-lumina-primary mb-3">
              {service.title}
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;