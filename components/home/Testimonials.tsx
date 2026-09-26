const testimonials = [
  {
    quote:
      "CCESA's voter education session was the first time anyone explained the whole process to us in plain language. I registered the very next week.",
    name: "Amina Y.",
    role: "Resident, Bauchi",
  },
  {
    quote:
      "The peacebuilding dialogue brought our community leaders to the same table for the first time in years. That alone changed how disputes get handled here.",
    name: "Ibrahim S.",
    role: "Community Leader, Zaria",
  },
  {
    quote:
      "As a volunteer facilitator, the training gave me the confidence and materials to run civic education sessions in my own ward.",
    name: "Grace O.",
    role: "Community Volunteer, Kaduna",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <p className="eyebrow-dark">In their words</p>
        <h2 className="h2 mt-4">Voices from the communities we work with</h2>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card min-w-[82%] shrink-0 snap-center sm:min-w-[60%] md:min-w-0 md:shrink"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-light font-heading text-base font-semibold text-forest-dark">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <blockquote className="mt-5 font-heading text-lg italic leading-snug text-navy">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-navy">{t.name}</span>
                <span className="text-ink/55"> &middot; {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
