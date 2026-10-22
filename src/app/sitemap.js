import { URL_SITE } from "@/lib/site";

// Plan du site : les quatre pages publiques, rafraîchies à la date
// du build.
export default function sitemap() {
  return ["", "/instrument", "/galerie", "/contact"].map((chemin) => ({
    url: `${URL_SITE}${chemin}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: chemin === "" ? 1 : 0.8,
  }));
}
