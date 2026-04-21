import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Settings, ShieldCheck, Zap, History, Cog, Activity, ChevronRight } from 'lucide-react';

const detailedServices = [
  {
    title: "Automatic Rebuilds",
    icon: <Cog className="w-8 h-8 text-brand-primary" />,
    features: ["Clutch Plate Replacement", "Torque Converter Servicing", "Valve Body Calibration", "Electronic Shift Testing"]
  },
  {
    title: "Manual Mastery",
    icon: <Settings className="w-8 h-8 text-brand-primary" />,
    features: ["Synchronizer Repair", "Bearing & Seal Refresh", "Clutch Kit Installation", "Flywheel Resurfacing"]
  },
  {
    title: "Diagnostic Fluids",
    icon: <History className="w-8 h-8 text-brand-primary" />,
    features: ["Particulate Analysis", "Thermal Breakdown Testing", "Pressure Bench Testing", "Synthetic Grade Upgrades"]
  }
];

export default function TransmissionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-950"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <span className="text-brand-primary font-mono text-sm uppercase tracking-widest block">Authority Engineering</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">Transmission Specialists</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              We specialize in the complex intersection of mechanical gears and digital control systems. At Alberts, a transmission repair is a surgical operation focused on restoring factory-plus reliability.
            </p>
            <div className="flex items-center gap-6 p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <Activity className="w-12 h-12 text-brand-primary animate-pulse" />
               <div>
                 <h4 className="font-bold text-white uppercase tracking-wide">Real-Time Diagnostics</h4>
                 <p className="text-slate-500 text-sm">We use live-data streams to monitor shift points and pressure drops before opening the case.</p>
               </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80" 
              alt="Transmission Rebuild"
              className="relative rounded-3xl border border-slate-800 shadow-2xl z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <h2 className="text-3xl font-display font-bold text-white mb-16 text-center uppercase tracking-widest underline decoration-brand-primary underline-offset-8">The Technical Specs</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {detailedServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-brand-primary/50 transition-colors group"
            >
              <div className="mb-8 p-4 bg-slate-950 w-fit rounded-2xl border border-slate-800 group-hover:bg-brand-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-wide">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-orange-800 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">Ready to Restore Your Drivetrain's Integrity?</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-3xl mx-auto font-light">
              Don't wait for a breakdown. Get a professional diagnostic audit from Sulphur Springs' transmission authorities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-950/20"
            >
              Schedule Your Diagnostic
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
