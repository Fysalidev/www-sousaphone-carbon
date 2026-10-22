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
  VignetteGalerieVide,
} from "@/components/CartesAccueil";
import { PHOTOS } from "@/components/DonneesGalerie";
import { URL_SITE } from "@/lib/site";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
  TitreSection,
} from "@/components/SectionsEditoriales";

// Métadonnées (titre, description, Open Graph) : couvertes par le
// layout — seule la page d'accueil porte les données structurées
// schema.org ci-dessous.
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
// équipe, galerie, clôture), chacune ouverte par le bandeau logo —
// leurs primitives vivent dans components/SectionsEditoriales.js, leurs
// cartes dans components/CartesAccueil.js, leur contenu dans les
// tableaux de données ci-dessous. Le footer referme la page.

// ——— Hero ———

// Bouton d'action or : pilule noire (rounded-full) — fond noir, texte
// or ; sur le fond noir de la page elle vit en fantôme, seul le
// texte affiche, et l'or arrive au survol (fond or, texte noir) —
// décliné pour le hero (« Sousaphone Carbon ») et la clôture
// (« Nous contacter »). `classe` porte l'espacement et l'animation
// d'entrée.
function BoutonAction({ href, children, classe = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 texte-bouton font-bold tracking-[0.25em] text-[#C9A96A] transition-colors hover:bg-[#C9A96A] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${classe}`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Statistique clé : terme/légende (dt) et définition/valeur (dd) liés
// sémantiquement ; l'ordre visuel place la valeur au-dessus de la
// légende via flex. Les tailles vivent dans globals.css (rampes
// fluides .hero-stat-valeur / .hero-stat-legende), % solidaire de la
// couleur de la valeur (or si `dore`, blanc sinon).
// Tracking des légendes resserré sous 400px pour éviter les débordements
// sur les très petits écrans.
function StatProduit({ valeur, legende, pourcent = true, dore = false }) {
  return (
    <div className="flex flex-col text-center">
      <dt className="hero-stat-legende order-2 mt-2 font-bold tracking-[0.25em] max-[399px]:tracking-widest text-[#C9A96A]">
        {legende}
      </dt>
      <dd
        className={`hero-stat-valeur order-1 font-sans font-bold ${
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

// Vignettes de la section galerie : les trois premiers emplacements
// de la galerie (01–03), lus dans DonneesGalerie.js — photo déposée
// ou placeholder, même gabarit que la page galerie.
const VIGNETTES = ["01", "02", "03"];

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
      {/* Hero même mécanique que la page instrument, en miroir :
          photo à gauche, texte à droite. Empilé et centré sur
          mobile (accroche, titre, promesse, chiffres, bouton, puis
          photo), plein écran à partir de 768px avec la photo en
          aspect 3/4 plafonnée et le texte dans sa colonne. Le
          dégradé doré haut/bas teinte tout le hero ; la typographie
          (accroche, titre, promesse, valeurs, légendes) suit des
          rampes continues dans globals.css — aucune taille ne vit
          ici. */}
      <section
        aria-labelledby="titre-hero"
        className="hero flex flex-col bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10 min-[768px]:min-h-[calc(100svh-var(--hauteur-barre-header))]"
      >
        <div className="flex w-full flex-1 flex-col items-center px-6 pt-12 pb-12 text-center min-[768px]:mx-auto min-[768px]:grid min-[768px]:max-w-[90rem] min-[768px]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] min-[768px]:items-center min-[768px]:gap-10 min-[768px]:pt-0 min-[768px]:text-left">
          {/* Texte de l'accueil : accroche, titre, promesse, puis
              les trois chiffres clés (termes/définitions séparés
              par des filets verticaux) et l'appel à l'action. En
              desktop il occupe la colonne de droite (order-2), en
              mobile il précède la photo — même lecture que le hero
              instrument. */}
          <div className="flex flex-col items-center min-[768px]:order-2 min-[768px]:items-start">
            <p className="hero-entree hero-accroche font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
              L&rsquo;EXCELLENCE, AUTREMENT
            </p>
            <h1
              id="titre-hero"
              className="hero-entree hero-titre mt-4 font-sans font-bold leading-[1.125] text-white [animation-delay:300ms]"
            >
              L&rsquo;âme intacte
              <br />
              la légèreté en plus
            </h1>
            <p className="hero-entree hero-promesse mt-6 text-base leading-relaxed text-stone-200 [animation-delay:450ms]">
              Un corps en fibre de carbone, façonné en France pour libérer le
              musicien sans jamais altérer le son et la projection.
            </p>
            <dl className="hero-entree hero-metrics mt-8 grid w-full grid-cols-3 divide-x divide-white/40 [animation-delay:600ms]">
              <StatProduit valeur="-40" legende="DE POIDS" dore />
              <StatProduit valeur="100" legende="CARBONE" />
              <StatProduit valeur="Made" legende="IN FRANCE" pourcent={false} />
            </dl>
            <BoutonAction
              href="/instrument"
              classe="hero-entree mt-8 [animation-delay:750ms]"
            >
              SOUSAPHONE CARBON
            </BoutonAction>
          </div>
          {/* Photo du sousaphone : photos/hero-desktop.webp
              (856×1141, ratio 3/4) sert les deux dispositions —
              elle épouse exactement la boîte en aspect 3/4.
              Fonte dans le fond de section teinté : mix-blend-screen
              (les zones sombres laissent passer le fond) et un
              masque limité aux seuls bords haut/bas (fondu sur
              ~10 %). En desktop : colonne de gauche (order-1),
              plafonnée à 48rem ; en mobile : sous le texte,
              plafonnée à 45 % de l'écran (hero compact). */}
          <div className="hero-entree relative mt-6 min-h-64 w-full aspect-[3/4] max-h-[45svh] [animation-delay:900ms] min-[768px]:order-1 min-[768px]:mt-0 min-[768px]:max-h-[48rem]">
            <Image
              src="/photos/hero-desktop.webp"
              alt="Sousaphone en laiton sur fond sombre"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 75vw"
              className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)]"
            />
          </div>
        </div>
      </section>

      {/* Exigence : étiquette, très grand titre serif et les trois
          cartes à bordure dorée (expertise, innovations, passion),
          numérotées 01–03, empilées et alignées à gauche. */}
      <SectionEditoriale titreAria="titre-exigence" bandeau>
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

      {/* Pièces uniques : étiquette, très grand titre serif, paragraphe
          puis les trois attributs iconés. */}
      <SectionEditoriale titreAria="titre-pieces-uniques" bandeau>
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

      {/* Équipe : très grand titre serif, paragraphe d&rsquo;intro puis
          les cinq cartes à bordure dorée, numérotées 01–05. */}
      <SectionEditoriale titreAria="titre-equipe" bandeau>
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

      {/* Galerie : trois vignettes portrait teaser vers la page
          galerie — la respiration visuelle de la page, tous les
          autres blocs étant textuels. */}
      <SectionEditoriale titreAria="titre-galerie" bandeau>
        <EtiquetteDoree>GALERIE</EtiquetteDoree>
        <TitreSection id="titre-galerie">
          L&rsquo;instrument en images.
        </TitreSection>
        <ParagrapheSection>
          L&rsquo;atelier, l&rsquo;instrument et les musiciens en situation.
        </ParagrapheSection>
        <div className="mt-12 grid grid-cols-1 gap-6 min-[768px]:grid-cols-3">
          {VIGNETTES.map((numero) => {
            const photo = PHOTOS[numero];
            return photo ? (
              <VignetteGalerie key={numero} src={photo.src} alt={photo.alt} />
            ) : (
              <VignetteGalerieVide key={numero} numero={numero} />
            );
          })}
        </div>
      </SectionEditoriale>

      {/* Clôture narrative : étiquette, très grand titre serif et
          paragraphe d&rsquo;ouverture, refermés par l'appel à
          l'action « Nous contacter » — la page se termine sur une
          sortie vers le contact, le footer prend le relais. */}
      <SectionEditoriale titreAria="titre-final" bandeau>
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
