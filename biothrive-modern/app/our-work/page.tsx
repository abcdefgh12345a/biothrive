import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import { projects, stats } from "@/lib/content";

export default function OurWork() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Practical conservation projects designed for measurable impact." text="From invasive removal to native planting and student chapter support, BioThrive turns local energy into ecosystem recovery." />
      <section className="py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {projects.map((project) => <Card key={project.title} title={project.title} tag={project.tag}>{project.text}</Card>)}
        </div>
      </section>
      <section className="bg-white/50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-5">
          {stats.map((stat) => <div key={stat.label} className="rounded-[1.5rem] bg-cream p-6"><p className="font-serif text-4xl font-bold">{stat.value}</p><p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-moss">{stat.label}</p></div>)}
        </div>
      </section>
    </>
  );
}
