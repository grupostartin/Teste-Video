import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  fullWidth = false 
}) => {
  
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-colors duration-300 text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-lumina-primary text-lumina-bg hover:bg-opacity-90",
    secondary: "bg-lumina-secondary text-white hover:bg-opacity-90",
    outline: "border border-lumina-primary text-lumina-primary hover:bg-lumina-primary hover:text-lumina-bg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;