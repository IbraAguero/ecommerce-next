import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import IconTitle from "./icon-title";

const LINKS = [
  { href: "/camisetas", title: "Camisetas" },
  { href: "/zapatillas", title: "Zapatillas" },
  { href: "/accesorios", title: "Accesorios" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5 px-3">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="max-w-64">
              <SheetHeader>
                <SheetTitle className="font-extrabold text-3xl tracking-tighter">
                  AYZA
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col w-full">
                <ul className="flex-1 space-y-2 mt-5 max-w">
                  {LINKS.map((link, index) => (
                    <li
                      key={index}
                      className="text-zinc-700 hover:text-zinc-950 transition-colors text-center text-xl font-normal"
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <IconTitle />

        <ul className="hidden md:flex gap-10 font-normal text-sm items-center">
          {LINKS.map((link, index) => (
            <li
              key={index}
              className="text-zinc-600 hover:text-zinc-800 transition-colors"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-zinc-700 [&_svg]:size-5"
          >
            <ShoppingCart />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-zinc-700 [&_svg]:size-5"
          >
            <User />
          </Button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
