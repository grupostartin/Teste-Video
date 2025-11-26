import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapperProps } from '../../types';

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;