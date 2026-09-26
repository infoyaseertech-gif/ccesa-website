import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Million Voters Initiative | CCESA",
};

const outreach = [
  "Door-to-door civic and voter education in target wards",
  "Town hall meetings with community and traditional leaders",
  "Radio and print materials in local languages",
  "School and youth-group civic talks",
];

const training = [
  "Community voter-educator training",
  "Election-monitoring orientation for local volunteers",
  "Peace ambassador workshops",
];

export default function InitiativePage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="section-tight">
          <span className="badge-nonpartisan">A CCESA project</span>
          <h1 className="h1 mt-5">One Million Voters Initiative</h1>
          <p className="lede mt-4">
            A voter education and civic participation project tied to the
            2027 electoral cycle in Bauchi State, delivered under CCESA&rsquo;s
            civic and voter education programme.
          </p>
        </div>
      </section>

      <section className="section-tight border-b border-forest/10 bg-navy">
        <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 py-2 md:flex-row md:items-center md:px-10">
          <Image
            src="/one-million-voters-logo.jpeg"
            alt="One Million Voters Initiative logo"
            width={96}
            height={96}
            className="shrink-0"
          />
          <div>
            <span className="initiative-tag">Initiative partner</span>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-white/80">
              This initiative is associated with{" "}
              <strong className="text-white">Sen. Shehu Buba Umar</strong>, a
              candidate for Bauchi State Governor under the People&rsquo;s
              Redemption Party (PRP), in the 2027 general election. This
              partnership applies to this initiative page only. CCESA&rsquo;s
              core civic education work, described elsewhere on this site, is
              non-partisan and is not affiliated with any political party or
              candidate.
            </p>
          </div>
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="h3">Purpose and scope</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            The One Million Voters Initiative aims to reach one million
            residents of Bauchi State with non-partisan voter education ahead
            of the 2027 elections — helping citizens understand voter
            registration, PVC collection, and the voting process itself, and
            encouraging peaceful, lawful participation in the electoral
            cycle.
          </p>
        </div>
        <div>
          <h2 className="h3">Voter education & civic participation</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Educational content under this initiative follows the same civic
            education standards CCESA applies across all of its programmes:
            factual, non-partisan information about the electoral process,
            delivered in accessible formats and local languages.
          </p>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="section grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h3">Community outreach activities</h2>
            <ul className="mt-4 space-y-2">
              {outreach.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-ink/75">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3">Training programmes</h2>
            <ul className="mt-4 space-y-2">
              {training.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-ink/75">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h3">Data & progress dashboard</h2>
        <p className="mt-3 max-w-[65ch] text-sm text-ink/70">
          Live figures for wards reached, volunteers trained, and citizens
          educated will appear here as the initiative progresses.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Citizens reached", "Wards covered", "Volunteers trained"].map((label) => (
            <div key={label} className="card text-center">
              <p className="font-heading text-3xl font-semibold text-forest">&mdash;</p>
              <p className="mt-1 text-sm text-ink/60">{label}</p>
              <p className="mt-1 text-xs text-ink/40">Coming in Phase 4</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-forest-light/60">
        <div className="section-tight flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="h3">Get involved</h2>
            <p className="mt-2 max-w-[55ch] text-sm text-ink/70">
              Volunteer as a community voter educator or register to take
              part in outreach activities near you.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/volunteer" className="btn-primary">Volunteer</Link>
            <Link href="/contact" className="btn-secondary">Register interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
