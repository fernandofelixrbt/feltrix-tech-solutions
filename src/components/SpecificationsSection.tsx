
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
    <section id="especificacoes" className="py-[120px] section-gradient">
      <div className="px-5 md:px-10">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 text-left">
            Material e <span className="text-feltrix-orange">Especificações</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-feltrix-light mb-8 text-left">
            Dados técnicos precisos que garantem a qualidade e performance de nossas soluções
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {specifications.map((spec, index) => (
              <div 
                key={index}
                className="bg-feltrix-dark-blue/60 backdrop-blur-sm rounded-xl p-6 border border-feltrix-steel/30"
                style={{ backgroundColor: 'rgba(45, 55, 72, 0.3)' }}
              >
                <h3 className="text-[16px] md:text-[18px] font-bold text-feltrix-orange mb-2 text-left">{spec.title}</h3>
                <div className="text-[18px] md:text-[20px] font-bold text-white mb-3 text-left">{spec.value}</div>
                <p className="text-[14px] text-feltrix-light text-left leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-feltrix-graphite/40 to-feltrix-navy/40 rounded-2xl p-6 border border-feltrix-orange/20">
            <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4 text-left">Certificações e Garantias</h3>
            <p className="text-feltrix-light text-left text-[14px] md:text-[16px]">
              Todos os nossos produtos seguem rigorosos padrões de qualidade internacional, 
              com certificações que garantem conformidade com as normas técnicas mais exigentes 
              da indústria de fibrocimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
