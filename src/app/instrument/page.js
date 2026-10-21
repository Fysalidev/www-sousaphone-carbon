import Image from "next/image";
import Link from "next/link";
import Revelation from "@/components/Revelation";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
  SeparateurSection,
} from "@/components/SectionsEditoriales";

export const metadata = {
  title: "L'instrument — Sousaphone Carbon",
  description:
    "Découvrez le Sousaphone Carbon, sousaphone en fibre de carbone fabriqué sur mesure en France.",
};

// Page instrument : le produit lui-même, du hero « nouvelle génération »
// (photo de l'instrument, texte à gauche en deux colonnes sur desktop)
// à la clôture « un instrument d'exception ». Les sections reprennent
// les primitives de l'accueil (étiquette dorée, titre serif, paragraphe,
// coquille max-w-3xl) et sont séparées par le même séparateur logo.
// Le header et le footer du projet encadrent la page (layout.js).

// Bouton d'action or, même langage que l'accueil : plein or, texte
// noir, coins adoucis et inversion au survol. `inverse` le décline
// pour le bandeau doré (plein noir, texte or) — c'est le seul point
// où le bouton vit sur un fond clair.
function BoutonAction({ href, children, inverse = false, classe = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-lg border px-8 py-4 text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
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
// d'accueil, avec le niveau de description en plus.
function StatCommentee({ valeur, legende, description, dore = false }) {
  return (
    <div className="flex flex-col text-center">
      <dt className="order-2 mt-2 text-[10px] min-[640px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] max-[399px]:tracking-widest text-[#C9A96A]">
        {legende}
      </dt>
      <dd
        className={`order-1 font-sans text-2xl min-[640px]:text-3xl min-[1024px]:text-4xl font-bold ${
          dore ? "text-[#C9A96A]" : "text-white"
        }`}
      >
        {valeur}
        <span>%</span>
      </dd>
      <p className="order-3 mt-3 text-sm min-[640px]:text-base leading-relaxed text-stone-300">
        {description}
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
    description: "Une mobilité transformée, sans compromis sonore.",
    dore: true,
  },
  {
    valeur: "100",
    legende: "CARBONE",
    description:
      "Dans son ensemble, le sousaphone est fabriqué en fibre de carbone.",
  },
  {
    valeur: "100",
    legende: "MADE IN FRANCE",
    description: "Fabriqué à la main dans nos ateliers, au cœur de la France.",
  },
];

// ——— Page ———

export default function InstrumentPage() {
  return (
    <main className="flex flex-col bg-black">
      {/* Hero « nouvelle génération » : accroche dorée, titre Montserrat
          et promesse, photo de l'instrument — empilés et centrés sur
          mobile, en deux colonnes à partir de 768px avec le texte à
          gauche et l'instrument à droite. La section occupe au minimum
          la hauteur d'écran restante après le header ; sur mobile la
          photo, flex-1, absorbe l'espace vertical disponible. Même
          fond dégradé doré haut/bas et mêmes photos (mix-blend-screen,
          masque limité aux bords) que le hero d'accueil. */}
      <section className="flex flex-col bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10 min-h-[calc(100svh-var(--hauteur-barre-header))]">
        <div className="flex w-full flex-1 flex-col items-center px-6 pt-12 pb-10 text-center min-[768px]:mx-auto min-[768px]:grid min-[768px]:max-w-[90rem] min-[768px]:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] min-[768px]:items-center min-[768px]:gap-10 min-[768px]:pt-0 min-[768px]:text-left">
          <div className="flex flex-col items-center min-[768px]:items-start">
            <p className="hero-entree text-[10px] min-[768px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
              SOUSAPHONE NOUVELLE GÉNÉRATION
            </p>
            <h1
              id="titre-hero"
              className="hero-entree mt-4 font-sans text-3xl min-[640px]:text-4xl min-[1024px]:text-5xl min-[1440px]:text-6xl font-bold text-white [animation-delay:300ms]"
            >
              Une innovation mondiale.
            </h1>
            <p className="hero-entree mt-6 max-w-xl text-base leading-relaxed text-stone-200 min-[768px]:max-w-lg [animation-delay:450ms]">
              Un sousaphone artisanal qui conjugue tradition, innovation et
              légèreté. Plus résistant et remarquablement plus doux que ses
              prédécesseurs.
            </p>
          </div>
          {/* Photos de l'instrument, mêmes fichiers et même traitement
              que le hero d'accueil : hero-mobile.webp (600×1141) en
              empilé mobile, hero-desktop.webp (856×1141) en colonne
              desktop, object-contain pour ne jamais déformer
              l'instrument et ratio 3/4 sur desktop pour le tenir en
              hauteur. */}
          <div className="hero-entree relative mt-6 min-h-64 flex-1 w-full [animation-delay:600ms] min-[768px]:mt-0 min-[768px]:aspect-[3/4] min-[768px]:max-h-[48rem] min-[768px]:flex-none">
            <Image
              src="/photos/hero-mobile.webp"
              alt="Sousaphone sur fond sombre"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)] min-[768px]:hidden"
            />
            <Image
              src="/photos/hero-desktop.webp"
              alt="Sousaphone sur fond sombre"
              fill
              priority
              sizes="40vw"
              className="hidden object-contain object-center mix-blend-screen mask-[linear-gradient(to_bottom,transparent_2%,black_10%,black_90%,transparent_98%)] min-[768px]:block"
            />
          </div>
        </div>
      </section>

      <SeparateurSection />

      {/* Chiffres clés commentés : les trois mêmes stats que l'accueil
          (-40 %, 100 %, 100 %) avec ici une phrase d'explication sous
          chacune. Trois colonnes à partir de 768px, empilées et
          centrées en dessous. */}
      <section
        aria-label="Chiffres clés"
        className="px-6 py-12 min-[768px]:py-16"
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

      <SeparateurSection />

      {/* L'art du souffle : édition limitée et fabrication artisanale. */}
      <SectionEditoriale titreAria="titre-souffle">
        <EtiquetteDoree>L&rsquo;ART DU SOUFFLE</EtiquetteDoree>
        <h2
          id="titre-souffle"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          Fabriqué à la main.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          Nous fabriquons des sousaphones en édition limitée, principalement
          pour les fanfares et les orchestres. Le savoir-faire artisanal et
          l&rsquo;utilisation de matériaux innovants font de nos instruments des
          pièces uniques, alliant tradition et modernité.
        </ParagrapheSection>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Bandeau doré « une question » : le seul moment clair de la
          page — fond or plein écran, textes noirs, bouton plein noir.
          Il ouvre directement la porte du contact. */}
      <section
        aria-labelledby="titre-question"
        className="bg-[#C9A96A] px-6 py-12 min-[768px]:py-16"
      >
        <Revelation>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="titre-question"
              className="font-serif-carte text-3xl min-[640px]:text-4xl min-[1024px]:text-5xl font-semibold leading-tight text-black"
            >
              Une question sur le sousaphone&nbsp;?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm min-[640px]:text-base leading-relaxed text-black/80">
              Nous sommes à votre écoute pour vous accompagner dans votre
              projet, répondre à vos questions techniques ou organiser une prise
              de contact.
            </p>
            <div className="mt-8">
              <BoutonAction href="/contact" inverse>
                NOUS CONTACTER
              </BoutonAction>
            </div>
          </div>
        </Revelation>
      </section>

      <SeparateurSection />

      {/* Le geste juste : précision et son, refermés par la citation
          de l'atelier — serif italique, attribution en petites
          capitales dorées. */}
      <SectionEditoriale titreAria="titre-geste">
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
        <ParagrapheSection>
          Chaque courbe est finie et ajustée au plus près. Les pistons répondent
          sans effort. Les finitions sont impeccables — le son, lui, reste
          généreux.
        </ParagrapheSection>
        <blockquote className="mt-10 text-center">
          <p className="mx-auto max-w-xl font-serif-carte text-2xl min-[640px]:text-3xl italic leading-snug text-white">
            «&nbsp;Le métal garde la mémoire du geste.&nbsp;»
          </p>
          <cite className="mt-4 block text-[10px] min-[640px]:text-xs font-bold not-italic tracking-[0.25em] text-[#C9A96A]">
            L&rsquo;ATELIER DE PRÉCISION
          </cite>
        </blockquote>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Détails de fabrication : même gabarit que les sections
          éditoriales mais sur la colonne large de la galerie
          (max-w-6xl) pour donner de l'ampleur à la photo — premier
          cliché de la galerie, cadrage 16/10 dans une carte à bordure
          dorée. */}
      <section
        aria-labelledby="titre-details"
        className="px-6 py-12 min-[768px]:py-16"
      >
        <Revelation>
          <div className="mx-auto max-w-6xl">
            <EtiquetteDoree>L&rsquo;ATELIER DE PRÉCISION</EtiquetteDoree>
            <h2
              id="titre-details"
              className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
            >
              Détails de fabrication.
            </h2>
            <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#C9A96A]/40">
              <Image
                src="/galerie/galerie-01.webp"
                alt="Sousaphone de profil sur fond noir, pavillon doré au premier plan"
                width={1600}
                height={1000}
                sizes="(min-width: 1152px) 72rem, 100vw"
                className="aspect-[16/10] w-full object-cover brightness-90"
              />
            </div>
          </div>
        </Revelation>
      </section>

      <SeparateurSection />

      {/* Pièce unique : la promesse sur mesure, refermée par l'appel
          à l'action « Nous contacter ». */}
      <SectionEditoriale titreAria="titre-piece-unique">
        <EtiquetteDoree>PIÈCE UNIQUE — SÉRIE CARBONE</EtiquetteDoree>
        <h2
          id="titre-piece-unique"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          Un instrument à votre mesure.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          Du premier souffle à la dernière note, chaque sousaphone est assemblé
          et réglé à la main. Une précision sculpturale, une légèreté nouvelle,
          une âme intacte.
        </ParagrapheSection>
        <div className="mt-12">
          <BoutonAction href="/contact">NOUS CONTACTER</BoutonAction>
        </div>
      </SectionEditoriale>

      <SeparateurSection />

      {/* Clôture « instrument d'exception » : la promesse finale,
          illustrée par une photo de la galerie en cadrage portrait —
          la page se referme avant le footer. */}
      <SectionEditoriale titreAria="titre-exception">
        <EtiquetteDoree>UN INSTRUMENT D&rsquo;EXCEPTION</EtiquetteDoree>
        <h2
          id="titre-exception"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          Pensé comme une œuvre d&rsquo;art,
          <br />
          joué comme un rêve.
        </h2>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          Fabriqué en France, façonné à la main : le partenaire de votre
          batterie fanfare, pensé pour durer et pour faire de chaque passage une
          signature.
        </ParagrapheSection>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#C9A96A]/40">
          <Image
            src="/galerie/galerie-02.webp"
            alt="Photographie du Sousaphone Carbon"
            width={900}
            height={1200}
            sizes="(min-width: 768px) 36rem, 100vw"
            className="aspect-[3/4] w-full object-cover brightness-90"
          />
        </div>
      </SectionEditoriale>
    </main>
  );
}
