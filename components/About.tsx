import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-stone-100/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
           <img 
              src="https://picsum.photos/600/800?random=20" 
              alt="Profissional Lumina trabalhando" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[16px] border-white/20"></div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="font-serif text-4xl font-bold text-lumina-primary mb-6">
            Mais que um salão,<br /> um refúgio.
          </h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            A Lumina Design nasceu do desejo de transformar a manicure em um ritual de autocuidado. Fundado por especialistas apaixonadas por estética e bem-estar, nosso estúdio combina técnicas europeias de cuidado com as unhas e a hospitalidade calorosa brasileira.
          </p>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Acreditamos que suas mãos contam sua história. Por isso, tratamos cada unha como uma obra de arte única, utilizando apenas materiais esterilizados e produtos de primeira linha para garantir não apenas beleza, mas saúde.
          </p>
          <Button variant="outline">
            Conheça Nossa Equipe
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;