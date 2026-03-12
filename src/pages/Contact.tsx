import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { fadeUp, SectionTitle } from "@/components/shared";

const contacts = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nathan.cattin31@gmail.com", href: "mailto:nathan.cattin31@gmail.com" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Nathan Cattin", href: "https://fr.linkedin.com/in/nathan-cattin-4829632a1" },
  { icon: <Phone className="w-5 h-5" />, label: "Téléphone", value: "06 78 43 16 46", href: "tel:+33678431646" },
];

const Contact = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle label="Contact" title="Me Contacter" />
      <p className="text-center text-muted-foreground mt-4 mb-12">
        N'hésitez pas à me contacter pour toute opportunité professionnelle
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {contacts.map((c, i) => (
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
);

export default Contact;
