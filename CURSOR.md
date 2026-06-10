# Règles du projet CV

## Stack

- Site statique HTML + JavaScript vanilla, sans build ni framework.
- Design system : **Verso — Paper CV** (`Verso — Paper CV/`), style letterpress / papier vieilli.
- Données et rendu : `cv.js` (objet `cvData` + fonctions de rendu).
- Styles : `res/styles/cv.css` (commun) + `web.css` / `tablet.css` / `mobile.css` (mises en page).

## Mises en page responsive

| Support | Breakpoint | Comportement |
|---------|------------|--------------|
| **Web** | ≥ 1025px | Format classique : feuille centrée, grille profil/expériences + rail latéral, barre d'encre horizontale. |
| **Tablette** | 601 – 1024px | Colonne gauche scrollable (profil, expériences, formations) ; bande fixe à droite (contact, compétences). Contrôles empilés (encre + téléchargement). |
| **Mobile** | ≤ 600px | Un seul flux vertical scrollable. Contrôles flottants empilés en bas à droite. |

## Conventions de design (Verso)

- Utiliser les variables CSS du design system — ne pas hardcoder de couleurs hex.
- Typographie : Cormorant Garamond (display) + EB Garamond (corps), petites capitales pour les labels.
- Une seule couleur d'accent à la fois (oxblood par défaut, navy ou forest via `.ink-*`).
- Pas d'emoji, pas de MAJUSCULES pour les labels — petites capitales uniquement.
- Tirets cadratins (—) pour les puces et listes ; chiffres old-style pour les dates.

## Personnalisation du CV

- Modifier uniquement l'objet `cvData` dans `cv.js` pour changer le contenu.
- Les initiales sont calculées automatiquement ; `initiales` permet de les forcer.
- `competencesPrincipales` met en avant certaines compétences (bordure accent).
- `competences` est un tableau de groupes `{ theme, skills[] }`.
- Ne pas lister le langage si son framework est déjà présent (ex. Symfony sans PHP, Express sans Node.js, Flutter sans Dart).
- Les compétences de chaque groupe sont affichées par ordre alphabétique.
- Les centres d'intérêt sont affichés par ordre alphabétique.

## Versionnement

- Version courante du projet : **0.2.0** (`VERSION`, meta `application-version`, constante `APP_VERSION` dans `cv.js`).
- Mettre à jour `CHANGELOG.md` à chaque nouvelle version publiée.

## Langue

- Interface et contenu du CV en **français**.
- Réponses de l'agent Cursor en **français**.

## Lancement local

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080/`.
