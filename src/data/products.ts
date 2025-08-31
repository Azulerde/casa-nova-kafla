import cafeteiraImage from "@/assets/cafeteira-italiana.jpg";
import panelaImage from "@/assets/panela-pressao.jpg";
import pratosImage from "@/assets/conjunto-pratos.jpg";
import talheresImage from "@/assets/talheres.jpg";
import camaImage from "@/assets/jogo-cama.jpg";
import toalhasImage from "@/assets/toalhas-banho.jpg";
import aspiradorImage from "@/assets/aspirador.jpg";
import liquidificadorImage from "@/assets/liquidificador.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  purchaseLink: string;
  category: "Cozinha" | "Quarto" | "Banheiro" | "Limpeza";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cafeteira Italiana",
    image: cafeteiraImage,
    purchaseLink: "https://www.magazineluiza.com.br/cafeteira-italiana/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "2",
    name: "Panela de Pressão",
    image: panelaImage,
    purchaseLink: "https://www.americanas.com.br/produto/panela-pressao/1234567",
    category: "Cozinha"
  },
  {
    id: "3",
    name: "Conjunto de Pratos",
    image: pratosImage,
    purchaseLink: "https://www.casasbahia.com.br/conjunto-pratos/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "4",
    name: "Conjunto de Talheres",
    image: talheresImage,
    purchaseLink: "https://www.extra.com.br/talheres/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "5",
    name: "Jogo de Cama",
    image: camaImage,
    purchaseLink: "https://www.submarino.com.br/jogo-cama/p/1234567/",
    category: "Quarto"
  },
  {
    id: "6",
    name: "Jogo de Toalhas de Banho",
    image: toalhasImage,
    purchaseLink: "https://www.pontofrio.com.br/toalhas/p/1234567/",
    category: "Banheiro"
  },
  {
    id: "7",
    name: "Aspirador de Pó",
    image: aspiradorImage,
    purchaseLink: "https://www.mercadolivre.com.br/aspirador/p/1234567/",
    category: "Limpeza"
  },
  {
    id: "8",
    name: "Liquidificador",
    image: liquidificadorImage,
    purchaseLink: "https://www.shoptime.com.br/liquidificador/p/1234567/",
    category: "Cozinha"
  }
];