import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sousophone Carbon — Sousophones en carbone",
  description:
    "Sousophones en carbone légers, robustes et sonorité exceptionnelle, fabriqués sur mesure en France.",
};

// Page d'accueil : hero (photo du sousaphone, accroche dorée et titre en
// surimpression) puis section produit (trois chiffres clés, promesse,
// appel à l'action vers l'instrument).

// Statistique clé : grande valeur en Montserrat bold, % solidaire de la
// couleur de la valeur (or si `dore` est posé, blanc sinon) ; valeur et
// légende centrées dans la colonne, séparateur posé par le parent.
function StatProduit({ valeur, legende, pourcent = true, dore = false }) {
  return (
    <div>
      <p
        className={`text-center font-sans text-3xl min-[768px]:text-5xl min-[1440px]:text-6xl font-bold ${
          dore ? "text-[#C9A96A]" : "text-white"
        }`}
      >
        {valeur}
        {pourcent && <span>%</span>}
      </p>
      <p className="mt-2 text-center text-xs font-bold tracking-[0.25em] text-[#C9A96A]">
        {legende}
      </p>
    </div>
  );
}
export default function AccueilPage() {
  return (
    <main className="flex flex-col bg-black">
      <section
        aria-labelledby="titre-hero"
        className="relative overflow-hidden min-[768px]:px-6 min-[768px]:py-10 min-[1440px]:px-12 min-[1440px]:py-16"
      >
        {/* Cadre photo : sa hauteur suit le viewport (55%, puis 65% à
            partir de 768px, 75% à 1440px) et détermine celle de la
            section ; l'instrument reste entier. */}
        <div className="relative h-[55dvh] min-[768px]:h-[65dvh] min-[1440px]:h-[75dvh]">
          <Image
            src="/sousa-marron.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="pointer-events-none object-contain min-[768px]:object-left"
          />
        </div>
        {/* Voile directionnel : sombre derrière le texte (bas du cadre sur
            mobile, côté droit sur desktop), il s'estompe ailleurs pour
            laisser l'instant en lumière. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent min-[768px]:bg-linear-to-l"
        />
        <div className="absolute inset-0 flex items-start pt-52 min-[768px]:items-center min-[768px]:pt-0">
          <div className="ml-[10%] min-[768px]:-translate-y-24 min-[768px]:ml-auto min-[768px]:mr-[10%]">
            <p className="hero-entree text-xs font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
              L&rsquo;EXCELLENCE, AUTREMENT
            </p>
            <h1
              id="titre-hero"
              className="hero-entree mt-4 font-sans text-4xl min-[680px]:text-5xl min-[1024px]:text-6xl font-bold text-white [animation-delay:300ms]"
            >
              L&rsquo;âme intacte
              <br />
              la légèreté en plus
            </h1>
            {/* Appel à l'action du hero, visible à partir de 1200px :
                même pilule or que la section produit, entrée en cascade
                après le titre. */}
            <Link
              href="/instrument"
              className="hero-entree mt-8 hidden min-[1200px]:inline-flex items-center gap-3 rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [animation-delay:450ms]"
            >
              DÉCOUVRIR L&rsquo;INSTRUMENT
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section produit : chevauche le bas de la photo du hero (marge
          négative) ; le voile dégradé du hero assombrit la zone derrière
          les chiffres. */}
      <section
        aria-labelledby="titre-produit"
        className="relative -mt-32 flex flex-col gap-10 px-6 py-16 min-[768px]:-mt-44 min-[768px]:py-20 min-[1440px]:-mt-52 min-[1440px]:px-12"
      >
        <h2 id="titre-produit" className="sr-only">
          L&rsquo;instrument
        </h2>

        {/* Chiffres clés : trois colonnes égales à toutes les tailles,
            textes centrés, séparateurs verticaux blancs entre elles. */}
        <div className="grid grid-cols-3 divide-x divide-white/40">
          <StatProduit valeur="-40" legende="DE POIDS" dore />
          <StatProduit valeur="100" legende="CARBONE" />
          <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
        </div>

        {/* Promesse, centrée. */}
        <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-stone-200 min-[768px]:text-base">
          Un corps en fibre de carbone, façonné en France pour libérer le
          musicien sans jamais altérer le son et la projection.
        </p>

        {/* Appel à l'action vers la page instrument : plein or, texte
            noir, inversion au survol ; masqué à partir de 1200px, le
            CTA du hero prend le relais. */}
        <Link
          href="/instrument"
          className="inline-flex items-center gap-3 self-center rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[1200px]:hidden"
        >
          DÉCOUVRIR L&rsquo;INSTRUMENT
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </main>
  );
}
