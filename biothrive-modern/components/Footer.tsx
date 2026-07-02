import Link from "next/link";
import { navItems } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="eyebrow text-leaf">Join the conservation movement</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Help restore habitats with heart.</h2>
          <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input aria-label="Email address" placeholder="Email address" className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-cream placeholder:text-cream/60 outline-none ring-leaf/40 focus:ring-4" />
            <button className="rounded-full bg-leaf px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-forest transition hover:bg-cream">Sign up</button>
          </form>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-leaf">Explore</h3>
          <div className="mt-5 grid gap-3">
            {navItems.slice(0, 5).map((item) => <Link key={item.href} href={item.href} className="text-cream/75 hover:text-cream">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-[0.2em] text-leaf">Nonprofit</h3>
          <p className="mt-5 leading-7 text-cream/70">BioThrive Virginia, 501(c)(3) Corporation. Youth-powered conservation through restoration, education, and local action.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col gap-2 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © BioThrive Virginia 2025.</p>
          <p>Modern website concept built with Next.js + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
