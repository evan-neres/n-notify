
import React from 'react';
import { Bell, ArrowUp, Settings, Cloud, Check, Monitor } from 'lucide-react';

const features = [
  {
    icon: <Bell className="h-8 w-8 text-nnotify" />,
    title: 'Alertas em tempo real',
    description: 'Receba notificações instantâneas quando os sistemas detectarem anomalias ou exigirem atenção.'
  },
  {
    icon: <Cloud className="h-8 w-8 text-nnotify" />,
    title: 'Integração SMTP',
    description: 'Para a aplicações que não possuem integrações API nativas. O recurso do protocolo SMTP é uma ótima alternativa.'
  },
  {
    icon: <Settings className="h-8 w-8 text-nnotify" />,
    title: 'Regras',
    description: 'Defina condições de alerta e preferências de notificação adaptadas às suas necessidades.'
  },
  {
    icon: <Monitor className="h-8 w-8 text-nnotify" />,
    title: 'Monitoramento de sistemas',
    description: 'Acompanhe a disponibildiade e desempenho de seus servidores e dispositivos de rede.'
  },
  {
    icon: <Check className="h-8 w-8 text-nnotify" />,
    title: 'Configuração fácil',
    description: 'Processo de configuração simples que se conecta aos seus sistemas de automação existentes e/ou integra novos recursos.'
  },
  {
    icon: <ArrowUp className="h-8 w-8 text-nnotify" />,
    title: 'Registro de eventos',
    description: 'Plataforma em DESENVOLVIMENTO para histórico abrangente de todas as notificações e eventos do sistema para auditoria.'
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Recursos poderosos</h2>
        <p className="text-muted-foreground">
          O N-Notify entrega informações críticas dos seus sistemas de automação diretamente para o seu Telegram, 
          mantendo você informado onde quer que esteja.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 rounded-lg bg-card border border-border/40 hover:border-nnotify/50 transition-colors">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
