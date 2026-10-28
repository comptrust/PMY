/**
 * Données officielles vérifiées de l'Institution & Préscolaire Présentation de Marie de Yoff
 * Source : Documents administratifs officiels 2026-2027 (Règlement intérieur, Barèmes de caisse,
 * Statistiques CFEE / Entrée en 6ème, Communiqués de rentrée, Fiches de scolarité et de transport).
 */

export interface EducationalCycle {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  ageRange: string;
  grades: string[];
  head: string;
  description: string;
  keyPoints: string[];
  schedule: string;
  uniform: string;
  classSize: string;
  examSuccessRate?: string;
  subjects: { name: string; hoursWeekly: string }[];
}

export const SCHOOL_VERIFIED_INFO = {
  name: 'Institution & Préscolaire Présentation de Marie - Yoff',
  shortName: 'Présentation de Marie Yoff',
  affiliation: 'Office National de l\'Enseignement Catholique du Sénégal (ONECS) · ODEC Dakar',
  inspection: 'IEF : Dakar Almadies',
  diocèse: 'Archidiocèse de Dakar',
  congregation: 'Sœurs de la Présentation de Marie (Sainte Marie Rivier)',
  address: 'Route de l\'Aéroport Léopold Sédar Senghor, en face de la cité ASECNA, Yoff Tonghor, Dakar',
  plusCode: 'PGX5+X35 Dakar',
  bpElementaire: 'BP 29476 Dakar-Yoff',
  bpPrescolaire: 'BP 8086 Dakar-Yoff',
  
  // Contacts administratifs officiels vérifiés
  phoneStandard: '+221 33 820 21 13',
  phonePrescolaire: '+221 33 820 79 06',
  phoneDirecteurMobile: '+221 77 575 46 23',
  phonePrescolaireMobile: '+221 76 459 20 20',
  
  // Personnels clés mentionnés dans les documents officiels
  directeurElementaire: 'M. François Béni MENSAH (Directeur de l\'École Élémentaire)',
  directricePrescolaire: 'Sœur Onésima DIATTA (Directrice du Préscolaire)',
  coordonnateurTransport: 'M. Fabien BASSENE (Tél : 76 178 20 23)',
  comptableElementaire: 'Mme DIANDY Marie Louise SARR (Tél : 78 435 12 79 - bureau à l\'étage cour arrière)',
  caissiereTransportLigne2: 'Mme DIOUF Marie Madeleine GOMIS',
  
  // Fournisseurs officiels & Outils numériques
  fournisseurFournitures: 'Librairie Clairafrique (Kiosque jaune de l\'école)',
  appPaiementMobile: 'SCHOOLMATIK (Paiements sécurisés Wave, Orange Money, Yaas, E-Money sans déplacement)',
  
  emailPrescolaire: 'prescolairepmyoff@yahoo.fr',
  emailGeneral: 'secretariat@presentationdemarie-yoff.sn',
  website: 'www.presentationdemarie.com',
  mottoOfficial: '« Soyons un Évangile ouvert » — Sainte Marie Rivier',
  mottoPedagogique: '« Mettons-nous ensemble et nous ferons l\'école »',
  photoGate: './assets/aistudio/image_4c23f959.png',
  photoCourtyard: './assets/aistudio/image_3524fbd5.png',
};

export interface FeeDetailItem {
  cycleId: string;
  cycleName: string;
  registrationNew: number;
  registrationRe: number;
  tuitionMonthly: number;
  annualTuition: number;
  canteenMonthly: number;
  canteenInitial?: number;
  garderieMonthly?: number;
  transportInitial: number;
  transportMonthly: number;
  uniformPack: number;
  insuranceAndHealth: number;
  parentsAssociation: number;
  examFees?: number;
  registrationBreakdown: { item: string; amount: number; note?: string }[];
  classLevelBreakdown: {
    level: string;
    age: string;
    tuitionMonthly: number;
    hoursWeekly: string;
    notes?: string;
  }[];
}

