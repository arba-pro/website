import CoverImage from "@/types/cover_image";

export type Press = {
  title: string;
  year: number;
  month?: string;
  border?: boolean;
  file?: string;
  cover_image: CoverImage;
};

const recentPresses: Press[] = [
  {
    title: "AMC",
    year: 2024,
    month: "Octobre",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AMC_Octobre2024.pdf",
    cover_image: {
      src: "/images/presse/AMC_Octobre2024.jpg",
      alt: "AMC Octobre 2024",
      width: 805,
      height: 1050,
    },
  },
  {
    title: "ARQUITECTURA",
    year: 2020,
    month: "Mars",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/ARQUITECTURA_marzo2020.pdf",
    cover_image: {
      src: "/images/presse/ARQUITECTURA_marzo2020.jpg",
      alt: "ARQUITECTURA Mars 2020",
      width: 795,
      height: 1050,
    },
  },
  {
    title: "À vivre",
    year: 2019,
    month: "Août",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Aout2019.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Aout2019.jpg",
      alt: "À vivre Août 2019",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2021,
    month: "Décembre",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Decembre2021.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Decembre2021.jpg",
      alt: "À vivre Decembre 2021",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2024,
    month: "Décembre",
    border: true,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Decembre2024.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Decembre2024.jpg",
      alt: "À vivre Decembre 2024",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2022,
    month: "Janvier",
    border: true,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Janvier2022.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Janvier2022.jpg",
      alt: "À vivre Janvier 2022",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2022,
    month: "Juin",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Juin2022.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Juin2022.jpg",
      alt: "À vivre Juin 2022",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2024,
    month: "Mars",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Mars2024.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Mars2024.jpg",
      alt: "À vivre Mars 2024",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "À vivre",
    year: 2022,
    month: "Septembre",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/AVivre_Septembre2022.pdf",
    cover_image: {
      src: "/images/presse/AVivre_Septembre2022.jpg",
      alt: "À vivre Septembre 2022",
      width: 804,
      height: 1051,
    },
  },
  {
    title: "Off the Grid",
    year: 2019,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Book_OffTheGrid_2019.pdf",
    cover_image: {
      src: "/images/presse/Book_OffTheGrid_2019.jpg",
      alt: "Off the Grid",
      width: 850,
      height: 1050,
    },
  },
  {
    title: "d’a",
    year: 2024,
    month: "Mars",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/DA_Mars2024.pdf",
    cover_image: {
      src: "/images/presse/DA_Mars2024.jpg",
      alt: "d’a Mars 2024",
      width: 850,
      height: 1050,
    },
  },
  {
    title: "Dwell",
    year: 2023,
    month: "Août",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Dwell_August2023.pdf",
    cover_image: {
      src: "/images/presse/Dwell_August2023.jpg",
      alt: "Dwell Août 2023",
      width: 813,
      height: 1049,
    },
  },
  {
    title: "Dwell",
    year: 2022,
    month: "Février",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Dwell_February2022.pdf",
    cover_image: {
      src: "/images/presse/Dwell_February2022.jpg",
      alt: "Dwell Février 2022",
      width: 813,
      height: 1049,
    },
  },
  {
    title: "Dwell",
    year: 2024,
    month: "Octobre",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Dwell_October2024.pdf",
    cover_image: {
      src: "/images/presse/Dwell_October2024.jpg",
      alt: "Dwell Octobre 2024",
      width: 813,
      height: 1049,
    },
  },
  {
    title: "Häuser",
    year: 2024,
    month: "Mars",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Haeuser_Marz2024.pdf",
    cover_image: {
      src: "/images/presse/Haeuser_Marz2024.jpg",
      alt: "Häuser Mars 2024",
      width: 813,
      height: 1050,
    },
  },
  {
    title: "Koya",
    year: 2020,
    month: "Septembre",
    border: true,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/KOYA_September2020.pdf",
    cover_image: {
      src: "/images/presse/KOYA_September2020.jpg",
      alt: "Koya Septembre 2020",
      width: 772,
      height: 1051,
    },
  },
  {
    title: "La Maison écologique",
    year: 2019,
    month: "Août",
    border: true,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/LaMaisonEcologiqueNo112_AoutSept2019.pdf",
    cover_image: {
      src: "/images/presse/LaMaisonEcologiqueNo112_AoutSept2019.jpg",
      alt: "La Maison écologique No 112 Août 2019",
      width: 805,
      height: 1050,
    },
  },
  {
    title: "Le Moniteur",
    year: 2020,
    month: "Mars",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/LeMoniteur_Mars2020.pdf",
    cover_image: {
      src: "/images/presse/LeMoniteur_Mars2020.jpg",
      alt: "Le Moniteur Mars 2020",
      width: 813,
      height: 1049,
    },
  },
  {
    title: "Neo",
    year: 2022,
    month: "Décembre",
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Neo_Diciembre2022.pdf",
    cover_image: {
      src: "/images/presse/Neo_Diciembre2022.jpg",
      alt: "Neo Décembre 2022",
      width: 821,
      height: 1050,
    },
  },
  {
    title: "Sequence Bois",
    year: 2022,
    month: "Octobre",
    border: true,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/SequenceBois_Octobre2022.pdf",
    cover_image: {
      src: "/images/presse/SequenceBois_Octobre2022.jpg",
      alt: "Sequence Bois Octobre 2022",
      width: 751,
      height: 1050,
    },
  },
  {
    title: "Trä",
    year: 2020,
    file: "https://arba-pro.s3-eu-central-1.amazonaws.com/presse/Tra-2020.pdf",
    cover_image: {
      src: "/images/presse/Tra-2020.jpg",
      alt: "Tra 2020",
      width: 752,
      height: 1049,
    },
  },
];

