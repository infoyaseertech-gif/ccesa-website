import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CCESA",
};

const objectives = [
  "Promote civic and voter education across communities.",
  "Encourage lawful and informed citizen participation in governance.",
  "Support community development initiatives at the grassroots.",
  "Promote peaceful participation in democratic processes.",
  "Encourage accountability and good governance at all levels.",
  "Build the capacity of youth and volunteers as civic actors.",
  "Conduct research and advocacy on civic and governance issues.",
  "Create platforms for sustained civic engagement.",
];

const values = [
  { title: "Integrity", body: "We act transparently and hold ourselves to the same standards we advocate for." },
  { title: "Non-partisanship", body: "Our civic education work serves every citizen, regardless of political affiliation." },
  { title: "Participation", body: "We believe governance improves when more citizens are informed and involved." },
  { title: "Peace", body: "We pursue civic goals through dialogue, education, and lawful engagement." },
];

const leaders = [
  { name: "Placeholder Name", title: "Executive Director", bio: "Oversees CCESA's strategic direction and programme delivery." },
  { name: "Placeholder Name", title: "Programmes Coordinator", bio: "Leads design and implementation of civic education programmes." },
  { name: "Placeholder Name", title: "Head, Community Engagement", bio: "Coordinates community outreach and volunteer networks." },
  { name: "Placeholder Name", title: "Research & Advocacy Lead", bio: "Directs research that informs CCESA's governance advocacy." },
  { name: "Placeholder Name", title: "Finance & Administration", bio: "Manages organisational operations and accountability." },
  { name: "Placeholder Name", title: "Communications Officer", bio: "Manages public communication and media relations." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="section-tight">
          <h1 className="h1">About CCESA</h1>
          <p className="lede mt-4">
            The Centre for Civic Excellence and Social Advancement is a
            non-profit, non-partisan, non-religious, non-governmental
            organisation working to strengthen civic life across Northern
            Nigeria.
          </p>
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="h3">Our background</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            CCESA was established to respond to a simple but persistent gap:
            many citizens want to participate in governance and community life
            but lack access to clear civic information and safe spaces to
            engage. Since then, CCESA has worked with community groups, youth
            networks, and local institutions across Kaduna, Bauchi, and
            neighbouring states to deliver civic education, support peaceful
            democratic participation, and back community-led development
            projects.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our work is grounded in the belief that an informed citizenry is
            the foundation of good governance, and that lasting change comes
            from sustained engagement rather than one-off interventions.
          </p>
        </div>
        <div className="space-y-5">
          <div className="card">
            <h3 className="h3 !text-lg">Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              To promote informed and active citizenship through civic
              education, community engagement, good governance initiatives,
              peacebuilding, and social development.
            </p>
          </div>
          <div className="card">
            <h3 className="h3 !text-lg">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              To build an informed, responsible, peaceful, and actively
              engaged citizenry that contributes positively to democratic and
              community development.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="section">
          <h2 className="h2">Core values</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-heading text-base font-semibold text-forest-dark">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Aims and objectives</h2>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {objectives.map((o, i) => (
            <li key={o} className="flex gap-3 border border-forest/10 bg-white p-4">
              <span className="font-heading text-forest">{i + 1}.</span>
              <span className="text-sm leading-relaxed text-ink/75">{o}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="section">
          <h2 className="h2">Organisational leadership</h2>
          <p className="mt-3 max-w-[65ch] text-sm text-ink/70">
            CCESA is guided by a leadership team responsible for programme
            direction, community relationships, and organisational
            accountability.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <div key={i} className="card text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest-light font-heading text-xl font-semibold text-forest-dark">
                  {l.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-navy">{l.name}</h3>
                <p className="text-sm font-medium text-forest">{l.title}</p>
                <p className="mt-2 text-sm text-ink/65">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
