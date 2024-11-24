"use client";

import ImageFade from "@/components/image-fade";

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
  Photo,
} from "react-photo-album";

import "react-photo-album/rows.css";

import Realisation from "@/types/realisation";
import { useState } from "react";
import dynamic from "next/dynamic";

interface CustomPhoto extends Photo {
  plan?: boolean;
}

const LightBox = dynamic(() => import("@/components/light-box"), {
  ssr: false,
});

function renderNextImage(
  { alt = "", title }: RenderImageProps,
  { photo, width, height }: RenderImageContext<CustomPhoto>
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <ImageFade
        src={photo.src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        plan={photo.plan}
      />
    </div>
  );
}

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
        render={{ image: renderNextImage }}
        skeleton={<div style={{ width: "100%", minHeight: 800 }} />}
        onClick={({ index: current }) => setIndex(current)}
      />
      <LightBox index={index} photos={photos} setIndex={setIndex} />
    </>
  );
}
