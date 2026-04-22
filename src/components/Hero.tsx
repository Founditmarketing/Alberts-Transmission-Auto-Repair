import { motion } from "motion/react";
import { ChevronRight, Cog } from "lucide-react";

const RealisticGear = ({ 
  teeth = 24, 
  outerRadius = 48, 
  innerRadius = 40, 
  holeRadius = 8, 
  className = ""
}) => {
  const points = [];
  const angleStep = (Math.PI * 2) / teeth;
  const tW = angleStep * 0.25; 
  for (let i = 0; i < teeth; i++) {
    const a = i * angleStep;
    points.push(`${Math.cos(a - tW*1.5) * innerRadius},${Math.sin(a - tW*1.5) * innerRadius}`);
    points.push(`${Math.cos(a - tW) * outerRadius},${Math.sin(a - tW) * outerRadius}`);
    points.push(`${Math.cos(a + tW) * outerRadius},${Math.sin(a + tW) * outerRadius}`);
    points.push(`${Math.cos(a + tW*1.5) * innerRadius},${Math.sin(a + tW*1.5) * innerRadius}`);
  }
  const gearPath = `M ${points[0]} L ` + points.slice(1).join(" L ") + " Z";

  return (
    <svg viewBox="-50 -50 100 100" className={`overflow-visible ${className}`}>
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <filter id="gearShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.5" />
        </filter>
      </defs>
      
      <g filter="url(#gearShadow)">
        {/* Main Base */}
        <path d={`${gearPath}`} fill="url(#gearGrad)" />
        
        {/* Inner indent */}
        <circle cx="0" cy="0" r={innerRadius - 4} fill="#1e293b" opacity="0.8" />
        
        {/* Spokes Center */}
        <circle cx="0" cy="0" r={holeRadius + 12} fill="url(#gearGrad)" />
        
        {/* Spokes */}
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="0" y1="0"
            x2={Math.cos((i * Math.PI * 2) / 5) * (innerRadius - 4)}
            y2={Math.sin((i * Math.PI * 2) / 5) * (innerRadius - 4)}
            stroke="url(#gearGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        ))}

        {/* Center Hole */}
        <circle cx="0" cy="0" r={holeRadius} fill="#020617" />
        
        {/* Hub rim */}
        <circle cx="0" cy="0" r={holeRadius + 3} stroke="#64748b" strokeWidth="1.5" fill="none" />
        
        {/* Rivets */}
        {[...Array(5)].map((_, i) => {
          const r = holeRadius + 6;
          const a = (i * Math.PI * 2) / 5 + 0.5; // offset angle
          return (
            <circle 
              key={`rivet-${i}`}
              cx={Math.cos(a) * r} cy={Math.sin(a) * r} 
              r="1.5" fill="#e2e8f0" 
            />
          );
        })}
      </g>
    </svg>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 font-sans">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Image with better fallback visibility */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"
        />
        
        {/* Metallic Texture Layer (Separated to avoid bg-image conflict) */}
        <div className="absolute inset-0 metallic-texture opacity-20" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950 z-10" />
        
        {/* Animated metallic lines */}
        <div className="absolute inset-0 opacity-10 z-5">
           <div className="h-px w-full bg-slate-400 absolute top-1/4 blur-sm opacity-50" />
           <div className="h-px w-full bg-slate-400 absolute top-1/2 blur-sm opacity-50" />
           <div className="h-px w-full bg-slate-400 absolute top-3/4 blur-sm opacity-50" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.9] mb-6 text-white uppercase">
              Alberts <br className="hidden md:block" />
              Transmission & <br className="hidden md:block" />
              <span className="text-brand-primary">Auto Repair</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl lg:max-w-none mb-10 leading-relaxed"
          >
            Family-Owned Heritage. State-of-the-Art Precision. <br className="hidden md:block" />
            Trusted Rebuilds for Manual & Automatic Vehicles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0.1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="chrome-gloss px-8 py-4 rounded-md text-slate-950 font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform group cursor-pointer whitespace-nowrap"
            >
              Schedule Appointment
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-md text-white font-semibold border-2 border-orange-600/50 hover:bg-orange-600/10 transition-colors text-lg cursor-pointer whitespace-nowrap"
            >
              Request Maintenance
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative mechanical element - Realistic Gear mechanism */}
      <div className="absolute right-[-5%] bottom-[-5%] opacity-30 hidden lg:block pointer-events-none">
        <div className="relative w-0 h-0">
          {/* Main Large Gear (36 teeth) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: -300, top: -300, width: 600, height: 600 }}
          >
            <RealisticGear teeth={36} outerRadius={48} innerRadius={42} holeRadius={6} />
          </motion.div>

          {/* Medium Interlocking Gear (24 teeth) */}
          <motion.div
            animate={{ rotate: -540 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: -560, top: -470, width: 400, height: 400 }} 
          >
            <RealisticGear teeth={24} innerRadius={35} holeRadius={10} />
          </motion.div>

          {/* Small Interlocking Gear (12 teeth) */}
          <motion.div
            animate={{ rotate: -1080 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: -100, top: -460, width: 200, height: 200 }}
          >
            <RealisticGear teeth={12} innerRadius={35} holeRadius={10} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

