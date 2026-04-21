import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517524008436-bbdb53c5a6e9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-900" id="gallery">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Work Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Precision on Display</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-800"
            >
              <img 
                src={img} 
                alt={`Project ${i}`} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 cursor-zoom-in"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
