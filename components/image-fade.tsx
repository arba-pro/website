"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  // maxHeight: number;
}

export default function ImageFade({
  src,
  alt,
  width,
  height,
}: // maxHeight,
ImageProps) {
  console.log(src);
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <div
      className="relative bg-gray-100 w-full h-full"
      // style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-cover h-full",
          "transition-opacity duration-300",
          isImageLoading && "opacity-0"
        )}
        onLoad={() => setImageLoading(false)}
      />
    </div>
  );
}
