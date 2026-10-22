import { URL_SITE } from "@/lib/site";

// Robots : site entièrement public, on déclare le plan du site.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${URL_SITE}/sitemap.xml`,
  };
}
