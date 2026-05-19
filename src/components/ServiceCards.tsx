import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Settings, Zap, History, MousePointerClick } from "lucide-react";

export default function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: "url('/transmission_bg.webp')" }}
        />
        {/* Soft overlay gradient to ensure text readability while keeping the image highly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Mastered by Hand. Perfected by Tech.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A: Transmission Specialists */}
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-slate-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl flex flex-col">
              <div className="mb-8 p-3 bg-orange-500/10 w-fit rounded-lg">
                <Settings className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Transmission Specialists</h3>
              <p className="text-slate-400 text-lg font-light mb-8 flex-grow">
                From full replacements to expert rebuilds, we handle the most complex automatic and manual transmission challenges. Don't settle for "fixed"—demand precision performance.
              </p>
              <ul className="space-y-4 mb-10">
                {['Automatic Rebuilds', 'Manual Transmission Mastery', 'Diagnostic Fluid Analysis', 'Performance Upgrades'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-mono text-slate-300">
                    <History className="w-4 h-4 text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/transmission" className="w-full py-4 border border-orange-500/30 rounded-xl font-bold hover:bg-orange-600/10 transition-colors flex items-center justify-center gap-3 group/btn cursor-pointer text-white">
                Explore Transmission Specs
                <Zap className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card B: Rapid Maintenance */}
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl flex flex-col">
              <div className="mb-8 p-3 bg-slate-500/10 w-fit rounded-lg">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Rapid Maintenance</h3>
              <p className="text-slate-400 text-lg font-light mb-8 flex-grow">
                Our easy request process is designed for owners who value their time. Professional grade care that respects your schedule and keeps your vehicle in peak condition.
              </p>
              <ul className="space-y-4 mb-10">
                {['Same-Day Diagnostics', 'Fluid & Filter Service', 'Clutch Adjustments', 'Software Updates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-mono text-slate-300">
                    <MousePointerClick className="w-4 h-4 text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/maintenance" className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20 cursor-pointer flex items-center justify-center">
                Explore Maintenance Care
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
