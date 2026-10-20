"use client";

import { useEffect, useRef } from "react";

// Révélation au scroll : enveloppe un bloc et le fait apparaître en
// fondu remonté (opacity + translate-y) dès qu'il entre dans la
// fenêtre, une seule fois. Amélioration progressive : le rendu serveur
// n'applique pas l'état caché — le contenu est visible sans
// JavaScript ; l'état initial masqué n'est posé qu'après montage,
// directement sur le nœud DOM (pas d'état React, pas de re-rendu).
// `prefers-reduced-motion` court-circuite l'animation : le contenu
// reste visible d'emblée.
export default function Revelation({ children, classe = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    element.style.opacity = "0";
    element.style.transform = "translateY(1rem)";
    element.style.transition =
      "opacity 700ms ease-out, transform 700ms ease-out";
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "none";
          observateur.disconnect();
        }
      },
      // Déclenche la révélation un peu avant l'arrivée du bloc.
      { rootMargin: "0px 0px -10% 0px" },
    );
    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <div ref={ref} className={classe}>
      {children}
    </div>
  );
}
