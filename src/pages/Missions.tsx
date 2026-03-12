import { motion } from "framer-motion";
import { Wrench, Globe, Code, Shield, Monitor, Tablet } from "lucide-react";
import { fadeUp, SectionTitle } from "@/components/shared";

const missions = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Support",
    desc: "Diagnostic et résolution de problèmes matériels et logiciels, assistance technique aux utilisateurs",
    tasks: ["Maintenance du parc informatique", "Support technique", "Documentation des interventions"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Infrastructure Réseau",
    desc: "Configuration et administration des équipements réseau, gestion des accès et de la sécurité",
    tasks: ["Configuration routeurs/switchs", "Gestion des accès", "VLAN & VPN", "Installation de prises RJ45 et organisation de baies de brassage"],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Développement",
    desc: "Création d'applications web et scripts d'automatisation pour optimiser les processus",
    tasks: ["Applications web", "Scripts d'automatisation Python", "Optimisation des processus"],
  },
];

const projets = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Infrastructure Réseau d'Entreprise",
    desc: "Nettoyage et organisation de baies de brassage, dépose de switches inutilisés, installation de prises RJ45 dans différentes salles avec plastrons muraux.",
    tags: ["Cisco", "Ubiquiti", "RJ45"],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Gestion Antivirus Kaspersky",
    desc: "Nettoyage complet de la solution : suppression des utilisateurs obsolètes, correction des éléments défectueux, et resynchronisation avec l'Active Directory.",
    tags: ["Kaspersky", "Active Directory", "Cybersécurité"],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Administration Active Directory",
    desc: "Administration d'un domaine Active Directory avec gestion des utilisateurs, groupes et stratégies.",
    tags: ["Active Directory", "GPO", "PowerShell"],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Scripts d'Automatisation",
    desc: "Création de scripts Python pour automatiser des tâches répétitives d'administration système.",
    tags: ["Python", "Automatisation", "Linux"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Support Technique",
    desc: "Traitement de nombreux tickets d'assistance pour enseignants, surveillants et membres de l'administration.",
    tags: ["Help Desk", "Support", "Ticketing"],
  },
  {
    icon: <Tablet className="w-6 h-6" />,
    title: "Gestion iPads — Microsoft Intune",
    desc: "Préparation d'iPads avec MacBook et intégration à Microsoft Intune pour une administration centralisée, limitant les droits élèves.",
    tags: ["Intune", "MDM", "Apple"],
  },
];

const Missions = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Missions en entreprise */}
      <SectionTitle label="Expérience" title="Mes Missions en Entreprise" />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
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

      {/* Projets */}
      <div className="mt-24">
        <SectionTitle label="Projets" title="Mes Projets" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projets.map((projet, i) => (
            <motion.div
              key={projet.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-border bg-card p-6 card-hover flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {projet.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{projet.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{projet.desc}</p>
              <div className="flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Missions;
