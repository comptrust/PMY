# Groupe Scolaire Présentation de Marie — Yoff (Dakar)

Site web officiel bilingue (Français / Anglais) pour le **Groupe Scolaire Présentation de Marie de Yoff** (Crèche, Maternelle, Préscolaire et École Élémentaire du CP au CM2).

---

## 🚀 Résolution Définitive de l'Écran Blanc sur GitHub Pages

### Pourquoi l'écran s'affichait blanc ?
Il y a deux causes principales pour l'écran blanc sur GitHub Pages avec un projet React/Vite :
1. **Source mal configurée dans GitHub Pages** : Si GitHub Pages est laissé sur l'option par défaut *"Deploy from a branch"* avec le dossier racine `/`, GitHub sert le fichier `index.html` brut qui essaie de charger `/src/main.tsx`. Or, un navigateur ne peut pas exécuter du code TypeScript/JSX brut sans compilation.
2. **Chemins absolus des scripts et styles** : Par défaut, Vite génère `/assets/...` au lieu de chemins relatifs, ce qui échoue lorsque le site est hébergé dans un sous-dossier comme `https://<nom-utilisateur>.github.io/<nom-du-depot>/`.

---

### Solution en 1 clic sur GitHub (Recommandée) :

1. Ouvrez votre dépôt sur **GitHub.com**.
2. Cliquez sur l'onglet **Settings** (Paramètres) en haut.
3. Dans la colonne de gauche, cliquez sur **Pages**.
4. Sous la section **Build and deployment** :
   - Dans le menu déroulant **Source**, changez *"Deploy from a branch"* pour sélectionner **GitHub Actions**.
5. C'est tout ! Le workflow automatique déjà configuré dans `.github/workflows/deploy.yml` va compiler automatiquement le code TypeScript et déployer le dossier `dist/`.
6. Dès la fin de l'action (1 à 2 minutes), votre site s'affiche parfaitement à l'adresse fournie par GitHub.

---

### Alternative : Si vous préférez déployer depuis une branche (sans GitHub Actions)

1. Exécutez localement :
   ```bash
   npm run build
   ```
2. Dans GitHub **Settings > Pages > Source** :
   - Choisissez **Deploy from a branch**.
   - Sélectionnez la branche contenant le dossier compilé (`gh-pages` ou dossier `/dist`).

---

### Protections intégrées dans le code contre l'écran blanc :
- **Configuration `base: './'`** dans `vite.config.ts` : tous les chemins d'assets sont relatifs (`./assets/...`).
- **Composant `ErrorBoundary`** dans `src/components/ErrorBoundary.tsx` : intercepte toute exception JavaScript et affiche une interface de récupération au lieu d'un écran blanc.
- **Diagnostic et conteneur visuel dans `index.html`** : affiche un conteneur stylisé aux couleurs de l'école avec message explicatif en cas d'erreur de chargement.
- **Fichier `404.html`** dans `public/` : gestion automatique des redirections d'URL SPA.
- **Fichier `.nojekyll`** dans `public/` : désactivation de Jekyll sur GitHub Pages.

---

## 📚 Ressources Scolaires Incluses sur le Site

- **Listes des Fournitures 2026–2027** : Maternelle, Crèche et Élémentaire (CP, CE1, CE2, CM1, CM2) avec partenariat Librairie Clairafrique & Saint-Paul.
- **Guide Schoolmatik & Paiements** : Règlement des mensualités via Wave (0% frais), Orange Money et virement bancaire.
- **Calendrier Académique Officiel** : Rentrée, compositions, congés et examens du CFEE.
- **Règlement Intérieur & Charte de Vie Scolaire** : Code vestimentaire (uniforme bleu marine et blanc), fermeture des grilles à 07h45, et discipline.
- **Menu de la Cantine Scolaire** : Repas 100% Halal cuisinés sur place chaque jour.
- **Annales & Fiches de Révision CFEE** : Préparation au taux de réussite historique de 100%.

---

## 🛠️ Commandes Locales

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement (port 3000)
npm run dev

# Compiler le site pour la production
npm run build

# Prévisualiser la version de production localement
npm run preview
```
