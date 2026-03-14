import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const AboutSection = () => {
  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-20 py-section bg-muted section-shadow">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="label-caps mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          O Joalheiro
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          Prata 950. Moldada pelo fogo,<br />refinada pelo tempo.
        </motion.h2>
        <motion.div
          className="space-y-6 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <p>
            Eu moldo cada peça com as mãos, do metal bruto ao acabamento final. Meu atelier em Boa Viagem é onde a prata ganha forma — sem pressa, sem produção em série. Cada joia é única, numerada e feita sob medida para quem valoriza o trabalho artesanal.
          </p>
          <p>
            Trabalho exclusivamente com prata 950 certificada, o mais alto padrão de pureza. O processo é lento e intencional: fundição, martelamento, polimento — cada etapa carrega a assinatura do feito à mão.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
