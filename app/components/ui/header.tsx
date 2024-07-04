"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair as BrandFont } from "next/font/google";

const brandFont = BrandFont({ subsets: ["latin"] });

const pages = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Showcase", href: "/showcase" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex flex-col gap-6">
      <div className={brandFont.className}>
        <h1 className="text-center text-3xl font-bold italic underline decoration-pink-300 underline-offset-4">
          HairByAnna
        </h1>
      </div>
      <div className="flex flex-row gap-2 h-fit p-2.5 w-fit rounded-full mx-auto neumorphism-pressed bg-slate-200">
        {pages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className={clsx(
              "rounded-full bg-slate-200 py-1 px-3 text-sm/6 font-semibold focus:outline-none hover:transition-all linear",
              pathname === p.href
                ? "neumorphism-flat"
                : "focus-neumorphism-pressed-light hover-neumorphism-pressed-light",
            )}
          >
            {p.name}
          </Link>
        ))}
      </div>
      <div className="w-fit mx-auto animate-bounce">
        <h3 className="text-sm bg-pink-200/75 p-2 rounded-full shadow">
          Wanna get a new haircut ?
          <a href="#" className="text-pink-500 hover:underline ml-1">
            Click here
          </a>{" "}
          😜
        </h3>
      </div>
    </header>
  );
}
