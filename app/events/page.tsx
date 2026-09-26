import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | CCESA",
};

const upcoming = [
  { title: "Community Town Hall on Local Governance", date: "12 October 2026", location: "Bauchi", body: "An open forum where residents can raise service-delivery concerns directly with local officials." },
  { title: "Youth Civic Leadership Training", date: "26 October 2026", location: "Kaduna", body: "A two-day workshop building civic leadership and advocacy skills among young people." },
  { title: "Voter Education Outreach", date: "08 November 2026", location: "Gombe", body: "Door-to-door and community-hall sessions on voter registration and the electoral process." },
  { title: "Peace Dialogue Forum", date: "21 November 2026", location: "Zaria", body: "Traditional and religious leaders convene to discuss early-warning signs of election-related tension." },
  { title: "Women in Civic Life Roundtable", date: "05 December 2026", location: "Bauchi", body: "A discussion on removing barriers to women's participation in community and civic decision-making." },
  { title: "Volunteer Orientation Day", date: "17 December 2026", location: "Kaduna", body: "Onboarding session for newly registered community volunteers and voter educators." },
];

const past = [
  { title: "Quarterly Governance Dialogue", date: "August 2026", report: "Residents across three local government areas met with officials to review service delivery commitments." },
  { title: "Civic Education Handbook Launch", date: "July 2026", report: "CCESA introduced a plain-language guide to the electoral process, now available in the resources section." },
  { title: "Community Clean-Up & Civic Talk", date: "May 2026", report: "A joint community development and civic education activity in partnership with local youth groups." },
];

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="section-tight">
          <h1 className="h1">Events</h1>
          <p className="lede mt-4">
            Community forums, training sessions, and outreach activities run
            by CCESA and its programme partners.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Upcoming events</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => (
            <div key={e.title} className="card flex flex-col">
              <p className="text-xs font-medium uppercase tracking-wide text-forest">{e.date}</p>
              <h3 className="h3 !text-lg mt-2">{e.title}</h3>
              <p className="mt-1 text-sm font-medium text-ink/60">{e.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="section">
          <h2 className="h2">Past events</h2>
          <div className="mt-8 space-y-4">
            {past.map((e) => (
              <div key={e.title} className="flex flex-col gap-4 border border-forest/10 p-5 sm:flex-row sm:items-center">
                <div className="flex h-24 w-full shrink-0 items-center justify-center bg-forest-light text-sm font-medium text-forest-dark sm:w-36">
                  Photo placeholder
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-forest">{e.date}</p>
                  <h3 className="font-heading text-base font-semibold text-navy">{e.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{e.report}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
