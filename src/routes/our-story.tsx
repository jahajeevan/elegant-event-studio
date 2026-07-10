import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import gFloral from "@/assets/g-floral.jpg";
import gTraditional from "@/assets/g-traditional.jpg";
import gEngagement from "@/assets/g-engagement.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Ethnic Decors | Chennai Luxury Event Design" },
      { name: "description", content: "A decade of designing weddings, engagements and cultural celebrations in Chennai — the story, philosophy and craft behind Ethnic Decors." },
      { property: "og:title", content: "Our Story — Ethnic Decors" },
      { property: "og:description", content: "The philosophy and craft behind Chennai's beloved luxury event design house." },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A quiet devotion"
        italic="to beautiful beginnings."
        subtitle="Ethnic Decors is a Chennai-based design house building celebrations that feel rooted in culture and elevated by artistry. This is where we come from — and where we're going."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <FadeUp className="lg:col-span-6">
            <img src={gFloral} alt="Floral artistry" loading="lazy" className="rounded-2xl shadow-[var(--shadow-luxe)] w-full h-auto" />
          </FadeUp>
          <div className="lg:col-span-6 space-y-6 text-foreground/75 leading-[1.9] text-[1.02rem]">
            <FadeUp><p className="eyebrow"><span className="gold-line mr-3" />The Beginning</p></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                We started with a single mandap and a promise.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}><p>
              Ethnic Decors was founded in Chennai with a simple conviction — that
              weddings and family celebrations deserve to be treated as sacred
              craft, not production line. Our founders came from families where
              festivals were designed with hand-strung jasmine and hand-drawn
              kolams. That upbringing became our aesthetic.
            </p></FadeUp>
            <FadeUp delay={0.3}><p>
              What began as intimate wedding decor for close friends has grown,
              over twelve years, into a full-service design house trusted by
              families across Tamil Nadu and by brands who choose us for launches,
              galas and cultural evenings.
            </p></FadeUp>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-foreground/75 leading-[1.9]">
            <FadeUp><p className="eyebrow"><span className="gold-line mr-3" />What Guides Us</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="font-display text-3xl md:text-4xl text-foreground">
              Culture, considered — never costume.
            </h2></FadeUp>
            <FadeUp delay={0.2}><p>
              We believe traditions carry meaning. Every marigold garland, every
              banana leaf, every brass diya has a place in the story of the day.
              Our job is to honour those symbols with modern taste — so the
              environment feels timeless, not themed.
            </p></FadeUp>
            <FadeUp delay={0.3}><p>
              We work in intentionally small numbers each season. It's how we
              guarantee that the design director you meet is the one shaping
              your celebration.
            </p></FadeUp>
          </div>
          <FadeUp className="lg:col-span-6 order-1 lg:order-2">
            <img src={gTraditional} alt="Cultural detail" loading="lazy" className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto" />
          </FadeUp>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp><p className="eyebrow">Ready When You Are</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              Let's design a day <em className="text-[var(--gold)] font-normal">your family will retell for generations.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10">
              <Link to="/contact" className="btn-gold">Begin The Conversation</Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <img src={gEngagement} alt="Engagement decor" loading="lazy" className="mt-16 rounded-2xl shadow-[var(--shadow-luxe)] w-full h-auto" />
          </FadeUp>
        </div>
      </section>
    </>
  );
}