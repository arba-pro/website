import Realisations from "@/components/realisations";

import Image from "next/image";

export default async function Home() {
  return (
    <>
      <section className="bg-hero-image bg-cover bg-center h-[60dvh] lg:h-[95dvh] flex flex-col">
        <div className="container mx-auto flex flex-col flex-grow">
          <header className="p-4 pt-16 lg:pt-24">
            <h1 className="text-xl font-medium tracking-tight text-balance">
              Jean-Baptiste Barache & Sihem Lamine
            </h1>
            <h2 className="text-lg font-normal tracking-tight">Architectes</h2>
          </header>
          <div className="px-4 flex-grow flex items-end pb-12 justify-end">
            <Image
              src="/website/archinovo-logo.png"
              alt="Logo"
              width={709}
              height={709}
              className="w-20 h-20 lg:w-40 lg:h-40"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h1
          id="realisations"
          className="px-4 pt-16 lg:pt-24 text-xl font-medium tracking-tight"
        >
          Réalisations
        </h1>
        <Realisations />
      </section>
    </>
  );
}