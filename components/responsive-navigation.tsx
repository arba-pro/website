"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileNavigation from "@/components/mobile-navigation";
import WebNavigation from "@/components/web-navigation";

export default function ResponsiveNavigation() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return <div>{isMobile ? <MobileNavigation /> : <WebNavigation />}</div>;
}
