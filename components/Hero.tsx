import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
    onNavigate: (page: string) => void;
}

interface Slide {
    id: number;
    image: string;
    title: React.ReactNode;
    subtitle: string;
    cta: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: <>SMARTER <br /> WAREHOUSING <br /> SOLUTIONS</>,
        subtitle: "We deliver secure and scalable warehouse services designed to protect inventory, improve efficiency, and simplify supply chain management.",
        cta: "Track Shipment"
    },
    {
        id: 2,
        // Updated image to a reliable Container Ship image
        image: "https://images.unsplash.com/photo-1495112398151-7eedd7c2e7e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: <>GLOBAL <br /> FREIGHT <br /> FORWARDING</>,
        subtitle: "Connect your business to the world with our reliable air, sea, and land freight solutions. We ensure your cargo reaches its destination safely.",
        cta: "Our Services"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
        title: <>FAST & <br /> RELIABLE <br /> DELIVERY</>,
        subtitle: "Experience lightning-fast delivery times with our optimized logistics network. Real-time tracking keeps you informed every step of the way.",
        cta: "Get a Quote"
    }
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
        handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black group">
      
      {/* Slider Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
            <div 
                key={slide.id}
                className="min-w-full h-full relative"
            >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                    backgroundImage: `url("${slide.image}")`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-3xl pt-20 animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            {slide.title}
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed border-l-4 border-brand-orange pl-6 bg-black/20 p-4 backdrop-blur-sm rounded-r-lg">
                            {slide.subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => onNavigate('track')}
                                className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50 flex items-center justify-center gap-2 group/btn"
                            >
                            {slide.cta}
                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            {slide.id !== 1 && (
                                <button 
                                    onClick={() => onNavigate('service')}
                                    className="border border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-colors"
                                >
                                    Learn More
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-4 md:right-8 z-20 flex items-center gap-6">
           {/* Dots */}
           <div className="flex gap-2 mr-4">
               {slides.map((_, idx) => (
                   <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-brand-orange w-8' : 'bg-white/50 w-2 hover:bg-white hover:w-4'}`}
                   />
               ))}
           </div>

           <div className="flex gap-4">
                <button 
                    onClick={handlePrev}
                    className="p-3 border border-white/20 rounded-full text-white hover:bg-brand-orange hover:border-brand-orange transition-colors group/nav backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={handleNext}
                    className="p-3 border border-white/20 rounded-full text-white hover:bg-brand-orange hover:border-brand-orange transition-colors group/nav backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-1 transition-transform" />
                </button>
           </div>
      </div>
    </div>
  );
};