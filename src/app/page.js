import Image from "next/image";
import Link from "next/link";
import Revelation from "@/components/Revelation";

// URL canonique du site : variable d'environnement si définie, sinon
// l'URL de déploiement fournie par Vercel, sinon localhost en dev.
// Sert de base aux URLs absolues d'OpenGraph et de JSON-LD.
const URL_SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000");

const DESCRIPTION =
  "Sousaphones en carbone légers et robustes à la sonorité exceptionnelle, fabriqués sur mesure en France.";

export const metadata = {
  metadataBase: new URL(URL_SITE),
  title: "Sousaphone Carbon — Sousaphones en carbone",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Sousaphone Carbon",
    title: "Sousaphone Carbon — Sousaphones en carbone",
    description: DESCRIPTION,
    images: [
      {
        url: "/sousa34.webp",
        width: 856,
        height: 1141,
        alt: "Sousaphone Carbon",
      },
    ],
  },
};

// Données structurées schema.org pour les moteurs de recherche :
// l'organisation (fabricant français) et le produit.
const DONNEES_STRUCTUREES = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sousaphone Carbon",
      url: URL_SITE,
      logo: `${URL_SITE}/logo-inter.png`,
      description: "Fabricant français de sousaphones en fibre de carbone.",
    },
    {
      "@type": "Product",
      name: "Sousaphone Carbon",
      description:
        "Sousaphone en fibre de carbone, léger et robuste, fabriqué sur mesure en France.",
      brand: { "@type": "Brand", name: "Sousaphone Carbon" },
      image: `${URL_SITE}/sousa34.webp`,
      material: "Fibre de carbone",
      countryOfOrigin: { "@type": "Country", name: "France" },
    },
  ],
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
// pièces uniques et ses attributs iconés, équipe, trois vignettes
// vers la galerie, puis la clôture narrative. Un séparateur logo (logo-inter.png, encre inversée en
// blanc par filtre CSS) aligné à gauche sur la colonne éditoriale
// marque chaque transition entre sections. Le footer (déjà en
// place) referme la page.

// ——— Hero ———

