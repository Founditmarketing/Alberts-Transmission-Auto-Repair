import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wrench, Clock, CheckCircle, Droplets, Thermometer, Gauge, ChevronRight } from 'lucide-react';

const maintenancePoints = [
  { name: "Fluid Integrity Check", icon: <Droplets className="text-brand-primary" />, desc: "Complete analysis of transmission, brake, and coolant levels." },
  { name: "Thermal Diagnostics", icon: <Thermometer className="text-brand-primary" />, desc: "Monitoring operating temperatures to prevent friction damage." },
  { name: "Pressure Evaluation", icon: <Gauge className="text-brand-primary" />, desc: "Hydraulic pressure testing for optimal shift response." }
];

export default function MaintenancePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-950"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-24">
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Peak Performance Tracking</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">Rapid Maintenance</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Standard maintenance at Alberts is anything but standard. We treat every vehicle check as a preventative engineering audit, ensuring your car stays ahead of the wear-and-tear curve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="grid gap-6">
            {maintenancePoints.map((point, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex gap-6 hover:border-brand-primary/30 transition-colors">
                <div className="shrink-0 pt-1">{point.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{point.name}</h4>
                  <p className="text-slate-500 font-light">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 -bottom-10 h-1 bg-brand-primary/20 blur-xl" />
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" 
              alt="Professional Maintenance"
              className="rounded-3xl border border-slate-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 border border-slate-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">The 30k/60k/90k Protocol</h2>
               <p className="text-slate-400 font-light leading-relaxed mb-8">
                 Most major mechanical failures can be traced back to missed maintenance intervals. Our protocol follows factory-specified engineering benchmarks to ensure your drivetrain remains in peak condition for hundreds of thousands of miles.
               </p>
               <ul className="space-y-4">
                 {[
                   "Factory Warranty Compliance",
                   "Synthetic Performance Optimization",
                   "Fuel System Cleaning",
                   "Brake System Evaluation"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-white font-mono text-xs uppercase tracking-widest">
                     <CheckCircle className="w-4 h-4 text-brand-primary" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                  <span className="text-4xl font-display font-bold text-brand-primary">1hr</span>
                  <p className="text-slate-500 text-xs mt-2 uppercase">Average Turnaround</p>
               </div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                  <span className="text-4xl font-display font-bold text-brand-primary">100%</span>
                  <p className="text-slate-500 text-xs mt-2 uppercase">Digital Records</p>
               </div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center col-span-2">
                  <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter italic">Engineered Longevity</span>
               </div>
            </div>
          </div>
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
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Protect Your Machine's Future</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-3xl mx-auto font-light">
              Proactive maintenance is the difference between a high-performing vehicle and a costly emergency. Book your engineering audit today.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-950/20"
            >
              Book Maintenance Request
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
