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
            KaFla de Casa Nova
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-primary animate-pulse" />
              Olá, queridos!
              <Heart className="h-5 w-5 text-primary animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Estamos montando nosso novo lar e queremos muito que nossos amigos e familiares façam parte dessa história conosco. Por isso, criamos uma lista com alguns itens que ainda precisamos.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <p className="text-base">
                Se quiserem nos ajudar a deixar a casa completa e cheia de boas memórias, fiquem à vontade para escolher um presente. O mais importante é ter vocês nessa fase tão especial da nossa vida!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};