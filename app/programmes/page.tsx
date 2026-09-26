import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programmes | CCESA",
};

const programmes = [
  {
    title: "Civic Education",
    body: "Community sessions and materials that explain civic rights, responsibilities, and how government works at every level.",
  },
  {
    title: "Voter Education",
    body: "Non-partisan guidance on the electoral process — registration, PVC collection, and how to vote — so every citizen can participate with confidence.",
  },
  {
    title: "Good Governance",
    body: "Monitoring and advocacy work that pushes for transparency, service delivery, and accountability from elected and appointed officials.",
  },
  {
    title: "Peacebuilding",
    body: "Dialogue forums and early-warning networks that support peaceful coexistence before, during, and after elections.",
  },
  {
    title: "Community Development",
    body: "Grassroots projects co-designed with local communities to address priorities they identify themselves.",
  },
  {
    title: "Youth Engagement",
    body: "Leadership training and mentorship that prepares young people to take up active civic roles.",
  },
  {
    title: "Women & Community Participation",
    body: "Targeted outreach that removes barriers to women's participation in civic and community life.",
  },
  {
    title: "Research & Advocacy",
    body: "Evidence-based research that informs CCESA's public positions on civic and governance issues.",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="section-tight">
          <h1 className="h1">Our Programmes</h1>
          <p className="lede mt-4">
            CCESA runs eight interconnected programme areas designed to build
            civic knowledge, encourage participation, and support peaceful,
            accountable governance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <div key={p.title} className="card">
              <h3 className="h3 !text-lg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
            </div>
          ))}
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
              <span className="initiative-tag">Featured project</span>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-white">
                One Million Voters Initiative
              </h2>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-white/70">
                A large-scale voter education and civic participation drive
                ahead of the 2027 Bauchi State elections, delivered under
                CCESA&rsquo;s civic and voter education programme.
              </p>
            </div>
          </div>
          <Link href="/initiative" className="btn-gold shrink-0">
            View initiative
          </Link>
        </div>
      </section>
    </>
  );
}
