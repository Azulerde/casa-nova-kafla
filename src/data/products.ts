import geladeiraImage from "@/assets/geladeira.jpg";
import maquinaLavarImage from "@/assets/maquina-lavar.jpg";
import panelaImage from "@/assets/panela-pressao.jpg";
import coposImage from "@/assets/copos.jpg";
import conjuntoPanelasImage from "@/assets/conjunto-panelas.jpg";
import faqueiroImage from "@/assets/faqueiro-completo.jpg";
import cafeteiraImage from "@/assets/cafeteira-italiana.jpg";
import escorredorImage from "@/assets/escorredor-prato.jpg";
import camaImage from "@/assets/jogo-cama.jpg";
import xicarasImage from "@/assets/xicaras.jpg";
import liquidificadorImage from "@/assets/liquidificador.jpg";
import tacasImage from "@/assets/tacas.jpg";
import airFryerImage from "@/assets/air-fryer.jpg";
import chaleiraImage from "@/assets/chaleira-eletrica.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  purchaseLink: string;
  category: "Eletrodomésticos" | "Cozinha" | "Quarto";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Geladeira",
    image: geladeiraImage,
    purchaseLink: "https://www.magazineluiza.com.br/geladeira/p/1234567/",
    category: "Eletrodomésticos"
  },
  {
    id: "2",
    name: "Máquina de Lavar",
    image: maquinaLavarImage,
    purchaseLink: "https://www.americanas.com.br/produto/maquina-lavar/1234567",
    category: "Eletrodomésticos"
  },
  {
    id: "3",
    name: "Panela de Pressão",
    image: panelaImage,
    purchaseLink: "https://www.casasbahia.com.br/panela-pressao/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "4",
    name: "Copos",
    image: coposImage,
    purchaseLink: "https://www.extra.com.br/copos/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "5",
    name: "Conjunto de Panelas",
    image: conjuntoPanelasImage,
    purchaseLink: "https://www.submarino.com.br/conjunto-panelas/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "6",
    name: "Faqueiro Completo",
    image: faqueiroImage,
    purchaseLink: "https://www.pontofrio.com.br/faqueiro/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "7",
    name: "Cafeteira Italiana",
    image: cafeteiraImage,
    purchaseLink: "https://www.mercadolivre.com.br/cafeteira-italiana/p/1234567/",
    category: "Eletrodomésticos"
  },
  {
    id: "8",
    name: "Escorredor de Prato",
    image: escorredorImage,
    purchaseLink: "https://www.shoptime.com.br/escorredor-prato/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "9",
    name: "Jogo de Cama (Lençol)",
    image: camaImage,
    purchaseLink: "https://www.magazineluiza.com.br/jogo-cama/p/1234567/",
    category: "Quarto"
  },
  {
    id: "10",
    name: "Xícaras",
    image: xicarasImage,
    purchaseLink: "https://www.americanas.com.br/produto/xicaras/1234567",
    category: "Cozinha"
  },
  {
    id: "11",
    name: "Liquidificador",
    image: liquidificadorImage,
    purchaseLink: "https://www.casasbahia.com.br/liquidificador/p/1234567/",
    category: "Eletrodomésticos"
  },
  {
    id: "12",
    name: "Taças",
    image: tacasImage,
    purchaseLink: "https://www.extra.com.br/tacas/p/1234567/",
    category: "Cozinha"
  },
  {
    id: "13",
    name: "Air Fryer",
    image: airFryerImage,
    purchaseLink: "https://www.submarino.com.br/air-fryer/p/1234567/",
    category: "Eletrodomésticos"
  },
  {
    id: "14",
    name: "Chaleira Elétrica",
    image: chaleiraImage,
    purchaseLink: "https://www.pontofrio.com.br/chaleira-eletrica/p/1234567/",
    category: "Eletrodomésticos"
  }
];