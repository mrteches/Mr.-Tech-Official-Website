import PopupModal from '@/components/PopupModal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import STEMSection from '@/components/STEMSection';
import CoursesSection from '@/components/CoursesSection';
import DroneSection from '@/components/DroneSection';
import WorkshopsSection from '@/components/WorkshopsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PopupModal />
      <Navbar />
      <HeroSection />
      <STEMSection />
      <CoursesSection />
      <DroneSection />
      <WorkshopsSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
