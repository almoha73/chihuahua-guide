# Guide du Chihuahua 🐕

Un site web complet dédié à la race de chien Chihuahua, entièrement en français.

## 🌟 Fonctionnalités

- **Information complète** : Fiche d'identité, histoire, origines
- **Variétés détaillées** : Types de tête et de poil
- **Galerie photos** : 15 photos organisées par catégories
- **Conseils de soins** : Alimentation, toilettage, exercice, santé
- **Guide santé** : Problèmes courants, signes d'urgence, calendrier de santé
- **Coûts détaillés** : Budget annuel d'entretien
- **Design responsive** : Adapté à tous les appareils

## 🛠️ Technologies utilisées

- **React 18** avec TypeScript
- **Vite** pour le bundling
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **Architecture modulaire** avec composants séparés

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Composants réutilisables (Header, Footer)  
│   ├── sections/        # Sections de la page
│   └── ui/              # Composants UI de base
├── data/                # Données statiques
├── hooks/               # Hooks personnalisés
├── types/               # Définitions TypeScript
├── styles/              # Styles globaux
└── utils/               # Utilitaires
```

## 🚀 Installation et utilisation

1. **Cloner le projet**
   ```bash
   git clone [URL_DU_REPO]
   cd chihuahua-site
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Build pour la production**
   ```bash
   npm run build
   ```

## 📝 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Aperçu du build
- `npm run lint` - Vérification ESLint
- `npm run type-check` - Vérification TypeScript

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Rose : couleur principale
- Pink : couleur secondaire

### Données
Toutes les données sont centralisées dans `src/data/chihuahuaData.tsx` et peuvent être facilement modifiées.

### Composants
Chaque section est un composant indépendant dans `src/components/sections/`.

## 📱 Sections du site

1. **Hero** - Introduction avec appel à l'action
2. **À propos** - Informations générales et personnalité
3. **Variétés** - Types de tête et de poil
4. **Photos** - Galerie avec filtres par catégorie
5. **Soins** - Conseils détaillés et coûts
6. **Santé** - Problèmes courants et calendrier de soins

## 🔧 Développement

### Ajouter une nouvelle section
1. Créer le composant dans `src/components/sections/`
2. Ajouter les types dans `src/types/chihuahua.ts`
3. Ajouter les données dans `src/data/chihuahuaData.tsx`
4. Importer et utiliser dans `src/App.tsx`

### Modifier les données
Toutes les données sont dans `src/data/chihuahuaData.tsx` :
- `chihuahuaInfo` : Informations de base
- `careTips` : Conseils de soins
- `healthIssues` : Problèmes de santé
- `photoGallery` : Liste des photos
- etc.

## 📄 Licence

MIT - Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

---

Fait avec ❤️ pour les amoureux des Chihuahuas