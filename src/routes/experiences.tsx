import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Ethnic Decors | Client Stories & Reviews" },
      { name: "description", content: "Real stories from the families and brands we've had the privilege to design for. Trust, craft and quiet devotion in every celebration." },
      { property: "og:title", content: "Client Experiences — Ethnic Decors" },
      { property: "og:description", content: "Real stories from families and brands designed by Ethnic Decors, Chennai." },
    ],
  }),
  component: Experiences,
});

const stories = [
  {
    quote: "They didn't just decorate our wedding — they honoured every ritual with such thoughtfulness. Guests are still talking about the mandap two years later.",
    name: "Anjali & Karthik",
    role: "Wedding · Chennai",
  },
  {
    quote: "From the first meeting we felt heard. The team translated a vague dream into a room that made my mother cry. That is real artistry.",
    name: "Priya Ramanathan",
    role: "Engagement · Coimbatore",
  },
  {
    quote: "For our brand launch we needed elegance without excess. Ethnic Decors delivered a stage that made every photograph look editorial.",
    name: "Rohan Iyer",
    role: "Corporate · Chennai",
  },
  {
    quote: "Our daughter's first birthday felt like walking into a storybook. Every corner had a moment worth photographing.",
    name: "Divya & Suresh",
    role: "Birthday · Chennai",
  },
  {
    quote: "They understood our traditions without needing explanation. The seemantham ceremony felt sacred and modern at once.",
    name: "The Krishnan Family",
    role: "Cultural · Madurai",
  },
  {
    quote: "Precision, taste and warmth — a rare combination. We've now worked with them across three brand events.",
    name: "Meera Nair",
    role: "Corporate · Bengaluru",
  },
];

const values = [
  { n: "500+", l: "Families Served" },
  { n: "98%", l: "Referral Rate" },
  { n: "12", l: "Years of Craft" },
  { n: "40+", l: "Cities Delivered" },
];

function Experiences() {
  return (
    <>
      <PageHeader
        eyebrow="Client Experiences"
        title="The trust of families"
        italic="is our inheritance."
        subtitle="Every review below is a moment we were invited into — a mandap, a milestone, a launch. We remember each of them."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {values.map((v, i) => (
            <FadeUp key={v.l} delay={i * 0.08}>
              <div className="text-center py-8 border-t border-[var(--gold)]/30">
                <p className="font-display text-5xl md:text-6xl text-[var(--gold)]">{v.n}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-foreground/60">{v.l}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.08}>
              <figure className="h-full p-8 rounded-2xl bg-[var(--pearl)] border border-[var(--gold)]/25 shadow-[var(--shadow-soft)] flex flex-col">
                <Quote size={28} className="text-[var(--gold)]" />
                <blockquote className="mt-5 text-foreground/80 leading-[1.75] font-display text-[1.2rem] italic">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-[var(--gold)]/20">
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/50 mt-1">{s.role}</p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Ready to become <em className="text-[var(--gold)] font-normal">our next story?</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8">
              <Link to="/contact" className="btn-gold">Start Planning</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}