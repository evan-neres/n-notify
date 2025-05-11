
import React from 'react';
import { Check } from 'lucide-react';

const systems = [
  {
    name: 'EBO',
    description: 'EcoStruxure™ Building Operation é o coração do nosso sistema de gerenciamento predia da Schneider Eletric',
    features: ['Notificações de alarmes', 'Relatórios programados', 'E outros...']
  },
  {
    name: 'Desigo CC',
    description: 'Software supervisório para soluções prediais/industriais da Siemens',
    features: ['Notificações de alarmes', 'Demais recursos, necessário análise']
  },
  {
    name: 'E3 Studio e Scada',
    description: 'Plataforma HMI/SCADA para aplicações avançadas e distribuidas da Elips',
    features: ['Notificações de alarmes', 'Demais recursos, necessário análise']
  },
  {
    name: 'Zabbix',
    description: 'Aplicação para monitoramento de infraestrutura de TI',
    features: ['Notificações de equipamentos offline', 'Notificação de parada de serviços', 'Notificação de Limite de Hardware de servidores e estações', 'E outros...']
  }
];

const SystemsSection = () => {
  return (
    <section id="systems" className="py-20 px-6 lg:px-10 bg-background/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Integrações</h2>
        <p className="text-muted-foreground">
        O N-Notify oferece integração por meio dos recursos nativos de diversas aplicações de automação predial e industrial. 
        Essa característica assegura que você e sua equipe se mantenham atualizados sobre o sistema, sem a necessidade de implementações não oficiais.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {systems.map((system, index) => (
          <div key={index} className="p-6 rounded-lg bg-card border border-border/40">
            <h3 className="text-xl font-medium mb-2">{system.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
            <ul className="space-y-2">
              {system.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-nnotify" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
        <p className="text-muted-foreground">
        Não encontrou seu sistema acima? Entre em contato conosco para avaliarmos a possibilidade.
        </p>
      </div>
    </section>
  );
};

export default SystemsSection;
