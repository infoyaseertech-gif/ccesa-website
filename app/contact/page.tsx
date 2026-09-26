import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | CCESA",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reach us"
        title="Contact Us"
        description="Reach out with questions, partnership proposals, or to learn more about CCESA's programmes."
      />

      <section className="section grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="h3">Get in touch</h2>
          <ul className="mt-6 space-y-5 text-sm text-ink/70">
            <li className="border-b border-hairline pb-4">
              <p className="font-medium text-navy">Email</p>
              <p className="mt-1">centreforcivicexcellence.org.ngo@gmail.com</p>
            </li>
            <li>
              <p className="font-medium text-navy">Phone</p>
              <p className="mt-1">0706 904 6519</p>
              <p>0813 396 3845</p>
            </li>
          </ul>
        </div>

        <form className="card space-y-4">
          <h2 className="h3 !text-lg">Send a message</h2>
          <div>
            <label className="text-sm font-medium text-ink/75" htmlFor="name">Name</label>
            <input id="name" type="text" className="mt-1.5 w-full border border-hairline px-3 py-2.5 text-sm focus:border-forest" placeholder="Your full name" />
          </div>
          <div>
            <label className="text-sm font-medium text-ink/75" htmlFor="email">Email</label>
            <input id="email" type="email" className="mt-1.5 w-full border border-hairline px-3 py-2.5 text-sm focus:border-forest" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-ink/75" htmlFor="message">Message</label>
            <textarea id="message" rows={4} className="mt-1.5 w-full border border-hairline px-3 py-2.5 text-sm focus:border-forest" placeholder="How can we help?" />
          </div>
          <button type="button" className="btn-primary" disabled title="Form submission will be enabled in a later phase">
            Send message
          </button>
        </form>
      </section>

      <section className="border-t border-hairline bg-white">
        <div className="section">
          <div className="initiative-panel mx-auto max-w-2xl p-8">
            <span className="initiative-tag">Partnership & inquiry</span>
            <h2 className="mt-4 font-heading text-xl font-semibold text-white">
              Partnership or programme inquiry
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Organisations, donors, and institutions interested in
              partnering with CCESA can reach us using this form.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-white/85" htmlFor="org">Organisation</label>
                <input id="org" type="text" className="mt-1.5 w-full border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40" placeholder="Organisation name" />
              </div>
              <div>
                <label className="text-sm font-medium text-white/85" htmlFor="p-email">Contact email</label>
                <input id="p-email" type="email" className="mt-1.5 w-full border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40" placeholder="you@organisation.org" />
              </div>
              <div>
                <label className="text-sm font-medium text-white/85" htmlFor="p-message">Proposal summary</label>
                <textarea id="p-message" rows={4} className="mt-1.5 w-full border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40" placeholder="Briefly describe the partnership or inquiry" />
              </div>
              <button type="button" className="btn-gold" disabled title="Form submission will be enabled in a later phase">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
