import ImageFade from "@/components/image-fade";
import { cn } from "@/lib/utils";

import { Press, presses } from "@/content/presse";

export default function Presse() {
  const getDateString = (press: Press) => {
    return press.month ? `${press.month} ${press.year}` : `${press.year}`;
  };

  // Add French month ordering
  const frenchMonths = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const sortedPresses = [...presses].sort((a, b) => {
    // First compare years
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    // If years are equal and both have months, compare months
    if (a.month && b.month) {
      return (
        frenchMonths.indexOf(b.month.toLowerCase()) -
        frenchMonths.indexOf(a.month.toLowerCase())
      );
    }
    // If only one has a month, prioritize the one with a month
    return a.month ? -1 : b.month ? 1 : 0;
  });

  return (
    <section className="container mx-auto">
      <h1 className="px-4 pt-16 lg:pt-24 text-xl font-medium tracking-tight">
        Presse
      </h1>
      <ul className="py-4 lg:py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {sortedPresses.map((presse) => (
          <li
            key={`${presse.title}-${getDateString(presse)}`}
            className="flex flex-col h-full"
          >
            <div
              className={cn(
                "flex-grow relative",
                presse.border && "border border-gray-200"
              )}
            >
              <ImageFade image={presse.cover_image ?? null} />
            </div>

            <div className="flex mt-2 gap-3 items-center">
              <div className="w-full min-w-0">
                <p className="font-bold leading-tight">
                  {presse.title}
                  <span className="font-normal">, {getDateString(presse)}</span>
                </p>

                <p className="mt-3">
                  {presse.file ? (
                    <a
                      href={presse.file}
                      download
                      className="text-sm bg-gray-200 rounded-sm px-2 py-2 text-black"
                    >
                      Télécharger le PDF
                    </a>
                  ) : (
                    <span className="text-sm invisible">
                      Aucun PDF disponible
                    </span>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
