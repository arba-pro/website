import { useEffect, useState } from "react";

export default function useScrolledOpacity() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.min((window.scrollY * 4) / 100, 1);
      setOpacity(newOpacity);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return opacity;
}
