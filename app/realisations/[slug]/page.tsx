import Image from "next/image";
import { notFound } from "next/navigation";

import Realisation from "@/types/realisation";

import { getRealisations } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

import { CustomMDX } from "@/components/mdx-remote";

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

  return (
    <>
      <section className="container mx-auto px-4 pt-24">
        <h1 className="text-xl font-medium tracking-tight">
          {realisation.title}
        </h1>
      </section>
      <section className="container mx-auto px-4 pt-12">
        <div className="flex gap-8">
          <div className="w-1/3">
            <Image
              src={realisation.cover_image.src}
              alt={realisation.cover_image.alt}
              width={realisation.cover_image.width}
              height={realisation.cover_image.height}
            />
          </div>
          <div className="w-2/3">
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
