import Link from "next/link";
import { UserCheck, Network, MapPin, ClipboardCheck } from "lucide-react";
import IconBadge from "@/components/IconBadge";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

const features = [
  { icon: UserCheck, title: "Trained Facilitators" },
  { icon: Network, title: "Active Volunteer Network" },
  { icon: MapPin, title: "Statewide Reach" },
  { icon: ClipboardCheck, title: "Transparent Reporting" },
];

export default function DarkContrast() {
  return (
    <section className="edge-top-angle -mt-1 bg-navy pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <PlaceholderPhoto
            label="CCESA community presence"
            className="aspect-[5/4] w-full order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <p className="eyebrow">On the ground</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tightest text-white md:text-[2.25rem]">
              A presence built inside communities, not around them
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/65">
              CCESA field teams work alongside local leaders, youth groups,
              and volunteers across Northern Nigeria — building trust that
              makes civic education stick long after a session ends.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <IconBadge icon={f.icon} variant="gold" />
                  <p className="text-sm font-medium leading-snug text-white/85">
                    {f.title}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-ghost-light mt-9">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
