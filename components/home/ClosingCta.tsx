import Link from "next/link";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

export default function ClosingCta() {
  return (
    <section className="edge-top-angle -mt-1 relative overflow-hidden bg-navy py-24 md:py-32">
      <PlaceholderPhoto
        label=""
        className="absolute inset-0 h-full w-full rounded-none opacity-20"
      />
      <div className="relative mx-auto max-w-content px-6 text-center md:px-10">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tightest text-white md:text-[2.75rem]">
          Join the <span className="text-gold">movement</span> for
          informed, active citizenship
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-white/65">
          Membership gives you a direct role in CCESA&rsquo;s civic
          education and community development work across Northern Nigeria.
        </p>
        <Link href="/membership" className="btn-gold mt-9 inline-flex">
          Become a Member
        </Link>
      </div>
    </section>
  );
}
