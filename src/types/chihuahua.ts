export interface ChihuahuaInfo {
  origine: string;
  poids: string;
  taille: string;
  esperanceVie: string;
  temperament: string;
  couleurs: string;
  prix: string;
}

export interface CareTip {
  category: string;
  tips: string[];
  icon: React.ReactNode;
}

export interface HealthIssue {
  nom: string;
  description: string;
  prevention: string;
  icon: React.ReactNode;
}

export interface PhotoItem {
  id: number;
  url: string;
  caption: string;
  category: string;
  alt?: string;
}

export interface Variety {
  type: string;
  description: string;
  caractéristiques: string[];
  popularité: string;
}

export interface CoatType {
  type: string;
  description: string;
  entretien: string;
  avantages: string[];
}

export interface ColorInfo {
  name: string;
  color: string;
  description?: string;
}

export interface CostBreakdown {
  category: string;
  items: {
    name: string;
    cost: string;
  }[];
}

export interface HealthSchedule {
  ageGroup: string;
  icon: React.ReactNode;
  items: string[];
}