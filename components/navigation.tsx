import Link from "next/link";
import { Suspense } from "react";

import ArbaLogo from "@/components/arba-logo";
import WebNavigation from "@/components/web-navigation";

const navItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 container mx-auto">
      <section className="flex justify-between items-center p-4">
        <Link href="/#accueil">
          <ArbaLogo className="fill-black w-20 h-auto" />
        </Link>
        <Suspense>
          <WebNavigation navItems={navItems} />
        </Suspense>
      </section>
    </div>
  );
}