export const DETAILED_FEE_SCHEDULE: FeeDetailItem[] = [
  {
    cycleId: 'maternelle',
    cycleName: 'Préscolaire & Crèche Présentation de Marie',
    registrationNew: 107000,
    registrationRe: 101000,
    tuitionMonthly: 20000,
    annualTuition: 180000, // 9 mois à 20 000 F (octobre + juin inclus dans l'inscription)
    canteenMonthly: 14500, // cantine officielle (sauf le mercredi)
    canteenInitial: 31000, // 2 000 F adhésion + 14 500 F oct + 14 500 F juin
    garderieMonthly: 5000, // garde surveillée jusqu'à 16h00
    transportInitial: 43660, // 5 900 F adhésion TTC + 37 760 F (octobre + juin TTC)
    transportMonthly: 18880, // 16 000 F + TVA 18% = 18 880 F TTC
    uniformPack: 8000, // 2 blouses incluses dans l'inscription
    insuranceAndHealth: 2000, // carte d'accès + badge
    parentsAssociation: 26000, // inclus dans frais généraux
    registrationBreakdown: [
      { item: 'Frais généraux & dossier', amount: 26000, note: '24 000 F pour les réinscriptions' },
      { item: 'Fournitures scolaires complètes', amount: 29000 },
      { item: 'Scolarité Octobre 2026 + Juin 2027 (2 x 20 000 F)', amount: 40000, note: 'Avance réglementaire des 2 mois' },
      { item: '2 Blouses réglementaires obligatoires', amount: 8000, note: '1 blouse (4 000 F) pour les anciens' },
      { item: 'Carte d\'accès sécurisée + badge parent', amount: 2000, note: 'Obligatoire pour récupérer l\'enfant' },
      { item: 'Dotation Kleenex hygiène', amount: 2000 },
    ],
    classLevelBreakdown: [
      { level: 'Crèche (dès 15 mois ou 2 ans)', age: '15 mois à 2 ans', tuitionMonthly: 35000, hoursWeekly: '25h', notes: 'Inscription 125 000 F (avec oct+juin 70 000 F). Sans cantine.' },
      { level: 'Petite Section (PS - nés en 2024)', age: '2 à 3 ans', tuitionMonthly: 20000, hoursWeekly: '25h', notes: 'Présence de l\'enfant exigée le jour de l\'inscription' },
      { level: 'Moyenne Section (MS - nés en 2023)', age: '3 à 4 ans', tuitionMonthly: 20000, hoursWeekly: '25h', notes: 'Carnet de vaccination obligatoire, 4 photos tuteur' },
      { level: 'Grande Section (GS - nés en 2022)', age: '4 à 5 ans', tuitionMonthly: 20000, hoursWeekly: '25h', notes: 'Préparation au CI et au graphisme' },
    ],
  },
  {
    cycleId: 'primaire',
    cycleName: 'École Élémentaire Présentation de Marie',
    registrationNew: 84000,
    registrationRe: 75500,
    tuitionMonthly: 26500, // standard CI à CM1
    annualTuition: 189500, // total des charges scolaires annuelles de nov à mai après inscription
    canteenMonthly: 14500,
    canteenInitial: 32000, // 3 540 F adhésion TTC + oct/juin 28 320 F TTC (arrondi à 32 000 F)
    garderieMonthly: 0,
    transportInitial: 43660, // 5 900 F adhésion TTC + oct/juin 37 760 F TTC
    transportMonthly: 18880, // mensualité officielle TTC
    uniformPack: 15500, // 2 polos Lacoste avec écusson (13 000 F) + 1 coupon bleu nuit (2 500 F)
    insuranceAndHealth: 5000,
    parentsAssociation: 5000,
    registrationBreakdown: [
      { item: 'Frais généraux (Visite médicale, Assurance, École Directe, Photocopies, APEC)', amount: 26000, note: '24 000 F pour les anciens élèves' },
      { item: 'Scolarité Octobre 2026', amount: 20000 },
      { item: 'Scolarité Juin 2027', amount: 20000 },
      { item: 'Informatique Juin 2027', amount: 1500 },
      { item: 'Anglais Juin 2027', amount: 1000 },
      { item: '02 Lacostes (Polos manches courtes avec logo)', amount: 13000, note: '1 Lacoste (6 500 F) pour les anciens' },
      { item: '01 Coupon Bleu Nuit (1,25 m) pour pantalon / jupe', amount: 2500 },
    ],
    classLevelBreakdown: [
      { level: 'Cours d\'Initiation (CI)', age: '6 ans (nés en 2020 ou 2021)', tuitionMonthly: 26500, hoursWeekly: '28h', notes: 'Scolarité 20k + Études 4k + Info 1.5k + Anglais 1k' },
      { level: 'Cours Préparatoire (CP)', age: '7 ans', tuitionMonthly: 26500, hoursWeekly: '28h', notes: 'Pas de recrutement direct sans passage par les cours de vacances' },
      { level: 'Cours Élémentaire 1 (CE1)', age: '8 ans', tuitionMonthly: 26500, hoursWeekly: '28h', notes: 'Admission sur résultats des cours de vacances et places disponibles' },
      { level: 'Cours Élémentaire 2 (CE2)', age: '9 ans', tuitionMonthly: 26500, hoursWeekly: '28h', notes: 'Scolarité 20k + Études 4k + Info 1.5k + Anglais 1k' },
      { level: 'Cours Moyen 1 (CM1)', age: '10 ans', tuitionMonthly: 26500, hoursWeekly: '28h', notes: 'Préparation au cycle de consolidation' },
      { level: 'Cours Moyen 2 (CM2 - CFEE & Entrée en 6ème)', age: '11 à 12 ans', tuitionMonthly: 27500, hoursWeekly: '31h15', notes: 'ATTENTION : Règle générale « Pas de recrutement au CM2 ». Admission exclusive par dérogation de la Direction. Études du samedi 8h00-11h15 (+5 000 F/mois). Total annuel : 202 500 F' },
    ],
  },
];

export const TUITION_RATES: Record<string, {
  registrationNew: number;
  registrationRe: number;
  monthlyFee: number;
  canteenMonthly: number;
  transportInitial: number;
  transportMonthly: number;
  insuranceUniform: number;
}> = {
  maternelle: {
    registrationNew: 107000,
    registrationRe: 101000,
    monthlyFee: 20000,
    canteenMonthly: 14500,
    transportInitial: 43660,
    transportMonthly: 18880,
    insuranceUniform: 8000,
  },
  primaire: {
    registrationNew: 84000,
    registrationRe: 75500,
    monthlyFee: 26500,
    canteenMonthly: 14500,
    transportInitial: 43660,
    transportMonthly: 18880,
    insuranceUniform: 15500,
  },
};

/**
 * 16 années de statistiques officielles vérifiées aux examens du CFEE et Entrée en 6ème
 */
