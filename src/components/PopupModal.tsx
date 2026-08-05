import { useState, useEffect } from 'react';
import { X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import popupImg from '@/assets/ol_popup.jpeg';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup once every 2 reloads
    const countStr = sessionStorage.getItem('popupReloadCount');
    const reloadCount = countStr ? parseInt(countStr, 10) : 0;

    if (reloadCount % 2 === 0) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      
      // Increment and save for next time
      sessionStorage.setItem('popupReloadCount', (reloadCount + 1).toString());
      
      return () => clearTimeout(timer);
    } else {
      // Just increment and save for next time
      sessionStorage.setItem('popupReloadCount', (reloadCount + 1).toString());
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-auto max-w-[95vw] sm:max-w-[80vw] md:max-w-2xl bg-card rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-border flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Wrapper */}
            <div className="relative flex justify-center bg-black/5 overflow-hidden min-h-0">
              <img
                src={popupImg}
                alt="Special Announcement"
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Action Bar */}
            <div className="p-5 flex-shrink-0 bg-card border-t border-border flex flex-col items-center">
              <a
                href="tel:0778877988"
                onClick={() => setIsOpen(false)}
                className="btn-emerald inline-flex items-center gap-2 w-full justify-center text-lg py-3 shadow-lg"
              >
                Contact Now
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
