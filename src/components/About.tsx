import { Eye, Target, Heart, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* História */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Nossa história
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p>
                Fundada em 2018, na cidade de Guarujá, São Paulo, a A Popular Materiais para Construção nasceu da iniciativa do Engenheiro Civil Daniel do Nascimento Oliveira, com o apoio e dedicação de sua esposa, Rafaely Câmara Oliveira.
              </p>
              <p>
                O casal uniu conhecimento técnico, visão empreendedora e compromisso com o atendimento de qualidade para criar uma empresa voltada a oferecer materiais de construção com confiança, preço justo e excelência no atendimento.
              </p>
              <p>
                Desde o início, a A Popular se consolidou como uma marca de credibilidade e proximidade com o cliente, destacando-se pelo relacionamento transparente e pelo cuidado em cada venda.
              </p>
            </div>
          </div>

          {/* Valores, Missão e Visão */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a loja de materiais de construção mais confiável e acessível da região, referência em bom atendimento, variedade e compromisso com o cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer materiais de construção de qualidade a preços acessíveis, garantindo atendimento de confiança e contribuindo para a realização dos sonhos de cada cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Valores</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Confiança</li>
                  <li>• Qualidade</li>
                  <li>• Preço justo</li>
                  <li>• Atendimento humanizado</li>
                  <li>• Comprometimento</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Mercado */}
          <Card className="bg-secondary border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground">Nosso mercado</h3>
                  <p className="text-muted-foreground">
                    A A Popular Materiais para Construção atua no setor da construção civil, atendendo tanto clientes residenciais quanto profissionais do segmento, como pedreiros, engenheiros, mestres de obras e construtoras.
                  </p>
                  <p className="text-muted-foreground">
                    Com uma linha completa de materiais para construção, reforma e acabamento, a empresa oferece desde produtos básicos até itens de acabamento e decoração, garantindo variedade, qualidade e preço justo.
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

export default About;
