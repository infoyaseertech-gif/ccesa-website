import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News & Updates | CCESA",
};

const news = [
  { date: "18 Sep 2026", title: "CCESA opens registration for community voter educators", excerpt: "Volunteers across Bauchi and Kaduna States can now register for the next round of civic education training." },
  { date: "22 Aug 2026", title: "Quarterly governance dialogue holds in three local government areas", excerpt: "Residents met with local officials to discuss service delivery priorities for the coming year." },
  { date: "30 Jul 2026", title: "CCESA publishes new civic education handbook", excerpt: "A plain-language guide to the electoral process is now available for download in the resources section." },
  { date: "14 Jul 2026", title: "Peacebuilding programme expands to two new local government areas", excerpt: "Dialogue forums and early-warning networks will now cover a wider stretch of Kaduna State." },
  { date: "02 Jun 2026", title: "CCESA statement on civic participation ahead of 2027 elections", excerpt: "A press statement outlining CCESA's non-partisan civic education plans for the coming electoral cycle." },
  { date: "19 May 2026", title: "Community clean-up and civic talk draws strong youth turnout", excerpt: "A joint community development and civic education activity delivered with local youth groups." },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News & Updates"
        description="Announcements, programme updates, and press releases from CCESA."
      />

      <section className="section">
        <div className="divide-y divide-hairline border-y border-hairline">
          {news.map((n) => (
            <article key={n.title} className="flex flex-col gap-3 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="sm:max-w-[65%]">
                <p className="text-xs font-medium uppercase tracking-wide text-forest-dark/80">{n.date}</p>
                <h2 className="mt-1.5 font-heading text-lg font-semibold text-navy">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{n.excerpt}</p>
              </div>
              <a href="#" className="link-underline mt-1 whitespace-nowrap text-sm font-medium">
                Read more &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
