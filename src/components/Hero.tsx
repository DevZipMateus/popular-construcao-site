import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background-real.jpg";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in px-4 sm:px-0">
            A Popular Materiais para Construção
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light animate-fade-in [animation-delay:200ms] px-4 sm:px-0">
            Materiais de qualidade com preços acessíveis, garantindo atendimento de confiança para realizar seus sonhos
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] px-4 sm:px-0">
            Vai construir ou reformar? Vem para A Popular.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:600ms] px-4 sm:px-0">
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/5513933583248", "_blank")}
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Faça seu Orçamento
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/vitrine"}
              className="w-full sm:w-auto bg-white/10 text-primary-foreground border-white/40 hover:bg-white/20 hover:border-white/60 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Ver Vitrine Online
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
              className="w-full sm:w-auto bg-white/10 text-primary-foreground border-white/40 hover:bg-white/20 hover:border-white/60 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Nossos Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-2xl mx-auto animate-fade-in [animation-delay:800ms] px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground mb-2 sm:mb-3 mx-auto" />
              <p className="text-primary-foreground/90 text-xs sm:text-sm">
                Av. Antônio Miguel Dos Santos nº 475<br />
                Santa Rosa / Guarujá - SP
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground mb-2 sm:mb-3 mx-auto" />
              <p className="text-primary-foreground/90 text-xs sm:text-sm">
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
