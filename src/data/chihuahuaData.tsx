import { Home, Users, Shield, Clock, Activity, Heart, Brain, Thermometer, Baby, Award } from "lucide-react";
import { ChihuahuaInfo, CareTip, HealthIssue, PhotoItem, Variety, CoatType, ColorInfo, CostBreakdown, HealthSchedule } from "../types/chihuahua";

export const chihuahuaInfo: ChihuahuaInfo = {
  origine: "Mexique (État de Chihuahua)",
  poids: "1-3 kg",
  taille: "15-23 cm au garrot",
  esperanceVie: "12-20 ans",
  temperament: "Vif, alerte, courageux et dévoué",
  couleurs: "Toutes les couleurs sont acceptées",
  prix: "300€ à 1500€ selon l'élevage"
};

export const careTips: CareTip[] = [
  {
    category: "Alimentation",
    tips: [
      "50-150g de croquettes de haute qualité par jour",
      "Diviser en 2-3 petits repas pour éviter l'hypoglycémie",
      "Éviter la suralimentation car ils sont sujets à l'obésité",
      "Éviter le chocolat, l'avocat, les raisins (toxiques)",
      "Toujours avoir de l'eau fraîche disponible",
      "Adapter les portions selon l'âge et l'activité"
    ],
    icon: <Home className="w-5 h-5" />
  },
  {
    category: "Toilettage",
    tips: [
      "Brosser les Chihuahuas à poil court une fois par semaine",
      "Brosser les Chihuahuas à poil long 2-3 fois par semaine",
      "Bain mensuel ou selon les besoins",
      "Couper les griffes toutes les 2-3 semaines",
      "Nettoyer les oreilles hebdomadairement",
      "Brossage des dents quotidien recommandé",
      "Attention aux nœuds derrière les oreilles et sous les pattes"
    ],
    icon: <Users className="w-5 h-5" />
  },
  {
    category: "Exercice",
    tips: [
      "Le Chihuahua est un vrai chien, musclé et endurant : il a besoin de se dépenser autant qu'un grand chien",
      "Prévoyez au moins 1h de promenade quotidienne pour son équilibre physique et mental",
      "Socialisation précoce indispensable avec des chiens de toutes tailles dès le plus jeune âge",
      "Apprenez-lui à communiquer avec les grands chiens calmes au lieu de le porter systématiquement",
      "Jeux d'intérieur et stimulation mentale pour canaliser son énergie",
      "Éviter les efforts intenses par temps de canicule",
      "Attention aux escaliers trop hauts pour protéger ses articulations"
    ],
    icon: <Clock className="w-5 h-5" />
  },
  {
    category: "Santé",
    tips: [
      "Visites vétérinaires tous les 6-12 mois",
      "Surveillance des problèmes dentaires",
      "Attention à l'hypoglycémie chez les chiots",
      "Protection contre le froid (manteau en hiver)",
      "Surveillance du poids (obésité fréquente)",
      "Attention aux chutes (os fragiles)",
      "Vaccinations à jour obligatoires",
      "Vermifugation régulière"
    ],
    icon: <Shield className="w-5 h-5" />
  }
];

export const healthIssues: HealthIssue[] = [
  {
    nom: "Luxation de la rotule",
    description: "Déplacement de la rotule, fréquent chez les petites races",
    prevention: "Éviter les sauts, maintenir un poids santé",
    icon: <Activity className="w-5 h-5" />
  },
  {
    nom: "Problèmes cardiaques",
    description: "Souffle cardiaque, maladie valvulaire mitrale",
    prevention: "Exercice modéré, surveillance vétérinaire",
    icon: <Heart className="w-5 h-5" />
  },
  {
    nom: "Hydrocéphalie",
    description: "Accumulation de liquide dans le cerveau",
    prevention: "Dépistage précoce, suivi vétérinaire",
    icon: <Brain className="w-5 h-5" />
  },
  {
    nom: "Hypoglycémie",
    description: "Chute du taux de sucre dans le sang",
    prevention: "Repas fréquents, surveillance des symptômes",
    icon: <Thermometer className="w-5 h-5" />
  }
];

export const photoGallery: PhotoItem[] = [
  { id: 1, url: "/images/gallery/fawn_short_hair.png", caption: "Chihuahua à poil court couleur fauve", category: "poil-court", alt: "Chihuahua fauve à poil court" },
  { id: 2, url: "/images/gallery/chocolate_long_hair.png", caption: "Chihuahua à poil long chocolat et blanc", category: "poil-long", alt: "Chihuahua chocolat et blanc à poil long" },
  { id: 3, url: "/images/gallery/deer_head_black_tan.png", caption: "Chihuahua tête de cerf noir et feu", category: "tete-cerf", alt: "Chihuahua tête de cerf noir et feu" },
  { id: 4, url: "/images/gallery/apple_head_cream.png", caption: "Chihuahua tête de pomme crème", category: "tete-pomme", alt: "Chihuahua tête de pomme couleur crème" },
  { id: 5, url: "/images/gallery/puppy_8w.png", caption: "Chiot Chihuahua 8 semaines", category: "chiot", alt: "Chiot Chihuahua de 8 semaines" },
  { id: 6, url: "/images/gallery/senior_15y.png", caption: "Chihuahua senior 15 ans", category: "senior", alt: "Chihuahua âgé de 15 ans" },
  { id: 7, url: "/images/gallery/blue_merle.png", caption: "Chihuahua bleu merle", category: "couleur-rare", alt: "Chihuahua couleur bleu merle" },
  { id: 8, url: "/images/gallery/white_pure.png", caption: "Chihuahua blanc pur", category: "couleur-unie", alt: "Chihuahua entièrement blanc" },
  { id: 9, url: "/images/gallery/tricolor.png", caption: "Chihuahua tricolore", category: "multicolore", alt: "Chihuahua aux trois couleurs" },
  { id: 10, url: "/images/gallery/walking.png", caption: "Chihuahua en balade", category: "action", alt: "Chihuahua en promenade" },
  { id: 11, url: "/images/gallery/show.png", caption: "Chihuahua en concours", category: "exposition", alt: "Chihuahua en exposition canine" },
  { id: 12, url: "/images/gallery/family.png", caption: "Chihuahua avec sa famille", category: "famille", alt: "Chihuahua avec sa famille humaine" },
  { id: 13, url: "/images/gallery/playing.png", caption: "Chihuahua jouant", category: "jeu", alt: "Chihuahua en train de jouer" },
  { id: 14, url: "/images/gallery/winter_coat.png", caption: "Chihuahua en hiver avec manteau", category: "hiver", alt: "Chihuahua portant un manteau d'hiver" },
  { id: 15, url: "/images/gallery/sleeping.png", caption: "Chihuahua dormant", category: "repos", alt: "Chihuahua endormi" }
];

