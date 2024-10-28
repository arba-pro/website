import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useActiveNavigation } from "@/hooks/useActiveNavigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const { activeItem, navItems } = useActiveNavigation();

  return (
    <div className="flex justify-end">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <VisuallyHidden>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
          </VisuallyHidden>
          <ul className="flex flex-col gap-8 py-16 items-center">
            {navItems.map((item) => {
              const isActive = item === activeItem;

              return (
                <li
                  key={item.href}
                  className="text-xl font-medium font-mono tracking-tight uppercase"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "relative w-fit block",
                      "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full ",
                      "after:scale-x-0 after:opacity-0 after:transition after:duration-300 after:origin-left",
                      isActive && "font-bold ",
                      !isActive &&
                        "after:hover:scale-x-100 after:hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
