import PageHero from "@/components/PageHero";

export default function OurStory() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Students restoring habitats, one local project at a time." text="BioThrive began with hands-on volunteer work and a belief that ecological restoration becomes stronger when communities learn, act, and measure progress together." />
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
    Our mission
  </p>

  <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
    Restoring habitats. Protecting biodiversity. Inspiring community action.
  </h1>

  <p className="mt-8 text-lg leading-8 text-stone-700">
    BioThrive was founded to positively impact our local environment by restoring
    natural habitats and promoting biodiversity. Through hands-on projects and
    educational initiatives, we aim to engage our community in understanding and
    preserving the natural world. Together, we are taking meaningful action to
    protect and restore habitats in northern Virginia.
  </p>
</section>
    </>
  );
}
