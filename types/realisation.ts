export default interface Realisation {
  order: number;
  title: string;
  slug: string;
  content: string;
  time: {
    created: string;
    updated: string;
  };
  cover_image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  plot: {
    année?: number;
    site: string;
    surface: string;
    budget?: string;
  };
  construction: {
    materiaux: string;
    isolation?: string;
    chauffage: string;
    agencement: string;
  };
  awards?: string[];
  photos?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    plan?: boolean;
  }[];
}
