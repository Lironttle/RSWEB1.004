import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Upload,
  X,
  FileText,
  Clock,
  Award,
  Shield,
  Users,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const propertyTypes = ['Residential', 'Commercial', 'Industrial'];

const services = [
  'New Build',
  'Plumbing & Drainage',
  'Gas Services',
  'Groundworks',
  'Electrical Works',
  'Fire Stopping',
  'Heated Steam Cleaning',
];

const projectSizes = [
  { value: 'small', label: 'Small (Under 1,000 sq ft)' },
  { value: 'medium', label: 'Medium (1,000 - 5,000 sq ft)' },
  { value: 'large', label: 'Large (Over 5,000 sq ft)' },
];

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: 'flexible', label: 'Flexible' },
];

const budgetRanges = [
  { value: 'under-10k', label: 'Under 10,000' },
  { value: '10k-25k', label: '10,000 - 25,000' },
  { value: '25k-50k', label: '25,000 - 50,000' },
  { value: '50k-100k', label: '50,000 - 100,000' },
  { value: '100k-250k', label: '100,000 - 250,000' },
  { value: 'over-250k', label: 'Over 250,000' },
];

const benefits = [
  { icon: CheckCircle, text: 'Free, no-obligation quotes' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Shield, text: 'Transparent pricing' },
  { icon: Award, text: '16 years of experience' },
  { icon: Users, text: 'Fully certified team' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  service: string;
  projectSize: string;
  timeline: string;
  budgetRange: string;
  description: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  agreeToContact?: string;
}

export default function Estimates() {
  usePageTitle('Request a Free Estimate');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    service: '',
    projectSize: '',
    timeline: '',
    budgetRange: '',
    description: '',
    agreeToContact: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        service: '',
        projectSize: '',
        timeline: '',
        budgetRange: '',
        description: '',
        agreeToContact: false,
      });
      setFiles([]);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2070&q=80)',
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
            <span className="text-dark font-medium">Estimates</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-dark mb-6"
          >
            Request a Free Estimate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted max-w-2xl leading-relaxed"
          >
            Tell us about your project and we'll get back within 24 hours with a
            detailed, no-obligation quote.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                {submitStatus === 'success' && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">
                      Thank you for your request! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                          Phone <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone ? 'border-red-500' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder="020 1234 5678"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-semibold text-dark mb-4">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-dark mb-2">
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select property type</option>
                          {propertyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="projectSize" className="block text-sm font-medium text-dark mb-2">
                          Project Size
                        </label>
                        <select
                          id="projectSize"
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select project size</option>
                          {projectSizes.map((size) => (
                            <option key={size.value} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-dark mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((t) => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="budgetRange" className="block text-sm font-medium text-dark mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <label htmlFor="description" className="block text-sm font-medium text-dark mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project requirements, any specific needs, or questions you have..."
                    />
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <label className="block text-sm font-medium text-dark mb-2">
                      Attach Plans or Photos
                    </label>
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleFileDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                      <p className="text-muted mb-2">
                        Drag and drop files here, or click to browse
                      </p>
                      <p className="text-sm text-gray-400">
                        Supports images and PDFs (max 5 files)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>

                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-gray-400" />
                              <span className="text-sm text-dark truncate max-w-[200px]">
                                {file.name}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted">
                        I agree to be contacted about my enquiry. Your information will be kept
                        confidential and will not be shared with third parties.
                      </span>
                    </label>
                    {errors.agreeToContact && (
                      <p className="mt-2 text-sm text-red-500">{errors.agreeToContact}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-40">
                <h3 className="text-xl font-serif text-dark mb-6">
                  Why Choose RS Construction?
                </h3>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit.text}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-dark">{benefit.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-muted mb-4">
                    Prefer to speak with someone directly?
                  </p>
                  <a
                    href="tel:02074732842"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-700 transition-colors"
                  >
                    Call 020 7473 2842
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
