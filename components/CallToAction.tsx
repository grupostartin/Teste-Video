import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-lumina-primary text-lumina-bg text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Pronta para brilhar?
        </h2>
        <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto">
          Permita-se viver a experiência Lumina. Agende seu horário e descubra o poder de se sentir bem consigo mesma.
        </p>
        <Button variant="secondary" className="px-10 py-4 text-base shadow-lg shadow-lumina-secondary/30">
          Garantir meu horário
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;