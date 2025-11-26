import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lumina-bg/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-lumina-primary">
          Lumina Design
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-lumina-primary/80 hover:text-lumina-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="px-6 py-2 text-xs">
            Agendar Horário
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-lumina-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-lumina-bg border-b border-stone-200 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-lumina-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>
                Agendar Horário
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;