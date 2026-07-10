import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import gWedding from "@/assets/g-wedding.jpg";
import gBirthday from "@/assets/g-birthday.jpg";
import gCorporate from "@/assets/g-corporate.jpg";
import gTraditional from "@/assets/g-traditional.jpg";
import gEngagement from "@/assets/g-engagement.jpg";
import gModern from "@/assets/g-modern.jpg";
import gFloral from "@/assets/g-floral.jpg";
import heroImg from "@/assets/hero-mandap.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ethnic Decors | Weddings & Event Design in Chennai" },
      { name: "description", content: "A curated gallery of weddings, engagements, cultural ceremonies and corporate celebrations designed by Ethnic Decors." },
      { property: "og:title", content: "Gallery — Ethnic Decors" },
      { property: "og:description", content: "A curated look at celebrations designed by Ethnic Decors, Chennai." },
    ],
  }),
  component: Gallery,
});

type Cat = "All" | "Wedding" | "Birthday" | "Corporate" | "Traditional" | "Modern";

const items: { src: string; cat: Exclude<Cat, "All">; label: string; span?: string }[] = [
  { src: heroImg, cat: "Wedding", label: "Grand Mandap · Chennai", span: "md:col-span-2 md:row-span-2" },
  { src: gEngagement, cat: "Wedding", label: "Engagement Floral Wall" },
  { src: gTraditional, cat: "Traditional", label: "Haldi Garlands" },
  { src: gBirthday, cat: "Birthday", label: "Balloon Arch · Milestone", span: "md:row-span-2" },
  { src: gWedding, cat: "Wedding", label: "Reception Tablescape" },
  { src: gCorporate, cat: "Corporate", label: "Product Launch Stage", span: "md:col-span-2" },
  { src: gModern, cat: "Modern", label: "Minimalist Circular Arch" },
  { src: gFloral, cat: "Wedding", label: "Floral Centrepiece" },
  { src: gTraditional, cat: "Traditional", label: "Marigold Backdrop" },
];

const cats: Cat[] = ["All", "Wedding", "Birthday", "Corporate", "Traditional", "Modern"];

function Gallery() {
  const [active, setActive] = useState<Cat>("All");
  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.cat === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments we've had the honour"
        italic="of designing."
        subtitle="A curated selection from weddings, engagements, cultural ceremonies and brand celebrations across Chennai and beyond."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.22em] transition ${
                  active === c
                    ? "bg-[var(--gold)] text-white shadow-[var(--shadow-luxe)]"
                    : "border border-[var(--gold)]/40 text-foreground/70 hover:bg-[var(--gold)]/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-4 md:grid-cols-4 md:auto-rows-[240px]">
            <AnimatePresence mode="popLayout">
              {visible.map((im, i) => (
                <motion.figure
                  layout
                  key={`${im.src}-${im.label}-${i}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto ${im.span ?? ""}`}
                >
                  <img src={im.src} alt={im.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                  <figcaption className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[0.7rem] tracking-[0.22em] uppercase opacity-80">{im.cat}</p>
                    <p className="mt-1 font-display text-lg">{im.label}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}