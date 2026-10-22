import Image from "next/image";
import Link from "next/link";
import Revelation from "@/components/Revelation";
import {
  BandeauLogo,
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
} from "@/components/SectionsEditoriales";

export const metadata = {
  title: "L'instrument",
  description:
    "Découvrez le Sousaphone Carbon, sousaphone en fibre de carbone fabriqué sur mesure en France.",
};

// Page instrument : le produit lui-même, du hero « nouvelle génération »
// (photo de l'instrument, texte à gauche en deux colonnes sur desktop)
// à la clôture « pièce unique » et son appel à l'action. Les sections
// reprennent les primitives communes (étiquette dorée, titre serif,
// paragraphe, coquille max-w-3xl) ; chaque section ouvre sur le
// bandeau logo (BandeauLogo). Le header et le footer du projet
// encadrent la page (layout.js).

// Bouton d'action or, même langage que l'accueil : plein or, texte
// noir, coins adoucis et inversion au survol. `inverse` le décline
// pour le bandeau doré (plein noir, texte or) — c'est le seul point
// où le bouton vit sur un fond clair.
function BoutonAction({ href, children, inverse = false, classe = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-lg border px-8 py-4 texte-bouton font-bold tracking-[0.25em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
        inverse
          ? "border-black bg-black text-[#C9A96A] hover:bg-black/80 focus-visible:outline-black"
          : "border-[#C9A96A] bg-[#C9A96A] text-black hover:bg-black hover:text-[#C9A96A] focus-visible:outline-white"
      } ${classe}`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Statistique commentée du bloc chiffres clés : valeur et légende
// sémantiquement liées (dt/dd, valeur au-dessus via flex), la phrase
// d'explication en dessous — même structure que les stats du hero
// d'accueil, avec le niveau de description en plus. Les classes
// instrument-stat-* ne s'activent que dans le hero (scopées
// .instrument-hero dans globals.css) : typographie fluide,
// alignement gauche et descriptions masquées sous 1280px ; la
// section mobile garde ses paliers centrés.
function StatCommentee({ valeur, legende, description, dore = false }) {
  return (
    <div className="instrument-stat flex flex-col text-center">
      <dt className="instrument-stat-legende etiquette-doree order-2 mt-2 font-bold tracking-[0.25em] max-[399px]:tracking-widest text-[#C9A96A]">
        {legende}
      </dt>
      <dd
        className={`instrument-stat-valeur stat-valeur order-1 font-sans font-bold ${
          dore ? "text-[#C9A96A]" : "text-white"
        }`}
      >
        {valeur}
        <span>%</span>
      </dd>
      <dd className="instrument-stat-description paragraphe-section order-3 mt-3 leading-relaxed text-stone-300">
        {description}
      </dd>
    </div>
  );
}

// Emplacement photo de la mosaïque « Détails de fabrication » :
// carte à bordure dorée quand la photo est déposée, sinon placeholder
// pointillé (fichier attendu, ratio, dimensions conseillées) sur le
// même langage que la galerie. `empreinte` porte le ratio d'affichage
// (classes aspect), les conseils de taille de la source et le sizes
// de l'optimiseur.
function EmplacementDetail({ photo, empreinte }) {
  return photo ? (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#C9A96A]/40 ${empreinte.classes}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={empreinte.sizes}
        className="object-cover brightness-90"
      />
    </div>
  ) : (
    <div
      className={`flex w-full flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center ${empreinte.classes}`}
    >
      <p className="text-xs min-[768px]:text-sm font-bold text-[#C9A96A]">
        {empreinte.fichier}
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-300">
        {empreinte.ratio}
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-400">
        {empreinte.conseils}
      </p>
    </div>
  );
}

// ——— Données ———
// Le contenu éditorial de la page vit ici, en tableaux : modifier un
// texte ne touche pas la structure JSX.

const STATS = [
  {
    valeur: "-40",
    legende: "DE POIDS",
    description: "Une mobilité accrue, sans compromis sonore.",
    dore: true,
  },
  {
    valeur: "100",
    legende: "CARBONE",
    description: "Corps fabriqué en fibre de carbone.",
  },
  {
    valeur: "100",
    legende: "ARTISANAL",
    description: "Fabriqué à la main dans nos ateliers, au cœur de la France.",
  },
];

// Mosaïque « Détails de fabrication » : photo verticale à gauche,
// photo paysage puis zone texte de même taille à droite. Photos à
// déposer dans public/photos/ puis renseigner src/alt ici —
// l'emplacement correspondant bascule du placeholder à l'image.
// Empreintes : colonne affichée ≈ 372px sur desktop, conseils en
// rétina 2×.
const PHOTOS_DETAILS = {
  verticale: null, // ex. { src: "/photos/details-01.webp", alt: "…" }
  paysage: null, // ex. { src: "/photos/details-02.webp", alt: "…" }
  grande: null, // ex. { src: "/photos/details-03.webp", alt: "…" }
};

const EMPREINTES_DETAILS = {
  verticale: {
    classes: "aspect-[3/4]",
    fichier: "photos/details-01.webp",
    ratio: "3/4",
    conseils: "≈ 750 × 1000 px",
    sizes: "(min-width: 768px) 24rem, calc(100vw - 3rem)",
  },
  paysage: {
    classes: "aspect-[3/2]",
    fichier: "photos/details-02.webp",
    ratio: "3/2",
    conseils: "≈ 750 × 500 px",
    sizes: "(min-width: 768px) 24rem, calc(100vw - 3rem)",
  },
  grande: {
    classes: "aspect-[16/10]",
    fichier: "photos/details-03.webp",
    ratio: "16/10",
    conseils: "≈ 1536 × 960 px",
    sizes: "(min-width: 768px) 48rem, calc(100vw - 3rem)",
  },
};

// ——— Page ———

export default function InstrumentPage() {
  return (
    <main className="flex flex-col bg-black">
      {/* Hero « nouvelle génération » : accroche dorée, titre Montserrat
          et promesse, photo de l'instrument — empilés et centrés sur
          mobile, en deux colonnes à partir de 768px avec le texte à
          gauche et l'instrument à droite. Sur desktop (≥ 768px) la
          section occupe au minimum la hauteur d'écran restante après
          le header ; sur mobile le hero est compact : la photo, en
          aspect 3/4 plafonnée à 45 % de l'écran, garde l'instrument
          à taille contenue et laisse les sections suivantes proches.
          Même fond dégradé doré haut/bas et même traitement de photo
          (mix-blend-screen, masque limité aux bords) que le hero
          d'accueil. */}
      <section
        aria-labelledby="titre-hero"
        className="instrument-hero flex flex-col bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10 min-[768px]:min-h-[calc(100svh-var(--hauteur-barre-header))]"
      >
        <div className="flex w-full flex-1 flex-col items-center px-6 pt-12 pb-12 text-center min-[768px]:mx-auto min-[768px]:grid min-[768px]:max-w-[90rem] min-[768px]:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] min-[768px]:items-center min-[768px]:gap-10 min-[768px]:pt-0 min-[768px]:text-left">
          <div className="flex flex-col items-center min-[768px]:items-start">
            <p className="hero-entree instrument-accroche font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
              LE SOUSAPHONE RÉINVENTÉ
            </p>
            <h1
              id="titre-hero"
              className="hero-entree instrument-titre mt-4 font-sans font-bold leading-[1.125] text-white [animation-delay:300ms]"
            >
              Une innovation mondiale.
            </h1>
            <p className="hero-entree instrument-promesse mt-6 max-w-xl text-base leading-relaxed text-stone-200 min-[768px]:max-w-lg [animation-delay:450ms]">
              Pièce unique artisanale en carbone, alliant tradition et
              technologies contemporaines. Légère, résistante, à
              l&rsquo;acoustique remarquable.
            </p>
            {/* Chiffres clés, sous la promesse dans la colonne texte
                (à gauche de la photo) sur desktop (≥ 768px) ;
                l'alignement, la typo fluide et le passage en lignes
                éditoriales sous 1280px vivent dans globals.css
                (scopés .instrument-hero). Sur mobile, la section
                dédiée ci-dessous prend le relais. */}
            <dl
              aria-label="Chiffres clés"
              className="hero-entree mt-10 hidden w-full grid-cols-1 gap-6 min-[768px]:grid min-[1280px]:grid-cols-3 min-[1280px]:gap-10 [animation-delay:750ms]"
            >
              {STATS.map((stat) => (
                <StatCommentee
                  key={stat.legende}
                  valeur={stat.valeur}
                  legende={stat.legende}
                  description={stat.description}
                  dore={stat.dore}
                />
              ))}
            </dl>
          </div>
          {/* Photo de l'instrument : galerie-05.webp (740×1038) sert
              les deux dispositions — empilé mobile et colonne
              desktop —, avec le même traitement que le hero
              d'accueil : object-contain pour ne jamais déformer
              l'instrument, mix-blend-screen pour fondre dans le fond
              doré, masque limité aux bords haut/bas. Boîte en aspect
              3/4 à toutes les largeurs, plafonnée à 45svh sur mobile
              (hero compact) et 48rem sur desktop. */}
          <div className="hero-entree relative mt-6 min-h-64 w-full aspect-[3/4] max-h-[45svh] [animation-delay:600ms] min-[768px]:mt-0 min-[768px]:max-h-[48rem]">
            <Image
              src="/galerie/galerie-05.webp"
              alt="Photographie du Sousaphone Carbon"
              fill
              priority
              sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
              className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)]"
            />
          </div>
        </div>
      </section>

      {/* Chiffres clés commentés, mobile uniquement (sur desktop ils
          vivent dans la colonne texte du hero) : les trois mêmes stats
          que l'accueil (-40 %, 100 %, 100 %) avec ici une phrase
          d'explication sous chacune, empilées et centrées. */}
      <section
        aria-label="Chiffres clés"
        className="px-6 py-12 min-[768px]:hidden"
      >
        <Revelation>
          <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-10 min-[768px]:grid-cols-3">
            {STATS.map((stat) => (
              <StatCommentee
                key={stat.legende}
                valeur={stat.valeur}
                legende={stat.legende}
                description={stat.description}
                dore={stat.dore}
              />
            ))}
          </dl>
        </Revelation>
      </section>

      {/* L'art du souffle : édition limitée et fabrication artisanale. */}
      <SectionEditoriale titreAria="titre-souffle" bandeau>
        <EtiquetteDoree>L&rsquo;ART DU SOUFFLE</EtiquetteDoree>
        <h2
          id="titre-souffle"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          Fabriqué à la main.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        {/* Mesure élargie à la colonne éditoriale complète : le texte
            épouse la largeur du titre au lieu de couper tôt. */}
        <ParagrapheSection largeur="max-w-3xl">
          Chaque pièce est façonnée avec exigence. Chaque sousaphone prend
          forme, geste après geste, dans nos ateliers. De cette patience
          naissent des instruments résistants, équilibrés, aux propriétés
          acoustiques d&rsquo;exception.
        </ParagrapheSection>
      </SectionEditoriale>

      {/* Boîte dorée « une question » : le seul moment clair de la
          page — fond or de la largeur du texte (max-w-3xl), centré
          et à coins adoucis, textes noirs, bouton plein noir. Le
          bandeau logo ouvre la section comme partout. Empilé et centré sur mobile ; à partir de 768px le texte
          passe à gauche et le bouton se cale à droite de la boîte.
          Il ouvre directement la porte du contact. */}
      <section
        aria-labelledby="titre-question"
        className="px-6 py-12 min-[768px]:py-16"
      >
        <Revelation>
          <BandeauLogo />
          <div className="mx-auto max-w-3xl rounded-2xl bg-[#C9A96A] px-6 py-12 text-center min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between min-[768px]:gap-10 min-[768px]:py-16 min-[768px]:text-left">
            <div>
              <h2
                id="titre-question"
                className="titre-boite font-serif-carte font-semibold leading-tight text-black"
              >
                Une question sur le sousaphone&nbsp;?
              </h2>
              <p className="paragraphe-section mx-auto mt-4 max-w-xl leading-relaxed text-black/80 min-[768px]:mx-0">
                Question technique, projet, envie d&rsquo;essai&nbsp;: nous
                sommes à votre écoute pour vous accompagner à chaque étape.
              </p>
            </div>
            <div className="mt-8 min-[768px]:mt-0 min-[768px]:flex-none">
              <BoutonAction href="/contact" inverse>
                NOUS CONTACTER
              </BoutonAction>
            </div>
          </div>
        </Revelation>
      </section>

      {/* Le geste juste : précision et son, refermés par la citation
          de l'atelier — serif italique dorée. */}
      <SectionEditoriale titreAria="titre-geste" bandeau>
        <EtiquetteDoree>LE GESTE JUSTE</EtiquetteDoree>
        <h2
          id="titre-geste"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          La précision et le son
          <br />
          comme signature.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection largeur="max-w-3xl">
          Chaque courbe est formée, ajustée, puis polie lentement. Les pistons
          répondent sans effort&nbsp;; les brasures disparaissent sous la
          lumière. Un fini unique.
        </ParagrapheSection>
        <blockquote className="mt-8 text-center">
          <p className="citation-serif mx-auto max-w-xl font-serif-carte italic leading-snug text-[#C9A96A]">
            «&nbsp;Le métal garde la mémoire du geste.&nbsp;»
          </p>
        </blockquote>
      </SectionEditoriale>

      {/* Détails de fabrication : étiquette puis mosaïque éditoriale —
          photo verticale à gauche, photo paysage puis zone texte de
          même taille à droite (la colonne de droite s'étire à la
          hauteur de la verticale) ; sur mobile les trois blocs
          s'empilent dans l'ordre de lecture. La zone texte porte
          l'ancre du titre de section : l'union du carbone et du
          laiton. Ligne 2 : grande image pleine colonne sous la
          mosaïque. Bandeau logo en tête, comme partout. */}
      <section
        aria-labelledby="titre-details"
        className="px-6 py-12 min-[768px]:py-16"
      >
        <Revelation>
          <div className="mx-auto max-w-3xl">
            <BandeauLogo />
            <EtiquetteDoree>DÉTAILS DE FABRICATION</EtiquetteDoree>
            <div className="mt-12 grid grid-cols-1 gap-6 min-[768px]:mt-16 min-[768px]:grid-cols-2">
              <EmplacementDetail
                photo={PHOTOS_DETAILS.verticale}
                empreinte={EMPREINTES_DETAILS.verticale}
              />
              <div className="flex flex-col gap-6">
                <EmplacementDetail
                  photo={PHOTOS_DETAILS.paysage}
                  empreinte={EMPREINTES_DETAILS.paysage}
                />
                {/* Zone texte : remplissage élastique (flex-1, min-h-0)
                    sous la photo paysage — la photo verticale fixe la
                    hauteur de la ligne de grille, la colonne droite
                    s'étire à l'identique et la zone absorbe l'espace
                    restant : photo + texte = hauteur de details-01.
                    Typo resserrée (text-2xl/3xl, pas la rampe
                    titre-section) pour tenir dans sa part de
                    hauteur. */}
                <div className="flex min-h-0 flex-1 flex-col justify-center rounded-2xl border border-[#C9A96A]/40 px-6 py-6">
                  <p className="etiquette-doree font-bold tracking-[0.25em] text-[#C9A96A]">
                    MATIÈRE
                  </p>
                  <h2
                    id="titre-details"
                    className="font-serif-carte mt-3 text-2xl min-[768px]:text-3xl font-semibold leading-tight text-white"
                  >
                    L&rsquo;union du carbone et du laiton
                  </h2>
                </div>
              </div>
            </div>
            {/* Ligne 2 : grande image pleine colonne sous la mosaïque. */}
            <div className="mt-6">
              <EmplacementDetail
                photo={PHOTOS_DETAILS.grande}
                empreinte={EMPREINTES_DETAILS.grande}
              />
            </div>
          </div>
        </Revelation>
      </section>

      {/* Pièce unique : la promesse sur mesure, refermée par l'appel
          à l'action « Nous contacter » — dernière section de la page,
          le footer prend le relais. Rythme élargi (py-16 / py-24) :
          la clôture respire davantage avant la photo de fond du
          footer. Bandeau logo en tête, comme partout. */}
      <SectionEditoriale
        titreAria="titre-piece-unique"
        classe="py-16 min-[768px]:py-24"
        bandeau
      >
        <EtiquetteDoree>PIÈCE UNIQUE — SÉRIE CARBONE</EtiquetteDoree>
        <h2
          id="titre-piece-unique"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          Un instrument unique, à votre mesure.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection largeur="max-w-3xl">
          Du premier tracé à la dernière note, chaque exemplaire est assemblé et
          réglé dans nos ateliers. Une présence sculpturale, une légèreté
          nouvelle, une âme intacte.
        </ParagrapheSection>
        <div className="mt-12">
          <BoutonAction href="/contact">NOUS CONTACTER</BoutonAction>
        </div>
      </SectionEditoriale>
    </main>
  );
}
