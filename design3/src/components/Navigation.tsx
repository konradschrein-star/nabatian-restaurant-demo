import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { name: 'Start', href: '/' },
    { name: 'Philosophie', href: '/philosophie' },
    { name: 'Speisekarte', href: '/speisekarte' },
    { name: 'Gutscheine', href: '/gutscheine' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src={`${import.meta.env.BASE_URL}cropped-Nabatian_Logo.png`} 
              alt="Nabatian" 
              className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#050505] bg-[#D4AF37] px-8 py-3 hover:bg-white transition-colors duration-500"
            >
              Reservieren
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-serif text-3xl font-light transition-colors ${
                    location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white/80 hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="mt-8 font-sans text-[11px] uppercase tracking-[0.2em] text-[#050505] bg-[#D4AF37] px-12 py-4 hover:bg-white transition-colors duration-500"
              >
                Tisch Reservieren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
