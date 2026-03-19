import { Phone, Mail, MapPin, Linkedin, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-custom">
        <div className="py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/logo/RS LOGO.png"
              alt="RS Construction and Property Services Ltd"
              className="h-16 w-auto mb-6"
            />
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-dark text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:02074732842"
                  className="flex items-center md:items-start gap-3 text-muted hover:text-primary transition-colors text-sm justify-center md:justify-start"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  020 7473 2842
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rs-construction.com"
                  className="flex items-center md:items-start gap-3 text-muted hover:text-primary transition-colors text-sm justify-center md:justify-start"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  info@rs-construction.com
                </a>
              </li>
              <li className="flex items-center md:items-start gap-3 text-muted text-sm justify-center md:justify-start">
                <MapPin size={18} className="flex-shrink-0" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center md:items-start gap-3 text-muted text-sm justify-center md:justify-start">
                <Clock size={18} className="flex-shrink-0" />
                <span>Mon - Fri: 8:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
            <p>
              &copy; 2026 RS Construction & Property Services LTD. All rights reserved.
            </p>
            <p>
              Registered in England and Wales | REG: 7425679 | VAT 106919509
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
