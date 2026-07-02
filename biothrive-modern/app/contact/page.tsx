import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Ready to volunteer, partner, or start a chapter?" text="Send a message and turn interest into action. This frontend form can later be connected to Formspree, Resend, Supabase, or a custom API route." />
      <section className="py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="glass-card p-8"><h2 className="font-serif text-4xl tracking-[-0.04em]">Start with one project.</h2><p className="body-large mt-5">Tell us where you are, what kind of restoration work you want to support, and whether you’re joining as a volunteer, student leader, educator, or partner.</p></div>
          <form className="glass-card grid gap-5 p-8">
            <div className="grid gap-5 md:grid-cols-2"><input className="rounded-2xl border border-forest/10 bg-white/70 px-5 py-4 outline-none focus:ring-4 focus:ring-leaf/30" placeholder="Name" /><input className="rounded-2xl border border-forest/10 bg-white/70 px-5 py-4 outline-none focus:ring-4 focus:ring-leaf/30" placeholder="Email" /></div>
            <input className="rounded-2xl border border-forest/10 bg-white/70 px-5 py-4 outline-none focus:ring-4 focus:ring-leaf/30" placeholder="I’m interested in..." />
            <textarea className="min-h-40 rounded-2xl border border-forest/10 bg-white/70 px-5 py-4 outline-none focus:ring-4 focus:ring-leaf/30" placeholder="Message" />
            <button className="button-primary w-fit">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
