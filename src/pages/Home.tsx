import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import ClientLogos from '../components/ui/ClientLogos';
import CertificateLogos from '../components/ui/CertificateLogos';
import {
  Building2,
  Droplets,
  Flame,
  Shovel,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const trustIndicators = [
  {
    icon: Clock,
    value: '16+',
    label: 'Years',
    description: 'Of trusted construction excellence',
  },
  {
    icon: Star,
    value: '90%',
    label: 'Referrals',
    description: 'Client referral rate',
  },
  {
    icon: Users,
    value: '70+',
    label: 'Years',
    description: 'Combined team experience',
  },
];

const services = [
  {
    icon: Building2,
    title: 'New Build',
    description: 'Commercial and residential development with innovative design solutions',
    link: '/services/new-build',
  },
  {
    icon: Droplets,
    title: 'Plumbing & Drainage',
    description: 'Complete plumbing services from repairs to full installations',
    link: '/services/plumbing',
  },
  {
    icon: Flame,
    title: 'Gas Services',
    description: 'Gas Safe registered for all domestic and commercial needs',
    link: '/services/gas',
  },
  {
    icon: Shovel,
    title: 'Groundworks',
    description: 'Foundation work, drainage, and landscaping services',
    link: '/services/groundworks',
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    description: 'NICEIC registered electricians for safe installations',
    link: '/services/electrical',
  },
  {
    icon: ShieldCheck,
    title: 'Fire Stopping',
    description: 'Certified fire protection and compliance solutions',
    link: '/services/fire-stopping',
  },
];

const testimonials = [
  {
    quote: 'RS Construction have consistently provided excellent workmanship with a proven track record of completing projects to high standards, on time and within budget.',
    client: 'London Borough of Newham',
    role: 'Local Authority Partner',
  },
  {
    quote: 'Outstanding quality of workmanship throughout their projects. Their attention to detail and health & safety standards are exceptional.',
    client: 'Wates',
    role: 'Construction Partner',
  },
];

const reasons = [
  'Over 16 years of industry experience',
  'Fully accredited and certified',
  'Dedicated project management',
  'Competitive pricing without compromise',
  'On-time, on-budget delivery',
  'Health & Safety excellence',
];

export default function Home() {
  usePageTitle();

  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(/images/photos/rs%20team.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
        </div>

        <div className="relative container-custom text-center pt-24 pb-32 sm:pt-32 sm:pb-48">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2.5 bg-primary text-white font-medium text-sm tracking-wider uppercase rounded-full shadow-lg">
                Trusted Since 2010
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 sm:mb-8"
            >
              Building Excellence,
              <br />
              <span className="text-white/90">Delivering Results</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              RS Construction and Property Services Ltd provides innovative
              construction solutions with 16 years of industry excellence and 70+
              years of combined expertise.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
              >
                Get Free Estimate
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white/90 dark:bg-surface/90 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-surface-border">
                {trustIndicators.map((item) => (
                  <div
                    key={item.description}
                    className="p-8 lg:p-10 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl lg:text-5xl font-serif text-dark dark:text-white">
                        {item.value}
                      </span>
                      <span className="text-lg text-muted dark:text-gray-400 font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-muted dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark pt-28 sm:pt-40 md:pt-48">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block w-12 h-1 bg-primary rounded-full" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6"
            >
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg">
              Comprehensive construction solutions for every project
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={service.link}
                  className="group block bg-white dark:bg-surface-dark p-8 h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg border border-gray-100 dark:border-surface-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              View All Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <ClientLogos />

      <section className="section-padding bg-gray-50 dark:bg-surface-dark">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block w-12 h-1 bg-primary rounded-full" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.client}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-surface rounded-2xl p-8 lg:p-10 shadow-lg"
              >
                <Quote className="w-10 h-10 text-primary mb-6" />
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-dark dark:text-white text-lg">
                    {testimonial.client}
                  </p>
                  <p className="text-muted dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CertificateLogos />

      <section className="section-padding bg-light dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6">
                Why Choose RS Construction?
              </h2>
              <p className="text-muted dark:text-gray-400 text-lg mb-8 leading-relaxed">
                With over 16 years of experience in the construction industry, RS
                Construction and Property Services Ltd has established itself as a
                trusted partner for residential and commercial projects across the UK.
              </p>

              <ul className="space-y-4 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-dark dark:text-gray-200">{reason}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Learn More About Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Construction site"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-primary text-white p-4 sm:p-8 shadow-xl">
                  <div className="text-3xl sm:text-5xl font-serif mb-1 sm:mb-2">16+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Fully Accredited</h3>
              <p className="text-gray-400">
                CHAS, Constructionline, SafeContractor, and SSIP certified for your
                peace of mind.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-8">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Quality Guaranteed</h3>
              <p className="text-gray-400">
                We deliver exceptional craftsmanship on every project, backed by
                comprehensive warranties.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Expert Team</h3>
              <p className="text-gray-400">
                Our skilled professionals bring decades of combined experience to
                every project.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative py-20 sm:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Get in touch with our team today for a free, no-obligation estimate
              on your construction project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl group"
              >
                Request Free Estimate
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
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
