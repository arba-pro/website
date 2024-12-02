import Realisation from "@/types/realisation";

export default function RealisationData({
  realisation,
}: {
  realisation: Realisation;
}) {
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
    <section className="flex flex-col divide-y divide-gray-200 [&>*]:py-4 pb-8">
      {renderAwards()}
      {renderPlot()}
      {renderConstruction()}
    </section>
  );
}
