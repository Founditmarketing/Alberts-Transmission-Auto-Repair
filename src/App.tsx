/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TransmissionPage from "./pages/TransmissionPage";
import MaintenancePage from "./pages/MaintenancePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-primary selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/transmission" element={<TransmissionPage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
}

function FooterWrapper() {
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  return <Footer />;
}


