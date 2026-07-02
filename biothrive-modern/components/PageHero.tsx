export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="leaf-pattern pt-36 pb-20">
      <div className="container-page max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-serif text-5xl tracking-[-0.055em] text-forest sm:text-7xl">{title}</h1>
        <p className="body-large mt-6 max-w-3xl">{text}</p>
      </div>
    </section>
  );
}
