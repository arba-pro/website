import { notFound } from "next/navigation";

import Design from "@/types/design";

import { getDesigns } from "@/lib/mdx";

import Link from "next/link";
import { cn } from "@/lib/utils";
import DetailBody from "@/components/detail-body";
import DetailContent from "@/components/detail-content";
import DetailUpdated from "@/components/detail-updated";
import DetailCopyright from "@/components/detail-copyright";

type Params = Promise<{ slug: string }>;

const Designs = getDesigns();

export const generateStaticParams = async () => {
  return Designs.map((design) => ({
    slug: `${design.slug}`,
  }));
};

export default async function DesignPage({ params }: { params: Params }) {
  const { slug } = await params;
  const design = Designs.find((design: Design) => design.slug === slug);

  if (!design) {
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
            href="/design"
          >
            Design
          </Link>
          <span> / </span>
          {design.title}
        </h1>
      </section>
      <DetailBody
        coverImage={design.cover_image}
        photos={design.photos}
        content={<DetailContent content={design.content} />}
        updated={<DetailUpdated date={design.time.updated} />}
        copyright={<DetailCopyright copyright={design.copyright} />}
      />
    </>
  );
}
