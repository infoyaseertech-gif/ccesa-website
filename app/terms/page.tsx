import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | CCESA",
};

export default function TermsPage() {
  return (
    <section className="section max-w-[75ch]">
      <p className="eyebrow">Legal</p>
      <h1 className="h1 mt-4">Terms of Use</h1>
      <p className="mt-3 text-sm text-ink/55">Last updated: September 2026</p>

      <div className="prose mt-10 space-y-6 border-t border-hairline pt-10 text-sm leading-relaxed text-ink/75">
        <p>
          These Terms of Use govern access to and use of the Centre for Civic
          Excellence and Social Advancement (CCESA) website. By using this
          site, you agree to these terms.
        </p>

        <div>
          <h2 className="h3 !text-lg">About this site</h2>
          <p className="mt-2">
            This website provides information about CCESA, its programmes,
            and affiliated projects, including the One Million Voters
            Initiative. Content marked as project or initiative content
            reflects the activities of that specific project and is
            distinguished from CCESA&rsquo;s general non-partisan civic
            education material.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Acceptable use</h2>
          <p className="mt-2">
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of, or restrict the use
            and enjoyment of, this site by any third party.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Intellectual property</h2>
          <p className="mt-2">
            Unless otherwise stated, CCESA owns the intellectual property
            rights for all material on this website, including logos, text,
            and published resources. You may view and download material for
            personal, non-commercial reference.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Personal and voter data</h2>
          <p className="mt-2">
            Any personal data, including voter-related data collected through
            the One Million Voters Initiative, is handled in line with our
            Privacy Policy and is not publicly displayed on this website.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">No warranty</h2>
          <p className="mt-2">
            This website and its content are provided &ldquo;as is&rdquo;.
            While CCESA takes care to keep information accurate and current,
            we make no guarantee as to completeness or accuracy at all times.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Changes to these terms</h2>
          <p className="mt-2">
            CCESA may update these terms from time to time. Continued use of
            the website after changes are posted constitutes acceptance of
            the revised terms.
          </p>
        </div>

        <div>
          <h2 className="h3 !text-lg">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to
            centreforcivicexcellence.org.ngo@gmail.com.
          </p>
        </div>

        <p className="text-xs text-ink/50">
          This is placeholder terms text prepared for the initial launch of
          this website and should be reviewed by CCESA before publication.
        </p>
      </div>
    </section>
  );
}
