type Niche = {
  label: string;
  heading: string;
  intro: string;
  challenge: string;
  challengeText: string;
  site: string;
  google: string;
  seo: string;
  example: string;
  exampleText: string;
};

export const niches: Record<'engenharia' | 'arquitetura' | 'moveis', Niche> = {
  engenharia: {
    label: "Pour les entreprises d’ingénierie",
    heading: "Site pour les entreprises d’ingénierie, Google et SEO.",
    intro: "Présentez clairement vos spécialités, projets et zones d’intervention aux personnes qui recherchent une entreprise d’ingénierie. Ravyt crée et maintient votre site et organise votre présence dans les recherches.",
    challenge: "Avant de demander une proposition, le client doit comprendre votre activité.",
    challengeText: "Ceux qui recherchent une entreprise d’ingénierie veulent identifier les types de projets pris en charge, l’expérience de l’équipe et comment entamer un échange. Un site avec des sections claires pour chaque spécialité aide à répondre à ces questions.",
    site: "Nous structurons des sections pour les spécialités, projets, équipe et contact, avec une navigation fonctionnelle sur mobile. Domaine, hébergement, mises à jour et support font partie de l’abonnement.",
    google: "Nous organisons les données du Profil d’entreprise Google, lorsque l’entreprise est éligible, pour représenter correctement sa localisation, ses services et ses modalités d’intervention.",
    seo: "Nous travaillons les titres, contenus, liens internes et aspects techniques pour que les sections de services et de projets puissent être comprises par les moteurs de recherche.",
    example: "Une référence visuelle pour l’ingénierie",
    exampleText: "Vértice Norte Engenharia, présenté dans le portfolio comme démonstration conceptuelle, montre une façon d’organiser les spécialités et projets sans désorienter le visiteur.",
  },
  arquitetura: {
    label: "Pour les cabinets d’architecture",
    heading: "Site pour les cabinets d’architecture, Google et SEO.",
    intro: "Vos projets doivent montrer votre travail et expliquer le processus de commande. Ravyt crée un site professionnel pour votre cabinet, assure la maintenance et travaille la structure pour les recherches Google.",
    challenge: "Un portfolio doit aider le visiteur à prendre une décision.",
    challengeText: "Les photos attirent l’attention, mais le client potentiel cherche aussi à connaître les types de projets, la zone desservie, les étapes du travail et comment vous contacter. Le contexte et l’organisation rendent le portfolio plus utile.",
    site: "Nous créons des sections de projets et services avec des images bien présentées, des textes précis et des parcours clairs vers le contact. L’abonnement comprend domaine, hébergement, mises à jour et support.",
    google: "Lorsque le cabinet est éligible au Profil d’entreprise Google, nous veillons à la cohérence des informations de localisation, services et accueil.",
    seo: "Nous organisons la structure, les titres, descriptions et liens internes pour relier les services et projets aux recherches pertinentes, sans promettre de positions précises.",
    example: "Une référence visuelle pour l’architecture",
    exampleText: "Nina Valença Arquitetura est une démonstration conceptuelle du portfolio présentant des projets avec de grandes images et une navigation orientée vers la découverte du travail.",
  },
  moveis: {
    label: "Pour les entreprises de meubles sur mesure",
    heading: "Site pour les entreprises de meubles sur mesure, Google et SEO.",
    intro: "Présentez les espaces, matériaux et solutions sur mesure sur un site qui facilite la demande de devis. Ravyt réunit création et maintenance du site, configuration initiale sur Google et SEO technique initial.",
    challenge: "Chaque espace doit proposer au client une prochaine étape claire.",
    challengeText: "Ceux qui recherchent des meubles sur mesure comparent les styles et possibilités avant de contacter une entreprise. Une présentation organisée par pièces peut aider le visiteur à reconnaître ce qu’il cherche et demander un accompagnement.",
    site: "Nous créons une vitrine d’espaces et services avec les informations essentielles et un contact accessible sur mobile. Domaine, hébergement, mises à jour et support sont inclus dans l’abonnement.",
    google: "Pour les entreprises éligibles, nous organisons le Profil d’entreprise Google avec des informations cohérentes sur l’activité et la zone locale desservie.",
    seo: "Nous structurons des sections pour les espaces et services, avec des contenus et titres spécifiques, avec une optimisation technique initiale.",
    example: "Une référence visuelle pour les meubles sur mesure",
    exampleText: "Lumea Planejados, une démonstration conceptuelle du portfolio, met les espaces en avant pour aider à imaginer les applications du produit.",
  },
};

