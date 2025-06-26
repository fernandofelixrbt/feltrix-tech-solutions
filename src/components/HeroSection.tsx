
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';

const HeroSection = () => {
  const [modalType, setModalType] = useState<'orcamento' | 'visita' | null>(null);

  const openModal = (type: 'orcamento' | 'visita') => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Content */}
        <div className="container mx-auto px-6 py-20 relative z-20">
          <div className="max-w-5xl mx-auto text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Tecnologia que Conecta{' '}
              <span className="text-feltrix-orange">Desempenho</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-slide-in-left font-medium">
              Especialistas em soluções de alta performance para a indústria de fibrocimento
            </h2>
            
            <p className="text-base md:text-lg text-white mb-12 animate-fade-in max-w-3xl">
              Na Feltrix, unimos tecnologia, engenharia de materiais e precisão industrial para maximizar sua produtividade. 
              Nossas telas metálicas com solda a laser garantem mais durabilidade, eficiência e desempenho contínuo em processos Hatscheck.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => openModal('orcamento')}
                className="bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-feltrix-orange/30"
              >
                Solicite um Orçamento
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => openModal('visita')}
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-feltrix-dark-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Agende uma Visita Comercial
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-feltrix-navy to-transparent z-10"></div>
      </section>

      <ContactModal 
        isOpen={modalType !== null}
        onClose={closeModal}
        type={modalType || 'orcamento'}
      />
    </>
  );
};

export default HeroSection;
