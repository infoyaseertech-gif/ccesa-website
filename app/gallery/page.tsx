import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery | CCESA",
};

const captions = [
  "Community town hall, Bauchi",
  "Youth leadership training, Kaduna",
  "Voter education outreach, Gombe",
  "Peace dialogue forum, Zaria",
  "Women in civic life roundtable",
  "Volunteer orientation day",
  "Civic education handbook launch",
  "Community clean-up activity",
  "Governance dialogue session",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="In pictures"
        title="Gallery"
        description="Moments from CCESA programmes and community activities."
      />

      <section className="section">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {captions.map((c, i) => (
            <figure key={c} className="bg-white">
              <div className="flex aspect-[4/3] items-center justify-center bg-forest-light text-sm text-forest-dark/60">
                Photo placeholder {i + 1}
              </div>
              <figcaption className="px-4 py-3 text-sm text-ink/65">{c}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
