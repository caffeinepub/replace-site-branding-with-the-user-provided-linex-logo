import {
  ShoppingCart,
  Car,
  Layers,
  CircleDot,
  Hammer,
  Droplet,
  FlaskConical,
  FileText,
} from 'lucide-react';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

export default function OurExpertiesBanner() {
  const industries = [
    { name: 'FMCG', icon: ShoppingCart },
    { name: 'Automobiles', icon: Car },
    { name: 'Plywood/MDF', icon: Layers },
    { name: 'Tyre Plant', icon: CircleDot },
    { name: 'Steel', icon: Hammer },
    { name: 'Sugar', icon: Droplet },
    { name: 'Chemical', icon: FlaskConical },
    { name: 'Paper', icon: FileText },
  ];

  return (
    <section className="border-t border-border/40 bg-muted/30 py-12 md:py-16">
      <div className="container">
        <RevealOnScroll>
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Our Experties
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <RevealOnScroll key={industry.name} delay={index * 0.1}>
                <div className="flex flex-col items-center gap-3 rounded-lg border border-border/50 bg-background p-6 text-center shadow-sm transition-all hover:border-industrial-accent/50 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-industrial-accent/10">
                    <Icon
                      className="h-6 w-6 text-industrial-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-semibold leading-tight text-foreground">
                    {industry.name}
                  </span>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
