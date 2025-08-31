import { Home, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Home className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nossa Casa Nova
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Olá! Estamos montando nosso novo lar e criamos esta lista para ajudar 
              nossos amigos a encontrar os itens que ainda precisamos.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-primary" />
              <p className="text-base">
                Fiquem à vontade para escolher algo, se desejarem nos ajudar a deixar 
                nosso lar completo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};