import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const promoImages = [
  "https://malia31.pythonanywhere.com/media/images/PROMO-ITEL.jpeg",
  "https://malia31.pythonanywhere.com/media/images/PROMO-OPPO.jpeg",
  "https://malia31.pythonanywhere.com/media/images/PROMO-2.jpeg",
  // Add more URLs if needed
];

const DiscountPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promoImage, setPromoImage] = useState<string | null>(null);

  useEffect(() => {
    // Randomly pick an image on mount
    const randomImage = promoImages[Math.floor(Math.random() * promoImages.length)];
    setPromoImage(randomImage);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen || !promoImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full animate-fade-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="mb-2 overflow-hidden rounded-lg">
            <img
              src={promoImage}
              alt="Special Discount"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
