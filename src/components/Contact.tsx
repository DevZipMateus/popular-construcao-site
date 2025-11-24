import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Entre em contato
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e realizar seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Telefone</h3>
                      <a href="tel:1333583248" className="text-muted-foreground hover:text-primary transition-colors">
                        (13) 3358-3248
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:apopular.mcc@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        apopular.mcc@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Antônio Miguel Dos Santos nº 475<br />
                        Santa Rosa / Guarujá - SP
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Horário de funcionamento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8:00 às 18:00<br />
                        Sábado: 8:00 às 16:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all bg-gradient-to-r from-pink-500/10 to-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-semibold text-foreground">Siga no Instagram</h3>
                      <a 
                        href="https://www.instagram.com/apopularmcc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @apopularmcc
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div className="space-y-6">
              <Card className="border-2 overflow-hidden h-full">
                <CardContent className="p-0 h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Av.+Antônio+Miguel+Dos+Santos+475,+Santa+Rosa,+Guarujá,+SP"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização A Popular Materiais para Construção"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center pt-6 sm:pt-8 px-4 sm:px-0">
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/551333583248", "_blank")}
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6"
            >
              Faça seu Orçamento pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
