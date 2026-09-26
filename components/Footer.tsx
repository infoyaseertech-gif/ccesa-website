import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/initiative", label: "1 Million Voters Initiative" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News & Updates" },
  { href: "/resources", label: "Documents & Resources" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const socials = ["Facebook", "X (Twitter)", "Instagram", "YouTube"];

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-navy text-white/90">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/ccesa-logo.jpeg"
              alt="CCESA logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-heading text-base font-semibold text-white">
              CCESA
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            A non-profit, non-partisan, non-religious civic organisation
            promoting informed and active citizenship across Nigeria.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>centreforcivicexcellence.org.ngo@gmail.com</li>
            <li>0706 904 6519</li>
            <li>0813 396 3845</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <span
                key={s}
                className="border border-white/20 px-2.5 py-1 text-xs text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50 md:px-10">
        &copy; {new Date().getFullYear()} Centre for Civic Excellence and Social
        Advancement (CCESA). All rights reserved.
      </div>
    </footer>
  );
}
