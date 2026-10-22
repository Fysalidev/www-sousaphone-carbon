import Link from "next/link";
import { EtiquetteDoree } from "@/components/SectionsEditoriales";

// Page 404 : dans la langue du site — même fond dégradé doré que
// les heroes, étiquette dorée, grand titre Bodoni, filet, et un
// unique appel à l'action vers l'accueil. Occupe la hauteur
// d'écran restante après le header, comme les heroes.
export default function NotFound() {
  return (
    <main className="flex flex-col bg-black">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center min-h-[calc(100svh-var(--hauteur-barre-header))] bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <EtiquetteDoree>ERREUR 404</EtiquetteDoree>
          <h1 className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white">
            Cette page a changé d&rsquo;air.
          </h1>
          <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
          <p className="paragraphe-section mt-6 max-w-xl leading-relaxed text-stone-300">
            La page que vous cherchez n&rsquo;existe pas, ou a été déplacée sans
            prévenir l&rsquo;orchestre. L&rsquo;instrument, lui, n&rsquo;a pas
            bougé.
          </p>
          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 texte-bouton font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            RETOUR À L&rsquo;ACCUEIL
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
