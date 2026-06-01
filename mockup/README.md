# Maquette — Refonte Laberge Groupe Financier

Maquette **HTML/CSS statique** de la nouvelle interface (page d'accueil + composants),
produite pour **valider le parti pris visuel** avant toute intégration WordPress.

> ⚠️ Ceci n'est pas encore le site WordPress. C'est un prototype de validation.
> Logo et photos sont des **espaces réservés** à remplacer par les médias du site actuel.

---

## 1. Comment prévisualiser

Aucune dépendance, aucun build. Deux options :

- **Le plus simple** : ouvrir `mockup/index.html` dans un navigateur (Chrome, Safari, Firefox, Edge).
- **Recommandé** (pour des chemins corrects) : servir le dossier localement, p. ex.
  ```bash
  cd mockup
  python3 -m http.server 8080
  # puis ouvrir http://localhost:8080
  ```

Les polices se chargent via Google Fonts (connexion Internet requise lors de la prévisualisation).

---

## 2. Structure du code

```
mockup/
├── index.html                 Page d'accueil (sémantique, accessible)
├── assets/
│   ├── css/
│   │   ├── tokens.css         ★ Design tokens : couleurs, typo, espacements, rayons, ombres
│   │   ├── base.css           Reset léger, éléments natifs, conteneurs, utilitaires
│   │   ├── components.css     Boutons, en-tête, pied de page, cartes, formulaire, badges
│   │   └── layout.css         Sections de la page + breakpoints (mobile-first)
│   ├── js/
│   │   └── main.js            Menu mobile + année dynamique (vanilla, defer)
│   └── img/                   (vide — pour les vrais médias)
└── README.md
```

Ordre de chargement CSS : **tokens → base → composants → sections** (conforme au brief).
Tout le style consomme les variables de `tokens.css` : un seul endroit à modifier pour
ajuster la marque.

---

## 3. Design system appliqué

- **Couleur** : palette monochromatique bleu / gris, bleu signature `#283890`,
  déclinée en échelle (50→900) + gris neutres. CTA en bleu signature (accent unique et discret).
- **Style** : minimaliste, beaucoup d'espace blanc, hiérarchie typo forte, lignes nettes,
  ombres subtiles, micro-interactions sobres (survol de cartes, flèches de liens).
- **Espacements / rayons / ombres** : échelles centralisées et fluides (`clamp`).
- **Accessibilité** : structure sémantique, lien d'évitement, focus visibles, contrastes AA,
  navigation clavier, `prefers-reduced-motion`, libellés de formulaire.
- **Responsive** : mobile-first, menu hamburger sous 880 px.

---

## 4. Typographie — 3 combinaisons proposées (à choisir)

La maquette utilise actuellement l'**Option 1**. Pour tester une autre option, remplacer
les variables `--font-display` / `--font-body` dans `tokens.css` (et le `<link>` Google Fonts).

| # | Titres (display) | Corps (sans) | Caractère |
|---|------------------|--------------|-----------|
| **1 — recommandée (active)** | Source Serif 4 | Inter | Sérieux, éditorial, gravitas — inspire la confiance. Idéal cabinet patrimonial. |
| **2 — corporate** | Libre Franklin (700/800) | Inter | Net, moderne, très corporatif. Tout sans-serif. Proche du logo géométrique. |
| **3 — contemporain** | Fraunces (sobre) | Public Sans | Élégant et distinctif, légère personnalité. |

---

## 5. Points marqués pour validation / à compléter

- **Logo LGF** : placeholder texte → remplacer par le SVG officiel.
- **Logos Investia / PPI** : placeholders dans le pied de page.
- **Photos** : équipe, portraits, hero → récupérer du site actuel (réseau bloqué côté agent).
- **Outil de rendez-vous** : les CTA pointent vers `#contact`. Brancher Microsoft Bookings
  (ou autre) quand disponible — voir commentaire `À COMPLÉTER` dans `index.html`.
- **Conformité** (section 8 du brief) : tous les blocs `[MENTION LÉGALE À VALIDER PAR CONFORMITÉ]`
  (preuve sociale, mentions de pied de page, consentement Loi 25, affiliation Investia)
  doivent être rédigés/approuvés par la conformité du courtier. **Aucun chiffre de rendement,
  garantie ou témoignage n'a été inventé** — uniquement des espaces réservés `[À VALIDER]`.
- **Troisième membre d'équipe** : placeholder (la page actuelle n'a pas été entièrement captée).

---

## 6. Prochaines étapes (après validation du visuel)

1. Trancher l'**approche WordPress** (thème léger custom + Gutenberg recommandé vs Elementor vs FSE).
2. Récupérer les **vrais médias** + le **logo vectoriel** + les **mentions de conformité**.
3. Intégrer la page d'accueil dans WordPress, puis décliner les autres pages.
4. Tester à chaque étape : responsive, Lighthouse (≥ 90 mobile/desktop), WCAG 2.1 AA, liens/formulaires.
5. **Préserver le SEO** existant (URLs, redirections, métadonnées) — à auditer avant bascule.

> Garde-fous respectés : aucune modification de la production, aucun plugin touché,
> aucun contenu existant supprimé. Travail isolé dans `mockup/`.
