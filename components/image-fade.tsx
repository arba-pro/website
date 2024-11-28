"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ImageData {
  src: string;
  alt?: string;
  width: number;
  height: number;
  caption?: string;
}

interface ImageProps {
  image: ImageData | null;
  priority?: boolean;
  title?: string;
  plan?: boolean;
}

export default function ImageFade({
  image,
  priority,
  title,
  plan,
}: ImageProps) {
  const [isImageLoading, setImageLoading] = useState(true);

  if (!image) {
    return <div className="relative bg-gray-100 w-full h-full"></div>;
  }

  if (plan) {
    return (
      <div
        className={cn(
          "relative bg-gray-100 w-full h-full",
          "border border-gray-100 bg-white p-4"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          title={title}
          className={cn(
            "object-contain h-full w-full",
            "transition-opacity duration-300",
            isImageLoading && "opacity-0"
          )}
          onLoad={() => setImageLoading(false)}
        />
      </div>
    );
  }

  return (
    <div className="relative bg-gray-100 w-full h-full">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        title={title}
        className={cn(
          "object-cover h-full w-full",
          "transition-opacity duration-300",
          isImageLoading && "opacity-0"
        )}
        onLoad={() => setImageLoading(false)}
      />
    </div>
  );
}
