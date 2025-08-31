import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const handlePurchaseClick = () => {
    window.open(product.purchaseLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fade-in">
      <CardContent className="p-6">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs font-medium">
              {product.category}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <Button
            onClick={handlePurchaseClick}
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300 group-hover:shadow-lg"
            size="default"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};