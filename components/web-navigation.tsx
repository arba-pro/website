"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useActiveNavigation } from "@/hooks/useActiveNavigation";
export default function WebNavigation() {
  const { activeItem, navItems } = useActiveNavigation();

  return (
    <ul className="flex gap-4 pt-2">
      {navItems.map((item) => {
        const isActive = item === activeItem;

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
