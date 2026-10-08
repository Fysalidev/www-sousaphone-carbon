# Flux git

- `main` est la seule branche longue-vive : elle déploie la prod (Vercel).
  Jamais de force-push dessus.
- Une branche par session de dev, créée depuis `main` en début de
  session : `git switch -c dev-MMDD-thème` (ex. `dev-1008-resp-hero`).
  Le thème dans le nom garde la branche identifiable — une date seule
  ne dit rien de ce qu'elle contient.
- Pousser la branche tôt : chaque push génère une preview Vercel.
  Le rendu se valide sur cette preview avant tout merge.
- Committer librement au fil de la session.
- En fin de session : `git switch main && git merge --no-ff <branche>`
  — les commits intermédiaires restent regroupés sous le commit de
  merge. Squash (`git merge --squash`) seulement si la session ne
  mérite qu'un seul commit.
- Supprimer la branche après merge : `git branch -d <branche>` (après
  un squash, `-D` : le contenu est dans `main` mais git ne peut pas le
  vérifier) puis `git push origin --delete <branche>`.
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
