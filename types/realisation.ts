export default interface Realisation {
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
}
