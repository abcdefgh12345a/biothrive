import PageHero from "@/components/PageHero";
import Card from "@/components/Card";

export default function Publications() {
  return (
    <>
      <PageHero eyebrow="Publications" title="Research and resources that make restoration easier to understand." text="Use this page to publish reports, downloadable guides, student research, and educational materials." />
      <section className="py-24"><div className="container-page grid gap-6 md:grid-cols-3"><Card title="Restoration report" tag="PDF">Summarize annual impact and link to a downloadable report.</Card><Card title="Species profile" tag="Guide">Create clear one-page profiles for common invasive plants.</Card><Card title="Volunteer handbook" tag="Toolkit">Offer safety guidelines, planning checklists, and event templates.</Card></div></section>
    </>
  );
}
