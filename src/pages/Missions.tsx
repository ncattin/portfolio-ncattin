import { motion } from "framer-motion";
import { Wrench, Globe, Code, Shield, Monitor, Tablet } from "lucide-react";
import { fadeUp, SectionTitle } from "@/components/shared";

const missions = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Support Technique",
    desc: "Diagnostic et résolution de problèmes matériels et logiciels, traitement de tickets d'assistance pour enseignants, surveillants et administration",
    tasks: ["Maintenance du parc informatique", "Gestion de tickets Help Desk", "Assistance utilisateurs multi-niveaux", "Résolution d'incidents matériels et logiciels", "Documentation des interventions"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Infrastructure Réseau d'Entreprise",
    desc: "Nettoyage et organisation de baies de brassage, dépose de switches inutilisés, installation de prises RJ45 avec plastrons muraux",
    tasks: ["Configuration routeurs/switchs Cisco & Ubiquiti", "Gestion des accès et VLAN/VPN", "Installation et câblage RJ45"],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Gestion Antivirus Kaspersky",
    desc: "Nettoyage complet de la solution : suppression des utilisateurs obsolètes, correction des éléments défectueux, resynchronisation avec l'Active Directory",
    tasks: ["Suppression des comptes obsolètes", "Correction des éléments défectueux", "Resynchronisation Active Directory"],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Administration Active Directory",
    desc: "Administration d'un domaine Active Directory avec gestion des utilisateurs, groupes et stratégies",
    tasks: ["Gestion des utilisateurs et groupes", "Déploiement de GPO", "Scripts PowerShell"],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Développement & Automatisation",
    desc: "Création d'applications web et scripts d'automatisation pour optimiser les processus d'administration système",
    tasks: ["Applications web (HTML/CSS, JavaScript, PHP)", "Scripts Python d'automatisation", "Optimisation des processus IT"],
  },
  {
    icon: <Tablet className="w-6 h-6" />,
    title: "Gestion iPads — Microsoft Intune",
    desc: "Préparation d'iPads avec MacBook et intégration à Microsoft Intune pour une administration centralisée, limitant les droits élèves",
    tasks: ["Déploiement MDM via Intune", "Configuration des restrictions", "Gestion du parc Apple"],
  },
];

const Missions = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Expérience" title="Mes Missions en Entreprise" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {missions.map((mission, i) => (
          <motion.div
            key={mission.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              {mission.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{mission.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{mission.desc}</p>
            <ul className="space-y-2">
              {mission.tasks.map((task) => (
                <li key={task} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Missions;
