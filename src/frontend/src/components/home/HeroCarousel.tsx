import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Reordered slides with 5th position removed and new image-14 appended at end
const carouselSlides = [
  {
    src: '/assets/image-2.png',
    alt: 'Automation technology',
  },
  {
    src: '/assets/image-6.png',
    alt: 'Industrial solutions',
  },
  {
    src: '/assets/image-4.png',
    alt: 'Control panel systems',
  },
  {
    src: '/assets/image-5.png',
    alt: 'Manufacturing automation',
  },
  {
    src: '/assets/image.png',
    alt: 'Industrial automation solutions',
  },
  {
    src: '/assets/image-3.png',
    alt: 'Industrial equipment',
  },
  {
    src: '/assets/generated/hero-slide-image-14.dim_1600x700.png',
    alt: 'Industrial control engineering',
  },
];

export default function HeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = carouselSlides.length;

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setTranslateX(0);
  }, []);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTranslateX(0);
  }, [totalSlides]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTranslateX(0);
  }, [totalSlides]);

  // Autoplay functionality
  useEffect(() => {
    if (prefersReducedMotion || isDragging) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [prefersReducedMotion, isDragging, nextSlide]);

  // Mouse/Touch drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // Minimum drag distance to trigger slide change
    if (translateX > threshold) {
      prevSlide();
    } else if (translateX < -threshold) {
      nextSlide();
    } else {
      setTranslateX(0);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div className="hero-slideshow-container">
      <div
        ref={containerRef}
        className="hero-slideshow-viewport"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="hero-slideshow-track"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
            transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {carouselSlides.map((slide, index) => (
            <div key={index} className="hero-slideshow-slide">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover select-none"
                draggable={false}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Dots - Below slideshow */}
      <div className="hero-slideshow-nav">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-slideshow-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          >
            <span className="hero-slideshow-dot-inner" />
          </button>
        ))}
      </div>
    </div>
  );
}
