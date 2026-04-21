import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael R.",
    text: "The best transmission shop in Sulphur Springs. Alberts and his crew are honest and fair. They rebuilt my F-150 transmission and it runs perfectly.",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Sarah J.",
    text: "Finally found a mechanic who won't rip you off. Fast service and very professional. Highly recommend for any auto repair needs.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "David T.",
    text: "State of the art equipment and expert hands. They diagnosed my slipping gears in minutes. Great local business with hometown integrity.",
    rating: 5,
    date: "3 weeks ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-slate-950" id="reviews">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Trusted by the Community</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-primary/10" />
              <div className="flex gap-1 mb-4 text-brand-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 font-light mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <span className="font-display font-bold text-white">{review.name}</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
