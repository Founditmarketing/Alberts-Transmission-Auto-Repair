import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing content (prevents duplication on HMR)
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = "https://cdn.trustindex.io/loader.js?b862f1912392338fc696cf26b30";
    script.defer = true;
    script.async = true;
    
    containerRef.current.appendChild(script);
  }, []);

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

        <div className="w-full flex justify-center py-8">
          {/* TrustIndex Widget Container */}
          <div ref={containerRef} className="w-full"></div>
        </div>
      </div>
    </section>
  );
}
