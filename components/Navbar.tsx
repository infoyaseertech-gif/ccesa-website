"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const moreLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-1.5 text-xs text-white/75 md:px-10">
          <span className="hidden sm:inline">
            centreforcivicexcellence.org.ngo@gmail.com
          </span>
          <span className="tracking-wide">0706 904 6519 &middot; 0813 396 3845</span>
        </div>
      </div>

      <div className="border-b border-hairline">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/ccesa-logo.jpeg"
              alt="CCESA logo"
              width={46}
              height={46}
              className="rounded-full"
              priority
            />
            <span className="font-heading text-xl font-semibold leading-none text-navy">
              CCESA
              <span className="mt-1 block font-body text-[11px] font-normal leading-none text-ink/55">
                Empowering Citizens, Transforming Society
              </span>
            </span>
          </Link>

          <nav className="hidden items-center lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-forest-dark after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-gold"
                    : "text-ink/70 hover:text-forest-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="px-3.5 py-2 text-sm font-medium text-ink/70 hover:text-forest-dark"
              >
                More
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full w-44 rounded-md border border-hairline bg-white shadow-lg">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-ink/75 hover:bg-forest-light hover:text-forest-dark"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/initiative"
              className="ml-3 flex items-center gap-1.5 rounded-md border border-gold bg-navy px-3.5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-navy-dark"
            >
              One Million Voters Initiative
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/donate" className="text-sm font-medium text-ink/70 hover:text-forest-dark">
              Donate
            </Link>
            <Link href="/membership" className="btn-gold !px-4 !py-2 text-sm">
              Become a Member
            </Link>
          </div>

          <button
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-b border-hairline bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col divide-y divide-hairline">
            {[...primaryLinks, ...moreLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-[44px] py-3 text-sm font-medium leading-[1.75rem] text-ink/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/initiative"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-navy px-3 py-3 text-center text-sm font-semibold text-gold"
          >
            One Million Voters Initiative
          </Link>
          <div className="mt-3 flex gap-2">
            <Link href="/donate" onClick={() => setOpen(false)} className="btn-secondary flex-1 !px-4 !py-2 text-sm">
              Donate
            </Link>
            <Link href="/membership" onClick={() => setOpen(false)} className="btn-gold flex-1 !px-4 !py-2 text-sm">
              Become a Member
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
