import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Wrench, Globe, Code, Shield, Monitor, Tablet, Target, Lightbulb, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, SectionTitle } from "@/components/shared";

const missionsData: Record<string, {
  icon: React.ReactNode;
  title: string;
  context: string;
  objectif: string;
  actions: string[];
  outils: string[];
  resultats: string[];
  competences: string[];
}> = {
  "maintenance-support": {
    icon: <Wrench className="w-8 h-8" />,
    title: "Maintenance & Support Technique",
    context:
      "Au sein du Lycée Saint-Marc, j'assure la maintenance de l'ensemble du parc informatique composé de plusieurs centaines de postes (salles de classe, administration, CDI). Je traite les tickets d'assistance émis par les enseignants, les surveillants et le personnel administratif via un système de Help Desk.",
    objectif:
      "Garantir la disponibilité et le bon fonctionnement de l'ensemble du parc informatique afin de ne pas impacter le déroulement des cours et le travail administratif.",
    actions: [
      "Diagnostic et résolution de pannes matérielles : remplacement de disques durs, RAM, alimentations, écrans défectueux",
      "Résolution de problèmes logiciels : réinstallation de systèmes d'exploitation, mise à jour de drivers, suppression de malwares",
      "Traitement des tickets Help Desk avec priorisation selon l'urgence et l'impact sur l'activité",
      "Assistance utilisateurs multi-niveaux : accompagnement des enseignants sur les outils numériques (ENT, vidéoprojecteurs interactifs)",
      "Rédaction de documentation technique pour les interventions récurrentes",
      "Gestion de l'inventaire matériel et suivi des garanties",
      "Préparation et déploiement de nouveaux postes (masterisation, configuration réseau, intégration au domaine)",
    ],
    outils: ["GLPI / Help Desk", "Windows 10/11", "Outils de diagnostic matériel", "Clonezilla / WDS", "Active Directory"],
    resultats: [
      "Réduction du temps moyen de résolution des tickets",
      "Amélioration de la satisfaction des utilisateurs",
      "Documentation complète des procédures de maintenance",
      "Parc informatique opérationnel avec un taux de disponibilité élevé",
    ],
    competences: ["Diagnostic matériel et logiciel", "Gestion de tickets", "Communication utilisateurs", "Documentation technique", "Masterisation de postes"],
  },
  "infrastructure-reseau": {
    icon: <Globe className="w-8 h-8" />,
    title: "Infrastructure Réseau d'Entreprise",
    context:
      "L'infrastructure réseau du lycée nécessitait une remise à niveau complète : baies de brassage désorganisées, switches obsolètes encore en place, câblage non documenté. J'ai été chargé de remettre en ordre l'ensemble de l'infrastructure physique et logique du réseau.",
    objectif:
      "Restructurer et optimiser l'infrastructure réseau pour garantir des performances fiables, une meilleure maintenabilité et une sécurité accrue des communications.",
    actions: [
      "Nettoyage complet et réorganisation des baies de brassage : retrait des câbles inutilisés, étiquetage systématique",
      "Dépose de switches obsolètes et remplacement par des équipements Ubiquiti performants",
      "Installation de nouvelles prises RJ45 avec plastrons muraux dans les salles nécessitant une connectivité filaire",
      "Configuration de VLANs pour segmenter le réseau (administration, pédagogie, élèves, Wi-Fi)",
      "Mise en place de règles de routage inter-VLAN sur les routeurs Cisco",
      "Configuration et déploiement de bornes Wi-Fi Ubiquiti pour couvrir l'ensemble de l'établissement",
      "Tests de débit et de connectivité après chaque intervention",
    ],
    outils: ["Switches et routeurs Cisco", "Bornes et switches Ubiquiti (UniFi)", "Testeur de câbles RJ45", "Outils de sertissage", "Packet Tracer"],
    resultats: [
      "Baies de brassage propres, organisées et entièrement documentées",
      "Réseau segmenté en VLANs sécurisés",
      "Couverture Wi-Fi complète de l'établissement",
      "Amélioration significative des performances réseau",
    ],
    competences: ["Câblage et brassage", "Configuration réseau (VLAN, routage)", "Cisco IOS", "Ubiquiti UniFi", "Documentation réseau"],
  },
  "antivirus-kaspersky": {
    icon: <Shield className="w-8 h-8" />,
    title: "Gestion Antivirus Kaspersky",
    context:
      "La console d'administration Kaspersky Security Center du lycée était dans un état critique : des centaines de comptes utilisateurs obsolètes, des postes signalés comme défectueux sans suivi, et une désynchronisation complète avec l'Active Directory rendant la gestion impossible.",
    objectif:
      "Remettre en état la solution antivirus Kaspersky pour garantir une protection efficace de l'ensemble du parc informatique et permettre une administration centralisée fiable.",
    actions: [
      "Audit complet de la console Kaspersky Security Center : identification des comptes obsolètes et des postes fantômes",
      "Suppression méthodique de tous les utilisateurs et postes qui n'existent plus dans l'Active Directory",
      "Correction des agents Kaspersky défectueux sur les postes concernés (réinstallation, mise à jour forcée)",
      "Resynchronisation complète avec l'Active Directory pour refléter la structure réelle du parc",
      "Vérification des politiques de sécurité appliquées : analyse en temps réel, mises à jour automatiques des bases virales",
      "Mise en place d'alertes pour détecter rapidement les postes non protégés",
    ],
    outils: ["Kaspersky Security Center", "Active Directory", "GPO de déploiement", "Console d'administration KSC"],
    resultats: [
      "Console Kaspersky nettoyée et synchronisée avec l'AD",
      "100% des postes actifs protégés et à jour",
      "Système d'alertes fonctionnel pour les postes non conformes",
      "Administration centralisée de la sécurité opérationnelle",
    ],
    competences: ["Administration Kaspersky", "Sécurité des postes de travail", "Synchronisation AD", "Politiques de sécurité", "Audit de sécurité"],
  },
  "active-directory": {
    icon: <Monitor className="w-8 h-8" />,
    title: "Administration Active Directory",
    context:
      "Le domaine Active Directory du lycée gère l'ensemble des comptes utilisateurs (enseignants, élèves, administration) ainsi que les stratégies de groupe appliquées au parc informatique. J'administre ce domaine au quotidien pour assurer une gestion centralisée et sécurisée.",
    objectif:
      "Maintenir un annuaire Active Directory propre, structuré et sécurisé, permettant une gestion efficace des droits d'accès et des configurations des postes.",
    actions: [
      "Création, modification et suppression de comptes utilisateurs selon les mouvements de personnel et d'élèves",
      "Organisation des unités organisationnelles (OU) pour refléter la structure de l'établissement",
      "Gestion des groupes de sécurité pour contrôler l'accès aux ressources partagées (dossiers réseau, imprimantes)",
      "Déploiement de GPO : fond d'écran imposé, restrictions du panneau de configuration, déploiement logiciel automatique",
      "Création de scripts PowerShell pour automatiser les tâches récurrentes (création en masse de comptes, rapports d'audit)",
      "Gestion des stratégies de mot de passe et de verrouillage de compte",
    ],
    outils: ["Windows Server", "Active Directory Users & Computers", "Group Policy Management", "PowerShell", "RSAT"],
    resultats: [
      "Annuaire AD structuré et à jour en permanence",
      "GPO déployées et fonctionnelles sur l'ensemble du parc",
      "Automatisation des tâches répétitives via PowerShell",
      "Gestion des droits d'accès conforme aux besoins de chaque service",
    ],
    competences: ["Active Directory", "GPO", "PowerShell", "Gestion des droits", "Windows Server"],
  },
  "developpement-automatisation": {
    icon: <Code className="w-8 h-8" />,
    title: "Développement & Automatisation",
    context:
      "Pour répondre à des besoins spécifiques de l'établissement non couverts par les outils existants, j'ai développé des applications web et des scripts d'automatisation. Ces projets visent à optimiser les processus d'administration système et à faciliter le quotidien des utilisateurs.",
    objectif:
      "Créer des outils sur mesure pour automatiser les tâches répétitives et fournir des interfaces web adaptées aux besoins de l'établissement.",
    actions: [
      "Développement d'applications web en HTML/CSS, JavaScript et PHP pour des besoins internes",
      "Création de scripts Python pour automatiser des tâches d'administration : sauvegarde, nettoyage de fichiers, rapports",
      "Développement de ce portfolio en React avec TypeScript et Tailwind CSS",
      "Mise en place de bases de données MySQL pour stocker et gérer les données des applications",
      "Utilisation de Git pour le versionnement du code et la collaboration",
      "Tests et déploiement des applications sur les serveurs internes",
    ],
    outils: ["HTML/CSS/JavaScript", "PHP/MySQL", "Python", "React/TypeScript", "Git/GitHub", "VS Code"],
    resultats: [
      "Applications web fonctionnelles répondant aux besoins identifiés",
      "Gain de temps significatif grâce à l'automatisation des tâches répétitives",
      "Code versionné et documenté pour faciliter la maintenance",
      "Portfolio professionnel déployé et accessible en ligne",
    ],
    competences: ["Développement web front-end & back-end", "Scripting Python", "Bases de données SQL", "Versionning Git", "Déploiement d'applications"],
  },
  "gestion-ipads-intune": {
    icon: <Tablet className="w-8 h-8" />,
    title: "Gestion iPads — Microsoft Intune",
    context:
      "Le lycée a déployé des iPads pour les élèves dans le cadre de la transformation numérique. J'ai été chargé de préparer ces tablettes, de les intégrer à la solution MDM Microsoft Intune et de configurer les restrictions adaptées à un usage scolaire.",
    objectif:
      "Déployer et administrer un parc d'iPads via Microsoft Intune, en garantissant un usage encadré et sécurisé pour les élèves tout en facilitant l'accès aux ressources pédagogiques.",
    actions: [
      "Préparation physique des iPads : déballage, vérification, mise à jour iOS",
      "Inscription des iPads dans Apple Business Manager pour le déploiement automatique (DEP)",
      "Configuration des profils d'inscription dans Microsoft Intune : restrictions, applications obligatoires",
      "Limitation des droits élèves : blocage de l'App Store, restriction de Safari, interdiction de modification des paramètres",
      "Déploiement d'applications pédagogiques via Intune (Microsoft Teams, manuels numériques)",
      "Utilisation d'un MacBook pour la gestion Apple Configurator 2 lors de la phase d'initialisation",
      "Suivi et gestion à distance du parc via le portail Intune (localisation, verrouillage, effacement à distance)",
    ],
    outils: ["Microsoft Intune (Endpoint Manager)", "Apple Business Manager", "Apple Configurator 2", "MacBook", "Portail Azure AD"],
    resultats: [
      "Parc d'iPads entièrement déployé et administré à distance",
      "Restrictions élèves appliquées et conformes à la politique de l'établissement",
      "Applications pédagogiques déployées automatiquement sur tous les appareils",
      "Capacité de gestion à distance (verrouillage, effacement) en cas de perte ou vol",
    ],
    competences: ["MDM / Intune", "Apple Business Manager", "Gestion de parc mobile", "Sécurité des appareils", "Déploiement d'applications"],
  },
};

