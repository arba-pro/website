"use client";

import { useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import NavItem from "@/types/nav-item";

export default function WebNavigation({ navItems }: { navItems: NavItem[] }) {
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

  return (
    <ul className="flex gap-4 pt-2">
      {navItems.map((item) => {
        const normalizedLabel = item.label
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "");

        const isActive =
          pathname === `${item.href}/` ||
          (pathname !== "/" && pathname.startsWith(`/${normalizedLabel}`)) ||
          (pathname === "/" && normalizedLabel === hash) ||
          (pathname === "/" && !hash && normalizedLabel === "accueil");

        return (
          <li
            key={item.href}
            className="text-base font-medium font-mono tracking-tight uppercase"
          >
            <Link
              href={item.href}
              className={cn(
                "relative w-fit block",
                "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full ",
                "after:scale-x-0 after:opacity-0 after:transition after:duration-300 after:origin-left",
                isActive && "font-bold ",
                !isActive && "after:hover:scale-x-100 after:hover:opacity-100"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
