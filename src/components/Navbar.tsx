import { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Settings, Zap } from 'lucide-react';

const menuItems = [
  { name: 'Home', path: '/', hash: '#home' },
  { name: 'About Us', path: '/about', hash: '#about' },
  { 
    name: 'Services', 
    path: '#', 
    dropdown: [
      { name: 'Transmission Specialists', path: '/services/transmission', icon: <Settings className="w-4 h-4" />, hash: '#services' },
      { name: 'Rapid Maintenance', path: '/services/maintenance', icon: <Zap className="w-4 h-4" />, hash: '#services' },
    ] 
  },
  { name: 'Gallery', path: '/gallery', hash: '#gallery' },
  { name: 'Reviews', path: '/#reviews', hash: '#reviews' },
  { name: 'Contact', path: '/contact', hash: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, hash?: string) => {
    setIsOpen(false);
    // Remove the e.preventDefault() logic to allow actual navigation to separate pages
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/at-logo.webp" alt="Albert's Transmission Logo" className="h-12 md:h-16 w-auto object-contain" width="200" height="64" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <div className="relative">
                  <button 
                    onMouseEnter={() => setDropdownOpen(true)}
                    className="flex items-center gap-1 text-sm font-display font-medium uppercase tracking-widest text-slate-300 hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    {item.name} <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-4 w-64 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={(e) => handleLinkClick(e, sub.hash)}
                            className="flex items-center gap-3 px-6 py-4 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-primary transition-colors border-b border-slate-800 last:border-0"
                          >
                            {sub.icon}
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={(e) => handleLinkClick(e, item.hash)}
                  className={`text-sm font-display font-medium uppercase tracking-widest transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact#contact" className="bg-brand-primary px-6 py-2 rounded-md text-white font-bold text-sm uppercase tracking-widest hover:bg-orange-500 transition-colors">
            Request Maintenance
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-sm font-display font-medium uppercase tracking-widest text-slate-500">{item.name}</span>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={(e) => handleLinkClick(e, sub.hash)}
                          className="text-lg text-slate-300 pl-4 border-l border-slate-800"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleLinkClick(e, item.hash)}
                      className="text-lg font-display font-medium uppercase tracking-widest text-slate-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact#contact" className="bg-brand-primary w-full py-4 rounded-md text-white font-bold text-center uppercase tracking-widest">
                Request Maintenance
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
