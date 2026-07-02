import PageHero from "@/components/PageHero";
import { events } from "@/lib/content";

export default function Events() {
  return (
    <>
      <PageHero eyebrow="Upcoming events" title="Show up, learn the land, and restore it together." text="Publish cleanup days, invasive removal events, native plantings, and info sessions here." />
      <section className="py-24"><div className="container-page grid gap-5">{events.map((event) => <article key={event.title} className="glass-card grid gap-4 p-7 md:grid-cols-[.25fr_1fr_.35fr] md:items-center"><p className="font-bold uppercase tracking-[0.2em] text-moss">{event.date}</p><div><h2 className="font-serif text-3xl tracking-[-0.04em]">{event.title}</h2><p className="mt-2 text-forest/65">{event.location}</p></div><button className="button-primary">Register</button></article>)}</div></section>
    </>
  );
}
