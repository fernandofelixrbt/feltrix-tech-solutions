
import React from 'react';
import { Clock, TrendingDown, Droplets } from 'lucide-react';

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-feltrix-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Diferenciais <span className="text-feltrix-orange">Técnicos</span>
          </h2>
          <p className="text-xl text-feltrix-light">
            Nossa tecnologia oferece vantagens competitivas significativas para sua operação
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl p-8 border border-feltrix-orange/20">
            <Clock className="w-12 h-12 text-feltrix-orange mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Instalação Rápida</h3>
            <p className="text-feltrix-light">
              Processo de instalação otimizado que reduz significativamente o tempo de parada 
              da produção, minimizando impactos operacionais e maximizando a disponibilidade 
              dos equipamentos.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl p-8 border border-feltrix-orange/20">
            <TrendingDown className="w-12 h-12 text-feltrix-orange mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Redução de Perdas</h3>
            <p className="text-feltrix-light">
              Diminuição significativa das perdas de finos durante o processo produtivo, 
              resultando em maior aproveitamento da matéria-prima e consequente redução 
              de custos operacionais.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-feltrix-graphite/60 to-feltrix-dark-blue/40 rounded-xl p-8 border border-feltrix-orange/20">
            <Droplets className="w-12 h-12 text-feltrix-orange mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Sistema de Reaproveitamento</h3>
            <p className="text-feltrix-light">
              Maior performance do sistema de reaproveitamento de água, contribuindo para 
              sustentabilidade ambiental e redução de custos com recursos hídricos na 
              operação industrial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
