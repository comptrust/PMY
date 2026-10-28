/**
 * Dictionnaire bilingue Français / English pour le Groupe Scolaire Présentation de Marie de Yoff
 */

export type Language = 'fr' | 'en';

export const TRANSLATIONS = {
  fr: {
    // Header & Navigation
    schoolName: 'Groupe Scolaire Présentation de Marie',
    schoolSubtitle: 'Yoff · Dakar · Crèche, Maternelle & Élémentaire',
    year: 'Année 2026–2027',
    onecsAccreditation: 'ONECS Sénégal · N° 004128',
    openingHours: 'Lun - Ven : 08h00 - 12h30 | 14h30 - 17h00',
    nav: {
      home: 'Accueil',
      about: 'Qui sommes-nous ?',
      programmes: 'Programmes Éducatifs',
      admissions: 'Inscriptions & Tarifs',
      contact: 'Contact',
    },
    ctaAdmission: 'Inscriptions & Visite',
    langToggle: 'English',

    // Hero Section
    hero: {
      badge: 'INSTITUTION PRIVÉE CATHOLIQUE SOUS TUTELLE RELIGIEUSE',
      title: 'Grandir et apprendre ensemble dans un esprit de famille.',
      subtitle:
        'Bienvenue au Groupe Scolaire Présentation de Marie de Yoff. Une institution privée catholique dédiée à l\'excellence académique, l\'intégrité morale et le vivre-ensemble à Dakar.',
      btnPrograms: 'Découvrir nos programmes',
      btnAdmissions: 'Inscriptions & Simulateur',
      btnContact: "Contacter l'administration",
      motto: '« Soyons un Évangile ouvert » · « Mettons-nous ensemble et nous ferons l\'école »',
    },

    // Key figures
    stats: {
      cfee: '100% de Réussite',
      cfeeSub: 'Résultat historique au CFEE et Entrée en 6ème',
      age: 'Dès 2 ans et demi',
      ageSub: 'Accueil sécurisé en crèche et maternelle',
      community: '1 Communauté Unie',
      communitySub: 'Fraternité interreligieuse (chrétiens et musulmans)',
      results: '16 Années Consécutives',
      resultsSub: 'D\'excellence et de lauréats aux grands concours',
    },

    // Pillars
    pillars: {
      tag: 'Notre Projet Pédagogique',
      title: 'Nos Trois Piliers Éducatifs',
      p1Title: 'Excellence Académique',
      p1Desc:
        'Un enseignement rigoureux basé sur l\'Approche Par les Compétences (APC) du Sénégal garantissant une maîtrise approfondie des fondamentaux du CP au CM2.',
      p2Title: 'Valeurs & Discipline',
      p2Desc:
        'Le développement du caractère fondé sur le respect mutuel, l\'honnêteté, la charité chrétienne et le partage au cœur de notre vocation salésienne et riviériste.',
      p3Title: 'Esprit de Famille',
      p3Desc:
        'Un cadre sécurisant où parents et éducateurs collaborent activement pour l\'épanouissement intellectuel, affectif et spirituel de chaque enfant.',
    },

    // Mot de la Directrice
    directress: {
      tag: 'Mot de la Direction',
      title: '« Chaque enfant est unique »',
      quote:
        'À la Présentation de Marie, chaque enfant est unique. Notre mission est de lui offrir une base intellectuelle solide tout en lui transmettant les valeurs humaines qui feront de lui un citoyen responsable.',
      author: 'Sœur Onésima DIATTA',
      role: 'Directrice du Préscolaire',
      mensahRole: 'M. François Béni MENSAH · Directeur de l\'Élémentaire',
      mensahQuote:
        'Notre école prépare avec soin la transition vers le collège, avec un encadrement personnalisé, une cantine équilibrée 100% Halal et un service de transport adapté.',
    },

    // Home Teasers
    homeCyclesTeaser: {
      tag: 'Nos Niveaux d\'Enseignement',
      title: 'Un Enseignement Concentré sur les Fondamentaux',
      subtitle:
        'L\'établissement couvre exclusivement la Maternelle (Crèche, TPS, PS, MS, GS) et l\'École Élémentaire (du CP au CM2). Pas de cycle secondaire pour préserver la proximité et la chaleur humaine.',
      btnLearnMore: 'Consulter le détail des programmes',
    },

    homeAdmissionsTeaser: {
      tag: 'Inscriptions 2026–2027 Ouvertes',
      title: 'Préparez sereinement la rentrée scolaire de vos enfants',
      subtitle:
        'Accédez à notre simulateur de frais complet en FCFA, téléchargez la checklist des pièces officielles requises et consultez les règlements de cantine et transport.',
      btnCalculator: 'Accéder à l\'Espace Inscriptions & Tarifs',
    },

    // About Page
    about: {
      tag: 'Notre Identité & Histoire',
      title: 'Qui sommes-nous ?',
      identityHeading: 'Notre Identité',
      identityText:
        'Le Groupe Scolaire Présentation de Marie de Yoff est un établissement d\'enseignement privé catholique sous la tutelle religieuse de la Congrégation des Sœurs de la Présentation de Marie (fondée par Sainte Marie Rivier). Située à Yoff sur la route de l\'Aéroport en face de la cité ASECNA à Dakar, notre école s\'est forgée une solide réputation dans la formation de base des jeunes enfants.',
      missionHeading: 'Notre Mission & Vision',
      m1Title: 'Développement Intégral',
      m1Text:
        'Nous veillons à l\'évolution intellectuelle, psychologique, spirituelle et physique de chaque élève à travers un enseignement individualisé et bienveillant.',
      m2Title: 'Harmonie Interreligieuse',
      m2Text:
        'Profondément ancrée dans les valeurs chrétiennes, notre école accueille avec joie une large communauté d\'élèves musulmans, favorisant un climat exemplaire de respect mutuel et de dialogue fraternel.',
      m3Title: 'Maîtrise des Fondamentaux',
      m3Text:
        'Nous concentrons tous nos efforts sur les cycles préscolaire et élémentaire pour garantir les bases les plus solides et une transition réussie vers le collège.',
      teamHeading: 'Une Équipe Dévouée & Qualifiée',
      teamText:
        'L\'encadrement est assuré en synergie par les Sœurs de la Congrégation et une équipe pédagogique laïque chevronnée, sous la conduite de M. François Béni MENSAH (Élémentaire) et Sœur Onésima DIATTA (Préscolaire).',
    },

    // Programmes Page
    programmes: {
      tag: 'Cycles Préscolaire & Élémentaire',
      title: 'Programmes Éducatifs Officiels',
      subtitle:
        'Notre programme suit scrupuleusement les directives du Ministère de l\'Éducation Nationale du Sénégal, enrichi par une forte composante linguistique et citoyenne.',
      maternelleTitle: 'Cycle Maternelle (Petite, Moyenne et Grande Section dès 2 ans et demi)',
      maternelleIntro:
        'L\'enseignement est axé sur l\'éveil sensoriel, la socialisation, l\'autonomie et la préparation méticuleuse à l\'entrée au CP.',
      maternelleP1: 'Langage & Communication : Expression orale en français, enrichissement du vocabulaire, phonétique et initiation aux graphismes.',
      maternelleP2: 'Découverte du Monde : Structuration du temps et de l\'espace, manipulation des formes, grandeurs et premiers nombres.',
      maternelleP3: 'Activités Psychomotrices : Motricité fine (découpage, modelage), jeux collectifs, expression corporelle et équilibre.',
      maternelleP4: 'Activités Artistiques : Dessin, peinture, chant, comptines et créations manuelles.',
      maternelleP5: 'Vie Sociale : Apprentissage des règles de vie en communauté, de la politesse et du respect d\'autrui.',
      
      elementaireTitle: 'Cycle Élémentaire (Du CP au CM2 — Validation du CFEE)',
      elementaireIntro:
        'Mise en œuvre approfondie de l\'Approche Par les Compétences (APC) préparant les élèves à 100% de réussite au Certificat de Fin d\'Études Élémentaires.',
      elementaireP1: 'Langue & Communication : Apprentissage rigoureux de la lecture (CP/CE1), compréhension de texte, grammaire, conjugaison, orthographe et rédaction.',
      elementaireP2: 'Mathématiques : Maîtrise des 4 opérations, étude des nombres (entiers, décimaux, fractions), géométrie plane, mesures et résolution de problèmes de la vie courante.',
      elementaireP3: 'Sciences & Vie Sociale (ESVS) : Histoire du Sénégal et de l\'Afrique, géographie locale, sciences d\'observation (corps humain, hygiène, écosystème).',
      elementaireP4: 'Arts & Éducation Physique : Arts plastiques, créativité, et activités sportives cultivant l\'esprit d\'équipe.',
      elementaireP5: 'Anglais & Informatique : Initiation hebdomadaire précoce dispensée dès le Cours d\'Initiation (CI).',
      
      spiritualTitle: 'Spécificités : Le Projet Spirituel et Citoyen',
      catholicTitle: 'Pour les élèves catholiques',
      catholicDesc: 'Cours réguliers de catéchèse, éveil à la foi chrétienne, temps de prière et préparation aux sacrements de l\'Église.',
      otherFaithsTitle: 'Pour les élèves d\'autres confessions',
      otherFaithsDesc: 'Cours d\'Éducation Civique et Morale centrés sur les valeurs universelles, la fraternité sénégalaise, la citoyenneté et le respect de l\'autre.',
    },

    // Admissions Page
    admissions: {
      tag: 'Formalités & Simulateur 2026–2027',
      title: 'Inscriptions & Informations Pratiques',
      subtitle:
        'Un processus d\'inscription transparent. Consultez la procédure officielle, les pièces requises, les horaires et calculez instantanément votre budget scolarité.',
      procedureTitle: 'Procédure Officielle d\'Inscription',
      step1: '1. Demande de place : Contactez le secrétariat pour vérifier les places disponibles dans la section souhaitée.',
      step2: '2. Dépôt du dossier : Remise des pièces justificatives requises au bureau des inscriptions de Yoff.',
      step3: '3. Entretien / Évaluation : Un court entretien ou test de positionnement pour les admissions en élémentaire.',
      step4: '4. Finalisation : Règlement des frais d\'inscription à la caisse et remise des uniformes.',
      docsTitle: 'Pièces Officielles à Fournir',
      doc1: 'Un extrait de naissance original de l\'enfant (non scanné, non photocopié).',
      doc2: 'Une copie du carnet de vaccination/santé à jour (obligatoire pour les nouveaux).',
      doc3: 'Photos d\'identité récentes de l\'enfant (2 au primaire, 6 au préscolaire avec nom au dos).',
      doc4: 'Photos d\'identité du parent/tuteur pour la carte d\'accès sécurisée (4 au préscolaire).',
      doc5: 'Bulletins de notes de l\'année scolaire précédente (pour les transferts en élémentaire).',
      doc6: 'Certificat de scolarité de l\'établissement de provenance.',
      doc7: 'Extrait / certificat de baptême (pour les élèves de confession catholique).',
      hoursTitle: 'Horaires de l\'École',
      maternelleHours: 'Maternelle & Crèche : Du lundi au vendredi de 08h00 à 13h00 (garderie possible jusqu\'à 16h00).',
      elementaireHours: 'Élémentaire : Lun, Mar, Jeu, Ven de 08h00 à 16h00 (avec pause déjeuner et études). Mercredi : 08h00 à 13h00.',
    },

    // Contact Page
    contact: {
      tag: 'Localisation & Accueil',
      title: 'Contactez le Groupe Scolaire',
      subtitle:
        'Nos équipes administratives et pastorales vous accueillent avec joie à Yoff pour répondre à toutes vos interrogations.',
      addressTitle: 'Adresse Physique',
      addressVal: 'Route de l\'Aéroport Léopold Sédar Senghor (En face de la Cité ASECNA), Quartier Yoff Tonghor, Dakar, Sénégal.',
      plusCode: 'Plus Code Google Maps : PGX5+X35 Dakar',
      phonesTitle: 'Téléphones Secrétariat',
      elemPhone: 'École Élémentaire : +221 33 820 21 13 (Directeur : M. François Béni Mensah : 77 575 46 23)',
      prescPhone: 'Préscolaire & Crèche : +221 33 820 79 06 (Directrice : Sœur Onésima Diatta : 76 459 20 20)',
      transportPhone: 'Coordonnateur Transport : M. Fabien Bassene (76 178 20 23)',
      emailTitle: 'Adresses E-mail',
      officeHoursTitle: 'Horaires d\'Ouverture des Bureaux',
      officeHoursVal: 'Du lundi au vendredi : 08h00 – 12h30 | 14h30 – 17h00 (Samedi & Dimanche : Fermé)',
      formTitle: 'Formulaire de Contact & Renseignements',
      formName: 'Nom et Prénom du parent',
      formEmail: 'Adresse e-mail',
      formPhone: 'Numéro de téléphone / WhatsApp',
      formClass: 'Classe souhaitée pour l\'enfant',
      formMessage: 'Votre Message ou question',
      formSubmit: 'Envoyer le message',
      formSuccess: 'Votre message a bien été transmis au secrétariat. Nous vous recontacterons sous 24 à 48 heures.',
    },

    // Footer
    footer: {
      affiliation:
        'Sous la tutelle de la Direction de l\'Enseignement Catholique de Dakar (ODEC / ONECS) et agréé par le Ministère de l\'Éducation Nationale du Sénégal.',
      poweredBy: 'Propulsé par',
      copyright: '© 2026 Groupe Scolaire Présentation de Marie de Yoff. Tous droits réservés.',
      address: 'Route de l\'Aéroport Léopold Sédar Senghor (face Cité ASECNA), Yoff, Dakar, Sénégal',
      fastLinks: 'Liens Rapides',
      practicalInfo: 'Infos Pratiques',
    },
  },

  en: {
    // Header & Navigation
    schoolName: 'Groupe Scolaire Présentation de Marie',
    schoolSubtitle: 'Yoff · Dakar · Daycare, Preschool & Primary School',
    year: 'School Year 2026–2027',
    onecsAccreditation: 'ONECS Senegal · Reg. No. 004128',
    openingHours: 'Mon - Fri: 08:00 AM - 12:30 PM | 02:30 PM - 05:00 PM',
    nav: {
      home: 'Home',
      about: 'About Us',
      programmes: 'Educational Programmes',
      admissions: 'Admissions & Fees',
      contact: 'Contact',
    },
    ctaAdmission: 'Admissions & Visit',
    langToggle: 'Français',

    // Hero Section
    hero: {
      badge: 'PRIVATE CATHOLIC INSTITUTION UNDER RELIGIOUS SUPERVISION',
      title: 'Growing and learning together in a family spirit.',
      subtitle:
        'Welcome to Groupe Scolaire Présentation de Marie de Yoff. A private Catholic institution committed to academic excellence, moral integrity, and community living in Dakar.',
      btnPrograms: 'Discover our programmes',
      btnAdmissions: 'Admissions & Simulator',
      btnContact: 'Contact administration',
      motto: '“Let us be an open Gospel” · “Let us unite and together build our school”',
    },

    // Key figures
    stats: {
      cfee: '100% Exam Pass Rate',
      cfeeSub: 'Historical pass rate in national CFEE exams and 6th grade entrance',
      age: 'From 2.5 Years Old',
      ageSub: 'Safe, loving care in daycare and preschool',
      community: '1 United Community',
      communitySub: 'Fraternal interfaith harmony (Christian and Muslim pupils)',
      results: '16 Consecutive Years',
      resultsSub: 'Of excellence and admissions to elite high schools',
    },

    // Pillars
    pillars: {
      tag: 'Our Pedagogical Foundation',
      title: 'Our Three Educational Pillars',
      p1Title: 'Academic Excellence',
      p1Desc:
        'Rigorous teaching following Senegal\'s Competency-Based Approach (APC), securing strong mastery of core fundamentals from CP to CM2.',
      p2Title: 'Values & Discipline',
      p2Desc:
        'Character development rooted in mutual respect, honesty, Christian charity, and sharing at the core of our spiritual vocation.',
      p3Title: 'Family Spirit',
      p3Desc:
        'A secure setting where parents and teachers collaborate closely for the intellectual, emotional, and spiritual blossoming of each child.',
    },

    // Mot de la Directrice
    directress: {
      tag: 'Message from the Head of School',
      title: '“Every child is unique”',
      quote:
        'At Présentation de Marie, every child is unique. Our mission is to give them a solid intellectual foundation while passing on human values that turn them into responsible citizens.',
      author: 'Sister Onésima DIATTA',
      role: 'Head of Preschool & Daycare',
      mensahRole: 'Mr. François Béni MENSAH · Head of Primary School',
      mensahQuote:
        'Our school carefully prepares students for middle school transition with tailored tutoring, a 100% Halal balanced cafeteria, and convenient school bus transport.',
    },

    // Home Teasers
    homeCyclesTeaser: {
      tag: 'Our Educational Levels',
      title: 'Focused Excellence on Foundational Years',
      subtitle:
        'The institution exclusively spans Preschool (Daycare, TPS, PS, MS, GS) and Primary School (CP to CM2). No secondary classes, fostering close teacher-student relationships.',
      btnLearnMore: 'View detailed curriculum',
    },

    homeAdmissionsTeaser: {
      tag: '2026–2027 Admissions Open',
      title: 'Prepare your children\'s return to school with peace of mind',
      subtitle:
        'Access our complete FCFA tuition calculator, download the official document checklist, and review canteen and bus regulations.',
      btnCalculator: 'Go to Admissions & Fees Portal',
    },

    // About Page
    about: {
      tag: 'Our Identity & History',
      title: 'About Us',
      identityHeading: 'Our Identity',
      identityText:
        'Groupe Scolaire Présentation de Marie de Yoff is a private Catholic educational establishment under the religious guardianship of the Congregation of the Sisters of the Presentation of Mary (founded by Saint Marie Rivier). Located in Yoff on Route de l\'Aéroport facing Cité ASECNA in Dakar, our school enjoys an outstanding reputation in foundational education.',
      missionHeading: 'Our Mission & Vision',
      m1Title: 'Holistic Development',
      m1Text:
        'We nurture the intellectual, psychological, spiritual, and physical growth of each child through personalized and caring instruction.',
      m2Title: 'Interfaith Harmony',
      m2Text:
        'Deeply rooted in Christian values, our school warmly welcomes a large community of Muslim students, fostering exemplary mutual respect and dialogue.',
      m3Title: 'Mastery of Fundamentals',
      m3Text:
        'We focus all our energy on preschool and elementary stages to ensure solid foundations and a confident transition to secondary school.',
      teamHeading: 'A Dedicated & Qualified Team',
      teamText:
        'Teaching and pastoral care are delivered in harmony by the Sisters of the Congregation alongside experienced lay educators under the leadership of Mr. François Béni MENSAH (Primary) and Sister Onésima DIATTA (Preschool).',
    },

    // Programmes Page
    programmes: {
      tag: 'Preschool & Elementary Levels',
      title: 'Official Educational Programmes',
      subtitle:
        'Our curriculum strictly adheres to the guidelines of the Ministry of National Education of Senegal, enhanced by language and civic modules.',
      maternelleTitle: 'Preschool & Kindergarten (Petite, Moyenne & Grande Section from 2.5 years)',
      maternelleIntro:
        'Instruction focuses on sensory awakening, socialization, autonomy, and meticulous preparation for entry into primary school.',
      maternelleP1: 'Language & Communication: Oral expression in French, vocabulary enrichment, phonetics, and pre-writing graphism.',
      maternelleP2: 'World Discovery: Structuring time and space, handling shapes, sizes, and early numerical quantities.',
      maternelleP3: 'Psychomotor Skills: Fine motor coordination (cutting, clay modeling), group games, movement, and balance.',
      maternelleP4: 'Arts & Crafts: Drawing, painting, singing, nursery rhymes, and manual dexterity projects.',
      maternelleP5: 'Social Living: Learning community etiquette, politeness, and respect for others.',

      elementaireTitle: 'Primary Elementary Cycle (CP to CM2 — CFEE Certification)',
      elementaireIntro:
        'Comprehensive implementation of the Competency-Based Approach (APC) steering pupils to a 100% graduation rate in the national CFEE exam.',
      elementaireP1: 'Language & Communication: Comprehensive reading instruction (CP/CE1), reading comprehension, grammar, verb conjugation, spelling, and essay writing.',
      elementaireP2: 'Mathematics: Mastery of the 4 basic arithmetic operations, whole numbers, decimals, fractions, plane geometry, metric measures, and word problem solving.',
      elementaireP3: 'Science & Social Living (ESVS): History of Senegal and Africa, local geography, observation science (human body, hygiene, environment).',
      elementaireP4: 'Arts & Physical Education: Creative visual arts and team sports building camaraderie and sportsmanship.',
      elementaireP5: 'English & Computer Literacy: Weekly early introduction from the Cours d\'Initiation (CI) grade onwards.',

      spiritualTitle: 'Distinctive Projects: Spiritual & Civic Formation',
      catholicTitle: 'For Catholic students',
      catholicDesc: 'Catechism classes, awakening to Christian faith, spiritual prayer times, and preparation for church sacraments.',
      otherFaithsTitle: 'For students of other faiths',
      otherFaithsDesc: 'Civic and Moral Education classes focused on universal human virtues, citizenship, Senegalese fraternity, and mutual respect.',
    },

    // Admissions Page
    admissions: {
      tag: 'Admissions & Tuition Simulator 2026–2027',
      title: 'Admissions & Practical Information',
      subtitle:
        'A transparent admissions journey. View the official procedure, required documentation, school schedules, and calculate your tuition fees.',
      procedureTitle: 'Official Admissions Procedure',
      step1: '1. Inquire for availability: Contact the secretariat to confirm open slots in the desired grade.',
      step2: '2. Document submission: Submit all required paperwork at the admissions office in Yoff.',
      step3: '3. Interview / Assessment: A friendly placement test or interview for primary school applicants.',
      step4: '4. Finalization: Settle registration dues at the cashier\'s desk and receive official uniforms.',
      docsTitle: 'Official Documents Required',
      doc1: 'Original birth certificate of the child (no photocopies or scans accepted).',
      doc2: 'Up-to-date copy of child\'s health/vaccination record (mandatory for new entries).',
      doc3: 'Recent passport photos of the pupil (2 for primary, 6 for preschool with name on back).',
      doc4: 'Passport photos of parent/guardian for security badge access (4 for preschool).',
      doc5: 'Academic report cards from the previous school year (for primary transfers).',
      doc6: 'Enrollment certificate from previous school.',
      doc7: 'Baptism certificate (for Catholic pupils).',
      hoursTitle: 'School Hours',
      maternelleHours: 'Preschool & Daycare: Monday to Friday from 08:00 AM to 01:00 PM (aftercare available until 04:00 PM).',
      elementaireHours: 'Primary: Mon, Tue, Thu, Fri from 08:00 AM to 04:00 PM (with lunch break & supervised study). Wednesday: 08:00 AM to 01:00 PM.',
    },

    // Contact Page
    contact: {
      tag: 'Location & Campus Access',
      title: 'Contact the School',
      subtitle:
        'Our administrative and pastoral staff look forward to welcoming you in Yoff to assist with any questions.',
      addressTitle: 'Physical Address',
      addressVal: 'Route de l\'Aéroport Léopold Sédar Senghor (Opposite Cité ASECNA), Yoff Tonghor District, Dakar, Senegal.',
      plusCode: 'Google Maps Plus Code: PGX5+X35 Dakar',
      phonesTitle: 'Secretariat Direct Lines',
      elemPhone: 'Primary School: +221 33 820 21 13 (Headmaster: Mr. François Béni Mensah: 77 575 46 23)',
      prescPhone: 'Preschool & Daycare: +221 33 820 79 06 (Headmistress: Sister Onésima Diatta: 76 459 20 20)',
      transportPhone: 'School Bus Coordinator: Mr. Fabien Bassene (76 178 20 23)',
      emailTitle: 'Official E-mails',
      officeHoursTitle: 'Office Hours',
      officeHoursVal: 'Monday to Friday: 08:00 AM – 12:30 PM | 02:30 PM – 05:00 PM (Saturday & Sunday: Closed)',
      formTitle: 'Contact & Inquiry Form',
      formName: 'Parent / Guardian Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number / WhatsApp',
      formClass: 'Desired Class for Child',
      formMessage: 'Your Message or Question',
      formSubmit: 'Send Message',
      formSuccess: 'Your message has been received by our secretariat. We will respond within 24 to 48 hours.',
    },

    // Footer
    footer: {
      affiliation:
        'Under the supervision of the Catholic Education Directorate of Dakar (ODEC / ONECS) and accredited by the Ministry of National Education of Senegal.',
      poweredBy: 'Powered by',
      copyright: '© 2026 Groupe Scolaire Présentation de Marie de Yoff. All rights reserved.',
      address: 'Route de l\'Aéroport Léopold Sédar Senghor (facing Cité ASECNA), Yoff, Dakar, Senegal',
      fastLinks: 'Quick Links',
      practicalInfo: 'Practical Info',
    },
  },
};
