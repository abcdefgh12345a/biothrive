export default function Card({ tag, title, children }: { tag?: string; title: string; children: React.ReactNode }) {
  return (
    <article className="glass-card p-7 transition hover:-translate-y-1">
      {tag && <p className="mb-5 inline-flex rounded-full bg-leaf/25 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-moss">{tag}</p>}
      <h3 className="font-serif text-3xl tracking-[-0.04em] text-forest">{title}</h3>
      <p className="mt-4 leading-7 text-forest/70">{children}</p>
    </article>
  );
}