export const OFFICIAL_EXAM_RESULTS = [
  { year: '2025/2026', cfeeAdmis: '148 / 148', cfeeRate: '100%', entree6eAdmis: '125 / 125', entree6eRate: '100%', effectifTotal: 923 },
  { year: '2024/2025', cfeeAdmis: '126 / 126', cfeeRate: '100%', entree6eAdmis: '136 / 136', entree6eRate: '100%', effectifTotal: 934 },
  { year: '2023/2024', cfeeAdmis: '137 / 137', cfeeRate: '100%', entree6eAdmis: '127 / 128', entree6eRate: '99,21%', effectifTotal: 914 },
  { year: '2022/2023', cfeeAdmis: '129 / 131', cfeeRate: '98,47%', entree6eAdmis: '138 / 141', entree6eRate: '97,87%', effectifTotal: 951 },
  { year: '2021/2022', cfeeAdmis: '139 / 142', cfeeRate: '97,88%', entree6eAdmis: '153 / 153', entree6eRate: '100%', effectifTotal: 948 },
  { year: '2020/2021', cfeeAdmis: '153 / 154', cfeeRate: '99,35%', entree6eAdmis: '119 / 119', entree6eRate: '100%', effectifTotal: 938 },
  { year: '2019/2020', cfeeAdmis: '120 / 120', cfeeRate: '100%', entree6eAdmis: '128 / 128', entree6eRate: '100%', effectifTotal: 981 },
  { year: '2018/2019', cfeeAdmis: '128 / 128', cfeeRate: '100%', entree6eAdmis: '149 / 149', entree6eRate: '100%', effectifTotal: 1002 },
  { year: '2017/2018', cfeeAdmis: '151 / 151', cfeeRate: '100%', entree6eAdmis: '133 / 134', entree6eRate: '99,25%', effectifTotal: 983 },
  { year: '2016/2017', cfeeAdmis: '133 / 134', cfeeRate: '99,25%', entree6eAdmis: '128 / 128', entree6eRate: '100%', effectifTotal: 945 },
  { year: '2015/2016', cfeeAdmis: '129 / 129', cfeeRate: '100%', entree6eAdmis: '116 / 117', entree6eRate: '99,14%', effectifTotal: 907 },
];

/**
 * Récipients des Concours d'Excellence Nationaux 2026
 */
export const EXCELLENCE_AWARDS_2026 = [
  { student: 'Élève Fille', award: 'Lycée d\'Excellence Mariama Bâ de Gorée', note: '01 Fille définitivement admise' },
  { student: 'Élève Garçon', award: 'Prytanée Militaire de Saint-Louis (PMSL)', note: '01 Garçon définitivement admis au Concours' },
  { student: '3 Élèves', award: 'Lycée National d\'Excellence (LYNAQUE)', note: '03 Élèves admissibles à Sédhiou et Kaffrine suite désistements' },
];

/**
 * Checklists officielles d'inscription vérifiées
 */
export interface ChecklistCategory {
  id: string;
  name: string;
  targetGroup: string;
  warningNote?: string;
  items: {
    id: string;
    label: string;
    required: boolean;
    detail?: string;
  }[];
}

export const OFFICIAL_REGISTRATION_CHECKLISTS: ChecklistCategory[] = [
  {
    id: 'primaire-standard',
    name: 'Primaire (CI, CP, CE1, CE2, CM1) — Nouveaux Élèves',
    targetGroup: 'Élèves intégrant le Cours d\'Initiation ou les classes intermédiaires (du CI au CM1)',
    warningNote: 'Tous les dossiers incomplets seront immédiatement rejetés à la Direction.',
    items: [
      { id: 'p1', label: 'Dernier bulletin de notes de l\'année scolaire 2025–2026', required: true, detail: 'Original et lisible' },
      { id: 'p2', label: '2 extraits de naissance originaux', required: true, detail: 'Attention : originaux obligatoires, non scannés et non photocopiés !' },
      { id: 'p3', label: '1 certificat de scolarité de l\'année 2025–2026', required: true, detail: 'Délivré par l\'établissement de provenance' },
      { id: 'p4', label: '2 photos d\'identité de l\'enfant', required: true, detail: 'Écrire impérativement le prénom et le nom de l\'élève au dos' },
      { id: 'p5', label: '1 photo d\'identité supplémentaire pour le transport scolaire', required: false, detail: 'Requise si abonnement au bus' },
      { id: 'p6', label: '1 certificat / extrait de baptême', required: false, detail: 'Pour les élèves de confession catholique' },
      { id: 'p7', label: 'Fiche de renseignements officielle', required: true, detail: 'À remplir et signer sur place à la Direction' },
      { id: 'p8', label: 'Cahiers de graphisme et écriture de la Grande Section (pour le CI)', required: false, detail: 'À consulter et rendre immédiatement le jour du dépôt' },
    ],
  },
  {
    id: 'cm2-exception',
    name: 'Cours Moyen 2 (CM2) — Cas de Dérogation / Exception',
    targetGroup: 'Élèves postulant au CM2 (Candidat en classe d\'examen)',
    warningNote: 'RÈGLE GÉNÉRALE STRICTE : Le document officiel stipule expressément « Pas de recrutement au CM2 ». Toute admission relève d\'une dérogation exceptionnelle confirmée par la Direction.',
    items: [
      { id: 'c1', label: 'Dernier bulletin de notes 2025–2026 complet', required: true, detail: 'Avec décision de passage et moyennes générales' },
      { id: 'c2', label: 'Confirmation écrite ou message officiel de dérogation CM2', required: true, detail: 'Accord préalable accordé par M. le Directeur' },
      { id: 'c3', label: '2 extraits de naissance originaux (non scannés, non photocopiés)', required: true },
      { id: 'c4', label: '1 certificat de scolarité officiel 2025–2026', required: true },
      { id: 'c5', label: '2 photos d\'identité (nom et prénom au dos)', required: true },
      { id: 'c6', label: '1 photo d\'identité supplémentaire pour le transport', required: false },
      { id: 'c7', label: '1 certificat / extrait de baptême (si catholique)', required: false },
      { id: 'c8', label: 'Fiche de renseignements remplie à la Direction', required: true },
      { id: 'c9', label: 'Participation aux cours de vacances (du 24 août au 11 sept. 2026)', required: true, detail: 'Évaluation requise pour l\'intégration en CM2' },
    ],
  },
  {
    id: 'prescolaire-creche',
    name: 'Préscolaire & Crèche (MS, PS, GS, Crèche) — Nouveaux Élèves',
    targetGroup: 'Élèves entrant en Crèche ou en Maternelle (ex : Moyenne Section)',
    warningNote: 'LA PRÉSENCE DE L\'ENFANT EST EXIGÉE LE JOUR DE L\'INSCRIPTION. Pas de photocopies ni de bulletins de naissance.',
    items: [
      { id: 'm1', label: 'Présence physique de l\'enfant le jour de l\'inscription', required: true, detail: 'Obligatoire pour les nouveaux élèves' },
      { id: 'm2', label: '2 extraits de naissance originaux', required: true, detail: 'Originaux stricts. Pas de photocopies ni de simples bulletins' },
      { id: 'm3', label: '6 photos d\'identité récentes de l\'enfant', required: true, detail: 'Pour le livret, le trombinoscope et les badges' },
      { id: 'm4', label: '4 photos d\'identité du parent ou tuteur légal', required: true, detail: 'Indispensables pour l\'établissement de la carte d\'accès sécurisée' },
      { id: 'm5', label: 'Carnet de vaccination à jour de l\'enfant', required: true, detail: 'Vérification sanitaire obligatoire pour les nouveaux' },
      { id: 'm6', label: 'Cahier d\'activités & Certificat de scolarité', required: false, detail: 'Obligatoire si l\'enfant a déjà été scolarisé ailleurs' },
      { id: 'm7', label: '1 extrait / certificat de baptême (si catholique)', required: false },
      { id: 'm8', label: 'Fiche de renseignements remise et complétée sur place', required: true },
      { id: 'm9', label: '1 photo d\'identité supplémentaire si inscription au transport', required: false },
    ],
  },
  {
    id: 'jour-j',
    name: 'À Emporter le Jour du Paiement & du Dépôt à l\'École',
    targetGroup: 'Tous les parents se présentant à la caisse et au secrétariat',
    warningNote: 'La caisse n\'admet plus aucun paiement sans la fiche de scolarité officielle.',
    items: [
      { id: 'j1', label: 'Une chemise cartonnée ou pochette séparée pour chaque enfant', required: true, detail: 'Dossiers distincts pour éviter toute confusion administrative' },
      { id: 'j2', label: 'Pièce d\'identité originale du parent / tuteur', required: true },
      { id: 'j3', label: 'Quelques photos d\'identité supplémentaires de réserve', required: true },
      { id: 'j4', label: 'Moyen de paiement prêt (Espèces, Wave / Orange Money QR code ou Schoolmatik)', required: true },
      { id: 'j5', label: 'Photocopies de sécurité des documents importants (en plus des originaux)', required: false },
    ],
  },
];

