import type { Metadata } from "next";

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
      <section className="border-b border-forest/10 bg-forest-light/60">
        <div className="section-tight">
          <h1 className="h1">Gallery</h1>
          <p className="lede mt-4">
            Moments from CCESA programmes and community activities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {captions.map((c, i) => (
            <figure key={c} className="border border-forest/10 bg-white">
              <div className="flex aspect-[4/3] items-center justify-center bg-forest-light text-sm text-forest-dark/70">
                Photo placeholder {i + 1}
              </div>
              <figcaption className="px-4 py-3 text-sm text-ink/70">{c}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
