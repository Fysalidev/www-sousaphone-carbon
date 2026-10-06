import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Galerie",
  description: "Photos de sousaphones et de fanfares.",
};

const photos = [
  { src: "/galerie/photo-1.svg", alt: "Sousaphone argenté", titre: "Sousaphone argenté" },
  { src: "/galerie/photo-2.svg", alt: "Musiciens en répétition", titre: "En répétition" },
  { src: "/galerie/photo-3.svg", alt: "Pupitre de partition", titre: "Le pupitre en la mineur" },
  { src: "/galerie/photo-4.svg", alt: "Concert en plein air", titre: "Concert d'été" },
  { src: "/galerie/photo-5.svg", alt: "Gros plan sur les pistons", titre: "Détail des pistons" },
  { src: "/galerie/photo-6.svg", alt: "Fanfare en parade", titre: "Fanfare en parade" },
  { src: "/galerie/photo-7.svg", alt: "Atelier de réparation d'instruments", titre: "Atelier du luthier" },
  { src: "/galerie/photo-8.svg", alt: "Sousaphone sous un projecteur", titre: "Sous la lumière" },
];

export default function GaleriePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col gap-8 bg-white px-8 py-16 dark:bg-black sm:px-16">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Photos
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Galerie
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Instants de répétitions, concerts et parades — le sousaphone en
            images.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="group flex flex-col gap-2 rounded-lg border border-black/[.08] p-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="h-auto w-full rounded-md"
              />
              <p className="px-2 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {photo.titre}
              </p>
            </li>
          ))}
        </ul>

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