const archiveArchitectures: Press[] = [
  {
    title: "À vivre",
    year: 2019,
    month: "Décembre",
    cover_image: {
      src: "/images/presse/archive/archi/01.jpg",
      alt: "À vivre Décembre 2019",
      width: 601,
      height: 785,
    },
  },

  {
    title: "d’a",
    year: 2018,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/archi/02.jpg",
      alt: "d’a Novembre 2018",
      width: 388,
      height: 507,
    },
  },

  {
    title: "À vivre",
    year: 2018,
    month: "Septembre",
    cover_image: {
      src: "/images/presse/archive/archi/03.jpg",
      alt: "À vivre Septembre 2018",
      width: 601,
      height: 785,
    },
  },

  {
    title: "Le Moniteur",
    year: 2018,
    month: "Août",
    cover_image: {
      src: "/images/presse/archive/archi/04.jpg",
      alt: "Le Moniteur Août 2018",
      width: 396,
      height: 507,
    },
  },

  {
    title: "d’a",
    year: 2016,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/archi/05.jpg",
      alt: "d’a Novembre 2016",
      width: 397,
      height: 507,
    },
  },

  {
    title: "AMC",
    year: 2016,
    cover_image: {
      src: "/images/presse/archive/archi/06.jpg",
      alt: "AMC 2016",
      width: 400,
      height: 507,
    },
  },

  {
    title: "La Maison écologique",
    year: 2014,
    month: "Avril",
    cover_image: {
      src: "/images/presse/archive/archi/07.jpg",
      alt: "La Maison écologique Avril 2014",
      width: 374,
      height: 507,
    },
  },

  {
    title: "d’a",
    year: 2016,
    month: "Avril",
    cover_image: {
      src: "/images/presse/archive/archi/08.jpg",
      alt: "08",
      width: 390,
      height: 507,
    },
  },

  {
    title: "AMC",
    year: 2014,
    month: "Juillet",
    cover_image: {
      src: "/images/presse/archive/archi/09.jpg",
      alt: "AMC Juillet 2014",
      width: 384,
      height: 507,
    },
  },

  {
    title: "AMC",
    year: 2006,
    month: "Mars",
    cover_image: {
      src: "/images/presse/archive/archi/10.jpg",
      alt: "AMC Mars 2006",
      width: 387,
      height: 507,
    },
  },

  {
    title: "d’a",
    year: 2014,
    month: "Juillet",
    cover_image: {
      src: "/images/presse/archive/archi/11.jpg",
      alt: "d’a Juillet 2014",
      width: 393,
      height: 507,
    },
  },

  {
    title: "d’a",
    year: 2010,
    month: "Juin",
    cover_image: {
      src: "/images/presse/archive/archi/12.jpg",
      alt: "d’a Juin 2010",
      width: 390,
      height: 507,
    },
  },

  {
    title: "d’a",
    year: 2006,
    month: "Juin",
    cover_image: {
      src: "/images/presse/archive/archi/13.jpg",
      alt: "d’a Juin 2006",
      width: 386,
      height: 507,
    },
  },

  {
    title: "À vivre",
    year: 2013,
    month: "Décembre",
    cover_image: {
      src: "/images/presse/archive/archi/14.jpg",
      alt: "À vivre Décembre 2013",
      width: 1338,
      height: 1743,
    },
  },

  {
    title: "À vivre",
    year: 2012,
    month: "Janvier",
    cover_image: {
      src: "/images/presse/archive/archi/15.jpg",
      alt: "À vivre Janvier 2012",
      width: 644,
      height: 814,
    },
  },

  {
    title: "À vivre",
    year: 2006,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/archi/16.jpg",
      alt: "À vivre Novembre 2006",
      width: 601,
      height: 750,
    },
  },

  {
    title: "Dwell",
    year: 2009,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/archi/17--Dwell-Nov.-2009-1.jpg",
      alt: "Dwell Novembre 2009",
      width: 813,
      height: 1050,
    },
  },

  {
    title: "Dwell",
    year: 2014,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/archi/18--Dwell-Mai-2014-1.jpg",
      alt: "Dwell Mai 2014",
      width: 813,
      height: 1049,
    },
  },

  {
    title: "Dwell",
    year: 2012,
    month: "Juin",
    cover_image: {
      src: "/images/presse/archive/archi/19--Dwell-Juin-2012-1.jpg",
      alt: "Dwell Juin 2012",
      width: 812,
      height: 1050,
    },
  },

  {
    title: "L’arca International",
    year: 2006,
    month: "Septembre",
    cover_image: {
      src: "/images/presse/archive/archi/20.jpg",
      alt: "L’arca International Septembre 2006",
      width: 358,
      height: 507,
    },
  },

  {
    title: "L’arca",
    year: 2006,
    month: "Octobre",
    cover_image: {
      src: "/images/presse/archive/archi/21.jpg",
      alt: "L’arca Octobre 2006",
      width: 360,
      height: 507,
    },
  },

  {
    title: "Index",
    year: 2012,
    cover_image: {
      src: "/images/presse/archive/archi/22.jpg",
      alt: "Index 2012",
      width: 404,
      height: 507,
    },
  },

  {
    title: "c3",
    year: 2010,
    month: "Février",
    cover_image: {
      src: "/images/presse/archive/archi/23.jpg",
      alt: "c3 Février 2010",
      width: 376,
      height: 507,
    },
  },

  {
    title: "Arkitekten",
    year: 2012,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/archi/24.jpg",
      alt: "Arkitekten Novembre 2012",
      width: 372,
      height: 507,
    },
  },

  {
    title: "idea",
    year: 2006,
    cover_image: {
      src: "/images/presse/archive/archi/25.jpg",
      alt: "idea 2006",
      width: 361,
      height: 507,
    },
  },

  {
    title: "AiTim",
    year: 2007,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/archi/26.jpg",
      alt: "AiTim Mai 2007",
      width: 353,
      height: 507,
    },
  },

  {
    title: "Natura Maison",
    year: 2015,
    month: "Janvier",
    cover_image: {
      src: "/images/presse/archive/archi/27.jpg",
      alt: "Natura Maison Janvier 2015",
      width: 397,
      height: 507,
    },
  },

  {
    title: "Bois",
    year: 2010,
    month: "Août",
    cover_image: {
      src: "/images/presse/archive/archi/28.jpg",
      alt: "Bois Août 2010",
      width: 385,
      height: 507,
    },
  },

  {
    title: "Bois",
    year: 2009,
    month: "Mars",
    cover_image: {
      src: "/images/presse/archive/archi/29.jpg",
      alt: "Bois Mars 2009",
      width: 389,
      height: 507,
    },
  },

  {
    title: "Häuser",
    year: 2007,
    month: "Mars",
    cover_image: {
      src: "/images/presse/archive/archi/30.jpg",
      alt: "Häuser Mars 2007",
      width: 383,
      height: 507,
    },
  },
];