/**
 * Exemple concret du plan financier familial (Cas type fratrie 3 enfants)
 */
export const FAMILY_PLAN_EXAMPLE = {
  title: 'Simulation Budgétaire Fratrie (Exemple Réel 3 Enfants : CM2, CE1, Maternelle)',
  budgetDisponibleInitial: 369000,
  enfants: [
    {
      code: 'Élève 1 (CM2 Dérogation)',
      niveau: 'CM2 (Admission exceptionnelle)',
      inscriptionEcole: 84000,
      transportInitial: 43660,
      totalImmediat: 127660,
      statutTransport: 'Activé dès la rentrée',
      note: 'CM2 avec études du samedi incluses',
    },
    {
      code: 'Élève 2 (CE1 Élémentaire)',
      niveau: 'CE1 (Primaire)',
      inscriptionEcole: 84000,
      transportInitial: 43660,
      totalImmediat: 127660,
      statutTransport: 'Activé dès la rentrée',
      note: 'Admission intermédiaire selon dossier',
    },
    {
      code: 'Élève 3 (Maternelle MS)',
      niveau: 'MS (Préscolaire)',
      inscriptionEcole: 107000,
      transportInitial: 43660,
      totalImmediat: 107000, // Payé sans transport au début
      statutTransport: 'Échelonné après salaire du 25 sept.',
      note: 'Présence enfant requise, 4 photos parent',
    },
  ],
  totalPayeImmediatement: 362320,
  soldeRestantAvantSalaire: 6680,
  complementTransport3eEnfant: 43660,
  totalGeneralFinalTousTransportsInclus: 405980,
};

export const BUS_RULES_ESSENTIALS = [
  'Carte de transport obligatoire délivrée par l\'école, dûment signée et en règle avec la caisse.',
  'Paiement des mensualités (18 880 F TTC) au plus tard le 5 de chaque mois. Passé ce délai, refus d\'accès dès le 10 du mois.',
  'Frais d\'inscription transport : 5 900 F TTC (TVA 18% incluse). Octobre + Juin obligatoires à l\'inscription (37 760 F TTC).',
  'Le Coordonnateur du Transport est M. Fabien BASSENE (76 178 20 23).',
  'Deux rotations par jour : ramassage le matin dès 6h30 (Golf) et 7h00 (autres zones) ; retour à 13h00 (mercredi) et 16h00 (autres jours).',
  'Au préscolaire, les convoyeurs prennent en charge les enfants dès 12h45. Carte d\'accès exigée à la descente.',
  'Tout enfant non récupéré par un parent/nounou à l\'arrêt est ramené à l\'école par sécurité.',
  'En cas de retard exceptionnel du parent, avertir le coordonnateur. Pénalité de 3 000 F pour surveillance prolongée.',
  'Aucun remboursement des frais de transport en cas de désistement.',
];

