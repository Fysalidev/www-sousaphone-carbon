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

// Pilule « Découvrir l'instrument » : plein or, texte noir, inversion au
// survol. Le `display` n'est PAS fixé ici : l'ordre du CSS généré par
// Tailwind fait gagner `inline-flex` sur `hidden`, il doit donc venir
// exclusivement de `classe` pour que le masquage par breakpoint marche.
function BoutonDecouvrir({ classe = "" }) {
  return (
    <Link
      href="/instrument"
      className={`items-center gap-3 rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
    >
      DÉCOUVRIR L&rsquo;INSTRUMENT
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Statistique clé : terme/légende (dt) et définition/valeur (dd) liés
// sémantiquement ; l'ordre visuel place la valeur au-dessus de la
// légende via flex. Rampe régulière (24 → 30 → 36 → 48 → 60 → 72px), %
// solidaire de la couleur de la valeur (or si `dore`, blanc sinon).
function StatProduit({ valeur, legende, pourcent = true, dore = false }) {
  return (
    <div className="flex flex-col text-center">
      <dt className="order-2 mt-2 text-[10px] min-[640px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A]">
        {legende}
      </dt>
      <dd
        className={`order-1 font-sans text-2xl min-[400px]:text-3xl min-[640px]:text-4xl min-[1024px]:text-5xl min-[1440px]:text-6xl min-[1555px]:text-7xl font-bold ${
          dore ? "text-[#C9A96A]" : "text-white"
        }`}
      >
        {valeur}
        {pourcent && <span>%</span>}
      </dd>
    </div>
  );
}
export default function AccueilPage() {
  return (
    <main className="flex flex-col bg-black">
      <section
        aria-labelledby="titre-hero"
        className="relative overflow-hidden min-[768px]:px-6 min-[768px]:py-10 min-[1440px]:px-12 min-[1440px]:py-16 min-[1555px]:px-16 min-[1555px]:py-20"
      >
        {/* Cadre photo : sa hauteur suit le viewport (55%, puis 65% à
            partir de 768px, 75% à 1440px, 80% à 1555px) et détermine
            celle de la section ; l'instrument reste entier. */}
        <div className="relative h-[55dvh] min-[768px]:h-[65dvh] min-[1440px]:h-[75dvh] min-[1555px]:h-[80dvh]">
          <Image
            src="/sousa-marron.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="(min-width: 1555px) 648px, (min-width: 768px) 55vw, 100vw"
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
            <p className="hero-entree text-[10px] min-[768px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
              L&rsquo;EXCELLENCE, AUTREMENT
            </p>
            <h1
              id="titre-hero"
              className="hero-entree mt-4 font-sans text-4xl min-[680px]:text-5xl min-[1024px]:text-6xl min-[1555px]:text-7xl min-[1920px]:text-8xl font-bold text-white [animation-delay:300ms]"
            >
              L&rsquo;âme intacte
              <br />
              la légèreté en plus
            </h1>
            {/* Ordre narratif identique à la section produit : promesse,
                puis preuve (métrics), puis action (bouton). Tout ce qui
                suit migre depuis la section produit à partir de 1536px. */}
            <p className="hero-entree mt-8 hidden min-[1536px]:block max-w-xl text-base leading-relaxed text-stone-200 min-[1555px]:max-w-2xl min-[1555px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl [animation-delay:450ms]">
              Un corps en fibre de carbone, façonné en France pour libérer
              le musicien sans jamais altérer le son et la projection.
            </p>
            <dl className="hero-entree mt-10 hidden min-[1536px]:grid grid-cols-3 divide-x divide-white/40 [animation-delay:600ms]">
              <StatProduit valeur="-40" legende="DE POIDS" dore />
              <StatProduit valeur="100" legende="CARBONE" />
              <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
            </dl>
            <BoutonDecouvrir classe="hero-entree mt-12 hidden min-[1536px]:inline-flex [animation-delay:750ms]" />
          </div>
        </div>
      </section>

      {/* Section produit : chevauche le bas de la photo du hero (marge
          négative) ; le voile dégradé du hero assombrit la zone derrière
          les chiffres. À partir de 1536px, tout son contenu a migré
          dans le hero : la section disparaît entièrement. */}
      <section
        aria-labelledby="titre-produit"
        className="relative -mt-32 flex flex-col gap-10 px-6 py-16 min-[768px]:-mt-44 min-[768px]:py-20 min-[1440px]:-mt-52 min-[1440px]:px-12 min-[1536px]:hidden"
      >
        <h2 id="titre-produit" className="sr-only">
          L&rsquo;instrument
        </h2>

        {/* Même ordre narratif que le hero : promesse, puis preuve,
            puis action. */}
        <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-stone-200 min-[768px]:text-base min-[1536px]:hidden">
          Un corps en fibre de carbone, façonné en France pour libérer le
          musicien sans jamais altérer le son et la projection.
        </p>

        {/* Chiffres clés : trois groupes terme/définition, séparateurs
            verticaux blancs entre eux. */}
        <dl className="grid grid-cols-3 divide-x divide-white/40">
          <StatProduit valeur="-40" legende="DE POIDS" dore />
          <StatProduit valeur="100" legende="CARBONE" />
          <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
        </dl>

        {/* Appel à l'action, masqué à partir de 1536px : le hero, qui
            reprend promesse, métrics et bouton dans le même ordre,
            prend le relais. */}
        <BoutonDecouvrir classe="inline-flex self-center min-[1536px]:hidden" />
      </section>
    </main>
  );
}
