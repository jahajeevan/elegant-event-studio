import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight } from "lucide-react";
import gEngagement from "@/assets/g-engagement.jpg";
import gBirthday from "@/assets/g-birthday.jpg";
import gCorporate from "@/assets/g-corporate.jpg";
import gTraditional from "@/assets/g-traditional.jpg";
import gFloral from "@/assets/g-floral.jpg";
import gModern from "@/assets/g-modern.jpg";
import gWedding from "@/assets/g-wedding.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ethnic Decors | Weddings, Engagements & Events" },
      { name: "description", content: "Signature event design services — weddings, engagements, birthdays, corporate events, cultural ceremonies, stage & floral design in Chennai." },
      { property: "og:title", content: "Services — Ethnic Decors" },
      { property: "og:description", content: "Weddings, engagements, birthdays, corporate & cultural event design in Chennai." },
    ],
  }),
  component: Services,
});

const catalog = [
  {
    title: "Weddings & Engagements",
    img: gEngagement,
    copy: "From breathtaking mandaps to elegant reception rooms — we design wedding environments that reflect your traditions, your love and your family's story. Every ritual, honoured with beauty; every corner, considered.",
    tags: ["Mandap Design", "Reception Styling", "Bridal Room", "Muhurtham Setup"],
  },
  {
    title: "Birthday Celebrations",
    img: gBirthday,
    copy: "Themed celebrations designed with creativity, joy and unforgettable detail — from first-birthday enchantments to milestone soirées you'll frame in memory.",
    tags: ["Themed Decor", "Kids Celebrations", "Milestone Parties", "Photo Moments"],
  },
  {
    title: "Corporate Events",
    img: gCorporate,
    copy: "Refined event environments for product launches, award nights, conferences and brand experiences. Where composure meets craft, and your brand's story feels tangible in the room.",
    tags: ["Brand Launches", "Award Nights", "Conferences", "Gala Dinners"],
  },
  {
    title: "Cultural Events",
    img: gTraditional,
    copy: "Traditional South Indian ceremonies — haldi, mehendi, seemantham, sangeet, griha pravesh — rendered with the cultural depth and floral artistry they deserve.",
    tags: ["Haldi & Mehendi", "Griha Pravesh", "Seemantham", "Temple Setups"],
  },
  {
    title: "Stage Decoration",
    img: gModern,
    copy: "Signature stage backdrops for weddings, receptions and corporate stages — from floral cascades and hand-carved arches to modern minimalist compositions.",
    tags: ["Floral Backdrops", "Reception Stages", "Sangeet Stages", "Photo Walls"],
  },
  {
    title: "Floral Decoration",
    img: gFloral,
    copy: "Our floral studio sources seasonal blooms and native flowers — jasmine, marigold, rose, orchid — and composes them into arrangements built for photography and emotion alike.",
    tags: ["Fresh Florals", "Garlands", "Centrepieces", "Aisle & Entryway"],
  },
  {
    title: "Event Styling",
    img: gWedding,
    copy: "Beyond the stage — tablescapes, seating charts, welcome corners, favours, lighting direction and photographic flow. The details that make a celebration feel finished.",
    tags: ["Tablescapes", "Welcome Areas", "Lighting", "Signage"],
  },
  {
    title: "Custom Theme Decorations",
    img: gBirthday,
    copy: "Have a vision that doesn't fit a category? We love that. Our design team specialises in original concepts, unusual palettes and one-of-one events you couldn't recreate.",
    tags: ["Concept Design", "Bespoke Themes", "Destination Events", "Set Building"],
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Signature Services"
        title="Celebrations crafted"
        italic="for every occasion."
        subtitle="Eight areas of practice. One devotion to detail. Explore the ways we can bring your celebration to life."
      />

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20 md:space-y-28">
          {catalog.map((s, i) => (
            <FadeUp key={s.title}>
              <article className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7 relative">
                  <div className="absolute -inset-4 bg-[var(--gold-soft)]/15 rounded-3xl blur-2xl" />
                  <img src={s.img} alt={s.title} loading="lazy" className="relative rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto aspect-[4/3] object-cover" />
                </div>
                <div className="lg:col-span-5">
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1]">{s.title}</h2>
                  <p className="mt-5 text-foreground/70 leading-[1.85]">{s.copy}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="text-xs uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-[var(--gold)]/40 text-foreground/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.22em] text-[var(--gold)] hover:gap-3 transition-all">
                    Enquire About {s.title} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}