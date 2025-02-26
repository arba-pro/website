import ImageFade from "@/components/image-fade";
import Image from "next/image";

import { getRealisationOrThrow } from "@/lib/mdx";
import Realisation from "@/types/realisation";
import CoverImage from "@/types/cover_image";

type Award = {
  title: string;
  cover_image?: CoverImage;
};

type Distinction = {
  year: number;
  title: string;
  award: Award;
  realisation: Realisation;
};

export default async function Distinctions() {
  const entreLesMurs = await getRealisationOrThrow("entre-les-murs");
  const laHalle = await getRealisationOrThrow("la-halle");
  const maisonDansLaPrairie = await getRealisationOrThrow(
    "maison-dans-la-prairie"
  );
  const maisonDansLeJardin = await getRealisationOrThrow(
    "maison-dans-le-jardin"
  );
  const laLanterne = await getRealisationOrThrow("la-lanterne");
  const maisonDansLaForet = await getRealisationOrThrow("maison-dans-la-foret");
  const maisonDansLePre = await getRealisationOrThrow("maison-dans-le-pre");
  const maisonTraversee = await getRealisationOrThrow("maison-traversee");
  const maisonDansUnChamp = await getRealisationOrThrow("maison-dans-un-champ");
  const londeMurat = await getRealisationOrThrow("l-onde");
  const kiosque = await getRealisationOrThrow("le-kiosque");
  const maisonDevantLaDune = await getRealisationOrThrow(
    "maison-devant-la-dune"
  );
  const maisonSurLeMur = await getRealisationOrThrow("maison-sur-le-mur");
  const petiteMaison = await getRealisationOrThrow("petite-maison");

  const prixNationalDeLaConstruction = {
    title: "Prix National de la Construction",
    cover_image: {
      src: "/images/distinctions/prix-national-de-la-construction.png",
      alt: "Prix National de la Construction",
      width: 360,
      height: 360,
    },
  };

  const prixRegionaleDeLaConstruction = {
    title: "Prix Régional de la Construction",
    cover_image: {
      src: "/images/distinctions/prix-national-de-la-construction.png",
      alt: "Prix Régional de la Construction",
      width: 360,
      height: 360,
    },
  };

  const prixArchinovo = {
    title: "Prix Archinovo",
    cover_image: {
      src: "/images/distinctions/archinovo-logo.png",
      alt: "Prix National de la Construction",
      width: 709,
      height: 709,
    },
  };

  const tropheesBois = {
    title: "Trophées Bois Île-de-France",
    cover_image: {
      src: "/images/distinctions/trophees-bois.png",
      alt: "Trophées Bois Île-de-France",
      width: 800,
      height: 800,
    },
  };

  const archiContemporaine = {
    title: "Archi Contemporaine",
    cover_image: {
      src: "/images/distinctions/archi-contemporaine.png",
      alt: "Archi Contemporaine",
      width: 150,
      height: 150,
    },
  };

  const prixBoisBasseNormandie = {
    title: "Prix Bois Basse Normandie",
    cover_image: {
      src: "/images/distinctions/prix-basse-normandie.png",
      alt: "Prix Bois Basse Normandie",
      width: 407,
      height: 407,
    },
  };

  const salonMaisonBois = {
    title: "Salon Maison Bois",
    cover_image: {
      src: "/images/distinctions/salon-maison-bois.png",
      alt: "Salon Maison Bois",
      width: 118,
      height: 188,
    },
  };

  const lauriersConstructionBois = {
    title: "Lauriers de la Construction Bois",
    cover_image: {
      src: "/images/distinctions/lauriers-de-la-construction-bois.png",
      alt: "Lauriers de la Construction Bois",
      width: 230,
      height: 230,
    },
  };

  const prixDArchitectures = {
    title: "Prix d'a 10+1",
    cover_image: {
      src: "/images/distinctions/prix-d-architectures.png",
      alt: "Prix d'a 10+1",
      width: 650,
      height: 650,
    },
  };

  const caue = {
    title:
      "Le Conseil d'architecture, d'urbanisme et de l'environnement du Val-de-Marne",
    cover_image: {
      src: "/images/distinctions/caue.png",
      alt: "Le Conseil d'architecture, d'urbanisme et de l'environnement du Val-de-Marne",
      width: 480,
      height: 480,
    },
  };

  const dwell = {
    title: "Dwell",
    cover_image: {
      src: "/images/distinctions/dwell.png",
      alt: "Dwell",
      width: 480,
      height: 480,
    },
  };

  const maisonsPaysannesFrance = {
    title: "Maisons Paysannes de France",
    cover_image: {
      src: "/images/distinctions/maisons-paysannes-de-france.png",
      alt: "Maisons Paysannes de France",
      width: 480,
      height: 480,
    },
  };

  const distinctions: Distinction[] = [
    {
      year: 2024,
      title: "Nominé",
      award: prixDArchitectures,
      realisation: kiosque,
    },
    {
      year: 2023,
      title: "Grand Prix du Jury",
      award: prixArchinovo,
      realisation: londeMurat,
    },
    {
      year: 2023,
      title: "Lauréat",
      award: prixNationalDeLaConstruction,
      realisation: maisonDevantLaDune,
    },
    {
      year: 2023,
      title: "Palmarès",
      award: caue,
      realisation: maisonSurLeMur,
    },
    {
      year: 2022,
      title: "Prix des Etudiants",
      award: prixRegionaleDeLaConstruction,
      realisation: maisonSurLeMur,
    },
    {
      year: 2021,
      title: "Design Awards",
      award: dwell,
      realisation: petiteMaison,
    },
    {
      year: 2020,
      title: "Prix",
      award: maisonsPaysannesFrance,
      realisation: entreLesMurs,
    },
    {
      year: 2019,
      title: "Mention Ruralité",
      award: prixNationalDeLaConstruction,
      realisation: londeMurat,
    },
    {
      year: 2018,
      title: "Lauréat 1er prix",
      award: prixNationalDeLaConstruction,
      realisation: entreLesMurs,
    },
    {
      year: 2015,
      title: "Prix Habitat Durable",
      award: prixArchinovo,
      realisation: laHalle,
    },
    {
      year: 2014,
      title: "Lauréat 2ème prix",
      award: prixNationalDeLaConstruction,
      realisation: maisonDansLaPrairie,
    },
    {
      year: 2018,
      title: "Lauréat",
      award: tropheesBois,
      realisation: entreLesMurs,
    },
    {
      year: 2012,
      title: "Lauréat 1er Palmares",
      award: archiContemporaine,
      realisation: maisonDansLeJardin,
    },
    {
      year: 2015,
      title: "Lauréat",
      award: prixBoisBasseNormandie,
      realisation: maisonDansLaPrairie,
    },
    {
      year: 2015,
      title: "Lauréat",
      award: tropheesBois,
      realisation: laLanterne,
    },
    {
      year: 2010,
      title: "Mention",
      award: salonMaisonBois,
      realisation: maisonDansLaForet,
    },
    {
      year: 2009,
      title: "Lauréat",
      award: lauriersConstructionBois,
      realisation: maisonDansLePre,
    },
    {
      year: 2009,
      title: "Lauréat",
      award: lauriersConstructionBois,
      realisation: maisonTraversee,
    },
    {
      year: 2008,
      title: "1er Prix",
      award: salonMaisonBois,
      realisation: maisonDansLePre,
    },
    {
      year: 2008,
      title: "Mention",
      award: salonMaisonBois,
      realisation: maisonTraversee,
    },
    {
      year: 2006,
      title: "Prix “Coup de Coeur”",
      award: salonMaisonBois,
      realisation: maisonDansUnChamp,
    },
  ];

  return (
    <section className="container mx-auto">
      <h1 className="px-4 pt-16 lg:pt-24 text-xl font-medium tracking-tight">
        Distinctions
      </h1>
      <ul className="py-4 lg:py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {distinctions.map((distinction) => (
          <li
            key={`${distinction.award.title}-${distinction.year}-${distinction.realisation.slug}`}
            className="flex flex-col h-full"
          >
            <div className="flex-grow relative">
              <ImageFade image={distinction.realisation.cover_image ?? null} />
            </div>

            <div className="flex mt-2 gap-3 items-center">
              <Image
                src={distinction.award.cover_image?.src ?? ""}
                alt={distinction.award.cover_image?.alt ?? ""}
                width={distinction.award.cover_image?.width ?? 0}
                height={distinction.award.cover_image?.height ?? 0}
                className="w-20 h-20"
              />
              <div className="w-full min-w-0">
                <p className="font-bold leading-tight">
                  {distinction.title}
                  <span className="font-normal">, {distinction.year}</span>
                </p>
                <p className="text-sm truncate">{distinction.award.title}</p>
                <p className="border-t border-gray-200 mt-1 pt-1">
                  {distinction.realisation.title}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
