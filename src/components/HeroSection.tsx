
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Logo - Maior e mais destacada */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-15 bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/6d952db2-159d-4c28-9cea-0224306dbe0a.png')`,
          backgroundPosition: 'top left',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
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
              className="bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicite um Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-feltrix-dark-blue px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Agende uma Visita Comercial
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-feltrix-navy to-transparent"></div>
    </section>
  );
};

export default HeroSection;
