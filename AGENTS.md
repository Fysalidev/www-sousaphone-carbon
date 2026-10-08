# Flux git

- Deux branches longues-vives, jamais de force-push dessus :
  `main` déploie la prod (projet Vercel « Prod ») et `dev` déploie
  les tests (projet Vercel « Test »).
- Une branche par session de dev, créée depuis `dev` en début de
  session : `git switch -c dev-MMDD-Session` (ex. `dev-1008-Session`,
  `dev-1008-Session2` si deuxième session du jour).
- Pousser la branche tôt : chaque push génère une preview Vercel.
  Le rendu se valide sur cette preview avant tout merge.
- Committer librement au fil de la session, avec le message
  `n | description` (n incrémenté : `1 | Accueil | Hero | Overlay`,
  `2 | Docs | Convention de commits`, ...).
- Fin de session : PR vers `dev` → merge → déploie le projet « Test ».
  Puis `git switch dev && git pull` et `git branch -d <branche>`.
- Mise en prod : quand le Test est validé, PR `dev` → `main` → merge
  → déploie le projet « Prod ». Puis `git switch main && git pull`.
- Le travail quotidien se fait sur `dev` : les pulls réguliers ne
  portent que sur `dev` ; `main` ne bouge que par PR de mise en prod.
- Une session qui part sur deux sujets sans rapport se scinde en deux
  branches plutôt que de merger un mélange.
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
