"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import NavigationMobile from "@/components/navigation-mobile";
import NavigationWeb from "@/components/navigation-web";

export default function NavigationResponsive() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return <div>{isMobile ? <NavigationMobile /> : <NavigationWeb />}</div>;
}
