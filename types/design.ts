import CoverImage from "@/types/cover_image";
import PhotoImage from "@/types/photo_image";

export default interface Design {
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
  photos?: PhotoImage[];
  copyright: string[];
}
