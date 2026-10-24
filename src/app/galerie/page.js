import Image from "next/image";
import Revelation from "@/components/Revelation";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
} from "@/components/SectionsEditoriales";
import {
  EMPREINTES,
  LIGNES,
  NOMBRE_PHOTOS,
  PHOTOS,
} from "@/components/DonneesGalerie";

export const metadata = {
  title: "Galerie",
  description:
    "L'atelier, l'instrument et les musiciens en situation : découvrez le Sousaphone Carbon en images.",
};

// Page galerie : la composition (lignes, empreintes) et les photos
// déposées vivent dans DonneesGalerie.js, source unique partagée
// avec les vignettes de l'accueil. Chaque photo passe par
// l'optimiseur d'images (next/image, fill + sizes de l'empreinte) :
// chaque emplacement reçoit la variante taillée à sa taille réelle.

// Trame déroulée : les lignes composées de DonneesGalerie se
// répètent jusqu'à épuiser les emplacements — la dernière ligne
// (la grande de clôture) peut être incomplète. Chaque emplacement
// reçoit son numéro dans l'ordre de lecture.
const EMPLACEMENTS = (() => {
  const lignes = [];
  let numero = 1;
  let index = 0;
  while (numero <= NOMBRE_PHOTOS) {
    const motif = LIGNES[index % LIGNES.length];
    const ligne = [];
    for (const taille of motif) {
      if (numero > NOMBRE_PHOTOS) break;
      ligne.push({ taille, numero: String(numero).padStart(2, "0") });
      numero += 1;
    }
    lignes.push(ligne);
    index += 1;
  }
  return lignes;
})();

// Emplacement photo : la carte au survol zoome légèrement et filet
// or ; `pleinePage` rend la grande hors grille — fond à fond, sans
// arrondi ni filet (ils marqueraient les bords de l'écran).
// Emplacement vide : placeholder pointillé avec le fichier attendu,
// son ratio et la consigne d'alt.
function EmplacementGalerie({ taille, numero, pleinePage = false }) {
  const empreinte = EMPREINTES[taille];
  const photo = PHOTOS[numero];
  return photo ? (
    <figure
      className={`group relative overflow-hidden ${pleinePage ? "" : "rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none"} ${empreinte.classes}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={empreinte.sizes}
        loading="lazy"
        className="object-cover brightness-90 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 motion-reduce:transition-none"
      />
    </figure>
  ) : (
    <figure
      className={`flex flex-col items-center justify-center gap-1 border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center ${pleinePage ? "" : "rounded-2xl"} ${empreinte.classes}`}
    >
      <figcaption className="text-xs min-[768px]:text-sm font-bold text-[#C9A96A]">
        galerie-{numero}.webp
      </figcaption>
      <p className="text-[10px] min-[768px]:text-xs text-stone-300">
        {empreinte.ratio}
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-400">
        {empreinte.conseils}
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-500">
        alt&nbsp;: décrire la scène en 10–20 mots
      </p>
    </figure>
  );
}

export default function GaleriePage() {
  return (
    <main className="flex flex-col bg-black">
      <SectionEditoriale titreAria="titre-galerie" bandeau>
        <EtiquetteDoree>GALERIE</EtiquetteDoree>
        <h1
          id="titre-galerie"
          className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white"
        >
          L&rsquo;instrument en images.
        </h1>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          L&rsquo;atelier, l&rsquo;instrument et les musiciens en situation.
        </ParagrapheSection>
      </SectionEditoriale>
      {/* Trame de la galerie : les grandes vivent hors conteneur,
          pleine page — fond à fond, bords d'écran compris —, quand
          les lignes de moyennes et de petites restent contenues
          (px-6, max-w-6xl). Cette alternance respiration /
          concentration rythme la série : une grande ouvre chaque
          motif, les lignes resserrées l'accompagnent. Les photos
          passent par l'optimiseur d'images (next/image, fill +
          sizes de l'empreinte) ; emplacement vide : placeholder
          pointillé avec le fichier attendu et son ratio. */}
      <section aria-label="Photos" className="pb-20 min-[768px]:pb-28">
        <Revelation>
          <div className="flex flex-col gap-6">
            {EMPLACEMENTS.map((ligne, indexLigne) => {
              const pleinePage =
                ligne.length === 1 && ligne[0].taille === "grande";
              return pleinePage ? (
                <div key={indexLigne} className="w-full">
                  <EmplacementGalerie
                    taille={ligne[0].taille}
                    numero={ligne[0].numero}
                    pleinePage
                  />
                </div>
              ) : (
                <div key={indexLigne} className="px-6">
                  <div
                    className={`mx-auto grid max-w-6xl gap-6 ${EMPREINTES[ligne[0].taille].grille}`}
                  >
                    {ligne.map(({ taille, numero }) => (
                      <EmplacementGalerie
                        key={numero}
                        taille={taille}
                        numero={numero}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
