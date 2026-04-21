import { motion } from "motion/react";
import { ChevronRight, Cog } from "lucide-react";

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
      <div className="absolute right-[-10%] bottom-[-10%] opacity-10 hidden lg:block pointer-events-none">
        <div className="relative">
          {/* Main Large Gear */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-[700px] h-[700px]"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="gearGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              {/* Complex Teeth Path */}
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.5" />
              <path 
                d="M50 0 L53 10 L60 8 L65 18 L75 14 L78 24 L88 18 L89 29 L99 21 L98 32 L108 23 L105 34 L115 25 L110 36 L120 27 L114 38 L124 29 L116 40 L126 31 L117 42" 
                className="hidden" // Placeholder for logic, will use a real gear path
              />
              {/* Detailed Gear Path */}
              <path 
                fill="url(#gearGrad)"
                d="M50 2.5 L53.5 10 L58 8.5 L60.5 16 L65 14.5 L67.5 22 L72 20.5 L74.5 28 L79 26.5 L81.5 34 L86 32.5 L88.5 40 L93 38.5 L95.5 46 L100 44.5 M50 97.5 L46.5 90 L42 91.5 L39.5 84 L35 85.5 L32.5 78 L28 79.5 L25.5 72 L21 73.5 L18.5 66 L14 67.5 L11.5 60 L7 61.5 L4.5 54 L0 55.5" 
                stroke="currentColor" strokeWidth="0.5" opacity="0.4"
                className="scale-[0.95] origin-center"
              />
              {/* Main Structural Gear */}
              <path 
                fill="currentColor"
                fillOpacity="0.05"
                d="M50 10 L52 18 L58 18 L60 10 L64 12 L62 20 L68 22 L70 14 L74 17 L71 25 L76 28 L80 20 L84 23 L80 31 L85 35 L89 27 L93 30 L88 38 L92 42 L97 34 L100 38 L94 46 L97 50 L102 43 L105 47 L98 56 L100 60 L105 53 L108 57 L100 66 L102 70 L107 63 L110 67 L101 76 L103 80 L108 73 L111 77 L101 87 L103 91 L108 84 L111 88 L101 98 L103 102 L108 95 L111 99 L101 109 M50 90 L48 82 L42 82 L40 90 L36 88 L38 80 L32 78 L30 86 L26 83 L29 75 L24 72 L20 80 L16 77 L20 69 L15 65 L11 73 L7 70 L12 62 L8 58 L3 66 L0 62 L6 54 L3 50 L-2 57 L-5 53 L2 44 L0 40 L-5 47 L-8 43 L0 34 L-2 30 L-7 37 L-10 33 L-1 24 L-3 20 L-8 27 L-11 23 L-1 13 L-3 9 L-8 16 L-11 12 L-1 1 L-3 -3 L-8 4 L-11 0 L-1 -10"
                className="hidden" // Too complex for basic edit, simplified path below
              />
              {/* Simplified Detailed Gear */}
              <path
                d="M50 10 L51.5 15 L56 15 L57.5 10 L60.5 11 L59 16 L63 17.5 L64.5 12.5 L67.5 13.5 L66 18.5 L70 20 L71.5 15 L74.5 16 L73 21 L77 23 L78.5 18 L81.5 19 L80 24 L83.5 26.5 L85 21.5 L88 22.5 L86.5 27.5 L89.5 30.5 L91 25.5 L94 26.5 L92.5 31.5 L95 35 L96.5 30 L99.5 31 L98 36 L100 40 L101.5 35 L104.5 36 L103 41 L104.5 45 L106 40 L109 41 L107.5 46 L108.5 50 L110 45 L113 46 L111.5 51 L112.5 55 L114 50 L117 51 L115.5 56 L116.5 60 L118 55 L121 56 L119.5 61 L120.5 65 L122 60 L125 61 L123.5 66"
                className="hidden"
              />
              {/* Correct realistic SVG gear path */}
              <path 
                fill="currentColor"
                opacity="0.1"
                d="M50 0 L54 10 L60 8 L64 18 L70 16 L74 26 L80 24 L84 34 L90 32 L94 42 L100 40 L104 50 L100 60 L104 70 L98 80 L102 90 L92 100 L96 110 L86 120 L50 110 L14 120 L4 110 L8 100 L-2 90 L2 80 L-4 70 L0 60 L-4 50 L0 40 L-4 30 L0 20 L-4 10 L0 0 Z"
                className="scale-[0.8] origin-center"
              />
              {/* Hub and Spokes */}
              <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2" />
              <circle cx="50" cy="50" r="5" fill="black" />
              {[...Array(8)].map((_, i) => (
                <rect key={i} x="48.5" y="10" width="3" height="80" fill="currentColor" opacity="0.1" transform={`rotate(${i * 45} 50 50)`} />
              ))}
            </svg>
          </motion.div>

          {/* Smaller Interlocking Gear */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] absolute -left-20 top-20"
          >
             <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary/20" fill="currentColor">
                <path d="M50 10 L52 15 L58 15 L60 10 L64 12 L62 17 L68 18 L70 13 L74 15 L71 20 L76 22 L80 17 L84 19 L80 24 L85 27 L89 22 L93 24 L88 29 L92 33 L97 28 L100 30 L94 35 L97 40 L102 35 L105 37 L98 43 L100 48 L105 43 L108 45 L100 51 L102 56 L107 51 L110 53 L101 59 L103 64 L108 59 L111 61 L101 67 L103 72 L108 67 L111 69 L101 75 L103 80 L108 75 L111 77 L101 83 L103 88 L108 83 L111 85 L101 91 L103 96 L108 91"
                  className="scale-[0.7] origin-center"
                />
                <circle cx="50" cy="50" r="15" fill="black" />
                <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
             </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

