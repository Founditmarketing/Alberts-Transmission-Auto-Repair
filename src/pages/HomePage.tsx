import { motion } from 'motion/react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServiceCards from '../components/ServiceCards';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import MaintenanceForm from '../components/MaintenanceForm';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <ServiceCards />
      <Gallery showTitle={true} limit={6} images={[
        "/at12.webp",
        "/at13.webp",
        "/at15.webp",
        "/at21.webp",
        "/at22.webp",
        "/at10.webp"
      ]} />
      <Reviews />
      <MaintenanceForm />
    </motion.div>
  );
}
