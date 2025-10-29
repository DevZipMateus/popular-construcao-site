import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="A Popular Materiais para Construção" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary">
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary">
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary">
              Serviços
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary">
              Contato
            </Button>
            <Button 
              onClick={() => window.open("https://wa.me/5513933583248", "_blank")}
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Button variant="ghost" onClick={() => scrollToSection("hero")} className="w-full justify-start text-foreground hover:text-primary">
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")} className="w-full justify-start text-foreground hover:text-primary">
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("servicos")} className="w-full justify-start text-foreground hover:text-primary">
              Serviços
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")} className="w-full justify-start text-foreground hover:text-primary">
              Contato
            </Button>
            <Button 
              onClick={() => window.open("https://wa.me/5513933583248", "_blank")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
