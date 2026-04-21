import { motion } from 'motion/react';
import MaintenanceForm from '../components/MaintenanceForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-950"
    >
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 underline decoration-brand-primary decoration-4 underline-offset-8">Contact Our Hub</h1>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <MapPin className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Physical Address</h3>
                <p className="text-slate-400 font-light text-lg">
                  534 Industrial Dr W<br />
                  Sulphur Springs, TX 75482
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <Phone className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Phone Line</h3>
                <p className="text-slate-400 font-light text-lg">
                  (903) 243-4784
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <Clock className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Service Hours</h3>
                <p className="text-slate-400 font-light text-lg">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="h-96 w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.897042539031!2d-95.61748262339591!3d33.13149547352336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649479b12a875a5%3A0x63c509c25f6e80b2!2s534%20Industrial%20Dr%20W%2C%20Sulphur%20Springs%2C%20TX%2075482!5e0!3m2!1sen!2sus!4v1713735000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <MaintenanceForm />
    </motion.div>
  );
}
