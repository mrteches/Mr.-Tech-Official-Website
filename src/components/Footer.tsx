import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  Linkedin,
  ExternalLink,
  ArrowUp
} from 'lucide-react';
import logo from '@/assets/mrtech_logo.png';

const footerLinks = [
  { name: 'Home', href: '#home' },
  // { name: 'About', href: '/about' },
  { name: 'Courses', href: '#courses' },
  { name: 'STEM', href: '#stem' },
  // { name: 'Store', href: '/store' },
  { name: 'Drones', href: '#drones' },
  { name: 'Workshops', href: '#workshop' },
  // { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/Mr.Techengineering.lk', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UC8nk8f_8zur4YHF-tx80Xrg', label: 'YouTube' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 glass-navbar border-t border-border/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-white flex items-center justify-center">
                <img
                  src={logo}
                  alt="mrtech logo"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-foreground block">
                  Mr. Tech
                </span>
                <span className="text-xs text-muted-foreground">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the next generation of engineers through practical, 
              activity-based technology education in Sri Lanka.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Class Details</p>
                  <a href="tel:0778877200" className="text-foreground font-medium hover:text-primary transition-colors">
                    077 88 77 200
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Other Services</p>
                  <a href="tel:0778877988" className="text-foreground font-medium hover:text-primary transition-colors">
                    077 88 77 988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Email</p>
                  <a href="mailto:info@mrteches.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    info@mrteches.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-foreground">Visit Us</h4>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Gravity Edu</p>
                <p className="text-muted-foreground text-sm">
                  43/H, Walawwatta Road,
                  <br />
                  Delkanda, Nugegoda
                </p>
              </div>
            </div>

            {/* Map Link */}
            <motion.a
              href="https://maps.app.goo.gl/ZwJdbHRAmx5eW9Li9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-3 w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Directions
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mr. Tech Engineering Solutions (Pvt) Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
