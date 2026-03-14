import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ring.jpg";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-section">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
        {/* Text */}
        <motion.div
          className="lg:col-span-5 z-10 lg:pr-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <p className="label-caps mb-6">Joalheria Artesanal</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.9] mb-8">
            A permanência<br />
            da prata em<br />
            formas singulares.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-10">
            Peças numeradas em prata 950 certificada, moldadas pelo fogo e refinadas pelo tempo. Cada joia carrega a marca do feito à mão.
          </p>
          <a
            href="#colecoes"
            className="inline-block border-b border-foreground pb-1 text-sm tracking-wide hover:opacity-60 transition-opacity duration-400"
          >
            Ver coleções
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:col-span-7 lg:-ml-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="aspect-[2/3] md:aspect-[3/4] overflow-hidden">
            <motion.img
              src={heroImage}
              alt="Anel artesanal em prata 950 com textura martelada"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
