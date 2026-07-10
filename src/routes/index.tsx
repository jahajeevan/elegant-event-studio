import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Heart, Sparkles, Flower2, Gem, Star, Quote } from "lucide-react";

import heroImg from "@/assets/hero-mandap.jpg";
import gWedding from "@/assets/g-wedding.jpg";
import gBirthday from "@/assets/g-birthday.jpg";
import gCorporate from "@/assets/g-corporate.jpg";
import gFloral from "@/assets/g-floral.jpg";
import gEngagement from "@/assets/g-engagement.jpg";
import gTraditional from "@/assets/g-traditional.jpg";

import { FadeUp } from "@/components/site/Reveal";
import { FloatingPetals } from "@/components/site/FloatingPetals";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <Experience />
      <Process />
      <SignatureGallery />
      <Trust />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury floral mandap by Ethnic Decors"
          className="w-full h-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ivory)]/40 via-[var(--ivory)]/10 to-[var(--ivory)]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ivory)]/60 via-transparent to-transparent" />
      </motion.div>

      <FloatingPetals count={14} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow"
        >
          <span className="gold-line mr-3" />
          Chennai · Luxury Event Design House
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl text-foreground"
        >
          Where every celebration <br className="hidden md:block" />
          becomes a{" "}
          <em className="text-[var(--gold)] font-normal">beautiful memory.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 max-w-xl text-foreground/75 text-lg leading-relaxed"
        >
          From intimate family moments to grand cultural celebrations, Ethnic Decors
          designs breathtaking event experiences — with artistic detail, cultural
          soul and flawless execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/gallery" className="btn-gold">
            Explore Our Work <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline-gold">
            Start Planning
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.28em] text-foreground/50"
        >
          <span>500+ Celebrations</span>
          <span className="w-8 h-px bg-foreground/30" />
          <span>12 Years in Chennai</span>
        </motion.div>
      </div>

      {/* corner ornament */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 text-[var(--gold)]/70">
        <span className="w-16 h-px bg-[var(--gold)]/40" />
        <span className="animate-shimmer">
          <Sparkles size={16} />
        </span>
      </div>
    </section>
  );
}

/* ------------------------------- BRAND STORY ---------------------------- */
function BrandStory() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <FadeUp className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-6 bg-[var(--gold-soft)]/20 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-6 grid-rows-6 gap-4 aspect-[4/5]">
              <img
                src={gFloral}
                alt="Signature floral arrangement"
                loading="lazy"
                className="col-span-4 row-span-4 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-luxe)]"
              />
              <img
                src={gEngagement}
                alt="Engagement stage decor"
                loading="lazy"
                className="col-span-3 col-start-4 row-span-3 row-start-4 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-soft)]"
              />
              <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--lotus)] p-5 flex flex-col justify-between text-white">
                <Gem size={20} />
                <div>
                  <p className="font-display text-3xl leading-none">12+</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] mt-1 opacity-80">Years of craft</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <FadeUp>
            <p className="eyebrow">
              <span className="gold-line mr-3" />
              Our Philosophy
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] text-foreground">
              Every celebration has a story. <br />
              <em className="text-[var(--gold)] font-normal">We design the moments within it.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 space-y-5 text-foreground/75 leading-[1.85] text-[1.02rem]">
              <p>
                Ethnic Decors was born from a quiet devotion — to transform ordinary
                spaces into moments families remember for a lifetime. Every mandap
                we build, every petal we place, every drape we hang carries the
                weight of a family's most important day.
              </p>
              <p>
                We begin with your story. We listen to the rituals that matter,
                the colors that feel like home, the little details that only your
                people would notice. Then our design team weaves it all into an
                experience that feels unmistakably yours — rooted in culture,
                lifted by artistry.
              </p>
              <p>
                For over a decade in Chennai, we've been trusted by families and
                brands who refuse to compromise on beauty. That trust is our
                inheritance. We protect it with every celebration we design.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex items-center gap-4">
              <Link to="/our-story" className="btn-outline-gold">
                Read Our Story
              </Link>
              <span className="font-script text-3xl text-[var(--gold)]">— Team Ethnic Decors</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES ------------------------------ */
