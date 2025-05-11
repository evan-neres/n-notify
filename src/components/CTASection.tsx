
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary/50 rounded-xl p-8 lg:p-12 text-center border border-border/40">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full mb-8">
          <Zap size={16} className="text-nnotify" />
          <span className="text-sm">Comece a receber notificações hoje</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Pronto para elevar seu monitoramento de automação?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Entre em contato conosco e avalie a integração de seu sistema ao N-Notify e receba alertas críticos e atualizaões no seu Telegram.
          Configuração simples, resultados poderosos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-nnotify hover:bg-nnotify-light text-white px-8 py-6">
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
