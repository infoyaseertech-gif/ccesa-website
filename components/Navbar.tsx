"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Programmes" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
];

const moreLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-canvas/95 backdrop-blur">
      <div className="border-b border-forest/10 bg-navy text-white">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-1.5 text-xs md:px-10">
          <span className="hidden sm:inline">
            centreforcivicexcellence.org.ngo@gmail.com
          </span>
          <span>07069046519 &middot; 08133963845</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ccesa-logo.jpeg"
            alt="CCESA logo"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-heading text-lg font-semibold leading-tight text-navy">
            CCESA
            <span className="block text-[11px] font-normal text-ink/60">
              Empowering Citizens, Transforming Society
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-forest"
                  : "text-ink/75 hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="px-3 py-2 text-sm font-medium text-ink/75 hover:text-forest"
            >
              More
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-44 border border-forest/10 bg-white shadow-md">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-ink/80 hover:bg-forest-light hover:text-forest-dark"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/initiative"
            className="ml-1 flex items-center gap-1.5 border border-gold bg-navy px-3 py-2 text-sm font-semibold text-gold hover:bg-navy/90"
          >
            1 Million Voters Initiative
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/membership" className="btn-secondary !px-4 !py-2 text-sm">
            Become a Member
          </Link>
          <Link href="/donate" className="btn-primary !px-4 !py-2 text-sm">
            Donate
          </Link>
        </div>

        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-navy" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {[...primaryLinks, ...moreLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-ink/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/initiative"
                onClick={() => setOpen(false)}
                className="mt-2 block bg-navy px-3 py-2.5 text-sm font-semibold text-gold"
              >
                1 Million Voters Initiative
              </Link>
            </li>
            <li className="mt-3 flex gap-2">
              <Link href="/membership" onClick={() => setOpen(false)} className="btn-secondary flex-1 !px-4 !py-2 text-sm">
                Become a Member
              </Link>
              <Link href="/donate" onClick={() => setOpen(false)} className="btn-primary flex-1 !px-4 !py-2 text-sm">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
