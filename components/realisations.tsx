import Link from "next/link";

import { getRealisations } from "@/lib/mdx";

const realisations = getRealisations();

export default function Realisations() {
  return (
    <ul className="py-24 px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {realisations.map((realisation) => (
        <li key={realisation.slug}>
          <Link href={`/realisations/${realisation.slug}`}>
            {realisation.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
