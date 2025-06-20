
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Logo - Elemento visual de apoio */}
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-10 bg-no-repeat bg-contain z-5 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/6d952db2-159d-4c28-9cea-0224306dbe0a.png')`,
          filter: 'brightness(1.5)',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-5xl mx-auto text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Tecnologia a Serviço da{' '}
            <span className="text-feltrix-orange">Alta Performance</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-feltrix-light mb-6 animate-slide-in-left font-medium">
            Soluções Avançadas para a Indústria de Fibrocimento
          </h2>
          
          <p className="text-lg md:text-xl text-feltrix-steel mb-12 animate-fade-in max-w-2xl">
            Maximizando produtividade, durabilidade e eficiência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-scale-in">
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
