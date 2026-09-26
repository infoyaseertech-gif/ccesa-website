import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CCESA",
};

export default function PrivacyPage() {
  return (
    <section className="section max-w-[75ch]">
      <p className="eyebrow-dark">Legal</p>
      <h1 className="h1 mt-4">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink/55">Last updated: September 2026</p>

      <div className="prose mt-10 space-y-6 border-t border-hairline pt-10 text-sm leading-relaxed text-ink/75">
        <p>
          The Centre for Civic Excellence and Social Advancement (CCESA)
          respects the privacy of everyone who interacts with our
          organisation, including visitors to this website, programme
          participants, volunteers, and members of the public who take part
          in our civic and voter education activities, including the One
          Million Voters Initiative.
        </p>

        <div>
          <h2 className="h3 !text-lg">Information we collect</h2>
          <p className="mt-2">
            We may collect basic contact information (such as name, email
            address, and phone number) when you contact us, register as a
            volunteer, become a member, or sign up for an event or training
            programme. Where voter education activities involve collecting
            information from participants, we collect only what is necessary
            to deliver the programme.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">How we use information</h2>
          <p className="mt-2">
            Information collected is used solely to coordinate CCESA&rsquo;s
            programmes, respond to inquiries, and communicate with volunteers,
            members, and partners. We do not sell or rent personal
            information to third parties.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Voter-related data</h2>
          <p className="mt-2">
            Any personal or voter-related data collected through the One
            Million Voters Initiative or any other voter education activity
            is not publicly displayed on this website or elsewhere, and is
            handled under CCESA&rsquo;s internal data-protection practices.
            Aggregate, non-identifying figures (such as the number of people
            reached) may be shared publicly to report on programme progress.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Data protection</h2>
          <p className="mt-2">
            CCESA takes reasonable technical and organisational measures to
            protect personal information in our care from unauthorised
            access, disclosure, or misuse.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Your rights</h2>
          <p className="mt-2">
            You may contact us at any time to ask what information we hold
            about you, to request a correction, or to request that it be
            deleted, subject to any legal or programme-reporting
            requirements.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to
            centreforcivicexcellence.org.ngo@gmail.com.
          </p>
        </div>

        <p className="text-xs text-ink/50">
          This is placeholder policy text prepared for the initial launch of
          this website and should be reviewed by CCESA before publication.
        </p>
      </div>
    </section>
  );
}
