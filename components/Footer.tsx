import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/initiative", label: "One Million Voters Initiative" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News & Updates" },
  { href: "/resources", label: "Documents & Resources" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X (Twitter)" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-navy text-white/90">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr_1fr_0.8fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/ccesa-logo.jpeg"
              alt="CCESA logo"
              width={42}
              height={42}
              className="rounded-full"
            />
            <span className="font-heading text-lg font-semibold text-white">
              CCESA
            </span>
          </div>
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-white/55">
            Empowering Citizens, Transforming Society — a non-profit,
            non-partisan, non-religious civic organisation promoting informed
            and active citizenship across Nigeria.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-white">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>centreforcivicexcellence.org.ngo@gmail.com</li>
            <li>0706 904 6519</li>
            <li>0813 396 3845</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <span
                key={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/60 transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-white">
            Legal
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45 md:px-10">
        &copy; {new Date().getFullYear()} Centre for Civic Excellence and Social
        Advancement (CCESA). All rights reserved.
      </div>
    </footer>
  );
}
