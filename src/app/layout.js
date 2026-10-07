import { Bebas_Neue, Bodoni_Moda, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

// Bebas Neue : police du slogan (capitales condensées, poids unique 400).
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sousophone Carbon",
  description: "Sousophones en carbone légers, robustes, fabriqués sur mesure.",
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
