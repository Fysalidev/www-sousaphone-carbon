import Link from "next/link";

export const metadata = {
  title: "Instrument",
  description: "Découvrez le sousaphone, l'instrument emblématique des fanfares.",
};

const caracteristiques = [
  { label: "Famille", valeur: "Cuivres" },
  { label: "Registre", valeur: "Basse" },
  { label: "Inventeur", valeur: "John Philip Sousa" },
  { label: "Année", valeur: "1893" },
];

export default function InstrumentPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 bg-white px-8 py-16 dark:bg-black sm:px-16">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Cuivres
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Le Sousaphone
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Le sousaphone est un instrument à vent de la famille des cuivres,
            conçu par John Philip Sousa en 1893. Sa forme particulière en
            « S » permet au musicien de le porter autour du corps, le pavillon
            dirigé vers l&apos;avant pour projeter le son vers le public.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caracteristiques.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
            >
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </dt>
              <dd className="text-base font-medium text-black dark:text-zinc-50">
                {item.valeur}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Histoire
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            John Philip Sousa, chef de la marine américaine, souhaitait un
            instrument de basse dont le son serait projeté au-dessus de
            l&apos;orchestre, contrairement au tuba traditionnel dont le pavillon
            pointe vers le haut. Le sousaphone est ainsi devenu l&apos;instrument
            emblématique des fanfares et marching bands américains.
          </p>
        </div>

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
