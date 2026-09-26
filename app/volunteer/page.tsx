import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer | CCESA",
};

export default function VolunteerPage() {
  return (
    <section className="section max-w-2xl text-center">
      <span className="badge-nonpartisan">Coming soon</span>
      <h1 className="h1 mt-5">Volunteer With CCESA</h1>
      <p className="lede mx-auto mt-4">
        Online volunteer registration is being built and will be available in
        a later phase of this website. In the meantime, contact us directly
        to register your interest.
      </p>
      <a href="mailto:centreforcivicexcellence.org.ngo@gmail.com" className="btn-primary mt-8 inline-flex">
        Email us to volunteer
      </a>
    </section>
  );
}
