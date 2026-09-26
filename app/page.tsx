import Image from "next/image";
import Link from "next/link";

const featuredProgrammes = [
  {
    title: "Civic & Voter Education",
    body: "Workshops and materials that help citizens understand their rights, the electoral process, and how to participate meaningfully.",
  },
  {
    title: "Good Governance",
    body: "Advocacy and monitoring work that pushes for transparency and accountability from public office holders.",
  },
  {
    title: "Peacebuilding",
    body: "Dialogue and early-warning initiatives that support peaceful coexistence before, during, and after elections.",
  },
  {
    title: "Community Development",
    body: "Grassroots projects designed with communities in Northern Nigeria, not for them.",
  },
];

const announcements = [
  {
    date: "September 2026",
    title: "CCESA opens registration for community voter educators",
    excerpt:
      "Volunteers across Bauchi and Kaduna States can now register for the next round of civic education training.",
  },
  {
    date: "August 2026",
    title: "Quarterly governance dialogue holds in three local government areas",
    excerpt:
      "Residents met with local officials to discuss service delivery priorities for the coming year.",
  },
  {
    date: "July 2026",
    title: "CCESA publishes new civic education handbook",
    excerpt:
      "A plain-language guide to the electoral process is now available for download in the resources section.",
  },
];

const upcomingEvents = [
  { date: "12 Oct 2026", title: "Community Town Hall on Local Governance", location: "Bauchi" },
  { date: "26 Oct 2026", title: "Youth Civic Leadership Training", location: "Kaduna" },
  { date: "08 Nov 2026", title: "Voter Education Outreach", location: "Gombe" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:py-20">
          <div>
            <span className="badge-nonpartisan">Non-profit &middot; Non-partisan &middot; Non-religious</span>
            <h1 className="h1 mt-5">
              Empowering Citizens, Transforming Society
            </h1>
            <p className="lede mt-5">
              The Centre for Civic Excellence and Social Advancement (CCESA)
              builds informed, responsible, and actively engaged citizens
              through civic education, community engagement, good governance
              initiatives, peacebuilding, and social development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/membership" className="btn-primary">Become a Member</Link>
              <Link href="/volunteer" className="btn-secondary">Volunteer</Link>
              <Link href="/donate" className="btn-gold">Donate</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/ccesa-logo.jpeg"
              alt="CCESA — Centre for Civic Excellence and Social Advancement logo"
              width={280}
              height={280}
              className="w-56 md:w-72"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <p className="mx-auto max-w-[70ch] text-center text-lg leading-relaxed text-ink/80">
          CCESA works with communities, volunteers, and local institutions
          across Northern Nigeria to strengthen civic participation and
          support peaceful, accountable governance — one programme at a time.
        </p>
      </section>

      <section className="section border-t border-forest/10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="h2">Featured programmes</h2>
          <Link href="/programmes" className="text-sm font-medium text-forest hover:underline">
            View all programmes &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProgrammes.map((p) => (
            <div key={p.title} className="card flex flex-col">
              <h3 className="h3 !text-lg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="section grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="h2 !text-2xl">Latest announcements</h2>
              <Link href="/news" className="text-sm font-medium text-forest hover:underline">
                All updates &rarr;
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-forest/10">
              {announcements.map((a) => (
                <li key={a.title} className="py-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-forest">{a.date}</p>
                  <p className="mt-1 font-heading text-base font-medium text-navy">{a.title}</p>
                  <p className="mt-1 text-sm text-ink/70">{a.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="h2 !text-2xl">Upcoming events</h2>
              <Link href="/events" className="text-sm font-medium text-forest hover:underline">
                Full calendar &rarr;
              </Link>
            </div>
            <ul className="mt-6 space-y-4">
              {upcomingEvents.map((e) => (
                <li key={e.title} className="flex gap-4 border border-forest/10 p-4">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center bg-forest-light text-center">
                    <span className="font-heading text-sm font-semibold text-forest-dark">
                      {e.date.split(" ")[0]}
                    </span>
                    <span className="text-[11px] text-forest-dark/80">{e.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-medium text-navy">{e.title}</p>
                    <p className="mt-1 text-xs text-ink/60">{e.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="initiative-panel">
        <div className="section flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/one-million-voters-logo.jpeg"
              alt="One Million Voters Initiative logo"
              width={72}
              height={72}
              className="shrink-0"
            />
            <div>
              <span className="initiative-tag">Project content</span>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-white">
                One Million Voters Initiative
              </h2>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-white/70">
                A voter education and civic participation project ahead of the
                2027 Bauchi State elections, run under CCESA&rsquo;s civic
                education mandate.
              </p>
            </div>
          </div>
          <Link href="/initiative" className="btn-gold shrink-0">
            Learn more
          </Link>
        </div>
      </section>
    </>
  );
}
