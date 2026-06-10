# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [0.2.0] - 2026-06-09

### Ajouté

- Contenu complet **Yohann Munsch** : profil, contact, expériences, formations, projets.
- Projets **LapilleDev** : GEN Project, RS525 Project, Infrastructure Project.
- Projets **S.C.E.I.** : documentation mobile, formulaires conformité.
- Compétences regroupées par thématique, tri alphabétique.
- Formations détaillées (RNCP niveau 7, BTS SNIR).
- Bloc **Disponibilité** (recherche poste junior mobile).
- Mises en page **Web**, **Tablette** et **Mobile** avec contrôles compacts empilés.

### Modifié

- Intitulé : architecte logiciel, développeur d'applications.
- Expérience LapilleDev clôturée (2022–2026), profil et projets harmonisés.
- Diplôme Epitech : titre RNCP niveau 7.
- Mise en forme uniforme des projets (titre, sous-titre, puces).

## [0.1.6] - 2026-06-09

### Ajouté

- Mises en page responsive **Web** (≥ 1025px), **Tablette** (601–1024px) et **Mobile** (≤ 600px).
- Tablette : colonne gauche scrollable (profil, expériences, formations) + bande fixe contact/compétences à droite.
- Mobile : flux vertical unique.
- Contrôles compacts empilés (pastilles d'encre superposées + bouton télécharger) sur tablette et mobile.

### Modifié

- Structure HTML `.layout` / `.layout-main` / `.rail-strip` dans `cv.js`.
- Feuilles `res/styles/web.css`, `tablet.css`, `mobile.css` + styles communs dans `cv.css`.

## [0.1.5] - 2026-06-09

### Ajouté

- CV dynamique au format **Verso — Paper CV** (letterpress, papier vieilli, typographie serif).
- Mise en page : feuille centrée, grille principale + colonne latérale, initiales, sélecteur d'encre et export PDF.
- Contenu personnalisé **Yohann Munsch** (formations Epitech, BTS, Bac Pro).
- Expérience **LapilleDev** (alternance puis CDI, sept. 2022 – présent) : web/mobile, API REST, Docker, Kubernetes, CI/CD, MySQL, Firebase, Linux.
- Expérience **S.C.E.I.** (développeur Java Android).
- Projets académiques et techniques ; rendu documenté dans `cv.js` (JSDoc).
- Fichiers `res/styles/cv.css`, `CURSOR.md`, `VERSION`.

### Modifié

- Profil, titre et compétences alignés sur Symfony, Flutter, DevOps.
- Formation Epitech : MSc Pro obtenu, sans mention réalité virtuelle.
- Compétences mises en avant : Symfony, Flutter, Docker.

### Corrigé

- Page blanche à la racine : chargement dynamique de `cv.js?v=0.1.5` pour contourner le cache navigateur (ancien `#cv-container`).

### Supprimé

- Anciennes feuilles CSS responsive (`mobile.css`, `tablet.css`, `web.css`).
- Stages électricien et bloc « Disponibilité » (poste en CDI).
