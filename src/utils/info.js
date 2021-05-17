import Wanda from "../assets/images/chars/wanda.png";
import Spider from "../assets/images/chars/spider.png";
import Hulk from "../assets/images/chars/hulk.png";
import Thanos from "../assets/images/chars/thanos.png";

import IronMan from "../assets/images/movies/IronMan.png";
import IronMan2 from "../assets/images/movies/IronMan2.png";
import Thor from "../assets/images/movies/Thor.png";
import CapitainAmerica from "../assets/images/movies/CapitainAmerica.png";
import CapitainMarvel from "../assets/images/movies/CapitainMarvel.png";

import ThorVikings from "../assets/images/hqs/ThorVikings.png";
import Surfista from "../assets/images/hqs/Surfista.png";
import Wolverine from "../assets/images/hqs/Wolverine.png";

export const characters = [
  {
    id: 1,
    image: Spider,
    title: "Homem-Aranha",
    list: [
      "homem aranha 1",
      "homem aranha 2",
      "homem aranha 3",
      "um bucado mais",
    ],
    description:
      "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    stars: [1, 2, 3, 4, 5],
  },

  {
    id: 2,
    image: Wanda,
    title: "Wanda Maximoff",
    list: [
      "Vingadores - Era de Ultron",
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "WandaVision",
    ],
    description:
      "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    stars: [1, 2, 3, 4],
  },
  {
    id: 3,
    image: Thanos,
    title: "Thanos",
    list: [
      " Vingadores ",
      "Guardiões da Galáxia - vol. I",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    description:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    image: Hulk,
    title: "Hulk",
    list: [
      "Vingadores",
      "Vingadores - Era de Ultron",
      "Thor - Ragnarok",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    description:
      "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    stars: [1, 2, 3, 4],
  },
];

export const movies = [
  {
    id: 1,
    image: IronMan,
    title: "Homem de Ferro",
    description:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    stars: [1, 2, 3],
  },
  {
    id: 2,
    image: IronMan2,
    title: "Homem de Ferro 2",
    description:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    image: Thor,
    title: "Thor",
    description:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    image: CapitainAmerica,
    title: "Capitão América",
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    stars: [1, 2, 3, 4],
  },
  {
    id: 5,
    image: CapitainMarvel,
    title: "Capitã Marvel",
    description:
      "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ",
    stars: [1, 2, 3, 4],
  },
];

export const hqs = [
  {
    id: 1,
    image: ThorVikings,
    title: "Thor: Vikings",
    description:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    image: Surfista,
    title: "Surfista Prateado: Parábola",
    description:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    image: Wolverine,
    title: "Wolverine: Origens",
    description:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
    stars: [1, 2, 3, 4, 5],
  },
];
