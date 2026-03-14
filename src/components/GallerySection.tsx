import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const pieces = [
  { src: gallery1, name: "Bracelete Facetado", aspect: "aspect-[3/4]" },
  { src: gallery2, name: "Brincos Gota", aspect: "aspect-square" },
  { src: gallery3, name: "Pingente Orgânico", aspect: "aspect-[2/3]" },
  { src: gallery4, name: "Bracelete Angular", aspect: "aspect-[3/4]" },
  { src: gallery5, name: "Anéis Texturados", aspect: "aspect-square" },
  { src: gallery6, name: "Corrente Artesanal", aspect: "aspect-[2/3]" },
];

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="colecoes" className="px-6 md:px-12 lg:px-20 py-section">
      <motion.p
        className="label-caps mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
      >
        Coleção
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-light tracking-tight mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        Trabalhos selecionados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.name}
            className="group cursor-pointer overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: i * 0.1 }}
            onClick={() => setSelected(i)}
          >
            <div className={`${piece.aspect} overflow-hidden`}>
              <motion.img
                src={piece.src}
                alt={piece.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-[30%]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <span className="label-caps">{piece.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={pieces[selected].src}
              alt={pieces[selected].name}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={transition}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="label-caps">{pieces[selected].name}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
