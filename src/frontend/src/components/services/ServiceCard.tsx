import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/content/services';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-industrial-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      aria-label={`View details for ${service.title}`}
    >
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-industrial-accent/10 transition-colors group-hover:bg-industrial-accent/20">
          <service.icon className="h-8 w-8 text-industrial-accent" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm font-medium text-industrial-accent transition-transform group-hover:translate-x-1">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}
