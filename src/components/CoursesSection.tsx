import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  Cog, 
  Zap, 
  Bot, 
  CircuitBoard, 
  Wifi,
  Wrench,
  Factory,
  Layers,
  Printer,
  Code,
  Gift,
  Video,
  Award,
  GraduationCap,
  ArrowRight,
  Baby
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'STEM Course for Kids',
    level: 'Level 01',
    description: 'Fun, interactive learning with real STEM toys delivered home!',
    features: [
      { icon: Layers, text: '3D designing' },
      { icon: Printer, text: '3D printing basics' },
      { icon: Code, text: 'Scratch programming' },
      { icon: Bot, text: 'STEM toy development' },
      { icon: Gift, text: 'Free STEM toy delivered home' },
      { icon: Video, text: 'Online via Zoom' },
    ],
    color: 'accent',
    gradient: 'from-accent to-primary',
    badges: [
      { icon: Baby, text: 'Age 10 - 14' },
      { icon: Award, text: 'Certificate Included' },
      { icon: GraduationCap, text: 'Annual "Rankingzy" Ceremony' },
    ],
  },
  {
    id: 2,
    title: 'Robotics and Mechatronics',
    level: 'Level 02',
    description: 'Build your foundation in modern robotics and automation',
    features: [
      { icon: Zap, text: 'Core electronics fundamentals' },
      { icon: Cpu, text: 'Arduino programming' },
      { icon: Cog, text: 'Motor control' },
      { icon: Bot, text: 'Robotics basics' },
      { icon: CircuitBoard, text: 'PCB design concepts' },
      { icon: Wifi, text: 'Introduction to IoT' },
    ],
    color: 'primary',
    gradient: 'from-primary to-secondary',
    badges: [
      { icon: Baby, text: 'Age 11 - 16' },
      { icon: Award, text: 'Certificate Included' },
      { icon: GraduationCap, text: 'Annual "Rankingzy" Ceremony' },
    ],
  },
  {
    id: 3,
    title: 'Advanced Robotics and Mechatronics',
    level: 'Level 03',
    description: 'Advance to industrial-grade automation and robotics',
    features: [
      { icon: Wrench, text: 'Pneumatics and hydraulics' },
      { icon: Bot, text: 'Robotics automation concepts' },
      { icon: Factory, text: 'Industrial Prototype Projects' },
      { icon: Cog, text: 'Real-world engineering cases' },
    ],
    color: 'secondary',
    gradient: 'from-secondary to-primary',
    badges: [
      { icon: Baby, text: 'Age 15 - 21' },
      { icon: Award, text: 'Certificate Included' },
      { icon: GraduationCap, text: 'Annual "Rankingzy" Ceremony' },
    ],
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="courses" className="pt-12 pb-12 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            <GraduationCap className="w-4 h-4" />
            Learn. Build. Innovate.
          </span>
          <h2 className="section-title">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From beginner to advanced, our courses are designed to transform curious minds into skilled engineers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="glass-card-hover p-1 h-full"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${course.gradient}`} />
              
              <div className="p-6 space-y-6">
                {/* Title Section */}
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {course.level}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {course.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {course.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 + fIndex * 0.05 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Badges for Kids Course */}
                {course.badges && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {course.badges.map((badge, bIndex) => (
                      <div
                        key={bIndex}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20"
                      >
                        <badge.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-primary">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <motion.button
                  className="w-full btn-primary text-sm py-3 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
