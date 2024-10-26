import { MDXRemote } from "next-mdx-remote/rsc";

import { getRealisations } from "@/lib/mdx";

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
    (realisation: { slug: string }) => realisation.slug === slug
  );

  return (
    <section className="container mx-auto px-4 pt-24">
      <h1>{realisation?.title}</h1>
      <p>{realisation?.time.created}</p>
      <p>{realisation?.time.updated}</p>
      <div>
        {realisation?.content && <MDXRemote source={realisation.content} />}
      </div>
    </section>
  );
}
