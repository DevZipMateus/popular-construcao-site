import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // Se não estamos na página inicial, navega primeiro
    if (location.pathname !== "/") {
      navigate("/");
      // Aguarda navegação e então faz scroll
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    } else {
      scrollToElement(id);
    }
    setIsMenuOpen(false);
  };

  const scrollToElement = (id: string) => {
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
  };

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    }
  }, [location]);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20" style={{ background: 'linear-gradient(to right, hsl(var(--header-bg)) 0%, hsl(var(--header-bg)) 60%, hsl(var(--primary)) 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="A Popular Materiais para Construção" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("hero")} className="text-white hover:text-white hover:bg-white/20">
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")} className="text-white hover:text-white hover:bg-white/20">
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("servicos")} className="text-white hover:text-white hover:bg-white/20">
              Serviços
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")} className="text-white hover:text-white hover:bg-white/20">
              Contato
            </Button>
            <Button variant="ghost" onClick={() => navigate("/vitrine")} className="text-white hover:text-white hover:bg-white/20">
              Vitrine
            </Button>
            <Button 
              onClick={() => window.open("https://wa.me/551333583248", "_blank")}
              className="ml-4 bg-white text-header hover:bg-white/90"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Button variant="ghost" onClick={() => scrollToSection("hero")} className="w-full justify-start text-white hover:text-white hover:bg-white/20">
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")} className="w-full justify-start text-white hover:text-white hover:bg-white/20">
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("servicos")} className="w-full justify-start text-white hover:text-white hover:bg-white/20">
              Serviços
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")} className="w-full justify-start text-white hover:text-white hover:bg-white/20">
              Contato
            </Button>
            <Button variant="ghost" onClick={() => navigate("/vitrine")} className="w-full justify-start text-white hover:text-white hover:bg-white/20">
              Vitrine
            </Button>
            <Button 
              onClick={() => window.open("https://wa.me/551333583248", "_blank")}
              className="w-full bg-white text-header hover:bg-white/90"
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
