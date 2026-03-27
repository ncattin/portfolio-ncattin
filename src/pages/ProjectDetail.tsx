import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Wrench, Target, Lightbulb, ClipboardList, Network, Server, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/components/shared";

const projetsData: Record<string, {
  icon: React.ReactNode;
  title: string;
  context: string;
  objectif: string;
  architecture: string[];
  actions: string[];
  outils: string[];
  resultats: string[];
  competences: string[];
}> = {
  "infra-teletravail-vpn": {
    icon: <Network className="w-8 h-8" />,
    title: "Infrastructure Réseau — Télétravail VPN",
    context:
      "Ce projet consiste à concevoir et déployer une infrastructure réseau complète permettant à deux clients distants de travailler à distance en toute sécurité. Chaque client se connecte depuis Internet via un VPN à sa machine virtuelle dédiée (VM Debian), avec une isolation stricte entre les utilisateurs. L'infrastructure garantit que chaque utilisateur accède uniquement à sa propre VM, sans possibilité d'accéder à celle de l'autre.",
    objectif:
      "Mettre en place une infrastructure de télétravail sécurisée avec accès VPN, segmentation réseau par VLAN, règles de pare-feu granulaires et connexion RDP depuis des postes Windows vers des VM Debian, tout en assurant l'isolation complète entre les utilisateurs.",
    architecture: [
      "2 postes clients Windows (Client 1 et Client 2) connectés via Internet",
      "1 serveur VPN centralisant les connexions distantes",
      "2 machines virtuelles Debian (VM1 et VM2), chacune attribuée à un utilisateur spécifique",
      "Chaque VM dispose de son propre VLAN et de son propre réseau IP dédié",
      "Le VPN attribue des adresses IP depuis un pool réseau distinct des réseaux des VM",
      "Règles de pare-feu assurant l'isolation : User 1 → VM1 uniquement, User 2 → VM2 uniquement",
      "Accès Internet pour les deux VM via des règles NAT sur le pare-feu",
      "Protocole RDP activé entre les clients Windows et les VM Debian via les règles de pare-feu",
    ],
    actions: [
      "Configuration du serveur VPN avec attribution d'un pool d'adresses IP dédié pour les connexions distantes",
      "Création et configuration de deux VLAN distincts, chacun hébergeant une VM Debian",
      "Attribution d'un réseau IP unique à chaque VLAN pour assurer la segmentation",
      "Configuration des VM Debian : installation du système, activation du serveur xRDP pour l'accès bureau à distance",
      "Création de comptes utilisateurs dédiés sur chaque VM (un utilisateur par VM)",
      "Mise en place des règles de pare-feu pour l'isolation des utilisateurs : règles ACL interdisant le trafic croisé entre VM",
      "Configuration des règles NAT pour permettre l'accès Internet depuis chaque VM",
      "Activation et configuration des règles de pare-feu autorisant le RDP (port 3389) entre chaque client et sa VM associée",
      "Tests de connectivité complets : vérification de l'accès VPN, test RDP, validation de l'isolation inter-VM",
      "Documentation de l'architecture réseau et des règles de sécurité appliquées",
    ],
    outils: ["pfSense / OPNsense", "OpenVPN", "Debian Linux", "xRDP", "VLAN (802.1Q)", "Windows RDP", "Pare-feu (iptables / pfSense)", "GNS3 / Virtualisation"],
    resultats: [
      "Connexion VPN fonctionnelle depuis les deux postes clients via Internet",
      "Accès RDP opérationnel : chaque client se connecte à sa VM Debian en bureau à distance",
      "Isolation totale entre les utilisateurs : aucun trafic croisé possible entre VM1 et VM2",
      "Accès Internet fonctionnel sur les deux VM grâce aux règles NAT",
      "Segmentation réseau effective avec des VLAN et des réseaux IP dédiés",
      "Architecture documentée et reproductible pour un déploiement en environnement réel",
    ],
    competences: ["Architecture réseau", "VPN (OpenVPN)", "Segmentation VLAN", "Pare-feu & ACL", "Administration Linux (Debian)", "RDP / xRDP", "NAT & routage", "Virtualisation"],
  },
  "infra-pme-ad-glpi": {
    icon: <Server className="w-8 h-8" />,
    title: "Infrastructure PME — Active Directory & GLPI",
    context:
      "Ce projet simule la mise en place d'une infrastructure informatique complète pour une PME. L'objectif est de centraliser la gestion des utilisateurs via Active Directory, d'implémenter un système de ticketing avec GLPI, et d'automatiser l'inventaire du parc avec GLPI Inventory. La synchronisation entre l'AD et GLPI permet une gestion unifiée des comptes, avec des niveaux de droits différents selon les groupes d'appartenance.",
    objectif:
      "Déployer une infrastructure de gestion IT complète pour une PME, intégrant Active Directory pour la gestion des identités, GLPI pour le support et le ticketing, et GLPI Inventory pour l'inventaire automatisé du parc informatique.",
    architecture: [
      "1 serveur Windows Server avec le rôle Active Directory Domain Services (AD DS)",
      "Organisation de l'AD avec plusieurs Unités Organisationnelles (OU) et groupes de sécurité",
      "1 serveur GLPI (Linux) pour la gestion des tickets et l'inventaire",
      "GLPI Inventory (agent) déployé sur les postes pour l'inventaire automatique",
      "Synchronisation LDAP entre Active Directory et GLPI",
      "Gestion des rôles dans GLPI : utilisateurs simples, techniciens, administrateurs",
    ],
    actions: [
      "Installation et configuration de Windows Server avec le rôle AD DS, création du domaine",
      "Structuration de l'Active Directory : création d'OU par service (Direction, Comptabilité, IT, Commercial, etc.)",
      "Création de multiples groupes de sécurité et comptes utilisateurs avec des droits adaptés",
      "Déploiement de GPO pour la configuration des postes (fond d'écran, restrictions, mappage de lecteurs réseau)",
      "Installation et configuration de GLPI sur un serveur Linux (Apache, MariaDB, PHP)",
      "Configuration de la synchronisation LDAP/AD dans GLPI pour importer automatiquement les utilisateurs",
      "Paramétrage des règles d'affectation dans GLPI : les utilisateurs sans groupe AD spécifique deviennent des utilisateurs simples (création de tickets uniquement)",
      "Création de comptes techniciens avec des droits étendus : gestion et résolution des tickets, accès à l'inventaire",
      "Configuration du groupe administrateur GLPI avec accès complet à la plateforme",
      "Déploiement de GLPI Inventory sur les postes pour remonter automatiquement les informations matérielles et logicielles",
      "Tests complets : création de tickets par des utilisateurs, traitement par les techniciens, vérification de l'inventaire automatique",
      "Redirection des postes selon les règles GLPI pour l'affectation automatique aux bons groupes de support",
    ],
    outils: ["Windows Server", "Active Directory (AD DS)", "GLPI", "GLPI Inventory", "Apache / MariaDB / PHP", "LDAP", "GPO", "DNS / DHCP"],
    resultats: [
      "Active Directory opérationnel avec une structure organisationnelle complète",
      "Synchronisation AD/GLPI fonctionnelle : les utilisateurs sont importés automatiquement",
      "Système de ticketing opérationnel avec des niveaux de droits différenciés (user, technicien, admin)",
      "Inventaire automatique du parc grâce à GLPI Inventory",
      "GPO appliquées avec succès sur l'ensemble des postes du domaine",
      "Infrastructure documentée et prête pour un déploiement en environnement PME réel",
    ],
    competences: ["Active Directory", "GLPI Administration", "LDAP / Synchronisation", "GPO", "Gestion de parc (GLPI Inventory)", "Administration Linux", "Ticketing & Support", "Windows Server"],
  },
};

