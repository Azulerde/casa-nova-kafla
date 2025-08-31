import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
            Lista de Presentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            Escolha um item que gostaria de nos presentear. Cada produto tem um link direto 
            para a loja onde você pode fazer a compra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