export const varieties: Variety[] = [
  {
    type: "Tête de pomme",
    description: "Crâne arrondi, stop bien marqué, museau court",
    caractéristiques: ["Plus petit", "Yeux proéminents", "Fontanelle parfois ouverte"],
    popularité: "Plus répandu"
  },
  {
    type: "Tête de cerf",
    description: "Crâne plus plat, museau plus long",
    caractéristiques: ["Légèrement plus grand", "Oreilles plus grandes", "Cou plus long"],
    popularité: "Moins courant"
  }
];

export const coatTypes: CoatType[] = [
  {
    type: "Poil court",
    description: "Poil lisse, brillant, bien couché",
    entretien: "Brossage hebdomadaire",
    avantages: ["Moins d'entretien", "Idéal climat chaud"]
  },
  {
    type: "Poil long",
    description: "Poil soyeux, ondulé ou légèrement frisé",
    entretien: "Brossage 2-3 fois par semaine",
    avantages: ["Plus résistant au froid", "Très élégant"]
  }
];

export const coatColors: ColorInfo[] = [
  { name: "Fauve", color: "bg-yellow-600", description: "Couleur la plus commune" },
  { name: "Chocolat", color: "bg-amber-800", description: "Couleur riche et profonde" },
  { name: "Noir", color: "bg-gray-800", description: "Noir intense" },
  { name: "Blanc", color: "bg-white border-2 border-gray-300", description: "Blanc pur" },
  { name: "Bleu", color: "bg-blue-400", description: "Gris-bleu dilué" },
  { name: "Rouge", color: "bg-red-600", description: "Rouge profond" },
  { name: "Argent", color: "bg-gray-400", description: "Gris argenté" },
  { name: "Merle", color: "bg-gradient-to-r from-blue-400 to-gray-600", description: "Motif marbré" }
];

export const costBreakdown: CostBreakdown[] = [
  {
    category: "Coûts essentiels",
    items: [
      { name: "Alimentation", cost: "150-300€/an" },
      { name: "Vétérinaire (routine)", cost: "200-400€/an" },
      { name: "Toilettage", cost: "100-300€/an" },
      { name: "Assurance", cost: "200-600€/an" }
    ]
  },
  {
    category: "Coûts optionnels",
    items: [
      { name: "Vêtements/accessoires", cost: "50-200€/an" },
      { name: "Jouets", cost: "30-100€/an" },
      { name: "Dressage", cost: "200-500€" },
      { name: "Garde/pension", cost: "Variable" }
    ]
  }
];

export const healthSchedule: HealthSchedule[] = [
  {
    ageGroup: "Chiot (0-12 mois)",
    icon: <Baby className="w-5 h-5" />,
    items: [
      "Première vaccination à 6-8 semaines",
      "Rappels toutes les 3-4 semaines",
      "Vermifugation mensuelle",
      "Stérilisation/castration à 6 mois",
      "Identification par puce électronique"
    ]
  },
  {
    ageGroup: "Adulte (1-7 ans)",
    icon: <Activity className="w-5 h-5" />,
    items: [
      "Visite vétérinaire annuelle",
      "Rappels vaccinaux annuels",
      "Détartrage dentaire si nécessaire",
      "Vermifugation 2-4 fois/an",
      "Prévention parasitaire saisonnière"
    ]
  },
  {
    ageGroup: "Senior (7+ ans)",
    icon: <Award className="w-5 h-5" />,
    items: [
      "Visites vétérinaires semestrielles",
      "Bilans sanguins annuels",
      "Surveillance cardiaque",
      "Contrôle du poids régulier",
      "Adaptation de l'alimentation"
    ]
  }
];

export const interestingFacts = [
  "Plus petite race de chien au monde",
  "Sacrés chez les Aztèques et les Toltèques",
  "Deux variétés : poil court et poil long",
  "Ratio cerveau-corps le plus élevé de toutes les races",
  "Peuvent vivre jusqu'à 20 ans ou plus",
  "Toutes les couleurs de robe sont acceptées",
  "Excellent chien d'alarme malgré sa taille",
  "Sensibles au froid, nécessitent souvent des vêtements"
];

export const emergencySigns = {
  urgent: [
    "Difficultés respiratoires",
    "Convulsions",
    "Perte de conscience",
    "Traumatisme (chute, accident)"
  ],
  monitoring: [
    "Refus de manger plus de 24h",
    "Vomissements répétés",
    "Changement de comportement brutal",
    "Boiterie persistante"
  ]
};