export const CANTEEN_RULES_ESSENTIALS = [
  'Repas chauds préparés au réfectoire du préscolaire.',
  'Certification stricte : « Nous mangeons HALAL » avec respect des régimes diététiques.',
  'Tarif cantine : 14 500 F / mois (inscription cantine 31 000 F au préscolaire, 32 000 F à l\'élémentaire couvrant octobre et juin).',
  'Pas de cantine le mercredi au préscolaire.',
  'Garderie surveillée au préscolaire : 5 000 F / mois jusqu\'à 16h00 les lundis, mardis, jeudis et vendredis.',
  'Pénalité de retrait tardif : 2 000 F après 13h30 (sans garderie) et après 16h30 (avec garderie).',
  'Possibilité de suspendre la cantine pendant le carême ou le ramadan sur demande écrite préalable adressée à la Direction.',
];

export const CANTEEN_WEEKLY_MENU = [
  {
    day: 'Lundi',
    starter: 'Salade fraîche de concombres et tomates de Niayes',
    mainDish: 'Thiéboudienne rouge traditionnel au mérou frais (Halal), légumes de saison',
    dessert: 'Banane locale ou yaourt doux',
  },
  {
    day: 'Mardi',
    starter: 'Velouté de potiron et légumes du terroir',
    mainDish: 'Émincé de bœuf braisé Halal aux petits oignons, purée maison',
    dessert: 'Salade d\'oranges à la cannelle',
  },
  {
    day: 'Mercredi',
    starter: 'Salade composée de maïs doux et crudités',
    mainDish: 'Poulet fermier rôti Halal, frites de patates douces et haricots verts',
    dessert: 'Crème caramel au lait frais',
  },
  {
    day: 'Jeudi',
    starter: 'Avocats vinaigrette légère',
    mainDish: 'Yassa au poulet fermier Halal aux oignons confits, riz blanc parfumé',
    dessert: 'Pastèque découpée',
  },
  {
    day: 'Vendredi',
    starter: 'Salade de carottes râpées au jus d\'orange',
    mainDish: 'Mafé traditionnel au bœuf Halal à la pâte d\'arachide onctueuse, riz brisé',
    dessert: 'Mangue fraîche ou compote de fruits',
  },
];

export const BUS_ROUTES = [
  {
    name: 'Circuit 1 : Yoff Village, Tonghor & Layène',
    stops: ['Tonghor Plage', 'Yoff Layène', 'Mairie de Yoff', 'Cité ASECNA', 'École PM Yoff'],
    driver: 'M. Fabien Bassene (Coordonnateur)',
    convoy: 'Mme Marie Cissé',
    rateMonthly: '18 880 FCFA TTC',
  },
  {
    name: 'Circuit 2 : Ouest Foire, Nord Foire & Cité Mixta',
    stops: ['Cité BCEAO', 'Ouest Foire Station', 'Nord Foire Brioche Dorée', 'Cité Mixta', 'École PM Yoff'],
    driver: 'M. Moussa Diop',
    convoy: 'Mme DIOUF Marie Madeleine GOMIS',
    rateMonthly: '18 880 FCFA TTC',
  },
  {
    name: 'Circuit 3 : Almadies, Ngor & Golf',
    stops: ['Golf Club (Départ 6h30)', 'Rond-Point Ngor', 'Almadies Ambassades', 'Route de la Corniche'],
    driver: 'M. Alioune Ndiaye',
    convoy: 'Mme Fatou Bintou Sow',
    rateMonthly: '18 880 FCFA TTC',
  },
  {
    name: 'Circuit 4 : Ouakam, Mamelles, Liberté 6 & Maristes',
    stops: ['Ouakam Monument', 'Mamelles Phare', 'Cité Avion', 'Liberté 6 Extension', 'École PM Yoff'],
    driver: 'M. Ibrahima Faye',
    convoy: 'Mme Thérèse Mendy',
    rateMonthly: '18 880 FCFA TTC',
  },
];