const slugs = Object.keys(projetsData);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projet = slug ? projetsData[slug] : null;

  if (!projet) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold">Projet introuvable</h2>
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
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/missions" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux missions & projets
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {projet.icon}
          </div>
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Projet</span>
            <h1 className="text-3xl md:text-4xl font-bold">{projet.title}</h1>
          </div>
        </motion.div>

        <div className="space-y-10">
          {/* Contexte */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Contexte</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{projet.context}</p>
            </div>
          </motion.div>

          {/* Objectif */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Objectif</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{projet.objectif}</p>
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Architecture & Infrastructure</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-3">
                {projet.architecture.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Actions réalisées</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-3">
                {projet.actions.map((action) => (
                  <li key={action} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Outils */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Outils & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {projet.outils.map((outil) => (
                <span key={outil} className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground">
                  {outil}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Résultats obtenus</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {projet.resultats.map((res) => (
                <div key={res} className="rounded-xl border border-border bg-card p-4 card-hover flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{res}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compétences */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Compétences mobilisées</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {projet.competences.map((comp) => (
                <span key={comp} className="text-sm px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
                  {comp}
                </span>
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
              <Link to={`/projets/${prevSlug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Projet précédent
              </Link>
            </Button>
          ) : <div />}
          {nextSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/projets/${nextSlug}`} className="flex items-center gap-2">
                Projet suivant
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          ) : <div />}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
