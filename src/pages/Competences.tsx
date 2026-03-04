import { motion } from "framer-motion";
import { Monitor, Server, Shield, Terminal, Users, Brain, MessageSquare, Zap, Eye, RefreshCw } from "lucide-react";
import { fadeUp, SectionTitle } from "@/components/shared";

const techSkills = [
  { icon: <Monitor className="w-5 h-5" />, title: "Développement Web", skills: ["HTML5 / CSS3", "JavaScript", "PHP / MySQL", "Python"] },
  { icon: <Server className="w-5 h-5" />, title: "Systèmes", skills: ["Windows 10/11", "Windows Server", "Linux (Ubuntu/Debian)", "Active Directory"] },
  { icon: <Shield className="w-5 h-5" />, title: "Réseaux", skills: ["TCP/IP", "Routeurs/Switchs", "VLAN", "VPN"] },
  { icon: <Terminal className="w-5 h-5" />, title: "Outils", skills: ["Git / GitHub", "VirtualBox / VMware", "Packet Tracer", "Suite Office"] },
];

const softSkills = [
  { icon: <Users className="w-5 h-5" />, label: "Travail d'équipe" },
  { icon: <Brain className="w-5 h-5" />, label: "Résolution de problèmes" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "Communication" },
  { icon: <Zap className="w-5 h-5" />, label: "Autonomie" },
  { icon: <Eye className="w-5 h-5" />, label: "Veille techno" },
  { icon: <RefreshCw className="w-5 h-5" />, label: "Adaptabilité" },
];

const Competences = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Skills" title="Compétences Techniques" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {techSkills.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-primary">{cat.icon}</div>
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-center text-xl font-semibold mt-16 mb-8">Compétences Transversales</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {softSkills.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-lg border border-border bg-card p-4 text-center card-hover"
          >
            <div className="text-primary mx-auto mb-2 flex justify-center">{s.icon}</div>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Competences;
