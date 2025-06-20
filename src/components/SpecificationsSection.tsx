
import React from 'react';

const SpecificationsSection = () => {
  const specifications = [
    {
      title: "Material",
      value: "Aço Inox 316L",
      description: "Resistência superior à corrosão e durabilidade excepcional"
    },
    {
      title: "Diâmetro dos Fios",
      value: "MD 0,25mm / PMD 0,28mm",
      description: "Precisão dimensional para filtragem otimizada"
    },
    {
      title: "Área Aberta",
      value: "31-32%",
      description: "Máximo fluxo com retenção eficiente de partículas"
    },
    {
      title: "Construção",
      value: "Malha 2x1 com solda a laser (47Kgf/cm)",
      description: "Estrutura robusta e confiável para alta performance"
    }
  ];

  return (
    <section id="especificacoes" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Especificações <span className="text-feltrix-orange">Técnicas</span>
          </h2>
          <p className="text-xl text-feltrix-light">
            Dados técnicos precisos que garantem a qualidade e performance de nossas soluções
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="bg-feltrix-dark-blue/60 backdrop-blur-sm rounded-xl p-6 border border-feltrix-steel/30 hover:border-feltrix-orange/50 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-lg font-bold text-feltrix-orange mb-2">{spec.title}</h3>
              <div className="text-2xl font-bold text-white mb-3">{spec.value}</div>
              <p className="text-sm text-feltrix-light leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-feltrix-graphite/40 to-feltrix-navy/40 rounded-2xl p-8 border border-feltrix-orange/20">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Certificações e Garantias</h3>
          <p className="text-feltrix-light text-center">
            Todos os nossos produtos seguem rigorosos padrões de qualidade internacional, 
            com certificações que garantem conformidade com as normas técnicas mais exigentes 
            da indústria de fibrocimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
