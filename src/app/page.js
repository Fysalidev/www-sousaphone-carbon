import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sousaphone Carbon — Sousaphones en carbone",
  description:
    "Sousaphones en carbone légers et robustes à la sonorité exceptionnelle, fabriqués sur mesure en France.",
};

// Page d'accueil : hero empilé sur fond noir, entièrement visible
// sur un écran — il occupe au minimum la hauteur restante après le
// header, la photo absorbant l'espace vertical disponible.
// Accroche dorée et titre centrés, photo entre le titre et la
// promesse, puis les trois chiffres clés et l'appel à l'action,
// centrés ; sur les écrans courts, les paliers .hero-* (globals.css)
// compressent typo et espacements pour que tout tienne à l'écran.
// Sous le hero, la page suit la maquette mobile (300–640px) : une
// colonne éditoriale alignée à gauche — étiquette dorée, très grand
// titre serif, paragraphe — déroulant exigence et ses trois cartes,
// image pleine largeur, pièces uniques et ses attributs iconés, équipe,
// puis la clôture narrative. Le footer (déjà en place) referme la page.

// ——— Hero ———

// Pilule « Découvrir l'instrument » : plein or, texte noir, inversion au
// survol. `classe` porte l'espacement et l'animation d'entrée ;
// `hero-bouton` le palier de compression sur écrans courts (globals.css).
function BoutonDecouvrir({ classe = "" }) {
  return (
    <Link
      href="/instrument"
      className={`hero-bouton inline-flex items-center gap-3 rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
    >
      DÉCOUVRIR L&rsquo;INSTRUMENT
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Statistique clé : terme/légende (dt) et définition/valeur (dd) liés
// sémantiquement ; l'ordre visuel place la valeur au-dessus de la
// légende via flex. Rampe régulière (24 → 30 → 36 → 48 → 60px), %
// solidaire de la couleur de la valeur (or si `dore`, blanc sinon).
// Tracking des légendes resserré sous 400px pour éviter les débordements
// sur les très petits écrans.
function StatProduit({ valeur, legende, pourcent = true, dore = false }) {
  return (
    <div className="flex flex-col text-center">
      <dt className="hero-stat-legende order-2 mt-2 text-[10px] min-[640px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] max-[399px]:tracking-widest text-[#C9A96A]">
        {legende}
      </dt>
      <dd
        className={`hero-stat-valeur order-1 font-sans text-2xl min-[640px]:text-3xl min-[1024px]:text-4xl min-[1440px]:text-5xl min-[1555px]:text-6xl font-bold ${
          dore ? "text-[#C9A96A]" : "text-white"
        }`}
      >
        {valeur}
        {pourcent && <span>%</span>}
      </dd>
    </div>
  );
}

// ——— Sections éditoriales (composants partagés) ———

// Étiquette dorée de section : le « branding » SC Sousaphone Carbon qui
// surmonte chaque grand titre, même traitement que l'accroche du hero.
function EtiquetteDoree({ children }) {
  return (
    <p className="text-[10px] min-[768px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A]">
      {children}
    </p>
  );
}

// Grand titre serif de section (Bodoni Moda) : très généreux
// sur mobile comme sur la maquette, à cheval sur deux lignes quand
// la phrase est longue. Un filet or court sous le titre relie les
// quatre sections éditoriales de la page.
function TitreSection({ id, children }) {
  return (
    <div>
      <h2
        id={id}
        className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
      >
        {children}
      </h2>
      <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
    </div>
  );
}

// Paragraphe de corps de section : colonne lisible, texte clair sur
// fond noir.
function ParagrapheSection({ children }) {
  return (
    <p className="mt-6 max-w-xl text-sm min-[640px]:text-base leading-relaxed text-stone-300">
      {children}
    </p>
  );
}

// Coquille des sections éditoriales : colonne lisible centrée
// (max-w-3xl) et rythme vertical généreux ; le titre porte l'ancre
// aria référencée par `titreAria`.
function SectionEditoriale({ titreAria, children }) {
  return (
    <section
      aria-labelledby={titreAria}
      className="px-6 py-20 min-[768px]:py-28"
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

// ——— Section Exigence ———

// Bloc corps (expertise, innovations, passion) : carte à bordure
// dorée — numéro doré en Montserrat, intitulé en Bodoni Moda,
// paragraphe — empilée verticalement comme sur la maquette mobile.
function BlocCorps({ numero, titre, children }) {
  return (
    <article className="rounded-2xl border border-[#C9A96A]/40 p-6">
      <p className="font-sans text-lg min-[640px]:text-xl min-[1024px]:text-2xl font-bold text-[#C9A96A]">
        {numero}
      </p>
      <h3 className="font-serif-carte mt-2 text-xl min-[640px]:text-2xl min-[1024px]:text-3xl font-medium text-white">
        {titre}
      </h3>
      <p className="font-sans mt-3 text-sm min-[640px]:text-base min-[1024px]:text-lg leading-relaxed text-stone-300">
        {children}
      </p>
    </article>
  );
}

// ——— Section Pièces uniques ———

// Pastille circulaire à fond doré contenant une icône au trait noir :
// langage des cercles de réseaux du menu, décliné pour le contenu.
// Purement décorative : les textes portent le sens.
function PastilleIcone({ children }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#C9A96A] text-black"
    >
      {children}
    </span>
  );
}

function IconeMesures() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M1 14h6" />
      <path d="M9 8h6" />
      <path d="M17 16h6" />
    </svg>
  );
}

function IconeFaitMain() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-2a2 2 0 1 1 4 0" />
    </svg>
  );
}

// Clé anglaise : réglage et contrôle individuel de chaque instrument.
function IconeCleAnglaise() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// Attribut iconé (sur mesure, fait main) : pastille à gauche, intitulé
// et phrase à droite.
function AttributIcone({ Icone, titre, children }) {
  return (
    <div className="flex items-start gap-4">
      <PastilleIcone>
        <Icone />
      </PastilleIcone>
      <div>
        <h3 className="text-xs min-[640px]:text-sm font-bold tracking-[0.25em] text-white">
          {titre}
        </h3>
        <p className="mt-2 text-sm min-[640px]:text-base leading-relaxed text-stone-300">
          {children}
        </p>
      </div>
    </div>
  );
}

// ——— Données ———

const EQUIPE = [
  "Guillaume COSTE",
  "François COSTE",
  "Jérémie WISS",
  "Christian ROSÉ",
  "Victor HEEGE",
];

// ——— Page ———

export default function AccueilPage() {
  return (
    <main className="flex flex-col bg-black">
      {/* Hero empilé sur fond noir, entièrement visible sans
          défilement : accroche dorée et titre centrés en haut,
          photo en bloc de contenu flexible — elle absorbe la hauteur
          disponible entre les deux blocs de texte —, puis promesse,
          trois chiffres clés et appel à l'action, centrés. Le
          dégradé doré haut/bas teinte tout le hero. Sur les écrans
          courts, les paliers .hero-* (globals.css) compressent la
          typo et les espacements pour tenir dans la hauteur ; à
          partir de 768px de large, la classe .hero bascule en deux
          colonnes : photo à gauche, texte à droite, collés. */}
      <section
        aria-labelledby="titre-hero"
        className="hero flex flex-col min-h-[calc(100svh-var(--hauteur-barre-header))] text-center bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10"
      >
        <div className="hero-haut flex flex-col items-center px-6 pt-12">
          <p className="hero-entree text-[10px] min-[768px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
            L&rsquo;EXCELLENCE, AUTREMENT
          </p>
          <h1
            id="titre-hero"
            className="hero-entree hero-titre mt-4 font-sans text-3xl min-[640px]:text-4xl min-[1024px]:text-5xl min-[1440px]:text-6xl min-[1555px]:text-7xl font-bold text-white [animation-delay:300ms]"
          >
            L&rsquo;âme intacte
            <br />
            la légèreté en plus
          </h1>
        </div>
        {/* Photo du sousaphone soussa-1 (900×1268, fond noir) : le bloc
            (flex-1, plancher min-h-48) absorbe la hauteur restante
            de l'écran ; object-contain montre l'instrument entier.
            Fonte dans le fond de section teinté : mix-blend-screen
            (les zones sombres de l'image laissent passer le fond)
            et un masque limité aux seuls bords haut/bas de l'image
            (fondu sur ~10 %). */}
        <div className="hero-entree hero-photo relative mt-6 min-h-48 flex-1 w-full [animation-delay:450ms]">
          <Image
            src="/soussa-1.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)]"
          />
        </div>
        <div className="hero-bas flex flex-col items-center px-6 pb-10">
          <p className="hero-entree hero-promesse mt-6 max-w-xl text-base leading-relaxed text-stone-200 min-[1555px]:max-w-2xl min-[1555px]:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl [animation-delay:600ms]">
            Un corps en fibre de carbone, façonné en France pour libérer le
            musicien sans jamais altérer le son et la projection.
          </p>
          {/* Chiffres clés : trois groupes terme/définition,
              séparateurs verticaux blancs entre eux ; cellules de
              largeur fixe sur desktop, en rampe (10rem à partir
              de 1024px, 12rem à 1440px, 14rem à 1555px, 16rem à
              1920px). */}
          <dl className="hero-entree hero-metrics mt-6 grid w-full grid-cols-3 divide-x divide-white/40 min-[1024px]:w-auto min-[1024px]:grid-cols-[repeat(3,10rem)] min-[1440px]:grid-cols-[repeat(3,12rem)] min-[1555px]:grid-cols-[repeat(3,14rem)] min-[1920px]:grid-cols-[repeat(3,16rem)] [animation-delay:750ms]">
            <StatProduit valeur="-40" legende="DE POIDS" dore />
            <StatProduit valeur="100" legende="CARBONE" />
            <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
          </dl>
          <BoutonDecouvrir classe="hero-entree mt-6 self-center [animation-delay:900ms]" />
        </div>
      </section>

      {/* Exigence : étiquette, très grand titre serif et les trois
          cartes à bordure dorée (expertise, innovations, passion),
          numérotées 01–03, empilées et alignées à gauche. Rythme
          vertical généreux entre les cartes. */}
      <SectionEditoriale titreAria="titre-exigence">
        <EtiquetteDoree>NOTRE DIFFÉRENCE</EtiquetteDoree>
        <TitreSection id="titre-exigence">
          L&rsquo;exigence, à chaque note.
        </TitreSection>
        <div className="mt-12 space-y-6 min-[768px]:mt-16">
          <BlocCorps numero="01" titre="Expertise reconnue">
            Leaders en Europe pour les sousaphones et référence mondiale dans la
            fabrication artisanale d&rsquo;instruments à vent.
          </BlocCorps>
          <BlocCorps numero="02" titre="Innovations">
            Corps et pavillon en carbone ultra-léger. Pistons en inox pleine
            masse, barillet dédié au 4ᵉ système, branche d&rsquo;accord et
            embout de réglage, uniques.
          </BlocCorps>
          <BlocCorps numero="03" titre="Passion">
            Une équipe entièrement dédiée à la qualité musicale, au confort de
            jeu et à la musique pour tous.
          </BlocCorps>
        </div>
      </SectionEditoriale>

      {/* Image pleine largeur : la musique en situation, respiration
          visuelle entre les blocs de texte. */}
      <section
        aria-label="Le Sousaphone Carbon en situation de jeu"
        className="relative h-96 min-[640px]:h-112 min-[1024px]:h-128"
      >
        <Image
          src="/menu-fond.webp"
          alt="Musicien jouant du Sousaphone Carbon"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* Pièces uniques : étiquette, très grand titre serif, paragraphe
          puis les deux attributs iconés (sur mesure, fait main)
          présents sur la maquette. */}
      <SectionEditoriale titreAria="titre-pieces-uniques">
        <EtiquetteDoree>FABRIQUÉ EN FRANCE</EtiquetteDoree>
        <TitreSection id="titre-pieces-uniques">
          Des pièces uniques,
          <br />
          assemblées à la main.
        </TitreSection>
        <ParagrapheSection>
          Nous fabriquons nos pièces et chaque sousaphone prend forme à travers
          une succession de gestes précis. Une fabrication patiente qui garantit
          résistance, équilibre, robustesse et propriétés acoustiques
          d&rsquo;exception.
        </ParagrapheSection>
        <div className="mt-12 space-y-8">
          <AttributIcone Icone={IconeMesures} titre="SUR MESURE">
            Chaque pièce est fabriquée dans nos ateliers en France.
          </AttributIcone>
          <AttributIcone Icone={IconeFaitMain} titre="FAIT MAIN">
            Chaque instrument est assemblé pièce par pièce, avec le plus grand
            soin.
          </AttributIcone>
          <AttributIcone Icone={IconeCleAnglaise} titre="CONTRÔLE INDIVIDUEL">
            Chaque instrument est contrôlé et réglé individuellement en atelier.
          </AttributIcone>
        </div>
      </SectionEditoriale>

      {/* Équipe : très grand titre serif, paragraphe d&rsquo;intro puis
          les cinq noms empilés, séparés par un filet doré. */}
      <SectionEditoriale titreAria="titre-equipe">
        <EtiquetteDoree>UN TRAVAIL D&rsquo;ÉQUIPE</EtiquetteDoree>
        <TitreSection id="titre-equipe">
          Les mains derrière
          <br />
          l&rsquo;innovation.
        </TitreSection>
        <ParagrapheSection>
          Cinq talents, une même ambition : repousser les limites de
          l&rsquo;instrument.
        </ParagrapheSection>
        <ul className="mt-12 space-y-6">
          {EQUIPE.map((nom) => (
            <li
              key={nom}
              className="border-t border-[#C9A96A]/40 pt-4 font-display font-medium text-xl min-[640px]:text-2xl text-white"
            >
              {nom}
            </li>
          ))}
        </ul>
      </SectionEditoriale>

      {/* Clôture narrative : étiquette, très grand titre serif et
          paragraphe d&rsquo;ouverture, sans bouton — la maquette
          referme la page sur ce texte, le footer prend le relais. */}
      <SectionEditoriale titreAria="titre-final">
        <EtiquetteDoree>SC SOUSAPHONE CARBON</EtiquetteDoree>
        <TitreSection id="titre-final">
          Un instrument d&rsquo;exception, pensé pour les musiciens exigeants.
        </TitreSection>
        <ParagrapheSection>
          Découvrez comment le Sousaphone Carbon peut devenir votre partenaire,
          pour commencer une aventure musicale unique.
        </ParagrapheSection>
      </SectionEditoriale>
    </main>
  );
}
