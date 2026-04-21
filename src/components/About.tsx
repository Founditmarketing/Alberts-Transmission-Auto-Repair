import { motion } from "motion/react";
import { ShieldCheck, Crosshair, GraduationCap } from "lucide-react";

const columns = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-brand-primary mb-6" />,
    title: "The Reputation",
    description: "Known throughout Sulphur Springs as 'the guys who won’t rip you off.' We’ve built our legacy on hometown integrity and transparent mechanics.",
    quote: "A handshake still means something here."
  },
  {
    icon: <Crosshair className="w-12 h-12 text-brand-primary mb-6" />,
    title: "The Equipment",
    description: "Transmission work isn't guesswork. We use state-of-the-art diagnostic equipment and specialized precision tools that most generic shops lack.",
    quote: "Engineering accuracy for every make."
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-brand-primary mb-6" />,
    title: "The Expertise",
    description: "Highly specialized training and certifications ensure we master both vintage manual gearboxes and modern high-tech automatic systems.",
    quote: "Certified mastery for all models."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Built on Trust. Driven by Precision.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                {col.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{col.title}</h3>
              <p className="text-slate-400 font-light mb-6 leading-relaxed">
                {col.description}
              </p>
              <div className="pl-4 border-l border-orange-500/30">
                <p className="text-slate-500 font-mono text-sm italic">
                  "{col.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
