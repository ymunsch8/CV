# Règles du projet CV

## Stack

- Site statique HTML + JavaScript vanilla, sans build ni framework.
- Design system : **Verso — Paper CV** (`Verso — Paper CV/`), style letterpress / papier vieilli.
- Données et rendu : `cv.js` (objet `cvData` + fonctions de rendu).
- Styles page : `Verso — Paper CV/styles.css` (tokens) + `res/styles/cv.css` (layout CV).

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

## Versionnement

- Version courante du projet : **0.1.5** (`VERSION`, meta `application-version`, constante `APP_VERSION` dans `cv.js`).
- Mettre à jour `CHANGELOG.md` à chaque nouvelle version publiée.

## Langue

- Interface et contenu du CV en **français**.
- Réponses de l'agent Cursor en **français**.

## Lancement local

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080/`.
