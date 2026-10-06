"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/instrument", label: "Instrument" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-black">
      <div className="mx-auto flex w-full max-w-[679px] min-w-72 items-center justify-between gap-6 overflow-hidden px-6 pt-10 pb-5">
        <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
          <Image
            src="/logoheader.png"
            alt="Sousophone Carbon"
            width={68}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="inline-flex flex-col items-start gap-[5px] overflow-hidden">
            <span className="text-[10px] font-bold text-stone-400">
              FRANCE
            </span>
            <span className="inline-flex h-1 w-4 items-start justify-start overflow-hidden rounded-xs">
              <span className="h-1 w-1.5 bg-sky-700" />
              <span className="h-1 w-1.5 bg-white" />
              <span className="h-1 w-1.5 bg-red-700" />
            </span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full outline outline-1 outline-offset-[-1px] outline-stone-800 transition-colors hover:outline-stone-600"
        >
          <svg
            className="size-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {ouvert ? (
              <>
                <path d="M3 3l10 10" />
                <path d="M13 3L3 13" />
              </>
            ) : (
              <>
                <path d="M2 4h12" />
                <path d="M2 8h12" />
                <path d="M2 12h12" />
              </>
            )}
          </svg>
        </button>
      </div>

      {ouvert ? (
        <nav className="border-t border-white/10 bg-black">
          <ul className="mx-auto flex w-full max-w-[679px] flex-col px-6 pb-5">
            {liens.map(({ href, label }) => {
              const actif = pathname === href;
              return (
                <li key={href} className="border-b border-white/5 last:border-b-0">
                  <Link
                    href={href}
                    aria-current={actif ? "page" : undefined}
                    onClick={() => setOuvert(false)}
                    className={
                      actif
                        ? "block py-3 text-sm font-medium text-[#D4AF37]"
                        : "block py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
