import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Building2,
  Droplets,
  Flame,
  Shovel,
  Zap,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const services = [
  {
    id: 'new-build',
    icon: Building2,
    title: 'New Build',
    description: 'From concept to completion, our commercial and industrial development experts deliver innovative design solutions tailored to your requirements.',
    subServices: ['Project Management', 'Design & Build', 'Extensions', 'Loft Conversions'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plumbing',
    icon: Droplets,
    title: 'Plumbing & Drainage',
    description: 'Complete plumbing solutions including drain surveys, repairs, bathroom installations, and emergency services.',
    subServices: ['Drain Unblocking', 'CCTV Surveys', 'Bathroom Fitting', 'Leak Repairs'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gas',
    icon: Flame,
    title: 'Gas Services',
    description: 'Gas Safe registered engineers providing full domestic and commercial gas services including boiler installations and safety certifications.',
    subServices: ['Boiler Installation', 'Gas Safety Certificates', 'Central Heating', 'Repairs'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'groundworks',
    icon: Shovel,
    title: 'Groundworks',
    description: 'Professional groundwork services from foundations to landscaping, for projects of any scale.',
    subServices: ['Foundations', 'Drainage', 'Driveways', 'Landscaping'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Works',
    description: 'NICEIC registered electricians delivering safe, compliant electrical installations and maintenance.',
    subServices: ['Rewiring', 'Consumer Units', 'Lighting', 'Testing & Inspection'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fire-stopping',
    icon: ShieldCheck,
    title: 'Fire Stopping',
    description: 'Certified fire protection solutions ensuring building compliance and safety.',
    subServices: ['Fire Doors', 'Intumescent Seals', 'Compartmentation', 'Surveys'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'steam-cleaning',
    icon: Sparkles,
    title: 'Heated Steam Cleaning',
    description: 'Specialist DOFF and TORC cleaning for heritage buildings and stone restoration.',
    subServices: ['Stone Cleaning', 'Graffiti Removal', 'Paint Removal', 'Facade Restoration'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  usePageTitle('Services');

  return (
    <main>
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark via-white/95 dark:via-dark/95 to-white/70 dark:to-dark/70" />

        <div className="relative container-custom py-20 sm:py-32">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted dark:text-gray-400 mb-4 sm:mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-dark dark:text-white font-medium">Services</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-dark dark:text-white mb-6"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            From new builds to specialist cleaning, we provide comprehensive construction
            and property services backed by industry-leading accreditations and over 16 years
            of experience.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-dark">
        <div className="container-custom">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index !== services.length - 1 ? 'mb-16 sm:mb-24 lg:mb-32' : ''
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={isEven ? fadeInLeft : fadeInRight}
                  transition={{ duration: 0.6 }}
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={isEven ? fadeInRight : fadeInLeft}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mb-6">
                    {service.title}
                  </h2>

                  <p className="text-muted dark:text-gray-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.subServices.map((subService) => (
                      <li key={subService} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-dark dark:text-gray-200">{subService}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/estimates"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group"
                  >
                    Request Quote
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Get in touch with our team today for a free consultation and quote
              on your construction or property service needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:02074732842"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Call 020 7473 2842
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
