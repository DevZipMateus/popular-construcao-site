import { Wrench, Droplets, Zap, Paintbrush, Hammer, Package, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const products = [
    { icon: Droplets, title: "Hidráulica", description: "Tubos, conexões, registros e acessórios" },
    { icon: Zap, title: "Elétrica", description: "Fios, cabos, disjuntores e materiais elétricos" },
    { icon: Paintbrush, title: "Pintura", description: "Tintas, pincéis, rolos e acessórios" },
    { icon: Hammer, title: "Ferramentas", description: "Ferramentas manuais e equipamentos" },
    { icon: Package, title: "Cimento e Argamassas", description: "Materiais básicos para construção" },
    { icon: Wrench, title: "Parafusos e Utilidades", description: "Fixadores e itens para o lar" },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Produtos e serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo o que você precisa para sua obra ou reforma em um só lugar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 bg-background"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Serviço Especial */}
          <Card className="bg-gradient-to-r from-accent via-accent/95 to-accent/90 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Key className="h-10 w-10 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground">Serviço de cópia de chave</h3>
                  <p className="text-lg text-accent-foreground/90">
                    Oferecemos também serviço rápido e preciso de cópia de chaves
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
