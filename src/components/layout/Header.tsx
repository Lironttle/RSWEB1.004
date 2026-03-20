import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Estimates', path: '/estimates' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-dark text-white py-1.5 sm:py-2">
        <div className="container-custom flex justify-between sm:justify-end items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <a
            href="tel:02074732842"
            className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors"
          >
            <Phone size={14} />
            <span className="hidden xs:inline">020 7473 2842</span>
            <span className="xs:hidden">Call Us</span>
          </a>
          <a
            href="mailto:info@rs-construction.com"
            className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">info@rs-construction.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 hover:text-primary transition-colors p-1 rounded"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <nav
        className={`bg-white dark:bg-surface-dark transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo/RS LOGO.png"
                alt="RS Construction and Property Services Ltd"
                className="h-14 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === item.path ||
                    (item.path !== '/' && location.pathname.startsWith(item.path))
                      ? 'text-primary'
                      : 'text-dark dark:text-white hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                      location.pathname === item.path ||
                      (item.path !== '/' && location.pathname.startsWith(item.path))
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark dark:text-white hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-full max-w-sm bg-white dark:bg-surface-dark shadow-2xl lg:hidden z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b dark:border-surface-border">
                <img
                  src="/images/logo/RS LOGO.png"
                  alt="RS Construction"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-dark dark:text-white hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block px-6 py-3 text-lg font-medium transition-colors relative ${
                      location.pathname === item.path ||
                      (item.path !== '/' && location.pathname.startsWith(item.path))
                        ? 'text-primary bg-primary/5 border-l-4 border-primary'
                        : 'text-dark dark:text-white hover:text-primary hover:bg-light dark:hover:bg-surface border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t dark:border-surface-border bg-light dark:bg-surface">
                <a
                  href="tel:02074732842"
                  className="flex items-center gap-3 text-dark dark:text-gray-300 hover:text-primary transition-colors mb-3"
                >
                  <Phone size={18} />
                  020 7473 2842
                </a>
                <a
                  href="mailto:info@rs-construction.com"
                  className="flex items-center gap-3 text-dark dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  info@rs-construction.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/50 lg:hidden z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
