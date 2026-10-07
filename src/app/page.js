import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sousophone Carbon — Sousophones en carbone",
  description:
    "Sousophones en carbone légers, robustes et sonorité exceptionnelle, fabriqués sur mesure en France.",
};

// Page d'accueil : hero plein cadre occupant la hauteur d'écran restante
// après le header — la photo du sousaphone sert d'arrière-plan, collée
// à gauche. À partir de 1024px, le contenu (accroche dorée, titre,
// promesse, trois chiffres clés, appel à l'action) tient dans un cadre
// 16/9 centré, à droite de l'instrument ; en dessous il est ancré en
// bas de la section, dans le flux, et la section grandit avec lui sur
// les écrans courts.

// Pilule « Découvrir l'instrument » : plein or, texte noir, inversion au
// survol. `classe` porte l'espacement et l'animation d'entrée.
function BoutonDecouvrir({ classe = "" }) {
  return (
    <Link
      href="/instrument"
      className={`inline-flex items-center gap-3 rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
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
// Tracking des légendes resserré sous 400px pour éviter les débordements
// sur les très petits écrans.
function StatProduit({ valeur, legende, pourcent = true, dore = false }) {
  return (
    <div className="flex flex-col text-center">
      <dt className="order-2 mt-2 text-[10px] min-[640px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] max-[399px]:tracking-widest text-[#C9A96A]">
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
        className="relative flex flex-col justify-end overflow-hidden min-h-[calc(100svh-var(--hauteur-barre-header))]"
      >
        {/* Photo en arrière-plan de toute la section : object-contain
            préserve l'instrument entier, calé sur le bord gauche,
            décalé de 4% à partir de 1024px puis 8% à partir de
            1440px. Le cadre est surdimensionné verticalement
            (-top-6 / -bottom-16, soit 24px/64px) pour zoomer d'environ
            12% : le rognage se fait surtout en bas, le haut de la
            photo (pavillon) est préservé. Offsets en rem plutôt qu'en
            pourcentage négatif via calc() : WebKit (Safari) résout mal
            `calc(x% * -1)` sur top/bottom (hauteur nulle, image
            invisible). Sans effet là où la largeur est le facteur
            limitant. */}
        <div className="absolute -top-6 -bottom-16 left-0 right-0 min-[1024px]:left-[4%] min-[1440px]:left-[8%]">
          <Image
            src="/sousa-marron.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="pointer-events-none object-contain object-left"
          />
        </div>
        {/* Voile directionnel : sombre derrière le texte (bas de la
            section sous 1024px, côté droit au-delà), il s'estompe
            ailleurs pour laisser l'instant en lumière. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent min-[1024px]:bg-linear-to-l min-[1024px]:from-black/60 min-[1024px]:via-black/20"
        />
        {/* Cadre 16/9 responsive centré, actif à partir de 1024px :
            il épouse la hauteur restante de l'écran et en dérive sa
            largeur, plafonnée à celle de la section. En dessous il
            s'efface (display: contents) : le contenu suit le flux de
            la section, ancré en bas, et la section peut grandir avec
            lui sur les écrans courts. Le wrapper du contenu est
            `relative` pour se peindre au-dessus de la photo et du
            voile (sinon les deux, positionnés, le recouvrent en
            dessous de 1024px). Ordre narratif : promesse, preuve
            (métrics), action (bouton). */}
        <div className="max-[1023px]:contents min-[1024px]:absolute min-[1024px]:inset-y-0 min-[1024px]:left-1/2 min-[1024px]:aspect-video min-[1024px]:w-auto min-[1024px]:max-w-full min-[1024px]:-translate-x-1/2">
          <div className="relative flex flex-col items-center justify-end px-6 pb-12 text-center min-[1024px]:h-full min-[1024px]:items-end min-[1024px]:justify-center min-[1024px]:px-0 min-[1024px]:pb-0 min-[1024px]:text-left">
            <div className="flex flex-col items-center min-[1024px]:mr-[8%] min-[1024px]:items-start">
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
              <p className="hero-entree mt-8 max-w-xl text-base leading-relaxed text-stone-200 min-[1024px]:max-w-120 min-[1440px]:max-w-xl min-[1555px]:max-w-2xl min-[1555px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl [animation-delay:450ms]">
                Un corps en fibre de carbone, façonné en France pour libérer
                le musicien sans jamais altérer le son et la projection.
              </p>
              {/* Chiffres clés : trois groupes terme/définition,
                  séparateurs verticaux blancs entre eux ; cellules de
                  largeur fixe sur desktop, en rampe (10rem à partir
                  de 1024px, 12rem à 1440px, 14rem à 1555px, 16rem à
                  1920px) pour suivre la largeur du paragraphe. */}
              <dl className="hero-entree mt-8 grid w-full grid-cols-3 divide-x divide-white/40 min-[1024px]:w-auto min-[1024px]:grid-cols-[repeat(3,10rem)] min-[1440px]:grid-cols-[repeat(3,12rem)] min-[1555px]:grid-cols-[repeat(3,14rem)] min-[1920px]:grid-cols-[repeat(3,16rem)] [animation-delay:600ms]">
                <StatProduit valeur="-40" legende="DE POIDS" dore />
                <StatProduit valeur="100" legende="CARBONE" />
                <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
              </dl>
              <BoutonDecouvrir classe="hero-entree mt-8 self-center [animation-delay:750ms]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