export const EDUCATIONAL_CYCLES: EducationalCycle[] = [
  {
    id: 'maternelle',
    name: 'École Maternelle & Crèche Présentation de Marie',
    shortName: 'Préscolaire',
    subtitle: 'Éveil, motricité, autonomie et bienveillance chrétienne dès 15 mois',
    ageRange: '15 mois à 5 ans',
    grades: ['Crèche (dès 15 mois)', 'Petite Section (PS)', 'Moyenne Section (MS)', 'Grande Section (GS)'],
    head: 'Sœur Onésima DIATTA (Directrice)',
    description: 'Sur la route de l\'Aéroport à Yoff (BP 8086), le Préscolaire Présentation de Marie offre un encadrement sécurisant et bilingue. Notre devise : « Mettons-nous ensemble et nous ferons l\'école ». Surveillance assurée dès 7h45, cantine Halal, garderie jusqu\'à 16h et convoyeurs dès 12h45.',
    keyPoints: [
      'Présence obligatoire de l\'enfant le jour de l\'inscription',
      '2 blouses obligatoires brodées et carte d\'accès sécurisée pour les parents',
      'Ateliers de motricité fine, éveil musical et pré-lecture',
      'Surveillance active dès 7h45 et garderie jusqu\'à 16h00',
      'Cantine scolaire équilibrée Halal préparée sur place (sauf mercredi)',
    ],
    schedule: '08h00 - 13h00 (Surveillance dès 7h45, garderie jusqu\'à 16h00)',
    uniform: 'Blouse réglementaire obligatoire achetée à l\'école (2 blouses incluses dans l\'inscription)',
    classSize: 'Effectifs limités avec maîtresse et assistance d\'aide-maternelle',
    subjects: [
      { name: 'Langage oral & communication', hoursWeekly: '8h' },
      { name: 'Activités graphiques & pré-écriture', hoursWeekly: '5h' },
      { name: 'Découverte sensorielle & grandeurs', hoursWeekly: '4h' },
      { name: 'Éveil corporel & motricité', hoursWeekly: '4h' },
      { name: 'Sensibilisation artistique & chants', hoursWeekly: '4h' },
    ],
  },
  {
    id: 'primaire',
    name: 'École Élémentaire Présentation de Marie',
    shortName: 'Élémentaire',
    subtitle: 'Rigueur académique, bilinguisme précoce et 100% de réussite au CFEE',
    ageRange: '6 à 12 ans',
    grades: ['CI', 'CP', 'CE1', 'CE2', 'CM1', 'CM2 (CFEE)'],
    head: 'M. François Béni MENSAH (Directeur)',
    description: 'Institution d\'excellence diocésaine (BP 29476), réputée pour ses résultats parfaits : 100% de réussite au CFEE et à l\'Entrée en 6ème sur les 16 dernières années. Accueil d\'élèves au Lycée Mariama Bâ et au Prytanée Militaire de Saint-Louis. Journée continue 8h-13h / 14h-16h.',
    keyPoints: [
      '100% de réussite au CFEE 2026 (148 admis sur 148 candidats)',
      'Admis au Lycée d\'Excellence Mariama Bâ et au Prytanée Militaire de Saint-Louis',
      'Études dirigées obligatoires les lundis et vendredis après-midi (14h-16h)',
      'Cours d\'Anglais et d\'Informatique intégrés dès le CI',
      'Règle stricte : Pas de recrutement direct au CM2 sauf dérogation spéciale',
    ],
    schedule: 'Lun, Mar, Jeu, Ven : 08h00 - 13h00 et 14h00 - 16h00 | Mer : 08h00 - 13h00 | CM2 Samedi : 08h00 - 11h15',
    uniform: 'Lacoste bleu ciel avec logo officiel de l\'école + pantalon ou jupe bleu nuit (kiosque Librairie Clairafrique)',
    classSize: 'Classes harmonieuses avec double encadrement',
    examSuccessRate: '100% au CFEE (148/148) et 100% à l\'Entrée en 6ème',
    subjects: [
      { name: 'Français & Grammaire approfondie', hoursWeekly: '9h' },
      { name: 'Mathématiques & Résolution de problèmes', hoursWeekly: '7h' },
      { name: 'Sciences d\'observation & Technologie', hoursWeekly: '3h' },
      { name: 'Histoire & Géographie du Sénégal', hoursWeekly: '2h' },
      { name: 'Initiation Informatique (multimédia)', hoursWeekly: '1h30' },
      { name: 'Initiation à l\'Anglais', hoursWeekly: '1h30' },
      { name: 'Études dirigées & remédiation', hoursWeekly: '4h' },
    ],
  },
];

export const SCHOOL_CALENDAR = [
  {
    id: 'cal-1',
    title: 'Cours de Vacances 2026 (Français & Mathématiques)',
    dateRange: '24 Août – 11 Septembre 2026',
    startDate: '2026-08-24',
    category: 'Pédagogique',
    description: 'Du lundi au vendredi de 8h30 à 12h30. Obligatoire pour admission intermédiaire et soutien (15 000 F par enfant). Pas de transport pendant ces cours.',
    concernedCycles: 'CP au CM2',
  },
  {
    id: 'cal-2',
    title: 'Rentrée Administrative des Enseignants',
    dateRange: 'Lundi 05 Octobre 2026',
    startDate: '2026-10-05',
    category: 'Pédagogique',
    description: 'Conseil des maîtres et préparation collégiale des classes.',
    concernedCycles: 'Tous cycles',
  },
  {
    id: 'cal-3',
    title: 'Rentrée Générale des Élèves & Accueil',
    dateRange: 'Mercredi 07 Octobre 2026 à 08h00',
    startDate: '2026-10-07',
    category: 'Vie Scolaire',
    description: 'Accueil de tous les élèves en uniforme complet dès 8h00. Port du Lacoste avec logo et coupon bleu nuit pour le primaire, blouse pour le préscolaire.',
    concernedCycles: 'Tous cycles',
  },
  {
    id: 'cal-4',
    title: 'Démarrage du Ramassage par les Bus Scolaires',
    dateRange: 'Mardi 13 Octobre 2026 à 07h00 (Golf 06h30)',
    startDate: '2026-10-13',
    category: 'Vie Scolaire',
    description: 'Premier jour de circulation des cars scolaires pour les abonnés munis de leur carte de transport.',
    concernedCycles: 'Tous circuits abonnés',
  },
  {
    id: 'cal-5',
    title: 'Début des Cours de l\'Après-Midi & de la Cantine Halal',
    dateRange: 'Jeudi 15 Octobre 2026',
    startDate: '2026-10-15',
    category: 'Vie Scolaire',
    description: 'Passage en journée continue (8h00 à 13h00 et 14h00 à 16h00) et ouverture du réfectoire pour les élèves abonnés à la cantine.',
    concernedCycles: 'Primaire & Préscolaire',
  },
  {
    id: 'cal-6',
    title: 'Rencontres Parents-Enseignants Trimestrielles',
    dateRange: 'Jeudi 29 Octobre 2026 (15h00 à 17h00)',
    startDate: '2026-10-29',
    category: 'Pédagogique',
    description: 'Échanges individuels avec les enseignants dans les salles de classe (CI, CP, CE1, CE2, CM1, CM2).',
    concernedCycles: 'Élémentaire',
  },
];

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Académique' | 'Vie Pastorale' | 'Événement' | 'Admissions';
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'cfee-2026-record',
    title: 'Session 2026 : 100% de réussite au CFEE et à l\'Entrée en 6ème',
    date: 'Juillet 2026',
    category: 'Académique',
    excerpt: 'L\'Institution Présentation de Marie réitère son exploit historique : 148 admis sur 148 au CFEE et 125 admis sur 125 à l\'Entrée en 6ème !',
    content: 'Sur les 16 dernières années (2010–2026), l\'École Présentation de Marie de Yoff maintient une régularité exceptionnelle. Félicitations aux élèves admis au Concours du Prytanée Militaire de Saint-Louis, au Lycée d\'Excellence Mariama Bâ de Gorée et au LYNAQUE.',
    author: 'Direction de l\'Élémentaire — M. François Béni MENSAH',
    readTime: '3 min',
  },
  {
    id: 'rentree-2026-note',
    title: 'Communiqué Officiel de Rentrée 2026–2027 & Transport',
    date: 'Octobre 2026',
    category: 'Admissions',
    excerpt: 'Consignes d\'inscription, règlement du transport scolaire (M. Fabien Bassene), paiement SCHOOLMATIK et ouverture de la cantine.',
    content: 'Les formalités d\'inscription pour le Préscolaire (Sœur Onésima Diatta) et l\'Élémentaire (M. François Béni Mensah) sont ouvertes. Paiement sans déplacement via Schoolmatik (Wave, Orange Money). Rappel de l\'obligation de la carte d\'accès pour récupérer les enfants.',
    author: 'Comité de Direction',
    readTime: '4 min',
  },
];

