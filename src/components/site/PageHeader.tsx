import { FadeUp } from "./Reveal";
import { FloatingPetals } from "./FloatingPetals";

export function PageHeader({
  eyebrow,
  title,
  italic,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold-soft)_35%,transparent),transparent_70%)]" />
      <FloatingPetals count={8} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <p className="eyebrow">
            <span className="gold-line mr-3" />
            {eyebrow}
            <span className="gold-line ml-3" />
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
            {title}{" "}
            {italic && <em className="text-[var(--gold)] font-normal">{italic}</em>}
          </h1>
        </FadeUp>
        {subtitle && (
          <FadeUp delay={0.2}>
            <p className="mt-6 text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}