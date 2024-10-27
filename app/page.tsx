import Realisations from "@/components/realisations";

export default async function Home() {
  return (
    <>
      <section className="bg-hero-image bg-cover bg-center h-[90dvh]">
        <div className="container mx-auto">
          <header className="p-4 pt-24">
            <h1 className="text-xl font-medium tracking-tight">
              Jean-Baptiste Barache & Sihem Lamine
            </h1>
            <h2 className="text-lg font-normal tracking-tight">Architectes</h2>
          </header>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="px-4 pt-8"></div>
        <h1
          id="realisations"
          className="px-4 pt-24 text-xl font-medium tracking-tight"
        >
          Réalisations
        </h1>
        <Realisations />
      </section>
    </>
  );
}
