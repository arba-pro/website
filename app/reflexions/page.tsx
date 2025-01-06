import ImageFade from "@/components/image-fade";
import { cn } from "@/lib/utils";

export default function Reflexions() {
  const reflexions = [
    {
      title:
        "Petites leçons de la Serpentine (où il n'y a pas que les oiseaux)",
      author: "Sihem Lamine",
      file: "/website/images/reflexions/01_petite_lecon_de_la_serpentine.pdf",
    },
    {
      title: "La ville tunisienne - symptôme d’un malaise identitaire ?",
      author: "Sihem Lamine",
      date: "Septembre 2012",
      file: "/website/images/reflexions/02_la_ville_tunisienne.pdf",
    },
    {
      title: "Les amis de la 'High Line'",
      author: "Sihem Lamine",
      date: "Novembre 2012",
      file: "/website/images/reflexions/03_les_amis_de_la_high_line.pdf",
    },
    {
      title: "Sidi Yeti",
      author: "Sihem Lamine",
      date: "Janvier 2013",
      file: "/website/images/reflexions/04_sidi_yeti.pdf",
    },
    {
      title: "Maman",
      author: "Sihem Lamine",
      date: "Septembre 2015",
      file: "/website/images/reflexions/05_maman.pdf",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-xl font-medium tracking-tight">Réflexions</h1>
      </section>
      <section className="container mx-auto px-4 pt-4 lg:pt-12 pb-24">
        <div className="lg:flex lg:gap-8">
          <div className="w-full lg:w-1/2 xl:w-1/3 pb-8">
            <div className="relative">
              <ImageFade
                image={{
                  src: "/website/images/reflexions/01.jpg",
                  alt: "Reflexions",
                  width: 460,
                  height: 353,
                }}
                priority={true}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-2/3">
            <ul className="flex flex-col space-y-3 divide-y divide-gray-200 [&>*]:pt-0 [&>*:not(:first-child)]:pt-3">
              {reflexions.map((reflexion) => (
                <li key={reflexion.title}>
                  <a
                    className={cn(
                      "relative w-fit block",
                      "text-lg sm:text-xl font-medium leading-tight",
                      "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full ",
                      "after:scale-x-0 after:opacity-0 after:transition after:duration-300 after:origin-left",
                      "md:after:hover:scale-x-100 md:after:hover:opacity-100"
                    )}
                    href={reflexion.file}
                    download
                  >
                    {reflexion.title}
                  </a>
                  <p className="text-gray-500 mt-2">
                    {reflexion.author}
                    {reflexion.date && `, ${reflexion.date}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
