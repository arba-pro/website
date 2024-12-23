"use client";

import Link from "next/link";
import { Suspense } from "react";

import ArbaLogo from "@/components/arba-logo";
import Navigation from "@/components/navigation";
import useScrolledOpacity from "@/hooks/useScrolledOpacity";

export default function Header() {
  const opacity = useScrolledOpacity();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 yarl__no_scroll_padding"
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    >
      <section className="container mx-auto flex justify-between items-center p-4">
        <Link href="/#accueil">
          <ArbaLogo className="fill-black w-20 h-auto" />
        </Link>
        <Suspense>
          <Navigation />
        </Suspense>
      </section>
    </div>
  );
}
