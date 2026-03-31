import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Service } from "@/content/services";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ExternalLink } from "lucide-react";

interface ServiceDetailPanelProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailPanel({
  service,
  onClose,
}: ServiceDetailPanelProps) {
  if (!service) return null;

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-industrial-accent/10">
            <service.icon className="h-8 w-8 text-industrial-accent" />
          </div>
          <DialogTitle className="text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Key Features</h3>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Applications</h3>
            <ul className="space-y-2">
              {service.applications.map((application) => (
                <li key={application} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{application}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild className="flex-1">
              <Link to="/contact" onClick={onClose}>
                Request Information
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link
                to="/solutions/$id"
                params={{ id: service.id }}
                onClick={onClose}
              >
                View Full Page
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
