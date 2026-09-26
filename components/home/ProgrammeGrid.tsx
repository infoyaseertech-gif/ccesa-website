"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Vote,
  Landmark,
  HeartHandshake,
  Users,
  GraduationCap,
} from "lucide-react";
import IconBadge from "@/components/IconBadge";

const filters = ["All", "Civic Education", "Voter Education", "Community Development", "Youth"] as const;
type Filter = (typeof filters)[number];

const programmes: {
  title: string;
  category: Filter | "Good Governance" | "Peacebuilding";
  icon: typeof BookOpen;
  body: string;
}[] = [
  { title: "Civic Education", category: "Civic Education", icon: BookOpen, body: "Community sessions on rights, responsibilities, and how government works." },
  { title: "Voter Education", category: "Voter Education", icon: Vote, body: "Non-partisan guidance on registration, PVC collection, and the voting process." },
  { title: "Good Governance", category: "Good Governance", icon: Landmark, body: "Advocacy and monitoring that push for transparency and accountability." },
  { title: "Peacebuilding", category: "Peacebuilding", icon: HeartHandshake, body: "Dialogue and early-warning work supporting peaceful democratic participation." },
  { title: "Community Development", category: "Community Development", icon: Users, body: "Grassroots projects co-designed with the communities they serve." },
  { title: "Youth Engagement", category: "Youth", icon: GraduationCap, body: "Leadership training and mentorship for the next generation of civic actors." },
];

export default function ProgrammeGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All" ? programmes : programmes.filter((p) => p.category === active);

  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tightest text-white md:text-[2.25rem]">
              Programmes at a glance
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`min-h-[44px] rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? "border-gold bg-gold text-navy"
                    : "border-white/25 text-white/75 hover:border-white/50 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <div key={p.title} className="rounded-md border border-white/10 bg-white p-6">
              <IconBadge icon={p.icon} variant="light" />
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
              <Link href="/programmes" className="mt-4 inline-block text-sm font-semibold text-gold-dark hover:underline">
                Explore &rarr;
              </Link>
            </div>
          ))}

          {active === "All" && (
            <div className="rounded-md border-2 border-gold bg-navy p-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/one-million-voters-logo.jpeg"
                  alt="One Million Voters Initiative logo"
                  width={40}
                  height={40}
                />
                <span className="rounded-md bg-gold px-2.5 py-1 text-xs font-semibold text-navy">
                  Project
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                One Million Voters Initiative
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                A voter education drive ahead of the 2027 Bauchi State
                elections — a distinct project, not a core CCESA programme.
              </p>
              <Link href="/initiative" className="mt-4 inline-block text-sm font-semibold text-gold hover:underline">
                Explore &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
