
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Logo - Cartão de visita em destaque */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] opacity-25 bg-no-repeat bg-contain z-10 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/6d952db2-159d-4c28-9cea-0224306dbe0a.png')`,
          backgroundPosition: 'top right',
          filter: 'brightness(1.2) contrast(1.1)',
        }}
      />
      
      {/* Logo adicional menor no header */}
      <div 
        className="absolute top-8 left-8 w-24 h-24 opacity-90 bg-no-repeat bg-contain z-20"
        style={{
          backgroundImage: `url('/lovable-uploads/6d952db2-159d-4c28-9cea-0224306dbe0a.png')`,
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Tecnologia a Serviço da{' '}
            <span className="text-feltrix-orange">Alta Performance</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-feltrix-light mb-4 animate-slide-in-left">
            Soluções Avançadas para a Indústria de Fibrocimento
          </h2>
          
          <p className="text-lg text-feltrix-steel mb-12 animate-fade-in">
            Maximizando produtividade, durabilidade e eficiência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-feltrix-orange/30"
            >
              Solicite um Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-feltrix-dark-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Agende uma Visita Comercial
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-feltrix-navy to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
