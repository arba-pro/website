"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Realisation from "@/types/realisation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function LightBox({
  index,
  photos,
  setIndex,
}: {
  index: number;
  photos: Realisation["photos"];
  setIndex: (index: number) => void;
}) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const padding = isMobile ? "16px" : "64px";

  return (
    <Lightbox
      slides={photos}
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      carousel={{ padding }}
      styles={{
        container: {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
        button: {
          backgroundColor: "rgba(255, 255, 255, 0)",
          filter: "none",
          color: "rgba(0, 0, 0, 1)",
        },
        navigationPrev: {
          top: "auto",
          transform: "none",
          bottom: "0",
        },
        navigationNext: {
          top: "auto",
          transform: "none",
          bottom: "0",
        },
      }}
    />
  );
}