const archiveDeco: Press[] = [
  {
    title: "Marie Claire Maison",
    year: 2014,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/deco/01.jpg",
      alt: "Marie Claire Maison Mai 2014",
      width: 385,
      height: 507,
    },
  },

  {
    title: "Marie Claire Maison",
    year: 2010,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/deco/02.jpg",
      alt: "Marie Claire Maison Mai 2010",
      width: 395,
      height: 507,
    },
  },

  {
    title: "Marie Claire Maison",
    year: 2007,
    month: "Avril",
    cover_image: {
      src: "/images/presse/archive/deco/03.jpg",
      alt: "Marie Claire Maison Avril 2007",
      width: 386,
      height: 507,
    },
  },

  {
    title: "Grand Designs",
    year: 2007,
    month: "Décembre",
    cover_image: {
      src: "/images/presse/archive/deco/04.jpg",
      alt: "Grand Designs Décembre 2007",
      width: 408,
      height: 507,
    },
  },
];

const archiveDivers: Press[] = [
  {
    title: "Le Monde",
    year: 2011,
    month: "Juin",
    cover_image: {
      src: "/images/presse/archive/divers/01--Le-Monde---17-Juin-2011-1.jpg",
      alt: "Le Monde Juin 2011",
      width: 728,
      height: 1050,
    },
  },

  {
    title: "Libération",
    year: 2006,
    month: "Juin",
    cover_image: {
      src: "/images/presse/archive/divers/02.jpg",
      alt: "Libération Juin 2006",
      width: 373,
      height: 507,
    },
  },

  {
    title: "Libération",
    year: 2006,
    month: "Décembre",
    cover_image: {
      src: "/images/presse/archive/divers/03.jpg",
      alt: "Libération Décembre 2006",
      width: 383,
      height: 507,
    },
  },

  {
    title: "Avantages",
    year: 2016,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/divers/04.jpg",
      alt: "Avantages Mai 2016",
      width: 512,
      height: 643,
    },
  },

  {
    title: "Artisans mag",
    year: 2016,
    month: "Février",
    cover_image: {
      src: "/images/presse/archive/divers/05.jpg",
      alt: "Artisans mag Février 2016",
      width: 378,
      height: 507,
    },
  },

  // {
  //   title: "06",
  //   year: 2020,
  //   cover_image: {
  //     src: "/images/presse/archive/divers/06.jpg",
  //     alt: "06",
  //     width: 660,
  //     height: 507,
  //   },
  // },

  {
    title: "Télérama",
    year: 2009,
    month: "Avril",
    cover_image: {
      src: "/images/presse/archive/divers/07.jpg",
      alt: "Télérama Avril 2009",
      width: 407,
      height: 507,
    },
  },

  {
    title: "Sciences et Avenir",
    year: 2006,
    month: "Décembre",
    cover_image: {
      src: "/images/presse/archive/divers/08.jpg",
      alt: "Sciences et Avenir Décembre 2006",
      width: 388,
      height: 507,
    },
  },

  // {
  //   title: "L’express Styles",
  //   year: 2020,
  //   cover_image: {
  //     src: "/images/presse/archive/divers/09.jpg",
  //     alt: "09",
  //     width: 378,
  //     height: 507,
  //   },
  // },

  {
    title: "La Vanguardia",
    year: 2009,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/divers/10--Lavanguardia-Magazine---Mai-2009-1.jpg",
      alt: "La Vanguardia Mai 2009",
      width: 828,
      height: 1050,
    },
  },
];

