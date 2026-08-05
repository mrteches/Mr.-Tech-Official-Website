import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, Sparkles, Brain, Lightbulb, Puzzle, ArrowRight } from 'lucide-react';
import stemToy1 from '@/assets/stem-toy-1.png';
import stemToy2 from '@/assets/stem-toy-2.png';
import stemToy3 from '@/assets/stem-toy-3.png';
import stemToy4 from '@/assets/stem-toy-4.png';
import workshop1 from '@/assets/img1.png';
import workshop2 from '@/assets/workshop-2.png';
import workshop3 from '@/assets/workshop-3.png';
import workshop4 from '@/assets/workshop-4.png';
import workshop5 from '@/assets/workshop-5.png';

const products = [
  {
    id: 1,
    name: 'Buzz Wire Game',
    image: stemToy1,
    ageRange: '8+ years',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Air Boat Kit',
    image: stemToy2,
    ageRange: '10+ years',
    category: 'Renewable Energy',
  },
  {
    id: 3,
    name: 'Infrared Laser Line Kit',
    image: stemToy3,
    ageRange: '12+ years',
    category: 'Electronics',
  },
];

const workshopImages = [workshop1, workshop2, workshop3, workshop4, workshop5];

const benefits = [
  { icon: Brain, title: 'Brain Development', desc: 'Stimulates cognitive growth through play' },
  { icon: Lightbulb, title: 'Creative Thinking', desc: 'Encourages innovation and problem-solving' },
  { icon: Puzzle, title: 'Hands-On Learning', desc: 'Learn science naturally, not by memorization' },
  { icon: Sparkles, title: 'Activity-Based', desc: 'Practical experience with real materials' },
];

const STEMSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="stem" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              Innovation Through Play
            </span>
            <h2 className="section-title">
              <span className="text-foreground">STEM Toy </span>
              <span className="text-gradient">Production</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Mr. Tech designs, develops, manufactures, and sells STEM toys that transform how children learn science. 
              Our toys promote activity-based learning, scientific thinking, problem-solving, and creativity from early childhood.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card-hover p-6 text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-heading font-bold text-center text-foreground">
              Featured Products
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="glass-card-hover card-shine overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="aspect-square relative overflow-hidden bg-muted/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-heading font-semibold text-foreground">{product.name}</h4>
                    <p className="text-muted-foreground text-sm">Age: {product.ageRange}</p>
                    <motion.button
                      className="w-full btn-secondary text-sm py-3 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="#store"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit STEM Toy Store
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default STEMSection;
