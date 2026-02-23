import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Button } from "/components/ui/button"
import { Heart, Home, Users, Shield, Clock, Star, Award, Activity, Baby, Thermometer, Stethoscope, Brain, MapPin, Calendar } from "lucide-react"

export default function ChihuahuaInfoApp() {
  const [activeSection, setActiveSection] = useState('info')
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const chihuahuaInfo = {
    origine: "Mexique (État de Chihuahua)",
    poids: "1-3 kg",
    taille: "15-23 cm au garrot",
    esperanceVie: "12-20 ans",
    temperament: "Vif, alerte, courageux et dévoué",
    couleurs: "Toutes les couleurs sont acceptées",
    prix: "300€ à 1500€ selon l'élevage"
  }

  const careTips = [
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
        "20-30 minutes d'exercice par jour suffisent",
        "Promenades courtes mais fréquentes",
        "Jeux d'intérieur pour stimulation mentale",
        "Éviter les efforts intenses par temps chaud",
        "Socialisation importante dès le plus jeune âge",
        "Attention aux grands chiens lors des sorties",
        "Escaliers à éviter pour protéger les articulations"
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
  ]

  const healthIssues = [
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
  ]

  const photoGallery = [
    { id: 1, caption: "Chihuahua à poil court couleur fauve", category: "poil-court" },
    { id: 2, caption: "Chihuahua à poil long chocolat et blanc", category: "poil-long" },
    { id: 3, caption: "Chihuahua tête de cerf noir et feu", category: "tete-cerf" },
    { id: 4, caption: "Chihuahua tête de pomme crème", category: "tete-pomme" },
    { id: 5, caption: "Chiot Chihuahua 8 semaines", category: "chiot" },
    { id: 6, caption: "Chihuahua senior 15 ans", category: "senior" },
    { id: 7, caption: "Chihuahua bleu merle", category: "couleur-rare" },
    { id: 8, caption: "Chihuahua blanc pur", category: "couleur-unie" },
    { id: 9, caption: "Chihuahua tricolore", category: "multicolore" },
    { id: 10, caption: "Chihuahua en balade", category: "action" },
    { id: 11, caption: "Chihuahua en concours", category: "exposition" },
    { id: 12, caption: "Chihuahua avec sa famille", category: "famille" },
    { id: 13, caption: "Chihuahua jouant", category: "jeu" },
    { id: 14, caption: "Chihuahua en hiver avec manteau", category: "hiver" },
    { id: 15, caption: "Chihuahua dormant", category: "repos" }
  ]

  const varieties = [
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
  ]

  const coatTypes = [
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-rose-600 flex items-center gap-2">
              <Heart className="w-8 h-8" />
              Guide du Chihuahua
            </h1>
            <nav className="hidden md:flex gap-4">
              <Button 
                variant={activeSection === 'info' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('info')}
              >
                À propos
              </Button>
              <Button 
                variant={activeSection === 'varietes' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('varietes')}
              >
                Variétés
              </Button>
              <Button 
                variant={activeSection === 'photos' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('photos')}
              >
                Photos
              </Button>
              <Button 
                variant={activeSection === 'soins' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('soins')}
              >
                Soins
              </Button>
              <Button 
                variant={activeSection === 'sante' ? 'default' : 'ghost'}
                onClick={() => scrollToSection('sante')}
              >
                Santé
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-400 to-pink-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Tout sur les Chihuahuas</h2>
          <p className="text-xl mb-8">Votre guide complet sur ces compagnons minuscules mais extraordinaires</p>
          <p className="text-lg mb-8 opacity-90">
            Découvrez l'univers fascinant de la plus petite race de chien au monde
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('info')}
          >
            En savoir plus
          </Button>
        </div>
      </section>

      {/* Information Section */}
      <section id="info" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Tout sur les Chihuahuas</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-rose-600 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Fiche d'identité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Origine
                  </h3>
                  <p className="text-gray-600">{chihuahuaInfo.origine}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Poids</h3>
                  <p className="text-gray-600">{chihuahuaInfo.poids}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Taille</h3>
                  <p className="text-gray-600">{chihuahuaInfo.taille}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Espérance de vie
                  </h3>
                  <p className="text-gray-600">{chihuahuaInfo.esperanceVie}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Tempérament</h3>
                  <p className="text-gray-600">{chihuahuaInfo.temperament}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Prix d'achat</h3>
                  <p className="text-gray-600">{chihuahuaInfo.prix}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-rose-600 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Personnalité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Les Chihuahuas sont célèbres pour leur grande personnalité dans un petit corps. Malgré leur taille minuscule, 
                  ils sont confiants, audacieux et agissent souvent comme s'ils étaient beaucoup plus grands qu'ils ne le sont. 
                  Ils forment des liens très forts avec leurs propriétaires et peuvent être très protecteurs.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ces chiens intelligents apprennent rapidement mais peuvent être têtus, ce qui rend l'éducation cohérente 
                  importante dès le plus jeune âge. Ils sont parfaits comme chiens de compagnie et s'adaptent bien à la vie 
                  en appartement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Attention cependant : ils peuvent développer le "syndrome du petit chien" s'ils ne sont pas bien éduqués, 
                  devenant alors agressifs ou aboyeurs.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Faits intéressants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Plus petite race de chien au monde</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Sacrés chez les Aztèques et les Toltèques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Deux variétés : poil court et poil long</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Ratio cerveau-corps le plus élevé de toutes les races</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Peuvent vivre jusqu'à 20 ans ou plus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Toutes les couleurs de robe sont acceptées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Excellent chien d'alarme malgré sa taille</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>Sensibles au froid, nécessitent souvent des vêtements</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600">Histoire et origines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le Chihuahua tire son nom de l'État de Chihuahua au Mexique, où les premiers spécimens ont été découverts 
                au milieu du XIXe siècle. Cependant, ses origines remontent à bien plus loin dans l'histoire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les archéologues ont trouvé des preuves de chiens similaires dans les civilisations précolombiennes, 
                notamment chez les Toltèques (900-1168 après J.-C.) avec leur chien sacré appelé "Techichi". 
                Les Aztèques ont ensuite adopté ces chiens, les considérant comme des guides spirituels dans l'au-delà.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La race moderne a été développée après l'arrivée des Européens, probablement par croisement avec 
                de petits chiens européens et asiatiques. Le premier Chihuahua a été enregistré par l'American Kennel Club en 1904.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Varieties Section */}
      <section id="varietes" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Variétés de Chihuahuas</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-rose-600">Types de tête</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {varieties.map((variety, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-rose-600">{variety.type}</CardTitle>
                    <CardDescription>{variety.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Caractéristiques :</h4>
                      <ul className="space-y-1">
                        {variety.caractéristiques.map((carac, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-rose-500">•</span>
                            {carac}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500">
                      <strong>Popularité :</strong> {variety.popularité}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-rose-600">Types de poil</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coatTypes.map((coat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-rose-600">{coat.type}</CardTitle>
                    <CardDescription>{coat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Entretien :</h4>
                      <p className="text-gray-600">{coat.entretien}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Avantages :</h4>
                      <ul className="space-y-1">
                        {coat.avantages.map((avantage, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-rose-500">•</span>
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Galerie Photos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGallery.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPhoto(photo.caption)}>
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 border-2 border-dashed border-rose-300 rounded-t-lg w-full h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-rose-400 mx-auto mb-2" />
                    <span className="text-rose-600 font-medium">Photo Chihuahua</span>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-center text-gray-700 font-medium">{photo.caption}</p>
                  <div className="text-center mt-2">
                    <span className="inline-block bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full">
                      {photo.category.replace('-', ' ')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-rose-50 border-rose-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-rose-600 mb-4">Couleurs de robe acceptées</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full mx-auto mb-2"></div>
                    <span>Fauve</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-amber-800 rounded-full mx-auto mb-2"></div>
                    <span>Chocolat</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full mx-auto mb-2"></div>
                    <span>Noir</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full mx-auto mb-2"></div>
                    <span>Blanc</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2"></div>
                    <span>Bleu</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full mx-auto mb-2"></div>
                    <span>Rouge</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <span>Argent</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-gray-600 rounded-full mx-auto mb-2"></div>
                    <span>Merle</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section id="soins" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Conseils de Soins</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {careTips.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-rose-600 flex items-center gap-2">
                    {category.icon}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="text-rose-500 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600">Résumé des soins quotidiens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-rose-600">20-30 min</div>
                  <div className="text-sm text-gray-600">Exercice quotidien</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">2-3</div>
                  <div className="text-sm text-gray-600">Petits repas/jour</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">6-12</div>
                  <div className="text-sm text-gray-600">Mois entre visites véto</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">Hebdo</div>
                  <div className="text-sm text-gray-600">Toilettage</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600">Coûts d'entretien annuels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Coûts essentiels :</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Alimentation</span>
                      <span className="font-medium">150-300€/an</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vétérinaire (routine)</span>
                      <span className="font-medium">200-400€/an</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Toilettage</span>
                      <span className="font-medium">100-300€/an</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Assurance</span>
                      <span className="font-medium">200-600€/an</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Coûts optionnels :</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Vêtements/accessoires</span>
                      <span className="font-medium">50-200€/an</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Jouets</span>
                      <span className="font-medium">30-100€/an</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dressage</span>
                      <span className="font-medium">200-500€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Garde/pension</span>
                      <span className="font-medium">Variable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Health Section */}
      <section id="sante" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Santé et Problèmes Courants</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {healthIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-rose-600 flex items-center gap-2">
                    {issue.icon}
                    {issue.nom}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{issue.description}</p>
                  <div className="bg-rose-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-rose-700 mb-1">Prévention :</h4>
                    <p className="text-rose-600 text-sm">{issue.prevention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600 flex items-center gap-2">
                <Stethoscope className="w-6 h-6" />
                Signes d'urgence vétérinaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Urgences absolues :</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Difficultés respiratoires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Convulsions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Perte de conscience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Traumatisme (chute, accident)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Surveillance nécessaire :</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span>Refus de manger plus de 24h</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span>Vomissements répétés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span>Changement de comportement brutal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span>Boiterie persistante</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600">Calendrier de santé</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Baby className="w-5 h-5" />
                    Chiot (0-12 mois)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Première vaccination à 6-8 semaines</li>
                    <li>• Rappels toutes les 3-4 semaines</li>
                    <li>• Vermifugation mensuelle</li>
                    <li>• Stérilisation/castration à 6 mois</li>
                    <li>• Identification par puce électronique</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Adulte (1-7 ans)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Visite vétérinaire annuelle</li>
                    <li>• Rappels vaccinaux annuels</li>
                    <li>• Détartrage dentaire si nécessaire</li>
                    <li>• Vermifugation 2-4 fois/an</li>
                    <li>• Prévention parasitaire saisonnière</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Senior (7+ ans)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Visites vétérinaires semestrielles</li>
                    <li>• Bilans sanguins annuels</li>
                    <li>• Surveillance cardiaque</li>
                    <li>• Contrôle du poids régulier</li>
                    <li>• Adaptation de l'alimentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                Guide du Chihuahua
              </h3>
              <p className="text-gray-300 text-sm">
                Votre source complète d'informations sur la race Chihuahua. 
                Tout pour bien comprendre et prendre soin de votre petit compagnon.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sections</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => scrollToSection('info')} className="hover:text-rose-400">À propos</button></li>
                <li><button onClick={() => scrollToSection('varietes')} className="hover:text-rose-400">Variétés</button></li>
                <li><button onClick={() => scrollToSection('photos')} className="hover:text-rose-400">Photos</button></li>
                <li><button onClick={() => scrollToSection('soins')} className="hover:text-rose-400">Soins</button></li>
                <li><button onClick={() => scrollToSection('sante')} className="hover:text-rose-400">Santé</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Conseils</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Toujours consulter un vétérinaire</li>
                <li>• Éducation positive recommandée</li>
                <li>• Socialisation dès le plus jeune âge</li>
                <li>• Respect du bien-être animal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="mb-2">Fait avec <Heart className="inline w-4 h-4 text-rose-500" /> pour les amoureux des Chihuahuas</p>
            <p className="text-sm text-gray-400">© 2024 Guide du Chihuahua. Toutes les informations sont fournies à des fins éducatives.</p>
            <p className="text-xs text-gray-500 mt-2">
              Consultez toujours un vétérinaire qualifié pour des conseils médicaux spécifiques à votre animal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}