import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Clock } from "lucide-react";

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Vitrine Online de Produtos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nosso catálogo completo de materiais para construção. Confira preços, disponibilidade e faça seu pedido com facilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Catálogo Completo
              </h3>
              <p className="text-muted-foreground">
                Milhares de produtos disponíveis para sua obra
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Preços Atualizados
              </h3>
              <p className="text-muted-foreground">
                Consulte valores em tempo real
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Disponibilidade
              </h3>
              <p className="text-muted-foreground">
                Verifique o estoque instantaneamente
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "/vitrine"}
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Acessar Vitrine Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
