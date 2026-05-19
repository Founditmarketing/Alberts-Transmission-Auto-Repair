import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const defaultImages = [
  "/at8.webp",
  "/at9.webp",
  "/at20.webp",
  "/at2.webp",
  "/at17.webp",
  "/at19.webp",
  "/at3.webp",
  "/at1.webp",
  "/at11.webp"
];

export default function Gallery({ images = defaultImages, limit, showTitle = false }: { images?: string[], limit?: number, showTitle?: boolean }) {
  const displayImages = limit ? images.slice(0, limit) : images;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-900" id="gallery">
      <div className="container mx-auto px-6">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Work Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Precision on Display</h2>
          </motion.div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-800 cursor-zoom-in"
            >
              <img 
                src={img} 
                alt={`Project ${i}`} 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 p-2 bg-slate-900 rounded-full text-white hover:text-brand-primary transition-colors z-[110]"
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                src={selectedImage}
                alt="Enlarged project"
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
