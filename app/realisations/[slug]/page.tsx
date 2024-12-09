import { notFound } from "next/navigation";

import Realisation from "@/types/realisation";

import { getRealisations } from "@/lib/mdx";

import RealisationData from "@/components/realisation-data";
import RealisationContent from "@/components/realisation-content";
import RealisationUpdated from "@/components/realisation-updated";
import RealisationBody from "@/components/realisation-body";
import RealisationCopyright from "@/components/realisation-copyright";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
      <section className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-xl font-medium tracking-tight">
          <Link
            className={cn(
              "font-normal",
              "relative w-fit inline-block",
              "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full ",
              "after:scale-x-0 after:opacity-0 after:transition after:duration-300 after:origin-left",
              "after:hover:scale-x-100 after:hover:opacity-100"
            )}
            href="/#realisations"
          >
            Réalisations
          </Link>
          <span> / </span>
          {realisation.title}
        </h1>
      </section>
      <RealisationBody
        coverImage={realisation.cover_image}
        photos={realisation.photos}
        data={<RealisationData realisation={realisation} />}
        content={<RealisationContent content={realisation.content} />}
        updated={<RealisationUpdated date={realisation.time.updated} />}
        copyright={
          <RealisationCopyright copyright={realisation.copyright ?? []} />
        }
      />
    </>
  );
}
