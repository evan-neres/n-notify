
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, ArrowUp, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 lg:px-10 flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-8">
        <Zap size={16} className="text-nnotify" />
        <span className="text-sm">Monitoramento em tempo real</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Nunca perca um alerta <span className="text-gradient">crítico</span>
      </h1>
      <p className="text-xl text-muted-foreground mb-10 max-w-[800px]">
        O N-Notify envia alertas e atualizações em tempo real dos seus sistemas de automação predial e industrial diretamente para o Telegram.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a target="_blank" href="https://wa.me/5521981280834?text=Ol%C3%A1!%20Gostaria%20de%20experimentar%20a%20ferramenta.">
        <Button className="bg-nnotify hover:bg-nnotify-light text-white px-8 py-6">
          Entre em contato
        </Button></a>
      </div>
      <div className="mt-20 relative w-full max-w-[1000px] aspect-video rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nnotify/20 to-background/50 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md bg-card p-6 rounded-lg border border-border/20 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Bell size={20} className="text-nnotify" />
              <div className="text-left">
                <h3 className="font-medium">Alerta de temperatura</h3>
                <p className="text-sm text-muted-foreground">Sala do CPD</p>
              </div>
            </div>
            <p className="text-left text-sm mb-4">
              Temperatura elevada (28.5°C). O sistema de HVAC precisa de atenção.
            </p>
            <div className="flex items-center gap-2">
              <ArrowUp size={16} className="text-nnotify" />
              <span className="text-xs text-muted-foreground">Enviada 11/05/2025 às 10:50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
