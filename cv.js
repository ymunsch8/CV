/**
 * @file cv.js
 * @description Rendu dynamique du CV au format Verso — Paper CV (letterpress).
 * @version 0.1.5
 */

/** @constant {string} Version de l'application CV. */
const APP_VERSION = '0.1.5';

/**
 * Données du CV — modifier ce bloc pour personnaliser le contenu.
 * @type {CvData}
 */
const cvData = {
  nom: 'Yohann Munsch',
  titre: 'Développeur d\'applications — MSc Pro Epitech',
  initiales: 'YM',
  contact: {
    email: 'yohann.munsch@epitech.eu',
    tel: '+33 6 73 45 41 01',
    lieu: 'Nancy, France',
    linkedin: null,
    github: null,
    site: null
  },
  profil:
    'Développeur d\'applications chez LapilleDev en alternance puis CDI, je conçois et maintiens des applications web et mobiles de bout en bout. J\'interviens sur les API REST, les bases MySQL, le déploiement Docker/Kubernetes et les pipelines CI/CD. Titulaire du MSc Pro à Epitech Nancy, j\'allie rigueur technique, documentation claire et sens du produit.',
  competences: [
    'PHP', 'Symfony', 'Dart', 'Flutter', 'MySQL',
    'Docker', 'Kubernetes', 'Git', 'GitHub',
    'Linux', 'Apache', 'Firebase', 'CI/CD',
    'API REST', 'DevOps', 'Java', 'Android', 'HTML', 'CSS'
  ],
  competencesPrincipales: ['Symfony', 'Flutter', 'Docker'],
  experiences: [
    {
      poste: 'Développeur d\'applications',
      entreprise: 'LapilleDev',
      entrepriseUrl: null,
      date: 'Sept. 2022 – Présent',
      lieu: 'Alternance puis CDI',
      description: null,
      projets: [
        'Développement et maintenance d\'applications web et mobiles',
        'Conception et développement d\'API REST',
        'Administration et déploiement d\'applications avec Docker et Kubernetes',
        'Mise en place et automatisation de pipelines CI/CD',
        'Gestion et optimisation de bases de données MySQL',
        'Intégration de services cloud et Firebase',
        'Configuration et administration de serveurs Linux et Apache',
        'Rédaction de documentation technique et support utilisateur',
        'Participation à la conception d\'architectures logicielles et infrastructures',
        'Gestion des déploiements en production et des évolutions applicatives'
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
      diplome: 'MSc Pro — Epitech Technology',
      ecole: 'Epitech Technology',
      date: '2022 – 2025',
      lieu: 'Nancy',
      details: 'Diplôme obtenu. Programme MSc Pro, pédagogie active, développement software.'
    },
    {
      diplome: 'BTS SNIR',
      ecole: 'Lycée Henry Loritz',
      date: '2020 – 2022',
      lieu: 'Nancy',
      details: 'Systèmes numériques, option informatique et réseaux. Projet informatique : application web et mobile.'
    },
    {
      diplome: 'Bac Pro MELEC',
      ecole: 'Lycée Pierre Mendès France',
      date: '2017 – 2020',
      lieu: 'Épinal',
      details: 'Métier de l\'électricité et environnements connectés. Six stages en entreprise.'
    }
  ],
  projets: [
    {
      nom: 'Générateur de formulaire de conformité client',
      description: 'Conception algorithmique d\'un générateur de formulaires pour S.C.E.I.',
      url: null
    },
    {
      nom: 'CV digital',
      description: 'Création d\'un CV interactif en HTML, Materialize et CSS.',
      url: null
    },
    {
      nom: 'Application Java orientée objet',
      description: 'Dialogue au sein d\'une application Java connectée à une base de données et un serveur.',
      url: null
    },
    {
      nom: 'Bases de données MariaDB',
      description: 'Conception et administration de bases MariaDB (Wamp, Lamp, Xamp).',
      url: null
    }
  ],
  langues: [
    { nom: 'Français', niveau: 'Langue maternelle' },
    { nom: 'Anglais', niveau: 'Niveau A2' }
  ],
  interets: ['Lecture de manga', 'Jeux vidéo', 'Hardware'],
  disponibilite: null
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
 * @property {string|null} details
 */

/**
 * @typedef {Object} CvProjet
 * @property {string} nom
 * @property {string} description
 * @property {string|null} url
 */

/**
 * @typedef {Object} CvLangue
 * @property {string} nom
 * @property {string} niveau
 */

/**
 * @typedef {Object} CvData
 * @property {string} nom
 * @property {string} titre
 * @property {string|null} initiales
 * @property {CvContact} contact
 * @property {string} profil
 * @property {string[]} competences
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
  const detailsHtml = formation.details
    ? `<ul><li>${escapeHtml(formation.details)}</li></ul>`
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
      ${detailsHtml}
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
    : '';

  return `
    <article class="entry">
      <div>
        <h3>${escapeHtml(projet.nom)}</h3>
        ${orgHtml}
      </div>
      <ul><li>${escapeHtml(projet.description)}</li></ul>
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
 * Rend les tags de compétences.
 * @param {string[]} competences - Liste complète des compétences.
 * @param {string[]|null} principales - Compétences mises en avant (classe `.on`).
 * @returns {string} Fragment HTML de la section compétences.
 */
function renderCompetencesSection(competences, principales) {
  const highlighted = principales ?? competences.slice(0, 3);

  const tags = competences
    .map((skill) => {
      const isOn = highlighted.includes(skill) ? ' on' : '';
      return `<span class="tag${isOn}">${escapeHtml(skill)}</span>`;
    })
    .join('');

  return `
    <section>
      <span class="lbl">Compétences</span>
      <div class="tags">${tags}</div>
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
  const tags = interets
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
 * Rend la barre de contrôle (encre + téléchargement PDF via impression).
 * @returns {string} Fragment HTML des contrôles.
 */
function renderControls() {
  return `
    <div class="controls">
      <div class="press-switch">
        <span class="lbl">Encre</span>
        <button class="swatch" data-ink="oxblood" aria-pressed="true"
          style="background:#7a2e22;color:#7a2e22" title="Oxblood" type="button"></button>
        <button class="swatch" data-ink="navy" aria-pressed="false"
          style="background:#1f3a5f;color:#1f3a5f" title="Navy" type="button"></button>
        <button class="swatch" data-ink="forest" aria-pressed="false"
          style="background:#3d5a40;color:#3d5a40" title="Forest" type="button"></button>
      </div>
      <button class="btn-dl" type="button" id="btn-print">
        <i class="ph-bold ph-download-simple"></i>Télécharger le CV
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
    ${renderControls()}
    <article class="paper sheet">
      <header class="masthead">
        <div>
          <h1 class="name">${escapeHtml(data.nom)}</h1>
          <p class="role-line">${escapeHtml(data.titre)}</p>
        </div>
        <div class="mono" aria-hidden="true">${escapeHtml(initiales)}</div>
      </header>

      <div class="grid">
        <main>
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

        <aside class="rail">
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
  const btn = document.getElementById('btn-print');
  if (btn) btn.addEventListener('click', () => window.print());
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
