
import React from 'react';
import { Shield, Zap, Cog } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-[120px] section-gradient">
      <div className="px-5 md:px-10">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 text-left">
            Nossa <span className="text-feltrix-orange">Solução</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-feltrix-light mb-8 text-left leading-relaxed">
            Tela metálica de alta performance com solda a laser para máquinas Hatscheck, 
            otimizando o revestimento de tamizes com máxima durabilidade e eficiência.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-6">
            <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-6 border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-feltrix-orange mb-4" />
              <h3 className="text-[20px] font-bold text-white mb-4 text-left">Durabilidade</h3>
              <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                Construção robusta com aço inox 316L e solda a laser de 47Kgf/cm, 
                garantindo longevidade excepcional em ambientes industriais exigentes.
              </p>
            </div>
            
            <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-6 border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-feltrix-orange mb-4" />
              <h3 className="text-[20px] font-bold text-white mb-4 text-left">Eficiência</h3>
              <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                31-32% de área aberta otimizada para máximo fluxo e performance, 
                reduzindo perdas e aumentando a produtividade industrial.
              </p>
            </div>
            
            <div className="bg-feltrix-graphite/50 backdrop-blur-sm rounded-xl p-6 border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300">
              <Cog className="w-12 h-12 text-feltrix-orange mb-4" />
              <h3 className="text-[20px] font-bold text-white mb-4 text-left">Precisão</h3>
              <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                Malha 2x1 com especificações técnicas rigorosas, proporcionando 
                filtragem precisa e controle otimizado do processo produtivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
