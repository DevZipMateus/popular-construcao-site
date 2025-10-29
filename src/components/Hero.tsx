import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
            A Popular Materiais para Construção
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light animate-fade-in [animation-delay:200ms]">
            Materiais de qualidade com preços acessíveis, garantindo atendimento de confiança para realizar seus sonhos
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Vai construir ou reformar? Vem para A Popular.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/5513933583248", "_blank")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
            >
              Faça seu Orçamento
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="bg-white/10 text-primary-foreground border-white/40 hover:bg-white/20 hover:border-white/60 text-lg px-8 py-6"
            >
              Nossos Serviços
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto animate-fade-in [animation-delay:800ms]">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="h-6 w-6 text-primary-foreground mb-3 mx-auto" />
              <p className="text-primary-foreground/90 text-sm">
                Av. Antônio Miguel Dos Santos nº 475<br />
                Santa Rosa / Guarujá - SP
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-6 w-6 text-primary-foreground mb-3 mx-auto" />
              <p className="text-primary-foreground/90 text-sm">
                Segunda a Sexta: 8:00 às 18:00<br />
                Sábado: 8:00 às 16:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
