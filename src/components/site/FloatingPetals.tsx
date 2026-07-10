import { useMemo } from "react";

// Lightweight CSS-only floating petals — evokes lotus petals drifting.
export function FloatingPetals({ count = 10 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 12,
        size: 10 + Math.random() * 14,
        hue: Math.random() > 0.5 ? "var(--lotus)" : "var(--gold-soft)",
        opacity: 0.35 + Math.random() * 0.35,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute block rounded-[60%_40%_60%_40%/50%_60%_40%_50%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.7,
            background: `radial-gradient(ellipse at 30% 30%, ${p.hue}, transparent 70%)`,
            opacity: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}