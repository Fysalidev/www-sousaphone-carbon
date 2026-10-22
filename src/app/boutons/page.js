import Link from "next/link";
import Revelation from "@/components/Revelation";
import {
  BandeauLogo,
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
} from "@/components/SectionsEditoriales";

export const metadata = {
  title: "Boutons (démo)",
  description: "Galerie temporaire de variantes de boutons d'action.",
};

// ——— Page temporaire : galerie de variantes de boutons ———
// Propositions inspirées du CTA « Estimer mon vélo » de Moustache
// Bikes (pilule pleine, contraste franc, label direct), traduites
// dans la charte noir/or du site : mêmes fontes (Montserrat gras,
// tracking 0.25em), même or #C9A96A. Chaque variante est montrée
// sur fond noir ET dans la boîte dorée (le contexte de la page
// instrument). À supprimer après validation — la variante retenue
// remplacera BoutonAction.

// Socle commun des pilules : même gabarit que BoutonAction (gap, px-8
// py-4, focus visible) mais coins totalement arrondis (rounded-full)
// — c'est la signature du CTA Moustache.
const SOCLE =
  "inline-flex items-center gap-3 rounded-full px-8 py-4 texte-bouton font-bold tracking-[0.25em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

// Variante A — pilule or pleine : la traduction directe du bouton
// Moustache (couleur marque pleine, texte noir), inversion au survol.
function BoutonA({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className={`${SOCLE} border border-[#C9A96A] bg-[#C9A96A] text-black hover:bg-black hover:text-[#C9A96A] focus-visible:outline-white`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Variante B — pilule contour : bordure or, fond transparent, texte
// or ; le fond or arrive au survol. Plus discret, la version luxe.
function BoutonB({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className={`${SOCLE} border border-[#C9A96A]/70 bg-transparent text-[#C9A96A] hover:border-[#C9A96A] hover:bg-[#C9A96A] hover:text-black focus-visible:outline-white`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Variante C — pilule noire sur fond or : la déclinaison pour la
// boîte dorée, inversion au survol.
function BoutonC({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className={`${SOCLE} border border-black bg-black text-[#C9A96A] hover:bg-[#C9A96A] hover:text-black focus-visible:outline-black`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

// Variante D — pilule or, flèche animée : la A avec une
// micro-interaction au survol — la flèche glisse vers la droite.
function BoutonD({ children, href = "#" }) {
  return (
    <Link
      href={href}
      className={`${SOCLE} group border border-[#C9A96A] bg-[#C9A96A] text-black hover:bg-black hover:text-[#C9A96A] focus-visible:outline-white`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
      >
        &rarr;
      </span>
    </Link>
  );
}

// Rangée de démonstration : le bouton sur fond noir, puis le même
// dans un pastille dorée (le contexte de la boîte « Une question »).
function RangeeVariante({ numero, nom, description, Noir, Or }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold tracking-[0.25em] text-[#C9A96A]">
          {numero} — {nom}
        </p>
        <p className="paragraphe-section mt-2 max-w-xl leading-relaxed text-stone-300">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex min-h-32 flex-1 items-center justify-center rounded-2xl bg-black px-6 py-8">
          <Noir />
        </div>
        <div className="flex min-h-32 flex-1 items-center justify-center rounded-2xl bg-[#C9A96A] px-6 py-8">
          <Or />
        </div>
      </div>
    </div>
  );
}

export default function BoutonsPage() {
  return (
    <main className="flex flex-col bg-black">
      <SectionEditoriale titreAria="titre-boutons" bandeau>
        <EtiquetteDoree>DÉMO — TEMPORAIRE</EtiquetteDoree>
        <h1
          id="titre-boutons"
          className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white"
        >
          Variantes de boutons.
        </h1>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection largeur="max-w-3xl">
          Quatre propositions de pilules inspirées du bouton « Estimer mon vélo
          » de Moustache Bikes, traduites dans la charte noir/or. Chaque bouton
          est montré sur fond noir puis sur fond or.
        </ParagrapheSection>
        <Revelation>
          <div className="mt-12 flex flex-col gap-12">
            <RangeeVariante
              numero="A"
              nom="Pilule or pleine"
              description="La traduction directe : couleur marque pleine, texte noir, inversion au survol."
              Noir={() => <BoutonA>NOUS CONTACTER</BoutonA>}
              Or={() => <BoutonA>NOUS CONTACTER</BoutonA>}
            />
            <RangeeVariante
              numero="B"
              nom="Pilule contour"
              description="Bordure et texte or, fond transparent ; l'or arrive au survol. La version la plus discrète."
              Noir={() => <BoutonB>NOUS CONTACTER</BoutonB>}
              Or={() => <BoutonB>NOUS CONTACTER</BoutonB>}
            />
            <RangeeVariante
              numero="C"
              nom="Pilule noire sur fond or"
              description="La déclinaison boîte dorée : noir plein, texte or, inversion au survol."
              Noir={() => <BoutonC>NOUS CONTACTER</BoutonC>}
              Or={() => <BoutonC>NOUS CONTACTER</BoutonC>}
            />
            <RangeeVariante
              numero="D"
              nom="Pilule or, flèche animée"
              description="La A avec une micro-interaction : la flèche glisse à droite au survol."
              Noir={() => <BoutonD>NOUS CONTACTER</BoutonD>}
              Or={() => <BoutonD>NOUS CONTACTER</BoutonD>}
            />
          </div>
        </Revelation>
      </SectionEditoriale>
    </main>
  );
}