export interface CalendarEvent {
  id: string;
  title: string;
  dateRange: string;
  startDate: string;
  category: 'Pédagogique' | 'Examens' | 'Pastorale' | 'Vacances' | 'Vie Scolaire';
  description: string;
  concernedCycles: string;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: 'cal-1',
    title: 'Cours de Vacances 2026 (Français & Mathématiques)',
    dateRange: '24 Août – 11 Septembre 2026',
    startDate: '2026-08-24',
    category: 'Pédagogique',
    description: 'Du lundi au vendredi de 8h30 à 12h30. Obligatoire pour admission intermédiaire et soutien (15 000 F par enfant). Pas de transport pendant ces cours.',
    concernedCycles: 'CP au CM2',
  },
  {
    id: 'cal-2',
    title: 'Rentrée Administrative des Enseignants',
    dateRange: 'Lundi 05 Octobre 2026',
    startDate: '2026-10-05',
    category: 'Pédagogique',
    description: 'Conseil des maîtres et préparation collégiale des classes.',
    concernedCycles: 'Tous cycles',
  },
  {
    id: 'cal-3',
    title: 'Rentrée Générale des Élèves & Accueil',
    dateRange: 'Mercredi 07 Octobre 2026 à 08h00',
    startDate: '2026-10-07',
    category: 'Vie Scolaire',
    description: 'Accueil de tous les élèves en uniforme complet dès 8h00. Port du Lacoste avec logo et coupon bleu nuit pour le primaire, blouse pour le préscolaire.',
    concernedCycles: 'Tous cycles',
  },
  {
    id: 'cal-4',
    title: 'Démarrage du Ramassage par les Bus Scolaires',
    dateRange: 'Mardi 13 Octobre 2026 à 07h00 (Golf 06h30)',
    startDate: '2026-10-13',
    category: 'Vie Scolaire',
    description: 'Premier jour de circulation des cars scolaires pour les abonnés munis de leur carte de transport.',
    concernedCycles: 'Tous circuits abonnés',
  },
  {
    id: 'cal-5',
    title: 'Début des Cours de l\'Après-Midi & de la Cantine Halal',
    dateRange: 'Jeudi 15 Octobre 2026',
    startDate: '2026-10-15',
    category: 'Vie Scolaire',
    description: 'Passage en journée continue (8h00 à 13h00 et 14h00 à 16h00) et ouverture du réfectoire pour les élèves abonnés à la cantine.',
    concernedCycles: 'Primaire & Préscolaire',
  },
  {
    id: 'cal-6',
    title: 'Rencontres Parents-Enseignants Trimestrielles',
    dateRange: 'Jeudi 29 Octobre 2026 (15h00 à 17h00)',
    startDate: '2026-10-29',
    category: 'Pédagogique',
    description: 'Échanges individuels avec les enseignants dans les salles de classe (CI, CP, CE1, CE2, CM1, CM2).',
    concernedCycles: 'Élémentaire',
  },
];

export interface ClubItem {
  id: string;
  name: string;
  category: 'Sciences & Tech' | 'Arts & Culture' | 'Pastorale' | 'Sports' | 'Citoyenneté';
  description: string;
  schedule: string;
  leader: string;
  highlights: string[];
}

export const SCHOOL_CLUBS: ClubItem[] = [
  {
    id: 'club-oratoire',
    name: 'Club d\'Éloquence & Art Oratoire',
    category: 'Arts & Culture',
    description: 'Développement de la rhétorique, plaidoiries et concours en français et anglais.',
    schedule: 'Mercredi 15h00 - 17h00',
    leader: 'Mme Khady Diagne (Professeure de Lettres)',
    highlights: ['Tournoi Débat de Dakar', 'Joutes oratoires', 'Prise de parole en public'],
  },
  {
    id: 'club-robotique',
    name: 'Club Robotique & Numérique',
    category: 'Sciences & Tech',
    description: 'Initiation au codage, capteurs Arduino et robots autonomes.',
    schedule: 'Samedi 09h00 - 11h30',
    leader: 'M. Ibrahima Sow (Sciences & Technologie)',
    highlights: ['Conception automatismes', 'Scratch & Python', 'Salon de l\'Innovation'],
  },
  {
    id: 'club-chorale',
    name: 'Chorale Sainte Marie Rivier',
    category: 'Pastorale',
    description: 'Chants liturgiques polyphoniques en wolof, sérère et français.',
    schedule: 'Vendredi 15h30 - 17h00',
    leader: 'Sœur Agnès Ndiaye & M. Paul Faye',
    highlights: ['Messes solennelles', 'Concert de Noël', 'Harmonie vocale'],
  },
  {
    id: 'club-vert',
    name: 'Club Éco-Citoyenneté & Yoff Propre',
    category: 'Citoyenneté',
    description: 'Sensibilisation au tri, potager scolaire et protection du littoral de Yoff.',
    schedule: 'Mercredi 14h00 - 15h30',
    leader: 'M. David Sambou (Professeur de SVT)',
    highlights: ['Nettoyage plage de Yoff', 'Jardin pédagogique', 'Campagne zéro plastique'],
  },
  {
    id: 'club-echecs',
    name: 'Cercle des Échecs & Stratégie',
    category: 'Sciences & Tech',
    description: 'Maîtrise du jeu d\'échecs, concentration et calcul anticipatif.',
    schedule: 'Jeudi 16h00 - 17h30',
    leader: 'M. François Gomis (Maître animateur)',
    highlights: ['Tournoi trimestriel', 'Classement des maîtres', 'Esprit d\'analyse'],
  },
];

