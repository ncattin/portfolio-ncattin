import { SectionTitle } from "@/components/shared";
import { Download, Briefcase, GraduationCap, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/shared";

const formations = [
  { year: "2024 – 2026", title: "BTS SIO — Option SISR", place: "Lycée Saint-Marc, Nivolas Vermelle", desc: "Services Informatiques aux Organisations, spécialité Solutions d'Infrastructure, Systèmes et Réseaux" },
  { year: "2022 – 2024", title: "Bac Technologique STI2D", place: "Lycée Saint-Marc, Nivolas Vermelle", desc: "Sciences et Technologies de l'Industrie et du Développement Durable" },
  { year: "2021", title: "Brevet des Collèges", place: "Collège Saint Joseph, Bourgoin-Jallieu", desc: "" },
];

const experiences = [
  { year: "2025 – 2026", title: "Alternance — Technicien Informatique", company: "Lycée Saint-Marc", tasks: ["Maintenance du parc informatique", "Support technique aux utilisateurs", "Configuration d'équipements réseau", "Administration Active Directory", "Gestion antivirus Kaspersky", "Documentation des interventions"] },
  { year: "2024", title: "Stage — Support Informatique", company: "Lycée Saint-Marc", tasks: ["Assistance utilisateurs", "Diagnostic matériel et logiciel", "Câblage réseau RJ45"] },
];

const langues = [
  { lang: "Anglais", level: "Niveau B1", flag: "🇬🇧" },
  { lang: "Chinois", level: "Niveau B1", flag: "🇨🇳" },
];

const cvHref = `${import.meta.env.BASE_URL}Cv%20Cattin%20Nathan.pdf`;

const Parcours = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle label="CV" title="Mon Parcours" />

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <a href={cvHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </a>
        </Button>
      </div>

      <div className="mt-12 space-y-16">
        {/* Formation */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest">Formation</h3>
          </div>
          <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {formations.map((f) => (
              <div key={f.title} className="flex gap-6 pl-6 relative">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                <div className="rounded-xl border border-border bg-card p-4 flex-1 card-hover">
                  <span className="text-xs font-mono text-muted-foreground">{f.year}</span>
                  <h4 className="font-semibold mt-0.5">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.place}</p>
                  {f.desc && <p className="text-xs text-muted-foreground/70 mt-1">{f.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expérience */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest">Expérience</h3>
          </div>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.title} className="rounded-xl border border-border bg-card p-6 card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{exp.year}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/5">{exp.company}</span>
                </div>
                <h4 className="font-semibold text-lg">{exp.title}</h4>
                <ul className="mt-3 space-y-2">
                  {exp.tasks.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Langues */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest">Langues</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {langues.map((l) => (
              <div key={l.lang} className="rounded-lg border border-border bg-card p-5 text-center card-hover">
                <div className="text-2xl mb-2">{l.flag}</div>
                <div className="font-semibold">{l.lang}</div>
                <div className="text-xs text-muted-foreground mt-1">{l.level}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Parcours;
