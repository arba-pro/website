"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import NavigationMobile from "@/components/navigation-mobile";
import NavigationWebMenu from "@/components/navigation-web-menu";

export default function NavigationResponsive() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return <div>{isMobile ? <NavigationMobile /> : <NavigationWebMenu />}</div>;
}
