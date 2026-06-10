/**
 * @file cv.js
 * @description Rendu dynamique du CV au format Verso — Paper CV (letterpress).
 * @version 0.2.0
 */

/** @constant {string} Version de l'application CV. */
const APP_VERSION = '0.2.0';

/**
 * Données du CV — modifier ce bloc pour personnaliser le contenu.
 * @type {CvData}
 */
const cvData = {
  nom: 'Yohann Munsch',
  titre: 'Architecte logiciel, développeur d\'applications',
  initiales: 'YM',
  contact: {
    email: 'yohann.munsch@gmail.com',
    tel: '+33 6 80 01 01 79',
    lieu: 'Savigny, France',
    linkedin: null,
    github: null,
    site: null
  },
  profil:
    'Architecte logiciel et développeur d\'applications, titulaire du titre RNCP de niveau 7 (Epitech Nancy). Chez LapilleDev, j\'ai conçu et maintenu des applications web et mobiles de bout en bout — API REST, bases MySQL et MongoDB, déploiement Docker/Kubernetes et pipelines CI/CD. J\'allie rigueur technique, documentation claire et sens du produit.',
  competences: [
    {
      theme: 'Backend & API',
      skills: ['Express', 'Java', 'Symfony']
    },
    {
      theme: 'Mobile',
      skills: ['Android', 'Flutter']
    },
    {
      theme: 'Frontend',
      skills: ['CSS', 'HTML']
    },
    {
      theme: 'Bases de données',
      skills: ['MongoDB', 'MySQL']
    },
    {
      theme: 'DevOps & infra',
      skills: ['Apache', 'ArgoCD', 'CI/CD', 'Docker', 'Firebase', 'Kubernetes', 'Linux', 'Nginx']
    },
    {
      theme: 'Outils',
      skills: ['Figma', 'Git', 'GitHub', 'Lens']
    }
  ],
  competencesPrincipales: ['Symfony', 'Flutter', 'Kubernetes'],
  experiences: [
    {
      poste: 'Architecte logiciel / Développeur d\'applications',
      entreprise: 'LapilleDev',
      entrepriseUrl: null,
      date: 'Sept. 2022 – 2026',
      lieu: 'Alternance puis CDI',
      description: null,
      projets: [
        'Pilotage du projet GEN et développement d\'applications web et mobiles en autonomie',
        'Rédaction de documentation technique et support utilisateur',
        'Administration de serveurs Linux, Apache et Nginx',
        'Gestion et optimisation de bases de données MySQL et MongoDB',
        'Suivi des déploiements en production et des évolutions applicatives'
      ]
    },
    {
      poste: 'Développeur Java Android (intérimaire)',
      entreprise: 'S.C.E.I.',
      entrepriseUrl: null,
      date: 'Juin 2020 – Sept. 2022',
      lieu: 'Charmes',
      description: null,
      projets: [
        'Création d\'une application Android en Java pour récupérer fichiers et documents techniques sur un réseau privé',
        'Travail et organisation en autonomie complète',
        'Formation des équipes à l\'utilisation de l\'application',
        'Déploiement de l\'application sur le Google Play Store'
      ]
    }
  ],
  formations: [
    {
      diplome: 'Titre RNCP de niveau 7 : ARCHITECTE LOGICIEL, DEVELOPPEUR D\'APPLICATIONS',
      ecole: 'Epitech Technology',
      date: '2022 – 2025',
      lieu: 'Nancy',
      details: null,
      points: [
        'Projets tutorés en conditions réelles, avec des enjeux concrets',
        'Études de cas et veille technologique',
        'Frameworks et technologies alignés sur les pratiques en entreprise'
      ]
    },
    {
      diplome: 'BTS SNIR',
      ecole: 'Lycée Henry Loritz',
      date: '2020 – 2022',
      lieu: 'Nancy',
      details: null,
      points: [
        'Réseaux informatiques et télécommunications',
        'Développement web : HTML et CSS',
        'Programmation orientée objet : C, C++, C# et Java',
        'Hardware, protocoles de communication et manipulation de matériel Raspberry Pi'
      ]
    }
  ],
  projets: [
    {
      nom: 'GEN Project — LapilleDev',
      sousTitre: 'Plateforme SaaS e-commerce et CMS',
      url: null,
      points: [
        'Centralisation des données métier sur une plateforme web et mobile',
        'Parcours e-commerce, CMS, gestion utilisateurs et personnalisation client',
        'Services temps réel et synchronisation multi-clients',
        'Stack Symfony, Flutter et Firebase sur Docker et Kubernetes',
        'Pipelines CI/CD et déploiements via ArgoCD'
      ]
    },
    {
      nom: 'RS525 Project — LapilleDev',
      sousTitre: 'API de facturation réglementaire',
      url: null,
      points: [
        'Conception et implémentation d\'une API conforme à la réglementation RS525'
      ]
    },
    {
      nom: 'Infrastructure Project — LapilleDev',
      sousTitre: 'Fiabilisation des outils de production',
      url: null,
      points: [
        'Sauvegardes automatiques des applications après chaque mise à jour',
        'Organisation des serveurs pour faire tourner les services de façon stable',
        'Mises en production sans coupure pour les utilisateurs',
        'Suivi continu pour vérifier que tout fonctionne correctement'
      ]
    },
    {
      nom: 'Application mobile de documentation technique — S.C.E.I.',
      sousTitre: 'Formation sur la chaîne de production',
      url: null,
      points: [
        'Génération de PDF',
        'Mises à jour automatisées',
        'Lecture d\'arborescence de fichiers distants'
      ]
    },
    {
      nom: 'Générateur de formulaires conformité — S.C.E.I.',
      sousTitre: 'Automatisation des formulaires métier',
      url: null,
      points: [
        'Formulaires dynamiques adaptés à chaque produit pour la conformité client'
      ]
    }
  ],
  langues: [
    { nom: 'Français', niveau: 'Langue maternelle' },
    { nom: 'Anglais', niveau: 'Niveau A2' }
  ],
  interets: ['Hardware', 'Jeux vidéo', 'Lecture de manga'],
  disponibilite: 'Je recherche un poste de développeur junior en développement mobile, avec une forte marge d\'évolution.'
};

