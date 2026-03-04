import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Monitor, Globe, Code, Terminal, Server, Shield, Wrench, Users, Brain, MessageSquare, Zap, Eye, RefreshCw } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gradient">NC</span>
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
            {["Accueil", "Missions", "Compétences", "Parcours", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-mono bg-primary/5">
              Étudiant BTS SIO — SISR
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cattin{" "}
            <span className="text-gradient">Nathan</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Passionné par l'informatique, je développe mes compétences en développement et en infrastructure réseau pour contribuer à des projets innovants.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Me contacter
            </a>
            <a href="#parcours" className="px-8 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground transition-colors">
              Voir mon CV
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Missions */}
      <section id="missions" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Expérience" title="Mes Missions en Entreprise" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Wrench className="w-6 h-6" />, title: "Maintenance & Support", desc: "Diagnostic et résolution de problèmes matériels et logiciels, assistance technique aux utilisateurs", tasks: ["Maintenance du parc informatique", "Support technique", "Documentation des interventions"] },
              { icon: <Globe className="w-6 h-6" />, title: "Infrastructure Réseau", desc: "Configuration et administration des équipements réseau, gestion des accès et de la sécurité", tasks: ["Configuration routeurs/switchs", "Gestion des accès", "VLAN & VPN"] },
              { icon: <Code className="w-6 h-6" />, title: "Développement", desc: "Création d'applications web et scripts d'automatisation pour optimiser les processus", tasks: ["Applications web", "Scripts d'automatisation", "Optimisation des processus"] },
            ].map((mission, i) => (
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

      {/* Compétences */}
      <section id="compétences" className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Skills" title="Compétences Techniques" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: <Monitor className="w-5 h-5" />, title: "Développement Web", skills: ["HTML5 / CSS3", "JavaScript", "PHP / MySQL", "Python"] },
              { icon: <Server className="w-5 h-5" />, title: "Systèmes", skills: ["Windows 10/11", "Windows Server", "Linux (Ubuntu/Debian)", "Active Directory"] },
              { icon: <Shield className="w-5 h-5" />, title: "Réseaux", skills: ["TCP/IP", "Routeurs/Switchs", "VLAN", "VPN"] },
              { icon: <Terminal className="w-5 h-5" />, title: "Outils", skills: ["Git / GitHub", "VirtualBox / VMware", "Packet Tracer", "Suite Office"] },
            ].map((cat, i) => (
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
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {[
              { icon: <Users className="w-5 h-5" />, label: "Travail d'équipe" },
              { icon: <Brain className="w-5 h-5" />, label: "Résolution de problèmes" },
              { icon: <MessageSquare className="w-5 h-5" />, label: "Communication" },
              { icon: <Zap className="w-5 h-5" />, label: "Autonomie" },
              { icon: <Eye className="w-5 h-5" />, label: "Veille techno" },
              { icon: <RefreshCw className="w-5 h-5" />, label: "Adaptabilité" },
            ].map((s, i) => (
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

      {/* Parcours */}
      <section id="parcours" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="CV" title="Mon Parcours" />

          <div className="mt-12 space-y-16">
            {/* Formation */}
            <div>
              <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Formation</h3>
              <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
                {[
                  { year: "2024 – 2026", title: "BTS SIO — Option SISR", place: "Lycée Saint-Marc, Nivolas Vermelle" },
                  { year: "2022 – 2024", title: "Bac Technologique STI2D", place: "Lycée Saint-Marc, Nivolas Vermelle" },
                  { year: "2021", title: "Brevet des Collèges", place: "Collège Saint Joseph, Bourgoin-Jallieu" },
                ].map((f) => (
                  <div key={f.title} className="flex gap-6 pl-6 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                    <div>
                      <span className="text-xs font-mono text-muted-foreground">{f.year}</span>
                      <h4 className="font-semibold mt-0.5">{f.title}</h4>
                      <p className="text-sm text-muted-foreground">{f.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expérience */}
            <div>
              <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Expérience</h3>
              <div className="rounded-xl border border-border bg-card p-6 card-hover">
                <span className="text-xs font-mono text-muted-foreground">2025 – 2026</span>
                <h4 className="font-semibold mt-1 text-lg">Alternance — Technicien Informatique</h4>
                <ul className="mt-4 space-y-2">
                  {["Maintenance du parc informatique", "Support technique aux utilisateurs", "Configuration d'équipements réseau", "Documentation des interventions"].map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Langues */}
            <div>
              <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Langues</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { lang: "Français", level: "Langue maternelle" },
                  { lang: "Anglais", level: "Niveau B1" },
                  { lang: "Chinois", level: "Niveau B1" },
                ].map((l) => (
                  <div key={l.lang} className="rounded-lg border border-border bg-card p-4 text-center card-hover">
                    <div className="font-semibold">{l.lang}</div>
                    <div className="text-xs text-muted-foreground mt-1">{l.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Contact" title="Me Contacter" />
          <p className="text-center text-muted-foreground mt-4 mb-12">
            N'hésitez pas à me contacter pour toute opportunité professionnelle
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nathan.cattin31@gmail.com", href: "mailto:nathan.cattin31@gmail.com" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Nathan Cattin", href: "https://fr.linkedin.com/in/nathan-cattin-4829632a1" },
              { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "ncattin", href: "https://github.com/ncattin" },
              { icon: <Phone className="w-5 h-5" />, label: "Téléphone", value: "06 78 43 16 46", href: "tel:+33678431646" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-xl border border-border bg-card p-5 card-hover block text-center"
              >
                <div className="text-primary mx-auto mb-3 flex justify-center">{c.icon}</div>
                <div className="font-semibold text-sm">{c.label}</div>
                <div className="text-xs text-muted-foreground mt-1 break-all">{c.value}</div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4 text-center">Disponibilité</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Stages en entreprise", "Alternance", "Projets étudiants", "Collaborations"].map((d) => (
                <span key={d} className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm bg-primary/5">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2025 Cattin Nathan. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="https://github.com/ncattin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://fr.linkedin.com/in/nathan-cattin-4829632a1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:nathan.cattin31@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ label, title }: { label: string; title: string }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-xs font-mono text-primary uppercase tracking-widest">{label}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
  </motion.div>
);

export default Index;
