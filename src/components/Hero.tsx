import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Flame } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://malia31.pythonanywhere.com/media/images/iphone16-2.png'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/S25-Ultra-Banner1.jpg'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/BANNER-TV.jpg'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/Galaxy-s25.jpg'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/SAM-TAB8.jpeg'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/BANNER-REALME.jpg'
  },
  {
    image: 'https://malia31.pythonanywhere.com/media/images/BANNER-VIVO.jpg'
  },
  {
    image: 'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'New Release',
    title: 'iPhone 15 Pro Max',
    subtitle: 'Experience the power of A17 Pro chip',
    description: 'Revolutionary camera system with 5x optical zoom',
    cta: 'Shop Now',
    link: '/category/smartphones',
    gradient: 'from-blue-900/80 to-transparent'
  },
  {
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Best Seller',
    title: 'Samsung Galaxy S24 Ultra',
    subtitle: 'AI at your fingertips',
    description: 'Discover the next level of smartphone innovation',
    cta: 'Learn More',
    link: '/product/2',
    gradient: 'from-purple-900/80 to-transparent'
  },
  {
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tag: 'Special Offer',
    title: 'Limited Time Deal',
    subtitle: 'Save up to 30% on selected items',
    description: 'Exclusive discounts on premium smartphones',
    cta: 'View Deals',
    link: '/view-all/promos',
    gradient: 'from-orange-900/80 to-transparent'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };
  

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-[500px] md:h-[550px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          </div>

          {/* Animated Content */}
          {index === currentSlide && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative h-full"
              >
                <div className="container-custom h-full flex items-center">
                  <div className="max-w-xl space-y-5">
                    {/* Tag */}
                    {slide.tag && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-2"
                      >
                        <Flame className="h-4 w-4 text-orange-400 mr-1.5" />
                        <span className="text-xs font-medium text-white">{slide.tag}</span>
                      </motion.div>
                    )}

                    {/* Titles */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <h2 className="text-sm md:text-base font-medium text-primary-200">
                        {slide.subtitle}
                      </h2>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="text-sm md:text-base text-gray-200 max-w-md"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Button */}
                    {slide.cta && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="pt-3"
                      >
                        <a
                          href={slide.link}
                          className="inline-flex items-center btn bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 text-sm md:text-base font-medium rounded-full transition-transform hover:scale-105"
                        >
                          {slide.cta}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
