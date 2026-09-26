const stats = [
  { value: "120+", label: "Communities Reached" },
  { value: "850+", label: "Volunteers Trained" },
  { value: "18", label: "LGAs Covered" },
  { value: "6", label: "Years of Civic Impact" },
];

export default function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-content px-6 md:-mt-20 md:px-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline shadow-[0_8px_30px_rgba(20,33,61,0.12)] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-canvas px-5 py-7 text-center">
            <p className="font-heading text-3xl font-bold tabular-nums text-navy md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1.5 text-sm text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
