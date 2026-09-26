import Link from "next/link";
import {
  BookOpen,
  Vote,
  Landmark,
  HeartHandshake,
  Users,
  GraduationCap,
} from "lucide-react";
import IconBadge from "@/components/IconBadge";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

const categories = [
  { icon: BookOpen, title: "Civic Education" },
  { icon: Vote, title: "Voter Education" },
  { icon: Landmark, title: "Good Governance" },
  { icon: HeartHandshake, title: "Peacebuilding" },
  { icon: Users, title: "Community Development" },
  { icon: GraduationCap, title: "Youth Engagement" },
];

export default function ProgrammesOverview() {
  return (
    <section className="bg-canvas pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="eyebrow-dark">What we do</p>
            <h2 className="h2 mt-4">
              Programmes built with communities, not for them
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink/70">
              From civic classrooms to community dialogues, CCESA runs
              programmes that turn informed citizens into active
              participants in local and state governance.
            </p>
            <Link href="/programmes" className="btn-primary mt-8">
              View All Programmes
            </Link>
          </div>

          <div className="relative">
            <PlaceholderPhoto
              label="Civic education training session"
              className="aspect-[5/4] w-full"
            />
            <div className="absolute -bottom-5 left-5 rounded-md border border-hairline bg-white px-4 py-2.5 text-xs font-medium text-navy shadow-[0_6px_20px_rgba(20,33,61,0.12)] md:left-8">
              Hands-on Community Work
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:mt-20 lg:grid-cols-6">
          {categories.map((c) => (
            <div key={c.title} className="flex flex-col items-center text-center">
              <IconBadge icon={c.icon} variant="dark" />
              <p className="mt-4 text-sm font-medium leading-snug text-navy">
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
