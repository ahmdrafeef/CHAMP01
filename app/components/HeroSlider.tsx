'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20premium%20sneakers%20collection%20display%2C%20high-end%20athletic%20shoes%20arranged%20elegantly%2C%20premium%20footwear%20showcase%20with%20dramatic%20lighting%2C%20modern%20minimalist%20background%2C%20professional%20product%20photography%2C%20sophisticated%20styling%2C%20clean%20composition%2C%20premium%20brand%20aesthetic%2C%20exclusive%20sneaker%20collection&width=375&height=203&seq=hero1&orientation=landscape',
      title: 'Premium Collection',
      subtitle: 'Discover luxury sneakers'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=Exclusive%20limited%20edition%20sneakers%2C%20rare%20collectible%20athletic%20shoes%2C%20premium%20designer%20footwear%20display%2C%20luxury%20brand%20showcase%2C%20high-quality%20materials%2C%20sophisticated%20presentation%2C%20elegant%20styling%2C%20modern%20minimalist%20background%2C%20professional%20photography&width=375&height=203&seq=hero2&orientation=landscape',
      title: 'Limited Edition',
      subtitle: 'Exclusive rare finds'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=Authentic%20premium%20sneakers%20verification%2C%20genuine%20luxury%20athletic%20shoes%2C%20quality%20assurance%20display%2C%20certified%20authentic%20footwear%2C%20trust%20and%20reliability%20showcase%2C%20professional%20verification%20process%2C%20premium%20brand%20guarantee%2C%20sophisticated%20presentation&width=375&height=203&seq=hero3&orientation=landscape',
      title: 'Authentic Guarantee',
      subtitle: '100% verified genuine'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-52 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-4 text-white">
              <h2 className="text-xl font-bold mb-1">{slide.title}</h2>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}