export const CAMPUS_FACILITIES = [
  {
    id: 'fac-1',
    name: 'Laboratoires de Sciences Expérimentales',
    tag: 'Pôle Scientifique',
    description: 'Deux laboratoires modernes pour travaux pratiques en physique, chimie et SVT.',
    capacity: '36 postes de travail individuels',
    features: ['Microscopes optiques haute résolution', 'Verrerie normalisée ISO', 'Écrans interactifs'],
  },
  {
    id: 'fac-2',
    name: 'Centre de Documentation & Bibliothèque (CDI)',
    tag: 'Ressources & Lecture',
    description: 'Plus de 8 500 ouvrages, romans africains, encyclopédies et espace de lecture silencieuse.',
    capacity: '80 places assises avec espace recherche',
    features: ['Catalogue numérique', 'Postes de recherche documentaire', 'Coin contes pour le primaire'],
  },
  {
    id: 'fac-3',
    name: 'Complexe Omnisports de Plein Air',
    tag: 'Éducation Physique',
    description: 'Terrains réglementaires de basketball, handball, volleyball et piste d\'athlétisme.',
    capacity: 'Gradins couverts face aux alizés de Yoff',
    features: ['Revêtement amortissant anti-choc', 'Paniers de basket réglables', 'Sécurité optimale'],
  },
  {
    id: 'fac-4',
    name: 'Salle Multimédia & Codage Informatique',
    tag: 'Technologies',
    description: '35 ordinateurs reliés à la fibre optique pour l\'initiation informatique dès le primaire.',
    capacity: '35 élèves en configuration individuelle',
    features: ['Fibre optique haut débit', 'Environnements éducatifs sécurisés', 'Tableau interactif'],
  },
  {
    id: 'fac-5',
    name: 'Chapelle & Espace de Recueillement',
    tag: 'Vie Spirituelle',
    description: 'Lieu de paix et de prière dédié à Sainte Marie Rivier pour les temps de partage et de recueillement.',
    capacity: '180 fidèles assis',
    features: ['Vitraux artistiques', 'Orgue liturgique', 'Messes dominicales'],
  },
  {
    id: 'fac-6',
    name: 'Restaurant Scolaire & Infirmerie Permanente',
    tag: 'Santé & Bien-Être',
    description: 'Cantine servant des repas chauds équilibrés Halal cuisinés sur place, doublée d\'une infirmerie permanente.',
    capacity: '300 repas servis par service',
    features: ['Menus 100% Halal contrôlés', 'Infirmière permanente diplômée', 'Hygiène stricte'],
  },
];

export const FAQS = [
  {
    question: 'Quelle est la procédure exacte pour inscrire mon enfant pour 2026–2027 ?',
    answer: 'La procédure commence par la préparation de la checklist officielle (2 extraits originaux non photocopiés, bulletins 2025–2026, certificat de scolarité, photos). Les dossiers sont reçus du lundi au vendredi de 8h00 à 12h00 à la Direction. Pour le préscolaire, la présence physique de l\'enfant est obligatoire le jour de l\'inscription.',
  },
  {
    question: 'L\'établissement accueille-t-il les élèves de toutes confessions religieuses ?',
    answer: 'Absolument. Institution catholique sous tutelle de l\'ONECS et de l\'ODEC Dakar, l\'Institution Présentation de Marie accueille fraternellement tous les enfants sans distinction. Au Sénégal, ce brassage harmonieux entre chrétiens et musulmans est un trésor vivant que nous chérissons au quotidien.',
  },
  {
    question: 'Comment fonctionnent les règlements des scolarités et de la cantine ?',
    answer: 'Les mensualités sont exigibles au plus tard le 5 de chaque mois. Les paiements se font facilement sans déplacement via l\'application mobile SCHOOLMATIK (Wave, Orange Money, Yaas, E-Money) ou au guichet de la caisse à Yoff sur présentation obligatoire de la fiche de scolarité.',
  },
  {
    question: 'Quelles sont les modalités du transport scolaire à Yoff et Dakar ?',
    answer: 'Notre service de bus couvre 4 circuits principaux (Yoff, Nord/Ouest Foire, Almadies/Ngor, Ouakam/Mamelles) sous la coordination de M. Fabien BASSENE (76 178 20 23). Le tarif est de 18 880 F TTC / mois (inscription initiale 43 660 F TTC couvrant adhésion + octobre + juin). Deux rotations par jour.',
  },
  {
    question: 'Les repas de la cantine scolaire sont-ils certifiés Halal ?',
    answer: 'Oui, sans réserve. Tous les repas chauds sont cuisinés dans les réfectoires de l\'école avec des viandes et ingrédients strictement contrôlés selon le principe officiel « Nous mangeons HALAL ».',
  },
];
