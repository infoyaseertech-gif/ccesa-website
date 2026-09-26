import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Member | CCESA",
};

export default function MembershipPage() {
  return (
    <section className="section max-w-2xl text-center">
      <span className="badge-nonpartisan">Coming soon</span>
      <h1 className="h1 mt-5">Become a Member</h1>
      <p className="lede mx-auto mt-4">
        Online membership registration is being built and will be available
        in a later phase of this website. In the meantime, reach out to us
        directly to join CCESA.
      </p>
      <a href="mailto:centreforcivicexcellence.org.ngo@gmail.com" className="btn-primary mt-8 inline-flex">
        Email us to join
      </a>
    </section>
  );
}