const services = [
  {
    title: "Weddings & Engagements",
    img: gEngagement,
    icon: Heart,
    copy:
      "From breathtaking mandaps to elegant reception environments, we craft wedding worlds that reflect your traditions, your love, and your family's story — every ritual, honoured with beauty.",
  },
  {
    title: "Birthday Celebrations",
    img: gBirthday,
    icon: Star,
    copy:
      "Themed celebrations designed with creativity, joy, and unforgettable detail — from first-birthday enchantments to milestone soirées you'll frame in memory.",
  },
  {
    title: "Corporate Events",
    img: gCorporate,
    icon: Gem,
    copy:
      "Refined environments for product launches, award nights, conferences and brand experiences — where composure meets craft, and your brand's story feels tangible.",
  },
  {
    title: "Custom Event Design",
    img: gFloral,
    icon: Sparkles,
    copy:
      "Original concepts, personalised styling and tailor-made floral direction for cultural ceremonies, intimate gatherings and one-of-one occasions you cannot find in a catalogue.",
  },
];

function Services() {
  return (
    <section className="relative py-24 md:py-36 bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="eyebrow">
              <span className="gold-line mr-3" />
              Signature Services
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]">
              Celebrations{" "}
              <em className="text-[var(--gold)] font-normal">crafted for every occasion.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Four signature practices. One devotion to detail. Whatever the
              occasion, our team designs an environment that feels considered
              from first sketch to final petal.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <article className="group relative rounded-2xl overflow-hidden bg-[var(--pearl)] border border-[color-mix(in_oklab,var(--gold)_20%,transparent)] shadow-[var(--shadow-soft)] transition duration-700 hover:shadow-[var(--shadow-luxe)] hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-white/80 backdrop-blur grid place-items-center text-[var(--gold)]">
                    <s.icon size={18} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-[1.8rem] text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{s.copy}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.22em] text-[var(--gold)] hover:gap-3 transition-all"
                  >
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- EXPERIENCE / WHY CHOOSE ---------------------- */
const pillars = [
  {
    icon: Flower2,
    title: "Attention To Detail",
    copy:
      "Every flower, every fold of drapery, every colour temperature is chosen with intention — because harmony lives in the details no one else notices.",
  },
  {
    icon: Sparkles,
    title: "Creative Concepts",
    copy:
      "Fresh ideas blended with cultural elegance. We design environments that feel modern in taste and timeless in soul.",
  },
  {
    icon: Gem,
    title: "Reliable Execution",
    copy:
      "Beautiful celebrations demand quiet precision. Our on-site team choreographs setup, timeline and takedown so you feel none of it.",
  },
  {
    icon: Heart,
    title: "Personal Approach",
    copy:
      "No two families are alike. Every event is designed around your story, your rituals and the people you love most.",
  },
];

