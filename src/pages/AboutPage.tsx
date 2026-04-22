import { motion } from 'motion/react';
import { History, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-950 font-sans"
    >
      <div className="container mx-auto px-6 py-20">
        {/* Page Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Independent Heritage</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white leading-tight">Built on Trust. <br />Driven by Precision.</h1>
        </div>

        {/* Narrative Section with Image */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <History className="text-brand-primary w-8 h-8" />
                The Industrial Foundation
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Albert’s Transmission & Auto Repair didn't start in a boardroom; it started under a hood in Sulphur Springs. For decades, we have been more than just a shop—we've been a hub for mechanical integrity in a world of increasing complexity. Our founders believed that independent shops should offer better technical precision than any franchise, and we have spent every day since proving that thesis correct.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                In the early days, word of mouth was our only marketing. Drivers knew that if Albert touched their vehicle, the problem didn't just go away; it stayed away. We built our reputation on the hardest jobs—the transmission rebuilds and complex gear failures that other shops avoided. That "authority-first" mindset is baked into every diagnostic we run today.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <ShieldCheck className="text-brand-primary w-8 h-8" />
                Engineering Authority
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                We view automotive repair as a disciplined practice of engineering. We don't rely on guesswork or part-swapping. Instead, our technicians utilize state-of-the-art digital scanning combined with a deep, visceral understanding of hydraulic and mechanical systems. Whether it's a legacy manual gearbox or a high-tech modern automatic, we treat the drivetrain as a single, cohesive unit.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                The technical specs matter. We utilize synthetic lubricants that exceed OEM requirements and replacement components that are chosen for their durability, not their cost. This commitment to "better-than-stock" reliability is what differentiates an Albert’s repair from a standard fix.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <Zap className="text-brand-primary w-8 h-8" />
                Our Commitment to TX
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                As a locally owned and operated business, our commitment to Sulphur Springs and the surrounding North Texas communities is absolute. We aren't just servicing vehicles; we are servicing our neighbors, our local businesses, and our families. Our goal is to ensure that every driver who leaves our bay feels a renewed sense of confidence in their machine.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full lg:sticky lg:top-32 group">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img 
                src="/at26.jpg" 
                alt="Alberts Shop Mechanics" 
                className="w-full transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                 <p className="text-white font-mono text-xs uppercase tracking-[0.3em]">Masterfully Engineered in Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
