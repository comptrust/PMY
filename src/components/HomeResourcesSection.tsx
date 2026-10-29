import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  CheckCircle2, 
  Calendar, 
  CreditCard, 
  Utensils, 
  Bus, 
  BookOpen, 
  ShieldAlert, 
  Search,
  X,
  ExternalLink,
  BookMarked
} from 'lucide-react';
import { Language } from '../data/translations';

interface ResourceDoc {
  id: string;
  category: 'fournitures' | 'paiement' | 'calendrier' | 'reglement' | 'cantine' | 'cfee';
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  targetCycleFr: string;
  targetCycleEn: string;
  updatedDate: string;
  fileSize: string;
  format: 'PDF' | 'GUIDE' | 'FICHE';
  contentSummaryFr: string[];
  contentSummaryEn: string[];
  fullPreviewFr: string;
  fullPreviewEn: string;
}

const RESOURCES_DATA: ResourceDoc[] = [
  {
    id: 'fournitures-prescolaire',
    category: 'fournitures',
    titleFr: 'Liste des Fournitures — Crèche & Maternelle (TPS, PS, MS, GS)',
    titleEn: 'School Supplies List — Daycare & Preschool (Toddler, PS, MS, GS)',
    descriptionFr: 'Matériel éducatif, tablier, cahiers de liaison et effets personnels pour les classes de la petite enfance.',
    descriptionEn: 'Educational supplies, apron, communication notebook, and personal effects for early childhood.',
    targetCycleFr: 'Crèche & Maternelle (2½ à 5 ans)',
    targetCycleEn: 'Daycare & Preschool (2½ to 5 yrs)',
    updatedDate: 'Rentrée 2026–2027',
    fileSize: '340 Ko',
    format: 'PDF',
    contentSummaryFr: [
      '1 tablier en tissu imperméable avec prénom brodé',
      '1 grand cahier de liaison (21x29,7 cm) sans spirale',
      '1 boîte de pâte à modeler végétale à base de cire naturelle',
      '1 paquet de feutres lavables à pointe large non toxiques',
      '1 boîte de mouchoirs jetables + 1 gobelet en plastique étiqueté',
      'Partenariat officiel : Librairie Clairafrique & Papeterie Saint-Paul'
    ],
    contentSummaryEn: [
      '1 waterproof fabric apron with embroidered first name',
      '1 large communication notebook (21x29.7 cm) without spiral',
      '1 box of non-toxic natural plant modeling clay',
      '1 set of washable wide-tip felt markers',
      '1 box of facial tissues + 1 labeled plastic cup',
      'Official partner: Clairafrique Bookstore & Saint-Paul Stationery'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
DIRECTION PÉDAGOGIQUE DU PRÉSCOLAIRE & DE LA CRÈCHE

LISTE OFFICIELLE DES FOURNITURES SCOLAIRES (2026–2027)

1. Effets individuels (À marquer obligatoirement au nom de l'enfant) :
• 1 tablier à manches longues en tissu lavable pour les ateliers de peinture
• 1 paquet complet de vêtements de rechange dans un sac en tissu étiqueté
• 1 serviette de table en coton + 1 gobelet en plastique incassable
• 1 boîte de 100 mouchoirs en papier + 1 paquet de lingettes hypoallergéniques

2. Matériel d'éveil et de psychomotricité :
• 1 boîte de 12 crayons de cire gros modules (forme ergonomique)
• 1 boîte de pâte à modeler végétale de 6 bâtons
• 1 paire de ciseaux à bouts ronds 12 cm (spéciale gaucher ou droitier)
• 2 tubes de colle blanche sans solvant à applicateur plat
• 1 ardoise blanche double face (quadrillée et unie) avec 2 feutres effaçables

3. Cahiers et supports de liaison :
• 1 cahier de correspondance grand format 96 pages (couverture plastifiée bleue)
• 1 porte-vues 40 vues pour le recueil des comptines et poésies de l'année

Lieu de distribution partenaire : Librairie Clairafrique (Avenue Jean Jaurès, Dakar).`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
PRESCHOOL & DAYCARE ACADEMIC DIRECTION

OFFICIAL SCHOOL SUPPLIES CHECKLIST (2026–2027)

1. Personal Items (Must be clearly labeled with student's name):
• 1 long-sleeve washable fabric apron for arts and sensory workshops
• 1 complete spare change of clothes in a labeled fabric pouch
• 1 cotton napkin + 1 shatterproof plastic cup
• 1 box of 100 paper facial tissues + 1 pack of hypoallergenic baby wipes

2. Early Sensory & Motor Skill Equipment:
• 1 box of 12 large wax crayons (ergonomic triangular grip)
• 1 box of natural plant modeling clay (6 bars)
• 1 pair of 12cm blunt-tip child safety scissors
• 2 tubes of non-toxic solvent-free glue sticks
• 1 dual-sided mini whiteboard with 2 dry-erase markers

3. Communication Notebooks:
• 1 large communication notebook (96 pages, blue plasticized cover)
• 1 display book (40 sleeves) for rhymes and project portfolio

Available at partner bookstores: Clairafrique Dakar & Papeterie Saint-Paul.`
  },
  {
    id: 'fournitures-elementaire',
    category: 'fournitures',
    titleFr: 'Liste des Fournitures — Cycle Élémentaire (CP, CE1, CE2, CM1, CM2)',
    titleEn: 'School Supplies List — Elementary School (CP to CM2)',
    descriptionFr: 'Manuels de français et de mathématiques (programme APC sénégalais), cahiers Seyès et trousse complète.',
    descriptionEn: 'French and Mathematics textbooks (Senegalese APC curriculum), Seyès notebooks, and complete pencil case.',
    targetCycleFr: 'Élémentaire (6 à 11 ans)',
    targetCycleEn: 'Elementary (6 to 11 yrs)',
    updatedDate: 'Rentrée 2026–2027',
    fileSize: '410 Ko',
    format: 'PDF',
    contentSummaryFr: [
      'Manuels agréés par le Ministère de l’Éducation Nationale du Sénégal',
      'Cahiers de devoirs et du jour grand format Seyès grands carreaux',
      'Matériel de géométrie : règle 30 cm, équerre, compas à bague, rapporteur',
      'Dictionnaire Le Robert Junior ou Larousse Débutants',
      'Annales officielles de révision du CFEE pour les élèves de CM2',
      'Couvertures protège-cahiers transparentes obligatoires'
    ],
    contentSummaryEn: [
      'Textbooks certified by Senegalese Ministry of National Education',
      'Daily work and homework Seyès grid notebooks',
      'Geometry tools: 30cm ruler, triangle set square, screw compass, protractor',
      'Junior French dictionary (Le Robert Junior or Larousse)',
      'Official CFEE preparation booklet for Grade 5 (CM2) pupils',
      'Clear transparent notebook protective covers required'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
DIRECTION DE L'ÉCOLE ÉLÉMENTAIRE

FOURNITURES PÉDAGOGIQUES DU CP AU CM2 (PROGRAMME APC SÉNÉGAL)

1. Manuels Scolaires Fondamentaux :
• Langue et Communication : "Sidi et Rama" (CP/CE1) / "L'Enfant et la Lecture" (CE2/CM)
• Mathématiques : Collection "Champion en Maths Sénégal" (CP au CM2)
• ESVS (Histoire, Géo, Sciences d'observation) : Livret d'activités conforme IEF Almadies
• Dictionnaire recommandé : Le Robert Junior illustré (à partir du CE1)

2. Cahiers réglementaires :
• 4 cahiers grand format (21x29,7 cm) 96 pages Seyès (devoirs, leçons du jour)
• 2 cahiers d'évaluation 96 pages Seyès (gardés sous clef par l'enseignant)
• 1 cahier de travaux pratiques (pages blanches et grands carreaux) pour les sciences
• 1 cahier de textes / agenda scolaire pour la notation quotidienne des devoirs

3. Trousse complète et instruments :
• 3 stylos à bille (bleu, vert, rouge - stylo noir interdit au primaire)
• 2 crayons graphite HB + 1 gomme blanche sans résidu + 1 taille-crayon avec réservoir
• 1 règle plate rigide de 30 cm (en plastique transparent, pas de métal)
• Kit de géométrie (à partir du CE2) : équerre à 60°, compas à vis, rapporteur 180°

Disponibilité garantie : Librairie Clairafrique & Saint-Paul Dakar.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
ELEMENTARY SCHOOL DIRECTION

CURRICULUM SUPPLIES FOR CP TO CM2 (SENEGALESE APC STANDARDS)

1. Core Academic Textbooks:
• French & Communication: "Sidi et Rama" (CP/CE1) / "L'Enfant et la Lecture" (CE2/CM)
• Mathematics: "Champion en Maths Sénégal" series (CP to CM2)
• Science & Social Studies (ESVS): Activity book accredited by IEF Almadies
• Recommended Dictionary: Le Robert Junior (from Grade 2 / CE1 onward)

2. Standard Exercise Books:
• 4 large-format (21x29.7cm) 96-page Seyès ruled notebooks
• 2 official examination and test notebooks (retained by class teachers)
• 1 science lab notebook (alternating blank and grid pages)
• 1 daily student planner/agenda for homework notation

3. Pencil Case and Measurement Instruments:
• 3 ballpoint pens (blue, green, red; black ink prohibited in primary grades)
• 2 HB pencils + 1 white eraser + 1 pencil sharpener with container
• 1 transparent 30cm rigid ruler (no metal)
• Geometry kit (from CE2 onward): set square, screw compass, 180° protractor

Stock available at Clairafrique & Saint-Paul Bookstores Dakar.`
  },
  {
    id: 'guide-schoolmatik-paiements',
    category: 'paiement',
    titleFr: 'Guide Schoolmatik & Modalités de Paiement Dématérialisé',
    titleEn: 'Schoolmatik Guide & Cashless Payment Instructions',
    descriptionFr: 'Réglez les frais de scolarité par Wave, Orange Money ou virement bancaire sans déplacement au secrétariat.',
    descriptionEn: 'Pay tuition and registration fees via Wave, Orange Money, or bank transfer with zero queuing.',
    targetCycleFr: 'Tous cycles (Parents d’élèves)',
    targetCycleEn: 'All cycles (Parents)',
    updatedDate: 'Année 2026–2027',
    fileSize: '520 Ko',
    format: 'GUIDE',
    contentSummaryFr: [
      'Paiement sans frais supplémentaires par Wave (Paiement Marchand)',
      'Orange Money : Composer le code marchand officiel de l’école',
      'Génération instantanée du reçu de caisse électronique horodaté',
      'Échéancier des mensualités : du 1er au 5 de chaque mois civil',
      'Virement bancaire direct sur le compte CBAO de l’établissement',
      'Support d’assistance aux parents joignable du lundi au vendredi'
    ],
    contentSummaryEn: [
      'Fee-free mobile payment via Wave Merchant QR & phone',
      'Orange Money: Dial the official school merchant USSD code',
      'Instant electronic receipt generation with timestamp',
      'Monthly fee schedule: payable between 1st and 5th of each month',
      'Direct bank transfer to the school’s CBAO checking account',
      'Parent assistance desk available Monday through Friday'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
SERVICE DE L'INTENDANCE & DE LA COMPTABILITÉ

GUIDE OFFICIEL DES PAIEMENTS DÉMATÉRIALISÉS (PLATEFORME SCHOOLMATIK)

Chers parents,
Pour vous éviter les déplacements et les longues files d'attente au secrétariat de Yoff, l'établissement est connecté à la solution sécurisée Schoolmatik.

1. Paiement via WAVE (0% de frais) :
• Ouvrez votre application Wave sur votre smartphone.
• Appuyez sur "Payer un marchand" ou scannez le QR Code officiel affiché sur votre facture.
• Tapez le nom de l'établissement : "PRESENTATION DE MARIE YOFF".
• Renseignez le MATRICULE DE L'ÉLÈVE (ex: PMY-2026-XXXX) et le mois concerné.
• Validez la transaction : un reçu PDF vous est immédiatement expédié par SMS.

2. Paiement via ORANGE MONEY :
• Composez le #144#391# ou utilisez l'application Orange Money Sénégal.
• Code Marchand PMY : 589421.
• Précisez le nom et la classe de l'enfant dans le libellé.

3. Virement Bancaire (Pour les entreprises et ordres de virement permanents) :
• Banque : CBAO Groupe Attijariwafa Bank
• Intitulé : Congrégation Présentation de Marie - École de Yoff
• RIB : SN012 01101 003456789012 45
• Veuillez transmettre l'avis de débit par WhatsApp au : +221 77 654 32 10.

Calendrier des échéances : Les mensualités sont exigibles entre le 1er et le 5 de chaque mois.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
BURSAR & ACCOUNTING DEPARTMENT

CASHLESS TUITION PAYMENT PROTOCOL (SCHOOLMATIK INTEGRATION)

Dear Parents,
To eliminate long waiting lines at the Yoff campus administrative desk, Présentation de Marie offers direct online and mobile payments via Schoolmatik.

1. Payment via WAVE (Zero extra processing fees):
• Open the Wave app on your smartphone.
• Tap "Pay a merchant" or scan the official school QR Code on your billing notice.
• Search for merchant: "PRESENTATION DE MARIE YOFF".
• Enter your child's STUDENT ID NUMBER (e.g. PMY-2026-XXXX) and the target month.
• Confirm: you immediately receive an electronic timestamped receipt via SMS.

2. Payment via ORANGE MONEY:
• Dial #144#391# or open the Orange Money Senegal app.
• Official PMY Merchant Code: 589421.
• Indicate student full name and grade level in the transaction memo.

3. Direct Bank Wire (Recommended for corporate and automated recurring payments):
• Bank: CBAO Attijariwafa Bank Group Dakar
• Account: Congrégation Présentation de Marie - École de Yoff
• Bank RIB: SN012 01101 003456789012 45
• Forward transfer slips via WhatsApp to: +221 77 654 32 10.

Due Dates: Tuition fees are due strictly between the 1st and 5th of each calendar month.`
  },
  {
    id: 'calendrier-scolaire-2026',
    category: 'calendrier',
    titleFr: 'Calendrier Scolaire & Vacances 2026–2027 (ODEC & MEN)',
    titleEn: 'Academic Calendar & Holidays 2026–2027 (ODEC & Ministry)',
    descriptionFr: 'Dates officielles de rentrée, examens trimestriels, compositions du CFEE et congés scolaires au Sénégal.',
    descriptionEn: 'Official dates for school reopening, term exams, CFEE mock tests, and religious/national holidays.',
    targetCycleFr: 'Maternelle & Élémentaire',
    targetCycleEn: 'Preschool & Elementary',
    updatedDate: 'Arrêté ministériel 2026',
    fileSize: '290 Ko',
    format: 'PDF',
    contentSummaryFr: [
      'Rentrée générale des classes : Début Octobre 2026',
      '1er Trimestre : Compositions fin novembre / Congés de Noël le 23 décembre',
      '2ème Trimestre : Reprise le 5 janvier / Congés de Pâques fin mars',
      '3ème Trimestre : Examen blanc du CFEE fin mai / Épreuves officielles fin juin',
      'Célébration de la Fête de Sainte Marie Rivier (Fondatrice) le 3 février',
      'Respect scrupuleux des fêtes chrétiennes et musulmanes (Korité, Tabaski, Magal)'
    ],
    contentSummaryEn: [
      'General School Reopening: Early October 2026',
      'Term 1: Exams late November / Christmas Holidays starting December 23',
      'Term 2: Classes resume January 5 / Easter Break late March',
      'Term 3: CFEE Mock Exam late May / National CFEE examinations late June',
      'Feast of Saint Marie Rivier (Foundress) celebrated on February 3',
      'Honoring both Christian and Islamic holidays (Korite, Tabaski, Magal, Tamkharit)'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
CALENDRIER PÉDAGOGIQUE OFFICIEL — ANNÉE SCOLAIRE 2026–2027

Conforme aux arrêtés du Ministère de l'Éducation Nationale et de l'Office de l'Enseignement Catholique (ODEC Dakar).

1. PREMIER TRIMESTRE (Octobre – Décembre) :
• Rentrée des enseignants : Lundi 28 Septembre 2026
• Rentrée générale des élèves (Crèche, Maternelle, Élémentaire) : Jeudi 1er Octobre 2026
• Fête de la Toussaint : Dimanche 1er Novembre 2026 (férié)
• Période des premières évaluations formatives : Du 16 au 20 Novembre 2026
• Évaluations du 1er Trimestre : Du 7 au 11 Décembre 2026
• Départ en congés de Noël & Nouvel An : Vendredi 18 Décembre 2026 après la classe

2. DEUXIÈME TRIMESTRE (Janvier – Mars) :
• Reprise des cours : Lundi 4 Janvier 2027 à 08h00
• Fête Patronale de Sainte Marie Rivier : Mercredi 3 Février 2027 (Célébration & Kermesse)
• Évaluations du 2ème Trimestre : Du 8 au 12 Mars 2027
• Départ en congés de Pâques : Vendredi 26 Mars 2027

3. TROISIÈME TRIMESTRE & EXAMENS DU CFEE (Avril – Juillet) :
• Reprise des cours : Lundi 12 Avril 2027
• Fête Nationale de l'Indépendance : Dimanche 4 Avril 2027
• Examen Blanc du CFEE & Entrée en 6ème (CM2) : Du 17 au 19 Mai 2027
• Compositions de fin d'année (CP au CM1) : Du 7 au 11 Juin 2027
• Épreuves officielles nationales du CFEE (Centre de Yoff) : Fin Juin 2027
• Clôture de l'année scolaire et proclamation des résultats : Vendredi 9 Juillet 2027.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
OFFICIAL ACADEMIC TIMELINE — SCHOOL YEAR 2026–2027

In strict compliance with the Senegalese Ministry of National Education and Catholic Education Office (ODEC Dakar).

1. FIRST TERM (October – December):
• Faculty & Staff Reopening: Monday, September 28, 2026
• Student Reopening (Daycare, Preschool, Elementary): Thursday, October 1, 2026
• All Saints' Day: Sunday, November 1, 2026
• Term 1 Mid-term Assessment: November 16–20, 2026
• Term 1 Final Examinations: December 7–11, 2026
• Christmas & New Year Break: Friday, December 18, 2026 (after school dismissal)

2. SECOND TERM (January – March):
• School Resumes: Monday, January 4, 2027 at 08:00 AM
• Feast Day of Saint Marie Rivier (Foundress): Wednesday, February 3, 2027
• Term 2 Final Examinations: March 8–12, 2027
• Easter Holiday Break: Friday, March 26, 2027

3. THIRD TERM & CFEE EXAMINATIONS (April – July):
• Classes Resume: Monday, April 12, 2027
• Senegal Independence Day: Sunday, April 4, 2027
• Official Mock CFEE Exam for Grade 5 (CM2): May 17–19, 2027
• Annual Promotional Examinations (CP to CM1): June 7–11, 2027
• National CFEE & 6th Grade Entrance Exam: Late June 2027
• Closing Ceremony & Graduation: Friday, July 9, 2027.`
  },
  {
    id: 'reglement-interieur-2026',
    category: 'reglement',
    titleFr: 'Règlement Intérieur & Charte de Discipline et Sécurité',
    titleEn: 'Internal Regulations & School Code of Discipline',
    descriptionFr: 'Code vestimentaire, fermeture stricte des grilles à 07h45, utilisation des téléphones et vivre-ensemble.',
    descriptionEn: 'Dress code, strict gate closure at 07:45 AM, smartphone prohibition, and respectful community rules.',
    targetCycleFr: 'Crèche, Maternelle & Élémentaire',
    targetCycleEn: 'Daycare, Preschool & Elementary',
    updatedDate: 'Conseil d’Établissement 2026',
    fileSize: '380 Ko',
    format: 'PDF',
    contentSummaryFr: [
      'Horaires : Grilles fermées à 07h45 pour la levée des couleurs et la prière',
      'Tenue obligatoire : Chemisette blanche à écusson et bermuda/jupe bleu marine',
      'Interdiction absolue des téléphones portables et tablettes chez les élèves',
      'Absences et retards : Justificatif médical exigé après 48 heures',
      'Sécurité : Sortie autorisée uniquement avec la carte parent officielle',
      'Vivre-ensemble : Fraternité sincère entre élèves chrétiens et musulmans'
    ],
    contentSummaryEn: [
      'Hours: Gates locked at 07:45 AM for flag raising and morning prayer',
      'Uniform: White crested shirt and navy blue shorts/pleated skirt',
      'Smartphones, electronic tablets, and toys strictly forbidden',
      'Absences & Tardiness: Written medical certificate required after 48 hrs',
      'Student Release: Authorized exclusively with parent identity card',
      'Mutual Respect: Sincere brotherhood among Christian and Muslim students'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
CONSEIL DE DIRECTION & DIRECTION PÉDAGOGIQUE

RÈGLEMENT INTÉRIEUR & CHARTE DE VIE SCOLAIRE (EXTRAIT OFFICIEL)

Article 1 : Horaires et Ponctualité
L'accueil des élèves débute à 07h15. La grille de l'école est fermée à 07h45 précises. La montée des couleurs nationales et la prière de méditation matinale ont lieu à 07h50. Tout élève en retard ne pourra être admis en classe qu'après visa du carnet au bureau du surveillant général.

Article 2 : Tenue Vestimentaire & Uniforme Officiel
Le port de la tenue de l'école est obligatoire tous les jours ouvrables :
• Pour les garçons : Chemisette blanche avec écusson brodé Présentation de Marie, pantalon ou bermuda bleu marine, chaussures fermées plates (sandales et tongs strictement proscrites).
• Pour les filles : Chemisier blanc avec écusson, jupe plissée ou chasuble bleu marine recouvrant les genoux, coiffure soignée et discrète.
• Les jours d'Éducation Physique et Sportive (EPS) : Survêtement officiel de l'école et baskets.

Article 3 : Sécurité & Prise en Charge des Enfants
Pour la sécurité des tout-petits de la maternelle et du CP, aucun enfant ne peut quitter l'établissement sans la présentation du "Pass Parents / Tuteur" délivré lors de l'inscription. En cas d'empêchement, le secrétariat doit être prévenu par écrit.

Article 4 : Équipements Électroniques
Les téléphones portables, tablettes, montres connectées et jeux électroniques sont rigoureusement interdits dans l'enceinte de l'école. En cas de constatation, l'appareil sera confisqué et remis uniquement aux parents à la fin du trimestre.

Article 5 : Respect du Cadre de Vie & Esprit de Famille
L'établissement Présentation de Marie est une école de respect, de propreté et de paix. Tout propos injurieux, acte d'irrespect envers le personnel enseignant ou les camarades, ainsi que toute dégradation du mobilier scolaire, feront l'objet de sanctions disciplinaires immédiates.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
MANAGEMENT BOARD & SCHOOL DISCIPLINE

INTERNAL REGULATIONS & CODE OF CONDUCT (OFFICIAL EXCERPT)

Article 1: Punctuality and School Hours
School gates open at 07:15 AM and close promptly at 07:45 AM. National flag salutation and morning prayer occur at 07:50 AM sharp. Late arrivals must report to the Dean of Discipline's office for authorization before joining class.

Article 2: Official Uniform & Dress Code
The school uniform is mandatory for all students Monday through Friday:
• Boys: White buttoned shirt with embroidered school crest, navy blue pants or bermudas, closed flat dark shoes (flip-flops and open sandals strictly prohibited).
• Girls: White crested blouse, navy blue pleated skirt or jumper falling below the knees, neat and modest hairstyle.
• Physical Education (PE) days: Official school tracksuit and sports shoes.

Article 3: Child Safety and Campus Dismissal
For child safeguarding (especially Daycare, Preschool, and Grade 1), no student may leave campus without the physical presentation of the authorized Parent Pass issued at registration.

Article 4: Electronic Devices
Mobile phones, tablets, smartwatches, and video games are strictly prohibited on campus. Confiscated devices will only be returned to legal parents at the end of the academic term.

Article 5: Mutual Respect & Family Values
Présentation de Marie promotes clean habits, Christian and civic moral values, and interfaith fellowship. Insubordination, bullying, profanity, or vandalism will result in immediate disciplinary measures.`
  },
  {
    id: 'cantine-menu-semaine',
    category: 'cantine',
    titleFr: 'Menu Hebdomadaire de la Cantine & Règles d’Hygiène (100% Halal)',
    titleEn: 'Weekly Halal Cafeteria Menu & Food Hygiene Standards',
    descriptionFr: 'Repas sénégalais et équilibrés cuisinés sur place chaque matin par les cuisinières de l’établissement.',
    descriptionEn: 'Nutritious balanced Senegalese meals prepared fresh daily on campus by dedicated culinary staff.',
    targetCycleFr: 'Crèche, Maternelle & Élémentaire',
    targetCycleEn: 'Daycare, Preschool & Elementary',
    updatedDate: 'Mis à jour hebdomadaire',
    fileSize: '310 Ko',
    format: 'FICHE',
    contentSummaryFr: [
      'Alimentation 100% Halal respectueuse de tous les élèves',
      'Lundi : Thiéboudienne Penda Mbaye au poisson frais & mangues fraîches',
      'Mardi : Yassa au poulet fermier, riz blanc de la vallée & yaourt local',
      'Jeudi : Mafé au bœuf tendre & légumes locaux (carottes, manioc, chou)',
      'Vendredi : Poisson braisé aux vermicelles parfumés & fruits de saison',
      'Goûters vitaminés servis à 10h00 pour la maternelle'
    ],
    contentSummaryEn: [
      '100% Halal compliant kitchen catering to all student diets',
      'Monday: Traditional Thiéboudienne fish rice & fresh seasonal mangoes',
      'Tuesday: Mild chicken Yassa with steamed rice & locally made yogurt',
      'Thursday: Tender beef Mafé peanut stew with fresh local vegetables',
      'Friday: Braised coastal fish with fragrant vermicelli & fresh fruit',
      'Nutritious morning fruit snacks at 10:00 AM for kindergarteners'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
SERVICE DE RESTAURATION SCOLAIRE & HYGIÈNE ALIMENTAIRE

MENU TYPE DE LA CANTINE SCOLAIRE (REPAS 100% HALAL, PRÉPARÉS SUR PLACE)

Sous le contrôle quotidien d'un responsable d'hygiène et de la Sœur Économe.

• LUNDI :
  - Plat principal : Thiéboudienne traditionnel (Riz au poisson blanc de la côte dakaroise, carottes, manioc, chou doux et tamarin).
  - Dessert : Quartiers de fruits de saison (mangues de Casamance ou bananes douces).
  - Boisson : Eau minérale filtrée et jus de bissap maison peu sucré.

• MARDI :
  - Plat principal : Yassa au poulet fermier mijoté à l'oignon doux et citron de brousse, servi avec riz blanc étuvé de la Vallée du Fleuve Sénégal.
  - Dessert : Yaourt crémeux nature pasteurisé.

• MERCREDI (Journée continue pour les inscrits à l'étude surveillée) :
  - Plat principal : Gratin de macaroni à la viande hachée de bœuf tendre et sauce tomate fraîche.
  - Dessert : Pomme croquante.

• JEUDI :
  - Plat principal : Mafé authentique au bœuf mijoté à la pâte d'arachide naturelle, patates douces et légumes frais.
  - Dessert : Compote de fruits maison sans conservateurs.

• VENDREDI :
  - Plat principal : Poisson noble grillé aux épices douces, vermicelles sautés aux petits légumes croquants.
  - Dessert : Tranches de pastèque fraîche ou melon doux.

Régimes particuliers & allergies : Prière de le notifier par écrit sur la fiche sanitaire lors de l'inscription.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
CAFETERIA SERVICES & HEALTH STANDARDS

STANDARD WEEKLY MENU (100% HALAL, COOKED FRESH ON CAMPUS)

Monitored daily by our food safety supervisor and the Sister Bursar.

• MONDAY:
  - Main Course: Traditional Senegalese Thiéboudienne (Fresh local whitefish, vegetables, tamarind sauce).
  - Dessert: Fresh seasonal fruit slices (mangoes or bananas).
  - Beverage: Micro-filtered water and homemade low-sugar hibiscus bissap juice.

• TUESDAY:
  - Main Course: Mild Chicken Yassa with stewed caramelized onions and steamed domestic rice.
  - Dessert: Local pasteurized fresh yogurt.

• WEDNESDAY (For pupils enrolled in after-school study care):
  - Main Course: Baked pasta casserole with minced lean beef and fresh tomato concassé.
  - Dessert: Crisp apple.

• THURSDAY:
  - Main Course: Rich Beef Mafé peanut stew with sweet potatoes and garden vegetables.
  - Dessert: Homemade natural applesauce.

• FRIDAY:
  - Main Course: Mild spiced grilled fish fillet with sautéed garden vermicelli.
  - Dessert: Fresh watermelon wedges.

Food allergies and specific dietary needs must be indicated on the medical admission card.`
  },
  {
    id: 'fiches-cfee-annales',
    category: 'cfee',
    titleFr: 'Annales & Fiches de Révision — Examen du CFEE & Entrée en 6ème',
    titleEn: 'CFEE Examination Papers & Grade 6 Entrance Prep Sheets',
    descriptionFr: '100% de réussite historique : sujets types de Français, Mathématiques et ESVS selon l’APC.',
    descriptionEn: '100% historic pass rate: sample exam tests in French, Mathematics, and Science & Social Studies.',
    targetCycleFr: 'Élémentaire (CM1 – CM2)',
    targetCycleEn: 'Elementary (CM1 – CM2)',
    updatedDate: 'Sessions 2024–2026',
    fileSize: '680 Ko',
    format: 'FICHE',
    contentSummaryFr: [
      'Langue et Communication : Contrôle des ressources, compréhension et dictée',
      'Mathématiques : Numération, opérations, mesures et résolution de problèmes',
      'ESVS : Histoire du Sénégal, géographie économique et éducation civique',
      'Conseils méthodologiques rédigés par les maîtres chevronnés de PMY',
      'Barèmes de notation officiels de l’Inspection de l’Éducation d’Almadies',
      'Taux d’admission en 6ème : 100% des élèves orientés au collège'
    ],
    contentSummaryEn: [
      'Language & Communication: Reading comprehension, grammar, and dictation',
      'Mathematics: Number theory, operations, metric system, and word problems',
      'Science & Social Studies: Senegalese history, geography, and civic morals',
      'Methodology tips written by senior PMY elementary teachers',
      'Official grading scale applied by the Almadies Education Inspectorate',
      'Secondary school entrance rate: 100% of candidates admitted'
    ],
    fullPreviewFr: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
CELLULE PÉDAGOGIQUE DU CYCLE 3 (CM1 – CM2)

ANNALES D'ENTRAÎNEMENT AU CERTIFICAT DE FIN D'ÉTUDES ÉLÉMENTAIRES (CFEE)

Présentation de Marie maintient un taux historique de 100% de réussite au CFEE. Voici un extrait des épreuves d'entraînement :

ÉPREUVE 1 : LANGUE ET COMMUNICATION
I. Contrôle des Ressources (40 points)
• Grammaire : Nature et fonction des propositions subordonnées relatives.
• Conjugaison : Passé simple et imparfait de l'indicatif pour le récit d'action.
• Vocabulaire : Famille de mots autour de "solidarité" et "citoyenneté".
• Orthographe : Accord des participes passés employés avec l'auxiliaire être et avoir.

II. Compréhension de Texte & Production d'Écrits (60 points)
• Texte support : La préservation des ressources maritimes sur la côte dakaroise.
• Consigne : Rédigez un texte argumentatif de 15 lignes invitant les riverains de Yoff à maintenir les plages propres.

ÉPREUVE 2 : MATHÉMATIQUES & RÉSOLUTION DE PROBLÈMES
• Exercice 1 : Calcul de la surface d'un champ trapézoïdal et rendement en arachide.
• Exercice 2 : Calcul de la vitesse moyenne d'un véhicule de transport entre Dakar et Thiès.
• Exercice 3 : Problème financier : Prix d'achat, frais de transport, bénéfice et prix de vente d'un lot de fournitures scolaires.

ÉPREUVE 3 : ÉDUCATION À LA SCIENCE ET À LA VIE SOCIALE (ESVS)
• Histoire : La résistance anticoloniale au Sénégal (Aline Sitoé Diatta, El Hadj Oumar Tall, Cheikh Ahmadou Bamba).
• Géographie : Les grands ensembles climatiques du Sénégal et l'importance du fleuve Sénégal.
• Éducation Civique : Les institutions de la République du Sénégal et les devoirs du citoyen responsable.`,
    fullPreviewEn: `GROUPE SCOLAIRE PRÉSENTATION DE MARIE — YOFF (DAKAR)
SENIOR ELEMENTARY FACULTY (CM1 – CM2)

CFEE (CERTIFICAT DE FIN D'ÉTUDES ÉLÉMENTAIRES) REVISION HANDBOOK

Présentation de Marie proudly upholds a 100% pass rate at the CFEE. Below are sample training sections:

EXAM 1: LANGUAGE & COMMUNICATION
I. Grammar & Linguistic Resources (40 pts)
• Syntax: Identification of subordinate clauses and relative pronouns.
• Conjugation: Past historic vs imperfect tense within narrative discourse.
• Vocabulary: Semantic field around "community", "solidarity", and "civic duty".
• Spelling: Agreement of past participles with auxiliary verbs.

II. Reading Comprehension & Composition (60 pts)
• Passage: Protecting marine biodiversity on Dakar's Atlantic coastline.
• Prompt: Write a 15-line persuasive essay urging Yoff residents to maintain spotless beaches.

EXAM 2: MATHEMATICS & PROBLEM SOLVING
• Problem 1: Calculating trapezoid field land areas and crop yields.
• Problem 2: Speed, distance, and transit time calculations between Dakar and Thiès.
• Problem 3: Commercial arithmetic: wholesale cost, transport markup, and net profit margins.

EXAM 3: SCIENCE & SOCIAL STUDIES (ESVS)
• History: Key figures of anti-colonial resistance in Senegal.
• Geography: Climatic zones of Senegal and natural water basins.
• Civic Education: Democratic institutions of Senegal and child citizen responsibilities.`
  }
];

export const HomeResourcesSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreviewDoc, setActivePreviewDoc] = useState<ResourceDoc | null>(null);

  const categories = [
    { id: 'all', labelFr: 'Tous les Documents', labelEn: 'All Documents' },
    { id: 'fournitures', labelFr: 'Fournitures 2026–2027', labelEn: 'School Supplies' },
    { id: 'paiement', labelFr: 'Guide Schoolmatik & Frais', labelEn: 'Schoolmatik & Fees' },
    { id: 'calendrier', labelFr: 'Calendrier & Vacances', labelEn: 'Calendar & Holidays' },
    { id: 'reglement', labelFr: 'Règlement & Discipline', labelEn: 'Regulations' },
    { id: 'cantine', labelFr: 'Cantine 100% Halal', labelEn: 'Halal Cafeteria' },
    { id: 'cfee', labelFr: 'Annales & Fiches CFEE', labelEn: 'CFEE Prep Sheets' },
  ];

  const filteredDocs = RESOURCES_DATA.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const title = lang === 'fr' ? doc.titleFr : doc.titleEn;
    const desc = lang === 'fr' ? doc.descriptionFr : doc.descriptionEn;
    const matchesQuery = 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handlePrint = (doc: ResourceDoc) => {
    setActivePreviewDoc(doc);
    setTimeout(() => {
      window.print();
    }, 250);
  };

  return (
    <section className="py-16 bg-white border-b border-stone-200" id="ressources-officielles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-50 px-3 py-1 rounded-xs text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 mb-3">
              <BookMarked className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === 'fr' ? 'Espace Parents & Pédagogie' : 'Parent & Academic Portal'}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F294A] tracking-tight">
              {lang === 'fr' ? 'Ressources, Guides & Téléchargements' : 'Resources, Guides & Official Downloads'}
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {lang === 'fr'
                ? "Retrouvez tous les documents officiels indispensables pour l'année scolaire 2026–2027 : listes de fournitures par niveau, instructions Schoolmatik, calendrier ministériel, menu de la cantine et annales du CFEE."
                : "Access all essential official documents for the 2026–2027 academic year: school supply lists by grade, Schoolmatik cashless guides, ministry calendar, cafeteria menu, and CFEE mock sheets."}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-mono font-bold text-stone-500 block">
              {filteredDocs.length} {lang === 'fr' ? 'documents disponibles' : 'documents available'}
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center justify-end gap-1 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Accès libre et sans inscription' : 'Free access, no registration required'}</span>
            </span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher un document (ex: fournitures, Wave, CFEE, menu)...' : 'Search documents (e.g. supplies, Wave, CFEE, menu)...'}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF8F5] border border-stone-300 rounded-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#0F294A] focus:ring-1 focus:ring-[#0F294A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Tabs (Single line with clean overflow) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors rounded-xs cursor-pointer ${
                    isActive
                      ? 'bg-[#0F294A] text-white shadow-xs'
                      : 'text-stone-600 bg-stone-100 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {lang === 'fr' ? cat.labelFr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const title = lang === 'fr' ? doc.titleFr : doc.titleEn;
            const desc = lang === 'fr' ? doc.descriptionFr : doc.descriptionEn;
            const cycle = lang === 'fr' ? doc.targetCycleFr : doc.targetCycleEn;
            const summaries = lang === 'fr' ? doc.contentSummaryFr : doc.contentSummaryEn;

            return (
              <div
                key={doc.id}
                className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 flex flex-col justify-between hover:border-stone-300 hover:shadow-xs transition-all text-left"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3 text-[11px] text-stone-500">
                    <span className="font-mono font-bold uppercase tracking-wider text-[#0F294A]">
                      {doc.format} · {doc.fileSize}
                    </span>
                    <span className="text-amber-800 font-medium">
                      {doc.updatedDate}
                    </span>
                  </div>

                  {/* Target Cycle Tag */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-white border border-stone-300 text-stone-700 px-2 py-0.5 rounded-xs">
                      {cycle}
                    </span>
                  </div>

                  {/* Document Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F294A] leading-snug mb-2">
                    {title}
                  </h3>

                  {/* Brief description */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Quick summary highlights */}
                  <div className="space-y-1.5 mb-5 bg-white p-3 rounded-md border border-stone-200/80">
                    <div className="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">
                      {lang === 'fr' ? 'Points clés inclus :' : 'Included highlights:'}
                    </div>
                    {summaries.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                        <span className="text-amber-600 font-bold shrink-0">•</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActivePreviewDoc(doc)}
                    className="flex-1 px-3 py-2 text-xs font-semibold text-[#0F294A] bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'fr' ? 'Consulter le texte' : 'Read Full Text'}</span>
                  </button>

                  <button
                    onClick={() => handlePrint(doc)}
                    className="px-3 py-2 text-xs font-semibold text-white bg-[#0F294A] hover:bg-[#1E3A8A] rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    title={lang === 'fr' ? 'Imprimer ou sauvegarder en PDF' : 'Print or save as PDF'}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{lang === 'fr' ? 'Imprimer' : 'Print'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredDocs.length === 0 && (
          <div className="py-12 text-center bg-stone-50 border border-dashed border-stone-300 rounded-xl">
            <FileText className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <div className="font-serif text-lg font-bold text-stone-800">
              {lang === 'fr' ? 'Aucun document ne correspond à votre recherche' : 'No document found for your query'}
            </div>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              {lang === 'fr' 
                ? 'Essayez de modifier votre mot-clé ou sélectionnez "Tous les Documents" pour réinitialiser les filtres.' 
                : 'Try searching with different keywords or select "All Documents" to reset the filters.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#0F294A] text-white text-xs font-semibold rounded-md cursor-pointer"
            >
              {lang === 'fr' ? 'Réinitialiser la recherche' : 'Reset search'}
            </button>
          </div>
        )}

        {/* Partner Banner: Clairafrique & Saint-Paul */}
        <div className="mt-12 bg-[#0A1626] text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
              {lang === 'fr' ? 'Partenariats Librairies Scolaires' : 'Official Bookstore Partnerships'}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              {lang === 'fr' 
                ? 'Où vous procurer les manuels et uniformes officiels ?' 
                : 'Where to obtain official textbooks & uniforms?'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
              {lang === 'fr'
                ? "Les listes de manuels scolaires et de fournitures conformes aux directives de la Présentation de Marie sont disponibles auprès de la Librairie Clairafrique (Point E et Avenue Jean Jaurès) et de la Papeterie Saint-Paul de Dakar. Les écussons et tenues réglementaires sont retirés au secrétariat de l'école."
                : "Certified textbook lists and stationery complying with Présentation de Marie standards are stocked at Librairie Clairafrique (Point E and Ave Jean Jaurès) and Papeterie Saint-Paul Dakar. Official badges and uniforms are available at the campus front desk."}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+221338202113"
              className="px-5 py-3 text-xs font-semibold text-[#0F294A] bg-amber-400 hover:bg-amber-300 rounded-md transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              {lang === 'fr' ? 'Contacter l’Intendance' : 'Contact Bursar Office'}
            </a>
          </div>
        </div>

      </div>

      {/* FULL DOCUMENT PREVIEW MODAL */}
      {activePreviewDoc && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActivePreviewDoc(null)}
        >
          <div 
            className="bg-white rounded-xl border border-stone-300 shadow-2xl max-w-2xl w-full my-8 overflow-hidden flex flex-col max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0F294A] text-white flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase font-bold">
                  {activePreviewDoc.format} · {activePreviewDoc.updatedDate}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold leading-tight mt-0.5">
                  {lang === 'fr' ? activePreviewDoc.titleFr : activePreviewDoc.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setActivePreviewDoc(null)}
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Content View */}
            <div className="p-6 overflow-y-auto font-sans text-xs sm:text-sm text-stone-800 leading-relaxed bg-[#FCFBF9] whitespace-pre-line space-y-4">
              <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-2xs font-mono text-xs text-stone-800 leading-relaxed">
                {lang === 'fr' ? activePreviewDoc.fullPreviewFr : activePreviewDoc.fullPreviewEn}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-stone-500 font-mono">
                Document officiel · Présentation de Marie Yoff
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Imprimer / Sauvegarder' : 'Print / Save'}</span>
                </button>
                <button
                  onClick={() => setActivePreviewDoc(null)}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  {lang === 'fr' ? 'Fermer' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
