import ArbaLogo from "@/components/arba-logo";
import Link from "next/link";

const navItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  function renderNavItem(item: (typeof navItems)[number]) {
    return (
      <li
        key={item.href}
        className="text-base font-medium font-mono tracking-tight uppercase"
      >
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 container mx-auto">
      <section className="flex justify-between items-center p-4">
        <ArbaLogo className="fill-black w-20 h-auto" />
        <ul className="flex gap-4 pt-2">
          {navItems.map((item) => renderNavItem(item))}
        </ul>
      </section>
    </div>
  );
}
