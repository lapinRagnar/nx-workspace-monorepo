import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mon-nx-monorepo-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.scss'],
})
export class NosProduitsComponent implements OnInit {
  
  listeMenus = ListeMenu
  lien = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log("la valeur du lien ", value)
      if (value) {
        this.lien = value
      }
      // this.jumpTo(value?.toLowerCase().replace(' ', '-'))
    })
  }

  // jumpTo(section: any) {
  //   document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  // }

  goToItem(lien: any){
    this.router.navigateByUrl("nos-produits#" + lien)
  }

}

interface Menu {
  image: string
  titre: string
}

const ListeMenu = [
  {
    nom_list: "Nos Menus",
    detail: "Pour toutes les faims, tous les goûts, tous les âges et tous les budgets, découvrez les menus McDonald’s ! Plutôt menu burger ou menu salade ? Ou peut-être souhaitez-vous prendre un bon petit-déjeuner avec l’offre P’tit dej’ ? Les enfants ne sont pas oubliés : le menu enfant Happy Meal™ inclut un dessert fruité ainsi qu’un jouet ou un livre. ",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltfe8d77690999af0c/61d85e4f595463670b1ea901/Aux-cotes-de-nos-agriculteurs-3.jpg?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "Près de 34 000 agriculteurs français nous accompagnent au quotidien*",
    titreBouton: "En savoir plus",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt552f0f8278bf324f/6077ee727d99e6231800b54d/menu_best_of.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Menu Best Of<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt552f0f8278bf324f/6077ee727d99e6231800b54d/menu_best_of.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Menu Maxi Best Of<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt2bac6e3ba9f8ff4d/61d7155272d47127d278acc5/menu-mc-first.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Menu McFirst<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blte32d0764681be93f/6266ce031ecf040608760e74/400x400_COMPO-PTITS-CONCOMBRES-HAMBURGER_LAD.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Menu Happy Meal<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt42a7593b90d541d3/620f8f7e8e4d0461c7a002bd/MENU_SALADE_BOISSON.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Menu Salade"
      },
      
    ],

  },

  {
    nom_list: "Nos Burgers",
    detail: "Au fil des décennies, la liste des burgers McDo s’est étoffée, pour le plus grand plaisir des amateurs de nouvelles saveurs. Aujourd’hui, les burgers McDonald’s comblent toutes les faims et toutes les envies ! ",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blta4be3167ed3dd264/61c33847897f132d1897bf66/fili%C3%A8re_bl%C3%A9.jpg?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "Nos buns sont réalisés avec de la farine de blé Label Rouge",
    titreBouton: "Notre filière blé",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt4e32a970bffd0792/61d866010f60435c58f20a0a/big-mac.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Big Mac<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt12c4ba5508646dae/615db7e1e3ec1729bb7dca4d/2154.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le McChicken<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6e07b794013d8694/61f0131b31d27121704958d1/FILET_O_FISH_-_2050.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Filet-O-Fish<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltfd0e6f14c8df2235/624b234e5d75e10434cae5c4/6970.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Double Filet-O-Fish<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt5718be23ff804bbe/61d86677d562a95eb8bd4179/cheeseburger.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Cheeseburger"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt235efe844da162e1/6077ee03ed7ed32e4a239c8c/6c7a7522998d2337713e844c49c07c01bd388ae0.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Double Cheeseburger"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt7bd616d07bebe8a5/616448bd6d339111180ad182/3008.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Double Cheese Bacon"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt97a9f9837c3a9b6a/615dbd97b084d018488c0a60/2803.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Triple Cheeseburger"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt5438a66bf8529c90/615dbe242e35f3558b3a9557/9772.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Triple Cheeseburger Bacon"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt8e73c57a90276fd9/620fd69aab1b594c886855ca/SACHET_4_MCNUGGETS_DD.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Chicken McNuggets<sup>TM</sup>"
      },
      
    ],

  },



  {
    nom_list: "Nos Salades du Jour",
    detail: "Découvrez Les Salades du Jour by McDonald's™, fraîchement coupées, fraîchement préparées* ! Elles sont composées de feuilles de salades fraÎches, françaises et de saison. Nos Salades du Jour sont accompagnées d'un petit pain bio lorsqu'elles sont commandées seules ou en menu Salade & Boisson. Elles sont également disponibles en menu Best-Of™ et Maxi Best-Of™. *Nos salades sont préparées et découpées chaque jour sur place. ",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6995bba3d0b5c5bb/61aa2455d19ff97d11e2baa4/Ble%CC%81_2021_Site_07.2026_18.jpeg?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "Nos filières ont du talent",
    titreBouton: "Découvrir nos filières",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt23f2fea2264ae104/61dcaa53f4460b5999cd59a7/classic-caesar-salade.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Classic Caesar"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltd9c4d8a195d90cc7/61dcb1b238c6045a491c1cfd/italian-mozza-pasta.png?auto=webp&width=1280&disable=upscale", 
        titre: "L'Italian Mozza & Pasta"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt365358e39f7c6191/62610d3a394abb652c23a2c2/COMPO_CHEVRE_BACON_INGREDIENTS.png?auto=webp&width=1280&disable=upscale", 
        titre: "La Chèvre & Bacon"
      },

      
    ],

  },


  {
    nom_list: "Petite faim",
    detail: "Les produits Petite Faim McDonald’s peuvent être savourés seuls, en tant que snack, ou dans le cadre d’un menu. McDonald’s propose de délicieux burgers, comme le cheeseburger ou l’indétrônable hamburger.",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt71f56d54793349eb/61dc0cbf2e34a35b722e6570/poupoules.JPG?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "Les œufs de nos Egg McMuffin™ sont issus de poules élevées en plein air en France",
    titreBouton: "En savoir plus",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt8f125a846d60b3e7/607ffe5cf77631234c4b45db/66789245c6dd98a5cd0730195536ee9b46c494bb.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Croque McDo"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltf5c226e4235804ee/624b225480cf5f6d0ee3a49c/12645.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le P'tit Wrap Boeuf Deluxe"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltd8c5c4fc1ab2310f/624b503b6acf3533dbd5f597/PTIT_WRAP_CHEVRE_2022.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le P'tit Wrap Chèvre"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltf105d5db421762ee/624b500209b7e235ce508112/PTIT_WRAP_RANCH_2022.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le P'tit Ranch"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt8e73c57a90276fd9/620fd69aab1b594c886855ca/SACHET_4_MCNUGGETS_DD.png?auto=webp&width=1280&disable=upscale", 
        titre: "Les Chicken McNuggets<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltff6e6ab1061d3847/615db75e8850556ef9d6d98b/2000.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Hamburger"
      },

      
    ],

  },


  {
    nom_list: "Nos Boissons",
    detail: "L’offre boisson de McDonald’s inclut des boissons chaudes et des boissons froides, sans oublier l’offre de boissons McCafé. Rafraîchissantes ou réconfortantes, de l’espresso simple ou double au ristretto, en passant par le café ou chocolat chaud, toutes les soifs de boisson peuvent être étanchées chez McDonald’s. ",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt03c5bbff5252a485/61e13f6c78158f3b4a8d5a87/Grains_de_caf%C3%A9_torr%C3%A9fi%C3%A9s.jpg?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "100% de nos grains de café et de nos thés sont certifiés Rainforest Alliance",
    titreBouton: "En savoir plus",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blta66db817bb5642be/6217a599c27bcd6ae2b6b9f8/Cup_eau.png?auto=webp&width=1280&disable=upscale", 
        titre: "Eau By Mcdo - Plate Nature"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt2988661b506739d3/61d863a520397f077b4a2a0b/6040.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Coca-Cola"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blteb535d2f60d9b0c7/61df1456da5f265993f60790/Lipton_Green_Ice_Tea.png?auto=webp&width=1280&disable=upscale", 
        titre: "Lipton"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltcd7bd3524f67c339/615db7ade6463f2c6c71ba02/5502.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Latte"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6726dd721d3affcf/615daf6f356ffd604e505bf0/10662.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Café Viennois"
      },

      
    ],

  },




  {
    nom_list: "Nos Desserts",
    detail: "À déguster à l’heure du goûter ou encore en fin de repas, les desserts McDonald’s sont fruités, glacés ou pâtissiers, pour pouvoir répondre à toutes les envies gourmandes ! Dans la gamme des muffins, brownies et autres donuts McDonald’s, laissez-vous tenter par la saveur réconfortante du chocolat, associé à la noisette. ",

    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltd04f6e1a13e79a5e/624421c8e144045c0061f2bb/McFlurry.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le McFurry<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt47ef177a71f4f706/61fab4f6f50c102811ace4b9/CATEGORIE_SUNDAE.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Sundae"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt96df574f43233097/615dc436e6463f2c6c71bb0d/4383.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Brownie Chocolat-Noisettes"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt1e85279c1460bb94/615db366d932354978cb7b7a/11439.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le Duo De Macarons"
      },

      
    ],

  },



  {
    nom_list: "Nos Frites & Sauces",
    detail: "Envie de bonnes frites ou de Deluxe Potatoes™ fondantes ? Quoi de mieux qu’une onctueuse sauce McDonald’s pour les accompagner ? Ketchup, sauce pommes-frites, sauce classic moutarde, ou encore sauce creamy deluxe… Classiques, originales ou exotiques, les sauces McDonald’s subliment à coup sûr vos instants gourmands ! Un large choix de sauces vous est aussi proposé en accompagnement des Salades du Jour.  ",
    image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt2d81168d173fd659/61e03b22e7e2125fea0e32e4/Image_Pdt_zoom.jpg?auto=webp&width=1280&disable=upscale&dpr=2",
    titre1: "100% de nos frites sont faites à partir de pommes de terre françaises.",
    titreBouton: "En savoir plus",
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt130eb8978cc923bf/615db7e9b084d018488c0a1e/3010.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Les Frites"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltf3a53a2980dd473f/61d7329e76db8c4b34706dbe/deluxe-potatoes.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Deluxe Potatoes<sup>TM</sup>"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt6164237f08b1666d/61d8612a8eaa330238b90120/ketchup.png?auto=webp&width=1280&disable=upscale", 
        titre: "Le Ketchup"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt445d2696e63d998a/615db65c56d7d556d4a5ab90/9021.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "La Sauce Pommes-Frites"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt1ea63ffbb1cd1266/615db6580ace7f2ef30e3e13/9109.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "La Sauce Creamy Deluxe"
      },

      
    ],

  },



  {
    nom_list: "Nos Grandes Salades",
    detail: "Grâce à des ingrédients à l’origine soigneusement contrôlée et des mélanges uniques, chaque salade McDonald’s fera de votre repas une délicieuse expérience, pleine de fraîcheur. Variez les plaisirs avec les différentes salades disponibles : la Salade Chicken Caesar et la Salade Italian Mozza",
   
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt30d69ed5f422f56d/61a5f530558ae97e60a9487e/4729.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "La Salade Chicken Caesar"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt8a123ab3dff11298/61a5f532473d4d6555cd70c7/4586.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "La Salade Italian Mozza"
      },
      
    ],

  },




  {
    nom_list: "L Offre McCafé",
    detail: "Offrez-vous une pause McCafé® ! Nous vous accueillons pour votre parenthèse quotidienne dans un espace chaleureux et convivial. Dégustez nos viennoiseries cuites sur place et nos pâtisseries d'inspiration américaine et accompagnez-les de boissons chaudes ou froides préparées sous vos yeux par nos baristas. ",
   
    liste_items : [
      {
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt2b131015dbe0ecdb/615dc419458af431a37c4451/11358.jpg?auto=webp&width=1280&disable=upscale", 
        titre: "Le McChoconuts"
      },
      { 
        image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt7c39410482fe0e74/6283c58419611a7d30107c73/DELIFRAPP_COOKIE_CHOCOLAT_AU_LAIT-VERRE_0_3_-_MKF_10691.png?auto=webp&width=1280&disable=upscale", 
        titre: "Délifrapp'<sup>TM</sup> Cookie"
      },
      
    ],

  },








]

