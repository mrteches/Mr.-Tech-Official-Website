import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { ImageIcon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import workshop1 from '@/assets/img6.jpg';
import workshop2 from '@/assets/gallery1.png';
import workshop3 from '@/assets/img11.jpg';
import workshop4 from '@/assets/gallery2.png';
import workshop5 from '@/assets/gallery4.png';
import stemToy1 from '@/assets/class2.jpg';
import rankingsy from '@/assets/rankingsy1.jpg';
import alclass from '@/assets/img12.jpg';

const galleryItems = [
  
  { image: alclass, title: 'A/L Class', category: 'Classes' },
  { image: workshop2, title: '3D Designing', category: 'Labs' },
  { image: stemToy1, title: 'A/L Class', category: 'Classes' },
  { image: workshop3, title: 'Science Lab Session', category: 'Classes' },
  { image: rankingsy, title: 'RanKINGsy', category: 'Events' },
  { image: workshop4, title: '3D Printing Lab', category: 'Labs' },
  { image: workshop5, title: 'Soccer Battle', category: 'Events' },
  { image: workshop1, title: 'SPM Robot', category: 'Sponsorship' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            <ImageIcon className="w-4 h-4" />
            Visual Journey
          </span>
          <h2 className="section-title">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore moments from our classes, labs, workshops, and events.
          </p>
        </motion.div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-muted-foreground',
              bulletActiveClass: '!bg-primary !w-6 transition-all',
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index} className="!w-[320px] md:!w-[400px]">
                <motion.div
                  className="glass-card-hover overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-semibold text-lg text-foreground">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
