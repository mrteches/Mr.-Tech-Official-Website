import { motion } from "framer-motion";
import {
  Play,
  MapPin,
  Monitor,
  Calendar,
  ArrowRight,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import teacherPhoto from "@/assets/teacher-photo.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Technology Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Now Enrolling for 2026 O/L
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="section-title">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">O/L Classes</span>
              </h1>
              <p className="text-2xl md:text-3xl font-heading font-medium bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Science | Maths | ICT
              </p>
              <br />
              <h1 className="section-title">
                <span className="text-gradient">A/L Classes</span>
              </h1>
              <p className="text-2xl md:text-3xl font-heading font-medium text-primary/80">
                ICT | SFT | ET
              </p>
              <p className="section-subtitle">
                Practical. Activity-Based. Future-Focused.
              </p>
            </motion.div>

            {/* Teacher Info */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <img
                src={teacherPhoto}
                alt="Mahesh Ranawaka"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-primary/30"
              />
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Mahesh Ranawaka
                </h3>
                <p className="text-muted-foreground text-sm">
                  Founder Mr. Tech | Engineering Technology (ET) UOC
                </p>
              </div>
            </motion.div>

            {/* Location Cards */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="glass-card p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm">
                    Physical Classes
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Gravity Edu, Delkanda, Nugegoda
                </p>
              </div>
              <div className="glass-card p-4 space-y-2">
                <div className="flex items-center gap-2 text-secondary">
                  <Monitor className="w-5 h-5" />
                  <span className="font-semibold text-sm">Online Classes</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Zoom - Available island-wide
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <div className="video-container aspect-video relative group">
                <iframe
                  src="https://www.youtube.com/embed/NmcgTuTxeSk?si=vtvXo6S_oNuNKfQE"
                  title="Mr. Tech Promotional Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
                    <Play className="w-10 h-10 text-primary fill-primary" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Ongoing Classes */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <div className="glass-card-hover px-4 py-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  2027 A/L - ICT | SFT | ET
                </span>
              </div>
              <div className="glass-card-hover px-4 py-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">
                  2028 A/L - ICT | SFT | ET
                </span>
              </div>
              <div className="glass-card-hover px-4 py-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">
                  2026 O/L - Science | Maths | ICT
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="tel:+94778877200"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact A/L Classes
                <PhoneCall className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+94778877988"
                className="btn-emerald inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact O/L Classes
                <PhoneCall className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
