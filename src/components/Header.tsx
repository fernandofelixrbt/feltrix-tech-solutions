
import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Feltrix_Pitch_Deck.pdf';
    link.download = 'Feltrix_Apresentacao_Comercial.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-feltrix-dark-blue/95 backdrop-blur-sm border-b border-feltrix-graphite/30">
      <div className="w-full px-2 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Bloco com Logo + Texto */}
          <div className="flex items-center space-x-2" style={{ height: '70px', marginRight: '30px' }}>
            {/* Logo */}
            <img
              src="/lovable-uploads/Logo_Feltrix.png"
              alt="Feltrix Logo"
              style={{
                height: '70px',
                maxHeight: '70px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Texto ao lado da logo */}
            <span className="text-white text-xl font-bold tracking-wide uppercase">
              FELTRIX SOLUÇÕES
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium">Home</a>
            <a href="#solucoes" className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium">Soluções</a>
            <a href="#diferenciais" className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium">Diferenciais</a>
            <a href="#especificacoes" className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium">Especificações</a>
            <a href="#contato" className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium">Contato</a>
            
            {/* Botão de Download da Apresentação */}
            <button
              onClick={handleDownloadPDF}
              className="bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-feltrix-orange/30 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download da Apresentação</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-feltrix-light hover:text-feltrix-orange">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
