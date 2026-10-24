import { Bebas_Neue, Bodoni_Moda, Montserrat } from "next/font/google";
import { DESCRIPTION, URL_SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Bodoni Moda : serif d'affichage unique du site — normal (titres)
// et italique (citations), variable : le subset latin est plus
// léger que des instances statiques et couvre 400–900.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Bebas Neue : police du slogan (capitales condensées, poids unique 400).
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

// Métadonnées mère : titre (gabarit « Page — Sousaphone Carbon » pour
// les pages filles), description, Open Graph — image paysage
// galerie-06, mieux taillée pour les cartes de partage que le
// portrait du hero — et carte Twitter large. Les pages filles
// n'ont plus qu'à donner leur titre court.
export const metadata = {
  metadataBase: new URL(URL_SITE),
  title: {
    default: "Sousaphone Carbon — Sousaphones en carbone",
    template: "%s — Sousaphone Carbon",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sousaphone Carbon",
    title: "Sousaphone Carbon — Sousaphones en carbone",
    description: DESCRIPTION,
    images: [
      {
        url: "/galerie/galerie-06.webp",
        width: 2028,
        height: 1141,
        alt: "Sousaphone Carbon",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${bodoni.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#contenu"
          className="sr-only z-60 focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Aller au contenu
        </a>
        <Header />
        <div
          id="contenu"
          tabIndex={-1}
          className="flex w-full flex-1 flex-col focus:outline-none"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
