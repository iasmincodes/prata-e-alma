import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const ContactSection = () => {
  return (
    <section id="contato" className="px-6 md:px-12 lg:px-20 py-section bg-muted section-shadow">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="label-caps mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          Contato
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          Fale diretamente com o joalheiro
        </motion.h2>
        <motion.p
          className="text-muted-foreground leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
        >
          Para encomendas, dúvidas ou agendamento de visitas ao atelier — entre em contato diretamente pelo WhatsApp.
        </motion.p>
        <motion.a
          href="https://wa.me/5581999999999?text=Olá! Gostaria de saber mais sobre suas joias."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-opacity duration-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
          Conversar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
