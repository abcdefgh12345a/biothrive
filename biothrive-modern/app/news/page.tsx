import PageHero from "@/components/PageHero";
import Card from "@/components/Card";

export default function News() {
  return (
    <>
      <PageHero eyebrow="In the news" title="Press, announcements, and community recognition." text="A polished archive for media features, chapter milestones, conservation partnerships, and BioThrive updates." />
      <section className="py-24"><div className="container-page grid gap-6 md:grid-cols-3"><Card title="Media feature" tag="Press">Add links to articles, interviews, school features, or local news coverage.</Card><Card title="Impact update" tag="Milestone">Highlight new totals for volunteers, invasive species removed, and native plants installed.</Card><Card title="Partner spotlight" tag="Community">Showcase park authorities, schools, and organizations that support restoration work.</Card></div></section>
    </>
  );
}
