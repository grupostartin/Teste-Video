import React from 'react';
import { Star } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: "Camila Rodrigues",
      rating: 5,
      comment: "A melhor manicure que já fiz. O ambiente é tão calmo que quase dormi na poltrona. Minhas unhas de gel duraram mais de 25 dias intactas!",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Juliana Mendes",
      rating: 5,
      comment: "Atenção impecável aos detalhes. A higiene é visível e me senti muito segura. O Spa dos Pés é uma experiência obrigatória.",
      image: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Roberta Alencar",
      rating: 5,
      comment: "Sofisticação define. Adoro como elas entendem meu estilo minimalista e sempre sugerem cores e artes que combinam comigo.",
      image: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-lumina-primary mb-6">
          O toque que encanta
        </h2>
        <div className="w-24 h-1 bg-lumina-secondary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-lumina-secondary p-0.5">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
            </div>
            
            <div className="flex gap-1 mb-4 text-lumina-secondary">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-stone-600 italic mb-6 text-sm md:text-base">
              "{t.comment}"
            </p>

            <h4 className="font-serif font-bold text-lumina-primary">
              {t.name}
            </h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;