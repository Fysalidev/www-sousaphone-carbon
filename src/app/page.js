import Image from "next/image";
import Link from "next/link";
import {
  AttributIcone,
  BlocCorps,
  CarteMembre,
  IconeCleAnglaise,
  IconeFaitMain,
  IconeMesures,
  VignetteGalerie,
} from "@/components/CartesAccueil";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
  SeparateurSection,
  TitreSection,
} from "@/components/SectionsEditoriales";

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
        url: "/photos/hero-desktop.webp",
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
      logo: `${URL_SITE}/logos/logo-inter.png`,
      description: "Fabricant français de sousaphones en fibre de carbone.",
    },
    {
      "@type": "Product",
      name: "Sousaphone Carbon",
      description:
        "Sousaphone en fibre de carbone, léger et robuste, fabriqué sur mesure en France.",
      brand: { "@type": "Brand", name: "Sousaphone Carbon" },
      image: `${URL_SITE}/photos/hero-desktop.webp`,
      material: "Fibre de carbone",
      countryOfOrigin: { "@type": "Country", name: "France" },
    },
  ],
};

// Page d'accueil : hero empilé sur fond noir, entièrement visible
// sur un écran — il occupe au minimum la hauteur restante après le
// header, la photo absorbant l'espace vertical disponible.
// Sous le hero, cinq sections éditoriales (exigence, pièces uniques,
// équipe, galerie, clôture) sépérées par un séparateur logo — leurs
// primitives vivent dans components/SectionsEditoriales.js, leurs
// cartes dans components/CartesAccueil.js, leur contenu dans les
// tableaux de données ci-dessous. Le footer referme la page.

// ——— Hero ———

// Bouton d'action or : plein or, texte noir, coins adoucis (rounded-lg)
// et inversion au survol — décliné pour le hero (« Sousaphone
// Carbon », avec la classe hero-bouton : palier de compression sur
// écrans courts) et la clôture (« Nous contacter »). `classe` porte
// l'espacement et l'animation d'entrée.
function BoutonAction({ href, children, classe = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-lg border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
    >
      {children}
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

// ——— Données ———
// Le contenu éditorial des sections vit ici, en tableaux : modifier
// un texte ne touche plus la structure JSX de la page.

const EXIGENCE = [
  {
    numero: "01",
    titre: "Expertise reconnue",
    texte:
      "Leaders en Europe pour les sousaphones et référence mondiale dans la fabrication artisanale d’instruments à vent.",
  },
  {
    numero: "02",
    titre: "Innovations",
    texte:
      "Corps et pavillon en carbone ultra-léger. Pistons en inox pleine masse, barillet dédié au 4ᵉ système, branche d’accord et embout de réglage, uniques.",
  },
  {
    numero: "03",
    titre: "Passion",
    texte:
      "Une équipe entièrement dédiée à la qualité musicale, au confort de jeu et à la musique pour tous.",
  },
];

const ATTRIBUTS = [
  {
    Icone: IconeMesures,
    titre: "SUR MESURE",
    texte: "Chaque pièce est fabriquée dans nos ateliers en France.",
  },
  {
    Icone: IconeFaitMain,
    titre: "FAIT MAIN",
    texte:
      "Chaque instrument est assemblé pièce par pièce, avec le plus grand soin.",
  },
  {
    Icone: IconeCleAnglaise,
    titre: "CONTRÔLE INDIVIDUEL",
    texte:
      "Chaque instrument est contrôlé et réglé individuellement en atelier.",
  },
];

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

const GALERIE = [
  { src: "/photos/galerie-1.webp", alt: "Sousaphone Carbon mis en situation" },
  { src: "/photos/galerie-2.webp", alt: "Sousaphone Carbon vu de près" },
  { src: "/photos/galerie-3.webp", alt: "Musicien avec son Sousaphone Carbon" },
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
            photos/hero-mobile.webp (600×1141, portrait) en empilé
            mobile — l'appareil en main et la photo partagent
            l'orientation verticale ; photos/hero-desktop.webp
            (856×1141, portrait serré) en colonne desktop (toutes
            deux en WebP, qualité 82).
            Fonte dans le fond de section teinté : mix-blend-screen
            (les zones sombres laissent passer le fond) et un masque
            limité aux seuls bords haut/bas (fondu sur ~10 %). */}
        <div className="hero-entree hero-photo relative mt-6 min-h-48 flex-1 w-full [animation-delay:450ms]">
          <Image
            src="/photos/hero-mobile.webp"
            alt="Sousaphone en laiton sur fond sombre"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)] min-[768px]:hidden"
          />
          <Image
            src="/photos/hero-desktop.webp"
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
          <BoutonAction
            href="/instrument"
            classe="hero-bouton hero-entree mt-6 self-center [animation-delay:900ms]"
          >
            SOUSAPHONE CARBON
          </BoutonAction>
        </div>
      </section>

      <SeparateurSection />

      {/* Exigence : étiquette, très grand titre serif et les trois
          cartes à bordure dorée (expertise, innovations, passion),
          numérotées 01–03, empilées et alignées à gauche. */}
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
          {EXIGENCE.map(({ numero, titre, texte }) => (
            <BlocCorps key={numero} numero={numero} titre={titre}>
              {texte}
            </BlocCorps>
          ))}
        </div>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Pièces uniques : étiquette, très grand titre serif, paragraphe
          puis les trois attributs iconés. */}
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
          {ATTRIBUTS.map(({ Icone, titre, texte }) => (
            <AttributIcone key={titre} Icone={Icone} titre={titre}>
              {texte}
            </AttributIcone>
          ))}
        </div>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Équipe : très grand titre serif, paragraphe d&rsquo;intro puis
          les cinq cartes à bordure dorée, numérotées 01–05. */}
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
          {GALERIE.map(({ src, alt }) => (
            <VignetteGalerie key={src} src={src} alt={alt} />
          ))}
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
          <BoutonAction href="/contact">NOUS CONTACTER</BoutonAction>
        </div>
      </SectionEditoriale>
    </main>
  );
}
