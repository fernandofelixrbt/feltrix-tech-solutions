
import React from 'react';
import { Clock, TrendingDown, Droplets } from 'lucide-react';

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-[120px] bg-feltrix-navy">
      <div className="px-5 md:px-10">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 text-left">
            Diferenciais <span className="text-feltrix-orange">Técnicos</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-feltrix-light mb-8 text-left">
            Nossa tecnologia oferece vantagens competitivas significativas para sua operação
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl border border-feltrix-orange/20">
              <Clock className="w-8 h-8 text-feltrix-orange mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 text-left">Instalação Rápida</h3>
                <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                  Processo de instalação otimizado que reduz significativamente o tempo de parada 
                  da produção, minimizando impactos operacionais e maximizando a disponibilidade 
                  dos equipamentos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl border border-feltrix-orange/20">
              <TrendingDown className="w-8 h-8 text-feltrix-orange mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 text-left">Redução de Perdas</h3>
                <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                  Diminuição significativa das perdas de finos durante o processo produtivo, 
                  resultando em maior aproveitamento da matéria-prima e consequente redução 
                  de custos operacionais.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl border border-feltrix-orange/20">
              <Droplets className="w-8 h-8 text-feltrix-orange mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 text-left">Sistema de Reaproveitamento</h3>
                <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
                  Maior performance do sistema de reaproveitamento de água, contribuindo para 
                  sustentabilidade ambiental e redução de custos com recursos hídricos na 
                  operação industrial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
