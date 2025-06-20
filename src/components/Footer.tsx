
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-feltrix-dark-blue border-t border-feltrix-graphite/30 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/6d952db2-159d-4c28-9cea-0224306dbe0a.png" 
              alt="Feltrix Logo" 
              className="h-8 w-auto"
            />
            <span className="text-feltrix-light text-sm">
              Tecnologia que conecta desempenho
            </span>
          </div>
          
          <p className="text-feltrix-steel text-sm text-center md:text-right">
            © 2024 Feltrix. Todos os direitos reservados. <br className="md:hidden" />
            Soluções industriais de alta performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
