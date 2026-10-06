"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const liens = [
  { href: "/", label: "ACCUEIL" },
  { href: "/instrument", label: "SOUSAPHONE CARBON" },
  { href: "/galerie", label: "GALERIE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-black">
      <div className="flex w-full items-center justify-between gap-6 overflow-hidden px-6 pt-10 pb-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 overflow-hidden min-[680px]:flex-col min-[680px]:items-start min-[680px]:gap-1"
        >
          <Image
            src="/logoheader.webp"
            alt="Sousophone Carbon"
            width={68}
            height={32}
            className="h-8 w-auto min-[680px]:hidden"
            priority
          />
          <Image
            src="/logo-header-lg.webp"
            alt="Sousophone Carbon"
            width={185}
            height={48}
            className="hidden h-12 w-auto min-[680px]:block"
            priority
          />
          <span className="inline-flex items-center gap-1.5 overflow-hidden pl-2.5">
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
        <nav
          aria-label="Navigation principale"
          className="hidden items-center min-[680px]:flex"
        >
          <ul className="flex items-center gap-8">
            {liens.map(({ href, label }) => {
              const actif = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={actif ? "page" : undefined}
                    className={
                      actif
                        ? "text-sm font-medium text-[#B69660]"
                        : "text-sm font-medium text-[#6B593C] transition-colors hover:text-white"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full outline outline-1 outline-offset-[-1px] outline-stone-800 transition-colors hover:outline-stone-600 min-[680px]:hidden"
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

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!ouvert}
        inert={!ouvert}
        className={`fixed inset-0 z-50 flex flex-col bg-black transition-opacity duration-300 ease-out ${
          ouvert ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
          <div className="flex w-full items-center justify-end gap-6 overflow-hidden px-6 pt-10 pb-5">
            <button
              type="button"
              onClick={() => setOuvert(false)}
              aria-label="Fermer le menu"
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
                <path d="M3 3l10 10" />
                <path d="M13 3L3 13" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 items-center overflow-y-auto">
            <ul className="flex w-full max-w-[679px] flex-col px-6 py-10">
              {liens.map(({ href, label }, index) => {
                const actif = pathname === href;
                return (
                  <li
                    key={href}
                    style={{
                      transitionDelay: ouvert ? `${120 + index * 60}ms` : "0ms",
                    }}
                    className={`border-b border-white/10 last:border-b-0 transition-all duration-500 ease-out ${
                      ouvert
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <Link
                      href={href}
                      aria-current={actif ? "page" : undefined}
                      onClick={() => setOuvert(false)}
                      className={
                        actif
                          ? "block py-4 text-2xl font-semibold text-[#B69660]"
                          : "block py-4 text-2xl font-semibold text-[#6B593C] transition-colors hover:text-white"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
        </nav>
      </div>
    </header>
  );
}
