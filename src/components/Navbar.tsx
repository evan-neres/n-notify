
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 lg:px-10 flex items-center justify-between border-b border-border/30">
      <div className="flex items-center gap-2">
        <Bell className="h-6 w-6 text-nnotify" />
        <span className="font-bold text-xl">N-Notify</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Características</a>
        <a href="#systems" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Integrações</a>
        <a href="#cta" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contato</a>
      </div>
      <a target="_blank" href="https://wa.me/5521981280834?text=Ol%C3%A1!%20Gostaria%20de%20experimentar%20a%20ferramenta.">
      <Button variant="outline" className="border-nnotify text-nnotify hover:bg-nnotify hover:text-foreground">
        Fale conosco
      </Button></a>
    </nav>
  );
};

export default Navbar;
