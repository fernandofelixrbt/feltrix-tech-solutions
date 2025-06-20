
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'orcamento' | 'visita';
}

const ContactModal = ({ isOpen, onClose, type }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          tipo: type
        }
      });

      if (error) throw error;

      toast({
        title: type === 'orcamento' ? "Solicitação de orçamento enviada!" : "Solicitação de visita enviada!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        mensagem: ''
      });
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = type === 'orcamento' ? 'Solicitar Orçamento' : 'Agendar Visita Comercial';
  const placeholder = type === 'orcamento' 
    ? 'Descreva suas necessidades e especificações técnicas...'
    : 'Conte-nos sobre sua empresa e quando seria o melhor momento para a visita...';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-feltrix-dark-blue border border-feltrix-steel/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleChange}
              className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel"
              placeholder="Seu nome completo *"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel"
              placeholder="seu@email.com *"
            />
          </div>
          
          <div>
            <Input
              name="empresa"
              type="text"
              value={formData.empresa}
              onChange={handleChange}
              className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel"
              placeholder="Nome da sua empresa"
            />
          </div>
          
          <div>
            <Input
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel"
              placeholder="(11) 99999-9999"
            />
          </div>
          
          <div>
            <Textarea
              name="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              className="bg-feltrix-navy/50 border-feltrix-steel/50 text-white placeholder:text-feltrix-steel resize-none"
              placeholder={placeholder}
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-feltrix-steel/50 text-feltrix-light hover:bg-feltrix-steel/20"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-feltrix-orange hover:bg-feltrix-orange/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