function Experience() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--lotus)_18%,transparent),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="eyebrow"><span className="gold-line mr-3" />The Ethnic Decors Difference</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]">
              Designed with detail. <br />
              <em className="text-[var(--gold)] font-normal">Delivered with care.</em>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {pillars.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full border border-[var(--gold)]/40 grid place-items-center text-[var(--gold)] bg-[var(--pearl)]">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{p.copy}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- PROCESS ------------------------------ */
const steps = [
  {
    n: "01",
    title: "Listen & Understand",
    copy: "We begin by understanding your celebration, your traditions, your family's style and the little expectations that make it yours.",
  },
  {
    n: "02",
    title: "Design The Vision",
    copy: "Our creative team sketches themes, colour palettes, floral direction, layouts and lighting until the vision feels unmistakably right.",
  },
  {
    n: "03",
    title: "Bring Ideas To Life",
    copy: "Our production and floral craftspeople transform your venue with quiet precision — a stage set for the moments you will remember.",
  },
  {
    n: "04",
    title: "Celebrate The Moment",
    copy: "You are present with your people. We stay behind the scenes so the day belongs entirely to you.",
  },
];

function Process() {
  return (
    <section className="relative py-24 md:py-36 bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl text-center mx-auto">
          <FadeUp><p className="eyebrow">Our Creative Process</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]">
              From first conversation, <br />
              <em className="text-[var(--gold)] font-normal">to the moment you say goodbye.</em>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
          <div className="grid gap-14 md:grid-cols-4">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.1} className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[var(--ivory)] border border-[var(--gold)]/40 grid place-items-center relative z-10">
                  <span className="font-display text-xl text-[var(--gold)]">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed text-[0.95rem]">{s.copy}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- SIGNATURE GALLERY --------------------------- */
function SignatureGallery() {
  const imgs = [
    { src: gWedding, label: "Reception · Table Design" },
    { src: gTraditional, label: "Traditional · Marigold" },
    { src: gEngagement, label: "Engagement · Floral Wall" },
    { src: gCorporate, label: "Corporate · Stage" },
  ];
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div className="max-w-2xl">
            <FadeUp><p className="eyebrow"><span className="gold-line mr-3" />Signature Moments</p></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.08]">
                A glimpse into celebrations <em className="text-[var(--gold)] font-normal">we've had the honour of designing.</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link to="/gallery" className="btn-outline-gold">Full Gallery</Link>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4 md:grid-rows-2 md:auto-rows-[220px]">
          {imgs.map((im, i) => (
            <FadeUp
              key={i}
              delay={i * 0.08}
              className={
                i === 0
                  ? "md:col-span-2 md:row-span-2"
                  : i === 3
                  ? "md:col-span-1 md:row-span-1"
                  : "md:col-span-1 md:row-span-1"
              }
            >
              <div className="group relative w-full h-full overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto">
                <img
                  src={im.src}
                  alt={im.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />
                <span className="absolute bottom-5 left-5 text-white/90 text-[0.72rem] tracking-[0.24em] uppercase">
                  {im.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- TRUST ------------------------------- */
const stats = [
  { n: "500+", l: "Happy Families" },
  { n: "1,200+", l: "Events Designed" },
  { n: "12", l: "Years of Craft" },
  { n: "100%", l: "Custom Concepts" },
];

function Trust() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[var(--ivory)] to-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Trusted By Families & Brands</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl leading-[1.15]">
            A decade of quiet devotion — <em className="text-[var(--gold)] font-normal">measured in memories, not numbers.</em>
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.08}>
              <div className="text-center py-8 border-t border-[var(--gold)]/30">
                <p className="font-display text-5xl md:text-6xl text-[var(--gold)]">{s.n}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-foreground/60">{s.l}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ---------------------------- */
const reviews = [
  {
    quote:
      "They didn't just decorate our wedding — they honoured every ritual with such thoughtfulness. Guests are still talking about the mandap two years later.",
    name: "Anjali & Karthik",
    role: "Wedding · Chennai",
  },
  {
    quote:
      "From the first meeting we felt heard. The team translated a vague dream into a room that made my mother cry. That is real artistry.",
    name: "Priya Ramanathan",
    role: "Engagement · Coimbatore",
  },
  {
    quote:
      "For our brand launch we needed elegance without excess. Ethnic Decors delivered a stage that made every photograph look editorial.",
    name: "Rohan Iyer",
    role: "Corporate · Chennai",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <FloatingPetals count={6} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="max-w-2xl">
          <FadeUp><p className="eyebrow"><span className="gold-line mr-3" />Words From Our Clients</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              The kindest reviews we receive <em className="text-[var(--gold)] font-normal">are the ones told through tears.</em>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.1}>
              <figure className="h-full p-8 rounded-2xl bg-[var(--pearl)] border border-[var(--gold)]/25 shadow-[var(--shadow-soft)] flex flex-col">
                <Quote size={28} className="text-[var(--gold)]" />
                <blockquote className="mt-5 text-foreground/80 leading-[1.75] font-display text-[1.25rem] italic">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-[var(--gold)]/20">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/50 mt-1">{r.role}</p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT CTA ----------------------------- */
function ContactCTA() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--gold)] via-[var(--gold-soft)] to-[var(--lotus)] p-10 md:p-20 text-white shadow-[var(--shadow-luxe)]">
          <FloatingPetals count={8} />
          <div className="relative max-w-2xl">
            <p className="eyebrow text-white/80">Let's Begin</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Let's create your <em className="italic">perfect celebration.</em>
            </h2>
            <p className="mt-6 text-white/85 text-lg leading-relaxed max-w-xl">
              Share a few details about your event and our design team will
              respond within one working day with a first conversation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-white text-[var(--ink)] text-sm uppercase tracking-[0.18em] font-medium hover:bg-white/90 transition"
              >
                Plan Your Event <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919710424260"
                className="inline-flex items-center gap-2 px-8 h-12 rounded-full border border-white/60 text-sm uppercase tracking-[0.18em] font-medium hover:bg-white/10 transition"
              >
                +91 97104 24260
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
