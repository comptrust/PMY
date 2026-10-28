# Groupe Scolaire Présentation de Marie - Yoff (Dakar)

Site web officiel bilingue (Français / Anglais) pour le **Groupe Scolaire Présentation de Marie de Yoff** (Crèche, Maternelle, Préscolaire et École Élémentaire).

---

## 🚀 Déploiement sur GitHub Pages (Solution pour l'écran blanc)

### Pourquoi la page s'affichait blanche ?
Par défaut, Vite génère des chemins absolus (`/assets/index.js`) qui cherchent les fichiers à la racine du domaine (`https://<username>.github.io/assets/...`) au lieu du sous-dossier du dépôt GitHub (`https://<username>.github.io/<nom-du-repo>/assets/...`), provoquant des erreurs 404 sur les fichiers JS et CSS.

### Correctifs appliqués :
1. **Chemins relatifs configurés (`base: './'`)** dans `vite.config.ts` : les fichiers et scripts sont maintenant chargés relativement (`./assets/...`), fonctionnant à la fois sur la racine ou sur un sous-dossier GitHub Pages.
2. **Fichier `.nojekyll`** ajouté dans `public/` : empêche GitHub d'exécuter le moteur Jekyll qui bloquait certains dossiers et scripts.
3. **Fichier `404.html`** ajouté dans `public/` : gère les redirections SPA automatiques pour que recharger la page ou accéder à un lien ne provoque pas d'erreur 404.
4. **Workflow automatique GitHub Actions (`.github/workflows/deploy.yml`)** : compile et déploie automatiquement le site à chaque push sur `main` ou `master`.

---

## ⚙️ Comment activer GitHub Pages sur votre dépôt GitHub

1. Allez sur votre dépôt GitHub.
2. Cliquez sur l'onglet **Settings** (Paramètres) > **Pages** (dans le menu de gauche).
3. Dans la section **Build and deployment** :
   - **Source** : Sélectionnez **GitHub Actions**.
4. Le workflow inclus dans `.github/workflows/deploy.yml` va automatiquement compiler le projet et publier le site.
5. Votre site sera accessible à : `https://<votre-compte>.github.io/<nom-du-repo>/` sans aucun écran blanc !

---

## 🛠️ Commandes locales

- `npm install` : Installer les dépendances
- `npm run dev` : Lancer le serveur de développement local (port 3000)
- `npm run build` : Compiler pour la production (dans le dossier `dist/`)
