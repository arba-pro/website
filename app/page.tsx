import Realisations from "@/components/realisations";

import Image from "next/image";

import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <>
      <section className="relative h-[60svh] lg:h-[95vh] flex flex-col overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            "before:content-[''] before:absolute before:inset-0 before:-z-10 before:w-full before:h-full before:max-w-[1680px] before:mx-auto",
            "before:bg-hero-image before:bg-cover before:bg-[position:50%_60%]"
          )}
        ></div>
        <div className="container mx-auto flex flex-col flex-grow ">
          <header className="p-4 pt-16 lg:pt-24">
            <h1 className="text-xl font-medium tracking-tight text-balance leading-tight">
              Jean-Baptiste Barache & Sihem Lamine
            </h1>
            <h2 className="text-lg font-normal tracking-tight">Architectes</h2>
          </header>
          <div className="px-4 flex-grow flex items-end pb-4 lg:pb-12 justify-end">
            <Image
              src="/website/images/distinctions/archinovo-logo.png"
              alt="Logo"
              width={709}
              height={709}
              className="w-20 h-20 lg:w-40 lg:h-40"
            />
          </div>
        </div>
        <div className="bg-gray-500">
          <div className="container mx-auto px-4 py-1.5">
            <p className="text-white font-mono text-sm lg:text-base">
              <span className="font-bold">L’Onde à Murat</span> – Grand Prix du
              Jury
            </p>
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
