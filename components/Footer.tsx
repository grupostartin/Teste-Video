import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lumina-primary border-t border-stone-800 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl text-lumina-bg font-bold mb-2">Lumina Design</h3>
          <p className="text-sm">Rua das Acácias, 120 - Jardins, São Paulo</p>
          <p className="text-sm">contato@luminadesign.com.br</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-lumina-secondary transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-lumina-secondary transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-lumina-secondary transition-colors"><MessageCircle size={24} /></a>
        </div>

        <div className="text-center md:text-right text-xs">
          <p>&copy; {new Date().getFullYear()} Lumina Design.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;