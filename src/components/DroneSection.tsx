import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, Trophy, Building2, Church, Film, ArrowRight } from 'lucide-react';
import droneHero from '@/assets/drone-hero.png';

const services = [
  { icon: Heart, title: 'Weddings & Pre-shoots', desc: 'Capture your special day from breathtaking angles' },
  { icon: Trophy, title: 'Sports Events', desc: 'Dynamic aerial coverage of athletic competitions' },
  { icon: Film, title: 'Marketing Videos', desc: 'Cinematic promotional content that stands out' },
  { icon: Building2, title: 'Real Estate', desc: 'Showcase properties with stunning aerial views' },
  { icon: Church, title: 'Cultural Events', desc: 'Document religious and traditional ceremonies' },
];

const DroneSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="drones" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={droneHero}
          alt="Drone Photography"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
                <Camera className="w-4 h-4" />
                Aerial Excellence
              </span>
              <h2 className="section-title">
                <span className="text-gradient">Mr Tech</span>
                <br />
                <span className="text-foreground">Drone Force</span>
              </h2>
              <p className="section-subtitle">
                Professional drone videography and photography services that capture moments from perspectives 
                that were once impossible. Elevate your visuals with cinematic aerial content.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="glass-card-hover p-4 flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Drone Services
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card">
              <img
                src={droneHero}
                alt="Drone Videography Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-heading font-bold text-2xl text-primary">Affordable</p>
                    <p className="text-xs text-muted-foreground">prices</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-2xl text-secondary">4K</p>
                    <p className="text-xs text-muted-foreground">DJI Flip</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-2xl text-primary">24/7</p>
                    <p className="text-xs text-muted-foreground">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card px-4 py-3 flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Camera className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Pro Equipment</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DroneSection;
