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
  { day: "12", month: "Oct", title: "Community Town Hall on Local Governance", location: "Bauchi" },
  { day: "26", month: "Oct", title: "Youth Civic Leadership Training", location: "Kaduna" },
  { day: "08", month: "Nov", title: "Voter Education Outreach", location: "Gombe" },
];

export default function HomePage() {
  return (
    <>
      <div className="h-1.5 w-full bg-gradient-to-r from-forest via-gold to-navy" />

      <section className="border-b border-hairline bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.75fr] md:items-center md:px-10 md:py-24">
          <div>
            <p className="eyebrow">Non-profit &middot; Non-partisan &middot; Non-religious</p>
            <h1 className="h1 mt-5">
              Empowering Citizens, Transforming Society
            </h1>
            <p className="lede mt-5">
              The Centre for Civic Excellence and Social Advancement (CCESA)
              builds informed, responsible, and actively engaged citizens
              through civic education, community engagement, good governance
              initiatives, peacebuilding, and social development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/membership" className="btn-primary">Become a Member</Link>
              <Link href="/volunteer" className="btn-secondary">Volunteer</Link>
              <Link href="/donate" className="btn-gold">Donate</Link>
            </div>
          </div>
          <div className="justify-self-center border border-hairline p-8 md:justify-self-end">
            <Image
              src="/ccesa-logo.jpeg"
              alt="CCESA — Centre for Civic Excellence and Social Advancement logo"
              width={240}
              height={240}
              className="w-48 md:w-56"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-forest-light/50">
        <p className="mx-auto max-w-[68ch] px-6 py-10 text-center font-heading text-xl leading-snug text-navy md:text-2xl">
          &ldquo;An informed citizenry is the foundation of good governance,
          and lasting change comes from sustained engagement, not one-off
          interventions.&rdquo;
        </p>
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
          <h2 className="h2">Featured programmes</h2>
          <Link href="/programmes" className="link-underline text-sm font-medium">
            View all programmes &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProgrammes.map((p) => (
            <div key={p.title} className="card-accent flex flex-col">
              <h3 className="font-heading text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-white">
        <div className="section grid gap-14 md:grid-cols-2">
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-hairline pb-5">
              <h2 className="h2 !text-2xl">Latest announcements</h2>
              <Link href="/news" className="link-underline text-sm font-medium">
                All updates &rarr;
              </Link>
            </div>
            <ul className="divide-y divide-hairline">
              {announcements.map((a) => (
                <li key={a.title} className="py-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-forest-dark/80">{a.date}</p>
                  <p className="mt-1.5 font-heading text-base font-semibold text-navy">{a.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{a.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4 border-b border-hairline pb-5">
              <h2 className="h2 !text-2xl">Upcoming events</h2>
              <Link href="/events" className="link-underline text-sm font-medium">
                Full calendar &rarr;
              </Link>
            </div>
            <ul className="divide-y divide-hairline">
              {upcomingEvents.map((e) => (
                <li key={e.title} className="flex items-center gap-5 py-5">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-hairline text-center">
                    <span className="font-heading text-xl font-semibold leading-none text-forest-dark">
                      {e.day}
                    </span>
                    <span className="mt-1 text-[11px] uppercase tracking-wide text-ink/50">{e.month}</span>
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-navy">{e.title}</p>
                    <p className="mt-1 text-sm text-ink/55">{e.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="initiative-panel">
        <div className="section flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/one-million-voters-logo.jpeg"
              alt="One Million Voters Initiative logo"
              width={76}
              height={76}
              className="hidden shrink-0 sm:block"
            />
            <div>
              <span className="initiative-tag">Project content</span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-white">
                One Million Voters Initiative
              </h2>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-white/65">
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