// const MENU: Menu[] = [
//   { 
//     image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt552f0f8278bf324f/6077ee727d99e6231800b54d/menu_best_of.png?auto=webp&width=1280&disable=upscale", 
//     titre: "Le Menu Best Of<sup>TM</sup>"
//   },
//   { 
//     image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt552f0f8278bf324f/6077ee727d99e6231800b54d/menu_best_of.png?auto=webp&width=1280&disable=upscale", 
//     titre: "Le Menu Maxi Best Of<sup>TM</sup>"
//   },
//   { 
//     image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt2bac6e3ba9f8ff4d/61d7155272d47127d278acc5/menu-mc-first.png?auto=webp&width=1280&disable=upscale", 
//     titre: "Le Menu McFirst<sup>TM</sup>"
//   },
//   { 
//     image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blte32d0764681be93f/6266ce031ecf040608760e74/400x400_COMPO-PTITS-CONCOMBRES-HAMBURGER_LAD.png?auto=webp&width=1280&disable=upscale", 
//     titre: "Le Menu Happy Meal<sup>TM</sup>"
//   },
//   { 
//     image: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt42a7593b90d541d3/620f8f7e8e4d0461c7a002bd/MENU_SALADE_BOISSON.png?auto=webp&width=1280&disable=upscale", 
//     titre: "Le Menu Salade"
//   },
  
// ];