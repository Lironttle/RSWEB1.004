import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Briefcase,
  TrendingUp,
  PoundSterling,
  Users,
  ShieldCheck,
  GraduationCap,
  Gift,
  Clock,
  ArrowRight,
  ChevronRight,
  Send,
  FileText,
  UserCheck,
  Handshake,
  CheckCircle,
  Building2,
  Heart,
  Calendar,
  Car,
  Wrench,
  Award,
  Coffee,
  Phone,
  Mail,
  Loader2,
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

const whyWorkWithUs = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear progression paths from apprentice to senior roles with ongoing training and development',
  },
  {
    icon: PoundSterling,
    title: 'Competitive Pay',
    description: 'Industry-leading salaries, performance bonuses, and annual pay reviews',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Family-owned values with a supportive, collaborative work environment',
  },
  {
    icon: ShieldCheck,
    title: 'Job Security',
    description: 'Consistent pipeline of projects across London with long-term contracts',
  },
  {
    icon: GraduationCap,
    title: 'Training & Certifications',
    description: 'Fully funded certifications, apprenticeships, and skills development',
  },
  {
    icon: Gift,
    title: 'Benefits Package',
    description: 'Pension scheme, paid holidays, sick pay, and company vehicle for senior roles',
  },
];

const benefits = [
  { icon: PoundSterling, text: 'Competitive salary packages' },
  { icon: Building2, text: 'Company pension scheme' },
  { icon: Calendar, text: '28 days holiday + bank holidays' },
  { icon: GraduationCap, text: 'Ongoing training & certifications (fully funded)' },
  { icon: Car, text: 'Company vehicle (senior roles)' },
  { icon: Wrench, text: 'Tool allowances' },
  { icon: TrendingUp, text: 'Career progression opportunities' },
  { icon: Heart, text: 'Supportive team environment' },
  { icon: Coffee, text: 'Regular team events' },
  { icon: Award, text: 'Employee referral bonuses' },
];

const applicationSteps = [
  {
    icon: Send,
    title: 'Apply Online',
    description: 'Submit your CV and cover letter through our form',
  },
  {
    icon: FileText,
    title: 'Initial Review',
    description: 'Our HR team reviews applications within 5 working days',
  },
  {
    icon: UserCheck,
    title: 'Interview',
    description: 'Meet with our team to discuss the role and your experience',
  },
  {
    icon: Handshake,
    title: 'Welcome Aboard',
    description: 'Receive your offer and join the RS Construction family',
  },
];

const positions = [
  'General Application',
  'Qualified Plumber',
  'Electrician (NICEIC Registered)',
  'Site Manager',
  'General Labourer',
  'Gas Engineer (Gas Safe)',
  'Apprentice Carpenter',
];

const hearAboutOptions = [
  'Job Board',
  'LinkedIn',
  'Referral',
  'Website',
  'Other',
];

export default function Careers() {
  usePageTitle('Careers');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    hearAboutUs: '',
    rightToWorkUk: false,
    cvFilename: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, cvFilename: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        hearAboutUs: '',
        rightToWorkUk: false,
        cvFilename: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />

        <div className="relative container-custom py-32">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-dark font-medium">Careers</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-dark mb-6"
          >
            Join Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mb-10"
          >
            Build your career with one of London's most trusted construction companies.
            We're always looking for talented individuals to join our growing team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="inline-flex items-center gap-3 bg-white shadow-lg px-6 py-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-serif text-dark">16+</div>
                <div className="text-sm text-muted">Years in Business</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 bg-white shadow-lg px-6 py-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-serif text-dark">50+</div>
                <div className="text-sm text-muted">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
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
              className="text-4xl md:text-5xl font-serif text-dark mb-6"
            >
              Why RS Construction?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted text-lg">
              Join a team that values your growth, rewards your effort, and treats you like family
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyWorkWithUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-light">
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
              className="text-4xl md:text-5xl font-serif text-dark mb-6"
            >
              Employee Benefits
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted text-lg">
              We take care of our team with a comprehensive benefits package
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.text}
                variants={fadeInUp}
                className="bg-white p-5 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-dark text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
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
              className="text-4xl md:text-5xl font-serif text-dark mb-6"
            >
              How to Apply
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted text-lg">
              Our simple application process gets you started quickly
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block w-12 h-1 bg-primary rounded-full" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-dark mb-6"
              >
                Apply Now
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted text-lg">
                Take the first step towards your new career
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-dark mb-4">Application Submitted!</h3>
                  <p className="text-muted mb-8">
                    Thank you for your interest in joining RS Construction. Our HR team will review your application and be in touch within 5 working days.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Submit another application
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-dark mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="07123 456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-dark mb-2">
                        Position Applying For <span className="text-primary">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                      >
                        <option value="">Select a position</option>
                        {positions.map((pos) => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-dark mb-2">
                      Upload CV <span className="text-muted font-normal">(PDF, DOC, DOCX)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center gap-4 px-4 py-3 border border-gray-200 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          {formData.cvFilename ? (
                            <p className="text-dark font-medium">{formData.cvFilename}</p>
                          ) : (
                            <>
                              <p className="text-dark font-medium">Click to upload your CV</p>
                              <p className="text-sm text-muted">or drag and drop</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-dark mb-2">
                      Cover Letter <span className="text-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={5}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Tell us why you'd like to join RS Construction..."
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium text-dark mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    >
                      <option value="">Select an option</option>
                      {hearAboutOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="rightToWorkUk"
                      name="rightToWorkUk"
                      required
                      checked={formData.rightToWorkUk}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-0.5"
                    />
                    <label htmlFor="rightToWorkUk" className="text-muted">
                      I confirm that I have the right to work in the UK <span className="text-primary">*</span>
                    </label>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                      There was an error submitting your application. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Have questions about working with us?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team - we'd love to hear from you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 group"
              >
                <Mail size={18} />
                Contact Us
              </Link>
              <a
                href="tel:02074732842"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-primary"
              >
                <Phone size={18} />
                020 7473 2842
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}