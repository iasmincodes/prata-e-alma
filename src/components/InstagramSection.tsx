import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const InstagramSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-section text-center">
      <motion.p
        className="label-caps mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
      >
        Instagram
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-light tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        Veja mais peças no Instagram
      </motion.h2>
      <motion.a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-b border-foreground pb-1 text-sm tracking-wide hover:opacity-60 transition-opacity duration-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
      >
        @seujoalheiro
      </motion.a>
    </section>
  );
};

export default InstagramSection;
