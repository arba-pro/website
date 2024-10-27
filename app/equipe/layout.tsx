import ImageFade from "@/components/image-fade";

export default function EquipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-xl font-medium tracking-tight">Équipe</h1>
      </section>
      <section className="container mx-auto px-4 pt-4 lg:pt-12 pb-24">
        <div className="lg:flex lg:gap-8">
          <div className="w-full lg:w-1/3 pb-8">
            <ImageFade
              src="/website/JB-et-Sihem.jpg"
              alt="JB et Sihem"
              width={460}
              height={353}
            />
          </div>
          <div className="w-full lg:w-2/3">{children}</div>
        </div>
      </section>
    </>
  );
}
