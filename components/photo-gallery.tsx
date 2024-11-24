"use client";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Realisation from "@/types/realisation";
import { useState } from "react";
import dynamic from "next/dynamic";

const LightBox = dynamic(() => import("@/components/light-box"), {
  ssr: false,
});

export default function PhotoGallery({
  photos = [],
}: {
  photos: Realisation["photos"];
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        skeleton={<div style={{ width: "100%", minHeight: 800 }} />}
        onClick={({ index: current }) => setIndex(current)}
      />
      <LightBox index={index} photos={photos} setIndex={setIndex} />
    </>
  );
}