const archiveLivres: Press[] = [
  {
    title: "Prix National Construction Bois",
    year: 2018,
    cover_image: {
      src: "/images/presse/archive/livres/01--Prix-National-Construction-Bois-2018-1.jpg",
      alt: "Prix National Construction Bois 2018",
      width: 1050,
      height: 1050,
    },
  },

  {
    title: "Catalogue Biennale Venise",
    year: 2016,
    cover_image: {
      src: "/images/presse/archive/livres/02--Catalogue-Biennale-Venise-2016-1.jpg",
      alt: "Catalogue Biennale Venise 2016",
      width: 750,
      height: 1049,
    },
  },

  {
    title: "Habiter La Montagne",
    year: 2017,
    cover_image: {
      src: "/images/presse/archive/livres/03--Habiter-La-Montagne-2017-1.jpg",
      alt: "Habiter La Montagne 2017",
      width: 792,
      height: 1050,
    },
  },

  {
    title: "Eco Housebook",
    year: 2009,
    cover_image: {
      src: "/images/presse/archive/livres/04_eco_Housebook.jpg",
      alt: "Eco Housebook 2009",
      width: 935,
      height: 1050,
    },
  },

  {
    title: "Small Wood Houses",
    year: 2008,
    cover_image: {
      src: "/images/presse/archive/livres/05--Small-wood-houses-2008-1.jpg",
      alt: "Small Wood Houses 2008",
      width: 972,
      height: 1050,
    },
  },

  {
    title: "Construire en Bois Aujourd'hui",
    year: 2007,
    month: "Novembre",
    cover_image: {
      src: "/images/presse/archive/livres/06--Construire-en-bois-aujourd-hui-Nov-2007-1.jpg",
      alt: "Construire en Bois Aujourd'hui Novembre 2007",
      width: 940,
      height: 1050,
    },
  },

  {
    title: "À vivre Best Of",
    year: 2010,
    cover_image: {
      src: "/images/presse/archive/livres/07.jpg",
      alt: "À vivre Best Of 2010",
      width: 732,
      height: 927,
    },
  },

  {
    title: "Vivir con Madera",
    year: 2007,
    cover_image: {
      src: "/images/presse/archive/livres/08.jpg",
      alt: "Vivir con Madera 2007",
      width: 397,
      height: 507,
    },
  },

  {
    title: "Archi pas cher",
    year: 2011,
    month: "Mai",
    cover_image: {
      src: "/images/presse/archive/livres/09--Archi-pas-cher-Mai-2011-1.jpg",
      alt: "Archi pas cher Mai 2011",
      width: 1060,
      height: 1050,
    },
  },

  {
    title: "Archi pas cher",
    year: 2009,
    month: "Octobre",
    cover_image: {
      src: "/images/presse/archive/livres/10--Archi-pas-cher-Oct.-2009-1.jpg",
      alt: "Archi pas cher Octobre 2009",
      width: 1069,
      height: 1050,
    },
  },

  {
    title: "Archi pas cher",
    year: 2006,
    month: "Septembre",
    cover_image: {
      src: "/images/presse/archive/livres/11--Archi-pas-cher-Sept.-2006-1.jpg",
      alt: "Archi pas cher Septembre 2006",
      width: 1058,
      height: 1050,
    },
  },
];

export const presses: Press[] = [
  ...recentPresses,
  ...archiveArchitectures,
  ...archiveDeco,
  ...archiveDivers,
  ...archiveLivres,
];
