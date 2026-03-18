import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Monitor, Server, Shield, Terminal, CheckCircle2, BookOpen, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/components/shared";

const competencesData: Record<string, {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: { name: string; detail: string }[];
  missions: string[];
  exemples: string[];
}> = {
  "developpement-web": {
    icon: <Monitor className="w-8 h-8" />,
    title: "Développement Web",
    description:
      "Maîtrise des langages fondamentaux du développement web, du front-end au back-end. Capable de concevoir des interfaces utilisateur modernes et responsives, de développer des API et d'interagir avec des bases de données pour créer des applications complètes.",
    technologies: [
      { name: "HTML5 / CSS3", detail: "Structuration sémantique de pages web, mise en page responsive avec Flexbox et Grid, animations CSS" },
      { name: "JavaScript", detail: "Manipulation du DOM, gestion d'événements, requêtes asynchrones (fetch/AJAX), frameworks modernes (React)" },
      { name: "PHP / MySQL", detail: "Développement back-end, requêtes SQL, CRUD, gestion de sessions et authentification" },
      { name: "Python", detail: "Scripts d'automatisation, traitement de fichiers, interaction avec des API, automatisation de tâches système" },
    ],
    missions: [
      "Développement de ce portfolio en React / TypeScript / Tailwind CSS",
      "Création d'applications web internes en PHP pour le lycée",
      "Scripts Python d'automatisation pour l'administration système",
    ],
    exemples: [
      "Portfolio professionnel déployé sur GitHub Pages avec React et Framer Motion",
      "Application PHP de gestion interne avec authentification et base de données MySQL",
      "Scripts Python de sauvegarde automatisée et de génération de rapports",
    ],
  },
  systemes: {
    icon: <Server className="w-8 h-8" />,
    title: "Systèmes",
    description:
      "Administration de systèmes d'exploitation Windows et Linux en environnement professionnel. Gestion d'un domaine Active Directory complet incluant la création d'utilisateurs, le déploiement de stratégies de groupe (GPO) et la maintenance des serveurs.",
    technologies: [
      { name: "Windows 10/11", detail: "Installation, configuration, dépannage, masterisation de postes, déploiement via WDS/Clonezilla" },
      { name: "Windows Server", detail: "Administration de rôles serveur : AD DS, DNS, DHCP, serveur de fichiers, gestion des sauvegardes" },
      { name: "Linux (Ubuntu/Debian)", detail: "Administration en ligne de commande, gestion des services, configuration réseau, scripting Bash" },
      { name: "Active Directory", detail: "Création et gestion d'utilisateurs/groupes, unités organisationnelles, GPO, scripts PowerShell d'automatisation" },
    ],
    missions: [
      "Administration quotidienne de l'Active Directory du lycée (comptes, groupes, GPO)",
      "Déploiement et maintenance de postes Windows 10/11",
      "Gestion de Windows Server pour les services réseau (DNS, DHCP, fichiers)",
    ],
    exemples: [
      "Création en masse de comptes utilisateurs via scripts PowerShell",
      "Déploiement de GPO de sécurité sur l'ensemble du parc",
      "Masterisation et déploiement de postes avec image standardisée",
    ],
  },
  reseaux: {
    icon: <Shield className="w-8 h-8" />,
    title: "Réseaux",
    description:
      "Conception, déploiement et maintenance d'infrastructures réseau. Expérience pratique en câblage, configuration d'équipements actifs (routeurs, switches) et segmentation réseau par VLAN pour sécuriser et optimiser les communications.",
    technologies: [
      { name: "TCP/IP", detail: "Compréhension du modèle OSI, adressage IPv4/IPv6, sous-réseaux, diagnostic avec ping/traceroute/nslookup" },
      { name: "Routeurs / Switchs", detail: "Configuration Cisco IOS et Ubiquiti UniFi, routage inter-VLAN, ACL, spanning-tree" },
      { name: "VLAN", detail: "Segmentation réseau pour isoler les flux (administration, pédagogie, élèves, Wi-Fi), trunking 802.1Q" },
      { name: "VPN", detail: "Mise en place de tunnels VPN pour l'accès distant sécurisé, compréhension des protocoles IPsec et SSL/TLS" },
    ],
    missions: [
      "Restructuration complète de l'infrastructure réseau du lycée",
      "Configuration de VLANs et routage inter-VLAN sur équipements Cisco",
      "Déploiement de bornes Wi-Fi Ubiquiti sur l'ensemble de l'établissement",
    ],
    exemples: [
      "Réorganisation des baies de brassage avec étiquetage systématique",
      "Mise en place de 4 VLANs sécurisés (admin, pédagogie, élèves, Wi-Fi)",
      "Installation de prises RJ45 avec plastrons muraux dans les salles de cours",
    ],
  },
  outils: {
    icon: <Terminal className="w-8 h-8" />,
    title: "Outils",
    description:
      "Utilisation quotidienne d'outils professionnels pour le développement, la virtualisation, la simulation réseau et la bureautique. Ces outils me permettent d'être efficace dans mes missions et de travailler de manière structurée et collaborative.",
    technologies: [
      { name: "Git / GitHub", detail: "Versionning de code, branches, pull requests, collaboration, déploiement via GitHub Pages/Actions" },
      { name: "VirtualBox / VMware", detail: "Création et gestion de machines virtuelles pour les tests, labs réseau et environnements de développement" },
      { name: "Packet Tracer", detail: "Simulation d'architectures réseau, configuration de routeurs/switches, tests de connectivité" },
      { name: "Suite Office", detail: "Rédaction de documentation technique, tableaux de bord, présentations professionnelles" },
    ],
    missions: [
      "Versionning de tous les projets de développement avec Git",
      "Labs de simulation réseau avec Packet Tracer pour tester avant déploiement",
      "Environnements virtualisés pour les tests système et réseau",
    ],
    exemples: [
      "Déploiement automatisé du portfolio via GitHub Actions",
      "Simulation de topologies réseau complexes avant mise en production",
      "Documentation technique rédigée pour chaque intervention majeure",
    ],
  },
};

const slugs = Object.keys(competencesData);

const CompetenceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const comp = slug ? competencesData[slug] : null;

  if (!comp) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold">Compétence introuvable</h2>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/competences">Retour aux compétences</Link>
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
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/competences" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux compétences
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
            {comp.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{comp.title}</h1>
          </div>
        </motion.div>

        <div className="space-y-10">
          {/* Description */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{comp.description}</p>
            </div>
          </motion.div>

          {/* Technologies détaillées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Technologies maîtrisées</h2>
            </div>
            <div className="space-y-3">
              {comp.technologies.map((tech) => (
                <div key={tech.name} className="rounded-xl border border-border bg-card p-5 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary font-mono">{tech.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Missions associées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Missions associées</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-3">
                {comp.missions.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Réalisations concrètes */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Réalisations concrètes</h2>
            </div>
            <div className="grid sm:grid-cols-1 gap-3">
              {comp.exemples.map((ex) => (
                <div key={ex} className="rounded-xl border border-border bg-card p-4 card-hover flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{ex}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          className="mt-16 flex justify-between items-center border-t border-border pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {prevSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/competences/${prevSlug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Précédente
              </Link>
            </Button>
          ) : <div />}
          {nextSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/competences/${nextSlug}`} className="flex items-center gap-2">
                Suivante
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : <div />}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenceDetail;
