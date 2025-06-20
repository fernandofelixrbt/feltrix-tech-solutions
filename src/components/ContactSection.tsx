
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
    <section id="contato" className="py-[120px] bg-feltrix-dark-blue">
      <div className="px-5 md:px-10">
        <div className="max-w-[800px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 text-left">
            Vamos juntos <span className="text-feltrix-orange">maximizar</span> seus resultados?
          </h2>
          <p className="text-[16px] md:text-[18px] text-feltrix-light mb-8 text-left">
            Entre em contato conosco e descubra como nossas soluções podem transformar sua operação
          </p>
          
          <div className="bg-gradient-to-br from-feltrix-graphite/40 to-feltrix-navy/40 rounded-2xl p-6 md:p-8 border border-feltrix-steel/30 mb-8">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                  placeholder="Nome *"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                  placeholder="Empresa"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                  placeholder="Telefone"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange"
                  placeholder="E-mail *"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel focus:border-feltrix-orange resize-none"
                  placeholder="Mensagem"
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
          
          <div className="space-y-4">
            <div className="text-left">
              <h4 className="text-[16px] md:text-[18px] font-bold text-feltrix-orange mb-2">Comercial</h4>
              <p className="text-feltrix-light text-[14px] md:text-[16px]">contato@feltrix.com.br</p>
            </div>
            <div className="text-left">
              <h4 className="text-[16px] md:text-[18px] font-bold text-feltrix-orange mb-2">Suporte Técnico</h4>
              <p className="text-feltrix-light text-[14px] md:text-[16px]">suporte@feltrix.com.br</p>
            </div>
            <div className="text-left">
              <h4 className="text-[16px] md:text-[18px] font-bold text-feltrix-orange mb-2">Telefone</h4>
              <p className="text-feltrix-light text-[14px] md:text-[16px]">(11) 9.9856-1505</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
