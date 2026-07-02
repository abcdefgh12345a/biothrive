import Link from "next/link";
import Card from "@/components/Card";
import { projects, stats, events } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-bg relative min-h-screen pt-32 text-cream">
        <div className="container-page grid min-h-[calc(100vh-8rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-leaf">Community-led habitat restoration</p>
            <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-8xl">Conservation with heart, led by the next generation.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/82">BioThrive connects young people with community-based ecological projects designed to reduce the impact of invasive plants on parklands across Northern Virginia and beyond.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-leaf px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-forest transition hover:-translate-y-0.5 hover:bg-cream">Get involved</Link>
              <Link href="/our-work" className="rounded-full border border-cream/30 bg-cream/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cream backdrop-blur transition hover:-translate-y-0.5 hover:bg-cream/20">Explore our work</Link>
            </div>
          </div>
          <div className="glass-card floaty hidden p-4 lg:block">
            <div className="image-field min-h-[560px] rounded-[1.5rem]" />
            <div className="grid grid-cols-2 gap-3 p-3">
              <div className="rounded-3xl bg-cream p-5 text-forest"><strong className="block text-3xl">250+</strong><span className="text-sm font-semibold text-forest/60">volunteers</span></div>
              <div className="rounded-3xl bg-leaf p-5 text-forest"><strong className="block text-3xl">30+</strong><span className="text-sm font-semibold text-forest/70">events</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="leaf-pattern py-20">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-forest/10 bg-white/60 p-6 shadow-soft backdrop-blur">
                <p className="font-serif text-4xl font-bold tracking-[-0.05em] text-forest">{stat.value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-moss">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">Habitat restoration begins at the community level.</h2>
          </div>
          <p className="body-large">We started with hands-on volunteer work for local parks and built a student-powered network around ecological knowledge, service, and measurable impact.</p>
        </div>
      </section>

      <section className="bg-white/50 py-24">
        <div className="container-page">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Our projects</p>
              <h2 className="section-title mt-4">How BioThrive multiplies impact.</h2>
            </div>
            <Link href="/our-work" className="button-secondary">See all projects</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => <Card key={project.title} title={project.title} tag={project.tag}>{project.text}</Card>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Card title="Volunteer" tag="Act">Join an existing BioThrive restoration project or help start a new one near you.</Card>
          <Card title="Engage" tag="Explore">Read curated environmental research and interviews with conservation leaders.</Card>
          <Card title="Learn" tag="Understand">Use the learning hub to understand invasive species and local ecosystems.</Card>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream">
        <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-leaf">Upcoming events</p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.05em]">Find your next restoration day.</h2>
            <p className="mt-5 leading-8 text-cream/72">Events can be updated from this data file or connected later to a CMS, Airtable, or Google Calendar.</p>
          </div>
          <div className="grid gap-4">
            {events.map((event) => (
              <div key={event.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">{event.date}</p>
                <h3 className="mt-2 font-serif text-3xl">{event.title}</h3>
                <p className="mt-2 text-cream/70">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
