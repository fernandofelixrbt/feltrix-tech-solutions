
import React from 'react';
import { Shield, Cog, Zap } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Nossa <span className="text-feltrix-orange">Solução</span>
          </h2>
          <p className="text-xl text-feltrix-light leading-relaxed">
            Tela metálica de alta performance com solda a laser para máquinas Hatscheck, 
            otimizando o revestimento de tamizes com máxima durabilidade e eficiência.
          </p>
        </div>

        {/* Imagem da tela metálica */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-feltrix-graphite/30 to-feltrix-steel/20 p-6">
            <img
              src="/lovable-uploads/28411905-0b0b-4d8b-97d5-f17d6f35ccab.png"
              alt="Tela metálica Feltrix com solda a laser para máquinas Hatscheck"
              className="w-full h-auto rounded-xl shadow-lg object-cover max-h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-feltrix-dark-blue/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-8 text-center border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300 transform hover:scale-105">
            <Shield className="w-16 h-16 text-feltrix-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Durabilidade</h3>
            <p className="text-feltrix-light">
              Construção robusta com aço inox 316L e solda a laser de 47Kgf/cm, 
              garantindo longevidade excepcional em ambientes industriais exigentes.
            </p>
          </div>
          
          <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-8 text-center border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300 transform hover:scale-105">
            <Cog className="w-16 h-16 text-feltrix-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Precisão</h3>
            <p className="text-feltrix-light">
              Malha 2x1 com especificações técnicas rigorosas, proporcionando 
              filtragem precisa e controle otimizado do processo produtivo.
            </p>
          </div>
          
          <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-8 text-center border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-16 h-16 text-feltrix-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Eficiência</h3>
            <p className="text-feltrix-light">
              31-32% de área aberta otimizada para máximo fluxo e performance, 
              reduzindo perdas e aumentando a produtividade industrial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
