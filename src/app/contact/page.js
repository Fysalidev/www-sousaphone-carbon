import Link from "next/link";

import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contactez la fanfare pour un concert ou une question.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 bg-white px-8 py-16 dark:bg-black sm:px-16">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Écrivez-nous
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Contact
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Une question sur le sousaphone, une envie de nous inviter pour
            un concert ou de rejoindre la fanfare ? Envoyez-nous un message.
          </p>
        </div>

        <ContactForm />

        <Link
          className="flex h-12 w-fit items-center justify-center rounded-full border border-solid border-black/[.08] px-5 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          href="/"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
    </div>
  );
}
