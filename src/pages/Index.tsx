import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "@/components/shared";

const Index = () => (
  <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center grid-pattern overflow-hidden">
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
        <Link to="/contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
          Me contacter
        </Link>
        <Link to="/parcours" className="px-8 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground transition-colors">
          Voir mon CV
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Index;
