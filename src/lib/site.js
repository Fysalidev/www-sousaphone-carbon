// URL publique du site et description par défaut : base unique des
// URLs absolues (metadata, JSON-LD, sitemap, robots). En production
// la variable d'environnement prime, sinon l'URL de déploiement
// Vercel, et localhost en développement.
export const URL_SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000");

export const DESCRIPTION =
  "Sousaphones en carbone légers et robustes à la sonorité exceptionnelle, fabriqués sur mesure en France.";
