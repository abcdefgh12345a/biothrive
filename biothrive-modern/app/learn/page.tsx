import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import { articles } from "@/lib/content";

export default function Learn() {
  return (
    <>
      <PageHero eyebrow="Learn" title="A field guide for invasive species, restoration, and ecological action." text="Turn this section into a blog or learning hub with research summaries, interviews, and practical volunteer guides." />
      <section className="py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {articles.map((article) => <Card key={article.title} title={article.title} tag={article.type}>{article.desc}</Card>)}
        </div>
      </section>
    </>
  );
}
