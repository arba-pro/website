"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useActiveNavigation } from "@/hooks/useActiveNavigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import NavItem from "@/types/nav-item";
import useScrolledOpacity from "@/hooks/useScrolledOpacity";
export default function NavigationWebMenu() {
  const { activeItem } = useActiveNavigation();
  const opacity = useScrolledOpacity();
  const navLink = (item: NavItem) => {
    const isActive = item.href === activeItem?.href;

    return (
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
    );
  };

  const subNavLink = (item: NavItem) => {
    const isActive = item.href === activeItem?.href;

    return (
      <li className="w-full">
        <NavigationMenuLink asChild>
          <Link href={item.href} className="w-full group">
            <span
              className={cn(
                "relative w-fit block",
                "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full ",
                "after:scale-x-0 after:opacity-0 after:transition after:duration-300 after:origin-left",
                isActive && "font-bold ",
                !isActive &&
                  "after:group-hover:scale-x-100 after:group-hover:opacity-100"
              )}
            >
              {item.label}
            </span>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <NavigationMenu className="text-base font-medium font-mono tracking-tight uppercase">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          {navLink({ label: "Accueil", href: "/#accueil" })}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {navLink({ label: "Réalisations", href: "/#realisations" })}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {navLink({ label: "Équipe", href: "/equipe" })}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {navLink({ label: "Contact", href: "/contact" })}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Plus</NavigationMenuTrigger>
          <NavigationMenuContent className="w-full flex justify-end ">
            <ul
              className="flex flex-col gap-1.5 px-4 pt-1 pb-4"
              style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
            >
              {subNavLink({ label: "Design", href: "/design" })}
              {subNavLink({ label: "Distinctions", href: "/distinctions" })}
              {subNavLink({ label: "Presse", href: "/presse" })}
              {subNavLink({ label: "Réflexions", href: "/reflexions" })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
