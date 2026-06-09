# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

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
