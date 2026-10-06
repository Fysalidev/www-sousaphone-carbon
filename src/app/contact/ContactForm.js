"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";

const champ =
  "h-12 w-full rounded-lg border border-black/[.08] bg-transparent px-4 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-white/[.145] dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:ring-zinc-500";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, {});

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="nom"
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          Nom
        </label>
        <input id="nom" name="nom" type="text" placeholder="Votre nom" className={champ} required />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="vous@exemple.fr"
          className={champ}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Votre message…"
          className="w-full resize-y rounded-lg border border-black/[.08] bg-transparent px-4 py-3 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-white/[.145] dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:ring-zinc-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex h-12 w-fit items-center justify-center rounded-full bg-foreground px-5 text-base font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-50 dark:hover:bg-[#ccc]"
      >
        {pending ? "Envoi…" : "Envoyer"}
      </button>

      {state.error ? (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">{state.error}</p>
      ) : null}
      {state.success ? (
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          {state.success}
        </p>
      ) : null}
    </form>
  );
}
