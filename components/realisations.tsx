import Link from "next/link";
import Image from "next/image";
import { getRealisations } from "@/lib/mdx";

const realisations = getRealisations();

export default function Realisations() {
  return (
    <ul className="py-24 px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {realisations.map((realisation) => (
        <li key={realisation.slug} className="flex flex-col h-full">
          <Link
            href={`/realisations/${realisation.slug}`}
            className="flex flex-col h-full"
          >
            <div className="relative w-full h-96 ">
              <Image
                src={realisation.cover_image.src}
                alt={realisation.cover_image.alt}
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="mt-2">{realisation.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
