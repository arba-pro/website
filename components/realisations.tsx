import Link from "next/link";

import ImageFade from "@/components/image-fade";

import { getRealisations } from "@/lib/mdx";

export default async function Realisations() {
  const realisations = await getRealisations();
  return (
    <ul className="py-4 lg:py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {realisations.map((realisation) => (
        <li key={realisation.slug} className="flex flex-col h-full">
          <Link
            href={`/realisations/${realisation.slug}`}
            className="flex flex-col h-full"
          >
            <div className="flex-grow relative">
              <ImageFade image={realisation.cover_image ?? null} />
            </div>
            <span className="mt-2">{realisation.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
