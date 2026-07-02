import PageHero from "@/components/PageHero";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Our team" title="A youth-powered network for conservation leadership." text="Use this page for founder bios, officers, advisors, chapter leads, or partner organizations." />
      <section className="py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <article key={member.name} className="glass-card overflow-hidden">
              <div className="grid h-64 place-items-center bg-forest text-7xl font-black text-leaf/80">{index + 1}</div>
              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-moss">{member.role}</p>
                <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">{member.name}</h2>
                <p className="mt-4 leading-7 text-forest/70">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
