"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Realisation from "@/types/realisation";
import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function PhotoGallery({
  photos = [],
}: {
  photos: Realisation["photos"];
}) {
  const [index, setIndex] = useState(-1);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const padding = isMobile ? "16px" : "64px";
  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />
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
    </>
  );
}
