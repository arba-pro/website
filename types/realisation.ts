import CoverImage from "@/types/cover_image";
import PhotoImage from "@/types/photo_image";
export default interface Realisation {
  order: number;
  hidden?: boolean;
  title: string;
  slug: string;
  content: string;
  time: {
    created: string;
    updated: string;
  };
  cover_image?: CoverImage;
  plot?: {
    année?: number;
    site: string;
    surface: string;
    budget?: string;
  };
  construction?: {
    materiaux: string;
    isolation?: string;
    chauffage: string;
    agencement: string;
  };
  awards?: string[];
  photos?: PhotoImage[];
  copyright: string[];
}