// Bouton « Sousaphone Carbon » : plein or, texte noir, coins adoucis
// (rounded-lg) et inversion au survol. `classe` porte l'espacement et
// l'animation d'entrée ; `hero-bouton` le palier de compression sur
// écrans courts (globals.css).
function BoutonDecouvrir({ classe = "" }) {
  return (
    <Link
      href="/instrument"
      className={`hero-bouton inline-flex items-center gap-3 rounded-lg border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
    >
      SOUSAPHONE CARBON
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Bouton « Nous contacter » de la clôture : même langage que le
// bouton du hero (plein or, texte noir, coins adoucis, inversion au
// survol), sans la classe hero-bouton — les paliers de compression
// du hero ne concernent pas une section défilée.
function BoutonContacter() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-3 rounded-lg border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      NOUS CONTACTER
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

// Séparateur de sections : logo-inter.png (recadré à la main, le
// cadrage final est porté par l'asset), aligné à gauche sur la
// colonne éditoriale — même structure que SectionEditoriale (px-6
// pleine largeur, colonne max-w-3xl centrée), pour poser son bord
// gauche exactement à l'aplomb du texte. Son encre est noire sur
// fond transparent, le filtre CSS `invert` la rend blanche à
// l'affichage. Purement décoratif (aria-hidden, alt vide). Même
// rythme vertical que les sections (py-12 / py-16) : l'espace qui
// l'entoure est identique au-dessus et en dessous, à chaque
// transition.
function SeparateurSection() {
  return (
    <div aria-hidden="true" className="w-full px-6 py-12 min-[768px]:py-16">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/logo-inter.png"
          alt=""
          width={1750}
          height={698}
          className="h-24 min-[768px]:h-32 w-auto invert"
        />
      </div>
    </div>
  );
}

// Coquille des sections éditoriales : colonne lisible centrée
// (max-w-3xl) ; le titre porte l'ancre aria référencée par `titreAria`.
// Rythme vertical partagé avec le séparateur (py-12 / py-16) : chaque
// transition section→logo→section est symétrique, sans empilement
// des paddings. Le contenu passe par <Revelation> : il apparaît en
// fondu à l'arrivée dans la fenêtre (désactivé avec
// prefers-reduced-motion, visible sans JavaScript).
function SectionEditoriale({ titreAria, children }) {
  return (
    <section
      aria-labelledby={titreAria}
      className="px-6 py-12 min-[768px]:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <Revelation>{children}</Revelation>
      </div>
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

// ——— Section Galerie ———

// Vignette de la section galerie : photo cliquable vers la page
// galerie, cadrage portrait unifié (3/4) dans une carte à bordure
// dorée comme les cartes de contenu — le survol renforce la bordure
// et zoome légèrement l'image.
function VignetteGalerie({ src, alt }) {
  return (
    <Link
      href="/galerie"
      aria-label="Voir la galerie"
      className="group block overflow-hidden rounded-2xl border border-[#C9A96A]/40 transition-colors hover:border-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1268}
        sizes="(min-width: 768px) 240px, 100vw"
        className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
      />
    </Link>
  );
}

// ——— Section Équipe ———

// Carte membre : même langage que les cartes Exigence — bordure
// dorée, numéro doré en Montserrat, nom en Bodoni Moda — la ligne
// de rôle en petites capitales espacées ne s'affiche que si le
// membre en a un.
function CarteMembre({ numero, nom, role }) {
  return (
    <article className="rounded-2xl border border-[#C9A96A]/40 p-6">
      <p className="font-sans text-lg min-[640px]:text-xl min-[1024px]:text-2xl font-bold text-[#C9A96A]">
        {numero}
      </p>
      <h3 className="font-serif-carte mt-2 text-xl min-[640px]:text-2xl min-[1024px]:text-3xl font-medium text-white">
        {nom}
      </h3>
      {role && (
        <p className="font-sans mt-3 text-[10px] min-[640px]:text-xs font-bold tracking-[0.25em] text-[#C9A96A]">
          {role}
        </p>
      )}
    </article>
  );
}

// ——— Données ———

const EQUIPE = [
  {
    nom: "Guillaume COSTE",
    role: "ARTISAN CREATEUR | CONCEPTION - FABRICATION",
  },
  {
    nom: "François COSTE",
    role: "ARTISAN CREATEUR | CONCEPTION - FABRICATION - VENTE",
  },
  {
    nom: "Jérome WISS",
    role: "ARTISAN CREATEUR | CONCEPTION - FABRICATION",
  },
  {
    nom: "Christian BOSC",
    role: "ARTISAN CREATEUR | CONCEPTION - FABRICATION",
  },
  {
    nom: "Victor HEGE",
    role: "ARTISTE | RELATIONS ARTISTIQUES ET MÉDIAS",
  },
];

// ——— Page ———

export default function AccueilPage() {
  return (
    <main className="flex flex-col bg-black">
      {/* Données structurées schema.org (Organization + Product). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DONNEES_STRUCTUREES),
        }}
      />
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
        {/* Photos du sousaphone, deux cadrages pour deux dispositions :
            Test.webp (600×1141, portrait) en empilé mobile —
            l'appareil en main et la photo partagent l'orientation
            verticale ; sousa34.webp (856×1141, portrait serré) en
            colonne desktop. Versions WebP des JPG d'origine
            (qualité 82, ~5× plus légères).
            Fonte dans le fond de section teinté : mix-blend-screen
            (les zones sombres laissent passer le fond) et un masque
            limité aux seuls bords haut/bas (fondu sur ~10 %). */}
        <div className="hero-entree hero-photo relative mt-6 min-h-48 flex-1 w-full [animation-delay:450ms]">
          <Image
            src="/Test.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)] min-[768px]:hidden"
          />
          <Image
            src="/sousa34.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="45vw"
            className="hidden object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)] min-[768px]:block"
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

      <SeparateurSection />

      {/* Exigence : étiquette, très grand titre serif et les trois
          cartes à bordure dorée (expertise, innovations, passion),
          numérotées 01–03, empilées et alignées à gauche. Rythme
          vertical généreux entre les cartes. */}
      <SectionEditoriale titreAria="titre-exigence">
        <EtiquetteDoree>NOTRE DIFFÉRENCE</EtiquetteDoree>
        <TitreSection id="titre-exigence">
          L&rsquo;exigence, à chaque note.
        </TitreSection>
        <ParagrapheSection>
          Une expertise forgée dans nos ateliers, mise au service d&rsquo;une
          nouvelle expérience musicale.
        </ParagrapheSection>
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

      <SeparateurSection />

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

      <SeparateurSection />

      {/* Équipe : très grand titre serif, paragraphe d&rsquo;intro puis
          les cinq cartes à bordure dorée, numérotées 01–05 — numéro
          doré, nom en Bodoni, ligne de rôle en capitales espacées
          quand elle existe. */}
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
        <div className="mt-12 space-y-6 min-[768px]:mt-16">
          {EQUIPE.map((membre, index) => (
            <CarteMembre
              key={membre.nom}
              numero={String(index + 1).padStart(2, "0")}
              nom={membre.nom}
              role={membre.role}
            />
          ))}
        </div>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Galerie : trois vignettes portrait teaser vers la page
          galerie — la respiration visuelle de la page, tous les
          autres blocs étant textuels. */}
      <SectionEditoriale titreAria="titre-galerie">
        <EtiquetteDoree>GALERIE</EtiquetteDoree>
        <TitreSection id="titre-galerie">
          L&rsquo;instrument en images.
        </TitreSection>
        <ParagrapheSection>
          L&rsquo;atelier, l&rsquo;instrument et les musiciens en situation.
        </ParagrapheSection>
        <div className="mt-12 grid grid-cols-1 gap-6 min-[768px]:grid-cols-3">
          <VignetteGalerie
            src="/soussa-1.webp"
            alt="Sousaphone Carbon mis en situation"
          />
          <VignetteGalerie
            src="/soussaX.webp"
            alt="Sousaphone Carbon vu de près"
          />
          <VignetteGalerie
            src="/soussaY.webp"
            alt="Musicien avec son Sousaphone Carbon"
          />
        </div>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Clôture narrative : étiquette, très grand titre serif et
          paragraphe d&rsquo;ouverture, refermés par l'appel à
          l'action « Nous contacter » — la page se termine sur une
          sortie vers le contact, le footer prend le relais. */}
      <SectionEditoriale titreAria="titre-final">
        <EtiquetteDoree>SC SOUSAPHONE CARBON</EtiquetteDoree>
        <TitreSection id="titre-final">
          Un instrument d&rsquo;exception, pensé pour les musiciens exigeants.
        </TitreSection>
        <ParagrapheSection>
          Découvrez comment le Sousaphone Carbon peut devenir votre partenaire,
          pour commencer une aventure musicale unique.
        </ParagrapheSection>
        <div className="mt-12">
          <BoutonContacter />
        </div>
      </SectionEditoriale>
    </main>
  );
}
