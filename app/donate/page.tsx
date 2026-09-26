import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | CCESA",
};

export default function DonatePage() {
  return (
    <section className="section max-w-xl">
      <div className="text-center">
        <span className="badge-nonpartisan">Support our work</span>
        <h1 className="h1 mt-5">Donate to CCESA</h1>
        <p className="lede mx-auto mt-4 text-center">
          Online donation processing is coming in a later phase. Until then,
          you can support CCESA&rsquo;s civic education and community
          development work directly by bank transfer.
        </p>
      </div>

      <div className="card mt-10">
        <h2 className="h3 !text-lg">Official account details</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between border-b border-forest/10 pb-2">
            <dt className="text-ink/60">Bank name</dt>
            <dd className="font-medium text-navy">Sterling Bank</dd>
          </div>
          <div className="flex justify-between border-b border-forest/10 pb-2">
            <dt className="text-ink/60">Account name</dt>
            <dd className="text-right font-medium text-navy">
              Center for Civic Excellence and Social Advancement
            </dd>
          </div>
          <div className="flex justify-between pb-2">
            <dt className="text-ink/60">Account number</dt>
            <dd className="font-medium text-navy">0149244041</dd>
          </div>
        </dl>
        <p className="mt-5 text-xs text-ink/50">
          Your support drives our mission. Thank you for partnering with us —
          transparency, accountability, and impact guide how every donation
          is used.
        </p>
      </div>
    </section>
  );
}
