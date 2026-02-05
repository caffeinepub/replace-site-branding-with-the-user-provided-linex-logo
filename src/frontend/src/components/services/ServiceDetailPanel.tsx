import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { CheckCircle2 } from 'lucide-react';
import type { Service } from '@/content/services';

interface ServiceDetailPanelProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailPanel({ service, onClose }: ServiceDetailPanelProps) {
  if (!service) return null;

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-industrial-accent/10">
            <service.icon className="h-8 w-8 text-industrial-accent" />
          </div>
          <DialogTitle className="text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="text-base">{service.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Overview</h3>
            <p className="text-muted-foreground">{service.detailedDescription}</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Key Features</h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Applications</h3>
            <ul className="space-y-2">
              {service.applications.map((application, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{application}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/contact" onClick={onClose}>
                Request Information
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
