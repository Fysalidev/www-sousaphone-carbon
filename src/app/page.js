import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sousophone Carbon — Sousophones en carbone",
  description:
    "Sousophones en carbone légers, robustes et sonorité exceptionnelle, fabriqués sur mesure en France.",
};

const OR = "#D4AF37";

const stats = [
  { pct: 40, label: "plus léger" },
  { pct: 100, label: "Made in France" },
  { pct: 100, label: "sur mesure" },
];

const atouts = [
  {
    icone: "expertise",
    titre: "Expertise reconnue",
    texte:
      "Sousophone Carbon, c'est l'alliance parfaite entre tradition et innovation. Nos sousophones en carbone sont le résultat d'années de recherche et d'expertise musicale, au service des musiciens exigeants.",
  },
  {
    icone: "innovation",
    titre: "Innovations",
    texte:
      "L'innovation au cœur de notre démarche : des sousophones en carbone, ultra-légers et résistants, conçus pour accompagner au mieux les musiciens d'aujourd'hui, tout en respectant les accords et sonorités traditionnels.",
  },
  {
    icone: "passion",
    titre: "Passion",
    texte:
      "Une équipe entièrement dédiée à la fabrication d'instruments magiques, au service du musicien, pour votre plus grand plaisir.",
  },
];

const equipe = [
  { nom: "Guillaume COSTE", role: "Fondateur" },
  { nom: "François COSTE", role: "Co-fondateur" },
  { nom: "Jérôme WIDAT", role: "Ingénieur R&D" },
  { nom: "Christophe ROUX", role: "Responsable fabrication" },
  { nom: "Victor HEGE", role: "Concepteur 3D" },
];

const bouton =
  "flex h-12 w-full items-center justify-center rounded-full bg-[#8F6E1C] px-6 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-[#7a5e18] sm:w-auto";

const section = "mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6 py-12 text-center";
const titreSection = "font-serif text-2xl font-semibold tracking-tight text-white";
const texteSection = "text-base leading-7 text-zinc-400";

function Stat({ pct, label }) {
  const rayon = 30;
  const circonference = 2 * Math.PI * rayon;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 72 72" className="h-20 w-20" aria-hidden="true">
        <circle
          cx="36"
          cy="36"
          r={rayon}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="4"
        />
        <circle
          cx="36"
          cy="36"
          r={rayon}
          fill="none"
          stroke={OR}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(circonference * pct) / 100} ${circonference}`}
          transform="rotate(-90 36 36)"
        />
        <text x="36" y="41" textAnchor="middle" fontSize="14" fontWeight="600" fill="#ffffff">
          {pct}%
        </text>
      </svg>
      <p className="text-sm font-medium text-zinc-300">{label}</p>
    </div>
  );
}

function Icone({ nom }) {
  const props = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: OR,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (nom) {
    case "expertise":
      return (
        <svg {...props}>
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      );
    case "innovation":
      return (
        <svg {...props}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "passion":
      return (
        <svg {...props}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black font-sans text-white">
      <header className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-6 pt-14 pb-10 text-center">
        <p className="text-sm font-medium text-zinc-400 underline decoration-[#D4AF37] decoration-2 underline-offset-4">
          Une alliance idéale
        </p>
        <h1 className="flex items-center justify-center gap-2 font-serif text-4xl font-semibold leading-tight tracking-tight">
          L&apos;alliage de la légèreté en plus
          <svg
            className="h-6 w-6 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke={OR}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </h1>
        <p className="font-serif text-3xl font-bold tracking-wide text-[#D4AF37]">
          SC
        </p>
        <div className="flex items-start justify-center gap-10 pt-2">
          {stats.map((stat) => (
            <Stat key={stat.label} pct={stat.pct} label={stat.label} />
          ))}
        </div>
        <Link href="/instrument" className={bouton}>
          Découvrir l&apos;instrument
        </Link>
      </header>

      <section className={section}>
        <h2 className={titreSection}>L&apos;exigence, à chaque note.</h2>
        <p className={texteSection}>
          Sousophone Carbon conçoit et fabrique des sousophones haut de gamme
          en carbone. Nos instruments sont conçus pour être légers, robustes,
          et offrent une sonorité exceptionnelle, tout en respectant
          l&apos;acoustique traditionnelle des cuivres.
        </p>
      </section>

      <section className="mx-auto flex w-full max-w-xl flex-col gap-10 px-6 py-12">
        {atouts.map((atout) => (
          <div
            key={atout.titre}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40">
              <Icone nom={atout.icone} />
            </span>
            <h3 className="text-lg font-semibold text-white">{atout.titre}</h3>
            <p className={texteSection}>{atout.texte}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col">
        <div className="relative h-72 w-full sm:h-96">
          <Image
            src="/atelier.svg"
            alt="Assemblage d'un sousophone en carbone à l'atelier"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 640px, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
          <p className="absolute inset-x-0 bottom-0 px-6 pb-6 font-serif text-xl font-semibold text-white sm:text-2xl">
            Des pièces uniques, assemblées à la main.
          </p>
        </div>
        <div className={section}>
          <p className={texteSection}>
            Sousophone Carbon voyage dans le monde entier pour offrir un son
            unique. Légers, robustes et faciles à transporter, nos sousophones
            sont conçus pour les musiciens les plus exigeants.
          </p>
          <Link href="/galerie" className={bouton}>
            Découvrir nos réalisations
          </Link>
        </div>
      </section>

      <section className={section}>
        <h2 className={titreSection}>Les mains derrière l&apos;innovation.</h2>
        <p className={texteSection}>
          Une équipe de passionnés, un savoir-faire artisanal, une exigence
          absolue : découvrez les visages de ceux qui font de Sousophone
          Carbon une évidence.
        </p>
        <ul className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
          {equipe.map((membre) => (
            <li
              key={membre.nom}
              className="rounded-lg border border-white/10 bg-white/3 p-4 text-left"
            >
              <p className="text-base font-medium text-white">{membre.nom}</p>
              <p className="text-sm text-zinc-400">{membre.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={section}>
        <h2 className={titreSection}>
          Un instrument d&apos;exception, pensé pour toutes les mains.
        </h2>
        <p className={texteSection}>
          L&apos;ergonomie, la légèreté et la robustesse de nos sousophones en
          font des instruments accessibles à tous les musiciens, quel que soit
          leur niveau.
        </p>
      </section>
    </main>
  );
}
