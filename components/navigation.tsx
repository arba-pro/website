import Link from "next/link";
import { Suspense } from "react";

import ArbaLogo from "@/components/arba-logo";
import ResponsiveNavigation from "@/components/responsive-navigation";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 container mx-auto yarl__no_scroll_padding">
      <section className="flex justify-between items-center p-4">
        <Link href="/#accueil">
          <ArbaLogo className="fill-black w-20 h-auto" />
        </Link>
        <Suspense>
          <ResponsiveNavigation />
        </Suspense>
      </section>
    </div>
  );
}
