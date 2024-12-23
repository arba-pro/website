import Link from "next/link";

import ImageFade from "@/components/image-fade";

import { getDesigns } from "@/lib/mdx";

export default async function Design() {
  const designs = await getDesigns();

  return (
    <section className="container mx-auto">
      <h1 className="px-4 pt-16 lg:pt-24 text-xl font-medium tracking-tight">
        Design
      </h1>
      <ul className="py-4 lg:py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {designs.map((design) => (
          <li key={design.slug} className="flex flex-col h-full">
            <Link
              href={`/design/${design.slug}`}
              className="flex flex-col h-full"
            >
              <div className="flex-grow relative">
                <ImageFade image={design.cover_image ?? null} />
              </div>
              <span className="mt-2">{design.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
