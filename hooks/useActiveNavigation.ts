import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NavItem from "@/types/nav-item";

const navItems: NavItem[] = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Design", href: "/design" },
  { label: "Distinctions", href: "/distinctions" },
  { label: "Presse", href: "/presse" },
  { label: "Réflexions", href: "/reflexions" },
  { label: "Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

export function useActiveNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    const isHomePage = pathname == "/website";
    if (isHomePage && !currentHash) {
      setHash("accueil");
    } else if (currentHash) {
      setHash(currentHash);
    }
  }, [pathname, searchParams]);

  const activeItem = navItems.find((item) => {
    const normalizedLabel = item.label
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

    return (
      pathname === `${item.href}/` ||
      (pathname !== "/" && pathname.startsWith(`/${normalizedLabel}`)) ||
      (pathname === "/" && normalizedLabel === hash) ||
      (pathname === "/" && !hash && normalizedLabel === "accueil")
    );
  });

  return { activeItem, navItems };
}
