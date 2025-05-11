
import React from 'react';
import { Bell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 lg:px-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-nnotify" />
            <span className="font-bold text-lg">N-Notify</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#systems" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Integrações
            </a>
            <a href="#cta" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} N-Notify. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
