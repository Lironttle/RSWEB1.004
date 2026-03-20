import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Construction } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const pageTitles: Record<string, string> = {
  '/services': 'Our Services',
  '/services/new-build': 'New Build Construction',
  '/services/refurbishment': 'Refurbishment',
  '/services/extensions': 'Extensions',
  '/services/fit-out': 'Commercial Fit Out',
  '/services/maintenance': 'Maintenance',
  '/estimates': 'Request an Estimate',
  '/clients': 'Our Clients',
  '/about': 'About Us',
  '/accreditations': 'Accreditations',
  '/careers': 'Careers',
  '/contact': 'Contact Us',
};

export default function Placeholder() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Page';
  usePageTitle(title);

  return (
    <main className="pt-32">
      <section className="section-padding bg-light dark:bg-surface-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Construction className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6">
              {title}
            </h1>
            <p className="text-muted dark:text-gray-400 text-lg mb-8">
              This page is under construction. Check back soon for more information
              about our {title.toLowerCase()}.
            </p>
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Back to Home
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
