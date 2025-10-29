import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
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
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img src={logo} alt="A Popular Materiais para Construção" className="h-16 w-auto" />
            <p className="text-background/80 text-sm">
              Materiais de construção de qualidade com preços acessíveis. Atendimento de confiança desde 2018.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-background">Links rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection("hero")} className="text-background/80 hover:text-background transition-colors text-left text-sm">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-background/80 hover:text-background transition-colors text-left text-sm">
                Sobre
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-background/80 hover:text-background transition-colors text-left text-sm">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-background/80 hover:text-background transition-colors text-left text-sm">
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-background">Contato</h3>
            <div className="space-y-3">
              <a href="tel:1333583248" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(13) 3358-3248</span>
              </a>
              <a href="mailto:apopular.mcc@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm break-all">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>apopular.mcc@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-background/80 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Av. Antônio Miguel Dos Santos nº 475, Santa Rosa / Guarujá - SP</span>
              </div>
            </div>
          </div>

          {/* Horário e Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-background">Horário</h3>
            <div className="flex items-start gap-2 text-background/80 text-sm">
              <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <div>
                <p>Segunda a Sexta: 8:00 às 18:00</p>
                <p>Sábado: 8:00 às 16:00</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-background mb-3">Siga-nos</h4>
              <a 
                href="https://www.instagram.com/apopularmcc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm"
              >
                <Instagram className="h-5 w-5" />
                <span>@apopularmcc</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} A Popular Materiais para Construção. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-xs mt-2">
            CNPJ: 29.212.140/0001-05
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
