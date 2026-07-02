"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-cream/80 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-lg font-black text-cream transition group-hover:rotate-6">B</span>
          <span>
            <span className="block font-serif text-2xl font-bold leading-none tracking-[-0.04em] text-forest">BioThrive</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">Virginia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-forest/75 transition hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/events" className="button-secondary px-5 py-2.5">Events</Link>
          <Link href="/contact" className="button-primary px-5 py-2.5">Get involved</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-forest/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-forest lg:hidden">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream lg:hidden">
          <div className="container-page grid gap-2 py-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold text-forest hover:bg-white/70">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
