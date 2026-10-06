import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-white/10 bg-black px-6 py-12 text-center">
      <p className="font-serif text-2xl font-bold tracking-wide text-[#D4AF37]">
        SC
      </p>
      <p className="text-sm font-medium text-zinc-300">Sousophone Carbon</p>
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
        <Link href="/contact" className="transition-colors hover:text-white">
          Contact
        </Link>
        <Link href="#" className="transition-colors hover:text-white">
          Mentions légales
        </Link>
        <Link href="#" className="transition-colors hover:text-white">
          Politique de confidentialité
        </Link>
      </nav>
      <div className="flex items-center gap-5 text-zinc-400">
        <a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 22v-8h2.7l.4-3h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H7.5v3h2.7v8h3.3z" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="#" aria-label="X" className="transition-colors hover:text-white">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 4l16 16" />
            <path d="M20 4L4 20" />
          </svg>
        </a>
        <a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
            <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
      <p className="text-xs text-zinc-500">
        © 2025 Sousophone Carbon. Tous droits réservés.
      </p>
    </footer>
  );
}
