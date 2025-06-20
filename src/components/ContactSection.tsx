
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          tipo: 'contato'
        }
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve para maximizar seus resultados.",
      });
      
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-feltrix-dark-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Vamos juntos <span className="text-feltrix-orange">maximizar</span> seus resultados?
          </h2>
          <p className="text-xl text-feltrix-light">
            Entre em contato conosco e descubra como nossas soluções podem transformar sua operação
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-feltrix-graphite/40 to-feltrix-navy/40 rounded-2xl p-8 border border-feltrix-steel/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-feltrix-light mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-feltrix-light mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-feltrix-light mb-2">
                    Empresa
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                    placeholder="Nome da sua empresa"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-feltrix-light mb-2">
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                    placeholder="(11) 99999-9999"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-feltrix-light mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange resize-none"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-feltrix-orange hover:bg-feltrix-orange/90 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-bold text-feltrix-orange mb-2">Vendas</h4>
              <p className="text-feltrix-light">vendas@feltrix.com.br</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-feltrix-orange mb-2">Suporte Técnico</h4>
              <p className="text-feltrix-light">suporte@feltrix.com.br</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-feltrix-orange mb-2">Telefone</h4>
              <p className="text-feltrix-light">(11) 3000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