const slugs = Object.keys(missionsData);

const MissionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const mission = slug ? missionsData[slug] : null;

  if (!mission) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold">Mission introuvable</h2>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/missions">Retour aux missions</Link>
        </Button>
      </section>
    );
  }

  const currentIndex = slug ? slugs.indexOf(slug) : -1;
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/missions" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux missions
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {mission.icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{mission.title}</h1>
        </motion.div>

        <div className="space-y-10">
          {/* Contexte */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Contexte</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{mission.context}</p>
            </div>
          </motion.div>

          {/* Objectif */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Objectif</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{mission.objectif}</p>
            </div>
          </motion.div>

          {/* Actions réalisées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Actions réalisées</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-3">
                {mission.actions.map((action) => (
                  <li key={action} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Outils utilisés */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Outils & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.outils.map((outil) => (
                <span
                  key={outil}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground"
                >
                  {outil}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Résultats obtenus</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {mission.resultats.map((res) => (
                <div key={res} className="rounded-xl border border-border bg-card p-4 card-hover flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{res}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compétences mobilisées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Compétences mobilisées</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.competences.map((comp) => (
                <span
                  key={comp}
                  className="text-sm px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary"
                >
                  {comp}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation entre missions */}
        <motion.div
          className="mt-16 flex justify-between items-center border-t border-border pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {prevSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/missions/${prevSlug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Mission précédente
              </Link>
            </Button>
          ) : <div />}
          {nextSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/missions/${nextSlug}`} className="flex items-center gap-2">
                Mission suivante
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          ) : <div />}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionDetail;