/**
 * @typedef {Object} CvContact
 * @property {string} email
 * @property {string} tel
 * @property {string|null} lieu
 * @property {string|null} linkedin
 * @property {string|null} github
 * @property {string|null} site
 */

/**
 * @typedef {Object} CvExperience
 * @property {string} poste
 * @property {string} entreprise
 * @property {string|null} entrepriseUrl
 * @property {string} date
 * @property {string|null} lieu
 * @property {string|null} description
 * @property {string[]|null} projets
 */

/**
 * @typedef {Object} CvFormation
 * @property {string} diplome
 * @property {string} ecole
 * @property {string} date
 * @property {string|null} lieu
 * @property {string|null} details - Détail court (une puce).
 * @property {string[]|null} points - Plusieurs points de détail.
 */

/**
 * @typedef {Object} CvProjet
 * @property {string} nom
 * @property {string|null} sousTitre - Sous-titre ou accroche (ex. type de plateforme).
 * @property {string|null} description - Description courte (projet simple, une puce).
 * @property {string[]|null} points - Liste de réalisations (projet détaillé).
 * @property {string|null} url
 */

/**
 * @typedef {Object} CvLangue
 * @property {string} nom
 * @property {string} niveau
 */

/**
 * @typedef {Object} CvCompetenceGroup
 * @property {string} theme - Libellé de la thématique (petites capitales à l'affichage).
 * @property {string[]} skills - Compétences associées à la thématique.
 */

