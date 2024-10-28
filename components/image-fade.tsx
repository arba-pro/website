"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export default function ImageFade({
  src,
  alt,
  width,
  height,
  priority,
}: ImageProps) {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative bg-gray-100 w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
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
