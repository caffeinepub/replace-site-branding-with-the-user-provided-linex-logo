import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/content/services';
import { useSeo } from '@/hooks/useSeo';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import HeroCarousel from '@/components/home/HeroCarousel';
import OurExpertiesBanner from '@/components/home/OurExpertiesBanner';
import BrandsBanner from '@/components/home/BrandsBanner';

export default function HomePage() {
  useSeo({
    title: 'Linex Automations - Industrial Automation Solutions',
    description:
      'Leading provider of PLC, HMI, SCADA, Servos, VFD, Control Panels, and Energy Management Systems for industrial automation.',
  });

  const words = ['Planning', 'Precision', 'Performance'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTimeout(() => {}, pauseAfterDeleting);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container relative">
          <div className="grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Industrial Automation
                  <span className="block text-industrial-accent">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Comprehensive solutions for modern industrial operations.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link to="/solutions">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border/50 bg-muted shadow-2xl">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Comprehensive automation technologies designed to optimize your industrial
                processes and enhance operational efficiency.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 0.1} className="h-full">
                <ServiceCard service={service} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.4}>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Experties Banner */}
      <OurExpertiesBanner />

      {/* Brands Banner */}
      <BrandsBanner />
    </div>
  );
}
