# Flux git

- `main` est la seule branche longue-vive : elle déploie la prod (Vercel).
  Jamais de force-push dessus.
- Tout changement passe par une branche, créée depuis `main` :
  `git switch -c <nom>` — nommée par contenu (`resp-hero`, `fix-menu`,
  `docs-flux`), jamais par date.
- Pousser la branche tôt : chaque push génère une preview Vercel.
  Le rendu se valide sur cette preview avant tout merge.
- Merger par squash : `git switch main && git merge --squash <branche> && git commit`
  — un commit lisible par chantier, le détail reste sur la branche.
- Supprimer la branche après merge : `git branch -D <branche>` (le contenu
  est bien dans `main` via le commit squash, mais git ne peut pas le
  vérifier, d'où le -D) puis `git push origin --delete <branche>`.
- Les branches mortes sont des pièges : on n'en garde aucune.

# Projet

- Next.js 16 + Tailwind v4. Scripts : `npm run dev`, `npm run build`,
  `npm run lint`, `npm run format:check` — Prettier doit passer avant
  tout commit.
- Les paliers responsive du hero vivent dans `src/app/globals.css`,
  hors `@layer` : ils priment sur les utilitaires Tailwind. Les
  commentaires qui les précèdent documentent les intentions (planchers,
  overlays, paliers de compression) — les mettre à jour avec le code.
- Trois fontes (Montserrat, Bodoni Moda, Bebas Neue) déclarées dans
  `src/app/layout.js` : le titre du hero est en Montserrat, les titres
  de sections en Bodoni, le slogan footer en Bebas.
