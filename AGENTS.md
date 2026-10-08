# Flux git

- `main` est la seule branche longue-vive : elle déploie la prod (Vercel).
  Jamais de force-push dessus.
- Une branche par session de dev, créée depuis `main` en début de
  session : `git switch -c dev-MMDD-Session` (ex. `dev-1008-Session`,
  `dev-1008-Session2` si deuxième session du jour).
- Pousser la branche tôt : chaque push génère une preview Vercel.
  Le rendu se valide sur cette preview avant tout merge.
- Committer librement au fil de la session, avec le message
  `n | description` (n incrémenté : `1 | Accueil | Hero | Overlay`,
  `2 | Docs | Convention de commits`, ...).
- En fin de session : pousser la branche puis ouvrir une Pull Request
  vers `main` (la branche est protégée : le merge se fait par PR sur
  GitHub, en merge commit — pas squash — pour garder les commits de
  session regroupés).
- Après merge de la PR : `git switch main && git pull`, puis
  `git branch -d <branche>`. La branche distante disparaît
  automatiquement si « Automatically delete head branches » est activé
  dans les réglages du repo.
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
