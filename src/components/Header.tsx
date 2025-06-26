import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import jsPDF from 'jspdf';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imageUrls = [
        '/lovable-uploads/Pagina1-Apresentacao.png',
        '/lovable-uploads/Pagina2-Apresentacao.png',
        '/lovable-uploads/Pagina3-Apresentacao.png',
        '/lovable-uploads/Pagina4-Apresentacao.png'
      ];

      for (let i = 0; i < imageUrls.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        try {
          pdf.addImage(imageUrls[i], 'PNG', 0, 0, 297, 210);
        } catch (error) {
          console.error(`Erro ao adicionar imagem ${i + 1}:`, error);
        }
      }

      pdf.save('Feltrix_Apresentacao_Comercial.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      const link = document.createElement('a');
      link.href = '/lovable-uploads/Feltrix_Pitch_Deck.pdf';
      link.download = 'Feltrix_Apresentacao_Comercial.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#solucoes", label: "Soluções" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#especificacoes", label: "Especificações" },
    { href: "#contato", label: "Contato" },
  ];

  const handleMenuClick = (href: string) => {
    setIsDrawerOpen(false);
    // Pequeno delay para fechar o drawer antes de navegar
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-feltrix-dark-blue/95 backdrop-blur-sm border-b border-feltrix-graphite/30">
      <div className="w-full px-2 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Bloco com Logo + Texto */}
          <div className="flex items-center space-x-2" style={{ height: '70px', marginRight: '30px' }}>
            <img
              src="/lovable-uploads/Logo_Feltrix.png"
              alt="Feltrix Logo"
              style={{
                height: '70px',
                maxHeight: '70px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <span className="text-white text-xl font-bold tracking-wide uppercase">
              FELTRIX SOLUÇÕES
            </span>
          </div>

          {/* Menu Desktop - mantém igual */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-feltrix-light hover:text-feltrix-orange transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={handleDownloadPDF}
              className="bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-feltrix-orange/30 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download da Apresentação</span>
            </button>
          </div>

          {/* Menu Mobile usando Drawer */}
          <div className="md:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button className="text-feltrix-light hover:text-feltrix-orange p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-feltrix-dark-blue border-feltrix-graphite">
                <DrawerHeader className="text-center">
                  <DrawerTitle className="text-white text-lg font-bold">
                    Menu Feltrix
                  </DrawerTitle>
                  <DrawerDescription className="text-feltrix-light">
                    Navegue pelas seções do site
                  </DrawerDescription>
                </DrawerHeader>
                
                <div className="px-4 pb-8 space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleMenuClick(item.href)}
                      className="w-full text-left py-3 px-4 text-feltrix-light hover:text-feltrix-orange hover:bg-feltrix-graphite/30 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-4 border-t border-feltrix-graphite/30">
                    <button
                      onClick={() => {
                        handleDownloadPDF();
                        setIsDrawerOpen(false);
                      }}
                      className="w-full bg-feltrix-orange hover:bg-feltrix-orange/90 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download da Apresentação</span>
                    </button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
