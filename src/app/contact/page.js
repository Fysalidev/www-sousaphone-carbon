export const metadata = {
  title: "Contact — Sousaphone Carbon",
  description:
    "Contactez l'atelier pour toute question sur nos sousaphones en carbone.",
};

import ContactForm from "./ContactForm";
import { EtiquetteDoree } from "@/components/SectionsEditoriales";

// Page contact : même gabarit éditorial que les autres pages —
// étiquette dorée, grand titre Bodoni, filet, intro —, puis le
// formulaire dans la colonne de prose (48rem). Le formulaire vit
// dans ContactForm.js (composant client) : pour l'instant la
// soumission est simulee (stade UX/UI), la fonctionnalite reelle
// s'integrera plus tard.
export default function ContactPage() {
  return (
    <main className="flex flex-col bg-black">
      <section
        aria-labelledby="titre-contact"
        className="px-6 py-12 min-[768px]:py-16"
      >
        <div className="mx-auto max-w-3xl">
          <EtiquetteDoree>CONTACT</EtiquetteDoree>
          <h1
            id="titre-contact"
            className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white"
          >
            Parlons de votre projet.
          </h1>
          <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
          <p className="paragraphe-section mt-6 max-w-xl leading-relaxed text-stone-300">
            Fanfare, orchestre ou projet personnel : dites-nous qui vous êtes et
            ce que vous cherchez — instrument sur mesure, délais, essais —
            l&rsquo;atelier vous répond.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
