import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const SectionTitle = ({ label, title }: { label: string; title: string }) => (
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
