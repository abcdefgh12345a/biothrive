import PageHero from "@/components/PageHero";

export default function OurStory() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Students restoring habitats, one local project at a time." text="BioThrive began with hands-on volunteer work and a belief that ecological restoration becomes stronger when communities learn, act, and measure progress together." />
      <section className="py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="image-field min-h-[520px] rounded-[2rem] shadow-soft" />
          <div className="glass-card p-8 lg:p-12">
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.05em]">Restoration is not just environmental. It is communal.</h2>
            <p className="body-large mt-6">We help young people organize conservation projects that reduce invasive plant pressure, restore native habitat, and make environmental action easier to join.</p>
            <p className="body-large mt-5">The goal is simple: connect knowledge with service, then help students build a repeatable model for impact in their own parks, schools, and neighborhoods.</p>
          </div>
        </div>
      </section>
    </>
  );
}
