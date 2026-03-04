import { motion } from "framer-motion";
import { Wrench, Globe, Code } from "lucide-react";
import { fadeUp, SectionTitle } from "@/components/shared";

const missions = [
  { icon: <Wrench className="w-6 h-6" />, title: "Maintenance & Support", desc: "Diagnostic et résolution de problèmes matériels et logiciels, assistance technique aux utilisateurs", tasks: ["Maintenance du parc informatique", "Support technique", "Documentation des interventions"] },
  { icon: <Globe className="w-6 h-6" />, title: "Infrastructure Réseau", desc: "Configuration et administration des équipements réseau, gestion des accès et de la sécurité", tasks: ["Configuration routeurs/switchs", "Gestion des accès", "VLAN & VPN"] },
  { icon: <Code className="w-6 h-6" />, title: "Développement", desc: "Création d'applications web et scripts d'automatisation pour optimiser les processus", tasks: ["Applications web", "Scripts d'automatisation", "Optimisation des processus"] },
];

const Missions = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
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
    </div>
  </section>
);

export default Missions;
