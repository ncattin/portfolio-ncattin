import { SectionTitle } from "@/components/shared";

const formations = [
  { year: "2024 – 2026", title: "BTS SIO — Option SISR", place: "Lycée Saint-Marc, Nivolas Vermelle" },
  { year: "2022 – 2024", title: "Bac Technologique STI2D", place: "Lycée Saint-Marc, Nivolas Vermelle" },
  { year: "2021", title: "Brevet des Collèges", place: "Collège Saint Joseph, Bourgoin-Jallieu" },
];

const langues = [
  { lang: "Français", level: "Langue maternelle" },
  { lang: "Anglais", level: "Niveau B1" },
  { lang: "Chinois", level: "Niveau B1" },
];

const Parcours = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle label="CV" title="Mon Parcours" />

      <div className="mt-12 space-y-16">
        {/* Formation */}
        <div>
          <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-widest">Formation</h3>
          <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {formations.map((f) => (
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
            {langues.map((l) => (
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
);

export default Parcours;
