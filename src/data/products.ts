import geladeiraImage from "@/assets/geladeira.jpg";
import maquinaLavarImage from "@/assets/maquina-lavar.jpg";
import panelaImage from "@/assets/panela-pressao.jpg";
import coposImage1 from "@/assets/copos1.jpg";
import coposImage2 from "@/assets/copos2.jpg";
import conjuntoPanelasImage from "@/assets/panelas.jpg";
import faqueiroImage from "@/assets/faqueiro-completo.jpg";
import cafeteiraImage from "@/assets/cafeteira.jpg";
import escorredorImage from "@/assets/escorredor.jpg";
import camaImage from "@/assets/lencol.png";
import colchaImage from "@/assets/colcha.png";
import xicarasImage from "@/assets/xicara.webp";
import liquidificadorImage from "@/assets/liquidificador.jpg";
import tacasImage from "@/assets/tacas.jpg";
import airFryerImage from "@/assets/airfryer.jpg";
import chaleiraImage from "@/assets/chaleira.jpg";
import potesMantimentosImage from "@/assets/pote-mantimentos.jpg";
import jarraImage from "@/assets/jarra-agua.png";
import jogoFacasImage from "@/assets/facas.png";
import garrafaImage from "@/assets/garrafa.png";
import mixerImage from "@/assets/mixer.png";
import potesImage from "@/assets/potes.png";
import canecaImage from "@/assets/caneca.png";
import cambucaImage from "@/assets/cumbuca.png";
import tabuaImage from "@/assets/tabua.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  purchaseLink: string;
  category: "Eletrodomésticos" | "Cozinha" | "Quarto";
  complete?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Geladeira",
    image: geladeiraImage,
    purchaseLink: "https://www.youtube.com",
    category: "Eletrodomésticos",
    complete: true
  },
  {
    id: "2",
    name: "Máquina de Lavar",
    image: maquinaLavarImage,
    purchaseLink: "https://www.youtube.com",
    category: "Eletrodomésticos",
    complete: true
  },
  {
    id: "11",
    name: "Liquidificador",
    image: liquidificadorImage,
    purchaseLink: "https://a.co/d/a9KHstG",
    category: "Eletrodomésticos",
    complete: true
  },
  {
    id: "16",
    name: "Copos",
    image: coposImage2,
    purchaseLink: "https://a.co/d/7AVCqwa",
    category: "Cozinha",
    complete: true
  },
  {
    id: "8",
    name: "Escorredor de Prato",
    image: escorredorImage,
    purchaseLink: "https://a.co/d/0Kwbros",
    category: "Cozinha",
    complete: true
  },
  {
    id: "24",
    name: "Conjunto cambuca",
    image: cambucaImage,
    purchaseLink: "https://www.camicado.com.br/p/conjunto-de-cumbucas-04-pecas-organico-latte-porto-brasil/-/A-7010704225242-br.lc?sku=7510708794986",
    category: "Cozinha",
    complete: true
  },
  {
    id: "15",
    name: "Potes de Mantimentos",
    image: potesMantimentosImage,
    purchaseLink: "https://a.co/d/2G8KBOh",
    category: "Cozinha",
    complete: true
  },
  {
    id: "4",
    name: "Copos",
    image: coposImage1,
    purchaseLink: "https://a.co/d/amfSWtB",
    category: "Cozinha",
    complete: true
  },
  {
    id: "5",
    name: "Conjunto de Panelas",
    image: conjuntoPanelasImage,
    purchaseLink: "https://a.co/d/fuStSnZ",
    category: "Cozinha",
    complete: false
  },
  {
    id: "3",
    name: "Panela de Pressão",
    image: panelaImage,
    purchaseLink: "https://a.co/d/3hoQY1L",
    category: "Cozinha",
    complete: false
  },
  {
    id: "20",
    name: "Garrafa",
    image: garrafaImage,
    purchaseLink: "https://www.camicado.com.br/p/garrafa-home-style-orla/-/A-101306236-br.lc?sku=101306244",
    category: "Cozinha",
    complete: false
  },
  {
    id: "13",
    name: "Air Fryer",
    image: airFryerImage,
    purchaseLink: "https://a.co/d/6BEV2tf",
    category: "Eletrodomésticos",
    complete: false
  },
  {
    id: "18",
    name: "Jarra",
    image: jarraImage,
    purchaseLink: "https://a.co/d/b3ONJtq",
    category: "Cozinha",
    complete: false
  },
  {
    id: "19",
    name: "Mixer",
    image: mixerImage,
    purchaseLink: "https://a.co/d/cCRcr5v",
    category: "Eletrodomésticos",
    complete: false
  },
  {
    id: "6",
    name: "Faqueiro Completo",
    image: faqueiroImage,
    purchaseLink: "https://a.co/d/bvrFeIu",
    category: "Cozinha",
    complete: false
  },
  {
    id: "23",
    name: "2 Canecas flocos - Brancas",
    image: canecaImage,
    purchaseLink: "https://www.oliveceramica.com.br/produtos/caneca-ceramica",
    category: "Cozinha",
    complete: false
  },
  {
    id: "14",
    name: "Chaleira Elétrica",
    image: chaleiraImage,
    purchaseLink: "https://a.co/d/7v1zKuz",
    category: "Eletrodomésticos",
    complete: false
  },
  {
    id: "12",
    name: "Taças",
    image: tacasImage,
    purchaseLink: "https://a.co/d/arAsC9I",
    category: "Cozinha",
    complete: false
  },
  {
    id: "9",
    name: "Jogo de Lençol Queen",
    image: camaImage,
    purchaseLink: "https://www.camicado.com.br/p/jogo-de-lencol-home-style-essencial/-/A-100844551-br.lc?sku=101027190",
    category: "Quarto",
    complete: false
  },
  {
    id: "17",
    name: "Colcha Queen",
    image: colchaImage,
    purchaseLink: "https://www.camicado.com.br/p/cobre-leito-colcha-sereno-queen-em-malha-marinho-100-algodao/-/A-7010705443709-br.lc?sku=7510711581478",
    category: "Quarto",
    complete: false
  },
  {
    id: "21",
    name: "Potes Livres de BPA",
    image: potesImage,
    purchaseLink: "https://a.co/d/5pIPk4B",
    category: "Cozinha",
    complete: false
  },
  {
    id: "25",
    name: "Tábua de Carne",
    image: tabuaImage,
    purchaseLink: "https://a.co/d/4LPODHX",
    category: "Cozinha",
    complete: false
  },
  {
    id: "10",
    name: "Xícaras",
    image: xicarasImage,
    purchaseLink: "https://www.hzor.com.br/xicara-com-pires-ceramica-pistachhio-215ml-hzor-6-pecas",
    category: "Cozinha",
    complete: false
  },
  {
    id: "7",
    name: "Cafeteira Italiana",
    image: cafeteiraImage,
    purchaseLink: "https://a.co/d/atff2Pp",
    category: "Eletrodomésticos",
    complete: false
  },
  {
    id: "22",
    name: "Jogo de Facas",
    image: jogoFacasImage,
    purchaseLink: "https://a.co/d/6cJ6xoF",
    category: "Cozinha",
    complete: false
  },
];