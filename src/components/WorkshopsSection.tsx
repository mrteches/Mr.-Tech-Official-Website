import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { School, Rocket, Users, Smile, ArrowRight } from 'lucide-react';
import workshop1 from '@/assets/img1.png';
import workshop2 from '@/assets/img2.png';
import workshop3 from '@/assets/img3.png';
import workshop4 from '@/assets/img4.png';
import workshop5 from '@/assets/img5.png';

const workshopImages = [workshop1, workshop2, workshop3, workshop4, workshop5];

const benefits = [
  { icon: School, title: 'Free for Institutions', desc: 'No cost for schools and private institutes' },
  { icon: Rocket, title: 'Real STEM Toys', desc: 'Students learn with actual STEM products' },
  { icon: Users, title: 'Interactive Sessions', desc: 'Hands-on assembly and experimentation' },
  { icon: Smile, title: 'Fun Learning', desc: 'Ends with playtime and memorable experiences' },
];

const WorkshopsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="workshop" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            <School className="w-4 h-4" />
            Free for Schools
          </span>
          <h2 className="section-title">
            <span className="text-foreground">STEM </span>
            <span className="text-gradient">Workshops</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Bring innovation to your school! Mr. Tech visits institutions with STEM toys, 
            giving students hands-on exposure to science, engineering, and creativity at no cost.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-2xl text-foreground">
              What Students Experience
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="glass-card-hover p-5 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
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
              Request a STEM Workshop
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            className="grid grid-cols-6 grid-rows-4 gap-3 h-[400px]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="col-span-4 row-span-2 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <img src={workshopImages[0]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <img src={workshopImages[1]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <img src={workshopImages[2]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <img src={workshopImages[3]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <img src={workshopImages[4]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Marketing Message */}
        <motion.div
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Give Your Students the Gift of Innovation
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our free STEM workshops bring cutting-edge educational experiences directly to your institution. 
            Students learn the science behind each toy, assemble them with their own hands, and develop 
            engineering thinking that will serve them for life.
          </p>
          <motion.a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Workshop Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
