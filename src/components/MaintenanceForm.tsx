import { motion } from "motion/react";
import { Send, AlertCircle } from "lucide-react";

export default function MaintenanceForm() {
  return (
    <section className="py-24 bg-slate-900" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Tech-Spec Intake</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Professional Hub. Immediate Dispatch.</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0.1, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Tech-Spec Maintenance Form</h2>
              <p className="text-slate-400 font-light">Complete the diagnostic profile below for a precision service quote.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-slate-500">Contact Name</label>
                  <input 
                    type="text" 
                    placeholder="First & Last Name"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-slate-500">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(903) 000-0000"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-slate-500">Vehicle Specs (Car Make & Model)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2019 Ford F-150"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-slate-500">Priority Level</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors appearance-none cursor-pointer">
                    <option>Urgency Level...</option>
                    <option>Emergency (Critical Failure)</option>
                    <option>Within 48 hours (Urgent)</option>
                    <option>Routine Maintenance (Preventative)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-slate-500">The Diagnostic (Issue Description)</label>
                <textarea 
                  rows={4}
                  placeholder="Describe slipping, noises, or performance issues..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-brand-primary hover:bg-orange-500 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/30 group cursor-pointer">
                Dispatch Request
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-500 justify-center">
                <AlertCircle className="w-4 h-4 text-brand-primary" />
                <p>Diagnostic submissions are strictly confidential and secure.</p>
              </div>
            </form>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -ml-16 -mb-16" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
