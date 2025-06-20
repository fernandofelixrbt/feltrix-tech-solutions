
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
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
        <div className="w-full px-10 md:px-10" style={{ paddingTop: '120px' }}>
          <div className="max-w-[800px]">
            <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-4 leading-tight text-left">
              Feltrix Soluções<br />
              Tecnologia que Conecta{' '}
              <span className="text-[#F97316]">Desempenho</span>
            </h1>
            
            <h2 className="text-[16px] md:text-[20px] text-white mb-4 font-medium text-left">
              Especialistas em soluções de alta performance para a indústria de fibrocimento
            </h2>
            
            <p className="text-[14px] md:text-[16px] text-[#C0C0C0] mb-6 text-left leading-relaxed">
              Na Feltrix, unimos tecnologia, engenharia de materiais e precisão industrial para maximizar sua produtividade. 
              Nossas telas metálicas com solda a laser garantem mais durabilidade, eficiência e desempenho contínuo em processos Hatscheck.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 text-left">
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
