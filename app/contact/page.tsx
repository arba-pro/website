import ImageFade from "@/components/image-fade";

export default function Contact() {
  return (
    <>
      <section className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-xl font-medium tracking-tight">Contact</h1>
      </section>
      <section className="container mx-auto px-4 pt-4 lg:pt-12 pb-24">
        <div className="lg:flex lg:gap-8">
          <div className="w-full lg:w-1/2 xl:w-1/3 pb-8">
            <div className="relative">
              <ImageFade
                image={{
                  src: "/website/carte.png",
                  alt: "Carte – 135 Rue du Faubourg du Temple",
                  width: 1819,
                  height: 1671,
                }}
                priority={true}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-2/3">
            <p>135 Rue du Faubourg du Temple -</p>
            <p>75010 Paris -</p>
            <p>Tel: 06 12 26 00 56</p>
            <p>
              <span>Email:&nbsp;</span>
              {/* prettier-ignore */}
              <span>barache</span>
              <span className="hidden">bot</span>
              <span>.</span>
              <span>lamine</span>
              <span className="hidden">trap</span>
              <span>@</span>
              <span>gmail.com</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
