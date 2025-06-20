import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-feltrix-dark-blue/95 backdrop-blur-sm border-b border-feltrix-graphite/30">
      <div className="w-full px-2 py-4"> {/* Tirei o container mx-auto e reduzi o padding horizontal */}
        <nav className="flex items-center justify-between">
          
          {/* Texto "Feltrix Soluções" colado na esquerda */}
          <div className="flex items-center ml-0" style={{ height: '40px', marginRight: '10px' }}>
            <span className="text-white text-xl font-bold tracking-wide uppercase">
              FELTRIX SOLUÇÕES
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#solucoes"
              className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
            >
              Soluções
            </a>
            <a
              href="#diferenciais"
              className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
            >
              Diferenciais
            </a>
            <a
              href="#especificacoes"
              className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
            >
              Especificações
            </a>
            <a
              href="#contato"
              className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-feltrix-light hover:text-feltrix-orange">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