/**
 * @typedef {Object} CvData
 * @property {string} nom
 * @property {string} titre
 * @property {string|null} initiales
 * @property {CvContact} contact
 * @property {string} profil
 * @property {CvCompetenceGroup[]} competences
 * @property {string[]|null} competencesPrincipales
 * @property {CvExperience[]} experiences
 * @property {CvFormation[]} formations
 * @property {CvProjet[]|null} projets
 * @property {CvLangue[]|null} langues
 * @property {string[]|null} interets
 * @property {string|null} disponibilite
 */

/**
 * Échappe les caractères HTML pour éviter les injections XSS.
 * @param {string} text - Texte brut à sécuriser.
 * @returns {string} Texte échappé pour insertion HTML.
 */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Extrait les initiales à partir du nom complet.
 * @param {string} nom - Nom complet (ex. « Jean Dupont »).
 * @returns {string} Initiales en majuscules (ex. « JD »).
 */
function getInitials(nom) {
  return nom
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

/**
 * Normalise une URL en ajoutant le protocole si absent.
 * @param {string} url - URL ou chemin relatif.
 * @returns {string} URL absolue avec protocole https.
 */
function toAbsoluteUrl(url) {
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url.replace(/^\/+/, '')}`;
}

/**
 * Génère l'en-tête de section Verso (ordinal + label + règle).
 * @param {string} ordinal - Numéro de section (ex. « 00 », « 01 »).
 * @param {string} label - Libellé en petites capitales.
 * @returns {string} Fragment HTML de l'en-tête de section.
 */
function renderSectionHead(ordinal, label) {
  return `
    <div class="sec-head">
      <span class="ord">${escapeHtml(ordinal)}</span>
      <span class="lbl">${escapeHtml(label)}</span>
      <span class="line"></span>
    </div>
  `;
}

/**
 * Rend une entrée d'expérience professionnelle.
 * @param {CvExperience} exp - Données d'une expérience.
 * @returns {string} Fragment HTML `<article class="entry">`.
 */
function renderExperience(exp) {
  const orgContent = exp.entrepriseUrl
    ? `<a href="${escapeHtml(toAbsoluteUrl(exp.entrepriseUrl))}" target="_blank" rel="noopener">${escapeHtml(exp.entreprise)}</a>`
    : escapeHtml(exp.entreprise);

  const bullets = [];
  if (exp.description) bullets.push(exp.description);
  if (exp.projets?.length) bullets.push(...exp.projets);

  const listHtml = bullets.length
    ? `<ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  const lieuHtml = exp.lieu
    ? `<div class="loc">${escapeHtml(exp.lieu)}</div>`
    : '';

  return `
    <article class="entry">
      <div>
        <h3>${escapeHtml(exp.poste)}</h3>
        <div class="org">${orgContent}</div>
      </div>
      <div class="when">
        <div class="d">${escapeHtml(exp.date)}</div>
        ${lieuHtml}
      </div>
      ${listHtml}
    </article>
  `;
}

/**
 * Rend une entrée de formation.
 * @param {CvFormation} formation - Données d'une formation.
 * @returns {string} Fragment HTML `<article class="entry">`.
 */
