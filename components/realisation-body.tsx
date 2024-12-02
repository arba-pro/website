"use client";

import ImageFade from "@/components/image-fade";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
  Photo,
} from "react-photo-album";

import "react-photo-album/rows.css";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const LightBox = dynamic(() => import("@/components/light-box"), {
  ssr: false,
});

import Realisation from "@/types/realisation";
type Props = {
  coverImage: Realisation["cover_image"];
  photos: Realisation["photos"];
  data: React.ReactNode;
  content: React.ReactNode;
  updated: React.ReactNode;
};

interface CustomPhoto extends Photo {
  plan?: boolean;
}

function renderNextImage(
  { title }: RenderImageProps,
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
      <ImageFade image={photo ?? null} plan={photo.plan} title={title} />
    </div>
  );
}

export default function RealisationBody({
  coverImage,
  data,
  content,
  photos,
  updated,
}: Props) {
  const [index, setIndex] = useState(-1);

  function renderPhotos() {
    if (!photos?.length) return null;
    return (
      <section className="pt-4 lg:pt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <RowsPhotoAlbum
            photos={photos}
            render={{ image: renderNextImage }}
            skeleton={<div style={{ width: "100%", minHeight: 800 }} />}
            onClick={({ index: current }) => setIndex(current)}
          />
        </Suspense>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 pt-4 lg:pt-12 pb-24">
      <div className="lg:flex lg:gap-8">
        <div className="w-full lg:w-1/2 xl:w-1/3">
          <div
            onClick={() => setIndex(coverImage?.index ?? -1)}
            className="cursor-pointer"
          >
            <ImageFade image={coverImage ?? null} />
          </div>
          {data}
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3">
          {content}
          {renderPhotos()}
          <LightBox index={index} photos={photos} setIndex={setIndex} />
          {updated}
        </div>
      </div>
    </section>
  );
}
