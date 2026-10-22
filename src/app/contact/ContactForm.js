"use client";

import { useActionState } from "react";

// Soumission simulee : aucun traitement reel pour l'instant —
// cette page vit au stade UX/UI. Le parcours visuel (envoi, etat
// en cours, confirmation) reste validable sur la preview grace a
// ce placeholder ; l'integration reelle (server action, e-mail ou
// base) se branchera plus tard a la place.
async function soumettreSimule() {
  await new Promise((retour) => setTimeout(retour, 800));
  return { success: "Merci pour votre message, nous vous répondrons vite." };
}

// Champs de saisie : fond à peine teinté d'or, bordure dorée
// adoucie qui se renforce au focus, texte blanc, placeholder
// discret — même langage que les cartes et la boîte « Une
// question » de la page instrument.
const champ =
  "h-12 w-full rounded-lg border border-[#C9A96A]/40 bg-[#C9A96A]/[0.06] px-4 text-base text-white placeholder:text-stone-500 transition-colors focus:border-[#C9A96A] focus:outline-none focus:ring-1 focus:ring-[#C9A96A]";

const etiquette = "etiquette-doree font-bold tracking-[0.25em] text-[#C9A96A]";

// Champ de saisie court avec son étiquette dorée ; `requis` porte
// l'astérisque et la validation native.
function Champ({ id, label, requis = false, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={etiquette}>
        {label}
        {requis && (
          <span aria-hidden="true" title="Champ requis">
            {" "}
            *
          </span>
        )}
      </label>
      <input id={id} name={id} className={champ} required={requis} {...props} />
    </div>
  );
}

// Formulaire de contact : nom, prénom, société, mail, téléphone,
// pays et message — les champs courts en deux colonnes sur
// desktop, le message sur toute la largeur. La soumission passe
// par la server action (validation serveur) ; en cas de succès
// le formulaire laisse place à une confirmation, pour un retour
// visuel clair sans rechargement.
export default function ContactForm() {
  const [state, formAction, pending] = useActionState(soumettreSimule, {});

  if (state.success) {
    return (
      <div className="mt-12 min-[768px]:mt-16 rounded-2xl border border-[#C9A96A]/40 bg-[#C9A96A]/[0.06] px-6 py-10 text-center">
        <p className="titre-carte font-serif-carte font-medium text-white">
          Merci — votre message est bien envoyé.
        </p>
        <p className="paragraphe-section mt-3 leading-relaxed text-stone-300">
          L&rsquo;atelier vous répondra dès que possible à l&rsquo;adresse
          indiquée.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mt-12 min-[768px]:mt-16 grid grid-cols-1 gap-6 min-[768px]:grid-cols-2"
    >
      <Champ
        id="nom"
        label="NOM"
        requis
        type="text"
        autoComplete="family-name"
        placeholder="Votre nom"
      />
      <Champ
        id="prenom"
        label="PRÉNOM"
        requis
        type="text"
        autoComplete="given-name"
        placeholder="Votre prénom"
      />
      <Champ
        id="societe"
        label="SOCIÉTÉ"
        type="text"
        autoComplete="organization"
        placeholder="Fanfare, orchestre, école…"
      />
      <Champ
        id="email"
        label="MAIL"
        requis
        type="email"
        autoComplete="email"
        placeholder="vous@exemple.fr"
      />
      <Champ
        id="telephone"
        label="TÉLÉPHONE"
        type="tel"
        autoComplete="tel"
        placeholder="+33 6 00 00 00 00"
      />
      <Champ
        id="pays"
        label="PAYS"
        type="text"
        autoComplete="country-name"
        placeholder="France"
      />
      <div className="flex flex-col gap-2 min-[768px]:col-span-2">
        <label htmlFor="message" className={etiquette}>
          MESSAGE{" "}
          <span aria-hidden="true" title="Champ requis">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Parlez-nous de votre projet, de votre instrument actuel, de vos attentes…"
          className="w-full resize-y rounded-lg border border-[#C9A96A]/40 bg-[#C9A96A]/[0.06] px-4 py-3 text-base text-white placeholder:text-stone-500 transition-colors focus:border-[#C9A96A] focus:outline-none focus:ring-1 focus:ring-[#C9A96A]"
        />
      </div>
      {state.error && (
        <p
          role="alert"
          className="text-sm font-medium text-red-400 min-[768px]:col-span-2"
        >
          {state.error}
        </p>
      )}
      <div className="min-[768px]:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-3 rounded-lg border border-[#C9A96A] bg-[#C9A96A] px-8 py-4 texte-bouton font-bold tracking-[0.25em] text-black transition-colors hover:bg-black hover:text-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50"
        >
          {pending ? "ENVOI EN COURS…" : "ENVOYER"}
          <span aria-hidden="true">&rarr;</span>
        </button>
        <p className="paragraphe-section mt-4 leading-relaxed text-stone-400">
          * champs requis — l&rsquo;atelier répond généralement sous quelques
          jours.
        </p>
      </div>
    </form>
  );
}
