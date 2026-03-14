import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const AtelierSection = () => {
  return (
    <section id="atelier" className="px-6 md:px-12 lg:px-20 py-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <p className="label-caps mb-4">Atelier</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            Visite o atelier
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              O atelier fica em Boa Viagem, Recife — um espaço onde você pode ver o processo de criação de perto e conversar sobre peças sob medida.
            </p>
            <p>
              Visitas com horário sob agendamento.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Boa Viagem, Recife — PE, Brasil</p>
            <p className="text-muted-foreground">Agendamento via WhatsApp</p>
          </div>
        </motion.div>

        <motion.div
          className="aspect-[4/3] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.683898837576!2d-34.8967!3d-8.1147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f5c7e4e8b7d%3A0x2a2e5b7b8e8c1f0!2sBoa%20Viagem%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Atelier em Boa Viagem, Recife"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AtelierSection;
