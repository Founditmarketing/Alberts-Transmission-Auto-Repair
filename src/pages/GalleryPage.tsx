import { motion } from 'motion/react';
import Gallery from '../components/Gallery';
import { Camera, Hammer, Cog } from 'lucide-react';

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-950"
    >
      <div className="container mx-auto px-6 pt-10 pb-4 text-center">
        <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Visual Evidence</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Engineering Portfolio</h1>
        <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
          Explore our gallery of transmission rebuilds, custom masteries, and standard repair successes.
        </p>
      </div>
      
      <div className="bg-slate-900 py-12">
        <Gallery />
      </div>

      <div className="container mx-auto px-6 py-32 text-center">
         <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase tracking-widest">Ready for your project?</h2>
         <p className="text-slate-500 mb-10 max-w-xl mx-auto">Every photo represents a problem solved with precision. We apply the same authority to every vehicle that enters our bays.</p>
         <button className="bg-brand-primary px-10 py-4 rounded-xl text-white font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-2xl shadow-orange-900/40">
           Schedule Your Service
         </button>
      </div>
    </motion.div>
  );
}
