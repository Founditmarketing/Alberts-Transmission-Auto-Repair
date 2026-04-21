import { Facebook, MapPin, Phone, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="text-3xl font-display font-bold text-white tracking-tighter">
              ALBERTS<span className="text-brand-primary">.</span>
            </Link>
            <p className="text-slate-400 font-light max-w-md leading-relaxed">
              Serving Sulphur Springs with integrity since we opened our doors. We specialize in precision engineering for all vehicle makes and models, combining old-fashioned trust with state-of-the-art diagnostic technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-900 rounded-lg hover:bg-orange-600 transition-colors group cursor-pointer" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-slate-300 group-hover:text-white" />
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-300">TrustIndex Verified</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display font-medium uppercase tracking-widest text-slate-500">Contact Hub</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                <address className="text-slate-300 group-hover:text-white transition-colors not-italic">
                  534 Industrial Dr W<br />
                  Sulphur Springs, TX 75482
                </address>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="tel:(903)243-4784" className="text-slate-300 font-mono group-hover:text-white transition-colors">
                  (903) 243-4784
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display font-medium uppercase tracking-widest text-slate-500">Authority Specs</h4>
            <div className="grid grid-cols-1 gap-2 text-sm font-light text-slate-400">
              <Link to="/services/transmission" className="hover:text-orange-500 transition-colors">Transmission Repair Sulphur Springs TX</Link>
              <Link to="/about" className="hover:text-orange-500 transition-colors">Automatic Rebuilds Texas</Link>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">Certified Auto Technicians 75482</Link>
              <Link to="/services/maintenance" className="hover:text-orange-500 transition-colors">Manual Gearbox Specialists</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Albert’s Transmission & Auto Repair. All Rights Reserved. Masterfully Engineered.
          </p>
          <div className="flex items-center gap-6">
             <Link to="/contact" className="text-slate-600 hover:text-slate-400 transition-colors text-xs flex items-center gap-1 cursor-pointer">
               Review Privacy Shield <ExternalLink size={12} />
             </Link>
             <div className="flex items-center gap-2">
               <ShieldCheck size={16} className="text-brand-primary" />
               <span className="text-[10px] text-slate-600 uppercase tracking-tighter">Certified 75482 Tech Hub</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
