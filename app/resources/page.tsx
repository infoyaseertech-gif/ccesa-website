import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Documents & Resources | CCESA",
};

const resources = [
  { title: "Civic Education Handbook", type: "Report", body: "A plain-language guide to citizens' rights, responsibilities, and the electoral process." },
  { title: "Voter Education Toolkit", type: "Training material", body: "Facilitator materials used in CCESA's community voter education sessions." },
  { title: "Good Governance Advocacy Brief", type: "Policy", body: "CCESA's position on transparency and accountability in local government service delivery." },
  { title: "Peacebuilding Facilitator Guide", type: "Training material", body: "A guide for community dialogue facilitators working on early-warning and peacebuilding." },
  { title: "Annual Activity Report", type: "Report", body: "A summary of CCESA's programmes, reach, and outcomes for the reporting year." },
  { title: "Organisational Policy Handbook", type: "Policy", body: "CCESA's internal policies on safeguarding, conduct, and data protection." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Documents & Resources"
        description="Reports, training materials, civic education materials, and policies published by CCESA."
      />

      <section className="section">
        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="flex flex-col bg-white p-6">
              <span className="w-fit border border-forest/25 bg-forest-light px-2.5 py-0.5 text-xs font-medium text-forest-dark">
                {r.type}
              </span>
              <h3 className="h3 !text-lg mt-3">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{r.body}</p>
              <button
                type="button"
                className="btn-secondary mt-5 w-fit !px-5 !py-2 text-sm"
                disabled
                title="Downloads will be enabled in a later phase"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
