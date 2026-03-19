import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Shield,
  Settings,
  ClipboardCheck,
  PoundSterling,
  Users,
  Layers,
  ChevronRight,
  ArrowRight,
  MapPin,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Certified',
    description: 'Fully insured, Federation of Master Builders and TrustMark members',
  },
  {
    icon: Settings,
    title: 'Flexible',
    description: 'Adaptable solutions for every unique project requirement',
  },
  {
    icon: ClipboardCheck,
    title: 'Thorough',
    description: 'Detailed estimates, documentation, and aftercare service',
  },
  {
    icon: PoundSterling,
    title: 'Value',
    description: 'Transparent pricing with no hidden costs',
  },
  {
    icon: Users,
    title: 'Professional',
    description: 'Experienced, reliable team dedicated to excellence',
  },
  {
    icon: Layers,
    title: 'Comprehensive',
    description: 'Full range of building services under one roof',
  },
];

const coverageAreas = [
  { name: 'East London', primary: true },
  { name: 'North London', primary: false },
  { name: 'Central London', primary: false },
  { name: 'South London', primary: false },
  { name: 'West London', primary: false },
];

export default function About() {
  usePageTitle('About Us');

  return (
    <main>
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />

        <div className="relative container-custom py-32">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-dark font-medium">About Us</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-dark mb-6"
          >
            About RS Construction
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Established 2010
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="RS Construction Team"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl">
                  <div className="text-4xl font-bold">16+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif text-dark mt-3 mb-6">
                Building Trust Since 2010
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                RS Construction and Property Services Ltd is a family-owned business established in 2010.
                We've grown into a specialist contracting group with an ever-expanding client base built
                on trust and quality.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Our journey began with a simple commitment: deliver exceptional craftsmanship and genuine
                care for every project. Today, we're proud to be one of London's most trusted construction
                and property services providers.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                From residential renovations to commercial developments, our experienced team brings
                dedication, expertise, and attention to detail to every job we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark mt-3">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Service Area</span>
              <h2 className="text-3xl md:text-4xl font-serif text-dark mt-3 mb-6">
                Serving London & Beyond
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Based in East London, our services cover East, North, and Central London.
                We've successfully completed projects across the greater London area and
                continue to expand our reach to serve more communities.
              </p>

              <div className="space-y-4">
                {coverageAreas.map((area) => (
                  <div key={area.name} className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${area.primary ? 'text-primary' : 'text-muted'}`} />
                    <span className={`${area.primary ? 'text-dark font-medium' : 'text-muted'}`}>
                      {area.name}
                      {area.primary && <span className="text-primary ml-2">(Headquarters)</span>}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-light rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  </svg>
                </div>

                <div className="relative grid grid-cols-3 gap-4">
                  <div className="col-start-2 flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <MapPin className="w-6 h-6 text-muted mx-auto mb-2" />
                      <span className="text-sm text-muted">North</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <MapPin className="w-6 h-6 text-muted mx-auto mb-2" />
                      <span className="text-sm text-muted">West</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <MapPin className="w-6 h-6 text-muted mx-auto mb-2" />
                      <span className="text-sm text-muted">Central</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-primary p-4 rounded-xl shadow-lg text-center">
                      <MapPin className="w-6 h-6 text-white mx-auto mb-2" />
                      <span className="text-sm text-white font-medium">East</span>
                    </div>
                  </div>
                  <div className="col-start-2 flex justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <MapPin className="w-6 h-6 text-muted mx-auto mb-2" />
                      <span className="text-sm text-muted">South</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Get in Touch for a No-Obligation Quote
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Ready to discuss your project? Our team is here to help with expert
              advice and competitive pricing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
