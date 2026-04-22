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
        "/at12.jpg",
        "/at13.jpg",
        "/at15.jpg",
        "/at21.jpg",
        "/at22.jpg",
        "/at10.jpg"
      ]} />
      <Reviews />
      <MaintenanceForm />
    </motion.div>
  );
}
