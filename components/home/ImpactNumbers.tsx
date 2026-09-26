/**
 * Placeholder figures. In Phase 4 this array will be replaced by data
 * fetched from the admin dashboard (e.g. a `getImpactStats()` call) —
 * the component itself only needs an array of { label, value } to render,
 * so swapping the source later requires no markup changes.
 */
const impactStats = [
  { value: "6", label: "Years of Operation" },
  { value: "120+", label: "Communities Reached" },
  { value: "850+", label: "Volunteers Trained" },
  { value: "300+", label: "Trainings Conducted" },
];

export default function ImpactNumbers({
  stats = impactStats,
}: {
  stats?: typeof impactStats;
}) {
  return (
    <section className="edge-bottom-angle -mb-1 bg-navy pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <p className="eyebrow">Our impact</p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl font-bold tabular-nums text-gold md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
