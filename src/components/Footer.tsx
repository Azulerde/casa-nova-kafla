import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary animate-pulse" />
            <p className="text-lg font-medium text-foreground">
              Obrigado por fazer parte desta nova fase!
            </p>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada gesto de carinho nos ajuda a construir um lar cheio de amor e memórias especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};