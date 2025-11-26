import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-lumina-bg overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-start space-y-6">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lumina-secondary font-medium tracking-widest uppercase text-sm"
          >
            Cuidado e sofisticação
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-lumina-primary"
          >
            Sua beleza em <span className="italic font-light text-lumina-secondary">detalhes</span> perfeitos.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-stone-600 text-lg md:text-xl max-w-md leading-relaxed"
          >
            Experiência premium de manicure e pedicure em um ambiente relaxante e exclusivo, onde sua saúde e bem-estar vêm em primeiro lugar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-4"
          >
            <Button variant="primary" className="shadow-xl shadow-stone-200">
              Agendar Visita Agora
            </Button>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-lumina-secondary/10 rounded-t-full rounded-b-lg transform rotate-3 translate-x-4"></div>
          <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-lg shadow-2xl">
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Mãos elegantes com manicure perfeita" 
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 -left-4 md:-left-8 bg-white p-4 shadow-lg rounded-lg max-w-[200px] border-l-4 border-lumina-secondary"
          >
            <p className="font-serif text-lumina-primary font-bold text-lg">5.0</p>
            <p className="text-xs text-stone-500">Excelência em atendimento avaliada por mais de 500 clientes.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;