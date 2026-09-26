import Link from "next/link";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,162,39,0.5), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-content gap-12 px-6 md:grid-cols-2 md:items-center md:gap-10 md:px-10">
        <div>
          <p className="eyebrow">Civic Education &middot; Good Governance &middot; Community</p>
          <h1 className="mt-5 font-heading text-[2.5rem] font-semibold leading-[1.1] tracking-tightest text-white md:text-[3.4rem]">
            Empowered Citizens Build{" "}
            <span className="text-gold">Better</span> Governance
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/65">
            CCESA equips everyday Nigerians with the civic knowledge,
            voter education, and community platforms they need to
            participate meaningfully in democracy — and to hold governance
            accountable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/membership" className="btn-gold">
              Become a Member
            </Link>
            <Link href="/about" className="btn-ghost-light">
              Watch Our Story
            </Link>
          </div>
        </div>

        <PlaceholderPhoto
          label="Community civic engagement"
          organic
          className="aspect-[4/3] w-full md:aspect-square"
        />
      </div>
    </section>
  );
}