function renderFormation(formation) {
  const bullets = formation.points?.length
    ? formation.points
    : formation.details
      ? [formation.details]
      : [];

  const listHtml = bullets.length
    ? `<ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  const lieuHtml = formation.lieu
    ? `<div class="loc">${escapeHtml(formation.lieu)}</div>`
    : '';

  return `
    <article class="entry">
      <div>
        <h3>${escapeHtml(formation.diplome)}</h3>
        <div class="org" style="font-style:italic">${escapeHtml(formation.ecole)}</div>
      </div>
      <div class="when">
        <div class="d">${escapeHtml(formation.date)}</div>
        ${lieuHtml}
      </div>
      ${listHtml}
    </article>
  `;
}

/**
 * Rend une entrée de projet personnel.
 * @param {CvProjet} projet - Données d'un projet.
 * @returns {string} Fragment HTML `<article class="entry">`.
 */
function renderProjet(projet) {
  const orgHtml = projet.url
    ? `<div class="org"><a href="${escapeHtml(projet.url)}" target="_blank" rel="noopener">${escapeHtml(projet.url.replace(/^https?:\/\//, ''))}</a></div>`
    : projet.sousTitre
      ? `<div class="org" style="font-style:italic">${escapeHtml(projet.sousTitre)}</div>`
      : '';

  const bullets = projet.points?.length
    ? projet.points
    : projet.description
      ? [projet.description]
      : [];

  const listHtml = bullets.length
    ? `<ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  return `
    <article class="entry entry--projet">
      <div class="entry__head">
        <h3 class="entry__title">${escapeHtml(projet.nom)}</h3>
        ${orgHtml}
      </div>
      ${listHtml}
    </article>
  `;
}

/**
 * Rend la colonne latérale « Contact ».
 * @param {CvContact} contact - Coordonnées.
 * @returns {string} Fragment HTML de la section contact.
 */
function renderContactSection(contact) {
  const rows = [];

  if (contact.email) {
    rows.push(`
      <a class="contact-row" href="mailto:${escapeHtml(contact.email)}">
        <i class="ph-light ph-envelope-simple"></i>${escapeHtml(contact.email)}
      </a>
    `);
  }

  if (contact.tel) {
    const telHref = contact.tel.replace(/\s+/g, '');
    rows.push(`
      <a class="contact-row" href="tel:${escapeHtml(telHref)}">
        <i class="ph-light ph-phone"></i>${escapeHtml(contact.tel)}
      </a>
    `);
  }

  if (contact.lieu) {
    rows.push(`
      <span class="contact-row">
        <i class="ph-light ph-map-pin"></i>${escapeHtml(contact.lieu)}
      </span>
    `);
  }

  if (contact.linkedin) {
    const url = toAbsoluteUrl(contact.linkedin);
    rows.push(`
      <a class="contact-row" href="${escapeHtml(url)}" target="_blank" rel="noopener">
        <i class="ph-light ph-linkedin-logo"></i>${escapeHtml(contact.linkedin.replace(/^https?:\/\//, ''))}
      </a>
    `);
  }

  if (contact.github) {
    const url = toAbsoluteUrl(contact.github);
    rows.push(`
      <a class="contact-row" href="${escapeHtml(url)}" target="_blank" rel="noopener">
        <i class="ph-light ph-github-logo"></i>${escapeHtml(contact.github.replace(/^https?:\/\//, ''))}
      </a>
    `);
  }

  if (contact.site) {
    const url = toAbsoluteUrl(contact.site);
    rows.push(`
      <a class="contact-row" href="${escapeHtml(url)}" target="_blank" rel="noopener">
        <i class="ph-light ph-globe-simple"></i>${escapeHtml(contact.site.replace(/^https?:\/\//, ''))}
      </a>
    `);
  }

  return `
    <section>
      <span class="lbl">Contact</span>
      ${rows.join('')}
    </section>
  `;
}

/**
 * Trie une liste de libellés par ordre alphabétique (locale fr).
 * @param {string[]} items - Éléments à trier.
 * @returns {string[]} Copie triée.
 */
function sortAlphabetically(items) {
  return [...items].sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
}

/**
 * Rend une liste de tags de compétences.
 * @param {string[]} skills - Compétences à afficher.
 * @param {string[]} highlighted - Compétences mises en avant (classe `.on`).
 * @returns {string} Fragment HTML des tags.
 */
function renderSkillTags(skills, highlighted) {
  return skills
    .map((skill) => {
      const isOn = highlighted.includes(skill) ? ' on' : '';
      return `<span class="tag${isOn}">${escapeHtml(skill)}</span>`;
    })
    .join('');
}

/**
 * Extrait toutes les compétences depuis les groupes thématiques.
 * @param {CvCompetenceGroup[]} groups - Groupes de compétences.
 * @returns {string[]} Liste aplatie des compétences.
 */
function flattenCompetences(groups) {
  return groups.flatMap((group) => group.skills);
}

/**
 * Rend les compétences regroupées par thématique.
 * @param {CvCompetenceGroup[]} groups - Groupes thématiques.
 * @param {string[]|null} principales - Compétences mises en avant (classe `.on`).
 * @returns {string} Fragment HTML de la section compétences.
 */
function renderCompetencesSection(groups, principales) {
  const allSkills = flattenCompetences(groups);
  const highlighted = principales ?? allSkills.slice(0, 3);

  const groupHtml = groups
    .map((group) => `
      <div class="skill-group">
        <span class="skill-group__theme">${escapeHtml(group.theme)}</span>
        <div class="tags">${renderSkillTags(sortAlphabetically(group.skills), highlighted)}</div>
      </div>
    `)
    .join('');

  return `
    <section>
      <span class="lbl">Compétences</span>
      <div class="skill-groups">${groupHtml}</div>
    </section>
  `;
}

/**
 * Rend la liste des langues.
 * @param {CvLangue[]} langues - Langues et niveaux.
 * @returns {string} Fragment HTML de la section langues.
 */
function renderLanguesSection(langues) {
  const items = langues
    .map((langue, index) => {
      const borderStyle = index === langues.length - 1 ? ' style="border-bottom:0"' : '';
      return `
        <div class="lang"${borderStyle}>
          <span>${escapeHtml(langue.nom)}</span>
          <span class="lvl">${escapeHtml(langue.niveau)}</span>
        </div>
      `;
    })
    .join('');

  return `
    <section>
      <span class="lbl">Langues</span>
      ${items}
    </section>
  `;
}

/**
 * Rend les centres d'intérêt sous forme de tags.
 * @param {string[]} interets - Liste des centres d'intérêt.
 * @returns {string} Fragment HTML de la section centres d'intérêt.
 */
function renderInteretsSection(interets) {
  const tags = sortAlphabetically(interets)
    .map((interet) => `<span class="tag">${escapeHtml(interet)}</span>`)
    .join('');

  return `
    <section>
      <span class="lbl">Centres d'intérêt</span>
      <div class="tags">${tags}</div>
    </section>
  `;
}

/**
 * Rend le bloc latéral « Disponibilité ».
 * @param {string} message - Texte de disponibilité.
 * @returns {string} Fragment HTML du callout.
 */
function renderDisponibiliteSection(message) {
  return `
    <section>
      <div class="note">
        <span class="lbl">Disponibilité</span>
        <p>${escapeHtml(message)}</p>
      </div>
    </section>
  `;
}

/**
 * Boutons de sélection d'encre (oxblood, navy, forest).
 * @param {string} extraClass - Classe CSS additionnelle sur chaque pastille.
 * @returns {string} Fragment HTML des pastilles d'encre.
 */
function renderInkSwatches(extraClass) {
  const cls = extraClass ? ` swatch ${extraClass}` : ' swatch';
  return `
    <button class="${cls.trim()}" data-ink="oxblood" aria-pressed="true"
      style="background:#7a2e22;color:#7a2e22" title="Oxblood" type="button"></button>
    <button class="${cls.trim()}" data-ink="navy" aria-pressed="false"
      style="background:#1f3a5f;color:#1f3a5f" title="Navy" type="button"></button>
    <button class="${cls.trim()}" data-ink="forest" aria-pressed="false"
      style="background:#3d5a40;color:#3d5a40" title="Forest" type="button"></button>
  `;
}

/**
 * Barre de contrôle web (encre horizontale + téléchargement).
 * @returns {string} Fragment HTML des contrôles desktop.
 */
function renderControlsWeb() {
  return `
    <div class="controls controls--web">
      <div class="press-switch">
        <span class="lbl">Encre</span>
        ${renderInkSwatches('')}
      </div>
      <button class="btn-dl btn-print" type="button">
        <i class="ph-bold ph-download-simple"></i>Télécharger le CV
      </button>
    </div>
  `;
}

/**
 * Contrôles compacts tablette / mobile : pastilles empilées + bouton flottant.
 * @returns {string} Fragment HTML des contrôles compacts.
 */
function renderControlsCompact() {
  return `
    <div class="controls-stack" aria-label="Encre et téléchargement">
      <div class="ink-stack">
        ${renderInkSwatches('swatch--stack')}
      </div>
      <button class="btn-dl btn-dl--compact btn-print" type="button">
        <i class="ph-bold ph-download-simple"></i>
        <span class="btn-dl__label">Télécharger</span>
      </button>
    </div>
  `;
}

/**
 * Assemble et injecte le CV complet dans le DOM.
 * @param {CvData} data - Données du CV à afficher.
 * @returns {void}
 */
function renderCV(data) {
  const root = document.getElementById('cv-root');
  if (!root) return;

  const initiales = data.initiales ?? getInitials(data.nom);
  const annee = new Date().getFullYear();

  const experiencesHtml = data.experiences.map(renderExperience).join('');
  const formationsHtml = data.formations.map(renderFormation).join('');
  const projetsHtml = data.projets?.length
    ? `
      <section>
        ${renderSectionHead('03', 'Projets')}
        ${data.projets.map(renderProjet).join('')}
      </section>
    `
    : '';

  const railSections = [
    renderContactSection(data.contact),
    renderCompetencesSection(data.competences, data.competencesPrincipales),
    data.langues?.length ? renderLanguesSection(data.langues) : '',
    data.interets?.length ? renderInteretsSection(data.interets) : '',
    data.disponibilite ? renderDisponibiliteSection(data.disponibilite) : ''
  ].join('');

  root.innerHTML = `
    ${renderControlsWeb()}
    ${renderControlsCompact()}
    <article class="paper sheet">
      <header class="masthead">
        <div>
          <h1 class="name">${escapeHtml(data.nom)}</h1>
          <p class="role-line">${escapeHtml(data.titre)}</p>
        </div>
        <div class="mono" aria-hidden="true">${escapeHtml(initiales)}</div>
      </header>

      <div class="layout">
        <div class="layout-main">
          <main class="main-scroll">
            <section>
              ${renderSectionHead('00', 'Profil')}
              <p class="lead">${escapeHtml(data.profil)}</p>
            </section>

            <section>
              ${renderSectionHead('01', 'Expérience')}
              ${experiencesHtml}
            </section>

            <section>
              ${renderSectionHead('02', 'Formation')}
              ${formationsHtml}
            </section>

            ${projetsHtml}
          </main>
        </div>

        <aside class="rail rail-strip">
          ${railSections}
        </aside>
      </div>

      <div class="colophon">
        <span>Typographie Cormorant &amp; EB Garamond · design Verso</span>
        <span>Curriculum Vitæ · ${escapeHtml(String(annee))} · v${escapeHtml(APP_VERSION)}</span>
      </div>
    </article>
  `;

  initInkSwitcher(root);
  initPrintButton();
}

/**
 * Active le sélecteur de couleur d'encre (oxblood, navy, forest).
 * @param {HTMLElement} root - Conteneur `.desk-wrap` porteur des classes d'encre.
 * @returns {void}
 */
function initInkSwitcher(root) {
  root.querySelectorAll('.swatch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ink = btn.dataset.ink;
      root.classList.remove('ink-oxblood', 'ink-navy', 'ink-forest');
      root.classList.add(`ink-${ink}`);
      root.querySelectorAll('.swatch').forEach((swatch) => {
        swatch.setAttribute('aria-pressed', String(swatch === btn));
      });
    });
  });
}

/**
 * Lie le bouton « Télécharger le CV » à l'impression navigateur (PDF).
 * @returns {void}
 */
function initPrintButton() {
  document.querySelectorAll('.btn-print').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });
}

/**
 * Point d'entrée : rend le CV dès que le DOM est prêt.
 * @returns {void}
 */
function initCV() {
  renderCV(cvData);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCV);
} else {
  initCV();
}
