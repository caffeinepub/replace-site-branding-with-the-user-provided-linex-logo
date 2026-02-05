import { useState } from 'react';
import { useSeo } from '@/hooks/useSeo';
import { services } from '@/content/services';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceDetailPanel from '@/components/services/ServiceDetailPanel';
import ServicesFilterBar from '@/components/services/ServicesFilterBar';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import type { Service } from '@/content/services';

export default function SolutionsPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useSeo({
    title: 'Solutions - Linex Automations',
    description:
      'Explore our comprehensive range of industrial automation solutions including PLC, HMI, SCADA, Servos, VFD, Control Panels, and Energy Management Systems.',
  });

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-br from-background to-muted/20 py-16 md:py-20">
        <div className="container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Our Solutions
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprehensive industrial automation technologies designed to optimize your
                operations and drive efficiency.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <ServicesFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 0.05}>
                <ServiceCard
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              </RevealOnScroll>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">
                No solutions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <ServiceDetailPanel
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
