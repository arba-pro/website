import { notFound } from "next/navigation";

import Realisation from "@/types/realisation";

import { getRealisations } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

import { CustomMDX } from "@/components/mdx-remote";
import ImageFade from "@/components/image-fade";

type Params = Promise<{ slug: string }>;

const Realisations = getRealisations();

export const generateStaticParams = async () => {
  return Realisations.map((realisation) => ({
    slug: `${realisation.slug}`,
  }));
};

export default async function RealisationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const realisation = Realisations.find(
    (realisation: Realisation) => realisation.slug === slug
  );

  if (!realisation) {
    return notFound();
  }

  function renderPlot() {
    if (
      !realisation ||
      !realisation.plot ||
      Object.keys(realisation.plot).length === 0
    ) {
      return null;
    }
    return (
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {Object.entries(realisation.plot).map(([key, value]) => (
          <li
            key={key}
            className="flex-basis-[calc(50%-1rem)] flex-grow-0 min-w-[calc(50%-1rem)]"
          >
            <h4 className="text-xs font-medium text-gray-400 font-mono">
              {key}
            </h4>
            <h3 className="text-sm font-medium">{value}</h3>
          </li>
        ))}
      </ul>
    );
  }

  function renderConstruction() {
    if (
      !realisation ||
      !realisation.construction ||
      Object.keys(realisation.construction).length === 0
    ) {
      return null;
    }
    return (
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {Object.entries(realisation.construction).map(([key, value]) => (
          <li
            key={key}
            className="flex-basis-[calc(50%-1rem)] flex-grow-0 min-w-[calc(50%-1rem)]"
          >
            <h4 className="text-xs font-medium text-gray-400 font-mono">
              {key}
            </h4>
            <h3 className="text-sm font-medium">{value}</h3>
          </li>
        ))}
      </ul>
    );
  }

  function renderAwards() {
    if (
      !realisation ||
      !realisation.awards ||
      realisation.awards.length === 0
    ) {
      return null;
    }
    return (
      <div className="">
        <h4 className="text-xs font-medium text-gray-400 font-mono">prix</h4>
        <ul>
          {realisation.awards.map((award) => (
            <li key={award}>
              <h3 className="text-sm font-medium">{award}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-xl font-medium tracking-tight">
          {realisation.title}
        </h1>
      </section>
      <section className="container mx-auto px-4 pt-4 lg:pt-12 pb-24">
        <div className="lg:flex lg:gap-8">
          <div className="w-full lg:w-1/2 xl:w-1/3">
            <div>
              <ImageFade
                src={realisation.cover_image.src}
                alt={realisation.cover_image.alt}
                width={realisation.cover_image.width}
                height={realisation.cover_image.height}
              />
            </div>
            <section className="flex flex-col divide-y divide-gray-200 [&>*]:py-4 pb-8">
              {renderAwards()}
              {renderPlot()}
              {renderConstruction()}
            </section>
          </div>
          <div className="w-full lg:w-1/2 xl:w-2/3">
            {realisation.content && <CustomMDX source={realisation.content} />}
            <p className="pt-4">
              {formatDate(new Date(realisation.time.updated))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
